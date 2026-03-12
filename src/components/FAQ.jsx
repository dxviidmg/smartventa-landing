import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ExpandMore } from '@mui/icons-material';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Necesito instalar algo en mis computadoras?',
      answer: 'No, Smartventa es una aplicación web. Solo necesitas un navegador y conexión a internet. Funciona en cualquier dispositivo.',
    },
    {
      question: '¿Cuántas tiendas puedo administrar?',
      answer: 'No hay límite. Puedes agregar tantas tiendas y almacenes como necesites. El sistema escala según tu negocio crece.',
    },
    {
      question: '¿Funciona con lectores de código de barras?',
      answer: 'Sí, Smartventa es compatible con lectores de código de barras estándar y se conecta directamente con impresoras de tickets.',
    },
    {
      question: '¿Puedo importar mis productos desde Excel?',
      answer: 'Sí, puedes importar productos e inventario masivamente desde archivos Excel. También puedes exportar reportes a Excel.',
    },
    {
      question: '¿Qué pasa si pierdo conexión a internet?',
      answer: 'El sistema requiere conexión para sincronizar datos en tiempo real. Recomendamos tener una conexión estable para mejor experiencia.',
    },
    {
      question: '¿Cómo funciona la demo?',
      answer: 'Te damos acceso a una cuenta demo completa donde puedes explorar todas las funcionalidades del sistema sin compromiso.',
    },
    {
      question: '¿Puedo controlar los permisos de mis empleados?',
      answer: 'Sí, puedes crear roles personalizados y asignar permisos específicos por tienda. Cada empleado tiene su propio acceso seguro.',
    },
    {
      question: '¿Los datos están seguros?',
      answer: 'Sí, utilizamos autenticación segura y respaldos automáticos. Tus datos están protegidos y disponibles 24/7.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'text.primary' }}>
                Preguntas frecuentes
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '700px', fontSize: '1.1rem' }}>
                Resolvemos las dudas más comunes sobre Smartventa
              </Typography>
            </motion.div>
          </Stack>

          <Stack spacing={2}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Accordion
                  sx={{
                    borderRadius: 2,
                    '&:before': { display: 'none' },
                    boxShadow: 2,
                    '&:hover': { boxShadow: 4 },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {faq.answer}
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
};

export default FAQ;
