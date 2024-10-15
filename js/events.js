// events.js
import { saveCharacterData, loadCharacterData, updateUI, checkLevelUp, getCharacter } from './data.js';
const character = getCharacter();
// Hàm thêm EXP khi người chơi nhấn nút
export function gainExp(amount) {
    character.exp += amount;
    checkLevelUp(); // Kiểm tra nếu đủ EXP lên cấp
    saveCharacterData(); // Lưu lại dữ liệu
    updateUI(); // Cập nhật giao diện
}


// Thêm các event cho các nút
export function setupEvents() {
    // Thêm sự kiện cho nút "Tu luyện"
    document.getElementById('train-btn').addEventListener('click', () => {
        gainExp(100);
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        localStorage.clear();
        location.reload()
    })

    // Khi người dùng thay đổi loại vật phẩm trong select
    document.getElementById('inventoryType').addEventListener('change', showSelectedInventory);

    // Khi người dùng nhấn nút "Mở túi đồ"
    document.getElementById('openInventoryBtn').addEventListener('click', function () {
        showSelectedInventory(); // Hiển thị vật phẩm của loại đầu tiên khi mở popup
        document.getElementById('inventoryModal').style.display = 'flex'; // Hiển thị popup
    });
    // Khi người dùng nhấn nút "Thuộc tính"
    document.getElementById('atribute_character').addEventListener('click', function () {
        showSelectedInventory(); // Hiển thị vật phẩm của loại đầu tiên khi mở popup
        showAtributeCharater();
        document.getElementById('atribute_character_modal').style.display = 'flex'; // Hiển thị popup
    });
    // Đóng popup khi nhấn nút "Đóng"
    document.getElementById('closeInventoryBtn').addEventListener('click', function () {
        document.getElementById('inventoryModal').style.display = 'none';
    });
    // Đóng popup khi nhấn nút "Đóng"
    document.getElementById('closeAtributeBtn').addEventListener('click', function () {
        document.getElementById('atribute_character_modal').style.display = 'none';
    });

}
// Dữ liệu giả lập cho hành trang
let inventory = {
    weapons: [
        { name: "Kiếm sắt", damage: 10, type: "Vũ khí" },
        { name: "Khiên gỗ", defense: 5, type: "Vũ khí" }
    ],
    consumables: [
        { name: "Bình máu", quantity: 2, type: "Tiêu hao" },
        { name: "Thuốc tăng lực", quantity: 1, type: "Tiêu hao" }
    ],
    materials: [
    ]
};

// Hàm hiển thị vật phẩm dựa trên loại được chọn
function showSelectedInventory() {
    let selectedType = document.getElementById('inventoryType').value; // Lấy loại vật phẩm từ dropdown
    let inventoryDisplay = document.getElementById('inventoryItems');
    inventoryDisplay.innerHTML = ''; // Xóa nội dung cũ nếu có

    // Tạo danh sách vật phẩm dựa trên loại đã chọn
    let itemList = document.createElement('ul');
    itemList.style.listStyleType = 'none';  // Loại bỏ dấu chấm
    itemList.style.paddingLeft = '0';

    inventory[selectedType].forEach(item => {
        let listItem = document.createElement('li');
        let itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        let itemDetails = document.createElement('span');
        itemDetails.classList.add('item-details');

        // Hiển thị thông tin chi tiết tùy vào loại vật phẩm
        if (item.damage) itemDetails.textContent = ` (sát thương: ${item.damage})`;
        if (item.defense) itemDetails.textContent = ` (phòng thủ: ${item.defense})`;
        if (item.quantity) itemDetails.textContent = ` (số lượng: ${item.quantity})`;

        listItem.appendChild(itemName);
        listItem.appendChild(itemDetails);
        itemList.appendChild(listItem);
    });

    inventoryDisplay.appendChild(itemList); // Hiển thị danh sách trong modal
}
function showAtributeCharater() {
    let atributeDisplay = document.getElementById('atribute_list');
    atributeDisplay.innerHTML = ''; // Xóa nội dung cũ nếu có

    let attList = document.createElement('ul');
    attList.style.listStyleType = 'none';  // Loại bỏ dấu chấm
    attList.style.paddingLeft = '0';
    // Chuyển đối tượng thành mảng các cặp [key, value]
    Object.entries(character).forEach(([key, value]) => {
        let listItem = document.createElement('li');
        let itemName = document.createElement('span');
        itemName.classList.add('item-name');

        // Hiển thị tên thuộc tính
        itemName.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}:`;

        let itemDetails = document.createElement('span');
        itemDetails.classList.add('item-details');

        // Hiển thị giá trị của thuộc tính
        itemDetails.textContent = ` ${value}`;

        // Ghép các phần tử lại và chèn vào danh sách
        listItem.appendChild(itemName);
        listItem.appendChild(itemDetails);
        attList.appendChild(listItem);
    });
    atributeDisplay.appendChild(attList);
}
function addLog(message) {
    let logContainer = document.getElementById('action-log');
    
    // Tạo một mục log mới
    let logEntry = document.createElement('div');
    logEntry.textContent = `[${currentTime}] ${message}`;
    
    // Thêm log mới vào container
    logContainer.appendChild(logEntry);
    
    // Cuộn log container xuống cuối cùng để xem log mới nhất
    logContainer.scrollTop = logContainer.scrollHeight;
}




