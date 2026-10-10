# PuntoShop WMS - Backend (.NET 7.0)

Este directorio contiene la capa de backend y lógica de negocio de **PuntoShop WMS**, construida sobre **ASP.NET Core (.NET 7.0)**.

## Estructura de Proyectos

- **`ModernWMS/`**: Proyecto principal de API Web REST. Contiene los controladores, configuración de middlewares (`Startup.cs`), archivo de configuración (`appsettings.json`) y la base de datos predeterminada SQLite (`wms.db`).
- **`ModernWMS.Core/`**: Capa de entidades, DTOs, interfaces de repositorio y utilidades transversales.
- **`ModernWMS.WMS/`**: Capa de servicios y lógica de negocio de gestión de almacén, órdenes, stock y despacho.

## Requisitos

- [.NET 7.0 SDK](https://dotnet.microsoft.com/download/dotnet/7.0) o superior.

## Ejecución en Desarrollo

Desde la raíz del proyecto o desde este directorio:

```powershell
cd ModernWMS
dotnet run --urls http://0.0.0.0:21011
```

O utilizando el script automatizado ubicado en la raíz:
```cmd
..\start-backend.ps1
```

El servicio iniciará por defecto en `http://localhost:21011`.

## Documentación API (Swagger)

Al ejecutar en modo desarrollo (`ASPNETCORE_ENVIRONMENT=Development`), la documentación interactiva Swagger estará disponible en:
```
http://localhost:21011/swagger
```

## Configuración de Base de Datos

En `ModernWMS/appsettings.json`, puedes definir el motor de base de datos a utilizar (`SqlLite`, `MySql`, `SqlServer`, `PostGres`):

```json
{
  "Database": { "db": "SqlLite" },
  "ConnectionStrings": {
    "SqlLiteConn": "Data Source = wms.db"
  }
}
```

## Compilación y Publicación para Producción

```powershell
dotnet publish ModernWMS.sln -c Release -o ./publish
```
