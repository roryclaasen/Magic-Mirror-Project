#!/bin/bash
echo "Magic Mirror Project by Rory Claasen - (MIT 2016-2017)"
echo "Install Script"
echo "Updating repository"

git fetch --all
if [ $? -eq 0 ]; then
    git reset --hard HEAD
    git pull
else
    echo "Git repository MAY not be up to date"
fi

yes | sudo apt-get install x11-xserver-utils unclutter

echo "@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
#@xscreensaver -no-splash
@point-rpi
@xset s off
@xset -dpms
@xset s noblank" > ~/.config/lxsession/LXDE-pi/autostart

echo "lxterminal -e \"$PWD/start.sh\"" >> ~/.config/lxsession/LXDE-pi/autostart

echo "Making sure that Ruby and Jekyll are installed on this system"
yes | sudo apt-get install ruby-full
sudo gem install jekyll

echo "A reboot is required for this display to work"
read -p "Do you want to reboot now? [y/N]" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]; then
    sudo reboot
fi
