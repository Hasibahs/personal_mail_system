<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$host = 'localhost';
$dbname = 'user_management';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$data = json_decode($json, true);

$email = $data['email'];
$password = $data['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    // Debug: Log the user role
    error_log("User role: " . $user['role']);

    if (password_verify($password, $user['password'])) {
        // Debug: Log that the password was verified
        error_log("Password verified for user: " . $user['email']);

        $response = [
            "success" => true,
            "message" => "Login successful",
            "isAdmin" => $user['role'] === 'admin'
        ];

        // Debug: Log the isAdmin value
        error_log("isAdmin: " . ($response["isAdmin"] ? "true" : "false"));

        echo json_encode($response);
    } else {
        // Invalid password
        echo json_encode(["success" => false, "message" => "Invalid password"]);
    }
} else {
    // No user found with that email address
    echo json_encode(["success" => false, "message" => "User not found"]);
}

$stmt->close();
$conn->close();
?>
