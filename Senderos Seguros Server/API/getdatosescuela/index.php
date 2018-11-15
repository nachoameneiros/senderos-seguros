<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idcolegio = $request->idcolegio;

$result = pg_fetch_assoc(pg_query($conn, "select lat , lng from tb_escuela  where id = ".$idcolegio));

$json_response = json_encode($result);

echo $json_response;
?>