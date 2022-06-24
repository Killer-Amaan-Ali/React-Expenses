@echo off
setlocal
:PROMPT
SET /P EXIT=Exit? (Y/[N])?
IF /I "%EXIT%" NEQ "Y" GOTO END

exit


:END
endlocal