# Magic Mirror Project

> A simple but personal Magic Mirror display

This project is my attempt at a *personal* Magic Mirror.

# Installation

```shell
# Clone the repository
git clone https://github.com/GOGO98901/Magic-Mirror-Project.git mirror

# Set the current directory to be the
cd mirror

# Run the mirror installation
sh install.sh
```

After the mirror has been installed the [config](#config) can be changed.

# Config

All config can be found in the [Jekyll config](_config.yml) file. However some config should be kept private and not shared, see [private config](#Private-Config).

Example conifg ([my config](config.yml))

```yml
# Title of the webpage
title: Magic Mirror

# Jekyll description
description: A Mirror Display

# Source directory, do not change unless moving source out of the public folder
source: "public"

# Author of the mirror
author: Rory Claasen

# Author of the mirror
author_url: "http://roryclaasen.me"

# Compress theme to reduce webpage load
compress_html:
  comments: ["<!-- ", " -->"]
  clippings: all
  startings: [html, head, body]

# Sass controller
sass:
   sass_dir: assets/style
   style: :compressed

# Mirror Module settings
module:

    # Weather Settings
    weather:
        visible: true

        # Location of latitude and Longitude of where forecast should be set
        latitude: "50.892206"
        longitude: "-0.957955"

    # Clock Settings
    clock:
        visible: true

    # Calendar Settings
    calender:
        visible: true

        # Number of events that should be loaded (Not necessarily visible)
        maxEvents: 9
```

## Private Config

A file called `_private_config.yml` needs to be created for the weather widget to work.

### Weather

#### API key

The weather widget uses [DarkSky](http://darksky.net), for the connections to be made an [api key](https://darksky.net/dev/) is required. This key SHOULD not be shared under any circumstance and should be put in the [private config](#Private-Config) file.

### Example

```yml
# Private Mirror Module settings
module:

    # Weather Settings
    weather:
        # DarkSky API key
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

The frame I used was build from two frames bought from amazon. I can't remember which one it was but it doesn't really matter what you use as long as the mirror fits.

## Peripherals

- USB Hub

- [Tontec 150Mbps USB Wifi Dongle Adapter for Raspberry Pi](https://www.amazon.co.uk/Tontec-150Mbps-Adapter-Raspberry-Windows/dp/B010AKMF3Y/)

- Mouse and keyboard

	These will be plugged in when I need to. They are not essential when the mirror is working
