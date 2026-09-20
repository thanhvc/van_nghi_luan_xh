// Ngân hàng 100 bài tập Cấp độ 3: Viết Khối Vi Mô Module 3-4 câu (Nghị luận xã hội lớp 9)
const LEVEL3_DATA = [
  {
    "id": 1,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Lòng kiên trì",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Lòng kiên trì'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "kiên trì",
      "bản lĩnh",
      "mục tiêu",
      "chông gai"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Sự tự lập (Khối Giải thích mẫu)",
      "sampleSentence": "Sự tự lập không phải là sự cô lập ích kỷ, mà là năng lực tự làm chủ suy nghĩ và hành động mà không dựa dẫm vào người khác. Biểu hiện rõ nhất của người tự lập là tinh thần dám chịu trách nhiệm với mọi quyết định của mình và không ngừng nỗ lực vươn lên bằng chính đôi chân của mình.",
      "thinkingSteps": [
        "Bước 1 (Định nghĩa bản chất): Dùng cấu trúc tương phản 'Không đơn thuần là... mà là...' để xác định giá trị cốt lõi.",
        "Bước 2 (Biểu hiện cụ thể): Nêu thái độ của người có phẩm chất đó trước khó khăn.",
        "Bước 3 (Khẳng định ý nghĩa): Chốt lại bằng 1 câu văn khẳng định vai trò bệ đỡ của phẩm chất đó."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Lòng kiên trì'!"
    },
    "sampleAnswer": "Lòng kiên trì không đơn thuần là sự nhẫn nại thụ động, mà là bản lĩnh bền bỉ theo đuổi mục tiêu đã định bất chấp mọi chướng ngại vật trên đường đời. Người có lòng kiên trì luôn coi thất bại là bài học quý giá để tôi luyện ý chí, không bao giờ vì đôi lần vấp ngã mà sớm vội bỏ cuộc. Đó chính là ngọn lửa âm ỉ nhưng bền bỉ dẫn lối con người chạm tay tới thành công.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 2,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Đức khiêm tốn",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Đức khiêm tốn'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "khiêm tốn",
      "tự ti",
      "học hỏi",
      "hoàn thiện"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Lòng tự trọng (Khối Giải thích mẫu)",
      "sampleSentence": "Lòng tự trọng không phải là thói tự cao tự đại, mà là ý thức giữ gìn nhân cách và phẩm giá trong sạch trước mọi cám dỗ. Người có tự trọng không bao giờ cúi đầu trước điều phi nghĩa, luôn sống ngay thẳng và tôn trọng chính mình cũng như người khác.",
      "thinkingSteps": [
        "Bước 1: Phân biệt khiêm tốn với tự ti nhút nhát.",
        "Bước 2: Nêu biểu hiện biết lắng nghe và học hỏi không ngừng.",
        "Bước 3: Dùng hình ảnh ẩn dụ 'bông lúa chín cúi đầu' để tạo ấn tượng sâu sắc."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Đức khiêm tốn'!"
    },
    "sampleAnswer": "Đức khiêm tốn không phải là sự tự ti hay nhút nhát giấu mình, mà là thái độ nhìn nhận đúng mực về năng lực và thành quả của bản thân. Người khiêm tốn luôn ý thức được sự bao la của tri thức, từ đó không ngừng lắng nghe và học hỏi từ những người xung quanh. Họ giống như bông lúa chín luôn biết cúi đầu, càng hiểu biết lại càng bao dung và nhã nhặn.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 3,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Lòng dũng cảm",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Lòng dũng cảm'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "dũng cảm",
      "nỗi sợ",
      "bảo vệ",
      "lẽ phải"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Bản lĩnh (Khối Giải thích mẫu)",
      "sampleSentence": "Bản lĩnh không phải là sự hung hăng liều lĩnh, mà là sự vững vàng nội tại giúp ta không bị cuốn theo những cám dỗ và định kiến tiêu cực của xã hội. Người bản lĩnh dám sống thật với ước mơ của mình và kiên cường vượt qua sóng gió.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa dũng cảm là chiến thắng nỗi sợ chứ không phải không biết sợ.",
        "Bước 2: Nêu các biểu hiện phong phú: bảo vệ lẽ phải, dám nhận lỗi, cứu giúp người khác.",
        "Bước 3: Đúc kết giá trị bằng hình ảnh 'bức tường thành'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Lòng dũng cảm'!"
    },
    "sampleAnswer": "Lòng dũng cảm không đồng nghĩa với việc không biết sợ hãi, mà là bản lĩnh chiến thắng nỗi sợ hãi bên trong để hành động vì lẽ phải. Người dũng cảm dám lên tiếng bảo vệ công lý, dám nhận lỗi khi sai lầm và không ngần ngại dấn thân vào những hoàn cảnh hiểm nguy để cứu giúp tha nhân. Phẩm chất cao quý ấy chính là bức tường thành bảo vệ những giá trị chân chính của đời sống.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 4,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Lòng vị tha",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Lòng vị tha'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "vị tha",
      "bao dung",
      "tha thứ",
      "chữa lành"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Lòng trắc ẩn (Khối Giải thích mẫu)",
      "sampleSentence": "Lòng trắc ẩn là sự rung cảm chân thành của tâm hồn trước nỗi đau của đồng loại, thôi thúc ta đưa tay san sẻ và nâng đỡ những mảnh đời bất hạnh. Đó là suối nguồn của sự nhân ái giúp con người gần nhau hơn.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa vị tha là sự mở lòng bao dung cho lỗi lầm.",
        "Bước 2: Nêu thái độ không thù hận, biết thấu cảm và tạo cơ hội sửa sai.",
        "Bước 3: Dùng hình ảnh ẩn dụ 'cơn mưa rào tưới mát' để tạo chất văn mượt mà."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Lòng vị tha'!"
    },
    "sampleAnswer": "Lòng vị tha là sự rộng lượng của trái tim, biết bỏ qua lỗi lầm của người khác để mở ra cơ hội cho họ chuộc lỗi và hoàn thiện bản thân. Người có lòng vị tha không nuôi dưỡng oán hận trong lòng, luôn đối đãi với thế giới bằng sự thấu hiểu và sẻ chia chân thành. Đức tính này tựa như cơn mưa rào tưới mát mảnh đất tâm hồn, chữa lành những vết thương rạn nứt trong các mối quan hệ.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 5,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Tính trung thực",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Tính trung thực'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "trung thực",
      "ngay thẳng",
      "dối trá",
      "niềm tin"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Chữ tín (Khối Giải thích mẫu)",
      "sampleSentence": "Chữ tín là danh dự và cam kết danh giá của một con người đối với lời hứa của mình. Người biết giữ chữ tín luôn được xã hội trọng vọng và tin cậy, bởi lời nói của họ luôn đi đôi với hành động.",
      "thinkingSteps": [
        "Bước 1: Xác định trung thực là thống nhất giữa suy nghĩ, lời nói và hành vi.",
        "Bước 2: Nêu biểu hiện không gian dối, dám thừa nhận sai lầm.",
        "Bước 3: Chốt lại bằng hình ảnh 'viên gạch nền móng xây dựng niềm tin'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Tính trung thực'!"
    },
    "sampleAnswer": "Tính trung thực là sự ngay thẳng, chuẩn mực trong suy nghĩ, lời nói và hành động, luôn tôn trọng sự thật khách quan mà không tư lợi cá nhân. Người trung thực kiên quyết nói không với sự dối trá, dám nhận khuyết điểm và sống đúng với lương tâm của mình dù trong bất cứ hoàn cảnh nào. Phẩm chất ấy chính là viên gạch nền móng vững chắc nhất để xây dựng nên niềm tin bền vững giữa người với người.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 6,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Tinh thần tự học",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Tinh thần tự học'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "tự học",
      "chủ động",
      "chiếm lĩnh",
      "tri thức"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Ý thức tự giác (Khối Giải thích mẫu)",
      "sampleSentence": "Ý thức tự giác là thái độ chủ động thực hiện bổn phận của mình mà không cần ai nhắc nhở hay ép buộc. Tự giác trong học tập và rèn luyện giúp con người làm chủ thời gian và số phận.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa tự học là sự chủ động nội tại, không đối phó.",
        "Bước 2: Nêu cách thức tự học (đọc sách, quan sát, tự nghiên cứu).",
        "Bước 3: Khẳng định tự học là năng lực sống còn trong kỷ nguyên số."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Tinh thần tự học'!"
    },
    "sampleAnswer": "Tinh thần tự học là ý thức tự giác, say mê tìm tòi và chiếm lĩnh tri thức mà không cần sự thúc ép hay giám sát từ bên ngoài. Người có tinh thần tự học biết biến việc học thành niềm vui, biết đọc sách, tự nghiên cứu và tích lũy vốn sống từ mọi trải nghiệm thường nhật. Trong thời đại số biến đổi không ngừng, tự học chính là năng lực cốt lõi quyết định tầm vóc và sự thành bại của mỗi cá nhân.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 7,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Lòng biết ơn",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Lòng biết ơn'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "biết ơn",
      "cội nguồn",
      "tri ân",
      "nghĩa tình"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Lòng hiếu thảo (Khối Giải thích mẫu)",
      "sampleSentence": "Lòng hiếu thảo là tình cảm kính yêu, phụng dưỡng và tri ân sâu nặng của con cái đối với công lao sinh thành của cha mẹ. Người con hiếu thảo luôn biết vâng lời, chăm sóc cha mẹ khi tuổi già và sống sao cho xứng đáng với sự hy sinh của đấng sinh thành.",
      "thinkingSteps": [
        "Bước 1: Nêu rõ đối tượng hướng tới của lòng biết ơn (cha mẹ, thầy cô, xã hội).",
        "Bước 2: Nhấn mạnh hành động đền đáp thiết thực thay vì lời nói đãi bôi.",
        "Bước 3: Nâng tầm lên truyền thống đạo lý dân tộc 'uống nước nhớ nguồn'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Lòng biết ơn'!"
    },
    "sampleAnswer": "Lòng biết ơn là sự ghi nhớ sâu sắc công ơn dưỡng dục của cha mẹ, sự dạy dỗ của thầy cô và sự giúp đỡ của những người xung quanh. Không chỉ dừng lại ở lời cảm ơn đãi bôi đầu môi, lòng biết ơn được cụ thể hóa bằng sự trân trọng, hiếu thảo và khát khao đền đáp bằng những việc làm thiết thực. Đó là nét đẹp đạo lý 'uống nước nhớ nguồn' thiêng liêng chảy suốt ngàn năm lịch sử của dân tộc Việt Nam.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 8,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Sự sẻ chia",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Sự sẻ chia'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "sẻ chia",
      "yêu thương",
      "xoa dịu",
      "gắn kết"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Lòng nhân ái (Khối Giải thích mẫu)",
      "sampleSentence": "Lòng nhân ái là tình yêu thương con người sâu sắc, không vụ lợi và không phân biệt biên giới hay màu da. Đó là phẩm chất cao quý nhất làm nên tính người trong mỗi cá thể.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa sẻ chia gồm cả giá trị vật chất lẫn tinh thần.",
        "Bước 2: Nêu biểu hiện đồng cảm sâu sắc với tha nhân.",
        "Bước 3: Khẳng định sẻ chia là chất keo hàn gắn rạn nứt xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Sự sẻ chia'!"
    },
    "sampleAnswer": "Sự sẻ chia là hành động trao đi tình cảm, sự đồng cảm và những nguồn lực vật chất để giúp đỡ những mảnh đời còn nhiều cơ cực. Khi biết sẻ chia, con người mở rộng trái tim để hòa cùng nhịp đập với tha nhân, cùng buồn với nỗi đau của đồng loại và cùng vui với niềm hạnh phúc của tập thể. Chính sự sẻ chia chân thành là chất keo vô hình hàn gắn mọi vết nứt và xua tan đi cái lạnh lùng của cuộc đời.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 9,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Trách nhiệm cá nhân",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Trách nhiệm cá nhân'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "trách nhiệm",
      "bổn phận",
      "hành động",
      "tự giác"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Kỷ luật bản thân (Khối Giải thích mẫu)",
      "sampleSentence": "Kỷ luật bản thân là khả năng tự kiểm soát ham muốn nhất thời để tuân thủ các nguyên tắc đúng đắn nhằm đạt được mục tiêu lâu dài. Người có kỷ luật không bao giờ để sự lười biếng làm chủ cuộc đời mình.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa trách nhiệm là ý thức bổn phận, không thoái thác.",
        "Bước 2: Nêu biểu hiện dám làm dám chịu, khắc phục sai sót.",
        "Bước 3: Đánh giá tầm ảnh hưởng từ cá nhân tới sự thịnh vượng xã hội."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Trách nhiệm cá nhân'!"
    },
    "sampleAnswer": "Trách nhiệm cá nhân là ý thức tự giác thực hiện tròn bổn phận đối với bản thân, gia đình và cộng đồng, không đùn đẩy hay thoái thác trước khó khăn. Người có tinh thần trách nhiệm luôn lường trước hậu quả từ lời nói và việc làm của mình, sẵn sàng đứng ra gánh vác và khắc phục nếu có sai sót. Một xã hội chỉ thực sự phồn vinh khi mỗi thành viên trong đó đều ý thức sâu sắc về trách nhiệm của mình.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 10,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Lối sống lạc quan",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Lối sống lạc quan'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "lạc quan",
      "tích cực",
      "hy vọng",
      "bình thản"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Niềm tin (Khối Giải thích mẫu)",
      "sampleSentence": "Niềm tin là điểm tựa tinh thần vững chắc, thắp sáng hy vọng và tiếp sức cho con người vượt qua bóng tối của sự nghi ngờ và sợ hãi. Mất niềm tin là mất đi phương hướng của cuộc đời.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa lạc quan là nhìn vào mặt tích cực, giữ vững niềm tin.",
        "Bước 2: Nêu biểu hiện không than vãn, nụ cười bình thản tìm giải pháp.",
        "Bước 3: Ví lạc quan như 'liều thuốc bổ diệu kỳ'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Lối sống lạc quan'!"
    },
    "sampleAnswer": "Lạc quan là thái độ sống tích cực, luôn nhìn vào mặt tươi sáng của vấn đề và giữ vững niềm tin vào tương lai tươi đẹp ngay cả trong nghịch cảnh. Người lạc quan không chìm đắm trong than vãn, mà luôn tìm kiếm cơ hội và giải pháp để vượt qua chông gai với nụ cười trên môi. Tinh thần ấy hoạt động như một liều thuốc bổ diệu kỳ, tiếp thêm năng lượng để con người kiên cường vững bước.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 11,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Lối sống vô cảm",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Lối sống vô cảm'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "vô cảm",
      "dửng dưng",
      "xói mòn",
      "tâm hồn"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Căn bệnh thành tích (Khối Giải thích mẫu)",
      "sampleSentence": "Bệnh thành tích là thói chuộng hư danh, chạy theo những con số ảo và bề nổi giả dối mà bỏ quên giá trị thực chất. Nó làm méo mó mục tiêu giáo dục và gieo rắc sự thiếu trung thực.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa vô cảm là sự dửng dưng trước nỗi đau đồng loại.",
        "Bước 2: Nêu lối sống ích kỷ, thu mình trong vỏ ốc cá nhân.",
        "Bước 3: Đánh giá đây là 'căn bệnh tâm hồn làm xói mòn tính nhân văn'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Lối sống vô cảm'!"
    },
    "sampleAnswer": "Lối sống vô cảm là trạng thái thờ ơ, lạnh lùng, dửng dưng trước nỗi đau thương, mất mát và những bất công xảy ra xung quanh mình. Người vô cảm chỉ biết thu mình trong vỏ ốc vị kỷ, coi những biến cố của xã hội là chuyện 'cháy nhà hàng xóm bình chân như vại'. Đây là một căn bệnh tâm hồn cực kỳ nguy hiểm, làm xói mòn truyền thống nhân ái và biến con người thành những cỗ máy vô tri.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 12,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Nghiện mạng xã hội",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Nghiện mạng xã hội'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "mạng xã hội",
      "thế giới ảo",
      "phụ thuộc",
      "lãng phí"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Hiện tượng sống ảo (Khối Giải thích mẫu)",
      "sampleSentence": "Sống ảo là xu hướng phô diễn một cuộc sống hào nhoáng, giả tạo trên mạng xã hội để tìm kiếm sự ngưỡng mộ của đám đông, bỏ quên thực tại chân thật của bản thân.",
      "thinkingSteps": [
        "Bước 1: Nêu rõ bản chất là sự lệ thuộc tiêu cực vào không gian ảo.",
        "Bước 2: Miêu tả biểu hiện săn like, lướt màn hình vô thức.",
        "Bước 3: Cảnh báo hậu quả đánh cắp thời gian và hủy hoại kết nối thực."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Nghiện mạng xã hội'!"
    },
    "sampleAnswer": "Nghiện mạng xã hội là tình trạng con người bị lệ thuộc quá mức vào các nền tảng trực tuyến, dành hàng giờ mỗi ngày để lướt màn hình một cách vô thức. Hiện tượng này biểu hiện qua việc sống bằng những nút like ảo, liên tục kiểm tra thông báo và dần xa rời các tương tác thực tế ngoài đời sống. Nó không chỉ đánh cắp thời gian quý báu mà còn gây suy giảm sức khỏe thể chất và tinh thần của người trẻ.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 13,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Áp lực đồng trang lứa",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Áp lực đồng trang lứa'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "áp lực",
      "so sánh",
      "tự ti",
      "bản sắc"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Bệnh so sánh (Khối Giải thích mẫu)",
      "sampleSentence": "Thói quen luôn so sánh mình với người khác là con dao hai lưỡi gặm nhấm sự bình yên, biến sự ngưỡng mộ thành lòng đố kỵ và tự ti mù quáng.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa là cảm giác bất an sinh ra từ thói quen so sánh.",
        "Bước 2: Chỉ ra tâm lý hoang mang, chạy đua theo tiêu chuẩn người khác.",
        "Bước 3: Cảnh báo nguy cơ đánh mất cá tính độc bản."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Áp lực đồng trang lứa'!"
    },
    "sampleAnswer": "Áp lực đồng trang lứa là trạng thái tâm lý bất an, lo lắng khi cá nhân luôn tự so sánh thành tích và lối sống của mình với những người cùng trang lứa. Nó khiến người trẻ rơi vào vòng xoáy của sự tự ti, hoang mang về giá trị bản thân và gượng ép mình phải chạy đua theo tiêu chuẩn của người khác. Nếu không nhận thức đúng đắn, áp lực này sẽ bóp nghẹt sự sáng tạo và đánh mất đi cá tính độc bản của mỗi người.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 14,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Bạo lực học đường",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Bạo lực học đường'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "bạo lực",
      "tổn thương",
      "thể xác",
      "tinh thần"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Bạo lực ngôn từ trên mạng (Khối Giải thích mẫu)",
      "sampleSentence": "Bạo lực ngôn từ là việc dùng những lời lẽ thóa mạ, miệt thị ẩn danh trên mạng để hạ nhục người khác, gây ra những sang chấn tâm lý trầm trọng không kém đòn roi.",
      "thinkingSteps": [
        "Bước 1: Mở rộng định nghĩa gồm cả bạo lực thể xác lẫn bạo lực tinh thần.",
        "Bước 2: Nêu thực trạng biến trường học thành nỗi sợ hãi.",
        "Bước 3: Khẳng định hậu quả tổn thương tâm lý dai dẳng."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Bạo lực học đường'!"
    },
    "sampleAnswer": "Bạo lực học đường không chỉ là những hành vi đánh đập về mặt thể xác, mà còn bao gồm cả sự cô lập, miệt thị và tấn công tâm lý bạn học. Những hành vi lệch chuẩn này biến môi trường giáo dục thiêng liêng thành nỗi ám ảnh kinh hoàng đối với các nạn nhân non nớt. Hậu quả của nó không chỉ là những vết bầm tím trên da thịt mà là những tổn thương tinh thần dai dẳng khó có thể lành lặn.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 15,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Thói quen đọc sách",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Thói quen đọc sách'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "đọc sách",
      "tri thức",
      "tâm hồn",
      "nuôi dưỡng"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Văn hóa học hỏi (Khối Giải thích mẫu)",
      "sampleSentence": "Văn hóa học hỏi là tinh thần say mê tìm hiểu cái mới suốt đời, coi tri thức là tài sản vô giá và không ngừng hoàn thiện bản thân mỗi ngày.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa đọc sách là tiếp thu và thẩm thấu tinh hoa văn hóa.",
        "Bước 2: Khẳng định đọc sách là hành trình tự giáo dục tâm hồn.",
        "Bước 3: Dùng hình ảnh 'tấm hộ chiếu quyền năng bước vào thế giới trí tuệ'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Thói quen đọc sách'!"
    },
    "sampleAnswer": "Thói quen đọc sách là quá trình chủ động tiếp cận, nghiền ngẫm và thẩm thấu những tinh hoa tri thức được đúc kết qua hàng ngàn trang sách. Việc đọc sách không đơn thuần là một thú vui tao nhã mà là hành trình tự giáo dục, giúp mở rộng tầm nhìn và thanh lọc tâm hồn con người. Một người có thói quen đọc sách là người đang sở hữu tấm hộ chiếu quyền năng để bước vào thế giới trí tuệ của nhân loại.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 16,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Văn hóa ứng xử trên mạng",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Văn hóa ứng xử trên mạng'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "ứng xử",
      "văn minh",
      "tôn trọng",
      "chuẩn mực"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Văn hóa giao tiếp nơi công cộng (Khối Giải thích mẫu)",
      "sampleSentence": "Văn hóa nơi công cộng là sự tôn trọng trật tự chung, biết nhường nhịn, giữ vệ sinh và lịch sự với những người xung quanh trong không gian sinh hoạt chung.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa là chuẩn mực đạo đức và văn minh trong không gian số.",
        "Bước 2: Nêu các biểu hiện tôn trọng, bình luận có trách nhiệm, chống tin giả.",
        "Bước 3: Nhấn mạnh bàn phím không phải là cái cớ cho sự vô trách nhiệm."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Văn hóa ứng xử trên mạng'!"
    },
    "sampleAnswer": "Văn hóa ứng xử trên mạng là việc tuân thủ các chuẩn mực đạo đức, pháp luật và phép lịch sự khi tham gia giao tiếp trên không gian số. Nó biểu hiện qua việc tôn trọng sự khác biệt, bình luận có trách nhiệm, không lan truyền tin giả và kiên quyết nói không với bạo lực ngôn từ. Một cư dân mạng văn minh hiểu rằng bàn phím không phải là tấm màn che giấu cho những hành vi thô lỗ hay vô trách nhiệm.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 17,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Rác thải nhựa và môi trường",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Rác thải nhựa và môi trường'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "rác thải nhựa",
      "ô nhiễm",
      "hủy hoại",
      "tương lai"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Biến đổi khí hậu (Khối Giải thích mẫu)",
      "sampleSentence": "Biến đổi khí hậu là sự nóng lên toàn cầu do khí thải nhà kính, kéo theo thiên tai khắc nghiệt đe dọa trực tiếp sự tồn vong của muôn loài trên hành tinh.",
      "thinkingSteps": [
        "Bước 1: Nêu rõ nguồn gốc do lạm dụng đồ nhựa dùng một lần.",
        "Bước 2: Liệt kê tác hại hủy hoại đất đai, đại dương và chuỗi thức ăn.",
        "Bước 3: Khẳng định đây là hồi chuông cảnh tỉnh thay đổi lối sống."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Rác thải nhựa và môi trường'!"
    },
    "sampleAnswer": "Ô nhiễm rác thải nhựa là cuộc khủng hoảng sinh thái toàn cầu bắt nguồn từ việc lạm dụng các sản phẩm nhựa dùng một lần thiếu kiểm soát của con người. Những chiếc túi nilon và đồ nhựa khó phân hủy đang đầu độc đất đai, làm nghẹt thở các đại dương và quay trở lại chuỗi thức ăn của chính chúng ta. Đây là hồi chuông cảnh tỉnh khẩn thiết đòi hỏi nhân loại phải thay đổi lối sống để bảo vệ mái nhà chung Trái Đất.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 18,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Bản lĩnh từ chối cám dỗ",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Bản lĩnh từ chối cám dỗ'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "từ chối",
      "bản lĩnh",
      "cám dỗ",
      "làm chủ"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Sự tự chủ (Khối Giải thích mẫu)",
      "sampleSentence": "Sự tự chủ là khả năng làm chủ cảm xúc, hành vi và các quyết định của bản thân trong mọi hoàn cảnh, không để ngoại cảnh tiêu cực chi phối hay xô đẩy.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa là sự kiên định nói 'Không' trước cạm bẫy tiêu cực.",
        "Bước 2: Nêu biểu hiện có lằn ranh đạo đức, không thỏa hiệp sai trái.",
        "Bước 3: Khẳng định dám từ chối là thước đo bản lĩnh làm chủ cuộc đời."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Bản lĩnh từ chối cám dỗ'!"
    },
    "sampleAnswer": "Bản lĩnh từ chối cám dỗ là năng lực kiên định nói 'Không' trước những cạm bẫy, thói hư tật xấu và những lời rủ rê tiêu cực của môi trường xung quanh. Người có bản lĩnh này luôn có ranh giới đạo đức rõ ràng, biết bảo vệ mục tiêu tương lai và không bao giờ thỏa hiệp với những điều trái với lương tâm. Dám từ chối những cám dỗ nhất thời chính là bằng chứng đanh thép cho thấy bạn thực sự làm chủ vận mệnh của mình.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 19,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Lòng trắc ẩn",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Lòng trắc ẩn'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "trắc ẩn",
      "thấu cảm",
      "rung động",
      "nâng đỡ"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Tình mẫu tử (Khối Giải thích mẫu)",
      "sampleSentence": "Tình mẫu tử là tình cảm thiêng liêng, vô điều kiện và bất diệt nhất của người mẹ dành cho con, là bến đỗ bình yên nâng chở đời con qua muôn dặm sóng gió.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa là sự rung cảm sâu xa trước nỗi đau tha nhân.",
        "Bước 2: Phân biệt giữa hành động nâng đỡ chân thành với sự thương hại bên ngoài.",
        "Bước 3: Dùng hình ảnh 'chiếc cầu nối kỳ diệu xóa nhòa khoảng cách'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Lòng trắc ẩn'!"
    },
    "sampleAnswer": "Lòng trắc ẩn là sự rung cảm sâu xa của trái tim trước nỗi đau, nỗi bất hạnh và những tổn thương của những người xung quanh. Người mang lòng trắc ẩn không đứng ngoài cuộc với ánh nhìn thương hại, mà chủ động đưa đôi tay ấm áp để nâng đỡ và xoa dịu những mảnh đời khốn khó. Chính phẩm chất tuyệt vời này là chiếc cầu nối kỳ diệu xóa nhòa khoảng cách giữa những con người xa lạ trong xã hội.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 20,
    "level": 3,
    "subType": "khoi_giai_thich",
    "category": "Khối Giải Thích & Bản Chất Khái Niệm",
    "topic": "Khát vọng cống hiến của tuổi trẻ",
    "prompt": "Hãy viết một khối Giải Thích từ 2 đến 3 câu (~50 - 70 từ) làm sáng rõ bản chất, phân biệt với thói xấu tương tự và nêu biểu hiện thực tế của: 'Khát vọng cống hiến của tuổi trẻ'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "khát vọng",
      "cống hiến",
      "thanh xuân",
      "đất nước"
    ],
    "formula": "Khuôn mẫu 3 câu: Câu 1: Định nghĩa bản chất (Không phải là A mà là B) -> Câu 2: Biểu hiện hành động cụ thể -> Câu 3: Ý nghĩa/Hình ảnh ẩn dụ đúc kết.",
    "similarHint": {
      "similarTopic": "Lý tưởng sống (Khối Giải thích mẫu)",
      "sampleSentence": "Lý tưởng sống là mục đích cao đẹp soi sáng con đường ta đi, giúp tuổi trẻ không lạc hướng và sống một cuộc đời trọn vẹn, có ý nghĩa cho đời.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa là ngọn lửa nhiệt huyết phụng sự cộng đồng và đất nước.",
        "Bước 2: Nhấn mạnh hành động dấn thân, nhận việc khó thay vì hô hào sáo rỗng.",
        "Bước 3: Khẳng định tuổi trẻ giàu khát vọng là sinh khí của dân tộc."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy áp dụng quy trình 3 bước trên để viết khối giải thích cho 'Khát vọng cống hiến của tuổi trẻ'!"
    },
    "sampleAnswer": "Khát vọng cống hiến của tuổi trẻ là ngọn lửa nhiệt huyết thôi thúc thế hệ trẻ đem trí tuệ, sức lực và trái tim mình phụng sự cho sự phát triển của quê hương, đất nước. Khát vọng ấy không phải là những khẩu hiệu đao to búa lớn, mà hiện hình qua tinh thần dấn thân, sáng tạo và sẵn sàng nhận việc khó trong đời sống hàng ngày. Một thế hệ trẻ giàu khát vọng chính là sinh khí bảo đảm cho tương lai rực rỡ của toàn dân tộc.",
    "analysis": "💡 Lời thầy cô: Đoạn giải thích này đạt điểm tuyệt đối vì đã phá tan cách hiểu hời hợt, dùng từ ngữ khúc chiết và kết thúc bằng một hình ảnh ẩn dụ giàu sức gợi cảm.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, diễn đạt gãy gọn",
      "Định nghĩa được bản chất cốt lõi (dùng cấu trúc tương phản)",
      "Có biểu hiện hành động cụ thể và câu đúc kết giá trị"
    ]
  },
  {
    "id": 21,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao con người cần có lòng dũng cảm?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao con người cần có lòng dũng cảm?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "dũng cảm",
      "thử thách",
      "vùng an toàn",
      "thành công"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Vì sao con người cần sự kiên trì? (Khối Lý lẽ mẫu)",
      "sampleSentence": "Trước hết, không có con đường dẫn tới vinh quang nào trải đầy hoa hồng; kiên trì chính là đôi chân bền bỉ giúp ta vượt qua những chông gai ban đầu. Hơn thế nữa, sự bền bỉ giúp con người tích lũy tri thức và làm dày dặn vốn sống sau mỗi lần vấp ngã. Ngược lại, nếu cứ cả thèm chóng chán, ta sẽ mãi dậm chân tại chỗ và gặt hái toàn những cay đắng dở dang.",
      "thinkingSteps": [
        "Bước 1 (Lý lẽ 1 - Đối với cá nhân): Dùng liên từ 'Trước hết...' chỉ ra tác dụng giúp vượt qua thử thách và thoát khỏi vùng an toàn.",
        "Bước 2 (Lý lẽ 2 - Đối với xã hội): Dùng 'Không chỉ vậy...' mở rộng tầm vóc sang việc bảo vệ lẽ phải và kiến tạo cộng đồng.",
        "Bước 3 (Phản đề tương phản): Dùng 'Ngược lại...' cảnh báo hậu quả nếu sống hèn nhát."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao con người cần có lòng dũng cảm?'!"
    },
    "sampleAnswer": "Trước hết, cuộc sống vốn dĩ là một hành trình đầy rẫy những biến động bất ngờ, nếu thiếu đi lòng dũng cảm, con người sẽ mãi co ro trong vùng an toàn chật hẹp và để vuột mất cơ hội trưởng thành. Không chỉ vậy, lòng dũng cảm chính là vũ khí tinh thần sắc bén giúp ta dám bảo vệ lẽ phải, chống lại những bất công để kiến tạo một cộng đồng văn minh. Ngược lại, nếu chọn lối sống hèn nhát, ta sẽ tự biến mình thành kẻ bại trận ngay trước khi bước vào cuộc chiến.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 22,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao giới trẻ cần rèn luyện tính tự lập?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao giới trẻ cần rèn luyện tính tự lập?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "tự lập",
      "vòng tay",
      "trưởng thành",
      "đôi chân"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Vì sao học sinh cần có tinh thần tự học? (Khối Lý lẽ mẫu)",
      "sampleSentence": "Trước hết, kiến thức trên lớp chỉ là giọt nước giữa đại dương tri thức mênh mông, chỉ có tự học mới giúp ta chiếm lĩnh được kho tàng vô tận ấy. Không những thế, tự học rèn luyện tư duy độc lập và khả năng sáng tạo không giới hạn. Nếu chỉ thụ động nghe giảng, chúng ta sẽ mãi là người đi sau thời đại.",
      "thinkingSteps": [
        "Bước 1: Nhấn mạnh tính tất yếu khách quan (cha mẹ không thể ở bên mãi).",
        "Bước 2: Phân tích kỹ năng đạt được (tự chủ, ứng biến, thích ứng).",
        "Bước 3: Chỉ ra hậu quả trở thành gánh nặng nếu quen thói ỷ lại."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao giới trẻ cần rèn luyện tính tự lập?'!"
    },
    "sampleAnswer": "Trước hết, vòng tay che chở của cha mẹ không thể bao bọc chúng ta suốt cuộc đời, do đó tự lập là điều kiện tiên quyết để mỗi người trẻ bước vào thế giới rộng lớn. Hơn thế nữa, sống tự lập rèn cho ta tư duy tự chủ, khả năng giải quyết khủng hoảng và thích ứng linh hoạt trước mọi đổi thay. Nếu mãi ỷ lại và dựa dẫm, chúng ta sẽ sớm trở thành gánh nặng cho gia đình và dễ dàng gục ngã trước những cơn sóng gió đầu đời.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 23,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Ý nghĩa của những vấp ngã và thất bại",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Ý nghĩa của những vấp ngã và thất bại'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "thất bại",
      "bài học",
      "tôi luyện",
      "trưởng thành"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Ý nghĩa của áp lực trong học tập (Khối Lý lẽ mẫu)",
      "sampleSentence": "Áp lực không sinh ra để đè bẹp ước mơ, mà hoạt động như một lò luyện kim giúp ta mài sắc bản lĩnh. Chính áp lực thi cử thúc ép chúng ta phải phá vỡ giới hạn lười biếng để bứt phá năng lực. Giống như hòn than phải qua áp suất nghìn độ mới hóa thành kim cương, con người phải qua thử thách mới chạm tới thành công.",
      "thinkingSteps": [
        "Bước 1: Tái định nghĩa thất bại là 'người thầy công tâm dạy bài học vô giá'.",
        "Bước 2: Phân tích cơ chế tôi luyện bản lĩnh và nhận diện khuyết điểm.",
        "Bước 3: So sánh tương phản: nếu cuộc đời quá bằng phẳng sẽ không có vinh quang đích thực."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Ý nghĩa của những vấp ngã và thất bại'!"
    },
    "sampleAnswer": "Thất bại không phải là dấu chấm hết, mà chính là người thầy nghiêm khắc nhưng công tâm nhất dạy cho ta những bài học mà sách vở chưa từng đề cập. Bởi lẽ, sau mỗi lần vấp ngã, con người có cơ hội nhìn nhận lại lỗ hổng của bản thân, tôi luyện bản lĩnh sắt đá để trở nên thận trọng và chín chắn hơn. Nếu chặng đường đời chỉ toàn bằng phẳng, chúng ta sẽ không bao giờ cảm nhận trọn vẹn hương vị ngọt ngào của chiến thắng đích thực.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 24,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao cần phải học cách lắng nghe?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao cần phải học cách lắng nghe?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "lắng nghe",
      "thấu cảm",
      "học hỏi",
      "kết nối"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Vì sao cần sự khoan dung? (Khối Lý lẽ mẫu)",
      "sampleSentence": "Khoan dung là chìa khóa mở rộng lòng mình, giải phóng tâm hồn khỏi gánh nặng của hận thù. Người biết khoan dung luôn tạo dựng được môi trường sống an yên, biến thù thành bạn và lan tỏa sự ấm áp trong cộng đồng.",
      "thinkingSteps": [
        "Bước 1: Khởi đầu bằng hình ảnh ngụ ngôn sâu sắc (2 tai 1 miệng).",
        "Bước 2: Nêu lợi ích tiếp thu góc nhìn đa chiều, tránh phán xét hẹp hòi.",
        "Bước 3: Nêu giá trị xoa dịu nỗi cô đơn và kết nối tâm hồn."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao cần phải học cách lắng nghe?'!"
    },
    "sampleAnswer": "Trước hết, tạo hóa ban cho con người hai cái tai nhưng chỉ có một cái miệng là để ta biết lắng nghe nhiều hơn nói. Khi biết lắng nghe, ta mở rộng tâm trí để tiếp nhận góc nhìn đa chiều từ người khác, tránh được những phán xét hồ đồ và ngộ nhận sai lầm. Hơn thế nữa, một đôi tai biết lắng nghe chân thành chính là liều thuốc xoa dịu nỗi cô đơn, giúp kết nối sâu sắc giữa người với người.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 25,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Tác hại của thói quen trì hoãn",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Tác hại của thói quen trì hoãn'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "trì hoãn",
      "lười biếng",
      "áp lực",
      "đánh mất"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Tác hại của việc sống không mục tiêu (Khối Lý lẽ mẫu)",
      "sampleSentence": "Sống không có mục tiêu giống như con thuyền giương buồm ra khơi mà không có bánh lái, chỉ biết trôi dạt vô định theo từng con sóng. Nó khiến người trẻ lãng phí những năm tháng thanh xuân tươi đẹp vào những điều vô bổ và dễ dàng gục ngã trước khó khăn.",
      "thinkingSteps": [
        "Bước 1: Dùng hình ảnh so sánh độc đáo ('chiếc thẻ tín dụng đen').",
        "Bước 2: Phân tích cơ chế tích tụ áp lực và làm suy giảm chất lượng công việc.",
        "Bước 3: Cảnh báo mức độ nguy hiểm: gặm nhấm sự tự tin và tiềm năng tương lai."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Tác hại của thói quen trì hoãn'!"
    },
    "sampleAnswer": "Thói quen trì hoãn tựa như chiếc thẻ tín dụng đen: nó mang lại sự thoải mái nhất thời nhưng sẽ bắt ta trả giá bằng khoản nợ lãi suất khổng lồ về thời gian và sự hối tiếc. Bởi vì, việc 'để mai tính' không làm biến mất công việc mà chỉ dồn nén áp lực vào những giờ chót, dẫn đến sản phẩm kém chất lượng và trạng thái căng thẳng tột cùng. Đáng sợ hơn cả, trì hoãn dần gặm nhấm sự tự tin và biến một người giàu tiềm năng trở thành kẻ thất bại trong tiếc nuối.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 26,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Ý nghĩa của tinh thần đoàn kết",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Ý nghĩa của tinh thần đoàn kết'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "đoàn kết",
      "sức mạnh",
      "cộng hưởng",
      "vượt qua"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Ý nghĩa của sự hợp tác (Khối Lý lẽ mẫu)",
      "sampleSentence": "Hợp tác giúp các thành viên bù đắp khuyết điểm và nhân đôi thế mạnh của nhau. Trong thời đại toàn cầu hóa, một cá nhân dù tài năng đến đâu cũng không thể đơn độc làm nên chuyện lớn nếu thiếu đi tinh thần làm việc nhóm.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng hình ảnh ẩn dụ 'ngọn đuốc nhỏ và triệu ngọn đuốc'.",
        "Bước 2: Khẳng định sức mạnh cộng hưởng san bằng mọi chướng ngại.",
        "Bước 3: Kết nối với truyền thống dân tộc từ quá khứ đến hiện tại."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Ý nghĩa của tinh thần đoàn kết'!"
    },
    "sampleAnswer": "Một ngọn đuốc nhỏ chỉ le lói trong đêm tối, nhưng triệu ngọn đuốc chụm lại sẽ thắp sáng cả một góc trời. Đoàn kết tạo nên sức mạnh cộng hưởng vĩ đại, giúp con người vượt qua những thử thách to lớn vượt quá khả năng của bất kỳ cá nhân đơn độc nào. Từ trang sử chống ngoại xâm hào hùng đến những ngày cả nước chung tay chống bão lũ hôm nay, tinh thần đoàn kết luôn là điểm tựa vững chãi nhất của dân tộc Việt Nam.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 27,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao cần sống có ước mơ?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao cần sống có ước mơ?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "ước mơ",
      "phương hướng",
      "động lực",
      "ý nghĩa"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Vì sao cần nuôi dưỡng đam mê? (Khối Lý lẽ mẫu)",
      "sampleSentence": "Đam mê là nguồn nhiên liệu bất tận thắp sáng sự sáng tạo của con người. Khi làm việc bằng tất cả đam mê, ta sẽ không cảm thấy mệt mỏi mà luôn tìm thấy niềm vui trong từng giọt mồ hôi cống hiến.",
      "thinkingSteps": [
        "Bước 1: Dùng hình ảnh con tàu không có la bàn định hướng.",
        "Bước 2: Nêu vai trò truyền năng lượng và động lực thức dậy mỗi ngày.",
        "Bước 3: Tương phản giữa người có ước mơ và kẻ sống mòn mỏi."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao cần sống có ước mơ?'!"
    },
    "sampleAnswer": "Cuộc đời thiếu ước mơ giống như con tàu lênh đênh giữa biển khơi mù mịt mà không có la bàn định hướng. Ước mơ thắp sáng lý tưởng sống, tiếp thêm cho ta nguồn năng lượng mạnh mẽ để thức dậy mỗi sớm mai và bền bỉ nỗ lực vượt qua nghịch cảnh. Người dám ước mơ và dũng cảm theo đuổi ước mơ sẽ không bao giờ phải sống một cuộc đời tẻ nhạt, mòn mỏi trong sự tiếc nuối hoài phí.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 28,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Tác hại của bạo lực ngôn từ trên mạng",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Tác hại của bạo lực ngôn từ trên mạng'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "bạo lực ngôn từ",
      "bàn phím",
      "sát thương",
      "trầm cảm"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Hậu quả của tin giả (Khối Lý lẽ mẫu)",
      "sampleSentence": "Tin giả lan truyền trên mạng xã hội hoạt động như một loại virus độc hại, đầu độc nhận thức cộng đồng và gieo rắc sự hoang mang, chia rẽ trong xã hội.",
      "thinkingSteps": [
        "Bước 1: So sánh đối lập giữa bàn phím vô hình và sức sát thương hơn ngàn mũi dao.",
        "Bước 2: Phân tích tâm lý nạn nhân bị đẩy vào hoảng loạn, cô độc.",
        "Bước 3: Lên án sự tàn nhẫn dưới danh nghĩa 'tự do ngôn luận'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Tác hại của bạo lực ngôn từ trên mạng'!"
    },
    "sampleAnswer": "Bàn phím không phát ra tiếng nổ và màn hình không nhuốm máu, nhưng những lời miệt thị ẩn danh lại có sức sát thương ghê gớm hơn ngàn mũi dao nhọn. Khi hàng ngàn bình luận ác ý đồng loạt nhắm vào một cá nhân, nạn nhân sẽ bị đẩy vào hố sâu của sự cô độc, hoảng loạn và trầm cảm kéo dài. Đã có biết bao sinh mệnh trẻ tuổi phải tìm đến cái chết oan ức chỉ vì sự tàn nhẫn vô tâm nhân danh 'tự do ngôn luận' trên không gian ảo.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 29,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao cần rèn luyện tính kỷ luật?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao cần rèn luyện tính kỷ luật?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "kỷ luật",
      "tự do",
      "kiên định",
      "thói quen"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Ý nghĩa của sự kiên trì (Khối Lý lẽ mẫu)",
      "sampleSentence": "Kiên trì là nhịp cầu duy nhất nối liền ước mơ với hiện thực. Không có thành quả vĩ đại nào đến sau một đêm; mọi kỳ tích đều là kết tinh của hàng ngàn ngày tích lũy bền bỉ và âm thầm.",
      "thinkingSteps": [
        "Bước 1: Phân biệt giữa động lực nhất thời và kỷ luật bền vững.",
        "Bước 2: Nêu việc chiến thắng cám dỗ nhỏ nhặt hàng ngày (giường ấm, điện thoại).",
        "Bước 3: Đưa ra nghịch lý triết học: 'Kỷ luật hôm nay tạo ra Tự do ngày mai'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao cần rèn luyện tính kỷ luật?'!"
    },
    "sampleAnswer": "Động lực nhất thời chỉ như cơn gió thoảng giúp ta bắt đầu, nhưng chỉ có kỷ luật sắt son mới là bánh đà đưa ta kiên định cán đích cuối cùng. Kỷ luật giúp ta chiến thắng sự cám dỗ của chiếc giường ấm, cơn nghiện điện thoại để kiên trì tích lũy từng trang sách, từng bài toán mỗi ngày. Đừng bao giờ nhầm lẫn kỷ luật với sự gò bó, bởi chính kỷ luật nghiêm khắc hôm nay mới tạo nên sự tự do đích thực cho tương lai của bạn.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 30,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao cần bảo vệ sự trong sáng của Tiếng Việt?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao cần bảo vệ sự trong sáng của Tiếng Việt?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "tiếng Việt",
      "cội nguồn",
      "méo mó",
      "tự hào"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Ý thức giữ gìn di sản văn hóa (Khối Lý lẽ mẫu)",
      "sampleSentence": "Di sản văn hóa là gốc rễ tạo nên bản sắc của một dân tộc. Một cái cây chỉ có thể vươn cao xum xuê khi rễ của nó bám chặt sâu vào lòng đất mẹ; đánh mất bản sắc văn hóa là tự biến mình thành kẻ lạc loài giữa thế giới.",
      "thinkingSteps": [
        "Bước 1: Khẳng định Tiếng Việt là hồn cốt và tâm hồn ngàn đời của dân tộc.",
        "Bước 2: Chỉ ra thực trạng chêm xen tiếng nước ngoài làm méo mó tiếng mẹ đẻ.",
        "Bước 3: Nâng tầm thành việc bảo vệ 'tấm căn cước văn hóa thiêng liêng'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao cần bảo vệ sự trong sáng của Tiếng Việt?'!"
    },
    "sampleAnswer": "Tiếng Việt không chỉ là phương tiện giao tiếp thông thường, mà là hồn cốt ngàn đời của cha ông, lưu giữ trọn vẹn bề dày văn hóa và chiều sâu tâm hồn dân tộc. Thế nhưng, hiện tượng lạm dụng tiếng lóng, chêm xen ngoại ngữ bừa bãi đang làm xói mòn vẻ đẹp giàu và đẹp của tiếng mẹ đẻ. Giữ gìn sự trong sáng của tiếng Việt chính là bảo vệ tấm căn cước văn hóa thiêng liêng nhất của mỗi người con đất Việt trong thời kỳ hội nhập.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 31,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Tầm quan trọng của lòng trắc ẩn trong xã hội hiện đại",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Tầm quan trọng của lòng trắc ẩn trong xã hội hiện đại'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "trắc ẩn",
      "gắn kết",
      "lạnh lùng",
      "tình người"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Giá trị của sự đồng cảm (Khối Lý lẽ mẫu)",
      "sampleSentence": "Đồng cảm giúp ta đặt mình vào hoàn cảnh của người khác để thấu hiểu nỗi đau của họ, từ đó tránh được những phán xét cay nghiệt và cùng nhau xây dựng một cộng đồng nhân ái.",
      "thinkingSteps": [
        "Bước 1: Nêu bối cảnh xã hội công nghệ dễ dẫn đến sự thờ ơ, cô đơn.",
        "Bước 2: Khẳng định lòng trắc ẩn là ngọn lửa sưởi ấm tình người.",
        "Bước 3: Đưa hình ảnh so sánh 'khối bê tông vô hồn' nếu thiếu tình thương."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Tầm quan trọng của lòng trắc ẩn trong xã hội hiện đại'!"
    },
    "sampleAnswer": "Trong một xã hội hiện đại nơi công nghệ ngày càng phát triển vượt bậc, con người lại càng có nguy cơ bị cuốn vào vòng xoáy của sự thờ ơ và cô đơn. Lòng trắc ẩn lúc này đóng vai trò như ngọn lửa ấm áp xua đi bầu không khí lạnh lùng, nhắc nhở chúng ta về giá trị của tình người chân thật. Nếu thiếu đi sự thấu cảm và chia sẻ, xã hội dù giàu có đến đâu cũng chỉ là một khối bê tông vô hồn thiếu vắng sự sống.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 32,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao học sinh cần trung thực trong thi cử?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao học sinh cần trung thực trong thi cử?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "trung thực",
      "điểm số",
      "thực chất",
      "nhân cách"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Ý thức học thật thi thật (Khối Lý lẽ mẫu)",
      "sampleSentence": "Học thật giúp ta nắm vững tri thức thực chất, tự tin đối mặt với mọi kỳ thi mà không cần lo sợ hay dối trá. Năng lực thực sự mới là tài sản bền vững theo ta suốt cuộc đời.",
      "thinkingSteps": [
        "Bước 1: Phê phán điểm mười gian lận là chiếc áo choàng che đậy sự rỗng tuếch.",
        "Bước 2: Khẳng định điểm số ảo không thể biến thành năng lực thật ngoài đời.",
        "Bước 3: Nâng tầm lên bài học xây dựng lòng tự trọng và nhân cách."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao học sinh cần trung thực trong thi cử?'!"
    },
    "sampleAnswer": "Một con điểm mười đạt được nhờ sự gian lận chỉ là chiếc áo choàng lộng lẫy che đậy sự rỗng tuếch bên trong kiến thức. Điểm số ảo không thể biến thành năng lực thật khi bước vào trường đời đầy cam go và cạnh tranh khốc liệt. Hơn thế nữa, trung thực trong thi cử chính là bài học đầu đời rèn luyện lòng tự trọng và nhân cách của một công dân lương thiện trong tương lai.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 33,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao cần tôn trọng sự khác biệt của người khác?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao cần tôn trọng sự khác biệt của người khác?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "khác biệt",
      "đa dạng",
      "định kiến",
      "hòa hợp"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Tinh thần khoan dung trong giao tiếp (Khối Lý lẽ mẫu)",
      "sampleSentence": "Khoan dung với những quan điểm khác biệt giúp ta mở rộng tư duy và học hỏi được nhiều điều mới lạ từ những người xung quanh.",
      "thinkingSteps": [
        "Bước 1: Khẳng định mỗi người sinh ra là một cá thể độc bản.",
        "Bước 2: Nêu lợi ích của việc tôn trọng sự khác biệt (giải phóng định kiến, đa dạng).",
        "Bước 3: Cảnh báo sự đơn điệu và ngột ngạt nếu ép buộc người khác giống mình."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao cần tôn trọng sự khác biệt của người khác?'!"
    },
    "sampleAnswer": "Mỗi con người sinh ra là một cá thể độc bản với tính cách, ngoại hình và xuất phát điểm hoàn toàn riêng biệt. Tôn trọng sự khác biệt là tiền đề để giải phóng con người khỏi những định kiến hẹp hòi, kiến tạo một xã hội đa dạng và nhân văn. Ngược lại, nếu luôn ép buộc người khác phải tuân theo thước đo chủ quan của mình, chúng ta sẽ biến cuộc sống thành một bản sao đơn điệu và ngột ngạt.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 34,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao phải bảo vệ môi trường biển?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao phải bảo vệ môi trường biển?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "biển cả",
      "hệ sinh thái",
      "sinh kế",
      "tương lai"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Ý thức bảo vệ rừng (Khối Lý lẽ mẫu)",
      "sampleSentence": "Rừng là lá phổi xanh của Trái Đất, ngăn chặn xói mòn đất và chống lũ lụt. Tàn phá rừng chính là hành vi tự hủy hoại môi trường sống của chính con người.",
      "thinkingSteps": [
        "Bước 1: Khẳng định vai trò của biển: điều hòa khí hậu, nuôi sống con người.",
        "Bước 2: Chỉ ra thực trạng xả rác và hóa chất bức tử hệ sinh thái biển.",
        "Bước 3: Đúc kết bảo vệ biển là bảo vệ sinh kế và tương lai nhân loại."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao phải bảo vệ môi trường biển?'!"
    },
    "sampleAnswer": "Biển cả là chiếc nôi của sự sống, điều hòa khí hậu toàn cầu và cung cấp nguồn lợi thủy hải sản nuôi sống hàng triệu con người. Việc xả thải rác nhựa và hóa chất độc hại ra đại dương đang bức tử các rặng san hô và đẩy hàng ngàn loài sinh vật biển vào thảm họa diệt vong. Bảo vệ biển không chỉ là cứu lấy thiên nhiên hoang dã mà là bảo vệ chính tương lai và sinh kế của các thế hệ mai sau.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 35,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Tác dụng của việc đọc sách mỗi ngày",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Tác dụng của việc đọc sách mỗi ngày'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "đọc sách",
      "trí tuệ",
      "suy ngẫm",
      "mở rộng"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Ý nghĩa của việc học tập suốt đời (Khối Lý lẽ mẫu)",
      "sampleSentence": "Tri thức nhân loại không ngừng phát triển; học tập suốt đời là chiếc chìa khóa duy nhất giúp con người không bị tụt hậu và luôn thích nghi với thời đại.",
      "thinkingSteps": [
        "Bước 1: Nâng tầm việc đọc sách là 'cuộc đối thoại với những bộ óc vĩ đại'.",
        "Bước 2: Nêu tác dụng cụ thể: mở rộng vốn từ, lắng đọng tâm hồn.",
        "Bước 3: Đối chiếu với thông tin ngắn trên mạng để khẳng định tư duy chiều sâu."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Tác dụng của việc đọc sách mỗi ngày'!"
    },
    "sampleAnswer": "Mỗi cuốn sách hay là một cuộc đối thoại kỳ diệu với những bộ óc vĩ đại nhất của nhân loại qua các thời kỳ. Dành 20 phút đọc sách mỗi ngày giúp ta mở rộng tầm nhìn, tích lũy vốn từ và làm lắng đọng tâm hồn sau những xô bồ của cuộc sống. Trong thế giới ngập tràn thông tin ngắn và nông cạn, việc đọc sách giấy chính là cách duy nhất rèn luyện tư duy chiều sâu và khả năng tập trung kiên định.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 36,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao cần có thái độ biết ơn cha mẹ?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao cần có thái độ biết ơn cha mẹ?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "cha mẹ",
      "sinh thành",
      "dưỡng dục",
      "hiếu thảo"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Đạo lý uống nước nhớ nguồn (Khối Lý lẽ mẫu)",
      "sampleSentence": "Uống nước nhớ nguồn nhắc nhở con người không được phép vong ân bội nghĩa với những ai đã giúp đỡ mình trong lúc khó khăn, hoạn nạn.",
      "thinkingSteps": [
        "Bước 1: Khai thác ca dao truyền thống để khắc sâu công lao sinh thành.",
        "Bước 2: Khẳng định biết ơn cha mẹ là thước đo nhân cách tối thiểu.",
        "Bước 3: Khẳng định người bất hiếu không thể thành công dân tốt."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao cần có thái độ biết ơn cha mẹ?'!"
    },
    "sampleAnswer": "Công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra – sự trưởng thành của mỗi đứa con đều được đánh đổi bằng những sợi tóc bạc và những giọt mồ hôi của đấng sinh thành. Biết ơn cha mẹ không chỉ là bổn phận đạo đức tối thiểu của một con người, mà còn là thước đo căn bản nhất đánh giá nhân cách của một cá nhân. Người không biết kính trọng công lao sinh thành của mẹ cha sẽ không bao giờ có thể trở thành một công dân chân chính ngoài xã hội.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 37,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Ý nghĩa của sự cống hiến thầm lặng",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Ý nghĩa của sự cống hiến thầm lặng'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "cống hiến",
      "thầm lặng",
      "người hùng",
      "tốt đẹp"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Lối sống vì cộng đồng (Khối Lý lẽ mẫu)",
      "sampleSentence": "Sống vì cộng đồng giúp con người vượt qua sự ích kỷ cá nhân, tìm thấy niềm vui trong sự phụng sự và lan tỏa giá trị tốt đẹp cho xã hội.",
      "thinkingSteps": [
        "Bước 1: Tương phản giữa hào quang sân khấu và sự cống hiến thầm lặng.",
        "Bước 2: Nêu dẫn chứng cụ thể: người quét rác đêm đông, chiến sĩ biên phòng.",
        "Bước 3: Khẳng định vẻ đẹp không tên nhắc nhở lối sống hữu ích."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Ý nghĩa của sự cống hiến thầm lặng'!"
    },
    "sampleAnswer": "Không phải ai cũng được đứng dưới ánh đèn sân khấu hay được vinh danh bằng những tràng pháo tay rộn rã, nhưng chính những cống hiến thầm lặng mới là nền móng giữ cho xã hội này vận hành trơn tru. Những người quét rác đêm đông, những người lính biên phòng nơi biên cương xa xôi đang từng ngày thầm lặng hy sinh tuổi xuân vì bình yên của đất nước. Vẻ đẹp của sự cống hiến không tên ấy nhắc nhở chúng ta hãy sống một đời giản dị mà hữu ích cho đời.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 38,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao con người cần kiểm soát cơn nóng giận?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao con người cần kiểm soát cơn nóng giận?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "nóng giận",
      "kiểm soát",
      "bình tĩnh",
      "hậu quả"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Nghệ thuật nhẫn nại (Khối Lý lẽ mẫu)",
      "sampleSentence": "Nhẫn nại một bước gió yên sóng lặng, lùi một bước biển rộng trời cao. Nhẫn nại không phải là nhu nhược mà là sự chín chắn của người biết nhìn xa trông rộng.",
      "thinkingSteps": [
        "Bước 1: So sánh nóng giận với 'ngọn lửa thiêu rụi mọi công sức'.",
        "Bước 2: Chỉ ra hậu quả lý trí lu mờ, buông lời sát thương gây hối tiếc.",
        "Bước 3: Khẳng định kiểm soát cảm xúc là đỉnh cao của sự khôn ngoan."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao con người cần kiểm soát cơn nóng giận?'!"
    },
    "sampleAnswer": "Nóng giận giống như ngọn lửa bùng phát thiêu rụi mọi công sức xây dựng và làm đổ vỡ những mối quan hệ quý giá chỉ trong một tích tắc. Khi để sự giận dữ chi phối, lý trí sẽ bị lu mờ và ta rất dễ đưa ra những lời nói sát thương hoặc những quyết định sai lầm mà cả đời phải hối tiếc. Biết làm chủ cảm xúc và giữ bình tĩnh chính là đỉnh cao của bản lĩnh và sự khôn ngoan ở đời.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 39,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Tác hại của việc sống 'ảo' và phụ thuộc vào like",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Tác hại của việc sống 'ảo' và phụ thuộc vào like'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "sống ảo",
      "nút like",
      "hào nhoáng",
      "cô đơn"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Căn bệnh hình thức (Khối Lý lẽ mẫu)",
      "sampleSentence": "Bệnh chuộng hình thức khiến con người chỉ quan tâm đến vẻ bề ngoài mà bỏ bê việc tu dưỡng phẩm hạnh và năng lực thực chất bên trong.",
      "thinkingSteps": [
        "Bước 1: So sánh sống ảo với 'vở kịch hào nhoáng nhưng rỗng tuếch'.",
        "Bước 2: Miêu tả sự đối lập: ảnh lung linh trên mạng vs sự trống rỗng đời thực.",
        "Bước 3: Cảnh báo cái giá đắt khi đánh đổi giá trị thật lấy hào nhoáng ảo."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Tác hại của việc sống 'ảo' và phụ thuộc vào like'!"
    },
    "sampleAnswer": "Việc mải miết chạy theo những lượt like và bình luận tán dương trên mạng xã hội biến cuộc sống của nhiều bạn trẻ thành một vở kịch hào nhoáng nhưng rỗng tuếch. Họ dành toàn bộ tâm trí để dàn dựng những bức ảnh lung linh, để rồi khi bước ra đời thực, họ cảm thấy trống rỗng và hụt hẫng tột cùng. Đánh đổi những giá trị chân thật của đời thực để lấy sự chú ý chốc lát của thế giới ảo là một cái giá quá đắt mà không ít người đang phải trả.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 40,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Ý nghĩa của tình bạn tuổi học trò",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Ý nghĩa của tình bạn tuổi học trò'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "tình bạn",
      "trong sáng",
      "thanh xuân",
      "gắn bó"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Tình thầy trò (Khối Lý lẽ mẫu)",
      "sampleSentence": "Tình thầy trò là ngọn đuốc tri thức dẫn đường cho học sinh vượt qua đêm tối của sự ngu dốt, là tình cảm thiêng liêng chắp cánh cho ước mơ bay cao.",
      "thinkingSteps": [
        "Bước 1: Định nghĩa tình bạn học trò là sự trong trẻo, không toan tính.",
        "Bước 2: Nêu hình ảnh đời thường: chia nhau mẩu bánh mì, thức khuya ôn bài.",
        "Bước 3: Khẳng định đây là hành trang ấm áp nâng đỡ cả đời người."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Ý nghĩa của tình bạn tuổi học trò'!"
    },
    "sampleAnswer": "Tình bạn dưới mái trường là thứ tình cảm trong trẻo và đẹp đẽ nhất của thời hoa niên, không vướng bận toan tính hay vụ lợi vật chất. Đó là những người bạn cùng ta chia sẻ từng mẩu bánh mì, cùng nhau thức khuya ôn bài và dìu nhau bước qua những khủng hoảng tâm lý tuổi mới lớn. Ký ức về một tình bạn chân thành sẽ mãi là hành trang ấm áp nâng đỡ tâm hồn ta trên suốt hành trình trưởng thành dài rộng phía trước.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 41,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao cần có tinh thần lạc quan trước nghịch cảnh?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao cần có tinh thần lạc quan trước nghịch cảnh?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "lạc quan",
      "giông bão",
      "hy vọng",
      "kiên cường"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Sức mạnh của niềm hy vọng (Khối Lý lẽ mẫu)",
      "sampleSentence": "Hy vọng là ngọn nến cuối cùng không bao giờ tắt trong tâm hồn con người, giúp ta đứng vững trước những biến cố khắc nghiệt nhất của cuộc đời.",
      "thinkingSteps": [
        "Bước 1: Khẳng định khó khăn giông bão là quy luật tất yếu.",
        "Bước 2: Ví lạc quan là 'ngọn hải đăng soi sáng bóng tối, tìm cơ hội trong nguy cơ'.",
        "Bước 3: Dùng hình ảnh thơ mộng: 'sau cơn mưa trời lại sáng ánh cầu vồng'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao cần có tinh thần lạc quan trước nghịch cảnh?'!"
    },
    "sampleAnswer": "Nghịch cảnh và giông bão là một phần tất yếu của cuộc đời mà không ai có thể né tránh hay khước từ. Thái độ lạc quan chính là ngọn hải đăng soi sáng bóng tối, giúp ta nhìn thấy cơ hội ngay trong nguy cơ và giữ vững niềm tin vào ngày mai tươi sáng. Người lạc quan không bao giờ chịu cúi đầu trước số phận, bởi họ hiểu rằng sau cơn mưa rào giông bão, bầu trời chắc chắn sẽ lại bừng sáng ánh cầu vồng.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 42,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Tác hại của lối sống thực dụng",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Tác hại của lối sống thực dụng'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "thực dụng",
      "kim tiền",
      "toan tính",
      "lạnh lẽo"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Lòng tham lam (Khối Lý lẽ mẫu)",
      "sampleSentence": "Lòng tham không đáy là hố sâu nuốt chửng nhân cách con người, biến người lương thiện thành kẻ mù quáng sẵn sàng giẫm đạp lên đạo lý vì tư lợi.",
      "thinkingSteps": [
        "Bước 1: Phê phán thực dụng biến quan hệ người với người thành đổi chác sặc mùi tiền.",
        "Bước 2: Chỉ ra sự triệt tiêu lòng nhân ái và tình bạn chân thành.",
        "Bước 3: Đúc kết: giàu về vật chất nhưng tâm hồn nghèo nàn và cô độc."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Tác hại của lối sống thực dụng'!"
    },
    "sampleAnswer": "Lối sống thực dụng biến các mối quan hệ thiêng liêng thành những cuộc đổi chác vụ lợi sặc mùi kim tiền. Khi con người chỉ nhìn thế giới qua lăng kính của sự được mất vật chất, lòng nhân ái, tình bạn và sự sẻ chia sẽ hoàn toàn bị triệt tiêu. Sống trong một thế giới quá thực dụng, con người có thể giàu có về tiền bạc nhưng tâm hồn sẽ vĩnh viễn nghèo nàn và chìm đắm trong sự cô độc đáng thương.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 43,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Ý nghĩa của lời xin lỗi chân thành",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Ý nghĩa của lời xin lỗi chân thành'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "xin lỗi",
      "dũng cảm",
      "hàn gắn",
      "nhân cách"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Ý nghĩa của lời cảm ơn (Khối Lý lẽ mẫu)",
      "sampleSentence": "Lời cảm ơn xuất phát từ đáy lòng là biểu hiện của lòng biết ơn, mang lại niềm vui cho người trao tặng và gắn kết tình người thêm nồng ấm.",
      "thinkingSteps": [
        "Bước 1: Khẳng định xin lỗi không phải hạ thấp mình mà là sự dũng cảm.",
        "Bước 2: Chỉ ra sức mạnh hàn gắn kỳ diệu của lời xin lỗi đúng lúc.",
        "Bước 3: Đúc kết dám xin lỗi là thước đo của nhân cách tự trọng."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Ý nghĩa của lời xin lỗi chân thành'!"
    },
    "sampleAnswer": "Nói lời xin lỗi không phải là hạ thấp danh dự của bản thân, mà là hành động dũng cảm của một người biết tôn trọng lẽ phải và sự thật. Một lời nhận lỗi chân thành và kịp thời có sức mạnh kỳ diệu xua tan cơn giận dữ, hàn gắn những rạn nứt tưởng chừng không thể cứu vãn. Dám xin lỗi và kiên quyết sửa sai chính là thước đo rõ ràng nhất của một nhân cách trưởng thành và tự trọng.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 44,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Vì sao cần có lòng tự trọng?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Vì sao cần có lòng tự trọng?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "tự trọng",
      "tấm khiên",
      "nhân cách",
      "phẩm giá"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Khí tiết của người quân tử (Khối Lý lẽ mẫu)",
      "sampleSentence": "Khí tiết là lòng kiên định giữ vững đạo đức ngay thẳng, không vì bổng lộc mà quỳ gối, không vì đe dọa mà phản bội chính nghĩa.",
      "thinkingSteps": [
        "Bước 1: Ví tự trọng là 'tấm khiên bảo vệ phẩm giá'.",
        "Bước 2: Gắn với câu tục ngữ truyền thống 'đói cho sạch, rách cho thơm'.",
        "Bước 3: Cảnh báo mất tự trọng là mất tư cách làm người chân chính."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Vì sao cần có lòng tự trọng?'!"
    },
    "sampleAnswer": "Lòng tự trọng là tấm khiên vững chắc nhất bảo vệ phẩm giá của mỗi con người trước những cám dỗ và sự sỉ nhục của hoàn cảnh. Người có tự trọng dù rơi vào cảnh bần hàn vẫn giữ cho tâm hồn mình trong sạch, kiên quyết 'đói cho sạch, rách cho thơm'. Đánh mất lòng tự trọng là con người đã tự tước đoạt đi tư cách làm một người chân chính trong mắt đồng loại.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 45,
    "level": 3,
    "subType": "khoi_ly_le",
    "category": "Khối Lý Lẽ Bàn Luận Chiều Sâu (Tại sao?)",
    "topic": "Tại sao người trẻ cần rèn luyện kỹ năng làm việc nhóm?",
    "prompt": "Hãy viết một khối Bàn luận lý lẽ từ 3 đến 4 câu (~60 - 80 từ) giải thích nguyên nhân và tác động đối với cá nhân & xã hội của vấn đề: 'Tại sao người trẻ cần rèn luyện kỹ năng làm việc nhóm?'.",
    "targetLength": "3 - 4 câu (~60 - 80 từ)",
    "keywords": [
      "làm việc nhóm",
      "hợp tác",
      "lắng nghe",
      "thành công"
    ],
    "formula": "Khuôn mẫu 3-4 câu: Câu 1: 'Trước hết...' (Lý lẽ cá nhân) -> Câu 2: 'Không chỉ vậy/Hơn thế nữa...' (Lý lẽ xã hội) -> Câu 3: 'Ngược lại...' (Cảnh báo tương phản).",
    "similarHint": {
      "similarTopic": "Tinh thần kỷ luật tập thể (Khối Lý lẽ mẫu)",
      "sampleSentence": "Kỷ luật tập thể là sự tôn trọng quy ước chung của tổ chức, tạo nên sự thống nhất ý chí và sức mạnh vô địch để hoàn thành xuất sắc mọi nhiệm vụ.",
      "thinkingSteps": [
        "Bước 1: Nhấn mạnh không có công trình lớn nào làm được đơn độc.",
        "Bước 2: Liệt kê kỹ năng: hợp tác, lắng nghe, phối hợp nhịp nhàng.",
        "Bước 3: Khẳng định gạt bỏ cái tôi để cộng hưởng sức mạnh tập thể."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy dùng các liên từ logic 'Trước hết...', 'Không chỉ vậy...', 'Ngược lại...' để triển khai lý lẽ cho 'Tại sao người trẻ cần rèn luyện kỹ năng làm việc nhóm?'!"
    },
    "sampleAnswer": "Trong thời đại kinh tế tri thức ngày nay, không có một công trình vĩ đại nào có thể được tạo nên bởi bàn tay của một cá nhân đơn độc. Kỹ năng làm việc nhóm rèn luyện cho người trẻ tinh thần hợp tác, nghệ thuật lắng nghe đa chiều và khả năng phối hợp nhịp nhàng vì mục tiêu chung. Biết gạt bỏ cái tôi ích kỷ để hòa vào sức mạnh tập thể chính là bệ phóng đưa bạn tiến nhanh và tiến xa hơn trên con đường sự nghiệp.",
    "analysis": "💡 Lời thầy cô: Đoạn văn này có lập luận chặt chẽ như một kiềng ba chân: vừa nêu lợi ích cá nhân, vừa nâng lên tầm xã hội, lại có câu phản đề tương phản đanh thép.",
    "userRubric": [
      "Đúng dung lượng 3 - 4 câu, lập luận mạch lạc",
      "Có sử dụng liên từ lập luận (Trước hết, Hơn thế nữa, Ngược lại...)",
      "Nêu rõ tác động đến cá nhân và cộng đồng"
    ]
  },
  {
    "id": 46,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Thầy giáo Chu Văn An - Sự chính trực và bản lĩnh trung thực",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Thầy giáo Chu Văn An] cho chủ đề: 'Sự chính trực và bản lĩnh trung thực'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Chu Văn An",
      "Thất trảm sớ",
      "chính trực",
      "nhân cách"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Thầy giáo Chu Văn An] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Chứng kiến triều đình nhà Trần suy thoái do những tên tham quan lộng quyền ức hiếp muôn dân, thầy giáo Chu Văn An đã khẳng khái dâng 'Thất trảm sớ' xin chém bảy kẻ nịnh thần. (2) Hành động (A): Khi lời can gián không được nhà vua chấp thuận, thầy thanh thản treo mũ từ quan, lui về núi Phượng Hoàng ở ẩn dạy học để giữ trọn tấm lòng trong sạch. (3) Kết quả (R): Khí tiết thanh cao của người thầy muôn đời ấy đã trở thành tượng đài bất tử về sự chính trực và tinh thần bất khuất trước cường quyền.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 47,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Kình ngư Nguyễn Thị Ánh Viên - Ý chí khổ luyện và kiên trì",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Kình ngư Nguyễn Thị Ánh Viên] cho chủ đề: 'Ý chí khổ luyện và kiên trì'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Ánh Viên",
      "khổ luyện",
      "bơi lội",
      "huy chương"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Kình ngư Nguyễn Thị Ánh Viên] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Để đem lại vinh quang cho thể thao nước nhà, kình ngư Ánh Viên đã phải trải qua những năm tháng khổ luyện khắc nghiệt nơi xứ người, bơi hàng chục cây số mỗi ngày và hy sinh tuổi thanh xuân xa gia đình. (2) Hành động (A): Vượt qua nỗi cô đơn, những giọt nước mắt và cơn đau nhức thể xác trong làn nước lạnh, cô đã kiên cường tập luyện không ngừng nghỉ để liên tục phá vỡ các kỷ lục bơi lội. (3) Kết quả (R): Cơn mưa huy chương vàng tại các kỳ SEA Games của Ánh Viên là minh chứng đanh thép khẳng định: Thiên tài chỉ có 1% may mắn, 99% còn lại là mồ hôi của sự khổ luyện.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 48,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Anh tài xế Nguyễn Ngọc Mạnh - Lòng dũng cảm và tinh thần nghĩa hiệp",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Anh tài xế Nguyễn Ngọc Mạnh] cho chủ đề: 'Lòng dũng cảm và tinh thần nghĩa hiệp'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Nguyễn Ngọc Mạnh",
      "tầng 12",
      "cứu sống",
      "dũng cảm"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Anh tài xế Nguyễn Ngọc Mạnh] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Trước tình huống sinh tử nghẹt thở khi một bé gái rơi tự do từ tầng 12 của tòa chung cư cao tầng, anh Nguyễn Ngọc Mạnh đã bất chấp hiểm nguy lao lên mái tôn trơn trượt. (2) Hành động (A): Bằng phản xạ xuất thần và lòng nhân ái vô điều kiện, anh đã dùng trọn đôi tay của mình để đón đỡ cháu bé an toàn trong gang tấc. (3) Kết quả (R): Nghĩa cử cao đẹp cứu người không màng tính mạng của anh đã làm rung động hàng triệu trái tim, thắp sáng niềm tin vào vẻ đẹp của những người hùng đời thường.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 49,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Cậu bé Ngô Minh Hiếu - Tình bạn cao đẹp và đức hy sinh",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Cậu bé Ngô Minh Hiếu] cho chủ đề: 'Tình bạn cao đẹp và đức hy sinh'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Ngô Minh Hiếu",
      "Nguyễn Tất Minh",
      "10 năm",
      "tình bạn"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Cậu bé Ngô Minh Hiếu] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Thấu hiểu hoàn cảnh bạn thân Nguyễn Tất Minh bị khuyết tật bẩm sinh không thể tự đi lại, cậu học trò nghèo Ngô Minh Hiếu đã tình nguyện cõng bạn đến trường mỗi ngày. (2) Hành động (A): Suốt 10 năm ròng rã bất kể nắng gắt mưa dầm, đôi chân của Hiếu đã thay cho đôi chân của Minh vượt qua hàng ngàn cây số đường làng để cùng nhau theo đuổi con chữ. (3) Kết quả (R): Tình bạn cổ tích giữa đời thực ấy đã kết trái ngọt ngào khi cả hai cùng bước chân vào cánh cổng trường đại học, trở thành bài ca tuyệt mỹ về lòng nhân ái.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 50,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Cô bé Greta Thunberg - Ý thức trách nhiệm vì môi trường",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Cô bé Greta Thunberg] cho chủ đề: 'Ý thức trách nhiệm vì môi trường'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Greta Thunberg",
      "khí hậu",
      "bãi khóa",
      "toàn cầu"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Cô bé Greta Thunberg] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Nhận thức sâu sắc về thảm họa biến đổi khí hậu đang từng ngày bức tử hành tinh, cô bé 15 tuổi Greta Thunberg đã một mình kiên trì ngồi bãi khóa trước tòa nhà quốc hội Thụy Điển. (2) Hành động (A): Tiếng nói đanh thép và hành động quả cảm của em đã thổi bùng phong trào 'Fridays for Future', lôi cuốn hàng triệu thanh thiếu niên trên khắp thế giới xuống đường đòi công lý cho môi trường. (3) Kết quả (R): Greta đã vinh dự được đề cử giải Nobel Hòa bình, khẳng định chân lý: Không một ai là quá nhỏ bé để tạo nên sự thay đổi to lớn cho thế giới.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 51,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Chủ tịch Hồ Chí Minh - Tinh thần tự học vĩ đại",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Chủ tịch Hồ Chí Minh] cho chủ đề: 'Tinh thần tự học vĩ đại'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Hồ Chí Minh",
      "tự học",
      "bôn ba",
      "ngoại ngữ"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Chủ tịch Hồ Chí Minh] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Trong suốt 30 năm bôn ba khắp năm châu bốn biển tìm đường cứu nước, Bác Hồ đã phải làm đủ mọi nghề nặng nhọc từ quét tuyết, bồi bàn đến phụ bếp để kiếm sống. (2) Hành động (A): Dù gian khổ trăm bề, Bác vẫn kiên trì tự học hàng chục thứ tiếng ngoại quốc bằng cách viết từ mới lên cánh tay để vừa làm vừa học và tra cứu sách báo mỗi đêm. (3) Kết quả (R): Vốn tri thức uyên bác và tinh thần tự học kiệt xuất ấy đã giúp Người tìm ra chân lý giải phóng dân tộc, để lại bài học ngàn vàng cho thế hệ trẻ soi chung.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 52,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Nhà bác học Thomas Edison - Ý chí đứng dậy sau thất bại",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Nhà bác học Thomas Edison] cho chủ đề: 'Ý chí đứng dậy sau thất bại'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Thomas Edison",
      "bóng đèn",
      "thất bại",
      "kiên trì"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Nhà bác học Thomas Edison] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Trong quá trình nghiên cứu chế tạo bóng đèn sợi đốt, nhà bác học Thomas Edison đã từng đối mặt với hơn 10.000 lần thử nghiệm thất bại cay đắng. (2) Hành động (A): Thay vì nản lòng buông xuôi, ông lạc quan coi đó là 10.000 bước đi đúng đắn để loại trừ các chất liệu không phù hợp và kiên định tiếp tục hành trình nghiên cứu. (3) Kết quả (R): Phát minh vĩ đại ra đời đã thắp sáng cả nhân loại, để lại bài học bất hủ: Thất bại chỉ là chiếc lò xo bật đẩy con người chạm tới đỉnh cao thành công.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 53,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Hoa hậu H'Hen Niê - Bản lĩnh vượt khó và tự hào dân tộc",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Hoa hậu H'Hen Niê] cho chủ đề: 'Bản lĩnh vượt khó và tự hào dân tộc'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "H'Hen Niê",
      "buôn làng",
      "vượt khó",
      "truyền cảm hứng"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Hoa hậu H'Hen Niê] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Xuất thân từ một buôn làng nghèo khó của đồng bào Ê-đê, cô bé H'Hen Niê từng đứng trước áp lực nặng nề của hủ tục phải bỏ học để lấy chồng sớm ở tuổi 14. (2) Hành động (A): Bằng khát vọng tự làm chủ số phận, cô đã dũng cảm nói 'Không' với tục lệ, một mình lên thành phố làm thuê kiếm sống để tiếp tục học đại học và kiên trì rèn luyện bản thân. (3) Kết quả (R): Kỳ tích lọt vào Top 5 Hoa hậu Hoàn vũ Thế giới của cô gái Ê-đê đã truyền cảm hứng mạnh mẽ rằng: Hãy dám ước mơ và tự tin bước ra thế giới bằng chính bản sắc của mình.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 54,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Bác sĩ Alexandre Yersin - Lòng nhân ái và sự cống hiến quên mình",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Bác sĩ Alexandre Yersin] cho chủ đề: 'Lòng nhân ái và sự cống hiến quên mình'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Yersin",
      "Nha Trang",
      "cống hiến",
      "vắc-xin"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Bác sĩ Alexandre Yersin] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Bỏ lại sau lưng cuộc sống phồn hoa và danh vọng rực rỡ tại Paris, bác sĩ Alexandre Yersin đã chọn gắn bó cả phần đời còn lại với mảnh đất Nha Trang đầy nắng gió. (2) Hành động (A): Tại đây, ông miệt mài nghiên cứu trong điều kiện thiếu thốn, tìm ra vắc-xin trị dịch hạch cứu sống hàng triệu người và tận tụy khám chữa bệnh miễn phí cho những người dân nghèo. (3) Kết quả (R): Tấm lòng nhân ái không biên giới của ông mãi được nhân dân Việt Nam tôn kính khắc ghi như một vị bồ tát giữa đời thường.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 55,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Nick Vujicic - Nghị lực sống và tinh thần lạc quan",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Nick Vujicic] cho chủ đề: 'Nghị lực sống và tinh thần lạc quan'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Nick Vujicic",
      "không tay không chân",
      "truyền cảm hứng",
      "nghị lực"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Nick Vujicic] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Sinh ra với hội chứng không tay không chân bẩm sinh, Nick Vujicic từng rơi vào hố sâu tuyệt vọng và có ý định quyên sinh khi mới lên 10 tuổi. (2) Hành động (A): Nhờ tình yêu thương của cha mẹ và niềm tin mãnh liệt, anh đã kiên trì tập bơi, học gõ máy tính, tốt nghiệp đại học và trở thành một diễn giả truyền cảm hứng khắp năm châu. (3) Kết quả (R): Nụ cười rạng rỡ của Nick là minh chứng hùng hồn: Cuộc sống không có giới hạn nào ngoại trừ những rào cản do chính tâm trí con người dựng nên.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 56,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Cô gái Malala Yousafzai - Dũng cảm đấu tranh vì quyền học tập",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Cô gái Malala Yousafzai] cho chủ đề: 'Dũng cảm đấu tranh vì quyền học tập'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Malala",
      "Taliban",
      "bình đẳng",
      "giải Nobel"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Cô gái Malala Yousafzai] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Dưới sự kiểm soát tàn bạo của lực lượng khủng bố Taliban cấm phụ nữ đến trường, cô bé Malala Yousafzai vẫn kiên cường cất cao tiếng nói đòi quyền đi học cho trẻ em gái tại Pakistan. (2) Hành động (A): Dù từng bị phiến quân bắn thẳng vào đầu trong gang tấc sinh tử, sau khi bình phục, cô vẫn dũng cảm đứng trên diễn đàn Liên Hợp Quốc để tiếp tục đấu tranh. (3) Kết quả (R): Malala đã trở thành người trẻ nhất trong lịch sử nhận giải Nobel Hòa bình, chứng minh sức mạnh bất tử của con chữ trước bạo tàn súng đạn.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 57,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Đội tuyển U23 Việt Nam tại Thường Châu (2018) - Tinh thần đoàn kết và ý chí quả cảm",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Đội tuyển U23 Việt Nam tại Thường Châu (2018)] cho chủ đề: 'Tinh thần đoàn kết và ý chí quả cảm'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "U23 Việt Nam",
      "tuyết trắng",
      "Thường Châu",
      "tinh thần"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Đội tuyển U23 Việt Nam tại Thường Châu (2018)] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Tại trận chung kết U23 Châu Á dưới cơn mưa tuyết trắng xóa và lạnh giá thấu xương ở Thường Châu, các cầu thủ trẻ Việt Nam phải thi đấu trong điều kiện vô cùng bất lợi. (2) Hành động (A): Bất chấp cái lạnh cắt da, các chàng trai áo đỏ đã kiên cường chiến đấu như những chiến binh, cùng nhau cào tuyết để đồng đội tạo nên siêu phẩm 'cầu vồng tuyết' lịch sử. (3) Kết quả (R): Ngôi vị Á quân châu lục cùng tinh thần không bao giờ bỏ cuộc của U23 Việt Nam đã làm rung động trái tim hàng triệu người hâm mộ khắp cả nước.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 58,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Chương trình 'Cơm có thịt' - Tinh thần tương thân tương ái sẻ chia",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Chương trình 'Cơm có thịt'] cho chủ đề: 'Tinh thần tương thân tương ái sẻ chia'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Cơm có thịt",
      "vùng cao",
      "bữa ăn",
      "sẻ chia"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Chương trình 'Cơm có thịt'] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Chứng kiến cảnh những em nhỏ vùng cao Tây Bắc co ro trong manh áo rách ăn cơm trắng chấm ớt cay, nhà báo Trần Đăng Tuấn cùng các cộng sự đã sáng lập quỹ từ thiện 'Cơm có thịt'. (2) Hành động (A): Bằng sự minh bạch và bền bỉ kêu gọi cộng đồng, chương trình đã huy động hàng triệu bữa ăn đủ đầy dinh dưỡng và quần áo ấm đến cho học trò nghèo vùng cao. (3) Kết quả (R): Dự án nhân văn này đã sưởi ấm những đôi môi tím tái vì lạnh, chắp cánh cho hàng ngàn đứa trẻ nghèo vững bước đến trường.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 59,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Em Nguyễn Văn Nam (học sinh lớp 9) - Lòng dũng cảm hy sinh cứu người",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Em Nguyễn Văn Nam (học sinh lớp 9)] cho chủ đề: 'Lòng dũng cảm hy sinh cứu người'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Nguyễn Văn Nam",
      "cứu người",
      "dòng nước lũ",
      "hy sinh"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Em Nguyễn Văn Nam (học sinh lớp 9)] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Đang trên đường đi học về, em Nguyễn Văn Nam (học sinh lớp 9 tại Nghệ An) nghe thấy tiếng kêu cứu thảm thiết của một nhóm em nhỏ đang chới với giữa dòng nước lũ xoáy sâu. (2) Hành động (A): Không một giây do dự, Nam đã nhiều lần dũng cảm lao mình xuống dòng nước xiết, lần lượt cứu được cả 5 em nhỏ đưa vào bờ an toàn. (3) Kết quả (R): Do kiệt sức, Nam đã bị dòng nước cuốn đi và hy sinh; tấm gương quả cảm quên mình của em đã được Chủ tịch nước truy tặng Huân chương Dũng cảm.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 60,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Tập đoàn Apple và Steve Jobs - Bản lĩnh sáng tạo và vượt lên nghịch cảnh",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Tập đoàn Apple và Steve Jobs] cho chủ đề: 'Bản lĩnh sáng tạo và vượt lên nghịch cảnh'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Steve Jobs",
      "Apple",
      "sáng tạo",
      "công nghệ"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Tập đoàn Apple và Steve Jobs] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Từng bị sa thải khỏi chính công ty Apple do mình sáng lập ở tuổi 30, Steve Jobs tưởng chừng đã đánh mất toàn bộ sự nghiệp vĩ đại trong sự bẽ bàng. (2) Hành động (A): Không chịu đầu hàng số phận, ông tiếp tục thành lập NeXT và Pixar, kiên định với triết lý sáng tạo khác biệt rồi quay trở lại cứu vãn Apple trên bờ vực phá sản. (3) Kết quả (R): Những sản phẩm đột phá như iPhone, iPad đã làm thay đổi hoàn toàn diện mạo công nghệ thế giới, khẳng định bản lĩnh của một huyền thoại dám nghĩ khác.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 61,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Các y bác sĩ tuyến đầu chống dịch Covid-19 - Sự hy sinh thầm lặng vì sinh mệnh nhân dân",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Các y bác sĩ tuyến đầu chống dịch Covid-19] cho chủ đề: 'Sự hy sinh thầm lặng vì sinh mệnh nhân dân'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "y bác sĩ",
      "tuyến đầu",
      "dịch bệnh",
      "hy sinh"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Các y bác sĩ tuyến đầu chống dịch Covid-19] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Trong những ngày đại dịch bùng phát khốc liệt nhất, hệ thống y tế đứng trước bờ vực quá tải với hàng ngàn ca bệnh nặng nguy kịch. (2) Hành động (A): Hàng ngàn y bác sĩ đã gác lại hạnh phúc riêng tư, khoác lên mình bộ đồ bảo hộ ngột ngạt suốt ngày đêm để giành giật từng hơi thở cho bệnh nhân trong phòng cấp cứu. (3) Kết quả (R): Những vết khẩu trang rớm máu và những bữa cơm vội bên hành lang bệnh viện của họ là tượng đài cao đẹp về sự hy sinh quên mình của những thiên thần áo trắng.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 62,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Cô giáo Đỗ Thị Quyên - Lòng trung thực và dũng cảm bảo vệ lẽ phải",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Cô giáo Đỗ Thị Quyên] cho chủ đề: 'Lòng trung thực và dũng cảm bảo vệ lẽ phải'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Đỗ Thị Quyên",
      "gian lận",
      "trung thực",
      "công bằng"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Cô giáo Đỗ Thị Quyên] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Đứng trước sự tiêu cực và những hành vi gian lận điểm thi tại kỳ thi tốt nghiệp, cô giáo Đỗ Thị Quyên đã phải đối diện với áp lực nặng nề và sự đe dọa từ nhiều phía. (2) Hành động (A): Bằng lương tâm của một người làm nghề giáo, cô đã kiên quyết dâng đơn tố cáo những hành vi gian lận để bảo vệ sự trong sạch và công bằng cho kỳ thi. (3) Kết quả (R): Hành động dũng cảm của cô đã giúp vạch trần đường dây tiêu cực, thắp lên niềm tin của dư luận vào sự nghiêm minh của nền giáo dục.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 63,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Thủ khoa Đại học Y Hà Nội Nguyễn Văn Kiên - Nghị lực vượt khó làm lại cuộc đời",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Thủ khoa Đại học Y Hà Nội Nguyễn Văn Kiên] cho chủ đề: 'Nghị lực vượt khó làm lại cuộc đời'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Nguyễn Văn Kiên",
      "phụ hồ",
      "thủ khoa",
      "nỗ lực"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Thủ khoa Đại học Y Hà Nội Nguyễn Văn Kiên] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Từng có giai đoạn chán nản bỏ học đi làm phụ hồ vất vả nơi công trường, cậu học trò nghèo Nguyễn Văn Kiên tưởng chừng đã khép lại tương lai trong những giọt mồ hôi cay đắng. (2) Hành động (A): Nhận thức được tầm quan trọng của con chữ, Kiên đã quyết tâm quay lại bàn học, tự mày mò ôn luyện ngày đêm để chinh phục kỳ thi đại học cam go. (3) Kết quả (R): Thành tích đỗ Thủ khoa khối B Đại học Y Hà Nội với điểm số 29.75 của Kiên đã trở thành câu chuyện truyền cảm hứng kỳ diệu về tinh thần không bao giờ là quá muộn để bắt đầu.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 64,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Cậu bé đánh giày trả lại chiếc ví nhặt được - Tính trung thực không tham lam của rơi",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Cậu bé đánh giày trả lại chiếc ví nhặt được] cho chủ đề: 'Tính trung thực không tham lam của rơi'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "đánh giày",
      "chiếc ví",
      "trung thực",
      "trả lại"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Cậu bé đánh giày trả lại chiếc ví nhặt được] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Hàng ngày phải mưu sinh vất vả từng đồng trên vỉa hè để kiếm sống, cậu bé đánh giày nghèo khó đã vô tình nhặt được một chiếc ví có chứa hàng chục triệu đồng cùng nhiều giấy tờ quan trọng. (2) Hành động (A): Không hề nảy sinh lòng tham lam, cậu bé đã chủ động đứng chờ suốt nhiều giờ đồng hồ tại nơi nhặt được rồi mang đến bàn giao cho công an để tìm trả người mất. (3) Kết quả (R): Hành động cao đẹp của em đã làm sáng bừng nhân cách trung thực, chứng minh rằng sự nghèo khó về vật chất không thể làm hoen ố sự giàu có của tâm hồn.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 65,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Tinh thần nhân dân hướng về miền Bắc sau bão Yagi - Đoàn kết và tình đồng bào ruột thịt",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Tinh thần nhân dân hướng về miền Bắc sau bão Yagi] cho chủ đề: 'Đoàn kết và tình đồng bào ruột thịt'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "bão Yagi",
      "cứu trợ",
      "đồng bào",
      "đoàn kết"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Tinh thần nhân dân hướng về miền Bắc sau bão Yagi] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Cơn bão số 3 (Yagi) quét qua đã để lại sự tàn phá khủng khiếp, nhấn chìm nhiều bản làng và đẩy đồng bào miền Bắc vào cảnh tang thương, cô lập. (2) Hành động (A): Hàng triệu người dân từ khắp miền Trung và miền Nam đã ngày đêm gói bánh chưng, quyên góp tiền bạc, tự lái xe vượt sạt lở chi viện lương thực cho vùng lũ lụt. (3) Kết quả (R): Hàng ngàn chuyến xe nối đuôi nhau ra Bắc là minh chứng hùng hồn cho truyền thống 'lá lành đùm lá rách' bất diệt của khối đại đoàn kết toàn dân tộc.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 66,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Họa sĩ Lê Duy Ứng - Ý chí phi thường và lòng yêu nước",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Họa sĩ Lê Duy Ứng] cho chủ đề: 'Ý chí phi thường và lòng yêu nước'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Lê Duy Ứng",
      "hỏng mắt",
      "vẽ Bác Hồ",
      "ý chí"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Họa sĩ Lê Duy Ứng] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Trong chiến dịch giải phóng Sài Gòn lịch sử năm 1975, người chiến sĩ trẻ Lê Duy Ứng đã bị trúng đạn pháo và vĩnh viễn hỏng cả hai con mắt ngay trên chiến trường. (2) Hành động (A): Giữa lằn ranh sinh tử nơi trận địa mù mịt khói súng, ông đã dùng chính dòng máu nóng chảy ra từ đôi mắt mình để vẽ nên bức chân dung Bác Hồ kính yêu. (3) Kết quả (R): Bức tranh bất hủ ấy đã trở thành biểu tượng thiêng liêng của lòng yêu nước và ý chí bất khuất của người chiến sĩ cách mạng Việt Nam.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 67,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Nhà văn Helen Keller - Nghị lực phi thường của người mù điếc",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Nhà văn Helen Keller] cho chủ đề: 'Nghị lực phi thường của người mù điếc'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Helen Keller",
      "mù điếc",
      "nghị lực",
      "vĩ đại"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Nhà văn Helen Keller] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Một cơn bạo bệnh quái ác thuở ấu thơ đã cướp đi vĩnh viễn cả thị giác lẫn thính giác của Helen Keller, đẩy cô bé vào một thế giới hoàn toàn câm lặng và tăm tối. (2) Hành động (A): Bằng sự kiên trì phi thường và sự dẫn dắt của cô giáo Anne Sullivan, Helen đã học đọc chữ nổi Braille, tốt nghiệp đại học danh giá và đi khắp thế giới diễn thuyết vì quyền lợi của người khuyết tật. (3) Kết quả (R): Cuộc đời huyền thoại của Helen Keller là minh chứng rực rỡ rằng: Điều đẹp nhất trên thế giới không thể nhìn thấy bằng mắt mà phải được cảm nhận bằng trái tim.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 68,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Cựu binh Mỹ John McCain - Tinh thần hòa giải và khép lại quá khứ",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Cựu binh Mỹ John McCain] cho chủ đề: 'Tinh thần hòa giải và khép lại quá khứ'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "John McCain",
      "hòa giải",
      "vết thương",
      "hòa bình"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Cựu binh Mỹ John McCain] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Từng là phi công Mỹ bị bắn rơi và giam giữ tại nhà tù Hỏa Lò trong chiến tranh, John McCain mang trong mình những vết thương sâu sắc cả về thể xác lẫn ký ức. (2) Hành động (A): Sau khi chiến tranh kết thúc, ông đã dũng cảm vượt qua sự thù hận, tích cực vận động bình thường hóa quan hệ ngoại giao và thúc đẩy tình hữu nghị giữa Việt Nam và Hoa Kỳ. (3) Kết quả (R): Nỗ lực của ông đã góp phần bắc cây cầu hòa bình giữa hai cựu thù, để lại bài học sâu sắc về sức mạnh của sự hòa giải và lòng vị tha.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 69,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Chàng trai chăn bò Y Krô - Khát vọng vượt khó học ngoại ngữ",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Chàng trai chăn bò Y Krô] cho chủ đề: 'Khát vọng vượt khó học ngoại ngữ'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Y Krô",
      "chăn bò",
      "tiếng Anh",
      "tự học"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Chàng trai chăn bò Y Krô] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Sinh ra trong một gia đình nghèo đông con ở Tây Nguyên, hàng ngày phải dắt bò lên rẫy, Y Krô tưởng chừng chỉ có thể gắn bó cả đời với nương ngô và đồi cỏ. (2) Hành động (A): Tận dụng từng phút giây rảnh rỗi trên lưng bò, Krô đã miệt mài tự học tiếng Anh qua chiếc điện thoại cũ bằng cách nhại lại các video trực tuyến và kiên trì giao tiếp với người nước ngoài. (3) Kết quả (R): Giờ đây, chàng trai Ê-đê đã trở thành một hướng dẫn viên du lịch thông thạo ngoại ngữ, trở thành tấm gương sáng về tinh thần tự học làm chủ số phận.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 70,
    "level": 3,
    "subType": "khoi_dan_chung",
    "category": "Khối Dẫn Chứng Thực Tế CAR (3 câu)",
    "topic": "Các bạn trẻ trong dự án 'Hà Nội Xanh' - Hành động thực tế vì môi trường đô thị",
    "prompt": "Hãy viết khối dẫn chứng ĐÚNG 3 CÂU nén chặt theo mô hình CAR (Bối cảnh Context -> Hành động Action -> Kết quả Result) về [Các bạn trẻ trong dự án 'Hà Nội Xanh'] cho chủ đề: 'Hành động thực tế vì môi trường đô thị'.",
    "targetLength": "Đúng 3 câu (~60 - 80 từ)",
    "keywords": [
      "Hà Nội Xanh",
      "vớt rác",
      "sông hồ",
      "môi trường"
    ],
    "formula": "Công thức CAR: Câu 1 (Context): Bối cảnh & Nghịch cảnh -> Câu 2 (Action): Hành động nỗ lực vượt bậc -> Câu 3 (Result): Kết quả & Bài học lan tỏa.",
    "similarHint": {
      "similarTopic": "Dẫn chứng CAR mẫu: Thầy giáo Nguyễn Ngọc Ký",
      "sampleSentence": "(1) Bối cảnh (C): Bị bại liệt cả hai tay từ thuở nhỏ, cậu bé Nguyễn Ngọc Ký tưởng chừng phải chấp nhận số phận nghiệt ngã trong bóng tối. (2) Hành động (A): Nhưng bằng khát khao con chữ mãnh liệt, thầy đã kiên trì tập viết bằng đôi bàn chân rớm máu ròng rã suốt nhiều năm để trở thành một Nhà giáo Ưu tú. (3) Kết quả (R): Tấm gương của thầy là ngọn lửa khẳng định: Ý chí con người hoàn toàn có thể chiến thắng mọi nghịch cảnh.",
      "thinkingSteps": [
        "Bước 1 (Context): Nêu rõ hoàn cảnh khó khăn hoặc thử thách mà nhân vật đối mặt trong câu đầu tiên.",
        "Bước 2 (Action): Dùng các động từ mạnh, miêu tả hành động vượt bậc, kiên cường của nhân vật ở câu thứ hai.",
        "Bước 3 (Result): Khẳng định thành quả họ đạt được và đúc kết một chân lý/bài học nhân văn ở câu thứ ba."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy chia câu chuyện của [Các bạn trẻ trong dự án 'Hà Nội Xanh'] thành đúng 3 câu: Bối cảnh ➔ Hành động ➔ Kết quả!"
    },
    "sampleAnswer": "(1) Bối cảnh (C): Những dòng sông và con kênh tại thủ đô Hà Nội từ lâu đã bị ô nhiễm nặng nề bởi rác thải sinh hoạt ứ đọng, bốc mùi hôi thối nồng nặc. (2) Hành động (A): Nhóm bạn trẻ 'Hà Nội Xanh' đã không ngần ngại khoác lên mình bộ đồ lội nước, ngâm mình dưới dòng nước đen ngòm hàng giờ để thu gom hàng tấn rác thải làm sạch dòng chảy. (3) Kết quả (R): Hành động dấn thân thầm lặng của các bạn trẻ đã trả lại dòng nước trong lành và đánh thức ý thức bảo vệ môi trường của hàng vạn cư dân đô thị.",
    "analysis": "💡 Lời thầy cô: Dẫn chứng này đạt điểm tối đa vì tuyệt đối không sa đà kể lể tiểu sử năm sinh quê quán, nén trọn vẹn sức nặng thuyết phục trong đúng 3 câu theo mô hình CAR chuẩn quốc tế.",
    "userRubric": [
      "Đủ đúng 3 câu theo mô hình CAR (Bối cảnh - Hành động - Kết quả)",
      "Nêu đúng họ tên nhân vật và sự việc xác thực có thật",
      "Có câu chốt đúc kết giá trị bài học lan tỏa"
    ]
  },
  {
    "id": 71,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Sự tự tin",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Sự tự tin'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "tự tin",
      "tự phụ",
      "kiêu ngạo",
      "thất bại"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Đức khiêm tốn (Khối Phản đề mẫu)",
      "sampleSentence": "Thế nhưng, khiêm tốn không đồng nghĩa với sự tự ti, nhút nhát hay hèn nhát không dám bộc lộ chính kiến. Biết hạ mình học hỏi là tốt, nhưng tự ti đánh mất niềm tin vào bản thân lại là tự tước đoạt đi cơ hội tỏa sáng của chính mình.",
      "thinkingSteps": [
        "Bước 1: Dùng liên từ chuyển hướng 'Tuy nhiên, cần phân định rạch ròi giữa... với...'",
        "Bước 2: Phân tích sự đối lập: Người có phẩm chất tốt vs Kẻ ngộ nhận thái quá.",
        "Bước 3: Câu chốt phê phán để làm nổi bật giá trị chân chính."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Sự tự tin' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Tuy nhiên, chúng ta cần phân định rạch ròi giữa sự tự tin chính đáng với thói tự phụ kiêu căng coi thường người khác. Người tự tin biết rõ năng lực của mình để phấn đấu, còn kẻ tự phụ lại huyễn hoặc về bản thân, từ chối lắng nghe đóng góp và sớm muộn sẽ chuốc lấy những thất bại ê chề. Phê phán thói kiêu căng chính là cách để bảo vệ sự tự tin chân chính luôn phát triển lành mạnh.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 72,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Lòng vị tha",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Lòng vị tha'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "vị tha",
      "nhu nhược",
      "dung túng",
      "cái ác"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Lòng khoan dung (Khối Phản đề mẫu)",
      "sampleSentence": "Bao dung cho lỗi lầm không đồng nghĩa với việc thỏa hiệp với cái xấu. Một xã hội văn minh phải biết trừng phạt nghiêm khắc những kẻ cố tình vi phạm để bảo vệ kỷ cương và bình yên cho nhân dân.",
      "thinkingSteps": [
        "Bước 1: Khẳng định vị tha không phải là sự nhu nhược hay dung túng cái ác.",
        "Bước 2: Phân biệt: Tha thứ cho người hối cải vs Bao che cho kẻ ngoan cố.",
        "Bước 3: Dùng hình ảnh 'trái tim bao dung đi liền với khối óc tỉnh táo'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Lòng vị tha' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Thế nhưng, vị tha không bao giờ là sự nhu nhược dễ dãi hay dung túng cho cái ác tiếp tục lộng hành. Tha thứ cho người biết ăn năn hối cải là nhân đạo, nhưng tha thứ mù quáng cho kẻ ngoan cố coi thường pháp luật lại là sự tiếp tay cho tội ác. Chúng ta cần một trái tim bao dung nhưng cũng cần một khối óc tỉnh táo để ranh giới của sự tha thứ không bị lợi dụng.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 73,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Tính kiên trì",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Tính kiên trì'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "kiên trì",
      "cố chấp",
      "bảo thủ",
      "mù quáng"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Bản lĩnh (Khối Phản đề mẫu)",
      "sampleSentence": "Bản lĩnh không phải là thói liều mạng bừa bãi hay bất chấp tính mạng vô ích. Bản lĩnh thực sự luôn đi kèm với sự tỉnh táo và trách nhiệm trước xã hội.",
      "thinkingSteps": [
        "Bước 1: Phân biệt kiên trì với sự cố chấp mù quáng.",
        "Bước 2: Nêu hình ảnh người thông minh biết linh hoạt thích ứng vs kẻ đâm đầu vào ngõ cụt.",
        "Bước 3: Khẳng định phê phán bảo thủ giúp kiên trì đạt hiệu quả thực chất."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Tính kiên trì' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Dẫu vậy, kiên trì hoàn toàn khác biệt với sự cố chấp mù quáng bám lấy một mục tiêu sai lầm hay một phương pháp đã lỗi thời. Người kiên trì thông minh là người biết linh hoạt điều chỉnh chiến lược khi hoàn cảnh đổi thay, chứ không phải người cứng nhắc đâm đầu vào ngõ cụt. Phê phán thói bảo thủ chính là tiền đề để lòng kiên trì dẫn lối con người đến với thành công thực chất.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 74,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Lòng dũng cảm",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Lòng dũng cảm'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "dũng cảm",
      "liều lĩnh",
      "bốc đồng",
      "pháp luật"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Sự nhiệt tình (Khối Phản đề mẫu)",
      "sampleSentence": "Nhiệt tình là đức tính quý báu, nhưng nhiệt tình cộng với sự thiếu hiểu biết đôi khi lại biến thành sự phá hoại. Hành động vì người khác luôn cần có kiến thức làm bệ đỡ vững vàng.",
      "thinkingSteps": [
        "Bước 1: Phân định dũng cảm với sự liều lĩnh bốc đồng.",
        "Bước 2: Đưa ra ví dụ thực tế: Dũng cảm có kỹ năng vs Liều mạng dại dột.",
        "Bước 3: Chốt lại: Lòng dũng cảm phải được dẫn đường bởi sự khôn ngoan."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Lòng dũng cảm' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Song, chúng ta cần phân biệt rõ giữa lòng dũng cảm bảo vệ chính nghĩa với sự liều lĩnh bốc đồng, bất chấp pháp luật và tính mạng của bản thân. Dũng cảm cứu người khi có kỹ năng là điều đáng khen ngợi, nhưng lao vào chỗ hiểm nguy khi không có phương tiện hỗ trợ chỉ là sự hy sinh vô ích và dại dột. Lòng dũng cảm chân chính phải luôn được dẫn đường bởi sự khôn ngoan và hiểu biết sâu sắc.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 75,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Tinh thần tự lập",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Tinh thần tự lập'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "tự lập",
      "cô lập",
      "xa lánh",
      "hợp tác"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Tính tự chủ (Khối Phản đề mẫu)",
      "sampleSentence": "Tự chủ không phải là thái độ độc đoán, khăng khăng làm theo ý mình mà không thèm quan tâm đến cảm xúc và ý kiến của những người xung quanh.",
      "thinkingSteps": [
        "Bước 1: Bác bỏ quan điểm tự lập là sống cô lập, xa lánh tập thể.",
        "Bước 2: Nêu sự cân bằng: Vừa tự chủ vừa biết hợp tác cùng đồng đội.",
        "Bước 3: Cảnh báo tự lập cực đoan sẽ biến con người thành 'ốc đảo cô đơn'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Tinh thần tự lập' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Mặc dù vậy, sống tự lập không có nghĩa là tự cô lập mình khỏi tập thể, khước từ sự giúp đỡ chân thành hay chối bỏ tinh thần làm việc nhóm. Một con người chỉ có thể phát triển toàn diện khi vừa có năng lực tự chủ trên đôi chân mình, vừa biết mở lòng hợp tác và cộng hưởng sức mạnh cùng đồng đội. Tự lập cực đoan sẽ biến con người thành những ốc đảo cô đơn và nghèo nàn giữa đại dương xã hội.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 76,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Nuôi dưỡng ước mơ",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Nuôi dưỡng ước mơ'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "ước mơ",
      "viển vông",
      "ảo tưởng",
      "thực tế"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Đam mê (Khối Phản đề mẫu)",
      "sampleSentence": "Theo đuổi đam mê là tốt, nhưng nếu đam mê mù quáng vào những điều độc hại hay không phù hợp với năng lực thì chỉ mang lại sự lãng phí thời gian và thất bại.",
      "thinkingSteps": [
        "Bước 1: Phân biệt ước mơ với ảo tưởng viển vông xa rời thực tế.",
        "Bước 2: Dùng hình ảnh so sánh 'lâu đài xây trên cát' nếu thiếu hành động.",
        "Bước 3: Chốt câu đắt giá: 'Ước mơ lớn nhưng đôi chân phải chạm vững trên đất hiện thực'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Nuôi dưỡng ước mơ' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Tuy nhiên, nuôi dưỡng ước mơ hoàn toàn khác với việc chìm đắm trong những ảo tưởng viển vông xa rời thực tế mà thiếu đi hành động cụ thể. Ước mơ mà không đi kèm với mồ hôi khổ luyện thì mãi mãi chỉ là những lâu đài xây trên cát dễ dàng sụp đổ trước một cơn gió thoảng. Chúng ta cần những người trẻ dám ước mơ lớn, nhưng đôi chân phải luôn chạm vững chắc trên mảnh đất hiện thực.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 77,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Lòng yêu nước",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Lòng yêu nước'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "yêu nước",
      "cực đoan",
      "bài ngoại",
      "văn minh"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Lòng tự hào dân tộc (Khối Phản đề mẫu)",
      "sampleSentence": "Tự hào về lịch sử hào hùng của cha ông là cần thiết, nhưng ngủ quên trên chiến thắng và tự mãn không chịu học hỏi cái mới của nhân loại sẽ khiến đất nước bị tụt hậu.",
      "thinkingSteps": [
        "Bước 1: Khẳng định yêu nước phải tỉnh táo, bài trừ cực đoan và bài ngoại mù quáng.",
        "Bước 2: Nêu rõ: Yêu nước không phải kích động hận thù mà là xây dựng đất nước.",
        "Bước 3: Cảnh báo yêu nước mù quáng làm tổn hại thể diện quốc gia."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Lòng yêu nước' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Đáng lưu ý, lòng yêu nước chân chính phải luôn tỉnh táo và văn minh, kiên quyết bài trừ chủ nghĩa dân tộc cực đoan hay thói a dua bài ngoại mù quáng. Yêu nước không phải là kích động hận thù hay đập phá tài sản nhân danh bảo vệ chủ quyền, mà là ra sức học tập, gìn giữ hòa bình và xây dựng đất nước giàu mạnh. Một tình yêu nước mù quáng và thiếu hiểu biết đôi khi lại gây tổn hại nghiêm trọng đến hình ảnh quốc gia trên trường quốc tế.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 78,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Sự sẻ chia từ thiện",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Sự sẻ chia từ thiện'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "sẻ chia",
      "từ thiện",
      "đánh bóng",
      "phô trương"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Sự giúp đỡ (Khối Phản đề mẫu)",
      "sampleSentence": "Giúp đỡ người khác phải giúp chiếc cần câu chứ không chỉ cho con cá; giúp đỡ thiếu khoa học sẽ vô tình tạo ra thói quen lười biếng và ỷ lại.",
      "thinkingSteps": [
        "Bước 1: Bác bỏ việc làm từ thiện để đánh bóng tên tuổi hoặc phô trương kẻ cả.",
        "Bước 2: Lên án hành vi chụp ảnh phản cảm hoặc bớt xén tiền cứu trợ.",
        "Bước 3: Đưa câu tục ngữ đắt giá: 'Của cho không bằng cách cho'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Sự sẻ chia từ thiện' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Song, làm từ thiện và sẻ chia cần xuất phát từ tình thương chân thành chứ không phải thái độ ban phát kẻ cả hay mượn danh nghĩa giúp người để đánh bóng tên tuổi. Những hành động phô trương chụp ảnh phản cảm bên người nghèo hay bớt xén tiền cứu trợ là sự xúc phạm ghê gớm đến nhân phẩm tha nhân. Từ thiện đúng nghĩa là sự trao đi trong lặng lẽ và tôn trọng, bởi 'của cho không bằng cách cho'.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 79,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Lòng trung thực",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Lòng trung thực'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "trung thực",
      "thô lỗ",
      "vụng về",
      "tổn thương"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Tính thẳng thắn (Khối Phản đề mẫu)",
      "sampleSentence": "Thẳng thắn góp ý khác hoàn toàn với thói xấc xược, mượn cớ nói thẳng để xúc phạm danh dự và làm nhục bạn bè trước đám đông.",
      "thinkingSteps": [
        "Bước 1: Phân biệt trung thực với sự thô lỗ, vụng về trong giao tiếp.",
        "Bước 2: Cảnh báo sự thật trần trụi thiếu thấu cảm gây tổn thương ghê gớm.",
        "Bước 3: Khẳng định trung thực phải đi liền với sự khéo léo và lòng trắc ẩn."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Lòng trung thực' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Dẫu vậy, trung thực nói thật không đồng nghĩa với sự thô lỗ, vụng về trong giao tiếp khiến người khác phải chịu tổn thương không đáng có. Một sự thật trần trụi thiếu đi sự tinh tế và thấu cảm đôi khi có sức tàn phá dữ dội hơn cả một lời nói dối. Trung thực chân chính phải luôn đi đôi với sự khéo léo và lòng trắc ẩn, biết nói sự thật đúng lúc, đúng chỗ và với mục đích xây dựng.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 80,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Lối sống tiết kiệm",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Lối sống tiết kiệm'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "tiết kiệm",
      "keo kiệt",
      "bủn xỉn",
      "bần tiện"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Chi tiêu thông minh (Khối Phản đề mẫu)",
      "sampleSentence": "Đầu tư cho việc học hành và sức khỏe không bao giờ bị coi là lãng phí; cắt giảm chi phí cho tri thức là cách tiết kiệm dại dột nhất.",
      "thinkingSteps": [
        "Bước 1: Phân định tiết kiệm với thói bủn xỉn, keo kiệt bần tiện.",
        "Bước 2: Đối lập: Tiết kiệm dùng tiền thông minh vs Keo kiệt làm nô lệ đồng tiền.",
        "Bước 3: Khẳng định người khôn ngoan sẵn sàng đầu tư cho tri thức."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Lối sống tiết kiệm' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Thế nhưng, sống tiết kiệm hoàn toàn khác biệt với thói keo kiệt, bủn xỉn đến mức bóp nghẹt các nhu cầu sinh hoạt tối thiểu và tước đoạt cơ hội phát triển của bản thân. Tiết kiệm là sử dụng của cải một cách thông minh, không phung phí; còn keo kiệt là tôn thờ đồng tiền mù quáng, biến con người thành nô lệ của vật chất. Người khôn ngoan biết chi tiêu đúng nơi đúng lúc, sẵn sàng đầu tư cho tri thức và hào phóng sẻ chia với cộng đồng.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 81,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Tinh thần phản biện",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Tinh thần phản biện'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "phản biện",
      "bất mãn",
      "công kích",
      "xây dựng"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Tự do ngôn luận (Khối Phản đề mẫu)",
      "sampleSentence": "Tự do ngôn luận không phải là quyền được tung tin bịa đặt hay thóa mạ người khác; tự do luôn phải nằm trong khuôn khổ của đạo đức và pháp luật.",
      "thinkingSteps": [
        "Bước 1: Phân biệt phản biện khoa học với thói bất mãn, săm soi bắt bẻ.",
        "Bước 2: Đối chiếu: Phản biện dựa trên lý lẽ xây dựng vs Công kích phá hoại.",
        "Bước 3: Kêu gọi xây dựng văn hóa phản biện văn minh."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Tinh thần phản biện' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Tuy nhiên, tư duy phản biện khoa học khác xa với thói bất mãn, săm soi bắt bẻ tiêu cực nhằm mục đích hạ bệ và công kích cá nhân người khác. Phản biện chân chính dựa trên lý lẽ khách quan và tinh thần xây dựng để cùng tìm ra chân lý; còn thói công kích chỉ nuôi dưỡng lòng hằn học và phá hoại sự đoàn kết tập thể. Chúng ta cần cổ vũ tinh thần phản biện văn minh nhưng phải kiên quyết loại bỏ văn hóa công kích độc hại.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 82,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Lòng bao dung",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Lòng bao dung'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "bao dung",
      "thỏa hiệp",
      "tha thứ",
      "kỷ cương"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Lòng nhân đạo (Khối Phản đề mẫu)",
      "sampleSentence": "Nhân đạo với tội phạm mà quên mất nỗi đau của nạn nhân là sự nhân đạo què quặt; công lý phải được thực thi nghiêm minh để giữ gìn trật tự xã hội.",
      "thinkingSteps": [
        "Bước 1: Khẳng định bao dung không phải là thỏa hiệp vô nguyên tắc.",
        "Bước 2: Nhấn mạnh tha thứ để sửa đổi chứ không xóa bỏ trách nhiệm pháp luật.",
        "Bước 3: Dùng hình ảnh 'dung túng vô nguyên tắc nuôi dưỡng cái xấu nảy mầm'."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Lòng bao dung' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Mặc dù vậy, bao dung cho lỗi lầm không thể biến thành sự dễ dãi thỏa hiệp với những hành vi vi phạm pháp luật làm tổn hại đến cộng đồng. Tha thứ là để người sai có cơ hội sửa đổi, nhưng không có nghĩa là xóa bỏ hoàn toàn trách nhiệm và kỷ cương xã hội. Một sự dung túng vô nguyên tắc sẽ biến lòng tốt thành mảnh đất màu mỡ dung dưỡng cho cái xấu tiếp tục nảy mầm.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 83,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Sự tự do cá nhân",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Sự tự do cá nhân'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "tự do",
      "buông thả",
      "pháp luật",
      "trách nhiệm"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Thể hiện cá tính (Khối Phản đề mẫu)",
      "sampleSentence": "Thể hiện cá tính không phải là lối ăn mặc hay hành xử quái đản, lập dị nhằm gây sốc; cá tính thực sự toát ra từ trí tuệ và phẩm cách bên trong.",
      "thinkingSteps": [
        "Bước 1: Bác bỏ ngộ nhận tự do là buông thả tùy tiện thích gì làm nấy.",
        "Bước 2: Nêu nguyên tắc: Tự do dừng lại ở lằn ranh quyền lợi người khác.",
        "Bước 3: Cảnh báo tự do vô chính phủ là ngụy biện cho thói ích kỷ."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Sự tự do cá nhân' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Đáng bàn hơn, tự do cá nhân không bao giờ đồng nghĩa với lối sống buông thả tùy tiện, thích gì làm nấy bất chấp kỷ cương và quyền lợi của người khác. Tự do của mỗi cá nhân chỉ thực sự được tôn trọng khi nó dừng lại ở lằn ranh giới hạn tự do của người xung quanh và khuôn khổ pháp luật. Một thứ tự do vô chính phủ thiếu trách nhiệm chỉ là sự ngụy biện cho thói ích kỷ và sẽ sớm đẩy xã hội vào vòng hỗn loạn.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 84,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Tinh thần thi đua",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Tinh thần thi đua'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "thi đua",
      "đố kỵ",
      "ganh ghét",
      "công bằng"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Khát khao chiến thắng (Khối Phản đề mẫu)",
      "sampleSentence": "Chiến thắng bằng mọi thủ đoạn gian dối chỉ mang lại sự nhục nhã; một thất bại trung thực và cao thượng vẫn đáng trân trọng hơn vạn lần.",
      "thinkingSteps": [
        "Bước 1: Phân biệt thi đua lành mạnh với thói đố kỵ, ganh ghét.",
        "Bước 2: Đối lập: Lấy thành công bạn làm động lực vs Nuôi sự cay cú hạ bệ bạn.",
        "Bước 3: Cảnh báo thi đua không lành mạnh phá hủy tình bạn và môi trường học tập."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Tinh thần thi đua' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Dẫu vậy, thi đua tiến bộ phải luôn dựa trên tinh thần học hỏi lành mạnh, công bằng chứ không phải là thói ganh ghét, đố kỵ tìm cách dìm người khác xuống để mình ngoi lên. Người thi đua chân chính luôn lấy thành công của bạn bè làm động lực hoàn thiện bản thân, còn kẻ đố kỵ chỉ nuôi dưỡng sự cay cú và tự gặm nhấm tâm hồn mình. Thi đua không lành mạnh sẽ hủy hoại tình bạn và biến môi trường học đường thành chiến trường ngột ngạt.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 85,
    "level": 3,
    "subType": "khoi_phan_de",
    "category": "Khối Phản Đề & Soi Chiếu Đa Chiều",
    "topic": "Phản đề về Sống thật với chính mình",
    "prompt": "Hãy viết một khối Phản đề & Lật ngược vấn đề từ 2 đến 3 câu (~50 - 70 từ) chỉ ra ranh giới mong manh giữa đúng và sai, phê phán hiện tượng ngộ nhận/lệch lạc của: 'Phản đề về Sống thật với chính mình'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "sống thật",
      "thô lỗ",
      "bản năng",
      "chuẩn mực"
    ],
    "formula": "Khuôn mẫu phản đề: Câu 1: 'Tuy nhiên / Thế nhưng, [Đề cao X] không đồng nghĩa với [Hành vi xấu/Thái quá]' -> Câu 2: Phân tích đối lập (người tốt vs kẻ ngộ nhận) -> Câu 3: Khẳng định ranh giới đúng đắn.",
    "similarHint": {
      "similarTopic": "Phản đề về Tự nhiên trong giao tiếp (Khối Phản đề mẫu)",
      "sampleSentence": "Tự nhiên không phải là tùy tiện vô duyên; sự tế nhị và lịch thiệp chính là tấm gương phản chiếu một nền tảng giáo dục gia đình tốt đẹp.",
      "thinkingSteps": [
        "Bước 1: Bác bỏ việc lấy 'sống thật' làm bình phong cho sự thô lỗ, bản năng.",
        "Bước 2: Phân định: Chân thật trong tâm hồn vs Buông tuồng trong phát ngôn.",
        "Bước 3: Đưa ra định nghĩa đúng: Sống thật có văn hóa là hòa hợp cá tính với đạo đức."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy xác định ranh giới mặt tích cực của 'Phản đề về Sống thật với chính mình' có thể bị biến chất thành điều xấu gì nếu làm quá đà, rồi viết khối phản đề!"
    },
    "sampleAnswer": "Cuối cùng, sống thật với chính mình không thể lấy làm tấm bình phong che đậy cho lối hành xử thô lỗ, bản năng và thiếu tôn trọng các chuẩn mực văn minh cộng đồng. Chân thật là sự trong sạch trong tâm hồn chứ không phải sự buông tuồng trong phát ngôn và xúc phạm người khác. Sống thật có văn hóa là biết hòa hợp cá tính độc đáo của bản thân với các giá trị đạo đức chung của xã hội.",
    "analysis": "💡 Lời thầy cô: Đây là khối câu quyết định bài văn của bạn có chạm tới điểm 8.5+ hay không. Giám khảo chấm thi sẽ đánh giá rất cao thí sinh có tư duy phản biện sắc sảo, không viết văn một chiều màu hồng.",
    "userRubric": [
      "Có từ nối phản đề rõ ràng (Tuy nhiên, Thế nhưng, Song...)",
      "Chỉ ra được ranh giới biến chất giữa mặt tích cực và tiêu cực",
      "Có câu phê phán hiện tượng lệch lạc một cách thuyết phục"
    ]
  },
  {
    "id": 86,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Lòng kiên trì trong học tập",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Lòng kiên trì trong học tập'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "lớp 9",
      "bài toán khó",
      "kiên trì",
      "thi vào 10"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Lòng kiên trì trong học tập', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Đứng trước ngưỡng cửa kỳ thi vào lớp 10 đầy thử thách, bài học về lòng kiên trì nhắc nhở một học sinh tuổi 15 như tôi bắt đầu từ việc kiên quyết giải nốt những bài toán khó tối nay, không đầu hàng trước những môn học mình còn yếu. Tôi tự hứa sẽ gạt bỏ thói quen lướt điện thoại vô bổ, biến từng giờ tự học mỗi đêm thành những viên gạch vững chắc xây đắp cho ước mơ bước vào ngôi trường cấp ba mong muốn.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 87,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Tính trung thực trong thi cử",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Tính trung thực trong thi cử'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "trung thực",
      "quay cóp",
      "học thật",
      "danh dự"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Tính trung thực trong thi cử', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Nhận thức sâu sắc rằng điểm số giả dối chỉ là chiếc mặt nạ che đậy sự rỗng tuếch, tôi tự rèn cho mình thói quen học thật, thi thật trong từng bài kiểm tra trên lớp. Dù phải đối mặt với áp lực thành tích, tôi kiên quyết nói không với hành vi quay cóp tài liệu, bởi giữ gìn danh dự và lòng tự trọng của một người học sinh còn đáng giá hơn ngàn lần một điểm số mười không thực chất.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 88,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Bảo vệ môi trường học đường",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Bảo vệ môi trường học đường'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "rác thải nhựa",
      "bình nước",
      "nhặt rác",
      "lớp học"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Bảo vệ môi trường học đường', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Bảo vệ môi trường không phải là điều gì xa xôi ngoài xã hội, mà bắt đầu từ chính ý thức gìn giữ vệ sinh nơi lớp học thân thương hàng ngày. Là một học sinh lớp 9, tôi sẽ chủ động mang theo bình nước cá nhân thay vì mua chai nhựa dùng một lần, và tự giác cúi xuống nhặt sạch rác dưới gầm bàn mỗi giờ tan trường để cùng thầy cô lan tỏa lối sống xanh.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 89,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Văn hóa ứng xử trên mạng xã hội",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Văn hóa ứng xử trên mạng xã hội'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "bình luận",
      "suy ngẫm",
      "tử tế",
      "bàn phím"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Văn hóa ứng xử trên mạng xã hội', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Là một cư dân số trẻ tuổi, tôi tự rèn cho mình nguyên tắc dừng lại 3 giây suy ngẫm trước khi gõ phím, không bao giờ chia sẻ những thông tin giật gân chưa được kiểm chứng hay hùa theo những lời thóa mạ ẩn danh. Tôi chọn dùng mạng xã hội như một công cụ học tập hữu ích và là nơi lan tỏa những thông điệp tử tế, tích cực đến bạn bè xung quanh.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 90,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Lòng biết ơn cha mẹ và thầy cô",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Lòng biết ơn cha mẹ và thầy cô'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "phụ giúp",
      "bài giảng",
      "tri ân",
      "kết quả"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Lòng biết ơn cha mẹ và thầy cô', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Bài học về lòng biết ơn giục giã tôi thể hiện bằng những hành động cụ thể mỗi ngày: chủ động phụ giúp mẹ việc nhà sau giờ tan trường, chăm chú lắng nghe từng bài giảng của thầy cô và nỗ lực đạt kết quả thi chuyển cấp thật tốt. Nụ cười rạng rỡ của cha mẹ và niềm tự hào của thầy cô giáo chính là món quà tri ân vô giá nhất mà tôi quyết tâm dâng tặng.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 91,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Kiểm soát cảm xúc và sự nóng giận",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Kiểm soát cảm xúc và sự nóng giận'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "hít thở sâu",
      "bình tĩnh",
      "lắng nghe",
      "xin lỗi"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Kiểm soát cảm xúc và sự nóng giận', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Để tránh những mâu thuẫn đáng tiếc làm tổn thương bạn bè, tôi học cách hít thở sâu để làm chủ cơn giận dữ, biết lắng nghe đa chiều trước khi phản ứng gay gắt. Khi nhận ra mình có lỗi, tôi sẽ dũng cảm đối diện và nói lời xin lỗi chân thành, bởi sự bình tĩnh và lòng vị tha mới là biểu hiện cao nhất của sự trưởng thành.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 92,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Thói quen đọc sách mỗi ngày",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Thói quen đọc sách mỗi ngày'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "trang sách",
      "đọc sách",
      "tích lũy",
      "thay thế"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Thói quen đọc sách mỗi ngày', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Nhận thức rõ sách là người bạn đường vô giá mở rộng chân trời tri thức, tôi đặt mục tiêu đọc ít nhất 15 trang sách mỗi ngày trước khi đi ngủ, thay thế cho thói quen lướt mạng xã hội vô thức. Từng trang sách nghiền ngẫm hôm nay sẽ là nguồn phù sa màu mỡ bồi đắp vốn sống và làm giàu thêm tâm hồn tôi.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 93,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Vượt qua áp lực đồng trang lứa",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Vượt qua áp lực đồng trang lứa'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "tiến bộ",
      "thế mạnh",
      "kiên định",
      "bản thân"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Vượt qua áp lực đồng trang lứa', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Thay vì mải mê tự ti khi so sánh điểm số của mình với những bạn học xuất sắc xung quanh, tôi học cách tập trung vào sự tiến bộ của chính bản thân mình qua từng ngày. Tôi kiên định phát huy những thế mạnh riêng, biến sự ngưỡng mộ bạn bè thành động lực tích cực để nỗ lực vươn lên mà không đánh mất đi màu sắc độc bản của chính mình.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 94,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Tinh thần sẻ chia với bạn bè khó khăn",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Tinh thần sẻ chia với bạn bè khó khăn'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "giảng bài",
      "sẻ chia",
      "sách cũ",
      "ấm áp"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Tinh thần sẻ chia với bạn bè khó khăn', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Tinh thần tương thân tương ái trong tôi bắt đầu từ việc kiên nhẫn giảng lại một công thức toán khó cho bạn ngồi cùng bàn, và sẵn lòng quyên góp những cuốn sách giáo khoa cũ cho các bạn học sinh nghèo vùng lũ lụt. Cho đi yêu thương là nhận lại niềm hạnh phúc, và tôi tin những việc làm nhỏ bé ấy sẽ làm cho lớp học thêm ấm áp nghĩa tình.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 95,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Tính tự lập trong cuộc sống",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Tính tự lập trong cuộc sống'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "báo thức",
      "tự giác",
      "kế hoạch",
      "tự lập"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Tính tự lập trong cuộc sống', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Để chuẩn bị hành trang bước vào ngôi trường cấp ba tự chủ, tôi bắt đầu rèn tính tự lập từ việc tự đặt chuông báo thức mỗi sáng, tự lên kế hoạch ôn tập cho kỳ thi vào 10 và tự giặt giũ đồ dùng cá nhân mà không cần cha mẹ nhắc nhở. Tự lập trong sinh hoạt hàng ngày chính là bước đệm vững chắc giúp tôi tự tin làm chủ tương lai.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 96,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Lòng dũng cảm nhận lỗi và sửa sai",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Lòng dũng cảm nhận lỗi và sửa sai'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "nhận lỗi",
      "dũng cảm",
      "sửa sai",
      "kiểm tra"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Lòng dũng cảm nhận lỗi và sửa sai', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Lòng dũng cảm với một học sinh như tôi lúc này là dám thẳng thắn nhận khuyết điểm trước thầy cô và cha mẹ khi lỡ lơ là bài vở, không tìm cách ngụy biện hay đổ lỗi cho hoàn cảnh. Tôi sẽ quyết tâm sửa sai bằng hành động cụ thể: thức khuya bù lại phần kiến thức bị hổng và nâng cao điểm số trong bài thi khảo sát sắp tới.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 97,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Bản lĩnh từ chối rủ rê tiêu cực",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Bản lĩnh từ chối rủ rê tiêu cực'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "nói không",
      "bản lĩnh",
      "tỉnh táo",
      "tương lai"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Bản lĩnh từ chối rủ rê tiêu cực', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Đứng trước những lời rủ rê trốn học chơi game hay tham gia vào các nhóm hội bạo lực trên mạng, tôi rèn cho mình bản lĩnh dũng cảm nói lời từ chối dứt khoát. Giữ cho mình một tâm trí tỉnh táo và một lối sống lành mạnh chính là cách tốt nhất để bảo vệ nhân cách và không phụ lòng kỳ vọng của gia đình.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 98,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Tình yêu thương động vật và thiên nhiên",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Tình yêu thương động vật và thiên nhiên'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "chăm sóc",
      "cây xanh",
      "nâng niu",
      "trân trọng"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Tình yêu thương động vật và thiên nhiên', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Tình yêu cuộc sống được tôi nhen nhóm từ việc chăm sóc chú mèo nhỏ trong nhà, cùng cha mẹ tưới mát những chậu cây xanh nơi ban công và kiên quyết không xua đuổi hay ngược đãi động vật nhỏ. Trân trọng từng mầm xanh và từng sinh mệnh quanh mình giúp tôi nuôi dưỡng một trái tim giàu trắc ẩn và biết sống hòa hợp với thiên nhiên.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 99,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Ý thức chấp hành luật giao thông",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Ý thức chấp hành luật giao thông'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "mũ bảo hiểm",
      "an toàn",
      "đèn đỏ",
      "chấp hành"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Ý thức chấp hành luật giao thông', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Bảo vệ an toàn tính mạng cho chính mình và cộng đồng, tôi luôn tự giác cài quai mũ bảo hiểm đạt chuẩn khi ngồi trên xe máy, tuyệt đối không dàn hàng ba hàng bốn trên đường đến trường và nghiêm túc dừng xe khi đèn đỏ. Ý thức giao thông văn minh phải được tôi luyện thành thói quen tự giác mỗi khi bước chân ra đường.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  },
  {
    "id": 100,
    "level": 3,
    "subType": "khoi_bai_hoc",
    "category": "Khối Bài Học Nhận Thức & Hành Động Tuổi 15",
    "topic": "Bài học về Khát vọng cống hiến cho quê hương",
    "prompt": "Hãy viết một khối Bài học nhận thức & Hành động cụ thể từ 2 đến 3 câu (~50 - 70 từ) của bản thân học sinh lớp 9 chuẩn bị thi vào 10 cho chủ đề: 'Bài học về Khát vọng cống hiến cho quê hương'.",
    "targetLength": "2 - 3 câu (~50 - 70 từ)",
    "keywords": [
      "nỗ lực",
      "thi đỗ",
      "cống hiến",
      "ước mơ"
    ],
    "formula": "Quy tắc tuổi 15: Câu 1: Nhận thức gắn với bối cảnh thi vào 10 ('Đứng trước ngưỡng cửa thi vào lớp 10...') -> Câu 2: Một hành động thiết thực ở bàn học/gia đình -> Câu 3: Dám từ bỏ một thói quen xấu/cám dỗ.",
    "similarHint": {
      "similarTopic": "Bài học hành động mẫu: Tính tự lập tuổi 15",
      "sampleSentence": "Đứng trước kỳ thi chuyển cấp đầy thử thách, bài học về tính tự lập nhắc nhở một học sinh lớp 9 như tôi bắt đầu từ việc tự giác lên thời gian biểu ôn tập mỗi tối mà không cần cha mẹ thúc giục. Tôi quyết tâm từ bỏ chiếc điện thoại thông minh sau 9 giờ tối để dồn toàn bộ tâm trí cho mục tiêu bước chân vào ngôi trường cấp ba mơ ước.",
      "thinkingSteps": [
        "Bước 1: Mở đầu bằng 'Đứng trước ngưỡng cửa thi vào lớp 10...' để tạo bối cảnh chân thật.",
        "Bước 2: Nêu 1 hành động học tập hoặc sinh hoạt tự giác cụ thể (không viết chung chung 'học giỏi').",
        "Bước 3: Nêu 1 việc dũng cảm từ bỏ cám dỗ (bỏ điện thoại, không quay cóp, không trì hoãn)."
      ],
      "transferPrompt": "👉 Giờ đến lượt bạn: Hãy viết 2-3 câu bài học hành động cho 'Bài học về Khát vọng cống hiến cho quê hương', tuyệt đối không viết 'em xin hứa'!"
    },
    "sampleAnswer": "Mang trong tim ngọn lửa khát vọng của tuổi trẻ thế hệ mới, tôi tự nhủ phải nỗ lực học tập và rèn luyện hết mình để chinh phục cánh cổng trường cấp ba mơ ước. Tích lũy tri thức và đạo đức hôm nay chính là sự chuẩn bị chu đáo nhất để mai sau tôi có thể đem đôi bàn tay và khối óc của mình cống hiến xây dựng quê hương ngày càng giàu đẹp.",
    "analysis": "💡 Lời thầy cô: Khối bài học này chạm đến trái tim người chấm vì nó toát lên sự chân thành, cụ thể của một cô cậu học trò tuổi 15 đang căng mình ôn thi vào 10, hoàn toàn thoát khỏi căn bệnh hô khẩu hiệu sáo rỗng.",
    "userRubric": [
      "Đúng dung lượng 2 - 3 câu, giọng văn chân thành",
      "Gắn trực tiếp với bối cảnh học sinh lớp 9 ôn thi vào 10",
      "Có hành động cụ thể ở bàn học và sự từ bỏ cám dỗ thực tế"
    ]
  }
];
