# Consacsur - Sitio Web Corporativo

Este proyecto es el sitio web corporativo de Consacsur, una empresa consultora de ingeniería. El sitio está desarrollado con React + Vite y sigue las mejores prácticas de desarrollo web moderno.

## 🚀 Tecnologías Principales

- React 18
- Vite 5
- TypeScript
- TailwindCSS
- React Router DOM
- Framer Motion (para animaciones)
- React Icons
- React Helmet (para SEO)

## 📁 Estructura del Proyecto

```
consacsur/
├── public/
│   └── isodata/           # Recursos de identidad visual
│       ├── logo/         # Logos en diferentes formatos
│       ├── colors/       # Paleta de colores
│       └── patterns/     # Patrones y texturas
├── src/
│   ├── assets/          # Recursos estáticos (imágenes, fuentes)
│   ├── components/      # Componentes reutilizables
│   │   ├── common/     # Componentes genéricos
│   │   ├── layout/     # Componentes de estructura
│   │   └── sections/   # Secciones específicas de páginas
│   ├── pages/          # Páginas principales
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Funciones utilitarias
│   ├── styles/         # Estilos globales
│   ├── types/          # Definiciones de tipos TypeScript
│   └── constants/      # Constantes y configuraciones
└── index.html
```

## 🎨 Páginas Principales

1. **Home**
   - Banner principal con slider
   - Sección de servicios destacados
   - Proyectos recientes
   - Clientes principales
   - Estadísticas y logros

2. **Nosotros**
   - Historia de la empresa
   - Misión y visión
   - Valores
   - Equipo directivo
   - Certificaciones

3. **Servicios**
   - Lista de servicios
   - Detalles de cada servicio
   - Casos de éxito
   - Proceso de trabajo

4. **Proyectos**
   - Portafolio de proyectos
   - Filtros por categoría
   - Detalles de proyectos
   - Galería de imágenes

5. **Clientes**
   - Lista de clientes
   - Testimonios
   - Alianzas estratégicas

6. **Ética y Cumplimiento**
   - Políticas corporativas
   - Código de ética
   - Certificaciones
   - Compromisos

7. **Contacto**
   - Formulario de contacto
   - Mapa de ubicación
   - Información de contacto
   - Redes sociales

## 🛠️ Componentes Principales

### Layout
- Navbar (con menú hamburguesa para móvil)
- Footer
- Banner
- Sidebar (para navegación móvil)

### Comunes
- Botones
- Tarjetas
- Modales
- Formularios
- Sliders
- Galerías

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd consacsur
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "framer-motion": "^11.0.0",
    "react-icons": "^5.0.0",
    "react-helmet-async": "^2.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0"
  }
}
```

## 🎯 Características Principales

- Diseño responsive
- Optimización de rendimiento
- SEO optimizado
- Accesibilidad (WCAG 2.1)
- Animaciones suaves
- Modo oscuro/claro
- Internacionalización (i18n)
- Lazy loading de imágenes
- Optimización de assets

## 📱 Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Guía de Estilos

### Colores
- Primario: [Definir color]
- Secundario: [Definir color]
- Acentos: [Definir colores]
- Texto: [Definir colores]
- Fondo: [Definir colores]

### Tipografía
- Títulos: [Definir fuente]
- Cuerpo: [Definir fuente]
- Tamaños: [Definir escala]

### Espaciado
- Base: 8px
- Escala: [Definir escala]

## 🔄 Flujo de Trabajo

1. Crear rama feature
2. Desarrollar componente
3. Realizar pruebas
4. Crear PR
5. Code review
6. Merge a main

## 📝 Scripts Disponibles

- `npm run dev`: Inicia servidor de desarrollo
- `npm run build`: Construye para producción
- `npm run preview`: Previsualiza build
- `npm run lint`: Ejecuta linter
- `npm run test`: Ejecuta pruebas 