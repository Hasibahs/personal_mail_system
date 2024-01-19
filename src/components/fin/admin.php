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

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Join 'availability' table with 'users' table on 'user_id'
$sql = "SELECT a.id, u.hotel_name, a.room_type, a.rooms_available, a.start_date, a.end_date, a.price 
        FROM availability a
        JOIN users u ON a.user_id = u.id";
$result = $conn->query($sql);

$hotelData = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $hotelData[] = $row;
    }
}

echo json_encode($hotelData);

$conn->close();
?>
