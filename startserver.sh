#!/bin/bash
run () {
	clear
	python -m http.server 8000
	echo "Do you want to restart?"
	select yn in "Yes" "No"; do
		case $yn in
			Yes ) run; break;;
			No ) exit;;
		esac
	done
}
run
