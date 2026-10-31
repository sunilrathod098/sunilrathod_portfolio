@echo off
cd /d "%~dp0"
if not exist node_modules call npm install
start "Sunil Portfolio Dev Server" cmd /k "npm run dev -- --host 127.0.0.1"
timeout /t 3 >nul
start http://127.0.0.1:5173
