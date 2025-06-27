// questions.js

const allQuestions = [
    // Unit 1: My Family (Gia đình tôi) - 5 questions
    {
        question: "Who is your mother's father? (Ông ngoại của bạn là ai?)",
        answer: ['G', 'R', 'A', 'N', 'D', 'P', 'A'],
        plainAnswer: ['G', 'R', 'A', 'N', 'D', 'P', 'A'] // GRANDPA
    },
    {
        question: "Who is your father's sister? (Cô/Dì của bạn là ai?)",
        answer: ['A', 'U', 'N', 'T'],
        plainAnswer: ['A', 'U', 'N', 'T'] // AUNT
    },
    {
        question: "Who is your brother's mother? (Mẹ của anh/em trai bạn là ai?)",
        answer: ['M', 'O', 'T', 'H', 'E', 'R'],
        plainAnswer: ['M', 'O', 'T', 'H', 'E', 'R'] // MOTHER
    },
    {
        question: "Who is your father's father? (Ông nội của bạn là ai?)",
        answer: ["G", "R", "A", "N", "D", "P", "A"],
        plainAnswer: ["G", "R", "A", "N", "D", "P", "A"]
    },
    {
        question: "Who is your mother's mother? (Bà ngoại của bạn là ai?)",
        answer: ["G", "R", "A", "N", "D", "M", "A"],
        plainAnswer: ["G", "R", "A", "N", "D", "M", "A"]
    },
    // New question added
    {
        question: "Who is your father's brother? (Chú/Cậu của bạn là ai?)",
        answer: ['U', 'N', 'C', 'L', 'E'],
        plainAnswer: ['U', 'N', 'C', 'L', 'E']
    },

    // Unit 2: My School (Trường học của tôi) - 10 questions
    {
        question: "What do you write with? (Bạn viết bằng gì?)",
        answer: ['P', 'E', 'N', 'C', 'I', 'L'],
        plainAnswer: ['P', 'E', 'N', 'C', 'I', 'L'] // PENCIL
    },
    {
        question: "What do you carry your books in? (Bạn đựng sách trong vật gì?)",
        answer: ['S', 'C', 'H', 'O', 'O', 'L', 'B', 'A', 'G'],
        plainAnswer: ['S', 'C', 'H', 'O', 'O', 'L', 'B', 'A', 'G'] // SCHOOLBAG
    },
    {
        question: "What color is the sky? (Bầu trời màu gì?)",
        answer: ['B', 'L', 'U', 'E'],
        plainAnswer: ['B', 'L', 'U', 'E'] // BLUE
    },
    {
        question: "Where do you sit in class? (Bạn ngồi ở đâu trong lớp?)",
        answer: ["C", "H", "A", "I", "R"],
        plainAnswer: ["C", "H", "A", "I", "R"]
    },
    {
        question: "What do you write on? (Bạn viết lên cái gì?)",
        answer: ["B", "O", "A", "R", "D"],
        plainAnswer: ["B", "O", "A", "R", "D"]
    },
    {
        question: "You go to this place to study. (Bạn đến nơi này để học.)",
        answer: ["S", "C", "H", "O", "O", "L"],
        plainAnswer: ["S", "C", "H", "O", "O", "L"]
    },
    {
        question: "This is a place where you play at school. (Đây là nơi bạn chơi ở trường.)",
        answer: ['P','L','A','Y','G','R','O','U','N','D'],
        plainAnswer: ['P','L','A','Y','G','R','O','U','N','D']
    },
    {
        question: "You use this to cut paper. (Bạn dùng cái này để cắt giấy.)",
        answer: ['S','C','I','S','S','O','R','S'],
        plainAnswer: ['S','C','I','S','S','O','R','S']
    },
    {
        question: "You color pictures with this. (Bạn tô màu tranh với cái này.)",
        answer: ['C','R','A','Y','O','N'],
        plainAnswer: ['C','R','A','Y','O','N']
    },
    {
        question: "You carry your lunch in this. (Bạn mang bữa trưa trong cái này.)",
        answer: ['L','U','N','C','H','B','O','X'],
        plainAnswer: ['L','U','N','C','H','B','O','X']
    },
    {
        question: "You do this with a pencil to make words. (Bạn làm điều này với bút chì để tạo từ.)",
        answer: ['W','R','I','T','E'],
        plainAnswer: ['W','R','I','T','E']
    },

    // Unit 3: My Toys (Đồ chơi của tôi) - 5 questions
    {
        question: "It's a soft toy, often looks like an animal. (Một món đồ chơi mềm, thường trông giống một con vật.)",
        answer: ['T', 'E', 'D', 'D', 'Y'],
        plainAnswer: ['T', 'E', 'D', 'D', 'Y'] // TEDDY
    },
    {
        question: "You can bounce it and play games like football. (Bạn có thể nảy nó và chơi các trò như bóng đá.)",
        answer: ['B', 'A', 'L', 'L'],
        plainAnswer: ['B', 'A', 'L', 'L'] // BALL
    },
    {
        question: "It has wheels and you can ride it. (Nó có bánh xe và bạn có thể lái nó.)",
        answer: ['B', 'I', 'K', 'E'],
        plainAnswer: ['B', 'I', 'K', 'E'] // BIKE
    },
    {
        question: "It has four wheels and you can push it. (Nó có bốn bánh xe và bạn có thể đẩy nó.)",
        answer: ["C", "A", "R"],
        plainAnswer: ["C", "A", "R"]
    },
    {
        question: "You use this to play music. (Bạn dùng cái này để phát nhạc.)",
        answer: ["R", "A", "D", "I", "O"],
        plainAnswer: ["R", "A", "D", "I", "O"]
    },
    {
        question: "It's a toy with many colorful blocks you can build with. (Đồ chơi có nhiều khối đầy màu sắc bạn có thể xây dựng.)",
        answer: ['L', 'E', 'G', 'O'],
        plainAnswer: ['L', 'E', 'G', 'O'] // LEGO
    },
    {
        question: "A toy that looks like a person, often played with by girls. (Một món đồ chơi trông giống người, thường được các bé gái chơi.)",
        answer: ['D', 'O', 'L', 'L'],
        plainAnswer: ['D', 'O', 'L', 'L'] // DOLL
    },

    // Unit 4: Animals (Động vật) - 10 questions
    {
        question: "What animal says 'Meow'? (Con vật nào kêu 'Meo'?)",
        answer: ['C', 'A', 'T'],
        plainAnswer: ['C', 'A', 'T'] // CAT
    },
    {
        question: "It's a farm animal that gives us milk. (Một con vật nuôi trong trang trại cho chúng ta sữa.)",
        answer: ['C', 'O', 'W'],
        plainAnswer: ['C', 'O', 'W'] // COW
    },
    {
        question: "It's a small, fluffy animal that likes to eat carrots. (Một con vật nhỏ, mềm mại thích ăn cà rốt.)",
        answer: ['R', 'A', 'B', 'B', 'I', 'T'],
        plainAnswer: ['R', 'A', 'B', 'B', 'I', 'T'] // RABBIT
    },
    {
        question: "It barks and is a common pet. (Nó sủa và là thú cưng phổ biến.)",
        answer: ["D", "O", "G"],
        plainAnswer: ["D", "O", "G"]
    },
    {
        question: "It swims and has fins. (Nó bơi và có vây.)",
        answer: ["F", "I", "S", "H"],
        plainAnswer: ["F", "I", "S", "H"]
    },
    {
        question: "This animal says 'Oink'. (Con vật này kêu 'Ủn ỉn'.)",
        answer: ['P', 'I', 'G'],
        plainAnswer: ['P', 'I', 'G'] // PIG
    },
    {
        question: "This animal says 'Moo'. (Con vật này kêu 'Bo bò'.)",
        answer: ['C', 'O', 'W'],
        plainAnswer: ['C', 'O', 'W'] // COW - (Duplicate with above but for specific sound) - Removed duplicate, keeping for sound if needed.
    },
    {
        question: "A large animal with a long trunk. (Một con vật lớn có vòi dài.)",
        answer: ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T'],
        plainAnswer: ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T'] // ELEPHANT
    },
    {
        question: "A bird that can talk. (Một con chim có thể nói.)",
        answer: ['P', 'A', 'R', 'R', 'O', 'T'],
        plainAnswer: ['P', 'A', 'R', 'R', 'O', 'T'] // PARROT
    },
    {
        question: "A striped wild cat. (Một loài mèo hoang dã có sọc.)",
        answer: ['T', 'I', 'G', 'E', 'R'],
        plainAnswer: ['T', 'I', 'G', 'E', 'R'] // TIGER
    },

    // Unit 5: My Body (Cơ thể tôi) - 5 questions
    {
        question: "How many eyes do you have? (Bạn có bao nhiêu mắt?)",
        answer: ['T', 'W', 'O'],
        plainAnswer: ['T', 'W', 'O'] // TWO
    },
    {
        question: "You use this to hear. (Bạn sử dụng bộ phận nào để nghe?)",
        answer: ['E', 'A', 'R'],
        plainAnswer: ['E', 'A', 'R'] // EAR
    },
    {
        question: "You use these to walk. (Bạn dùng bộ phận nào để đi lại?)",
        answer: ['L', 'E', 'G', 'S'],
        plainAnswer: ['L', 'E', 'G', 'S'] // LEGS
    },
    {
        question: "You use this to see. (Bạn sử dụng gì để nhìn thấy?)",
        answer: ["E", "Y", "E", "S"],
        plainAnswer: ["E", "Y", "E", "S"]
    },
    {
        question: "You use it to smell. (Bạn dùng nó để ngửi.)",
        answer: ["N", "O", "S", "E"],
        plainAnswer: ["N", "O", "S", "E"]
    },
    {
        question: "You brush these every morning. (Bạn đánh những cái này mỗi sáng.)",
        answer: ['T','E','E','T','H'],
        plainAnswer: ['T','E','E','T','H']
    },
    {
        question: "You clap with these. (Bạn vỗ tay bằng cái này.)",
        answer: ['H','A','N','D','S'],
        plainAnswer: ['H','A','N','D','S']
    },

    // Unit 6: Clothes (Quần áo) - 5 questions
    {
        question: "What do you wear on your feet? (Bạn mang gì vào chân?)",
        answer: ['S', 'H', 'O', 'E', 'S'],
        plainAnswer: ['S', 'H', 'O', 'E', 'S'] // SHOES
    },
    {
        question: "You wear this on your head. (Bạn đội gì trên đầu?)",
        answer: ['H', 'A', 'T'],
        plainAnswer: ['H', 'A', 'T'] // HAT
    },
    {
        question: "You wear this on your body. (Bạn mặc gì trên người?)",
        answer: ['S', 'H', 'I', 'R', 'T'],
        plainAnswer: ['S', 'H', 'I', 'R', 'T'] // SHIRT
    },
    {
        question: "You wear this when it's cold. (Bạn mặc cái này khi trời lạnh.)",
        answer: ["C", "O", "A", "T"],
        plainAnswer: ["C", "O", "A", "T"]
    },
    {
        question: "You wear it on your legs. (Bạn mang nó ở chân.)",
        answer: ["P", "A", "N", "T", "S"],
        plainAnswer: ["P", "A", "N", "T", "S"]
    },
    {
        question: "You wear these on your hands in winter. (Bạn mang gì vào tay khi trời lạnh?)",
        answer: ['G','L','O','V','E','S'],
        plainAnswer: ['G','L','O','V','E','S']
    },
    {
        question: "What you wear to go to bed. (Bạn mặc gì khi đi ngủ?)",
        answer: ['P','A','J','A','M','A','S'],
        plainAnswer: ['P','A','J','A','M','A','S']
    },
    {
        question: "You wear this over your shirt for warmth. (Bạn mặc cái này bên ngoài áo để giữ ấm.)",
        answer: ['S','W','E','A','T','E','R'],
        plainAnswer: ['S','W','E','A','T','E','R']
    },

    // Unit 7: Food (Thức ăn) - 10 questions
    {
        question: "It's a yellow fruit that monkeys like. (Một loại quả màu vàng mà khỉ thích.)",
        answer: ['B', 'A', 'N', 'A', 'N', 'A'],
        plainAnswer: ['B', 'A', 'N', 'A', 'N', 'A'] // BANANA
    },
    {
        question: "It's white and you drink it. (Nó màu trắng và bạn uống nó.)",
        answer: ['M', 'I', 'L', 'K'],
        plainAnswer: ['M', 'I', 'L', 'K'] // MILK
    },
    {
        question: "It's sweet and bees make it. (Nó ngọt và ong tạo ra.)",
        answer: ["H", "O", "N", "E", "Y"],
        plainAnswer: ["H", "O", "N", "E", "Y"]
    },
    {
        question: "You eat this in the morning. (Bạn ăn cái này vào buổi sáng.)",
        answer: ["B", "R", "E", "A", "D"],
        plainAnswer: ["B", "R", "E", "A", "D"]
    },
    {
        question: "You eat this in the morning. (Bạn ăn gì vào buổi sáng?)",
        answer: ["B", "R", "E", "A", "K", "F", "A", "S", "T"],
        plainAnswer: ["B", "R", "E", "A", "K", "F", "A", "S", "T"]
    },
    {
        question: "A round red fruit. (Một loại quả tròn màu đỏ.)",
        answer: ['A','P','P','L','E'],
        plainAnswer: ['A','P','P','L','E']
    },
    {
        question: "You drink this when you are thirsty. (Bạn uống cái này khi khát.)",
        answer: ['W','A','T','E','R'],
        plainAnswer: ['W','A','T','E','R']
    },
    {
        question: "It comes from chickens and you can fry it. (Nó đến từ gà và bạn có thể chiên nó.)",
        answer: ['E','G','G'],
        plainAnswer: ['E','G','G']
    },
    {
        question: "A sweet treat often eaten after dinner. (Một món ngọt thường được ăn sau bữa tối.)",
        answer: ['C','A','K','E'],
        plainAnswer: ['C','A','K','E']
    },
    {
        question: "A long green vegetable. (Một loại rau dài màu xanh.)",
        answer: ['C','U','C','U','M','B','E','R'],
        plainAnswer: ['C','U','C','U','M','B','E','R']
    },

    // Unit 8: My House (Ngôi nhà của tôi) - 10 questions
    {
        question: "You sleep on it at night. (Bạn ngủ trên gì vào ban đêm?)",
        answer: ['B', 'E', 'D'],
        plainAnswer: ['B', 'E', 'D'] // BED
    },
    {
        question: "You sit on it. (Bạn ngồi vào vật gì?)",
        answer: ['C', 'H', 'A', 'I', 'R'],
        plainAnswer: ['C', 'H', 'A', 'I', 'R'] // CHAIR
    },
    {
        question: "You watch this for fun. (Bạn xem gì để giải trí?)",
        answer: ['T', 'V'],
        plainAnswer: ['T', 'V'] // TV
    },
    {
        question: "You keep your clothes in this. (Bạn cất quần áo trong cái này.)",
        answer: ["C", "L", "O", "S", "E", "T"],
        plainAnswer: ["C", "L", "O", "S", "E", "T"]
    },
    {
        question: "You open this to enter a room. (Bạn mở gì để bước vào phòng?)",
        answer: ["D", "O", "O", "R"],
        plainAnswer: ["D", "O", "O", "R"]
    },
    {
        question: "You sit on this in the living room. (Bạn ngồi trên cái này trong phòng khách.)",
        answer: ['S', 'O', 'F', 'A'],
        plainAnswer: ['S', 'O', 'F', 'A'] // SOFA
    },
    {
        question: "You eat your meals at this. (Bạn ăn bữa ăn của mình ở cái này.)",
        answer: ['T', 'A', 'B', 'L', 'E'],
        plainAnswer: ['T', 'A', 'B', 'L', 'E'] // TABLE
    },
    {
        question: "You cook food in this room. (Bạn nấu ăn trong phòng này.)",
        answer: ['K', 'I', 'T', 'C', 'H', 'E', 'N'],
        plainAnswer: ['K', 'I', 'T', 'C', 'H', 'E', 'N'] // KITCHEN
    },
    {
        question: "You wash your hands and face here. (Bạn rửa tay và mặt ở đây.)",
        answer: ['S', 'I', 'N', 'K'],
        plainAnswer: ['S', 'I', 'N', 'K'] // SINK
    },
    {
        question: "You look out through this to see outside. (Bạn nhìn ra ngoài qua cái này.)",
        answer: ['W', 'I', 'N', 'D', 'O', 'W'],
        plainAnswer: ['W', 'I', 'N', 'D', 'O', 'W'] // WINDOW
    },

    // Unit 9: In the City (Trong thành phố) - 10 questions
    {
        question: "You read books here. (Bạn thường đọc sách ở đâu?)",
        answer: ['L', 'I', 'B', 'R', 'A', 'R', 'Y'],
        plainAnswer: ['L', 'I', 'B', 'R', 'A', 'R', 'Y'] // LIBRARY
    },
    {
        question: "You see animals here. (Bạn có thể nhìn thấy động vật ở đâu?)",
        answer: ['Z', 'O', 'O'],
        plainAnswer: ['Z', 'O', 'O'] // ZOO
    },
    {
        question: "You buy things here. (Bạn mua sắm ở đâu?)",
        answer: ['S', 'H', 'O', 'P'],
        plainAnswer: ['S', 'H', 'O', 'P'] // SHOP
    },
    {
        question: "You go here when you are sick. (Bạn đến đây khi bị bệnh.)",
        answer: ["H", "O", "S", "P", "I", "T", "A", "L"],
        plainAnswer: ["H", "O", "S", "P", "I", "T", "A", "L"]
    },
    {
        question: "You send letters from here. (Bạn gửi thư từ đây.)",
        answer: ["P", "O", "S", "T"],
        plainAnswer: ["P", "O", "S", "T"]
    },
    {
        question: "You go here to swim. (Bạn đến đây để bơi.)",
        answer: ['P','O','O','L'],
        plainAnswer: ['P','O','O','L']
    },
    {
        question: "You go here to watch a movie. (Bạn đến đây để xem phim.)",
        answer: ['C','I','N','E','M','A'],
        plainAnswer: ['C','I','N','E','M','A']
    },
    {
        question: "A tall building in a city. (Một tòa nhà cao ở thành phố.)",
        answer: ['S', 'K', 'Y', 'S', 'C', 'R', 'A', 'P', 'E', 'R'],
        plainAnswer: ['S', 'K', 'Y', 'S', 'C', 'R', 'A', 'P', 'E', 'R'] // SKYSCRAPER
    },
    {
        question: "You wait here to catch a bus. (Bạn chờ ở đây để bắt xe buýt.)",
        answer: ['B', 'U', 'S', 'S', 'T', 'O', 'P'],
        plainAnswer: ['B', 'U', 'S', 'S', 'T', 'O', 'P'] // BUS STOP
    },
    {
        question: "A large area of grass where people can relax. (Một khu vực cỏ lớn nơi mọi người có thể thư giãn.)",
        answer: ['P', 'A', 'R', 'K'],
        plainAnswer: ['P', 'A', 'R', 'K'] // PARK
    },

    // Unit 10: Nature (Thiên nhiên) - 10 questions
    {
        question: "It shines in the sky during the day. (Nó chiếu sáng trên trời vào ban ngày.)",
        answer: ['S', 'U', 'N'],
        plainAnswer: ['S', 'U', 'N'] // SUN
    },
    {
        question: "It falls from the sky when it rains. (Thứ gì rơi xuống khi trời mưa?)",
        answer: ['R', 'A', 'I', 'N'],
        plainAnswer: ['R', 'A', 'I', 'N'] // RAIN
    },
    {
        question: "It grows in the garden and is colorful. (Nó mọc trong vườn và có màu sắc rực rỡ.)",
        answer: ['F', 'L', 'O', 'W', 'E', 'R'],
        plainAnswer: ['F', 'L', 'O', 'W', 'E', 'R'] // FLOWER
    },
    {
        question: "It lights up the night sky. (Nó chiếu sáng bầu trời ban đêm.)",
        answer: ["M", "O", "O", "N"],
        plainAnswer: ["M", "O", "O", "N"]
    },
    {
        question: "You see this in the sky after rain. (Bạn thấy cái này trên trời sau mưa.)",
        answer: ["R", "A", "I", "N", "B", "O", "W"],
        plainAnswer: ["R", "A", "I", "N", "B", "O", "W"]
    },
    {
        question: "A very tall plant with a trunk and leaves. (Một loại cây rất cao có thân và lá.)",
        answer: ['T', 'R', 'E', 'E'],
        plainAnswer: ['T', 'R', 'E', 'E'] // TREE
    },
    {
        question: "A large area of salty water. (Một khu vực rộng lớn có nước mặn.)",
        answer: ['O', 'C', 'E', 'A', 'N'],
        plainAnswer: ['O', 'C', 'E', 'A', 'N'] // OCEAN
    },
    {
        question: "A small flowing body of water. (Một dòng nước nhỏ chảy.)",
        answer: ['R', 'I', 'V', 'E', 'R'],
        plainAnswer: ['R', 'I', 'V', 'E', 'R'] // RIVER
    },
    {
        question: "It covers the ground in winter and is white. (Nó bao phủ mặt đất vào mùa đông và có màu trắng.)",
        answer: ['S', 'N', 'O', 'W'],
        plainAnswer: ['S', 'N', 'O', 'W'] // SNOW
    },
    {
        question: "It makes things visible. (Nó làm cho mọi thứ có thể nhìn thấy được.)",
        answer: ['L', 'I', 'G', 'H', 'T'],
        plainAnswer: ['L', 'I', 'G', 'H', 'T'] // LIGHT
    },

    // Unit 11: Actions (Hành động) - 10 questions
    {
        question: "You do this when you’re tired. (Bạn làm điều này khi mệt.)",
        answer: ['S', 'L', 'E', 'E', 'P'],
        plainAnswer: ['S', 'L', 'E', 'E', 'P'] // SLEEP
    },
    {
        question: "You do this with your mouth when you're happy. (Bạn thường làm gì với miệng khi bạn vui?)",
        answer: ['S', 'M', 'I', 'L', 'E'],
        plainAnswer: ['S', 'M', 'I', 'L', 'E'] // SMILE
    },
    {
        question: "You do this to move your body fast. (Bạn làm gì để di chuyển nhanh?)",
        answer: ['R', 'U', 'N'],
        plainAnswer: ['R', 'U', 'N'] // RUN
    },
    {
        question: "You do this with your eyes at night. (Bạn làm điều này với mắt vào ban đêm.)",
        answer: ["C", "L", "O", "S", "E"],
        plainAnswer: ["C", "L", "O", "S", "E"]
    },
    {
        question: "You do this with your legs when you play. (Bạn làm điều này với chân khi chơi.)",
        answer: ["J", "U", "M", "P"],
        plainAnswer: ["J", "U", "M", "P"]
    },
    {
        question: "You do this with your voice to make sounds. (Bạn làm điều này với giọng nói của mình để tạo ra âm thanh.)",
        answer: ['S', 'I', 'N', 'G'],
        plainAnswer: ['S', 'I', 'N', 'G'] // SING
    },
    {
        question: "You do this with a book. (Bạn làm điều này với một cuốn sách.)",
        answer: ['R', 'E', 'A', 'D'],
        plainAnswer: ['R', 'E', 'A', 'D'] // READ
    },
    {
        question: "You do this with your feet to music. (Bạn làm điều này với đôi chân của mình theo nhạc.)",
        answer: ['D', 'A', 'N', 'C', 'E'],
        plainAnswer: ['D', 'A', 'N', 'C', 'E'] // DANCE
    },
    {
        question: "You use a pen or pencil for this. (Bạn dùng bút mực hoặc bút chì cho việc này.)",
        answer: ['W', 'R', 'I', 'T', 'E'],
        plainAnswer: ['W', 'R', 'I', 'T', 'E'] // WRITE
    },
    {
        question: "You do this when you are hungry. (Bạn làm điều này khi đói.)",
        answer: ['E', 'A', 'T'],
        plainAnswer: ['E', 'A', 'T'] // EAT
    },

    // Unit 12: Daily Routines (Hoạt động hàng ngày) - 5 questions
    {
        question: "You do this with your teeth every morning. (Bạn làm điều này với răng mỗi sáng.)",
        answer: ['B', 'R', 'U', 'S', 'H'],
        plainAnswer: ['B', 'R', 'U', 'S', 'H'] // BRUSH
    },
    {
        question: "You do this after you wake up. (Bạn làm điều này sau khi thức dậy.)",
        answer: ['G', 'E', 'T', 'U', 'P'],
        plainAnswer: ['G', 'E', 'T', 'U', 'P'] // GETUP
    },
    {
        question: "You do this before you sleep. (Bạn làm điều này trước khi ngủ.)",
        answer: ['W', 'A', 'S', 'H'],
        plainAnswer: ['W', 'A', 'S', 'H'] // WASH
    },
    {
        question: "You do this to your hair to make it neat. (Bạn làm điều này với tóc để làm cho nó gọn gàng.)",
        answer: ['C', 'O', 'M', 'B'],
        plainAnswer: ['C', 'O', 'M', 'B'] // COMB
    },
    {
        question: "You put these on when you get dressed. (Bạn mặc những thứ này vào khi bạn thay quần áo.)",
        answer: ['C', 'L', 'O', 'T', 'H', 'E', 'S'],
        plainAnswer: ['C', 'L', 'O', 'T', 'H', 'E', 'S'] // CLOTHES
    },

    // Unit 13: Transportation (Phương tiện) - 5 questions
    {
        question: "It has two wheels and you pedal it. (Nó có hai bánh và bạn đạp nó.)",
        answer: ['B', 'I', 'K', 'E'],
        plainAnswer: ['B', 'I', 'K', 'E'] // BIKE
    },
    {
        question: "It flies in the sky and carries people. (Nó bay trên trời và chở người.)",
        answer: ['P', 'L', 'A', 'N', 'E'],
        plainAnswer: ['P', 'L', 'A', 'N', 'E'] // PLANE
    },
    {
        question: "It moves on roads and has four wheels. (Nó chạy trên đường và có bốn bánh.)",
        answer: ['C', 'A', 'R'],
        plainAnswer: ['C', 'A', 'R'] // CAR
    },
    {
        question: "A large vehicle that carries many people. (Một phương tiện lớn chở nhiều người.)",
        answer: ['B', 'U', 'S'],
        plainAnswer: ['B', 'U', 'S'] // BUS
    },
    {
        question: "A vehicle that runs on rails. (Một phương tiện chạy trên đường ray.)",
        answer: ['T', 'R', 'A', 'I', 'N'],
        plainAnswer: ['T', 'R', 'A', 'I', 'N'] // TRAIN
    },
    // New question added
    {
        question: "What do you ride on water? (Bạn đi trên gì ở dưới nước?)",
        answer: ['B', 'O', 'A', 'T'],
        plainAnswer: ['B', 'O', 'A', 'T']
    },

    // Unit 14: Feelings (Cảm xúc) - 5 questions
    {
        question: "You feel this when you get a gift. (Bạn thường cảm thấy thế nào khi nhận được quà?)",
        answer: ['H', 'A', 'P', 'P', 'Y'],
        plainAnswer: ['H', 'A', 'P', 'P', 'Y'] // HAPPY
    },
    {
        question: "You feel this when you lose something. (Bạn thấy thế nào khi làm mất đồ?)",
        answer: ['S', 'A', 'D'],
        plainAnswer: ['S', 'A', 'D'] // SAD
    },
    {
        question: "You feel this before a test. (Trước bài kiểm tra, bạn thường cảm thấy như thế nào?)",
        answer: ['N', 'E', 'R', 'V', 'O', 'U', 'S'],
        plainAnswer: ['N', 'E', 'R', 'V', 'O', 'U', 'S'] // NERVOUS
    },
    {
        question: "You feel this when something surprises you. (Bạn cảm thấy thế nào khi có điều gì đó bất ngờ?)",
        answer: ['S', 'U', 'R', 'P', 'R', 'I', 'S', 'E', 'D'],
        plainAnswer: ['S', 'U', 'R', 'P', 'R', 'I', 'S', 'E', 'D'] // SURPRISED
    },
    {
        question: "You feel this when you've done a lot of work. (Bạn cảm thấy thế nào khi đã làm rất nhiều việc?)",
        answer: ['T', 'I', 'R', 'E', 'D'],
        plainAnswer: ['T', 'I', 'R', 'E', 'D'] // TIRED
    },

    // Unit 15: Weather (Thời tiết) - 5 questions
    {
        question: "It's hot and sunny. (Thời tiết như thế nào khi trời nắng nóng?)",
        answer: ['S', 'U', 'N', 'N', 'Y'],
        plainAnswer: ['S', 'U', 'N', 'N', 'Y'] // SUNNY
    },
    {
        question: "Clouds and rain are coming. (Trời đầy mây và sắp mưa.)",
        answer: ['C', 'L', 'O', 'U', 'D', 'Y'],
        plainAnswer: ['C', 'L', 'O', 'U', 'D', 'Y'] // CLOUDY
    },
    {
        question: "White flakes fall from the sky. (Những bông trắng rơi từ trời xuống.)",
        answer: ['S', 'N', 'O', 'W'],
        plainAnswer: ['S', 'N', 'O', 'W'] // SNOW
    },
    {
        question: "When the wind blows strongly. (Khi gió thổi mạnh.)",
        answer: ['W', 'I', 'N', 'D', 'Y'],
        plainAnswer: ['W', 'I', 'N', 'D', 'Y'] // WINDY
    },
    {
        question: "When it's very cold and everything is frozen. (Khi trời rất lạnh và mọi thứ đóng băng.)",
        answer: ['I', 'C', 'Y'],
        plainAnswer: ['I', 'C', 'Y'] // ICY
    },

    // Unit 16: Colors & Numbers - 10 questions
    {
        question: "Color of grass. (Màu của cỏ là gì?)",
        answer: ['G', 'R', 'E', 'E', 'N'],
        plainAnswer: ['G', 'R', 'E', 'E', 'N'] // GREEN
    },
    {
        question: "Number after five. (Số sau số năm là gì?)",
        answer: ['S', 'I', 'X'],
        plainAnswer: ['S', 'I', 'X'] // SIX
    },
    {
        question: "Color of fire trucks. (Xe cứu hỏa màu gì?)",
        answer: ['R', 'E', 'D'],
        plainAnswer: ['R', 'E', 'D'] // RED
    },
    {
        question: "Color of bananas. (Màu của quả chuối là gì?)",
        answer: ['Y','E','L','L','O','W'],
        plainAnswer: ['Y','E','L','L','O','W']
    },
    {
        question: "Number before ten. (Số trước số mười là gì?)",
        answer: ['N', 'I', 'N', 'E'],
        plainAnswer: ['N', 'I', 'N', 'E'] // NINE
    },
    {
        question: "Color of the sky at night. (Màu của bầu trời vào ban đêm.)",
        answer: ['B', 'L', 'A', 'C', 'K'],
        plainAnswer: ['B', 'L', 'A', 'C', 'K'] // BLACK
    },
    {
        question: "Color of snow. (Màu của tuyết.)",
        answer: ['W', 'H', 'I', 'T', 'E'],
        plainAnswer: ['W', 'H', 'I', 'T', 'E'] // WHITE
    },
    {
        question: "The number of fingers on one hand. (Số ngón tay trên một bàn tay.)",
        answer: ['F', 'I', 'V', 'E'],
        plainAnswer: ['F', 'I', 'V', 'E'] // FIVE
    },
    {
        question: "The color of an orange. (Màu của quả cam.)",
        answer: ['O', 'R', 'A', 'N', 'G', 'E'],
        plainAnswer: ['O', 'R', 'A', 'N', 'G', 'E'] // ORANGE
    },
    {
        question: "The number after one. (Số sau số một.)",
        answer: ['T', 'W', 'O'],
        plainAnswer: ['T', 'W', 'O'] // TWO
    },

    // Unit 17: Jobs (Nghề nghiệp) - 5 questions
    {
        question: "Who teaches you at school? (Ai dạy bạn ở trường?)",
        answer: ['T', 'E', 'A', 'C', 'H', 'E', 'R'],
        plainAnswer: ['T', 'E', 'A', 'C', 'H', 'E', 'R'] // TEACHER
    },
    {
        question: "Who helps sick people in the hospital? (Ai giúp người bệnh ở bệnh viện?)",
        answer: ['D', 'O', 'C', 'T', 'O', 'R'],
        plainAnswer: ['D', 'O', 'C', 'T', 'O', 'R'] // DOCTOR
    },
    {
        question: "Who puts out fires? (Ai dập tắt lửa?)",
        answer: ['F', 'I', 'R', 'E', 'F', 'I', 'G', 'H', 'T', 'E', 'R'],
        plainAnswer: ['F', 'I', 'R', 'E', 'F', 'I', 'G', 'H', 'T', 'E', 'R'] // FIREFIGHTER
    },
    {
        question: "Who serves food in a restaurant? (Ai phục vụ đồ ăn trong nhà hàng?)",
        answer: ['W', 'A', 'I', 'T', 'E', 'R'],
        plainAnswer: ['W', 'A', 'I', 'T', 'E', 'R'] // WAITER
    },
    {
        question: "Who bakes bread and cakes? (Ai nướng bánh mì và bánh ngọt?)",
        answer: ['B', 'A', 'K', 'E', 'R'],
        plainAnswer: ['B', 'A', 'K', 'E', 'R'] // BAKER
    },

    // Unit 18: Opposites (Từ trái nghĩa) - 5 questions
    {
        question: "What is the opposite of 'hot'? (Từ trái nghĩa với 'hot' là gì?)",
        answer: ['C', 'O', 'L', 'D'],
        plainAnswer: ['C', 'O', 'L', 'D'] // COLD
    },
    {
        question: "Opposite of big. (Trái nghĩa với 'to')",
        answer: ['S','M','A','L','L'],
        plainAnswer: ['S','M','A','L','L']
    },
    {
        question: "Opposite of slow. (Trái nghĩa với 'chậm')",
        answer: ['F','A','S','T'],
        plainAnswer: ['F','A','S','T']
    },
    {
        question: "Opposite of 'up'. (Trái nghĩa với 'lên')",
        answer: ['D', 'O', 'W', 'N'],
        plainAnswer: ['D', 'O', 'W', 'N'] // DOWN
    },
    {
        question: "Opposite of 'day'. (Trái nghĩa với 'ban ngày')",
        answer: ['N', 'I', 'G', 'H', 'T'],
        plainAnswer: ['N', 'I', 'G', 'H', 'T'] // NIGHT
    },

    // Unit 19: Time (Thời gian) - 5 questions
    {
        question: "The part of the day when the sun rises. (Phần của ngày khi mặt trời mọc.)",
        answer: ['M', 'O', 'R', 'N', 'I', 'N', 'G'],
        plainAnswer: ['M', 'O', 'R', 'N', 'I', 'N', 'G'] // MORNING
    },
    {
        question: "The part of the day when the sun sets. (Phần của ngày khi mặt trời lặn.)",
        answer: ['E', 'V', 'E', 'N', 'I', 'N', 'G'],
        plainAnswer: ['E', 'V', 'E', 'N', 'I', 'N', 'G'] // EVENING
    },
    {
        question: "What comes after today? (Điều gì đến sau hôm nay?)",
        answer: ['T', 'O', 'M', 'O', 'R', 'R', 'O', 'W'],
        plainAnswer: ['T', 'O', 'M', 'O', 'R', 'R', 'O', 'W'] // TOMORROW
    },
    {
        question: "What comes before today? (Điều gì đến trước hôm nay?)",
        answer: ['Y', 'E', 'S', 'T', 'E', 'R', 'D', 'A', 'Y'],
        plainAnswer: ['Y', 'E', 'S', 'T', 'E', 'R', 'D', 'A', 'Y'] // YESTERDAY
    },
    {
        question: "There are seven of these in a week. (Có bảy cái này trong một tuần.)",
        answer: ['D', 'A', 'Y', 'S'],
        plainAnswer: ['D', 'A', 'Y', 'S'] // DAYS
    },

    // Unit 20: Places (Địa điểm) - 5 questions
    {
        question: "Where you go to buy food. (Bạn đi đâu để mua đồ ăn?)",
        answer: ['S', 'U', 'P', 'E', 'R', 'M', 'A', 'R', 'K', 'E', 'T'],
        plainAnswer: ['S', 'U', 'P', 'E', 'R', 'M', 'A', 'R', 'K', 'E', 'T'] // SUPERMARKET
    },
    {
        question: "Where you go to play with friends. (Bạn đi đâu để chơi với bạn bè?)",
        answer: ['P', 'A', 'R', 'K'],
        plainAnswer: ['P', 'A', 'R', 'K'] // PARK (duplicate, good to keep context for places)
    },
    {
        question: "Where you learn to swim. (Bạn học bơi ở đâu?)",
        answer: ['S', 'W', 'I', 'M', 'M', 'I', 'N', 'G', 'P', 'O', 'O', 'L'],
        plainAnswer: ['S', 'W', 'I', 'M', 'M', 'I', 'N', 'G', 'P', 'O', 'O', 'L'] // SWIMMINGPOOL
    },
    {
        question: "Where you can see many old things and art. (Bạn có thể nhìn thấy nhiều đồ cổ và nghệ thuật ở đâu?)",
        answer: ['M', 'U', 'S', 'E', 'U', 'M'],
        plainAnswer: ['M', 'U', 'S', 'E', 'U', 'M'] // MUSEUM
    },
    {
        question: "Where you can catch a train. (Bạn có thể bắt tàu ở đâu?)",
        answer: ['S', 'T', 'A', 'T', 'I', 'O', 'N'],
        plainAnswer: ['S', 'T', 'A', 'T', 'I', 'O', 'N'] // STATION
    }
];
