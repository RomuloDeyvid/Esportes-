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