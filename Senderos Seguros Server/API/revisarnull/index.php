<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idalumno = $request->idalumno;
$json_response = "";

$result = pg_fetch_assoc(pg_query($conn, "Select case when idagente is null then 'NOHAY' else 'SIHAY' end as agente from vw_tb_alertas where idalumno = ".$idalumno));

$json_response = json_encode($result);

echo $json_response;
?>