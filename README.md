# Smartventa Landing Page

Landing page moderna y profesional para **Smartventa**, el sistema de punto de venta inteligente para negocios multi-tienda.

## 🚀 Tecnologías

- **Vite** - Build tool
- **React 19** - Framework UI
- **Material UI (MUI)** - Componentes y diseño
- **@mui/icons-material** - Iconos
- **@mui/x-charts** - Gráficos y visualizaciones
- **Framer Motion** - Animaciones
- **EmailJS** - Envío de formularios

## 🎨 Diseño

### Paleta de colores

- **Primary**: `#04346b`
- **Primary Light**: `#065a9e`
- **Primary Dark**: `#022347`
- **Background**: `#f8fafc`
- **Paper**: `#ffffff`
- **Text Primary**: `#0f172a`
- **Text Secondary**: `#64748b`
- **Success (CTA)**: `#10b981`

### Características de diseño

- Diseño minimalista y profesional
- Responsive (mobile-first)
- Animaciones suaves con Framer Motion
- Cards elevadas con hover effects
- Border radius: 12px (general), 16px (cards)
- Sombras sutiles
- Transiciones: 0.25s cubic-bezier(0.4, 0, 0.2, 1)

## 📦 Instalación

```bash
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

El servidor de desarrollo se ejecutará en `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## ⚙️ Configuración

### Variables de entorno

Crea un archivo `.env` basado en `.env.template` y actualiza los valores:

```env
VITE_WHATSAPP_PHONE=001234567890
VITE_WHATSAPP_PHONE_FORMATTED=+00 12 3456 7890
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_APP_URL=https://app-smartventa.vercel.app
```

### Google Analytics

1. Crea una cuenta en [Google Analytics](https://analytics.google.com/)
2. Obtén tu ID de medición (formato: `G-XXXXXXXXXX`)
3. Reemplaza `G-XXXXXXXXXX` en `.env`

### Imagen Open Graph

Crea una imagen de 1200x630px con tu logo y texto, guárdala como `/public/og-image.jpg`

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes de la aplicación
│   ├── ui/                 # Componentes reutilizables
│   │   ├── Card.jsx
│   │   ├── CardGridItem.jsx
│   │   └── SectionHeader.jsx
│   ├── LazyImage.jsx       # Imágenes con lazy loading
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Industries.jsx
│   ├── Features.jsx
│   ├── HowItWorks.jsx
│   ├── Benefits.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx
├── contexts/               # React Contexts
│   ├── AppContext.jsx      # Estado global (drawer, scroll)
│   ├── WhatsAppContext.jsx # Funciones de WhatsApp
│   └── index.js
├── hooks/                  # Hooks personalizados
│   ├── useScroll.js
│   ├── useActiveSection.js
│   ├── useMemoized.js
│   ├── useSEO.js
│   └── index.js
├── constants/              # Constantes y estilos
│   ├── index.js
│   ├── colors.js
│   ├── animations.js
│   └── styles.js
├── config/                 # Configuración
│   ├── index.js
│   └── constants.js
├── utils/                  # Utilidades
│   ├── helpers.js
│   └── animations.js
├── App.jsx                 # Componente principal
├── main.jsx                # Entry point
├── theme.js                # Tema de Material UI
├── analytics.js            # Configuración de Google Analytics
└── index.css               # Estilos globales
```

## 🎯 Secciones

1. **Hero** - Título principal con CTAs
2. **Industries** - Tipos de negocio ideales
3. **Features** - Características principales
4. **HowItWorks** - 4 pasos de cómo funciona
5. **Benefits** - Lista de beneficios
6. **Pricing** - Planes de precios
7. **FAQ** - Preguntas frecuentes
8. **Contact** - Botón de WhatsApp para solicitar demo
9. **Footer** - Información de contacto y enlaces legales

## 📱 Funcionalidades

- ✅ SEO optimizado (meta tags, Open Graph, Twitter Cards)
- ✅ Google Analytics integrado
- ✅ Botón flotante de WhatsApp
- ✅ Animaciones suaves con Framer Motion
- ✅ Responsive design (mobile-first)
- ✅ Lazy loading de imágenes
- ✅ React Context para estado global
- ✅ Componentes reutilizables
- ✅ Hooks personalizados
- ✅ Optimización de performance (memoización)
- ✅ Política de privacidad y términos
- ✅ Página 404

## 📝 Objetivo

Captar leads para demos del sistema POS multi-tienda Smartventa, ofreciendo acceso a una cuenta demo genérica para explorar el sistema.

## 🎯 Público objetivo

Dueños de negocios retail con 2 o más sucursales:
- Tiendas de ropa
- Abarrotes
- Farmacias
- Ferreterías
- Mini supermercados
- Papelerías
- Cosméticos
- Tiendas de mascotas
- Jugueterías


## 🌟 Características del Sistema

### 💰 Punto de Venta Rápido y Versátil
- Búsqueda instantánea por código de barras o nombre de producto
- Múltiples carritos simultáneos
- Precios dinámicos (unitario y mayoreo)
- Atajos de teclado
- Impresión de tickets

### 🏪 Control Total de Todas tus Tiendas
- Panel centralizado
- Cambio instantáneo entre tiendas
- Indicador de catálogo

### 📦 Inventario en Tiempo Real
- Stock unificado
- Reservas inteligentes
- Historial completo

### 🚚 Traslados Entre Tiendas
- Traspasos con trazabilidad
- Distribuciones desde almacén
- Confirmación obligatoria

### 👥 Gestión de Clientes
- Registro completo
- Descuentos personalizados
- Historial de compras

### 📊 Corte de Caja Inteligente
- Resumen diario por método de pago
- Movimientos detallados
- Exportación a Excel
- Corte parcial y total

### 🔄 Devoluciones y Cancelaciones
- Cancelación total
- Devolución parcial
- Motivos documentados
- Filtros rápidos

### 📈 Tableros de Análisis y Métricas
- Tablero de ventas (KPIs)
- Heatmap de ventas
- Análisis de cancelaciones
- Top de marcas y productos
- Gráficas de tendencia

### 🔍 Auditoría Integrada
- Detección automática de problemas
- Filtros rápidos
- Acceso configurable

### 📋 Gestión de Productos
- Importación masiva
- Plantillas descargables
- Validación previa
- Historial de precios
- Imágenes de productos

### 🔐 Roles y Permisos
- Tres niveles de acceso (Dueño, Administrador, Vendedor)
- Vistas personalizadas

### 🌙 Interfaz Adaptable
- Modo oscuro/claro
- Diseño intuitivo

### 📞 Soporte Integrado
- WhatsApp directo
- Ayuda contextual

### ⏰ Funcionalidades Operativas
- Solicitudes de ajuste
- Notificaciones en tiempo real
- Indicador de ventas duplicadas

---

**Smartventa** - El punto de venta inteligente para negocios multi-tienda
