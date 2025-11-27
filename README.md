# spelucin.me

> Portafolio personal moderno construido con Astro, React y Tailwind CSS

Un portafolio elegante y responsivo que muestra mi experiencia profesional, servicios y experiencia en analítica digital. Cuenta con animaciones suaves, una barra de navegación fija y un sistema de diseño elegante.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con glassmorphism, gradientes suaves y microanimaciones
- 📱 **Totalmente Responsivo**: Diseño optimizado para todos los dispositivos con menú móvil interactivo
- 🚀 **Alto Rendimiento**: Construido con Astro para máxima velocidad y eficiencia
- 🎯 **Navegación Inteligente**: Navbar sticky con scroll behavior suave y detección de dirección
- 💼 **Secciones Profesionales**: 
  - Hero con llamado a la acción
  - Sobre mí con estadísticas destacadas
  - Servicios con iconografía llamativa
  - Herramientas y tecnologías
  - Recursos y enlaces útiles
  - Testimonios de clientes
  - Formulario de contacto
- 🎭 **Carrusel de Logos**: Animación infinita con efecto de desvanecimiento en los bordes
- 🌐 **SEO Optimizado**: Meta tags, etiquetas semánticas y estructura optimizada para motores de búsqueda

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/spelucin/spelucin.me.git
cd spelucin.me
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) v4.0
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) v3.4
- **Componentes UI**: [React](https://react.dev/) v18.2
- **Iconos**: [Lucide React](https://lucide.dev/)

## 📁 Estructura del Proyecto

```
spelucin.me/
├── src/
│   ├── components/       # Componentes Astro y React
│   │   ├── Header.astro        # Navbar principal
│   │   ├── HeaderScroll.astro  # Lógica de scroll para navbar
│   │   ├── MobileMenu.astro    # Menú móvil responsivo
│   │   ├── Hero.astro          # Sección hero con CTA
│   │   ├── About.astro         # Sobre mí con estadísticas
│   │   ├── Skills.astro        # Servicios profesionales
│   │   ├── Tools.astro         # Herramientas y tecnologías
│   │   ├── Resources.astro     # Recursos y enlaces externos
│   │   ├── Testimonials.astro  # Testimonios de clientes
│   │   ├── Contact.astro       # Formulario de contacto
│   │   └── Footer.astro        # Footer del sitio
│   ├── layouts/          # Layouts de página
│   ├── pages/            # Páginas de rutas
│   │   └── index.astro   # Página principal
│   └── styles/           # Estilos globales
│       └── global.css    # Variables CSS y estilos base
├── public/               # Recursos estáticos
│   └── favicon.svg       # Favicon del sitio
├── astro.config.mjs      # Configuración de Astro
├── tailwind.config.mjs   # Configuración de Tailwind
└── package.json
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.mjs` y pueden ser personalizados:

- `--primary`: Color principal
- `--secondary`: Color secundario
- `--accent`: Color de acento
- `--border`: Color de bordes

### Tipografía
Las fuentes se importan desde Google Fonts en el layout principal. Para cambiarlas, modifica las importaciones en `src/layouts/Layout.astro`.

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción de producción
npm run build

# Vista previa de producción
npm run preview
```

## 🚢 Despliegue

Construye el bundle de producción:
```bash
npm run build
```

El sitio generado estará en el directorio `dist/` y puede ser desplegado en cualquier servicio de hosting estático como:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 Licencia

© 2025 Alex Spelucin. Todos los derechos reservados.

## 🤝 Contacto

Para preguntas u oportunidades de colaboración, no dudes en contactarme a través del formulario de contacto en el sitio web.

---

**Construido con ❤️ usando Astro**
