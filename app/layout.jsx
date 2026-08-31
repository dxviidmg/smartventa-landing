import Providers from './providers';
import Script from 'next/script';

export const metadata = {
  title: 'Punto de Venta en la Nube para Múltiples Sucursales | SmartVenta México',
  description: 'Sistema punto de venta en la nube para negocios con múltiples sucursales en México. Controla inventario, ventas y transferencias en tiempo real. Sin instalación. Desde $399 MXN por sucursal.',
  authors: [{ name: 'SmartVenta' }],
  robots: 'index, follow',
  metadataBase: new URL('https://smartventa-pos.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'SmartVenta - Punto de Venta en la Nube',
    description: 'Controla múltiples sucursales, inventario y ventas en tiempo real desde cualquier dispositivo. Sin instalación.',
    images: ['/logo.jpg'],
    locale: 'es_MX',
    siteName: 'SmartVenta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartVenta - Punto de Venta en la Nube',
    description: 'Sistema POS en la nube para múltiples sucursales. Control total desde cualquier dispositivo.',
    images: ['/logo.jpg'],
  },
  other: {
    'geo.region': 'MX',
    'geo.placename': 'México',
  },
};

export const viewport = {
  themeColor: '#05346B',
  width: 'device-width',
  initialScale: 1,
};

const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SmartVenta',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Sistema punto de venta en la nube para múltiples sucursales en México.',
  offers: {
    '@type': 'Offer',
    price: '399',
    priceCurrency: 'MXN',
    availability: 'https://schema.org/InStock',
    url: 'https://smartventa-pos.vercel.app/',
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué es SmartVenta?', acceptedAnswer: { '@type': 'Answer', text: 'Es un punto de venta en la nube para negocios que quieren controlar sus ventas, inventario y sucursales desde un solo lugar. Funciona desde el navegador, sin instalar nada.' } },
    { '@type': 'Question', name: '¿Puedo administrar varias sucursales?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Puedes crear tiendas y almacenes dentro de la misma cuenta. El catálogo, precios e inventario se administran de forma centralizada.' } },
    { '@type': 'Question', name: '¿Puedo importar mis productos?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Puedes subir tu catálogo completo desde un archivo de Excel con plantillas descargables y validación antes de importar.' } },
    { '@type': 'Question', name: '¿Necesito instalar algo?', acceptedAnswer: { '@type': 'Answer', text: 'No. SmartVenta funciona en la nube. Solo necesitas internet y un navegador. Abres la página, inicias sesión y listo.' } },
    { '@type': 'Question', name: '¿Funciona con lector de códigos de barras?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Es compatible con lectores de código de barras USB y Bluetooth. También puedes buscar productos por nombre o SKU.' } },
    { '@type': 'Question', name: '¿Cómo funcionan los precios?', acceptedAnswer: { '@type': 'Answer', text: 'El precio depende del número de tiendas y almacenes que tengas. Empieza desde $399/mes por una ubicación. Todo incluido, sin módulos extra.' } },
    { '@type': 'Question', name: '¿Qué métodos de pago puedo registrar?', acceptedAnswer: { '@type': 'Answer', text: 'Puedes registrar ventas con efectivo, tarjeta y transferencia. Una misma venta puede combinar varios métodos de pago.' } },
    { '@type': 'Question', name: '¿Cómo empiezo?', acceptedAnswer: { '@type': 'Answer', text: 'Crea tu cuenta en línea o agenda una llamada y lo hacemos juntos. Si ya tienes un catálogo en Excel, lo subimos ahí mismo.' } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        <Providers>
          {children}
        </Providers>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6L1LW3KBTF"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-6L1LW3KBTF');`}
        </Script>
      </body>
    </html>
  );
}
