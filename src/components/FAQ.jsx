import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { Add } from '@mui/icons-material';
import { sectionHeader, faqItem } from '../constants';
import SEO from '../components/SEO';

const faqs = [
  { q: '¿Necesito instalar algo?', a: 'No. SmartVenta funciona en la nube. Solo necesitas internet y un navegador.' },
  { q: '¿Puedo manejar varias sucursales?', a: 'Sí. Puedes administrar múltiples tiendas y almacenes desde una sola cuenta con cambio instantáneo entre ellas.' },
  { q: '¿Tiene costo mensual?', a: 'Sí. El costo es desde $500 MXN por sucursal al mes, sin contratos.' },
  { q: '¿Puedo acceder desde mi celular?', a: 'Sí. Es totalmente responsive y funciona en computadora, tablet o celular.' },
  { q: '¿Cómo funciona el soporte?', a: 'Tienes soporte directo por WhatsApp con información prellenada de tu tienda, y ayuda contextual dentro de cada página del sistema.' },
  { q: '¿Puedo importar mis productos?', a: 'Sí. Puedes importar masivamente desde Excel con plantillas descargables. El sistema valida errores antes de importar.' },
  { q: '¿Tiene reportes y estadísticas?', a: 'Sí. Incluye tableros de KPIs, heatmaps de ventas, análisis de cancelaciones, top de marcas/productos y gráficas de tendencia.' },
  { q: '¿Cómo se manejan los traspasos entre tiendas?', a: 'Puedes hacer traspasos individuales o distribuciones masivas desde almacén. Cada tienda confirma lo que recibe y todo queda con trazabilidad completa.' },
  { q: '¿Qué pasa si un producto no existe al vender?', a: 'Puedes crearlo directamente desde la búsqueda del punto de venta con stock inicial, sin salir de la pantalla.' },
  { q: '¿Cómo controlo el acceso de mis empleados?', a: 'Hay tres niveles: Dueño (acceso total), Administrador (gestión de tienda) y Vendedor (solo ventas). Cada rol ve solo lo que necesita.' },
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
