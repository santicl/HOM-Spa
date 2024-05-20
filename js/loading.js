// Esperamos a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    const img1 = document.querySelector('.Image-Header-Header');
    const loading = document.querySelector('.loader');

    // Esta función oculta el loader y realiza otras acciones cuando la imagen está completamente cargada
    function checkLoaded() {
        loading.style.opacity = '0'; // Oculta el loading
        setTimeout(() => {
            loading.style.display = 'none'; // Oculta completamente el loading
            document.body.classList.add('curtain'); // Agrega la clase curtain al body
        }, 500); // Retardo antes de ocultar el loading
    }

    // Verificar si la imagen ya está cargada
    if (img1.complete) {
        checkLoaded();
    } else {
        // Si la imagen aún no está cargada, esperamos a que se cargue completamente antes de ocultar el loader
        img1.addEventListener('load', checkLoaded);
    }
});

// También podemos agregar un controlador de eventos 'load' global para manejar el caso en que la imagen ya esté completamente cargada cuando se carga el script
window.addEventListener('load', function() {
    const img1 = document.querySelector('.imgHeader');
    const loading = document.querySelector('.loader');

    // Si la imagen está completamente cargada al cargar el script, ocultamos el loader directamente
    if (img1.complete) {
        loading.style.opacity = '0'; // Oculta el loading
        setTimeout(() => {
            loading.style.display = 'none'; // Oculta completamente el loading
            document.body.classList.add('curtain'); // Agrega la clase curtain al body
        }, 500); // Retardo antes de ocultar el loading
    }
});
