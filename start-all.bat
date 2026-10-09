@echo off
title PuntoShop WMS Launcher
echo ========================================================
echo  Iniciando PuntoShop WMS (Backend y Frontend)...
echo ========================================================

start "PuntoShop WMS - Backend" powershell -NoExit -ExecutionPolicy Bypass -File "%~dp0start-backend.ps1"
timeout /t 3 /nobreak >nul
start "PuntoShop WMS - Frontend" powershell -NoExit -ExecutionPolicy Bypass -File "%~dp0start-frontend.ps1"

echo.
echo Todo listo. Se abrieron las consolas de Backend y Frontend.
echo Backend:  http://localhost:21011/
echo Frontend: http://localhost:5173/
echo.
