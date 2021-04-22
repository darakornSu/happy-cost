<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');

    $getuser_name = $_POST['user_name'];
    $getsum_expend = $_POST['sum_expend'];
    $getcategory = $_POST['category'];
    $getdate = $_POST['date'];
    $getnote =$_POST['note'];

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
            
$sql = "INSERT INTO `expend`(`user_name`,`sum_expend`,`category`,`date`,`note`,`user_id`)
         VALUES('ดารากร','$getsum_expend','$getcategory','$getdate','$getnote','$user_id')";
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
    
    $sql3 = "SELECT * FROM `total_cost`";
    $result = mysqli_query($con,$sql3);    
    $numrow = mysqli_num_rows($result);
    if($numrow > 0 ){
        $data = array();
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
            $newexpend =  $row["total_expend"]+$getsum_expend;
            $newrevenue =  $row["total_revenue"];
            $newsaving =  $row["total_savings"];
            $newsum =  $row["total_sum"]-$getsum_expend;
        }
    }
    echo $newexpend;
    echo json_encode($data); 
    echo mysqli_error($con); 

    $sql4 = "INSERT INTO `total_cost`(`total_revenue`,`total_expend`,`total_savings`,`total_sum`,`user_id`)
         VALUES('$newrevenue','$newexpend','$newsaving','$newsum','$user_id')";
$result = mysqli_query($con,$sql4);                    
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