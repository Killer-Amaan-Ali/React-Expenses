git add *
set /p COM='Commit message: ' 
git commit -m "%COM%"
git push origin main
git status
git log
exit