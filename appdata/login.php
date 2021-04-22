<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');

$username = $_POST['username'];
$password = $_POST['password'];


$sql = "SELECT * FROM `member`
	WHERE `username` = '".$username."' AND `password` = '".$password."'";

$result = mysqli_query($con,$sql);   
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $sql = "UPDATE  `login` SET `check_`='1' WHERE `id` = '1'" ;
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
        $check_do = $row['user_id']; 
    }
}
if( $check_do != null){
    $sql = "UPDATE  `login` SET `check_`='$check_do' WHERE `id` = '1'" ;
    $result = mysqli_query($con,$sql); 

}


echo($check_do);
echo json_encode($data); 
echo mysqli_error($con); 

?>