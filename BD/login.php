<?php 
    if(empty($_POST) or (empty($_POST["nomedousuario"])) or (empty($_POST["senha"]))) {
        print"<script>location.href='./Paginas/Pt/index.html';</script>";
    }

    session_start();
    
    include('conexao.php');

    $usuario = $_POST["nomedousuario"];
    $senha = $_POST["senha"];

    $sql = "SELECT * FROM usuarios 
            WHERE nome_usuario = '{$usuario}'
            AND senha = '{$senha}'";

    $res = $conexao->query($sql) or disc($conexao->error);

    $row = $res->fetch_object();

    $qtd = $res->num_rows;

    if ($qtd > 0) {
        $_SESSION["id"] = $row->id;
        $_SESSION["nome_usuario"] = $usuario;
        $_SESSION["nome"] = $row->nome_completo;
        $_SESSION["linguagem"] = $row->linguagem;
        $_SESSION["modo"] = $row->modo;
        $_SESSION["foto"] = $row->foto;
        
        print"<script> alert('Login sucedido')</script>";
        print"<script> localStorage.setItem('logado', 'sim');</script>";
        print"<script> localStorage.setItem('id_usuario', '{$_SESSION["id"]}');</script>";
        print"<script> localStorage.setItem('foto', '{$_SESSION["foto"]}');</script>";
        print"<script> localStorage.setItem('linguagemLogado', '{$_SESSION["linguagem"]}');</script>";
        print"<script> localStorage.setItem('modoLogado', '{$_SESSION["modo"]}');</script>";
        print"<script> location.href = '../Paginas/Pt/index.html'</script>";
    } else {
        print"<script>alert('Usuário e/ou senha incorretos')</script>";
        print"<script> location.href = '../Paginas/Pt/Login.html'</script>";
    }
?>