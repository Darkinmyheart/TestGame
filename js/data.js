// data.js

// Dữ liệu nhân vật
let character = {
    name: 'Nhân vật',
    level: 1,
    exp: 0,
    expToLevelUp: 100,
    age: 17,
    health:100,
    maxHealth:100,
    energy:50,
    maxEnergy:50,

};

let daytime = 24;
let date = {
    day:1,
    month:1,
    year:1997,
}

let level = {
    1: { name: "Luyện Khí", expRequired: 100 },
    2: { name: "Trúc Cơ", expRequired: 300 },
    3: { name: "Kim Đan", expRequired: 800 },
    4: { name: "Nguyên Anh", expRequired: 1500 },
    5: { name: "Hóa Thần", expRequired: 3000 },
    6: { name: "Luyện Hư", expRequired: 6000 },
    7: { name: "Hợp Thể", expRequired: 12000 },
    8: { name: "Đại Thừa", expRequired: 24000 },
    9: { name: "Độ Kiếp", expRequired: 50000 }
};
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
    document.getElementById('character-level').innerText = `Level: ${level[character.level].name}`;
    document.getElementById('character-exp').innerText = `EXP: ${character.exp}/${character.expToLevelUp}`;
}

// Hàm kiểm tra nếu đủ EXP để lên cấp
export function checkLevelUp() {
    let nextLevel = character.level + 1;
    if (character.exp >= level[character.level].expRequired) {
        character.level+=1;
        character.exp=0;
        character.expToLevelUp= level[character.level].expRequired;
        console.log(`Bạn đã lên cấp ${level[nextLevel].name}!`);
    } else {
        console.log(`Cần thêm ${level[nextLevel].expRequired - character.exp} EXP để lên cấp ${level[nextLevel].name}`);
    }
}

// Hàm để nhận dữ liệu nhân vật hiện tại
export function getCharacter() {
    return character;
}
