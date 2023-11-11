<?php 
// Inclui o arquivo de conexão
include("conexao.php");

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receba os dados do formulário
    if (isset($_POST['coluna']) && isset($_POST['valor']) && isset($_POST['id'])) {
        // Validação e preparação dos dados
        $coluna = $_POST["coluna"];
        $valor = $_POST['valor'];
        $id = filter_var($_POST['id'], FILTER_VALIDATE_INT);

        if ($id === false) {
            echo "ID inválido.";
        } else {
            // Prevenção contra Injeção de SQL com declaração preparada
            $query = "UPDATE usuarios SET $coluna = ? WHERE id = ?";
            $stmt = mysqli_prepare($conexao, $query);
            mysqli_stmt_bind_param($stmt, "si", $valor, $id);

            if (mysqli_stmt_execute($stmt)) {
                echo "Mudança de '{$coluna}' bem sucedida";
            } else {
                echo "Mudança de '{$coluna}' mal sucedida";
            }
        }
    } else {
        echo "Chaves ausentes no POST.";
    }
} else {
    echo "Erro na preparação da consulta.";
}

// Feche a conexão com o banco de dados
mysqli_close($conexao);
?>
