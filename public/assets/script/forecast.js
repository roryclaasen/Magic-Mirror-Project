---
# this ensures Jekyll reads the file and can uses liquid
---
var apiKey = "{{ site.module.weather.key }}";
var lat = "{{ site.module.weather.latitude }}";
var long = "{{ site.module.weather.longitude }}"
var units = "uk"
var darksky = "https://api.darksky.net/forecast/" + apiKey + "/" + lat + "," + long + "?units=" + units + "&extend=minutely,hourly";
function getWeather() {
	$.ajax({
        url: darksky,
    	// dataType: 'application/json',
  		dataType: "jsonp",
		type: "GET",
        error: function(data) {
        	// TODO error
			console.log(data);
        },
        success: function(data) {
			var currently = data.currently;
		var week = data.daily;

			var todayDate = new Date(currently.time * 1000);
			$('#weather .current .icon').each(function() {$(this).hide();});
			$('#weather .current .icon.' + getCssIconName(currently.icon)).show();
			$('#weather .current .temp').html(Math.round(currently.temperature) + "&deg;C");

			// $('#weather .week .summary').html(week.summary);
			$('#weather .week .look').html('');
			$.each(week.data, function(index, day) {
				var date = new Date(day.time * 1000);
				if (date.getDate() == todayDate.getDate()) return;
				var weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var dayWeek = weekNames[date.getDay()];
				$('#weather .week .look').append('<div class="day ' + dayWeek + '"></div>');
				var current = $('#weather .week .look .day.' + dayWeek);

				var icon = $('#weather .current .icon.' + getCssIconName(day.icon)).clone();
				icon.show();
				current.append('<span class="name">' + dayWeek + '</span>')
				current.append(icon);
				current.append('<span class="temp max">' + Math.round(day.temperatureMax) + '&deg;C</span>');
				current.append('<span class="temp min">' + Math.round(day.temperatureMin) + '&deg;C</span>');
			});
    	}
	});
}

function getCssIconName(icon) {
	var cssName;
	switch (icon) {
		case 'rain': {
			cssName = 'rainy';
			break;
		}
		case 'snow': {
			cssName = 'snowy';
			break;
		}
		case 'fog': {
			cssName = 'foggy';
			break;
		}
		default: {
			cssName = icon;
			break;
		}
	}
	return cssName;
}
