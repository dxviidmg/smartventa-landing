// Web app manifest: name, colors and icons used when the site is installed or pinned on a phone.
export default function manifest() {
  return {
    name: 'SmartVenta',
    short_name: 'SmartVenta',
    start_url: '/',
    display: 'standalone',
    background_color: '#171A4A',
    theme_color: '#171A4A',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
