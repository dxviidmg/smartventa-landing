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
- Crear producto desde búsqueda — Si no se encuentra, puedes crearlo directamente con stock inicial
- Múltiples carritos simultáneos
- Precios dinámicos (unitario y mayoreo automático según cantidad)
- Una pantalla para todo — Ventas, traspasos y distribuciones desde la misma interfaz
- Atajos de teclado — Ctrl+Q/W para buscar, Ctrl+E/R/T/Y/U para tipo de operación, Ctrl+B para enfocar búsqueda
- Impresión de tickets compatible con impresoras térmicas estándar

### 🏪 Control Total de Todas tus Tiendas
- Panel centralizado
- Cambio instantáneo entre tiendas sin cerrar sesión
- Indicador de catálogo — Sabes qué tiendas tienen el catálogo completo

### 📦 Inventario en Tiempo Real
- Stock unificado en todas las tiendas
- Reservas inteligentes entre carritos para evitar ventas duplicadas
- Historial de stock (ventas, traspasos, ajustes)
- Revisión de Stock — Modal para consultar stock en otras tiendas y agregar stock directamente
- Agregar stock durante la venta — Acceso rápido para aumentar inventario

### 🚚 Traslados Entre Tiendas
- Traspasos con trazabilidad completa
- Distribuciones desde almacén a múltiples tiendas en una sola operación
- Confirmación obligatoria por cada tienda receptora
- Dashboard de pendientes separados por hoy y anteriores
- Filtros por estado (pendientes o aplicados) con actualización automática

### 👥 Gestión de Clientes
- Registro completo con historial de compras
- Descuentos personalizados por porcentaje
- Historial de compras por cliente

### 📊 Corte de Caja Inteligente
- Resumen diario por método de pago (efectivo, tarjeta, transferencia)
- Movimientos detallados (entradas y salidas de dinero)
- Exportación a Excel
- Corte parcial y total

### 🔄 Devoluciones y Cancelaciones
- Cancelación total con motivo registrado
- Devolución parcial
- Motivos documentados
- Filtros rápidos

### 📈 Tableros de Análisis y Métricas
- Tablero de ventas (KPIs: mejor/peor tienda, mejor/peor día, hora pico, ticket promedio)
- Heatmap de ventas
- Análisis de cancelaciones
- Top de marcas y productos
- Gráficas de tendencia (día, semana, mes)

### 🔍 Auditoría Integrada
- Detección automática de problemas:
  - Ventas duplicadas
  - Códigos de producto repetidos
  - Productos sin precio de mayoreo
  - Stock faltante en tiendas
  - Productos sin movimiento
  - Inconsistencias en registros
- Auditoría de inventario dinámica — Modal interactivo para confirmar o modificar stock
- Acceso configurable por horario

### 📋 Gestión de Productos
- Importación masiva desde Excel
- Plantillas descargables
- Validación previa antes de importar
- Historial de precios
- Imágenes de productos

### 🔐 Roles y Permisos
- Tres niveles de acceso:
  - **Dueño** — Acceso total a todo el sistema
  - **Administrador** — Gestión de tienda con algunas restricciones
  - **Vendedor** — Solo ventas y operaciones básicas
- Vistas personalizadas por rol

### 🌙 Interfaz Adaptable
- Modo oscuro/claro
- Diseño intuitivo

### 📞 Soporte Integrado
- WhatsApp directo con información de tienda prellenada
- Ayuda contextual en cada página

### ⏰ Funcionalidades Operativas
- Solicitudes de ajuste — Vendedores piden cambios de stock; el dueño aprueba o rechaza
- Notificaciones en tiempo real sobre traspasos, distribuciones y solicitudes
- Indicador de ventas duplicadas

---

**Smartventa** - El punto de venta inteligente para negocios multi-tienda
