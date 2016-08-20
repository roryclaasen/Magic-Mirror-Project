@echo off
title Magic Mirror
cd ../site
:start
cls
python -m http.server 8000
:exit
set INPUT=
set /P INPUT="Do you want to restart? (yes/no) "
if "%INPUT%"=="y" goto start
if "%INPUT%"=="Y" goto start
if "%INPUT%"=="yes" goto start
if "%INPUT%"=="Yes" goto start
if "%INPUT%"=="n" exit
if "%INPUT%"=="N" exit
if "%INPUT%"=="no" exit
if "%INPUT%"=="No" exit
goto exit
