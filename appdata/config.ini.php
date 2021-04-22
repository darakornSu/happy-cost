<?php
$con = new mysqli('localhost','root','','happycost');
if ($con->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

?> 