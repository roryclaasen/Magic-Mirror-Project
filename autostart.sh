#!/bin/bash
init() {
	cd /home/pi/git/mirror/
	./updateserver.sh
}
server() {
	lxterminal -e ./startserver.sh
}
display() {
	sleep 10
	./startbrowser.sh
}
echo -----------------------------
echo  Autostart has been started 
echo -----------------------------
init
server &
display
read -p "Press [Enter] key to exit script... This will close down the browser too"
