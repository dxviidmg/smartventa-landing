import Providers from './providers';
import Script from 'next/script';

export const metadata = {
  title: 'Punto de Venta en la Nube para tu Negocio y Sucursales | SmartVenta México',
  description: 'Punto de venta en la nube (POS) para controlar tu negocio estés donde estés, con una o varias sucursales en México. Controla ventas, inventario, caja y traspasos desde un solo lugar. Sin instalar nada. Desde $399 MXN al mes.',
  authors: [{ name: 'SmartVenta' }],
  robots: 'index, follow',
  metadataBase: new URL('https://smartventa-pos.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'SmartVenta - Controla tu negocio estés donde estés',
    description: 'Punto de venta en la nube para controlar ventas, inventario y caja desde un solo lugar, con una o varias sucursales. Sin instalación. Desde $399/mes.',
    images: ['/logo.jpg'],
    locale: 'es_MX',
    siteName: 'SmartVenta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartVenta - Controla tu negocio estés donde estés',
    description: 'POS en la nube para controlar tu negocio desde cualquier lugar, con una o varias sucursales.',
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
    { '@type': 'Question', name: '¿Qué es SmartVenta?', acceptedAnswer: { '@type': 'Answer', text: 'Es un punto de venta en la nube para negocios que quieren controlar sus ventas, inventario y caja desde un solo lugar, tengan una o varias sucursales. Funciona desde el navegador, sin instalar nada.' } },
    { '@type': 'Question', name: '¿SmartVenta funciona desde cualquier lugar?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Es un sistema en la nube, así que puedes consultar tus ventas, inventario y caja desde cualquier lugar con conexión a internet, sin necesidad de estar físicamente en la tienda.' } },
    { '@type': 'Question', name: '¿Puedo usar SmartVenta con una sola sucursal?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. SmartVenta funciona perfectamente con una sola tienda. Y si más adelante creces, puedes agregar más sucursales sin cambiar de sistema.' } },
    { '@type': 'Question', name: '¿Puedo manejar varias sucursales?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Puedes administrar varias tiendas y almacenes dentro de la misma cuenta, con un catálogo, precios e inventario centralizados.' } },
    { '@type': 'Question', name: '¿Cómo funcionan los traspasos?', acceptedAnswer: { '@type': 'Answer', text: 'Los traspasos te permiten mover mercancía entre sucursales dejando registro de quién la mandó, cuándo y a dónde, para que siempre tengas trazabilidad del inventario.' } },
    { '@type': 'Question', name: '¿Puedo vender productos por peso?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Puedes vender por pieza, por peso (kilo o fracción) o por monto, y el sistema calcula automáticamente la cantidad correspondiente.' } },
    { '@type': 'Question', name: '¿Puedo importar mis productos desde Excel?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Puedes subir tu catálogo completo desde un archivo de Excel con plantillas descargables y validación antes de importar.' } },
    { '@type': 'Question', name: '¿Necesito instalar algo?', acceptedAnswer: { '@type': 'Answer', text: 'No. SmartVenta funciona en la nube. Solo necesitas internet y un navegador. Abres la página, inicias sesión y listo.' } },
    { '@type': 'Question', name: '¿Tiene contrato?', acceptedAnswer: { '@type': 'Answer', text: 'No. SmartVenta no requiere contrato.' } },
    { '@type': 'Question', name: '¿Qué incluye el precio?', acceptedAnswer: { '@type': 'Answer', text: 'Todos los módulos están incluidos: ventas, inventario, traspasos, caja, vendedores, clientes, descuentos, apartados, dashboard y más. Además, actualizaciones sin costo, soporte por WhatsApp y configuración inicial guiada.' } },
    { '@type': 'Question', name: '¿Puedo hablar con alguien si necesito ayuda?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Cuentas con soporte y acompañamiento por WhatsApp cuando lo necesites.' } },
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
