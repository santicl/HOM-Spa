// Obtiene el contenedor de la galería
var galleryContainer = document.getElementById('galleryContainer');

// Variable para el ancho de una imagen
var imageWidth = galleryContainer.querySelector('.GSC-Slide').offsetWidth;

// Variable para el ancho visible del contenedor
var containerWidth = galleryContainer.offsetWidth;

// Variables para el desplazamiento
var startX = 0;
var isDragging = false;

// Agrega un listener para el evento 'touchstart' (para dispositivos móviles)
galleryContainer.addEventListener('touchstart', function(event) {
  startX = event.touches[0].clientX;
  isDragging = true;
});

// Agrega un listener para el evento 'touchmove' (para dispositivos móviles)
galleryContainer.addEventListener('touchmove', function(event) {
  if (!isDragging) return;
  var diffX = startX - event.touches[0].clientX;
  galleryContainer.scrollLeft += diffX;
  startX = event.touches[0].clientX;
});

// Agrega un listener para el evento 'touchend' (para dispositivos móviles)
galleryContainer.addEventListener('touchend', function(event) {
  isDragging = false;
});
