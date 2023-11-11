<?php

session_start();
    if(empty($_POST) or (empty($_POST["codigo"]))) {
        print"Logout mal sucedido";
    }else if($_POST['codigo'] == "123456789batatatalvenismocodigo123!@#$%") {

        include('conexao.php');

        unset($_SESSION["id"]);
        unset($_SESSION["nome_usuario"]);
        unset($_SESSION["nome"]);
        unset($_SESSION["linguagem"]);
        unset($_SESSION["modo"]);
        unset($_SESSION["foto"]);

        session_destroy();
    }
    exit;
?>