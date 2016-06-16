var map;

function loadMap()
{
	//Give JS a handle on the map container, references the id of the map container
	var mapDiv = document.getElementById('map');
	
	//Catch browser incompatibility.
	if (!GBrowserIsCompatible())
	{
		mapDiv.innerHTML = 'Sorry your browser is not compatible with google maps.';
	}
	else
	{
		//Create map object
		map = new GMap2(mapDiv);
		//Set default map location ((Lat, Lng), Zoom).
		map.setCenter(new GLatLng(39.9, -105.2), 10);
	}
};