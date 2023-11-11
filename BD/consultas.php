<?php 
// Inclui o arquivo de conexão
include("conexao.php"); 

session_start();

$id = $_POST['id'];

$sql = "SELECT * FROM usuarios 
WHERE id = '{$id}'";

$resultado = $conexao->query($sql) or die($conexao->error);

if ($resultado->num_rows > 0) {
    $row = $resultado->fetch_assoc();

    $id	= $row["id"];
	$nome_usuario = $row["nome_usuario"];
	$nome_completo	= $row["nome_completo"];
	$telefone = $row["telefone"];
	$email = $row["email"];
	$genero = $row["genero"];
	$data_nascimento = $row["data_nascimento"];
	$posicao = $row["posicao"];
	$modo = $row["modo"];
	$linguagem = $row["linguagem"];
	$foto = $row["foto"];
	$dataHora_entrada = $row["dataHora_entrada"];
	$dataHora_entrada_servidor = $row["dataHora_entrada_servidor"];
	$status = $row["status"];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$Coluna = $_POST['coluna'];
	$valor = "null";
	if($Coluna == 'id'){
		$valor = $row["id"];
	} else if($Coluna == 'nome_usuario'){
		$valor = $row["nome_usuario"];
	} else if($Coluna == 'nome_completo'){
		$valor = $row["nome_completo"];
	} else if($Coluna == 'telefone'){
		$valor = $row["telefone"];
	} else if($Coluna == 'email'){
		$valor = $row["email"];
	} else if($Coluna == 'genero'){
		$valor = $row["genero"];
	} else if($Coluna == 'data_nascimento'){
		$valor = $row["data_nascimento"];
	} else if($Coluna == 'senha'){
		$valor = $row["senha"];
	} else if($Coluna == 'posicao'){
		$valor = $row["posicao"];
	} else if($Coluna == 'pais'){
		$valor = $row["pais"];
	} else if($Coluna == 'estado'){
		$valor = $row["estado"];
	} else if($Coluna == 'cidade'){
		$valor = $row["cidade"];
	} else if($Coluna == 'endereco'){
		$valor = $row["endereco"];
	} else if($Coluna == 'modo'){
		$valor = $row["modo"];
	} else if($Coluna == 'linguagem'){
		$valor = $row["linguagem"];
	} else if($Coluna == 'foto'){
		$valor = $row["foto"];
	} else if($Coluna == 'data_entrada'){
		$valor = $row["data_entrada"];
	} else if($Coluna == 'status'){
		$valor = $row["status"];
	} else{
		$valor = "value not found";
	}
	echo $valor;
}
?>