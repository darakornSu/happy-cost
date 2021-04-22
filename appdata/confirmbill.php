<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');

$bill_id = $_POST['bill_id'];
$sql = "UPDATE  `bill_` SET `status`='ชำระแล้ว' WHERE `bill_id` = '$bill_id'" ;
$result = mysqli_query($con,$sql);    

    
    $sql = "SELECT * FROM `bill_`  WHERE `bill_id` = '$bill_id'";
    $result = mysqli_query($con,$sql);    
    $numrow = mysqli_num_rows($result);
    if($numrow > 0 ){
        $data = array();
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
            $newbill =  $row["sum_bill"];
            $newcategory =  $row["category"];
            $newdate =  $row["date"];
            $newnote =  $row["note"];
        }
    }
    echo $newbill;

    $sql = "SELECT * FROM `total_cost`";
    $result = mysqli_query($con,$sql);    
    $numrow = mysqli_num_rows($result);
    if($numrow > 0 ){
        $data = array();
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
            $newexpend =  $row["total_expend"]+$newbill;
            $newrevenue =  $row["total_revenue"];
            $newsaving =  $row["total_savings"];
            $newsum =  $row["total_sum"]-$newbill;
        }
    }
   ;
    $conn = new mysqli('localhost','root','','happycost');
    if ($conn->connect_errno){die("Connection failed" . $conn->connect_error);}

    $sql = "INSERT INTO `total_cost`(`total_revenue`,`total_expend`,`total_savings`,`total_sum`)
         VALUES('$newrevenue','$newexpend','$newsaving','$newsum')";
$result = mysqli_query($conn,$sql);                    
    
$sql = "INSERT INTO `expend`(`sum_expend`,`category`,`date`,`note`)
VALUES('$newbill','$newcategory','$newdate','$newnote')";
$result = mysqli_query($conn,$sql);     

$sql = "INSERT INTO `cost`(`cost`,`category`,`date`,`note`,`icon`,`color`)
         VALUES('$newbill','$newcategory','$newdate','$newtnote','cash-sharp','danger')";
$result = mysqli_query($conn,$sql);     
?>