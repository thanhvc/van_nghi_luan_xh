// app.js - Trợ Lý Văn 9 - Hành Trình Chinh Phục Nghị Luận Xã Hội Lớp 9

// State Management
const STATE = {
  currentTab: 'level1',
  level1Id: 1,
  level2Id: 1,
  level3Id: 1,
  level4Id: 1,
  level5Id: 1,
  level6Id: 1,
  level1Answers: {}, // current slot inputs for active question: { blank_1: "val" }
  level1Completed: [], // array of IDs
  level2Completed: [], // array of IDs
  level3Completed: [], // array of IDs
  level4Completed: [], // array of IDs
  level5Completed: [], // array of IDs
  level6Completed: [], // array of IDs
  mindmapCompleted: [], // array of Mindmap IDs
  mindmapId: 1,
  filterMindmap: 'all',
  mindmapCurrentBranch: 'explain',
  mindmapSlots: {}, // { [itemId]: { explain: [], reason: [], evidence: [], counter: [], lesson: [] } }
  mmSearchQuery: '',
  portfolio: [], // saved writing exercises: [{ id, topic, type, text, date, score }]
  xp: 0,
  streak: 1,
  lastPracticeDate: null,
  activeSlotKey: null,
  dailyHistory: {}, // { "2026-09-20": { dateKey, displayDate, totalExercises, totalXp, levelCounts, levelXp, activities: [] } }
  journeyExpandedDays: {}, // { [dateKey]: boolean }

  // Exam Simulator Timer State
  timerInterval: null,
  timerSecondsRemaining: 20 * 60,
  timerRunning: false,
  
  // Filters
  filterL1: 'all',
  filterL2: 'all',
  filterL3: 'all',
  filterL4: 'all',
  filterL5: 'all',
  filterL6: 'all',
  statusFilter: 'all',
  searchQuery: ''
};

// LocalStorage Keys
const STORAGE_KEY = 'van9_nlxh_data_v1';

function saveState() {
  try {
    const dataToSave = {
      level1Completed: STATE.level1Completed,
      level2Completed: STATE.level2Completed,
      level3Completed: STATE.level3Completed,
      level4Completed: STATE.level4Completed,
      level5Completed: STATE.level5Completed,
      level6Completed: STATE.level6Completed,
      mindmapCompleted: STATE.mindmapCompleted,
      portfolio: STATE.portfolio,
      dailyHistory: STATE.dailyHistory,
      xp: STATE.xp,
      streak: STATE.streak,
      lastPracticeDate: STATE.lastPracticeDate
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (e) {
    console.warn("Could not save to localStorage:", e);
  }
  updateStatsHeader();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      STATE.level1Completed = parsed.level1Completed || [];
      STATE.level2Completed = parsed.level2Completed || [];
      STATE.level3Completed = parsed.level3Completed || [];
      STATE.level4Completed = parsed.level4Completed || [];
      STATE.level5Completed = parsed.level5Completed || [];
      STATE.level6Completed = parsed.level6Completed || [];
      STATE.mindmapCompleted = parsed.mindmapCompleted || [];
      STATE.portfolio = parsed.portfolio || [];
      STATE.dailyHistory = parsed.dailyHistory || {};
      STATE.xp = parsed.xp || 0;
      STATE.streak = parsed.streak || 1;
      STATE.lastPracticeDate = parsed.lastPracticeDate || null;
    }

    
    // Check streak
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    if (STATE.lastPracticeDate && STATE.lastPracticeDate !== today) {
      const last = new Date(STATE.lastPracticeDate);
      const todayDate = new Date(today);
      const diffDays = Math.round((todayDate - last) / (1000 * 60 * 60 * 24));
      if (diffDays > 1) {
        STATE.streak = 1; // reset streak if missed a day
      }
    }
  } catch (e) {
    console.error("Failed to load local storage:", e);
  }
}

// Audio Synthesizer (Web Audio API)
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playSuccessSound() {
  try {
    const ctx = getAudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);
      gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.09 + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.09);
      osc.stop(ctx.currentTime + idx * 0.09 + 0.35);
    });
  } catch (e) {}
}

function playHintSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(340, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {}
}

// Confetti System
function fireConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const colors = ['#2563eb', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#38bdf8'];
  
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 14,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      life: 1
    });
  }
  
  let animationId;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vRot;
      p.life -= 0.016;
      if (p.life > 0) {
        active = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });
    if (active) {
      animationId = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
    }
  }
  update();
}

// ----------------------------------------------------
// DAILY JOURNEY ACTIVITY TRACKER (localStorage)
// ----------------------------------------------------
function recordExerciseActivity(level, itemId, topic, xpEarned) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateKey = `${year}-${month}-${day}`;
  
  const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
  const dayOfWeekName = daysOfWeek[now.getDay()];
  const displayDate = `${dayOfWeekName}, ngày ${day}/${month}/${year}`;
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  if (!STATE.dailyHistory) {
    STATE.dailyHistory = {};
  }
  
  if (!STATE.dailyHistory[dateKey]) {
    STATE.dailyHistory[dateKey] = {
      dateKey: dateKey,
      displayDate: displayDate,
      totalExercises: 0,
      totalXp: 0,
      levelCounts: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
      levelXp: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
      activities: []
    };
  }
  
  const dayRecord = STATE.dailyHistory[dateKey];
  dayRecord.totalExercises += 1;
  dayRecord.totalXp += xpEarned;
  dayRecord.levelCounts[level] = (dayRecord.levelCounts[level] || 0) + 1;
  dayRecord.levelXp[level] = (dayRecord.levelXp[level] || 0) + xpEarned;
  
  dayRecord.activities.unshift({
    time: timeStr,
    level: level,
    itemId: itemId,
    topic: topic,
    xpEarned: xpEarned
  });
  
  // Update streak if practicing on a new day
  if (STATE.lastPracticeDate && STATE.lastPracticeDate !== dateKey) {
    const last = new Date(STATE.lastPracticeDate);
    const curr = new Date(dateKey);
    const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      STATE.streak += 1;
    } else if (diffDays > 1) {
      STATE.streak = 1;
    }
  }
  STATE.lastPracticeDate = dateKey;
}

function ensureInitialHistoryBaseline() {
  if (!STATE.dailyHistory) STATE.dailyHistory = {};
  const totalCompleted = STATE.level1Completed.length + STATE.level2Completed.length + STATE.level3Completed.length + STATE.level4Completed.length + STATE.level5Completed.length + STATE.level6Completed.length;
  if (Object.keys(STATE.dailyHistory).length === 0 && totalCompleted > 0) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateKey = `${year}-${month}-${day}`;
    const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const displayDate = `${daysOfWeek[now.getDay()]}, ngày ${day}/${month}/${year}`;
    
    STATE.dailyHistory[dateKey] = {
      dateKey: dateKey,
      displayDate: displayDate,
      totalExercises: totalCompleted,
      totalXp: STATE.xp,
      levelCounts: {
        1: STATE.level1Completed.length,
        2: STATE.level2Completed.length,
        3: STATE.level3Completed.length,
        4: STATE.level4Completed.length,
        5: STATE.level5Completed.length,
        6: STATE.level6Completed.length
      },
      levelXp: {
        1: STATE.level1Completed.length * 10,
        2: STATE.level2Completed.length * 20,
        3: STATE.level3Completed.length * 30,
        4: STATE.level4Completed.length * 40,
        5: STATE.level5Completed.length * 50,
        6: STATE.level6Completed.length * 60
      },
      activities: [
        { time: "Khởi tạo", level: 1, itemId: 1, topic: "Luyện tập khởi động các kỹ năng", xpEarned: STATE.xp }
      ]
    };
    saveState();
  }
}

// UI Rendering Functions
function initApp() {
  loadState();
  ensureInitialHistoryBaseline();
  setupEventListeners();
  switchTab('level1');
  updateStatsHeader();
}

function updateStatsHeader() {
  const totalCompleted = STATE.level1Completed.length + STATE.level2Completed.length + STATE.level3Completed.length + STATE.level4Completed.length + STATE.level5Completed.length + STATE.level6Completed.length;
  document.getElementById('stat-total-completed').innerText = totalCompleted;
  document.getElementById('stat-xp').innerText = STATE.xp;
  document.getElementById('stat-streak').innerText = STATE.streak;
  
  const l1Count = STATE.level1Completed.length;
  const l2Count = STATE.level2Completed.length;
  const l3Count = STATE.level3Completed.length;
  const l4Count = STATE.level4Completed.length;
  const l5Count = STATE.level5Completed.length;
  const l6Count = STATE.level6Completed.length;
  
  document.getElementById('tab-l1-count').innerText = `${l1Count}/100`;
  document.getElementById('tab-l2-count').innerText = `${l2Count}/100`;
  const tabL3Elem = document.getElementById('tab-l3-count');
  if (tabL3Elem) tabL3Elem.innerText = `${l3Count}/100`;
  const tabL4Elem = document.getElementById('tab-l4-count');
  if (tabL4Elem) tabL4Elem.innerText = `${l4Count}/100`;
  const tabL5Elem = document.getElementById('tab-l5-count');
  if (tabL5Elem) tabL5Elem.innerText = `${l5Count}/100`;
  const tabL6Elem = document.getElementById('tab-l6-count');
  if (tabL6Elem) tabL6Elem.innerText = `${l6Count}/100`;
  const tabMindmapElem = document.getElementById('tab-mindmap-count');
  if (tabMindmapElem) {
    const mmCount = STATE.mindmapCompleted.length;
    const totalMm = typeof MINDMAP_DATA !== 'undefined' ? MINDMAP_DATA.length : 34;
    tabMindmapElem.innerText = `${mmCount}/${totalMm}`;
  }
  const tabJourneyElem = document.getElementById('tab-journey-count');
  if (tabJourneyElem) {
    const daysCount = Object.keys(STATE.dailyHistory || {}).length;
    tabJourneyElem.innerText = `${daysCount} ngày`;
  }
  document.getElementById('tab-notebook-count').innerText = `${STATE.portfolio.length}`;

  // Progress bar
  const totalTarget = 600;
  const pct = Math.min(Math.round((totalCompleted / totalTarget) * 100), 100);
  const fillElem = document.getElementById('progress-fill');
  const textElem = document.getElementById('progress-text');
  if (fillElem && textElem) {
    fillElem.style.width = `${pct}%`;
    textElem.innerText = `Đã hoàn thành ${totalCompleted}/${totalTarget} bài tập (${pct}%) – Cố lên bạn ơi!`;
  }
}

function switchTab(tab) {
  STATE.currentTab = tab;
  closeExerciseDrawer();
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  
  document.getElementById('view-level1').style.display = tab === 'level1' ? 'block' : 'none';
  document.getElementById('view-level2').style.display = tab === 'level2' ? 'block' : 'none';
  const viewL3 = document.getElementById('view-level3');
  if (viewL3) viewL3.style.display = tab === 'level3' ? 'block' : 'none';
  const viewL4 = document.getElementById('view-level4');
  if (viewL4) viewL4.style.display = tab === 'level4' ? 'block' : 'none';
  const viewL5 = document.getElementById('view-level5');
  if (viewL5) viewL5.style.display = tab === 'level5' ? 'block' : 'none';
  const viewL6 = document.getElementById('view-level6');
  if (viewL6) viewL6.style.display = tab === 'level6' ? 'block' : 'none';
  const viewMindmap = document.getElementById('view-mindmap');
  if (viewMindmap) viewMindmap.style.display = tab === 'mindmap' ? 'block' : 'none';
  const viewJourney = document.getElementById('view-journey');
  if (viewJourney) viewJourney.style.display = tab === 'journey' ? 'block' : 'none';
  document.getElementById('view-notebook').style.display = tab === 'notebook' ? 'block' : 'none';
  document.getElementById('view-tips').style.display = tab === 'tips' ? 'block' : 'none';
  
  if (tab === 'level1') {
    renderLevel1Sidebar();
    loadLevel1Exercise(STATE.level1Id);
  } else if (tab === 'level2') {
    renderLevel2Sidebar();
    loadLevel2Exercise(STATE.level2Id);
  } else if (tab === 'level3') {
    renderLevel3Sidebar();
    loadLevel3Exercise(STATE.level3Id);
  } else if (tab === 'level4') {
    renderLevel4Sidebar();
    loadLevel4Exercise(STATE.level4Id);
  } else if (tab === 'level5') {
    renderLevel5Sidebar();
    loadLevel5Exercise(STATE.level5Id);
  } else if (tab === 'level6') {
    renderLevel6Sidebar();
    loadLevel6Exercise(STATE.level6Id);
  } else if (tab === 'mindmap') {
    renderMindmapSidebar();
    loadMindmapExercise(STATE.mindmapId);
  } else if (tab === 'journey') {
    renderJourneyReportView();
  } else if (tab === 'notebook') {
    renderNotebookView();
  }
  syncMobileDrawerBadges();
}


// ----------------------------------------------------
// LEVEL 1 LOGIC: Điền khuyết & Ghép nối
// ----------------------------------------------------
function getFilteredLevel1() {
  return LEVEL1_DATA.filter(item => {
    if (STATE.filterL1 !== 'all' && item.subType !== STATE.filterL1) return false;
    if (STATE.statusFilter === 'completed' && !STATE.level1Completed.includes(item.id)) return false;
    if (STATE.statusFilter === 'uncompleted' && STATE.level1Completed.includes(item.id)) return false;
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase();
      return item.topic.toLowerCase().includes(q) || item.question.toLowerCase().includes(q);
    }
    return true;
  });
}

function renderLevel1Sidebar() {
  const container = document.getElementById('l1-sidebar-list');
  if (!container) return;
  const list = getFilteredLevel1();
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 0.88rem;">Không tìm thấy bài tập phù hợp</div>';
    return;
  }
  
  list.forEach(item => {
    const isCompleted = STATE.level1Completed.includes(item.id);
    const isActive = item.id === STATE.level1Id;
    
    const div = document.createElement('div');
    div.className = `sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        <span class="item-badge">#${item.id}</span>
        <span>${item.topic}</span>
      </div>
      <span class="item-status">${isCompleted ? '✓' : '○'}</span>
    `;
    div.onclick = () => {
      STATE.level1Id = item.id;
      renderLevel1Sidebar();
      loadLevel1Exercise(item.id);
    };
    container.appendChild(div);
  });
}

function loadLevel1Exercise(id) {
  const item = LEVEL1_DATA.find(x => x.id === id);
  if (!item) return;
  STATE.level1Id = id;
  STATE.level1Answers = {};
  STATE.activeSlotKey = item.blankKeys[0]; // default first slot
  
  // Update header info
  document.getElementById('l1-badge-id').innerText = `Bài ${item.id}/100`;
  document.getElementById('l1-badge-type').innerText = item.subType === 'fill_definition' ? 'Định nghĩa khái niệm' : 
                                                        item.subType === 'fill_connectors' ? 'Liên từ lập luận' : 'Ghép Dẫn chứng';
  document.getElementById('l1-badge-category').innerText = item.category;
  document.getElementById('l1-topic-title').innerText = item.topic;
  document.getElementById('l1-question-desc').innerText = item.question;
  syncMobileDrawerBadges();
  
  // Hide feedback box
  const fb = document.getElementById('l1-feedback-box');
  fb.className = 'feedback-box';
  fb.style.display = 'none';

  renderLevel1Board(item);
  renderLevel1Options(item);
}

function renderLevel1Board(item) {
  const board = document.getElementById('l1-fill-board');
  let html = item.template;
  
  // Replace [blank_...] with clickable interactive slots
  item.blankKeys.forEach(key => {
    const val = STATE.level1Answers[key] || '';
    const isSelected = STATE.activeSlotKey === key;
    const isFilled = val !== '';
    const styleClass = `blank-slot ${isFilled ? 'filled' : 'empty'} ${isSelected ? 'active-slot' : ''}`;
    const slotHtml = `<span class="${styleClass}" data-key="${key}" onclick="selectBlankSlot('${key}')">${val || '(Nhấn để điền)'}</span>`;
    html = html.replace(`[${key}]`, slotHtml);
  });
  
  board.innerHTML = html;
}

window.selectBlankSlot = function(key) {
  STATE.activeSlotKey = key;
  const item = LEVEL1_DATA.find(x => x.id === STATE.level1Id);
  renderLevel1Board(item);
};

function renderLevel1Options(item) {
  const container = document.getElementById('l1-options-container');
  container.innerHTML = '';
  
  item.options.forEach(opt => {
    // Check if this option is currently used in any slot
    const isUsed = Object.values(STATE.level1Answers).includes(opt);
    const chip = document.createElement('div');
    chip.className = `chip ${isUsed ? 'used' : ''}`;
    chip.innerText = opt;
    chip.onclick = () => {
      if (isUsed) return;
      placeOptionInSlot(opt, item);
    };
    container.appendChild(chip);
  });
}

function placeOptionInSlot(opt, item) {
  // If active slot is already filled, replace it
  // Otherwise find the first empty slot
  let targetKey = STATE.activeSlotKey;
  if (!targetKey || STATE.level1Answers[targetKey]) {
    targetKey = item.blankKeys.find(k => !STATE.level1Answers[k]) || item.blankKeys[0];
  }
  
  STATE.level1Answers[targetKey] = opt;
  
  // Auto switch to next empty slot
  const nextEmpty = item.blankKeys.find(k => !STATE.level1Answers[k]);
  STATE.activeSlotKey = nextEmpty || targetKey;
  
  renderLevel1Board(item);
  renderLevel1Options(item);
  playChipClick();
}

function playChipClick() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch(e) {}
}

function checkLevel1Answer() {
  const item = LEVEL1_DATA.find(x => x.id === STATE.level1Id);
  if (!item) return;
  
  // Check if all slots filled
  const unfilled = item.blankKeys.filter(k => !STATE.level1Answers[k]);
  if (unfilled.length > 0) {
    alert("Bạn vui lòng điền đầy đủ các vị trí trống trước khi kiểm tra nhé!");
    return;
  }
  
  // Compare with correct
  let allCorrect = true;
  item.blankKeys.forEach(k => {
    const studentVal = STATE.level1Answers[k];
    const correctVal = item.correct[k];
    const slotElem = document.querySelector(`.blank-slot[data-key="${k}"]`);
    
    if (studentVal === correctVal) {
      if (slotElem) {
        slotElem.className = 'blank-slot correct';
      }
    } else {
      allCorrect = false;
      if (slotElem) {
        slotElem.className = 'blank-slot wrong';
      }
    }
  });
  
  const fb = document.getElementById('l1-feedback-box');
  fb.style.display = 'block';
  
  if (allCorrect) {
    fb.className = 'feedback-box show success';
    document.getElementById('l1-feedback-header').innerHTML = '🎉 XUẤT SẮC! CÂU VĂN HOÀN TOÀN CHUẨN XÁC (+10 XP)';
    document.getElementById('l1-feedback-body').innerHTML = item.explanation;
    
    playSuccessSound();
    fireConfetti();
    
    if (!STATE.level1Completed.includes(item.id)) {
      STATE.level1Completed.push(item.id);
      STATE.xp += 10;
      recordExerciseActivity(1, item.id, item.topic, 10);
      saveState();
      renderLevel1Sidebar();
    }
  } else {
    fb.className = 'feedback-box show error';
    document.getElementById('l1-feedback-header').innerHTML = '⚠️ CHƯA CHÍNH XÁC – HÃY THỬ LẠI HOẶC XEM HƯỚNG DẪN DƯỚI ĐÂY';
    document.getElementById('l1-feedback-body').innerHTML = `
      <p style="margin-bottom: 8px;">Một số vị trí từ ngữ chưa thật chuẩn xác logic hoặc chưa tạo sự tương phản phù hợp.</p>
      <p>${item.explanation}</p>
    `;
    playHintSound();
  }
}

function resetLevel1Answer() {
  const item = LEVEL1_DATA.find(x => x.id === STATE.level1Id);
  STATE.level1Answers = {};
  STATE.activeSlotKey = item.blankKeys[0];
  
  const fb = document.getElementById('l1-feedback-box');
  fb.className = 'feedback-box';
  fb.style.display = 'none';
  
  renderLevel1Board(item);
  renderLevel1Options(item);
}

function showLevel1Answer() {
  const item = LEVEL1_DATA.find(x => x.id === STATE.level1Id);
  STATE.level1Answers = { ...item.correct };
  
  renderLevel1Board(item);
  renderLevel1Options(item);
  
  // Highlight slots as correct
  item.blankKeys.forEach(k => {
    const slotElem = document.querySelector(`.blank-slot[data-key="${k}"]`);
    if (slotElem) slotElem.className = 'blank-slot correct';
  });
  
  const fb = document.getElementById('l1-feedback-box');
  fb.className = 'feedback-box show success';
  fb.style.display = 'block';
  document.getElementById('l1-feedback-header').innerHTML = '💡 ĐÁP ÁN CHUẨN CỦA GIÁO VIÊN';
  document.getElementById('l1-feedback-body').innerHTML = item.explanation;
}

function nextLevel1Exercise() {
  const currentIdx = LEVEL1_DATA.findIndex(x => x.id === STATE.level1Id);
  const nextItem = LEVEL1_DATA[currentIdx + 1] || LEVEL1_DATA[0];
  STATE.level1Id = nextItem.id;
  renderLevel1Sidebar();
  loadLevel1Exercise(nextItem.id);
  syncMobileDrawerBadges();
}

function prevLevel1Exercise() {
  const currentIdx = LEVEL1_DATA.findIndex(x => x.id === STATE.level1Id);
  const prevItem = currentIdx > 0 ? LEVEL1_DATA[currentIdx - 1] : LEVEL1_DATA[LEVEL1_DATA.length - 1];
  STATE.level1Id = prevItem.id;
  renderLevel1Sidebar();
  loadLevel1Exercise(prevItem.id);
  syncMobileDrawerBadges();
}

function randomLevel1Exercise() {
  const randIdx = Math.floor(Math.random() * LEVEL1_DATA.length);
  const randItem = LEVEL1_DATA[randIdx];
  STATE.level1Id = randItem.id;
  renderLevel1Sidebar();
  loadLevel1Exercise(randItem.id);
}

// ----------------------------------------------------
// LEVEL 2 LOGIC: Rèn Cơ Bắp Câu Micro-Writing
// ----------------------------------------------------
function getFilteredLevel2() {
  return LEVEL2_DATA.filter(item => {
    if (STATE.filterL2 !== 'all' && item.subType !== STATE.filterL2) return false;
    if (STATE.statusFilter === 'completed' && !STATE.level2Completed.includes(item.id)) return false;
    if (STATE.statusFilter === 'uncompleted' && STATE.level2Completed.includes(item.id)) return false;
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase();
      return item.topic.toLowerCase().includes(q) || item.prompt.toLowerCase().includes(q);
    }
    return true;
  });
}

function renderLevel2Sidebar() {
  const container = document.getElementById('l2-sidebar-list');
  if (!container) return;
  const list = getFilteredLevel2();
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 0.88rem;">Không tìm thấy bài tập phù hợp</div>';
    return;
  }
  
  list.forEach(item => {
    const isCompleted = STATE.level2Completed.includes(item.id);
    const isActive = item.id === STATE.level2Id;
    
    const div = document.createElement('div');
    div.className = `sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        <span class="item-badge">#${item.id}</span>
        <span>${item.topic}</span>
      </div>
      <span class="item-status">${isCompleted ? '✓' : '○'}</span>
    `;
    div.onclick = () => {
      STATE.level2Id = item.id;
      renderLevel2Sidebar();
      loadLevel2Exercise(item.id);
    };
    container.appendChild(div);
  });
}

function loadLevel2Exercise(id) {
  const item = LEVEL2_DATA.find(x => x.id === id);
  if (!item) return;
  STATE.level2Id = id;
  
  // Header badges
  document.getElementById('l2-badge-id').innerText = `Bài ${item.id}/100`;
  document.getElementById('l2-badge-type').innerText = item.category;
  document.getElementById('l2-topic-title').innerText = item.topic;
  document.getElementById('l2-prompt-desc').innerText = item.prompt;
  document.getElementById('l2-formula-hint').innerHTML = `<strong>Công thức gợi ý:</strong> ${item.formula}`;
  syncMobileDrawerBadges();
  
  // Load similar topic hint
  if (item.similarHint) {
    document.getElementById('l2-similar-topic-title').innerText = item.similarHint.similarTopic;
    document.getElementById('l2-similar-sample-text').innerText = `"${item.similarHint.sampleSentence}"`;
    document.getElementById('l2-similar-steps-list').innerHTML = item.similarHint.thinkingSteps.map(s => `<li>${s}</li>`).join('');
    document.getElementById('l2-similar-transfer-prompt').innerText = item.similarHint.transferPrompt;
    document.getElementById('l2-similar-hint-card').style.display = 'none';
    document.getElementById('similar-toggle-icon').innerText = '▼ Mở xem';
  }

  // Clear or load saved writing if any in portfolio
  const existing = STATE.portfolio.find(p => p.id === id && p.level === 2);
  const textarea = document.getElementById('l2-writing-input');
  textarea.value = existing ? existing.text : '';
  updateLevel2WordCount();
  
  // Hide analysis/result box initially
  document.getElementById('l2-result-container').style.display = 'none';
}

window.toggleSimilarHint = function() {
  const card = document.getElementById('l2-similar-hint-card');
  const icon = document.getElementById('similar-toggle-icon');
  if (card.style.display === 'none') {
    card.style.display = 'block';
    icon.innerText = '▲ Thu gọn';
  } else {
    card.style.display = 'none';
    icon.innerText = '▼ Mở xem';
  }
};

function updateLevel2WordCount() {

  const text = document.getElementById('l2-writing-input').value.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const charCount = text.length;
  document.getElementById('l2-count-display').innerText = `${wordCount} từ | ${charCount} ký tự`;
}

function evaluateLevel2Writing() {
  const item = LEVEL2_DATA.find(x => x.id === STATE.level2Id);
  const text = document.getElementById('l2-writing-input').value.trim();
  
  if (text.length < 15) {
    alert("Bạn vui lòng viết ít nhất 1 câu hoàn chỉnh (tối thiểu 5 - 10 từ) trước khi nhấn Đánh giá nhé!");
    return;
  }
  
  const resultContainer = document.getElementById('l2-result-container');
  resultContainer.style.display = 'block';
  
  // Keyword matching check
  const matchedKeywords = [];
  item.keywords.forEach(kw => {
    if (text.toLowerCase().includes(kw.toLowerCase())) {
      matchedKeywords.push(kw);
    }
  });
  
  const kwContainer = document.getElementById('l2-keywords-matched');
  if (matchedKeywords.length > 0) {
    kwContainer.innerHTML = matchedKeywords.map(k => `<span class="badge-tag badge-green">✓ ${k}</span>`).join(' ');
  } else {
    kwContainer.innerHTML = `<span class="badge-tag badge-amber">⚠️ Chưa xuất hiện từ khóa gợi ý (${item.keywords.join(', ')})</span>`;
  }
  
  // Model Answer & Analysis
  document.getElementById('l2-sample-text').innerText = item.sampleAnswer;
  document.getElementById('l2-teacher-analysis').innerHTML = item.analysis;
  
  // Rubric Checklist
  const rubricContainer = document.getElementById('l2-rubric-list');
  rubricContainer.innerHTML = item.userRubric.map((r, idx) => `
    <label class="rubric-item">
      <input type="checkbox" checked id="rubric-cb-${idx}">
      <span>${r}</span>
    </label>
  `).join('');
  
  playSuccessSound();
  fireConfetti();
  
  // Save to completed and add XP
  if (!STATE.level2Completed.includes(item.id)) {
    STATE.level2Completed.push(item.id);
    STATE.xp += 20;
    recordExerciseActivity(2, item.id, item.topic, 20);
  }
  
  // Save or update in portfolio
  const existingIdx = STATE.portfolio.findIndex(p => p.id === item.id && p.level === 2);
  const portfolioEntry = {
    id: item.id,
    level: 2,
    topic: item.topic,
    category: item.category,
    text: text,
    sample: item.sampleAnswer,
    date: new Date().toLocaleDateString('vi-VN')
  };
  
  if (existingIdx >= 0) {
    STATE.portfolio[existingIdx] = portfolioEntry;
  } else {
    STATE.portfolio.unshift(portfolioEntry);
  }
  
  saveState();
  renderLevel2Sidebar();
}

function nextLevel2Exercise() {
  const currentIdx = LEVEL2_DATA.findIndex(x => x.id === STATE.level2Id);
  const nextItem = LEVEL2_DATA[currentIdx + 1] || LEVEL2_DATA[0];
  STATE.level2Id = nextItem.id;
  renderLevel2Sidebar();
  loadLevel2Exercise(nextItem.id);
  syncMobileDrawerBadges();
}

function prevLevel2Exercise() {
  const currentIdx = LEVEL2_DATA.findIndex(x => x.id === STATE.level2Id);
  const prevItem = currentIdx > 0 ? LEVEL2_DATA[currentIdx - 1] : LEVEL2_DATA[LEVEL2_DATA.length - 1];
  STATE.level2Id = prevItem.id;
  renderLevel2Sidebar();
  loadLevel2Exercise(prevItem.id);
  syncMobileDrawerBadges();
}

function randomLevel2Exercise() {
  const randIdx = Math.floor(Math.random() * LEVEL2_DATA.length);
  const randItem = LEVEL2_DATA[randIdx];
  STATE.level2Id = randItem.id;
  renderLevel2Sidebar();
  loadLevel2Exercise(randItem.id);
}

// ----------------------------------------------------
// LEVEL 3 LOGIC: Viết Khối Vi Mô Module (3 - 4 câu)
// ----------------------------------------------------
function getFilteredLevel3() {
  return LEVEL3_DATA.filter(item => {
    if (STATE.filterL3 !== 'all' && item.subType !== STATE.filterL3) return false;
    if (STATE.statusFilter === 'completed' && !STATE.level3Completed.includes(item.id)) return false;
    if (STATE.statusFilter === 'uncompleted' && STATE.level3Completed.includes(item.id)) return false;
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase();
      return item.topic.toLowerCase().includes(q) || item.prompt.toLowerCase().includes(q);
    }
    return true;
  });
}

function renderLevel3Sidebar() {
  const container = document.getElementById('l3-sidebar-list');
  if (!container) return;
  const list = getFilteredLevel3();
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 0.88rem;">Không tìm thấy bài tập phù hợp</div>';
    return;
  }
  
  list.forEach(item => {
    const isCompleted = STATE.level3Completed.includes(item.id);
    const isActive = item.id === STATE.level3Id;
    
    const div = document.createElement('div');
    div.className = `sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        <span class="item-badge">#${item.id}</span>
        <span>${item.topic}</span>
      </div>
      <span class="item-status">${isCompleted ? '✓' : '○'}</span>
    `;
    div.onclick = () => {
      STATE.level3Id = item.id;
      renderLevel3Sidebar();
      loadLevel3Exercise(item.id);
    };
    container.appendChild(div);
  });
}

function loadLevel3Exercise(id) {
  const item = LEVEL3_DATA.find(x => x.id === id);
  if (!item) return;
  STATE.level3Id = id;
  
  // Header badges
  document.getElementById('l3-badge-id').innerText = `Bài ${item.id}/100`;
  document.getElementById('l3-badge-type').innerText = item.category;
  document.getElementById('l3-badge-target').innerText = item.targetLength;
  document.getElementById('l3-topic-title').innerText = item.topic;
  document.getElementById('l3-prompt-desc').innerText = item.prompt;
  document.getElementById('l3-formula-hint').innerHTML = `<strong>Công thức Lego Module:</strong> ${item.formula}`;
  syncMobileDrawerBadges();
  
  // Load similar hint
  if (item.similarHint) {
    document.getElementById('l3-similar-topic-title').innerText = item.similarHint.similarTopic;
    document.getElementById('l3-similar-sample-text').innerText = `"${item.similarHint.sampleSentence}"`;
    document.getElementById('l3-similar-steps-list').innerHTML = item.similarHint.thinkingSteps.map(s => `<li>${s}</li>`).join('');
    document.getElementById('l3-similar-transfer-prompt').innerText = item.similarHint.transferPrompt;
    document.getElementById('l3-similar-hint-card').style.display = 'none';
    document.getElementById('l3-similar-toggle-icon').innerText = '▼ Mở xem';
  }

  // Clear or load saved writing if any in portfolio
  const existing = STATE.portfolio.find(p => p.id === id && p.level === 3);
  const textarea = document.getElementById('l3-writing-input');
  textarea.value = existing ? existing.text : '';
  updateLevel3WordCount();
  
  // Hide analysis/result box initially
  document.getElementById('l3-result-container').style.display = 'none';
}

window.toggleLevel3SimilarHint = function() {
  const card = document.getElementById('l3-similar-hint-card');
  const icon = document.getElementById('l3-similar-toggle-icon');
  if (card.style.display === 'none') {
    card.style.display = 'block';
    icon.innerText = '▲ Thu gọn';
  } else {
    card.style.display = 'none';
    icon.innerText = '▼ Mở xem';
  }
};

function updateLevel3WordCount() {
  const text = document.getElementById('l3-writing-input').value.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const charCount = text.length;
  document.getElementById('l3-count-display').innerText = `${wordCount} từ | ${charCount} ký tự`;
}

function evaluateLevel3Writing() {
  const item = LEVEL3_DATA.find(x => x.id === STATE.level3Id);
  const text = document.getElementById('l3-writing-input').value.trim();
  
  if (text.length < 35) {
    alert("Bạn vui lòng viết một khối hoàn chỉnh từ 2 đến 4 câu (tối thiểu 15 - 20 từ) trước khi nhấn Đánh giá nhé!");
    return;
  }
  
  const resultContainer = document.getElementById('l3-result-container');
  resultContainer.style.display = 'block';
  
  // Keyword matching check
  const matchedKeywords = [];
  item.keywords.forEach(kw => {
    if (text.toLowerCase().includes(kw.toLowerCase())) {
      matchedKeywords.push(kw);
    }
  });
  
  const kwContainer = document.getElementById('l3-keywords-matched');
  if (matchedKeywords.length > 0) {
    kwContainer.innerHTML = matchedKeywords.map(k => `<span class="badge-tag badge-green">✓ ${k}</span>`).join(' ');
  } else {
    kwContainer.innerHTML = `<span class="badge-tag badge-amber">⚠️ Chưa thấy từ khóa gợi ý (${item.keywords.join(', ')})</span>`;
  }
  
  // Model Answer & Analysis
  document.getElementById('l3-sample-text').innerText = item.sampleAnswer;
  document.getElementById('l3-teacher-analysis').innerHTML = item.analysis;
  
  // Rubric Checklist
  const rubricContainer = document.getElementById('l3-rubric-list');
  rubricContainer.innerHTML = item.userRubric.map((r, idx) => `
    <label class="rubric-item">
      <input type="checkbox" checked id="rubric-cb-l3-${idx}">
      <span>${r}</span>
    </label>
  `).join('');
  
  playSuccessSound();
  fireConfetti();
  
  // Save to completed and add XP (+30 XP)
  if (!STATE.level3Completed.includes(item.id)) {
    STATE.level3Completed.push(item.id);
    STATE.xp += 30;
    recordExerciseActivity(3, item.id, item.topic, 30);
  }
  
  // Save or update in portfolio
  const existingIdx = STATE.portfolio.findIndex(p => p.id === item.id && p.level === 3);
  const portfolioEntry = {
    id: item.id,
    level: 3,
    topic: item.topic,
    category: item.category,
    text: text,
    sample: item.sampleAnswer,
    date: new Date().toLocaleDateString('vi-VN')
  };
  
  if (existingIdx >= 0) {
    STATE.portfolio[existingIdx] = portfolioEntry;
  } else {
    STATE.portfolio.unshift(portfolioEntry);
  }
  
  saveState();
  renderLevel3Sidebar();
}

function nextLevel3Exercise() {
  const currentIdx = LEVEL3_DATA.findIndex(x => x.id === STATE.level3Id);
  const nextItem = LEVEL3_DATA[currentIdx + 1] || LEVEL3_DATA[0];
  STATE.level3Id = nextItem.id;
  renderLevel3Sidebar();
  loadLevel3Exercise(nextItem.id);
  syncMobileDrawerBadges();
}

function prevLevel3Exercise() {
  const currentIdx = LEVEL3_DATA.findIndex(x => x.id === STATE.level3Id);
  const prevItem = currentIdx > 0 ? LEVEL3_DATA[currentIdx - 1] : LEVEL3_DATA[LEVEL3_DATA.length - 1];
  STATE.level3Id = prevItem.id;
  renderLevel3Sidebar();
  loadLevel3Exercise(prevItem.id);
  syncMobileDrawerBadges();
}

function randomLevel3Exercise() {
  const randIdx = Math.floor(Math.random() * LEVEL3_DATA.length);
  const randItem = LEVEL3_DATA[randIdx];
  STATE.level3Id = randItem.id;
  renderLevel3Sidebar();
  loadLevel3Exercise(randItem.id);
}

// ----------------------------------------------------
// LEVEL 4 LOGIC: Phẫu Thuật Sửa Lỗi Văn Học (Bác Sĩ Văn Học)
// ----------------------------------------------------
function getFilteredLevel4() {
  return LEVEL4_DATA.filter(item => {
    if (STATE.filterL4 !== 'all' && item.subType !== STATE.filterL4) return false;
    if (STATE.statusFilter === 'completed' && !STATE.level4Completed.includes(item.id)) return false;
    if (STATE.statusFilter === 'uncompleted' && STATE.level4Completed.includes(item.id)) return false;
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase();
      return item.topic.toLowerCase().includes(q) || item.prompt.toLowerCase().includes(q) || item.faultyText.toLowerCase().includes(q);
    }
    return true;
  });
}

function renderLevel4Sidebar() {
  const container = document.getElementById('l4-sidebar-list');
  if (!container) return;
  const list = getFilteredLevel4();
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 0.88rem;">Không tìm thấy bài tập phù hợp</div>';
    return;
  }
  
  list.forEach(item => {
    const isCompleted = STATE.level4Completed.includes(item.id);
    const isActive = item.id === STATE.level4Id;
    
    const div = document.createElement('div');
    div.className = `sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        <span class="item-badge">#${item.id}</span>
        <span>${item.topic}</span>
      </div>
      <span class="item-status">${isCompleted ? '✓' : '○'}</span>
    `;
    div.onclick = () => {
      STATE.level4Id = item.id;
      renderLevel4Sidebar();
      loadLevel4Exercise(item.id);
    };
    container.appendChild(div);
  });
}

function loadLevel4Exercise(id) {
  const item = LEVEL4_DATA.find(x => x.id === id);
  if (!item) return;
  STATE.level4Id = id;
  
  // Header badges
  document.getElementById('l4-badge-id').innerText = `Bài ${item.id}/100`;
  document.getElementById('l4-badge-type').innerText = item.category;
  document.getElementById('l4-topic-title').innerText = item.topic;
  document.getElementById('l4-faulty-text').innerText = item.faultyText;
  document.getElementById('l4-diagnosis-text').innerHTML = `<strong>🩺 Chẩn đoán của bác sĩ văn học:</strong> ${item.diagnosis}`;
  syncMobileDrawerBadges();
  document.getElementById('l4-prompt-desc').innerText = item.prompt;
  document.getElementById('l4-formula-hint').innerHTML = `<strong>Công thức phẫu thuật:</strong> ${item.formula}`;
  
  // Load similar hint
  if (item.similarHint) {
    document.getElementById('l4-similar-topic-title').innerText = item.similarHint.similarTopic;
    document.getElementById('l4-similar-sample-text').innerText = `"${item.similarHint.sampleSentence}"`;
    document.getElementById('l4-similar-steps-list').innerHTML = item.similarHint.thinkingSteps.map(s => `<li>${s}</li>`).join('');
    document.getElementById('l4-similar-transfer-prompt').innerText = item.similarHint.transferPrompt;
    document.getElementById('l4-similar-hint-card').style.display = 'none';
    document.getElementById('l4-similar-toggle-icon').innerText = '▼ Mở xem';
  }

  // Clear or load saved writing if any in portfolio
  const existing = STATE.portfolio.find(p => p.id === id && p.level === 4);
  const textarea = document.getElementById('l4-writing-input');
  textarea.value = existing ? existing.text : '';
  updateLevel4WordCount();
  
  // Hide analysis/result box initially
  document.getElementById('l4-result-container').style.display = 'none';
}

window.toggleLevel4SimilarHint = function() {
  const card = document.getElementById('l4-similar-hint-card');
  const icon = document.getElementById('l4-similar-toggle-icon');
  if (card.style.display === 'none') {
    card.style.display = 'block';
    icon.innerText = '▲ Thu gọn';
  } else {
    card.style.display = 'none';
    icon.innerText = '▼ Mở xem';
  }
};

function updateLevel4WordCount() {
  const text = document.getElementById('l4-writing-input').value.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const charCount = text.length;
  document.getElementById('l4-count-display').innerText = `${wordCount} từ | ${charCount} ký tự`;
}

function evaluateLevel4Writing() {
  const item = LEVEL4_DATA.find(x => x.id === STATE.level4Id);
  const text = document.getElementById('l4-writing-input').value.trim();
  
  if (text.length < 35) {
    alert("Bạn hãy viết lại đoạn văn sau khi đã phẫu thuật sửa lỗi (tối thiểu 15 - 20 từ) trước khi nhấn Đánh giá nhé!");
    return;
  }
  
  const resultContainer = document.getElementById('l4-result-container');
  resultContainer.style.display = 'block';
  
  // Keyword matching check
  const matchedKeywords = [];
  item.keywords.forEach(kw => {
    if (text.toLowerCase().includes(kw.toLowerCase())) {
      matchedKeywords.push(kw);
    }
  });
  
  const kwContainer = document.getElementById('l4-keywords-matched');
  if (matchedKeywords.length > 0) {
    kwContainer.innerHTML = matchedKeywords.map(k => `<span class="badge-tag badge-green">✓ ${k}</span>`).join(' ');
  } else {
    kwContainer.innerHTML = `<span class="badge-tag badge-amber">⚠️ Chưa thấy từ khóa gợi ý (${item.keywords.join(', ')})</span>`;
  }
  
  // Model Answer & Analysis
  document.getElementById('l4-sample-text').innerText = item.sampleAnswer;
  document.getElementById('l4-teacher-analysis').innerHTML = item.analysis;
  
  // Rubric Checklist
  const rubricContainer = document.getElementById('l4-rubric-list');
  rubricContainer.innerHTML = item.userRubric.map((r, idx) => `
    <label class="rubric-item">
      <input type="checkbox" checked id="rubric-cb-l4-${idx}">
      <span>${r}</span>
    </label>
  `).join('');
  
  playSuccessSound();
  fireConfetti();
  
  // Save to completed and add XP (+40 XP)
  if (!STATE.level4Completed.includes(item.id)) {
    STATE.level4Completed.push(item.id);
    STATE.xp += 40;
    recordExerciseActivity(4, item.id, item.topic, 40);
  }
  
  // Save or update in portfolio
  const existingIdx = STATE.portfolio.findIndex(p => p.id === item.id && p.level === 4);
  const portfolioEntry = {
    id: item.id,
    level: 4,
    topic: item.topic,
    category: item.category,
    text: text,
    sample: item.sampleAnswer,
    date: new Date().toLocaleDateString('vi-VN')
  };
  
  if (existingIdx >= 0) {
    STATE.portfolio[existingIdx] = portfolioEntry;
  } else {
    STATE.portfolio.unshift(portfolioEntry);
  }
  
  saveState();
  renderLevel4Sidebar();
}

function nextLevel4Exercise() {
  const currentIdx = LEVEL4_DATA.findIndex(x => x.id === STATE.level4Id);
  const nextItem = LEVEL4_DATA[currentIdx + 1] || LEVEL4_DATA[0];
  STATE.level4Id = nextItem.id;
  renderLevel4Sidebar();
  loadLevel4Exercise(nextItem.id);
  syncMobileDrawerBadges();
}

function prevLevel4Exercise() {
  const currentIdx = LEVEL4_DATA.findIndex(x => x.id === STATE.level4Id);
  const prevItem = currentIdx > 0 ? LEVEL4_DATA[currentIdx - 1] : LEVEL4_DATA[LEVEL4_DATA.length - 1];
  STATE.level4Id = prevItem.id;
  renderLevel4Sidebar();
  loadLevel4Exercise(prevItem.id);
  syncMobileDrawerBadges();
}

function randomLevel4Exercise() {
  const randIdx = Math.floor(Math.random() * LEVEL4_DATA.length);
  const randItem = LEVEL4_DATA[randIdx];
  STATE.level4Id = randItem.id;
  renderLevel4Sidebar();
  loadLevel4Exercise(randItem.id);
}

// ----------------------------------------------------
// LEVEL 5 LOGIC: Ghép Đoạn 200 Chữ Hoàn Chỉnh Thi Vào 10
// ----------------------------------------------------
function getFilteredLevel5() {
  return LEVEL5_DATA.filter(item => {
    if (STATE.filterL5 !== 'all' && item.subType !== STATE.filterL5) return false;
    if (STATE.statusFilter === 'completed' && !STATE.level5Completed.includes(item.id)) return false;
    if (STATE.statusFilter === 'uncompleted' && STATE.level5Completed.includes(item.id)) return false;
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase();
      return item.topic.toLowerCase().includes(q) || item.prompt.toLowerCase().includes(q);
    }
    return true;
  });
}

function renderLevel5Sidebar() {
  const container = document.getElementById('l5-sidebar-list');
  if (!container) return;
  const list = getFilteredLevel5();
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 0.88rem;">Không tìm thấy đề thi phù hợp</div>';
    return;
  }
  
  list.forEach(item => {
    const isCompleted = STATE.level5Completed.includes(item.id);
    const isActive = item.id === STATE.level5Id;
    
    const div = document.createElement('div');
    div.className = `sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        <span class="item-badge">#${item.id}</span>
        <span>${item.topic}</span>
      </div>
      <span class="item-status">${isCompleted ? '✓' : '○'}</span>
    `;
    div.onclick = () => {
      STATE.level5Id = item.id;
      renderLevel5Sidebar();
      loadLevel5Exercise(item.id);
    };
    container.appendChild(div);
  });
}

function loadLevel5Exercise(id) {
  const item = LEVEL5_DATA.find(x => x.id === id);
  if (!item) return;
  STATE.level5Id = id;
  
  // Header badges
  document.getElementById('l5-badge-id').innerText = `Đề ${item.id}/100`;
  document.getElementById('l5-badge-type').innerText = item.category;
  document.getElementById('l5-topic-title').innerText = item.topic;
  document.getElementById('l5-prompt-desc').innerText = item.prompt;
  syncMobileDrawerBadges();
  
  // Format outline
  const steps = item.scaffoldOutline.split('|').map(s => s.trim()).filter(Boolean);
  document.getElementById('l5-outline-text').innerHTML = `<ul style="padding-left: 20px; margin: 0; line-height: 1.7;">` + steps.map(s => `<li>${s}</li>`).join('') + `</ul>`;
  
  document.getElementById('l5-formula-hint').innerHTML = `<strong>Cấu trúc đoạn văn 200 chữ:</strong> ${item.formula}`;
  
  // Load similar hint
  if (item.similarHint) {
    document.getElementById('l5-similar-topic-title').innerText = item.similarHint.similarTopic;
    document.getElementById('l5-similar-sample-text').innerText = `"${item.similarHint.sampleSentence}"`;
    document.getElementById('l5-similar-steps-list').innerHTML = item.similarHint.thinkingSteps.map(s => `<li>${s}</li>`).join('');
    document.getElementById('l5-similar-transfer-prompt').innerText = item.similarHint.transferPrompt;
    document.getElementById('l5-similar-hint-card').style.display = 'none';
    document.getElementById('l5-similar-toggle-icon').innerText = '▼ Mở xem';
  }

  // Clear or load saved writing if any in portfolio
  const existing = STATE.portfolio.find(p => p.id === id && p.level === 5);
  const textarea = document.getElementById('l5-writing-input');
  textarea.value = existing ? existing.text : '';
  updateLevel5WordCount();
  
  // Hide analysis/result box initially
  document.getElementById('l5-result-container').style.display = 'none';
}

window.toggleLevel5SimilarHint = function() {
  const card = document.getElementById('l5-similar-hint-card');
  const icon = document.getElementById('l5-similar-toggle-icon');
  if (card.style.display === 'none') {
    card.style.display = 'block';
    icon.innerText = '▲ Thu gọn';
  } else {
    card.style.display = 'none';
    icon.innerText = '▼ Mở xem';
  }
};

function updateLevel5WordCount() {
  const text = document.getElementById('l5-writing-input').value.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const charCount = text.length;
  let statusHint = '';
  if (wordCount < 150) statusHint = ' (Hơi ngắn, nên viết thêm)';
  else if (wordCount <= 250) statusHint = ' (Độ dài lý tưởng thi vào 10!)';
  else statusHint = ' (Hơi dài, cẩn thận quá dung lượng giấy thi)';
  document.getElementById('l5-count-display').innerText = `${wordCount} từ${statusHint} | ${charCount} ký tự`;
}

function evaluateLevel5Writing() {
  const item = LEVEL5_DATA.find(x => x.id === STATE.level5Id);
  const text = document.getElementById('l5-writing-input').value.trim();
  
  if (text.length < 80) {
    alert("Bạn hãy viết đoạn văn hoàn chỉnh (khoảng 150 - 220 từ) trước khi nhấn Đánh giá để có kết quả chính xác nhất nhé!");
    return;
  }
  
  const resultContainer = document.getElementById('l5-result-container');
  resultContainer.style.display = 'block';
  
  // Keyword matching check
  const matchedKeywords = [];
  item.keywords.forEach(kw => {
    if (text.toLowerCase().includes(kw.toLowerCase())) {
      matchedKeywords.push(kw);
    }
  });
  
  const kwContainer = document.getElementById('l5-keywords-matched');
  if (matchedKeywords.length > 0) {
    kwContainer.innerHTML = matchedKeywords.map(k => `<span class="badge-tag badge-green">✓ ${k}</span>`).join(' ');
  } else {
    kwContainer.innerHTML = `<span class="badge-tag badge-amber">⚠️ Chưa thấy từ khóa gợi ý (${item.keywords.join(', ')})</span>`;
  }
  
  // Model Answer & Analysis
  document.getElementById('l5-sample-text').innerText = item.sampleAnswer;
  document.getElementById('l5-teacher-analysis').innerHTML = item.analysis;
  
  // Rubric Checklist
  const rubricContainer = document.getElementById('l5-rubric-list');
  rubricContainer.innerHTML = item.userRubric.map((r, idx) => `
    <label class="rubric-item">
      <input type="checkbox" checked id="rubric-cb-l5-${idx}">
      <span>${r}</span>
    </label>
  `).join('');
  
  playSuccessSound();
  fireConfetti();
  
  // Save to completed and add XP (+50 XP)
  if (!STATE.level5Completed.includes(item.id)) {
    STATE.level5Completed.push(item.id);
    STATE.xp += 50;
    recordExerciseActivity(5, item.id, item.topic, 50);
  }
  
  // Save or update in portfolio
  const existingIdx = STATE.portfolio.findIndex(p => p.id === item.id && p.level === 5);
  const portfolioEntry = {
    id: item.id,
    level: 5,
    topic: item.topic,
    category: item.category,
    text: text,
    sample: item.sampleAnswer,
    date: new Date().toLocaleDateString('vi-VN')
  };
  
  if (existingIdx >= 0) {
    STATE.portfolio[existingIdx] = portfolioEntry;
  } else {
    STATE.portfolio.unshift(portfolioEntry);
  }
  
  saveState();
  renderLevel5Sidebar();
}

function nextLevel5Exercise() {
  const currentIdx = LEVEL5_DATA.findIndex(x => x.id === STATE.level5Id);
  const nextItem = LEVEL5_DATA[currentIdx + 1] || LEVEL5_DATA[0];
  STATE.level5Id = nextItem.id;
  renderLevel5Sidebar();
  loadLevel5Exercise(nextItem.id);
  syncMobileDrawerBadges();
}

function prevLevel5Exercise() {
  const currentIdx = LEVEL5_DATA.findIndex(x => x.id === STATE.level5Id);
  const prevItem = currentIdx > 0 ? LEVEL5_DATA[currentIdx - 1] : LEVEL5_DATA[LEVEL5_DATA.length - 1];
  STATE.level5Id = prevItem.id;
  renderLevel5Sidebar();
  loadLevel5Exercise(prevItem.id);
  syncMobileDrawerBadges();
}

function randomLevel5Exercise() {
  const randIdx = Math.floor(Math.random() * LEVEL5_DATA.length);
  const randItem = LEVEL5_DATA[randIdx];
  STATE.level5Id = randItem.id;
  renderLevel5Sidebar();
  loadLevel5Exercise(randItem.id);
}

// ----------------------------------------------------
// LEVEL 6 LOGIC: Phòng Thi Thực Chiến Bấm Giờ 20 Phút
// ----------------------------------------------------
function getFilteredLevel6() {
  return LEVEL6_DATA.filter(item => {
    if (STATE.filterL6 !== 'all' && item.subType !== STATE.filterL6) return false;
    if (STATE.statusFilter === 'completed' && !STATE.level6Completed.includes(item.id)) return false;
    if (STATE.statusFilter === 'uncompleted' && STATE.level6Completed.includes(item.id)) return false;
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase();
      return item.topic.toLowerCase().includes(q) || item.prompt.toLowerCase().includes(q) || item.origin.toLowerCase().includes(q);
    }
    return true;
  });
}

function renderLevel6Sidebar() {
  const container = document.getElementById('l6-sidebar-list');
  if (!container) return;
  const list = getFilteredLevel6();
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<div style="padding: 16px; text-align: center; color: #94a3b8; font-size: 0.88rem;">Không tìm thấy đề thi phù hợp</div>';
    return;
  }
  
  list.forEach(item => {
    const isCompleted = STATE.level6Completed.includes(item.id);
    const isActive = item.id === STATE.level6Id;
    
    const div = document.createElement('div');
    div.className = `sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        <span class="item-badge">#${item.id}</span>
        <span>${item.topic}</span>
      </div>
      <span class="item-status">${isCompleted ? '✓' : '○'}</span>
    `;
    div.onclick = () => {
      STATE.level6Id = item.id;
      renderLevel6Sidebar();
      loadLevel6Exercise(item.id);
    };
    container.appendChild(div);
  });
}

function loadLevel6Exercise(id) {
  const item = LEVEL6_DATA.find(x => x.id === id);
  if (!item) return;
  STATE.level6Id = id;
  
  // Header badges
  document.getElementById('l6-badge-id').innerText = `Đề ${item.id}/100`;
  document.getElementById('l6-badge-origin').innerText = item.origin;
  document.getElementById('l6-badge-type').innerText = item.category;
  document.getElementById('l6-topic-title').innerText = item.topic;
  document.getElementById('l6-prompt-desc').innerText = item.prompt;
  syncMobileDrawerBadges();
  
  // Load similar hint
  if (item.similarHint) {
    document.getElementById('l6-similar-topic-title').innerText = item.similarHint.similarTopic;
    document.getElementById('l6-similar-sample-text').innerText = `"${item.similarHint.sampleSentence}"`;
    document.getElementById('l6-similar-steps-list').innerHTML = item.similarHint.thinkingSteps.map(s => `<li>${s}</li>`).join('');
    document.getElementById('l6-similar-transfer-prompt').innerText = item.similarHint.transferPrompt;
    document.getElementById('l6-similar-hint-card').style.display = 'none';
    document.getElementById('l6-similar-toggle-icon').innerText = '▼ Mở xem';
  }

  // Clear or load saved writing if any in portfolio
  const existing = STATE.portfolio.find(p => p.id === id && p.level === 6);
  const textarea = document.getElementById('l6-writing-input');
  textarea.value = existing ? existing.text : '';
  updateLevel6WordCount();
  
  // Reset timer if not currently running
  if (!STATE.timerRunning) {
    resetLevel6Timer();
  }

  // Hide analysis/result box initially
  document.getElementById('l6-result-container').style.display = 'none';
}

window.toggleLevel6SimilarHint = function() {
  const card = document.getElementById('l6-similar-hint-card');
  const icon = document.getElementById('l6-similar-toggle-icon');
  if (card.style.display === 'none') {
    card.style.display = 'block';
    icon.innerText = '▲ Thu gọn';
  } else {
    card.style.display = 'none';
    icon.innerText = '▼ Mở xem';
  }
};

function updateLevel6WordCount() {
  const text = document.getElementById('l6-writing-input').value.trim();
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const charCount = text.length;
  let statusHint = '';
  if (wordCount < 150) statusHint = ' (Hơi ngắn so với yêu cầu thi vào 10)';
  else if (wordCount <= 250) statusHint = ' (Độ dài lý tưởng ~2/3 trang giấy thi!)';
  else statusHint = ' (Hơi dài, coi chừng quá 20 phút và lấn thời gian câu khác)';
  document.getElementById('l6-count-display').innerText = `${wordCount} từ${statusHint} | ${charCount} ký tự`;
}

// 20-Minute Countdown Timer Implementation
function formatTimer(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateTimerDisplay() {
  const display = document.getElementById('l6-timer-display');
  if (!display) return;
  display.innerText = formatTimer(STATE.timerSecondsRemaining);
  if (STATE.timerSecondsRemaining <= 180 && STATE.timerSecondsRemaining > 0) {
    display.classList.add('warning');
  } else {
    display.classList.remove('warning');
  }
}

function startLevel6Timer() {
  if (STATE.timerRunning) return;
  STATE.timerRunning = true;
  const startBtn = document.getElementById('l6-btn-timer-start');
  const pauseBtn = document.getElementById('l6-btn-timer-pause');
  if (startBtn) startBtn.style.display = 'none';
  if (pauseBtn) pauseBtn.style.display = 'inline-block';
  
  STATE.timerInterval = setInterval(() => {
    if (STATE.timerSecondsRemaining > 0) {
      STATE.timerSecondsRemaining--;
      updateTimerDisplay();
      
      // Alert when 3 minutes remaining (180s)
      if (STATE.timerSecondsRemaining === 180) {
        playHintSound();
        alert("⏱️ CẢNH BÁO PHÒNG THI: Còn đúng 3 phút! Hãy nhanh chóng hoàn thành câu kết và chuyển sang rà soát chính tả, dấu câu!");
      }
      // Alert when time is up
      if (STATE.timerSecondsRemaining === 0) {
        pauseLevel6Timer();
        playSuccessSound();
        alert("🔔 HẾT GIỜ 20 PHÚT! Hãy dừng bút và bấm 'Nộp bài thi & Chấm điểm' để xem đánh giá nhé!");
      }
    } else {
      pauseLevel6Timer();
    }
  }, 1000);
}

function pauseLevel6Timer() {
  STATE.timerRunning = false;
  if (STATE.timerInterval) {
    clearInterval(STATE.timerInterval);
    STATE.timerInterval = null;
  }
  const startBtn = document.getElementById('l6-btn-timer-start');
  const pauseBtn = document.getElementById('l6-btn-timer-pause');
  if (startBtn) startBtn.style.display = 'inline-block';
  if (pauseBtn) pauseBtn.style.display = 'none';
}

function resetLevel6Timer() {
  pauseLevel6Timer();
  STATE.timerSecondsRemaining = 20 * 60;
  updateTimerDisplay();
}

function evaluateLevel6Writing() {
  const item = LEVEL6_DATA.find(x => x.id === STATE.level6Id);
  const text = document.getElementById('l6-writing-input').value.trim();
  
  if (text.length < 80) {
    alert("Bạn hãy viết bài thi hoàn chỉnh (khoảng 150 - 220 từ) trước khi nộp bài để nhận được đánh giá chính xác nhất từ giáo viên nhé!");
    return;
  }
  
  pauseLevel6Timer();
  
  const resultContainer = document.getElementById('l6-result-container');
  resultContainer.style.display = 'block';
  
  // Keyword matching check
  const matchedKeywords = [];
  item.keywords.forEach(kw => {
    if (text.toLowerCase().includes(kw.toLowerCase())) {
      matchedKeywords.push(kw);
    }
  });
  
  const kwContainer = document.getElementById('l6-keywords-matched');
  if (matchedKeywords.length > 0) {
    kwContainer.innerHTML = matchedKeywords.map(k => `<span class="badge-tag badge-green">✓ ${k}</span>`).join(' ');
  } else {
    kwContainer.innerHTML = `<span class="badge-tag badge-amber">⚠️ Chưa thấy từ khóa gợi ý (${item.keywords.join(', ')})</span>`;
  }
  
  // Model Answer & Analysis
  document.getElementById('l6-sample-text').innerText = item.sampleAnswer;
  document.getElementById('l6-teacher-analysis').innerHTML = item.analysis;
  
  // Rubric Checklist
  const rubricContainer = document.getElementById('l6-rubric-list');
  rubricContainer.innerHTML = item.userRubric.map((r, idx) => `
    <label class="rubric-item">
      <input type="checkbox" checked id="rubric-cb-l6-${idx}">
      <span>${r}</span>
    </label>
  `).join('');
  
  playSuccessSound();
  fireConfetti();
  
  // Save to completed and add XP (+60 XP)
  if (!STATE.level6Completed.includes(item.id)) {
    STATE.level6Completed.push(item.id);
    STATE.xp += 60;
    recordExerciseActivity(6, item.id, item.topic, 60);
  }
  
  // Save or update in portfolio
  const existingIdx = STATE.portfolio.findIndex(p => p.id === item.id && p.level === 6);
  const portfolioEntry = {
    id: item.id,
    level: 6,
    topic: item.topic,
    category: item.category,
    text: text,
    sample: item.sampleAnswer,
    date: new Date().toLocaleDateString('vi-VN')
  };
  
  if (existingIdx >= 0) {
    STATE.portfolio[existingIdx] = portfolioEntry;
  } else {
    STATE.portfolio.unshift(portfolioEntry);
  }
  
  saveState();
  renderLevel6Sidebar();
}

function nextLevel6Exercise() {
  const currentIdx = LEVEL6_DATA.findIndex(x => x.id === STATE.level6Id);
  const nextItem = LEVEL6_DATA[currentIdx + 1] || LEVEL6_DATA[0];
  STATE.level6Id = nextItem.id;
  renderLevel6Sidebar();
  loadLevel6Exercise(nextItem.id);
  syncMobileDrawerBadges();
}

function prevLevel6Exercise() {
  const currentIdx = LEVEL6_DATA.findIndex(x => x.id === STATE.level6Id);
  const prevItem = currentIdx > 0 ? LEVEL6_DATA[currentIdx - 1] : LEVEL6_DATA[LEVEL6_DATA.length - 1];
  STATE.level6Id = prevItem.id;
  renderLevel6Sidebar();
  loadLevel6Exercise(prevItem.id);
  syncMobileDrawerBadges();
}

function randomLevel6Exercise() {
  const randIdx = Math.floor(Math.random() * LEVEL6_DATA.length);
  const randItem = LEVEL6_DATA[randIdx];
  STATE.level6Id = randItem.id;
  renderLevel6Sidebar();
  loadLevel6Exercise(randItem.id);
}

// ----------------------------------------------------
// MINDMAP BUILDER MODULE (30 CHỦ ĐỀ THI VÀO 10)
// ----------------------------------------------------

function getFilteredMindmap() {
  if (typeof MINDMAP_DATA === 'undefined') return [];
  return MINDMAP_DATA.filter(item => {
    if (STATE.filterMindmap !== 'all' && item.category !== STATE.filterMindmap) return false;
    if (STATE.statusFilter === 'completed' && !STATE.mindmapCompleted.includes(item.id)) return false;
    if (STATE.statusFilter === 'uncompleted' && STATE.mindmapCompleted.includes(item.id)) return false;
    if (STATE.mmSearchQuery && STATE.mmSearchQuery.trim() !== '') {
      const q = STATE.mmSearchQuery.toLowerCase();
      return item.topic.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
    }
    return true;
  });
}

function renderMindmapSidebar() {
  const listContainer = document.getElementById('mm-sidebar-list');
  if (!listContainer) return;
  listContainer.innerHTML = '';
  
  const filtered = getFilteredMindmap();
  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">Không tìm thấy chủ đề phù hợp</div>`;
    return;
  }
  
  filtered.forEach(item => {
    const isCompleted = STATE.mindmapCompleted.includes(item.id);
    const isActive = item.id === STATE.mindmapId;
    
    const div = document.createElement('div');
    div.className = `sidebar-item mm-sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    div.style.cssText = 'display: flex; flex-direction: column; align-items: stretch; gap: 4px; padding: 10px 12px;';
    div.onclick = () => {
      loadMindmapExercise(item.id);
    };
    
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="item-badge" style="font-weight: 700;">#${item.id}</span>
        <span class="badge" style="font-size: 0.7rem; padding: 2px 6px; background: #e0e7ff; color: #4338ca; border-radius: 4px;">${escapeHtml(item.category)}</span>
      </div>
      <div style="font-size: 0.88rem; font-weight: 600; margin-top: 4px; color: #1e293b; line-height: 1.3;">
        ${escapeHtml(item.topic)}
      </div>
      <div style="margin-top: 4px; font-size: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
        ${isCompleted ? '<span style="color: #16a34a; font-weight: 700;">✓ Đã đạt 100đ</span>' : '<span style="color: #94a3b8;">○ Chưa hoàn thành</span>'}
      </div>
    `;
    listContainer.appendChild(div);
  });
}

function loadMindmapExercise(id) {
  if (typeof MINDMAP_DATA === 'undefined') return;
  const item = MINDMAP_DATA.find(x => x.id === id) || MINDMAP_DATA[0];
  if (!item) return;
  
  STATE.mindmapId = item.id;
  if (!STATE.mindmapSlots[item.id]) {
    STATE.mindmapSlots[item.id] = {
      explain: [],
      reason: [],
      evidence: [],
      counter: [],
      lesson: []
    };
  }
  
  STATE.mindmapCurrentBranch = 'explain';
  STATE.mindmapEvaluated = false;
  
  const elemTitle = document.getElementById('mm-topic-title');
  if (elemTitle) elemTitle.innerText = item.topic;
  
  const elemCat = document.getElementById('mm-topic-category');
  if (elemCat) elemCat.innerText = item.category;
  syncMobileDrawerBadges();
  
  const elemStatus = document.getElementById('mm-topic-status');
  if (elemStatus) {
    const isCompleted = STATE.mindmapCompleted.includes(item.id);
    elemStatus.innerText = isCompleted ? '✓ Đã hoàn thành' : 'Chưa hoàn thành';
    elemStatus.style.background = isCompleted ? '#dcfce7' : '#f1f5f9';
    elemStatus.style.color = isCompleted ? '#15803d' : '#64748b';
  }
  
  const elemRoot = document.getElementById('mm-root-title-display');
  if (elemRoot) elemRoot.innerText = item.topic.toUpperCase();
  
  const elemScore = document.getElementById('mm-score-badge');
  if (elemScore) {
    elemScore.innerText = `Điểm hiện tại: 0/100`;
    elemScore.style.color = '#64748b';
  }
  
  const fbCard = document.getElementById('mm-feedback-card');
  if (fbCard) fbCard.style.display = 'none';
  const outlineBox = document.getElementById('mm-outline-box');
  if (outlineBox) outlineBox.style.display = 'none';
  
  renderMindmapBranches();
  renderMindmapSidebar();
}

function renderMindmapBranches() {
  const container = document.getElementById('mm-branches-list');
  if (!container) return;
  container.innerHTML = '';
  
  const item = MINDMAP_DATA.find(x => x.id === STATE.mindmapId);
  if (!item) return;
  
  const slotsState = STATE.mindmapSlots[item.id] || {};
  
  item.branches.forEach((branch) => {
    const branchId = branch.branchId;
    const currentSlots = slotsState[branchId] || [];
    const isActive = STATE.mindmapCurrentBranch === branchId;
    
    let statusText = 'Chưa điền (0/2)';
    let statusClass = 'empty';
    if (currentSlots.length === 2) {
      statusText = 'Đã chọn 2/2';
      statusClass = 'filled';
    } else if (currentSlots.length === 1) {
      statusText = 'Đã chọn 1/2';
      statusClass = 'filled';
    }
    
    const card = document.createElement('div');
    card.className = `mm-branch-card branch-${branchId} ${isActive ? 'active' : ''}`;
    card.id = `mm-branch-card-${branchId}`;
    
    const header = document.createElement('div');
    header.className = 'mm-branch-header';
    header.onclick = () => {
      toggleMindmapBranch(branchId);
    };
    
    header.innerHTML = `
      <div class="mm-branch-title-group">
        <span class="mm-branch-name">${escapeHtml(branch.name)}</span>
        <span class="mm-branch-status-badge ${statusClass}" id="mm-branch-status-${branchId}">${statusText}</span>
      </div>
      <div class="mm-branch-toggle-btn">▼</div>
    `;
    card.appendChild(header);
    
    const body = document.createElement('div');
    body.className = 'mm-branch-body';
    
    body.innerHTML = `
      <div class="mm-branch-hint-text">
        💡 <strong>Định hướng tư duy:</strong> ${escapeHtml(branch.hintDescription)}
      </div>
    `;
    
    const slotsContainer = document.createElement('div');
    slotsContainer.className = 'mm-slots-container';
    
    for (let sIdx = 0; sIdx < 2; sIdx++) {
      const phrase = currentSlots[sIdx];
      const slotBox = document.createElement('div');
      
      if (phrase) {
        slotBox.className = 'mm-slot-box filled';
        slotBox.innerHTML = `
          <span>${escapeHtml(phrase)}</span>
          <button class="mm-slot-remove-btn" title="Gỡ cụm từ này" onclick="event.stopPropagation(); removePhraseFromMindmapSlot('${branchId}', ${sIdx})">✕</button>
        `;
      } else {
        slotBox.className = 'mm-slot-box empty';
        slotBox.innerHTML = `<span>+ Ô trống ${sIdx + 1} (Chọn cụm từ gợi ý bên dưới)</span>`;
      }
      slotsContainer.appendChild(slotBox);
    }
    body.appendChild(slotsContainer);
    
    const phraseBank = document.createElement('div');
    phraseBank.className = 'mm-phrase-bank';
    phraseBank.innerHTML = `
      <div class="mm-phrase-bank-title">
        <span>📚 Ngân hàng cụm từ gợi ý (Bấm chọn 2 cụm từ chuẩn xác):</span>
      </div>
    `;
    
    const chipsGrid = document.createElement('div');
    chipsGrid.className = 'mm-phrase-chips-grid';
    
    const allCandidatePhrases = [...branch.correctPhrases, ...branch.distractors];
    allCandidatePhrases.sort((a, b) => a.localeCompare(b, 'vi'));
    
    allCandidatePhrases.forEach(pText => {
      const isUsed = currentSlots.includes(pText);
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `mm-phrase-chip ${isUsed ? 'used' : ''}`;
      chip.disabled = isUsed;
      chip.innerHTML = `
        <span>${escapeHtml(pText)}</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: ${isUsed ? '#94a3b8' : 'var(--primary)'};">
          ${isUsed ? '✓ Đã gắn' : '+ Chọn'}
        </span>
      `;
      if (!isUsed) {
        chip.onclick = (e) => {
          e.stopPropagation();
          selectPhraseForMindmapSlot(branchId, pText);
        };
      }
      chipsGrid.appendChild(chip);
    });
    
    phraseBank.appendChild(chipsGrid);
    body.appendChild(phraseBank);
    
    card.appendChild(body);
    container.appendChild(card);
  });
}

function toggleMindmapBranch(branchId) {
  if (STATE.mindmapCurrentBranch === branchId) {
    STATE.mindmapCurrentBranch = null;
  } else {
    STATE.mindmapCurrentBranch = branchId;
  }
  renderMindmapBranches();
}

function selectPhraseForMindmapSlot(branchId, phraseText) {
  const item = MINDMAP_DATA.find(x => x.id === STATE.mindmapId);
  if (!item) return;
  
  if (!STATE.mindmapSlots[item.id]) {
    STATE.mindmapSlots[item.id] = { explain: [], reason: [], evidence: [], counter: [], lesson: [] };
  }
  
  const current = STATE.mindmapSlots[item.id][branchId] || [];
  if (current.length >= 2) {
    alert("Nhánh này đã chọn đủ 2 cụm từ! Hãy nhấn dấu ✕ để gỡ bớt 1 cụm từ nếu bạn muốn thay đổi.");
    return;
  }
  
  if (!current.includes(phraseText)) {
    current.push(phraseText);
    STATE.mindmapSlots[item.id][branchId] = current;
    renderMindmapBranches();
  }
}

function removePhraseFromMindmapSlot(branchId, slotIdx) {
  const item = MINDMAP_DATA.find(x => x.id === STATE.mindmapId);
  if (!item) return;
  
  const current = STATE.mindmapSlots[item.id][branchId] || [];
  if (current[slotIdx] !== undefined) {
    current.splice(slotIdx, 1);
    STATE.mindmapSlots[item.id][branchId] = current;
    renderMindmapBranches();
  }
}

function evaluateMindmapExercise() {
  const item = MINDMAP_DATA.find(x => x.id === STATE.mindmapId);
  if (!item) return;
  
  const slotsState = STATE.mindmapSlots[item.id] || {};
  let totalFilled = 0;
  item.branches.forEach(b => {
    totalFilled += (slotsState[b.branchId] || []).length;
  });
  
  if (totalFilled < 10) {
    const proceed = confirm(`Bạn mới điền ${totalFilled}/10 vị trí trong sơ đồ. Bạn có chắc muốn kiểm tra và chấm điểm ngay bây giờ không?`);
    if (!proceed) return;
  }
  
  let totalScore = 0;
  let detailedFeedbackHtml = '';
  
  item.branches.forEach(b => {
    const branchId = b.branchId;
    const userPhrases = slotsState[branchId] || [];
    let branchScore = 0;
    let correctCount = 0;
    let distractorChosen = [];
    
    userPhrases.forEach(p => {
      if (b.correctPhrases.includes(p)) {
        correctCount += 1;
        branchScore += 10;
      } else if (b.distractors.includes(p)) {
        distractorChosen.push(p);
      }
    });
    
    totalScore += branchScore;
    
    let branchStatusHtml = '';
    if (correctCount === 2) {
      branchStatusHtml = `<span style="color: #16a34a; font-weight: 700;">✓ Hoàn toàn chính xác (+20đ)</span>`;
    } else if (correctCount === 1) {
      branchStatusHtml = `<span style="color: #d97706; font-weight: 700;">⚠️ Đúng 1/2 cụm từ (+10đ)</span>`;
    } else {
      branchStatusHtml = `<span style="color: #dc2626; font-weight: 700;">✗ Chưa chuẩn xác (0đ)</span>`;
    }
    
    let adviceHtml = '';
    if (distractorChosen.length > 0) {
      adviceHtml = `
        <div style="margin-top: 6px; font-size: 0.84rem; color: #b45309; background: #fffbeb; padding: 8px 12px; border-radius: 4px; border-left: 3px solid #f59e0b;">
          ⚠️ <strong>Lỗi tư duy cần tránh:</strong> Bạn đã chọn nhầm cụm từ sáo rỗng hoặc lệch bản chất: <em>"${escapeHtml(distractorChosen.join('", "'))}"</em>.<br>
          👉 <strong>Thầy cô dặn:</strong> ${escapeHtml(b.feedbackOnMistake)}
        </div>
      `;
    }
    
    detailedFeedbackHtml += `
      <div style="margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dashed #e2e8f0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <strong>${escapeHtml(b.name)}</strong>
          ${branchStatusHtml}
        </div>
        <div style="font-size: 0.85rem; color: #475569;">
          <strong>Cụm từ chuẩn mực:</strong> "${escapeHtml(b.correctPhrases.join('", "'))}"
        </div>
        ${adviceHtml}
      </div>
    `;
  });
  
  const scoreElem = document.getElementById('mm-score-badge');
  if (scoreElem) {
    scoreElem.innerText = `Điểm đạt: ${totalScore}/100`;
    scoreElem.style.color = totalScore >= 80 ? '#16a34a' : totalScore >= 50 ? '#d97706' : '#dc2626';
  }
  
  const fbCard = document.getElementById('mm-feedback-card');
  const fbHeader = document.getElementById('mm-feedback-header');
  const fbBody = document.getElementById('mm-feedback-body');
  
  if (fbCard && fbHeader && fbBody) {
    fbCard.style.display = 'block';
    if (totalScore === 100) {
      fbCard.className = 'feedback-box show success';
      fbHeader.innerHTML = `🎉 XUẤT SẮC! BẢN THIẾT KẾ MÓNG NHÀ HOÀN TOÀN CHUẨN XÁC: 100/100 ĐIỂM (+50 XP)`;
    } else if (totalScore >= 60) {
      fbCard.className = 'feedback-box show warning';
      fbHeader.innerHTML = `👏 TƯ DUY RẤT TỐT: ${totalScore}/100 ĐIỂM – CẦN TINH CHỈNH MỘT VÀI BẪY TƯ DUY`;
    } else {
      fbCard.className = 'feedback-box show error';
      fbHeader.innerHTML = `⚠️ KẾT QUẢ: ${totalScore}/100 ĐIỂM – HÃY ĐỌC KỸ LỜI DẶN CỦA THẦY CÔ VÀ THỬ LẠI NHÉ!`;
    }
    fbBody.innerHTML = detailedFeedbackHtml;
  }
  
  if (totalScore >= 80) {
    playSuccessSound();
    fireConfetti();
    
    if (!STATE.mindmapCompleted.includes(item.id)) {
      STATE.mindmapCompleted.push(item.id);
      STATE.xp += 50;
      recordExerciseActivity('mindmap', item.id, item.topic, 50);
      saveState();
      renderMindmapSidebar();
    }
  }
  
  showMindmapOutline(item);
}

function showMindmapOutline(item) {
  const outlineBox = document.getElementById('mm-outline-box');
  const outlineContent = document.getElementById('mm-outline-content');
  if (!outlineBox || !outlineContent) return;
  
  outlineBox.style.display = 'block';
  
  const bMap = {};
  item.branches.forEach(b => {
    bMap[b.branchId] = b.correctPhrases;
  });
  
  const fullOutlineText = 
`📌 DÀN Ý KHUNG BÀI VĂN NGHỊ LUẬN: ${item.topic.toUpperCase()}

1. MỞ ĐOẠN / MỞ BÀI:
   - Dẫn dắt ấn tượng và nêu trực tiếp vấn đề: "${item.topic}".

2. GIẢI THÍCH (BẢN CHẤT KHÁI NIỆM):
   - ${bMap['explain'][0]}
   - ${bMap['explain'][1]}

3. BÀN LUẬN (TẠI SAO? - Ý NGHĨA CỐT LÕI):
   - ${bMap['reason'][0]}
   - ${bMap['reason'][1]}

4. DẪN CHỨNG THỰC TẾ (MÔ HÌNH CAR):
   - Dẫn chứng 1: ${bMap['evidence'][0]}
   - Dẫn chứng 2: ${bMap['evidence'][1]}

5. PHẢN ĐỀ & BÁC BỎ (GÓC NHÌN ĐA CHIỀU):
   - ${bMap['counter'][0]}
   - ${bMap['counter'][1]}

6. BÀI HỌC NHẬN THỨC & HÀNH ĐỘNG (TUỔI 15):
   - ${bMap['lesson'][0]}
   - ${bMap['lesson'][1]}`;

  outlineContent.innerText = fullOutlineText;
  
  const fbCard = document.getElementById('mm-feedback-card');
  if (fbCard) {
    fbCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function exportMindmapToNotebook() {
  const item = MINDMAP_DATA.find(x => x.id === STATE.mindmapId);
  if (!item) return;
  
  const outlineContent = document.getElementById('mm-outline-content');
  const text = outlineContent ? outlineContent.innerText : item.outlineSummary;
  
  const existingIdx = STATE.portfolio.findIndex(p => p.id === item.id && p.level === 'mindmap');
  const entry = {
    id: item.id,
    level: 'mindmap',
    topic: item.topic,
    category: item.category,
    text: text,
    sample: item.outlineSummary,
    date: new Date().toLocaleDateString('vi-VN')
  };
  
  if (existingIdx >= 0) {
    STATE.portfolio[existingIdx] = entry;
  } else {
    STATE.portfolio.unshift(entry);
  }
  
  saveState();
  alert("🎉 Đã lưu toàn bộ Dàn ý Mindmap vào 'Sổ tay bài viết của em' thành công!");
}

function copyMindmapOutline() {
  const outlineContent = document.getElementById('mm-outline-content');
  if (!outlineContent) return;
  
  navigator.clipboard.writeText(outlineContent.innerText).then(() => {
    alert("📋 Đã sao chép toàn bộ Dàn ý Mindmap vào khay nhớ tạm!");
  });
}

function resetMindmapExercise() {
  const item = MINDMAP_DATA.find(x => x.id === STATE.mindmapId);
  if (!item) return;
  
  STATE.mindmapSlots[item.id] = {
    explain: [],
    reason: [],
    evidence: [],
    counter: [],
    lesson: []
  };
  STATE.mindmapCurrentBranch = 'explain';
  
  const fbCard = document.getElementById('mm-feedback-card');
  if (fbCard) fbCard.style.display = 'none';
  const outlineBox = document.getElementById('mm-outline-box');
  if (outlineBox) outlineBox.style.display = 'none';
  
  const scoreElem = document.getElementById('mm-score-badge');
  if (scoreElem) {
    scoreElem.innerText = `Điểm hiện tại: 0/100`;
    scoreElem.style.color = '#64748b';
  }
  
  renderMindmapBranches();
}

function nextMindmapExercise() {
  const currentIdx = MINDMAP_DATA.findIndex(x => x.id === STATE.mindmapId);
  const nextItem = MINDMAP_DATA[currentIdx + 1] || MINDMAP_DATA[0];
  loadMindmapExercise(nextItem.id);
  syncMobileDrawerBadges();
}

function prevMindmapExercise() {
  const currentIdx = MINDMAP_DATA.findIndex(x => x.id === STATE.mindmapId);
  const prevItem = currentIdx > 0 ? MINDMAP_DATA[currentIdx - 1] : MINDMAP_DATA[MINDMAP_DATA.length - 1];
  loadMindmapExercise(prevItem.id);
  syncMobileDrawerBadges();
}

function randomMindmapExercise() {
  const randIdx = Math.floor(Math.random() * MINDMAP_DATA.length);
  const randItem = MINDMAP_DATA[randIdx];
  loadMindmapExercise(randItem.id);
}

// ----------------------------------------------------
// NOTEBOOK / PORTFOLIO LOGIC
// ----------------------------------------------------
function renderNotebookView() {
  const container = document.getElementById('notebook-list');
  if (!container) return;
  container.innerHTML = '';
  
  if (STATE.portfolio.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 20px; color: #94a3b8;">
        <div style="font-size: 48px; margin-bottom: 12px;">📖</div>
        <h3>Sổ tay của bạn chưa có bài viết nào</h3>
        <p style="margin-top: 6px;">Hãy luyện tập tại Cấp độ 2 - 6 hoặc Sơ đồ Mindmap và lưu các bài tâm đắc vào đây nhé!</p>
      </div>
    `;
    return;
  }
  
  STATE.portfolio.forEach((entry, idx) => {
    const card = document.createElement('div');
    card.className = 'sentence-card';
    const isMindmap = entry.level === 'mindmap';
    const badgeHtml = isMindmap 
      ? '<span class="badge" style="background: #e0f2fe; color: #0284c7; font-weight: 700;">🧠 Sơ đồ Mindmap</span>' 
      : `<span class="badge-tag badge-blue">${escapeHtml(entry.category)}</span>`;
    
    card.innerHTML = `
      <div class="sentence-meta">
        ${badgeHtml}
        <span>Bài #${entry.id} – ${escapeHtml(entry.topic)} | Ngày lưu: ${entry.date}</span>
      </div>
      <div class="sentence-text" style="${isMindmap ? 'white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6; background: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; font-family: inherit;' : ''}">${isMindmap ? escapeHtml(entry.text) : `"${escapeHtml(entry.text)}"`}</div>
      <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #e2e8f0; font-size: 0.88rem; color: #15803d;">
        <strong>${isMindmap ? 'Tóm tắt gợi ý thầy cô:' : 'Câu mẫu thầy cô:'}</strong> "${escapeHtml(entry.sample)}"
      </div>
      <div style="margin-top: 8px; display: flex; justify-content: flex-end; gap: 8px;">
        <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="copySentence('${encodeURIComponent(entry.text)}')">📋 Sao chép</button>
        <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem; color: #dc2626;" onclick="deletePortfolioItem(${idx})">🗑️ Xóa</button>
      </div>
    `;
    container.appendChild(card);
  });
}

window.copySentence = function(encodedText) {
  const text = decodeURIComponent(encodedText);
  navigator.clipboard.writeText(text).then(() => {
    alert("Đã sao chép câu văn vào khay nhớ tạm!");
  });
};

window.deletePortfolioItem = function(idx) {
  if (confirm("Bạn có chắc muốn xóa câu này khỏi Sổ tay không?")) {
    STATE.portfolio.splice(idx, 1);
    saveState();
    renderNotebookView();
  }
};

// ----------------------------------------------------
// UTILITY HELPERS
// ----------------------------------------------------
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\'/g, '&#039;');
}

// ----------------------------------------------------
// JOURNEY REPORT & DAILY LOG RENDERING
// ----------------------------------------------------
function renderJourneyReportView() {
  const history = STATE.dailyHistory || {};
  const dateKeys = Object.keys(history).sort().reverse();
  const totalDays = dateKeys.length;
  
  const totalCompleted = STATE.level1Completed.length + STATE.level2Completed.length + 
                         STATE.level3Completed.length + STATE.level4Completed.length + 
                         STATE.level5Completed.length + STATE.level6Completed.length;
  
  // 1. Update KPI Counters
  const elemDays = document.getElementById('journey-total-days');
  if (elemDays) elemDays.innerText = `${totalDays} ngày`;
  
  const elemExercises = document.getElementById('journey-total-exercises');
  if (elemExercises) elemExercises.innerText = `${totalCompleted} bài`;
  
  const elemXp = document.getElementById('journey-total-xp');
  if (elemXp) elemXp.innerText = `${STATE.xp} XP`;
  
  const elemRate = document.getElementById('journey-completion-rate');
  if (elemRate) {
    const rate = Math.round((totalCompleted / 600) * 100);
    elemRate.innerText = `${rate}% / 600 bài`;
  }
  
  // 2. Render 6-level cumulative breakdown matrix
  const matrixContainer = document.getElementById('journey-levels-summary');
  if (matrixContainer) {
    matrixContainer.innerHTML = '';
    const levelConfigs = [
      { level: 1, name: 'Cấp 1: Điền khuyết & Ghép nối', count: STATE.level1Completed.length, max: 100, xpRate: 10, color: '#3b82f6' },
      { level: 2, name: 'Cấp 2: Rèn cơ bắp câu', count: STATE.level2Completed.length, max: 100, xpRate: 20, color: '#10b981' },
      { level: 3, name: 'Cấp 3: Viết khối Module', count: STATE.level3Completed.length, max: 100, xpRate: 30, color: '#f59e0b' },
      { level: 4, name: 'Cấp 4: Phẫu thuật sửa văn', count: STATE.level4Completed.length, max: 100, xpRate: 40, color: '#8b5cf6' },
      { level: 5, name: 'Cấp 5: Ghép đoạn 200 chữ', count: STATE.level5Completed.length, max: 100, xpRate: 50, color: '#ec4899' },
      { level: 6, name: 'Cấp 6: Phòng thi 20 phút', count: STATE.level6Completed.length, max: 100, xpRate: 60, color: '#ef4444' },
      { level: 'MM', name: `🧠 Sơ đồ Mindmap (${typeof MINDMAP_DATA !== 'undefined' ? MINDMAP_DATA.length : 34} chủ đề)`, count: STATE.mindmapCompleted.length, max: (typeof MINDMAP_DATA !== 'undefined' ? MINDMAP_DATA.length : 34), xpRate: 50, color: '#0284c7' }
    ];
    
    levelConfigs.forEach(cfg => {
      const maxCount = cfg.max || 100;
      const pct = Math.min(Math.round((cfg.count / maxCount) * 100), 100);
      const xp = cfg.count * cfg.xpRate;
      const pill = document.createElement('div');
      pill.className = 'level-stat-pill';
      pill.innerHTML = `
        <div class="level-stat-pill-header">
          <span style="font-weight: 700; color: #1e293b;">${cfg.level === 'MM' ? 'Sơ đồ Mindmap' : `Cấp độ ${cfg.level}`}</span>
          <span style="color: ${cfg.color}; font-weight: 800;">${cfg.count}/${maxCount}</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${cfg.name}">${cfg.name}</div>
        <div class="level-stat-bar-track">
          <div class="level-stat-bar-fill" style="width: ${pct}%; background: ${cfg.color};"></div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem;">
          <span style="color: #b45309; font-weight: 700;">⭐ +${xp} XP</span>
          <span style="color: var(--text-muted); font-size: 0.75rem;">${pct}%</span>
        </div>
      `;
      matrixContainer.appendChild(pill);
    });
  }
  
  // 3. Render Day-by-Day timeline
  const timelineContainer = document.getElementById('journey-timeline-list');
  if (timelineContainer) {
    timelineContainer.innerHTML = '';
    
    if (dateKeys.length === 0) {
      timelineContainer.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; background: #f8fafc; border-radius: var(--radius-md); border: 1px dashed #cbd5e1;">
          <div style="font-size: 2.4rem; margin-bottom: 8px;">🌱</div>
          <p style="font-size: 1.05rem; font-weight: 600; color: #334155; margin-bottom: 6px;">Chưa có nhật ký làm bài nào được ghi nhận!</p>
          <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 500px; margin: 0 auto;">
            Mỗi khi bạn nộp bài ở bất kỳ Cấp độ nào từ 1 đến 6 hoặc hoàn thành Sơ đồ Mindmap, hệ thống sẽ tự động lưu lại vào trình duyệt kèm số câu, cấp độ và số điểm bạn đã đạt được.
          </p>
        </div>
      `;
      return;
    }
    
    const levelColors = {
      1: '#3b82f6',
      2: '#10b981',
      3: '#f59e0b',
      4: '#8b5cf6',
      5: '#ec4899',
      6: '#ef4444',
      mindmap: '#0284c7'
    };
    
    dateKeys.forEach((dateKey, index) => {
      const dayData = history[dateKey];
      
      // Determine expanded state: default to expanded for first day (index === 0) if not explicitly set
      let isExpanded = STATE.journeyExpandedDays[dateKey];
      if (isExpanded === undefined) {
        isExpanded = (index === 0);
        STATE.journeyExpandedDays[dateKey] = isExpanded;
      }
      
      const card = document.createElement('div');
      card.className = `day-card ${isExpanded ? '' : 'collapsed'}`;
      card.id = `day-card-${dateKey}`;
      
      // Calculate level summary chips for this day
      let levelChipsHtml = '';
      for (let lvl = 1; lvl <= 6; lvl++) {
        const count = dayData.levelCounts ? (dayData.levelCounts[lvl] || 0) : 0;
        const xp = dayData.levelXp ? (dayData.levelXp[lvl] || 0) : 0;
        if (count > 0) {
          levelChipsHtml += `
            <span style="display: inline-flex; align-items: center; gap: 4px; padding: 5px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid ${levelColors[lvl]}; border-radius: 4px; font-size: 0.82rem; font-weight: 600; color: #334155;">
              <span>Cấp ${lvl}:</span>
              <strong style="color: ${levelColors[lvl]};">${count} bài</strong>
              <span style="color: #b45309; font-size: 0.78rem;">(+${xp} XP)</span>
            </span>
          `;
        }
      }
      if (dayData.levelCounts && dayData.levelCounts['mindmap']) {
        const mmCount = dayData.levelCounts['mindmap'];
        const mmXp = dayData.levelXp ? (dayData.levelXp['mindmap'] || 0) : 0;
        levelChipsHtml += `
          <span style="display: inline-flex; align-items: center; gap: 4px; padding: 5px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #0284c7; border-radius: 4px; font-size: 0.82rem; font-weight: 600; color: #334155;">
            <span>🧠 Mindmap:</span>
            <strong style="color: #0284c7;">${mmCount} bài</strong>
            <span style="color: #b45309; font-size: 0.78rem;">(+${mmXp} XP)</span>
          </span>
        `;
      }
      
      // Activity rows
      let activityRowsHtml = '';
      const acts = dayData.activities || [];
      if (acts.length > 0) {
        acts.forEach(act => {
          const isMindmap = act.level === 'mindmap';
          const color = isMindmap ? '#0284c7' : (levelColors[act.level] || 'var(--primary)');
          const levelLabel = isMindmap ? '🧠 Mindmap' : `Cấp độ ${act.level}`;
          activityRowsHtml += `
            <tr>
              <td style="white-space: nowrap; color: var(--text-muted); font-size: 0.82rem; font-family: monospace;">${act.time || '--:--'}</td>
              <td>
                <span class="badge" style="background: ${color}15; color: ${color}; font-weight: 700; border: 1px solid ${color}40;">
                  ${levelLabel}
                </span>
              </td>
              <td>
                <strong>#${act.itemId}</strong>: <span style="color: #334155;">${escapeHtml(act.topic || '')}</span>
              </td>
              <td style="white-space: nowrap; text-align: right; color: #b45309; font-weight: 700;">
                +${act.xpEarned} XP
              </td>
            </tr>
          `;
        });
      } else {
        activityRowsHtml = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">Không có chi tiết bài làm</td></tr>`;
      }
      
      card.innerHTML = `
        <div class="day-header" onclick="toggleDayCard('${dateKey}')" title="Nhấp để đóng/mở chi tiết bài làm ngày này">
          <div class="day-title">
            <span>📅 ${dayData.displayDate || dateKey}</span>
          </div>
          <div class="day-badges">
            <span class="badge" style="background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 0.82rem;">
              📝 Đã nộp: ${dayData.totalExercises} bài
            </span>
            <span class="badge" style="background: #fef3c7; color: #b45309; font-weight: 700; font-size: 0.82rem;">
              ⭐ Tích lũy: +${dayData.totalXp} XP
            </span>
            <button type="button" class="day-toggle-btn" id="day-toggle-btn-${dateKey}" onclick="event.stopPropagation(); toggleDayCard('${dateKey}')">
              <span id="day-toggle-icon-${dateKey}" class="day-toggle-icon">${isExpanded ? '▲' : '▼'}</span>
              <span id="day-toggle-text-${dateKey}">${isExpanded ? 'Thu gọn' : 'Xem chi tiết'}</span>
            </button>
          </div>
        </div>
        <div class="day-body" id="day-body-${dateKey}" style="${isExpanded ? 'display: block;' : 'display: none;'}">
          <div class="day-level-chips">
            ${levelChipsHtml || '<span style="color: var(--text-muted); font-size: 0.82rem;">Chưa có phân loại bài tập</span>'}
          </div>
          <div style="overflow-x: auto;">
            <table class="day-activity-table">
              <thead>
                <tr>
                  <th style="width: 85px;">Giờ nộp</th>
                  <th style="width: 110px;">Cấp độ</th>
                  <th>Chủ đề bài tập</th>
                  <th style="width: 110px; text-align: right;">Điểm thưởng</th>
                </tr>
              </thead>
              <tbody>
                ${activityRowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      `;
      
      timelineContainer.appendChild(card);
    });
  }
}

window.toggleDayCard = function(dateKey) {
  const card = document.getElementById(`day-card-${dateKey}`);
  const body = document.getElementById(`day-body-${dateKey}`);
  const toggleText = document.getElementById(`day-toggle-text-${dateKey}`);
  const toggleIcon = document.getElementById(`day-toggle-icon-${dateKey}`);
  
  if (!card || !body) return;
  
  const isCurrentlyCollapsed = card.classList.contains('collapsed');
  if (isCurrentlyCollapsed) {
    card.classList.remove('collapsed');
    body.style.display = 'block';
    if (toggleText) toggleText.innerText = 'Thu gọn';
    if (toggleIcon) toggleIcon.innerText = '▲';
    STATE.journeyExpandedDays[dateKey] = true;
  } else {
    card.classList.add('collapsed');
    body.style.display = 'none';
    if (toggleText) toggleText.innerText = 'Xem chi tiết';
    if (toggleIcon) toggleIcon.innerText = '▼';
    STATE.journeyExpandedDays[dateKey] = false;
  }
};

window.expandAllJourneyDays = function() {
  const history = STATE.dailyHistory || {};
  Object.keys(history).forEach(dateKey => {
    STATE.journeyExpandedDays[dateKey] = true;
    const card = document.getElementById(`day-card-${dateKey}`);
    const body = document.getElementById(`day-body-${dateKey}`);
    const toggleText = document.getElementById(`day-toggle-text-${dateKey}`);
    const toggleIcon = document.getElementById(`day-toggle-icon-${dateKey}`);
    if (card) card.classList.remove('collapsed');
    if (body) body.style.display = 'block';
    if (toggleText) toggleText.innerText = 'Thu gọn';
    if (toggleIcon) toggleIcon.innerText = '▲';
  });
};

window.collapseAllJourneyDays = function() {
  const history = STATE.dailyHistory || {};
  Object.keys(history).forEach(dateKey => {
    STATE.journeyExpandedDays[dateKey] = false;
    const card = document.getElementById(`day-card-${dateKey}`);
    const body = document.getElementById(`day-body-${dateKey}`);
    const toggleText = document.getElementById(`day-toggle-text-${dateKey}`);
    const toggleIcon = document.getElementById(`day-toggle-icon-${dateKey}`);
    if (card) card.classList.add('collapsed');
    if (body) body.style.display = 'none';
    if (toggleText) toggleText.innerText = 'Xem chi tiết';
    if (toggleIcon) toggleIcon.innerText = '▼';
  });
};

// ----------------------------------------------------
// EVENT LISTENERS & FILTER SETUP
// ----------------------------------------------------
function setupEventListeners() {
  // Navigation Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
  
  // Level 1 Sub-Filters
  document.querySelectorAll('.filter-l1-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-l1-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.filterL1 = chip.dataset.type;
      renderLevel1Sidebar();
    });
  });

  // Level 2 Sub-Filters
  document.querySelectorAll('.filter-l2-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-l2-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.filterL2 = chip.dataset.type;
      renderLevel2Sidebar();
    });
  });

  // Level 3 Sub-Filters
  document.querySelectorAll('.filter-l3-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-l3-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.filterL3 = chip.dataset.type;
      renderLevel3Sidebar();
    });
  });

  // Level 4 Sub-Filters
  document.querySelectorAll('.filter-l4-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-l4-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.filterL4 = chip.dataset.type;
      renderLevel4Sidebar();
    });
  });

  // Level 5 Sub-Filters
  document.querySelectorAll('.filter-l5-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-l5-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.filterL5 = chip.dataset.type;
      renderLevel5Sidebar();
    });
  });

  // Level 6 Sub-Filters
  document.querySelectorAll('.filter-l6-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-l6-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.filterL6 = chip.dataset.type;
      renderLevel6Sidebar();
    });
  });

  // Status Filter
  const statusSelect = document.getElementById('status-filter-select');
  if (statusSelect) {
    statusSelect.addEventListener('change', (e) => {
      STATE.statusFilter = e.target.value;
      if (STATE.currentTab === 'level1') renderLevel1Sidebar();
      if (STATE.currentTab === 'level2') renderLevel2Sidebar();
      if (STATE.currentTab === 'level3') renderLevel3Sidebar();
      if (STATE.currentTab === 'level4') renderLevel4Sidebar();
      if (STATE.currentTab === 'level5') renderLevel5Sidebar();
      if (STATE.currentTab === 'level6') renderLevel6Sidebar();
    });
  }

  // Search input
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      if (STATE.currentTab === 'level1') renderLevel1Sidebar();
      if (STATE.currentTab === 'level2') renderLevel2Sidebar();
      if (STATE.currentTab === 'level3') renderLevel3Sidebar();
      if (STATE.currentTab === 'level4') renderLevel4Sidebar();
      if (STATE.currentTab === 'level5') renderLevel5Sidebar();
      if (STATE.currentTab === 'level6') renderLevel6Sidebar();
    });
  }

  // Textarea word counter - Level 2
  const textarea2 = document.getElementById('l2-writing-input');
  if (textarea2) {
    textarea2.addEventListener('input', updateLevel2WordCount);
  }

  // Textarea word counter - Level 3
  const textarea3 = document.getElementById('l3-writing-input');
  if (textarea3) {
    textarea3.addEventListener('input', updateLevel3WordCount);
  }

  // Textarea word counter - Level 4
  const textarea4 = document.getElementById('l4-writing-input');
  if (textarea4) {
    textarea4.addEventListener('input', updateLevel4WordCount);
  }

  // Textarea word counter - Level 5
  const textarea5 = document.getElementById('l5-writing-input');
  if (textarea5) {
    textarea5.addEventListener('input', updateLevel5WordCount);
  }

  // Textarea word counter - Level 6
  const textarea6 = document.getElementById('l6-writing-input');
  if (textarea6) {
    textarea6.addEventListener('input', updateLevel6WordCount);
  }

  // Level 1 Buttons
  document.getElementById('l1-btn-check').addEventListener('click', checkLevel1Answer);
  document.getElementById('l1-btn-reset').addEventListener('click', resetLevel1Answer);
  document.getElementById('l1-btn-answer').addEventListener('click', showLevel1Answer);
  document.getElementById('l1-btn-next').addEventListener('click', nextLevel1Exercise);
  document.getElementById('l1-btn-random').addEventListener('click', randomLevel1Exercise);

  // Level 2 Buttons
  document.getElementById('l2-btn-evaluate').addEventListener('click', evaluateLevel2Writing);
  document.getElementById('l2-btn-next').addEventListener('click', nextLevel2Exercise);
  document.getElementById('l2-btn-random').addEventListener('click', randomLevel2Exercise);

  // Level 3 Buttons
  const btnL3Eval = document.getElementById('l3-btn-evaluate');
  if (btnL3Eval) btnL3Eval.addEventListener('click', evaluateLevel3Writing);
  const btnL3Next = document.getElementById('l3-btn-next');
  if (btnL3Next) btnL3Next.addEventListener('click', nextLevel3Exercise);
  const btnL3Rand = document.getElementById('l3-btn-random');
  if (btnL3Rand) btnL3Rand.addEventListener('click', randomLevel3Exercise);

  // Level 4 Buttons
  const btnL4Eval = document.getElementById('l4-btn-evaluate');
  if (btnL4Eval) btnL4Eval.addEventListener('click', evaluateLevel4Writing);
  const btnL4Next = document.getElementById('l4-btn-next');
  if (btnL4Next) btnL4Next.addEventListener('click', nextLevel4Exercise);
  const btnL4Rand = document.getElementById('l4-btn-random');
  if (btnL4Rand) btnL4Rand.addEventListener('click', randomLevel4Exercise);

  // Level 5 Buttons
  const btnL5Eval = document.getElementById('l5-btn-evaluate');
  if (btnL5Eval) btnL5Eval.addEventListener('click', evaluateLevel5Writing);
  const btnL5Next = document.getElementById('l5-btn-next');
  if (btnL5Next) btnL5Next.addEventListener('click', nextLevel5Exercise);
  const btnL5Rand = document.getElementById('l5-btn-random');
  if (btnL5Rand) btnL5Rand.addEventListener('click', randomLevel5Exercise);

  // Level 6 Buttons
  const btnL6Eval = document.getElementById('l6-btn-evaluate');
  if (btnL6Eval) btnL6Eval.addEventListener('click', evaluateLevel6Writing);
  const btnL6Next = document.getElementById('l6-btn-next');
  if (btnL6Next) btnL6Next.addEventListener('click', nextLevel6Exercise);
  const btnL6Rand = document.getElementById('l6-btn-random');
  if (btnL6Rand) btnL6Rand.addEventListener('click', randomLevel6Exercise);

  // Level 6 Timer Buttons
  const btnTimerStart = document.getElementById('l6-btn-timer-start');
  if (btnTimerStart) btnTimerStart.addEventListener('click', startLevel6Timer);
  const btnTimerPause = document.getElementById('l6-btn-timer-pause');
  if (btnTimerPause) btnTimerPause.addEventListener('click', pauseLevel6Timer);
  const btnTimerReset = document.getElementById('l6-btn-timer-reset');
  if (btnTimerReset) btnTimerReset.addEventListener('click', resetLevel6Timer);
  
  // Print / Export Notebook
  const printBtn = document.getElementById('btn-print-notebook');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  // Print / Export Journey Report
  const printJourneyBtn = document.getElementById('btn-print-journey');
  if (printJourneyBtn) {
    printJourneyBtn.addEventListener('click', () => window.print());
  }

  // Journey Expand / Collapse All Buttons
  const btnExpAll = document.getElementById('btn-journey-expand-all');
  if (btnExpAll) btnExpAll.addEventListener('click', expandAllJourneyDays);

  const btnColAll = document.getElementById('btn-journey-collapse-all');
  if (btnColAll) btnColAll.addEventListener('click', collapseAllJourneyDays);

  // Clear / Reset Journey History
  const clearHistoryBtn = document.getElementById('btn-clear-history');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      const confirmed = confirm(
        "Bạn có chắc chắn muốn đặt lại toàn bộ lịch sử hành trình không?\n\n" +
        "- Nhật ký chi tiết từng ngày sẽ được làm mới.\n" +
        "- Các bài đã hoàn thành (6 cấp độ) và Sổ tay của em vẫn được giữ nguyên."
      );
      if (confirmed) {
        STATE.dailyHistory = {};
        saveState();
        renderJourneyReportView();
        updateStatsHeader();
        alert("Đã đặt lại nhật ký hành trình thành công!");
      }
    });
  }

  // Mindmap Filter Chips
  document.querySelectorAll('.filter-mm-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-mm-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      STATE.filterMindmap = chip.dataset.cat;
      renderMindmapSidebar();
    });
  });

  // Mindmap Search Input
  const mmSearchInput = document.getElementById('mm-search-input');
  if (mmSearchInput) {
    mmSearchInput.addEventListener('input', (e) => {
      STATE.mmSearchQuery = e.target.value;
      renderMindmapSidebar();
    });
  }

  // Mindmap Buttons
  const btnMmEval = document.getElementById('mm-btn-evaluate');
  if (btnMmEval) btnMmEval.addEventListener('click', evaluateMindmapExercise);

  const btnMmReset = document.getElementById('mm-btn-reset');
  if (btnMmReset) btnMmReset.addEventListener('click', resetMindmapExercise);

  const btnMmExport = document.getElementById('mm-btn-export-outline');
  if (btnMmExport) btnMmExport.addEventListener('click', () => {
    const item = MINDMAP_DATA.find(x => x.id === STATE.mindmapId);
    if (item) showMindmapOutline(item);
  });

  const btnMmNext = document.getElementById('mm-btn-next');
  if (btnMmNext) btnMmNext.addEventListener('click', nextMindmapExercise);

  const btnMmRand = document.getElementById('mm-btn-random');
  if (btnMmRand) btnMmRand.addEventListener('click', randomMindmapExercise);

  const btnMmSaveNb = document.getElementById('mm-btn-save-notebook');
  if (btnMmSaveNb) btnMmSaveNb.addEventListener('click', exportMindmapToNotebook);

  const btnMmCopyOut = document.getElementById('mm-btn-copy-outline');
  if (btnMmCopyOut) btnMmCopyOut.addEventListener('click', copyMindmapOutline);

  // Mobile Drawer Backdrop click
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (backdrop) backdrop.addEventListener('click', closeExerciseDrawer);

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeExerciseDrawer();
  });

  // Auto close mobile drawer when selecting any exercise in sidebar
  document.addEventListener('click', (e) => {
    if (e.target.closest('.sidebar-item')) {
      closeMobileDrawerAndScroll();
    }
  });

  syncMobileDrawerBadges();
}

// ========================================================
// MOBILE DRAWER & BOTTOM SHEET CONTROLS
// ========================================================
function openExerciseDrawer() {
  const currentSection = document.querySelector('section[id^="view-"]:not([style*="display: none"])');
  if (!currentSection) return;
  const sidebar = currentSection.querySelector('.exercise-sidebar');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (sidebar) {
    sidebar.classList.add('drawer-open');
    document.body.classList.add('drawer-locked');
  }
  if (backdrop) {
    backdrop.classList.add('active');
  }
}

function closeExerciseDrawer() {
  document.querySelectorAll('.exercise-sidebar.drawer-open').forEach(sb => {
    sb.classList.remove('drawer-open');
  });
  document.body.classList.remove('drawer-locked');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
  }
}

function toggleExerciseDrawer() {
  const currentSection = document.querySelector('section[id^="view-"]:not([style*="display: none"])');
  if (!currentSection) return;
  const sidebar = currentSection.querySelector('.exercise-sidebar');
  if (sidebar && sidebar.classList.contains('drawer-open')) {
    closeExerciseDrawer();
  } else {
    openExerciseDrawer();
  }
}

function closeMobileDrawerAndScroll() {
  closeExerciseDrawer();
  if (window.innerWidth <= 900) {
    const currentSection = document.querySelector('section[id^="view-"]:not([style*="display: none"])');
    if (currentSection) {
      const card = currentSection.querySelector('.exercise-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}

function syncMobileDrawerBadges() {
  const l1Badge = document.getElementById('m-l1-cur-badge');
  if (l1Badge && typeof LEVEL1_DATA !== 'undefined') {
    l1Badge.innerText = `Bài ${STATE.level1Id || 1}/${LEVEL1_DATA.length}`;
  }
  const l2Badge = document.getElementById('m-l2-cur-badge');
  if (l2Badge && typeof LEVEL2_DATA !== 'undefined') {
    l2Badge.innerText = `Bài ${STATE.level2Id || 1}/${LEVEL2_DATA.length}`;
  }
  const l3Badge = document.getElementById('m-l3-cur-badge');
  if (l3Badge && typeof LEVEL3_DATA !== 'undefined') {
    l3Badge.innerText = `Bài ${STATE.level3Id || 1}/${LEVEL3_DATA.length}`;
  }
  const l4Badge = document.getElementById('m-l4-cur-badge');
  if (l4Badge && typeof LEVEL4_DATA !== 'undefined') {
    l4Badge.innerText = `Bài ${STATE.level4Id || 1}/${LEVEL4_DATA.length}`;
  }
  const l5Badge = document.getElementById('m-l5-cur-badge');
  if (l5Badge && typeof LEVEL5_DATA !== 'undefined') {
    l5Badge.innerText = `Đề ${STATE.level5Id || 1}/${LEVEL5_DATA.length}`;
  }
  const l6Badge = document.getElementById('m-l6-cur-badge');
  if (l6Badge && typeof LEVEL6_DATA !== 'undefined') {
    l6Badge.innerText = `Đề ${STATE.level6Id || 1}/${LEVEL6_DATA.length}`;
  }
  const mmBadge = document.getElementById('m-mm-cur-badge');
  if (mmBadge && typeof MINDMAP_DATA !== 'undefined') {
    mmBadge.innerText = `Đề ${STATE.mindmapId || 1}/${MINDMAP_DATA.length}`;
  }
}

// Global start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


