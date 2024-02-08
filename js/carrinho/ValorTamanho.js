export default class ValorTamanho {

    constructor (entrada, tamanhoP, tamanhoM, tamanhoG){
        this.entradaTexto = document.querySelector(entrada);
        this.pequeno = document.querySelector(tamanhoP);
        this.medio = document.querySelector(tamanhoM);
        this.grande = document.querySelector(tamanhoG);
        this.clickSeleciona();
    }

    clickSeleciona(){

        this.pequeno.addEventListener('click', ()=> {
            this.entradaTexto.value = "P"
        });

        this.medio.addEventListener('click', ()=> {
            this.entradaTexto.value = "M"
        });

        this.grande.addEventListener('click', ()=> {
            this.entradaTexto.value = "G"
        });
    }

}