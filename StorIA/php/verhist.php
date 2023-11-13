<?php
    include 'conexao.php'; // Inclui o arquivo de conexão com o banco de dados

    // Consulta SQL para selecionar uma história aleatória
    $sql = "SELECT * FROM historias ORDER BY RAND() LIMIT 1";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        $id = $row['Id'];
        $titulo = $row['Titulo'];
        $conteudo = $row['Conteudo'];
        $data = $row['Data'];

        $historia = [
            'id' => $id,
            'titulo' => $titulo,
            'conteudo' => $conteudo,
            'data' => $data,
        ];

        // Saída em formato JSON
        echo json_encode($historia);
    } else {
        echo "Nenhuma história encontrada.";
    }

    mysqli_close($conn);
?>
