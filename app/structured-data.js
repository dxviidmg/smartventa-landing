// JSON-LD schemas injected in the document head (organization, software application and FAQ).
import { BASE_URL } from './site';

/* ── Structured Data ──────────────────────────────────────── */

export const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SmartVenta',
  url: BASE_URL,
  logo: `${BASE_URL}/icon-512.png`,
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
    'Punto de venta en la nube para negocios con inventario, de una tienda a varias sucursales y almacenes. ' +
    'Controla ventas, inventario, traspasos, caja y precios desde un solo lugar. ' +
    'Listo para usar desde el navegador, mes a mes.',
  offers: {
    '@type': 'Offer',
    price: '399',
    priceCurrency: 'MXN',
    priceValidUntil: '2027-12-31',
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
    ['¿Qué necesito para empezar?', 'Solo un navegador e internet. Funciona en computadora, tableta y celular. Si usas impresora de tickets, te ayudamos a configurarla.'],
    ['¿Puedo empezar con una sola tienda?', 'Sí. Cuando abras más sucursales o un almacén, las funciones para varias sucursales se activan solas y no cambias de sistema. Además, el precio por sucursal baja conforme creces.'],
    ['¿Puedo traer mi catálogo actual?', 'Sí. Si lo tienes en Excel, lo cargamos por ti sin costo, con plantillas y validación, en un máximo de una semana.'],
    ['¿Quién puede cambiar precios, inventario y caja?', 'Los costos y los precios de productos existentes solo los ve y cambia el dueño. El administrador pide los ajustes de inventario y el dueño los aprueba. Todo movimiento queda registrado con quién lo hizo y cuándo.'],
    ['¿Mi información está protegida?', 'Tu información vive en la nube y se entra con usuario y contraseña. Cada persona solo ve lo que su rol permite, y el sistema guarda quién hizo cada movimiento.'],
    ['¿Qué impresora necesito?', 'Una impresora térmica de tickets. Recomendamos la Epson TM-88V, por USB. Desde celular no se imprimen tickets.'],
    ['¿Puedo ver una demo antes de contratar?', 'Sí. Escríbenos por WhatsApp y te damos acceso a una cuenta demo.'],
    ['¿Cómo se paga y cómo se cancela?', 'El pago es mensual con tarjeta, con Mercado Pago, sin contratos largos. El propietario puede cancelar cuando quiera desde Mi plan: se detiene el cobro y el acceso se cierra de inmediato. No hay reembolsos, tus datos se conservan y puedes reactivar con soporte.'],
    ['¿Cómo funciona el soporte?', 'Directo por WhatsApp, desde el mismo sistema, con los datos de tu negocio ya escritos. Te ayudamos a configurar, resolver dudas y empezar a vender.'],
  ].map(([name, text]) => ({
    '@type': 'Question',
    name,
    acceptedAnswer: { '@type': 'Answer', text },
  })),
};
