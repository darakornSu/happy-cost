<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');

$datepast = date("Y-m-d",strtotime('-30 days'));
$datenow = date("Y-m-d");

$sql = "SELECT sum(sum_expend) FROM `expend` WHERE  `date`='$datenow' ";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $row['sum_expend'] = $row['sum(sum_expend)'];
        $data[] = $row;
    }
}
    
echo json_encode($data); 
echo mysqli_error($con); 


?>