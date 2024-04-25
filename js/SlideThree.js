document.addEventListener('DOMContentLoaded', function () {
    function slidesDesktop() {
        const container = document.querySelector('.OT_Carousel__Container');
        const slides = document.querySelectorAll('.OT__Slide');
        const prevBtn = document.querySelector('.Btn-Left-L');
        const nextBtn = document.querySelector('.Btn-Right-R');
        let indexDesktop = 0;
    
        function showSlidesDesktop() {
            slides.forEach((slide, i) => {
                if (i >= indexDesktop && i < indexDesktop + 3) {
                    slide.style.opacity = 1;
                } else {
                    slide.style.opacity = 0;
                }
            });
            container.style.transform = `translateX(-${indexDesktop * 34}%)`;
        }
    
        function nextSlideDesktop() {
            indexDesktop += 3;
            if (indexDesktop >= slides.length) {
                indexDesktop = 0;
            }
            showSlidesDesktop();
        }
    
        function prevSlideDesktop() {
            indexDesktop -= 3;
            if (indexDesktop < 0) {
                indexDesktop = slides.length - 3; 
            }
            showSlidesDesktop();
        }
    
        nextBtn.addEventListener('click', nextSlideDesktop);
        prevBtn.addEventListener('click', prevSlideDesktop);
    
        for (let i = 0; i < 3; i++) {
            slides[i].style.opacity = 1;
        }
    
        showSlidesDesktop();
    }


    function slidesMobile() {
        const container = document.querySelector('.OT_Carousel__Container');
        const slides = document.querySelectorAll('.OT__Slide');
        const prevBtn = document.querySelector('.Btn-Left-L');
        const nextBtn = document.querySelector('.Btn-Right-R');
        let indexMobile = 0;
        let slidesToShowMobile = 1;
    
        function showSlidesMobile() {
            slides.forEach((slide, i) => {
                if (i >= indexMobile && i < indexMobile + slidesToShowMobile) {
                    slide.style.opacity = 1;
                } else {
                    slide.style.opacity = 0;
                }
            });
            container.style.transform = `translateX(-${indexMobile * (100 / slidesToShowMobile)}%)`;
        }
    
        function nextSlideMobile() {
            indexMobile += 1;
            if (indexMobile >= slides.length - slidesToShowMobile + 1) {
                indexMobile = 0;
            }
            showSlidesMobile();
        }
    
        function prevSlideMobile() {
            indexMobile -= 1;
            if (indexMobile < 0) {
                indexMobile = slides.length - slidesToShowMobile;
            }
            showSlidesMobile();
        }
    
        nextBtn.addEventListener('click', nextSlideMobile);
        prevBtn.addEventListener('click', prevSlideMobile);
    
        // Ocultar todas las diapositivas excepto la primera
        for (let i = slidesToShowMobile; i < slides.length; i++) {
            slides[i].style.opacity = 0;
        }
    
        showSlidesMobile();
    }
    
    


    function loadVersion() {
        if (window.innerWidth < 768) {
            slidesMobile();
        } else {
            slidesDesktop();
        }
    }

    window.addEventListener('resize', loadVersion);
    window.addEventListener('load', loadVersion);
});