cls
@echo off
Color 0C
title GitHub Pushing
set /p COM=Commit message: 
git add *
git commit -m "%COM%"
git push origin main
git status
Color 0A
@echo first line&echo Second Line&echo Third line
@echo Pushed and Committed succesfully (%COM%)