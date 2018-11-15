<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$result = pg_query($conn, "select 
(select count(*) from tb_reportes where valor = 1 ) as uno,
(select count(*) from tb_reportes where valor = 2 ) as dos,
(select count(*) from tb_reportes where valor = 3 ) as tres,
(select count(*) from tb_reportes where valor = 4 ) as cuatro,
(select count(*) from tb_reportes where valor = 5 ) as cinco");

$rows = pg_fetch_assoc($result);

$json_response = json_encode($rows);

echo $json_response;
?>