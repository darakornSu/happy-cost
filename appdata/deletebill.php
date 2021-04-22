<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');

$bill_id = $_POST['bill_id'];
$sql = "DELETE FROM `bill_` WHERE `bill_id` = '$bill_id' ";
$result = mysqli_query($con,$sql);    
echo json_encode($data); 
echo mysqli_error($con); 


?>