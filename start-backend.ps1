$ErrorActionPreference = "Stop"
$env:Path = "C:\Program Files\dotnet;" + $env:Path
Set-Location -Path "$PSScriptRoot\backend\ModernWMS"
Write-Host "Iniciando Backend de PuntoShop WMS en http://localhost:21011..." -ForegroundColor Green
dotnet run --urls http://0.0.0.0:21011
