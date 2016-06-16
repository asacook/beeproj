function loadMap()
{
	//Give JS a handle on the map container, references the id of the map container
	var mapDiv = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.9, lng: -105.2},
      scrollwheel: false,
      zoom: 8
    });
	
	//Catch browser incompatibility.
	
	//Set default map location ((Lat, Lng), Zoom).
	var coords = new google.maps.LatLng(39.9, -105.2);
		
    var rectangle = new google.maps.Rectangle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: mapDiv,
      bounds: {
        north: 39.8,
        south: 39.9,
        east: -105.1,
        west: -105.2
      }
    });
};