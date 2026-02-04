# Daily Code

Un proyecto personal para practicar y registrar ejercicios diarios de programación y lógica.

## 📝 Descripción

DailyCode es una forma de practicar lógica de programación. Es lo que más me cuesta porque si no lo practico, se me olvida. Así que creé este proyecto para subir cada día un ejercicio que haya resuelto. Mi objetivo es mejorar en esto y poder aplicarlo en mis proyectos.

## 🚀 Características

- **Blog de ejercicios diarios**: Cada día se publica un nuevo ejercicio de programación
- **Soporte MDX**: Los ejercicios están escritos en MDX con sintaxis highlighting
- **Diseño responsivo**: Interfaz adaptable a diferentes dispositivos
- **Animaciones**: Utiliza GSAP y Motion para animaciones fluidas
- **SEO optimizado**: Configurado con sitemap y metaetiquetas

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** - Framework web para sitios estáticos
- **[React](https://reactjs.org/)** - Biblioteca JavaScript para UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[MDX](https://mdxjs.com/)** - Markdown con JSX
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Motion](https://motion.dev/)** - Animaciones declarativas

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de Astro y React
│   ├── DayItem.astro   # Componente para cada ejercicio
│   ├── DayList.astro   # Lista de ejercicios
│   ├── Hero.astro      # Sección hero principal
│   └── ...
├── content/
│   └── days/           # Contenido de los ejercicios diarios (MDX)
├── layouts/
│   └── Layout.astro    # Layout principal del sitio
├── pages/
│   ├── index.astro     # Página de inicio
│   └── [slug].astro    # Páginas individuales de ejercicios
├── styles/
│   └── global.css      # Estilos globales
└── utils/              # Utilidades y helpers
```

## 📚 Contenido

Los ejercicios se almacenan en `src/content/days/` como archivos MDX con el siguiente formato:

```mdx
---
title: "Título del ejercicio"
description: "Descripción breve"
date: YYYY-MM-DD
---

## Descripción
Contenido del ejercicio con código y explicaciones...

```typescript
const ejemplo = "código del ejercicio";
```
```

## 🛠️ Instalación y Desarrollo

1. **Instalar dependencias**:
   ```bash
   npm install
   # o
   bun install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   # o
   bun run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   # o
   bun run build
   ```

4. **Previsualizar producción**:
   ```bash
   npm run preview
   # o
   bun run preview
   ```

## 🎨 Personalización

### Fuentes
- **Pirata One**: Para el título principal (hero)
- **Geist Sans**: Para el contenido general

### Tema
- El sitio utiliza Tailwind CSS con un diseño oscuro/moderno
- Syntax highlighting configurado con el tema "vesper"

### Animaciones
- Motion para animaciones declarativas

## 📄 Scripts Disponibles

- `dev`: Inicia servidor de desarrollo
- `build`: Construye el sitio para producción
- `preview`: Previsualiza el sitio construido
- `astro`: CLI de Astro para comandos adicionales

## 🚀 Despliegue

Este proyecto está configurado para ser desplegado en cualquier plataforma estática:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Y más...

El proyecto genera un sitio completamente estático optimizado para producción.

## 📝 Contribuciones

Este es un proyecto personal para practicar, pero si encuentras algún error o sugerencia de mejora, ¡siéntete libre de abrir un issue!

## 📄 Licencia

MIT License - Puedes usar este código como referencia para tus propios proyectos.