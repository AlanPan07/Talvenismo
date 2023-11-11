/*Variaveis globais*/
var m;
var tradutor;
var modoAparencia;
var configuracoes;
var id_usuario = localStorage.getItem('id_usuario');

/*Para saber o nome do arquivo que está usando o javascript*/
var UrlAtual = window.location.href;
var NomeArquivoExtendido = UrlAtual.split('/').pop();
var NomeArquivo = NomeArquivoExtendido.split('.').slice(0, -1).join('.');

/*Para saber se o arquivo html é em inglês ou português*/
var Arquivo = UrlAtual.split('/');
var NomeArquivoEx = Arquivo.pop();
var LinguagemArquivo = Arquivo.pop();

/*Para saber se o arquivo html é do livro*/
var NomePasta = Arquivo.pop();

/*Tudo o que ocorre quando a janela é carregada*/
window.onload = () => {
    /*If que usa o item do local estorage para saber se o usuario está logado no site para a aparencia do site*/
    if(localStorage.getItem("logado") == "sim"){
        /*If que usa o item do local estorage para selecionar entre o modo claro e modo escuro*/
        if (localStorage.getItem("modoLogado") == "claro") {
            claro();
        } else if (localStorage.getItem("modoLogado") == "escuro") {
            escuro();
        }
    }else{
        /*If que usa o item do local estorage para selecionar entre o modo claro e modo escuro*/
        if (localStorage.getItem("Modo") == "claro") {
            claro();
        } else if (localStorage.getItem("Modo") == "escuro") {
            escuro();
        }
    }

    /*If que usa o item do local estorage para saber se o usuario está logado no site para mudar a foto*/
    if(localStorage.getItem("logado") == "sim"){
        document.querySelector("#div0").querySelector('img').src = "../../Imagens/Login/Login1.webp";
        document.querySelector("#foto").querySelector('img').src = "../../Imagens/Login/Login1.webp";
    }else{
        document.querySelector("#div0").querySelector('img').src = "../../Imagens/Cadastro.webp";
        document.querySelector("#foto").querySelector('img').src = "../../Imagens/Cadastro.webp";
    }


    /*Função que traduz*/
    /*If que usa o item do local estorage para saber se o usuario está logado no site para traduzir*/
    if(localStorage.getItem("logado") == "sim"){
        if (localStorage.getItem("lingua")) {
            if (localStorage.getItem("linguagemLogado") == "inglês" && LinguagemArquivo != "Ing") {
                localStorage.setItem("traduziu", "sim");
                window.location.replace(`../Ing/${NomeArquivo}.html`);
            } else if (localStorage.getItem("linguagemLogado") == "português" && LinguagemArquivo != "Pt") {
                localStorage.setItem("traduziu", "sim");
                window.location.replace(`../Pt/${NomeArquivo}.html`);
            }
        }
    }else {
        /*If que usa o item do local estorage para selecionar entre o idioma inglês ou português*/
        if (localStorage.getItem("lingua")) {
            if (localStorage.getItem("lingua") == "ingles" && LinguagemArquivo != "Ing") {
                localStorage.setItem("traduziu", "sim");
                window.location.replace(`../Ing/${NomeArquivo}.html`);
            } else if (localStorage.getItem("lingua") == "portugues" && LinguagemArquivo != "Pt") {
                localStorage.setItem("traduziu", "sim");
                window.location.replace(`../Pt/${NomeArquivo}.html`);
            }
        }
    }

};

/*Para criar alguns elementos html, específicos que são iguais em todas as páginas*/
if(localStorage.getItem("logado") == "sim"){
    if(localStorage.getItem('linguagemLogado') == 'inglês'){
        document.querySelector('#menu').innerHTML = "<div><input type='button' value='X' onclick='menua()'></div><div  onclick='cadastro()' id='foto'><img src='../../Imagens/Cadastro.webp' alt='Photo of your account'><div><input type='button' value='Your account'><input type='button' value='settings'></div></div><div><input type='button' value='Languages' onclick='traducao()'></div><div><input type='button' value='Appearance' onclick='modoaparencia()'></div><div><input type='button' value='Portal' onclick='portal()'></div>"
        document.querySelector('#aparencia').innerHTML = "<form name='aparen' id='aparen'><h2>Select the theme you want:</h2><p><input type='radio' name='modo'>Light theme<br><input type='radio' name='modo'>Dark theme<br></p><p><input type='button' value='Change theme' onclick='modoA()'></p></form>"
        document.querySelector('#idiomas').innerHTML = "<form name='idioms' id='idioms'><h2>Select the language you want:</h2><p><input type='radio' name='linguas'>English<br><input type='radio' name='linguas'>Portuguese<br></p><p><input type='button' value='Change language' onclick='idiomas()'></p></form>"
        document.querySelector('#configuracoes').innerHTML = "<div id='cabecalho_login'><img src='../../Imagens/Login/Login1.webp' alt='Foto da sua conta' onclick='cadastro2(3)'><input id='nome_usuario' type='text' class='status_login_input'></div><div id='status_login'><h2>Data sheet:</h2><label><span>Status:</span><input id='status' type='text' class='status_login_input'></label><label><span>Name:</span><input id='nome_completo' type='text' class='status_login_input'></label><label><span>Phone number:</span><input id='telefone' type='text' class='status_login_input'></label><label><span>Email:</span><input id='email' type='text' class='status_login_input'></label><label><span>Gender:</span><input id='genero' type='text' class='status_login_input'></label><label><span>Date of birth:</span><input id='data_nascimento' type='text' class='status_login_input'></label><label><span>Password:</span><input id='senha' type='text' class='status_login_input'></label><label><span>Position:</span><input id='posicao' type='text' class='status_login_input'></label><label><span>Country:</span><input id='pais' type='text' class='status_login_input'></label><label><span>State:</span><input id='estado' type='text' class='status_login_input'></label><label><span>City:</span><input id='cidade' type='text' class='status_login_input'></label><label><span>Address:</span><input id='endereco' type='text' class='status_login_input'></label></div><div id='logout' onclick='logout()' class='final'><p>Log out of account</p></div><div id='login' onclick='cadastro2(1)' class='final'><p>Change account - Sign in</p></div><div id='cadastro' onclick='cadastro2(2)' class='final'><p>Register new account</p></div>"
    }else{
        document.querySelector('#menu').innerHTML = "<div><input type='button' value='X' onclick='menua()'></div><div  onclick='cadastro()' id='foto'><img src='../../Imagens/Cadastro.webp' alt='Foto da sua conta'><div><input type='button' value='Configurações'><input type='button' value='da sua conta'></div></div><div><input type='button' value='Idiomas' onclick='traducao()'></div><div><input type='button' value='Aparência' onclick='modoaparencia()'></div><div><input type='button' value='Portal' onclick='portal()'></div>"
        document.querySelector('#aparencia').innerHTML = "<form name='aparen' id='aparen'><h2>Selecione o tema que deseja:</h2><p><input type='radio' name='modo'>Tema claro<br><input type='radio' name='modo'>Tema escuro<br></p><p><input type='button' value='Mudar tema' onclick='modoA()'></p></form>"
        document.querySelector('#idiomas').innerHTML = "<form name='idioms' id='idioms'><h2>Selecione o idioma que deseja:</h2><p><input type='radio' name='linguas'>Inglês<br><input type='radio' name='linguas'>Português<br></p><p><input type='button' value='Mudar idioma' onclick='idiomas()'></p></form>"
        document.querySelector('#configuracoes').innerHTML = "<div id='cabecalho_login'><img src='../../Imagens/Login/Login1.webp' alt='Foto da sua conta' onclick='cadastro2(3)'><input id='nome_usuario' type='text' class='status_login_input'></div><div id='status_login'><h2>Ficha:</h2><label><span>Status:</span><input id='status' type='text' class='status_login_input'></label><label><span>Nome:</span><input id='nome_completo' type='text' class='status_login_input'></label><label><span>Telefone:</span><input id='telefone' type='text' class='status_login_input'></label><label><span>Email:</span><input id='email' type='text' class='status_login_input'></label><label><span>Genero:</span><input id='genero' type='text' class='status_login_input'></label><label><span>Data de nascimento:</span><input id='data_nascimento' type='text' class='status_login_input'></label><label><span>Senha:</span><input id='senha' type='text' class='status_login_input'></label><label><span>Posição:</span><input id='posicao' type='text' class='status_login_input'></label><label><span>País:</span><input id='pais' type='text' class='status_login_input'></label><label><span>Estado:</span><input id='estado' type='text' class='status_login_input'></label><label><span>Cidade:</span><input id='cidade' type='text' class='status_login_input'></label><label><span>Endereço:</span><input id='endereco' type='text' class='status_login_input'></label></div><div id='logout' onclick='logout()' class='final'><p>Sair da conta - Logout</p></div><div id='login' onclick='cadastro2(1)' class='final'><p>Mudar de conta - Login</p></div><div id='cadastro' onclick='cadastro2(2)' class='final'><p>Cadastrar nova conta</p></div>"
    }
    //Parte da ficha do usuario quando está logado

    /*Parte para a estetica dos inputs da ficha*/
    /*Variaveis necessárias*/
    var inputs = document.querySelectorAll('.status_login_input');
    inputs.forEach((input)=>{input.addEventListener('input', ()=>{
        var coluna = input.id;
        var valor = input.value;
        formUpdate(coluna, valor, nome_usuario);
    
        (async (input)=>{
            input.value = await formConsulta(coluna).then(resultado => {
                return resultado;
            });
        });
    
    })});
    
    inputs.forEach(async (input)=>{
        var coluna = input.id;
        input.value = await formConsulta(coluna).then(resultado => {
            return resultado;
        });
    });
}else{
    if(localStorage.getItem('lingua') == 'ingles'){
        document.querySelector('#menu').innerHTML = "<div><input type='button' value='X' onclick='menua()'></div><div onclick='cadastro()' id='foto'><img src='../../Imagens/Cadastro.webp' alt='Image of register'><div><input type='button' value='Sign in or'><input type='button' value='register'></div></div><div><input type='button' value='Languages' onclick='traducao()'></div><div><input type='button' value='Appearance' onclick='modoaparencia()'></div><div><input type='button' value='Portal' onclick='portal()'></div>"
        document.querySelector('#aparencia').innerHTML = "<form name='aparen' id='aparen'><h2>Select the theme you want:</h2><p><input type='radio' name='modo'>Light theme<br><input type='radio' name='modo'>Dark theme<br></p><p><input type='button' value='Change theme' onclick='modoA()'></p></form>"
        document.querySelector('#idiomas').innerHTML = "<form name='idioms' id='idioms'><h2>Select the language you want:</h2><p><input type='radio' name='linguas'>English<br><input type='radio' name='linguas'>Portuguese<br></p><p><input type='button' value='Change language' onclick='idiomas()'></p></form>"
        document.querySelector('#configuracoes').innerHTML = "<h2>You shouldn't be here.</h2>"
    }else{
        document.querySelector('#menu').innerHTML = "<div><input type='button' value='X' onclick='menua()'></div><div onclick='cadastro()' id='foto'><img src='../../Imagens/Cadastro.webp' alt='cadastro'><div><input type='button' value='Faça login ou'><input type='button' value='cadastre-se'></div></div><div><input type='button' value='Idiomas' onclick='traducao()'></div><div><input type='button' value='Aparência' onclick='modoaparencia()'></div><div><input type='button' value='Portal' onclick='portal()'></div>"
        document.querySelector('#aparencia').innerHTML = "<form name='aparen' id='aparen'><h2>Selecione o tema que deseja:</h2><p><input type='radio' name='modo'>Tema claro<br><input type='radio' name='modo'>Tema escuro<br></p><p><input type='button' value='Mudar tema' onclick='modoA()'></p></form>"
        document.querySelector('#idiomas').innerHTML = "<form name='idioms' id='idioms'><h2>Selecione o idioma que deseja:</h2><p><input type='radio' name='linguas'>Inglês<br><input type='radio' name='linguas'>Português<br></p><p><input type='button' value='Mudar idioma' onclick='idiomas()'></p></form>"
        document.querySelector('#configuracoes').innerHTML = "<h2>Você não deveria estar aqui.</h2>"
    }
}


/*Função só para ir até o cadastro*/
function cadastro() {
    /*If que usa o item do local estorage para saber se o usuario está logado no site para mudar a função do botão de "cadastro"*/
    if(localStorage.getItem("logado") == "sim"){
        if (configuracoes == true) {
            document.getElementById("configuracoes").className = "invisivel";
            configuracoes = false;
        } else {
            document.getElementById("configuracoes").className = "SectionVisivelConfig";
            document.getElementById("idiomas").className = "invisivel";
            document.getElementById("aparencia").className = "invisivel";
            configuracoes = true;
            tradutor = false;
            modoAparencia = false;
        }
    }else{
        if(NomePasta == "Livro"){
            if(LinguagemArquivo == "Pt"){
                window.location.href = "../../Paginas/Pt/Login.html"
                localStorage.setItem("paginaAntesLogin", `../../Livro/Pt/${NomeArquivo}`);
            } else if(LinguagemArquivo == "Ing"){
                window.location.href = "../../Paginas/Ing/Login.html"
                localStorage.setItem("paginaAntesLogin", `../../Livro/Ing/${NomeArquivo}`);
            }
        }else{
        window.location.href = "./Login.html"
        localStorage.setItem("paginaAntesLogin", NomeArquivo);
        }
    }
}

/*Função só para ir até o cadastro 2*/
function cadastro2(n){
    if(n == "1"){
        if(NomePasta == "Livro"){
            if(LinguagemArquivo == "Pt"){
                window.location.href = "../../Paginas/Pt/Login.html"
                localStorage.setItem("paginaAntesLogin", `../../Livro/Pt/${NomeArquivo}`);
            } else if(LinguagemArquivo == "Ing"){
                window.location.href = "../../Paginas/Ing/Login.html"
                localStorage.setItem("paginaAntesLogin", `../../Livro/Ing/${NomeArquivo}`);
            }
        }else{
        window.location.href = "./Login.html"
        localStorage.setItem("paginaAntesLogin", NomeArquivo);
        }
    }
    if(n == "2"){
        if(NomePasta == "Livro"){
            if(LinguagemArquivo == "Pt"){
                window.location.href = "../../Paginas/Pt/Cadastro.html"
                localStorage.setItem("paginaAntesLogin", `../../Livro/Pt/${NomeArquivo}`);
            } else if(LinguagemArquivo == "Ing"){
                window.location.href = "../../Paginas/Ing/Cadastro.html"
                localStorage.setItem("paginaAntesLogin", `../../Livro/Ing/${NomeArquivo}`);
            }
        }else{
        window.location.href = "./Cadastro.html"
        localStorage.setItem("paginaAntesLogin", NomeArquivo);
        }
    }
}

/*Função de fazer o logout*/
function logout(){
    const formData = new FormData();
    formData.append("codigo", '123456789batatatalvenismocodigo123!@#$%');
    fetch("../../BD/logout.php", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            // A resposta HTTP foi bem-sucedida
            return response.text();
        } else {
            throw new Error('Erro na solicitação.');
        }
    })
    .then(function(data) {
        // Faça algo com os dados da resposta, se necessário
        console.log(data);
    })
    .catch(function(error) {
        console.error('Erro:', error);
    })
    .then(()=>{
        alert('Logout sucedido');
        localStorage.setItem('logado', 'não');
        localStorage.setItem('id_usuario', '');
        localStorage.setItem('foto', '');
        localStorage.setItem('linguagemLogado', '');
        localStorage.setItem('modoLogado', '');
        location.href = '../../Paginas/Pt/index.html';
    });
}

/*Função do Menu*/
function menua() {
    if (m == true) {
        document.getElementById('menu').className = 'menu1';
        document.getElementById('MenuFundo').className = 'menufundo1';
        if (tradutor == true) {
            document.getElementById("idiomas").className = "invisivel";
            tradutor = false
        }
        if (modoAparencia == true) {
            document.getElementById("aparencia").className = "invisivel";
            modoAparencia = false;
        }
        if (configuracoes == true) {
            document.getElementById("configuracoes").className = "invisivel";
            configuracoes = false;
        }
        m = false;
    } else {
        document.getElementById("menu").className = "menu2";
        document.getElementById("MenuFundo").className = "menufundo2";
        m = true;
    }
}

/*Função do layout do tradutor*/
function traducao() {
    if (tradutor == true) {
        document.getElementById("idiomas").className = "invisivel";
        tradutor = false;
    } else {
        document.getElementById("idiomas").className = "SectionVisivel";
        document.getElementById("aparencia").className = "invisivel";
        document.getElementById("configuracoes").className = "invisivel";
        tradutor = true;
        modoAparencia = false;
        configuracoes = false;
    }
}

/*Function da tradução */
function idiomas() {
    if(localStorage.getItem("logado") == "sim"){
        var coluna = "linguagem"
        if (document.idioms.linguas[0].checked) {
            var valor = "inglês";
            formUpdate(coluna, valor);
            localStorage.setItem('linguagemLogado', valor);
            window.location.replace(`../Ing/${NomeArquivo}.html`);
        } else if (document.idioms.linguas[1].checked) {
            var valor = "português";
            formUpdate(coluna, valor);
            localStorage.setItem('linguagemLogado', valor);
            window.location.replace(`../Pt/${NomeArquivo}.html`);
        } else if (LinguagemArquivo == "Pt") {
            alert("Selecione um idioma primeiro.");
        } else if (LinguagemArquivo == "Ing") {
            alert("Please select a language first.");
        }
    }else{
        if (document.idioms.linguas[0].checked) {
            window.location.replace(`../Ing/${NomeArquivo}.html`);
            localStorage.setItem("lingua", "ingles");
        } else if (document.idioms.linguas[1].checked) {
            window.location.replace(`../Pt/${NomeArquivo}.html`);
            localStorage.setItem("lingua", "portugues");
        } else if (LinguagemArquivo == "Pt") {
            alert("Selecione um idioma primeiro.");
        } else if (LinguagemArquivo == "Ing") {
            alert("Please select a language first.");
        }
    }
}

/*Função do layout do modo aparência*/
function modoaparencia() {
    if (modoAparencia == true) {
        document.getElementById("aparencia").className = "invisivel";
        modoAparencia = false;
    } else {
        document.getElementById("aparencia").className = "SectionVisivel";
        document.getElementById("idiomas").className = "invisivel";
        document.getElementById("configuracoes").className = "invisivel";
        modoAparencia = true;
        tradutor = false;
        configuracoes = false;
    }
}

/*Função do modo claro*/
function claro() {
    document.head.querySelector("#link").href = "../../CSS/formClaro.css";
    document.querySelector("header").querySelector("img").src = "../../Imagens/SimboloClaro.webp";
}

/*Função do modo claro*/
function escuro() {
    document.head.querySelector("#link").href = "../../CSS/formEscuro.css";
    document.querySelector("header").querySelector("img").src = "../../Imagens/SimboloEscuro.webp";
}

/*Função do modo aparência*/
function modoA() {
    if(localStorage.getItem("logado") == "sim"){
        var coluna = "modo";
        if (document.aparen.modo[0].checked) {
            var valor = "claro";
            localStorage.setItem('modoLogado', valor);
            claro();
            formUpdate(coluna, valor);
        } else if (document.aparen.modo[1].checked) {
            var valor = "escuro";
            localStorage.setItem('modoLogado', valor);
            escuro();
            formUpdate(coluna, valor);
        } else if (LinguagemArquivo == "Pt") {
            alert("Selecione um tema primeiro");
        } else if (LinguagemArquivo == "Ing") {
            alert("Please select a theme first");
        }
    }else{
        if (document.aparen.modo[0].checked) {
            claro();
            localStorage.setItem("Modo", "claro");
        } else if (document.aparen.modo[1].checked) {
            escuro();
            localStorage.setItem("Modo", "escuro");
        } else if (LinguagemArquivo == "Pt") {
            alert("Selecione um tema primeiro");
        } else if (LinguagemArquivo == "Ing") {
            alert("Please select a theme first");
        }
    }
}

/*Função para fazer o formData enviar para o php os dados, sobre a coluna e os novo 
valor que a coluna vai ter usando UPDATE nome tabela SET coluna = valor WHERE id = id*/
function formUpdate(coluna, valor) {
    const formData = new FormData();
    formData.append("coluna", coluna);
    formData.append("valor", valor);
    formData.append("id", id_usuario);
    fetch("../../BD/updates.php", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            // A resposta HTTP foi bem-sucedida
            return response.text();
        } else {
            throw new Error('Erro na solicitação.');
        }
    })
    .then(function(data) {
        // Faça algo com os dados da resposta, se necessário
        console.log(data);
    })
    .catch(function(error) {
        console.error('Erro:', error);
    });
}

/*Função para fazer o formData enviar para o php os dados, sobre
a coluna em vai ser feito a consulta usando SELECT*/
function formConsulta(coluna){
    const formData = new FormData();
    formData.append("coluna", coluna);
    formData.append("id", id_usuario);

    return fetch("../../BD/consultas.php", {
        method: "POST",
        body: formData
    })
    .then(async function(response) {
        if (response.ok) {
            const data = await response.text();
            return data; // Retorna a string diretamente
        } else {
            throw new Error('Erro na solicitação.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        throw error; // Propague o erro, se necessário
    });
}

/*Função do link do portal*/
function portal() {
    window.location.href = "../../../../../1-Portal/Pt/Claro/index.html";
}