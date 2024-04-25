// Declaración de variables globales
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modal-image');
var slides = document.querySelectorAll('.GSC-Slide');
var slideIndex = 0;
var countImage = document.querySelector('.Count');

// Función para abrir el modal con una imagen específica
function openModal(index) {
    slideIndex = index;
    modal.style.display = "flex";
    modalImg.src = slides[slideIndex].querySelector('img').src;
    countImage.textContent = `${slideIndex + 1} / ${slides.length}`;
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Función para mostrar la imagen anterior en el modal
function prevImage() {
    if (slideIndex > 0) {
        slideIndex--;
        modalImg.src = slides[slideIndex].querySelector('img').src;
    }
    countImage.textContent = `${slideIndex + 1} / ${slides.length}`;
}

// Función para mostrar la imagen siguiente en el modal
function nextImage() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
        modalImg.src = slides[slideIndex].querySelector('img').src;
    }
    countImage.textContent = `${slideIndex + 1} / ${slides.length}`;
}

// Asignar eventos click a las imágenes de la galería
slides.forEach(function(slide, index) {
    slide.addEventListener('click', function() {
        openModal(index);
    });
});
