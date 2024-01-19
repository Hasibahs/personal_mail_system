<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database
$host = 'localhost';
$dbname = 'user_management';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);


if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit; 
}

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true); 

if (!isset($input['userId']) || !isset($input['roomTypes'])) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$user_id = $input['userId'];
$success = true; 

$stmt = $conn->prepare("INSERT INTO availability (user_id, room_type, rooms_available, start_date, end_date, price) VALUES (?, ?, ?, ?, ?, ?)");


foreach ($input['roomTypes'] as $room) {
    $startDate = date('Y-m-d', strtotime($room['startDate'])); // Y-m-d format
    $endDate = date('Y-m-d', strtotime($room['endDate'])); // Y-m-d format

    $stmt->bind_param("issssd", 
        $user_id,
        $room['roomType'], 
        $room['roomsAvailable'], 
        $startDate, 
        $endDate, 
        $room['price']
    );
    
    if (!$stmt->execute()) {
        $success = false; 
        break; 
    }
}

if ($success) {
    echo json_encode(["success" => true, "message" => "Availability data inserted successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to insert availability data", "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
