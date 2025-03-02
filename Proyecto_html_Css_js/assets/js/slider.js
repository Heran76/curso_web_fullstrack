window.addEventListener("load", () => {
    let btnPrev = document.querySelector(".slider_btn-prev");
    let btnNext = document.querySelector(".slider_btn-next");
    let slides = document.querySelectorAll(".slides__item");

    let counter = 0;
    let allslides = slides.length;

    // Función para limpiar la clase activa de todos los slides
    let clearActives = () => {
        slides.forEach(slide => {
            slide.classList.remove("slides__item--active");
        });
    };

    // Función para activar el slide actual
    let activeSlider = () => {
        clearActives();
        slides[counter].classList.add("slides__item--active");
    };

    // Botón siguiente
    btnNext.addEventListener("click", () => {
        counter++;
        if (counter >= allslides) {
            counter = 0;
        }
        activeSlider();
    });

    // Botón anterior
    btnPrev.addEventListener("click", () => {
        counter--;
        if (counter < 0) {
            counter = allslides - 1; // última diapositiva
        }
        activeSlider();
    });

    // Activar el primer slide al cargar la página
    activeSlider();
});