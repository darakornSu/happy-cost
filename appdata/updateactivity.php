<?php
   header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   
   include('config.ini.php');
   

    $cost = $_POST['cost'];
    $topic = $_POST['topic'];
    $date = $_POST['date'];
    $note =$_POST['note'];
    $activity_id = $_POST['activity_id'];
    
    $sql = "UPDATE  `activity` SET `cost`='$cost',`topic`='$topic',`date`='$date',`note`='$note'WHERE `activity_id` = '$activity_id' " ;
    $result = mysqli_query($con,$sql); 
    echo json_encode($data); 
    echo mysqli_error($con);   
?>

