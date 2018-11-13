<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$json_response = "";

$result = pg_fetch_assoc(pg_query($conn, "select lockeado from tb_agente where email = '".$email."'"));

$json_response = json_encode($result);

echo $json_response;
?>