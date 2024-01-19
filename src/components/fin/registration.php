<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Database
$host = 'localhost';
$dbname = 'user_management';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Check if the 'role' field is set, if not, use 'user' as the default role
$role = isset($data['role']) ? $data['role'] : 'user';

$stmt = $conn->prepare("INSERT INTO users (hotel_name, email, password, role) VALUES (?, ?, ?, ?)");

$hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT); 

$stmt->bind_param("ssss", $data['hotelName'], $data['email'], $hashedPassword, $role); 

if ($stmt->execute()) {
    echo json_encode(["message" => "User registered successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
