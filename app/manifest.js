// Web app manifest: name, colors and icons used when the site is installed or pinned on a phone.
export default function manifest() {
  return {
    name: 'SmartVenta — Punto de Venta en la Nube',
    short_name: 'SmartVenta',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0030AB',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
