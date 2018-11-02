<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$colegio = $request->colegio;
$idagente = $request->idagente;

$result = pg_query($conn, "update tb_agente set idcolegio = ".$colegio." where id = ".$idagente);

$response->resultQuery = "OK";
$response->queryUsed = "update tb_agente set idcolegio = ".$colegio." where id = ".$idagente;

$json_response = json_encode($response);

echo $json_response;
?>