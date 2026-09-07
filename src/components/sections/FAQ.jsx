'use client';

import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import Add from '@mui/icons-material/Add';
import { faqItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const faqs = [
  { q: '¿Qué es SmartVenta?', a: 'Es un punto de venta en la nube para negocios que quieren controlar sus ventas, inventario y caja desde un solo lugar, tengan una o varias sucursales. Funciona desde el navegador, sin instalar nada.' },
  { q: '¿SmartVenta funciona desde cualquier lugar?', a: 'Sí. Es un sistema en la nube, así que puedes consultar tus ventas, inventario y caja desde cualquier lugar con conexión a internet, sin necesidad de estar físicamente en la tienda.' },
  { q: '¿Puedo usar SmartVenta con una sola sucursal?', a: 'Sí. SmartVenta funciona perfectamente con una sola tienda. Y si más adelante creces, puedes agregar más sucursales sin cambiar de sistema.' },
  { q: '¿Puedo manejar varias sucursales?', a: 'Sí. Puedes administrar varias tiendas y almacenes dentro de la misma cuenta, con un catálogo, precios e inventario centralizados.' },
  { q: '¿Cómo funcionan los traspasos?', a: 'Los traspasos te permiten mover mercancía entre sucursales dejando registro de quién la mandó, cuándo y a dónde, para que siempre tengas trazabilidad del inventario.' },
  { q: '¿Puedo vender productos por peso?', a: 'Sí. Puedes vender por pieza, por peso (kilo o fracción) o por monto ("$20 de…"), y el sistema calcula automáticamente la cantidad correspondiente.' },
  { q: '¿Puedo importar mis productos desde Excel?', a: 'Sí. Puedes subir tu catálogo completo desde un archivo de Excel con plantillas descargables y validación antes de importar.' },
  { q: '¿Necesito instalar algo?', a: 'No. SmartVenta funciona en la nube. Solo necesitas internet y un navegador. Abres la página, inicias sesión y listo.' },
  { q: '¿Tiene contrato?', a: 'No. SmartVenta no requiere contrato.' },
  { q: '¿Qué incluye el precio?', a: 'Todos los módulos están incluidos: ventas, inventario, traspasos, caja, vendedores, clientes, descuentos, apartados, dashboard y más. Además, actualizaciones sin costo, soporte por WhatsApp y configuración inicial guiada.' },
  { q: '¿Puedo hablar con alguien si necesito ayuda?', a: 'Sí. Cuentas con soporte y acompañamiento por WhatsApp cuando lo necesites.' },
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
