const hamburguerClick = document.querySelector(".hamburguerClick");
const teste = document.querySelector(".teste");
const links = document.querySelector(".links");

const barraHeader = document.querySelector("#navegaHeader")

hamburguerClick.addEventListener('click', (e) => {
    links.classList.toggle("desativar");
    links.classList.add("fixaBarra");
    barraHeader.classList.add("fixaBarra");
    
})

document.addEventListener('click', (e) =>{
    if(!(e.target == teste)){
        if(!links.contains(e.target)){
        links.classList.add("desativar")
        links.classList.remove("fixaBarra");
        barraHeader.classList.remove("fixaBarra");
        }
    }
})