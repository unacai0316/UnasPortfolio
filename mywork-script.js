document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('show');
    });

    // 初始加載時啟動輪播
    startSlideshow();
    const button = document.getElementById('playPauseBtn');
    button.textContent = 'STOP CHANGING';
    button.style.backgroundColor = 'gray';

    // 添加縮略圖點擊事件
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            showImage(imageSrc);
        });
    });

    // 添加播放/暫停按鈕點擊事件
    button.addEventListener('click', togglePlayPause);
});

// Add image gallery auto functionality
let images = [
    'images/01.png', 'images/02.png', 'images/03.png', 
    'images/04.png', 'images/05.png', 'images/06.png', 
    'images/07.png', 'images/08.png'
];

let currentIndex = 0;
let intervalId;
let isPlaying = true; // 初始狀態設置為播放

function showImage(src) {
    document.getElementById('main-img').src = src;
}

function autoSwitchImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(images[currentIndex]);
}

function startSlideshow() {
    intervalId = setInterval(autoSwitchImage, 5000); // 每隔5秒切換一次圖片
}

function togglePlayPause() {
    const button = document.getElementById('playPauseBtn');
    if (isPlaying) {
        button.textContent = 'PLAY IT FOR ME';
        button.style.backgroundColor = 'deeppink';
        clearInterval(intervalId); // 停止輪播
    } else {
        button.textContent = 'STOP CHANGING';
        button.style.backgroundColor = 'gray';
        startSlideshow(); // 開始輪播
    }
    isPlaying = !isPlaying;
}