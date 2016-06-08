var time = "time";
var year = "year";
var weekday = "weekday";
var day = "day";
var month = "month";

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function doTime(today) {
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById(time).innerHTML = h + ":" + m + ":" + s;
}

function doDate(today) {
	document.getElementById(day).innerHTML = checkTime(today.getDate());
	document.getElementById(weekday).innerHTML = weekNames[today.getDay()];
	document.getElementById(month).innerHTML = monthNames[today.getMonth()];
	document.getElementById(year).innerHTML = today.getFullYear();
}

function startTime() {
	var today = new Date();
	doTime(today);
	doDate(today);
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}
