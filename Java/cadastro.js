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
    document.head.querySelector("#link").href = "../../CSS/cadastroClaro.css";
}

/*Função do modo escuro*/
function escuro() {
    document.head.querySelector("#link").href = "../../CSS/cadastroEscuro.css";
}

/*Parte só para a estetica do botão*/
/*Variavel que representa o botão*/
var button = document.getElementById("submit");

/*Função só para adicionar o simobolo de loading*/
function adicionarloading() {
    button.innerHTML = '<img src="../../Imagens/Loading.webp" class="loading"></img>';
}

/*Função só para remover o simobolo de loading*/
function removerloading() {
    if(LinguagemArquivo == "Pt"){
        button.innerHTML = "Cadastrar";
    }else if(LinguagemArquivo == "Ing"){
        button.innerHTML = "Register";
    }
}

/*Parte para colocar o aviso de preenchimento obrigatório*/
/*Variaveis que representa os Inputs*/
var inputs = document.querySelectorAll(".CadastroInput");
var CfSenha = document.querySelector("input[name=confirmarSenha]");
var Senha = document.querySelector("input[name=senha]");

/*Função de quando é focado basicamente para tirar o aviso*/
function Foco({ target }) {
    if (target.value == "") {
        const p = target.nextElementSibling;
        p.classList.add("invisibilidade");
        target.style.border = "black solid 1px";
    }
}

/*Função de quando é desfocado basicamente para colocar o aviso*/
function SairDoFoco({ target }) {
    if (target.value == "") {
        const p = target.nextElementSibling;
        p.classList.remove("invisibilidade");
        target.style.border = "red solid 1px";
    }
}

/*AddEventListeners para verificar se entrou ou saiu do foco e a partir daí chamar a devida função*/
inputs.forEach((input) => {
    input.addEventListener("focusout", SairDoFoco);
    input.addEventListener("focus", Foco);
});

/*Parte para avisar que as senhas precisam ser identicas*/
/*Função para verificar e avisar se as senhas são identicas*/
function ConfirmandoSenha({target}){
    if(target.value != Senha.value){
        if(LinguagemArquivo == "Pt"){
            alert("As duas senhas digitadas precisam ser idênticas");
        }else if(LinguagemArquivo == "Ing"){
            alert("The two passwords entered must be identical");
        }
    }
}

/*AddEventListener para verificar se o input confirmar senha foi desfocado*/
CfSenha.addEventListener('focusout', ConfirmandoSenha);

/*Parte para pegar o gênero selecionado no select*/
/*Variaveis*/
var select = document.querySelector('#Genero');
var ValorOption;

/*AddEventListener para verificar se o select sofreu mudanças*/
select.addEventListener('change', selecionar);

/*Função para quando for selecionado*/
function selecionar(){
    var OptionSelecionado = select.options[select.selectedIndex];
    ValorOption = OptionSelecionado.value;
}

/*Parte para enviar os dados para uma planilha e para o banco de dados*/
/*AddEventListener para verificar se o form foi enviado/submitado*/
document.getElementById("cad").addEventListener("submit", submitado);

/*Função que envia os dados para uma planilha e para o banco de dados*/
function submitado(event) {
    event.preventDefault();
    adicionarloading();
    /*If que verifica e avisa se as senhas são identicas*/
    if(CfSenha.value != Senha.value){
        if(LinguagemArquivo == "Pt"){
            alert("As duas senhas digitadas precisam ser idênticas");
        }else if(LinguagemArquivo == "Ing"){
            alert("The two passwords entered must be identical");
        }
    }else{
        /*Parte que envia os dados para uma planilha*/
        var nomeusu = document.querySelector("input[name=nomeUsuario]").value;
        var nome = document.querySelector("input[name=nomeCompleto]").value;
        var tel = document.querySelector("input[name=telefone]").value;
        var email = document.querySelector("input[name=email]").value;
        var senha = document.querySelector("input[name=senha]").value;
        var genero = ValorOption;
        var dataNasc = document.querySelector("input[name=dataNasc]").value;
        var pais = document.querySelector("input[name=pais]").value;
        const formData = new FormData(this);
        var dataHora = new Date();
        formData.append("dataHora", dataHora);

        fetch("https://api.sheetmonkey.io/form/oR1cqncQyQMb21PJ658da9", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Nome_do_usuário: nomeusu,
                Nome_Completo: nome,
                Telefone :tel,
                Email: email,
                Senha: senha,
                Gênero: genero,
                Data_de_nascimento: dataNasc,
                País: pais,
                Data_Entrada: dataHora
            })
        })  
        .then(()=>{      
        /*Parte que envia os dados para o banco de dados*/  
            fetch("../../BD/cadastro.php", {
            method: "POST",
            body: formData
        })            
        .then(response => response.text())            
        .then(data => {
            /*Exiba a resposta do PHP no console*/
            console.log(data);
        })
        .catch(error => {
            /*Exiba o erro no console*/
            console.error("Erro:", error);
        })})
        .then(() => removerloading())
        .then(() => window.location.href = "./index.html");
    }
}

/*Parte para colocar o link necessário para voltar para página anterior*/
if(LinguagemArquivo == "Pt"){
    document.querySelector(".antesLoginLink").href = `${localStorage.getItem("paginaAntesLogin")}.html`;
} else if(LinguagemArquivo == "Ing"){
    document.querySelector(".antesLoginLink").href = `${localStorage.getItem("paginaAntesLogin")}.html`;
}