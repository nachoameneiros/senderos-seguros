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

$query = "
select tb_geo_agente.id , tb_geo_agente.lat , tb_geo_agente.lng 
from tb_geo_agente 
inner join tb_agente on tb_geo_agente.id = tb_agente.id 
inner join tb_escuela on tb_escuela.id = tb_agente.idcolegio
where idcolegio =".$_GET["escuela"]."
and tb_escuela.lat-tb_geo_agente.lat<0.1
and tb_escuela.lng-tb_geo_agente.lng<0.1";

$result = pg_query($query);
if (!$result) {
  die('Invalid query: ' . pg_error());
}

header("Content-type: text/xml");

echo '<markers>';

while ($row = @pg_fetch_assoc($result)){
  echo '<marker ';
  echo 'lat="' . $row['lat'] . '" ';
  echo 'lng="' . $row['lng'] . '" ';
  echo '/>';
}

echo '</markers>';

?>