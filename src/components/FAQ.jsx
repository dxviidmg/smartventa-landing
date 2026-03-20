import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { Add } from '@mui/icons-material';

const faqs = [
  { q: '¿Necesito instalar algo en mis computadoras?', a: 'No. SmartVenta es una aplicación web. Solo necesitas un navegador y conexión a internet. Funciona en computadoras, tablets y celulares.' },
  { q: '¿Cuántas tiendas puedo administrar?', a: 'No hay límite. Puedes agregar tantas tiendas y almacenes como necesites. El sistema escala con tu negocio.' },
  { q: '¿Funciona con lectores de código de barras?', a: 'Sí. SmartVenta es compatible con lectores de código de barras estándar y se conecta directamente con impresoras de tickets térmicas.' },
  { q: '¿Puedo importar mis productos desde Excel?', a: 'Sí. Puedes importar productos e inventario masivamente desde archivos Excel. También puedes exportar reportes.' },
  { q: '¿Qué pasa si pierdo conexión a internet?', a: 'El sistema requiere conexión para sincronizar datos en tiempo real. Recomendamos una conexión estable para la mejor experiencia.' },
  { q: '¿Cómo funciona la demo?', a: 'Te damos acceso a una cuenta demo completa donde puedes explorar todas las funcionalidades del sistema sin compromiso.' },
  { q: '¿Hay costos ocultos o contratos?', a: 'No. Pagas $500 MXN por tienda o almacén al mes. Sin contratos a largo plazo, sin costos de instalación, sin sorpresas.' },
];

const FAQ = () => (
  <Box id="faq" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <Stack spacing={6}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              FAQ
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Preguntas frecuentes
            </Typography>
          </motion.div>
        </Stack>

        <Stack spacing={1.5}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Accordion
                elevation={0}
                sx={{
                  border: '1px solid', borderColor: 'divider', borderRadius: '12px !important',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { borderColor: 'primary.light' },
                }}
              >
                <AccordionSummary expandIcon={<Add sx={{ fontSize: 20 }} />}>
                  <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default FAQ;
