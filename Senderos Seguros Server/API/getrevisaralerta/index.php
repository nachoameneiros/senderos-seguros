<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idalumno = $request->idalumno;

$result = pg_fetch_assoc(pg_query($conn, "Select idagente , imagen from vw_tb_alertas inner join tb_agente on tb_agente.id = vw_tb_alertas.idagente where idalumno = ".$idalumno." and estado = true "));

$json_response = json_encode($result);

echo $json_response;
?>