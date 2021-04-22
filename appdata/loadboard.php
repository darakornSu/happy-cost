<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');

$datepast = date("Y-m-d",strtotime('-3 days'));
$datenow = date("Y-m-d");
$status = 'ชำระแล้ว';
$getcount = 0 ;

$sql = "SELECT * FROM `bill_` WHERE `date` >='$datepast' and `date` <='$datenow' and `status` != '$status'";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
        $getcount += 1;
    }
}
echo json_encode($data); 
echo mysqli_error($con); 


?>