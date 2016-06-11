$(document).ready(function() {
	getWeather();
	setInterval(getWeather, 10 * 60 * 1000);
});

function getWeather() {
	$.simpleWeather({
		location: 'Rowlands Castle',
		unit: 'c',
		success: function(weather) {
			html = '<h2><i class="wtr icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
			html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
			html += '<li class="currently">' + weather.currently + '</li>';
			html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul>';
			html += '<div class="forecast">';
			for(var i = 0; i < /*weather.forecast.length*/ 6; i++) {
				html += '<div><p><span class="day">' + weather.forecast[i].day + '</span><i class="wtr icon-' + weather.forecast[i].code + '"></i><span class="temp">' + weather.forecast[i].high + '</span></p></div>';
			}
			html += '</div>';
			$("#weather").html(html);
		},
		error: function(error) {
			console.log("error");
			$("#weather").html('<p>' + error + '</p>');
		}
	});
}
