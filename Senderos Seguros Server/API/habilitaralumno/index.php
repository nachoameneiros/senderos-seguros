<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$id = $request->id;

$query = "UPDATE tb_alumnos set lockeado=not lockeado WHERE ID = ".$id;
pg_query($conn, $query);

$response->resultQuery = "OK";

$json_response = json_encode($response);

echo $json_response;
?>