set /p COM=Commit message: 
git add *
git commit -m "%COM%"
git push origin main
git status
exit