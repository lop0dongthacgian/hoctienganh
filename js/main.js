// js/main.js

// Nhập dữ liệu từ vựng từ tệp data/vocabulary.js
import { vocabularyData } from '../data/vocabulary.js';

// Nhập các hàm liên quan đến Flashcard từ tệp js/vocabulary.js
import { setupFlashcardNavigation } from './vocabulary.js';

// Đợi cho đến khi toàn bộ DOM được tải xong
document.addEventListener('DOMContentLoaded', () => {
    console.log("Ứng dụng đang được khởi tạo...");

    // Gọi hàm thiết lập điều hướng Flashcard với dữ liệu đã nhập
    setupFlashcardNavigation(vocabularyData);

    console.log("Ứng dụng đã sẵn sàng!");
});
