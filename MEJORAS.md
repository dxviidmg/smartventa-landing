# Mejoras Senior - Smartventa Landing

## 🔴 Alta prioridad

### 1. Eliminar archivos duplicados
- [x] `src/index.html` — huérfano, el real está en la raíz
- [x] `src/assets/logo.jpg` — duplicado de `public/logo.jpg`

### 2. Un solo `<SEO>` en App.jsx
- [x] Cada sección monta su propio `<SEO>` que sobrescribe meta tags en cada lazy load (causa title flicker)
- [x] Mover a un solo `<SEO>` con los meta definitivos de la landing

---

## 🟡 Media prioridad

### 3. Convertir PNGs a WebP
- [ ] `src/assets/Tablero.png` (117KB)
- [ ] `src/assets/Tiendas.png` (121KB)
- [ ] `src/assets/Corte de caja.png` (103KB)
- [ ] `src/assets/Carrito de venta.png` (98KB)
- [ ] Ahorro estimado: ~400KB → ~120KB total

### 4. Mover `fadeInUp` a critical.css
- [x] Está en `deferred.css` pero se usa above-the-fold (Hero, Industries)
- [x] Mover keyframe a `critical.css` para evitar flash sin animación

### 5. Extraer color `#CAD2DE` al theme
- [x] Se repite en 4 componentes (Industries, Features, FAQ, DashboardPreview) y en App.jsx
- [x] Agregar `palette.surface.alt: '#CAD2DE'` al theme

### 6. Mover datos estáticos a `src/data/`
- [x] `features` (18 items) → `src/data/features.jsx`
- [x] `industries` (10 items) → `src/data/industries.jsx`
- [x] `benefits` (4 items) → `src/data/benefits.jsx`
- [x] `steps` (4 items) → `src/data/steps.jsx`
- [x] `faqs` (7 items) → `src/data/faqs.js`
- [x] `plans` (2 items) → `src/data/plans.js`
- [x] Los componentes quedan como pura UI

---

## 🟢 Baja prioridad

### 7. Reorganizar components en subcarpetas
- [x] Mover secciones a `components/sections/`
- [x] Mover layout a `components/layout/`
- [x] Mover UI a `components/ui/`
- [x] Actualizar todos los imports

### 8. Fusionar `config/` en `constants/`
- [x] Mover `config/constants.js` → `constants/config.js`
- [x] Eliminar directorio `config/`
- [x] Actualizar imports

### 9. Reemplazar `transition: 'all'` por propiedades específicas
- [x] `transition: 'all 0.3s...'` → `transition: 'transform 0.3s..., box-shadow 0.3s...'`
- [x] Afecta: Features, Benefits, Industries, FAQ, Pricing, DashboardPreview, Hero, theme

### 10. Agregar JSDoc a componentes con props
- [x] `SectionHeader` — overline, title, subtitle, sx, overlineSx, titleSx, subtitleSx
- [x] `NavDrawer` — open, onClose, navItems, onNav
- [x] `LazyImage` — src, alt, sx, width, height

### 11. Sistema de spacing consistente para secciones
- [x] Unificar padding de secciones con `sectionPadding` constante
- [x] Aplicado en todas las secciones

### 12. Preload font Inter
- [x] Agregar `<link rel="preload">` para el font file específico en `index.html`
- [x] Agregar `<link rel="stylesheet">` para cargar Inter de Google Fonts

### 13. GA desde env var en vez de hardcodeado
- [ ] Descartado — se deja hardcodeado en index.html
