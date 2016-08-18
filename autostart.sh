#!/bin/bash
cd /home/pi/git/mirror/
git pull
lxterminal -e ./startserver.sh

# TODO make program start a browser in fullscreen
exit 0