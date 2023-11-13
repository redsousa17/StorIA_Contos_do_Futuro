<?php
    include 'conexao.php'; // Inclui o arquivo de conexão

    $titulo = $_POST['titulo'];
    $conteudo = $_POST['conteudo'];
    $data = date("Y-m-d");

    $sql = "INSERT INTO historias (Titulo, Conteudo, Data) VALUES ('$titulo', '$conteudo', '$data')";

    if (mysqli_query($conn, $sql)) {
        echo "História salva com sucesso!";
    } else {
        echo "Erro ao salvar a história: " . mysqli_error($conn);
    }

    mysqli_close($conn);
?>
