<?php
include("conexao.php"); // Inclui o arquivo de conexão

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receba os dados do formulário
    $nome_usuario = $_POST['nomeUsuario'];
    $nome_completo = $_POST['nomeCompleto'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $senha = $_POST['senha']; // Hash da senha
    $genero = $_POST['genero'];
    $data_nascimento = $_POST['dataNasc'];
    $pais = $_POST['pais'];
    $posicao = 8;
    $dataHora_entrada = $_POST['dataHora'];
    $timezone = date_default_timezone_get(); // Obtém o fuso horário padrão do servidor
    $dataHora_entrada_servidor = date("Y-m-d H:i:s");
    $status = "Iniciante";

    // Validações
    if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        echo "E-mail inválido.";
    } elseif (strlen($_POST['senha']) < 8) {
        echo "A senha deve ter pelo menos 8 caracteres.";
    } else {
        // Insira os dados no banco de dados com declaração preparada
        $query = "INSERT INTO usuarios (nome_usuario, nome_completo, telefone, email, genero, data_nascimento, senha, posicao, pais, dataHora_entrada, dataHora_entrada_servidor, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conexao, $query);
        mysqli_stmt_bind_param($stmt, "ssssssssssss", $nome_usuario, $nome_completo, $telefone, $email, $genero, $data_nascimento, $senha, $posicao, $pais, $dataHora_entrada, $dataHora_entrada_servidor, $status);

        if (mysqli_stmt_execute($stmt)) {
            echo "Cadastro bem-sucedido!";
        } else {
            echo "Erro no cadastro: " . mysqli_error($conexao);
        }
    }
}

// Feche a conexão com o banco de dados
mysqli_close($conexao);
?>

