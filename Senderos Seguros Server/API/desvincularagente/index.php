<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$id = $request->id;

$result = pg_query($conn, "update tb_agente set idcolegio = null , lockeado = true where id = ".$id);

$response->resultQuery = "OK";

$json_response = json_encode($response);

echo $json_response;
?>