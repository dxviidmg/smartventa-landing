# SmartVenta Landing Page

Landing page moderna y profesional para SmartVenta, un sistema POS (Point of Sale) multi-tienda.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con Material-UI
- **Responsive**: Optimizado para todos los dispositivos (mobile-first)
- **Animaciones**: Transiciones suaves con Framer Motion
- **Componentes Reutilizables**: Arquitectura modular y mantenible
- **SEO Optimizado**: Meta tags y estructura semántica

## 📋 Requisitos

- Node.js 20.19+ o 22.12+
- npm 8.0+

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📦 Tecnologías

- **React 19** - Framework UI
- **Vite 7** - Build tool
- **Material-UI (MUI)** - Componentes UI
- **Framer Motion** - Animaciones
- **MUI Icons** - Iconografía

## 🎨 Estructura de Componentes

```
src/
├── components/
│   ├── Hero.jsx          # Sección principal con CTA
│   ├── Features.jsx      # Grid de características (8 features)
│   ├── Benefits.jsx      # Beneficios por tipo de negocio
│   ├── Screenshots.jsx   # Capturas de pantalla del sistema
│   ├── Pricing.jsx       # Planes y precios (3 planes)
│   └── Contact.jsx       # Formulario de contacto y footer
├── App.jsx               # Componente principal con tema
├── main.jsx              # Punto de entrada
└── index.css             # Estilos globales
```

## 🎨 Paleta de Colores

- **Primario**: `#04346b` (Azul corporativo)
- **Secundario**: `#0066cc` (Azul claro)
- **Fondo**: `#f1f5f9` (Gris claro)
- **Blanco**: `#ffffff`

## 📱 Secciones de la Landing Page

1. **Hero Section**
   - Título impactante: "Gestiona tu negocio de forma inteligente"
   - Subtítulo descriptivo
   - 2 CTAs: "Solicitar Demo" y "Ver Características"

2. **Características** (8 features)
   - Multi-tienda
   - Gestión de Inventario
   - Ventas y Cobros
   - Clientes
   - Traspasos
   - Reportes
   - Impresión de Tickets
   - Apartados

3. **Beneficios**
   - Para Tiendas Pequeñas
   - Para Cadenas de Tiendas
   - Para Almacenes

4. **Capturas de Pantalla**
   - Dashboard Principal
   - Pantalla de Ventas
   - Gestión de Inventario

5. **Pricing** (3 planes)
   - Básico: $29/mes
   - Profesional: $79/mes (Popular)
   - Empresarial: $149/mes

6. **Contacto**
   - Formulario de solicitud de demo
   - Información de contacto
   - Footer con copyright

## 🎯 Optimizaciones

- Lazy loading de componentes
- Animaciones con `viewport={{ once: true }}` para mejor performance
- Responsive design con breakpoints de Material-UI
- Hover effects en cards y botones
- Scroll suave (smooth scrolling)

## 📝 Personalización

### Cambiar colores
Edita el tema en `src/App.jsx`:

```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#04346b' },
    secondary: { main: '#0066cc' },
    background: { default: '#f1f5f9' },
  },
});
```

### Modificar contenido
Cada componente tiene sus datos en constantes al inicio del archivo para fácil edición.

### Agregar imágenes reales
Reemplaza los iconos en `Screenshots.jsx` con imágenes reales del sistema.

## 🚀 Deploy

### Vercel
```bash
npm run build
# Conecta tu repositorio con Vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

## 📄 Licencia

© 2026 SmartVenta. Todos los derechos reservados.

## 🤝 Contacto

- Email: contacto@smartventa.com
- Teléfono: +52 (55) 1234-5678
- Ubicación: Ciudad de México, México
# smartventa-landing
