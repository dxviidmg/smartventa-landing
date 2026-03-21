# Smartventa Landing Page

Landing page moderna y profesional para **Smartventa**, el punto de venta inteligente para negocios multi-tienda.

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
- **Primary Dark**: `#03294d`
- **Background**: `#f1f5f9`
- **Paper**: `#f8fafc`
- **Text Primary**: `#1e293b`
- **Text Secondary**: `#334155`
- **Success (CTA)**: `#10b981`

### Características de diseño

- Diseño minimalista y profesional
- Responsive (mobile-first)
- Animaciones suaves con Framer Motion
- Cards elevadas con hover effects
- Border radius: 12px
- Sombras sutiles
- Transiciones: 0.2s ease

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

### Google Analytics

1. Crea una cuenta en [Google Analytics](https://analytics.google.com/)
2. Obtén tu ID de medición (formato: `G-XXXXXXXXXX`)
3. Reemplaza `G-XXXXXXXXXX` en:
   - `/index.html` (líneas 9 y 13)
   - `/src/analytics.js` (línea 4)

### Dominio

Actualiza las URLs en:
- `/index.html` - Meta tags Open Graph y canonical
- `/public/sitemap.xml` - URL del sitemap
- `/public/robots.txt` - URL del sitemap

### Imagen Open Graph

Crea una imagen de 1200x630px con tu logo y texto, guárdala como `/public/og-image.jpg`

## 📄 Estructura

```
src/
├── components/
│   ├── Navbar.jsx           # Barra de navegación
│   ├── Hero.jsx             # Sección hero principal
│   ├── Industries.jsx       # Tipos de negocio
│   ├── Features.jsx         # Características principales
│   ├── HowItWorks.jsx       # Cómo funciona
│   ├── Benefits.jsx         # Beneficios
│   ├── Pricing.jsx          # Precios
│   ├── FAQ.jsx              # Preguntas frecuentes
│   ├── Contact.jsx          # Contacto
│   ├── Footer.jsx           # Footer
│   ├── WhatsAppButton.jsx   # Botón flotante de WhatsApp
│   ├── Loading.jsx          # Pantalla de carga
│   ├── NotFound.jsx         # Página 404
│   ├── Privacy.jsx          # Política de privacidad
│   └── Terms.jsx            # Términos y condiciones
├── theme.js                 # Tema de Material UI
├── analytics.js             # Configuración de Google Analytics
├── App.jsx                  # Componente principal
├── main.jsx                 # Entry point
└── index.css                # Estilos globales
```

## 🎯 Secciones

1. **Hero** - Título principal con CTAs
2. **Industries** - Tipos de negocio ideales
3. **Features** - 13 características principales
4. **HowItWorks** - 4 pasos de cómo funciona
5. **Benefits** - Lista de beneficios
6. **Pricing** - Planes de precios
7. **FAQ** - Preguntas frecuentes
8. **Contact** - Botón de WhatsApp para solicitar demo
9. **Footer** - Información de contacto y enlaces legales

## 📱 Funcionalidades

- ✅ SEO optimizado (meta tags, sitemap, robots.txt)
- ✅ Google Analytics integrado
- ✅ Botón flotante de WhatsApp
- ✅ Animaciones suaves
- ✅ Responsive design
- ✅ Política de privacidad y términos
- ✅ Página 404
- ✅ Schema.org para SEO

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

## 📞 Contacto

- **WhatsApp**: +52 55 6165 2599
- **Email**: contacto@smartventa.com

---

**Smartventa** - El punto de venta inteligente
