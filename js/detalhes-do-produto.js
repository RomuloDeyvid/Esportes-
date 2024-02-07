const initSlider = () => {
    const imageList = document.querySelector(".lista-de-itens");
    const slideButtons = document.querySelectorAll(".botao-de-carrossel");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click" , () => {
            const direction = button.id === "slide-anterior" ? -0.8 : 0.8;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}


window.addEventListener("load", initSlider);