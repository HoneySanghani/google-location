let map;

function initMap(lat,lon) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lon},
    zoom: 8,
  });
}


var displayWeather=function(lat,lon){
  var weatherApi="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&APPID=a1ebf05a20a8fd712b4baf5c960acf21";
  
}
var locate=function(){
  if ("geolocation" in navigator){
		navigator.geolocation.getCurrentPosition(function(position){ 
			var currentLatitude = position.coords.latitude;
			var currentLongitude = position.coords.longitude;
      initMap(currentLatitude,currentLongitude);
			// var infoWindowHTML = "Latitude: " + currentLatitude + "<br>Longitude: " + currentLongitude;
			// var infoWindow = new google.maps.InfoWindow({map: map, content: infoWindowHTML});
			// var currentLocation = { lat: currentLatitude, lng: currentLongitude };
			// infoWindow.setPosition(currentLocation);
			// document.getElementById("btnAction").style.display = 'none';
		});
	}
}