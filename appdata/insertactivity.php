<?php
$conn = new mysqli('localhost','root','','happycost');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

    $gettopic = $_POST['topic'];
    $getdate = $_POST['date'];
    $getnote =$_POST['note'];
    $getcost =$_POST['cost'];

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
$sql = "INSERT INTO `activity`(`topic`,`date`,`note`,`cost`,`user_id`)
         VALUES('$gettopic','$getdate','$getnote','$getcost','$user_id')";
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