<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$nombre = $request->nombre;
$apellido = $request->apellido;
$email = $request->email;
$password = $request->password;
$colegio = $request->colegio;
$dni = $request->dni;
$imagen = $request->imagen;
$json_response = "";

$result = pg_fetch_assoc(pg_query($conn, "select 'ALREADY EXISTS' as resultQuery from tb_agente where email='".$email."'"));

if ($result['resultquery'] == "ALREADY EXISTS" ) {
	$response->resultQuery = $result['resultquery'];
	$json_response = json_encode($response);
} else {
	$query = "INSERT INTO tb_agente(nombre, apellido, password, email, idcolegio, dni, lockeado , imagen) VALUES ('".$nombre."','".$apellido."','".$password."','".$email."','".$colegio."','".$dni."' , true ,'".$imagen."' )";
	pg_query($conn, $query);
	$response->resultQuery = "OK";
	$json_response = json_encode($response);
}

echo $json_response;
?>