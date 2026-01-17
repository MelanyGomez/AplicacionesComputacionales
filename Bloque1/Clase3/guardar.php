<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "escuela";
//aca se cambia por la ip de la pc que tiene el frontend
$conn = new mysqli($host, $user, $pass, $db);

$nombre = $_POST["nombre"];

$conn->query("INSERT INTO alumnos(nombre) VALUES('$nombre')");

$result = $conn->query("SELECT * FROM alumnos");

$datos = [];

while($row = $result->fetch_assoc()){
    $datos[] = $row;
}

echo json_encode($datos);
?>
