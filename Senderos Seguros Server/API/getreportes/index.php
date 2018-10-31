<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

include_once("../../db_connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idcolegio = $request->idcolegio;

$result = pg_query($conn, "select (select nombre||' '||apellido from tb_agente where id = tb_reportes.idagente) as agente,
(select nombre||' '||apellido from tb_alumnos where id = tb_reportes.idalumno) as alumno ,
fecha,
motivo
 from tb_reportes where idagente in ( select id from tb_agente where idcolegio =  ".$idcolegio. " ) ");

$rows = pg_fetch_all($result);

$json_response = json_encode($rows);

echo $json_response;
?>