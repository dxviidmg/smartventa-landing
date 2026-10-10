# SmartVenta Landing

Landing page de **SmartVenta**, punto de venta en la nube para negocios con inventario (de una tienda a varias sucursales y almacenes). Este README es la **fuente de verdad del frontend**: aquí está cada decisión de estilo y dónde cambiarla.

## Stack

- **Next.js 16** (App Router) y **React 19**. Requiere **Node 20.9 o superior**.
- **Material UI 7** (`@mui/material`, `@mui/icons-material`) con **Emotion**. Los estilos se escriben con la prop `sx`.
- **Framer Motion** para animaciones (`MotionConfig reducedMotion="user"` en `app/providers.jsx`).
- Despliegue en **Vercel** (`vercel.json`). Google Analytics con `gtag` cargado en `app/layout.jsx`.

## Comandos

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # compila para producción
npm run start   # sirve el build
```

### Variables de entorno

Copia `.env.template` a `.env` y completa:

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | Número de WhatsApp (solo dígitos) |
| `NEXT_PUBLIC_WHATSAPP_PHONE_FORMATTED` | Número como se muestra en pantalla y en los textos legales |
| `NEXT_PUBLIC_APP_URL` | URL de la app; "Iniciar sesión" (menú) abre `${APP_URL}` y "Crear mi cuenta" (hero, precios y contacto) abre `${APP_URL}/registrarme` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Correo de contacto |

Sin estas variables los textos legales muestran el teléfono vacío y los botones de registro no tienen destino.

## Estructura

```
app/
  layout.jsx            Metadata, fuentes, JSON-LD y scripts
  page.jsx              Orden de las secciones
  providers.jsx         Tema MUI, contextos y MotionConfig
  site.js               BASE_URL (URL pública única)
  structured-data.js    Esquemas JSON-LD (Organization, SoftwareApplication, FAQPage)
  robots.js, sitemap.js, manifest.js
src/
  theme.js              Tema MUI base (tipografía de cuerpo, paleta, botones)
  constants/
    design.js           TOKENS DE DISEÑO (fuentes, azules del SaaS, ámbar, botones)  <- empieza aquí
    animations.js       Presets de Framer Motion
    config.js           Datos de contacto y empresa (leen las variables de entorno)
    index.js            Reexporta todo lo anterior
  data/                 Contenido separado del diseño
    industries.js       27 industrias con icono y color
    scenarios.js        4 casos de negocio (lo que buscas / lo que logras)
    features.js         5 grupos de funciones
    legal.js            Términos y Privacidad
  hooks/usePricing.js   Tabla de precios, reglas y cálculo
  contexts/             AppContext (drawer, scroll) y WhatsAppContext
  components/
    layout/             Navbar, NavDrawer, Footer, LegalDialog
    sections/           Una carpeta de contenido por bloque de la página
    ui/                 SectionHeading, ilustraciones SVG, SampleWindows, CountUp
public/                 hero-bg.png, triangle-double.png, og-image.jpg, favicon y logos e iconos (SVG/PNG, variantes blanca y azul)
```

## Orden de la página

| # | Sección | Archivo | Fondo |
| --- | --- | --- | --- |
| 1 | Hero | `sections/Hero.jsx` | Imagen `hero-bg.png` (escala del marino, con curva) |
| 2 | Industrias (rotativo de 3) | `sections/Industries.jsx` | Blanco |
| 3 | Cifras | `sections/Stats.jsx` | `BLUE_BG` |
| 4 | Una solución para cada tipo de negocio | `sections/BeforeAfter.jsx` | Blanco |
| 5 | Funciones (5 grupos) | `sections/ProductShowcase.jsx` | `BLUE_BG` |
| 6 | Precios (deslizador) | `sections/Pricing.jsx` | Blanco |
| 7 | Preguntas frecuentes | `sections/FAQ.jsx` | Blanco |
| 8 | Empieza hoy (3 pasos y botones) | `sections/Contact.jsx` | `CTA_BG` con triángulos |
| 9 | Pie de página | `layout/Footer.jsx` | `FOOTER_BG` (marino) |

Se alternan fondos blancos y azules. Las anclas del menú son `#industries`, `#product`, `#pricing` y `#faq`; el cierre es `#start`.

---

# Guía de estilos (fuente de verdad)

Regla general: **un valor visual se define una sola vez**. Los tokens van en `src/constants/design.js`; si un valor se repite en más de dos componentes, súbelo ahí.

## Tipografía

Se cargan en `app/layout.jsx` (Google Fonts, `display=swap`):

| Fuente | Pesos | Dónde se usa |
| --- | --- | --- |
| **Poppins** | 500 | Títulos, botones, menú, etiquetas y números destacados. Token `POPPINS` |
| **Rubik** | 400 a 700 | Texto de cuerpo por defecto (definido en `theme.js`) |
| **Open Sans** | 400 | Solo el subtítulo del Hero |

Escala usada:

| Elemento | Tamaño (móvil / escritorio) | Detalle |
| --- | --- | --- |
| Título del Hero | 38 / 60 px (44 en tablet) | Poppins 500, interlineado 50 / 68 px |
| Título de sección (h2) | 30 / 40 px | Poppins 500, `letterSpacing: 0`, interlineado 1.2, color `#0F172A` |
| Etiqueta sobre el título (eyebrow) | 14 px | Poppins 500, color `PRIMARY` (`#1D4ED8`) |
| Subtítulo de sección | 15 / 16 px | Interlineado 1.7, color `#475569` |
| Título de tarjeta (h3) | 16 a 20 px | Poppins 500 |
| Texto de tarjeta | 14 a 15 px | Interlineado 1.6 a 1.7 |

Los títulos de sección **no se escriben a mano**: usa `components/ui/SectionHeading.jsx` (props `eyebrow`, `title`, `subtitle`, `dark`, `maxWidth`, `mb`, `titleSx`, `subtitleSx`).

## Colores

### Marca y degradados (`constants/design.js`)

Todo parte del marino `#0B1B4D` del SaaS (`pos-multi-store`, `AGENTS.md`), para que landing y aplicación se vean como una sola marca. Los degradados son tonos de ese marino hasta `#1E3A8A`; no se usan celestes ni otros azules.

| Token | Valor | Uso |
| --- | --- | --- |
| `NAVY` | `#0B1B4D` | **Color base de toda la interfaz** (igual que el sidebar y los botones de acción de la app): pestañas activas, deslizador, tablas, texto sobre ámbar |
| `PRIMARY` | `#0B1B4D` | Énfasis sobre fondo claro (etiquetas, enlaces): el mismo marino |
| `GRADIENT` | `linear-gradient(135deg, #0B1B4D 0%, #1E3A8A 100%)` | Iconos en círculo y acentos |
| `NAV_BG` | `#0B1B4D` | Barra del menú al hacer scroll y panel móvil (marino sólido) |
| `BLUE_BG` | `linear-gradient(135deg, #0B1B4D 0%, #1E3A8A 100%)` | Secciones oscuras de contenido (Cifras, Funciones) |
| `CTA_BG` | `linear-gradient(135deg, #1E3A8A 0%, #0B1B4D 100%)` | Cierre "Empieza hoy" y tarjeta "Lo que logras con SmartVenta" |
| `FOOTER_BG` | `linear-gradient(180deg, #0B1B4D 0%, #08143A 100%)` | Pie de página (mismo degradado del sidebar de la app) |
| `SURFACE_MUTED` | `#E8EEF6` | Fondo apagado de las secciones claras (igual que el fondo general de la app) |
| `ACCENT` | `#00E0D8` | Hover de enlaces del menú y del pie (mismo turquesa del sidebar activo de la app) |
| `AMBER` | `#FFB020` | **Único color cálido**: botones principales (Hero, Precios, cierre) y palabras destacadas |

El fondo del Hero (`public/hero-bg.png`) es la imagen de la plantilla de referencia **recoloreada** con la escala `#08143A` a `#0B1B4D` a `#14307F` a `#2A4BAE`; si se cambia la paleta hay que volver a generarla (mapeo de luminosidad con ImageMagick).

### Neutros y texto (mismos valores que la aplicación)

| Token / valor | Uso |
| --- | --- |
| `SURFACE_MUTED` `#E8EEF6` | Fondo de las secciones claras (`background.default` de la app) |
| `SURFACE` `#FBFCFE` | Tarjetas, paneles y entradas (`background.paper`) |
| `BORDER` `#DDE3EC` | Bordes finos de tarjetas (`border`) |
| `SHADOW_CARD` | `0 8px 24px rgba(15,23,42,0.12)`: sombra neutra de tarjetas |
| `#0F172A` | Títulos y texto principal sobre fondo claro (`text.primary`) |
| `#475569` | Texto secundario (`text.secondary`) |
| `#FFFFFF` y `rgba(255,255,255,0.92)` | Texto sobre fondos azules |
| `#0B1B4D` | Texto **sobre ámbar** (contraste 9:1; nunca usar blanco sobre ámbar) |
| `#047857`, `#10B981` | Positivo (confirmaciones, ganancia) |
| `#25D366` | Verde de WhatsApp (botón flotante), solo ahí |

### Colores por industria
Cada industria tiene su color en `src/data/industries.js`. Todos cumplen al menos 3:1 contra blanco. Para cambiar uno, edita ese archivo.

### Regla del acento cálido
El ámbar se usa en pocos lugares a propósito. Si agregas otro uso, que sea un botón principal o un detalle puntual; nunca fondos grandes.

## Forma, espacio y sombras

| Elemento | Valor |
| --- | --- |
| Botones y pestañas (píldora) | `borderRadius: 45px`, Poppins 500 de 16 px, altura mínima 44 px |
| Padding de botón | `13-14px` vertical, `40-45px` horizontal |
| Tarjetas y paneles | Radio `20-28px`, fondo `SURFACE`, borde de 1 px `BORDER` |
| Sombra de tarjeta clara | `SHADOW_CARD` |
| Sombra de tarjeta destacada | `0 20px 44px rgba(15,23,42,0.14)` |
| Sombra del botón ámbar | `0 8px 24px rgba(255,176,32,0.35)` |
| Padding vertical de sección | `py: { xs: 7, md: 10 }` (también 6/8, 7/9 y 9/13 en bloques puntuales) |
| Contenedor | `Container maxWidth="lg"` (1200 px); `md` para Precios |
| Gutters del contenedor | 20 px en móvil, 32 px desde 600 px (definido en `theme.js`) |

Breakpoints de MUI: `xs` 0, `sm` 600, `md` 900, `lg` 1200, `xl` 1536. El diseño es mobile-first: se escribe el caso móvil y se sube con `md`.

## Componentes y patrones

- **Botón principal:** `{ ...pillSx, ...amberSx }` más padding. Contiene "Crear mi cuenta".
- **Botón secundario:** píldora con borde (blanco sobre azul, `NAVY` sobre claro).
- **Icono en círculo:** círculo de `GRADIENT` (o translúcido blanco sobre azul), icono blanco de MUI.
- **Menú (`Navbar`):** fijo y transparente arriba; al pasar los 40 px de scroll aparece una capa con `NAV_BG` mediante un fade de 0.4 s. Altura constante. Enlaces en Poppins 500 de 16 px. El menú móvil (`NavDrawer`) usa el mismo degradado.
- **Pie (`Footer`):** `FOOTER_BG`, logo blanco, enlaces con hover `ACCENT`, ventanas legales con `LegalDialog`.
- **Ilustraciones:** SVG propios en `components/ui` (`HeroIllustration`, `OwnerPhoneIllustration`, `SupportChatIllustration`, `ScenarioScenes`). Estilo plano, sin licencias externas. Usan `AMBER` para los acentos cálidos.
- **Ventanas de ejemplo** (`SampleWindows`): maquetas con datos ilustrativos, ocultas a lectores de pantalla (`aria-hidden`). Los datos son inventados; reemplázalos por capturas reales cuando existan.

## Movimiento

- Presets en `constants/animations.js` (`fadeUp`, `faqItem`, `heroContainer`, `heroItem`, `heroImage`). Curva `[0.25, 0.1, 0.25, 1]`, duración 0.5 s.
- Industrias rota cada 2.5 s y se detiene al pasar el cursor; las cifras cuentan hasta 5 s.
- **Siempre** respetar `prefers-reduced-motion`: `MotionConfig` lo hace para Framer Motion y los efectos CSS llevan `@media (prefers-reduced-motion: reduce)`.

## Accesibilidad (criterios que no se rompen)

- Contraste mínimo 4.5:1 en texto normal (3:1 en texto grande e iconos).
- Objetivos táctiles de al menos 44 px (botones, menú, enlaces del pie).
- Cada sección lleva `aria-labelledby` apuntando al `id` de su título.
- Pestañas con `role="tablist"`, navegación por flechas, Inicio y Fin.
- Foco visible en todos los controles.
- Sin scroll horizontal: no usar `width: 1` en MUI (equivale a 100%); para ocultar texto visualmente usa `width: '1px'`.

---

# Cómo cambiar...

| Quiero cambiar | Dónde |
| --- | --- |
| El azul de marca o el ámbar | `src/constants/design.js` (`PRIMARY`, `NAVY`, `GRADIENT`, `NAV_BG`, `BLUE_BG`, `CTA_BG`, `FOOTER_BG`, `AMBER`) |
| La fuente de títulos | `POPPINS` en `design.js` y el `<link>` de fuentes en `app/layout.jsx` |
| La fuente del cuerpo | `src/theme.js` (`typography.fontFamily`) y `app/layout.jsx` |
| El tamaño o color de los títulos de sección | `components/ui/SectionHeading.jsx` |
| El estilo de los botones | `pillSx` y `amberSx` en `design.js` |
| Colores o iconos de las industrias | `src/data/industries.js` |
| Textos de los casos de negocio | `src/data/scenarios.js` (y dibujos en `ui/ScenarioScenes.jsx`) |
| Funciones del producto | `src/data/features.js` |
| Precios | `PRICE_TABLE` en `src/hooks/usePricing.js` (hoy: 1 sucursal $399 hasta 10 sucursales $3,399; más de 10 se cotiza por WhatsApp) |
| Preguntas frecuentes | Arreglo `faqs` en `sections/FAQ.jsx` **y** `app/structured-data.js` (deben coincidir) |
| Términos y Privacidad | `src/data/legal.js` |
| Orden o fondos de las secciones | `app/page.jsx` y el `bgcolor`/`background` de cada sección |
| Enlaces del menú | `NAV_ITEMS` en `layout/Navbar.jsx` (y el pie en `layout/Footer.jsx`) |
| Metadata, Open Graph y esquemas | `app/layout.jsx`, `app/structured-data.js`, `app/site.js` |

## Añadir una sección nueva

1. Crea `src/components/sections/Nombre.jsx` con `component="section"`, un `id` y `aria-labelledby`.
2. Usa `SectionHeading` para el título y `py: { xs: 7, md: 10 }`.
3. Alterna el fondo con la sección vecina (blanco o `BLUE_BG`).
4. Importa el contenido desde `src/data/` si es una lista.
5. Registrála en `app/page.jsx` y, si debe tener enlace, en `NAV_ITEMS`.

## Contenido y tono

- Lenguaje en positivo, directo, orientado a resultados; tuteo; sin promesas que no se puedan respaldar.
- Afirmaciones confirmadas: "empiezas en minutos". No afirmar "prueba gratis", cifras de importación ni historiales de meses hasta confirmarlos.
- Cada idea aparece una vez: lo de "mes a mes y sin instalación" vive en Precios; el soporte por WhatsApp, en el cierre y la FAQ.
- Los precios no se reescriben fuera de `usePricing.js`.
