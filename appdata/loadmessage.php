<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');

$datepast = date("Y-m-d",strtotime('-3 days'));
$datenow = date("Y-m-d");
$status = 'ชำระแล้ว';
$getcount = 0 ;
$data = array();
$i = 1;
if($i=1){
    $sql = "SELECT * FROM `bill_` WHERE `date` >='$datepast' and `date` <='$datenow' and `status` != '$status' ";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    while($row = mysqli_fetch_assoc($result)){
        $getcount += 1;
    }
}
}
if($i=1){
    $sql = "SELECT * FROM `activity` WHERE `date` >='$datepast' and `date` <='$datenow' ";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    while($row = mysqli_fetch_assoc($result)){
        $getcount += 1;
    }
}
}
$rowcount['rowcount'] = $getcount;
$data[] = $rowcount;
echo json_encode($data); 
echo mysqli_error($con); 






?> 