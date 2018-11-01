<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$nombre = $request->nombre;
$address = $request->address;
$idcolegio = $request->idcolegio;
$lat = $request->lat;
$lng = $request->lng;


$query = "INSERT INTO public.tb_local(name, address, lat, lng, type, idescuela) VALUES ('".$nombre."','".$address."', ".$lat.",".$lng.", 'bar' , ".$idcolegio.")";
pg_query($conn, $query);
$response->resultQuery = "OK";
$json_response = json_encode($response);


echo $json_response;
?>