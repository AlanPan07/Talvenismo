/*Para saber o nome do arquivo que está usando o javascript*/
var UrlAtual = window.location.href;
var NomeArquivoExtendido = UrlAtual.split('/').pop();
var NomeArquivo = NomeArquivoExtendido.split('.').slice(0, -1).join('.');

/*Para saber se o arquivo html é em inglês ou português*/
var Arquivo = UrlAtual.split('/');
var NomeArquivoEx = Arquivo.pop();
var LinguagemArquivo = Arquivo.pop();

/*Parte para mudar o CSS de acordo com a configuração*/
if(localStorage.getItem("logado") == "sim"){
    if (localStorage.getItem("modoLogado") == "claro") {
        claro();
    } else if (localStorage.getItem("modoLogado") == "escuro") {
        escuro();
    }
}else{
    if (localStorage.getItem("Modo") == "claro") {
        claro();
    } else if (localStorage.getItem("Modo") == "escuro") {
        escuro();
    }
}

/*Função do modo claro*/
function claro() {
    document.head.querySelector("#link").href = "../../CSS/loginClaro.css";
}

/*Função do modo escuro*/
function escuro() {
    document.querySelector(".login_logo").src = "../../Imagens/SimboloEscuro.webp";
    document.head.querySelector("#link").href = "../../CSS/loginEscuro.css";
}

/*Parte para a estetica dos inputs*/
/*Variaveis necessárias*/
var inputs = document.querySelectorAll('.input');
var button = document.querySelector('.login_button');

/*Função de quando é focado basicamente para estetica*/
function Foco({target}){
    const p = target.previousElementSibling;
    p.classList.add('p_ativo');
}

/*Função de quando é desfocado basicamente para estetica*/
function SairDoFoco({target}){
    if (target.value == '') {
    const p = target.previousElementSibling;
    p.classList.remove('p_ativo');
}
}

/*Parte para abilitar o botão se ele tiver a quantidade de letras o suficiente*/
/*Função que faz isso*/
function MudarBotao(){
    const [nomeusuraio, senha] = inputs;

    if (nomeusuraio.value.length && senha.value.length >= 8){
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled', '');
    }
}

/*AddEventListeners para cada situação a cima*/
inputs.forEach((input)=>{input.addEventListener('focus', Foco)});

inputs.forEach((input)=>{input.addEventListener('focusout', SairDoFoco)});

inputs.forEach((input)=>{input.addEventListener('input', MudarBotao)});

/*Para colocar o link necessário para voltar para página anterior*/
if(LinguagemArquivo == "Pt"){
    document.querySelector(".antesLoginLink").href = `${localStorage.getItem("paginaAntesLogin")}.html`;
} else if(LinguagemArquivo == "Ing"){
    document.querySelector(".antesLoginLink").href = `${localStorage.getItem("paginaAntesLogin")}.html`;
}