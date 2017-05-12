#!/bin/bash
echo "Magic Mirror Project by Rory Claasen - (MIT 2016-2017)"
echo "Install/Update/Start Script"
echo "Updating repository"
# TODO: Test if the mirror is already running, if so stop it
git fetch --all
if [ $? -eq 0 ]; then
    git reset --hard HEAD
    git pull
else
    echo "Git repository MAY not be up to date"
fi
# git log --name-status HEAD^..HEAD

yes | sudo apt-get x11-xserver-utils unclutter

echo "@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
#@xscreensaver -no-splash
@point-rpi
@xset s off
@xset -dpms
@xset s noblank" > ~/.config/lxsession/LXDE-pi/autostart

echo "lxterminal --command \"$PWD/install.sh\"" >> ~/.config/lxsession/LXDE-pi/autostart

echo "Making sure that Ruby and Jekyll are installed on this system"
yes | sudo apt-get install rubygems
sudo gem install jekyll

if gem list jekyll -i; then
    jekyll build > /dev/null
    if [ $? -eq 0 ]; then
        echo "Jekyll build passed. Continuing to launch display"
        DISPLAY=:0 chromium-browser --incognito --kiosk http://localhost:4000 & #now in background
        disown
        jekyll serve & disown
    else
        echo "Jekyll build failed!"
        exit 1
    fi
else
    echo "Jekyll was not found to be installed on this system"
    exit 1
fi
