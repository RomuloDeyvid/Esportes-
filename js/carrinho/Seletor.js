export default class Seletor {

    constructor(selecionarSeletor,seletor,classeUsada) {
        this.seletorSelecionado = document.querySelector(selecionarSeletor);
        this.seletorItem = document.querySelector(seletor);
        this.classUsada = classeUsada;
        this.clickTela();
    }

    clickTela(){
        this.seletorSelecionado.addEventListener('click',()=>{
            this.seletorItem.classList.add(this.classUsada)
        })
        document.addEventListener('click', (e) =>{
            if(!this.seletorSelecionado.contains(e.target)){
                this.seletorItem.classList.remove(this.classUsada)
            }
        })
    }

}