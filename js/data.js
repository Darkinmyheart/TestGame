// data.js
let avatarPlayer = '../avatars/avatar_1.png';
let time = 0;
const levelData = {
    1: {
        name: "Luyện Khí",
        subLevels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        expRequired: [200, 400, 800, 1200, 1400, 1600, 1800, 2000, 2500],
        description: "Bắt đầu hấp thụ linh khí để tu luyện cơ bản."
    },
    2: {
        name: "Trúc Cơ",
        subLevels: ["Sơ kỳ", "Trung kỳ", "Hậu kỳ"],
        expRequired: [5000, 10000, 20000], // EXP tương ứng cho mỗi giai đoạn
        description: "Củng cố nền tảng, chuẩn bị cho giai đoạn cao hơn."
    },
    3: {
        name: "Kim Đan",
        subLevels: ["Sơ kỳ", "Trung kỳ", "Hậu kỳ"],
        expRequired: [50000, 100000, 150000],
        description: "Tạo ra Kim Đan, cung cấp năng lượng mạnh mẽ."
    },
    4: {
        name: "Nguyên Anh",
        subLevels: ["Sơ kỳ", "Trung kỳ", "Hậu kỳ"],
        expRequired: [200000, 300000, 400000],
        description: "Tạo ra Nguyên Anh, tăng mạnh pháp lực và tuổi thọ."
    },
    5: {
        name: "Hóa Thần",
        subLevels: ["Sơ kỳ", "Trung kỳ", "Hậu kỳ"],
        expRequired: [500000, 600000, 700000],
        description: "Nguyên Anh tiến hóa thành thần thức, tăng khả năng kiểm soát pháp lực."
    },
    6: {
        name: "Hợp Thể",
        subLevels: ["Sơ kỳ", "Trung kỳ", "Hậu kỳ"],
        expRequired: [800000, 900000, 1000000],
        description: "Hợp nhất cơ thể và thần thức, sức mạnh toàn diện."
    },
    7: {
        name: "Đại Thừa",
        subLevels: ["Sơ kỳ", "Trung kỳ", "Hậu kỳ"],
        expRequired: [1200000, 1400000, 1600000],
        description: "Cảnh giới cao nhất trước khi Độ Kiếp, sức mạnh gần như vô song."
    },
    8: {
        name: "Độ Kiếp",
        subLevels: ["Sơ kỳ", "Trung kỳ", "Hậu kỳ"],
        expRequired: [2000000, 2500000, 3000000],
        description: "Vượt qua thiên kiếp, giai đoạn thử thách cuối cùng trước khi thành Tiên."
    },
    9: {
        name: "Thành Tiên",
        subLevels: ["Tiên Nhân"],
        expRequired: [5000000],
        description: "Cảnh giới tiên nhân, bất tử và mạnh mẽ."
    }
};
const items = {
    weapons: [
        { id: 1, name: "Kiếm gỗ", rarity: 1, attack: 10, weight: 5 },
        { id: 2, name: "Rìu gỗ", rarity: 1, attack: 15, weight: 8 },
        { id: 3, name: "Cung gỗ", rarity: 1, attack: 8, weight: 5, dodge: 10 },
        { id: 22, name: "Kiếm đá", rarity: 1, attack: 20, weight: 10 },
        { id: 23, name: "Rìu đá", rarity: 1, attack: 25, weight: 12 },
        { id: 24, name: "Cung đá", rarity: 1, attack: 18, weight: 7 }
    ],
    armor: [
        { id: 4, name: "Áo giáp gỗ", rarity: 1, defense: 20, weight: 15, price: 5 },
        { id: 5, name: "Áo vải", rarity: 1, defense: 10, weight: 3, price: 5 },
        { id: 6, name: "Áo giáp sắt", rarity: 1, defense: 30, weight: 25, price: 5 }
    ],
    material: [
        { id: 7, name: "gỗ", rarity: 1, price: 1 },
        { id: 8, name: "cành cây", rarity: 1, price: 1 },
        { id: 9, name: "đá", rarity: 1, price: 1 },
        { id: 10, name: "đá lửa", rarity: 1, price: 2 },
        { id: 20, name: "Than củi", rarity: 1, price: 2 }
    ],
    food: [
        { id: 11, name: "Cá cơm suối", price: 1, bonusHungry: 10 },
        { id: 12, name: "Cá chạch nhỏ", price: 1, bonusHungry: 10 },
        { id: 13, name: "Cá chép bạc", price: 1, bonusHungry: 10 },
        { id: 14, name: "Cá mè hoa", price: 3, bonusHungry: 20 },
        { id: 15, name: "Cá trê xanh", price: 3, bonusHungry: 20 },
        { id: 16, name: "Cá ngọc đen", price: 3, bonusHungry: 20 },
        { id: 17, name: "Cá lân bạc", price: 9, bonusHungry: 30 },
        { id: 18, name: "Cá tiên vũ", price: 9, bonusHungry: 30 },
        { id: 19, name: "Cá rồng đỏ", price: 35, bonusHungry: 40 },
        { id: 21, name: "Cá cơm nướng", price: 5, bonusHungry: 30 }
    ]
};

const recipe = {
    weapons: [
        {
            itemId: 1, // Kiếm gỗ
            quantity: 1,
            recipe: [
                { itemId: 7, quantity: 2 }, // gỗ
                { itemId: 8, quantity: 1 }  // cành cây
            ]
        },
        {
            itemId: 2, // Rìu gỗ
            quantity: 1,
            recipe: [
                { itemId: 7, quantity: 3 }, // gỗ
                { itemId: 9, quantity: 1 }  // đá
            ]
        },
        {
            itemId: 3, // Cung gỗ
            quantity: 1,
            recipe: [
                { itemId: 7, quantity: 2 }, // gỗ
                { itemId: 8, quantity: 2 }  // cành cây
            ]
        }
    ],
    armor: [
        {
            itemId: 4, // Áo giáp gỗ
            quantity: 1,
            recipe: [
                { itemId: 7, quantity: 5 }, // gỗ
                { itemId: 9, quantity: 2 }  // đá
            ]
        },
        {
            itemId: 5, // Áo vải
            quantity: 1,
            recipe: [
                { itemId: 8, quantity: 3 }, // cành cây
                { itemId: 7, quantity: 1 }  // gỗ
            ]
        },
        {
            itemId: 6, // Áo giáp sắt
            quantity: 1,
            recipe: [
                { itemId: 9, quantity: 5 }, // đá
                { itemId: 7, quantity: 2 }  // gỗ
            ]
        }
    ],
    material: [
        {
            itemId: 20,
            quantity: 1,
            recipe: [
                { itemId: 7, quantity: 1 }
            ]
        }
    ],
    food: [
        {
            itemId: 21,
            quantity: 1,
            recipe: [
                { itemId: 20, quantity: 1 },
                { itemId: 11, quantity: 1 }
            ]
        }
    ]
};

const event = {
    1: [{
        name: "event_danh_ca",
        description_1: "Bắt cá",
        description_2: "tỉ lệ câu được cá quý tỉ lệ thuận với sức mạnh",
        time: 2,
        hungryRequired: 5,
        reward: {
            1: [
                { itemId: 11, quantity: 1 },
                { itemId: 12, quantity: 1 },
                { itemId: 13, quantity: 1 },
            ],
            2: [
                { itemId: 14, quantity: 1 },
                { itemId: 15, quantity: 1 },
                { itemId: 16, quantity: 1 },
            ],
            3: [
                { itemId: 17, quantity: 1 },
                { itemId: 18, quantity: 1 },
            ],
            4: [
                { itemId: 19, quantity: 1 },
            ]
        },
    },
    {
        name: "event_tu_luyen_1",
        description_1: "Tu luyện sau nhà",
        description_2: "Tu vi tăng 10 tốn 20 thể lực và 8 giờ",
        time: 8,
        hungryRequired: 20,
        bonusExp: 10,
        reward: {
            1: [
                { itemId: 7, quantity: 1 },
                { itemId: 8, quantity: 1 },
                { itemId: 9, quantity: 1 },
            ]
        }
    }, {
        name: "event_di_san_1",
        description_1: "Săn thú gần nhà",
        description_2: "Tu vi tăng 20 tốn 20 thể lực và 8 giờ và săn thú kiếm nguyên liệu",
        time: 8,
        hungryRequired: 20,
        bonusExp: 20,
        reward: {
            1: [
                { itemId: 7, quantity: 1 },
                { itemId: 8, quantity: 1 },
                { itemId: 9, quantity: 1 },
            ]
        },
        hunt: {
            1: [
                { enemyId: 1, quantity: 1 },
                { enemyId: 2, quantity: 2 }
            ]
        }
    }

    ]
}
//Tuổi ban đầu
let basicAge = 17;
// Dữ liệu nhân vật
let baseCharacter = {
    name: 'Nhân vật',
    exp: 0,
    level: 0,
    expToLevelUp: 200,
    age: Math.floor(time * 24 * 30 * 12 / 360) + basicAge,
    maxAge: 100,
    attack: 5,
    defend: 5,
    health: 100,
    maxHealth: 100,
    energy: 50,
    maxEnergy: 50,
    hungry: 3000000,
    crit: 0,
    dodge: 0,
};

let character_item = {
    weapon: 0,
    armor: 0,
    helmet: 0,
    boots: 0,
    accessory1: 0,
    accessory2: 0,
    accessory3: 0
};

function calculateStats() {
    // Sao chép thuộc tính gốc để bắt đầu
    let totalStats = { ...baseCharacter };

    // Duyệt qua từng trang bị
    for (let key in character_item) {
        const item = getItemDetail(character_item[key]);

        // Cộng tất cả các chỉ số của trang bị vào thuộc tính của nhân vật
        for (let stat in item) {
            if (stat !== 'id' && stat !== 'name' && stat !== 'weight' && stat !== 'rarity') { // Bỏ qua thuộc tính `id`
                totalStats[stat] = (totalStats[stat] || 0) + item[stat];
            }
        }
    }

    return totalStats;
}
let character = calculateStats();
//itemId = ?,quantity=?
let character_inv = [
    { itemId: 1, quantity: 1 },
    { itemId: 3, quantity: 1 }
];
//set avatar
export function setAvatarPlayer(url) {
    avatarPlayer = url;
}
//Hàm nhận url avatar
export function getAvatarPlayer() {
    return avatarPlayer;
}
//Hàm để nhận dữ liệu list item
export function getItemList() {
    return items;
}
//Hàm kiểm tra tuổi thọ
export function checkAge(timeSpend) {
    let timeAlive = (character.maxAge - character.age) * 24 * 30 * 12;
    if (timeSpend + time >= timeAlive) {
        return false;
    } else {
        return true;
    }
}
//Hàm tốn time để thực hiện event
export function spendTime(timeSpend) {
    if (checkAge(timeSpend)) {
        updateTime();
        time += timeSpend;
        return true;
    } else {
        return false;
    }
}
// Hàm để nhận dữ liệu nhân vật hiện tại
export function getCharacter() {
    return character;
}
//Hàm để nhận dữ liệu túi của nhân vật
export function getCharacterInv() {
    return character_inv;
}
//Hàm nhận dữ liệu của item có trong túi dựa vào itemId
export function getInventoryItem(itemId, quantity) {
    const item = character_inv.find(item => item.itemId === itemId);

    if (item && item.quantity >= quantity) {
        return item;
    }

    return null;
}
//Hàm giảm số lượng item trong túi đồ dựa itemId
export function reduce_quantity_item(itemId, quantity) {
    const item = character_inv.find(item => item.itemId === itemId); // Tìm item theo itemId

    if (item) { // Kiểm tra nếu tìm thấy item
        item.quantity -= quantity;

        // Nếu số lượng item <= 0 thì xóa khỏi túi đồ
        if (item.quantity <= 0) {
            const index = character_inv.indexOf(item);
            if (index !== -1) {
                character_inv.splice(index, 1); // Xóa item khỏi character_inv
            }
        }
    }
}

//Thêm item vào túi đồ nhân vật
export function addToInventory(itemId, quantity) {
    // Kiểm tra xem vật phẩm đã có trong kho đồ chưa
    const itemInInventory = character_inv.find(item => item.itemId === itemId);

    if (itemInInventory) {
        // Nếu có, tăng số lượng
        itemInInventory.quantity += quantity;
    } else {
        // Nếu chưa, thêm vật phẩm mới vào kho
        character_inv.push({ itemId, quantity });
    }
}
//Hàm nhận dữ liệu recipe
export function getRecipe() {
    return recipe;
}
//Hàm tìm thông tin chi tiết item
export function getItemDetail(itemId) {
    for (let category in items) {
        const item = items[category].find(item => item.id === itemId);
        if (item) {
            return item;
        }
    }
    return null;
}
//Hàm chuyển time thành thời gian ngày tháng năm
function convertGameTimeToDate() {
    // Chuyển đổi giờ thành ngày, tháng, năm
    const days = Math.floor(time / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    // Tính ngày, tháng còn lại sau khi chia cho tháng và năm
    const remainingDays = days % 30;
    const remainingMonths = months % 12;

    return `Ngày ${remainingDays + 1} - tháng ${remainingMonths + 1} - năm ${years}`;
}
// Hàm lưu trữ dữ liệu vào localStorage
export function saveCharacterData() {
    localStorage.setItem('character', JSON.stringify(character));
}

// Hàm tải dữ liệu từ localStorage (nếu có)
export function loadCharacterData() {
    const savedData = localStorage.getItem('character');
    if (savedData) {
        character = JSON.parse(savedData);
    }
}

// Hàm cập nhật giao diện
export function updateUI() {
    document.getElementById('character-name').innerText = character.name;
    document.getElementById('character-level').innerText = `Tu vi: ${getLevelByExp(character.exp)}`;
    document.getElementById('character-exp').innerText = `EXP: ${character.exp}/ ${character.expToLevelUp}`;
    document.getElementById('character-health').innerText = `Máu: ${character.health}/ ${character.maxHealth}`;
    document.getElementById('character-energy').innerText = `Năng lượng: ${character.energy}/ ${character.maxEnergy}`;
    document.getElementById('character-age').innerText = `Tuổi: ${character.age}/ ${character.maxAge}`;
    document.getElementById('character-hungry').innerText = `Đói bụng: ${character.hungry}`;
    document.getElementById('char-weapon').innerText = `Vũ khí: ${character_item.weapon === 0 ? "Không có" : getItemDetail(character_item.weapon).name}`;
    document.getElementById('char-armor').innerText = `Giáp: ${character_item.armor === 0 ? "Không có" : items.armor[character_item.armor]}`;
    document.getElementById('char-helmet').innerText = `Nón: ${character_item.helmet === 0 ? "Không có" : items.helmet[character_item.helmet]}`;
    document.getElementById('char-boots').innerText = `Giày: ${character_item.boots === 0 ? "Không có" : items.boots[character_item.boots]}`;
    document.getElementById('char-accessory-1').innerText = `Trang sức: ${character_item.accessory1 === 0 ? "Không có" : items.accessory[character_item.accessory1]}`;
    document.getElementById('char-accessory-2').innerText = `Trang sức: ${character_item.accessory2 === 0 ? "Không có" : items.accessory[character_item.accessory2]}`;
    document.getElementById('char-accessory-3').innerText = `Trang sức: ${character_item.accessory3 === 0 ? "Không có" : items.accessory[character_item.accessory3]}`;
}

export function updateTime() {
    let time = document.getElementById('date');
    time.innerText = `${convertGameTimeToDate()}`;
}
// Hàm xử lý các sự kiện dựa trên event.name
function eventHandler(event_this) {
    switch (event_this.name) {
        case 'event_danh_ca':
            return event_danh_ca(event_this);
        case 'event_tu_luyen_1':
            return event_tu_luyen(event_this);
        case 'event_di_san_1':
            return event_di_san(event_this);
        default:
            console.log("Sự kiện không được định nghĩa.");
    }
}
// Mảng chứa các hàm cần chạy tự động
const autoFunctions = [];

// Hàm thêm hàm xử lý sự kiện vào mảng autoFunctions
function addToAutoFunctions(event_this) {
    addAutoLog(event_this);
}
// Hàm hiển thị danh sách vật phẩm lên túi đồ
export function updateUIInv(selectedType) {
    let inventoryDisplay = document.getElementById('inventoryItems');
    inventoryDisplay.innerHTML = ''; // Xóa nội dung cũ nếu có

    // Tạo danh sách vật phẩm để hiển thị
    let itemList = document.createElement('ul');
    itemList.style.listStyleType = 'none';  // Loại bỏ dấu chấm
    itemList.style.paddingLeft = '0';

    // Duyệt qua danh sách inventory để hiển thị
    character_inv.filter(item => items[selectedType].some(i => i.id === item.itemId))
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

            // Xử lý hiển thị các nút tương ứng theo loại
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
            if (selectedType === 'weapons') {
                let btnWear = document.createElement('button');
                btnWear.textContent = 'Trang bị';
                btnWear.addEventListener('click', () => useWeapons(item.itemId));
                divalt.appendChild(btnWear);
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
}

// Hàm hiển thị danh sách sự kiện và thêm nút Auto
export function updateUIEvent() {
    const listevent = document.getElementById('event-Cul');
    listevent.innerText = '';

    for (let i in event) {
        if (i <= character.level + 1) {
            event[i].forEach(e => {
                const event_this = e;

                // Tạo container cho nút sự kiện và nút Auto
                const divContainer = document.createElement('div');
                divContainer.style.display = 'flex';
                divContainer.style.alignItems = 'center';
                divContainer.style.marginBottom = '5px';

                // Tạo nút sự kiện
                const btn = document.createElement('button');
                btn.style.width = '80%'; // Điều chỉnh để có chỗ cho nút Auto
                btn.id = event_this.name;
                btn.innerText = event_this.description_1;
                btn.classList.add('event-button');

                // Tooltip cho nút sự kiện
                let tooltipTimeout;
                btn.addEventListener('mouseenter', function (e) {
                    tooltipTimeout = setTimeout(() => {
                        showTooltip_event(event_this, e);
                    }, 1000);
                });
                btn.addEventListener('click', () => eventHandler(event_this));
                btn.addEventListener('mouseleave', function () {
                    clearTimeout(tooltipTimeout);
                    hideTooltip_event();
                });

                // Tạo nút Auto
                const autoBtn = document.createElement('button');
                autoBtn.innerText = 'Auto';
                autoBtn.classList.add('auto-button');
                autoBtn.style.width = '20%';
                autoBtn.style.marginLeft = '5px';
                autoBtn.addEventListener('click', () => addToAutoFunctions(event_this));

                // Thêm các nút vào container
                divContainer.appendChild(btn);
                divContainer.appendChild(autoBtn);

                // Thêm container vào listevent
                listevent.appendChild(divContainer);
            });

            // Thêm dòng trống giữa các sự kiện
            const br = document.createElement('br');
            listevent.appendChild(br);
        }
    }
}

//Hàm function tu_luyen_1
function event_tu_luyen(event) {
    if (spendTime(event.time)) {
        if (reduce_hungry(event.hungryRequired)) {
            addExp(event.bonusExp);
            get_item_from_rewards(event);
            updateUI();
            return true;
        }
    }
}
//Hàm function event_di_san
function event_di_san(event) {
    if (spendTime(event.time)) {
        if (reduce_hungry(event.hungryRequired)) {
            addExp(event.bonusExp);
            huntEvent(event);
            updateUI();
            return true;
        }
    }
}
//Sử dụng thức ăn
export function useFood(item, quantity) {
    let itemInfo = getItemDetail(item.itemId);
    addHungry(itemInfo.bonusHungry * quantity);
    addLog(`Sử dụng ${quantity} * ${itemInfo.name} tăng độ no ${itemInfo.bonusHungry * quantity}`)
    reduce_quantity_item(item.itemId, quantity);
    showSelectedInventory();
    updateUI();
}
//Sử dụng weapons
export function useWeapons(itemId) {
    const itemInv = character_inv.map(i => i.itemId === itemId);
    if (itemInv) {
        if (character_item.weapon) {
            addToInventory(character_item.weapon, 1);
            reduce_quantity_item(itemId, 1);
            character_item.weapon = itemId;
        } else {
            reduce_quantity_item(itemId, 1);
            character_item.weapon = itemId;
        }
    }
    character = calculateStats();
    updateUIInv('weapons');
    updateUI();
}
function get_item_from_rewards(event) {
    const rates = [
        { rate: 1, chance: 70 },  // 70% cho rate 1
        { rate: 2, chance: 20 },  // 20% cho rate 2
        { rate: 3, chance: 8 },   // 8% cho rate 3
        { rate: 4, chance: 2 }    // 2% cho rate 4
    ];

    const randomValue = Math.floor(Math.random() * 100);
    let selectedRate;
    let cumulativeChance = 0;
    for (const rate of rates) {
        cumulativeChance += rate.chance;
        if (randomValue < cumulativeChance) {
            selectedRate = rate.rate;
            break;
        }
    }

    // Chọn một loại item ngẫu nhiên từ nhóm rate đã xác định
    const itemPool = event.reward[selectedRate];
    if (itemPool) {
        const selectedItem = itemPool[Math.floor(Math.random() * itemPool.length)];
        // Thêm cá vào túi và ghi log
        addToInventory(selectedItem.itemId, selectedItem.quantity);
        addLog(`Đạt được ${selectedItem.quantity} ${getItemDetail(selectedItem.itemId).name}`);
    }
    return true;  // Trả về true khi thành công
}
function huntEvent(event) {
    // Tỷ lệ xuất hiện của từng rate
    const rates = [
        { rate: 1, chance: 70 },  // 70% cho rate 1
        { rate: 2, chance: 20 },  // 20% cho rate 2
        { rate: 3, chance: 8 },   // 8% cho rate 3
        { rate: 4, chance: 2 }    // 2% cho rate 4
    ];

    // Random một số từ 0 đến 99 để xác định nhóm rate
    const randomValue = Math.floor(Math.random() * 100);

    // Xác định nhóm rate dựa vào randomValue
    let selectedRate;
    let cumulativeChance = 0;
    for (const rate of rates) {
        cumulativeChance += rate.chance;
        if (randomValue < cumulativeChance) {
            selectedRate = rate.rate;
            break;
        }
    }

    // Kiểm tra xem rate đã chọn có tồn tại trong reward và hunt
    const selectedEnemies = event.hunt[selectedRate];
    if (selectedEnemies) {
        const selectedEnemie = selectedEnemies[Math.floor(Math.random() * selectedEnemies.length)];
        console.log("Kẻ địch:", selectedEnemie);
        startBattle(selectedEnemie.enemyId);
    }
}
//Hàm function bắt cá
function event_danh_ca(event) {
    if (spendTime(event.time)) {
        if (reduce_hungry(event.hungryRequired)) {
            get_item_from_rewards(event);
            updateUI();
        }
    }
}

// Hàm hiển thị tooltip với thông tin chi tiết của item
function showTooltip_event(event, e) {
    let tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = `Mô tả : ${event.description_2}`;
    // Hiển thị tooltip
    tooltip.style.display = 'block';
    // Đặt vị trí tooltip dựa trên sự kiện chuột
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
}

// Hàm ẩn tooltip khi chuột rời item
function hideTooltip_event() {
    let tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}
// Hàm kiểm tra đói
export function reduce_hungry(hungryRe) {
    if (character.hungry - hungryRe < 0) {
        addLog(`Cần ${hungryRe} thể lực để thực hiện`);
        return false;
    } else {
        character.hungry -= hungryRe;
        return true
    }
}
//Hàm tăng điểm kinh nghiệm
function addExp(bonnusExp) {
    const expAfter = character.exp + bonnusExp;

    if (expAfter >= character.expToLevelUp) {
        character.exp = character.expToLevelUp;
        addLog('Tu vi đã đạt tối đa. Cần đột phá', 'red')
        if (!document.getElementById('breakthrough-btn')) {
            let leftSection = document.getElementById('left-section');
            let btnBr = document.createElement('button');
            btnBr.textContent = 'Đột phá';
            btnBr.id = 'breakthrough-btn'
            leftSection.appendChild(btnBr);
        }
        return true;
    } else {
        character.exp += bonnusExp;
        addLog(`Tu vi của bạn tăng ${bonnusExp}`)
        return false;
    }
}

//Hàm trả về cấp độ từ exp đang có load khi khởi động
export function getLevelByExp() {
    let currentLevel = null;
    let currentSubLevel = null;

    for (let lvl in levelData) {
        let subLevels = levelData[lvl].subLevels;
        let expRequired = levelData[lvl].expRequired;

        // Kiểm tra trong từng cấp nhỏ của mỗi cấp lớn
        for (let i = 0; i < subLevels.length; i++) {
            if (baseCharacter.exp < expRequired[i]) {
                currentLevel = levelData[lvl].name; // Cấp lớn
                currentSubLevel = subLevels[i]; // Cấp nhỏ
                return `${currentLevel} - ${currentSubLevel}`;
            }
        }
    }

    // Nếu người chơi có EXP cao hơn tất cả, trả về cấp cao nhất
    let highestLevel = levelData[Object.keys(levelData).length];
    return `${highestLevel.name} - ${highestLevel.subLevels[0]}`;
}
//Hàm trả lưu ExpToLevelUp của character từ exp
function updateExpToLevelUp() {
    let totalExp = character.exp;

    for (let level in levelData) {
        const levelInfo = levelData[level];
        const expRequirements = levelInfo.expRequired;

        for (let i = 0; i < expRequirements.length; i++) {
            if (totalExp < expRequirements[i]) {
                // Cập nhật thông tin về cấp độ, giai đoạn và expRequired
                character.level = parseInt(level);
                character.expToLevelUp = expRequirements[i];
                return;
            }
        }
    }

    // Nếu vượt qua cấp cuối (ví dụ "Thành Tiên"), không cần thêm exp
    character.level = 9;
    character.expToLevelUp = null; // Đặt null nếu không còn cấp độ nào để lên
}
//Hàm tăng độ no
export function addHungry(bonusHungry) {
    character.hungry += bonusHungry;
}

export function addLog(message, color = 'black') {
    let logContainer = document.getElementById('action-log');
    // Lấy thời gian hiện tại
    let now = new Date();
    let currentTime = now.toLocaleTimeString(); // Định dạng giờ:phút:giây

    let logEntry = document.createElement('div');
    logEntry.textContent = `[${currentTime}] ${message}`;
    logEntry.style.color = color;

    // Thêm log mới vào container
    logContainer.appendChild(logEntry);

    // Cuộn log container xuống cuối cùng để xem log mới nhất
    logContainer.scrollTop = logContainer.scrollHeight;
}
let interval;
export function runAutoFunctions(status) {
    if (status) {
        // Nếu đang chạy, khởi tạo interval chỉ khi mảng autoFunctions có phần tử
        if (autoFunctions.length > 0) {
            let index = 0;
            interval = setInterval(() => {
                // Kiểm tra nếu đã chạy hết mảng, đặt lại chỉ số
                if (index >= autoFunctions.length) {
                    index = 0; // Đặt lại chỉ số để lặp lại từ đầu
                }

                // Thực thi hàm trong mảng
                const result = autoFunctions[index]();
                if (result === true) { // Tiến đến hàm tiếp theo nếu trả về `true` hoặc không trả về gì
                    index++;
                }
            }, 200); // Chạy mỗi 1 giây (hoặc có thể điều chỉnh)
        }
    } else {
        // Nếu status là false, dừng interval
        clearInterval(interval);
    }
}

// Hàm thêm log và hiển thị trong auto-log
export function addAutoLog(event_this) {
    const autoFunction = () => eventHandler(event_this);
    autoFunctions.push(autoFunction);

    // Thêm vào log hiển thị
    const logList = document.getElementById('auto-log-list');
    const logItem = document.createElement('li');
    logItem.classList.add('log-item');
    logItem.textContent = event_this.description_1;

    // Tạo nút "X" để xóa
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "X";
    deleteBtn.classList.add('delete-button');
    deleteBtn.style.marginLeft = '10px';

    // Sự kiện khi nhấn nút "X"
    deleteBtn.addEventListener('click', () => {
        const index = autoFunctions.indexOf(autoFunction);
        if (index > -1) {
            autoFunctions.splice(index, 1);
        }
        logItem.remove();
    });

    logItem.appendChild(deleteBtn);
    logList.appendChild(logItem);
}

const enemies = [
    { id: 1, name: 'Chó sói con', avatar: '../enemyImg/enemy_1.png', health: 60, attack: 10, defend: 0, crit: 0, dodge: 0 },
    { id: 2, name: 'Chó sói trưởng thành', avatar: '../enemyImg/enemy_2.png', health: 80, attack: 10, defend: 5, crit: 0, dodge: 0 }
]
export function getEnemies() {
    return enemies;
}
function showAttackPopup(enemyId) {
    const battlePopup = document.getElementById('battlePopup');
    const player = document.getElementById('player');
    const opponent = document.getElementById('opponent');
    const playerAttackBtn = document.getElementById('playerAttackBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const damageInfo = document.getElementById('damageInfo');
    damageInfo.innerHTML = '';
    document.getElementById('player-img').src = avatarPlayer;

    let characterInfo = getCharacter();
    const enemy = enemies.find(e => e.id === enemyId);
    let enemyHealth = enemy.health;
    document.getElementById('enemy-img').src = enemy.avatar;
    battlePopup.style.display = 'flex';

    function displayDamage(message) {
        damageInfo.innerHTML += `<p>${message}</p>`;
        // damageInfo.scrollTop = damageInfo.scrollHeight;
    }

    function calculateDamage(attack, defense, critChance, critDamageMultiplier = 1.5, coefficient = 10) {
        const isCritical = Math.random() < critChance;
        const criticalMultiplier = isCritical ? critDamageMultiplier : 1;
        const dameDealt = (attack * coefficient) / (coefficient + defense);
        return Math.floor(dameDealt * criticalMultiplier);
    }

    // Hàm tấn công của người chơi
    function playerAttack() {
        if (Math.random() < enemy.dodge) {
            displayDamage(`${enemy.name} đã né tránh thành công !`);
            return;
        }
        const damage = calculateDamage(characterInfo.attack, enemy.defend, characterInfo.crit);

        enemyHealth -= damage;
        player.classList.add('attack-animation');
        displayDamage(`Người chơi gây ${damage.toFixed(2)} sát thương! Đối thủ còn ${enemyHealth.toFixed(2)} máu`);

        setTimeout(() => {
            player.classList.remove('attack-animation');
        }, 100);

        if (enemyHealth <= 0) {
            displayDamage(`Đối thủ đã bị tiêu diệt!`);
            clearInterval(battleInterval); // Dừng trận đấu khi đối thủ bị hạ gục
            closePopupBtn.disabled = false;
        }
    }

    // Hàm tấn công của đối thủ
    function opponentAttack() {
        if (Math.random() < characterInfo.dodge) {
            displayDamage(`Đã né tránh thành công !`);
            return;
        }
        const damage = calculateDamage(enemy.attack, characterInfo.defend, enemy.crit || 0);
        characterInfo.health -= damage;
        opponent.classList.add('attack-opponent');
        displayDamage(`${enemy.name} gây ${damage.toFixed(2)} sát thương! Người chơi còn ${characterInfo.health.toFixed(2)} máu`);

        setTimeout(() => {
            opponent.classList.remove('attack-opponent');
        }, 100);

        if (characterInfo.health <= 0) {
            displayDamage(`Người chơi đã bị tiêu diệt!`);
            clearInterval(battleInterval); // Dừng trận đấu khi người chơi bị hạ gục
            closePopupBtn.disabled = false;
        }
    }

    // Tự động tấn công xen kẽ giữa người chơi và đối thủ
    const battleInterval = setInterval(() => {
        closePopupBtn.disabled = true;
        if (characterInfo.health > 0 && enemyHealth > 0) {
            playerAttack();
            setTimeout(opponentAttack, 100); // Để đối thủ tấn công sau người chơi 500ms
        }
    }, 1000); // Chu kỳ tấn công mỗi 1 giây

    // Đóng popup
    closePopupBtn.addEventListener('click', () => {
        battlePopup.style.display = 'none';
        updateUI();
    });
}
function startBattle(enemyId) {
    const characterInfo = getCharacter();
    const enemy = enemies.find(e => e.id === enemyId);
    if (!enemy) {
        addLog("Kẻ địch không tồn tại!");
        return;
    }

    let enemyHealth = enemy.health;

    // Hàm tính sát thương
    function calculateDamage(attack, defense, critChance, critDamageMultiplier = 1.5, coefficient = 10) {
        const isCritical = Math.random() < critChance;
        const criticalMultiplier = isCritical ? critDamageMultiplier : 1;
        const damageDealt = (attack * coefficient) / (coefficient + defense);
        return Math.floor(damageDealt * criticalMultiplier);
    }

    // Chiến đấu cho đến khi một bên hết máu
    while (characterInfo.health > 0 && enemyHealth > 0) {
        // Người chơi tấn công
        if (Math.random() >= enemy.dodge) { // Kiểm tra né tránh của kẻ địch
            const damageToEnemy = calculateDamage(characterInfo.attack, enemy.defend, characterInfo.crit);
            enemyHealth -= damageToEnemy;
            addLog(`Người chơi gây ${damageToEnemy.toFixed(2)} sát thương! Đối thủ còn ${Math.max(0, enemyHealth.toFixed(2))} máu`,'blue');

            if (enemyHealth <= 0) {
                addLog("Đối thủ đã bị tiêu diệt!");
                break;
            }
        } else {
            addLog(`${enemy.name} đã né tránh thành công!`);
        }

        // Đối thủ tấn công
        if (Math.random() >= characterInfo.dodge) { // Kiểm tra né tránh của người chơi
            const damageToPlayer = calculateDamage(enemy.attack, characterInfo.defend, enemy.crit || 0);
            characterInfo.health -= damageToPlayer;
            addLog(`${enemy.name} gây ${damageToPlayer.toFixed(2)} sát thương! Người chơi còn ${Math.max(0, characterInfo.health.toFixed(2))} máu`,'purple');

            if (characterInfo.health <= 0) {
                addLog("Người chơi đã bị tiêu diệt!");
                showGameOverPopup();
                break;
            }
        } else {
            addLog(`Người chơi đã né tránh thành công!`);
        }
    }
}
// Hàm hiển thị popup "Game Over" và tải lại trò chơi
function showGameOverPopup() {
    const gameOverPopup = document.getElementById('gameOverPopup');
    gameOverPopup.style.display = 'block';

    // Xử lý sự kiện cho nút "Chơi lại"
    document.getElementById('restartButton').addEventListener('click', () => {
        gameOverPopup.style.display = 'none';
        location.reload(); // Tải lại trang để bắt đầu lại trò chơi
    });
}
