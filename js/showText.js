// Función para mostrar el texto completo (Read More)
function readMore(btn) {
    var textContainer = btn.closest('.text-container');
    var shortText = textContainer.querySelector('.short-text');
    var fullText = textContainer.querySelector('.full-text');
    var slideText = textContainer.closest('.SCC__Slide__Text');

    if (fullText) {
        var header = slideText.querySelectorAll('h2, h3');
        header.forEach(function(element) {
            element.style.transition = 'opacity 0.5s ease';
            element.style.opacity = '0';
        });

        if (shortText) {
            shortText.style.display = 'none';
        }

        if (fullText) {
            fullText.style.display = 'block';
        }

        slideText.style.transition = 'top 0.5s ease';
        slideText.style.top = '-20%';

        textContainer.style.height = fullText.scrollHeight + 'px';

        btn.classList.add('active');
    } else {
        console.error('Elemento no encontrado');
    }
}

// Función para ocultar el texto completo (Read Less)
function readLess(btn) {
    var textContainer = btn.closest('.text-container');
    var shortText = textContainer.querySelector('.short-text');
    var fullText = textContainer.querySelector('.full-text');
    var slideText = textContainer.closest('.SCC__Slide__Text');

    if (fullText) {
        var header = slideText.querySelectorAll('h2, h3');
        header.forEach(function(element) {
            element.style.transition = 'opacity 0.5s ease';
            element.style.opacity = '1';
        });

        if (shortText) {
            shortText.style.display = 'block';
        }

        if (fullText) {
            fullText.style.display = 'none';
        }

        slideText.style.transition = 'top 0.5s ease';
        slideText.style.top = '0';

        textContainer.style.height = 'auto';

        btn.classList.remove('active');
    } else {
        console.error('Elemento no encontrado');
    }
}

// Asigna el evento click para el botón "Read More"
document.querySelectorAll('.SCC__Slide').forEach(function(slide) {
    var btn = slide.querySelector('.read-more-btn');
    if (!btn) return;

    btn.addEventListener('click', function() {
        readMore(this);
    });
});

// Asigna el evento click para el botón "Read Less"
document.querySelectorAll('.SCC__Slide').forEach(function(slide) {
    var btn = slide.querySelector('.read-less-btn');
    if (!btn) return;

    btn.addEventListener('click', function() {
        readLess(this);
    });
});
