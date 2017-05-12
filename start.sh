#!/bin/bash
echo "Magic Mirror Project by Rory Claasen - (MIT 2016-2017)"
echo "Update & Start Script"

git fetch --all
if [ $? -eq 0 ]; then
    git reset --hard HEAD
    git pull
else
    echo "Git repository MAY not be up to date"
fi

if gem list jekyll -i; then
    jekyll build > /dev/null
    if [ $? -eq 0 ]; then
        echo "Jekyll build passed. Continuing to launch display"
        DISPLAY=:0 chromium-browser --incognito --kiosk http://localhost:4000 & disown
        jekyll serve & disown
    else
        echo "Jekyll build failed!"
        exit 1
    fi
else
    echo "Jekyll was not found to be installed on this system"
    exit 1
fi
