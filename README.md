# sebaprogrammer - Blog Personal con Astro y Tailwind CSS

![sebaprogrammer](/public/images/sebastian-lagos.jpeg)

Un blog personal profesional desarrollado con Astro y Tailwind CSS. Esta plataforma está diseñada para compartir contenido sobre desarrollo web, tecnología y experiencias profesionales.

## 📋 Características

- **Diseño Moderno y Responsivo**: Interfaz de usuario elegante inspirada en Airbnb
- **Páginas Estáticas Optimizadas**: Generadas con Astro para máximo rendimiento
- **Estilizado con Tailwind CSS**: Diseño personalizado y componentes reutilizables
- **Sistema de Contenido**: Posts en Markdown con soporte para metadatos
- **Layout Profesional**: Header y Footer consistentes en toda la aplicación
- **Sistema de Autores**: Perfiles de autores con información detallada
- **Optimizado para SEO**: Metadatos adecuados para mejor posicionamiento

## 🚀 Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) (versión 16 o superior) instalado.

1. **Clonar el repositorio**

```bash
git clone https://github.com/sebaprogrammer/astro-blog.git
cd astro-blog
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

Ahora puedes acceder al blog en `http://localhost:4321`

## 📂 Estructura del Proyecto

```
astro-blog/
├── public/                # Archivos estáticos
│   ├── favicon.svg
│   └── images/            # Imágenes para el blog
├── src/
│   ├── assets/            # Recursos
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.astro   # Navegación principal
│   │   └── Footer.astro   # Pie de página
│   ├── content/           # Sistema de contenido
│   │   ├── config.ts      # Configuración del contenido
│   │   ├── authors/       # Información de autores
│   │   └── posts/         # Artículos en Markdown
│   ├── layouts/           # Plantillas
│   │   └── Layout.astro   # Layout principal
│   ├── pages/             # Rutas de la aplicación
│   │   ├── index.astro    # Página principal
│   │   ├── about.astro    # Página "Sobre mí"
│   │   ├── blog.astro     # Listado de artículos
│   │   ├── posts/         # Páginas dinámicas de artículos
│   │   └── autores/       # Páginas de perfiles de autores
│   └── styles/            # Estilos globales
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.mjs    # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
└── package.json           # Dependencias y scripts
```

## 💻 Uso

### Creación de Contenido

#### Crear un Nuevo Post

1. Crea un nuevo archivo Markdown en `src/content/posts/`
2. Añade el frontmatter con los metadatos necesarios:

```markdown
---
title: "Título del Artículo"
description: "Breve descripción del contenido"
pubDate: "2025-04-18"
author: "sebastian-lagos"
image:
  url: "/images/mi-imagen.jpg"
  alt: "Descripción de la imagen"
tags: ["desarrollo", "javascript", "react"]
---

Contenido del artículo en Markdown...
```

### Configuración

- **Tailwind CSS**: Personaliza el diseño en `tailwind.config.mjs`
- **Astro**: Configura el comportamiento del sitio en `astro.config.mjs`

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el sitio para producción
- `npm run preview` - Vista previa de la versión de producción

## 📱 Responsive Design

El blog está completamente optimizado para dispositivos móviles, tablets y desktops, siguiendo un enfoque "mobile-first".

## 🔄 Flujo de Trabajo de Desarrollo

1. Realiza cambios en los archivos de código o contenido
2. Visualiza los cambios en tiempo real con el servidor de desarrollo
3. Implementa pruebas si es necesario
4. Haz commit y push de tus cambios al repositorio

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

## 👤 Autor

- **Sebastián Lagos** - Desarrollador Fullstack
  - [GitHub](https://github.com/sebaprogrammer)
  - [LinkedIn](https://linkedin.com/in/sebastianlagos)
  - [Twitter](https://twitter.com/sebastianlagos)

---

Hecho con ❤️ y Astro
