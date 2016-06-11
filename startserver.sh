#!/bin/bash
set +v
function run {
	python -m http.server 8000
	sleep
	echo "Do you want to restart?"
	select yn in "Yes" "No"; do
		case $yn in
			Yes ) make run; break;;
			No ) exit;;
		esac
	done
}
run