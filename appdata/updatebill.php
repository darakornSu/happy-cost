<?php
   header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   
   include('config.ini.php');
   

    $getsum_bill = $_POST['sum_bill'];
    $getcategory = $_POST['category'];
    $getdate = $_POST['date'];
    $getnote =$_POST['note'];
    $bill_id = $_POST['bill_id'];
    
    $sql = "UPDATE  `bill_` SET `sum_bill`='$getsum_bill',`category`='$getcategory',`date`='$getdate',`note`='$getnote'WHERE `bill_id` = '$bill_id' " ;
    $result = mysqli_query($con,$sql); 
    echo json_encode($data); 
    echo mysqli_error($con);   
?>

