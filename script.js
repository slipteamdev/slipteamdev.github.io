const header = document.querySelector('header');

// al hacer scroll en la ventana
window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        header.style.backgroundColor = 'rgba(244, 239, 201, 0.9)'; //se pone transparente
    } else {
        header.style.backgroundColor = '#f4efc9';
    }
});
