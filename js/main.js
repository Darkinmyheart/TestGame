// main.js
import { loadCharacterData, updateUI,updateUIEvent,updateTime } from './data.js';
import { setupEvents } from './events.js';

// Khởi tạo ứng dụng
function init() {
    loadCharacterData();  // Tải dữ liệu từ localStorage nếu có
    updateUI();           // Cập nhật giao diện dựa trên dữ liệu hiện tại
    setupEvents();        
    updateUIEvent();
    updateTime();
}

// Gọi hàm khởi tạo khi trang đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    init();
});
