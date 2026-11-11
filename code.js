// ==========================================================================
// 1. HEADER DINÁMICO, BARRA DE PROGRESO Y MENÚ HAMBURGUESA
// ==========================================================================
const header = document.querySelector('header');
const scrollProgress = document.getElementById('scroll-progress');
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.btn-navigation');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.style.backgroundColor = 'rgba(244, 239, 201, 0.94)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#f4efc9';
        header.style.backdropFilter = 'none';
    }

    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    const porcentaje = alturaTotal > 0 ? (window.scrollY / alturaTotal) * 100 : 0;
    scrollProgress.style.width = `${porcentaje}%`;

    let seccionActual = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 160;
        if (window.scrollY >= top) {
            seccionActual = sec.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('activo', link.getAttribute('href') === `#${seccionActual}`);
    });
});

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==========================================================================
// 2. SELECTOR DE LOS 4 PERSONAJES CON SUS PNG DE assets/images/characters/
// ==========================================================================
const datosPersonajes = {
    bubble: {
        img: 'assets/images/characters/bubble.png',
        bioma: 'Bioma: Playa · Anfibio',
        nombre: 'BUBBLE',
        personalidad: 'Personalidad: Inquieto, escurridizo y desafiante.',
        desc: 'Especialista en movilidad acuática. Se desplaza a gran velocidad por la arena pintando terreno a su paso y guiando la trayectoria de regreso de sus proyectiles.',
        vel: 95, area: 60, ctrl: 75,
        basicaT: 'Salpicadura Lineal',
        basicaD: 'Ataque rápido, alargado y fino hacia el frente que pinta huecos estratégicos en el terreno rival o recoge objetos cercanos.',
        especialT: 'Búmeran Acuático',
        especialD: 'Lanza un proyectil en forma de bumerán que pinta el suelo y daña al enemigo. Segundos después, regresa siguiendo a Bubble.',
        ultiT: 'Vórtice de Remolinos',
        ultiD: 'Invoca un círculo de remolinos a su alrededor que se mueven con él, pintando todo a su paso y explotando burbujas.'
    },
    robin: {
        img: 'assets/images/characters/robin.png',
        bioma: 'Bioma: Bosque · Mamífero',
        nombre: 'ROBIN',
        personalidad: 'Personalidad: Astuto, atrevido y energético.',
        desc: 'Maestro del combate cuerpo a cuerpo. Sus golpes de corto alcance cubren un ángulo semicircular para reclamar zonas del mapa.',
        vel: 65, area: 95, ctrl: 70,
        basicaT: 'Zarpazo Semicircular',
        basicaD: 'Golpe cuerpo a cuerpo de velocidad pausada pero gran radio frontal, ideal para pintar extensas áreas de terreno.',
        especialT: 'Dash N\' Splash',
        especialD: 'Impulso veloz hacia delante que pinta por donde pasa y culmina con un estallido de pintura y daño en área.',
        ultiT: 'Instinto Salvaje',
        ultiD: 'Transformación temporal que potencia drásticamente la velocidad y el alcance sus habilidades.'
    },
    tuqui: {
        img: 'assets/images/characters/tuqui.png',
        bioma: 'Bioma: Jungla · Ave',
        nombre: 'TUQUI',
        personalidad: 'Personalidad: Ingeniosa, coqueta y perfeccionista.',
        desc: 'Estratega enfocada en el dominio de objetos. Controla los recursos que sueltan los animalitos repartidores incluso desde el campo enemigo.',
        vel: 85, area: 65, ctrl: 95,
        basicaT: 'Picotazo Recto',
        basicaD: 'Golpe veloz y preciso apuntando en línea recta hacia el frente para pintar o activar recursos.',
        especialT: 'Remolino Atractor',
        especialD: 'Crea un torbellino que atrae hacia Tuqui todos los objetos cercanos del mapa, ¡incluidos los que estén en terreno rival!',
        ultiT: 'Lluvia Tropical de Botín',
        ultiD: 'Genera instantáneamente múltiples objetos aleatorios alrededor de Tuqui para desatar el caos contra el oponente.'
    },
    fluflu: {
        img: 'assets/images/characters/fluflu.png',
        bioma: 'Bioma: Cueva · Insecto (Polilla Lunar)',
        nombre: 'FLUFLU',
        personalidad: 'Personalidad: Bromista, amistosa y muy competitiva.',
        desc: 'Saboteadora nata capaz de volar para desplazarse e inutilizar los planes del rival alterando sus controles y movilidad.',
        vel: 60, area: 90, ctrl: 100,
        basicaT: 'Aterrizaje Lunar',
        basicaD: 'Cae de golpe contra el suelo para expandir una gran onda circular de pintura a su alrededor.',
        especialT: 'Aura Paralizante',
        especialD: 'Despliega un círculo mágico que se mueve con ella; si el rival entra en su radio, queda inmovilizado durante varios segundos.',
        ultiT: 'Polvo de Confusión',
        ultiD: 'Invierte los controles del rival y reduce tanto su velocidad como la recarga de sus habilidades.'
    }
};
//la magia para cambiar lo de la ficha del personaje
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const c = datosPersonajes[btn.dataset.char];
        const charImg = document.getElementById('char-img');
        charImg.src = c.img;
        charImg.alt = `Imagen de ${c.nombre}`;
        document.getElementById('char-bioma').textContent = c.bioma;
        document.getElementById('char-nombre').textContent = c.nombre;
        document.getElementById('char-personalidad').textContent = c.personalidad;
        document.getElementById('char-desc').textContent = c.desc;
        document.getElementById('stat-vel').style.width = `${c.vel}%`;
        document.getElementById('stat-area').style.width = `${c.area}%`;
        document.getElementById('stat-ctrl').style.width = `${c.ctrl}%`;
        document.getElementById('char-basica-titulo').textContent = c.basicaT;
        document.getElementById('char-basica-desc').textContent = c.basicaD;
        document.getElementById('char-especial-titulo').textContent = c.especialT;
        document.getElementById('char-especial-desc').textContent = c.especialD;
        document.getElementById('char-ulti-titulo').textContent = c.ultiT;
        document.getElementById('char-ulti-desc').textContent = c.ultiD;
    });
});

// ==========================================================================
// 3. FILTRO DINÁMICO DE OBJETOS DEL ARSENAL
// ==========================================================================
const botonesFiltro = document.querySelectorAll('.filtro-btn');
const tarjetasObjeto = document.querySelectorAll('.item-card');

botonesFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
        botonesFiltro.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.categoria;
        tarjetasObjeto.forEach(card => {
            card.style.display = (cat === 'todos' || card.dataset.categoria === cat) ? 'block' : 'none';
        });
    });
});

// ==========================================================================
// 4. ESQUEMAS DE CONTROL (WASD / ARROWS / GAMEPAD)
//segun lo que eliga, se pone unos datos u otros (por defecto están el wasd)
// ==========================================================================
const esquemasControl = {
    wasd:    { mov: 'W A S D', bas: 'Tecla F', esp: 'Tecla G', ult: 'Tecla H', pau: 'Espacio' },
    arrows:  { mov: 'Flechas ↑↓←→', bas: 'Tecla - (Guion)', esp: 'Tecla . (Punto)', ult: 'Tecla , (Coma)', pau: 'Espacio' },
    gamepad: { mov: 'Joystick Izq.', bas: 'Botón Izquierdo', esp: 'Botón Inferior', ult: 'Botón Superior', pau: 'Botón Start' }
};

document.querySelectorAll('.esquema-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.esquema-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const e = esquemasControl[btn.dataset.esquema];
        document.getElementById('ctrl-mov').textContent = e.mov;
        document.getElementById('ctrl-bas').textContent = e.bas;
        document.getElementById('ctrl-esp').textContent = e.esp;
        document.getElementById('ctrl-ult').textContent = e.ult;
        document.getElementById('ctrl-pau').textContent = e.pau;
    });
});

// ==========================================================================
// 5. LIGHTBOX POPUP DE GALERÍA
// ==========================================================================
const fondoPopup = document.getElementById('fondo-popup');
const imagenPopup = document.getElementById('imagen-popup');
const textoPopup = document.getElementById('texto-popup');
const cerrarPopup = document.getElementById('cerrar-popup');

document.querySelectorAll('.abrir-popup').forEach(img => {
    img.addEventListener('click', () => {
        imagenPopup.src = img.dataset.foto || img.src;
        textoPopup.textContent = img.dataset.texto || img.alt;
        fondoPopup.classList.remove('oculto');
    });
});

cerrarPopup.addEventListener('click', () => fondoPopup.classList.add('oculto'));
fondoPopup.addEventListener('click', (e) => {
    if (e.target === fondoPopup) fondoPopup.classList.add('oculto');
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fondoPopup.classList.add('oculto');
});

// ==========================================================================
// 6. SCROLL REVEAL + TILT 3D + COPIAR EMAIL
// ==========================================================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.revelar').forEach(el => observer.observe(el));

document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(900px) rotateX(${(-y / 64).toFixed(2)}deg) rotateY(${(x / 32).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
});

const btnCopiar = document.getElementById('btn-copiar-email');
btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText('slipteamdev@gmail.com');
    btnCopiar.textContent = '✅ ¡Copiado!';
    setTimeout(() => { btnCopiar.textContent = '📋 Copiar correo'; }, 2000);
});

// ==========================================================================
// 7. FORMULARIO INTERACTIVO DE PLAYTESTING Y FEEDBACK (CON LOCALSTORAGE)
// ==========================================================================
const inputHype = document.getElementById('nota-hype');
const outputHype = document.getElementById('valor-hype');
const formContacto = document.getElementById('form-contacto');
const respuestaForm = document.getElementById('respuesta-form');

if (inputHype && outputHype) {
    inputHype.addEventListener('input', () => {
        const v = Number(inputHype.value);
        let emoji = '🔥 ¡Puro Caos!';
        if (v <= 4) emoji = '🌱 Puede mejorar';
        else if (v <= 7) emoji = '🎮 ¡Muy entretenido!';
        else if (v <= 9) emoji = '⚡ ¡Súper frenético!';
        outputHype.textContent = `${v} / 10 ${emoji}`;
    });
}

if (formContacto) {
    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre-usuario').value.trim();
        const email = document.getElementById('email-usuario').value.trim();
        const motivo = document.getElementById('motivo-contacto').value;
        const campeon = document.getElementById('campeon-fav').value || 'Sin especificar';
        const hype = inputHype ? inputHype.value : '10';
        const mensaje = document.getElementById('mensaje-usuario').value.trim();

        // Guardamos en localStorage para demostrar uso de API Web Storage de HTML5
        const registro = { nombre, email, motivo, campeon, hype, mensaje, fecha: new Date().toLocaleDateString() };
        localStorage.setItem('slipteam_ultimo_feedback', JSON.stringify(registro));

        // Mostramos confirmación interactiva sin recargar la página
        respuestaForm.classList.remove('oculto');
        respuestaForm.innerHTML = `
            <strong>✅ ¡Gracias por tu mensaje, ${nombre}!</strong><br>
            Hemos registrado tu <em>${motivo}</em> (Campeón: <strong>${campeon}</strong> · Valoración: <strong>${hype}/10</strong>).<br>
            <small>También puedes <a href="mailto:slipteamdev@gmail.com?subject=${encodeURIComponent(motivo + ' - ' + nombre)}&body=${encodeURIComponent('Campeón favorito: ' + campeon + '\nValoración: ' + hype + '/10\n\nMensaje:\n' + mensaje)}" style="color: #E9C46A; font-weight: bold;">hacer clic aquí para enviarlo directamente desde tu gestor de correo</a>.</small>
        `;

        formContacto.reset();
        outputHype.textContent = '10 / 10 🔥 ¡Puro Caos!';
    });
}