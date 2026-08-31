'use client';

import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import Add from '@mui/icons-material/Add';
import { faqItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const faqs = [
  { q: '¿Qué es SmartVenta?', a: 'Es un punto de venta en la nube para negocios que quieren controlar sus ventas, inventario y sucursales desde un solo lugar. Funciona desde el navegador, sin instalar nada.' },
  { q: '¿Puedo administrar varias sucursales?', a: 'Sí. Puedes crear tiendas y almacenes dentro de la misma cuenta. El catálogo, precios e inventario se administran de forma centralizada.' },
  { q: '¿Puedo importar mis productos?', a: 'Sí. Puedes subir tu catálogo completo desde un archivo de Excel con plantillas descargables y validación antes de importar.' },
  { q: '¿Necesito instalar algo?', a: 'No. SmartVenta funciona en la nube. Solo necesitas internet y un navegador. Abres la página, inicias sesión y listo.' },
  { q: '¿Funciona con lector de códigos de barras?', a: 'Sí. Es compatible con lectores de código de barras USB y Bluetooth. También puedes buscar productos por nombre o SKU.' },
  { q: '¿Cómo funcionan los precios?', a: 'El precio depende del número de tiendas y almacenes que tengas. Empieza desde $399/mes por una ubicación. Todo incluido, sin módulos extra.' },
  { q: '¿Qué métodos de pago puedo registrar?', a: 'Puedes registrar ventas con efectivo, tarjeta y transferencia. Una misma venta puede combinar varios métodos de pago.' },
  { q: '¿Cómo empiezo?', a: 'Crea tu cuenta en línea o agenda una llamada y lo hacemos juntos. Si ya tienes un catálogo en Excel, lo subimos ahí mismo.' },
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
