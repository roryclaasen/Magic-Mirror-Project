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

var getUrlParameter = function getUrlParameter(sParam) {
   var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'), sParameterName, i;
   for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
         return sParameterName[1] === undefined ? true : sParameterName[1];
      }
   }
};

$(document).ready(function() {
   function updateModules(visible) {
      var lastupdate = getUrlParameter('lastupdate');
      console.log("New updte " + lastupdate);
      if (lastupdate == 'false' || lastupdate == 'false/') $('#update').hide();
      $('#update > span').html((new Date()).toUTCString());

      var connection = '#connection';
      var modules = '#modules';
      if (visible) {
         getWeather();
         checkAuth();
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

   var connected = true;
   var updated = false;

   function mainLoop() {
      var today = new Date();
      updateTime(today);
      if (!connected) {
         if (today.getSeconds() == 0) {
            connected = hostReachable('roryclaasen.me');
            updateModules(connected);
         }
      } else {
         if (today.getMinutes() == 0 || today.getMinutes() == 30) {
            if (!updated) {
               updated = true;
               connected = hostReachable('roryclaasen.me');
               if (connected) {
                  updateModules(true);
               }
            }
         } else updated = false;
      }
      setTimeout(mainLoop, 500);
   }

   function start() {
      connected = hostReachable('roryclaasen.me');
      updateTime(new Date());
      updateModules(connected);
      mainLoop();
   }
});
