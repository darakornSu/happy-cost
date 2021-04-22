<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');
$datepast = date("Y-m-01");
$datepast2 = date("Y-m-31");


$sql = "SELECT `category`,sum(`sum_expend`) FROM `expend` WHERE `date` >='$datepast' and `date` <='$datepast2' GROUP BY `category` ";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $row['cost'] = $row['sum(`sum_expend`)'];
        $data[] = $row;
     
    }
}
echo json_encode($data); 
echo mysqli_error($con); 
?>