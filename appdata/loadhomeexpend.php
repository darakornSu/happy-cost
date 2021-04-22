<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');
$datepast = date("Y-m-d",strtotime('-1 days'));
$datenow = date("Y-m-d");

$sql = "SELECT * FROM `expend`  WHERE `date` >='$datepast' and `date` <='$datenow' ";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
}
echo json_encode($data); 
echo mysqli_error($con); 
?>