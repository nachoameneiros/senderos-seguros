<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idagente = $request->idagente;
$idalumno = $request->idalumno;
$motivo = $request->motivo;
$asistencia = $request->asistencia;
$valor = $request->valor;
$json_response = "";

$result = pg_fetch_assoc(pg_query($conn, "select 'ALREADY EXISTS' as resultQuery from tb_reportes where idagente='".$idagente."' and idalumno='".$idalumno."' and fecha = current_date" ));

if ($result['resultquery'] == "ALREADY EXISTS" ) {
	$response->resultQuery = $result['resultquery'];
	$json_response = json_encode($response);
} else {
    $query = "INSERT INTO tb_reportes(idagente, idalumno,  motivo, asistencia , fecha , valor) VALUES ('".$idagente."','".$idalumno."','".$motivo."','".$asistencia."', current_date , ".$valor.")";
	pg_query($conn, $query);
	$response->resultQuery = "OK";
	$json_response = json_encode($response);
}

echo $json_response;

?>