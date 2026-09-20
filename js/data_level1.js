// Ngân hàng 100 bài tập Cấp độ 1: Ghép nối & Điền khuyết (Nghị luận xã hội lớp 9)
const LEVEL1_DATA = [
  {
    "id": 1,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lòng kiên trì",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng kiên trì':",
    "template": "Lòng kiên trì không phải là [blank_1], mà là [blank_2] để vượt qua thử thách nhằm chạm tới [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự cố chấp mù quáng",
      "blank_2": "bản lĩnh bền bỉ nỗ lực",
      "blank_3": "mục tiêu đã định"
    },
    "options": [
      "sự cố chấp mù quáng",
      "bản lĩnh bền bỉ nỗ lực",
      "mục tiêu đã định",
      "thái độ an phận thủ thường",
      "may mắn ngẫu nhiên"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng kiên trì', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 2,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Sự tự lập",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Sự tự lập':",
    "template": "Sự tự lập không đồng nghĩa với [blank_1], mà là [blank_2] suy nghĩ và hành động, không [blank_3] vào người khác.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự cô lập ích kỷ",
      "blank_2": "năng lực tự làm chủ",
      "blank_3": "dựa dẫm ỷ lại"
    },
    "options": [
      "sự cô lập ích kỷ",
      "năng lực tự làm chủ",
      "dựa dẫm ỷ lại",
      "sống xa lánh xã hội",
      "tự do buông thả"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Sự tự lập', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 3,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lòng dũng cảm",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng dũng cảm':",
    "template": "Lòng dũng cảm không phải là [blank_1], mà là [blank_2] và chiến thắng [blank_3] để bảo vệ lẽ phải.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự liều lĩnh bốc đồng",
      "blank_2": "tinh thần dám đối mặt",
      "blank_3": "nỗi sợ hãi"
    },
    "options": [
      "sự liều lĩnh bốc đồng",
      "tinh thần dám đối mặt",
      "nỗi sợ hãi",
      "sự liều mạng vô ích",
      "thái độ hung hăng"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng dũng cảm', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 4,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Đức khiêm tốn",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Đức khiêm tốn':",
    "template": "Đức khiêm tốn không phải là [blank_1], mà là [blank_2] khi nhìn nhận thành quả và biết [blank_3] một cách khách quan.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự tự ti nhút nhát",
      "blank_2": "thái độ đúng mực",
      "blank_3": "đánh giá bản thân"
    },
    "options": [
      "sự tự ti nhút nhát",
      "thái độ đúng mực",
      "đánh giá bản thân",
      "thói giả tạo che giấu",
      "sự khép kín thụ động"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Đức khiêm tốn', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 5,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lòng vị tha",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng vị tha':",
    "template": "Lòng vị tha không phải là [blank_1], mà là [blank_2] để mở ra cơ hội cho người khác [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự nhu nhược dung túng",
      "blank_2": "sự rộng lượng bao dung",
      "blank_3": "sửa chữa sai lầm"
    },
    "options": [
      "sự nhu nhược dung túng",
      "sự rộng lượng bao dung",
      "sửa chữa sai lầm",
      "sự im lặng chấp nhận",
      "thói dễ dãi vô nguyên tắc"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng vị tha', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 6,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lòng biết ơn",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng biết ơn':",
    "template": "Lòng biết ơn không dừng lại ở [blank_1], mà là [blank_2] sâu sắc về sự giúp đỡ và khát khao [blank_3] bằng hành động thiết thực.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "lời nói đãi bôi đầu môi",
      "blank_2": "sự ghi nhớ chân thành",
      "blank_3": "đáp đền công ơn"
    },
    "options": [
      "lời nói đãi bôi đầu môi",
      "sự ghi nhớ chân thành",
      "đáp đền công ơn",
      "nghĩa vụ bắt buộc",
      "lễ nghi hình thức"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng biết ơn', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 7,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Tinh thần tự học",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Tinh thần tự học':",
    "template": "Tinh thần tự học không phải là [blank_1], mà là [blank_2] tìm tòi, khám phá để làm chủ [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự nhồi nhét thụ động",
      "blank_2": "ý thức tự giác chủ động",
      "blank_3": "biển trời tri thức"
    },
    "options": [
      "sự nhồi nhét thụ động",
      "ý thức tự giác chủ động",
      "biển trời tri thức",
      "việc học vẹt đối phó",
      "học tủ vì điểm số"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Tinh thần tự học', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 8,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Tính trung thực",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Tính trung thực':",
    "template": "Tính trung thực không phải là [blank_1], mà là [blank_2] trong tâm hồn, luôn tôn trọng [blank_3] dù trong bất kỳ hoàn cảnh nào.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự ngây ngô dại dột",
      "blank_2": "sự ngay thẳng chính trực",
      "blank_3": "sự thật và lẽ phải"
    },
    "options": [
      "sự ngây ngô dại dột",
      "sự ngay thẳng chính trực",
      "sự thật và lẽ phải",
      "sự bảo thủ cứng nhắc",
      "thói bộc trực thiếu khéo léo"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Tính trung thực', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 9,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Ước mơ",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Ước mơ':",
    "template": "Ước mơ không phải là [blank_1] xa rời thực tế, mà là [blank_2] thắp sáng niềm tin và định hình [blank_3] cho tương lai.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "ảo tưởng viển vông",
      "blank_2": "khát vọng đẹp đẽ",
      "blank_3": "phương hướng phấn đấu"
    },
    "options": [
      "ảo tưởng viển vông",
      "khát vọng đẹp đẽ",
      "phương hướng phấn đấu",
      "mộng mơ hảo huyền",
      "sự tham vọng mù quáng"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Ước mơ', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 10,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Sự sẻ chia",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Sự sẻ chia':",
    "template": "Sự sẻ chia không phải là [blank_1], mà là [blank_2] từ trái tim, giúp xoa dịu nỗi đau và [blank_3] trong cộng đồng.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự bố thí thương hại",
      "blank_2": "sự thấu cảm chân thành",
      "blank_3": "kết nối tình người"
    },
    "options": [
      "sự bố thí thương hại",
      "sự thấu cảm chân thành",
      "kết nối tình người",
      "hành động phô trương",
      "ban phát ân huệ"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Sự sẻ chia', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 11,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Bản lĩnh",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Bản lĩnh':",
    "template": "Bản lĩnh không nằm ở [blank_1], mà là [blank_2] kiên định giúp con người vững vàng [blank_3] và nghịch cảnh.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "thói liều mạng bừa bãi",
      "blank_2": "sức mạnh nội tại",
      "blank_3": "vượt qua cám dỗ"
    },
    "options": [
      "thói liều mạng bừa bãi",
      "sức mạnh nội tại",
      "vượt qua cám dỗ",
      "tính hung hăng hiếu chiến",
      "vẻ ngoài gai góc"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Bản lĩnh', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 12,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Tình bạn chân chính",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Tình bạn chân chính':",
    "template": "Tình bạn chân chính không phải là [blank_1], mà là [blank_2] về tâm hồn, luôn đồng hành và nâng đỡ nhau [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "mối quan hệ lợi dụng",
      "blank_2": "sự đồng điệu tri âm",
      "blank_3": "cùng nhau tiến bộ"
    },
    "options": [
      "mối quan hệ lợi dụng",
      "sự đồng điệu tri âm",
      "cùng nhau tiến bộ",
      "giao thiệp xã giao",
      "nhóm vui chơi chốc lát"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Tình bạn chân chính', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 13,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Trách nhiệm",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Trách nhiệm':",
    "template": "Trách nhiệm không phải là [blank_1], mà là [blank_2] của mỗi cá nhân trước gia đình, xã hội và trước [blank_3] của chính mình.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "gánh nặng bị ép buộc",
      "blank_2": "bổn phận tự giác",
      "blank_3": "kết quả hành động"
    },
    "options": [
      "gánh nặng bị ép buộc",
      "bổn phận tự giác",
      "kết quả hành động",
      "nghĩa vụ hành chính",
      "món nợ ân nghĩa"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Trách nhiệm', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 14,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lòng yêu nước",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng yêu nước':",
    "template": "Lòng yêu nước không nằm ở [blank_1], mà là [blank_2] với cội nguồn dân tộc, thể hiện qua từng [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "khẩu hiệu hô hào sáo rỗng",
      "blank_2": "tình cảm thiêng liêng gắn bó",
      "blank_3": "việc làm cụ thể hàng ngày"
    },
    "options": [
      "khẩu hiệu hô hào sáo rỗng",
      "tình cảm thiêng liêng gắn bó",
      "việc làm cụ thể hàng ngày",
      "chủ nghĩa dân tộc cực đoan",
      "lời hứa suông lúc an nhàn"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng yêu nước', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 15,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lạc quan",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lạc quan':",
    "template": "Lạc quan không phải là [blank_1] trước biến cố, mà là [blank_2] nhìn nhận cuộc sống để [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự vô tư vô tâm",
      "blank_2": "thái độ tích cực",
      "blank_3": "tìm thấy cơ hội trong nghịch cảnh"
    },
    "options": [
      "sự vô tư vô tâm",
      "thái độ tích cực",
      "tìm thấy cơ hội trong nghịch cảnh",
      "nụ cười gượng gạo",
      "thói trốn tránh thực tại"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lạc quan', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 16,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lòng trắc ẩn",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng trắc ẩn':",
    "template": "Lòng trắc ẩn không phải là [blank_1], mà là [blank_2] của tâm hồn biết đau trước nỗi đau của người khác và sẵn sàng [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự xúc động vu vơ",
      "blank_2": "sự rung cảm sâu xa",
      "blank_3": "chia sẻ nỗi đau tha nhân"
    },
    "options": [
      "sự xúc động vu vơ",
      "sự rung cảm sâu xa",
      "chia sẻ nỗi đau tha nhân",
      "thói tò mò hiếu kỳ",
      "sự thương xót cửa miệng"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng trắc ẩn', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 17,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lòng tự trọng",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng tự trọng':",
    "template": "Lòng tự trọng không phải là [blank_1], mà là [blank_2] cao quý, giúp con người [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "thói tự cao tự đại",
      "blank_2": "ý thức giữ gìn phẩm giá",
      "blank_3": "không cúi đầu trước điều sai trái"
    },
    "options": [
      "thói tự cao tự đại",
      "ý thức giữ gìn phẩm giá",
      "không cúi đầu trước điều sai trái",
      "sự bảo thủ cố chấp",
      "sĩ diện hão huyền"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng tự trọng', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 18,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Kỷ luật bản thân",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Kỷ luật bản thân':",
    "template": "Kỷ luật bản thân không phải là [blank_1], mà chính là [blank_2] giúp ta làm chủ thời gian và [blank_3] của chính mình.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự giam cầm gò bó",
      "blank_2": "chiếc chìa khóa tự do",
      "blank_3": "chiến thắng sự lười biếng"
    },
    "options": [
      "sự giam cầm gò bó",
      "chiếc chìa khóa tự do",
      "chiến thắng sự lười biếng",
      "hình phạt nghiêm khắc",
      "nếp sống cứng nhắc"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Kỷ luật bản thân', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 19,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Sự lắng nghe",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Sự lắng nghe':",
    "template": "Sự lắng nghe không đơn thuần là [blank_1], mà là nghệ thuật của [blank_2], mở rộng trái tim để [blank_3] với người đối diện.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự im lặng vô cảm",
      "blank_2": "sự thấu hiểu chân thành",
      "blank_3": "kết nối tâm hồn"
    },
    "options": [
      "sự im lặng vô cảm",
      "sự thấu hiểu chân thành",
      "kết nối tâm hồn",
      "hành vi đối phó lịch sự",
      "việc nghe qua loa đại khái"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Sự lắng nghe', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 20,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Chữ tín",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Chữ tín':",
    "template": "Chữ tín không phải là [blank_1], mà là [blank_2] của một con người, là nền tảng xây dựng [blank_3] trong mọi mối quan hệ.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "lời hứa đãi bôi gió bay",
      "blank_2": "thước đo phẩm hạnh",
      "blank_3": "niềm tin bền vững"
    },
    "options": [
      "lời hứa đãi bôi gió bay",
      "thước đo phẩm hạnh",
      "niềm tin bền vững",
      "giao kèo hình thức",
      "thói mị dân lôi kéo"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Chữ tín', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 21,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Sự cống hiến",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Sự cống hiến':",
    "template": "Sự cống hiến không vì mục đích [blank_1], mà là [blank_2] của trí tuệ và công sức nhằm [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự phô trương tên tuổi",
      "blank_2": "sự hy sinh thầm lặng",
      "blank_3": "xây dựng cộng đồng tốt đẹp"
    },
    "options": [
      "sự phô trương tên tuổi",
      "sự hy sinh thầm lặng",
      "xây dựng cộng đồng tốt đẹp",
      "mưu cầu bổng lộc",
      "ghi danh lưu danh"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Sự cống hiến', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 22,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Khát vọng",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Khát vọng':",
    "template": "Khát vọng chân chính khác với [blank_1], bởi nó là [blank_2] thôi thúc con người không ngừng học hỏi để [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "lòng tham không đáy",
      "blank_2": "nguồn năng lượng tinh thần",
      "blank_3": "vươn tới những đỉnh cao"
    },
    "options": [
      "lòng tham không đáy",
      "nguồn năng lượng tinh thần",
      "vươn tới những đỉnh cao",
      "sự thèm khát danh lợi",
      "dục vọng vị kỷ"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Khát vọng', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 23,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Lòng bao dung",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng bao dung':",
    "template": "Lòng bao dung không phải là [blank_1], mà là [blank_2] biết thứ tha lỗi lầm để [blank_3] trong cuộc sống.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự thỏa hiệp dễ dãi",
      "blank_2": "độ lượng của trái tim",
      "blank_3": "chữa lành những rạn nứt"
    },
    "options": [
      "sự thỏa hiệp dễ dãi",
      "độ lượng của trái tim",
      "chữa lành những rạn nứt",
      "thái độ buông xuôi",
      "dung dưỡng cái xấu"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng bao dung', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 24,
    "level": 1,
    "subType": "fill_definition",
    "category": "Hiện tượng đời sống",
    "topic": "Lối sống vô cảm",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lối sống vô cảm':",
    "template": "Lối sống vô cảm không phải là [blank_1], mà là một [blank_2], làm xói mòn tình thương và hủy hoại [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "một tính cách bình thường",
      "blank_2": "căn bệnh tâm hồn nguy hiểm",
      "blank_3": "sự gắn kết giữa người với người"
    },
    "options": [
      "một tính cách bình thường",
      "căn bệnh tâm hồn nguy hiểm",
      "sự gắn kết giữa người với người",
      "lối sống kín đáo",
      "sự điềm đạm ít nói"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lối sống vô cảm', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 25,
    "level": 1,
    "subType": "fill_definition",
    "category": "Hiện tượng đời sống",
    "topic": "Nghiện mạng xã hội",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Nghiện mạng xã hội':",
    "template": "Nghiện mạng xã hội không chỉ là [blank_1], mà là [blank_2] vào thế giới ảo, khiến giới trẻ [blank_3] và cơ hội phát triển bản thân.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "việc giải trí vô hại",
      "blank_2": "sự phụ thuộc tiêu cực",
      "blank_3": "đánh mất thời gian thực tế"
    },
    "options": [
      "việc giải trí vô hại",
      "sự phụ thuộc tiêu cực",
      "đánh mất thời gian thực tế",
      "thói quen vô thưởng vô phạt",
      "xu hướng thời thượng"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Nghiện mạng xã hội', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 26,
    "level": 1,
    "subType": "fill_definition",
    "category": "Hiện tượng đời sống",
    "topic": "Áp lực đồng trang lứa",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Áp lực đồng trang lứa':",
    "template": "Áp lực đồng trang lứa khác với [blank_1], bởi nó gieo rắc [blank_2] khi luôn so sánh mình với người khác, khiến ta [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "động lực thi đua lành mạnh",
      "blank_2": "nỗi bất an vô hình",
      "blank_3": "tự ti và đánh mất bản sắc"
    },
    "options": [
      "động lực thi đua lành mạnh",
      "nỗi bất an vô hình",
      "tự ti và đánh mất bản sắc",
      "tinh thần học hỏi bạn bè",
      "sự nỗ lực cá nhân"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Áp lực đồng trang lứa', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 27,
    "level": 1,
    "subType": "fill_definition",
    "category": "Hiện tượng đời sống",
    "topic": "Bạo lực học đường",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Bạo lực học đường':",
    "template": "Bạo lực học đường không phải là [blank_1], mà là [blank_2] đến nhân phẩm bạn học, để lại những [blank_3] dai dẳng.",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "xích mích con nít thông thường",
      "blank_2": "hành vi xâm hại nghiêm trọng",
      "blank_3": "tổn thương thể xác và tinh thần"
    },
    "options": [
      "xích mích con nít thông thường",
      "hành vi xâm hại nghiêm trọng",
      "tổn thương thể xác và tinh thần",
      "trò đùa vui vô hại",
      "va chạm ngẫu nhiên"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Bạo lực học đường', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 28,
    "level": 1,
    "subType": "fill_definition",
    "category": "Hiện tượng đời sống",
    "topic": "Văn hóa ứng xử trên mạng",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Văn hóa ứng xử trên mạng':",
    "template": "Văn hóa ứng xử trên mạng không phải là [blank_1], mà là [blank_2] thể hiện qua từng bình luận, góp phần [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "quyền tự do phát ngôn vô tội vạ",
      "blank_2": "chuẩn mực đạo đức số",
      "blank_3": "xây dựng không gian mạng văn minh"
    },
    "options": [
      "quyền tự do phát ngôn vô tội vạ",
      "chuẩn mực đạo đức số",
      "xây dựng không gian mạng văn minh",
      "sự a dua theo đám đông",
      "trò giải trí ẩn danh"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Văn hóa ứng xử trên mạng', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 29,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Thói quen đọc sách",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Thói quen đọc sách':",
    "template": "Thói quen đọc sách không phải là [blank_1], mà là [blank_2] và bồi đắp tâm hồn, giúp con người [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sở thích xa xỉ",
      "blank_2": "hành trình nuôi dưỡng trí tuệ",
      "blank_3": "mở rộng tầm nhìn cuộc sống"
    },
    "options": [
      "sở thích xa xỉ",
      "hành trình nuôi dưỡng trí tuệ",
      "mở rộng tầm nhìn cuộc sống",
      "việc giải trí thụ động",
      "thói quen lỗi thời"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Thói quen đọc sách', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 30,
    "level": 1,
    "subType": "fill_definition",
    "category": "Hiện tượng đời sống",
    "topic": "Bệnh thành tích trong giáo dục",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Bệnh thành tích trong giáo dục':",
    "template": "Bệnh thành tích không phải là [blank_1], mà là [blank_2] chạy theo những con số ảo, bóp méo [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "khát khao vươn lên thực chất",
      "blank_2": "căn bệnh hình thức giả dối",
      "blank_3": "chất lượng dạy và học"
    },
    "options": [
      "khát khao vươn lên thực chất",
      "căn bệnh hình thức giả dối",
      "chất lượng dạy và học",
      "tinh thần nỗ lực thi cử",
      "thành tích học sinh giỏi"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Bệnh thành tích trong giáo dục', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 31,
    "level": 1,
    "subType": "fill_definition",
    "category": "Hiện tượng đời sống",
    "topic": "Rác thải nhựa",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Rác thải nhựa':",
    "template": "Ô nhiễm rác thải nhựa không chỉ là [blank_1], mà là [blank_2] trên toàn cầu, hủy hoại hệ sinh thái và đe dọa trực tiếp [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "vấn đề của riêng môi trường",
      "blank_2": "hiểm họa đe dọa sự sống",
      "blank_3": "tương lai của thế hệ mai sau"
    },
    "options": [
      "vấn đề của riêng môi trường",
      "hiểm họa đe dọa sự sống",
      "tương lai của thế hệ mai sau",
      "sự bất tiện tạm thời",
      "trách nhiệm của công ty vệ sinh"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Rác thải nhựa', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 32,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Sự kiên nhẫn",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Sự kiên nhẫn':",
    "template": "Sự kiên nhẫn không phải là [blank_1], mà là [blank_2] để chờ đợi và tích lũy, giúp con người [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự chần chừ thụ động",
      "blank_2": "bản lĩnh làm chủ thời gian",
      "blank_3": "thu hoạch quả ngọt đúng lúc"
    },
    "options": [
      "sự chần chừ thụ động",
      "bản lĩnh làm chủ thời gian",
      "thu hoạch quả ngọt đúng lúc",
      "thái độ ngại hành động",
      "sự cam chịu nhẫn nhục"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Sự kiên nhẫn', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 33,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Tình cảm gia đình",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Tình cảm gia đình':",
    "template": "Tình cảm gia đình không đơn thuần là [blank_1], mà là [blank_2] của mỗi con người, nơi nâng đỡ và [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "mối ràng buộc trách nhiệm",
      "blank_2": "bến đỗ bình yên nhất",
      "blank_3": "tiếp thêm sức mạnh vượt sóng gió"
    },
    "options": [
      "mối ràng buộc trách nhiệm",
      "bến đỗ bình yên nhất",
      "tiếp thêm sức mạnh vượt sóng gió",
      "nghĩa vụ máu mủ",
      "nơi chốn tạm bợ"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Tình cảm gia đình', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 34,
    "level": 1,
    "subType": "fill_definition",
    "category": "Tư tưởng đạo lý",
    "topic": "Văn hóa cảm ơn và xin lỗi",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Văn hóa cảm ơn và xin lỗi':",
    "template": "Lời cảm ơn và xin lỗi không phải là [blank_1], mà là [blank_2] thể hiện lòng tự trọng và sự tôn trọng người khác, giúp [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "nghi thức xã giao khách sáo",
      "blank_2": "nét đẹp văn hóa cốt lõi",
      "blank_3": "gắn kết và hàn gắn mối quan hệ"
    },
    "options": [
      "nghi thức xã giao khách sáo",
      "nét đẹp văn hóa cốt lõi",
      "gắn kết và hàn gắn mối quan hệ",
      "câu nói đãi bôi sáo rỗng",
      "lời nói của kẻ yếu thế"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Văn hóa cảm ơn và xin lỗi', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 35,
    "level": 1,
    "subType": "fill_definition",
    "category": "Hiện tượng đời sống",
    "topic": "Lòng trung thực trong thi cử",
    "question": "Hãy kéo hoặc chọn các cụm từ thích hợp điền vào chỗ trống để hoàn chỉnh câu định nghĩa chuẩn xác về 'Lòng trung thực trong thi cử':",
    "template": "Trung thực trong thi cử không phải là [blank_1], mà chính là [blank_2] của người học sinh, bảo đảm cho việc [blank_3].",
    "blankKeys": [
      "blank_1",
      "blank_2",
      "blank_3"
    ],
    "correct": {
      "blank_1": "sự dại dột thiệt thòi",
      "blank_2": "thước đo lòng tự trọng",
      "blank_3": "đánh giá thực chất năng lực"
    },
    "options": [
      "sự dại dột thiệt thòi",
      "thước đo lòng tự trọng",
      "đánh giá thực chất năng lực",
      "sự ngây thơ trước điểm số",
      "nguyên tắc cứng nhắc thiếu linh hoạt"
    ],
    "explanation": "💡 Lời thầy cô: Để định nghĩa 'Lòng trung thực trong thi cử', bí quyết là dùng cấu trúc tương phản 'Không phải là [mặt tiêu cực/bề nổi] mà là [bản chất cốt lõi] nhằm [giá trị đạt được]'. Cách viết này giúp câu văn khúc chiết, triệt tiêu ngay lối nghĩ nông cạn một chiều."
  },
  {
    "id": 36,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tại sao cần tự học?",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tại sao cần tự học?':",
    "template": "Trước hết, tự học giúp ta chủ động chiếm lĩnh tri thức; [blank_1] nó rèn luyện tư duy độc lập và tính sáng tạo; [blank_2] nếu chỉ thụ động nghe giảng, chúng ta sẽ mãi là cái bóng của người khác.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "không những thế",
      "blank_2": "ngược lại"
    },
    "options": [
      "không những thế",
      "ngược lại",
      "bởi vì",
      "cho nên"
    ],
    "explanation": "💡 Lời thầy cô: Dùng liên từ lũy tiến 'không những thế' và liên từ tương phản 'ngược lại' để tạo thế đối sánh mạnh mẽ."
  },
  {
    "id": 37,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Vì sao không nên nghiện mạng xã hội?",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Vì sao không nên nghiện mạng xã hội?':",
    "template": "Mạng xã hội mang lại kho tàng thông tin vô tận, [blank_1] nếu sa đà quá mức, con người sẽ bị lệ thuộc vào thế giới ảo. [blank_2], việc lạm dụng màn hình điện tử làm suy giảm thị lực và hủy hoại khả năng tập trung sâu.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "tuy nhiên",
      "blank_2": "Hơn thế nữa"
    },
    "options": [
      "tuy nhiên",
      "Hơn thế nữa",
      "do đó",
      "vì vậy"
    ],
    "explanation": "💡 Lời thầy cô: Dùng 'tuy nhiên' để chuyển ý từ mặt lợi sang mặt hại, sau đó dùng 'Hơn thế nữa' để bổ sung luận cứ tăng cấp."
  },
  {
    "id": 38,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tác dụng của lòng biết ơn",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tác dụng của lòng biết ơn':",
    "template": "Lòng biết ơn là cội nguồn của mọi đức hạnh, [blank_1] khi biết ơn, trái tim ta luôn ngập tràn sự trân trọng và khiêm nhường. [blank_2], người biết ơn luôn nhận được sự tin yêu và giúp đỡ của những người xung quanh.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "bởi vì",
      "blank_2": "Nhờ đó"
    },
    "options": [
      "bởi vì",
      "Nhờ đó",
      "tuy vậy",
      "mặc dù"
    ],
    "explanation": "💡 Lời thầy cô: Cặp từ 'bởi vì' giải thích nguyên nhân tâm lý bên trong, 'Nhờ đó' chỉ ra hệ quả tốt đẹp bên ngoài."
  },
  {
    "id": 39,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Ý nghĩa của sự thất bại",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Ý nghĩa của sự thất bại':",
    "template": "Thất bại là điều khó tránh khỏi trên đường đời, [blank_1] điều quan trọng không phải là ta ngã xuống bao nhiêu lần mà là ta có đứng dậy hay không. [blank_2], mỗi lần vấp ngã là một bài học vô giá tôi luyện ý chí vững vàng hơn.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "thế nhưng",
      "blank_2": "Bởi lẽ"
    },
    "options": [
      "thế nhưng",
      "Bởi lẽ",
      "do đó",
      "ngược lại"
    ],
    "explanation": "💡 Lời thầy cô: Dùng 'thế nhưng' để chuyển hướng thái độ tích cực, 'Bởi lẽ' mở đầu cho phần phân tích giá trị bài học."
  },
  {
    "id": 40,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Hậu quả của lối sống vô cảm",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Hậu quả của lối sống vô cảm':",
    "template": "Lối sống vô cảm khiến tâm hồn con người trở nên khô cằn và cô độc. [blank_1], nó còn làm xói mòn truyền thống nhân ái 'thương người như thể thương thân' của dân tộc; [blank_2] nếu không kịp thời thức tỉnh, xã hội sẽ biến thành một cỗ máy lạnh lùng thiếu vắng tình người.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Không chỉ dừng lại ở phạm vi cá nhân",
      "blank_2": "chính vì thế"
    },
    "options": [
      "Không chỉ dừng lại ở phạm vi cá nhân",
      "chính vì thế",
      "ngược lại",
      "mặc dù vậy"
    ],
    "explanation": "💡 Lời thầy cô: Nâng tầm mức độ ảnh hưởng từ cá nhân sang cộng đồng bằng cụm từ chuyển tiếp quy mô."
  },
  {
    "id": 41,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tầm quan trọng của lòng dũng cảm",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tầm quan trọng của lòng dũng cảm':",
    "template": "Con người cần lòng dũng cảm [blank_1] cuộc sống luôn chứa đựng những chông gai và thử thách bất ngờ. [blank_2] thiếu đi bản lĩnh dám đối mặt, chúng ta sẽ mãi co ro trong vùng an toàn và bỏ lỡ những cơ hội trưởng thành.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "bởi vì",
      "blank_2": "Nếu như"
    },
    "options": [
      "bởi vì",
      "Nếu như",
      "cho dù",
      "thế nên"
    ],
    "explanation": "💡 Lời thầy cô: Dùng giả định phủ định 'Nếu như thiếu đi...' để làm nổi bật sự cấp thiết của luận điểm."
  },
  {
    "id": 42,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Sức mạnh của tính kỷ luật",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Sức mạnh của tính kỷ luật':",
    "template": "Động lực có thể thôi thúc chúng ta bắt đầu, [blank_1] chỉ có kỷ luật mới giúp ta đi đến đích cuối cùng. [blank_2], khi rèn luyện được thói quen nghiêm khắc với bản thân, chúng ta sẽ từng bước làm chủ số phận của mình.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "song",
      "blank_2": "Bởi vì"
    },
    "options": [
      "song",
      "Bởi vì",
      "do đó",
      "tuy thế"
    ],
    "explanation": "💡 Lời thầy cô: Cặp liên từ 'song' (nhưng) đối lập ngắn gọn và 'Bởi vì' giải thích tính tất yếu của thành công."
  },
  {
    "id": 43,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Văn hóa đọc sách thời công nghệ",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Văn hóa đọc sách thời công nghệ':",
    "template": "Mạng internet mang đến thông tin nhanh chóng và tiện lợi, [blank_1] việc đọc sách giấy truyền thống vẫn giữ vị thế độc tôn trong việc nuôi dưỡng tư duy chiều sâu. [blank_2], từng trang sách đòi hỏi người đọc phải nghiền ngẫm, tưởng tượng và đúc kết thay vì lướt qua bề nổi.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "tuy nhiên",
      "blank_2": "Thật vậy"
    },
    "options": [
      "tuy nhiên",
      "Thật vậy",
      "ngược lại",
      "bởi lẽ"
    ],
    "explanation": "💡 Lời thầy cô: 'Thật vậy' dùng để khẳng định một chân lý hiển nhiên vừa nêu ở câu trước."
  },
  {
    "id": 44,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tác hại của việc trì hoãn",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tác hại của việc trì hoãn':",
    "template": "Trì hoãn mang lại cảm giác thoải mái nhất thời, [blank_1] về lâu dài nó gieo rắc sự âu lo và áp lực dồn nén. [blank_2], những người có thói quen 'để mai tính' thường tự đánh mất những thời điểm vàng để bứt phá trong học tập.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "nhưng",
      "blank_2": "Hậu quả là"
    },
    "options": [
      "nhưng",
      "Hậu quả là",
      "bởi vì",
      "mặc dù"
    ],
    "explanation": "💡 Lời thầy cô: 'Hậu quả là' chỉ trực tiếp vào tác động tiêu cực, tăng tính cảnh báo cho luận điểm."
  },
  {
    "id": 45,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tại sao phải tôn trọng sự khác biệt?",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tại sao phải tôn trọng sự khác biệt?':",
    "template": "Mỗi con người sinh ra là một cá thể độc bản với cá tính và xuất phát điểm khác nhau. [blank_1], việc tôn trọng sự khác biệt là tiền đề để xây dựng một xã hội đa dạng và hòa hợp; [blank_2] nếu ai cũng ép buộc người khác phải giống mình, thế giới sẽ trở nên ngột ngạt và đơn điệu.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Vì thế",
      "blank_2": "ngược lại"
    },
    "options": [
      "Vì thế",
      "ngược lại",
      "tuy nhiên",
      "cho nên"
    ],
    "explanation": "💡 Lời thầy cô: Cặp từ 'Vì thế' (kết luận tất yếu) và 'ngược lại' (phản đề nếu vi phạm quy luật)."
  },
  {
    "id": 46,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Ý nghĩa của sự tha thứ",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Ý nghĩa của sự tha thứ':",
    "template": "Tha thứ cho người khác không làm thay đổi được quá khứ đã qua, [blank_1] nó mở rộng cánh cửa tương lai cho cả đôi bên. [blank_2], khi buông bỏ được oán hận, chính tâm hồn ta là người đầu tiên được giải thoát khỏi sự ngột ngạt.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "nhưng chắc chắn",
      "blank_2": "Hơn thế nữa"
    },
    "options": [
      "nhưng chắc chắn",
      "Hơn thế nữa",
      "do vậy",
      "mặc dù"
    ],
    "explanation": "💡 Lời thầy cô: Nhấn mạnh sự quả quyết 'nhưng chắc chắn' và bổ sung lý lẽ bằng 'Hơn thế nữa'."
  },
  {
    "id": 47,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Bảo vệ môi trường bắt đầu từ việc nhỏ",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Bảo vệ môi trường bắt đầu từ việc nhỏ':",
    "template": "Nhiều người lầm tưởng bảo vệ môi trường là những dự án vĩ mô của nhà nước, [blank_1] thực chất nó bắt đầu từ những thói quen giản dị hàng ngày. [blank_2], việc tắt một bóng đèn khi rời phòng hay từ chối một chiếc túi nilon đã là hành động thiết thực cứu lấy Trái Đất.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "song trên thực tế",
      "blank_2": "Chẳng hạn như"
    },
    "options": [
      "song trên thực tế",
      "Chẳng hạn như",
      "bởi vì",
      "kết quả là"
    ],
    "explanation": "💡 Lời thầy cô: Đưa dẫn chứng minh họa bằng liên từ liên hệ thực tế 'Chẳng hạn như'."
  },
  {
    "id": 48,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Bản lĩnh nói 'Không' trước cám dỗ",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Bản lĩnh nói 'Không' trước cám dỗ':",
    "template": "Tuổi trẻ thường khao khát được khẳng định mình và hòa nhập cùng bạn bè, [blank_1] điều đó không đồng nghĩa với việc a dua theo những thói hư tật xấu. [blank_2], dám dũng cảm nói 'Không' trước những lời rủ rê tiêu cực chính là biểu hiện cao nhất của một nhân cách tự chủ.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "nhưng",
      "blank_2": "Ngược lại"
    },
    "options": [
      "nhưng",
      "Ngược lại",
      "vì thế",
      "do đó"
    ],
    "explanation": "💡 Lời thầy cô: Lật lại vấn đề để phân biệt giữa hòa nhập và hòa tan."
  },
  {
    "id": 49,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Giá trị của lời xin lỗi chân thành",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Giá trị của lời xin lỗi chân thành':",
    "template": "Nói lời xin lỗi chưa bao giờ là điều dễ dàng [blank_1] nó đòi hỏi con người phải vượt qua cái tôi và sự tự ái cá nhân. [blank_2], một lời nhận lỗi kịp thời và chân thành có sức mạnh hàn gắn mọi vết nứt trong các mối quan hệ.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "bởi lẽ",
      "blank_2": "Tuy nhiên"
    },
    "options": [
      "bởi lẽ",
      "Tuy nhiên",
      "nhờ vậy",
      "cho nên"
    ],
    "explanation": "💡 Lời thầy cô: Giải thích độ khó bằng 'bởi lẽ' rồi khẳng định sức mạnh hàn gắn bằng 'Tuy nhiên'."
  },
  {
    "id": 50,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tác hại của bạo lực ngôn từ trên mạng",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tác hại của bạo lực ngôn từ trên mạng':",
    "template": "Bàn phím không có lưỡi dao, [blank_1] những bình luận ác ý ẩn danh lại có thể cứa sâu vào tâm hồn nạn nhân những vết thương rỉ máu. [blank_2], nhiều bạn trẻ đã rơi vào trầm cảm, thậm chí tìm đến cái chết chỉ vì những lời thóa mạ vô căn cứ từ cộng đồng mạng.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "thế nhưng",
      "blank_2": "Thực tế đau lòng là"
    },
    "options": [
      "thế nhưng",
      "Thực tế đau lòng là",
      "do đó",
      "bởi vì"
    ],
    "explanation": "💡 Lời thầy cô: Tạo cảm xúc chân thực, thức tỉnh bằng cụm từ 'Thực tế đau lòng là'."
  },
  {
    "id": 51,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Sự tự tin và thành công",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Sự tự tin và thành công':",
    "template": "Tự tin không đảm bảo bạn sẽ luôn luôn chiến thắng, [blank_1] nó tiếp thêm cho bạn dũng khí để không bao giờ bỏ cuộc. [blank_2], người có niềm tin vào bản thân sẽ biến thử thách thành cơ hội để khẳng định giá trị riêng.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "nhưng",
      "blank_2": "Chính vì vậy"
    },
    "options": [
      "nhưng",
      "Chính vì vậy",
      "cho nên",
      "ngược lại"
    ],
    "explanation": "💡 Lời thầy cô: Khẳng định vai trò tiếp sức của sự tự tin."
  },
  {
    "id": 52,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Ý nghĩa của tinh thần cống hiến thầm lặng",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Ý nghĩa của tinh thần cống hiến thầm lặng':",
    "template": "Không phải ai cũng trở thành vĩ nhân được vinh danh trên bục cao, [blank_1] mỗi sự đóng góp thầm lặng đều góp phần làm cho cuộc sống này thêm tươi đẹp. [blank_2], những người quét rác đêm đông hay các chiến sĩ biên thùy xa xôi chính là những người hùng thầm lặng của đất nước.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "thế nhưng",
      "blank_2": "Rõ ràng"
    },
    "options": [
      "thế nhưng",
      "Rõ ràng",
      "do đó",
      "bởi lẽ"
    ],
    "explanation": "💡 Lời thầy cô: Khẳng định vẻ đẹp bình dị của sự cống hiến."
  },
  {
    "id": 53,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Bệnh vô cảm trước cái ác",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Bệnh vô cảm trước cái ác':",
    "template": "Sự im lặng trước cái xấu không phải là sự khôn ngoan hay an toàn, [blank_1] đó là một hình thức đồng lõa gián tiếp với cái ác. [blank_2], như Martin Luther King từng khẳng định: 'Thế giới chìm trong đau khổ không chỉ vì tội ác của kẻ xấu mà còn vì sự im lặng đáng sợ của người tốt'.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "mà trái lại",
      "blank_2": "Đúng như vậy"
    },
    "options": [
      "mà trái lại",
      "Đúng như vậy",
      "cho nên",
      "thế nhưng"
    ],
    "explanation": "💡 Lời thầy cô: Dẫn dắt câu danh ngôn tiếp sức bằng cụm 'Đúng như vậy'."
  },
  {
    "id": 54,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Học từ những sai lầm",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Học từ những sai lầm':",
    "template": "Sai lầm không phải là dấu chấm hết cho một nỗ lực, [blank_1] nó chỉ là một lời nhắc nhở rằng phương pháp cũ chưa thực sự hiệu quả. [blank_2], người thông minh là người biết biến vấp ngã thành bài học kinh nghiệm để bước tiếp vững vàng hơn.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "trái lại",
      "blank_2": "Do đó"
    },
    "options": [
      "trái lại",
      "Do đó",
      "tuy nhiên",
      "bởi vì"
    ],
    "explanation": "💡 Lời thầy cô: Tư duy tích cực: biến sai lầm thành bài học."
  },
  {
    "id": 55,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Ý nghĩa của nụ cười và sự lạc quan",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Ý nghĩa của nụ cười và sự lạc quan':",
    "template": "Nụ cười không làm nghèo đi người trao tặng nhưng lại làm giàu có thêm người đón nhận. [blank_1], thái độ lạc quan hoạt động như một liều thuốc bổ cho tinh thần; [blank_2] nó giúp xua tan áp lực và thắp sáng niềm tin trong những ngày giông bão nhất.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Thật vậy",
      "blank_2": "bởi vì"
    },
    "options": [
      "Thật vậy",
      "bởi vì",
      "cho nên",
      "ngược lại"
    ],
    "explanation": "💡 Lời thầy cô: Liên kết chặt chẽ giữa hiện tượng và nguyên nhân."
  },
  {
    "id": 56,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tính trung thực trong học đường",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tính trung thực trong học đường':",
    "template": "Điểm số cao từ sự gian lận chỉ là một chiếc vương miện bằng giấy dễ rách. [blank_1], tri thức thực học mới là tài sản bền vững theo ta suốt cuộc đời. [blank_2], học sinh cần dũng cảm chấp nhận một điểm kém trung thực hơn là một điểm mười giả dối.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Trái lại",
      "blank_2": "Vì lẽ đó"
    },
    "options": [
      "Trái lại",
      "Vì lẽ đó",
      "cho dù",
      "mặc dù"
    ],
    "explanation": "💡 Lời thầy cô: Đưa ra lời khuyên hành động logic 'Vì lẽ đó'."
  },
  {
    "id": 57,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Lắng nghe để trưởng thành",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Lắng nghe để trưởng thành':",
    "template": "Nói là gieo hạt, nhưng lắng nghe mới là gặt hái. [blank_1], khi chịu khó lắng nghe lời khuyên của cha mẹ và thầy cô, chúng ta sẽ tránh được những ngộ nhận bồng bột; [blank_2] nếu chỉ khăng khăng bảo vệ cái tôi bướng bỉnh, ta sẽ phải trả giá đắt cho sự non nớt của mình.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Thật vậy",
      "blank_2": "ngược lại"
    },
    "options": [
      "Thật vậy",
      "ngược lại",
      "tuy nhiên",
      "cho nên"
    ],
    "explanation": "💡 Lời thầy cô: Cặp tương phản giữa việc lắng nghe và việc cố chấp."
  },
  {
    "id": 58,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tình cảm gia đình là điểm tựa",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tình cảm gia đình là điểm tựa':",
    "template": "Ngoài xã hội, con người có thể phải đối mặt với vô vàn sóng gió và cạm bẫy, [blank_1] gia đình luôn là bến đỗ bình yên đón nhận ta vô điều kiện. [blank_2], dù đi xa đến đâu, tình yêu thương của cha mẹ vẫn là ngọn hải đăng soi đường chỉ lối.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "nhưng",
      "blank_2": "Chính vì thế"
    },
    "options": [
      "nhưng",
      "Chính vì thế",
      "do đó",
      "bởi lẽ"
    ],
    "explanation": "💡 Lời thầy cô: Tương phản giữa xã hội phức tạp và gia đình ấm áp."
  },
  {
    "id": 59,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Áp lực tạo nên kim cương",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Áp lực tạo nên kim cương':",
    "template": "Không có hòn than nào tự nhiên biến thành viên kim cương lấp lánh nếu không trải qua nhiệt độ và áp suất khổng lồ dưới lòng đất. [blank_1], con người cũng không thể trưởng thành xuất chúng nếu không kinh qua những gian nan thử thách. [blank_2], thay vì oán trách áp lực thi cử, học sinh hãy coi đó là cơ hội tôi luyện bản lĩnh.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Tương tự như vậy",
      "blank_2": "Do đó"
    },
    "options": [
      "Tương tự như vậy",
      "Do đó",
      "tuy nhiên",
      "bởi vì"
    ],
    "explanation": "💡 Lời thầy cô: Dùng so sánh ẩn dụ bằng cụm liên từ 'Tương tự như vậy'."
  },
  {
    "id": 60,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Sự kiên nhẫn khi theo đuổi đam mê",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Sự kiên nhẫn khi theo đuổi đam mê':",
    "template": "Đam mê là ngọn lửa thắp sáng con đường, [blank_1] kiên nhẫn mới là đôi chân bền bỉ đưa ta vượt qua dặm dài sương gió. [blank_2] thiếu đi lòng kiên trì nhẫn nại, ngọn lửa đam mê dù rực rỡ đến đâu cũng sẽ chóng lụi tàn trước những cơn gió ngược.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "song",
      "blank_2": "Nếu như"
    },
    "options": [
      "song",
      "Nếu như",
      "thế nên",
      "cho dù"
    ],
    "explanation": "💡 Lời thầy cô: Kết hợp đam mê và kiên nhẫn bằng giả định 'Nếu như...'."
  },
  {
    "id": 61,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Lòng trắc ẩn và sự văn minh của xã hội",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Lòng trắc ẩn và sự văn minh của xã hội':",
    "template": "Thước đo sự văn minh của một cộng đồng không chỉ nằm ở những tòa nhà chọc trời hay công nghệ hiện đại, [blank_1] nó được đo bằng cách xã hội ấy đối xử với những người yếu thế và tổn thương nhất. [blank_2], một xã hội chỉ thực sự phát triển bền vững khi không ai bị bỏ lại phía sau.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "mà trên hết",
      "blank_2": "Bởi vì"
    },
    "options": [
      "mà trên hết",
      "Bởi vì",
      "cho nên",
      "ngược lại"
    ],
    "explanation": "💡 Lời thầy cô: Nâng tầm nhận thức xã hội bằng 'mà trên hết'."
  },
  {
    "id": 62,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tác hại của việc sống 'ảo'",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tác hại của việc sống 'ảo'':",
    "template": "Việc mải mê tìm kiếm những nút like và bình luận tán dương trên mạng xã hội khiến nhiều bạn trẻ đánh mất kết nối với thực tại. [blank_1], họ sống trong nỗi ám ảnh phải hoàn hảo dưới lăng kính lọc màu ảo diệu; [blank_2], khi đối diện với những khó khăn đời thực, họ dễ dàng cảm thấy cô đơn và hụt hẫng tột cùng.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Dần dà",
      "blank_2": "Để rồi"
    },
    "options": [
      "Dần dà",
      "Để rồi",
      "tuy vậy",
      "nhờ đó"
    ],
    "explanation": "💡 Lời thầy cô: Diễn tả quá trình thoái hóa tâm lý qua 'Dần dà' và 'Để rồi'."
  },
  {
    "id": 63,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Văn hóa nhường nhịn và sẻ chia nơi công cộng",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Văn hóa nhường nhịn và sẻ chia nơi công cộng':",
    "template": "Nhường một ghế ngồi trên xe buýt cho người già hay đứng xếp hàng chờ đến lượt chỉ là hành động rất nhỏ, [blank_1] nó thể hiện ý thức công dân văn minh và sự tôn trọng cộng đồng. [blank_2], những nét đẹp giản dị ấy có sức lan tỏa mạnh mẽ, đẩy lùi thói chen lấn ích kỷ.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "thế nhưng",
      "blank_2": "Nhờ vậy"
    },
    "options": [
      "thế nhưng",
      "Nhờ vậy",
      "bởi vì",
      "cho nên"
    ],
    "explanation": "💡 Lời thầy cô: Tương phản giữa hành động nhỏ bé và giá trị lan tỏa to lớn."
  },
  {
    "id": 64,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Tại sao cần có tinh thần hợp tác?",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Tại sao cần có tinh thần hợp tác?':",
    "template": "Muốn đi nhanh hãy đi một mình, nhưng muốn đi xa thì phải đi cùng nhau. [blank_1], tinh thần hợp tác giúp các cá nhân bù trừ khuyết điểm và cộng hưởng thế mạnh cho nhau; [blank_2] trong thời đại toàn cầu hóa, không một cá nhân nào có thể đơn độc thành công mà không có sự cộng tác.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Thật vậy",
      "blank_2": "hơn nữa"
    },
    "options": [
      "Thật vậy",
      "hơn nữa",
      "do đó",
      "ngược lại"
    ],
    "explanation": "💡 Lời thầy cô: Lý giải câu ngạn ngữ nổi tiếng bằng dẫn chứng cộng hưởng sức mạnh."
  },
  {
    "id": 65,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Bảo tồn bản sắc văn hóa dân tộc",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Bảo tồn bản sắc văn hóa dân tộc':",
    "template": "Hội nhập quốc tế mở ra cơ hội tiếp thu tinh hoa nhân loại, [blank_1] điều đó không đồng nghĩa với việc hòa tan hay quay lưng lại với cội nguồn dân tộc. [blank_2], một cái cây chỉ có thể vươn cao xum xuê khi rễ của nó bám chặt sâu vào lòng đất mẹ.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "song",
      "blank_2": "Bởi lẽ"
    },
    "options": [
      "song",
      "Bởi lẽ",
      "cho nên",
      "thế nhưng"
    ],
    "explanation": "💡 Lời thầy cô: Khẳng định giữ gìn gốc rễ bằng hình ảnh ẩn dụ cái cây."
  },
  {
    "id": 66,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Lời khen ngợi và động viên kịp thời",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Lời khen ngợi và động viên kịp thời':",
    "template": "Một lời chê bai cay nghiệt có thể dập tắt sự tự tin của một đứa trẻ suốt nhiều năm tháng. [blank_1], một lời động viên chân thành đúng lúc lại có thể thắp lên ngọn lửa hy vọng phi thường. [blank_2], chúng ta hãy học cách hào phóng trao đi những lời khen chân thật để tưới mát tâm hồn những người quanh mình.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Trái lại",
      "blank_2": "Vì vậy"
    },
    "options": [
      "Trái lại",
      "Vì vậy",
      "mặc dù",
      "cho nên"
    ],
    "explanation": "💡 Lời thầy cô: Đối lập giữa sức tàn phá của lời chê và phép màu của lời khen."
  },
  {
    "id": 67,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Học cách quản lý thời gian",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Học cách quản lý thời gian':",
    "template": "Thời gian là thứ tài sản công bằng nhất mà tạo hóa ban tặng cho mỗi con người, bởi ai cũng chỉ có đúng 24 giờ mỗi ngày. [blank_1], sự khác biệt giữa người thành công và kẻ thất bại nằm ở cách họ sử dụng từng giờ khắc ấy; [blank_2] nếu cứ phung phí thời gian vào những thú vui vô bổ, chúng ta sẽ phải trả giá bằng sự hối tiếc muộn màng.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Thế nhưng",
      "blank_2": "bởi lẽ"
    },
    "options": [
      "Thế nhưng",
      "bởi lẽ",
      "do đó",
      "ngược lại"
    ],
    "explanation": "💡 Lời thầy cô: Chỉ ra mấu chốt của sự thành công qua nghệ thuật quản lý thời gian."
  },
  {
    "id": 68,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Khát vọng cống hiến của tuổi trẻ",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Khát vọng cống hiến của tuổi trẻ':",
    "template": "Tuổi trẻ là mùa xuân của cuộc đời, là lứa tuổi dồi dào nhiệt huyết và khát khao khẳng định mình nhất. [blank_1], nếu tuổi trẻ chỉ biết mưu cầu an nhàn hưởng thụ cá nhân thì đất nước sẽ thiếu đi nguồn sinh khí để phát triển; [blank_2] mỗi thanh thiếu niên hãy sống như một ngọn đuốc thắp sáng lý tưởng cống hiến.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Chính vì vậy",
      "blank_2": "thế nên"
    },
    "options": [
      "Chính vì vậy",
      "thế nên",
      "ngược lại",
      "cho dù"
    ],
    "explanation": "💡 Lời thầy cô: Mối liên hệ giữa thanh xuân và trách nhiệm với tổ quốc."
  },
  {
    "id": 69,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Lòng trung thực với chính mình",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Lòng trung thực với chính mình':",
    "template": "Lừa dối người khác đã là điều tồi tệ, [blank_1] lừa dối chính bản thân mình mới là bi kịch lớn nhất của một con người. [blank_2], khi không dám thừa nhận những yếu kém và sai lầm của bản thân, chúng ta sẽ mãi dậm chân tại chỗ trong sự ngụy biện hèn nhát.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "nhưng",
      "blank_2": "Bởi vì"
    },
    "options": [
      "nhưng",
      "Bởi vì",
      "cho nên",
      "thế nhưng"
    ],
    "explanation": "💡 Lời thầy cô: Tăng cấp mức độ nghiêm trọng từ dối người sang dối mình."
  },
  {
    "id": 70,
    "level": 1,
    "subType": "fill_connectors",
    "category": "Kỹ thuật liên từ lập luận",
    "topic": "Bảo vệ sự trong sáng của Tiếng Việt",
    "question": "Chọn cặp liên từ hoặc mệnh đề chuyển tiếp logic nhất điền vào chỗ trống để tạo sự mạch lạc cho đoạn văn về 'Bảo vệ sự trong sáng của Tiếng Việt':",
    "template": "Tiếng Việt là hồn cốt ngàn đời của cha ông, chứa đựng chiều sâu tâm hồn và văn hóa của dân tộc. [blank_1], hiện tượng lạm dụng tiếng lóng, chêm xen tiếng nước ngoài bừa bãi đang làm méo mó ngôn ngữ mẹ đẻ; [blank_2] thế hệ trẻ cần có ý thức gìn giữ sự giàu đẹp của tiếng nói dân tộc như gìn giữ chính nhân phẩm của mình.",
    "blankKeys": [
      "blank_1",
      "blank_2"
    ],
    "correct": {
      "blank_1": "Tuy nhiên",
      "blank_2": "Vì thế"
    },
    "options": [
      "Tuy nhiên",
      "Vì thế",
      "bởi lẽ",
      "mặc dù"
    ],
    "explanation": "💡 Lời thầy cô: Nhận diện thực trạng méo mó tiếng Việt và lời kêu gọi hành động giữ gìn."
  },
  {
    "id": 71,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Nghị lực sống phi thường",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Nghị lực sống phi thường':",
    "template": "Luận điểm: **Nghị lực sống phi thường**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực."
    },
    "options": [
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú.",
      "Cô gái Malala Yousafzai bất chấp sự đe dọa của khủng bố Taliban để đấu tranh cho quyền đi học của trẻ em gái."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 72,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Tình bạn cao đẹp và đức hy sinh",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tình bạn cao đẹp và đức hy sinh':",
    "template": "Luận điểm: **Tình bạn cao đẹp và đức hy sinh**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền."
    },
    "options": [
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú.",
      "Cô gái Malala Yousafzai bất chấp sự đe dọa của khủng bố Taliban để đấu tranh cho quyền đi học của trẻ em gái."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 73,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Ý chí kiên định vượt qua tật nguyền",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Ý chí kiên định vượt qua tật nguyền':",
    "template": "Luận điểm: **Ý chí kiên định vượt qua tật nguyền**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    },
    "options": [
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Cô gái Malala Yousafzai bất chấp sự đe dọa của khủng bố Taliban để đấu tranh cho quyền đi học của trẻ em gái."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 74,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Khát vọng hòa bình và bình đẳng giáo dục cho phụ nữ",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Khát vọng hòa bình và bình đẳng giáo dục cho phụ nữ':",
    "template": "Luận điểm: **Khát vọng hòa bình và bình đẳng giáo dục cho phụ nữ**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Cô gái Malala Yousafzai bất chấp sự đe dọa của khủng bố Taliban để đấu tranh cho quyền đi học của trẻ em gái."
    },
    "options": [
      "Cô gái Malala Yousafzai bất chấp sự đe dọa của khủng bố Taliban để đấu tranh cho quyền đi học của trẻ em gái.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Cô gái Malala Yousafzai bất chấp sự đe dọa của khủng bố Taliban để đấu tranh cho quyền đi học của trẻ em gái.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 75,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Lòng nhân ái cứu người không quản hiểm nguy",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Lòng nhân ái cứu người không quản hiểm nguy':",
    "template": "Luận điểm: **Lòng nhân ái cứu người không quản hiểm nguy**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Anh tài xế Nguyễn Ngọc Mạnh trèo lên mái tôn cứu sống cháu bé 3 tuổi rơi từ tầng 12 chung cư."
    },
    "options": [
      "Anh tài xế Nguyễn Ngọc Mạnh trèo lên mái tôn cứu sống cháu bé 3 tuổi rơi từ tầng 12 chung cư.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Anh tài xế Nguyễn Ngọc Mạnh trèo lên mái tôn cứu sống cháu bé 3 tuổi rơi từ tầng 12 chung cư.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 76,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Tinh thần yêu nước và xả thân vì Tổ quốc",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tinh thần yêu nước và xả thân vì Tổ quốc':",
    "template": "Luận điểm: **Tinh thần yêu nước và xả thân vì Tổ quốc**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Anh hùng La Văn Cầu nhờ đồng đội chặt đứt cánh tay bị thương để tiếp tục ôm bộc phá phá hủy lô cốt địch."
    },
    "options": [
      "Anh hùng La Văn Cầu nhờ đồng đội chặt đứt cánh tay bị thương để tiếp tục ôm bộc phá phá hủy lô cốt địch.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Anh hùng La Văn Cầu nhờ đồng đội chặt đứt cánh tay bị thương để tiếp tục ôm bộc phá phá hủy lô cốt địch.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 77,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Sự trung thực và chính trực của người thầy",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Sự trung thực và chính trực của người thầy':",
    "template": "Luận điểm: **Sự trung thực và chính trực của người thầy**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Thầy Chu Văn An dâng 'Thất trảm sớ' xin chém bảy tên nịnh thần lộng quyền thời nhà Trần."
    },
    "options": [
      "Thầy Chu Văn An dâng 'Thất trảm sớ' xin chém bảy tên nịnh thần lộng quyền thời nhà Trần.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Thầy Chu Văn An dâng 'Thất trảm sớ' xin chém bảy tên nịnh thần lộng quyền thời nhà Trần.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 78,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Kiên trì vượt qua hàng ngàn lần thất bại",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Kiên trì vượt qua hàng ngàn lần thất bại':",
    "template": "Luận điểm: **Kiên trì vượt qua hàng ngàn lần thất bại**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nhà bác học Thomas Edison đã thử nghiệm hơn 10.000 lần trước khi chế tạo thành công bóng đèn sợi đốt."
    },
    "options": [
      "Nhà bác học Thomas Edison đã thử nghiệm hơn 10.000 lần trước khi chế tạo thành công bóng đèn sợi đốt.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nhà bác học Thomas Edison đã thử nghiệm hơn 10.000 lần trước khi chế tạo thành công bóng đèn sợi đốt.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 79,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Tinh thần tự học vĩ đại",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tinh thần tự học vĩ đại':",
    "template": "Luận điểm: **Tinh thần tự học vĩ đại**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Chủ tịch Hồ Chí Minh đã tự học hàng chục ngoại ngữ qua các công việc bồi bàn, quét tuyết, phụ bếp trong 30 năm bôn ba tìm đường cứu nước."
    },
    "options": [
      "Chủ tịch Hồ Chí Minh đã tự học hàng chục ngoại ngữ qua các công việc bồi bàn, quét tuyết, phụ bếp trong 30 năm bôn ba tìm đường cứu nước.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Chủ tịch Hồ Chí Minh đã tự học hàng chục ngoại ngữ qua các công việc bồi bàn, quét tuyết, phụ bếp trong 30 năm bôn ba tìm đường cứu nước.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 80,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Tình yêu thương con và đức hy sinh của người mẹ",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tình yêu thương con và đức hy sinh của người mẹ':",
    "template": "Luận điểm: **Tình yêu thương con và đức hy sinh của người mẹ**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Mẹ Tê-rê-xa dành trọn cả cuộc đời chăm sóc những người nghèo khổ, bệnh tật bên lề xã hội ở Ấn Độ."
    },
    "options": [
      "Mẹ Tê-rê-xa dành trọn cả cuộc đời chăm sóc những người nghèo khổ, bệnh tật bên lề xã hội ở Ấn Độ.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Mẹ Tê-rê-xa dành trọn cả cuộc đời chăm sóc những người nghèo khổ, bệnh tật bên lề xã hội ở Ấn Độ.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 81,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Ý thức bảo vệ môi trường của thế hệ trẻ",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Ý thức bảo vệ môi trường của thế hệ trẻ':",
    "template": "Luận điểm: **Ý thức bảo vệ môi trường của thế hệ trẻ**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Cô bé Greta Thunberg khởi xướng phong trào bãi khóa vì khí hậu 'Fridays for Future' lan tỏa khắp hành tinh."
    },
    "options": [
      "Cô bé Greta Thunberg khởi xướng phong trào bãi khóa vì khí hậu 'Fridays for Future' lan tỏa khắp hành tinh.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Cô bé Greta Thunberg khởi xướng phong trào bãi khóa vì khí hậu 'Fridays for Future' lan tỏa khắp hành tinh.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 82,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Cống hiến khoa học thầm lặng quên mình",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Cống hiến khoa học thầm lặng quên mình':",
    "template": "Luận điểm: **Cống hiến khoa học thầm lặng quên mình**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Bác sĩ Alexandre Yersin dành trọn đời nghiên cứu y học cứu giúp người nghèo tại Nha Trang và tìm ra vắc-xin trị dịch hạch."
    },
    "options": [
      "Bác sĩ Alexandre Yersin dành trọn đời nghiên cứu y học cứu giúp người nghèo tại Nha Trang và tìm ra vắc-xin trị dịch hạch.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Bác sĩ Alexandre Yersin dành trọn đời nghiên cứu y học cứu giúp người nghèo tại Nha Trang và tìm ra vắc-xin trị dịch hạch.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 83,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Lòng dũng cảm cứu người đuối nước",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Lòng dũng cảm cứu người đuối nước':",
    "template": "Luận điểm: **Lòng dũng cảm cứu người đuối nước**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Em Nguyễn Văn Nam học sinh lớp 9 dũng cảm lao xuống dòng nước lũ cứu 5 em nhỏ rồi kiệt sức hy sinh."
    },
    "options": [
      "Em Nguyễn Văn Nam học sinh lớp 9 dũng cảm lao xuống dòng nước lũ cứu 5 em nhỏ rồi kiệt sức hy sinh.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Em Nguyễn Văn Nam học sinh lớp 9 dũng cảm lao xuống dòng nước lũ cứu 5 em nhỏ rồi kiệt sức hy sinh.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 84,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Bản lĩnh sáng tạo và khởi nghiệp từ số không",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Bản lĩnh sáng tạo và khởi nghiệp từ số không':",
    "template": "Luận điểm: **Bản lĩnh sáng tạo và khởi nghiệp từ số không**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Steve Jobs từng bị đuổi khỏi chính công ty Apple do mình sáng lập nhưng đã kiên trì trở lại và làm thay đổi thế giới công nghệ."
    },
    "options": [
      "Steve Jobs từng bị đuổi khỏi chính công ty Apple do mình sáng lập nhưng đã kiên trì trở lại và làm thay đổi thế giới công nghệ.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Steve Jobs từng bị đuổi khỏi chính công ty Apple do mình sáng lập nhưng đã kiên trì trở lại và làm thay đổi thế giới công nghệ.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 85,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Khát vọng đưa văn hóa Việt Nam ra thế giới",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Khát vọng đưa văn hóa Việt Nam ra thế giới':",
    "template": "Luận điểm: **Khát vọng đưa văn hóa Việt Nam ra thế giới**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Hoa hậu H'Hen Niê xuất thân từ buôn làng Ê-đê, vượt qua hủ tục kết hôn sớm để lọt vào Top 5 Miss Universe thế giới."
    },
    "options": [
      "Hoa hậu H'Hen Niê xuất thân từ buôn làng Ê-đê, vượt qua hủ tục kết hôn sớm để lọt vào Top 5 Miss Universe thế giới.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Hoa hậu H'Hen Niê xuất thân từ buôn làng Ê-đê, vượt qua hủ tục kết hôn sớm để lọt vào Top 5 Miss Universe thế giới.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 86,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Lòng trung thực không tham lam của rơi",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Lòng trung thực không tham lam của rơi':",
    "template": "Luận điểm: **Lòng trung thực không tham lam của rơi**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Cậu bé đánh giày nhặt được chiếc ví có hàng chục triệu đồng đã chủ động đứng chờ và giao nộp cho công an để trả lại người mất."
    },
    "options": [
      "Cậu bé đánh giày nhặt được chiếc ví có hàng chục triệu đồng đã chủ động đứng chờ và giao nộp cho công an để trả lại người mất.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Cậu bé đánh giày nhặt được chiếc ví có hàng chục triệu đồng đã chủ động đứng chờ và giao nộp cho công an để trả lại người mất.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 87,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Tinh thần đoàn kết dân tộc mùa bão lũ",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tinh thần đoàn kết dân tộc mùa bão lũ':",
    "template": "Luận điểm: **Tinh thần đoàn kết dân tộc mùa bão lũ**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Hàng ngàn chuyến xe cứu trợ, hàng triệu bánh chưng từ khắp miền Nam và miền Trung hướng về đồng bào miền Bắc chịu ảnh hưởng bão Yagi."
    },
    "options": [
      "Hàng ngàn chuyến xe cứu trợ, hàng triệu bánh chưng từ khắp miền Nam và miền Trung hướng về đồng bào miền Bắc chịu ảnh hưởng bão Yagi.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Hàng ngàn chuyến xe cứu trợ, hàng triệu bánh chưng từ khắp miền Nam và miền Trung hướng về đồng bào miền Bắc chịu ảnh hưởng bão Yagi.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 88,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Ý chí kiên cường trong thể thao đỉnh cao",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Ý chí kiên cường trong thể thao đỉnh cao':",
    "template": "Luận điểm: **Ý chí kiên cường trong thể thao đỉnh cao**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Kình ngư Ánh Viên bơi hàng chục cây số mỗi ngày suốt nhiều năm nơi xứ người để mang về hàng chục huy chương vàng cho thể thao Việt Nam."
    },
    "options": [
      "Kình ngư Ánh Viên bơi hàng chục cây số mỗi ngày suốt nhiều năm nơi xứ người để mang về hàng chục huy chương vàng cho thể thao Việt Nam.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Kình ngư Ánh Viên bơi hàng chục cây số mỗi ngày suốt nhiều năm nơi xứ người để mang về hàng chục huy chương vàng cho thể thao Việt Nam.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 89,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Tấm lòng nhân hậu sẻ chia với người nghèo",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tấm lòng nhân hậu sẻ chia với người nghèo':",
    "template": "Luận điểm: **Tấm lòng nhân hậu sẻ chia với người nghèo**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Chương trình 'Cơm có thịt' của nhà báo Trần Đăng Tuấn mang hàng triệu bữa ăn dinh dưỡng cho trẻ em vùng cao Tây Bắc."
    },
    "options": [
      "Chương trình 'Cơm có thịt' của nhà báo Trần Đăng Tuấn mang hàng triệu bữa ăn dinh dưỡng cho trẻ em vùng cao Tây Bắc.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Chương trình 'Cơm có thịt' của nhà báo Trần Đăng Tuấn mang hàng triệu bữa ăn dinh dưỡng cho trẻ em vùng cao Tây Bắc.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 90,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Bảo tồn văn hóa truyền thống của người trẻ",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Bảo tồn văn hóa truyền thống của người trẻ':",
    "template": "Luận điểm: **Bảo tồn văn hóa truyền thống của người trẻ**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nhiều nhóm bạn trẻ Gen Z lập các dự án phục dựng cổ phục Việt và tranh dân gian Đông Hồ trên không gian số."
    },
    "options": [
      "Nhiều nhóm bạn trẻ Gen Z lập các dự án phục dựng cổ phục Việt và tranh dân gian Đông Hồ trên không gian số.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nhiều nhóm bạn trẻ Gen Z lập các dự án phục dựng cổ phục Việt và tranh dân gian Đông Hồ trên không gian số.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 91,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Sự kiên nhẫn và đam mê đọc sách vô tận",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Sự kiên nhẫn và đam mê đọc sách vô tận':",
    "template": "Luận điểm: **Sự kiên nhẫn và đam mê đọc sách vô tận**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nhà bác học Lê Quý Đôn đọc hết sách trong thiên hạ, được mệnh danh là 'túi khôn của thời đại'."
    },
    "options": [
      "Nhà bác học Lê Quý Đôn đọc hết sách trong thiên hạ, được mệnh danh là 'túi khôn của thời đại'.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nhà bác học Lê Quý Đôn đọc hết sách trong thiên hạ, được mệnh danh là 'túi khôn của thời đại'.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 92,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Bản lĩnh nói không với tiêu cực trong thi cử",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Bản lĩnh nói không với tiêu cực trong thi cử':",
    "template": "Luận điểm: **Bản lĩnh nói không với tiêu cực trong thi cử**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Cô giáo Đỗ Thị Quyên dũng cảm tố cáo hành vi gian lận thi cử để bảo vệ tính công bằng trong giáo dục."
    },
    "options": [
      "Cô giáo Đỗ Thị Quyên dũng cảm tố cáo hành vi gian lận thi cử để bảo vệ tính công bằng trong giáo dục.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Cô giáo Đỗ Thị Quyên dũng cảm tố cáo hành vi gian lận thi cử để bảo vệ tính công bằng trong giáo dục.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 93,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Hậu quả của lối sống vô cảm trên đường phố",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Hậu quả của lối sống vô cảm trên đường phố':",
    "template": "Luận điểm: **Hậu quả của lối sống vô cảm trên đường phố**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nhiều người đi đường dừng lại quay clip vụ tai nạn giao thông đăng lên mạng thay vì sơ cứu cho nạn nhân."
    },
    "options": [
      "Nhiều người đi đường dừng lại quay clip vụ tai nạn giao thông đăng lên mạng thay vì sơ cứu cho nạn nhân.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nhiều người đi đường dừng lại quay clip vụ tai nạn giao thông đăng lên mạng thay vì sơ cứu cho nạn nhân.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 94,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Tác hại khôn lường của bạo lực học đường",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tác hại khôn lường của bạo lực học đường':",
    "template": "Luận điểm: **Tác hại khôn lường của bạo lực học đường**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nhiều học sinh bị bạn bè cô lập, bạo lực thể xác dẫn đến chứng trầm cảm và phải điều trị tâm lý dài hạn."
    },
    "options": [
      "Nhiều học sinh bị bạn bè cô lập, bạo lực thể xác dẫn đến chứng trầm cảm và phải điều trị tâm lý dài hạn.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nhiều học sinh bị bạn bè cô lập, bạo lực thể xác dẫn đến chứng trầm cảm và phải điều trị tâm lý dài hạn.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 95,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Tình cảm tri ân thầy cô giáo",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tình cảm tri ân thầy cô giáo':",
    "template": "Luận điểm: **Tình cảm tri ân thầy cô giáo**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Hội cựu học sinh hơn 50 năm sau ngày ra trường vẫn tề tựu về thăm lại ngôi trường làng và người thầy tóc đã bạc phơ."
    },
    "options": [
      "Hội cựu học sinh hơn 50 năm sau ngày ra trường vẫn tề tựu về thăm lại ngôi trường làng và người thầy tóc đã bạc phơ.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Hội cựu học sinh hơn 50 năm sau ngày ra trường vẫn tề tựu về thăm lại ngôi trường làng và người thầy tóc đã bạc phơ.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 96,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Đức khiêm tốn của người vĩ đại",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Đức khiêm tốn của người vĩ đại':",
    "template": "Luận điểm: **Đức khiêm tốn của người vĩ đại**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nhà bác học Isaac Newton từng nói: 'Tôi chỉ như một đứa trẻ nhặt những vỏ ốc đẹp trên bãi biển của đại dương tri thức bao la'."
    },
    "options": [
      "Nhà bác học Isaac Newton từng nói: 'Tôi chỉ như một đứa trẻ nhặt những vỏ ốc đẹp trên bãi biển của đại dương tri thức bao la'.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nhà bác học Isaac Newton từng nói: 'Tôi chỉ như một đứa trẻ nhặt những vỏ ốc đẹp trên bãi biển của đại dương tri thức bao la'.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 97,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Khát vọng vươn lên của học sinh nghèo hiếu học",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Khát vọng vươn lên của học sinh nghèo hiếu học':",
    "template": "Luận điểm: **Khát vọng vươn lên của học sinh nghèo hiếu học**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Thủ khoa trường Đại học Y Hà Nội Nguyễn Văn Kiên từng nghỉ học đi làm phụ hồ rồi quyết tâm ôn thi lại đạt 29.75 điểm."
    },
    "options": [
      "Thủ khoa trường Đại học Y Hà Nội Nguyễn Văn Kiên từng nghỉ học đi làm phụ hồ rồi quyết tâm ôn thi lại đạt 29.75 điểm.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Thủ khoa trường Đại học Y Hà Nội Nguyễn Văn Kiên từng nghỉ học đi làm phụ hồ rồi quyết tâm ôn thi lại đạt 29.75 điểm.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 98,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Tác hại của tin giả (Fake news) trên mạng xã hội",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Tác hại của tin giả (Fake news) trên mạng xã hội':",
    "template": "Luận điểm: **Tác hại của tin giả (Fake news) trên mạng xã hội**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nhiều tài khoản bịa đặt tin đồn vỡ đập mùa lũ lụt gây hoang mang dư luận và cản trở công tác cứu trợ."
    },
    "options": [
      "Nhiều tài khoản bịa đặt tin đồn vỡ đập mùa lũ lụt gây hoang mang dư luận và cản trở công tác cứu trợ.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nhiều tài khoản bịa đặt tin đồn vỡ đập mùa lũ lụt gây hoang mang dư luận và cản trở công tác cứu trợ.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 99,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Hiện tượng đời sống",
    "topic": "Cống hiến thầm lặng của lực lượng y bác sĩ",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Cống hiến thầm lặng của lực lượng y bác sĩ':",
    "template": "Luận điểm: **Cống hiến thầm lặng của lực lượng y bác sĩ**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Các bác sĩ tuyến đầu thức trắng đêm trong phòng cấp cứu hồi sức giành giật sự sống cho bệnh nhân nguy kịch."
    },
    "options": [
      "Các bác sĩ tuyến đầu thức trắng đêm trong phòng cấp cứu hồi sức giành giật sự sống cho bệnh nhân nguy kịch.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Các bác sĩ tuyến đầu thức trắng đêm trong phòng cấp cứu hồi sức giành giật sự sống cho bệnh nhân nguy kịch.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  },
  {
    "id": 100,
    "level": 1,
    "subType": "matching_evidence",
    "category": "Tư tưởng đạo lý",
    "topic": "Bản lĩnh tự lập của du học sinh xa quê",
    "question": "Hãy ghép hoặc chọn DẪN CHỨNG thực tế xác thực và đắt giá nhất cho luận điểm: 'Bản lĩnh tự lập của du học sinh xa quê':",
    "template": "Luận điểm: **Bản lĩnh tự lập của du học sinh xa quê**  👉  Dẫn chứng chuẩn mực: [blank_evidence]",
    "blankKeys": [
      "blank_evidence"
    ],
    "correct": {
      "blank_evidence": "Nhiều bạn học sinh 15 tuổi tự nấu ăn, đi làm thêm trang trải học phí và tự chăm sóc bản thân khi du học một mình."
    },
    "options": [
      "Nhiều bạn học sinh 15 tuổi tự nấu ăn, đi làm thêm trang trải học phí và tự chăm sóc bản thân khi du học một mình.",
      "Nick Vujicic sinh ra không tay không chân nhưng đi khắp thế giới truyền cảm hứng sống tích cực.",
      "Cậu bé Ngô Minh Hiếu cõng bạn Nguyễn Tất Minh bị khuyết tật đi học suốt 10 năm liền.",
      "Thầy giáo Chu Ngọc Ký kiên trì tập viết từng nét chữ bằng đôi bàn chân rớm máu để trở thành nhà giáo ưu tú."
    ],
    "explanation": "💡 Lời thầy cô: Dẫn chứng 'Nhiều bạn học sinh 15 tuổi tự nấu ăn, đi làm thêm trang trải học phí và tự chăm sóc bản thân khi du học một mình.' là minh chứng tiêu biểu, có người thật việc thật, giúp bài văn tăng sức thuyết phục tuyệt đối thay vì chỉ nói lý thuyết suông."
  }
];
