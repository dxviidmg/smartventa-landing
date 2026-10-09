'use client';

import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import Add from '@mui/icons-material/Add';
import { faqItem, fadeUp } from '../../constants';

const faqs = [
  { q: '¿Cuánto cuesta?', a: 'Desde $399/mes (1 sucursal). El precio baja por sucursal conforme creces. 3 tiendas: $1,149/mes. 5 tiendas: $1,799/mes. Sin contrato, sin sorpresas.' },
  { q: '¿Qué está incluido?', a: 'Todo: POS, inventario, traspasos, distribuciones, caja, dashboard, cambios masivos de precios, Excel, auditoría, soporte WhatsApp, actualizaciones.' },
  { q: '¿Necesito instalar algo?', a: 'No. Solo necesitas navegador e internet. Funciona en computadora, tableta y celular. Si usas impresora de tickets, te ayudamos a configurarla.' },
  { q: '¿Puedo empezar con una sola tienda?', a: 'Sí. Y cuando crezcas a 4 o 10, no cambias de sistema. Simplemente agregas.' },
  { q: '¿Cómo funciona el soporte?', a: 'WhatsApp directo. Te ayudamos a configurar, resolver dudas y empezar a vender.' },
];

const POPPINS = '"Poppins", sans-serif';
const GRADIENT = 'linear-gradient(80deg, rgb(0,48,204) 0%, rgb(0,164,219) 100%)';

const FAQ = () => (
  <Box component="section" id="faq" aria-labelledby="faq-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff', scrollMarginTop: '80px' }}>
    <Container maxWidth="md">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 14, color: '#0030AB', letterSpacing: 0.5 }}>
            Preguntas frecuentes
          </Typography>
          <Typography
            id="faq-title"
            variant="h2"
            sx={{ fontFamily: POPPINS, fontWeight: 500, letterSpacing: 0, fontSize: { xs: 30, md: 40 }, lineHeight: 1.2, color: '#242F3E' }}
          >
            Dudas comunes
          </Typography>
        </Stack>
      </motion.div>

      <Stack spacing={2} sx={{ maxWidth: 800, mx: 'auto' }}>
        {faqs.map((faq, i) => (
          <motion.div key={faq.q} {...faqItem} transition={{ delay: i * 0.05 }}>
            <Accordion
              elevation={0}
              disableGutters
              sx={{
                bgcolor: '#fff', borderRadius: '20px !important', border: '1px solid #E6EDF5', overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,141,236,0.06)',
                '&:before': { display: 'none' },
                '&.Mui-expanded': { borderColor: '#93C5FD', boxShadow: '0 12px 30px rgba(0,60,180,0.12)' },
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                '&:hover': { borderColor: '#93C5FD' },
              }}
            >
              <AccordionSummary
                sx={{ px: 3, py: 0.75, minHeight: 64, '&:focus-visible': { outline: '3px solid #0030AB', outlineOffset: -3 } }}
                expandIcon={
                  <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: GRADIENT, color: '#fff', display: 'grid', placeItems: 'center' }}>
                    <Add sx={{ fontSize: 20, transition: 'transform 0.3s ease', '.Mui-expanded &': { transform: 'rotate(45deg)' } }} />
                  </Box>
                }
              >
                <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: { xs: 15, md: 16 }, color: '#242F3E' }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pt: 0, pb: 3 }}>
                <Typography sx={{ color: '#5B6472', fontSize: 15, lineHeight: 1.8 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Stack>
    </Container>
  </Box>
);

export default FAQ;
