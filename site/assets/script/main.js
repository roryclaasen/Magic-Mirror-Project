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

   function moduleUpdate() {
      var lastupdate = getUrlParameter('lastupdate');
      // console.log(lastupdate);
      if (lastupdate == 'false' || lastupdate == 'false/') $('#update').hide();
      $('#update > span').html((new Date()).toUTCString());
      if (hostReachable('roryclaasen.me')) {
         updateModules(true);
         setInterval(moduleUpdate, 30 * 60 * 1000);
      } else {
         updateModules(false);
         setInterval(moduleUpdate, 60 * 1000);
      }
   }
   startTime();
   moduleUpdate();
});
