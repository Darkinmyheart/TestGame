// data.js

let time = 0;

const level = {
    1: {
        name: "Luyện Khí",
        subLevels: ["1 - 9 tầng"],
        expRequired: [1000],  // 1000 EXP mỗi tầng
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
        { id: 1, name: "Kiếm gỗ", rarity: 1, damage: 10, weight: 5 },
        { id: 2, name: "Rìu gỗ", rarity: 1, damage: 15, weight: 8 },
        { id: 3, name: "Cung gỗ", rarity: 1, damage: 8, weight: 5 }
    ],
    armor: [
        { id: 4, name: "Áo giáp gỗ", rarity: 1, defense: 20, weight: 15, price: 5 },
        { id: 5, name: "Áo vải", rarity: 1, defense: 10, weight: 3, price: 5 },
        { id: 6, name: "Áo giáp sắt", rarity: 1, defense: 30, weight: 25, price: 5 }
    ],
    material: [
        { id: 7, name: "gỗ", rarity: 1, price: 1 },
        { id: 8, name: "cành cây", rarity: 1, price: 2 },
        { id: 9, name: "đá", rarity: 1, price: 2 },
        { id: 10, name: "đá lửa", rarity: 1, price: 2 }
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
        { id: 19, name: "Cá rồng đỏ", price: 35, bonusHungry: 40 }
    ]
};
const event = {
    1: [{
        name: "event_danh_ca",
        description_1: "Bắt cá",
        description_2: "tỉ lệ câu được cá quý tỉ lệ thuận với sức mạnh",
        time: 0.5,
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
        }
    }]
}
// Dữ liệu nhân vật
let character = {
    name: 'Nhân vật',
    level: 0,
    exp: 0,
    expToLevelUp: level[1].expRequired,
    age: 17,
    attack: 5,
    defend: 5,
    maxAge: 100,
    health: 100,
    maxHealth: 100,
    energy: 50,
    maxEnergy: 50,
    hungry: 100
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
let character_inv = [];
//Hàm để nhận dữ liệu list item
export function getItemList() {
    return items;
}
// Hàm để nhận dữ liệu nhân vật hiện tại
export function getCharacter() {
    return character;
}
export function getCharacterInv() {
    return character_inv;
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

//Thêm item vào túi đồ nhân vật
function addToInventory(itemId, quantity) {
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
    document.getElementById('character-level').innerText = `Tu vi: ${getLevelByExp(character.exp)}}`;
    document.getElementById('character-exp').innerText = `EXP: ${character.exp}/ ${character.expToLevelUp}`;
    document.getElementById('character-health').innerText = `Máu: ${character.health}/ ${character.maxHealth}`;
    document.getElementById('character-energy').innerText = `Năng lượng: ${character.energy}/ ${character.maxEnergy}`;
    document.getElementById('character-age').innerText = `Tuổi: ${character.age}/ ${character.maxAge}`;
    document.getElementById('character-hungry').innerText = `Đói bụng: ${character.hungry}`;
    document.getElementById('char-weapon').innerText = character_item.weapon === 0 ? "" : items.weapons[character_item.weapon];
    document.getElementById('char-armor').innerText = character_item.armor === 0 ? "" : items.armor[character_item.armor];
    document.getElementById('char-helmet').innerText = character_item.helmet === 0 ? "" : items.helmet[character_item.helmet];
    document.getElementById('char-boots').innerText = character_item.boots === 0 ? "" : items.boots[character_item.boots];
    document.getElementById('char-accessory-1').innerText = character_item.accessory1 === 0 ? "" : items.accessory[character_item.accessory1];
    document.getElementById('char-accessory-2').innerText = character_item.accessory2 === 0 ? "" : items.accessory[character_item.accessory2];
    document.getElementById('char-accessory-3').innerText = character_item.accessory3 === 0 ? "" : items.accessory[character_item.accessory3];
}

export function updateTime() {
    let time = document.getElementById('date');
    time.innerText = `${convertGameTimeToDate()}`;
}
export function updateUIEvent() {
    var listevent = document.getElementById('event-Cul');
    listevent.innerText = '';
    for (let i in event) {
        if (i <= character.level + 1) {
            event[i].forEach(e => {
                var event_this = e;
                var btn = document.createElement('button');
                btn.id = e.name;
                btn.innerText = e.description_1;
                listevent.appendChild(btn);

                let tooltipTimeout;
                btn.addEventListener('mouseenter', function (e) {
                    tooltipTimeout = setTimeout(() => {
                        showTooltip_event(event_this, e);
                    }, 1000);
                });

                // Sử dụng hàm ẩn danh để trì hoãn gọi event_danh_ca
                btn.addEventListener('click', () => event_danh_ca(event_this));

                btn.addEventListener('mouseleave', function () {
                    clearTimeout(tooltipTimeout);
                    hideTooltip_event();
                });
            });
        }
    }
}

function event_danh_ca(event) {
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

    // Chọn một loại cá ngẫu nhiên từ nhóm rate đã xác định
    const fishPool = event.reward[selectedRate];
    const selectedFish = fishPool[Math.floor(Math.random() * fishPool.length)];
    addToInventory(selectedFish.itemId, selectedFish.quantity);
    addLog(`Câu được ${selectedFish.quantity}  ${getItemDetail(selectedFish.itemId).name}`)
    character.hungry -= 10;
    updateUI();
    time+=2;
    updateTime();
    return selectedFish;
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

// Hàm kiểm tra nếu đủ EXP để lên cấp
export function checkLevelUp() {
    expToLevelUp = level[character.level + 1].expRequired[0];
    if (character) { }
}
// Hàm kiểm tra đói
export function reduce_hungry(hungryRe){
    if(character.hungry-hungryRe<0){
        return
    }
}

function getLevelByExp(exp) {
    let currentLevel = null;
    let currentSubLevel = null;

    for (let lvl in level) {
        let subLevels = level[lvl].subLevels;
        let expRequired = level[lvl].expRequired;

        // Kiểm tra trong từng cấp nhỏ của mỗi cấp lớn
        for (let i = 0; i < subLevels.length; i++) {
            if (exp < expRequired[i]) {
                currentLevel = level[lvl].name; // Cấp lớn
                currentSubLevel = subLevels[i]; // Cấp nhỏ
                return `${currentLevel} - ${currentSubLevel}`;
            }
        }
    }

    // Nếu người chơi có EXP cao hơn tất cả, trả về cấp cao nhất
    let highestLevel = level[Object.keys(level).length];
    return `${highestLevel.name} - ${highestLevel.subLevels[0]}`;
}
//Hàm tăng độ no
export function addHungry(bonusHungry) {
    character.hungry += bonusHungry;
}
//Hàm giảm số lượng item trong túi đồ
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

export function addLog(message) {
    let logContainer = document.getElementById('action-log');

    // Lấy thời gian hiện tại
    let now = new Date();
    let currentTime = now.toLocaleTimeString(); // Định dạng giờ:phút:giây

    // Tạo một mục log mới
    let logEntry = document.createElement('div');
    logEntry.textContent = `[${currentTime}] ${message}`;

    // Thêm log mới vào container
    logContainer.appendChild(logEntry);

    // Cuộn log container xuống cuối cùng để xem log mới nhất
    logContainer.scrollTop = logContainer.scrollHeight;
}