<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');

$activity_id = $_POST['activity_id'];
$sql = "DELETE FROM `activity` WHERE `activity_id` = '$activity_id' ";
$result = mysqli_query($con,$sql);    
echo json_encode($data); 
echo mysqli_error($con); 


?>