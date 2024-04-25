// Opciones para el Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Umbral de intersección del 30%
};

// Función para manejar la intersección
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
            if (entry.target.classList.contains('scroll-effect')) {

                if (entry.target.classList.contains('complete')) {
                    const textContent = entry.target.querySelectorAll('.Content-Text-Absolute');
                    textContent.forEach(element => {
                        element.classList.add('slide-up');
                    })
                }
                // Aplica el efecto de desplazamiento a las partes específicas del texto dentro de las diapositivas
                const textElements = entry.target.querySelectorAll('.SCC__Slide__Text');
                textElements.forEach(textElement => {
                    textElement.classList.add('slide-up');
                });

                observer.unobserve(entry.target);
            }
            observer.unobserve(entry.target); // Deja de observar una vez que se muestra la sección
        }
    });
}

// Crear el Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Obtener todas las secciones que deseas observar
const sections = document.querySelectorAll('.section');

// Observar cada sección
sections.forEach(section => {
    observer.observe(section);
});
