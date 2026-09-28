import Providers from './providers';
import Script from 'next/script';

const BASE = 'https://smartventa-pos.vercel.app';

export const metadata = {
  title: {
    default: 'SmartVenta — Punto de Venta en la Nube para Negocios con Sucursales | México',
    template: '%s | SmartVenta',
  },
  description:
    'Sistema punto de venta (POS) en la nube para negocios con una o varias sucursales. ' +
    'Controla ventas, inventario, traspasos, caja y precios desde un solo lugar. ' +
    'Sin instalación, sin contrato. Desde $399/mes MXN.',
  keywords: [
    'punto de venta', 'POS', 'punto de venta en la nube', 'sistema de ventas',
    'inventario', 'multi-sucursal', 'traspasos', 'control de inventario',
    'software para tiendas', 'sistema para negocios', 'caja registradora',
    'punto de venta México', 'POS nube México', 'venta por peso',
    'corte de caja', 'control de sucursales',
  ],
  authors: [{ name: 'SmartVenta', url: BASE }],
  creator: 'SmartVenta',
  publisher: 'SmartVenta',
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  metadataBase: new URL(BASE),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'SmartVenta — Punto de Venta en la Nube para Negocios con Sucursales',
    description:
      'Controla ventas, inventario, traspasos y caja de todas tus sucursales desde un solo lugar. Sin instalación. Desde $399/mes.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SmartVenta — Dashboard de ventas y control de sucursales',
        type: 'image/jpeg',
      },
    ],
    locale: 'es_MX',
    siteName: 'SmartVenta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartVenta — Punto de Venta en la Nube para Negocios con Sucursales',
    description:
      'Controla ventas, inventario, traspasos y caja de todas tus sucursales desde un solo lugar. Sin instalación. Desde $399/mes.',
    images: ['/og-image.jpg'],
  },
  other: {
    'geo.region': 'MX',
    'geo.placename': 'México',
  },
  category: 'business',
};

export const viewport = {
  themeColor: '#05346B',
  width: 'device-width',
  initialScale: 1,
};

/* ── Structured Data ──────────────────────────────────────── */

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SmartVenta',
  url: BASE,
  logo: `${BASE}/logo.jpg`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'es',
  },
  sameAs: [],
};

const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SmartVenta',
  url: BASE,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Sistema punto de venta (POS) en la nube para negocios minoristas y mayoristas con múltiples sucursales. ' +
    'Controla ventas, inventario, traspasos, caja y precios desde un solo lugar. ' +
    'Sin instalación, sin contrato.',
  offers: {
    '@type': 'Offer',
    price: '399',
    priceCurrency: 'MXN',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: BASE,
  },
  screenshot: `${BASE}/og-image.jpg`,
};

// Synced with the actual FAQ component
const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta SmartVenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde $399/mes (1 sucursal). El precio baja por sucursal conforme creces. 3 tiendas: $1,149/mes. 5 tiendas: $1,799/mes. Sin contrato, sin sorpresas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye SmartVenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Todo: punto de venta, inventario, traspasos, distribuciones, caja, dashboard, cambios masivos de precios, importación desde Excel, auditoría, soporte por WhatsApp y actualizaciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito instalar algo para usar SmartVenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Solo necesitas navegador e internet. Funciona en computadora, tableta y celular. Si usas impresora de tickets, te ayudamos a configurarla.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo empezar con una sola tienda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Y cuando crezcas a 4 o 10 sucursales, no cambias de sistema. Simplemente agregas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona el soporte de SmartVenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WhatsApp directo. Te ayudamos a configurar, resolver dudas y empezar a vender.',
      },
    },
    {
      '@type': 'Question',
      name: '¿SmartVenta funciona desde cualquier lugar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Es un sistema en la nube. Puedes consultar tus ventas, inventario y caja desde cualquier lugar con conexión a internet, sin necesidad de estar físicamente en la tienda.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo manejar varias sucursales con SmartVenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Puedes administrar varias tiendas y almacenes dentro de la misma cuenta, con catálogo, precios e inventario centralizados.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo vender productos por peso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Puedes vender por pieza, por peso (kilo o fracción) o por monto ("dame $20 de queso"), y el sistema calcula automáticamente la cantidad correspondiente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo importar mis productos desde Excel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Puedes subir tu catálogo completo desde un archivo de Excel con plantillas descargables y validación previa de errores.',
      },
    },
  ],
};

/* ── Layout ───────────────────────────────────────────────── */

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body style={{ margin: 0 }}>
        <Providers>{children}</Providers>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6L1LW3KBTF" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-6L1LW3KBTF');`}
        </Script>
      </body>
    </html>
  );
}
