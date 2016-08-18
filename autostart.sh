#!/bin/bash

cd /home/pi/git/mirror/
git pull
lxterminal -e ./startserver.sh

sleep 5
sudo -u pi epiphany-browser -a --profile ~/.config http://localhost:8000 &
xte 'sleep 15' 'key F11' -x:0
exit 0
