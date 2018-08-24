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

$query = "SELECT * FROM tb_local";
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