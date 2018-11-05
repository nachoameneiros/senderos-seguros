<?php

//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}

include_once("../db_connect.php");

$query = "SELECT  (select name from tb_motivos where tb_motivos.id::character varying = tb_reportes_asistencia.motivo)||' - '||descripcion as name , 
 (select 'Agente : '||nombre||' '||apellido from tb_agente where tb_agente.id=tb_reportes_asistencia.idagente)||' | '||
 (select 'Alumno : '||nombre||' '||apellido from tb_alumnos where tb_alumnos.id=tb_reportes_asistencia.idalumno)||' | '||fecha as address , lat , lng , 'local' as type FROM tb_reportes_asistencia
where idagente in (select id from tb_agente where idcolegio = ".$_GET["escuela"].")";

$result = pg_query($query);
if (!$result) {
  die('Invalid query: ' . pg_error());
}

header("Content-type: text/xml");

echo '<markers>';

while ($row = @pg_fetch_assoc($result)){
  echo '<marker ';
  echo 'name="' . parseToXML($row['name']) . '" ';
  echo 'address="' . parseToXML($row['address']) . '" ';
  echo 'lat="' . $row['lat'] . '" ';
  echo 'lng="' . $row['lng'] . '" ';
  echo 'type="' . $row['type'] . '" ';
  echo '/>';
}

echo '</markers>';

?>
