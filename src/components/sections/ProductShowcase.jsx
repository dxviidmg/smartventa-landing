'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, cardGridItem } from '../../constants';
import carritoImg from '../../assets/Carrito de venta.png';
import { LazyImage } from '../ui/LazyImage';

const BrowserFrame = ({ src, alt }) => (
  <Box
    sx={{
      borderRadius: 2.5,
      overflow: 'hidden',
      bgcolor: '#1e293b',
      boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.75}
      sx={{ px: 1.5, py: 0.8, bgcolor: '#1e293b' }}
    >
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ef4444' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#eab308' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
      <Box sx={{
        flex: 1, mx: 1.5, py: 0.3, px: 1.5,
        borderRadius: 1, bgcolor: 'rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center',
      }}>
        <Typography sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
          app.smartventa.com
        </Typography>
      </Box>
    </Stack>
    <LazyImage src={src} alt={alt} sx={{ width: '100%', height: 'auto', display: 'block' }} />
  </Box>
);

const features = [
  {
    title: 'Varias tiendas, varios vendedores, varios clientes a la vez',
    desc: 'Abre una pestaña por cliente: cada una guarda sus productos y su cliente. Un vendedor atiende a 5 clientes en hora pico sin mezclar nada. Todas tus sucursales en un solo acceso. Cree cuentas de vendedor ilimitadas. Consulta cuánto vendió cada vendedor.',
  },
  {
    title: 'Stock que no se vende dos veces',
    desc: 'Lo que está en un carrito se descuenta del disponible en los demás carritos abiertos. Traspasos limitados al stock real. Si algo está en el anaquel pero el sistema dice cero, lo agregas y lo vendes en el mismo paso. Stock de otras sucursales al instante.',
  },
  {
    title: 'Trazabilidad completa de cada producto',
    desc: 'Cada movimiento guarda quién lo hizo, cuándo, qué stock había antes, la diferencia y qué hay ahora. Abre cualquier producto y revisa su vida de 12 meses. Historial diario de toda la tienda filtrable. Cada diferencia tiene un responsable y una fecha.',
  },
  {
    title: 'Cambio de precios fácil y masivo',
    desc: 'Selecciona varios productos y cambia a la vez costo, precio unitario, precio de mayoreo y cantidad mínima. Actualiza 1,000 productos en 2 clicks. Historial de cada cambio con valor anterior, nuevo, fecha y quién lo hizo. Solo el dueño edita.',
  },
  {
    title: 'Tu catálogo con fotos',
    desc: 'Toma foto desde celular con un botón y se optimiza automáticamente. Búsqueda visual en carrusel con foto, precio y stock. Foto en el carrito para confirmar visualmente que es el producto correcto. Nuevos vendedores venden desde el primer día.',
  },
  {
    title: 'Traspasos Pendientes y Confirmación',
    desc: 'Tienda pide, almacén ve el stock de todas para armar el envío. Traspaso se confirma escaneando productos. Tablero con lo pendiente por tienda, separado entre hoy y días anteriores. Notificaciones al momento.',
  },
  {
    title: 'Búsqueda por Código de Barras y Celular',
    desc: 'Escanea con lector USB o con la cámara del celular. Sugerencias al escribir desde la tercera letra por nombre o marca. Crear producto desde la venta si el código no existe. Sin demoras.',
  },
  {
    title: 'Tableros de Ventas y Desempeño',
    desc: 'Ventas, ganancias, margen y ticket promedio. Mejor y peor tienda, día del mes, día de la semana, hora. Mapa de calor de cuándo vende cada sucursal. Comparativo por sucursal.',
  },
  {
    title: 'Cobro Flexible: Efectivo, Tarjeta, Mixto',
    desc: 'Efectivo, tarjeta, transferencia o cualquier combinación en la misma venta. Cálculo de cambio y referencia para pagos electrónicos. Totales redondeados para facilitar cambio.',
  },
  {
    title: 'Corte de Caja Automático',
    desc: 'Ventas y apartados por forma de pago. Entradas y salidas de dinero. Movimientos de caja con concepto y monto. Alerta de ventas duplicadas. Descarga a Excel con un clic.',
  },
  {
    title: 'Mayoreo: Precio y Cantidad Mínima',
    desc: 'Configura precio mayoreo y cantidad mínima una vez. Al llegar a la cantidad en el carrito, el sistema aplica el precio de mayoreo automáticamente. Mayoreo se combina con descuento de cliente.',
  },
  {
    title: 'Importación de Catálogo Validado',
    desc: 'Sube Excel, configura columnas, valida errores por página, importa. Crea marcas y departamentos que falten automáticamente. Carga 5,000 productos en minutos sin problemas.',
  },
];

const ProductShowcase = () => (
  <Box sx={{ ...sectionPadding, background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }} id="product">
    <Container maxWidth="lg">
      <motion.div {...cardGridItem} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" direction="row-reverse">
          <Grid size={{ xs: 12, md: 6 }}>
            <BrowserFrame src={carritoImg} alt="Punto de venta SmartVenta — carrito de venta con búsqueda de productos" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
                Punto de venta
              </Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, letterSpacing: '-0.02em' }}>
                Punto de venta poderoso
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.75, mb: 3 }}>
                Diseñado para vender más rápido, sin errores, y con control total del inventario.
              </Typography>
              <Stack spacing={2}>
                {features.map((f, i) => (
                  <Box key={i} sx={{
                    p: 2.5, borderRadius: 2.5,
                    bgcolor: 'rgba(4,120,87,0.04)',
                    border: '1px solid rgba(4,120,87,0.12)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      bgcolor: 'rgba(4,120,87,0.08)',
                      borderColor: 'rgba(4,120,87,0.25)',
                    },
                  }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#047857', mb: 0.75 }}>
                      {f.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.6 }}>
                      {f.desc}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default ProductShowcase;
