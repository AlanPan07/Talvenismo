/*Variáveis para saber o número das páginas*/
var UrlAtual = window.location.href;
var NomeArquivoExtendido = UrlAtual.split('/').pop();
var NomeArquivo = NomeArquivoExtendido.split('.').slice(0, -1).join('.');
var NumeroPagina = NomeArquivo.split('-').pop();
if(NumeroPagina == "LivroDigital"){
    NumeroPagina = 0;
}
var PaginaAnterior = +NumeroPagina - 1;
var ProximaPagina = +NumeroPagina + 1;
var OptionCerto = document.querySelector(`option[value=Pg${NumeroPagina}]`);

/*Para saber se o arquivo html é em inglês ou português*/
var Arquivo = UrlAtual.split('/');
var NomeArquivoEx = Arquivo.pop();
var LinguagemArquivo = Arquivo.pop();

/*Para mudar automaticamente o número da página par ao número certo*/
if(LinguagemArquivo == "Pt"){
    if(NumeroPagina == 0){
        document.querySelector('#NumeroPagina1').innerHTML = `Livro Digital-Talvenismo`;
        document.querySelector('#NumeroPagina2').innerHTML = `Página ${NumeroPagina} de 64`;
    }else if(NumeroPagina == 1){
        document.querySelector('#NumeroPagina1').innerHTML = `Página ${NumeroPagina}-Livro Digital-Talvenismo`;
        document.querySelector('#NumeroPagina2').innerHTML = `Página ${NumeroPagina} de 64`;
        document.querySelector('#direita').href = `LivroDigital-Pagina-${ProximaPagina}.html`;
    }else if(NumeroPagina == 64){
        document.querySelector('#NumeroPagina1').innerHTML = `Página ${NumeroPagina}-Livro Digital-Talvenismo`;
        document.querySelector('#NumeroPagina2').innerHTML = `Página ${NumeroPagina} de 64`;
        document.querySelector('#esquerda').href = `LivroDigital-Pagina-${PaginaAnterior}.html`;

    }else{
        document.querySelector('#NumeroPagina1').innerHTML = `Página ${NumeroPagina}-Livro Digital-Talvenismo`;
        document.querySelector('#NumeroPagina2').innerHTML = `Página ${NumeroPagina} de 64`;
        document.querySelector('#esquerda').href = `LivroDigital-Pagina-${PaginaAnterior}.html`;
        document.querySelector('#direita').href = `LivroDigital-Pagina-${ProximaPagina}.html`;
    }
}else if(LinguagemArquivo == "Ing"){
    if(NumeroPagina == 0){
        document.querySelector('#NumeroPagina1').innerHTML = `Digital Book-Maybenism`;
        document.querySelector('#NumeroPagina2').innerHTML = `Page ${NumeroPagina} de 64`;
    }else if(NumeroPagina == 1){
        document.querySelector('#NumeroPagina1').innerHTML = `Page ${NumeroPagina}-Digital Book-Maybenism`;
        document.querySelector('#NumeroPagina2').innerHTML = `Page ${NumeroPagina} de 64`;
        document.querySelector('#direita').href = `LivroDigital-Pagina-${ProximaPagina}.html`;
    }else if(NumeroPagina == 64){
        document.querySelector('#NumeroPagina1').innerHTML = `Page ${NumeroPagina}-Digital Book-Maybenism`;
        document.querySelector('#NumeroPagina2').innerHTML = `Page ${NumeroPagina} de 64`;
        document.querySelector('#esquerda').href = `LivroDigital-Pagina-${PaginaAnterior}.html`;
    }else{
        document.querySelector('#NumeroPagina1').innerHTML = `Page ${NumeroPagina}-Digital Book-Maybenism`;
        document.querySelector('#NumeroPagina2').innerHTML = `Page ${NumeroPagina} de 64`;
        document.querySelector('#esquerda').href = `LivroDigital-Pagina-${PaginaAnterior}.html`;
        document.querySelector('#direita').href = `LivroDigital-Pagina-${ProximaPagina}.html`;
    }
}

OptionCerto.setAttribute('selected', '');

/*Função para mudar a página conforme o selecionado*/
function selecionar(){
    var OptionSelecionado = select.options[select.selectedIndex];
    var ValorOption = OptionSelecionado.value;
    var NumeroSelecionado = ValorOption.split('Pg').pop();
    if(NumeroPagina == 0){
    window.location.href = `../../Livro/${LinguagemArquivo}/LivroDigital-Pagina-${NumeroSelecionado}.html`;
    }else{
        if(NumeroSelecionado == 0){
            window.location.href = `../../Paginas/${LinguagemArquivo}/LivroDigital.html`;
        }else {
            window.location.href = `LivroDigital-Pagina-${NumeroSelecionado}.html`;
        }
    }
}

/*Variavel que representa o select das páginas*/
var select = document.querySelector('#Paginas');

/*AddEventListener para verificar se o select sofreu mudanças*/
select.addEventListener('change', selecionar);

/*Variavel que representa a quantidade de clicks no desenho talvenista*/
var NumeroDeClicks = 0;

/*Função para fazer o href*/
function linkDesenho({target}){
    NumeroDeClicks = NumeroDeClicks + 1;
    if(NumeroDeClicks == 1){
        target.style.transition = "ease 1s";
        target.src = "../../Imagens/DesenhoTalvenista3.webp";
        target.style.position = "absolute";
        target.style.marginTop = "0%";
        target.parentElement.style.position = "relative";
        target.parentElement.style.paddingTop = "0";
    }else if(NumeroDeClicks == 2){
        target.style.transform = "rotateY(180deg)";
        setTimeout(()=>{
            desenhoTalvenista.src = "../../Imagens/DesenhoTalvenista4.webp";
        },500);
    }else if(NumeroDeClicks == 3){
        target.style.transform = "rotateY(0deg)";    
        target.style.transition = "0s";
        target.src = "../../Imagens/DesenhoTalvenista2.webp";
        target.style.position = "relative";
        target.style.marginTop = "10%";
        target.parentElement.style.position = "relative";
        target.parentElement.style.paddingTop = "1.8vw";
        NumeroDeClicks = 0;
    }
}

/*Variavel que representa o desenho talvenista*/
var desenhoTalvenista = document.querySelector('.DesenhoTalvenista');

/*AddEventListener para verificar se o desenho talvenista sofreu mudanças*/
desenhoTalvenista.addEventListener('click', linkDesenho);