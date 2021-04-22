<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');

$sent = $_POST['sent'];
$sql = "UPDATE  `login` SET `check_`='0' WHERE `id` = '1'" ;
$result = mysqli_query($con,$sql);   
$numrow = mysqli_num_rows($result);

echo mysqli_error($con); 

?>