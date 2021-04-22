<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');

$datepast = date("Y-m-d",strtotime('-7 days'));
$datenow = date("Y-m-d");
$getcount = 0 ;

$sql2 = "SELECT * FROM `login` WHERE `check_` != '0' ";
$result = mysqli_query($con,$sql2);    
$numrow = mysqli_num_rows($result);
    if($numrow > 0 ){
        $data = array();
        while($row = mysqli_fetch_assoc($result)){
              $data[] = $row;
              $user_id =$row['check_'];
         }
    }
    $sql1 = "SELECT `total_sum` FROM `total_cost` WHERE `total_cost_id` = (
        SELECT MAX(`total_cost_id`) FROM `total_cost` )";
    $result = mysqli_query($con,$sql1);    
    $numrow = mysqli_num_rows($result);
    if($numrow > 0 ){
        while($row = mysqli_fetch_assoc($result)){
            $call1 = $row['total_sum'];
            $data[] = $row;
        }
    }
    }
$sql = "SELECT sum(sum_expend) FROM `expend` WHERE `date` >='$datepast' and `date` <='$datenow' and `user_id`='$user_id' ";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $row['call'] = floor($call1/($row['sum(sum_expend)']/7));
        $data[] = $row;
        $getcount += 1;
    }
}
    
echo json_encode($data); 
echo mysqli_error($con); 


?>