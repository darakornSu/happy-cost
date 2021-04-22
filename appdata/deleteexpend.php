<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');

$expend_id = $_POST['expend_id'];
$sumexpend = $_POST['sum_expend'];
$sql = "DELETE FROM `expend` WHERE `expend_id` = '$expend_id' ";
$result = mysqli_query($con,$sql);    
echo mysqli_error($con); 

$sql2 = "SELECT * FROM `total_cost`";
    $result = mysqli_query($con,$sql2);    
    $numrow = mysqli_num_rows($result);
    if($numrow > 0 ){
        $data = array();
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
            $newexpend =  $row["total_expend"]-$sumexpend;
            $newrevenue =  $row["total_revenue"];
            $newsaving =  $row["total_savings"];
            $newsum =  $row["total_sum"]+$sumexpend;
        }
    }
    echo $newexpend;
    echo json_encode($data); 
    echo mysqli_error($con); 

    $sql3 = "INSERT INTO `total_cost`(`total_revenue`,`total_expend`,`total_savings`,`total_sum`)
         VALUES('$newrevenue','$newexpend','$newsaving','$newsum')";
$result = mysqli_query($con,$sql3);                    
if($result){
    $callback= array(
        'status' => 200
        ,'msg' => 'Insert Success'
    );
}else{
    $callback=array(
    'status' => 404
    ,'msg' => "Insert Fail"
);
    }
    

?>