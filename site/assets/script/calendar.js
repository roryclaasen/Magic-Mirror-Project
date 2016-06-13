var CLIENT_ID = '227617601741-e4ed1r83v5cpheaakcn411gk1h5t0gam.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

function checkAuth() {
	gapi.auth.authorize({
		'client_id': CLIENT_ID,
		'scope': SCOPES.join(' '),
		'immediate': true
	}, handleAuthResult);
}

function handleAuthResult(authResult) {
	var authorizeDiv = document.getElementById('authorize-div');
	if (authResult && !authResult.error) {
		authorizeDiv.style.display = 'none';
		loadCalendarApi();
	} else {
		authorizeDiv.style.display = 'inline';
	}
}

function handleAuthClick(event) {
	gapi.auth.authorize({client_id: CLIENT_ID, scope: SCOPES, immediate: false
	}, handleAuthResult);
	return false;
}

function loadCalendarApi() {
	gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

function listUpcomingEvents() {
	$('#events').html('<span id="title">Loading Calendar</span>');
	var request = gapi.client.calendar.events.list({
		'calendarId': 'primary',
		'timeMin': (new Date()).toISOString(),
		'showDeleted': false,
		'singleEvents': true,
		'maxResults': 9,
		'orderBy': 'startTime'
	});

	request.execute(function(resp) {
		var events = resp.items;
		$('#title').html('Upcoming events');

		if (events.length > 0) {
			for (i = 0; i < events.length; i++) {
				var event = events[i];
				var when = event.start.dateTime;
				if (!when) {
					when = event.start;
				}
				addEvent(event, when, !(((when+"").indexOf("T") > -1)));
			}
		} else {
			$('#title').html('No upcoming events found');
		}
	});
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

function addEvent(calendarEvent, date, allday) {
	var content = calendarEvent.summary;

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date();
	var secondDate = new Date(date);
	if (!(secondDate instanceof Date) || secondDate == "Invalid Date") {
		var parts = date.date.split("-");
		secondDate = new Date(parts[0], parts[1] - 1, parts[2]);
	}
	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
	var contentDays = diffDays + " days to go";

	if (diffDays == 1) contentDays = diffDays + " day to go";
	if (allday) {
		if (firstDate.getDate() == secondDate.getDate() && firstDate.getMonth() == secondDate.getMonth()) {
			contentDays = "today";
		}
	}
	if (diffDays == 0) {
		if (allday) contentDays = "today";
		else contentDays = "today at " + checkTime(secondDate.getHours()) + ":" +  checkTime(secondDate.getMinutes());
	}

	$('#events').append('<span class="event"><span class="summary">' + content + '</span><span class="days">' + contentDays + '</span></span>');
}
