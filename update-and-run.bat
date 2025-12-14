@echo off
echo Removing node_modules and package-lock.json...
rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo Installing dependencies...
call npm install

echo Starting development server...
call npm run dev
