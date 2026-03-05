# SmartVenta Landing Page 🚀

Landing page moderna, impactante y profesional para SmartVenta, un sistema POS (Point of Sale) multi-tienda.

## ✨ Características Premium

- **Diseño Ultra Moderno**: Interfaz impactante con gradientes vibrantes y efectos glassmorphism
- **Animaciones Avanzadas**: Efectos 3D, parallax, y micro-interacciones con Framer Motion
- **Colores Vibrantes**: Paleta de colores dinámica con gradientes personalizados por sección
- **Efectos Hover Elaborados**: Transformaciones 3D, escalado y sombras dinámicas
- **Tipografía Impactante**: Jerarquía visual clara con tamaños grandes y gradientes de texto
- **Responsive Premium**: Optimizado para todos los dispositivos con transiciones suaves
- **Partículas Animadas**: Efectos de fondo dinámicos en el Hero
- **Scrollbar Personalizado**: Diseño coherente con la marca
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
- **Vite 7** - Build tool ultra-rápido
- **Material-UI (MUI)** - Componentes UI premium
- **Framer Motion** - Animaciones fluidas y profesionales
- **MUI Icons** - Iconografía completa

## 🎨 Estructura de Componentes

```
src/
├── components/
│   ├── Hero.jsx          # Hero impactante con partículas y gradientes animados
│   ├── Features.jsx      # Grid de 8 características con colores únicos
│   ├── Benefits.jsx      # Beneficios con efectos hover 3D
│   ├── Screenshots.jsx   # Mockups con efectos de profundidad
│   ├── Pricing.jsx       # Planes premium con badges y gradientes
│   └── Contact.jsx       # Formulario moderno + Footer completo
├── App.jsx               # Componente principal con tema
├── main.jsx              # Punto de entrada
└── index.css             # Estilos globales + scrollbar personalizado
```

## 🎨 Paleta de Colores

### Colores Principales
- **Primario**: `#04346b` (Azul corporativo oscuro)
- **Secundario**: `#0066cc` (Azul brillante)
- **Acento**: `#4ade80` (Verde vibrante para CTAs)
- **Fondo**: `#f8fafc` (Gris ultra claro)

### Colores por Característica
- **Multi-tienda**: `#3b82f6` (Azul)
- **Inventario**: `#8b5cf6` (Púrpura)
- **Ventas**: `#10b981` (Verde)
- **Clientes**: `#f59e0b` (Ámbar)
- **Traspasos**: `#06b6d4` (Cyan)
- **Reportes**: `#ec4899` (Rosa)
- **Impresión**: `#6366f1` (Índigo)
- **Apartados**: `#14b8a6` (Teal)

## 📱 Secciones de la Landing Page

### 1. Hero Section Premium
- Gradiente animado de fondo con efecto pulse
- 20+ partículas flotantes animadas
- Título con gradiente de texto
- Badge flotante con glassmorphism
- 2 CTAs con efectos hover avanzados
- Cards flotantes con estadísticas
- Trust indicators con métricas

### 2. Características (8 features)
- Cards con colores únicos por característica
- Iconos con fondos degradados
- Efectos hover con transformación 3D
- Borde superior animado al hover
- Transiciones suaves y fluidas

### 3. Beneficios
- 3 tipos de negocios con colores distintivos
- Efectos hover con escalado y rotación
- Iconos con gradientes animados
- Checkmarks con colores personalizados
- Borde superior que aparece al hover

### 4. Capturas de Pantalla
- Mockups con efectos de profundidad 3D
- Rotación en Y al hover (efecto parallax)
- Iconos de fondo decorativos
- Badges con estadísticas clave
- Gradientes de fondo sutiles

### 5. Pricing (3 planes)
- Badge "Más Popular" flotante
- Gradientes únicos por plan
- Efectos hover con escalado
- Botones con gradientes animados
- Sombras dinámicas con color del plan

### 6. Contacto + Footer
- Formulario con campos redondeados
- Cards de contacto con hover effects
- Iconos de redes sociales animados
- Footer con gradiente oscuro
- Newsletter integrado
- Enlaces rápidos organizados

## 🎯 Efectos y Animaciones

### Animaciones de Entrada
- Fade in + Slide up/down
- Stagger animations (cascada)
- Scale animations
- Rotate animations (3D)

### Efectos Hover
- Transform scale y translateY
- Rotate 3D (rotateY)
- Box-shadow dinámicas con colores
- Border color transitions
- Background gradients animados

### Micro-interacciones
- Botones con lift effect
- Cards con tilt effect
- Iconos con scale y rotate
- Smooth color transitions

## 📝 Personalización

### Cambiar colores del tema
Edita `src/App.jsx`:

```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#04346b' },
    secondary: { main: '#0066cc' },
    background: { default: '#f8fafc' },
  },
});
```

### Modificar colores de características
Edita el array `features` en `src/components/Features.jsx`:

```javascript
{ 
  icon: StoreIcon, 
  title: 'Multi-tienda', 
  desc: '...', 
  color: '#3b82f6' // Cambia este color
}
```

### Ajustar animaciones
Modifica los parámetros de Framer Motion:

```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
```

## 🚀 Optimizaciones de Performance

- Lazy loading de componentes
- `viewport={{ once: true }}` para animaciones (se ejecutan una sola vez)
- Transiciones con `cubic-bezier` optimizadas
- Uso de `transform` y `opacity` para animaciones (GPU accelerated)
- Gradientes con CSS en lugar de imágenes
- Iconos SVG de Material-UI (ligeros)

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para servir desde /dist
```

## 📄 Licencia

© 2026 SmartVenta. Todos los derechos reservados.

## 🤝 Contacto

- **Email**: contacto@smartventa.com
- **Teléfono**: +52 (55) 1234-5678
- **Ubicación**: Ciudad de México, México
- **Redes Sociales**: Twitter, Facebook, LinkedIn, Instagram

---

**Hecho con ❤️ y mucho café ☕**
# smartventa-landing
