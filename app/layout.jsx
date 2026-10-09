import Providers from './providers';
import Script from 'next/script';

const BASE = 'https://smartventa-pos.vercel.app';

export const metadata = {
  title: {
    default: 'SmartVenta — Punto de Venta en la Nube para tu Negocio | México',
    template: '%s | SmartVenta',
  },
  description:
    'Punto de venta en la nube para negocios con inventario, de una tienda a varias sucursales. ' +
    'Controla ventas, inventario, traspasos, caja y precios desde un solo lugar. ' +
    'Listo para usar desde el navegador, mes a mes. Desde $399/mes MXN.',
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
    title: 'SmartVenta — Punto de Venta en la Nube para tu Negocio',
    description:
      'Controla ventas, inventario, traspasos y caja de tu negocio desde un solo lugar. Listo para usar desde el navegador, mes a mes. Desde $399/mes.',
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
    title: 'SmartVenta — Punto de Venta en la Nube para tu Negocio',
    description:
      'Controla ventas, inventario, traspasos y caja de tu negocio desde un solo lugar. Listo para usar desde el navegador, mes a mes. Desde $399/mes.',
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
    'Punto de venta en la nube para negocios minoristas y mayoristas, de una tienda a varias sucursales y almacenes. ' +
    'Controla ventas, inventario, traspasos, caja y precios desde un solo lugar. ' +
    'Listo para usar desde el navegador, mes a mes.',
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

// Synced with the actual FAQ component (same questions and answers)
const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['¿Qué necesito para empezar?', 'Solo un navegador e internet. Funciona en computadora, tableta y celular, y te ayudamos a configurar tu impresora de tickets.'],
    ['¿Puedo empezar con una sola tienda?', 'Sí. Y cuando crezcas no cambias de sistema: agregas sucursales y el precio por cada una baja.'],
    ['¿Puedo traer mi catálogo actual?', 'Sí. Si lo tienes en Excel, lo importamos por ti con plantillas y validación, para que empieces con datos reales.'],
    ['¿Quién puede cambiar precios, stock y caja?', 'Solo el dueño. Vendedores y administradores solicitan los ajustes de stock y el dueño los aprueba. Todo movimiento queda registrado.'],
    ['¿Mi información está segura?', 'Sí. Vive en la nube y queda respaldada, así que tus datos están protegidos aunque tu computadora falle o se pierda.'],
    ['¿Cómo funciona el soporte?', 'Directo por WhatsApp. Te ayudamos a configurar, resolver dudas y empezar a vender.'],
  ].map(([name, text]) => ({
    '@type': 'Question',
    name,
    acceptedAnswer: { '@type': 'Answer', text },
  })),
};

/* ── Layout ───────────────────────────────────────────────── */

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Poppins:wght@500&family=Open+Sans:wght@400&display=swap"
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
