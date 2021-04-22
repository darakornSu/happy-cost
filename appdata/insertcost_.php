<?php
$conn = new mysqli('localhost','root','','happycost');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

    $getuser_name = $_POST['user_name'];
    $getcost= $_POST['cost'];
    $getcategory = $_POST['category'];
    $getdate = $_POST['date'];
    $getnote =$_POST['note'];
    $getcolor =$_POST['color'];


$sql = "INSERT INTO `cost`(`user_name`,`cost`,`category`,`date`,`note`,`icon`,`color`)
         VALUES('ดารากร','$getcost','$getcategory','$getdate','$getnote','wallet-sharp','success')";
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