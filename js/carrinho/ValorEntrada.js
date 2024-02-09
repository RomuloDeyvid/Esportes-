export default class ValorEntrada {

    constructor (entrada, circulo, corPreta, corAzul, corBranca){
        this.circuloShort = document.querySelector(circulo);
        this.pintaPreto = document.querySelector(corPreta);
        this.pintaAzul = document.querySelector(corAzul);
        this.PintaBranco = document.querySelector(corBranca);
        this.entradaTexto = document.querySelector(entrada);
        this.clickSeleciona();
    }

    clickSeleciona(){

        this.pintaPreto.addEventListener('click', ()=> {
            this.circuloShort.style.backgroundColor = '#000';
            this.entradaTexto.value = this.pintaPreto.textContent
        });

        this.pintaAzul.addEventListener('click', ()=> {
            this.circuloShort.style.backgroundColor = 'blue';
            this.entradaTexto.value = this.pintaAzul.textContent
        });

        this.PintaBranco.addEventListener('click', ()=> {
            this.circuloShort.style.backgroundColor = '#fff';
            this.entradaTexto.value = this.PintaBranco.textContent
        });
    }

}