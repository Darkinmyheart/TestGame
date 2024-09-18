// main.js
import { loadCharacterData, updateUI } from './data.js';
import { setupEvents } from './events.js';

// Khởi tạo ứng dụng
function init() {
    loadCharacterData();  // Tải dữ liệu từ localStorage nếu có
    updateUI();           // Cập nhật giao diện dựa trên dữ liệu hiện tại
    setupEvents();        // Thiết lập các event cho người dùng
}

// Gọi hàm khởi tạo khi trang đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    init();
});
