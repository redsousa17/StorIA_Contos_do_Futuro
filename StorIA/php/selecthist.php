<?php
include 'conexao.php'; // Inclui o arquivo de conexão com o banco de dados

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Consulta SQL para selecionar uma história com base no ID fornecido
    $sql = "SELECT * FROM historias WHERE Id = $id";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        $titulo = $row['Titulo'];
        $conteudo = $row['Conteudo'];
        $data = $row['Data'];

        $historia = [
            'titulo' => $titulo,
            'conteudo' => $conteudo,
            'data' => $data,
        ];

        // Saída em formato JSON
        echo json_encode($historia);
    } else {
        echo "Nenhuma história encontrada com o ID fornecido.";
    }
} else {
    echo "ID da história não fornecido.";
}

mysqli_close($conn);
?>
