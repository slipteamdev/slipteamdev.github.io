const header = document.querySelector('header');

// Al hacer scroll en la ventana
window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        header.style.backgroundColor = 'rgba(244, 239, 201, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#f4efc9';
        header.style.backdropFilter = 'none';
    }
});

// Menú Hamburguesa para Móviles
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar el menú de móviles al hacer click en un botón
document.querySelectorAll('.btn-navigation').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});