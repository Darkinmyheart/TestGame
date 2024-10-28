// data.js

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
        }
    },
    {
        name: "event_tu_luyen_1",
        description_1: "Tu luyện sau nhà",
        description_2: "Tu vi tăng 10 tốn 20 thể lực và 8 giờ",
        time: 8,
        hungryRequired: 20,
        bonusExp: 10,
    }]
}
//Tuổi ban đầu
let basicAge = 17;
// Dữ liệu nhân vật
let character = {
    name: 'Nhân vật',
    level: 0,
    exp: 0,
    expToLevelUp: 200,
    age: Math.floor(time * 24 * 30 * 12 / 360) + basicAge,
    maxAge: 100,
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
// Hàm xử lý các sự kiện dựa trên event.name
function eventHandler(event_this) {
    switch (event_this.name) {
        case 'event_danh_ca':
            return event_danh_ca(event_this);
        case 'event_tu_luyen_1':
            return event_tu_luyen(event_this);
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
            updateUI();
            return true;
        }
    }
}
//Hàm function bắt cá
function event_danh_ca(event) {
    if (spendTime(event.time)) {
        if (reduce_hungry(event.hungryRequired)) {
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

            // Thêm cá vào túi và ghi log
            addToInventory(selectedFish.itemId, selectedFish.quantity);
            addLog(`Câu được ${selectedFish.quantity} ${getItemDetail(selectedFish.itemId).name}`);
            updateUI();

            return true;  // Trả về true khi thành công
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
//Hàm tăng exp
function addExp(bonnusExp) {
    // Tính tổng exp sau khi thêm
    const expAfter = character.exp + bonnusExp;

    // Nếu tổng exp vượt quá expToLevelUp, đặt exp bằng expToLevelUp
    if (expAfter >= character.expToLevelUp) {
        character.exp = character.expToLevelUp; // Giới hạn ở expToLevelUp
        addLog('Bạn có thể tăng cảnh giới rồi! Chúc mừng')
    } else {
        // Nếu chưa đạt tới expToLevelUp, cộng exp bình thường
        character.exp += bonnusExp;
        addLog(`Tu vi của bạn tăng ${bonnusExp}`)
    }
}

//Hàm trả về cấp độ từ exp đang có load khi khởi động
function getLevelByExp(exp) {
    let currentLevel = null;
    let currentSubLevel = null;

    for (let lvl in levelData) {
        let subLevels = levelData[lvl].subLevels;
        let expRequired = levelData[lvl].expRequired;

        // Kiểm tra trong từng cấp nhỏ của mỗi cấp lớn
        for (let i = 0; i < subLevels.length; i++) {
            if (exp < expRequired[i]) {
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
                console.log(result)
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
    console.log(autoFunctions);

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