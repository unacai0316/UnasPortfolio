document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    // 點擊導航項目後關閉菜單
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 767) {
                nav.classList.remove('show');
            }
        });
    });

    // 監聽視窗大小變化，在大於 767px 時移除 'show' 類
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            nav.classList.remove('show');
        }
    });
});