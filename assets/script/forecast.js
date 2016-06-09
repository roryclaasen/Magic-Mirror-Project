$(document).ready(function() {
	function update() {
		var lat = "50.9051";
		var lon = "-0.9669";
		var name = "Rowlands Castle"
		var color = "#fff";
		var font = "Ubuntu";
		$('#forecast_embed').attr('src', 'http://forecast.io/embed/#lat=' + lat + '&lon=' + lon + '&name=' + name + '&color=' + color + '&text-color=' + color + '&font=' + font + '&units=uk')
		var t = setTimeout(update, 30 * 60 * 1000);
	}
	update();
});
