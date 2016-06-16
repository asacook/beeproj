function loadMap()
{
	//Give JS a handle on the map container, references the id of the map container
	var mapDiv = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.9, lng: -105.2},
      scrollwheel: true,
      zoom: 8
    });

	//Coordinates stored in a 10x10 two dimensional array
	var coordArray = new Array(10);
    
	//Iterate through 2D array creating LatLng objects
	for (var i = 0; i < 10; i++) {
	  //This shpeel puts localised random coordinates in the 10x10 array.
	  coordArray[i] = new Array(2);
	  coordArray[i][0] = Math.floor(Math.random()*(40-35)+35);
	  coordArray[i][1] = Math.floor(Math.random()*(-100+120)-120);
    }
	
	//Draw the affected area based on the coordArray
	for (var i = 0; i < 10; i++) {
		drawAffectedArea(coordArray[i][0],coordArray[i][1],mapDiv) 
	}
	
};

function drawAffectedArea(lat,lng,map)
{
	//Simple rectangle example from google...
    var rectangle = new google.maps.Rectangle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      bounds: {
        north: lat+0.5,
        south: lat-0.5,
        east: lng+0.5,
        west: lng-0.5
      }
    });
}