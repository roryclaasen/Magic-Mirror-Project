#!/bin/bash
init() {
	cd /home/pi/git/mirror/
	git pull
}
server() {
	lxterminal -e ./startserver.sh
}
display() {
	sleep 5
	sudo -u pi epiphany-browser -a --profile ~/.config http://localhost:8000 &
	sleep 15s;
	xte "key F11" -x:0
}
init
server &
display
exit 0
