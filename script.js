const video = document.getElementById("bgVideo");
const text = document.getElementById("animatedText");

// Вибрация при старте видео
if (navigator.vibrate) {
    navigator.vibrate(200);
}

// Ждем окончания видео, затем запускаем текст
video.onended = () => {
    text.classList.add("animate-text");

    // Вибрация во время появления текста
    if (navigator.vibrate) {
        navigator.vibrate([500, 200, 500]);
    }
};

// При нажатии – перезапуск видео и анимации
document.addEventListener("click", () => {
    video.play();
    text.classList.remove("animate-text");
    void text.offsetWidth; // Перезапуск анимации
    text.classList.add("animate-text");

    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
});