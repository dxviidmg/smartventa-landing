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
    { '@type': 'Question', name: '¿Necesito instalar algo?', acceptedAnswer: { '@type': 'Answer', text: 'No. SmartVenta funciona en la nube. Solo necesitas internet y un navegador. Abres la página, inicias sesión y listo.' } },
    { '@type': 'Question', name: '¿Hay contrato o permanencia?', acceptedAnswer: { '@type': 'Answer', text: 'No. Pagas mes a mes y cancelas cuando quieras. Sin letras chiquitas.' } },
    { '@type': 'Question', name: '¿Cómo es la demo?', acceptedAnswer: { '@type': 'Answer', text: 'Te hacemos una llamada, te mostramos el sistema en vivo y resolvemos tus dudas. Si te convence, te damos acceso en segundos.' } },
    { '@type': 'Question', name: '¿Es difícil de aprender?', acceptedAnswer: { '@type': 'Answer', text: 'No. La interfaz es directa y hay ayuda en cada pantalla. Los vendedores de nuestros clientes empezaron a usar el sistema desde el primer día.' } },
    { '@type': 'Question', name: '¿Funciona con mi impresora o lector de códigos?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Es compatible con impresoras térmicas estándar y lectores de código de barras USB o Bluetooth.' } },
    { '@type': 'Question', name: '¿Qué pasa si se va el internet?', acceptedAnswer: { '@type': 'Answer', text: 'Necesitas conexión para operar, pero cualquier conexión estable es suficiente — incluso datos móviles.' } },
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
