'use client';

import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import Add from '@mui/icons-material/Add';
import SupportChatIllustration from '../ui/SupportChatIllustration';
import { faqItem, fadeUp } from '../../constants';

const faqs = [
  { q: '¿Qué necesito para empezar?', a: 'Solo un navegador e internet. Funciona en computadora, tableta y celular, y te ayudamos a configurar tu impresora de tickets.' },
  { q: '¿Puedo empezar con una sola tienda?', a: 'Sí. Y cuando crezcas no cambias de sistema: agregas sucursales y el precio por cada una baja.' },
  { q: '¿Puedo traer mi catálogo actual?', a: 'Sí. Si lo tienes en Excel, lo importamos por ti con plantillas y validación, para que empieces con datos reales.' },
  { q: '¿Quién puede cambiar precios, stock y caja?', a: 'Solo el dueño. Vendedores y administradores solicitan los ajustes de stock y el dueño los aprueba. Todo movimiento queda registrado.' },
  { q: '¿Mi información está segura?', a: 'Sí. Vive en la nube y queda respaldada, así que tus datos están protegidos aunque tu computadora falle o se pierda.' },
  { q: '¿Cómo funciona el soporte?', a: 'Directo por WhatsApp. Te ayudamos a configurar, resolver dudas y empezar a vender.' },
];

const POPPINS = '"Poppins", sans-serif';
const GRADIENT = 'linear-gradient(80deg, rgb(0,48,204) 0%, rgb(0,164,219) 100%)';

const FAQ = () => (
  <Box component="section" id="faq" aria-labelledby="faq-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff', scrollMarginTop: '80px' }}>
    <Container maxWidth="lg">
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

      <Box sx={{ display: 'grid', gap: { xs: 4, md: 6 }, gridTemplateColumns: { xs: '1fr', md: '4fr 8fr' }, alignItems: 'center' }}>
      <Box sx={{ maxWidth: { xs: 260, md: 'none' }, mx: 'auto', width: '100%', p: 2, borderRadius: '28px', bgcolor: '#EFF6FF', border: '1px solid #DBEAFE' }}>
        <SupportChatIllustration label="Una conversación de soporte por WhatsApp con el equipo de SmartVenta" />
      </Box>
      <Stack spacing={2}>
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
      </Box>
    </Container>
  </Box>
);

export default FAQ;
