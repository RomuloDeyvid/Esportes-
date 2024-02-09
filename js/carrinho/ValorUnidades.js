export default class ValorUnidades {

    constructor(btnMais, btnMenos, valor){
        this.Mais = document.querySelector(btnMais);
        this.Menos = document.querySelector(btnMenos);
        this.valorInserido = document.querySelector(valor);
        this.clickBotao();
    }

    clickBotao(){

        this.Mais.addEventListener('click', ()=>{
            this.valorInserido.value = Number(this.valorInserido.value) + 1 ; 
        })

        this.Menos.addEventListener('click', ()=>{
            if (this.valorInserido.value > 1) {
            this.valorInserido.value = Number(this.valorInserido.value) - 1 ; 
            }
            else this.valorInserido.value =""
        })
    }

}