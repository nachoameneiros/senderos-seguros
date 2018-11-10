<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$result = pg_query($conn, "select (select count(*) from tb_reportes_asistencia where motivo = '1' ) as countrobo ,
 (select count(*) from tb_reportes_asistencia where motivo = '2' ) as countaccidente,
 (select count(*) from tb_reportes_asistencia where motivo = '3' ) as countextravio ");

$rows = pg_fetch_assoc($result);

$json_response = json_encode($rows);

echo $json_response;
?>