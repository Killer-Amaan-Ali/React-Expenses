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
echo Line1◙Line2 >con
@echo Pushed and Committed succesfully (%COM%)