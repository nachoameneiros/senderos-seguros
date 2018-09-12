<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idalumno = $request->idalumno;
$lat = $request->lat;
$lng = $request->lng;

$result = pg_fetch_assoc(pg_query($conn, "select insert_alerta as resultquery from insert_alerta(".$idalumno.",".$lat." , ".$lng.")"));

$response->resultQuery = $result['resultquery'];

$json_response = json_encode($response);

echo $json_response;
?>