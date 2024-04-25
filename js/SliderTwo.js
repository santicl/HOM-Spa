document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.Services-Carousel__Container');
    const slides = document.querySelectorAll('.SCC__Slide');
    const prevBtn = document.querySelector('.Btn-Left-Left');
    const nextBtn = document.querySelector('.Btn-Right-Right');
    const dotsContainer = document.querySelector('.dots-container');
    let index = 0;
    let slidesToShowDesktop = 3;
    let slidesToShowMobile = 1;

    function slidesDesktop() {
        function showSlidesDesktop() {
            slides.forEach((slide, i) => {
                if (i >= index && i < index + slidesToShowDesktop) {
                    slide.style.opacity = 1;
                } else {
                    slide.style.opacity = 0;
                }
            });

            const slideWidth = `${100 / slidesToShowDesktop}%`;
            slides.forEach((slide) => {
                slide.style.width = slideWidth;
            });

            container.style.transform = `translateX(-${index * (100 / slidesToShowDesktop)}%)`;

            updateDotsDesktop();
        }

        function nextSlideDesktop() {
            index += 1;
            if (index > slides.length - slidesToShowDesktop) {
                index = 0;
            }
            showSlidesDesktop();
        }

        function prevSlideDesktop() {
            index -= 1;
            if (index < 0) {
                index = slides.length - slidesToShowDesktop;
            }
            showSlidesDesktop();
        }

        function updateDotsDesktop() {
            dotsContainer.innerHTML = '';
        
            const totalDots = Math.ceil(slides.length / slidesToShowDesktop);
        
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    index = i * slidesToShowDesktop;
                    showSlidesDesktop();
                });
                dotsContainer.appendChild(dot);
            }
        
            const dotIndex = Math.floor(index / slidesToShowDesktop);
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === dotIndex);
            });
        }
        

        // Event listeners para el carousel de escritorio
        nextBtn.addEventListener('click', nextSlideDesktop);
        prevBtn.addEventListener('click', prevSlideDesktop);

        for (let i = 0; i < slidesToShowDesktop; i++) {
            slides[i].style.opacity = 1;
        }
        showSlidesDesktop();

        function updateSlidesToShowDesktop() {
            if (window.innerWidth < 768) {
                return;
            }
            slidesToShowDesktop = 3;
            showSlidesDesktop();
            index = 0;
        }

        window.addEventListener('resize', updateSlidesToShowDesktop);
        window.addEventListener('load', updateSlidesToShowDesktop);
    }

    function slidesMobile() {
        function showSlidesMobile() {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.opacity = 1;
                    slide.style.width = '90%'; // Ajustar el ancho de la slide visible
                } else {
                    slide.style.opacity = 0;
                    slide.style.width = '0'; // Ajustar el ancho de las slides ocultas
                }
            });

            container.style.transform = `translateX(-${index * (100 / slidesToShowMobile)}%)`;

            updateDotsMobile();
        }

        function nextSlideMobile() {
            index += 1;
            if (index >= slides.length) {
                index = 0;
            }
            showSlidesMobile();
        }

        function prevSlideMobile() {
            index -= 1;
            if (index < 0) {
                index = slides.length - 1;
            }
            showSlidesMobile();
        }

        function updateDotsMobile() {
            dotsContainer.innerHTML = '';

            const totalDots = Math.ceil(slides.length / slidesToShowMobile);

            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    index = i * slidesToShowMobile;
                    showSlidesMobile();
                });
                dotsContainer.appendChild(dot);
            }

            const dotIndex = Math.floor(index / slidesToShowMobile);
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === dotIndex);
            });
        }

        // Event listeners para el carousel de dispositivos móviles
        nextBtn.addEventListener('click', nextSlideMobile);
        prevBtn.addEventListener('click', prevSlideMobile);

        for (let i = 0; i < slidesToShowMobile; i++) {
            slides[i].style.opacity = 1;
        }
        showSlidesMobile();

        function updateSlidesToShowMobile() {
            if (window.innerWidth >= 768) {
                return;
            }
            slidesToShowMobile = 1;
            showSlidesMobile();
            index = 0;
        }

        window.addEventListener('resize', updateSlidesToShowMobile);
        window.addEventListener('load', updateSlidesToShowMobile);
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
