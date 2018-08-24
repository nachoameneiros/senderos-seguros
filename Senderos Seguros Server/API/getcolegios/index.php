<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$result = pg_query($conn, "select id , nombre from tb_escuela where visible = 1");

$rows = pg_fetch_all($result);

$json_response = json_encode($rows);

echo $json_response;
?>