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

/**
* Print the summary and start datetime/date of the next ten events in
* the authorized user's calendar. If no events are found an
* appropriate message is printed.
*/
function listUpcomingEvents() {
	var request = gapi.client.calendar.events.list({
		'calendarId': 'primary',
		'timeMin': (new Date()).toISOString(),
		'showDeleted': false,
		'singleEvents': true,
		'maxResults': 10,
		'orderBy': 'startTime'
	});

	request.execute(function(resp) {
		var events = resp.items;
		setTitle('Upcoming events');

		if (events.length > 0) {
			for (i = 0; i < events.length; i++) {
				var event = events[i];
				var when = event.start.dateTime;
				if (!when) {
					when = event.start.date;
				}
				appendPre(event.summary + ' (' + when + ')')
			}
		} else {
			setTitle('No upcoming events found');
		}

	});
}
function setTitle(message) {
	document.getElementById('events').innerHTML = '<span class="title">' + message + '</span><br>';
}

function appendPre(message) {
	var events = document.getElementById('events');
	var textContent = document.createTextNode(message + '\n');
	events.appendChild(textContent);
}
