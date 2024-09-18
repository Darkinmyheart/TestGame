document.addEventListener("DOMContentLoaded", function() {
    let currentStep = 0;

    function updateStory() {
        const storyText = document.getElementById('storyText');
        const choice1 = document.getElementById('choice1');
        const choice2 = document.getElementById('choice2');

        if (currentStep === 0) {
            storyText.textContent = "Bạn đang đứng trước một ngã ba. Bạn muốn đi hướng nào?";
            choice1.textContent = "Đi bên trái";
            choice2.textContent = "Đi bên phải";
        } else if (currentStep === 1) {
            storyText.textContent = "Bạn đã đi bên trái và gặp một con sông. Bạn muốn làm gì?";
            choice1.textContent = "Bơi qua sông";
            choice2.textContent = "Tìm một cây cầu";
        } else if (currentStep === 2) {
            storyText.textContent = "Bạn đã đi bên phải và gặp một khu rừng rậm. Bạn muốn làm gì?";
            choice1.textContent = "Đi vào rừng";
            choice2.textContent = "Quay trở lại";
        } else if (currentStep === 3) {
            storyText.textContent = "Bạn đã bơi qua sông thành công!";
            choice1.textContent = "Kết thúc trò chơi";
            choice2.style.display = 'none';
        } else if (currentStep === 4) {
            storyText.textContent = "Bạn đã tìm thấy một cây cầu và băng qua.";
            choice1.textContent = "Kết thúc trò chơi";
            choice2.style.display = 'none';
        } else if (currentStep === 5) {
            storyText.textContent = "Bạn đã đi vào rừng và bị lạc!";
            choice1.textContent = "Kết thúc trò chơi";
            choice2.style.display = 'none';
        }
    }

    window.makeChoice = function(choice) {
        if (currentStep === 0) {
            currentStep = (choice === 1) ? 1 : 2;
        } else if (currentStep === 1) {
            currentStep = (choice === 1) ? 3 : 4;
        } else if (currentStep === 2) {
            currentStep = (choice === 1) ? 5 : 0;
        }

        updateStory();
    };

    updateStory();
});
