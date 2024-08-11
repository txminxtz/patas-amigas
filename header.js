let lastScrollTop = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll para baixo
        header.classList.add('hidden');
    } else {
        // Scroll para cima
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para Mobile
});
