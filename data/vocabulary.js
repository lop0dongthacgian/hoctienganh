// data/vocabulary.js

// Dữ liệu từ vựng cho ứng dụng Flashcard.
// Bạn có thể dễ dàng thêm, sửa, xóa các mục ở đây để cập nhật nội dung.
// Đảm bảo mỗi đối tượng có các thuộc tính: word, translation, image, audio.
// Đã thêm trường optional: vietnameseExplanation để giải thích chi tiết hơn bằng tiếng Việt.
export const vocabularyData = [
    {
        word: "Hello",
        translation: "Xin chào",
        vietnameseExplanation: "Là lời chào phổ biến khi gặp ai đó.", // Ví dụ về giải thích chi tiết
        image: "https://placehold.co/150x150/80e7b9/ffffff?text=Hello",
        audio: "audio/hello.mp3"
    },
    {
        word: "Goodbye",
        translation: "Tạm biệt",
        vietnameseExplanation: "Dùng khi bạn rời đi hoặc chia tay ai đó.",
        image: "https://placehold.co/150x150/93c5fd/ffffff?text=Goodbye",
        audio: "audio/goodbye.mp3"
    },
    {
        word: "Cat",
        translation: "Con mèo",
        // Không có giải thích chi tiết cho từ này, chỉ có dịch nghĩa
        image: "https://placehold.co/150x150/fde047/ffffff?text=Cat",
        audio: "audio/cat.mp3"
    },
    {
        word: "Dog",
        translation: "Con chó",
        image: "https://placehold.co/150x150/fca5a5/ffffff?text=Dog",
        audio: "audio/dog.mp3"
    },
    {
        word: "Apple",
        translation: "Quả táo",
        vietnameseExplanation: "Một loại trái cây tròn, thường có màu đỏ hoặc xanh, vị ngọt hoặc chua.",
        image: "https://placehold.co/150x150/c4b5fd/ffffff?text=Apple",
        audio: "audio/apple.mp3"
    },
    {
        word: "Book",
        translation: "Quyển sách",
        image: "https://placehold.co/150x150/a78bfa/ffffff?text=Book",
        audio: "audio/book.mp3"
    },
    {
        word: "Teacher",
        translation: "Giáo viên",
        vietnameseExplanation: "Người hướng dẫn và dạy dỗ học sinh trong trường học.",
        image: "https://placehold.co/150x150/8b5cf6/ffffff?text=Teacher",
        audio: "audio/teacher.mp3"
    },
    {
        word: "Student",
        translation: "Học sinh",
        image: "https://placehold.co/150x150/6d28d9/ffffff?text=Student",
        audio: "audio/student.mp3"
    },
    {
        word: "House",
        translation: "Ngôi nhà",
        image: "https://placehold.co/150x150/4c1d95/ffffff?text=House",
        audio: "audio/house.mp3"
    },
    {
        word: "School",
        translation: "Trường học",
        image: "https://placehold.co/150x150/3b0764/ffffff?text=School",
        audio: "audio/school.mp3"
    }
];
