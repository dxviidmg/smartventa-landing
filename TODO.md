# TODO - Configuración Final

## Pendientes antes de lanzar a producción:

### 1. Google Analytics
- [ ] Crear cuenta en https://analytics.google.com/
- [ ] Obtener ID de medición (G-XXXXXXXXXX)
- [ ] Reemplazar en `/index.html` (líneas 9 y 13)
- [ ] Reemplazar en `/src/analytics.js` (línea 4)

### 2. Dominio
- [ ] Actualizar URLs en `/index.html` (meta tags Open Graph y canonical)
- [ ] Actualizar URL en `/public/sitemap.xml`
- [ ] Actualizar URL en `/public/robots.txt`

### 3. Imagen Open Graph
- [ ] Crear imagen 1200x630px con logo y texto
- [ ] Guardar como `/public/og-image.jpg`
- [ ] Verificar que se vea bien en https://www.opengraph.xyz/

### 4. Verificación
- [ ] Probar todos los links del footer
- [ ] Probar botón de WhatsApp
- [ ] Verificar responsive en móvil
- [ ] Probar formulario de contacto
- [ ] Verificar que todas las animaciones funcionen

### 5. SEO
- [ ] Enviar sitemap a Google Search Console
- [ ] Verificar meta tags con https://metatags.io/
- [ ] Probar velocidad con https://pagespeed.web.dev/

### 6. Opcional
- [ ] Configurar EmailJS para formulario de contacto
- [ ] Agregar testimonios reales de clientes
- [ ] Agregar video demo del producto
- [ ] Configurar certificado SSL (HTTPS)
- [ ] Configurar CDN para assets
