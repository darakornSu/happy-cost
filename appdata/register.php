<?php
$conn = new mysqli('localhost','root','','happycost');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

    $username = $_POST['username'];
    $password= $_POST['password'];
    $email = $_POST['email'];

$sql = "INSERT INTO `member`(`username`,`email`,`password`)
         VALUES('$username','$email','$password')";
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