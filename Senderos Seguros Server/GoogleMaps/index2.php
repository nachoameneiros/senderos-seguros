<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style type="text/css">
html {
	height: 100%
}

body {
	height: 100%;
	margin: 0;
	padding: 0
}

#map_canvas {
	height: 100%
}
</style>
<script type="text/javascript"
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYMuTOSiSMRFNNG_oLy37wljUsK0AHhb8&libraries=visualization&callback=initMap">
      </script>
<script type="text/javascript">
        var markers = [];
        var points = [];
        var heatPoints = [];
        var map;
        var heatmap;
        var taxiData = [];
      function initialize() {
        var myCenter = new google.maps.LatLng(-27.495471, 153.012198)
        var mapOptions = {
          center: myCenter,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP  
            };

         map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        var tilesloaded=true;
        google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
            if(tilesloaded ==true){
             window.alert();
             tilesloaded=false;
            }
        });
        
        downloadUrl('http://localhost/GoogleMaps/heatmap.php', function(data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            Array.prototype.forEach.call(markers, function(markerElem) {
              taxiData.push(new google.maps.LatLng(markerElem.getAttribute('lat'), markerElem.getAttribute('lng')));
              
            });
            heatmap.set('radius', heatmap.get('radius') ? null : 100);                    
         });
        
        heatmap = new google.maps.visualization.HeatmapLayer({
                data: taxiData,
                radius : document.getElementById('map_canvas').offsetHeight / 10,
                map:map
            });
      }
     document.addPoint = function addPoint(info){
         var array = info.split(',');
         var a = array[0], b = array[1], c = array[2], d = array[3], e = array[4];
         var content = "Latitude: " + a + " ** Longitude: " + b + " ** Wind: " + c + " ** Temp: " + d + " ** Light: " + e;
         var lat = parseFloat(a);
         var longi = parseFloat(b);
         var wind = parseFloat(c);
         var temp = parseInt(d);
         var light = parseFloat(e);
         points.push({ "lat": lat, "lng": longi, "temp": temp, "light": light, "wind": wind });
         var marker = new google.maps.Marker({
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(lat, longi),
                map: map
            });
        var infowindow = new google.maps.InfoWindow({
          content: content
        }); 
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
         markers.push(marker);
     }
    document.displayHeatmap = function displayHeatmap(measurement) {
            var setHeatmap = (property => heatmap.setData(points.map(x => ({ location: new google.maps.LatLng(x.lat, x.lng), weight: x[property] }))));
            if (measurement === "none") {
                heatmap.setData([]);
            } else {
                setHeatmap(measurement);
            }
        }
     google.maps.event.addDomListener(window, 'load', initialize);
    </script>
</head>
<body>
	<div id="map_canvas" style="width: 100%; height: 100%"></div>
</body>
</html>