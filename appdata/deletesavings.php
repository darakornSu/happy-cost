<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include('config.ini.php');
    
    $gettotal_savings = $_POST['total_savings'];
    
    $sql = "SELECT * FROM `total_cost`";
    $result = mysqli_query($con,$sql);    
    $numrow = mysqli_num_rows($result);
    if($numrow > 0 ){
        $data = array();
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
            $newexpend =  $row["total_expend"];
            $newrevenue =  $row["total_revenue"];
            $newsaving =  0;
            $newsum =  $row["total_sum"];
        }
    }
    echo json_encode($data); 
    echo mysqli_error($con); 

    $conn = new mysqli('localhost','root','','happycost');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

    $sql = "INSERT INTO `total_cost`(`total_revenue`,`total_expend`,`total_savings`,`total_sum`)
         VALUES('$newrevenue','$newexpend','$newsaving','$newsum')";
$result = mysqli_query($conn,$sql);                    
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