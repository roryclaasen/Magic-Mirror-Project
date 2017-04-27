#!/bin/bash
echo Magic Mirror Install/Update Script
echo Updating repository
git fetch --all
if [ $? -eq 0 ]; then
    git reset --hard HEAD
    git pull
else
    echo Git repository MAY not be up to date
fi
git log --name-status HEAD^..HEAD

# TODO: Setup files to auto start the mirror

echo Making sure that Ruby and Jekyll are installed on this system
sudo apt-get install rubygems
sudo gem install jekyll

if gem list jekyll -i; then
    jekyll build
    if [ $? -eq 0 ]; then
        echo Jekyll build passed. Continuing to launch display
        jekyll serve
        # TODO: Launch browser
    else
        echo Jekyll build failed!
        exit 1
    fi
else
    echo Jekyll was not found to be installed on this system
    exit 1
fi
