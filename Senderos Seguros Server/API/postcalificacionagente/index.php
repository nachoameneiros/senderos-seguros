<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idagente = $request->id;
$idalumno = $request->idalumno;

$result = pg_fetch_assoc(pg_query($conn, " update tb_alertas set estado = false where idagente = ".$idagente." and idalumno = ".$idalumno));

$response->resultQuery = $result['resultquery'];

$json_response = json_encode($response);

echo $json_response;
?>