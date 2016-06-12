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

$(document).ready(function() {
   function updateModules(visible) {
      var connection = '#connection';
      var modules = '#modules';
      if(visible) {
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
      $('#update').html((new Date()).toUTCString() );
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
