document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.GSC-Slide');

    // Función para verificar si una imagen ya está completamente cargada
    function isImageLoaded(img) {
        if (!img.complete || (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0)) {
            return false;
        }
        return true;
    }

    slides.forEach(slide => {
        const img = slide.querySelector('img');
        const spinner = slide.querySelector('.Spinner-Image');

        // Verificar si la imagen ya está cargada
        if (isImageLoaded(img)) {
            slide.classList.remove('loading');
            spinner.style.display = 'none';
            //console.log('Image already loaded');
        } else {
            // Agregar listener de evento load si la imagen no está completamente cargada
            img.addEventListener('load', () => {
                slide.classList.remove('loading');
                spinner.style.display = 'none';
                console.log('Load');
            });

            // Agregar listener de evento error
            img.addEventListener('error', () => {
                // Handle image loading error if necessary
                console.error('Error loading image');
            });
        }
    });
});
