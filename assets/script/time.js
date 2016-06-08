var time = "#time";
var year = "#year";
var weekday = "#weekday";
var day = "#day";
var month = "#month";

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

$(document).ready(function() {
	function doTime(today) {
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		$(time).html(h + ":" + m + ":" + s);
	}

	function doDate(today) {
		$(day).html(checkTime(today.getDate()));
		$(weekday).html(weekNames[today.getDay()]);
		$(month).html(monthNames[today.getMonth()]);
		$(year).html(today.getFullYear());
	}

	function startTime() {
		var today = new Date();
		doTime(today);
		doDate(today);
		var t = setTimeout(startTime, 500);
	}
	startTime();
});
