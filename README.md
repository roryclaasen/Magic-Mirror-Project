# Magic Mirror Project

> A simple but personal Magic Mirror display

This project is my attempt at a *personal* Magic Mirror.

# My setup

### Monitor

The monitor that I am using is an old one that was lying around.
The important part is the screen size that is 1280px x 1024px

### Mirror

The mirror that I will be using will be a 2 way Acrylic mirror.
As of yet is still yet to be bought but it will most likely be bought from [Cut Plastic Sheeting](http://www.cutplasticsheeting.co.uk/mirrored-sheeting/two-way-acrylic-mirror).

### Frame

The frame I used was build from two frames bought from amazon. I can't remember which one it was but it doesn't really matter what you use.

## Peripherals

- USB Hub

- [Tontec 150Mbps USB Wifi Dongle Adapter for Raspberry Pi](https://www.amazon.co.uk/Tontec-150Mbps-Adapter-Raspberry-Windows/dp/B010AKMF3Y/)

- Mouse and keyboard

	These will be plugged in when I need to. They are not essential when the mirror is working

# Display Modules

### Time And Date

Time and date is acquired by the JavaScript reference `new Date()`. The module gest updated every half second to be slightly more actuate in the display.

The code can be found in [time.js](public/assets/script/time.js).

## Calendar

I am using the google calendar APIs, on the first time viewing the page there is a prompt to authorize this app to access google.

The code can be found in [calendar.js](public/assets/script/calendar.js).

### Weather

After experimenting with different weather APIs I have ended up using [jquery.simpleWeather](http://simpleweatherjs.com).
Simple Weather is "*a simple jQuery plugin to display current weather data for any location and doesn't get in your way*". I'm using it as it is very easy to use and it makes more sense than some of the others I tried, it also has some great examples to get stated with.

The code can be found in [forecast.js](public/assets/script/forecast.js).
