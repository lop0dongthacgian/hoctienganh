// js/vocabulary.js

// Biến toàn cục để theo dõi chỉ số từ hiện tại và tổng số từ
let currentWordIndex = 0;
let totalWords = 0;
let vocabularyData = []; // Sẽ được gán từ main.js

const flashcardContainer = document.getElementById('flashcard-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const pronounceBtn = document.getElementById('pronounce-btn');

/**
 * Cập nhật thanh tiến độ hiển thị số từ đã học.
 */
function updateProgressBar() {
    if (totalWords === 0) {
        progressBar.style.width = '0%';
        progressText.textContent = '0/0';
        return;
    }
    const progress = ((currentWordIndex + 1) / totalWords) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentWordIndex + 1}/${totalWords}`;
}

/**
 * Phát âm từ hiện tại sử dụng tệp âm thanh hoặc Web Speech API.
 * @param {string} word - Từ tiếng Anh cần phát âm.
 * @param {string|null} audioPath - Đường dẫn đến tệp âm thanh (nếu có).
 */
function pronounceWord(word, audioPath) {
    if (audioPath) {
        const audio = new Audio(audioPath);
        audio.play().then(() => {
            console.log(`Đã phát âm thanh từ: ${audioPath}`);
        }).catch(error => {
            console.warn(`Không thể phát tệp âm thanh '${audioPath}':`, error);
            // Fallback sang Web Speech API nếu không thể phát file audio
            if ('speechSynthesis' in window) {
                console.log(`Fallback sang Web Speech API cho từ: ${word}`);
                const utterance = new SpeechSynthesisUtterance(word);
                utterance.lang = 'en-US'; // Ngôn ngữ tiếng Anh
                speechSynthesis.speak(utterance);
            } else {
                console.warn("Trình duyệt của bạn không hỗ trợ Web Speech API.");
            }
        });
    } else if ('speechSynthesis' in window) {
        console.log(`Phát âm bằng Web Speech API cho từ: ${word} (không có file audio).`);
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; // Ngôn ngữ tiếng Anh
        speechSynthesis.speak(utterance);
    } else {
        console.warn("Không có tệp âm thanh và trình duyệt không hỗ trợ Web Speech API.");
    }
}

/**
 * Hiển thị Flashcard dựa trên dữ liệu từ.
 * @param {object} wordData - Đối tượng chứa thông tin từ (word, translation, image, audio).
 */
export function renderFlashcard(wordData) {
    if (!flashcardContainer) {
        console.error("Không tìm thấy phần tử flashcard-container.");
        return;
    }

    // Xóa nội dung cũ và thêm class để chuẩn bị cho hiệu ứng lật
    flashcardContainer.classList.remove('flipped');
    flashcardContainer.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front bg-blue-100 text-blue-800 flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg absolute w-full h-full">
                ${wordData.image ? `<img src="${wordData.image}" alt="${wordData.word}" class="w-28 h-28 object-contain mb-4 rounded-xl shadow-md">` : ''}
                <p class="text-4xl font-extrabold text-blue-800">${wordData.word}</p>
            </div>
            <div class="flashcard-back bg-green-100 text-green-800 flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg absolute w-full h-full">
                <p class="text-4xl font-extrabold text-green-800 mb-2">${wordData.word}</p>
                <p class="text-2xl font-semibold text-green-700">${wordData.translation}</p>
            </div>
        </div>
    `;

    // Gắn sự kiện click để lật thẻ
    const flashcardInner = flashcardContainer.querySelector('.flashcard-inner');
    flashcardInner.onclick = () => {
        flashcardContainer.classList.toggle('flipped');
    };

    // Gắn sự kiện cho nút phát âm
    pronounceBtn.onclick = () => {
        // Truyền cả từ và đường dẫn audio vào hàm pronounceWord
        pronounceWord(wordData.word, wordData.audio);
    };

    // Cập nhật tiến độ
    updateProgressBar();
}

/**
 * Thiết lập các nút điều hướng và logic chuyển đổi Flashcard.
 * @param {Array} data - Mảng dữ liệu từ vựng.
 */
export function setupFlashcardNavigation(data) {
    vocabularyData = data;
    totalWords = vocabularyData.length;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (totalWords === 0) {
        flashcardContainer.innerHTML = '<p class="text-xl text-red-600 font-semibold">Không có từ vựng nào để hiển thị. Vui lòng thêm dữ liệu vào data/vocabulary.js!</p>';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        pronounceBtn.disabled = true;
        updateProgressBar();
        return;
    }

    // Hiển thị từ đầu tiên
    renderFlashcard(vocabularyData[currentWordIndex]);

    // Xử lý sự kiện click cho nút "Tiếp Theo"
    nextBtn.addEventListener('click', () => {
        currentWordIndex = (currentWordIndex + 1) % totalWords;
        renderFlashcard(vocabularyData[currentWordIndex]);
    });

    // Xử lý sự kiện click cho nút "Quay Lại"
    prevBtn.addEventListener('click', () => {
        currentWordIndex = (currentWordIndex - 1 + totalWords) % totalWords;
        renderFlashcard(vocabularyData[currentWordIndex]);
    });
}
