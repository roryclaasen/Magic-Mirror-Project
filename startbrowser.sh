#!/bin/bash
echo -----------------------------
echo ----- Browser  Starting -----
echo -----------------------------
sudo -u /usr/bin/chromium --kiosk --ignore-certificate-errors --disable-restore-session-state "http://0.0.0.0:8000" &
sleep 30s;
xte "key F11" -x:0
xte "key F5" -x:0 # Just in case
