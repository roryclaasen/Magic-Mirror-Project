# Magic Mirror Project

> A simple but personal Magic Mirror display

This project is my attempt at a *personal* Magic Mirror.

# Config

All config can be found in the [Jekyll config](_config.yml) file. However for the weather module to work a DarkSky API key is needed.

## Private Config

A file called `_private_config.yml` needs to be created!

### Example

```yml
module:
    weather:
        key: "THISISANAPIKEY"
```

# Display Modules

### Time And Date

Time and date is acquired by the JavaScript reference `new Date()`. The module gest updated every half second to be slightly more actuate in the display.

The code can be found in [time.js](public/assets/script/time.js).

## Calendar

I am using the google calendar APIs, on the first time viewing the page there is a prompt to authorize this app to access google.

The code can be found in [calendar.js](public/assets/script/calendar.js).

### Weather

After using [jquery.simpleWeather](http://simpleweatherjs.com) for a while I decided to change to use the [DarkSky Api](https://darksky.net/dev/) as it has a great up time and is well supported.


The code can be found in [forecast.js](public/assets/script/forecast.js).

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
