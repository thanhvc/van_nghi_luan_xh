// Ngân hàng 100 bài tập Cấp độ 4: 'Bác sĩ phẫu thuật văn học' (Sửa lỗi & Nâng cấp)
const LEVEL4_DATA = [
  {
    "id": 1,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lòng yêu nước",
    "faultyText": "Mỗi học sinh chúng ta cần phải có lòng yêu nước. Yêu nước là truyền thống quý báu từ xưa đến nay của dân tộc. Là học sinh ngồi trên ghế nhà trường, em xin hứa sẽ cố gắng chăm ngoan, học giỏi để trở thành cháu ngoan Bác Hồ, mai sau lớn lên xây dựng đất nước giàu đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn mắc bệnh hô khẩu hiệu chung chung, dùng cụm từ mòn sáo 'em xin hứa... mai sau lớn lên...', không có một hành động cụ thể nào của lứa tuổi 15.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lòng yêu nước'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lòng yêu nước' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Là một học sinh lớp 9 đứng trước ngưỡng cửa chuyển cấp, tôi ý thức rằng lòng yêu nước bắt đầu từ những việc làm bình dị nhất: tự giác học tập nghiêm túc, không gian lận trong thi cử và có ý thức giữ gìn sự trong sáng của Tiếng Việt trên mạng xã hội. Yêu nước hôm nay chính là nỗ lực tích lũy tri thức để sẵn sàng gánh vác tương lai quê hương.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 2,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Tính trung thực",
    "faultyText": "Trung thực là một đức tính rất tốt mà ai cũng cần phải có. Nếu không trung thực sẽ bị mọi người ghét bỏ. Em xin hứa từ nay sẽ luôn trung thực, không bao giờ nói dối bố mẹ thầy cô để trở thành con ngoan trò giỏi.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Bài học mang tính chất 'cam kết miệng', chưa chạm vào bài toán khó nhất của học sinh: áp lực điểm số và cám dỗ quay cóp trong phòng thi.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Tính trung thực'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Tính trung thực' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Đứng trước áp lực điểm số của kỳ thi vào 10, bài học trung thực nhắc nhở tôi dũng cảm đối diện với lỗ hổng kiến thức của chính mình, kiên quyết nói 'Không' với việc quay cóp bài. Một điểm số kém nhưng phản ánh thực chất vẫn đáng giá hơn ngàn lần một điểm mười giả dối đạt được bằng sự gian lận.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 3,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Bảo vệ môi trường",
    "faultyText": "Môi trường đang bị ô nhiễm nghiêm trọng. Chúng ta hãy chung tay bảo vệ môi trường để Trái Đất xanh sạch đẹp. Em xin hứa sẽ luôn yêu thiên nhiên và bảo vệ môi trường mọi lúc mọi nơi.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Kêu gọi khẩu hiệu suông ('hãy chung tay...', 'mọi lúc mọi nơi'), thiếu hoàn toàn giải pháp và hành động thực tế của người học trò.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Bảo vệ môi trường'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Bảo vệ môi trường' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Bảo vệ môi trường không cần những dự án vĩ mô xa xôi, tôi bắt đầu lối sống xanh từ việc chủ động mang bình nước cá nhân đi học thay vì dùng chai nhựa xả rác một lần, và tự giác nhặt sạch rác dưới gầm bàn mỗi giờ tan trường.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 4,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lòng biết ơn",
    "faultyText": "Cha mẹ và thầy cô có công ơn rất lớn với chúng ta. Em xin hứa sẽ luôn ghi nhớ công ơn trời biển ấy và cố gắng ngoan ngoãn để bố mẹ thầy cô không phải phiền lòng.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Lời hứa sáo rỗng vô thưởng vô phạt, không chỉ ra được hành động phụng dưỡng, phụ giúp hay sự nỗ lực tri ân thực chất.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lòng biết ơn'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lòng biết ơn' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Lòng biết ơn trong tôi được cụ thể hóa bằng việc chủ động đỡ đần mẹ việc nhà sau giờ tan học, chăm chú lắng nghe từng lời giảng trên lớp và quyết tâm giành kết quả tốt nhất trong kỳ thi chuyển cấp như một món quà tri ân đấng sinh thành.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 5,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lòng kiên trì",
    "faultyText": "Kiên trì là mẹ của thành công. Ai kiên trì thì người đó sẽ chiến thắng. Em xin hứa từ nay sẽ luôn kiên trì vượt qua mọi khó khăn để đạt được kết quả học tập cao nhất.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Lặp lại định lý mòn sáo ('kiên trì là mẹ thành công') và đưa ra lời hứa mơ hồ, thiếu bối cảnh học tập thực tế.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lòng kiên trì'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lòng kiên trì' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 6,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Sự tự lập",
    "faultyText": "Tự lập giúp con người tự tin hơn. Em xin hứa sau này lớn lên sẽ tự lập, không làm phiền bố mẹ để trở thành một người có ích cho xã hội.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Hẹn lùi hành động vào tương lai ('sau này lớn lên...'), trong khi tự lập phải được rèn giũa ngay trong sinh hoạt hàng ngày tuổi 15.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Sự tự lập'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Sự tự lập' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Chuẩn bị hành trang bước vào cấp ba, tôi rèn tính tự lập ngay từ việc tự đặt chuông báo thức mỗi sáng, tự lên thời gian biểu ôn tập và tự giặt giũ đồ cá nhân mà không cần cha mẹ phải nhắc nhở.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 7,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Văn hóa ứng xử trên mạng",
    "faultyText": "Mạng xã hội có nhiều điều xấu. Chúng ta phải là người dùng mạng thông minh. Em xin hứa sẽ luôn ngoan ngoãn trên mạng và không bao giờ nói bậy chửi tục.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Lời hứa trẻ con, chưa thấy được trách nhiệm công dân số về bản quyền thông tin, chống tin giả và phòng ngừa bạo lực ngôn từ.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Văn hóa ứng xử trên mạng'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Văn hóa ứng xử trên mạng' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Là một cư dân số trẻ tuổi, tôi tự đặt ra nguyên tắc dừng lại 3 giây suy ngẫm trước khi gõ phím, kiên quyết không hùa theo những lời miệt thị ẩn danh và chỉ chia sẻ những nguồn thông tin chính thống, nhân văn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 8,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Đức khiêm tốn",
    "faultyText": "Khiêm tốn là phẩm chất cao đẹp. Ai kiên tốn sẽ được mọi người yêu quý. Em xin hứa sẽ luôn khiêm tốn trước bạn bè để không bị chê cười là tự cao.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn luẩn quẩn, diễn đạt nông cạn, không nêu được biểu hiện của việc biết lắng nghe và học hỏi người khác.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Đức khiêm tốn'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Đức khiêm tốn' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Nhận thức rõ tri thức là đại dương vô tận, sự khiêm tốn nhắc nhở tôi luôn chăm chú lắng nghe góp ý từ thầy cô và bạn bè, không bao giờ ngủ quên trên một bài kiểm tra điểm cao để luôn giữ được tinh thần cầu tiến.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 9,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lòng vị tha",
    "faultyText": "Vị tha là tha thứ cho người khác. Em xin hứa sẽ luôn vị tha với tất cả các bạn trong lớp để lớp luôn đoàn kết và đạt danh hiệu lớp tiên tiến.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Gắn lòng vị tha với danh hiệu thi đua 'lớp tiên tiến' một cách cơ học và hình thức, làm mất đi chiều sâu nhân bản của đức tính.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lòng vị tha'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lòng vị tha' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Bài học vị tha nhắc nhở tôi học cách thấu hiểu hoàn cảnh của bạn bè, bình tĩnh làm lành sau những xích mích tuổi mới lớn thay vì nuôi dưỡng sự giận hờn, bởi sự cảm thông chân thành chính là sợi dây gắn kết tình bạn bền chặt nhất.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 10,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Tinh thần tự học",
    "faultyText": "Tự học rất tốt cho học sinh. Ai tự học giỏi sẽ thi đỗ điểm cao. Em xin hứa sẽ cố gắng tự giác học bài ở nhà thật tốt để thầy cô khen ngợi.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Động lực học chỉ để 'được khen ngợi', câu chữ mang tính đối phó và sáo rỗng.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Tinh thần tự học'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Tinh thần tự học' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Ý thức được tự học là chìa khóa mở cánh cửa tri thức, tôi chủ động dành ít nhất 1 giờ mỗi tối để đọc thêm sách tham khảo, tự ghi chép sơ đồ tư duy thay vì chỉ thụ động học thuộc lòng các bài giảng trên lớp.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 11,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Tình bạn tuổi học trò",
    "faultyText": "Tình bạn rất thiêng liêng. Chúng ta phải yêu thương bạn bè. Em xin hứa sẽ chơi tốt với các bạn suốt đời.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Lời hứa 'suốt đời' sáo rỗng, thiếu việc làm thiết thực giúp đỡ nhau cùng tiến bộ.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Tình bạn tuổi học trò'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Tình bạn tuổi học trò' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Tình bạn đẹp với tôi lúc này là sẵn lòng kiên nhẫn giảng lại một bài tập khó cho bạn cùng bàn, và thẳng thắn khuyên ngăn khi thấy bạn lơ là bài vở để cùng nhau nắm tay bước vào ngôi trường cấp ba mơ ước.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 12,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lòng dũng cảm",
    "faultyText": "Dũng cảm là không sợ gì. Em xin hứa sẽ dũng cảm đối đầu mọi kẻ xấu để bảo vệ trường lớp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Khẩu hiệu hô hào viển vông, mang tính bốc đồng không thực tế.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lòng dũng cảm'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lòng dũng cảm' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Lòng dũng cảm của người học sinh bắt đầu từ việc dám đứng thẳng người thừa nhận khuyết điểm trước thầy cô khi chưa thuộc bài, dũng cảm nói không trước lời rủ rê trốn học chơi game của bạn bè xấu.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 13,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Vượt qua áp lực",
    "faultyText": "Áp lực thi cử rất mệt mỏi. Em xin hứa sẽ cố gắng không bị áp lực để đạt điểm 10.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Mong muốn phi thực tế ('cố gắng không bị áp lực để đạt điểm 10') và không có giải pháp tâm lý.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Vượt qua áp lực'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Vượt qua áp lực' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Thay vì chìm đắm trong lo âu và so sánh điểm số với bạn bè xung quanh, tôi học cách chia nhỏ mục tiêu ôn tập mỗi ngày, kiên định với sự tiến bộ của bản thân và dành 15 phút tập thể thao để tái tạo năng lượng.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 14,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Sự sẻ chia",
    "faultyText": "Sẻ chia là truyền thống tốt đẹp. Em xin hứa sẽ luôn chia sẻ mọi thứ với người nghèo để làm việc thiện.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Hứa chung chung 'chia sẻ mọi thứ', thiếu hành động vừa sức với lứa tuổi.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Sự sẻ chia'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Sự sẻ chia' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Không cần những điều lớn lao ngoài khả năng, tôi bắt đầu tinh thần sẻ chia từ việc quyên góp những tập vở mới và sách giáo khoa đã học cho các bạn nhỏ vùng bão lũ, gửi gắm vào đó tình cảm ấm áp của bạn bè đồng trang lứa.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 15,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lòng hiếu thảo",
    "faultyText": "Cha mẹ nuôi ta vất vả. Em xin hứa sau này kiếm thật nhiều tiền để đền đáp công ơn cha mẹ.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Hẹn đền đáp bằng tiền bạc ở tương lai xa vời, bỏ quên bổn phận phụng dưỡng ngay hôm nay.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lòng hiếu thảo'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lòng hiếu thảo' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Hiếu thảo với tôi không phải đợi đến mai sau, mà là biết tự giác dọn dẹp phòng ngủ, nấu một bữa cơm giản dị chờ bố mẹ đi làm về và nỗ lực học tập để cha mẹ vơi bớt những âu lo thường nhật.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 16,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Ý thức giao thông",
    "faultyText": "Giao thông rất nguy hiểm. Em xin hứa sẽ đi đứng cẩn thận để không bị chú công an phạt.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Tâm lý đối phó 'để không bị phạt' thay vì ý thức bảo vệ an toàn tính mạng.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Ý thức giao thông'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Ý thức giao thông' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Bảo vệ an toàn cho chính mình và mọi người, tôi luôn tự giác cài quai mũ bảo hiểm đạt chuẩn khi ngồi trên xe máy, tuyệt đối không dàn hàng ba trên đường và nghiêm túc dừng xe trước vạch sơn khi đèn đỏ.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 17,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Văn hóa đọc sách",
    "faultyText": "Sách là ngọn đèn sáng. Em xin hứa sẽ chăm chỉ đọc sách để trở thành học sinh giỏi toàn diện.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Khẩu hiệu sách vở, thiếu kế hoạch đọc sách định lượng cụ thể.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Văn hóa đọc sách'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Văn hóa đọc sách' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Tôi đặt mục tiêu mỗi tối đọc ít nhất 15 trang sách văn học hoặc khoa học trước khi đi ngủ, dần thay thế thói quen lướt mạng xã hội vô bổ bằng niềm vui khám phá tri thức trên từng trang sách thơm mùi mực.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 18,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Bản lĩnh sống",
    "faultyText": "Bản lĩnh là làm việc lớn. Em xin hứa sẽ rèn luyện bản lĩnh để trở thành vĩ nhân.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Ảo tưởng to tát ('làm việc lớn', 'trở thành vĩ nhân'), xa rời thực tế lứa tuổi 15.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Bản lĩnh sống'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Bản lĩnh sống' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Bản lĩnh đối với tôi bắt đầu từ những lựa chọn giản dị: dám nói 'Không' trước những cám dỗ giải trí độc hại, dám kiên định thức khuya giải nốt chuyên đề ôn thi và dám chịu trách nhiệm về kết quả học tập của mình.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 19,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lối sống tiết kiệm",
    "faultyText": "Tiết kiệm là quốc sách. Em xin hứa sẽ luôn tiết kiệm tiền bạc để không bị coi là hoang phí.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Dùng từ ngữ đao to búa lớn ('quốc sách') nhưng không chỉ ra được hành vi tiết kiệm cụ thể.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lối sống tiết kiệm'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lối sống tiết kiệm' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Tôi rèn thói quen tiết kiệm từ việc tắt bớt bóng đèn khi rời khỏi phòng học, nâng niu giữ gìn từng trang giấy vở sạch đẹp và cân nhắc kỹ lưỡng trước khi xin bố mẹ tiền mua những món đồ chưa thực sự cần thiết.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 20,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Kiểm soát cảm xúc",
    "faultyText": "Nóng giận rất có hại. Em xin hứa sẽ không bao giờ nóng giận với bất kỳ ai để giữ hòa khí.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Lời hứa phi thực tế ('không bao giờ nóng giận'), thiếu kỹ năng làm chủ cảm xúc.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Kiểm soát cảm xúc'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Kiểm soát cảm xúc' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Khi gặp chuyện bất đồng với bạn bè, tôi tập thói quen hít thở sâu 3 giây để làm chủ cơn giận, lắng nghe đối phương giải thích trước khi phản ứng, và sẵn lòng nói lời xin lỗi để giữ trọn vẹn tình bạn trong sáng.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 21,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lòng trắc ẩn",
    "faultyText": "Trắc ẩn là thương người. Em xin hứa sẽ thương xót tất cả mọi người gặp khó khăn trên đời.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Tình cảm chung chung 'thương xót tất cả', mang tính khẩu hiệu cửa miệng.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lòng trắc ẩn'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lòng trắc ẩn' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Lòng trắc ẩn giục giã tôi không quay lưng dửng dưng trước giọt nước mắt của người bạn cùng lớp, biết dừng lại dắt một cụ già qua đường đông đúc và nhẹ nhàng xua tay không xua đuổi những con vật nhỏ yếu thế.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 22,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Tinh thần cống hiến",
    "faultyText": "Cống hiến là hy sinh cho đất nước. Em xin hứa sẽ cống hiến cả đời mình cho tổ quốc xã hội chủ nghĩa.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Hô hào chính trị hóa, quá tầm lứa tuổi, không có sự gắn kết học đường.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Tinh thần cống hiến'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Tinh thần cống hiến' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Khát vọng cống hiến của một học sinh lớp 9 như tôi bắt đầu từ việc học thật tốt chuyên đề hôm nay, tích cực tham gia các phong trào tình nguyện của đoàn trường, chuẩn bị tri thức vững vàng để mai sau xây dựng quê hương.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 23,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Bệnh thành tích",
    "faultyText": "Bệnh thành tích rất xấu. Chúng ta phải bài trừ bệnh thành tích để giáo dục tiến bộ.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Kêu gọi khẩu hiệu như diễn văn hội nghị, không thấy hành động của cá nhân học sinh.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Bệnh thành tích'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Bệnh thành tích' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Để không tiếp tay cho bệnh thành tích, tôi kiên quyết từ chối những bài tập chép mẫu đối phó, dũng cảm chấp nhận một điểm kiểm tra chưa cao để biết mình còn yếu ở đâu và nỗ lực khắc phục bằng chính thực lực.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 24,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Khát vọng tuổi trẻ",
    "faultyText": "Tuổi trẻ phải có khát vọng. Em xin hứa sẽ luôn khát vọng bay cao bay xa như cánh chim đại bàng.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Dùng hình ảnh ví von sáo rỗng ('cánh chim đại bàng') mà không có phương hướng hành động.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Khát vọng tuổi trẻ'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Khát vọng tuổi trẻ' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Khát vọng của tôi lúc này là dồn trọn tâm trí ôn luyện để tự tin vượt qua kỳ thi vào lớp 10 công lập, bước tiếp vào ngôi trường cấp ba mơ ước để chắp cánh cho đam mê nghiên cứu khoa học trong tương lai.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 25,
    "level": 4,
    "subType": "chua_sao_rong",
    "category": "Phẫu Thuật Lỗi Sáo Rỗng & Khẩu Hiệu",
    "topic": "Lời cảm ơn và xin lỗi",
    "faultyText": "Cảm ơn và xin lỗi là rất tốt. Em xin hứa sẽ luôn nói cảm ơn và xin lỗi suốt ngày để thành người văn minh.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Hứa 'nói suốt ngày' máy móc, biến chuẩn mực đạo đức thành phản xạ hình thức khách sáo.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật văn học', gạch bỏ câu khẩu hiệu sáo rỗng trong đoạn văn trên và viết lại thành một đoạn văn 2 - 3 câu chứa đựng HÀNH ĐỘNG CỤ THỂ của học sinh lớp 9 cho chủ đề: 'Lời cảm ơn và xin lỗi'.",
    "keywords": [
      "lớp 9",
      "kỳ thi",
      "hành động",
      "cụ thể"
    ],
    "formula": "Kỹ thuật phẫu thuật: Gạch bỏ cụm từ 'em xin hứa / sau này lớn lên' -> Thay bằng: 'Đứng trước kỳ thi vào lớp 10... tôi bắt đầu từ việc [hành động cụ thể 1] và kiên quyết [từ bỏ thói xấu 2]'.",
    "similarHint": {
      "similarTopic": "Chữa bệnh sáo rỗng mẫu: Lòng kiên trì",
      "sampleSentence": "Đứng trước những bài toán khó hay những đề văn hóc búa tối nay, bài học về sự kiên trì thôi thúc tôi ngồi lại bàn học giải quyết đến cùng thay vì buông bút bỏ cuộc hay tìm cách chép lời giải có sẵn trên mạng.",
      "thinkingSteps": [
        "Bước 1: Nhận diện và gạch bỏ triệt để câu hứa suông 'Em xin hứa sẽ...'",
        "Bước 2: Gắn vấn đề vào một hoàn cảnh thực tế (ở bàn học tối nay, trong giờ kiểm tra, khi dùng điện thoại).",
        "Bước 3: Viết 1 hành động thực tế có thể kiểm chứng được ngay ngày mai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết lại đoạn văn về 'Lời cảm ơn và xin lỗi' với các hành động chân thực của học sinh lớp 9!"
    },
    "sampleAnswer": "Tôi rèn thói quen nói lời cảm ơn chân thành từ việc đón nhận bát cơm mẹ nấu, và dũng cảm nói lời xin lỗi dứt khoát khi lỡ lơ là làm thầy cô thất vọng, coi đó là thước đo tự trọng của bản thân.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau phẫu thuật đạt điểm 8.5+ vì đã chuyển hóa hoàn toàn từ 'lời hứa suông' thành 'hành vi cụ thể', tạo được niềm tin và sự xúc động nơi người chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các từ ngữ mòn sáo ('em xin hứa', 'sau này lớn lên')",
      "Có ít nhất 1 hành động học tập hoặc sinh hoạt cụ thể của học sinh lớp 9",
      "Giọng văn chân thành, tự nhiên, thuyết phục"
    ]
  },
  {
    "id": 26,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Dẫn chứng Nguyễn Ngọc Ký",
    "faultyText": "Thầy giáo Nguyễn Ngọc Ký sinh năm 1947 tại Nam Định. Năm lên 4 tuổi thầy bị một cơn sốt bại liệt khiến cả hai tay không cử động được nữa. Thầy rất buồn nhưng nhìn các bạn đi học thầy lại thèm. Thầy đến trường xin học nhưng cô giáo bảo tay liệt không viết được. Thầy về nhà tự lấy chân quắp viên gạch viết xuống đất, sau đó viết lên giấy, chân bị chuột rút rớm máu rất đau đớn. Cuối cùng thầy viết rất đẹp và được Bác Hồ tặng huy hiệu, sau này thành nhà giáo ưu tú.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Dẫn chứng kể lể tiểu sử dài dòng như bản tóm tắt lý lịch, mất quá nhiều chữ cho các chi tiết phụ mà thiếu câu chốt nâng tầm bài học.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Dẫn chứng Nguyễn Ngọc Ký'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Dẫn chứng Nguyễn Ngọc Ký' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 27,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Dẫn chứng Nguyễn Ngọc Mạnh",
    "faultyText": "Anh Nguyễn Ngọc Mạnh sinh năm 1990 làm nghề lái xe tải chở hàng ở Hà Nội. Hôm đó là ngày 28 tháng 2 năm 2021, anh đang ngồi trong xe đợi chuyển hàng ở tòa chung cư 60B Nguyễn Huy Tưởng thì nghe thấy tiếng trẻ con khóc và tiếng người lớn la hét thất thanh. Anh mở cửa nhìn lên thấy một bé gái 3 tuổi đang bò qua lan can tầng 12 sắp rơi. Anh liền trèo qua tường rào nhảy lên mái tôn che đường dốc, bị trượt chân nhưng anh kịp nhoài người ra hứng được cháu bé khi cháu rơi xuống. Cả hai cùng an toàn.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể ngày tháng năm, địa chỉ số nhà chi tiết như biên bản tường trình công an, làm loãng tính nghị luận và lãng phí thời gian làm bài.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Dẫn chứng Nguyễn Ngọc Mạnh'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Dẫn chứng Nguyễn Ngọc Mạnh' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Trước tình huống sinh tử nghẹt thở khi một bé gái rơi tự do từ tầng 12 của tòa chung cư cao tầng, anh Nguyễn Ngọc Mạnh đã bất chấp hiểm nguy lao lên mái tôn trơn trượt. (2) Bằng phản xạ xuất thần và lòng nhân ái vô điều kiện, anh đã dùng trọn đôi tay của mình để đón đỡ cháu bé an toàn trong gang tấc. (3) Nghĩa cử cao đẹp cứu người không màng tính mạng của anh đã làm rung động hàng triệu trái tim, thắp sáng niềm tin vào vẻ đẹp của những người hùng đời thường.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 28,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Dẫn chứng Thomas Edison",
    "faultyText": "Thomas Edison là một nhà phát minh người Mỹ rất nổi tiếng. Thuở nhỏ ông bị đuổi học vì thầy giáo bảo đầu óc có vấn đề, mẹ ông phải đưa về dạy. Sau này ông lớn lên làm rất nhiều phát minh như máy quay phim, máy ghi âm. Khi ông làm bóng đèn sợi đốt, ông đã thử rất nhiều chất liệu từ tóc, sợi tre, kim loại, làm đi làm lại hơn 10.000 lần đều bị cháy hoặc hỏng. Người ta bảo ông thất bại nhiều thế sao không bỏ đi nhưng ông bảo không phải, ông đã tìm ra 10.000 chất không phù hợp. Cuối cùng ông tìm ra sợi vonfram và thành công rực rỡ.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lan man từ chuyện bị đuổi học thuở nhỏ đến các phát minh khác, sa đà vào đối thoại dài dòng thiếu chất nghị luận.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Dẫn chứng Thomas Edison'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Dẫn chứng Thomas Edison' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Trong quá trình nghiên cứu chế tạo bóng đèn sợi đốt, nhà bác học Thomas Edison đã từng đối mặt với hơn 10.000 lần thử nghiệm thất bại cay đắng. (2) Thay vì nản lòng buông xuôi, ông lạc quan coi đó là 10.000 bước khám phá để loại trừ các chất liệu không phù hợp và kiên định tiếp tục hành trình nghiên cứu. (3) Phát minh vĩ đại ra đời đã thắp sáng cả nhân loại, để lại bài học bất hủ: Thất bại chỉ là chiếc lò xo bật đẩy con người chạm tới đỉnh cao thành công.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 29,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Dẫn chứng Greta Thunberg",
    "faultyText": "Greta Thunberg là một học sinh nữ người Thụy Điển sinh năm 2003. Em bị mắc chứng tự kỷ nhẹ. Năm 2018 khi mới 15 tuổi, em thấy trái đất nóng lên và biến đổi khí hậu nguy hiểm quá nên em quyết định bãi khóa không đi học vào thứ sáu hàng tuần. Em cầm một tấm biển viết chữ bãi khóa vì khí hậu ra ngồi trước tòa nhà quốc hội Thụy Điển suốt nhiều tuần lễ. Nhiều người bảo em làm trò nhưng sau đó có rất nhiều bạn học sinh khác làm theo, tạo thành phong trào lớn đi biểu tình ở khắp các nước châu Âu và Mỹ. Em còn được mời đến phát biểu ở Liên Hợp Quốc.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể bệnh lý cá nhân và hành trình dài dòng, diễn đạt vụng về thiếu tính cô đọng triết lý.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Dẫn chứng Greta Thunberg'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Dẫn chứng Greta Thunberg' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Nhận thức sâu sắc về thảm họa biến đổi khí hậu đang từng ngày bức tử hành tinh, cô bé 15 tuổi Greta Thunberg đã một mình kiên trì ngồi bãi khóa trước tòa nhà quốc hội Thụy Điển. (2) Tiếng nói đanh thép và hành động quả cảm của em đã thổi bùng phong trào 'Fridays for Future', lôi cuốn hàng triệu thanh thiếu niên trên khắp thế giới xuống đường đòi công lý cho môi trường. (3) Greta đã khẳng định chân lý: Không một ai là quá nhỏ bé để tạo nên sự thay đổi to lớn cho thế giới.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 30,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Dẫn chứng Ngô Minh Hiếu",
    "faultyText": "Bạn Ngô Minh Hiếu và bạn Nguyễn Tất Minh ở xóm 1 xã Đồng Thắng huyện Triệu Sơn tỉnh Thanh Hóa. Bạn Minh sinh ra không may mắn bị tật nguyền hai chân teo tóp và tay phải cũng bị khoèo. Nhìn bạn Minh muốn đi học mà không đi được, bạn Hiếu thương bạn quá nên năm 7 tuổi đã xin phép bố mẹ cõng bạn đi học. Từ trường tiểu học lên cấp hai rồi cấp ba, dù trời mưa gió hay đường lầy lội, Hiếu vẫn cõng Minh đi học suốt 10 năm liền không nghỉ buổi nào. Năm 2020 thi tốt nghiệp cả hai bạn đều đạt trên 28 điểm và đỗ đại học.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết địa chỉ xã huyện xóm thôn, mô tả khuyết tật rườm rà, thiếu sự đúc kết về sức mạnh của tình bạn tri âm.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Dẫn chứng Ngô Minh Hiếu'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Dẫn chứng Ngô Minh Hiếu' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Thấu hiểu hoàn cảnh bạn thân Nguyễn Tất Minh bị khuyết tật bẩm sinh không thể tự đi lại, cậu học trò nghèo Ngô Minh Hiếu đã tình nguyện cõng bạn đến trường mỗi ngày. (2) Suốt 10 năm ròng rã bất kể nắng gắt mưa dầm, đôi chân của Hiếu đã thay cho đôi chân của Minh vượt qua hàng ngàn cây số đường làng để cùng nhau theo đuổi con chữ. (3) Tình bạn cổ tích giữa đời thực ấy đã kết trái ngọt ngào khi cả hai cùng bước chân vào cánh cổng trường đại học, trở thành bài ca tuyệt mỹ về lòng nhân ái.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 31,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Bác Hồ bôn ba tìm đường cứu nước",
    "faultyText": "Bác Hồ bôn ba tìm đường cứu nước có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể tên tàu Đô đốc Latouche-Tréville và năm tháng quá chi tiết",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể tên tàu Đô đốc Latouche-Tréville và năm tháng quá chi tiết",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Bác Hồ bôn ba tìm đường cứu nước'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Bác Hồ bôn ba tìm đường cứu nước' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Suốt 30 năm bôn ba khắp năm châu tìm đường cứu nước, Bác Hồ đã làm đủ mọi nghề nặng nhọc từ quét tuyết đến phụ bếp. (2) Dù gian lao trăm bề, Bác vẫn kiên trì tự học ngoại ngữ và lý luận cách mạng mỗi đêm bên ngọn đèn dầu le lói. (3) Tinh thần tự học kiệt xuất ấy đã giúp Người tìm ra chân lý giải phóng dân tộc, trở thành tấm gương sáng ngời cho muôn đời sau.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 32,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Kình ngư Ánh Viên",
    "faultyText": "Kình ngư Ánh Viên có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể số mét bơi mỗi ngày và chi tiết ăn uống kiêng khem",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể số mét bơi mỗi ngày và chi tiết ăn uống kiêng khem",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Kình ngư Ánh Viên'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Kình ngư Ánh Viên' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Để đem lại vinh quang cho thể thao nước nhà, kình ngư Ánh Viên đã phải trải qua những năm tháng khổ luyện khắc nghiệt nơi xứ người, hy sinh tuổi thanh xuân xa gia đình. (2) Vượt qua nỗi cô đơn và cơn đau nhức thể xác trong làn nước lạnh, cô kiên cường tập luyện không ngừng nghỉ để liên tục phá vỡ các kỷ lục bơi lội. (3) Cơn mưa huy chương vàng tại SEA Games của Ánh Viên là minh chứng khẳng định: Thành công là kết tinh của 99% mồ hôi khổ luyện.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 33,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Hoa hậu H'Hen Niê",
    "faultyText": "Hoa hậu H'Hen Niê có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết làm phục vụ bàn, đi thi hoa hậu nhiều lần",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết làm phục vụ bàn, đi thi hoa hậu nhiều lần",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Hoa hậu H'Hen Niê'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Hoa hậu H'Hen Niê' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Xuất thân từ một buôn làng nghèo khó của đồng bào Ê-đê, H'Hen Niê từng đứng trước áp lực của hủ tục phải bỏ học lấy chồng sớm ở tuổi 14. (2) Bằng khát vọng tự làm chủ số phận, cô dũng cảm nói 'Không', một mình lên thành phố làm thuê kiếm sống để tiếp tục học đại học và rèn luyện bản thân. (3) Kỳ tích lọt vào Top 5 Miss Universe của cô đã truyền cảm hứng mạnh mẽ rằng: Hãy dám ước mơ và tự hào bước ra thế giới bằng chính bản sắc của mình.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 34,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Thầy Chu Văn An",
    "faultyText": "Thầy Chu Văn An có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết về vua Trần Dụ Tông và tên từng tên nịnh thần",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết về vua Trần Dụ Tông và tên từng tên nịnh thần",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Thầy Chu Văn An'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Thầy Chu Văn An' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Chứng kiến triều đình suy thoái do những tên tham quan lộng quyền ức hiếp muôn dân, thầy giáo Chu Văn An đã khẳng khái dâng 'Thất trảm sớ' xin chém bảy kẻ nịnh thần. (2) Khi lời can gián không được chấp thuận, thầy thanh thản treo mũ từ quan, lui về ở ẩn dạy học để giữ trọn tấm lòng trong sạch. (3) Khí tiết thanh cao của người thầy muôn đời ấy là tượng đài bất tử về lòng trung thực và tinh thần bất khuất trước cường quyền.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 35,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Bác sĩ Alexandre Yersin",
    "faultyText": "Bác sĩ Alexandre Yersin có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết nghiên cứu thuốc và phòng thí nghiệm tại Pháp",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết nghiên cứu thuốc và phòng thí nghiệm tại Pháp",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Bác sĩ Alexandre Yersin'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Bác sĩ Alexandre Yersin' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Bỏ lại sau lưng cuộc sống phồn hoa tại Paris, bác sĩ Alexandre Yersin đã chọn gắn bó trọn đời với mảnh đất Nha Trang đầy nắng gió. (2) Tại đây, ông miệt mài nghiên cứu tìm ra vắc-xin trị dịch hạch cứu sống hàng triệu người và tận tụy khám chữa bệnh miễn phí cho dân nghèo. (3) Tấm lòng nhân ái không biên giới của ông mãi được nhân dân Việt Nam tôn kính khắc ghi như một vị bồ tát giữa đời thường.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 36,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Nick Vujicic",
    "faultyText": "Nick Vujicic có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể chi tiết chuyện bị bạn bè trêu chọc và các môn thể thao",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể chi tiết chuyện bị bạn bè trêu chọc và các môn thể thao",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Nick Vujicic'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Nick Vujicic' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Sinh ra với hội chứng không tay không chân bẩm sinh, Nick Vujicic từng rơi vào tuyệt vọng cùng cực trước nghịch cảnh nghiệt ngã. (2) Bằng niềm tin sắt đá, anh kiên trì tập viết, học bơi, tốt nghiệp đại học và trở thành diễn giả truyền cảm hứng nổi tiếng khắp năm châu. (3) Nụ cười rạng rỡ của Nick khẳng định chân lý: Cuộc sống không có giới hạn nào ngoại trừ những rào cản do chính tâm trí con người đặt ra.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 37,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Cô gái Malala Yousafzai",
    "faultyText": "Cô gái Malala Yousafzai có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết vụ nổ súng trên xe buýt trường học",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết vụ nổ súng trên xe buýt trường học",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Cô gái Malala Yousafzai'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Cô gái Malala Yousafzai' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Dưới sự kiểm soát tàn bạo của lực lượng Taliban cấm phụ nữ đến trường, cô bé Malala Yousafzai vẫn kiên cường cất cao tiếng nói đòi quyền đi học cho trẻ em gái. (2) Dù từng bị bắn vào đầu trong gang tấc sinh tử, sau khi bình phục, cô vẫn dũng cảm đứng trên diễn đàn Liên Hợp Quốc tiếp tục đấu tranh. (3) Malala đã trở thành người trẻ nhất nhận giải Nobel Hòa bình, minh chứng cho sức mạnh bất diệt của tri thức trước bạo tàn.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 38,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Đội tuyển U23 Việt Nam",
    "faultyText": "Đội tuyển U23 Việt Nam có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết các phút thi đấu và tên từng cầu thủ dự bị",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết các phút thi đấu và tên từng cầu thủ dự bị",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Đội tuyển U23 Việt Nam'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Đội tuyển U23 Việt Nam' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Dưới cơn mưa tuyết trắng xóa và giá lạnh thấu xương tại Thường Châu, các cầu thủ trẻ Việt Nam phải thi đấu trong điều kiện vô cùng bất lợi. (2) Bất chấp cái lạnh cắt da, các chàng trai áo đỏ đã kiên cường chiến đấu như những chiến binh, cùng nhau cào tuyết để tạo nên bàn thắng lịch sử. (3) Tinh thần không bao giờ bỏ cuộc của U23 Việt Nam đã làm rung động triệu trái tim và khẳng định ý chí quật cường của tuổi trẻ đất Việt.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 39,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Quỹ 'Cơm có thịt'",
    "faultyText": "Quỹ 'Cơm có thịt' có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể số tiền quyên góp từng năm và tên các xã nghèo",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể số tiền quyên góp từng năm và tên các xã nghèo",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Quỹ 'Cơm có thịt''.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Quỹ 'Cơm có thịt'' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Chứng kiến các em nhỏ vùng cao Tây Bắc co ro trong giá rét ăn cơm trắng chấm ớt, nhà báo Trần Đăng Tuấn cùng các cộng sự đã sáng lập quỹ 'Cơm có thịt'. (2) Bằng sự minh bạch và bền bỉ kêu gọi, chương trình đã mang hàng triệu bữa ăn đủ dinh dưỡng và áo ấm đến cho học trò nghèo. (3) Dự án nhân văn này đã sưởi ấm những đôi môi tím tái vì lạnh, chắp cánh cho hàng ngàn đứa trẻ nghèo vững bước đến trường.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 40,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Em Nguyễn Văn Nam cứu bạn",
    "faultyText": "Em Nguyễn Văn Nam cứu bạn có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết giờ tan trường và đoạn sông sâu",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết giờ tan trường và đoạn sông sâu",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Em Nguyễn Văn Nam cứu bạn'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Em Nguyễn Văn Nam cứu bạn' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Đang trên đường đi học về nghe tiếng kêu cứu thảm thiết của nhóm bạn chới với giữa dòng nước lũ, em Nguyễn Văn Nam đã không một giây do dự. (2) Nam đã nhiều lần dũng cảm lao mình xuống dòng nước xoáy xiết, lần lượt cứu được cả 5 em nhỏ đưa vào bờ an toàn. (3) Dù đã kiệt sức hy sinh, tấm gương quả cảm quên mình vì người khác của em mãi là khúc tráng ca bất tử trong lòng bạn bè cùng trang lứa.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 41,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Steve Jobs và Apple",
    "faultyText": "Steve Jobs và Apple có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết xung đột hội đồng quản trị công ty",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết xung đột hội đồng quản trị công ty",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Steve Jobs và Apple'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Steve Jobs và Apple' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Từng bị sa thải khỏi chính công ty Apple do mình sáng lập ở tuổi 30, Steve Jobs tưởng chừng đã đánh mất toàn bộ sự nghiệp vĩ đại. (2) Không chịu đầu hàng, ông kiên định với triết lý sáng tạo khác biệt, nỗ lực quay trở lại vực dậy Apple từ bờ vực phá sản. (3) Những phát minh đột phá của ông đã thay đổi hoàn toàn diện mạo công nghệ thế giới, khẳng định bản lĩnh của một huyền thoại dám nghĩ khác.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 42,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Lực lượng Y bác sĩ chống dịch",
    "faultyText": "Lực lượng Y bác sĩ chống dịch có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể tên các bệnh viện dã chiến và số ca thở máy",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể tên các bệnh viện dã chiến và số ca thở máy",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Lực lượng Y bác sĩ chống dịch'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Lực lượng Y bác sĩ chống dịch' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Trong những ngày đại dịch bùng phát khốc liệt nhất, các bệnh viện đứng trước bờ vực quá tải với hàng ngàn ca bệnh nguy kịch. (2) Hàng ngàn y bác sĩ đã gác lại hạnh phúc riêng tư, ngâm mình trong bộ đồ bảo hộ ngột ngạt suốt ngày đêm để giành giật từng hơi thở cho nhân dân. (3) Sự hy sinh quên mình của họ là tượng đài cao đẹp nhất về y đức và tinh thần trách nhiệm của những thiên thần áo trắng.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 43,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Cô giáo Đỗ Thị Quyên",
    "faultyText": "Cô giáo Đỗ Thị Quyên có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể các văn bản thanh tra và cuộc họp kỷ luật",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể các văn bản thanh tra và cuộc họp kỷ luật",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Cô giáo Đỗ Thị Quyên'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Cô giáo Đỗ Thị Quyên' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Đứng trước sự tiêu cực và gian lận điểm thi tại kỳ thi tốt nghiệp, cô giáo Đỗ Thị Quyên đã phải đối diện với áp lực nặng nề và sự đe dọa từ nhiều phía. (2) Bằng lương tâm của người làm nghề giáo, cô đã kiên quyết gửi đơn tố cáo để bảo vệ sự trong sạch và công bằng cho kỳ thi. (3) Hành động dũng cảm của cô đã thắp lên niềm tin của dư luận vào sự nghiêm minh và liêm chính của nền giáo dục nước nhà.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 44,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Thủ khoa Nguyễn Văn Kiên",
    "faultyText": "Thủ khoa Nguyễn Văn Kiên có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể công việc xúc cát trộn hồ và tiền lương mỗi ngày",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể công việc xúc cát trộn hồ và tiền lương mỗi ngày",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Thủ khoa Nguyễn Văn Kiên'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Thủ khoa Nguyễn Văn Kiên' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Từng chán nản bỏ học đi làm phụ hồ vất vả nơi công trường, cậu học trò nghèo Nguyễn Văn Kiên tưởng chừng đã khép lại tương lai trong những giọt mồ hôi cay đắng. (2) Nhận thức được giá trị của tri thức, Kiên quyết tâm quay lại bàn học, tự mày mò ôn luyện ngày đêm để chinh phục kỳ thi cam go. (3) Thành tích đỗ Thủ khoa Đại học Y Hà Nội của Kiên là bài học truyền cảm hứng kỳ diệu: Không bao giờ là quá muộn để bắt đầu nỗ lực.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 45,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Cậu bé đánh giày trả lại ví",
    "faultyText": "Cậu bé đánh giày trả lại ví có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể số tờ tiền mệnh giá 500k trong ví",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể số tờ tiền mệnh giá 500k trong ví",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Cậu bé đánh giày trả lại ví'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Cậu bé đánh giày trả lại ví' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Hàng ngày phải mưu sinh vất vả từng đồng trên vỉa hè để kiếm sống, cậu bé đánh giày nghèo khó đã vô tình nhặt được một chiếc ví có hàng chục triệu đồng. (2) Không hề nảy sinh lòng tham, em đã chủ động đứng chờ suốt nhiều giờ rồi mang bàn giao cho công an để trả lại người đánh mất. (3) Hành động cao đẹp của em khẳng định rằng: Nghèo khó về vật chất không bao giờ có thể làm hoen ố sự giàu có của một tâm hồn trong sạch.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 46,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Đoàn xe cứu trợ bão Yagi",
    "faultyText": "Đoàn xe cứu trợ bão Yagi có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể biển số xe và các tuyến quốc lộ bị sạt lở",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể biển số xe và các tuyến quốc lộ bị sạt lở",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Đoàn xe cứu trợ bão Yagi'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Đoàn xe cứu trợ bão Yagi' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Cơn bão số 3 quét qua đã để lại sự tàn phá nặng nề, nhấn chìm nhiều bản làng và đẩy đồng bào miền Bắc vào cảnh tang thương. (2) Hàng triệu người dân từ miền Trung và miền Nam đã ngày đêm gói bánh chưng, chở hàng ngàn tấn lương thực chi viện cho vùng lũ lụt. (3) Tinh thần đoàn kết ấy là minh chứng sống động cho đạo lý 'thương người như thể thương thân' bất diệt của dân tộc Việt Nam.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 47,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Họa sĩ Lê Duy Ứng",
    "faultyText": "Họa sĩ Lê Duy Ứng có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết mảnh đạn pháo găm vào mắt",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết mảnh đạn pháo găm vào mắt",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Họa sĩ Lê Duy Ứng'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Họa sĩ Lê Duy Ứng' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Trong chiến dịch giải phóng Sài Gòn năm 1975, người chiến sĩ trẻ Lê Duy Ứng đã bị thương nặng và hỏng cả hai con mắt ngay trên trận địa. (2) Giữa lằn ranh sinh tử, ông đã dùng chính dòng máu nóng chảy ra từ đôi mắt mình để vẽ nên bức chân dung Bác Hồ kính yêu. (3) Bức tranh bất hủ ấy đã trở thành biểu tượng thiêng liêng của lòng yêu nước và ý chí bất khuất của người lính cách mạng.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 48,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Nhà văn Helen Keller",
    "faultyText": "Nhà văn Helen Keller có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể chi tiết các năm học chữ và tên các trường",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể chi tiết các năm học chữ và tên các trường",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Nhà văn Helen Keller'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Nhà văn Helen Keller' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Một cơn bạo bệnh thuở ấu thơ đã cướp đi vĩnh viễn cả thị giác lẫn thính giác của Helen Keller, đẩy em vào thế giới hoàn toàn câm lặng và tăm tối. (2) Bằng nghị lực phi thường, Helen đã kiên trì học chữ nổi Braille, tốt nghiệp đại học danh giá và đi khắp thế giới truyền cảm hứng cho người khuyết tật. (3) Cuộc đời bà là minh chứng rực rỡ rằng: Ý chí con người có thể biến những điều không thể thành có thể.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 49,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Chàng trai chăn bò Y Krô",
    "faultyText": "Chàng trai chăn bò Y Krô có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể tên con bò và thời gian đi chăn",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể tên con bò và thời gian đi chăn",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Chàng trai chăn bò Y Krô'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Chàng trai chăn bò Y Krô' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Sinh ra trong một gia đình nghèo ở Tây Nguyên, hàng ngày phải dắt bò lên rẫy, Y Krô tưởng chừng chỉ có thể gắn bó cả đời với nương ngô. (2) Tận dụng từng phút giây rảnh rỗi, em đã miệt mài tự học tiếng Anh qua chiếc điện thoại cũ bằng cách nhại lại video và kiên trì giao tiếp với khách Tây. (3) Giờ đây trở thành hướng dẫn viên du lịch thành thạo ngoại ngữ, Y Krô là tấm gương sáng về tinh thần tự học làm chủ cuộc đời.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 50,
    "level": 4,
    "subType": "cat_tia_dan_chung",
    "category": "Cắt Tỉa & Gọt Giũa Dẫn Chứng CAR",
    "topic": "Nhóm bạn trẻ Hà Nội Xanh",
    "faultyText": "Nhóm bạn trẻ Hà Nội Xanh có rất nhiều chi tiết tiểu sử từ năm sinh, quê quán, diễn biến dài dòng... Kể lể mùi thối của rác và chi tiết các con kênh",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn dẫn chứng bị mắc bệnh 'kể lể lan man', chứa quá nhiều chi tiết tiểu sử thừa thãi. Kể lể mùi thối của rác và chi tiết các con kênh",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', gọt bỏ các chi tiết thừa và nén đoạn dẫn chứng trên về ĐÚNG 3 CÂU chuẩn CAR (Bối cảnh -> Hành động -> Kết quả) cho đề tài: 'Nhóm bạn trẻ Hà Nội Xanh'.",
    "keywords": [
      "Bối cảnh",
      "Hành động",
      "Kết quả",
      "3 câu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Tên nhân vật + Nghịch cảnh đối mặt -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả đạt được & Bài học đúc kết.",
    "similarHint": {
      "similarTopic": "Cắt tỉa dẫn chứng mẫu: Thầy Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1: Gạch bỏ toàn bộ năm sinh, quê quán, tên địa chỉ số nhà, đối thoại dài dòng.",
        "Bước 2: Gom lại câu 1 nêu bối cảnh/nghịch cảnh; câu 2 dùng động từ mạnh nêu hành động.",
        "Bước 3: Câu 3 viết một mệnh đề khẳng định giá trị lan tỏa cho xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Cắt tỉa dẫn chứng về 'Nhóm bạn trẻ Hà Nội Xanh' về đúng 3 câu theo mô hình CAR!"
    },
    "sampleAnswer": "(1) Những con sông và kênh rạch tại thủ đô từ lâu đã bị ô nhiễm nặng nề bởi rác thải sinh hoạt ứ đọng nồng nặc. (2) Nhóm bạn trẻ 'Hà Nội Xanh' đã không ngần ngại ngâm mình dưới dòng nước đen ngòm hàng giờ để vớt hàng tấn rác làm sạch dòng chảy. (3) Hành động dấn thân thầm lặng của các bạn đã trả lại màu xanh cho sông hồ và đánh thức ý thức bảo vệ môi trường của cộng đồng.",
    "analysis": "💡 Phân tích sư phạm: Việc cắt tỉa này giúp bài văn tiết kiệm được 100 từ thừa thãi, tập trung toàn bộ sức nặng vào hành động và ý nghĩa, gây ấn tượng mạnh với giám khảo chấm thi.",
    "userRubric": [
      "Đã loại bỏ hoàn toàn các chi tiết tiểu sử thừa (năm sinh, địa chỉ, đối thoại vụn vặt)",
      "Đúng cấu trúc 3 câu CAR: Bối cảnh (C) - Hành động (A) - Kết quả (R)",
      "Có câu chốt khẳng định bài học lan tỏa sâu sắc"
    ]
  },
  {
    "id": 51,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Sự tự tin",
    "faultyText": "Sự tự tin là phẩm chất quý giá nhất của con người. Người tự tin luôn dám nghĩ dám làm và không sợ hãi trước bất kỳ điều gì. Chúng ta cần luôn luôn tự tin trong mọi hoàn cảnh để có thể chiến thắng và thành công rực rỡ.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn mắc bệnh ca ngợi một chiều 'màu hồng', cổ xúy sự tự tin thái quá mà không nhìn thấy ranh giới nguy hiểm giữa tự tin và tự phụ.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Sự tự tin' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Sự tự tin' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề. Do đó, tự tin chân chính phải luôn đi đôi với sự khiêm nhường học hỏi.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 52,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Lòng vị tha",
    "faultyText": "Vị tha là cội nguồn của yêu thương. Người có lòng vị tha luôn luôn tha thứ cho tất cả mọi người, không bao giờ giận hờn hay trách móc ai. Cứ tha thứ thật nhiều thì cuộc sống sẽ tràn ngập hạnh phúc và bình yên.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết mù quáng, cho rằng vị tha là 'tha thứ cho tất cả', vô tình cổ xúy cho sự nhu nhược và dung túng cho cái ác.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Lòng vị tha' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Lòng vị tha' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Lòng vị tha là liều thuốc chữa lành những rạn nứt trong các mối quan hệ, mở ra cơ hội cho người sai lầm được hoàn thiện. Thế nhưng, vị tha không đồng nghĩa với sự nhu nhược dung túng cho cái ác tiếp tục lộng hành; tha thứ phải đi liền với sự tỉnh táo để kỷ cương và lẽ phải không bị xem thường.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 53,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Tính kiên trì",
    "faultyText": "Kiên trì là con đường duy nhất dẫn tới vinh quang. Cứ kiên trì theo đuổi điều mình muốn thì sớm muộn cũng sẽ thành công. Người kiên trì không bao giờ chịu thay đổi mục tiêu dù cho ai có nói gì đi chăng nữa.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Cổ xúy thói cứng nhắc, bảo thủ ('không bao giờ chịu thay đổi mục tiêu'), nhầm lẫn giữa kiên trì và cố chấp mù quáng.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Tính kiên trì' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Tính kiên trì' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Lòng kiên trì là đôi chân bền bỉ đưa ta vượt qua dặm dài thử thách để chạm tới ước mơ. Dẫu vậy, kiên trì không có nghĩa là cố chấp mù quáng bám lấy một mục tiêu sai lầm hay một phương pháp đã lỗi thời; người kiên trì khôn ngoan là người biết linh hoạt thích ứng để tìm ra lối đi đúng đắn nhất.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 54,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Lòng dũng cảm",
    "faultyText": "Dũng cảm là phẩm chất của những người anh hùng. Dũng cảm là sẵn sàng lao vào mọi hiểm nguy, không run sợ trước cái chết để cứu giúp người khác.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Viết một chiều cổ xúy sự liều mạng bừa bãi, thiếu kỹ năng và bất chấp tính mạng vô ích.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Lòng dũng cảm' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Lòng dũng cảm' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Lòng dũng cảm là bản lĩnh cao quý giúp con người chiến thắng nỗi sợ hãi để bảo vệ chính nghĩa. Song, chúng ta cần phân định rõ ràng giữa lòng dũng cảm có hiểu biết với sự liều lĩnh bốc đồng; dũng cảm chân chính luôn phải được dẫn đường bởi sự khôn ngoan và các kỹ năng an toàn.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 55,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Nuôi dưỡng ước mơ",
    "faultyText": "Ước mơ giúp con người bay cao bay xa. Tuổi trẻ hãy cứ ước mơ thật lớn, ước mơ càng kỳ vĩ càng vĩ đại. Chỉ cần có ước mơ là chúng ta đã nắm chắc một nửa thành công trong tay.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Ca ngợi ước mơ lơ lửng trên mây, thiếu việc gắn với năng lực thực tế và mồ hôi khổ luyện.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Nuôi dưỡng ước mơ' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Nuôi dưỡng ước mơ' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Ước mơ là ngọn hải đăng soi sáng con đường thanh xuân đầy khát vọng. Tuy nhiên, nuôi dưỡng ước mơ không đồng nghĩa với việc chìm đắm trong những ảo tưởng viển vông xa rời thực tế; ước mơ chỉ thực sự có giá trị khi nó được tưới mát bằng mồ hôi khổ luyện và những hành động thiết thực mỗi ngày.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 56,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Sống tự lập",
    "faultyText": "Sống tự lập là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Sống tự lập mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Tuyệt đối không biến tự lập thành sự cô lập ích kỷ hay khước từ tinh thần làm việc nhóm.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Sống tự lập' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Sống tự lập' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Sống tự lập giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Tuyệt đối không biến tự lập thành sự cô lập ích kỷ hay khước từ tinh thần làm việc nhóm. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 57,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Đức khiêm tốn",
    "faultyText": "Đức khiêm tốn là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Đức khiêm tốn mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Khiêm tốn không phải là sự tự ti nhút nhát, không dám bộc lộ năng lực và chính kiến của mình.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Đức khiêm tốn' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Đức khiêm tốn' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Đức khiêm tốn giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Khiêm tốn không phải là sự tự ti nhút nhát, không dám bộc lộ năng lực và chính kiến của mình. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 58,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Lòng yêu nước",
    "faultyText": "Lòng yêu nước là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Lòng yêu nước mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Yêu nước chân chính phải tỉnh táo, văn minh, bài trừ chủ nghĩa dân tộc cực đoan hay thói bài ngoại mù quáng.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Lòng yêu nước' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Lòng yêu nước' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Lòng yêu nước giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Yêu nước chân chính phải tỉnh táo, văn minh, bài trừ chủ nghĩa dân tộc cực đoan hay thói bài ngoại mù quáng. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 59,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Làm từ thiện sẻ chia",
    "faultyText": "Làm từ thiện sẻ chia là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Làm từ thiện sẻ chia mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Sẻ chia cần xuất phát từ tâm hồn chân thành chứ không phải thái độ ban phát kẻ cả hay đánh bóng tên tuổi.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Làm từ thiện sẻ chia' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Làm từ thiện sẻ chia' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Làm từ thiện sẻ chia giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Sẻ chia cần xuất phát từ tâm hồn chân thành chứ không phải thái độ ban phát kẻ cả hay đánh bóng tên tuổi. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 60,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Tính trung thực",
    "faultyText": "Tính trung thực là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Tính trung thực mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Trung thực nói thật không đồng nghĩa với sự thô lỗ, vụng về trong giao tiếp gây tổn thương người khác.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Tính trung thực' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Tính trung thực' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Tính trung thực giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Trung thực nói thật không đồng nghĩa với sự thô lỗ, vụng về trong giao tiếp gây tổn thương người khác. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 61,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Lối sống tiết kiệm",
    "faultyText": "Lối sống tiết kiệm là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Lối sống tiết kiệm mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Tiết kiệm hoàn toàn khác với thói bủn xỉn, keo kiệt tước đoạt các nhu cầu sinh hoạt tối thiểu.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Lối sống tiết kiệm' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Lối sống tiết kiệm' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Lối sống tiết kiệm giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Tiết kiệm hoàn toàn khác với thói bủn xỉn, keo kiệt tước đoạt các nhu cầu sinh hoạt tối thiểu. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 62,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Tư duy phản biện",
    "faultyText": "Tư duy phản biện là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Tư duy phản biện mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Phản biện xây dựng khác xa với thói bất mãn, săm soi bắt bẻ tiêu cực nhằm công kích hạ bệ người khác.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Tư duy phản biện' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Tư duy phản biện' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Tư duy phản biện giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Phản biện xây dựng khác xa với thói bất mãn, săm soi bắt bẻ tiêu cực nhằm công kích hạ bệ người khác. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 63,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Bao dung độ lượng",
    "faultyText": "Bao dung độ lượng là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Bao dung độ lượng mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Bao dung cho lỗi lầm không thể biến thành sự thỏa hiệp dễ dãi làm xóa nhòa kỷ cương pháp luật.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Bao dung độ lượng' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Bao dung độ lượng' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Bao dung độ lượng giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Bao dung cho lỗi lầm không thể biến thành sự thỏa hiệp dễ dãi làm xóa nhòa kỷ cương pháp luật. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 64,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Tự do cá nhân",
    "faultyText": "Tự do cá nhân là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Tự do cá nhân mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Tự do không bao giờ là sự buông thả vô lối hay xâm phạm quyền lợi hợp pháp của cộng đồng.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Tự do cá nhân' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Tự do cá nhân' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Tự do cá nhân giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Tự do không bao giờ là sự buông thả vô lối hay xâm phạm quyền lợi hợp pháp của cộng đồng. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 65,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Tinh thần thi đua",
    "faultyText": "Tinh thần thi đua là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Tinh thần thi đua mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Thi đua tiến bộ phải công bằng, lành mạnh chứ không phải thói ganh ghét, đố kỵ tìm cách dìm người khác xuống.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Tinh thần thi đua' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Tinh thần thi đua' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Tinh thần thi đua giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Thi đua tiến bộ phải công bằng, lành mạnh chứ không phải thói ganh ghét, đố kỵ tìm cách dìm người khác xuống. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 66,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Bảo vệ quan điểm",
    "faultyText": "Bảo vệ quan điểm là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Bảo vệ quan điểm mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Bảo vệ chính kiến không đồng nghĩa với sự độc đoán, bảo thủ, khăng khăng cho rằng chỉ mình luôn đúng.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Bảo vệ quan điểm' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Bảo vệ quan điểm' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Bảo vệ quan điểm giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Bảo vệ chính kiến không đồng nghĩa với sự độc đoán, bảo thủ, khăng khăng cho rằng chỉ mình luôn đúng. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 67,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Lối sống lạc quan",
    "faultyText": "Lối sống lạc quan là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Lối sống lạc quan mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Lạc quan không phải là thái độ thờ ơ, cười cợt vô tâm trước nỗi đau của đồng loại hay né tránh thực tế.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Lối sống lạc quan' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Lối sống lạc quan' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Lối sống lạc quan giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Lạc quan không phải là thái độ thờ ơ, cười cợt vô tâm trước nỗi đau của đồng loại hay né tránh thực tế. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 68,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Tình cảm gia đình",
    "faultyText": "Tình cảm gia đình là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Tình cảm gia đình mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Yêu thương gia đình không thể biến thành sự bao che, thiên vị cho những sai trái của người thân.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Tình cảm gia đình' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Tình cảm gia đình' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Tình cảm gia đình giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Yêu thương gia đình không thể biến thành sự bao che, thiên vị cho những sai trái của người thân. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 69,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Sự hy sinh",
    "faultyText": "Sự hy sinh là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Sự hy sinh mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Hy sinh phải đúng người, đúng thời điểm và có ý nghĩa, tránh sự hy sinh mù quáng vào những điều độc hại.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Sự hy sinh' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Sự hy sinh' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Sự hy sinh giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Hy sinh phải đúng người, đúng thời điểm và có ý nghĩa, tránh sự hy sinh mù quáng vào những điều độc hại. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 70,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Học hỏi cái mới",
    "faultyText": "Học hỏi cái mới là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Học hỏi cái mới mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Mở lòng đón nhận cái mới không đồng nghĩa với lối sống sính ngoại lai căng, quay lưng với truyền thống.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Học hỏi cái mới' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Học hỏi cái mới' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Học hỏi cái mới giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Mở lòng đón nhận cái mới không đồng nghĩa với lối sống sính ngoại lai căng, quay lưng với truyền thống. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 71,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Tính thẳng thắn",
    "faultyText": "Tính thẳng thắn là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Tính thẳng thắn mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Thẳng thắn góp ý khác hẳn với việc dùng lời lẽ cay độc miệt thị để xúc phạm danh dự bạn bè.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Tính thẳng thắn' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Tính thẳng thắn' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Tính thẳng thắn giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Thẳng thắn góp ý khác hẳn với việc dùng lời lẽ cay độc miệt thị để xúc phạm danh dự bạn bè. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 72,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Sống thật với mình",
    "faultyText": "Sống thật với mình là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Sống thật với mình mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Sống thật không thể lấy làm bình phong che đậy cho lối hành xử thô lỗ, bản năng thiếu văn hóa.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Sống thật với mình' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Sống thật với mình' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Sống thật với mình giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Sống thật không thể lấy làm bình phong che đậy cho lối hành xử thô lỗ, bản năng thiếu văn hóa. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 73,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Lòng nhiệt tình",
    "faultyText": "Lòng nhiệt tình là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Lòng nhiệt tình mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Nhiệt tình phải đi đôi với sự hiểu biết, nhiệt tình thiếu suy xét đôi khi biến thành sự phá hoại.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Lòng nhiệt tình' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Lòng nhiệt tình' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Lòng nhiệt tình giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Nhiệt tình phải đi đôi với sự hiểu biết, nhiệt tình thiếu suy xét đôi khi biến thành sự phá hoại. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 74,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Khát vọng vươn lên",
    "faultyText": "Khát vọng vươn lên là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Khát vọng vươn lên mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Khát vọng chân chính khác với lòng tham không đáy sẵn sàng giẫm đạp lên đạo lý vì tư lợi.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Khát vọng vươn lên' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Khát vọng vươn lên' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Khát vọng vươn lên giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Khát vọng chân chính khác với lòng tham không đáy sẵn sàng giẫm đạp lên đạo lý vì tư lợi. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 75,
    "level": 4,
    "subType": "bo_sung_phan_de",
    "category": "Phẫu Thuật Góc Nhìn Một Chiều (Bổ Sung Phản Đề)",
    "topic": "Tình yêu thiên nhiên",
    "faultyText": "Tình yêu thiên nhiên là điều tuyệt vời nhất trên đời. Chúng ta chỉ cần làm theo Tình yêu thiên nhiên mà không cần quan tâm đến điều gì khác vì nó luôn luôn đem lại kết quả tốt đẹp.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn đang bị 'bệnh một chiều màu hồng', chỉ toàn ca ngợi tuyệt đối hóa mà không nhìn thấy mặt trái hoặc ranh giới nguy hiểm. Đoạn văn viết một chiều cực đoan, cần bổ sung câu phản đề: Yêu thiên nhiên không dừng lại ở việc ngắm cảnh mà phải bằng hành động bảo vệ môi trường thực chất.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', bổ sung ít nhất 1 CÂU PHẢN ĐỀ sắc sảo (dùng mẫu 'Tuy nhiên, không đồng nghĩa với...') để nâng cấp đoạn văn về 'Tình yêu thiên nhiên' đạt chiều sâu điểm 8+.",
    "keywords": [
      "Tuy nhiên",
      "không đồng nghĩa",
      "ranh giới",
      "mặt trái"
    ],
    "formula": "Công thức ghép phản đề: Khẳng định mặt tích cực -> 'Tuy nhiên / Thế nhưng, đề cao [X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Phê phán hiện tượng lệch lạc.",
    "similarHint": {
      "similarTopic": "Bổ sung phản đề mẫu: Sự tự tin",
      "sampleSentence": "Sự tự tin là ngọn đèn dẫn lối giúp con người mạnh dạn bước qua thử thách để khẳng định giá trị bản thân. Tuy nhiên, tự tin hoàn toàn khác biệt với thói tự phụ kiêu căng; người quá tự tin vào bản thân mà coi thường ý kiến người khác sẽ sớm chuốc lấy thất bại ê chề.",
      "thinkingSteps": [
        "Bước 1: Tìm ranh giới: Điều tích cực này nếu đi quá đà sẽ biến thành thói xấu gì?",
        "Bước 2: Viết câu chuyển tiếp dùng liên từ: 'Tuy nhiên / Thế nhưng, [X] hoàn toàn khác với [Y]...'",
        "Bước 3: Chỉ ra tác hại của sự ngộ nhận hoặc thái quá đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy bổ sung câu phản đề để bài viết về 'Tình yêu thiên nhiên' có chiều sâu triết lý!"
    },
    "sampleAnswer": "Tình yêu thiên nhiên giữ vai trò quan trọng trong việc bồi đắp nhân cách con người. Tuy nhiên, Yêu thiên nhiên không dừng lại ở việc ngắm cảnh mà phải bằng hành động bảo vệ môi trường thực chất. Do đó, chúng ta cần có sự tỉnh táo để nhìn nhận vấn đề một cách đa chiều.",
    "analysis": "💡 Phân tích sư phạm: Bổ sung câu phản đề giúp bài văn thể hiện tư duy đa chiều (Critical Thinking). Đây chính là điểm phân hóa giữa bài văn 6 điểm và bài văn 8.5+ trong kỳ thi vào lớp 10.",
    "userRubric": [
      "Đã bổ sung câu phản đề có từ nối chuyển hướng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Tạo nên thế cân bằng và chiều sâu nhận thức cho toàn đoạn"
    ]
  },
  {
    "id": 76,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Tinh thần tự học",
    "faultyText": "Tự học rất quan trọng. Tự học giúp ta có kiến thức. Tự học làm ta thông minh hơn. Không tự học thì ta sẽ dốt nát. Học sinh cần tự học.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn mắc bệnh 'câu cụt lủn', lặp đi lặp lại từ 'tự học' ở đầu mỗi câu, thiếu hoàn toàn các liên từ quan hệ tạo mạch cảm xúc.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Tinh thần tự học' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Tinh thần tự học' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 77,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Lòng biết ơn",
    "faultyText": "Biết ơn là nhớ ơn người giúp mình. Chúng ta phải biết ơn bố mẹ. Bố mẹ nuôi ta lớn. Chúng ta phải biết ơn thầy cô. Thầy cô dạy ta chữ. Người vô ơn là người xấu.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Các câu văn rời rạc như những mảnh ghép vụn vặt của học sinh tiểu học, câu ngắn cụt và lặp từ ngữ.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Lòng biết ơn' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Lòng biết ơn' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Lòng biết ơn là suối nguồn nuôi dưỡng nhân cách cao đẹp của mỗi con người. Trước hết, đó là đạo lý thiêng liêng hướng về công lao sinh thành dưỡng dục của mẹ cha; không chỉ vậy, đó còn là sự tri ân sâu sắc trước công ơn người thầy đã thắp sáng ngọn đuốc tri thức. Một người biết ơn sẽ luôn được xã hội tin yêu, trái lại kẻ vong ân bội nghĩa sớm muộn cũng bị cộng đồng đào thải.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 78,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Tác hại của mạng xã hội",
    "faultyText": "Mạng xã hội có hại. Dùng nhiều mạng xã hội sẽ bị nghiện. Nghiện mạng xã hội làm cận thị. Mạng xã hội còn làm lười học. Nhiều người bỏ học vì mạng xã hội.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Liệt kê tác hại vụn vặt, lặp từ 'mạng xã hội' 5 lần trong 4 câu ngắn, thiếu cấu trúc lũy tiến.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Tác hại của mạng xã hội' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Tác hại của mạng xã hội' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Mạng xã hội tuy mang lại kho tàng thông tin tiện ích, nhưng việc lạm dụng quá mức đang biến nó thành một cái bẫy nguy hiểm đối với giới trẻ. Không chỉ gây suy giảm thị lực và khả năng tập trung, thế giới ảo còn gặm nhấm quỹ thời gian thực tế, đẩy nhiều bạn học sinh vào lối sống thụ động và lơ là việc học tập.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 79,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Ý chí vượt khó",
    "faultyText": "Ý chí giúp ta vượt khó. Ai có ý chí thì vượt qua khó khăn. Không có ý chí thì đầu hàng. Ý chí rất cần thiết. Khó khăn nào cũng vượt qua nhờ ý chí.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Vòng vo tam quốc, câu trước lặp lại ý câu sau mà không phát triển được luận cứ nào mới.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Ý chí vượt khó' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Ý chí vượt khó' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Ý chí kiên cường chính là điểm tựa tinh thần vững chắc giúp con người đứng vững trước giông bão cuộc đời. Khi đối mặt với nghịch cảnh, người có ý chí không bao giờ buông xuôi đầu hàng mà luôn tìm kiếm giải pháp để vượt qua; ngược lại, kẻ yếu đuối sẽ nhanh chóng gục ngã ngay trước những chướng ngại vật đầu tiên.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 80,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Sự sẻ chia",
    "faultyText": "Sẻ chia là giúp người khác. Giúp người khác là việc tốt. Giúp tiền bạc là sẻ chia. Giúp lời nói cũng là sẻ chia. Sống không sẻ chia là ích kỷ.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Câu văn định nghĩa luẩn quẩn, diễn đạt nông cạn và vụng về.",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Sự sẻ chia' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Sự sẻ chia' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Sự sẻ chia là chiếc cầu nối ấm áp gắn kết triệu con tim giữa cuộc đời đầy biến động. Dù là một sự trợ giúp vật chất kịp thời hay đơn giản là một lời động viên chân thành trong cơn hoạn nạn, hành động trao đi ấy đều có sức mạnh xoa dịu nỗi đau và nhân lên niềm hạnh phúc trong cộng đồng.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 81,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Tính trung thực",
    "faultyText": "Tính trung thực rất tốt. Ai cũng cần Tính trung thực. Không có Tính trung thực thì rất xấu. Chúng ta phải rèn luyện Tính trung thực.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Tính trung thực' liên tục, thiếu liên từ logic: Trước hết... Không những thế... Vì lẽ đó...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Tính trung thực' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Tính trung thực' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Tính trung thực là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 82,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Đức khiêm tốn",
    "faultyText": "Đức khiêm tốn rất tốt. Ai cũng cần Đức khiêm tốn. Không có Đức khiêm tốn thì rất xấu. Chúng ta phải rèn luyện Đức khiêm tốn.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Đức khiêm tốn' liên tục, thiếu liên từ logic: Thật vậy... Hơn thế nữa... Trái lại...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Đức khiêm tốn' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Đức khiêm tốn' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Đức khiêm tốn là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 83,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Lòng dũng cảm",
    "faultyText": "Lòng dũng cảm rất tốt. Ai cũng cần Lòng dũng cảm. Không có Lòng dũng cảm thì rất xấu. Chúng ta phải rèn luyện Lòng dũng cảm.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Lòng dũng cảm' liên tục, thiếu liên từ logic: Bởi vì... Không chỉ dừng lại ở... Ngược lại...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Lòng dũng cảm' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Lòng dũng cảm' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Lòng dũng cảm là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 84,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Tình bạn",
    "faultyText": "Tình bạn rất tốt. Ai cũng cần Tình bạn. Không có Tình bạn thì rất xấu. Chúng ta phải rèn luyện Tình bạn.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Tình bạn' liên tục, thiếu liên từ logic: Đó không chỉ là... mà còn là... Nhờ vậy...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Tình bạn' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Tình bạn' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Tình bạn là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 85,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Bảo vệ môi trường",
    "faultyText": "Bảo vệ môi trường rất tốt. Ai cũng cần Bảo vệ môi trường. Không có Bảo vệ môi trường thì rất xấu. Chúng ta phải rèn luyện Bảo vệ môi trường.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Bảo vệ môi trường' liên tục, thiếu liên từ logic: Thực trạng là... Hậu quả là... Do đó...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Bảo vệ môi trường' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Bảo vệ môi trường' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Bảo vệ môi trường là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 86,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Văn hóa đọc",
    "faultyText": "Văn hóa đọc rất tốt. Ai cũng cần Văn hóa đọc. Không có Văn hóa đọc thì rất xấu. Chúng ta phải rèn luyện Văn hóa đọc.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Văn hóa đọc' liên tục, thiếu liên từ logic: Mỗi trang sách... Hơn thế nữa... Chính vì vậy...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Văn hóa đọc' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Văn hóa đọc' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Văn hóa đọc là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 87,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Áp lực thi cử",
    "faultyText": "Áp lực thi cử rất tốt. Ai cũng cần Áp lực thi cử. Không có Áp lực thi cử thì rất xấu. Chúng ta phải rèn luyện Áp lực thi cử.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Áp lực thi cử' liên tục, thiếu liên từ logic: Thay vì... chúng ta hãy... Bởi lẽ...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Áp lực thi cử' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Áp lực thi cử' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Áp lực thi cử là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 88,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Lối sống vô cảm",
    "faultyText": "Lối sống vô cảm rất tốt. Ai cũng cần Lối sống vô cảm. Không có Lối sống vô cảm thì rất xấu. Chúng ta phải rèn luyện Lối sống vô cảm.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Lối sống vô cảm' liên tục, thiếu liên từ logic: Ban đầu chỉ là... Dần dà... Để rồi...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Lối sống vô cảm' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Lối sống vô cảm' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Lối sống vô cảm là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 89,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Bạo lực học đường",
    "faultyText": "Bạo lực học đường rất tốt. Ai cũng cần Bạo lực học đường. Không có Bạo lực học đường thì rất xấu. Chúng ta phải rèn luyện Bạo lực học đường.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Bạo lực học đường' liên tục, thiếu liên từ logic: Không chỉ tổn hại... mà còn... Vì thế...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Bạo lực học đường' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Bạo lực học đường' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Bạo lực học đường là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 90,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Lời xin lỗi",
    "faultyText": "Lời xin lỗi rất tốt. Ai cũng cần Lời xin lỗi. Không có Lời xin lỗi thì rất xấu. Chúng ta phải rèn luyện Lời xin lỗi.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Lời xin lỗi' liên tục, thiếu liên từ logic: Nói lời xin lỗi... Nhờ đó... Dám nhận lỗi là...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Lời xin lỗi' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Lời xin lỗi' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Lời xin lỗi là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 91,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Kỷ luật bản thân",
    "faultyText": "Kỷ luật bản thân rất tốt. Ai cũng cần Kỷ luật bản thân. Không có Kỷ luật bản thân thì rất xấu. Chúng ta phải rèn luyện Kỷ luật bản thân.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Kỷ luật bản thân' liên tục, thiếu liên từ logic: Động lực giúp... nhưng chỉ kỷ luật... Bởi vì...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Kỷ luật bản thân' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Kỷ luật bản thân' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Kỷ luật bản thân là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 92,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Bản lĩnh từ chối",
    "faultyText": "Bản lĩnh từ chối rất tốt. Ai cũng cần Bản lĩnh từ chối. Không có Bản lĩnh từ chối thì rất xấu. Chúng ta phải rèn luyện Bản lĩnh từ chối.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Bản lĩnh từ chối' liên tục, thiếu liên từ logic: Biết nói đồng ý... nhưng dám nói không... Đó là...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Bản lĩnh từ chối' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Bản lĩnh từ chối' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Bản lĩnh từ chối là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 93,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Lòng trắc ẩn",
    "faultyText": "Lòng trắc ẩn rất tốt. Ai cũng cần Lòng trắc ẩn. Không có Lòng trắc ẩn thì rất xấu. Chúng ta phải rèn luyện Lòng trắc ẩn.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Lòng trắc ẩn' liên tục, thiếu liên từ logic: Trắc ẩn không phải... mà là... Chính phẩm chất ấy...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Lòng trắc ẩn' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Lòng trắc ẩn' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Lòng trắc ẩn là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 94,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Tự lập",
    "faultyText": "Tự lập rất tốt. Ai cũng cần Tự lập. Không có Tự lập thì rất xấu. Chúng ta phải rèn luyện Tự lập.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Tự lập' liên tục, thiếu liên từ logic: Rời xa vòng tay... tự lập rèn cho... Nếu quen thói ỷ lại...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Tự lập' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Tự lập' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Tự lập là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 95,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Lạc quan",
    "faultyText": "Lạc quan rất tốt. Ai cũng cần Lạc quan. Không có Lạc quan thì rất xấu. Chúng ta phải rèn luyện Lạc quan.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Lạc quan' liên tục, thiếu liên từ logic: Nụ cười không làm... nhưng làm giàu... Thật vậy...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Lạc quan' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Lạc quan' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Lạc quan là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 96,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Khát vọng tuổi trẻ",
    "faultyText": "Khát vọng tuổi trẻ rất tốt. Ai cũng cần Khát vọng tuổi trẻ. Không có Khát vọng tuổi trẻ thì rất xấu. Chúng ta phải rèn luyện Khát vọng tuổi trẻ.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Khát vọng tuổi trẻ' liên tục, thiếu liên từ logic: Tuổi trẻ là... Nếu chỉ biết... thì đất nước...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Khát vọng tuổi trẻ' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Khát vọng tuổi trẻ' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Khát vọng tuổi trẻ là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 97,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Sống xanh",
    "faultyText": "Sống xanh rất tốt. Ai cũng cần Sống xanh. Không có Sống xanh thì rất xấu. Chúng ta phải rèn luyện Sống xanh.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Sống xanh' liên tục, thiếu liên từ logic: Bắt đầu từ... Hơn thế nữa... Khoản đầu tư cho tương lai...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Sống xanh' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Sống xanh' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Sống xanh là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 98,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Văn hóa mạng",
    "faultyText": "Văn hóa mạng rất tốt. Ai cũng cần Văn hóa mạng. Không có Văn hóa mạng thì rất xấu. Chúng ta phải rèn luyện Văn hóa mạng.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Văn hóa mạng' liên tục, thiếu liên từ logic: Bàn phím không có... nhưng bình luận... Vì vậy...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Văn hóa mạng' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Văn hóa mạng' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Văn hóa mạng là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 99,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Lắng nghe",
    "faultyText": "Lắng nghe rất tốt. Ai cũng cần Lắng nghe. Không có Lắng nghe thì rất xấu. Chúng ta phải rèn luyện Lắng nghe.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Lắng nghe' liên tục, thiếu liên từ logic: Nói là gieo hạt... lắng nghe là gặt hái... Khi biết lắng nghe...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Lắng nghe' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Lắng nghe' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Lắng nghe là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  },
  {
    "id": 100,
    "level": 4,
    "subType": "mach_lac_lien_tu",
    "category": "Phẫu Thuật Diễn Đạt Cụt Lủn & Mạch Lạc Hóa",
    "topic": "Lòng hiếu thảo",
    "faultyText": "Lòng hiếu thảo rất tốt. Ai cũng cần Lòng hiếu thảo. Không có Lòng hiếu thảo thì rất xấu. Chúng ta phải rèn luyện Lòng hiếu thảo.",
    "diagnosis": "🩺 Chẩn đoán của thầy cô: Đoạn văn bị 'bệnh câu cụt lủn', lặp từ ngữ đơn điệu, thiếu hoàn toàn các liên từ lập luận logic. Đoạn văn câu cụt lủn, lặp từ 'Lòng hiếu thảo' liên tục, thiếu liên từ logic: Công cha như... nghĩa mẹ như... Sự biết ơn ấy...",
    "prompt": "Hãy đóng vai 'Bác sĩ phẫu thuật', dùng các cặp liên từ quan hệ (Trước hết, Không chỉ vậy, Bởi lẽ, Ngược lại...) để liên kết và viết lại đoạn văn về 'Lòng hiếu thảo' thật trơn tru, mạch lạc.",
    "keywords": [
      "Trước hết",
      "Bởi lẽ",
      "Không chỉ vậy",
      "Ngược lại"
    ],
    "formula": "Khuôn mẫu mạch lạc: Mở đầu bằng hình ảnh khái quát -> 'Bởi lẽ, [X] không chỉ... mà còn...' -> 'Ngược lại, nếu... thì...'",
    "similarHint": {
      "similarTopic": "Mạch lạc hóa mẫu: Tinh thần tự học",
      "sampleSentence": "Trong hành trình chiếm lĩnh tri thức, tinh thần tự học đóng vai trò như chiếc chìa khóa vạn năng mở ra kho tàng hiểu biết vô tận. Bởi lẽ, việc chủ động tìm tòi không chỉ giúp ta khắc sâu kiến thức mà còn rèn luyện tư duy độc lập sáng tạo. Ngược lại, nếu chỉ thụ động chờ đợi sự truyền thụ một chiều, chúng ta sẽ mãi là cái bóng của người khác.",
      "thinkingSteps": [
        "Bước 1: Gộp các câu đơn ngắn ngủn thành câu ghép có mệnh đề phụ.",
        "Bước 2: Thay thế việc lặp từ khóa bằng đại từ thay thế (nó, phẩm chất ấy, đức tính này).",
        "Bước 3: Bổ sung cặp từ nối nguyên nhân - kết quả (Bởi lẽ, Do đó) và tương phản (Ngược lại, Trái lại)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy gắn kết các câu văn về 'Lòng hiếu thảo' bằng các liên từ logic mượt mà!"
    },
    "sampleAnswer": "Lòng hiếu thảo là phẩm chất quan trọng bồi đắp nhân cách con người. Bởi lẽ, nó không chỉ giúp ta vững vàng trước sóng gió mà còn lan tỏa giá trị tốt đẹp đến cộng đồng. Ngược lại, nếu thiếu đi phẩm chất ấy, cuộc sống sẽ trở nên đơn điệu và nghèo nàn.",
    "analysis": "💡 Phân tích sư phạm: Đoạn văn sau khi phẫu thuật đã có dòng chảy ngôn ngữ tự nhiên, các câu đan cài chặt chẽ như những mắt xích, giúp bài viết toát lên vẻ chững chạc, giàu chất văn.",
    "userRubric": [
      "Không còn câu cụt lủn, không lặp từ đơn điệu",
      "Sử dụng nhuần nhuyễn các liên từ lập luận (Bởi lẽ, Không chỉ... mà còn, Ngược lại...)",
      "Dòng văn trôi chảy, mạch lạc, giàu tính thuyết phục"
    ]
  }
];
