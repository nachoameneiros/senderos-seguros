<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idalumno = $request->idalumno;
$idagente = $request->idagente;
$motivo = $request->motivo;
$descripcion = $request->descripcion;
$lat = $request->lat;
$lng = $request->lng;

$query = "INSERT INTO tb_reportes_asistencia(idalumno, idagente,  motivo, descripcion , lat ,lng , fecha ) VALUES (".$idalumno.", ".$idagente.", ".$motivo.", '".$descripcion."' , ".$lat." ,".$lng." , current_date )";

pg_query($conn, $query);

$response->resultQuery = "OK";

$json_response = json_encode($response);


echo $json_response;
?>