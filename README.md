# Magic Mirror Project
Over the summer I am going to make a magic mirror using the Pi zero. This repository is code that will do the visualization of the mirror

# My setup
### Monitor
The monitor that I am using is an old one that was lying around.
The important part is the screen size that is 1280px x 1024px

### Mirror
The mirror that I will be using will be a 2 way Acrylic mirror.
As of yet is still yet to be bought but it will most likely be bought from [Cut Plastic Sheeting](http://www.cutplasticsheeting.co.uk/mirrored-sheeting/two-way-acrylic-mirror).

### Frame
The frame has still yet to be decided... Well I can't decide right but it will probably be something from B&Q (pre finished) or a paint job done by myself.

## Peripherals
- USB Hub

- [Tontec 150Mbps USB Wifi Dongle Adapter for Raspberry Pi](https://www.amazon.co.uk/Tontec-150Mbps-Adapter-Raspberry-Windows/dp/B010AKMF3Y/)

- Mouse and keyboard

	These will be plugged in when I need to. They are not essential when the mirror is working

# Display Modules
### Time And Date
Time and date is acquired by the JavaScript reference `new Date()`. The module gest updated every half second to be slightly more actuate in the display.
<br>The code can be found in [time.js](site/assets/script/time.js).

## Calendar
I am using the google calendar APIs, on the first time viewing the page there is a prompt to authorise this app to access google.
<br>The code can be found in [calendar.js](site/assets/script/calendar.js).

### Weather
After experimenting with different weather APIs I have ended up using [jquery.simpleWeather](http://simpleweatherjs.com).
Simple Weather is "*a simple jQuery plugin to display current weather data for any location and doesn't get in your way*". I'm using it as it is very easy to use and it makes more sense than some of the others I tried, it also has some great examples to get stated with.
<br>The code can be found in [forecast.js](site/assets/script/forecast.js).

# Server
Because of google api authentication, the mirror MUST be hosted on a webserver to work.<br>
Only the servers listed bellow are *authorised JavaScript origins*
- `localhost:8000`

	Provided are both [batch](startserver.bat) and [shell](startserver.sh) server scripts. The only dependency for these is [python `3.*.*`](https://www.python.org/).
- `mirror.dev`

	To achive this domain I use the npm package [hotel](https://github.com/typicode/hotel#hotel--).
