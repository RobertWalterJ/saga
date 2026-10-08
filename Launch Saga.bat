@echo off
cd /d "%~dp0"
rem Saga — opens the app in your browser. Close this window to stop it.
start "" http://localhost:8912/
node build\serve.mjs
