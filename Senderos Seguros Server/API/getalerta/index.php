<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idagente = $request->idagente;
$json_response = "";

$result = pg_fetch_assoc(pg_query($conn, "select 'ALERTA' as resultQuery from tb_alertas where idagente='".$idagente."'"));

$response->resultQuery = "ALERTA";
$json_response = json_encode($response);

echo $json_response;
?>