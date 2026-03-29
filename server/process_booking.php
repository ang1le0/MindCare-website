
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"] ?? '';
    $email = $_POST["email"] ?? '';
    $phone = $_POST["phone"] ?? '';
    $sessionType = $_POST["sessionType"] ?? '';
    $preferredDay = $_POST["preferredDay"] ?? '';
    $preferredTime = $_POST["preferredTime"] ?? '';
    $contactMethod = $_POST["contactMethod"] ?? '';
    $notes = $_POST["notes"] ?? '';

    echo "<h1>Appointment Request Received</h1>";
    echo "<p>Thank you, <strong>$fullName</strong>. Your appointment request has been submitted successfully.</p>";
    echo "<p><a href='../pages/appointments.html'>Go Back</a></p>";
}
?>