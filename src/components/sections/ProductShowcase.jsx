'use client';

import { useState } from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/icons-material/Badge';
import LocalOffer from '@mui/icons-material/LocalOffer';
import History from '@mui/icons-material/History';
import PriceChange from '@mui/icons-material/PriceChange';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SyncAlt from '@mui/icons-material/SyncAlt';
import Smartphone from '@mui/icons-material/Smartphone';
import Print from '@mui/icons-material/Print';
import Savings from '@mui/icons-material/Savings';
import Insights from '@mui/icons-material/Insights';
import TrendingDown from '@mui/icons-material/TrendingDown';
import Payments from '@mui/icons-material/Payments';
import PointOfSale from '@mui/icons-material/PointOfSale';
import Sell from '@mui/icons-material/Sell';
import UploadFile from '@mui/icons-material/UploadFile';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Inventory2 from '@mui/icons-material/Inventory2';
import Scale from '@mui/icons-material/Scale';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import AssignmentReturn from '@mui/icons-material/AssignmentReturn';
import { sectionPadding, cardGridItem } from '../../constants';

const features = [
  { icon: Print, title: 'Compatible con escáner e impresora', desc: 'En computadora usa tu lector de código de barras e imprime tickets en impresora térmica.' },
  { icon: Payments, title: 'Cobro flexible', desc: 'Efectivo, tarjeta, transferencia o combinados en una misma venta. El cambio se calcula solo.' },
  { icon: PointOfSale, title: 'Corte de caja con entradas y salidas', desc: 'Ventas por forma de pago y cada entrada y salida de dinero con concepto y monto, todo en un solo resumen.' },
  { icon: Scale, title: 'Productos por unidad y a granel', desc: 'Cada producto tiene marca, departamento y unidad: pieza, kilo, costal, litro, metro o bote. En kilo o litro vende también por monto: "dame $20 de queso".' },
  { icon: AssignmentReturn, title: 'Devoluciones y cancelaciones', desc: 'Devuelve parte de una venta o cancélala completa. Siempre queda registrado el motivo.' },
  { icon: LocalOffer, title: 'Clientes y descuentos', desc: 'Guarda a tus clientes con su descuento. Al venderles, el descuento se aplica solo al cobrar.' },
  { icon: Sell, title: 'Precio de mayoreo', desc: 'Define el precio de mayoreo y la cantidad mínima. Al llegar a esa cantidad, el precio cambia solo.' },
  { icon: Badge, title: 'Vendedores y permisos', desc: 'Crea vendedores ilimitados en cada tienda y consulta cuánto vendió cada uno. Tres roles: dueño, administrador y vendedor.' },
  { icon: BookmarkAdded, title: 'Apartados con abonos', desc: 'Aparta con anticipo y registra abonos hasta liquidar. Lo apartado ya no se le vende a otro cliente.' },
  { icon: UploadFile, title: 'Importa tu catálogo desde Excel', desc: 'El sistema revisa los errores antes de importar. Carga hasta 5,000 productos en segundos.' },
  { icon: Savings, title: 'Ganancia del día o del periodo', desc: 'Conoce el costo y la ganancia de tus ventas. Sabe cuánto ganaste hoy o en cualquier periodo.' },
  { icon: Insights, title: 'Tableros de ventas', desc: 'Gráficas de ventas, ganancia y ticket promedio. Descubre tu mejor tienda, día y hora, y compara tus sucursales.' },
  { icon: Smartphone, title: 'Compatible con celular', desc: 'Vende desde el celular o la tableta. Escanea códigos de barras con la cámara, sin necesidad de lector.' },
  { icon: PhotoCamera, title: 'Catálogo con fotos', desc: 'Toma la foto con el celular. Al vender ves foto, precio y stock, y no confundes productos parecidos.' },
  { icon: PriceChange, title: 'Cambio de precios masivo con historial', desc: 'Cambia costo, precio y mayoreo de varios productos a la vez, en 2 clics. Cada cambio queda registrado: antes, después, fecha y quién lo hizo.' },
  { icon: TrendingDown, title: 'Gráficas de cancelaciones y devoluciones', desc: 'Cuánto se cancela o devuelve, en qué tienda, qué días y horas, y por qué motivo.' },
  { icon: History, title: 'Historial de cambio de stock', desc: 'Cada movimiento registra quién lo hizo, cuándo y cuánto cambió. Revisa hasta 12 meses de cada producto.' },
  { icon: Inventory2, title: 'Desempaque', desc: 'Un costal de 20 kg de comida para perro se convierte en 20 kg para vender a granel. Con un clic.' },
  { icon: AddShoppingCart, title: 'Multiventa', desc: 'Abre una pestaña por cliente. Atiende a varios a la vez en hora pico sin mezclar sus productos.' },
  { icon: SyncAlt, title: 'Traspaso entre tiendas', desc: 'Ve el stock de otras tiendas y pide mercancía con un botón. El traspaso se confirma al escanear los productos.' },
  { icon: LocalShipping, title: 'Distribución desde almacén', desc: 'El almacén arma los envíos viendo el stock de todas las tiendas. Cada tienda revisa y confirma lo que recibe.' },
];

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(features.length / cardsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
  <Box sx={{ ...sectionPadding, background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }} id="product">
    <Container maxWidth="lg">
      <motion.div {...cardGridItem} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <Stack spacing={5} sx={{ width: '100%' }}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ width: '100%', py: 2 }}>
            <Typography variant="overline" sx={{ color: '#86efac', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
              Punto de venta
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#ffffff', maxWidth: '100%' }}>
              Punto de venta poderoso
            </Typography>
            <Typography sx={{ color: '#e5e7eb', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: 700 }}>
              Diseñado para vender más rápido, sin errores, y con control total del inventario.
            </Typography>
          </Stack>

          <Stack spacing={3}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 3,
              overflow: 'hidden',
            }}>
              {features.slice(currentIndex * cardsPerSlide, (currentIndex + 1) * cardsPerSlide).map((f, i) => (
                <motion.div
                  key={currentIndex * cardsPerSlide + i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Box sx={{
                    p: 2.5, borderRadius: 2.5,
                    bgcolor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    transition: 'all 0.25s ease',
                    height: '100%',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.12)',
                      borderColor: 'rgba(255,255,255,0.25)',
                      transform: 'translateY(-4px)',
                    },
                  }}>
                    <Box sx={{
                      width: 40, height: 40, borderRadius: 2, mb: 1.5,
                      bgcolor: 'rgba(134, 239, 172, 0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <f.icon sx={{ fontSize: 22, color: '#86efac' }} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff', mb: 0.75 }}>
                      {f.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.95rem', color: '#e5e7eb', lineHeight: 1.6 }}>
                      {f.desc}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* Carousel Controls */}
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
              <IconButton
                onClick={handlePrev}
                disabled={totalSlides === 1}
                sx={{
                  color: '#86efac',
                  border: '1px solid rgba(134, 239, 172, 0.3)',
                  '&:hover': {
                    bgcolor: 'rgba(134, 239, 172, 0.1)',
                  },
                  '&:disabled': {
                    color: 'rgba(134, 239, 172, 0.3)',
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>

              {/* Dots */}
              <Stack direction="row" spacing={1}>
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: i === currentIndex ? '#86efac' : 'rgba(134, 239, 172, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#86efac',
                      },
                    }}
                  />
                ))}
              </Stack>

              <IconButton
                onClick={handleNext}
                disabled={totalSlides === 1}
                sx={{
                  color: '#86efac',
                  border: '1px solid rgba(134, 239, 172, 0.3)',
                  '&:hover': {
                    bgcolor: 'rgba(134, 239, 172, 0.1)',
                  },
                  '&:disabled': {
                    color: 'rgba(134, 239, 172, 0.3)',
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </Container>
  </Box>
  );
};

export default ProductShowcase;
