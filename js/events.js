// events.js
import { saveCharacterData, loadCharacterData, updateUI, checkLevelUp, getCharacter } from './data.js';

// Hàm thêm EXP khi người chơi nhấn nút
export function gainExp(amount) {
    const character = getCharacter();
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

    document.getElementById('reset-btn').addEventListener('click',()=>{
        localStorage.clear();
        location.reload()
    })
}
