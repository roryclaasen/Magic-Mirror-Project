#!/bin/bash
cd /home/pi/git/mirror/
git pull
lxterminal -e ./startserver.sh
exit 0