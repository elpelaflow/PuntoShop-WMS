# PuntoShop WMS - Warehouse Management System

<div align="center">
  <img src="logo.png" alt="PuntoShop WMS logo" width="420" height="auto" />
  <h1>PuntoShop WMS</h1>
  <p>A simple, complete and open source warehouse management system (based on ModernWMS)</p>

<!-- Badges -->
[![License: Apache2.0](https://img.shields.io/badge/license-Apache2.0-orange.svg)](https://opensource.org/license/apache-2-0/)
![QR Code Support](https://img.shields.io/badge/QR--Code-Support-orange.svg)
![Docker Support](https://img.shields.io/badge/Docker-Support-orange.svg)
![i18n Support](https://img.shields.io/badge/i18n-Support-orange.svg)
[![SQLite](https://img.shields.io/badge/SQLite-Default-blue)](https://www.sqlite.org/)
[![MySQL8](https://img.shields.io/badge/MySQL8.0%2B-Support-orange)](https://www.mysql.com/downloads/)
[![SQL Server](https://img.shields.io/badge/SQL%20Server2017%2B-Support-orange)](https://www.microsoft.com/sql-server)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL12-Support-orange)](https://www.postgresql.org/)

![.NET](https://img.shields.io/badge/.NET-7.0.0-green)
![Vuetify Cli](https://img.shields.io/badge/Vuetify/cli-3.0.4-green)
![Vue](https://img.shields.io/badge/Vue-3.2.45-green)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.3-green)
![VXE Table](https://img.shields.io/badge/VXETable-4.3.7-green)
![Vite](https://img.shields.io/badge/Vite-4.0.0-green)
![NodeJS](https://img.shields.io/badge/NodeJS-16.13.1-green)
</div>

<div align="center">
  <p>
    <strong>Languages:</strong>
    <a href="README.md">Español (Principal)</a> |
    <strong>English</strong> |
    <a href="README.zh_CN.md">中文文档</a>
  </p>
</div>

---

# Contents

- [PuntoShop WMS - Warehouse Management System](#puntoshop-wms---warehouse-management-system)
- [Contents](#contents)
  - [Introduction](#introduction)
  - [System Architecture](#system-architecture)
  - [Requirements](#requirements)
    - [Linux OS](#linux-os)
    - [Windows OS](#windows-os)
  - [Quick Start (Local Development)](#quick-start-local-development)
  - [Production Installation & Compilation](#production-installation--compilation)
    - [Linux](#linux)
    - [Windows](#windows)
    - [Docker (Optional)](#docker-optional)
  - [Access & Default Credentials](#access--default-credentials)
  - [License](#license)

---

## Introduction 

**PuntoShop WMS** is a practical and complete warehouse and inventory management system designed to streamline supply chain logistics for small and medium-sized operations. It provides robust capabilities for inventory control, goods receipt, dispatch, barcode/QR code tracking, and multi-warehouse operations.

## System Architecture

- **Backend**: Built with **ASP.NET Core (.NET 7.0)** Web API, modular architecture (`ModernWMS.Core`, `ModernWMS.WMS`), SQLite as local out-of-the-box database (with support for MySQL, PostgreSQL, and SQL Server). Runs on port `21011` locally.
- **Frontend**: Modern SPA built with **Vue 3**, **Vite**, **TypeScript**, **Vuetify 3**, and **VXE-Table**. Fast development server on port `5173`.

---

## Requirements

### Linux OS
- Ubuntu 18.04 / 20.04 / 22.04 (LTS)
- CentOS Stream 8, 9
- RHEL 8 (8.7), 9 (9.1)
- Debian 10, 11
- openSUSE 15

### Windows OS
- Windows 10 (1607+) / Windows 11 (21H2+)
- Windows Server 2012+
- .NET 7.0 SDK
- Node.js 16.x or compatible

---

## Quick Start (Local Development)

### 1. Launch All (Automated)
Run the launcher script in the project root:
```cmd
start-all.bat
```
This automatically launches both backend and frontend in separate consoles:
- **Backend**: `http://localhost:21011/`
- **Frontend**: `http://localhost:5173/`

### 2. Manual Startup

**Backend:**
```powershell
cd backend/ModernWMS
dotnet run --urls http://0.0.0.0:21011
```

**Frontend:**
```powershell
cd frontend
npm install
npm run dev -- --host 0.0.0.0
```

---

## Production Installation & Compilation

### Linux

1. **Install .NET SDK and Node.js:**
   ```bash
   wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
   sudo dpkg -i packages-microsoft-prod.deb
   sudo apt-get update && sudo apt-get install -y dotnet-sdk-7.0
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs gcc g++ make
   sudo npm install -g yarn
   ```

2. **Compile Backend and Frontend:**
   ```bash
   mkdir -p /ModernWMS/frontend/ /ModernWMS/backend/
   
   # Frontend build
   cd frontend
   sed -i 's#http://127.0.0.1#http://<YOUR_SERVER_IP>#g' ./.env.production
   yarn && yarn build
   cp -rf dist/* /ModernWMS/frontend/
   
   # Backend build
   cd ../backend
   dotnet publish -c Release
   cp -rf ModernWMS/bin/Release/net7.0/publish/* /ModernWMS/backend/
   cp -rf ModernWMS/wms.db /ModernWMS/backend/
   ```

3. **Configure & Run Nginx:**
   ```bash
   # Copy frontend assets to Nginx html directory
   cp -rf /ModernWMS/frontend/* /etc/nginx/html/
   nginx
   
   # Run backend service
   cd /ModernWMS/backend/
   dotnet ModernWMS.dll --urls http://0.0.0.0:21011
   ```

### Windows

1. **Compile Backend:**
   ```cmd
   cd backend
   dotnet publish -c Release
   ```
2. **Compile Frontend:**
   ```cmd
   cd frontend
   yarn
   yarn build
   ```
3. **Run Services:**
   - Deploy backend binaries with `dotnet ModernWMS.dll --urls http://0.0.0.0:21011`
   - Serve frontend `dist/` directory via Nginx or IIS.

### Docker (Optional)

You can build and deploy the containerized environment using the Docker configuration provided in the `docker/` folder:
```bash
cd docker
docker build -t puntoshop-wms:1.0 .
docker run -d -p 21011:21011 -p 80:80 puntoshop-wms:1.0 ./run.sh
```

---

## Access & Default Credentials

Open your web browser and navigate to:
`http://localhost:5173` (development) or `http://<SERVER_IP>` (production)

- **Default Username:** `admin`
- **Default Password:** `1`

---

## License

Distributed under the [Apache-2.0](https://opensource.org/license/apache-2-0/) / [MIT](https://opensource.org/licenses/MIT/) License. See `LICENSE` for details.
