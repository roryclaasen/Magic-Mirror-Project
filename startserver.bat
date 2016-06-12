@echo off
title Magic Mirror
cd site
:start
cls
python -m http.server 8000
pause
set INPUT=
set /P INPUT="Do you want to restart? (yes/no) "
if "%INPUT%"=="y" goto start
if "%INPUT%"=="Y" goto start
if "%INPUT%"=="yes" goto start
if "%INPUT%"=="Yes" goto start
