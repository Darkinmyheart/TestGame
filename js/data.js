// data.js

let date = {
    day:1,
    month:1,
    year:1997,
}
let level = {
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

// Dữ liệu nhân vật
let character = {
    name: 'Nhân vật',
    level: 0,
    exp: 0,
    expToLevelUp: level[1].expRequired,
    age:17,
    maxAge:100,
    health:100,
    maxHealth:100,
    energy:50,
    maxEnergy:50,
    hungry:100,
    maxHungry:100,
    thirsty:100,
    maxThirsty:100
};
let item={
    
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
    document.getElementById('character-hungry').innerText = `Đói bụng: ${character.hungry}/ ${character.maxHungry}`;
    document.getElementById('character-thirsty').innerText = `Khát: ${character.thirsty}/ ${character.maxThirsty}`;
}

// Hàm kiểm tra nếu đủ EXP để lên cấp
export function checkLevelUp() {
    expToLevelUp = level[character.level+1].expRequired[0];
    if(character){}
}

// Hàm để nhận dữ liệu nhân vật hiện tại
export function getCharacter() {
    return character;
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