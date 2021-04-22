<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');

$username = $_POST['username'];
$email = $_POST['email'];
$user_id = $_POST['user_id'];

$sql = "UPDATE  `member` SET `username`='$username',`email`='$email' WHERE `user_id` = '$user_id' " ;
$result = mysqli_query($con,$sql); 
echo json_encode($data); 
echo mysqli_error($con);   
?>