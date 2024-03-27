<?php
// Enable error reporting for debugging - remove this in a production environment
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database credentials
$host = 'localhost';
$dbname = 'user_management';
$username = 'root';
$password = '';

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set headers for CORS - adjust these in a production environment
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// SQL query to fetch combined data
$sql = "
    SELECT a.id, u.hotel_name, a.room_type, a.rooms_available, a.start_date, a.end_date, a.price
    FROM availability a
    JOIN users u ON a.user_id = u.id
";

// Execute query and fetch the data
$result = $conn->query($sql);

// Check for and handle query errors
if (!$result) {
    echo json_encode(['error' => $conn->error]);
    $conn->close();
    exit;
}

// Fetch data as an associative array
$availabilityData = $result->fetch_all(MYSQLI_ASSOC);

// Send JSON response back to the frontend
echo json_encode($availabilityData);

// Close the connection
$conn->close();
?>
