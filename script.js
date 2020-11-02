function getCity(city){

    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){

        if(ajaxRequest.readyState == 4){
            //the request is completed, now check its status
            if(ajaxRequest.status == 200){
                //turn JSON into object
                var jsonObj = JSON.parse(ajaxRequest.responseText);
				console.log(jsonObj.weather[0].main);
                //document.write(jsonObj.main.humidity);
                document.getElementById('weatherInfo').innerHTML = "Humidity: " + JSON.stringify(jsonObj.main.humidity) + " <br>";
                document.getElementById('weatherInfo').innerHTML += "Windspeed: " + JSON.stringify(jsonObj.wind.speed) + " <br> ";
                document.getElementById('weatherInfo').innerHTML += "Temperature: " + Math.round(JSON.stringify(jsonObj.main.temp) - 273.15);
            }
        }
    }
    x = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=62ea54180fbed75ca33d1b880ccf6324';
    ajaxRequest.open('GET', x);
    ajaxRequest.send();
}

var EnterKey = document.getElementById("input");
var Click = document.getElementById("btn");



Click.addEventListener("click", function () {
  console.log(EnterKey.value);
	getCity(EnterKey.value);
} );

EnterKey.addEventListener("keypress", function() {
  sendURL(event.key);
})

function sendURL (enter) {
	if(event.key=="Enter"){
    getCity(EnterKey.value);
	}
	else {

	}
}