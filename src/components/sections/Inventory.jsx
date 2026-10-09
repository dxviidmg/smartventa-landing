'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import HowToReg from '@mui/icons-material/HowToReg';
import Flag from '@mui/icons-material/Flag';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import FactCheck from '@mui/icons-material/FactCheck';
import EditNote from '@mui/icons-material/EditNote';
import PriceCheck from '@mui/icons-material/PriceCheck';
import Lock from '@mui/icons-material/Lock';
import Inventory2 from '@mui/icons-material/Inventory2';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { fadeUp } from '../../constants';

const POPPINS = '"Poppins", sans-serif';
const GRADIENT = 'linear-gradient(80deg, rgb(0,48,204) 0%, rgb(0,164,219) 100%)';

const cards = [
  { icon: ManageSearch, title: 'Auditoría interna', desc: 'Detecta diferencias de stock, movimientos que no cuadran, códigos repetidos, errores de costo o mayoreo y productos sin movimiento.' },
  { icon: Flag, title: 'Historial de cambios de stock', desc: 'Cada movimiento guarda quién lo hizo, cuándo, y el stock antes y después. Lo que no cuadra queda marcado.' },
  { icon: Inventory2, title: 'Stock bajo control', desc: 'Solo el dueño puede cambiar el stock directamente.' },
  { icon: HowToReg, title: 'Ajustes con aprobación', desc: 'Vendedores y administradores piden el ajuste con la cantidad real. Solo el dueño lo aprueba.' },
  { icon: QrCodeScanner, title: 'Traspasos seguros', desc: 'No puedes enviar más de lo que hay. La tienda confirma escaneando lo que recibe, y un producto sin traspaso pendiente se rechaza.' },
  { icon: Lock, title: 'Caja protegida', desc: 'Solo el dueño edita o elimina entradas y salidas de dinero.' },
  { icon: PriceCheck, title: 'Precios protegidos', desc: 'El costo y el mayoreo no pueden quedar arriba del precio de venta. Solo el dueño edita precios.' },
  { icon: FactCheck, title: 'Distribución revisada', desc: 'Cada tienda revisa los productos antes de confirmar. El dueño puede corregir cantidades.' },
  { icon: EditNote, title: 'Motivo obligatorio', desc: 'Toda cancelación o devolución guarda por qué se hizo.' },
];

const Inventory = () => (
  <Box component="section" id="inventory" aria-labelledby="inventory-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff', scrollMarginTop: '80px' }}>
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: { xs: 4, md: 6 }, maxWidth: 680, mx: 'auto' }}>
          <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 14, color: '#0030AB', letterSpacing: 0.5 }}>
            Inventario y traspasos
          </Typography>
          <Typography
            id="inventory-title"
            variant="h2"
            sx={{ fontFamily: POPPINS, fontWeight: 500, letterSpacing: 0, fontSize: { xs: 30, md: 40 }, lineHeight: 1.2, color: '#242F3E' }}
          >
            Detalles que evitan pérdidas
          </Typography>
          <Typography sx={{ color: '#5B6472', fontSize: { xs: 15, md: 16 }, lineHeight: 1.7 }}>
            Controles que protegen tu inventario, tu caja y tus precios.
          </Typography>
        </Stack>
      </motion.div>

      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
        {cards.map(({ icon: Icon, title, desc }, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: (i % 3) * 0.06, duration: 0.45 }}
          >
            <Box sx={{ height: '100%', p: 3, borderRadius: '24px', bgcolor: '#F5F9FF', border: '1px solid #E6EDF5' }}>
              <Stack spacing={1.5}>
                <Box sx={{ width: 44, height: 44, borderRadius: '50%', background: GRADIENT, color: '#fff', display: 'grid', placeItems: 'center' }}>
                  <Icon aria-hidden="true" sx={{ fontSize: 22 }} />
                </Box>
                <Typography component="h3" sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 17, color: '#242F3E' }}>{title}</Typography>
                <Typography sx={{ fontSize: 14.5, color: '#5B6472', lineHeight: 1.65 }}>{desc}</Typography>
              </Stack>
            </Box>
          </motion.li>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Inventory;
