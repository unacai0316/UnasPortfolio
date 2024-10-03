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