document.querySelectorAll('.btn-favoritar').forEach(button => {
    button.addEventListener('click', function() {
        const heartIcon = this.querySelector('i.bx-heart');
        heartIcon.classList.toggle('favoritado');
    });
});