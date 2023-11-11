<?php 
// Inclua o arquivo de conexão
include("conexao.php"); 

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = array();

    for ($posicao = 2; $posicao <= 8; $posicao++) {
        $sql = "SELECT nome_completo FROM usuarios WHERE posicao = '$posicao' ORDER BY id";

        $resultado = $conexao->query($sql) or die($conexao->error);

        if ($resultado->num_rows > 0) {
            while ($row = $resultado->fetch_assoc()) {
                $data[$posicao][] = $row['nome_completo'];
            }
        }
    }

    echo json_encode($data);
}
?>