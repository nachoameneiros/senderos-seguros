<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idagente = $request->idagente;
$json_response = "";

$result = pg_fetch_assoc(pg_query($conn, "select id, idalumno , lat , lng  from tb_alertas where idagente=".$idagente." and fecha > NOW() - INTERVAL '5 minutes'"));

$json_response = json_encode($result);

echo $json_response;
?>