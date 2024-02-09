import ValorEntrada from "./ValorEntrada.js";
import ValorTamanho from "./ValorTamanho.js";
import ValorUnidades from "./ValorUnidades.js";
import Seletor from "./Seletor.js";

const corProdutoShort = new Seletor ("#corShort",".produtoShort .cores","ativadoCorShort");
const tamanhoProdutoShort = new Seletor ("#tamanhoShort", ".produtoShort .tamanhos", "ativadoCorShort");
const corProdutoCamiseta = new Seletor ("#corCamiseta",".produtoCamiseta .cores","ativadoCorShort");
const tamanhoProdutoCamiseta = new Seletor ("#tamanhoCamiseta", ".produtoCamiseta .tamanhos", "ativadoCorShort");
const tamanhoProdutoCamisa = new Seletor ("#tamanhoCamisa", ".produtoCamisa .tamanhos", "ativadoCorShort");

const contadorShort = new ValorUnidades(".Short .btnMais", ".Short .btnMenos", "#quantidadeShort");
const contadorCamisa = new ValorUnidades(".Camisa .btnMais", ".Camisa .btnMenos", "#quantidadeCamisa");
const contadorCamiseta = new ValorUnidades(".Camiseta .btnMais", ".Camiseta .btnMenos", "#quantidadeCamiseta");

const circuloCamiseta = new ValorEntrada("#corCamiseta", ".corBackCamiseta", ".camisetaPreta", ".camisetaAzulMarinho", ".camisetaBranca");
const circuloShort = new ValorEntrada("#corShort", ".corBackShort", ".shortPreto", ".shortAzulMarinho", ".shortBranco");

const tamanhoShort = new ValorTamanho("#tamanhoShort", ".tamanhoShortPequeno", ".tamanhoShortMedio", ".tamanhoShortGrande");
const tamanhoCamiseta = new ValorTamanho("#tamanhoCamiseta", ".tamanhoCamisetaPequena", ".tamanhoCamisetaMedia", ".tamanhoCamisetaGrande");
const tamanhoCamisa = new ValorTamanho("#tamanhoCamisa", ".tamanhoCamisaPequena", ".tamanhoCamisaMedia", ".tamanhoCamisaGrande");