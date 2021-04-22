<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');
    $getuser_name = $_POST['user_name'];
    $getsum_bill = $_POST['sum_bill'];
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
            
$sql = "INSERT INTO `bill_`(`sum_bill`,`category`,`date`,`note`,`user_id`)
         VALUES('$getsum_bill','$getcategory','$getdate','$getnote','$user_id')";
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