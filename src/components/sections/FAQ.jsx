import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import Add from '@mui/icons-material/Add';
import { faqItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const faqs = [
  { q: '¿Necesito instalar algo?', a: 'No. SmartVenta funciona en la nube. Solo necesitas internet y un navegador. Abres la página, inicias sesión y listo.' },
  { q: '¿Hay contrato o permanencia?', a: 'No. Pagas mes a mes y cancelas cuando quieras. Sin letras chiquitas.' },
  { q: '¿Cómo es la demo?', a: 'Te hacemos una llamada, te mostramos el sistema en vivo y resolvemos tus dudas. Si te convence, te damos acceso en segundos.' },
  { q: '¿Es difícil de aprender?', a: 'No. La interfaz es directa y hay ayuda en cada pantalla. Los vendedores de nuestros clientes empezaron a usar el sistema desde el primer día.' },
  { q: '¿Funciona con mi impresora o lector de códigos?', a: 'Sí. Es compatible con impresoras térmicas estándar y lectores de código de barras USB o Bluetooth.' },
  { q: '¿Qué pasa si se va el internet?', a: 'Necesitas conexión para operar, pero cualquier conexión estable es suficiente — incluso datos móviles.' },
];

const FAQ = () => (
  <Box id="faq" sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <SectionHeader
        overline="Preguntas frecuentes"
        title="Dudas comunes"
        sx={{ mb: 6 }}
      />

      <Stack spacing={1.5}>
        {faqs.map((faq, i) => (
          <motion.div key={i} {...faqItem} transition={{ delay: i * 0.04 }}>
            <Accordion
              elevation={0}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid', borderColor: 'divider', borderRadius: '12px !important',
                '&:before': { display: 'none' },
                '&.Mui-expanded': { borderColor: 'primary.light' },
                transition: 'border-color 0.25s ease',
                '&:hover': { borderColor: 'primary.main' },
              }}
            >
              <AccordionSummary
                expandIcon={<Add sx={{ fontSize: 20, transition: 'transform 0.3s ease', '.Mui-expanded &': { transform: 'rotate(45deg)' } }} />}
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
);

export default FAQ;
