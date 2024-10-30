// events.js
import { useFood, getInventoryItem, addToInventory, getRecipe, updateUI, getCharacter, getCharacterInv, getItemDetail, getItemList, addHungry, addLog, runAutoFunctions, reduce_quantity_item } from './data.js';
const character = getCharacter();
// // Hàm thêm EXP khi người chơi nhấn nút
// export function gainExp(amount) {
//     character.exp += amount;
//     checkLevelUp(); // Kiểm tra nếu đủ EXP lên cấp
//     saveCharacterData(); // Lưu lại dữ liệu
//     updateUI(); // Cập nhật giao diện
// }

let functionAuto = [];
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
        showAtributeCharater();
        document.getElementById('atribute_character_modal').style.display = 'flex'; // Hiển thị popup
    });
    // Khi người dùng nhấn nút "Chế đồ"
    document.getElementById('craft-btn').addEventListener('click', function () {
        showCraftModal();
        document.getElementById('craft_modal').style.display = 'flex'; // Hiển thị popup
    })
    // Đóng popup khi nhấn nút "Đóng"
    document.getElementById('closeInventoryBtn').addEventListener('click', function () {
        document.getElementById('inventoryModal').style.display = 'none';
    });
    document.getElementById('closeAtributeBtn').addEventListener('click', function () {
        document.getElementById('atribute_character_modal').style.display = 'none';
    });
    document.getElementById('closeRecipeBtn').addEventListener('click', function () {
        document.getElementById('craft_modal').style.display = 'none';
    })
    //Sự kiện cho button auto
    document.getElementById('auto-start').addEventListener('click', () => runAutoFunctions(true));
    document.getElementById('auto-stop').addEventListener('click', () => runAutoFunctions(false));
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
            let divalt = document.createElement('div');

            listItem.style.display = 'flex';
            listItem.style.justifyContent = 'space-between';
            let itemName = document.createElement('span');
            itemName.classList.add('item-name');
            itemName.textContent = `${itemDetails.name} (x${item.quantity})`; // Hiển thị số lượng
            if (selectedType === 'food') {
                let btn = document.createElement('button');
                btn.textContent = 'Sử dụng';
                btn.addEventListener('click', () => useFood(item, 1));

                let btnMax = document.createElement('button');
                btnMax.textContent = 'Dùng tất cả';
                btnMax.addEventListener('click', () => useFood(item, item.quantity));
                divalt.appendChild(btn);
                divalt.appendChild(btnMax);
            }
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

function showCraftModal() {
    // Lấy phần tử select và danh sách hiển thị
    const typeSelect = document.getElementById('recipe_type');
    const recipeList = document.getElementById('recipe_list');
    recipeList.innerHTML = ''; // Xóa danh sách cũ

    // Lấy dữ liệu recipe
    const recipeData = getRecipe();

    // Hiển thị danh sách recipe của loại đầu tiên ngay lập tức
    showRecipeList(typeSelect.value);

    // Hiển thị danh sách recipe khi thay đổi loại
    typeSelect.addEventListener('change', function () {
        showRecipeList(typeSelect.value);
    });

    // Hàm hiển thị danh sách recipe theo loại
    function showRecipeList(selectedType) {
        recipeList.innerHTML = ''; // Xóa danh sách cũ khi chọn loại mới

        // Lấy danh sách recipe của loại được chọn
        const recipes = recipeData[selectedType];

        // Duyệt qua từng công thức trong loại đã chọn
        recipes.forEach(recipe => {
            let li = document.createElement('li');
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.classList.add('recipe-item');

            let p = document.createElement('p');
            p.textContent = `${getItemDetail(recipe.itemId).name}`; // Tên vật phẩm

            // Sự kiện hiển thị tooltip khi di chuột vào item
            p.addEventListener('mouseenter', function (e) {
                let tooltipText = recipe.recipe.map(r => {
                    const itemDetail = getItemDetail(r.itemId);
                    return `${itemDetail.name} (x${r.quantity})`;
                }).join('<br>');

                showTooltipCustom(e, tooltipText);
            });

            p.addEventListener('mouseleave', hideTooltip);

            let divBtn = document.createElement('div');
            divBtn.style.display = 'flex';
            // Tạo nút chế tạo
            let craftBtn = document.createElement('button');
            craftBtn.textContent = 'Craft';
            craftBtn.addEventListener('click', () => craftItem(recipe));

            let craftAllBtn = document.createElement('button');
            craftAllBtn.textContent = 'All';

            let craftQuantityBtn = document.createElement('button');
            craftQuantityBtn.textContent = 'Quantity';
            craftQuantityBtn.addEventListener('click', () => {
                showCraftPopup(recipe);
            });
            divBtn.appendChild(craftBtn);
            divBtn.appendChild(craftAllBtn);
            divBtn.appendChild(craftQuantityBtn);

            li.appendChild(p);
            li.appendChild(divBtn);
            recipeList.appendChild(li);
        });
    }
    // Hiển thị popup để chọn số lượng
    function showCraftPopup(recipe) {
        const popup = document.getElementById('craft-item-popup');
        const craftQuantityInput = document.getElementById('craft-item-quantity');
        craftQuantityInput.value = 1;
        popup.style.display = 'flex';

        document.getElementById('craft-item-confirm-btn').onclick = function () {
            const quantity = parseInt(craftQuantityInput.value);
            craftItem(recipe, quantity);
            popup.style.display = 'none';
        };

        document.getElementById('craft-item-cancel-btn').onclick = function () {
            popup.style.display = 'none';
        };
    }
    // Hàm hiển thị tooltip
    function showTooltipCustom(event, content) {
        let tooltip = document.getElementById('tooltip');
        tooltip.innerHTML = content;
        tooltip.style.display = 'block';
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    }

    // Hàm ẩn tooltip
    function hideTooltip() {
        let tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    }

    // Hàm chế tạo vật phẩm dựa trên item trong recipe
    function craftItem(item) {
        const itemToCraft = getItemDetail(item.itemId);

        if (!itemToCraft) {
            console.log("Không tìm thấy công thức chế tạo cho vật phẩm này.");
            return false;
        }

        // Kiểm tra nếu có đủ nguyên liệu
        for (const ingredient of item.recipe) {
            if (!getInventoryItem(ingredient.itemId, ingredient.quantity)) {
                addLog(`Không đủ ${getItemDetail(ingredient.itemId).name} x${ingredient.quantity} để chế tạo`);
                return;
            }
        }

        // Trừ nguyên liệu sau khi xác nhận đủ
        for (const ingredient of item.recipe) {
            reduce_quantity_item(ingredient.itemId, ingredient.quantity);
        }

        // Thêm vật phẩm đã chế tạo vào kho
        addToInventory(item.itemId, item.quantity);
        addLog(`Đã chế tạo thành công ${item.quantity} ${itemToCraft.name}!`);
        updateUI(); // Cập nhật giao diện nếu cần
        return true;
    }
}



