$ErrorActionPreference = "Stop"
Set-Location -Path "$PSScriptRoot\frontend"
Write-Host "Iniciando Frontend de PuntoShop WMS en http://localhost:5173..." -ForegroundColor Cyan
npm run dev -- --host 0.0.0.0
