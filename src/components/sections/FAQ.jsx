'use client';

import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import Add from '@mui/icons-material/Add';
import { faqItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const faqs = [
  { q: '¿Cuánto cuesta?', a: 'Desde $399 MXN/mes por 1 sucursal. El precio disminuye por sucursal conforme creces: 3 tiendas = $1,149/mes ($383 por tienda), 5 tiendas = $1,799/mes ($360 por tienda). Sin instalación, sin contrato, sin sorpresas.' },
  { q: '¿Qué está incluido en el precio?', a: 'Todos los módulos: punto de venta, inventario, traspasos, distribuciones, caja, vendedores, clientes, descuentos, apartados, dashboard con métricas, cambios masivos de precios, importación de Excel, auditoría, soporte por WhatsApp y actualizaciones sin costo.' },
  { q: '¿Necesito instalar algo?', a: 'No. SmartVenta funciona en la nube. Solo necesitas internet y navegador. No hay instalación, no hay mantenimiento, funciona igual en tu escritorio o en un celular.' },
  { q: '¿Puedo usar SmartVenta con una sola sucursal?', a: 'Sí, funciona perfectamente. Y si creces a 2, 3 o más tiendas, no necesitas cambiar de sistema. Simplemente agrega sucursales.' },
  { q: '¿Cómo cambio los precios en varias tiendas?', a: 'Seleccionas los productos y cambias el precio de una vez en todas las sucursales. Antes tenías que hacerlo tienda por tienda. Ahora es masivo y al instante.' },
  { q: '¿Puedo ver el stock de otras tiendas?', a: 'Sí. Consultas qué hay disponible en cada sucursal, almacén o el total de tu negocio. Sin llamadas telefónicas. Sin esperas.' },
  { q: '¿Cómo funcionan los traspasos entre tiendas?', a: 'Un almacén o tienda envía productos a otra con registro completo: qué se mandó, cuándo, quién lo mandó. La tienda que recibe confirma. Trazabilidad total, sin "productos perdidos".' },
  { q: '¿Funciona si vendo por peso o cantidad?', a: 'Sí. Vendes por piezas, kilogramos, litros, costales, etc. El cliente pide "250 gramos" o "$20 de queso" y SmartVenta calcula automáticamente.' },
  { q: '¿Tiene contrato?', a: 'No. Sin contrato. Pagas mensualmente. Si en algún momento quieres dejar de usar SmartVenta, simplemente cancelas.' },
  { q: '¿Qué tipo de soporte tienen?', a: 'Soporte personalizado por WhatsApp. Desde David (el creador) hasta los equipos del producto. Empezamos desde enero 2025 con negocios como el tuyo y preferimos soporte directo.' },
  { q: '¿Puedo importar mis productos desde Excel?', a: 'Sí. Plantillas descargables, validación antes de importar, y si hay errores te los mostramos por página para corregir fácilmente.' },
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
