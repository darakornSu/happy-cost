<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include('config.ini.php');
$getitem = $_POST['item'];
$datenow = date("Y-m-d");
$sql2 = "SELECT * FROM `login` WHERE `check_` != '0' ";
    $result = mysqli_query($con,$sql2);    
    $numrow = mysqli_num_rows($result);
        if($numrow > 0 ){
            $data1 = array();
            while($row = mysqli_fetch_assoc($result)){
                  $data1[] = $row;
                  $user_id =$row['check_'];
             }
        }
$sql = "SELECT * FROM `total_cost` WHERE `total_cost_id` = (
    SELECT MAX(`total_cost_id`) FROM `total_cost`  WHERE `user_id` = '$user_id')";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
        $score = $row["total_expend"]*100/$row["total_revenue"];
    }
}

if ($score <= 60) {
    $emoji = "thumbs-up";
    $scoretext = "ดีมาก";
} elseif ($score <=70) {
    $emoji = "happy";
    $scoretext = "ดี";
} elseif ($score <=80) {
    $emoji = "sad";
    $scoretext = "พอใช้";
}else {
    $emoji = "thumbs-down";
    $scoretext = "ควรปรับปรุง";
}

$sql3 = "INSERT INTO `behavior`(`score`,`score_text`,`emoji`,`user_id`,`date`)
         VALUES('$score','$scoretext','$emoji','$user_id','$datenow')";
$result = mysqli_query($con,$sql3);                    
 
echo($scoretext);
echo json_encode($data); 
echo mysqli_error($con); 

?>