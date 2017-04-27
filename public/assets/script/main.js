---
# this ensures Jekyll reads the file and can uses liquid
---
function hostReachable(site) {
    var xhr = new (window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");
    var status;
    xhr.open( "HEAD", "//" + site + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false);
    try {
        xhr.send();
        return (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304));
    } catch (error) {
        return false;
    }
}

Element.prototype.remove = function() {
   this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'), sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function updateModules(visible) {
    var lastupdate = getUrlParameter('lastupdate');
    if (lastupdate != undefined) {
        console.log("New update " + lastupdate);
        if (lastupdate == 'false' || lastupdate == 'false/') $('#update').hide();
    } else console.log("No last update arg... showing by deafult");
    $('#update > span').html((new Date()).toUTCString());

    var connection = '#connection';
    var modules = '#modules';
    if (visible) {
        {% if site.module.weather.visible %}getWeather();{% endif %}
        {% if site.module.calender.visible %}checkAuth();{% endif %}
        $(connection).hide();
        $(modules).show();
        $(modules).children('div').each(function () {
            $(this).show();
        });
    } else {
        $(connection).show();
        $(modules).children('div').each(function () {
            if ($(this).hasClass('module') && !$(this).hasClass('dateTime')) {
                $(this).hide();
            }
        });
    }
}

var googleLoaded = false;
var connected = true;
var updated = false;

function mainLoop() {
    var today = new Date();
    {% if site.module.time.visible %}updateTime(today);{% endif %}
    if (!googleLoaded) {
        if (today.getSeconds() == 0) {
            loadGoogleScript();
        }
    }
    if (!connected) {
        if (today.getSeconds() == 0) {
            connected = hostReachable('www.googleapis.com');
            updateModules(connected);
        }
    } else {
        if (today.getMinutes() == 0 || today.getMinutes() == 30) {
            if (!updated) {
                updated = true;
                connected = hostReachable('www.googleapis.com');
                if (connected) {
                    updateModules(true);
                }
            }
        } else updated = false;
    }
    setTimeout(mainLoop, 500);
}

function start() {
    connected = hostReachable('www.googleapis.com');
    {% if site.module.clock.visible %}updateTime(new Date());{% endif %}
    updateModules(connected);
    mainLoop();
}

function loadGoogleScript() {
    {% if site.module.calendar.visible %}
    var scriptId = "googlescript";
    var scriptTag = document.getElementById(scriptId);
    if (scriptTag != undefined) scriptTag.remove();

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = 'https://apis.google.com/js/client.js?onload=start';
    script.onload = callbackStart;
    script.onerror = callbackFail;
    script.id = scriptId;
    document.body.appendChild(script);
    function callbackStart(e) {
        console.log("Starting with onload callback");
        googleLoaded = true;
    }
    function callbackFail(e) {
    console.log("Starting with fail callback");
    googleLoaded = false;
        start();
    }
    {% else %}
    start();
    {% endif %}
}
