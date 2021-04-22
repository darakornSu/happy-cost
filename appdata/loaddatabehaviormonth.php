<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');

$sql = "SELECT * FROM `behavior` GROUP BY `date`";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $mydate = $row['date'];
        $month = date("F",strtotime($mydate));
        $row['month'] = $month;
        $data[] = $row;
    }
}

echo json_encode($data); 
echo mysqli_error($con); 


?>