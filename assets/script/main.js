function hostReachable() {
  // Handle IE and more capable browsers
  var xhr = new ( window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
  var status;

  // Open new request as a HEAD to the root hostname with a random param to bust the cache
  xhr.open( "HEAD", "//" + window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );

  // Issue request and handle response
  try {
    xhr.send();
    return ( xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 );
  } catch (error) {
    return false;
  }

}
function doConnectionCheck() {
	var connection = '.connection';
	var forecast = '.forecast';
	var calendar = '.calendar';
	console.log(navigator.onLine);
	if (navigator.onLine) {
		$(connection).hide();
		$(forecast).show();
		$(calendar).show();
		return false;
	} else {
		$(connection).show();
		$(forecast).hide();
		$(calendar).hide();
		return true;
	}
}
