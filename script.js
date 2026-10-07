// Seleccionamos el header
const header = document.querySelector('header');

// Escuchamos el evento de "hacer scroll" en la ventana
window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        // Hacemos el header un poco transparente y cambiamos su color base (adaptado al nuevo diseño)
        header.style.backgroundColor = 'rgba(226, 185, 163, 0.9)'; 
    } else {
        // Si volvemos arriba del todo, color sólido original
        header.style.backgroundColor = '#e2b9a3';
    }
});
