class Seletor {

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

const corProdutoShort = new Seletor ("#corShort",".produtoShort .cores","ativadoCorShort");
const tamanhoProdutoShort = new Seletor ("#tamanhoShort", ".produtoShort .tamanhos", "ativadoCorShort");
const corProdutoCamiseta = new Seletor ("#corCamiseta",".produtoCamiseta .cores","ativadoCorShort");
const tamanhoProdutoCamiseta = new Seletor ("#tamanhoCamiseta", ".produtoCamiseta .tamanhos", "ativadoCorShort");
const tamanhoProdutoCamisa = new Seletor ("#tamanhoCamisa", ".produtoCamisa .tamanhos", "ativadoCorShort");



class ValorUnidades {

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

const contadorShort = new ValorUnidades(".Short .btnMais", ".Short .btnMenos", "#quantidadeShort");
const contadorCamisa = new ValorUnidades(".Camisa .btnMais", ".Camisa .btnMenos", "#quantidadeCamisa");
const contadorCamiseta = new ValorUnidades(".Camiseta .btnMais", ".Camiseta .btnMenos", "#quantidadeCamiseta");


class ValorEntrada {

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

const circuloCamiseta = new ValorEntrada("#corCamiseta", ".corBackCamiseta", ".camisetaPreta", ".camisetaAzulMarinho", ".camisetaBranca");
const circuloShort = new ValorEntrada("#corShort", ".corBackShort", ".shortPreto", ".shortAzulMarinho", ".shortBranco");

class ValorTamanho {

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

const tamanhoShort = new ValorTamanho("#tamanhoShort", ".tamanhoShortPequeno", ".tamanhoShortMedio", ".tamanhoShortGrande");
const tamanhoCamiseta = new ValorTamanho("#tamanhoCamiseta", ".tamanhoCamisetaPequena", ".tamanhoCamisetaMedia", ".tamanhoCamisetaGrande");
const tamanhoCamisa = new ValorTamanho("#tamanhoCamisa", ".tamanhoCamisaPequena", ".tamanhoCamisaMedia", ".tamanhoCamisaGrande");