<?php

$host = "192.168.15.183";
$usuario = "SupremoLiderDaPossivelIgrejaTalvenista";
$senhabd = "AlanOnoOsanaiPan";
$banco = "sislogintalv";

$conexao = mysqli_connect($host, $usuario, $senhabd, $banco);

if(!$conexao){
    die("Erro na conexão: ". mysqli_connect_error());
}else{
    echo("");
}

?>