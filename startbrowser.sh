#!/bin/bash
sudo -u pi epiphany-browser -a --profile ~/.config http://0.0.0.0:8000 --display=:0 &
sleep 30s;
xte "key F11" -x:0
xte "key F5" -x:0 # Just in case
