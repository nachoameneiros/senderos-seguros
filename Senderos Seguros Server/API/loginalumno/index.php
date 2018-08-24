<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$password = $request->password;

$result = pg_query($conn, "select 'OK' as res from tb_alumnos where email='".$email."' and password='".$password."'");

$rows = pg_fetch_assoc($result);

$response->userData = $rows;

$json_response = json_encode($response);

echo $json_response;
?>