// Danh sách các ảnh avatar có sẵn trong thư mục avatars
const avatarImages = [
    '../avatars/avatar_1.png',
    '../avatars/avatar_2.png',
    '../avatars/avatar_3.png',
    '../avatars/avatar_4.png'
];
// events.js
import { setAvatarPlayer,getAvatarPlayer, getLevelByExp,updateUIInv,useWeapons, useFood, getInventoryItem, addToInventory, getRecipe, updateUI, getCharacter, getCharacterInv, getItemDetail, getItemList, addHungry, addLog, runAutoFunctions, reduce_quantity_item } from './data.js';
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
    document.getElementById('close-popup-avatar').addEventListener('click', function () {
        closeAvatarPopup();
    })
    // Hiển thị popup chọn avatar và tải các ảnh avatar có sẵn
    document.getElementById('userAvatar').onclick = function () {
        const avatarGallery = document.getElementById('avatarGallery');
        avatarGallery.innerHTML = ''; // Xóa nội dung cũ

        avatarImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Avatar option';
            img.classList.add('avatar-option');
            img.onclick = () => {
                document.getElementById('userAvatar').src = src; // Cập nhật avatar chính
                setAvatarPlayer(src);
                closeAvatarPopup();
            };
            avatarGallery.appendChild(img);
        });

        document.getElementById('avatarPopup').style.display = 'flex';
    };
    document.getElementById('userAvatar').src = getAvatarPlayer();
    //Sự kiện cho button auto
    document.getElementById('auto-start').addEventListener('click', () => runAutoFunctions(true));
    document.getElementById('auto-stop').addEventListener('click', () => runAutoFunctions(false));
}

// Hàm hiển thị vật phẩm dựa trên loại được chọn
function showSelectedInventory() {
    let selectedType = document.getElementById('inventoryType').value;
    // Gọi hàm để hiển thị danh sách đã lọc lên giao diện
    updateUIInv(selectedType);
}


const attributeLabels = {
    name: "Tên nhân vật",
    exp: "Kinh nghiệm",
    level: "Cảnh giới",
    expToLevelUp: "Kinh nghiệm để lên cấp",
    age: "Tuổi",
    maxAge: "Tuổi tối đa",
    attack: "Tấn công",
    defend: "Phòng thủ",
    health: "Máu hiện tại",
    maxHealth: "Máu tối đa",
    energy: "Năng lượng hiện tại",
    maxEnergy: "Năng lượng tối đa",
    hungry: "Đói bụng",
    crit: "Tỉ lệ chí mạng",
    dodge: "Tỉ lệ né tránh"
};
function showAtributeCharater() {
    let atributeDisplay = document.getElementById('atribute_list');
    atributeDisplay.innerHTML = ''; // Xóa nội dung cũ nếu có

    let attList = document.createElement('ul');
    attList.style.listStyleType = 'none';  // Loại bỏ dấu chấm
    attList.style.paddingLeft = '0';

    // Lấy thông tin từ getCharacter() hoặc từ character object.
    const characterAttributes = getCharacter(); 

    // Duyệt qua từng thuộc tính trong character
    Object.entries(characterAttributes).forEach(([key, value]) => {
        let listItem = document.createElement('li');
        listItem.style.display = 'flex';
        listItem.style.justifyContent = 'space-between';
        
        let itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = `${attributeLabels[key] || key}:`;
        let itemDetails = document.createElement('span');
        itemDetails.classList.add('item-details');
        if(key==='level'){
            itemDetails.textContent=getLevelByExp(characterAttributes.exp);
        }else{
            itemDetails.textContent = value;
        }

        // Ghép các phần tử vào li và thêm vào ul
        listItem.appendChild(itemName);
        listItem.appendChild(itemDetails);
        attList.appendChild(listItem);
    });

    // Hiển thị danh sách thuộc tính trong phần tử atributeDisplay
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
            craftBtn.addEventListener('click', () => craftItem(recipe, 1));
            //Tạo nút chế tất cả nguyên liệu có trong túi
            let craftAllBtn = document.createElement('button');
            craftAllBtn.textContent = 'All';
            craftAllBtn.addEventListener('click', () => craftItem(recipe, -1));
            //Tạo nút chế theo số lượng nguyên liệu tự chọn
            let craftQuantityBtn = document.createElement('button');
            craftQuantityBtn.textContent = 'Quantity';
            craftQuantityBtn.addEventListener('click', () => {
                showCraftPopup(recipe);
                document.getElementById('craft-required-info').textContent = `Trong túi có ${recipe.recipe.map(m => {
                    const mi = getItemDetail(m.itemId);
                    const itemInv = getCharacterInv().find(i => i.itemId === m.itemId);
                    return `${mi.name}x${itemInv ? itemInv.quantity : '0'}`
                }).join(', ')}`
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
    function craftItem(item, quantity) {
        let quantityAfter = quantity;
        const itemToCraft = getItemDetail(item.itemId);
        if (quantity === -1) {
            quantityAfter = Infinity; // Khởi tạo với giá trị rất lớn

            // Kiểm tra số lượng tối đa có thể chế tạo dựa trên từng nguyên liệu trong recipe
            for (const ingredient of item.recipe) {
                const inventoryItem = getInventoryItem(ingredient.itemId, ingredient.quantity); // Lấy nguyên liệu từ túi
                if (inventoryItem) {
                    // Tính số lượng tối đa có thể dùng cho nguyên liệu hiện tại
                    const maxQuantityForIngredient = Math.floor(inventoryItem.quantity / ingredient.quantity);
                    console.log(maxQuantityForIngredient);
                    // Cập nhật quantityAfter để tìm số lượng nhỏ nhất
                    quantityAfter = Math.min(quantityAfter, maxQuantityForIngredient);
                }
            }
        }
        if (!itemToCraft) {
            console.log("Không tìm thấy công thức chế tạo cho vật phẩm này.");
            return;
        }

        // Kiểm tra nếu có đủ nguyên liệu
        for (const ingredient of item.recipe) {
            if (!getInventoryItem(ingredient.itemId, ingredient.quantity * quantityAfter)) {
                addLog(`Không đủ ${getItemDetail(ingredient.itemId).name} x${ingredient.quantity * quantityAfter} để chế tạo`);
                return;
            }
        }

        // Trừ nguyên liệu sau khi xác nhận đủ
        for (const ingredient of item.recipe) {
            reduce_quantity_item(ingredient.itemId, ingredient.quantity * quantityAfter);
        }

        // Thêm vật phẩm đã chế tạo vào kho
        addToInventory(item.itemId, item.quantity * quantityAfter);
        addLog(`Đã chế tạo thành công ${item.quantity * quantityAfter} ${itemToCraft.name}!`);
        updateUI(); // Cập nhật giao diện nếu cần
        return true;
    }
}

// Đóng popup avatar
function closeAvatarPopup() {
    document.getElementById('avatarPopup').style.display = 'none';
}


