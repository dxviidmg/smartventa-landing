// JSON-LD schemas injected in the document head (organization, software application and FAQ).
import { BASE_URL } from './site';

/* ── Structured Data ──────────────────────────────────────── */

export const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SmartVenta',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpg`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'es',
  },
  sameAs: [],
};

export const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SmartVenta',
  url: BASE_URL,
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
    url: BASE_URL,
  },
  screenshot: `${BASE_URL}/og-image.jpg`,
};

// Synced with the actual FAQ component (same questions and answers)
export const jsonLdFaq = {
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
