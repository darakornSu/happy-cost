<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include('config.ini.php');
    
    $gettotal_savings = $_POST['total_savings'];
    
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
    $sql = "SELECT * FROM `total_cost`";
    $result = mysqli_query($con,$sql);    
    $numrow = mysqli_num_rows($result);
    if($numrow > 0 ){
        $data = array();
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
            $newexpend =  $row["total_expend"];
            $newrevenue =  $row["total_revenue"];
            $newsaving =  $row["total_savings"]+$gettotal_savings;
            $newsum =  $row["total_sum"];
        }
    }
    echo $newrevenue;
    echo json_encode($data); 
    echo mysqli_error($con); 

    $sql = "INSERT INTO `total_cost`(`total_revenue`,`total_expend`,`total_savings`,`total_sum`,`user_id`)
         VALUES('$newrevenue','$newexpend','$newsaving','$newsum','$user_id')";
$result = mysqli_query($con,$sql);                    
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