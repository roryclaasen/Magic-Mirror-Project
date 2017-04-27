#!/bin/bash
echo "  Magic Mirror Project by Rory Claasen - (MIT 2016-2017)"
echo "  Install/Update Script"
echo "  Updating repository"
# TODO: Test if the mirror is already running, if so stop it
git fetch --all
if [ $? -eq 0 ]; then
    git reset --hard HEAD
    git pull
else
    echo "  Git repository MAY not be up to date"
fi
git log --name-status HEAD^..HEAD

# TODO: Setup files to auto start the mirror

echo "  Making sure that Ruby and Jekyll are installed on this system"
sudo apt-get install rubygems
sudo gem install jekyll

if gem list jekyll -i; then
    # TODO: Stop any jekyll process already running (should have already been stopped)
    jekyll build > /dev/null
    if [ $? -eq 0 ]; then
        echo "  Jekyll build passed. Continuing to launch display"
        # TODO: Launch browser
        jekyll serve
    else
        echo "  Jekyll build failed!"
        exit 1
    fi
else
    echo "  Jekyll was not found to be installed on this system"
    exit 1
fi
