import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { Add } from '@mui/icons-material';
import { sectionHeader, faqItem } from '../constants';
import SEO from '../components/SEO';

const faqs = [
  { q: '¿Necesito instalar algo?', a: 'No. SmartVenta funciona en la nube. Solo necesitas internet y un navegador.' },
  { q: '¿Hay contrato o permanencia?', a: 'No. Pagas mes a mes y puedes cancelar cuando quieras. Sin letras chiquitas.' },
  { q: '¿Puedo acceder desde mi celular?', a: 'Sí, puedes consultar información desde cualquier dispositivo. Para la operación diaria (ventas, traspasos) se recomienda una computadora con conexión por cable para mayor estabilidad.' },
  { q: '¿Cómo funciona el soporte?', a: 'Tienes soporte directo por WhatsApp con información prellenada de tu tienda, y ayuda contextual dentro de cada página del sistema.' },
  { q: '¿Puedo probarlo antes de pagar?', a: 'Sí. Solicita una demo y te damos acceso a una cuenta de prueba para que explores el sistema sin compromiso.' },
  { q: '¿Funciona con mi impresora o lector de códigos?', a: 'Sí. Es compatible con impresoras térmicas estándar y lectores de código de barras USB o Bluetooth.' },
  { q: '¿Qué pasa si se va el internet?', a: 'Al ser un sistema en la nube, necesitas conexión para operar. Pero cualquier conexión estable (incluso datos móviles) es suficiente.' },
];

const FAQ = () => (
  <>
    <SEO
      title="Preguntas Frecuentes"
      description="Respuestas a las preguntas más comunes sobre SmartVenta y sus servicios."
    />
    <Box id="faq" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#CAD2DE' }}>
      <Container maxWidth="md">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <motion.div {...sectionHeader.overline}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              FAQ
            </Typography>
          </motion.div>
          <motion.div {...sectionHeader.title}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Preguntas frecuentes
            </Typography>
          </motion.div>
        </Stack>

        <Stack spacing={1.5}>
          {faqs.map((faq, i) => (
            <motion.div key={i} {...faqItem} transition={{ delay: i * 0.04 }}>
              <Accordion
                elevation={0}
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid', borderColor: 'divider', borderRadius: '12px !important',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { borderColor: 'primary.light', bgcolor: 'rgba(4,52,107,0.02)' },
                  transition: 'all 0.3s ease',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(4,52,107,0.02)' },
                }}
              >
                <AccordionSummary
                  expandIcon={<Add sx={{ fontSize: 20, transition: 'transform 0.3s ease', '.Mui-expanded &': { transform: 'rotate(180deg)' } }} />}
                  sx={{ '&:hover': { bgcolor: 'rgba(4,52,107,0.02)' } }}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  </>
);

export default FAQ;
