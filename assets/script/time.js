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

function getTimeReady(i) {
	var time = "" + checkTime(i) + "";
	return [time.substr(0, 1), time.substr(1, 2)];
}

function doTime(today) {
	var h = today.getHours();
	$(time + "-clock").html("am");
	if (h > 12 ){
		$(time + "-clock").html("pm");
		// h -= 12;
	}
	h = getTimeReady(h);
	var m = getTimeReady(today.getMinutes());
	var s = getTimeReady(today.getSeconds());
	var hour = '<span class="hour">' + h[0] + '</span><span class="hour">' + h[1] + '</span>';
	var minute = '<span class="minute">' + m[0] + '</span><span class="minute">' + m[1] + '</span>';
	var second = '<span class="second">' + s[0] + '</span><span class="second">' + s[1] + '</span>';
	$(time).html(hour + '<span class="colon"></span>' + minute + '<span class="colon"></span>' + second);
}

function doDate(today) {
	$(day).html(checkTime(today.getDate()));
	$(weekday).html(weekNames[today.getDay()]);
	$(month).html(monthNames[today.getMonth()]);
	$(year).html(today.getFullYear());
}

function startTime() {
	var today = new Date();
	doDate(today);
	doTime(today);
	var t = setTimeout(startTime, 500);
}
