// mywork-script.js
function showImage(src) {
    document.getElementById('main-img').src = src;
}

// Add mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('show');
    });
});

// Add image gallery anto functionality
let images = [
    'images/01.png', 'images/02.png', 'images/03.png', 
    'images/04.png', 'images/05.png', 'images/06.png', 
    'images/07.png', 'images/08.png'
];

let currentIndex = 0;
let intervalId = setInterval(autoSwitchImage, 5000); // 每隔3秒切換一次圖片
let isPlaying = true; // 判斷是否正在播放

function showImage(src) {
    document.getElementById('main-img').src = src;
}

function autoSwitchImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(images[currentIndex]);
}

function togglePlayPause() {
    const btn = document.getElementById('playPauseBtn');
    if (isPlaying) {
        clearInterval(intervalId); // 暫停自動切換
        btn.textContent = 'Play';
    } else {
        intervalId = setInterval(autoSwitchImage, 3000); // 重新開始自動切換
        btn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}
