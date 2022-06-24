@echo off
cls
Color 0C
title GitHub Pushing
set /p COM=Commit message: 
git add *
git commit -m "%COM%"
git push origin main
git status
@echo ----

Color 0A
@echo Pushed and Committed succesfully (%COM%)

@echo ----
setlocal
:PROMPT
SET /P EXIT=Exit? (Y/[N])
IF /I "%EXIT%" NEQ "Y" GOTO END

exit


:END
endlocal