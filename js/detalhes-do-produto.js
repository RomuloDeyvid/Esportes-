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

const radios = document.querySelectorAll('.bloco-de-cor');

const cores = {
    'checkbox-bloco-de-cor': 'Preta',
    'checkbox-bloco-de-cor-2': 'Vermelho',
    'checkbox-bloco-de-cor-3': 'Branco'
};

const textoCorSelecionada = document.querySelector('.cor-selecionada');

radios.forEach(radio => {
    radio.addEventListener('click', function() {
        const corSelecionada = this.getAttribute('id');

        const texto = cores[corSelecionada];
        textoCorSelecionada.innerHTML = `<strong>Cor: </strong>${texto}`;
    });
});

window.addEventListener("load", initSlider);