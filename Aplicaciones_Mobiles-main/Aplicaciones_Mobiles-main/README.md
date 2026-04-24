# Mobile Experiment

Una aplicación móvil desarrollada con **React Native**, **Expo** y **TypeScript**.

## Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- Expo CLI (se instala automáticamente con las dependencias)

## Características

- ✅ **TypeScript** - Full TypeScript, sin archivos .js
- ✅ **React Native** - Framework móvil multiplataforma
- ✅ **Expo** - Desarrollo rápido y deploy sencillo
- ✅ **Pantalla de Datos** - Componente que muestra datos del usuario
- ✅ **3 Etiquetas** - Nombre, Email y Rol

## Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

## Desarrollo

### Iniciar el servidor de desarrollo
```bash
npm start
```

Este comando inicia el Expo development server. Puedes acceder a la aplicación usando:

### Plataformas

**Para iOS:**
```bash
npm run ios
```

**Para Android:**
```bash
npm run android
```

**Para Web:**
```bash
npm run web
```

**Verificar tipos TypeScript:**
```bash
npm run type-check
```

## Estructura del Proyecto

```
mobile_experiment/
├── App.tsx                 # Componente raíz (TypeScript)
├── index.tsx              # Punto de entrada
├── app.json               # Configuración de Expo
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── .github/
│   └── copilot-instructions.md
├── .gitignore
└── node_modules/          # Dependencias instaladas
```

## Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run ios` - Ejecuta en simulador de iOS
- `npm run android` - Ejecuta en emulador de Android
- `npm run web` - Ejecuta en el navegador
- `npm run type-check` - Verifica tipos TypeScript

## Documentación

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)

## License

MIT
