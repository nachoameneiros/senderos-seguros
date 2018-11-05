<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idcolegio = $request->idcolegio;

$result = pg_query($conn, "
select id , nombre ,apellido , email ,dni , lockeado ,  case when ( select sum(valor)/count(valor) 
from tb_reportes where tb_reportes.idagente = tb_agente.id ) is null then 'N/A' else ( select sum(valor)/count(valor) 
from tb_reportes where tb_reportes.idagente = tb_agente.id )::character varying end as promval ,
(select max(fecha) from tb_geo_agente where tb_geo_agente.id  = tb_agente.id) lastlogin,
 imagen from tb_agente where idcolegio = ".$idcolegio." order by id ;
");

$rows = pg_fetch_all($result);

$json_response = json_encode($rows);

echo $json_response;
?>