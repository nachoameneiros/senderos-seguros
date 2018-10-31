<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idalumno = $request->idalumno;

$query = "delete from tb_alertas where idalumno = ".$idalumno." and fecha > (now() - '00:05:00'::interval)";

pg_query($conn, $query);

$response->resultQuery = "OK";

$json_response = json_encode($response);

echo $json_response;
?>