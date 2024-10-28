// events.js
import { saveCharacterData, loadCharacterData, updateUI, checkLevelUp, getCharacter, getCharacterInv, getItemDetail, getItemList, addHungry, addLog, reduce_quantity_item } from './data.js';
const character = getCharacter();
// // Hàm thêm EXP khi người chơi nhấn nút
// export function gainExp(amount) {
//     character.exp += amount;
//     checkLevelUp(); // Kiểm tra nếu đủ EXP lên cấp
//     saveCharacterData(); // Lưu lại dữ liệu
//     updateUI(); // Cập nhật giao diện
// }


// Thêm các event cho các nút
export function setupEvents() {

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

// Hàm hiển thị vật phẩm dựa trên loại được chọn
function showSelectedInventory() {

    let selectedType = document.getElementById('inventoryType').value;
    const inv = getCharacterInv();
    const items = getItemList();
    let inventoryDisplay = document.getElementById('inventoryItems');
    inventoryDisplay.innerHTML = ''; // Xóa nội dung cũ nếu có

    // Tạo danh sách vật phẩm dựa trên loại đã chọn
    let itemList = document.createElement('ul');
    itemList.style.listStyleType = 'none';  // Loại bỏ dấu chấm
    itemList.style.paddingLeft = '0';

    // Lọc danh sách inventory để lấy những vật phẩm thuộc loại đã chọn
    inv
        .filter(item => items[selectedType].some(i => i.id === item.itemId))
        .forEach(item => {
            // Lấy thông tin chi tiết của item từ itemList
            let itemDetails = getItemDetail(item.itemId);

            let listItem = document.createElement('li');
            listItem.style.display = 'flex';
            listItem.style.justifyContent = 'space-between';
            let itemName = document.createElement('span');
            itemName.classList.add('item-name');
            itemName.textContent = `${itemDetails.name} (x${item.quantity})`; // Hiển thị số lượng
            let btn = document.createElement('button');
            btn.textContent = 'Sử dụng';
            btn.addEventListener('click', () => useFood(item,1));

            let btnMax = document.createElement('button');
            btnMax.textContent = 'Dùng tất cả';
            btnMax.addEventListener('click', () => useFood(item,item.quantity));

            let divalt= document.createElement('div')
            divalt.appendChild(btn);
            divalt.appendChild(btnMax);
            listItem.appendChild(itemName);
            listItem.appendChild(divalt);
            itemList.appendChild(listItem);

            // Sự kiện hiển thị tooltip khi trỏ chuột vào item
            let tooltipTimeout;
            listItem.addEventListener('mouseenter', function (e) {
                tooltipTimeout = setTimeout(() => {
                    showTooltip(itemDetails, e);
                }, 1000); // Hiển thị sau 1 giây
            });

            // Ẩn tooltip khi nhấp chuột vào item
            listItem.addEventListener('click', function () {
                clearTimeout(tooltipTimeout); // Hủy hiển thị nếu tooltip đang đợi
                hideTooltip(); // Ẩn tooltip ngay khi nhấp chuột
            });
            // Ẩn tooltip khi di chuột ra ngoài item
            listItem.addEventListener('mouseleave', function () {
                clearTimeout(tooltipTimeout); // Hủy hiển thị nếu chuột rời đi trước 1 giây
                hideTooltip(); // Ẩn tooltip
            });
        });

    inventoryDisplay.appendChild(itemList); // Hiển thị danh sách trong modal
}

//Sử dụng thức ăn
function useFood(item,quantity) {
    let itemInfo = getItemDetail(item.itemId);
    addHungry(itemInfo.bonusHungry*quantity);
    addLog(`Sử dụng ${quantity} * ${itemInfo.name} tăng độ no ${itemInfo.bonusHungry* quantity}`)
    reduce_quantity_item(item.itemId, quantity);
    showSelectedInventory();
    updateUI();
}
// Hàm hiển thị tooltip với thông tin chi tiết của item
function showTooltip(item, event) {
    let tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = `
    Tên: ${item.name} <br>
    Giá: ${item.price} <br>
    Sát thương: ${item.damage || 'N/A'} <br>
    Phòng thủ: ${item.defense || 'N/A'}
    `;
    // Hiển thị tooltip
    tooltip.style.display = 'block';

    // Đặt vị trí tooltip dựa trên sự kiện chuột
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
}

// Hàm ẩn tooltip khi chuột rời item
function hideTooltip() {
    let tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
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





