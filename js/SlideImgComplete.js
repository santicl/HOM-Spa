document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.PCC_Slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            const translateX = -index * 100;
            slide.style.transform = `translateX(${translateX}%)`;
        });
        
        // Habilitar/deshabilitar botones según la posición del slider
        if (currentIndex === 0) {
            btnLeft.disabled = true;
            //btnLeft.style.visibility = 'hidden';
        } else {
            btnLeft.disabled = false;
            //btnLeft.style.visibility = 'visible';
        }

        if (currentIndex === totalSlides - 1) {
            btnRight.disabled = true;
            //btnRight.style.visibility = 'hidden';
        } else {
            btnRight.disabled = false;
            //btnRight.style.visibility = 'visible';
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    const btnLeft = document.querySelector('.Btn-Left');
    const btnRight = document.querySelector('.Btn-Right');

    btnLeft.addEventListener('click', prevSlide);
    btnRight.addEventListener('click', nextSlide);

    // Show the initial slide
    showSlide(currentIndex);
});
