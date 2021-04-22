<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');
$bill_id = $_POST['bill_id'];
$bill_id1 = 14;
$sql = "SELECT * FROM `bill_` WHERE `bill_id` = '$bill_id' ";
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