<?php
$servidor = "localhost";
$usuario = "root"; // Tu usuario de BD
$password = "";    // Tu contraseña de BD
$base_datos = "act3_ernesto";

$conn = new mysqli($servidor, $usuario, $password, $base_datos);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Insertar en la BD
$sql = "INSERT INTO contactos (nombre, email, asunto, mensaje) VALUES ('$nombre', '$email', '$asunto', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "¡Mensaje enviado con éxito!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>