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
            escuela: {
              label: 'E'
            },
            local: {
              label: 'L'
            }
          };

      var taxiData = [];
        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
        	
        	<?php        					
               	 echo 'center: new google.maps.LatLng('.$_GET["lat"].','.$_GET["lng"].'),zoom: 15';        	
               	?>     
    
        });
        

        heatmap = new google.maps.visualization.HeatmapLayer({
            data: taxiData,
            map: map
        });
        
        var infoWindow = new google.maps.InfoWindow;

       // heatmap.set('radius', heatmap.get('radius') ? null : 20);
          // Change this depending on the name of your PHP or XML file
          <?php  
          echo'downloadUrl("'.urldecode($_GET["APIURL"]).'GoogleMaps/local.php?escuela='.$_GET["escuela"].'", function(data) {'
              ?> 
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            Array.prototype.forEach.call(markers, function(markerElem) {
              var name = markerElem.getAttribute('name');
              var address = markerElem.getAttribute('address');
              var type = markerElem.getAttribute('type');
              var point = new google.maps.LatLng(
                  parseFloat(markerElem.getAttribute('lat')),
                  parseFloat(markerElem.getAttribute('lng')));

              var infowincontent = document.createElement('div');
              var strong = document.createElement('strong');
              strong.textContent = name
              infowincontent.appendChild(strong);
              infowincontent.appendChild(document.createElement('br'));

              var text = document.createElement('text');
              text.textContent = address
              infowincontent.appendChild(text);
              var icon = customLabel[type] || {};
              var marker = new google.maps.Marker({
                map: map,
                position: point,
                label: icon.label
              });
              marker.addListener('click', function() {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
              });
            });
          });
          
          <?php  
         echo 'downloadUrl("'.urldecode($_GET["APIURL"]).'GoogleMaps/heatmap.php", function(data) {'
          ?> 
              var xml = data.responseXML;
              var markers = xml.documentElement.getElementsByTagName('marker');
              Array.prototype.forEach.call(markers, function(markerElem) {
                taxiData.push(new google.maps.LatLng(markerElem.getAttribute('lat'), markerElem.getAttribute('lng')));
                
              });
              heatmap.set('radius', heatmap.get('radius') ? null : 100);                    
           });

            
        }
        
        function zoomChanged () {
            map.addListener('zoom_changed', function() {
          	  heatmap.set('radius', heatmap.get('radius') ? null : map.getZoom());
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
    <script 
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYMuTOSiSMRFNNG_oLy37wljUsK0AHhb8&libraries=visualization&callback=initMap">
    </script>
  </body>
</html>