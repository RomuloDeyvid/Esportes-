const hamburguerClick = document.querySelector(".hamburguerClick");
const teste = document.querySelector(".teste");
const links = document.querySelector(".links");

const barraHeader = document.querySelector("#navegaHeader")


hamburguerClick.addEventListener('click', (e) => {
    links.classList.toggle("desativar");
    links.classList.add("fixaBarra");
    barraHeader.classList.add("fixaBarra");

hamburguerClick.addEventListener('click', () => {
    links.classList.toggle("desativar");
    links.classList.toggle("fixaBarra");
    barraHeader.classList.toggle("fixaBarra");
    links.classList.toggle("fixaBarraMobi");  
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

        links.classList.remove("fixaBarraMobi");
        }
    }
})

window.onresize = start;

function start(){
  if(document.documentElement.clientWidth >= 950){
    links.classList.add("desativar")
    links.classList.remove("fixaBarra");
    barraHeader.classList.remove("fixaBarra");
    links.classList.remove("fixaBarraMobi");
  }
}
