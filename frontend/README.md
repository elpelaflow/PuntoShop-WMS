# WMS - Frontend (Vue 3 + Vite)

Este directorio contiene la aplicación cliente (Single Page Application) de **WMS**, desarrollada con **Vue 3**, **Vite**, **TypeScript** y **Vuetify 3**.

## Stack Tecnológico

- **Framework:** Vue 3.2.x (Composition API)
- **Herramienta de Compilación:** Vite 4.0.x
- **Lenguaje:** TypeScript 4.9.x
- **Componentes UI:** Vuetify 3.3.x & VXE-Table 4.3.x
- **Gestor de Estado:** Vuex 4.x
- **Enrutamiento:** Vue Router 4.x
- **Entorno de Ejecución:** Node.js 16.13+ o superior

## Requisitos

- Node.js 16.x o superior
- Yarn o npm

## Instalación de Dependencias

```bash
yarn
# o con npm:
npm install
```

## Servidor de Desarrollo

Para iniciar el servidor local de desarrollo con recarga rápida (HMR):

```bash
npm run dev -- --host 0.0.0.0
# o con yarn:
yarn dev --host 0.0.0.0
```

La aplicación estará accesible en:
```
http://localhost:5173/
```

## Variables de Entorno

- `.env.development`: Configuración utilizada durante el desarrollo local (apunta por defecto a `http://localhost:21011/` o proxy local).
- `.env.production`: Configuración utilizada al compilar para producción (`yarn build`). Recuerda colocar la IP o dominio del backend de producción.

## Compilación para Producción

```bash
yarn build
# o con npm:
npm run build
```

Los archivos finales optimizados se generarán en la carpeta `dist/`.