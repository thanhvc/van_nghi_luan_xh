// Ngân hàng 34 bài tập Sơ đồ tư duy (Mindmap Builder) - Nghị luận xã hội lớp 9 ôn thi vào 10
const MINDMAP_DATA = [
  {
    "id": 1,
    "topic": "Lòng kiên trì trước nghịch cảnh",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Làm rõ bản chất: nỗ lực bền bỉ theo đuổi mục tiêu đúng đắn, không bỏ cuộc.",
        "correctPhrases": [
          "Bản lĩnh bền bỉ theo đuổi mục tiêu dù gặp nhiều trở ngại",
          "Năng lực kiên định giữ vững lý tưởng trước sóng gió cuộc đời"
        ],
        "distractors": [
          "Sự cố chấp mù quáng không chịu thay đổi dù biết mình sai",
          "Thái độ an phận chờ đợi may mắn gõ cửa"
        ],
        "feedbackOnMistake": "Thầy cô nhắc nhở: Kiên trì là sự bền bỉ có định hướng đúng đắn, khác xa với 'cố chấp mù quáng' bảo thủ bám giữ sai lầm.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Ý nghĩa: Biến khó khăn thành bàn đạp rèn luyện ý chí, mở ra cơ hội thành công.",
        "correctPhrases": [
          "Biến thất bại tạm thời thành bài học quý giá để tôi luyện ý chí",
          "Là chìa khóa mở cánh cửa thành công khi mọi cơ hội dường như khép lại"
        ],
        "distractors": [
          "Giúp con người luôn luôn thuận lợi và không bao giờ gặp vấp ngã",
          "Để phô trương sức mạnh vượt trội hơn tất cả mọi người"
        ],
        "feedbackOnMistake": "Kiên trì không giúp cuộc đời bạn không bao giờ vấp ngã, mà rèn cho bạn bản lĩnh luôn biết đứng dậy sau mỗi lần ngã!",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Dẫn chứng nhân vật thật, hành động bền bỉ, kết quả cụ thể.",
        "correctPhrases": [
          "Thomas Edison bền bỉ vượt qua hơn 10.000 lần thử nghiệm để phát minh bóng đèn",
          "Thầy giáo Nguyễn Ngọc Ký kiên trì dùng đôi chân tập viết làm nên kỳ tích"
        ],
        "distractors": [
          "Một số học sinh lười biếng nhưng bất ngờ thi đỗ nhờ vận may",
          "Chỉ cần đọc nhiều sách kỹ năng sống là tự động thành công"
        ],
        "feedbackOnMistake": "Dẫn chứng NLXH bắt buộc phải là người thật việc thật với quá trình nỗ lực rõ ràng, không được dựa vào may rủi hay suy diễn.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Phân biệt kiên trì với bảo thủ; phê phán thói nhanh chán nản.",
        "correctPhrases": [
          "Kiên trì khác với sự ngoan cố bám chấp vào phương pháp sai lầm",
          "Phê phán lối sống nhanh nản chí, 'cả thèm chóng chán' của một bộ phận giới trẻ"
        ],
        "distractors": [
          "Cần biết buông xuôi ngay từ lần vấp ngã đầu tiên để đỡ tốn sức",
          "Mọi khó khăn trên đời chỉ cần chờ đợi là tự động biến mất"
        ],
        "feedbackOnMistake": "Phản đề phải vạch rõ ranh giới giữa kiên trì linh hoạt với ngoan cố mù quáng, đồng thời phê phán thái độ buông xuôi đầu hàng.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Hành động thực tế của học sinh lớp 9 ôn thi vào 10.",
        "correctPhrases": [
          "Chủ động đối diện lỗi sai, kiên trì luyện tập từng dạng bài chưa nắm vững",
          "Thiết lập kỷ luật tự giác mỗi ngày, không bỏ dở mục tiêu ôn thi vào lớp 10"
        ],
        "distractors": [
          "Hứa suông sẽ trở thành vĩ nhân làm rạng danh non sông đất nước",
          "Chờ đến sát ngày thi mới bắt đầu thức đêm kiên trì học dồn"
        ],
        "feedbackOnMistake": "Bài học của tuổi 15 phải bắt đầu từ những việc làm cụ thể mỗi ngày trong học tập, tuyệt đối không hô khẩu hiệu viển vông!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Giới thiệu lòng kiên trì là ngọn đèn dẫn lối vượt qua nghịch cảnh. Thân đoạn: Giải thích kiên trì là bản lĩnh bền bỉ theo đuổi mục tiêu; Phân tích giá trị biến thất bại thành đòn bẩy tôi luyện ý chí; Dẫn chứng Thomas Edison và thầy Nguyễn Ngọc Ký; Phản đề phân biệt kiên trì với ngoan cố mù quáng, phê phán thói cả thèm chóng chán; Bài học tuổi 15 rèn luyện kỷ luật học tập mỗi ngày để bứt phá vào lớp 10.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 2,
    "topic": "Lòng dũng cảm và tinh thần vượt lên nỗi sợ",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Dũng cảm: dám đối diện và vượt qua nỗi sợ hãi để bảo vệ lẽ phải.",
        "correctPhrases": [
          "Khả năng đối diện với hiểm nguy, thử thách để bảo vệ chân lý và điều thiện",
          "Bản lĩnh dám vượt qua nỗi sợ hãi của chính bản thân để hành động"
        ],
        "distractors": [
          "Hành vi liều lĩnh, bốc đồng bất chấp an toàn tính mạng một cách vô ích",
          "Tỏ ra hung hăng, dùng bạo lực để dọa nạt người yếu thế hơn"
        ],
        "feedbackOnMistake": "Dũng cảm chân chính luôn gắn liền với lý trí và lòng nhân ái, không phải liều mạng vô ích hay bắt nạt người khác.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Bứt phá vùng an toàn, đẩy lùi tiêu cực, bảo vệ lẽ phải.",
        "correctPhrases": [
          "Giúp con người bứt phá khỏi vùng an toàn để trưởng thành và cống hiến",
          "Tạo sức mạnh cộng đồng để đấu tranh chống lại bất công và cái ác"
        ],
        "distractors": [
          "Để được tung hô và quay clip thu hút triệu lượt xem trên mạng",
          "Giúp chúng ta tự do làm bất kỳ điều gì mà không cần tuân theo pháp luật"
        ],
        "feedbackOnMistake": "Lòng dũng cảm hướng tới những giá trị nhân văn cao đẹp, không phải là công cụ câu view hay bất chấp luật pháp.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Chiến sĩ cứu hỏa quả cảm; Malala đấu tranh cho trẻ em gái.",
        "correctPhrases": [
          "Các chiến sĩ cảnh sát PCCC xông vào biển lửa cứu sống hàng chục người dân",
          "Cô gái trẻ Malala dũng cảm đấu tranh đòi quyền đi học cho trẻ em gái dù bị đe dọa tính mạng"
        ],
        "distractors": [
          "Những thanh niên đua xe bốc đầu trên đường phố để chứng tỏ lòng can đảm",
          "Một người dám ăn trộm mà không hề run sợ trước đám đông"
        ],
        "feedbackOnMistake": "Dẫn chứng phải tôn vinh điều thiện và sự xả thân cao cả, không lấy hành vi phạm pháp làm ví dụ.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Dũng cảm cần có trí tuệ; phê phán thái độ hèn nhát im lặng.",
        "correctPhrases": [
          "Dũng cảm cần đi liền với sự tỉnh táo, không biến thành liều lĩnh mù quáng",
          "Phê phán thái độ hèn nhát, im lặng trước điều sai trái để cầu an cho bản thân"
        ],
        "distractors": [
          "Trước mọi bất công tốt nhất nên im lặng làm ngơ để giữ an toàn tuyệt đối",
          "Dũng cảm thì không cần suy nghĩ tính toán thiệt hơn bất cứ điều gì"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán lối sống hèn nhát an phận, đồng thời khẳng định lòng dũng cảm phải có trí tuệ đồng hành.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Dám nhận lỗi sai, dám lên tiếng bảo vệ bạn bè bị bắt nạt.",
        "correctPhrases": [
          "Dũng cảm nhận lỗi và sửa sai khi làm hỏng việc hoặc vi phạm nội quy",
          "Dám lên tiếng can ngăn hoặc báo thầy cô khi chứng kiến bạn bè bị bắt nạt"
        ],
        "distractors": [
          "Tham gia các thử thách mạo hiểm nguy hiểm trên mạng xã hội để thể hiện bản thân",
          "Che giấu khuyết điểm của bạn thân để giữ gìn tình bạn bằng mọi giá"
        ],
        "feedbackOnMistake": "Dũng cảm tuổi học trò bắt đầu từ việc trung thực nhận lỗi và bảo vệ lẽ phải trong lớp học.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Dẫn dắt dũng cảm là ngọn đuốc xua tan sợ hãi. Thân đoạn: Định nghĩa dũng cảm là bản lĩnh đối diện thử thách vì lẽ phải; Phân tích giá trị khai phóng nội lực và bảo vệ công lý; Dẫn chứng chiến sĩ PCCC và Malala Yousafzai; Phản đề dũng cảm cần song hành cùng trí tuệ, phê phán sự hèn nhát im lặng; Bài học tuổi 15 dám nhận lỗi và dám lên tiếng trước tiêu cực học đường.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 3,
    "topic": "Lòng biết ơn trong cuộc sống",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Trân trọng công lao của đấng sinh thành, thầy cô, cội nguồn.",
        "correctPhrases": [
          "Thái độ trân trọng và ghi nhớ công ơn sâu nặng của những người đã nuôi dưỡng, giúp đỡ ta",
          "Ý thức cội nguồn sâu sắc về những điều tốt đẹp ta đang được thụ hưởng"
        ],
        "distractors": [
          "Món nợ tài chính bắt buộc phải quy đổi bằng tiền bạc vật chất sòng phẳng",
          "Hành động nịnh bợ, lấy lòng cấp trên để mưu cầu tư lợi cá nhân"
        ],
        "feedbackOnMistake": "Biết ơn là tình cảm đạo đức thiêng liêng, xuất phát từ lòng chân thành, không phải là cuộc trao đổi vật chất.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Nuôi dưỡng tâm hồn nhân ái, gìn giữ truyền thống đạo lý.",
        "correctPhrases": [
          "Nuôi dưỡng tâm hồn nhân hậu, đẩy lùi thói vị kỷ và ngạo mạn vô ơn",
          "Gắn kết các thế hệ và bồi đắp truyền thống 'Uống nước nhớ nguồn' của dân tộc"
        ],
        "distractors": [
          "Giúp ta nhận lại nhiều của cải vật chất hơn từ những người khác",
          "Chỉ để chứng minh cho mọi người thấy mình là người có học thức"
        ],
        "feedbackOnMistake": "Lòng biết ơn làm giàu có tâm hồn con người và giữ gìn đạo lý giống nòi, không phải để tính toán thiệt hơn.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Tri ân người hiến tạng, phụng dưỡng Mẹ Việt Nam anh hùng.",
        "correctPhrases": [
          "Các y bác sĩ cúi đầu mặc niệm tri ân những người hiến tạng mang lại sự sống cho bệnh nhân",
          "Phong trào xây dựng nhà tình nghĩa, chăm sóc các Mẹ Việt Nam anh hùng trên khắp cả nước"
        ],
        "distractors": [
          "Mua quà tặng xa xỉ đắt tiền cốt chỉ để khoe ảnh trên mạng xã hội",
          "Lời cảm ơn xã giao thoáng qua nhưng sau đó lại vô lễ với cha mẹ"
        ],
        "feedbackOnMistake": "Dẫn chứng về lòng biết ơn cần sự thiêng liêng, bền vững qua hành động thực tế, không chuộng hình thức phù phiếm.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Hành động thực chất; phê phán thói 'ăn cháo đá bát'.",
        "correctPhrases": [
          "Biết ơn phải biến thành hành động sống có ích, không chỉ dừng lại ở lời nói suông",
          "Phê phán thói 'ăn cháo đá bát', vô ơn bội bạc và xem sự hy sinh của người khác là điều hiển nhiên"
        ],
        "distractors": [
          "Người nhận giúp đỡ không cần quan tâm đến người khác vì họ tự nguyện",
          "Càng được cưng chiều thì càng có quyền đòi hỏi cha mẹ phục vụ"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán gay gắt căn bệnh 'xem sự hy sinh của cha mẹ, xã hội là hiển nhiên' mà sinh thói vô ơn, ích kỷ.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Hiếu thảo việc nhà, nỗ lực học tập để đền đáp cha mẹ.",
        "correctPhrases": [
          "Nỗ lực học tập tốt, giúp đỡ việc nhà và quan tâm chăm sóc ông bà cha mẹ từ việc nhỏ",
          "Trân trọng công lao dạy dỗ của thầy cô bằng thái độ lễ phép và tinh thần tự giác"
        ],
        "distractors": [
          "Chờ đến khi trưởng thành giàu có mới bắt đầu báo hiếu cha mẹ",
          "Đòi hỏi cha mẹ phải mua cho điện thoại đắt tiền thì mới chịu ngồi học"
        ],
        "feedbackOnMistake": "Biết ơn phải được thực hành ngay từ lúc này bằng sự hiếu thảo và nỗ lực học tập, đừng chờ đợi đến khi giàu có mới đền đáp.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Lòng biết ơn là cội rễ làm nên vẻ đẹp nhân cách con người. Thân đoạn: Giải thích biết ơn là sự trân quý công ơn nuôi dưỡng, giúp đỡ; Phân tích giá trị nuôi dưỡng tâm hồn và duy trì đạo lý Uống nước nhớ nguồn; Dẫn chứng cử chỉ tri ân người hiến tạng và chăm sóc Mẹ VNAH; Phản đề biết ơn bằng hành động thiết thực, phê phán thói ăn cháo đá bát; Bài học tuổi 15 nỗ lực học tốt và hiếu thuận với cha mẹ từ những việc nhỏ mỗi ngày.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 4,
    "topic": "Tinh thần tự lập của giới trẻ",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Tự chủ suy nghĩ, tự giác giải quyết công việc, không dựa dẫm.",
        "correctPhrases": [
          "Khả năng tự mình suy nghĩ, quyết định và chịu trách nhiệm về cuộc đời mình",
          "Thói quen chủ động giải quyết công việc mà không dựa dẫm, ỷ lại vào người khác"
        ],
        "distractors": [
          "Sự cô lập bản thân, cự tuyệt hoàn toàn sự giúp đỡ của gia đình và bạn bè",
          "Thích làm theo ý mình một cách bất cần, bất chấp lời khuyên bảo đúng đắn"
        ],
        "feedbackOnMistake": "Tự lập là làm chủ bản thân chứ không phải là 'cô lập' hay 'ngỗ ngược bất cần'. Tự lập vẫn luôn cần sự kết nối, lắng nghe.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Vững vàng trước biến cố, thích nghi nhanh chóng, được tin cậy.",
        "correctPhrases": [
          "Giúp con người nhanh chóng thích nghi và đứng vững trước mọi biến động cuộc đời",
          "Tạo dựng bản lĩnh tự tin, nhận được sự tôn trọng và tin cậy từ xã hội"
        ],
        "distractors": [
          "Giúp con người không cần phải làm việc vất vả mà vẫn có nhiều tiền",
          "Để chứng tỏ mình đã lớn và không cần cha mẹ can thiệp vào cuộc sống"
        ],
        "feedbackOnMistake": "Ý nghĩa của tự lập là tạo nội lực bền vững để sinh tồn và phát triển, không phải là cái cớ để nổi loạn hay chống đối cha mẹ.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Giáo dục tự lập của trẻ em Nhật Bản; Bác Hồ ra đi tìm đường cứu nước.",
        "correctPhrases": [
          "Trẻ em Nhật Bản được giáo dục tự lập từ sớm: tự đi bộ đến trường, tự dọn dẹp vệ sinh lớp học",
          "Người thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước chỉ với hai bàn tay trắng và ý chí tự lập phi thường"
        ],
        "distractors": [
          "Những học sinh lớp 9 vẫn phải để cha mẹ mang balo và xúc cơm mỗi bữa",
          "Bỏ nhà đi bụi để chứng minh mình đã đủ lông đủ cánh tự lập"
        ],
        "feedbackOnMistake": "Dẫn chứng phải thể hiện nét đẹp văn minh của tính tự lập tự giác, tránh nhầm lẫn với hành vi bồng bột gây tổn thương gia đình.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Tự lập không phải cô lập; phê phán thói ỷ lại bám víu cha mẹ.",
        "correctPhrases": [
          "Tự lập không có nghĩa là từ chối sự hợp tác và hỗ trợ chân thành từ tập thể",
          "Phê phán căn bệnh ỷ lại, sống bám và phụ thuộc mù quáng vào cha mẹ của nhiều bạn trẻ"
        ],
        "distractors": [
          "Càng được cha mẹ bao bọc kỹ càng thì sau này càng dễ thành công lớn",
          "Người tự lập thì không bao giờ được phép nhờ bất kỳ ai giúp đỡ"
        ],
        "feedbackOnMistake": "Cần phê phán mạnh mẽ lối sống 'tầm gửi' thụ động, đồng thời khẳng định tự lập vẫn luôn cần tinh thần đồng đội và hợp tác.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Tự giác học tập, tự dọn phòng, tự lên thời gian biểu ôn thi.",
        "correctPhrases": [
          "Tự giác xây dựng và hoàn thành thời gian biểu học tập mà không cần nhắc nhở",
          "Chủ động làm các công việc cá nhân như dọn dẹp phòng, tự nấu ăn và giặt giũ"
        ],
        "distractors": [
          "Đòi hỏi cha mẹ chu cấp tiền để ra ngoài thuê nhà sống riêng ngay khi học lớp 9",
          "Tự ý bỏ học những môn mình không thích vì cho rằng mình có quyền tự quyết"
        ],
        "feedbackOnMistake": "Tự lập tuổi 15 bắt đầu từ những thói quen sinh hoạt và học tập ngăn nắp hàng ngày, không phải là những đòi hỏi viển vông, quậy phá.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Khẳng định tính tự lập là đôi cánh nâng con người bay vào tương lai. Thân đoạn: Giải thích tự lập là năng lực làm chủ suy nghĩ và tự chịu trách nhiệm; Phân tích giá trị giúp con người tôi rèn bản lĩnh thích nghi; Dẫn chứng giáo dục tự lập Nhật Bản và thanh niên Nguyễn Tất Thành; Phản đề tự lập khác với cô lập, phê phán lối sống tầm gửi ỷ lại; Bài học tuổi 15 tự giác lên lịch học và làm việc cá nhân mỗi ngày.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 5,
    "topic": "Đức tính khiêm tốn",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Ý thức rõ giới hạn của mình, không tự cao tự đại, luôn cầu thị học hỏi.",
        "correctPhrases": [
          "Thái độ đúng mực, nhận thức rõ giới hạn của bản thân và luôn tôn trọng người khác",
          "Tinh thần cầu thị, không tự cao tự đại trước những thành tích đạt được"
        ],
        "distractors": [
          "Sự tự ti, nhút nhát và coi thường năng lực vốn có của chính mình",
          "Giả vờ nhún nhường để giấu dốt hoặc mưu toan vụ lợi ngầm"
        ],
        "feedbackOnMistake": "Khiêm tốn hoàn toàn khác với 'tự ti hèn kém' hay 'giả vờ nhún nhường'. Khiêm tốn là hiểu đúng mình và luôn khát khao học hỏi.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Mở rộng tầm mắt đón nhận tri thức, được mọi người quý mến.",
        "correctPhrases": [
          "Giúp con người không ngừng hoàn thiện bản thân như chiếc bình rỗng luôn sẵn sàng đón nhận tri thức mới",
          "Xây dựng mối quan hệ chan hòa, nhận được sự kính trọng và tình cảm chân thành từ mọi người"
        ],
        "distractors": [
          "Để che giấu sự kém cỏi của bản thân nhằm không bị ai chê cười",
          "Giúp chúng ta không bao giờ phải chịu trách nhiệm khi công việc thất bại"
        ],
        "feedbackOnMistake": "Khiêm tốn là tâm thế của người có bản lĩnh, giúp mở rộng tầm mắt đón nhận tri thức bao la của nhân loại.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Isaac Newton ví mình như đứa trẻ nhặt vỏ sò; Bác Hồ sống giản dị.",
        "correctPhrases": [
          "Isaac Newton ví tri thức của mình chỉ như một đứa trẻ nhặt vỏ sò bên bờ đại dương bao la",
          "Chủ tịch Hồ Chí Minh dù là vị lãnh tụ vĩ đại nhưng luôn giữ lối sống giản dị, khiêm nhường hết mực"
        ],
        "distractors": [
          "Những người liên tục khoe mẽ khoe thành tích trên mạng xã hội để kiếm người theo dõi",
          "Một người tự nhận mình là người giỏi nhất thế giới không ai sánh bằng"
        ],
        "feedbackOnMistake": "Hãy lấy dẫn chứng về các vĩ nhân trí tuệ đỉnh cao nhưng nhân cách vô cùng khiêm hạ để làm sáng tỏ sức nặng luận điểm.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Khiêm tốn không phải tự ti; phê phán thói kiêu ngạo tự phụ.",
        "correctPhrases": [
          "Khiêm tốn không đồng nghĩa với tự ti, che giấu tài năng hay đánh mất sự tự tin chính đáng",
          "Phê phán thói tự phụ, kiêu ngạo, coi thường người khác của kẻ 'thùng rỗng kêu to'"
        ],
        "distractors": [
          "Có tài thì phải khoe khoang cho cả thiên hạ biết mới là người thức thời",
          "Khiêm tốn quá mức khiến người khác bắt nạt nên tốt nhất là phải hung dữ"
        ],
        "feedbackOnMistake": "Phản đề cần bảo vệ sự tự tin lành mạnh, đồng thời phê phán thói hợm hĩnh, ảo tưởng về sức mạnh của bản thân.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Không kiêu căng khi được điểm 9, 10; luôn cầu tiến học bạn bè.",
        "correctPhrases": [
          "Không tự mãn trước điểm số cao, luôn chủ động tìm kiếm những thiếu sót để trau dồi thêm",
          "Lắng nghe và học hỏi những điểm tốt của bạn bè xung quanh với thái độ chân thành"
        ],
        "distractors": [
          "Giấu kín điểm số và từ chối chỉ bài cho bạn vì sợ bạn học giỏi hơn mình",
          "Luôn cho rằng bài làm của mình là hoàn hảo nhất và thầy cô chấm sai"
        ],
        "feedbackOnMistake": "Tuổi 15 cần sự khiêm nhường trong học tập, biết lắng nghe góp ý của thầy cô và hòa đồng cùng bạn bè tiến bộ.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Khiêm tốn là thước đo chiều sâu của một nhân cách cao đẹp. Thân đoạn: Giải thích khiêm tốn là hiểu rõ giới hạn của mình và cầu thị học hỏi; Phân tích giá trị mở rộng chân trời tri thức và tạo dựng tình yêu thương; Dẫn chứng Isaac Newton và Bác Hồ; Phản đề khiêm tốn khác với tự ti, phê phán thói tự cao kiêu ngạo; Bài học tuổi 15 không tự mãn với điểm số, luôn khiêm tốn học hỏi để vươn xa.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 6,
    "topic": "Lòng bao dung và sự tha thứ",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Bao dung: Rộng lòng tha thứ cho lỗi lầm của người khác, không nuôi hận thù.",
        "correctPhrases": [
          "Tấm lòng rộng mở, sẵn sàng cảm thông và tha thứ cho sai lầm của người khác",
          "Năng lực giải thoát tâm trí khỏi oán hận để hướng tới sự hàn gắn và an yên"
        ],
        "distractors": [
          "Sự dung túng, thỏa hiệp vô nguyên tắc với tội ác và cái xấu",
          "Thái độ nhu nhược, để mặc người khác chà đạp quyền lợi chính đáng của mình"
        ],
        "feedbackOnMistake": "Bao dung là tha thứ xuất phát từ lòng nhân từ, hoàn toàn khác với 'dung túng tội lỗi' hay 'nhu nhược hèn yếu'.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Hóa giải hận thù, tạo cơ hội cho người lầm lỡ hướng thiện, tâm hồn thanh thản.",
        "correctPhrases": [
          "Hóa giải hận thù, đem lại sự thanh thản trong tâm hồn cho chính bản thân",
          "Tạo cơ hội và niềm tin cho người mắc lỗi ăn năn hối cải và làm lại cuộc đời"
        ],
        "distractors": [
          "Để sau này có cớ bắt người khác phải đền ơn đáp nghĩa mình gấp mười lần",
          "Chứng minh mình là đấng bề trên có quyền phán xét tất cả mọi người"
        ],
        "feedbackOnMistake": "Bao dung đem lại sự bình an nội tâm và tái tạo niềm tin xã hội, không phải là công cụ ban ơn hay tính toán nợ nần.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Nelson Mandela tha thứ cho kẻ cai ngục; truyền thống nhân đạo của dân tộc Việt Nam.",
        "correctPhrases": [
          "Nelson Mandela tha thứ cho chính những viên cai ngục từng giam cầm mình để hàn gắn đất nước Nam Phi",
          "Truyền thống hòa hiếu nhân văn của cha ông ta: cấp thuyền, cấp ngựa cho quân giặc bại trận trở về nước"
        ],
        "distractors": [
          "Bỏ qua mọi tội ác giết người cướp của mà không cần pháp luật xử lý",
          "Nhẫn nhục chịu đựng bạo lực học đường ngày này qua ngày khác"
        ],
        "feedbackOnMistake": "Bao dung phải có nguyên tắc nhân văn cao thượng, không đồng nghĩa với phớt lờ pháp luật hay cam chịu bị bạo lực.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Bao dung khác với dung túng tội lỗi; phê phán lòng đố kỵ hẹp hòi.",
        "correctPhrases": [
          "Bao dung phải đi liền với sự nghiêm minh, không bao che dung túng cho kẻ cố tình tái phạm",
          "Phê phán lối sống hẹp hòi, chấp nhặt từng điều nhỏ nhặt và nuôi dưỡng hận thù dai dẳng"
        ],
        "distractors": [
          "Ai phạm sai lầm một lần thì phải trừng phạt triệt đường sống suốt đời",
          "Người có lỗi thì không bao giờ có thể hoàn lương tốt đẹp được"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán thói định kiến cực đoan, đồng thời khẳng định bao dung cần gắn với sự thức tỉnh của người phạm lỗi.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Bỏ qua xích mích nhỏ với bạn bè, biết xin lỗi và tha thứ trong trường lớp.",
        "correctPhrases": [
          "Chủ động làm hòa và tha thứ cho những xích mích, hiểu lầm nhỏ với bạn bè",
          "Mở lòng lắng nghe và chia sẻ khi người khác biết hối lỗi và muốn sửa sai"
        ],
        "distractors": [
          "Lập nhóm tẩy chay cô lập bạn cùng lớp khi bạn lỡ làm hỏng việc gì đó",
          "Nhớ mãi thù oán để tìm cơ hội trả đũa bạn bè sau giờ tan học"
        ],
        "feedbackOnMistake": "Tuổi học trò đẹp nhất ở tình bạn trong sáng, hãy biết bỏ qua những va chạm vụn vặt thay vì lập hội tẩy chay.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Lòng bao dung là nhịp cầu hàn gắn những rạn nứt trong các mối quan hệ. Thân đoạn: Định nghĩa bao dung là sự cảm thông và tha thứ chân thành; Phân tích giá trị giải phóng tâm trí và trao cơ hội hoàn lương; Dẫn chứng Nelson Mandela và tinh thần nhân văn dân tộc; Phản đề bao dung không phải dung túng sai trái, phê phán sự cố chấp hẹp hòi; Bài học tuổi 15 biết làm hòa và tha thứ cho bạn bè.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 7,
    "topic": "Tinh thần trách nhiệm với bản thân và cộng đồng",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Ý thức tự giác hoàn thành bổn phận, dám gánh vác hậu quả hành vi của mình.",
        "correctPhrases": [
          "Ý thức tự giác hoàn thành nghĩa vụ, bổn phận của bản thân đối với gia đình và xã hội",
          "Bản lĩnh dám chịu trách nhiệm trước mọi hành vi, lời nói và quyết định của chính mình"
        ],
        "distractors": [
          "Sự đùn đẩy công việc khó cho người khác và chỉ nhận phần việc nhẹ nhàng",
          "Bắt buộc phải làm theo mệnh lệnh của người khác một cách mù quáng và miễn cưỡng"
        ],
        "feedbackOnMistake": "Trách nhiệm xuất phát từ ý thức tự giác làm chủ và đạo đức sống, không phải sự phục tùng ép buộc hay đùn đẩy.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Tạo dựng uy tín cá nhân, duy trì trật tự và sự văn minh của xã hội.",
        "correctPhrases": [
          "Xây dựng uy tín và danh dự cá nhân, tạo tiền đề vững chắc cho mọi thành công",
          "Góp phần duy trì kỷ cương, sự an toàn và phát triển phồn vinh của toàn xã hội"
        ],
        "distractors": [
          "Để được khen ngợi và thưởng tiền mặt trong mọi hoạt động tập thể",
          "Giúp chúng ta có quyền bắt bẻ và chỉ trích lỗi sai của người khác"
        ],
        "feedbackOnMistake": "Tinh thần trách nhiệm xây dựng nền tảng đạo đức vững chắc cho xã hội, không phải để trục lợi hay phán xét.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Các y bác sĩ bám trụ tuyến đầu chống dịch; thanh niên tình nguyện vì cộng đồng.",
        "correctPhrases": [
          "Đội ngũ y bác sĩ thức trắng đêm nơi tuyến đầu giành giật từng hơi thở cho bệnh nhân",
          "Các chiến sĩ bộ đội biên phòng ngày đêm bám chốt biên cương giữ gìn bình yên cho Tổ quốc"
        ],
        "distractors": [
          "Những tài xế gây tai nạn rồi tăng ga bỏ chạy để trốn tránh trách nhiệm bồi thường",
          "Học sinh quay cóp trong giờ thi nhưng đổ lỗi do đề thi quá dài"
        ],
        "feedbackOnMistake": "Dẫn chứng phải khắc họa hình ảnh sự tận tụy cống hiến vì nghĩa lớn, phê phán các hành vi vô trách nhiệm trốn chạy.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Trách nhiệm không phải ôm đồm quá sức; phê phán thói vô trách nhiệm 'cháy nhà hàng xóm bình chân như vại'.",
        "correctPhrases": [
          "Trách nhiệm cần gắn liền với năng lực và sự phối hợp khoa học, tránh ôm đồm kiệt sức",
          "Phê phán thói vô trách nhiệm, thói đùn đẩy và căn bệnh 'cháy nhà hàng xóm bình chân như vại'"
        ],
        "distractors": [
          "Việc gì không liên quan trực tiếp đến quyền lợi của mình thì tốt nhất cứ lờ đi",
          "Trách nhiệm chỉ là việc của người lớn, học sinh chưa cần phải quan tâm"
        ],
        "feedbackOnMistake": "Cần lên án mạnh mẽ thói bàng quan vô trách nhiệm, đồng thời khẳng định tuổi nhỏ làm việc nhỏ, ai cũng có trách nhiệm.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Có trách nhiệm với bài vở ôn thi, giữ vệ sinh trường lớp, giữ lời hứa.",
        "correctPhrases": [
          "Tự giác học bài đầy đủ trước khi đến lớp, không để cha mẹ và thầy cô phải phiền lòng",
          "Nghiêm túc chấp hành luật an toàn giao thông và tích cực giữ gìn vệ sinh môi trường học đường"
        ],
        "distractors": [
          "Đổ lỗi cho hoàn cảnh hoặc bạn bè mỗi khi nhận điểm kém môn Văn hay Toán",
          "Tùy tiện vứt rác ra sân trường vì cho rằng đã có nhân viên lao công quét dọn"
        ],
        "feedbackOnMistake": "Trách nhiệm tuổi 15 thể hiện ngay từ việc chuẩn bị bài chu đáo và giữ gìn nếp sống văn minh học đường.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Tinh thần trách nhiệm là thước đo danh dự và phẩm giá của mỗi con người. Thân đoạn: Giải thích trách nhiệm là ý thức tự giác hoàn thành nghĩa vụ; Phân tích giá trị kiến tạo uy tín và giữ vững kỷ cương xã hội; Dẫn chứng y bác sĩ tuyến đầu và người lính biên cương; Phản đề trách nhiệm khoa học, phê phán lối sống phủi bỏ nghĩa vụ; Bài học tuổi 15 trách nhiệm với việc học tập và nề nếp kỷ luật mỗi ngày.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 8,
    "topic": "Khát vọng cống hiến của tuổi trẻ",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Ý nguyện đem trí tuệ, sức trẻ đóng góp cho sự phát triển của đất nước và cộng đồng.",
        "correctPhrases": [
          "Mong muốn đem tài năng, nhiệt huyết và sức lực đóng góp cho sự phát triển chung của xã hội",
          "Lẽ sống cao đẹp vượt lên vị kỷ cá nhân để hòa vào dòng chảy chung của non sông đất nước"
        ],
        "distractors": [
          "Sự hy sinh mù quáng bất chấp lý trí và không mang lại giá trị thiết thực",
          "Thói háo danh, muốn làm nổi để mọi người ca tụng và tôn sùng bản thân"
        ],
        "feedbackOnMistake": "Cống hiến là sự dâng hiến tự nguyện và có ích cho đời, khác hoàn toàn với sự háo danh hay hy sinh vô nghĩa.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Làm cho tuổi trẻ rực rỡ, thúc đẩy đất nước tiến bộ, khẳng định ý nghĩa cuộc đời.",
        "correctPhrases": [
          "Giúp cuộc đời tuổi trẻ không bị trôi qua vô nghĩa trong sự nhạt nhòa, đơn điệu",
          "Tạo nguồn lực tinh thần và trí tuệ to lớn để đưa đất nước sánh vai cùng các cường quốc"
        ],
        "distractors": [
          "Để được miễn thi tốt nghiệp và nhận các ưu đãi đặc quyền từ nhà nước",
          "Giúp chúng ta nhanh chóng trở thành người nổi tiếng giàu có nhất"
        ],
        "feedbackOnMistake": "Ý nghĩa cao cả của khát vọng cống hiến là tạo ra giá trị trường tồn cho cộng đồng, không phải mưu cầu đặc quyền.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Anh thanh niên trong Lặng lẽ Sa Pa; các bạn trẻ tham gia Mùa hè xanh, sáng tạo công nghệ.",
        "correctPhrases": [
          "Hàng ngàn bạn sinh viên tình nguyện lên đường đến vùng cao dạy học và xây cầu trong chiến dịch Mùa hè xanh",
          "Các kỹ sư trẻ người Việt ngày đêm nghiên cứu làm chủ công nghệ bán dẫn và vệ tinh không gian"
        ],
        "distractors": [
          "Thanh niên dành trọn 24 giờ mỗi ngày để cày game online trong quán nét",
          "Tìm mọi cách để ra nước ngoài định cư và quay lưng chê bai quê hương"
        ],
        "feedbackOnMistake": "Dẫn chứng cần thể hiện tinh thần dấn thân sáng tạo của người trẻ, phê phán lối sống lãng phí tuổi xuân.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Cống hiến từ việc nhỏ; phê phán lối sống ích kỷ, hưởng thụ, 'nằm yên mặc kệ đời'.",
        "correctPhrases": [
          "Cống hiến không nhất thiết phải làm những việc kinh thiên động địa, mà bắt đầu từ những việc làm bình dị có ích",
          "Phê phán lối sống thực dụng, ích kỷ, chỉ biết hưởng thụ và trào lưu 'nằm yên mặc kệ' của một bộ phận người trẻ"
        ],
        "distractors": [
          "Chỉ khi nào đất nước xảy ra chiến tranh thì mới cần người trẻ đứng lên cống hiến",
          "Tuổi trẻ thì phải hưởng thụ tối đa trước đã, việc cống hiến để tuổi già lo"
        ],
        "feedbackOnMistake": "Cần phê phán trào lưu buông xuôi lười biếng, đồng thời khẳng định cống hiến có mặt ngay trong lao động và học tập thời bình.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Tu dưỡng đạo đức, tích lũy tri thức, giúp đỡ người nghèo khó.",
        "correctPhrases": [
          "Nỗ lực học tập thật giỏi tri thức văn hóa và công nghệ để chuẩn bị hành trang lập thân lập nghiệp",
          "Tích cực tham gia các phong trào vì cộng đồng như Đôi bạn cùng tiến, phong trào Kế hoạch nhỏ"
        ],
        "distractors": [
          "Hô khẩu hiệu đao to búa lớn trên mạng xã hội nhưng bài tập về nhà lại để trống",
          "Bỏ học đi làm từ thiện tự phát khi bản thân chưa có đủ kiến thức và kỹ năng"
        ],
        "feedbackOnMistake": "Bài học của học sinh lớp 9 cống hiến thiết thực nhất chính là học thật tốt để ngày mai xây dựng đất nước.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Nếu là chim, chiếc lá / Thì chim phải hót, chiếc lá phải xanh' - Cống hiến là lẽ sống đẹp nhất của thanh xuân. Thân đoạn: Giải thích khát vọng cống hiến là dâng hiến trí tuệ cho quê hương; Phân tích giá trị làm sáng rực tuổi trẻ và chắp cánh đất nước; Dẫn chứng thanh niên tình nguyện và kỹ sư công nghệ trẻ; Phản đề cống hiến từ việc nhỏ, phê phán lối sống ích kỷ hưởng thụ; Bài học tuổi 15 tích lũy tri thức và tích cực tham gia phong trào đoàn đội.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 9,
    "topic": "Sự trung thực - Thước đo nhân cách con người",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Tôn trọng sự thật, lời nói đi đôi với việc làm, không dối trá lừa lọc.",
        "correctPhrases": [
          "Phẩm chất tôn trọng sự thật, sống ngay thẳng, thật thà và không gian dối",
          "Sự thống nhất giữa lời nói và việc làm, dũng cảm nhận khuyết điểm của bản thân"
        ],
        "distractors": [
          "Sự thật thà thô lỗ đến mức làm tổn thương và xúc phạm người khác một cách tàn nhẫn",
          "Luôn luôn nghe theo mọi lời xúi giục của kẻ xấu mà không biết phản kháng"
        ],
        "feedbackOnMistake": "Trung thực là ngay thẳng tôn trọng sự thật với tấm lòng trong sáng, không đồng nghĩa với nói năng thô lỗ thiếu văn hóa.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Xây dựng niềm tin vững chắc, tâm hồn thanh thản, làm xã hội văn minh.",
        "correctPhrases": [
          "Là nền tảng tạo dựng niềm tin yêu, sự tín nhiệm giữa người với người trong xã hội",
          "Giúp con người có được sự thanh thản trong lương tâm, không phải sống trong lo sợ dối trá bị phơi bày"
        ],
        "distractors": [
          "Giúp con người luôn luôn kiếm được nhiều tiền bạc hơn những kẻ lừa đảo",
          "Để được tuyên dương làm tấm gương điển hình và nhận bằng khen từ nhà trường"
        ],
        "feedbackOnMistake": "Giá trị cốt lõi của trung thực là sự trong sạch của lương tâm và nền tảng niềm tin xã hội, không phải là phần thưởng bề ngoài.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Người nhặt được của rơi trả lại người mất; nhà khoa học kiên định bảo vệ chân lý.",
        "correctPhrases": [
          "Học sinh nhặt được túi xách chứa hàng trăm triệu đồng chủ động mang đến công an tìm người trả lại",
          "Nhà khoa học Galileo kiên cường bảo vệ chân lý Trái Đất quay quanh Mặt Trời dù bị đàn áp"
        ],
        "distractors": [
          "Học sinh sử dụng phao thi tinh vi trong kỳ thi để đạt điểm cao trót lọt",
          "Khai gian thành tích để nhận học bổng du học nước ngoài"
        ],
        "feedbackOnMistake": "Dẫn chứng phải ngợi ca những hành động liêm chính, thật thà trong cuộc sống, kiên quyết phê phán hành vi gian dối.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Trung thực cần gắn với tế nhị (lời nói dối nhân ái); phê phán căn bệnh đạo đức giả.",
        "correctPhrases": [
          "Trung thực không đồng nghĩa với cứng nhắc, đôi khi cần những 'lời nói dối nhân ái' để động viên người bệnh hiểm nghèo",
          "Phê phán căn bệnh gian dối, đạo đức giả và lối sống 'miệng nam mô bụng một bồ dao găm'"
        ],
        "distractors": [
          "Trong kinh doanh và thi cử thì phải dối trá mới có thể sống sót và chiến thắng",
          "Càng nói dối giỏi thì sau này càng dễ làm lãnh đạo lớn"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán gay gắt thói dối trá gian lận, đồng thời mở rộng tư duy về những lời nói dịu dàng nhân văn vì người khác.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Không gian lận thi cử, dũng cảm nhận lỗi khi vi phạm nội quy.",
        "correctPhrases": [
          "Tuyệt đối trung thực trong học tập và thi cử, nói không với hành vi gian lận quay cóp bài",
          "Thẳng thắn nhìn nhận những điểm yếu của bản thân để kiên trì khắc phục từng ngày"
        ],
        "distractors": [
          "Nhờ bạn làm hộ bài kiểm tra trên máy tính để lấy điểm số đẹp khoe cha mẹ",
          "Bịa chuyện vu khống bạn khác khi làm mất tài sản trong lớp"
        ],
        "feedbackOnMistake": "Trung thực tuổi học trò là 'thà nhận một điểm kém trung thực còn hơn một điểm mười giả dối'!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Trung thực là chiếc vương miện danh giá nhất của nhân cách con người. Thân đoạn: Giải thích trung thực là tôn trọng sự thật và nhất quán giữa lời nói với việc làm; Phân tích giá trị kiến tạo niềm tin và thanh lọc tâm hồn; Dẫn chứng nhặt được của rơi trả lại và Galileo; Phản đề trung thực nhân ái, phê phán căn bệnh đạo đức giả; Bài học tuổi 15 nghiêm túc trong thi cử và thẳng thắn nhìn nhận lỗi sai.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 10,
    "topic": "Tình mẫu tử và đạo làm con",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Tình cảm mẫu tử thiêng liêng, đức hy sinh vô điều kiện của mẹ đối với con cái.",
        "correctPhrases": [
          "Tình cảm yêu thương, chở che và đức hy sinh vô điều kiện của người mẹ dành cho con cái",
          "Bến đỗ bình yên nhất che chắn cho con người trước mọi bão giông của cuộc đời"
        ],
        "distractors": [
          "Mối quan hệ mang tính ràng buộc kinh tế và đòi hỏi con cái phải trả công sinh dưỡng",
          "Sự nuông chiều mù quáng của mẹ dung dưỡng cho những thói hư tật xấu của con"
        ],
        "feedbackOnMistake": "Tình mẫu tử là suối nguồn yêu thương thiêng liêng và vị tha nhất trần đời, không phải quan hệ toan tính vật chất.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Điểm tựa tinh thần nâng bước con người, bài học đầu tiên về đạo đức làm người.",
        "correctPhrases": [
          "Là nguồn động lực tinh thần vô giá tiếp thêm sức mạnh cho con vượt qua nghịch cảnh",
          "Dạy cho con bài học đầu tiên và sâu sắc nhất về tình yêu thương, sự hy sinh và lòng nhân ái"
        ],
        "distractors": [
          "Giúp con cái có người bảo hộ để thoải mái quậy phá mà không bị pháp luật xử lý",
          "Để con cái ỷ lại hoàn toàn vào mẹ mà không cần phải tự lập học hành"
        ],
        "feedbackOnMistake": "Tình mẹ là động lực nâng bước con trưởng thành độc lập, không phải chiếc ô dung túng sự ỷ lại hay sai trái.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Bác sĩ Nguyễn Thị Hạnh từ chối chữa ung thư để sinh con; người mẹ thức khuya chăm con thi vào 10.",
        "correctPhrases": [
          "Thiếu úy Đậu Thị Huyền Trâm kiên quyết từ chối xạ trị ung thư để giữ lại mạng sống cho đứa con đầu lòng",
          "Hình ảnh những người mẹ tảo tần dầm mưa dãi nắng bên cổng trường ngóng chờ con trong từng kỳ thi tuyển sinh 10"
        ],
        "distractors": [
          "Những đứa con vô tâm mắng chửi mẹ già khi mẹ chưa kịp nấu bữa tối",
          "Học sinh đòi mẹ phải vay mượn tiền mua xe máy đắt tiền mới chịu đi học"
        ],
        "feedbackOnMistake": "Dẫn chứng phải làm nổi bật đức hy sinh cao cả của người mẹ và sự hiếu thảo của người con, tránh dẫn chứng tiêu cực vô lễ.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Tình mẹ không nuông chiều sai trái; phê phán thói bất hiếu, vô tâm.",
        "correctPhrases": [
          "Tình yêu của mẹ cần đi đôi với sự giáo dục nghiêm khắc, tránh bao bọc con quá mức sinh hư hỏng",
          "Lên án gay gắt những hành vi bất hiếu, ruồng rẫy hoặc vô cảm trước công lao sinh thành của cha mẹ"
        ],
        "distractors": [
          "Cha mẹ sinh con ra thì có bổn phận phục vụ con cái trọn đời mà không được phàn nàn",
          "Chỉ cần sau này cho mẹ tiền là đã làm tròn đạo làm con mà không cần chăm sóc"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán lối sống bất hiếu vô tâm, đồng thời nhấn mạnh tình mẫu tử đúng đắn phải gắn liền với rèn luyện nhân cách con.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Vâng lời, đỡ đần việc nhà, nói lời yêu thương mẹ, nỗ lực đỗ vào lớp 10.",
        "correctPhrases": [
          "Bày tỏ lòng biết ơn bằng những hành động giản dị: phụ giúp việc nhà, rót nước mời mẹ sau ngày làm việc vất vả",
          "Nỗ lực ôn tập hết mình để đạt kết quả tốt nhất trong kỳ thi vào 10 như một món quà tri ân mẹ"
        ],
        "distractors": [
          "Cãi lời cha mẹ để thể hiện cá tính độc lập của tuổi mới lớn",
          "Chỉ nhắn tin chúc mừng mẹ trên Facebook lấy lượt thích nhưng ở nhà lại gắt gỏng với mẹ"
        ],
        "feedbackOnMistake": "Đạo làm con tuổi 15 bắt đầu từ sự ngoan ngoãn lắng nghe, phụ giúp mẹ việc nhà và chuyên tâm học hành.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Con dù lớn vẫn là con của mẹ / Đi hết đời lòng mẹ vẫn theo con' - Tình mẫu tử là bến đỗ bình yên nhất. Thân đoạn: Định nghĩa tình mẹ là đức hy sinh vô điều kiện; Phân tích giá trị là điểm tựa tinh thần nâng bước con người; Dẫn chứng Thiếu úy Đậu Thị Huyền Trâm và người mẹ tảo tần mùa thi; Phản đề tình mẹ khoa học, phê phán thói bất hiếu; Bài học tuổi 15 hiếu thuận, nỗ lực thi đỗ vào 10 tri ân cha mẹ.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 11,
    "topic": "Ý chí vượt khó và tinh thần vượt lên số phận",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Nghị lực kiên cường không cam chịu nghịch cảnh, chủ động xoay chuyển số phận.",
        "correctPhrases": [
          "Nghị lực phi thường dám đối mặt và vượt lên hoàn cảnh khó khăn ngặt nghèo",
          "Khát vọng tự làm chủ vận mệnh, không cam chịu số phận an bài"
        ],
        "distractors": [
          "Sự liều lĩnh bất chấp tính mạng để tìm kiếm cảm giác mạnh",
          "Thái độ đổ lỗi cho gia đình và hoàn cảnh sống nghèo khó"
        ],
        "feedbackOnMistake": "Ý chí vượt khó là năng lực làm chủ hoàn cảnh bằng nghị lực bền bỉ, khác xa thói đổ lỗi hay liều mạng vô căn cứ.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Biến nghịch cảnh thành sức mạnh, truyền cảm hứng sống đẹp cho cộng đồng.",
        "correctPhrases": [
          "Khai phóng tiềm năng vô hạn ẩn giấu bên trong con người khi rơi vào thử thách",
          "Thắp sáng niềm tin và truyền cảm hứng sống mãnh liệt cho những người xung quanh"
        ],
        "distractors": [
          "Để được nhận trợ cấp xã hội và sống dựa vào sự thương hại của người khác",
          "Giúp con người nhanh chóng trở thành tỷ phú mà không cần học hỏi"
        ],
        "feedbackOnMistake": "Ý nghĩa cao cả của ý chí vượt khó là tôi luyện nhân cách và lan tỏa niềm tin sống, không phải tìm kiếm sự thương hại.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Nick Vujicic không tay không chân; hiệp sĩ CNTT Nguyễn Công Hùng.",
        "correctPhrases": [
          "Nick Vujicic sinh ra không tay không chân nhưng trở thành diễn giả truyền cảm hứng nổi tiếng toàn cầu",
          "Hiệp sĩ CNTT Nguyễn Công Hùng bị liệt toàn thân vẫn sáng lập trung tâm tin học dạy nghề cho người khuyết tật"
        ],
        "distractors": [
          "Những thanh niên lành lặn giả tàn tật để ăn xin trên đường phố",
          "Chỉ cần cầu nguyện mỗi ngày là số phận sẽ tự động đổi khác"
        ],
        "feedbackOnMistake": "Dẫn chứng phải thể hiện tinh thần tự lực cánh sinh quật cường làm nên kỳ tích trước nghịch cảnh nghiệt ngã.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Vượt khó cần phương pháp đúng đắn; phê phán thói buông xuôi, tự ti mặc cảm.",
        "correctPhrases": [
          "Vượt khó cần có kế hoạch và phương pháp khoa học, không chỉ dựa vào lòng quyết tâm mù quáng",
          "Phê phán lối sống cam chịu, tự ti mặc cảm và dễ dàng gục ngã trước những thất bại nhỏ"
        ],
        "distractors": [
          "Sinh ra trong nghèo khó thì chắc chắn tương lai sẽ mãi mãi bế tắc",
          "Không nên cố gắng vì số phận đã được trời định đoạt từ trước"
        ],
        "feedbackOnMistake": "Phản đề cần triệt tiêu tư tưởng định mệnh tiêu cực, đồng thời khẳng định vượt khó phải có tri thức soi đường.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Không nản lòng khi gặp bài khó, vượt qua khó khăn gia đình để vươn lên thi đỗ.",
        "correctPhrases": [
          "Biến những áp lực thi cử và hoàn cảnh khó khăn thành động lực để nỗ lực học tập gấp đôi",
          "Chủ động rèn luyện tính kiên trì, không than vãn hay trốn tránh trước các bài tập khó"
        ],
        "distractors": [
          "Bỏ học sớm đi làm kiếm tiền ngay để thoát khỏi áp lực học tập thi cử",
          "Than vãn trên mạng xã hội suốt ngày về việc học hành quá vất vả"
        ],
        "feedbackOnMistake": "Bài học của học sinh là biến thử thách thành cơ hội tôi rèn ý chí, kiên trì tích lũy kiến thức vượt vũ môn.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Số phận cho ta quân bài xấu, nhưng cách chơi là do ta quyết định' - Ý chí vượt khó là ngọn lửa sưởi ấm nghịch cảnh. Thân đoạn: Giải thích vượt khó là bản lĩnh không chịu khuất phục; Phân tích giá trị khai phóng nội lực và truyền cảm hứng; Dẫn chứng Nick Vujicic và Nguyễn Công Hùng; Phản đề phương pháp vượt khó đúng đắn, phê phán sự cam chịu; Bài học tuổi 15 biến áp lực thành động lực thi vào 10.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 12,
    "topic": "Lối sống giản dị và giá trị đích thực của con người",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Giản dị: Sống tự nhiên, không xa hoa cầu kỳ, chú trọng chiều sâu tâm hồn.",
        "correctPhrases": [
          "Lối sống mộc mạc, thanh đạm, không cầu kỳ phô trương vẻ hào nhoáng bề ngoài",
          "Sự hài hòa giữa nhu cầu vật chất tối thiểu với đời sống tâm hồn phong phú, trong sáng"
        ],
        "distractors": [
          "Sự bủn xỉn, keo kiệt tằn tiện đến mức tước đoạt những nhu cầu sinh hoạt tối thiểu",
          "Lối sống nhếch nhác, luộm thuộm và cẩu thả trong ăn mặc, giao tiếp"
        ],
        "feedbackOnMistake": "Giản dị là nét đẹp văn hóa tao nhã, khác hoàn toàn với 'nhếch nhác luộm thuộm' hay 'keo kiệt bủn xỉn'.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Giải phóng tâm trí khỏi áp lực vật chất, tạo dựng cuộc sống an nhiên, hòa đồng.",
        "correctPhrases": [
          "Giúp con người thoát khỏi vòng xoáy kim tiền và áp lực vô nghĩa của lối sống hưởng thụ xa hoa",
          "Tạo nên phong thái tự tin, thanh cao và dễ dàng hòa đồng, gắn kết với mọi tầng lớp nhân dân"
        ],
        "distractors": [
          "Để tích trữ được thật nhiều vàng bạc thừa kế lại cho con cháu",
          "Chứng minh mình là người không màng thế sự và không cần làm việc"
        ],
        "feedbackOnMistake": "Lối sống giản dị hướng đến sự tự do thanh thản trong tâm hồn và sự gắn kết chân thành giữa người với người.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Bác Hồ với đôi dép cao su và bộ quần áo bà ba; Steve Jobs với trang phục tối giản.",
        "correctPhrases": [
          "Bác Hồ sống trong ngôi nhà sàn đơn sơ với chiếc áo nâu và đôi dép cao su đã đi vào huyền thoại",
          "Tỷ phú Steve Jobs luôn lựa chọn trang phục áo cổ lọ tối giản để dành toàn bộ năng lượng cho sáng tạo công nghệ"
        ],
        "distractors": [
          "Những đại gia khoe đồng hồ bạc tỷ và xe sang dát vàng trên mạng xã hội",
          "Người ăn mặc rách rưới bẩn thỉu vào dự tiệc trang trọng"
        ],
        "feedbackOnMistake": "Dẫn chứng giản dị phải toát lên khí chất văn hóa thanh cao, trí tuệ đỉnh cao của các bậc vĩ nhân.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Giản dị phù hợp hoàn cảnh; phê phán thói đua đòi ăn diện, sĩ diện hão.",
        "correctPhrases": [
          "Giản dị không đồng nghĩa với cổ hủ, từ chối sự tiện nghi văn minh của thời đại số",
          "Phê phán căn bệnh 'sĩ diện hão', đua đòi hàng hiệu và tiêu xài phung phí tiền mồ hôi nước mắt của cha mẹ"
        ],
        "distractors": [
          "Xã hội hiện đại thì ai cũng bắt buộc phải dùng đồ hiệu đắt tiền mới được tôn trọng",
          "Càng ăn mặc xuề xòa luộm thuộm nơi công cộng thì càng chứng tỏ mình giản dị"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán thói đua đòi xa hoa lãng phí, đồng thời phân biệt rõ giản dị văn minh với cẩu thả thiếu tôn trọng.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Ăn mặc đồng phục sạch sẽ, không vòi vĩnh điện thoại đắt tiền, tập trung vào tri thức.",
        "correctPhrases": [
          "Trang phục gọn gàng, đúng tác phong học sinh, không đua đòi giày dép hay điện thoại xa xỉ",
          "Dành thời gian và tiền bạc vào việc mua sách bổ ích và trau dồi tri thức thay vì hưởng thụ phù phiếm"
        ],
        "distractors": [
          "Đòi cha mẹ mua xe máy điện đời mới nhất để không bị bạn bè trong lớp chê cười",
          "Cắt xén tiền ăn sáng để mua mỹ phẩm đắt tiền trang điểm đi học"
        ],
        "feedbackOnMistake": "Vẻ đẹp đích thực của học sinh lớp 9 nằm ở nụ cười rạng rỡ, trang phục học sinh gọn gàng và trí tuệ sáng ngời.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Cái đẹp đỉnh cao là sự giản dị' - Lối sống giản dị làm tỏa sáng giá trị đích thực. Thân đoạn: Giải thích giản dị là mộc mạc thanh đạm mà tao nhã; Phân tích giá trị giải phóng tâm trí và tạo phong thái thanh cao; Dẫn chứng Bác Hồ và Steve Jobs; Phản đề giản dị văn minh, phê phán thói sĩ diện đua đòi; Bài học tuổi 15 tác phong nề nếp, tập trung trau dồi tri thức.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 13,
    "topic": "Hiện tượng áp lực đồng trang lứa (Peer pressure) của học sinh",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Hiện tượng tâm lý lo âu, tự ti khi so sánh bản thân với thành tựu của bạn bè cùng trang lứa.",
        "correctPhrases": [
          "Cảm giác tự ti, căng thẳng và lo âu khi thấy bạn bè xung quanh đạt được nhiều thành tích nổi bật hơn mình",
          "Tâm lý bị thôi thúc phải bắt chước hoặc đạt được tiêu chuẩn chung của tập thể để không bị bỏ lại phía sau"
        ],
        "distractors": [
          "Căn bệnh tâm thần phân liệt nguy hiểm cần phải cách ly khỏi trường học",
          "Thái độ coi thường tất cả bạn bè trong lớp vì nghĩ mình là người giỏi nhất"
        ],
        "feedbackOnMistake": "Áp lực đồng trang lứa là hiện tượng tâm lý lứa tuổi rất phổ biến, cần thấu hiểu bản chất chứ không phải bệnh lý kỳ thị.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Hai mặt: Vừa là gánh nặng stress, nhưng nếu biết chuyển hóa sẽ thành động lực phấn đấu.",
        "correctPhrases": [
          "Mặt tích cực: Nếu biết chuyển hóa, áp lực sẽ trở thành động lực thúc đẩy nỗ lực hoàn thiện bản thân",
          "Mặt tiêu cực: Gây tổn thương tâm lý, stress kéo dài, dẫn đến đánh mất bản sắc và sự tự tin vốn có"
        ],
        "distractors": [
          "Chỉ có tác hại tiêu cực 100% và không mang lại bất kỳ ý nghĩa tích cực nào",
          "Giúp học sinh lập tức đứng đầu trường mà không cần phải bỏ công sức học"
        ],
        "feedbackOnMistake": "Lập luận về hiện tượng đời sống phải nhìn nhận đa chiều cả mặt nguy cơ lẫn cơ hội chuyển hóa thành động lực tích cực.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Học sinh so sánh điểm số, profile Facebook; câu chuyện 'con nhà người ta'.",
        "correctPhrases": [
          "Nhiều học sinh rơi vào trầm cảm vì liên tục bị gia đình đem so sánh với hình mẫu 'con nhà người ta'",
          "Các bạn trẻ chủ động biến áp lực cạnh tranh mùa thi vào 10 thành quyết tâm lập kế hoạch học tập khoa học"
        ],
        "distractors": [
          "Một học sinh bỏ học đi chơi game suốt ngày để quên đi áp lực cuộc sống",
          "Ghen ghét xé rách sách vở của bạn học giỏi nhất lớp để bạn không được điểm cao"
        ],
        "feedbackOnMistake": "Dẫn chứng cần phản ánh thực tế học đường và nêu bật tấm gương biết vượt qua so sánh để tìm lại chính mình.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Mỗi người có múi giờ phát triển riêng; phê phán thái độ ghen tị đố kỵ hẹp hòi.",
        "correctPhrases": [
          "Mỗi người là một hạt giống với thời điểm nở hoa và thế mạnh riêng biệt, không ai giống ai",
          "Phê phán thái độ đố kỵ, tự ti hoặc bắt chước mù quáng đánh mất bản sắc cá nhân"
        ],
        "distractors": [
          "Tất cả mọi học sinh đều phải đạt học sinh xuất sắc và đỗ trường chuyên mới là người có giá trị",
          "Nếu thấy bạn giỏi hơn thì tốt nhất nên nghỉ chơi để không bị áp lực"
        ],
        "feedbackOnMistake": "Phản đề cần khẳng định giá trị độc bản của mỗi cá nhân, phê phán việc tự dằn vặt mình theo thước đo của người khác.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Tập trung tiến bộ so với chính mình hôm qua, trân trọng thế mạnh bản thân.",
        "correctPhrases": [
          "Ngừng so sánh mình với người khác, hãy lấy bản thân ngày hôm qua làm thước đo để tiến bộ từng ngày",
          "Chủ động chia sẻ áp lực với cha mẹ, thầy cô và biến sự ngưỡng mộ bạn bè thành cảm hứng học tập"
        ],
        "distractors": [
          "Khóa Facebook và cắt đứt liên lạc với bạn bè giỏi hơn để tâm lý thoải mái",
          "Uống thuốc ngủ tự làm hại bản thân khi bị điểm kém trong kỳ thi thử"
        ],
        "feedbackOnMistake": "Học sinh tuổi 15 hãy nhớ: 'Mỗi bông hoa đều có hương sắc riêng', chỉ cần bạn tiến bộ hơn chính mình ngày hôm qua là đã chiến thắng!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Áp lực đồng trang lứa - con dao hai lưỡi trong thế giới học trò. Thân đoạn: Giải thích tâm lý tự ti khi so sánh với thành tích của bạn bè; Phân tích hai mặt nguy cơ trầm cảm và cơ hội bứt phá nội lực; Dẫn chứng hội chứng 'con nhà người ta' và nỗ lực bứt phá; Phản đề mỗi người có múi giờ riêng, phê phán thói đố kỵ; Bài học tuổi 15 lấy mình của ngày hôm qua làm thước đo phấn đấu.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 14,
    "topic": "Hiện tượng nghiện mạng xã hội và lối sống ảo",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Tình trạng lệ thuộc quá mức vào các nền tảng số, xao nhãng đời thực.",
        "correctPhrases": [
          "Tình trạng lệ thuộc quá mức vào thế giới ảo trên các nền tảng mạng như TikTok, Facebook, Instagram",
          "Thói quen dành hàng giờ lướt màn hình vô thức, coi lượt like và bình luận ảo là thước đo giá trị bản thân"
        ],
        "distractors": [
          "Việc sử dụng máy tính và mạng internet để tra cứu tài liệu học tập văn minh",
          "Một căn bệnh truyền nhiễm lây lan qua đường hô hấp trong trường học"
        ],
        "feedbackOnMistake": "Nghiện mạng xã hội là sự phụ thuộc tâm lý tiêu cực vào lượt tương tác ảo, khác với việc sử dụng internet phục vụ học tập.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Tác hại khôn lường: Lãng phí thời gian, sa sút học tập, xói mòn tương tác đời thực.",
        "correctPhrases": [
          "Đánh cắp quỹ thời gian quý báu dành cho học tập, rèn luyện thể chất và gắn kết gia đình",
          "Gây sa sút thị lực, rối loạn giấc ngủ, gia tăng cảm giác cô đơn và lo âu trầm cảm"
        ],
        "distractors": [
          "Giúp học sinh tự động trở thành thần đồng mà không cần đến trường lớp",
          "Là cách duy nhất để con người giao tiếp trong xã hội hiện đại"
        ],
        "feedbackOnMistake": "Cần phân tích sâu sắc tác hại kép về cả thể chất, sức khỏe tâm thần và kết quả học tập của căn bệnh nghiện mạng xã hội.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Học sinh thức khuya lướt TikTok đến 2-3h sáng; phong trào 'cai nghiện màn hình' (Digital Detox).",
        "correctPhrases": [
          "Thực trạng nhiều bạn trẻ thức trắng đêm 'cày view' TikTok khiến ban ngày ngủ gục trên bàn học và tụt dốc điểm số",
          "Trào lưu 'Detox công nghệ' - tự nguyện rời xa điện thoại vào cuối tuần để đọc sách và trò chuyện cùng gia đình"
        ],
        "distractors": [
          "Những video trêu đùa phản cảm, câu like bất chấp đạo đức của các Tiktoker vô danh",
          "Bỏ nhà đi bụi vì cha mẹ thu điện thoại sau khi thi trượt"
        ],
        "feedbackOnMistake": "Dẫn chứng cần nêu bật sự đối lập giữa hệ lụy tai hại của nghiện mạng với xu hướng tích cực chủ động cai nghiện màn hình.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Mạng xã hội không xấu, quan trọng là cách dùng; phê phán thái độ bài xích công nghệ cực đoan.",
        "correctPhrases": [
          "Mạng xã hội chỉ là công cụ vô tri, bản chất xấu hay tốt hoàn toàn phụ thuộc vào bản lĩnh người sử dụng",
          "Phê phán quan điểm cực đoan cấm đoán mù quáng công nghệ thay vì hướng dẫn sử dụng thông minh"
        ],
        "distractors": [
          "Mạng xã hội là nguồn gốc của mọi tội ác nên cần phải cấm triệt để trên toàn cầu",
          "Học sinh cấp 2 thì không cần biết bất kỳ điều gì về công nghệ thông tin"
        ],
        "feedbackOnMistake": "Phản đề phải biện chứng: Công nghệ là phương tiện tuyệt vời nếu ta làm chủ nó, nhưng là ông chủ tồi tệ nếu ta làm nô lệ cho nó.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Đặt giới hạn thời gian (Screen time), ưu tiên ôn thi vào 10, sống trọn vẹn đời thực.",
        "correctPhrases": [
          "Cài đặt giới hạn thời gian sử dụng điện thoại không quá 30 - 45 phút mỗi ngày cho giải trí lành mạnh",
          "Tập trung toàn tâm toàn ý cho mục tiêu ôn thi vào 10, tăng cường thể thao và trò chuyện trực tiếp cùng cha mẹ"
        ],
        "distractors": [
          "Đập nát điện thoại để thể hiện quyết tâm cai nghiện rồi sau đó lại xin tiền mua máy mới",
          "Dành cả ngày tạo tài khoản ảo để vào tranh cãi tay đôi trên các diễn đàn mạng"
        ],
        "feedbackOnMistake": "Giải pháp tuổi 15 cần kỷ luật tự giác, kiểm soát Screen time và đầu tư thời gian cho kỳ thi quan trọng trước mắt.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Mạng xã hội - người hầu tốt nhưng là ông chủ tồi' - Lời cảnh tỉnh cho thói sống ảo. Thân đoạn: Giải thích hiện tượng nghiện mạng xã hội và lối sống lệ thuộc nút like; Phân tích tác hại đánh cắp thời gian và hủy hoại sức khỏe tâm thần; Dẫn chứng thực trạng thức đêm lướt TikTok và xu hướng Digital Detox; Phản đề làm chủ công nghệ, phê phán bài xích cực đoan; Bài học tuổi 15 giới hạn Screen time và tập trung ôn thi vào 10.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 15,
    "topic": "Bạo lực học đường và vấn nạn bắt nạt trên không gian mạng (Cyberbullying)",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Hành vi bạo hành thể xác, tinh thần và cô lập nạn nhân cả ngoài đời lẫn trên mạng xã hội.",
        "correctPhrases": [
          "Những hành vi lăng mạ, bạo lực thể xác, cô lập tinh thần hoặc bôi nhọ danh dự bạn học nơi trường lớp",
          "Vấn nạn tấn công tập đồng, thóa mạ và khủng bố tinh thần nạn nhân thông qua các hội nhóm trên mạng xã hội"
        ],
        "distractors": [
          "Những trò trêu đùa hồn nhiên vô hại của tuổi học trò không gây bất kỳ tổn thương nào",
          "Sự tranh luận học thuật sôi nổi để tìm ra lời giải chính xác cho bài toán khó"
        ],
        "feedbackOnMistake": "Bạo lực học đường và bạo lực mạng mang tính chất hủy hoại danh dự, tổn thương tâm lý sâu sắc, tuyệt đối không phải trò đùa.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Hậu quả tàn khốc: Gây ám ảnh tâm lý, hủy hoại môi trường giáo dục, xói mòn đạo đức.",
        "correctPhrases": [
          "Để lại vết thương tâm lý vĩnh viễn, khiến nạn nhân rơi vào sợ hãi, trầm cảm, thậm chí tự tìm đến cái chết",
          "Bào mòn đạo đức học đường, biến trường học từ nơi ươm mầm tri thức thành nỗi ám ảnh kinh hoàng"
        ],
        "distractors": [
          "Giúp rèn luyện bản lĩnh kiên cường cho học sinh bị bắt nạt trở nên mạnh mẽ hơn",
          "Để nhà trường có cơ hội lập kỷ lục xử phạt nhiều học sinh vi phạm nhất"
        ],
        "feedbackOnMistake": "Bạo lực học đường là hành vi vô nhân tính cần bị đẩy lùi triệt để, không thể bao biện bằng lý lẽ 'rèn luyện bản lĩnh'.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Nhiều vụ việc đau lòng vì bị lập nhóm tẩy chay; chiến dịch 'Nói không với bạo lực học đường'.",
        "correctPhrases": [
          "Những vụ việc đau lòng khi học sinh nữ bị bạn bè lập nhóm 'anti' bôi nhọ trên mạng dẫn đến trầm cảm tự vẫn",
          "Phong trào học sinh ký cam kết 'Trường học hạnh phúc - Không bạo lực, ngập tràn yêu thương' được triển khai rộng khắp"
        ],
        "distractors": [
          "Học sinh tụ tập đánh nhau có quay clip phát trực tiếp để thu hút bình luận cổ vũ",
          "Một nhóm học sinh mang hung khí vào cổng trường giải quyết mâu thuẫn"
        ],
        "feedbackOnMistake": "Dẫn chứng cần mang tính cảnh tỉnh nhân văn sâu sắc và lan tỏa những giải pháp xây dựng trường học hạnh phúc.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Không chỉ người đánh có lỗi, kẻ im lặng hùa theo cũng tiếp tay cho tội ác.",
        "correctPhrases": [
          "Sự im lặng vô cảm, đứng ngoài quay clip cổ vũ của đám đông chính là đồng lõa nguy hiểm tiếp tay cho bạo lực",
          "Phê phán thái độ thờ ơ, giấu giếm vụ việc vì bệnh thành tích của một số cá nhân và cơ sở giáo dục"
        ],
        "distractors": [
          "Khi thấy bạn bị đánh thì tốt nhất đứng quay phim rồi đăng Facebook cho vui",
          "Nạn nhân bị bắt nạt chắc chắn phải có lỗi lầm gì đó thì mới bị bạn bè trừng phạt"
        ],
        "feedbackOnMistake": "Phản đề cần lên án cả thói vô cảm quay clip câu view và thái độ đổ lỗi ngược cho nạn nhân (Victim blaming).",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Xây dựng tình bạn trong sáng, dũng cảm lên tiếng báo cáo thầy cô, không hùa theo tẩy chay.",
        "correctPhrases": [
          "Dũng cảm lên tiếng bênh vực nạn nhân, kịp thời báo cáo với thầy cô và phụ huynh khi phát hiện bạo lực",
          "Tuyệt đối không tham gia like, share, bình luận ác ý hoặc hùa theo các trào lưu bôi nhọ người khác trên mạng"
        ],
        "distractors": [
          "Tìm cách lập băng nhóm riêng để sẵn sàng dùng nắm đấm trả thù những bạn đã bắt nạt mình",
          "Xem như không thấy gì để giữ an toàn tuyệt đối cho bản thân mình trước đã"
        ],
        "feedbackOnMistake": "Học sinh tuổi 15 phải là sứ giả hòa bình trong lớp học, dũng cảm báo cáo người lớn và từ chối bấm nút like cho cái xấu.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Bạo lực học đường - vết sẹo nhức nhối làm hoen ố vẻ đẹp tuổi học trò'. Thân đoạn: Giải thích hành vi bạo lực thân thể và bạo lực mạng lăng mạ tinh thần; Phân tích hậu quả chấn thương tâm lý tàn khốc và hủy hoại môi trường học đường; Dẫn chứng đau xót và phong trào Trường học hạnh phúc; Phản đề lên án sự vô cảm quay clip và bệnh thành tích; Bài học tuổi 15 dũng cảm tố giác và kiên quyết nói không với nút like độc hại.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 16,
    "topic": "Thói vô cảm trong xã hội hiện đại",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Thái độ dửng dưng, trơ lì cảm xúc trước nỗi đau và sự bất công xảy ra xung quanh mình.",
        "correctPhrases": [
          "Trạng thái trơ lì cảm xúc, thờ ơ, dửng dưng trước nỗi đau đớn, bất hạnh của đồng loại",
          "Thái độ 'cháy nhà hàng xóm bình chân như vại', chỉ biết bo bo quyền lợi ích kỷ của bản thân"
        ],
        "distractors": [
          "Sự bình tĩnh, tỉnh táo của người làm việc cứu hộ khi đứng trước nguy hiểm",
          "Đức tính kín đáo, ít nói và không thích khoa trương cảm xúc ra bên ngoài"
        ],
        "feedbackOnMistake": "Vô cảm là căn bệnh tâm hồn tê liệt lòng trắc ẩn, hoàn toàn khác với 'sự bình tĩnh lý trí' hay 'tính cách kín đáo'.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Biến xã hội thành sa mạc lạnh lẽo, dung túng cho cái ác lộng hành, đánh mất tính người.",
        "correctPhrases": [
          "Bào mòn lương tri, biến con người thành những cỗ máy vô hồn và biến xã hội thành sa mạc lạnh giá",
          "Là mảnh đất màu mỡ dung dưỡng cho cái ác, cái xấu hoành hành vì không ai dám can thiệp ngăn chặn"
        ],
        "distractors": [
          "Giúp con người sống trường thọ vì không bao giờ phải bận tâm suy nghĩ về người khác",
          "Để giữ cho đầu óc luôn luôn nhẹ nhõm không bị phiền toái bởi xã hội"
        ],
        "feedbackOnMistake": "Thói vô cảm hủy hoại gốc rễ đạo đức nhân loại: 'Nơi lạnh nhất không phải là Bắc Cực mà là nơi không có tình thương'.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Người đi đường giơ điện thoại quay clip người bị nạn thay vì cứu giúp; đối lập với người lao mình cứu đuối.",
        "correctPhrases": [
          "Hình ảnh những đám đông xúm lại giơ điện thoại quay clip phát trực tiếp khi thấy người bị tai nạn thay vì đưa đi cấp cứu",
          "Tấm gương anh Nguyễn Ngọc Dũng không ngần ngại lao xuống dòng nước xiết cứu ba em nhỏ thoát chết đuối"
        ],
        "distractors": [
          "Một người lái xe đi qua thấy tai nạn nhưng giả vờ như không nhìn thấy gì",
          "Học sinh chứng kiến cụ già qua đường khó khăn nhưng vẫn đứng nhìn cười đùa"
        ],
        "feedbackOnMistake": "Dẫn chứng cần tạo độ tương phản gay gắt giữa sự trơ lì vô cảm của đám đông với ngọn lửa ấm áp của hành động trượng nghĩa.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Vô cảm là căn bệnh tâm hồn nguy hiểm hơn cả dịch bệnh; phê phán lối sống vị kỷ cầu an.",
        "correctPhrases": [
          "Thói vô cảm nguy hiểm hơn cả bệnh tật vì nó giết chết nhân tính một cách âm thầm, lặng lẽ",
          "Phê phán lối sống cầu an 'khôn lỏi', sợ liên lụy nên ngoảnh mặt làm ngơ trước nỗi đau đồng loại"
        ],
        "distractors": [
          "Xã hội văn minh hiện đại thì mỗi người chỉ cần lo cho bản thân mình là đủ",
          "Giúp đỡ người khác luôn mang lại rắc rối nên tốt nhất là thờ ơ"
        ],
        "feedbackOnMistake": "Phản đề phải vạch rõ: 'Thế giới chìm trong đau khổ không chỉ vì tội ác của kẻ xấu mà còn vì sự im lặng đáng sợ của người tốt'!",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Mở rộng lòng trắc ẩn, biết sẻ chia cùng bạn bè, tích cực giúp đỡ người khó khăn.",
        "correctPhrases": [
          "Tập quan sát và thấu cảm với nỗi buồn của cha mẹ, bạn bè; sẵn sàng chìa tay giúp đỡ khi ai đó cần",
          "Tích cực tham gia các hoạt động từ thiện, quyên góp áo ấm vùng cao và hiến máu nhân đạo khi đủ tuổi"
        ],
        "distractors": [
          "Chỉ quan tâm đến điểm số của bản thân, bạn bè bị điểm kém thì cười cợt chế giễu",
          "Lờ đi khi thấy một em nhỏ bị lạc trong công viên vì sợ bị lừa đảo"
        ],
        "feedbackOnMistake": "Bài học tuổi 15 là nuôi dưỡng trái tim ấm nóng tình người từ những hành động quan tâm, sẻ chia nhỏ nhất mỗi ngày.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Nơi lạnh nhất không phải là Bắc Cực, mà là nơi thiếu vắng tình thương' - Báo động thói vô cảm. Thân đoạn: Giải thích vô cảm là sự tê liệt lòng trắc ẩn trước nỗi đau đồng loại; Phân tích hậu quả biến xã hội thành sa mạc lạnh giá và tiếp tay cho cái ác; Dẫn chứng đám đông quay clip tai nạn đối lập hiệp sĩ cứu người đuối nước; Phản đề phê phán lối sống cầu an sợ phiền toái; Bài học tuổi 15 nuôi dưỡng trái tim biết rung cảm và sẻ chia.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 17,
    "topic": "Lối sống chữa lành (Healing) của giới trẻ: Bản chất tích cực và trào lưu lệch lạc",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Chữa lành: Quá trình xoa dịu tổn thương tinh thần để phục hồi năng lượng sống tích cực.",
        "correctPhrases": [
          "Quá trình thấu hiểu, chăm sóc và hàn gắn những tổn thương tâm lý để tìm lại sự an yên trong tâm hồn",
          "Nhu cầu chăm sóc sức khỏe tinh thần chính đáng của con người trong nhịp sống hiện đại nhiều áp lực"
        ],
        "distractors": [
          "Cái cớ để trốn tránh mọi nghĩa vụ học tập, lao động và buông xuôi trách nhiệm",
          "Một nghi thức mê tín dị đoan tốn kém tiền bạc để giải trừ vận đen"
        ],
        "feedbackOnMistake": "Chữa lành đích thực là tái tạo năng lượng nội tâm để sống tích cực hơn, không phải cái cớ trốn tránh hiện thực cuộc sống.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Mặt tích cực: Giúp cân bằng cuộc sống; Mặt biến tướng: Lạm dụng từ ngữ, lười biếng, ảo tưởng.",
        "correctPhrases": [
          "Mặt tích cực: Giúp con người lắng đọng, phục hồi nội lực sau những biến cố và áp lực học hành, công việc",
          "Mặt tiêu cực (khi bị lạm dụng): Biến thành trào lưu 'mong manh dễ vỡ', lười biếng và biện minh cho thói vô kỷ luật"
        ],
        "distractors": [
          "Chữa lành giúp học sinh không bao giờ cần phải thi cử vất vả mà vẫn đỗ đạt",
          "Là cách duy nhất để con người thoát khỏi áp lực của cuộc sống thực tế"
        ],
        "feedbackOnMistake": "Cần phân biệt rạch ròi giữa 'chăm sóc tâm lý lành mạnh' với 'căn bệnh mong manh thích đóng vai nạn nhân'.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Bạn trẻ tập thiền, đi bộ hòa mình với thiên nhiên; đối lập với việc lấy cớ chữa lành để bỏ học đi chơi.",
        "correctPhrases": [
          "Nhiều bạn trẻ chọn lối sống hòa mình vào thiên nhiên, đọc sách và tập yoga để tái tạo năng lượng học tập",
          "Hiện tượng một số bạn trẻ hễ gặp một chút áp lực bài tập là đòi 'đi du lịch chữa lành' và tiêu xài phung phí"
        ],
        "distractors": [
          "Học sinh viện cớ tâm lý bị tổn thương để bỏ học đi chơi game suốt tuần",
          "Một người mua các khóa học tâm linh nghìn đô trên mạng để tự xưng mình đã giác ngộ"
        ],
        "feedbackOnMistake": "Dẫn chứng cần phản ánh đúng trào lưu thời thượng của giới trẻ, phê phán thói đua đòi chữa lành tốn kém và hời hợt.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Muốn chữa lành phải đối diện chứ không phải trốn chạy; phê phán thói 'dễ vỡ'.",
        "correctPhrases": [
          "Chữa lành thực sự không nằm ở những chuyến đi xa xỉ, mà nằm ở năng lực đối diện và chấp nhận thử thách",
          "Phê phán hội chứng 'thế hệ dâu tây' - bề ngoài bóng bẩy nhưng tâm lý mong manh, dễ vỡ trước nghịch cảnh"
        ],
        "distractors": [
          "Áp lực học tập thi cử là tội ác cần phải loại bỏ hoàn toàn khỏi nền giáo dục",
          "Chỉ cần đi nghỉ dưỡng khách sạn 5 sao là mọi tổn thương tâm lý sẽ tự biến mất"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán 'thế hệ dâu tây' ẻo lả, khẳng định thuốc chữa lành tốt nhất chính là sự mạnh mẽ đối diện thực tại.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Xây dựng thói quen sống lành mạnh, rèn luyện thể thao, đối diện dũng cảm với kỳ thi vào 10.",
        "correctPhrases": [
          "Rèn luyện 'sức khỏe tinh thần' bằng thói quen ngủ đủ giấc, tập thể dục đều đặn và suy nghĩ lạc quan tích cực",
          "Dũng cảm đối diện với những áp lực thi cử, biến lo âu thành hành động cụ thể: giải từng đề thi, ôn từng bài học"
        ],
        "distractors": [
          "Hễ bị điểm kém là tự cho phép mình nghỉ học ở nhà một tuần để 'chữa lành'",
          "Đòi cha mẹ cho đi du lịch nước ngoài thì mới có tâm trạng ôn thi vào lớp 10"
        ],
        "feedbackOnMistake": "Học sinh lớp 9 hãy nhớ: Phương thuốc chữa lành tốt nhất cho áp lực thi cử chính là sự chuẩn bị kiến thức vững vàng!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Chữa lành' - từ khóa thời thượng của giới trẻ và những trăn trở về bản lĩnh sống. Thân đoạn: Giải thích nhu cầu xoa dịu tâm hồn và phục hồi năng lượng; Phân tích hai mặt: cân bằng cảm xúc đối lập thói lười biếng mong manh; Dẫn chứng lối sống tối giản đối lập trào lưu đi chơi xa xỉ; Phản đề chữa lành là đối diện chứ không trốn chạy, phê phán 'thế hệ dâu tây'; Bài học tuổi 15 xây dựng lối sống lành mạnh, kiên cường vượt vũ môn.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 18,
    "topic": "Lối sống xanh và ý thức bảo vệ môi trường của thế hệ trẻ",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Lối sống thân thiện với tự nhiên, giảm rác thải, tiết kiệm tài nguyên vì tương lai bền vững.",
        "correctPhrases": [
          "Lối sống hài hòa với thiên nhiên, ưu tiên sử dụng các sản phẩm thân thiện với môi trường và tái tạo",
          "Ý thức chủ động giảm thiểu rác thải nhựa, tiết kiệm năng lượng để bảo vệ hành tinh xanh"
        ],
        "distractors": [
          "Trào lưu đua đòi mua sắm những món đồ đắt tiền chỉ vì chúng có nhãn mác màu xanh lá cây",
          "Từ bỏ hoàn toàn mọi tiện nghi hiện đại và quay về cuộc sống săn bắt hái lượm nguyên thủy"
        ],
        "feedbackOnMistake": "Sống xanh là hành động văn minh bảo vệ hệ sinh thái, không phải trào lưu mua sắm màu mè hay tư tưởng cực đoan.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Bảo vệ sự sống của Trái Đất, ngăn chặn biến đổi khí hậu, giữ gìn tương lai cho muôn đời sau.",
        "correctPhrases": [
          "Góp phần làm chậm quá trình biến đổi khí hậu, bảo tồn hệ sinh thái đa dạng cho thế hệ tương lai",
          "Nâng cao chất lượng sống và sức khỏe của chính bản thân thông qua thực phẩm sạch và không khí trong lành"
        ],
        "distractors": [
          "Để chụp ảnh sống ảo và thu hút lượt theo dõi trên mạng xã hội là chính",
          "Giúp nhà nước tiết kiệm toàn bộ ngân sách chi trả cho công nhân vệ sinh môi trường"
        ],
        "feedbackOnMistake": "Bảo vệ môi trường là bảo vệ sự sống còn của chính nhân loại trước nguy cơ diệt vong do biến đổi khí hậu.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Chiến dịch nhặt rác 'Hà Nội Xanh', 'Sài Gòn Xanh'; mang bình nước cá nhân thay cốc nhựa dùng 1 lần.",
        "correctPhrases": [
          "Các bạn trẻ nhóm 'Sài Gòn Xanh' bất chấp bùn lầy, hôi thối dọn dẹp hàng trăm con kênh rạch ô nhiễm",
          "Thói quen mang theo bình nước cá nhân, túi vải đi chợ và từ chối ống hút nhựa của học sinh, sinh viên"
        ],
        "distractors": [
          "Tùy tiện vứt túi nilon xuống cống rãnh sau khi ăn xong bữa xế trước cổng trường",
          "Dùng hàng chục chiếc túi bóng chỉ để đựng một vài món đồ ăn vặt nhỏ"
        ],
        "feedbackOnMistake": "Dẫn chứng cần nêu bật hành động dấn thân quả cảm của các nhóm bạn trẻ dọn kênh rạch và thay đổi thói quen dùng đồ nhựa.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Sống xanh từ hành động nhỏ liên tục; phê phán thói 'phông bạt' hô khẩu hiệu suông.",
        "correctPhrases": [
          "Sống xanh cần được duy trì thành thói quen kỷ luật mỗi ngày, không chỉ là phong trào 'làm màu' nhất thời",
          "Phê phán thói ích kỷ 'tiện tay xả rác' và tư tưởng cho rằng bảo vệ môi trường là việc của ai khác"
        ],
        "distractors": [
          "Một người vứt rác thì có sao đâu, bao giờ mọi người không vứt thì mình mới dừng",
          "Bảo vệ môi trường chỉ là việc của các nhà môi trường học, học sinh không làm được gì"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán căn bệnh 'tiện tay vứt rác' và tư tưởng ỷ lại, nhấn mạnh mỗi chiếc túi nilon bớt đi là một mầm xanh thêm cho Trái Đất.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Phân loại rác tại nguồn, tắt điện khi ra khỏi lớp, sử dụng giấy nháp tiết kiệm.",
        "correctPhrases": [
          "Tự giác phân loại rác thải tại trường lớp và gia đình, tích cực tham gia phong trào 'Kế hoạch nhỏ'",
          "Tắt đèn, quạt khi ra khỏi phòng học và ưu tiên đi bộ hoặc xe đạp khi di chuyển quãng đường ngắn"
        ],
        "distractors": [
          "Chỉ tham gia nhặt rác khi có máy ảnh của đoàn trường chụp ảnh tuyên dương",
          "Vứt pin đã qua sử dụng chung với rác sinh hoạt hàng ngày ra ngoài vườn"
        ],
        "feedbackOnMistake": "Hành động tuổi 15 bắt đầu từ việc tắt một bóng điện, phân loại pin cũ và nhặt một mẩu rác nơi sân trường.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Mẹ thiên nhiên đang kêu cứu' - Lối sống xanh là mệnh lệnh từ trái tim người trẻ. Thân đoạn: Giải thích sống xanh là tôn trọng tự nhiên và giảm thiểu rác thải; Phân tích giá trị bảo tồn sự sống và nâng cao sức khỏe; Dẫn chứng nhóm Sài Gòn Xanh và thói quen mang bình nước; Phản đề sống xanh bền bỉ, phê phán thói phong trào làm màu; Bài học tuổi 15 phân loại rác tại nguồn và tiết kiệm điện nước trường lớp.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 19,
    "topic": "Văn hóa ứng xử nơi công cộng và trên không gian mạng",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Cách giao tiếp văn minh, tôn trọng người khác, giữ gìn trật tự chung ngoài đời và trên mạng.",
        "correctPhrases": [
          "Chuẩn mực giao tiếp, thái độ lịch thiệp và tôn trọng mọi người trong không gian chung của xã hội",
          "Ý thức giữ gìn sự văn minh, sử dụng ngôn từ tử tế cả trong đời thực lẫn trên bàn phím mạng xã hội"
        ],
        "distractors": [
          "Thói quen nói tục chửi thề và văng tục tự do vì cho rằng đó là quyền tự do ngôn luận",
          "Sự khúm núm quỳ lạy trước người giàu có để mong được ban phát bổng lộc"
        ],
        "feedbackOnMistake": "Văn hóa ứng xử là sự lịch thiệp, tôn trọng người khác có chừng mực, không đồng nghĩa với tự do văng tục hay quỵ lụy hèn kém.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Xây dựng xã hội văn minh, an toàn, khẳng định phẩm giá và lòng tự trọng cá nhân.",
        "correctPhrases": [
          "Tạo nên một môi trường sống văn minh, thân thiện, nơi mỗi cá nhân đều cảm thấy được an toàn và tôn trọng",
          "Là tấm gương phản chiếu trình độ văn hóa, nhân cách và sự giáo dưỡng của mỗi con người"
        ],
        "distractors": [
          "Để được khen ngợi và thưởng điểm thi đua tuyệt đối trong học bạ",
          "Giúp chúng ta dễ dàng lợi dụng lòng tốt của người khác để kiếm tiền"
        ],
        "feedbackOnMistake": "Văn hóa ứng xử phản ánh cốt cách làm người và xây dựng bầu không khí văn minh cộng đồng.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Văn hóa xếp hàng; thói xấu nói tục chửi thề, cào bàn phím mạt sát người khác.",
        "correctPhrases": [
          "Hình ảnh người dân xếp hàng trật tự, nhường ghế xe buýt cho người già và phụ nữ mang thai",
          "Hiện tượng các hội nhóm 'anh hùng bàn phím' dùng từ ngữ thô tục tấn công trang cá nhân của trọng tài quốc tế"
        ],
        "distractors": [
          "Chen lấn xô đẩy cướp lộc hoa tại các lễ hội đền chùa đầu năm",
          "Học sinh tụ tập chửi bới văng tục om sòm trong quán trà sữa"
        ],
        "feedbackOnMistake": "Dẫn chứng cần nêu bật nét đẹp xếp hàng nhường nhịn, phê phán gay gắt thói xấu chen lấn và văn hóa mạng độc hại.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Không gian mạng là ảo nhưng hậu quả là thật; phê phán thói 'vô danh nên vô pháp'.",
        "correctPhrases": [
          "Không gian mạng là ảo nhưng nỗi đau con người phải gánh chịu là thật; tự do ngôn luận phải có giới hạn đạo đức",
          "Phê phán tâm lý núp bóng tài khoản ảo để thoải mái xả rác ngôn từ, thóa mạ và xúc phạm nhân phẩm người khác"
        ],
        "distractors": [
          "Trên mạng xã hội ai thích nói gì thì nói vì không ai biết danh tính thật của mình",
          "Nơi công cộng không có camera thì có thể thoải mái vứt rác và chen hàng"
        ],
        "feedbackOnMistake": "Phản đề cần đánh trúng tâm lý 'núp bóng tài khoản ảo' coi thường luật pháp, khẳng định trách nhiệm công dân số.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Lời nói văn minh, biết nói 'cảm ơn' và 'xin lỗi', giữ gìn nề nếp thanh lịch trường học.",
        "correctPhrases": [
          "Thực hành văn hóa 'cảm ơn' và 'xin lỗi' chân thành; nói không với ngôn từ tục tĩu ở trường lớp và trên mạng",
          "Tuân thủ văn hóa xếp hàng, nhường chỗ trên phương tiện công cộng và cư xử hòa nhã với mọi người xung quanh"
        ],
        "distractors": [
          "Chia sẻ các đường link độc hại, video phản cảm để trêu đùa bạn bè trong nhóm lớp",
          "Nói xấu thầy cô và bạn bè trên các diễn đàn Confession ẩn danh"
        ],
        "feedbackOnMistake": "Ứng xử văn minh của học sinh lớp 9 thể hiện qua ngôn từ trong sáng, thái độ lễ phép và ứng xử tử tế trên không gian mạng.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Lời nói chẳng mất tiền mua / Lựa lời mà nói cho vừa lòng nhau' - Văn hóa ứng xử là tấm gương soi nhân cách. Thân đoạn: Giải thích chuẩn mực giao tiếp lịch thiệp nơi công cộng và trên không gian mạng; Phân tích giá trị kiến tạo môi trường văn minh và khẳng định phẩm giá; Dẫn chứng văn hóa xếp hàng đối lập thói cào bàn phím thô tục; Phản đề mạng ảo nhưng hậu quả thật, phê phán thói núp bóng vô danh; Bài học tuổi 15 nói lời văn minh và thực hành văn hóa cảm ơn - xin lỗi.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 20,
    "topic": "Thói ỷ lại và căn bệnh trì hoãn (Procrastination) của giới trẻ",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Thói quen chần chừ, lùi việc quan trọng lại ngày mai, ỷ lại vào người khác giải quyết hộ.",
        "correctPhrases": [
          "Thói quen lần lữa, trì hoãn công việc phải làm hôm nay để dồn lại ngày mai với tâm lý 'nước đến chân mới nhảy'",
          "Tư tưởng ỷ lại, trông chờ vào sự giúp đỡ hoặc bao bọc của cha mẹ, bạn bè mà không chịu tự mình nỗ lực"
        ],
        "distractors": [
          "Kỹ năng lập kế hoạch nghỉ ngơi điều độ để tái tạo sức lao động sau giờ học căng thẳng",
          "Sự cẩn trọng suy nghĩ kỹ càng nhiều ngày trước khi đưa ra một quyết định trọng đại"
        ],
        "feedbackOnMistake": "Trì hoãn là sự lười biếng trốn tránh nhiệm vụ hiện tại, khác hoàn toàn với 'kế hoạch nghỉ ngơi' hay 'suy xét cẩn trọng'.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Đánh mất cơ hội vàng, tích tụ áp lực khổng lồ, làm thui chột ý chí và năng lực làm việc.",
        "correctPhrases": [
          "Khiến công việc ứ đọng, tạo áp lực khủng khiếp vào phút chót dẫn đến kết quả thi cử và công việc tệ hại",
          "Đánh mất những cơ hội quý giá trong đời và dần hình thành tính cách thụ động, thiếu bản lĩnh tự chủ"
        ],
        "distractors": [
          "Giúp con người luôn luôn phát huy được năng lực thần kỳ khi bị áp lực đè nặng sát nút",
          "Để công việc tự động được người khác giải quyết giúp mà mình không cần động tay"
        ],
        "feedbackOnMistake": "Căn bệnh trì hoãn là kẻ cắp thời gian nguy hiểm nhất, làm suy sụp tinh thần và giết chết tiềm năng phát triển.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Học sinh dồn bài tập đến đêm trước ngày thi mới học dồn; hậu quả thi trượt vào 10.",
        "correctPhrases": [
          "Học sinh để dồn bài vở suốt cả học kỳ, đến đêm trước ngày thi mới thức trắng học dồn dẫn đến kiệt sức và điểm liệt",
          "Thực trạng nhiều dự án khởi nghiệp thất bại cay đắng chỉ vì người đứng đầu liên tục chần chừ không chớp thời cơ"
        ],
        "distractors": [
          "Những học sinh hoàn thành bài vở ngay trong ngày và ngủ đủ 8 tiếng mỗi đêm",
          "Một người trì hoãn suốt đời nhưng vẫn may mắn trúng số độc đắc trở thành tỷ phú"
        ],
        "feedbackOnMistake": "Dẫn chứng cần nêu bật hậu quả đau đớn của thói 'nước đến chân mới nhảy' trong mùa thi cử vào lớp 10.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Thời gian trôi qua không bao giờ trở lại; phê phán thói nuông chiều bản thân mù quáng.",
        "correctPhrases": [
          "Thời gian là tài sản công bằng và một đi không trở lại; 'việc hôm nay chớ để ngày mai'",
          "Phê phán thói nuông chiều sự lười biếng của bản thân và căn bệnh 'hứa hẹn suông' nhưng không bao giờ bắt tay làm"
        ],
        "distractors": [
          "Việc gì khó quá thì tốt nhất cứ để người khác làm trước, mình làm theo sau cho an toàn",
          "Tuổi trẻ còn dài nên cứ thong thả chơi đùa, đến tuổi 30 rồi bắt đầu phấn đấu cũng chưa muộn"
        ],
        "feedbackOnMistake": "Phản đề phải gióng lên hồi chuông cảnh tỉnh về sự hữu hạn của thời gian và thói quen hứa lèo hủy hoại tương lai.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Quy tắc 5 phút: Bắt tay làm ngay không chần chừ; chia nhỏ mục tiêu ôn tập thi vào 10.",
        "correctPhrases": [
          "Áp dụng quy tắc 'Bắt đầu ngay 5 phút' để vượt qua lực cản lười biếng ban đầu, giải quyết dứt điểm bài tập trong ngày",
          "Chia nhỏ lộ trình ôn thi vào 10 thành từng mục tiêu tuần, ngày và kiên quyết hoàn thành trước giờ đi ngủ"
        ],
        "distractors": [
          "Tự nhủ nốt ván game này rồi học nhưng sau đó lại chơi thêm 5 ván nữa",
          "Lập kế hoạch thật hoành tráng dán lên tường rồi để mặc bụi phủ mà không bao giờ thực hiện"
        ],
        "feedbackOnMistake": "Học sinh lớp 9 cần kỷ luật sắt: 'Đừng đợi đến ngày mai mới bắt đầu, vì ngày mai sẽ lại có một ngày mai khác'!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Trì hoãn là kẻ cắp thời gian số một' - Căn bệnh làm thui chột thanh xuân. Thân đoạn: Giải thích thói quen để việc hôm nay dồn lại ngày mai và thói ỷ lại; Phân tích hậu quả tích tụ áp lực khủng khiếp và đánh mất cơ hội; Dẫn chứng cảnh học dồn thức trắng đêm thi vào 10; Phản đề thời gian một đi không trở lại, phê phán thói nuông chiều bản thân; Bài học tuổi 15 chia nhỏ mục tiêu và bắt tay làm việc ngay lập tức.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 21,
    "topic": "Văn hóa đọc sách trong kỷ nguyên số",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Thói quen, nhu cầu và kỹ năng tiếp nhận tri thức qua trang sách sâu sắc, có chọn lọc.",
        "correctPhrases": [
          "Thói quen và tình yêu đọc sách, biết chủ động chọn lọc tinh hoa tri thức nhân loại để nuôi dưỡng trí tuệ",
          "Khả năng đọc sâu, suy ngẫm thấu đáo, khác biệt hoàn toàn với việc lướt tin vắn nông cạn trên mạng"
        ],
        "distractors": [
          "Việc mua thật nhiều sách đẹp về xếp lên giá để chụp ảnh khoe phòng học",
          "Bắt buộc phải đọc thuộc lòng từng câu chữ trong cuốn tiểu thuyết dày hàng ngàn trang"
        ],
        "feedbackOnMistake": "Văn hóa đọc là quá trình tiếp nhận và đối thoại tri thức bằng tư duy chiều sâu, không phải thú chơi sách làm cảnh.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Mở rộng tầm hiểu biết, bồi đắp tâm hồn, rèn luyện tư duy phản biện và ngôn ngữ.",
        "correctPhrases": [
          "Mở rộng vốn từ vựng phong phú, rèn luyện tư duy logic sâu sắc và khả năng hành văn mạch lạc",
          "Bồi đắp chiều sâu tâm hồn, nuôi dưỡng lòng trắc ẩn qua những số phận nhân vật trong văn học"
        ],
        "distractors": [
          "Để trở thành người biết tuốt và có thể chê bai tất cả những ai không đọc sách",
          "Giúp con người không bao giờ cần phải đi học hay giao tiếp với ai ngoài đời"
        ],
        "feedbackOnMistake": "Đọc sách nâng tầm hiểu biết và thanh lọc tâm hồn con người, không phải công cụ thỏa mãn tính tự phụ kiêu căng.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Bill Gates, Bác Hồ luôn dành thời gian đọc sách; các dự án 'Tủ sách vùng cao'.",
        "correctPhrases": [
          "Tỷ phú Bill Gates dù bận rộn vẫn duy trì thói quen đọc 50 cuốn sách mỗi năm và luôn mang theo sách bên mình",
          "Dự án 'Sách hóa nông thôn' của anh Nguyễn Quang Thạch đã mang hàng ngàn tủ sách đến với trẻ em nghèo"
        ],
        "distractors": [
          "Một người chỉ xem tóm tắt phim 5 phút trên TikTok rồi tự nhận mình đã đọc hết nguyên tác sách",
          "Học sinh mang truyện tranh bạo lực vào lớp giấu dưới ngăn bàn để đọc trộm"
        ],
        "feedbackOnMistake": "Dẫn chứng cần nêu bật tình yêu sách chân chính và sự lan tỏa văn hóa đọc đến với cộng đồng người nghèo khó.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Đọc sách giấy kết hợp Ebook văn minh; phê phán thói 'lười đọc' và bệnh chuộng clip ngắn.",
        "correctPhrases": [
          "Đọc sách trong thời đại số có thể linh hoạt qua sách giấy, Ebook hay sách nói, miễn là giữ được sự suy ngẫm sâu",
          "Báo động căn bệnh 'ngại đọc', chỉ thích xem video ngắn 15 giây khiến tư duy trở nên nông cạn, vụn vặt"
        ],
        "distractors": [
          "Thời đại AI rồi thì không ai cần phải đọc sách nữa vì máy tính có thể trả lời mọi câu hỏi",
          "Chỉ có sách in giấy truyền thống mới có giá trị, còn sách điện tử đều là rác rưởi"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán thói lười tư duy chuộng nội dung ngắn, đồng thời ủng hộ việc đọc sách linh hoạt trên các nền tảng số.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Mỗi ngày dành 20-30 phút đọc sách, ghi chép sổ tay văn học để ôn thi vào 10.",
        "correctPhrases": [
          "Duy trì thói quen đọc sách ít nhất 20 - 30 phút mỗi ngày trước khi đi ngủ, nói không với màn hình điện thoại",
          "Lập cuốn 'Sổ tay văn học' ghi chép lại những câu văn hay, những tư tưởng sâu sắc để làm tư liệu thi vào lớp 10"
        ],
        "distractors": [
          "Tải hàng trăm cuốn sách PDF về máy tính lưu trữ rồi không bao giờ mở ra đọc",
          "Đọc lướt qua một cuốn sách chỉ để đăng ảnh check-in quán cà phê"
        ],
        "feedbackOnMistake": "Học sinh lớp 9 hãy bắt đầu từ việc đọc những cuốn sách văn học kinh điển và ghi chép tư liệu vào sổ tay ôn thi.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Sách là ngọn đèn bất diệt của trí tuệ con người' - Bàn về văn hóa đọc thời số hóa. Thân đoạn: Giải thích đọc sâu để tiếp nhận tinh hoa tri thức; Phân tích giá trị bồi đắp ngôn ngữ và thanh lọc tâm hồn; Dẫn chứng Bill Gates và dự án Sách hóa nông thôn; Phản đề đọc sách đa nền tảng, phê phán thói lười đọc phụ thuộc clip ngắn; Bài học tuổi 15 đọc 30 phút mỗi ngày và lập sổ tay văn học.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 22,
    "topic": "Hội chứng sợ bỏ lỡ (FOMO) và tâm lý chạy theo xu hướng nhất thời",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "FOMO (Fear of Missing Out): Nỗi sợ bị tụt hậu, luôn bồn chồn muốn cập nhật và bắt chước mọi trào lưu.",
        "correctPhrases": [
          "Cảm giác bồn chồn, lo sợ mình bị tụt hậu hoặc bỏ lỡ những điều thú vị mà người khác đang trải nghiệm",
          "Tâm lý a dua, vội vã chạy theo những trào lưu nhất thời trên mạng xã hội để tìm kiếm sự công nhận ảo"
        ],
        "distractors": [
          "Khát vọng vươn lên nắm bắt các xu thế khoa học công nghệ tiên tiến của nhân loại",
          "Căn bệnh sợ bóng tối và sợ không gian hẹp ở trẻ em"
        ],
        "feedbackOnMistake": "Hội chứng FOMO là nỗi ám ảnh tâm lý sợ bị cô lập và thói a dua trào lưu, khác với khát vọng đổi mới sáng tạo lành mạnh.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Hao tổn tiền bạc, kiệt sức tinh thần, đánh mất cá tính và mục tiêu cốt lõi.",
        "correctPhrases": [
          "Khiến tâm trí luôn trong trạng thái bất an, phân tâm và tiêu tốn năng lượng vào những cuộc đua vô nghĩa",
          "Lãng phí tiền bạc, thời gian của gia đình và dần đánh mất bản sắc, mục tiêu sống chân chính của bản thân"
        ],
        "distractors": [
          "Giúp con người luôn luôn trở thành người sành điệu và dẫn đầu mọi xu thế",
          "Là động lực duy nhất giúp học sinh hòa nhập thành công vào tập thể lớp học"
        ],
        "feedbackOnMistake": "Chạy theo trào lưu chỉ đem lại sự thỏa mãn chốc lát nhưng cái giá phải trả là sự trống rỗng và kiệt quệ tinh thần.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Đổ xô xếp hàng mua trà sữa, bánh đồng xu theo trend; đối lập với người kiên định lối đi riêng.",
        "correctPhrases": [
          "Hàng ngàn người trẻ chen lấn xếp hàng hàng giờ chỉ để mua món trà sữa hoặc đồ chơi theo trend rồi bỏ dở sau vài ngày",
          "Các bạn học sinh bản lĩnh kiên định từ chối những trào lưu độc hại, tập trung trọn vẹn cho việc học và đam mê cá nhân"
        ],
        "distractors": [
          "Học sinh tự hào vì mình là người đầu tiên trong trường sở hữu món đồ chơi hot trend mới nhất",
          "Vay nợ tiền bạn bè để đi săn vé concert ca nhạc đắt đỏ cho bằng bạn bằng bè"
        ],
        "feedbackOnMistake": "Dẫn chứng cần phê phán hiện tượng 'cháy túi đu trend' và ca ngợi những bạn trẻ có bản lĩnh làm chủ lối sống riêng.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Hòa nhập không hòa tan; chuyển hóa từ FOMO sang JOMO (Joy of Missing Out - Niềm vui khi biết từ bỏ).",
        "correctPhrases": [
          "Hòa nhập với nhịp sống thời đại nhưng không hòa tan; cần tỉnh táo gạn đục khơi trong trước các trào lưu",
          "Học cách tận hưởng 'JOMO' (Niềm vui khi bỏ lỡ những điều phù phiếm) để dành trọn tâm trí cho giá trị cốt lõi"
        ],
        "distractors": [
          "Sống khép kín tuyệt đối, cắt đứt hoàn toàn liên lạc với thế giới xung quanh để không bị FOMO",
          "Càng đu trend nhiều thì càng chứng tỏ mình là người thông minh và thức thời"
        ],
        "feedbackOnMistake": "Phản đề rất sắc sảo khi đối chiếu FOMO với JOMO: Biết từ bỏ những xao nhãng vô bổ chính là chìa khóa của sự bình yên.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Xác định rõ mục tiêu thi vào 10, không bị chi phối bởi trào lưu nhất thời, sống là chính mình.",
        "correctPhrases": [
          "Xác định rõ ràng mục tiêu quan trọng nhất của tuổi 15 là kỳ thi vào 10, kiên quyết từ chối những cám dỗ vô bổ",
          "Dũng cảm là chính mình, tự tin với giá trị nội tại thay vì tìm kiếm sự công nhận qua những món đồ chạy theo mốt"
        ],
        "distractors": [
          "Bỏ tiết học đi săn lùng đồ uống đang hot trên mạng để quay video khoe bạn bè",
          "Bắt cha mẹ phải mua cho bằng được những món đồ bạn cùng bàn có"
        ],
        "feedbackOnMistake": "Tuổi 15 hãy tự hào về kiến thức và nhân cách của mình, đừng để những cơn sốt ảo trên mạng dắt mũi!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Đừng để cuộc đời bạn bị điều khiển bởi nỗi sợ bỏ lỡ' - Suy ngẫm về hội chứng FOMO. Thân đoạn: Giải thích tâm lý bồn chồn sợ tụt hậu và thói a dua trào lưu; Phân tích tác hại gây bất an tâm lý và đánh mất bản sắc; Dẫn chứng xếp hàng mua đồ theo trend đối lập kiên định lối đi riêng; Phản đề hòa nhập không hòa tan, tinh thần JOMO; Bài học tuổi 15 kiên định mục tiêu thi vào 10, tự tin là chính mình.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 23,
    "topic": "Bàn về câu nói của Lão Tử: 'Hành trình vạn dặm bắt đầu từ một bước chân'",
    "category": "Nhận định - Danh ngôn",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Giải nghĩa hình ảnh: 'Hành trình vạn dặm' (ước mơ lớn) và 'một bước chân' (hành động cụ thể đầu tiên).",
        "correctPhrases": [
          "'Hành trình vạn dặm' tượng trưng cho mục tiêu vĩ đại, lý tưởng cao cả và những thành tựu to lớn trong cuộc đời",
          "'Một bước chân' là hành động khởi đầu nhỏ bé, cụ thể nhưng mang tính quyết định để hiện thực hóa ước mơ"
        ],
        "distractors": [
          "Khuyên con người nên chăm chỉ đi bộ thể dục hàng ngày để có sức khỏe tốt",
          "Khẳng định chỉ cần bước đi một bước là tự động chạm tới đích vạn dặm mà không cần đi tiếp"
        ],
        "feedbackOnMistake": "Câu nói sử dụng nghệ thuật ẩn dụ sâu sắc: Khuyên con người biến ước mơ vĩ đại thành hành động khởi đầu cụ thể, không viển vông.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Không hành động thì ước mơ mãi là ảo ảnh; tích tiểu thành đại, vạn dặm được ghép từ từng bước nhỏ.",
        "correctPhrases": [
          "Mọi thành tựu vĩ đại của nhân loại đều được tích lũy từ những nỗ lực kiên trì, từng bước nhỏ mỗi ngày",
          "Nếu không dám bước bước chân đầu tiên thì mọi kế hoạch hoành tráng đều mãi mãi chỉ là ảo ảnh trên giấy"
        ],
        "distractors": [
          "Để con người không cần phải suy nghĩ về mục tiêu dài hạn mà chỉ cần đi lung tung",
          "Chứng minh rằng người đi bộ chậm chạp luôn thành công hơn người đi máy bay"
        ],
        "feedbackOnMistake": "Ý nghĩa triết lý: 'Tích tiểu thành đại', sức mạnh của sự khởi đầu và tính bền bỉ trên từng dặm đường.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Việt Nam từ nước nghèo thành cường quốc xuất khẩu gạo; học sinh từng ngày giải bài khó thi đỗ thủ khoa.",
        "correctPhrases": [
          "Việt Nam từ một quốc gia thiếu đói sau chiến tranh đã kiên trì từng bước đổi mới để trở thành cường quốc xuất khẩu gạo hàng đầu",
          "Các thủ khoa thi vào 10 đều bắt đầu từ việc kiên trì giải từng bài toán, viết từng đoạn văn mỗi ngày từ đầu năm học"
        ],
        "distractors": [
          "Một người ngồi nhà ôm mộng làm giàu mà không bao giờ chịu đi xin việc làm",
          "Chờ đợi đến tuần cuối cùng trước kỳ thi mới mở sách vở ra học"
        ],
        "feedbackOnMistake": "Dẫn chứng cần làm sáng tỏ sức mạnh của sự tích lũy bền bỉ từ những việc làm cụ thể mỗi ngày.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Bước chân đầu tiên cần đúng hướng; phê phán thói mơ mộng hão huyền nhưng lười biếng.",
        "correctPhrases": [
          "Bước chân đầu tiên phải đặt đúng hướng; nếu sai lầm phương hướng thì càng đi xa càng lạc lối hiểm nguy",
          "Phê phán căn bệnh 'nói nhiều làm ít', mơ ước viển vông nhưng không bao giờ chịu bắt tay vào hành động thực tế"
        ],
        "distractors": [
          "Cứ nhắm mắt bước bừa đi đâu cũng được, sai thì quay lại từ đầu",
          "Chỉ cần có ước mơ lớn là đủ, không cần phải làm những việc nhỏ bé tầm thường"
        ],
        "feedbackOnMistake": "Phản đề rất quan trọng: Hành động khởi đầu cần đi liền với định hướng đúng đắn, tránh thói hô khẩu hiệu suông.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Bắt đầu ngay hôm nay từ việc học bài, giải một đề thi thử, không trì hoãn.",
        "correctPhrases": [
          "Bắt đầu 'hành trình thi vào 10' ngay hôm nay bằng một bước chân cụ thể: giải trọn vẹn một đề toán, học thuộc một bài thơ",
          "Kiên định bước tiếp mỗi ngày, không nản lòng trước độ dài và gian nan của con đường phía trước"
        ],
        "distractors": [
          "Để dành bài tập đến tháng cuối cùng sát ngày thi mới bắt đầu bước đi",
          "Nghĩ rằng kỳ thi vào 10 quá khó khăn nên từ bỏ ước mơ vào trường THPT công lập"
        ],
        "feedbackOnMistake": "Học sinh lớp 9 hãy nhớ: Cánh cổng trường THPT mơ ước sẽ được mở ra bằng chính những bước chân chăm chỉ của bạn hôm nay!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Giới thiệu câu nói triết lý sâu sắc của Lão Tử về hành động khởi đầu. Thân đoạn: Giải thích hành trình vạn dặm là ước mơ lớn, một bước chân là hành động cụ thể; Phân tích giá trị tích tiểu thành đại và phá vỡ sự trì hoãn; Dẫn chứng sự đổi mới của đất nước và thủ khoa mùa thi; Phản đề bước đi đúng hướng, phê phán thói mơ mộng hão; Bài học tuổi 15 bắt đầu ôn tập từng bài học nhỏ mỗi ngày.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 24,
    "topic": "Bàn về lời nhắc nhở: 'Đừng sống như một hòn đá vô tri'",
    "category": "Nhận định - Danh ngôn",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Hình ảnh 'hòn đá vô tri': lối sống trơ lì, vô cảm, thụ động, không có lý tưởng và cảm xúc.",
        "correctPhrases": [
          "'Hòn đá vô tri' là ẩn dụ cho lối sống trơ trọi, nguội lạnh cảm xúc, vô cảm và không có khát vọng cống hiến",
          "Lời nhắc nhở con người phải sống một cuộc đời có ý nghĩa, biết yêu thương, rung cảm và tạo dựng giá trị"
        ],
        "distractors": [
          "Lời khuyên con người không nên điêu khắc tượng đá hay làm nghề thợ xây",
          "Khuyên con người phải cứng rắn như đá trước mọi hoàn cảnh và không được rơi nước mắt"
        ],
        "feedbackOnMistake": "Đây là hình ảnh biểu tượng nghệ thuật: Phê phán lối sống trơ lì như sỏi đá, thôi thúc con người sống tha thiết với cuộc đời.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Sống vô tri là đang chết mòn; con người khác loài vật ở trái tim biết yêu thương và sáng tạo.",
        "correctPhrases": [
          "Sống không chỉ là tồn tại sinh học, mà phải là sự thắp sáng đam mê, cống hiến và trao đi tình thương",
          "Lối sống như hòn đá sẽ biến cuộc đời thành sự tồn tại vô nghĩa, bị lãng quên và bào mòn trong vô thức"
        ],
        "distractors": [
          "Sống như hòn đá giúp con người trường sinh bất lão và không bị bệnh tật",
          "Để tiết kiệm toàn bộ năng lượng cảm xúc cho những việc lớn lao sau này"
        ],
        "feedbackOnMistake": "Ý nghĩa triết lý: 'Sống là cho đâu chỉ nhận riêng mình'. Tồn tại vô cảm chính là bi kịch lớn nhất của kiếp nhân sinh.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Bác sĩ Đặng Thùy Trâm; chàng trai Đặng Hoàng Giang với dự án tâm lý; đối lập thanh niên sống vô cảm.",
        "correctPhrases": [
          "Nữ bác sĩ Đặng Thùy Trâm dâng trọn tuổi xuân nơi chiến trường rực lửa với trái tim rực cháy yêu thương và lý tưởng",
          "Các nghệ sĩ trẻ mang âm nhạc và hội họa vào bệnh viện nhi, thắp sáng nụ cười cho những bệnh nhi ung thư hiểm nghèo"
        ],
        "distractors": [
          "Những thanh niên nằm dài trong phòng tối cả ngày dán mắt vào điện thoại, mặc kệ thế giới xung quanh",
          "Một người không bao giờ rung động trước bất kỳ hoàn cảnh đau thương nào của đồng loại"
        ],
        "feedbackOnMistake": "Dẫn chứng cần đối chiếu giữa ngọn lửa nhiệt huyết của những tâm hồn sống đẹp với sự tàn lụi của những kẻ sống mòn.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Cần độ vững vàng của đá trước cám dỗ nhưng giữ trái tim nóng ấm; phê phán thói sống mòn buông xuôi.",
        "correctPhrases": [
          "Con người cần bản lĩnh vững chãi như bàn thạch trước sóng gió cám dỗ, nhưng tâm hồn phải luôn ấm nóng tình người",
          "Phê phán hiện tượng 'sống mòn', vô cảm, trốn tránh trách nhiệm và thờ ơ với tương lai của một bộ phận giới trẻ"
        ],
        "distractors": [
          "Càng sống vô cảm, lạnh lùng thì con người càng dễ đưa ra các quyết định sáng suốt",
          "Không nên yêu thương ai vì yêu thương chỉ mang lại đau khổ và tổn thương"
        ],
        "feedbackOnMistake": "Phản đề rất tinh tế: Vững vàng như đá trước cám dỗ, nhưng trái tim phải đập nhịp đập của tình yêu thương và lẽ phải.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Mở rộng trái tim, nuôi dưỡng ước mơ thi vào 10, sống nhiệt huyết và sẻ chia với bạn bè.",
        "correctPhrases": [
          "Nuôi dưỡng trái tim biết rung cảm trước vẻ đẹp cuộc sống, biết sẻ chia và giúp đỡ những hoàn cảnh éo le",
          "Sống trọn vẹn từng ngày với mục tiêu học tập rõ ràng, tích cực tham gia các hoạt động ngoại khóa giàu tính nhân văn"
        ],
        "distractors": [
          "Tập thói quen lạnh lùng, xa lánh bạn bè để tỏ ra mình là người bí ẩn và ngầu",
          "Chỉ sống cho riêng mình và không quan tâm đến cảm xúc của cha mẹ, thầy cô"
        ],
        "feedbackOnMistake": "Bài học tuổi 15 là hãy sống như một ngọn lửa ấm áp, đừng tự biến mình thành hòn đá lạnh lùng nơi góc tối!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Đừng sống như hòn đá sống không một tình yêu' - Lời thức tỉnh sâu sắc về giá trị cuộc sống. Thân đoạn: Giải thích hòn đá vô tri là biểu tượng của lối sống trơ lì nguội lạnh; Phân tích giá trị của lẽ sống cống hiến và yêu thương; Dẫn chứng Đặng Thùy Trâm và các dự án nghệ thuật nhân ái; Phản đề cứng cỏi trước cám dỗ nhưng trái tim nồng ấm, phê phán thói sống mòn; Bài học tuổi 15 nuôi dưỡng tâm hồn rộng mở và nhiệt huyết thanh xuân.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 25,
    "topic": "Bàn về câu nói của John Shedd: 'Chiếc thuyền ở bến cảng rất an toàn, nhưng đó không phải lý do nó được đóng ra'",
    "category": "Nhận định - Danh ngôn",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Hình ảnh: 'Bến cảng an toàn' (vùng an toàn) và 'ra khơi' (sứ mệnh dấn thân, đối mặt thử thách).",
        "correctPhrases": [
          "'Chiếc thuyền ở bến cảng' tượng trưng cho vùng an toàn, sự yên ổn và không phải đối mặt với sóng gió thử thách",
          "Sứ mệnh của con thuyền là ra khơi, cũng như sứ mệnh của con người là phải dấn thân, vượt qua giới hạn để trưởng thành"
        ],
        "distractors": [
          "Khuyên các ngư dân nên bán tàu thuyền để chuyển sang làm nông nghiệp trên đất liền",
          "Khẳng định bến cảng là nơi nguy hiểm nhất đối với tất cả các loại phương tiện hàng hải"
        ],
        "feedbackOnMistake": "Câu danh ngôn mượn hình ảnh con thuyền để truyền tải triết lý sống: Giá trị của con người nằm ở sự dấn thân và khám phá.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Ở mãi trong vùng an toàn sẽ thui chột năng lực; ra khơi mới chinh phục được chân trời mới.",
        "correctPhrases": [
          "Ở mãi trong vùng an toàn con người sẽ dần bị thui chột tài năng, trở nên yếu đuối và thụ động trước cuộc đời",
          "Dám đương đầu với sóng gió biển khơi mới giúp con người khám phá tiềm năng và chinh phục những đỉnh cao mới"
        ],
        "distractors": [
          "Để chứng minh bản thân liều lĩnh hơn mọi người và sẵn sàng đánh đổi tính mạng",
          "Giúp ngành công nghiệp đóng tàu thuyền bán được nhiều sản phẩm hơn"
        ],
        "feedbackOnMistake": "Ý nghĩa: Vùng an toàn là nấm mồ chôn vùi sự phát triển. Chỉ có dấn thân mới tạo nên những kỳ tích phi thường.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Christopher Columbus dong buồm tìm ra châu Mỹ; các nhà khoa học, khởi nghiệp trẻ dấn thân.",
        "correctPhrases": [
          "Christopher Columbus dám vượt Đại Tây Dương đầy bão tố để tìm ra châu Mỹ, thay đổi tiến trình lịch sử nhân loại",
          "Các bạn trẻ khởi nghiệp dám từ bỏ công việc an nhàn để dấn thân nghiên cứu công nghệ xanh và trí tuệ nhân tạo"
        ],
        "distractors": [
          "Những người chấp nhận sống nhàn hạ dựa vào sự nuôi dưỡng của gia đình suốt đời",
          "Người đi thuyền ra biển nhưng không mang theo phao cứu sinh và la bàn định vị"
        ],
        "feedbackOnMistake": "Dẫn chứng phải tôn vinh tinh thần tiên phong khai phá, vượt khỏi ranh giới an toàn chật hẹp vì mục đích cao đẹp.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Ra khơi cần sự chuẩn bị kỹ càng (bánh lái, la bàn); phê phán sự liều lĩnh mù quáng hoặc an phận thủ thường.",
        "correctPhrases": [
          "Ra khơi không đồng nghĩa với liều lĩnh mù quáng; con thuyền cần được trang bị bánh lái, la bàn và kỹ năng vững vàng",
          "Phê phán lối sống an phận thủ thường, sợ thất bại nên không bao giờ dám ước mơ và thử sức ở những lĩnh vực mới"
        ],
        "distractors": [
          "Tốt nhất là không nên đóng thuyền nữa để không ai phải chịu nguy hiểm nơi biển khơi",
          "Chỉ những người sinh ra trong gia đình giàu có thì mới cần phải dấn thân ra khơi"
        ],
        "feedbackOnMistake": "Phản đề rất chuẩn mực: Dấn thân cần có sự chuẩn bị tri thức và kỹ năng kỹ lưỡng, tránh nhầm lẫn với sự liều mạng.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Dám bước ra khỏi vùng an toàn học tập, thử sức với các bài thi khó, dám đặt mục tiêu trường THPT top đầu.",
        "correctPhrases": [
          "Dũng cảm bước ra khỏi 'vùng an toàn', dám đăng ký nguyện vọng vào ngôi trường THPT mơ ước và dốc sức ôn luyện",
          "Chủ động trau dồi tri thức, ngoại ngữ và kỹ năng sống để sẵn sàng đương đầu với kỳ thi mang tính bước ngoặt"
        ],
        "distractors": [
          "Tự thỏa hiệp chọn một ngôi trường dưới sức mình chỉ vì sợ thi trượt và sợ vất vả",
          "Bỏ qua mọi lời khuyên của cha mẹ để đăng ký thi vào những trường không phù hợp với năng lực"
        ],
        "feedbackOnMistake": "Tuổi 15 hãy là con thuyền căng buồm ra khơi, dũng cảm đương đầu thử thách thi vào 10 để chạm tới ước mơ!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Đời người như con thuyền đứng trước đại dương' - Bàn về câu danh ngôn sâu sắc của John Shedd. Thân đoạn: Giải thích bến cảng là vùng an toàn, ra khơi là sứ mệnh dấn thân; Phân tích giá trị khai phóng năng lực và chinh phục chân trời mới; Dẫn chứng Columbus và các bạn trẻ khởi nghiệp; Phản đề dấn thân có sự chuẩn bị kỹ lưỡng, phê phán thói an phận; Bài học tuổi 15 dám đặt mục tiêu thi đỗ trường THPT mơ ước.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 26,
    "topic": "Bàn về câu nói: 'Không có áp lực, không có kim cương'",
    "category": "Nhận định - Danh ngôn",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Áp lực: Thử thách, khó khăn khắc nghiệt; Kim cương: Giá trị lấp lánh, thành công đỉnh cao.",
        "correctPhrases": [
          "'Áp lực' tượng trưng cho những khó khăn, gian khổ, thử thách khắc nghiệt và gánh nặng trong cuộc sống",
          "'Kim cương' là biểu tượng của thành công rực rỡ, vẻ đẹp hoàn mỹ và giá trị đỉnh cao của nhân cách con người"
        ],
        "distractors": [
          "Một hiện tượng địa chất học đơn thuần khuyên con người nên đi khai thác mỏ khoáng sản",
          "Khẳng định áp lực luôn luôn hủy hoại và bóp nghẹt mọi niềm vui trong cuộc sống con người"
        ],
        "feedbackOnMistake": "Câu nói mượn quy luật tự nhiên (than chì chịu áp suất nhiệt độ cực cao biến thành kim cương) để đúc kết chân lý cuộc sống.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Nghịch cảnh là lò lửa tôi luyện bản lĩnh; vượt qua áp lực mới tạo nên kỳ tích.",
        "correctPhrases": [
          "Chính những thử thách khắc nghiệt buộc con người phải vận dụng tối đa trí tuệ, nghị lực để bứt phá giới hạn",
          "Không nếm trải cay đắng gian nan thì thành công đạt được sẽ rất nông cạn và không thể bền vững"
        ],
        "distractors": [
          "Để xã hội tạo ra thật nhiều bất công và áp lực đè nặng lên vai học sinh",
          "Giúp những người giàu có ngày càng tích lũy được nhiều trang sức kim cương quý giá"
        ],
        "feedbackOnMistake": "Ý nghĩa cốt lõi: 'Lửa thử vàng, gian nan thử sức'. Áp lực chính là chất xúc tác tạo nên những nhân cách kiệt xuất.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Cầu thủ Quang Hải ghi bàn dưới trời tuyết Thường Châu; kình ngư Ánh Viên tập luyện khổ ải.",
        "correctPhrases": [
          "Đội tuyển U23 Việt Nam vượt qua áp lực bão tuyết Thường Châu làm nên kỳ tích lịch sử á quân châu Á",
          "Kình ngư Ánh Viên chịu đựng áp lực tập luyện khốc liệt hàng ngàn giờ dưới nước để giành hàng chục HCV SEA Games"
        ],
        "distractors": [
          "Một số học sinh buông xuôi bỏ thi khi thấy đề thi thử quá dài và quá khó",
          "Người luôn tìm cách trốn tránh mọi nhiệm vụ khó khăn để được sống nhàn hạ"
        ],
        "feedbackOnMistake": "Dẫn chứng cần nêu bật sự bền bỉ tôi luyện dưới áp lực phi thường để làm nên những kỳ tích rực sáng.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Áp lực cần vừa sức và có giải tỏa hợp lý; phê phán thái độ tạo áp lực tiêu cực bạo lực.",
        "correctPhrases": [
          "Áp lực cần nằm trong giới hạn chịu đựng và có phương pháp giải tỏa khoa học, tránh biến thành stress hủy hoại tâm lý",
          "Phê phán lối sống bạc nhược, sợ khó sợ khổ, hễ gặp một chút vất vả là nản lòng thoái chí"
        ],
        "distractors": [
          "Càng ép học sinh học ngày đêm không ngủ 24/24 thì học sinh càng nhanh chóng trở thành thiên tài",
          "Mọi áp lực trong cuộc sống đều xấu xa và cần phải bị loại trừ hoàn toàn"
        ],
        "feedbackOnMistake": "Phản đề rất sâu sắc: Áp lực tích cực nâng bước trưởng thành, nhưng áp lực tiêu cực quá mức sẽ làm gãy gục con người.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Xem áp lực thi vào 10 là cơ hội tôi rèn bản thân, lập kế hoạch ôn tập khoa học.",
        "correctPhrases": [
          "Xem áp lực ôn thi vào lớp 10 như một 'lò luyện' cần thiết để tôi rèn ý chí và nâng tầm tri thức của bản thân",
          "Chủ động cân bằng giữa học tập và nghỉ ngơi, biến áp lực kỳ vọng của cha mẹ thành động lực phấn đấu mỗi ngày"
        ],
        "distractors": [
          "Oán trách cha mẹ và thầy cô vì đã đặt quá nhiều kỳ vọng vào kỳ thi tuyển sinh 10",
          "Thức thâu đêm chơi game để trốn tránh áp lực bài tập về nhà"
        ],
        "feedbackOnMistake": "Tuổi 15 hãy đón nhận áp lực mùa thi với tâm thế của một viên than chì đang khao khát hóa thân thành kim cương lấp lánh!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Không có áp lực, không có kim cương' - Quy luật kỳ diệu của tự nhiên và bài học nhân sinh. Thân đoạn: Giải thích áp lực là thử thách gian khó, kim cương là giá trị thành công đỉnh cao; Phân tích giá trị lò lửa tôi luyện bản lĩnh và bứt phá giới hạn; Dẫn chứng U23 Việt Nam và Ánh Viên; Phản đề kiểm soát áp lực khoa học, phê phán sự bạc nhược; Bài học tuổi 15 biến áp lực thi vào 10 thành động lực tỏa sáng.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 27,
    "topic": "Bàn về nhận định: 'Nếu bạn không tự xây ước mơ của mình, người khác sẽ thuê bạn xây ước mơ của họ'",
    "category": "Nhận định - Danh ngôn",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Ước mơ của mình: Lý tưởng tự chủ; Thuê xây ước mơ: Sống thụ động, phục vụ cho mục tiêu người khác.",
        "correctPhrases": [
          "'Tự xây ước mơ của mình' là chủ động kiến tạo tương lai, theo đuổi đam mê và mục tiêu do chính mình lựa chọn",
          "'Bị thuê xây ước mơ của người khác' là lối sống thụ động, cam chịu biến cuộc đời mình thành công cụ cho mục tiêu của người khác"
        ],
        "distractors": [
          "Khuyên tất cả mọi người trên thế giới đều phải bỏ việc làm thuê để mở công ty làm giám đốc",
          "Coi thường và sỉ nhục những người lao động làm công ăn lương chân chính trong xã hội"
        ],
        "feedbackOnMistake": "Câu nói đề cao tinh thần làm chủ cuộc đời và ý chí theo đuổi lý tưởng riêng, không hề có ý hạ thấp lao động chân chính.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Sống có ước mơ mới có động lực sáng tạo, làm chủ số phận, không hối tiếc khi nhìn lại.",
        "correctPhrases": [
          "Ước mơ là ngọn hải đăng định hướng, mang lại niềm hạnh phúc đích thực và ngọn lửa đam mê trong lao động",
          "Sống không có ước mơ sẽ biến con người thành những bánh răng vô hồn, sống mòn trong sự nhàm chán và nuối tiếc"
        ],
        "distractors": [
          "Để chứng minh mình là người đặc biệt và không cần hợp tác với bất kỳ tổ chức nào",
          "Giúp chúng ta nhanh chóng trở thành ông chủ có quyền sai khiến người khác"
        ],
        "feedbackOnMistake": "Ý nghĩa: Ước mơ mang lại lẽ sống và phẩm giá làm chủ vận mệnh cho con người, tránh kiếp sống mòn nhạt nhẽo.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Walt Disney kiên trì với giấc mơ hoạt hình; chàng trai trẻ khởi nghiệp công nghệ.",
        "correctPhrases": [
          "Walt Disney từng bị sa thải vì 'thiếu trí tưởng tượng' nhưng kiên trì xây dựng đế chế hoạt hình Disneyland huyền thoại",
          "Các bạn trẻ Việt Nam dũng cảm theo đuổi ước mơ nông nghiệp sạch, xây dựng thương hiệu nông sản Việt vươn tầm thế giới"
        ],
        "distractors": [
          "Những người chấp nhận làm một công việc nhàm chán mà mình căm ghét suốt 40 năm chỉ vì sợ thay đổi",
          "Một người chỉ nằm mơ mộng viển vông mỗi đêm mà ban ngày không chịu làm bất cứ việc gì"
        ],
        "feedbackOnMistake": "Dẫn chứng cần ngợi ca những tấm gương quả cảm theo đuổi đam mê đến cùng để kiến tạo di sản riêng cho đời.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Ước mơ cần đi đôi với thực tế và sự kiên nhẫn học nghề; phê phán thói ảo tưởng, đứng núi này trông núi nọ.",
        "correctPhrases": [
          "Muốn tự xây ước mơ lớn, trước hết phải biết bắt đầu từ người học việc chăm chỉ và biết học hỏi từ thành công của người khác",
          "Phê phán lối sống thụ động 'nước chảy bèo trôi', không có chí tiến thủ hoặc ngược lại là ảo tưởng hão huyền"
        ],
        "distractors": [
          "Ai đi làm thuê cho công ty khác đều là những người thất bại đáng thương",
          "Cứ có ước mơ lớn là tự động có tiền bạc và thành công mà không cần học tập"
        ],
        "feedbackOnMistake": "Phản đề rất sâu sắc: Để trở thành người xây ước mơ của mình, đôi khi ta phải kiên nhẫn học việc từ những công việc nhỏ nhất.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Xác định ước mơ nghề nghiệp, chủ động chọn trường THPT phù hợp, nỗ lực thi đỗ.",
        "correctPhrases": [
          "Lắng nghe bản thân để xác định ước mơ và đam mê chân chính, không chọn trường thi theo sự a dua hay ép buộc",
          "Chủ động lên kế hoạch học tập, tích lũy tri thức và kỹ năng để từng bước biến ước mơ vào lớp 10 thành hiện thực"
        ],
        "distractors": [
          "Phó mặc toàn bộ việc chọn trường và tương lai của mình cho cha mẹ quyết định thay",
          "Từ bỏ việc học văn hóa vì cho rằng mình chỉ cần có ước mơ là đủ để thành công"
        ],
        "feedbackOnMistake": "Tuổi 15 hãy tự cầm bút vẽ nên bản thiết kế ước mơ đời mình và đặt những viên gạch tri thức đầu tiên ngay từ kỳ thi vào 10!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Ước mơ là đôi cánh nâng con người vượt lên tầm thường' - Bàn về nhận định sâu sắc về quyền tự chủ. Thân đoạn: Giải thích tự xây ước mơ là chủ động làm chủ số phận; Phân tích giá trị thắp sáng ngọn lửa đam mê và tránh lối sống mòn; Dẫn chứng Walt Disney và người trẻ khởi nghiệp xanh; Phản đề ước mơ gắn liền với rèn luyện thực tế, phê phán thói phó mặc; Bài học tuổi 15 dũng cảm xác định mục tiêu và đặt nền móng thi vào 10.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 28,
    "topic": "Bàn về câu thơ: 'Cảm ơn đời mỗi sớm mai thức dậy / Ta có thêm ngày nữa để yêu thương'",
    "category": "Nhận định - Danh ngôn",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Lòng biết ơn sự sống mỗi sớm mai thức dậy; ý thức trân trọng từng ngày để sống và trao gửi tình yêu thương.",
        "correctPhrases": [
          "Lời cảm tạ chân thành đối với món quà sự sống vô giá mà tạo hóa và cuộc đời ban tặng mỗi sớm mai",
          "Ý thức sâu sắc về việc tận dụng từng ngày được sống để trao đi yêu thương, lòng nhân ái và cống hiến cho đời"
        ],
        "distractors": [
          "Lời than thở về việc mỗi buổi sáng phải thức dậy sớm để đi học và đi làm vất vả",
          "Khuyên con người nên ngủ nướng thật nhiều để tận hưởng tình yêu thương"
        ],
        "feedbackOnMistake": "Hai câu thơ của Kahlil Gibran (bản dịch của nhà thơ Trịnh Công Sơn / Phạm Thiên Thư) là khúc hoan ca về lòng biết ơn cuộc đời và sự sống.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Được sống là một ân huệ; yêu thương là cội nguồn của hạnh phúc đích thực.",
        "correctPhrases": [
          "Mỗi sớm mai thức dậy ta còn khỏe mạnh và có gia đình bên cạnh đã là một đặc ân to lớn so với bao số phận bất hạnh",
          "Yêu thương và được yêu thương là cội nguồn của mọi hạnh phúc, giúp xoa dịu những nhọc nhằn và kết nối nhân loại"
        ],
        "distractors": [
          "Để con người không cần phải lo lắng về tương lai hay chuẩn bị cho ngày mai",
          "Giúp ta có lý do chính đáng để đòi hỏi người khác phải yêu thương phục vụ mình"
        ],
        "feedbackOnMistake": "Giá trị: Thức tỉnh con người trân quý thực tại và nuôi dưỡng lòng trắc ẩn ấm áp giữa dòng đời vội vã.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Bệnh nhân ung thư lạc quan sống từng ngày; câu chuyện về sự tử tế mỗi ngày.",
        "correctPhrases": [
          "Những bệnh nhân tại viện Huyết học - Truyền máu Trung ương kiên cường chiến đấu với bệnh tật và luôn mỉm cười đón ngày mới",
          "Hành động ấm áp của những quán cơm thiện nguyện 2000 đồng trao tặng bữa ăn chan chứa tình người cho người lao động nghèo"
        ],
        "distractors": [
          "Những người thức dậy mỗi sáng với tâm trạng cáu gắt và trút giận lên cha mẹ",
          "Học sinh lãng phí trọn vẹn cả ngày nghỉ chỉ để ngủ vùi và lướt mạng xã hội"
        ],
        "feedbackOnMistake": "Dẫn chứng cần toát lên vẻ đẹp của sự lạc quan, lòng biết ơn sự sống và những cử chỉ yêu thương bình dị giữa đời thường.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Yêu thương không chỉ là cảm xúc thụ động mà là hành động; phê phán lối sống bi quan, than vãn.",
        "correctPhrases": [
          "Yêu thương không chỉ dừng lại ở cảm xúc lãng mạn mà phải biến thành những việc làm thiết thực giúp đỡ những mảnh đời khó khăn",
          "Phê phán lối sống bi quan, than vãn, coi sự sống là gánh nặng và phung phí thời gian vào những hận thù nhỏ nhen"
        ],
        "distractors": [
          "Chỉ những người giàu có thì mới có thời gian để nói lời cảm ơn cuộc đời",
          "Cuộc sống đầy rẫy bất công và đau khổ nên không có gì đáng để cảm ơn"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán thói quen than vãn tiêu cực, đồng thời khẳng định yêu thương phải đi liền với hành động sẻ chia.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Đón ngày mới với nụ cười, nói lời yêu thương cha mẹ, trân trọng từng phút giây ôn thi vào 10.",
        "correctPhrases": [
          "Bắt đầu ngày mới với nụ cười và năng lượng tích cực, nói lời cảm ơn và ôm cha mẹ trước khi đến trường",
          "Trân quý từng ngày trên ghế nhà trường để học hỏi tri thức, xây dựng tình bạn đẹp và chuẩn bị vững vàng cho kỳ thi vào 10"
        ],
        "distractors": [
          "Càu nhàu gắt gỏng khi mẹ đánh thức dậy đi học vào mỗi buổi sáng",
          "Dành cả ngày đắm chìm trong những suy nghĩ tiêu cực về điểm số kém của ngày hôm qua"
        ],
        "feedbackOnMistake": "Mỗi sớm mai thức dậy của tuổi 15 là một cơ hội tuyệt vời để học thêm một điều hay, trao đi một nụ cười và tiến gần hơn tới ước mơ!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Hai câu thơ ngân vang như lời tạ ơn dịu dàng đối với cuộc đời. Thân đoạn: Giải thích sớm mai thức dậy là ân huệ sự sống, yêu thương là lẽ sống cao đẹp; Phân tích giá trị trân quý hiện tại và suối nguồn hạnh phúc; Dẫn chứng bệnh nhân kiên cường và quán cơm thiện nguyện; Phản đề yêu thương bằng hành động, phê phán thói than vãn bi quan; Bài học tuổi 15 đón ngày mới bằng nụ cười, nỗ lực học tập và yêu thương gia đình.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 29,
    "topic": "Bàn về 4 trụ cột giáo dục của UNESCO: 'Học để biết, học để làm, học để chung sống, học để tự khẳng định'",
    "category": "Nhận định - Danh ngôn",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "4 mục đích toàn diện của việc học: Tri thức (Biết), Kỹ năng (Làm), Nhân cách xã hội (Chung sống), Bản sắc (Tự khẳng định).",
        "correctPhrases": [
          "'Học để biết' và 'Học để làm' là tiếp thu tri thức khoa học và rèn luyện kỹ năng thực hành nghề nghiệp có ích cho xã hội",
          "'Học để chung sống' và 'Học để tự khẳng định' là bồi dưỡng phẩm chất nhân ái, hội nhập cộng đồng và phát triển bản sắc riêng"
        ],
        "distractors": [
          "Học chỉ để đối phó với các bài kiểm tra và lấy tấm bằng khen dán lên tường khoe khoang",
          "Học tập là con đường duy nhất để kiếm được thật nhiều tiền bạc và sống an nhàn"
        ],
        "feedbackOnMistake": "Tuyên ngôn của UNESCO vạch ra triết lý giáo dục toàn diện của thế kỷ 21: Kết hợp giữa trí tuệ, kỹ năng, đạo đức và bản lĩnh cá nhân.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Định hướng con người phát triển hài hòa toàn diện, chống học vẹt học lệch, kiến tạo tương lai.",
        "correctPhrases": [
          "Giúp người học phát triển hài hòa cả trí tuệ, kỹ năng thực chiến và nhân cách làm người văn minh trong thời đại toàn cầu",
          "Xóa bỏ căn bệnh học vẹt, học vì bằng cấp và đào tạo nên những công dân toàn cầu có năng lực kiến tạo tương lai"
        ],
        "distractors": [
          "Để các trường học có thể thu được nhiều học phí hơn từ học sinh",
          "Giúp học sinh có quyền coi thường những người không có bằng cấp đại học"
        ],
        "feedbackOnMistake": "Ý nghĩa: 4 trụ cột là chiếc la bàn định hướng cho việc học tập suốt đời, biến tri thức thành năng lực phụng sự nhân sinh.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Học sinh Việt Nam giành giải sáng tạo Robot quốc tế; bạn trẻ tham gia các dự án cộng đồng.",
        "correctPhrases": [
          "Các đội tuyển học sinh Việt Nam xuất sắc chế tạo robot cứu hộ thông minh đạt giải quán quân Olympic Quốc tế",
          "Các bạn trẻ chủ động học ngoại ngữ, tham gia các diễn đàn thanh niên thế giới để giới thiệu bản sắc văn hóa Việt Nam"
        ],
        "distractors": [
          "Những học sinh chỉ biết học vẹt từng câu chữ trong sách nhưng không biết nấu một bữa cơm đơn giản",
          "Người có bằng cấp cao nhưng lại có thái độ ngạo mạn, vô lễ với người lớn tuổi"
        ],
        "feedbackOnMistake": "Dẫn chứng cần thể hiện sự kết hợp nhuần nhuyễn giữa trí tuệ sáng tạo với kỹ năng sống và tinh thần hội nhập toàn cầu.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Học phải đi đôi với hành; phê phán căn bệnh thành tích, học đối phó, lý thuyết suông.",
        "correctPhrases": [
          "Học phải đi đôi với hành, tri thức nằm trên giấy mà không áp dụng vào đời sống thì chỉ là mớ lý thuyết chết",
          "Phê phán căn bệnh thành tích, học tủ, học vẹt và lối học vị kỷ không biết chia sẻ, hợp tác cùng bạn bè"
        ],
        "distractors": [
          "Chỉ cần giỏi lý thuyết trong sách vở là đủ, không cần quan tâm đến thực hành hay kỹ năng mềm",
          "Trong lớp học thì bạn bè là đối thủ cạnh tranh tiêu diệt lẫn nhau chứ không thể chung sống"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán gay gắt căn bệnh 'mọt sách lý thuyết suông' và thói cạnh tranh vị kỷ trong học đường.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Học hiểu bản chất không học vẹt, rèn kỹ năng giao tiếp, tự khẳng định mình qua kỳ thi vào 10.",
        "correctPhrases": [
          "Học tập nghiêm túc để hiểu bản chất kiến thức, chủ động rèn luyện kỹ năng làm bài và kỹ năng sống tự lập mỗi ngày",
          "Biết sẻ chia, hợp tác ôn tập cùng bạn bè và tự tin khẳng định năng lực của mình trong kỳ thi tuyển sinh vào lớp 10"
        ],
        "distractors": [
          "Học ngày cày đêm nhưng từ chối mọi hoạt động thể chất và việc nhà để cha mẹ phục vụ",
          "Học tủ một vài bài thi rồi cầu may vào phòng thi trúng tủ"
        ],
        "feedbackOnMistake": "Học sinh lớp 9 ôn thi vào 10 cần nắm vững cả 4 trụ cột: Học chắc kiến thức, rèn kỹ năng giải đề, yêu thương bạn bè và tự tin tỏa sáng!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Học để làm người, học để kiến tạo tương lai' - Bàn về 4 trụ cột giáo dục của UNESCO. Thân đoạn: Giải thích 4 mục tiêu: Tri thức, Kỹ năng, Chung sống và Khẳng định bản thân; Phân tích giá trị phát triển con người toàn diện trong kỷ nguyên số; Dẫn chứng học sinh sáng tạo robot và thanh niên hội nhập; Phản đề học đi đôi với hành, phê phán bệnh học vẹt; Bài học tuổi 15 học hiểu bản chất và tự tin khẳng định mình mùa thi vào 10.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 30,
    "topic": "Bàn về nhận định: 'Thất bại là người thầy nghiêm khắc nhưng công bằng nhất'",
    "category": "Nhận định - Danh ngôn",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Thất bại: Vấp ngã, không đạt mục tiêu; Người thầy nghiêm khắc: Dạy bài học đắt giá, công bằng rèn luyện con người.",
        "correctPhrases": [
          "'Thất bại' là những lần vấp ngã, đổ vỡ, không đạt được kết quả như mong đợi trong học tập và cuộc sống",
          "'Người thầy nghiêm khắc nhưng công bằng' là phép so sánh khẳng định thất bại chỉ ra lỗ hổng và rèn luyện bản lĩnh con người"
        ],
        "distractors": [
          "Sự chấm dứt hoàn toàn mọi hy vọng và chứng minh con người là kẻ bất tài vô dụng",
          "Một người thầy giáo dạy học trên lớp hay cho điểm kém học sinh một cách bất công"
        ],
        "feedbackOnMistake": "Hình ảnh ẩn dụ sâu sắc: Thất bại mang lại bài học đắt giá và công bằng cho những ai biết dũng cảm nhìn nhận và sửa đổi.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Thất bại giúp nhận ra điểm yếu, triệt tiêu tự mãn, tôi luyện ý chí kiên cường.",
        "correctPhrases": [
          "Thất bại bóc trần những ảo tưởng tự phụ, giúp con người nhận rõ những điểm yếu và thiếu sót của bản thân để khắc phục",
          "Chính nỗi đau từ sự vấp ngã tôi luyện nên sức đề kháng tinh thần và ý chí quật cường để chạm tới thành công bền vững"
        ],
        "distractors": [
          "Để con người vĩnh viễn không bao giờ dám ước mơ hay mạo hiểm làm việc lớn nữa",
          "Chứng minh rằng số phận của con người đã được định đoạt và không thể thay đổi"
        ],
        "feedbackOnMistake": "Ý nghĩa: Không có thất bại nào là vô ích nếu ta rút ra được bài học. Thất bại là mẹ của thành công.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "J.K. Rowling bị 12 nhà xuất bản từ chối; Steve Jobs bị đuổi khỏi Apple rồi trở lại đỉnh cao.",
        "correctPhrases": [
          "J.K. Rowling từng là người phụ nữ ly hôn, thất nghiệp nghèo khó bị 12 nhà xuất bản từ chối trước khi Harry Potter thành công vang dội",
          "Steve Jobs từng bị sa thải khỏi chính công ty Apple do mình sáng lập, nhưng biến cú ngã đó thành thời kỳ sáng tạo rực rỡ nhất"
        ],
        "distractors": [
          "Những người hễ bị điểm kém một lần là buông xuôi bỏ học luôn để đi làm thuê",
          "Một học sinh thi trượt nhưng đổ lỗi do giám thị coi thi quá nghiêm khắc"
        ],
        "feedbackOnMistake": "Dẫn chứng cần khắc họa hình ảnh sự hồi sinh kỳ diệu từ đống tro tàn thất bại nhờ lòng kiên định không bỏ cuộc.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Thất bại chỉ là bài học nếu biết đúc kết; phê phán thói đổ lỗi và sự suy sụp buông xuôi.",
        "correctPhrases": [
          "Thất bại chỉ thực sự là 'người thầy' nếu ta biết dũng cảm soi lại mình; nếu chỉ biết đổ lỗi cho hoàn cảnh thì thất bại sẽ mãi là bi kịch",
          "Phê phán thái độ yếu đuối, suy sụp tinh thần và dễ dàng đầu hàng số phận ngay từ những vấp váp đầu đời"
        ],
        "distractors": [
          "Càng thất bại nhiều lần thì càng chứng tỏ mình là người tài giỏi xuất chúng",
          "Thất bại là điều xui xẻo hoàn toàn do người khác mang lại cho mình"
        ],
        "feedbackOnMistake": "Phản đề rất sắc bén: Thất bại chỉ có giá trị khi ta biết học từ lỗi sai, tránh thói ngụy biện 'thất bại nhiều là giỏi'.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Không suy sụp trước điểm kém môn thi thử, bình tĩnh tìm nguyên nhân và sửa đổi để bứt phá vào lớp 10.",
        "correctPhrases": [
          "Bình tĩnh đối diện với điểm số chưa như ý trong các kỳ thi thử, nghiêm túc mổ xẻ từng lỗi sai để không bao giờ lặp lại",
          "Nuôi dưỡng tinh thần lạc quan, xem mỗi lần vấp ngã là một bậc thang tiến gần hơn tới cánh cổng trường cấp 3 mơ ước"
        ],
        "distractors": [
          "Xé nát bài thi thử bị điểm thấp và giấu kín không cho cha mẹ biết",
          "Tự ti mặc cảm cho rằng mình sinh ra đã dốt nát và từ bỏ kỳ thi tuyển sinh 10"
        ],
        "feedbackOnMistake": "Tuổi 15 hãy nhớ: 'Người chiến thắng không bao giờ bỏ cuộc, kẻ bỏ cuộc không bao giờ chiến thắng'. Hãy biến mỗi điểm kém hôm nay thành điểm 9, 10 trong ngày thi chính thức!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: 'Thất bại không phải là ngõ cụt, mà là khúc quanh để ta trưởng thành' - Bàn về người thầy nghiêm khắc. Thân đoạn: Giải thích thất bại là sự vấp ngã chỉ ra điểm yếu cần khắc phục; Phân tích giá trị tôi luyện sức đề kháng tinh thần; Dẫn chứng J.K. Rowling và Steve Jobs; Phản đề học hỏi từ lỗi lầm, phê phán sự đổ lỗi buông xuôi; Bài học tuổi 15 bình tĩnh sửa sai sau mỗi bài thi thử để bứt phá vào lớp 10.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 31,
    "topic": "Sống vì nhau",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Bản chất: Lối sống vị tha, biết thấu cảm, đặt lợi ích cộng đồng và hạnh phúc người khác song hành cùng quyền lợi cá nhân.",
        "correctPhrases": [
          "Lối sống chan hòa, biết yêu thương, sẻ chia và đặt lợi ích cộng đồng song hành cùng cá nhân",
          "Ý thức trách nhiệm và sự gắn kết tương trợ lẫn nhau giữa người với người trong xã hội"
        ],
        "distractors": [
          "Sự hy sinh mù quáng đánh mất hoàn toàn bản thân và sống phụ thuộc vào người khác",
          "Thói ba phải chiều chuộng mọi đòi hỏi vô lý của người xung quanh để cầu an"
        ],
        "feedbackOnMistake": "Thầy cô nhắc nhở: \"Sống vì nhau\" là sự gắn kết tương trợ lành mạnh và thấu hiểu, không phải là \"hy sinh mù quáng\" đánh mất chính mình hay thói \"ba phải\" thỏa hiệp với sai trái.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Giá trị: Tạo sức mạnh đoàn kết vượt qua nghịch cảnh, xua tan cô độc và làm cho xã hội nhân văn, bền vững.",
        "correctPhrases": [
          "Tạo nên sức mạnh đoàn kết to lớn giúp cộng đồng vượt qua những biến cố và thử thách khắc nghiệt",
          "Xóa bỏ bức tường cô độc, sưởi ấm tâm hồn và làm cho cuộc sống trở nên ý nghĩa, nhân văn hơn"
        ],
        "distractors": [
          "Để nhận lại sự hàm ơn và tích lũy các mối quan hệ nhằm trục lợi cá nhân mai sau",
          "Giúp con người không bao giờ phải chịu bất kỳ thiệt thòi nào trong cuộc sống"
        ],
        "feedbackOnMistake": "Sống vì nhau xuất phát từ tâm thế vô tư và sự đồng cảm chân thành, không phải sự đầu tư vụ lợi để tích lũy quan hệ hay đổi chác vật chất.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Dẫn chứng CAR: Hình ảnh cả nước hướng về đồng bào vùng bão lũ Yagi, triệu con tim chung một nhịp đập.",
        "correctPhrases": [
          "Bối cảnh & Hành động: Trong bão lũ số 3 (Yagi), hàng vạn chuyến xe cứu trợ xuyên đêm chở nhu yếu phẩm của nhân dân cả nước hướng về vùng lũ miền Bắc",
          "Kết quả & Bài học: Hàng ngàn hộ dân được sưởi ấm trong hoạn nạn, minh chứng rạng ngời cho truyền thống \"lá lành đùm lá rách\" và tinh thần sống vì nhau của người Việt"
        ],
        "distractors": [
          "Có rất nhiều người tốt bụng trong xã hội hay giúp đỡ người khác mà ai cũng biết đến",
          "Các trào lưu làm từ thiện trên mạng xã hội để quay video câu view kiếm tiền quảng cáo"
        ],
        "feedbackOnMistake": "Dẫn chứng cần mang tính thời sự, người thật việc thật với mô hình CAR sắc nét; tránh dẫn chứng chung chung mơ hồ hoặc các hiện tượng từ thiện phô trương trục lợi.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Phản đề: Phê phán thói ích kỷ cá nhân 'đèn nhà ai nhà nấy rạng'; nhắc nhở lòng tốt cần đi cùng sự tỉnh táo.",
        "correctPhrases": [
          "Phê phán lối sống vị kỷ, hẹp hòi, dửng dưng với nỗi đau của đồng loại theo kiểu \"đèn nhà ai nhà nấy rạng\"",
          "Cần tỉnh táo để lòng tốt được đặt đúng chỗ, tránh bị những kẻ xấu lợi dụng lòng trắc ẩn để trục lợi"
        ],
        "distractors": [
          "Mỗi người chỉ cần lo cho bản thân mình thật tốt là xã hội tự khắc phát triển bình yên",
          "Ai cũng phải chịu trách nhiệm về số phận của mình nên không việc gì phải quan tâm đến người khác"
        ],
        "feedbackOnMistake": "Phản đề trong nghị luận văn học cần phê phán lối sống cá nhân chủ nghĩa, đồng thời chỉ ra yêu cầu phải có lý trí tỉnh táo khi trao gửi lòng tốt.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Hành động tuổi 15: Bắt đầu từ sự quan tâm cha mẹ, chủ động chia sẻ tài liệu và giúp đỡ bạn bè cùng tiến bộ trước kỳ thi vào 10.",
        "correctPhrases": [
          "Nhận thức sâu sắc rằng hạnh phúc trao đi là hạnh phúc còn mãi, học cách lắng nghe và thấu hiểu người thân",
          "Hành động thiết thực: Chủ động chia sẻ tài liệu ôn thi, giúp đỡ bạn bè cùng tiến bộ và đỡ đần cha mẹ việc nhà mỗi ngày"
        ],
        "distractors": [
          "Hứa hẹn sau này kiếm thật nhiều tiền tỷ mới bắt đầu đi làm từ thiện giúp đời",
          "Bao che khuyết điểm và cho bạn chép bài thi để thể hiện tinh thần tương thân tương ái"
        ],
        "feedbackOnMistake": "Bài học tuổi 15 phải chân thật, bắt đầu từ những việc làm cụ thể ngay hôm nay; tuyệt đối không hứa hẹn viển vông và không nhầm lẫn sống vì nhau với thói bao che vi phạm quy chế!",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Khẳng định \"Sống vì nhau\" là cội nguồn của hạnh phúc đích thực và sức mạnh gắn kết xã hội. Thân đoạn: Giải thích bản chất là sự sẻ chia, thấu cảm, không vị kỷ; Phân tích giá trị tạo nên sức mạnh vượt qua biến cố và xua tan cô độc; Dẫn chứng hàng vạn chuyến xe nghĩa tình mùa bão lũ Yagi chi viện đồng bào miền Bắc; Phản đề phê phán thói ích kỷ \"đèn nhà ai nấy rạng\" và nhắc nhở tỉnh táo trao gửi lòng tốt đúng nơi; Bài học tuổi 15 chia sẻ phương pháp học tập cùng bạn bè và đỡ đần gia đình để cùng nhau tiến bộ bước vào lớp 10.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 32,
    "topic": "Lòng nhân ái",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Bản chất: Tình yêu thương con người sâu sắc, sự trắc ẩn và hành động chở che những mảnh đời bất hạnh.",
        "correctPhrases": [
          "Tình yêu thương con người sâu sắc, sự trắc ẩn và đồng cảm trước những nỗi đau của đồng loại",
          "Phẩm chất đạo đức cao quý biểu hiện qua hành động sẻ chia, chở che và nâng đỡ những mảnh đời bất hạnh"
        ],
        "distractors": [
          "Sự ban ơn bố thí trịch thượng từ trên cao nhằm thỏa mãn lòng kiêu hãnh của bản thân",
          "Thái độ thương hại nhất thời chỉ dừng lại ở lời nói suông mà không có hành động cụ thể"
        ],
        "feedbackOnMistake": "Lòng nhân ái là sự đồng cảm bình đẳng xuất phát từ trái tim, khác xa sự \"ban ơn trịch thượng\" hay sự \"thương hại hời hợt\" ngoài miệng.",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Giá trị: Sưởi ấm và xoa dịu nỗi đau, thanh lọc tâm hồn con người và đẩy lùi sự vị kỷ tàn nhẫn.",
        "correctPhrases": [
          "Xoa dịu nỗi đau, tiếp thêm niềm tin và nghị lực sống cho những người đang rơi vào nghịch cảnh tuyệt vọng",
          "Thanh lọc tâm hồn người trao đi, đẩy lùi sự vị kỷ tàn nhẫn và dệt nên sợi dây kết nối bền chặt trong xã hội"
        ],
        "distractors": [
          "Là công cụ để con người xây dựng hình ảnh cá nhân hoàn hảo nhằm thăng tiến trong sự nghiệp",
          "Đảm bảo rằng người làm từ thiện sẽ luôn nhận lại của cải vật chất gấp bội lần"
        ],
        "feedbackOnMistake": "Lòng nhân ái mang giá trị tinh thần thiêng liêng giúp thanh lọc tâm hồn, không phải công cụ đánh bóng tên tuổi hay vụ lợi làm giàu.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Dẫn chứng CAR: Tình bạn cổ tích 10 năm cõng bạn đến trường của Ngô Minh Hiếu và Nguyễn Tất Minh.",
        "correctPhrases": [
          "Bối cảnh & Hành động: Cậu học trò nghèo Ngô Minh Hiếu suốt 10 năm ròng rã cõng người bạn tật nguyền Nguyễn Tất Minh vượt hàng ngàn cây số đến trường theo đuổi con chữ",
          "Kết quả & Bài học: Cả hai cùng chạm tay vào cánh cổng trường đại học, viết nên câu chuyện cổ tích xúc động về lòng nhân ái và tình bạn thiêng liêng"
        ],
        "distractors": [
          "Chuyện kể về một ông vua thời xưa thường phân phát vàng bạc cho dân chúng trong ngày hội",
          "Các hoạt động từ thiện của các ngôi sao mạng xã hội gây nhiều tranh cãi về tính minh bạch"
        ],
        "feedbackOnMistake": "Dẫn chứng lòng nhân ái cần chân thực, giàu sức lay động như câu chuyện Ngô Minh Hiếu và Nguyễn Tất Minh; tránh dẫn chứng cổ tích mờ nhạt hoặc những trường hợp ồn ào thiếu chuẩn mực.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Phản đề: Phê phán thói vô cảm và đạo đức giả trục lợi từ thiện; lòng nhân ái chân chính không dung túng cho cái ác.",
        "correctPhrases": [
          "Lên án căn bệnh vô cảm, thói đạo đức giả \"lấy từ thiện làm bình phong\" để trục lợi danh tiếng hoặc tiền bạc",
          "Nhân ái không đồng nghĩa với nhu nhược, dung túng cho cái ác hoặc bao che cho các hành vi sai trái, phạm pháp"
        ],
        "distractors": [
          "Người nghèo khổ là do họ lười biếng nên không cần phải có lòng nhân ái giúp đỡ",
          "Lòng nhân ái chỉ dành cho những người giàu có, người bình thường không cần quan tâm"
        ],
        "feedbackOnMistake": "Phản đề cần chỉ ra sự lệch lạc của thói đạo đức giả trục lợi từ thiện và khẳng định lòng nhân ái chân chính không bao giờ dung túng cái xấu.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Tuổi 15: Nuôi dưỡng lòng trắc ẩn từ lời nói hòa nhã, hành động tương trợ bạn bè trong lớp, sống biết ơn gia đình.",
        "correctPhrases": [
          "Nhận thức rằng lòng nhân ái không đo bằng giá trị vật chất to lớn mà ở sự chân thành và tấm lòng trắc ẩn mỗi ngày",
          "Hành động cụ thể: Lan tỏa lời nói tử tế, không bắt nạt hay cô lập bạn bè, tích cực tham gia phong trào \"Kế hoạch nhỏ\" và giúp đỡ những hoàn cảnh khó khăn quanh mình"
        ],
        "distractors": [
          "Hứa hẹn khi nào có việc làm và thu nhập cao mới bắt đầu quan tâm đến người nghèo",
          "Than thở trên mạng xã hội về những mảnh đời bất hạnh nhưng trong đời thực lại thờ ơ vô cảm"
        ],
        "feedbackOnMistake": "Bài học tuổi 15 cần sự tử tế trong ứng xử học đường hằng ngày và những việc làm vừa sức, tránh nói suông trên mạng hay trì hoãn vào tương lai xa vời.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: \"Nơi lạnh nhất không phải là Bắc Cực, mà là nơi không có tình thương\" - Lòng nhân ái là điểm tựa cao đẹp nhất của con người. Thân đoạn: Giải thích lòng nhân ái là tình thương yêu, trắc ẩn không vụ lợi; Bàn luận về sức mạnh cảm hóa, xoa dịu nghịch cảnh và đẩy lùi thói vị kỷ tàn nhẫn; Dẫn chứng Ngô Minh Hiếu 10 năm cõng bạn Nguyễn Tất Minh đến trường; Phản đề phê phán bệnh vô cảm và thói đạo đức giả lợi dụng từ thiện; Bài học tuổi 15 sống nhân ái từ lời nói hòa nhã, không bắt nạt bạn bè và tích cực tham gia việc thiện vừa sức.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 33,
    "topic": "Tinh thần tự học của học sinh",
    "category": "Tư tưởng đạo lý",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Bản chất: Ý thức tự giác, chủ động tìm tòi chiếm lĩnh tri thức mà không đợi sự ép buộc, đôn đốc.",
        "correctPhrases": [
          "Ý thức tự giác, chủ động tìm tòi, nghiên cứu và chiếm lĩnh tri thức không đợi sự đôn đốc, ép buộc từ người khác",
          "Khả năng biến quá trình đào tạo thành tự đào tạo, tự đặt câu hỏi và tự rèn luyện phương pháp tư duy độc lập"
        ],
        "distractors": [
          "Việc nhốt mình trong phòng học thuộc lòng răm rắp từng câu chữ trong sách giáo khoa một cách thụ động",
          "Thái độ tự mãn tự cho mình biết hết mọi thứ và từ chối lắng nghe sự chỉ bảo của thầy cô giáo"
        ],
        "feedbackOnMistake": "Tự học là quá trình chủ động tư duy, phản biện và đào sâu bản chất vấn đề, hoàn toàn khác với việc \"học vẹt máy móc\" hay thái độ \"tự mãn kiêu ngạo\".",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Giá trị: Khắc sâu kiến thức, phát triển tư duy sáng tạo, thích ứng với thời đại bùng nổ tri thức số.",
        "correctPhrases": [
          "Giúp kiến thức được khắc sâu bền vững, hình thành tư duy phản biện độc lập và khả năng sáng tạo không giới hạn",
          "Là chiếc chìa khóa vạn năng giúp người học thích ứng linh hoạt trong kỷ nguyên công nghệ số và bùng nổ thông tin"
        ],
        "distractors": [
          "Để học sinh không cần phải đến trường học và không cần sự hướng dẫn của giáo viên",
          "Nhằm mục đích đạt điểm tuyệt đối trong mọi kỳ thi để vượt mặt các bạn cùng lớp"
        ],
        "feedbackOnMistake": "Tự học không phải để cô lập bản thân hay phủ nhận vai trò của nhà trường, mà là phát huy tối đa tiềm năng cá nhân để làm chủ tri thức cả đời.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Dẫn chứng CAR: Tấm gương tự học kiệt xuất của Chủ tịch Hồ Chí Minh trên con đường bôn ba tìm đường cứu nước.",
        "correctPhrases": [
          "Bối cảnh & Hành động: Trong suốt 30 năm bôn ba tìm đường cứu nước, Bác Hồ đã tự học thành thạo nhiều ngoại ngữ bằng cách viết từ vựng lên cánh tay, vừa làm thuê vừa tranh thủ đọc sách báo",
          "Kết quả & Bài học: Tấm gương tự học kiên cường của Người đã đưa dân tộc đến độc lập tự do, khẳng định chân lý \"Đường đời là một chiếc thang không nấc chót, việc học là quyển sách không trang cuối\""
        ],
        "distractors": [
          "Nhiều bạn học sinh hiện nay có điều kiện đi học thêm ở nhiều trung tâm luyện thi lớn",
          "Câu chuyện về các thủ khoa đại học được sinh ra trong các gia đình có truyền thống hiếu học"
        ],
        "feedbackOnMistake": "Dẫn chứng tự học của Bác Hồ là mẫu mực kinh điển, thể hiện ý chí bền bỉ vượt lên nghịch cảnh thiếu thốn; tránh dẫn chứng về việc đi học thêm nhiều trung tâm vốn đi ngược lại tinh thần tự học!",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Phản đề: Phê phán thói học vẹt, học tủ, ỷ lại văn mẫu và lạm dụng trí tuệ nhân tạo (AI) làm hộ bài.",
        "correctPhrases": [
          "Phê phán thói quen thụ động \"chờ mớm mồi\", học tủ, học vẹt và sao chép văn mẫu mù quáng để đối phó thi cử",
          "Cảnh báo vấn nạn học sinh lạm dụng công nghệ và trí tuệ nhân tạo (AI) làm hộ bài tập, dẫn đến lười suy nghĩ và thui chột năng lực tự thân"
        ],
        "distractors": [
          "Tự học thì không bao giờ cần thảo luận nhóm hay học hỏi từ bạn bè xung quanh",
          "Học sinh lớp 9 chỉ cần nghe giảng trên lớp là đủ đạt điểm cao, không cần tự mày mò thêm"
        ],
        "feedbackOnMistake": "Phản đề cần đánh trúng vấn nạn thời sự học đường: thói ỷ lại vào văn mẫu và lạm dụng AI làm hộ bài tập, cảnh báo sự thoái hóa của tư duy độc lập.",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Tuổi 15: Rời xa điện thoại khi ngồi vào bàn học, tự lập thời gian biểu ôn thi vào 10 và lập sổ tay lỗi sai.",
        "correctPhrases": [
          "Nhận thức sâu sắc rằng tự học là con đường ngắn nhất để tự khẳng định bản thân và bước qua cánh cổng trường cấp 3 mơ ước",
          "Hành động cụ thể: Rời xa điện thoại di động khi học bài, chủ động làm lại các dạng đề khó, ghi chép sổ tay lỗi sai và xây dựng kỷ luật tự thân mỗi ngày"
        ],
        "distractors": [
          "Thức thâu đêm suốt sáng để cày đề trước ngày thi rồi bỏ bê sức khỏe bản thân",
          "Mua thật nhiều sách tham khảo đắt tiền về chất đống trên bàn học để tạo cảm giác yên tâm"
        ],
        "feedbackOnMistake": "Bài học tuổi 15 cần xây dựng thói quen tự giác và kỷ luật tự thân khoa học (sổ tay lỗi sai, tập trung không điện thoại); tránh lối học dồn ép thức thâu đêm hay mua sách hình thức.",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Dẫn lời V.I. Lênin: \"Học, học nữa, học mãi\" - Tự học là vũ khí quan trọng nhất của người học hiện đại. Thân đoạn: Giải thích tự học là quá trình chủ động chiếm lĩnh tri thức; Bàn luận về vai trò khắc sâu hiểu biết, mở rộng chân trời và rèn tư duy độc lập; Dẫn chứng hành trình tự học ngoại ngữ và lý luận cách mạng phi thường của Bác Hồ; Phản đề phê phán thói học vẹt, sao chép văn mẫu và phụ thuộc AI làm bài hộ; Bài học tuổi 15 lập sổ tay lỗi sai, kỷ luật tắt điện thoại khi học để tự tin đỗ vào lớp 10.",
    "targetScore": 100,
    "xpReward": 50
  },
  {
    "id": 34,
    "topic": "Bảo vệ môi trường",
    "category": "Hiện tượng đời sống",
    "branches": [
      {
        "branchId": "explain",
        "name": "1. Giải thích (Bản chất)",
        "hintDescription": "Bản chất: Những hành động giữ gìn sự trong lành của tự nhiên, phòng ngừa ô nhiễm và phục hồi hệ sinh thái Trái Đất.",
        "correctPhrases": [
          "Hệ thống các hành động thiết thực nhằm giữ gìn sự trong lành của tự nhiên, phòng ngừa ô nhiễm và phục hồi hệ sinh thái",
          "Ý thức và trách nhiệm đạo đức của con người trong việc bảo vệ ngôi nhà chung Trái Đất trước nguy cơ biến đổi khí hậu"
        ],
        "distractors": [
          "Việc tổ chức các hội thảo đắt tiền và ký kết các cam kết trên giấy tờ mà không có hành động thực tế",
          "Ngăn cấm hoàn toàn mọi hoạt động sản xuất kinh tế để giữ gìn thiên nhiên hoang dã tuyệt đối"
        ],
        "feedbackOnMistake": "Bảo vệ môi trường là hành động cụ thể và phát triển bền vững hài hòa giữa kinh tế và thiên nhiên, không phải là \"hội thảo hình thức\" hay \"cực đoan cấm đoán sản xuất\".",
        "slotsCount": 2
      },
      {
        "branchId": "reason",
        "name": "2. Tại sao? (Giá trị cốt lõi)",
        "hintDescription": "Tại sao: Bảo vệ môi trường chính là bảo vệ nguồn dưỡng khí, sức khỏe và sự sống còn lâu dài của nhân loại.",
        "correctPhrases": [
          "Bảo vệ môi trường chính là bảo vệ nguồn dưỡng khí, sức khỏe và sự sống còn của toàn thể nhân loại",
          "Bảo đảm sự cân bằng sinh thái, ngăn chặn thảm họa thiên tai cực đoan và để lại di sản xanh cho thế hệ mai sau"
        ],
        "distractors": [
          "Để quốc gia được nhận các khoản viện trợ tài chính quốc tế từ các quỹ môi trường thế giới",
          "Vì môi trường tự nhiên có khả năng tự phục hồi hoàn hảo mà không cần con người tác động"
        ],
        "feedbackOnMistake": "Bảo vệ môi trường là trách nhiệm sống còn của loài người để cứu lấy chính mình, không phải để nhận viện trợ tài chính hay ỷ lại vào tự nhiên.",
        "slotsCount": 2
      },
      {
        "branchId": "evidence",
        "name": "3. Dẫn chứng (Mô hình CAR)",
        "hintDescription": "Dẫn chứng CAR: Hình ảnh nhóm bạn trẻ 'Sài Gòn Xanh' kiên trì lội xuống những dòng kênh đen dọn rác thải nhựa.",
        "correctPhrases": [
          "Bối cảnh & Hành động: Nhóm bạn trẻ \"Sài Gòn Xanh\" đã không ngại bùn đen hôi thối, kiên trì lội xuống hàng trăm con kênh rạch ô nhiễm nặng để dọn sạch hàng tấn rác thải nhựa",
          "Kết quả & Bài học: Hồi sinh dòng nước trong xanh, truyền cảm hứng mạnh mẽ cho hàng triệu người trẻ về trách nhiệm công dân đối với môi trường sống"
        ],
        "distractors": [
          "Phong trào trồng cây phủ xanh đồi trọc ở một vùng rừng xa xôi nào đó chưa rõ địa chỉ cụ thể",
          "Trào lưu chụp ảnh \"sống ảo\" check-in bên bờ biển sạch đẹp rồi vứt lại bao bì ni-lông sau khi ra về"
        ],
        "feedbackOnMistake": "Dẫn chứng nhóm bạn trẻ \"Sài Gòn Xanh\" là câu chuyện người thật việc thật đầy thuyết phục, có bối cảnh khó khăn, hành động dấn thân và kết quả lan tỏa sâu rộng.",
        "slotsCount": 2
      },
      {
        "branchId": "counter",
        "name": "4. Phản đề (Góc nhìn đa chiều)",
        "hintDescription": "Phản đề: Phê phán thói tiện tay xả rác bừa bãi và tư duy thiển cận 'đánh đổi môi trường lấy tăng trưởng kinh tế'.",
        "correctPhrases": [
          "Lên án gay gắt thói tiện tay xả rác bừa bãi, thói quen lạm dụng đồ nhựa dùng một lần và tư duy vị kỷ \"sạch nhà bẩn ngõ\"",
          "Phê phán những doanh nghiệp vì lợi nhuận mù quáng mà xả thải bức tử sông ngòi, đánh đổi môi trường lấy tăng trưởng ngắn hạn"
        ],
        "distractors": [
          "Việc xả rác là của người dân, còn thu dọn là việc của công nhân vệ sinh môi trường đã được trả lương",
          "Nước ta còn nghèo nên ưu tiên phát triển kinh tế trước, khi nào giàu có mới tính đến việc làm sạch môi trường"
        ],
        "feedbackOnMistake": "Phản đề cần phê phán cả thói quen xả rác vô ý thức của cá nhân lẫn tư duy thiển cận \"hy sinh môi trường lấy lợi ích kinh tế tức thời\".",
        "slotsCount": 2
      },
      {
        "branchId": "lesson",
        "name": "5. Bài học hành động (Tuổi 15)",
        "hintDescription": "Tuổi 15: Sống xanh từ bình nước cá nhân, túi vải, phân loại rác tại trường lớp và tiết kiệm điện nước tại gia đình.",
        "correctPhrases": [
          "Nhận thức rằng bảo vệ môi trường không phải việc vĩ mô xa vời mà bắt nguồn từ chính lối sống văn minh mỗi ngày",
          "Hành động cụ thể: Tự giác mang bình nước cá nhân, hạn chế túi ni-lông, phân loại rác đúng nơi quy định tại trường học và tiết kiệm điện nước tại gia đình"
        ],
        "distractors": [
          "Kêu gọi trên mạng xã hội mọi người đi bộ hàng chục cây số đi làm nhưng bản thân lại lười biếng vứt rác lung tung",
          "Nghĩ rằng một mình mình vứt mẩu rác nhỏ thì cũng không thể làm môi trường thế giới ô nhiễm thêm được"
        ],
        "feedbackOnMistake": "Bài học tuổi 15 hướng tới lối sống xanh thiết thực: bình nước cá nhân, phân loại rác, tiết kiệm năng lượng; loại bỏ ngay tư duy tai hại \"chỉ một mẩu rác của mình thì chẳng sao\".",
        "slotsCount": 2
      }
    ],
    "outlineSummary": "Mở đoạn: Cảnh báo về vấn nạn biến đổi khí hậu và khẳng định bảo vệ môi trường là mệnh lệnh sống còn của thời đại. Thân đoạn: Giải thích bản chất là giữ gìn sự trong lành của tự nhiên và cân bằng sinh thái; Phân tích giá trị bảo vệ sức khỏe con người và để lại di sản xanh cho thế hệ mai sau; Dẫn chứng nhóm thanh niên \"Sài Gòn Xanh\" lội kênh đen vớt hàng tấn rác nhựa; Phản đề phê phán thói tiện tay xả rác và tư duy thiển cận đánh đổi môi trường lấy kinh tế; Bài học tuổi 15 mang bình nước cá nhân, phân loại rác tại trường học và hình thành thói quen sống xanh văn minh.",
    "targetScore": 100,
    "xpReward": 50
  }
];
