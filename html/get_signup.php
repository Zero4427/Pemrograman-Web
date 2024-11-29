<?php
// CORS Header
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";  // Default username for MySQL
$password = "";      // Default password for MySQL
$dbname = "poetik_db";  // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->email) && isset($data->password)) {
    $username = $conn->real_escape_string($data->username);
    $email = $conn->real_escape_string($data->email);
    $password = password_hash($data->password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "User registered successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Incomplete data."]);
}

$conn->close();
?>
