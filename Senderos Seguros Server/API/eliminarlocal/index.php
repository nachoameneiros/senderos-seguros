<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$id = $request->id;


$query = "delete from tb_local where id =".$id;
pg_query($conn, $query);
$response->resultQuery = "OK";
$response->returnquery = $query;
$json_response = json_encode($response);

echo $json_response;
?>