<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "bdstoria";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Conexão falhou: " . mysqli_connect_error());
    }
?>
