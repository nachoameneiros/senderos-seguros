<!DOCTYPE html >
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <title>Google Maps</title>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>

  <body>
    <div id="map"></div>

    <script>
      var customLabel = {
        restaurant: {
          label: 'R'
        },
        bar: {
          label: 'B'
        }
      };

      var taxiData = [];
        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
        	
        	<?php        					
               	 echo 'center: new google.maps.LatLng('.$_GET["lat"].','.$_GET["lng"].'),zoom: 15';        	
            ?>     
    
        });
        

        var infoWindow = new google.maps.InfoWindow;

        <?php        					
              	echo  'var point = new google.maps.LatLng(parseFloat('.$_GET["lat_alumno"].'),parseFloat('.$_GET["lng_alumno"].'));'    	
          ?>   
              	 var marker = new google.maps.Marker({
                     map: map,
                     position: point
                   });     
          
        }

        
        function getPoints() {
            return [
              new google.maps.LatLng(-34.59122497, -58.40407397)
            ];
          }


      function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }

      function doNothing() {}
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYMuTOSiSMRFNNG_oLy37wljUsK0AHhb8&libraries=visualization&callback=initMap">
    </script>
  </body>
</html>