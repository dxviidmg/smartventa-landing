'use client';

import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import Add from '@mui/icons-material/Add';
import SupportChatIllustration from '../ui/SupportChatIllustration';
import { faqItem, POPPINS, GRADIENT, NAVY, SURFACE_MUTED, SURFACE, BORDER, SHADOW_CARD } from '../../constants';
import SectionHeading from '../ui/SectionHeading';

const faqs = [
  { q: '¿Qué necesito para empezar?', a: 'Solo un navegador e internet. Funciona en computadora, tableta y celular. Si usas impresora de tickets, te ayudamos a configurarla.' },
  { q: '¿Puedo empezar con una sola tienda?', a: 'Sí. Cuando abras más sucursales o un almacén, las funciones para varias sucursales se activan solas y no cambias de sistema. Además, el precio por sucursal baja conforme creces.' },
  { q: '¿Puedo traer mi catálogo actual?', a: 'Sí. Si lo tienes en Excel, lo cargamos por ti sin costo, con plantillas y validación, en un máximo de una semana.' },
  { q: '¿Quién puede cambiar precios, inventario y caja?', a: 'Los costos y los precios de productos existentes solo los ve y cambia el dueño. El administrador pide los ajustes de inventario y el dueño los aprueba. Todo movimiento queda registrado con quién lo hizo y cuándo.' },
  { q: '¿Mi información está protegida?', a: 'Tu información vive en la nube y se entra con usuario y contraseña. Cada persona solo ve lo que su rol permite, y el sistema guarda quién hizo cada movimiento.' },
  { q: '¿Qué impresora necesito?', a: 'Una impresora térmica de tickets. Recomendamos la Epson TM-88V, por USB. Desde celular no se imprimen tickets.' },
  { q: '¿Puedo ver una demo antes de contratar?', a: 'Sí. Escríbenos por WhatsApp y te damos acceso a una cuenta demo.' },
  { q: '¿Cómo se paga y cómo se cancela?', a: 'El pago es mensual con tarjeta, con Mercado Pago, sin contratos largos. El propietario puede cancelar cuando quiera desde Mi plan: se detiene el cobro y el acceso se cierra de inmediato. No hay reembolsos, tus datos se conservan y puedes reactivar con soporte.' },
  { q: '¿Cómo funciona el soporte?', a: 'Directo por WhatsApp, desde el mismo sistema, con los datos de tu negocio ya escritos. Te ayudamos a configurar, resolver dudas y empezar a vender.' },
];

const FAQ = () => (
  <Box component="section" id="faq" aria-labelledby="faq-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: SURFACE_MUTED, scrollMarginTop: '80px' }}>
    <Container maxWidth="lg">
      <SectionHeading id="faq-title" eyebrow="Preguntas frecuentes" title="Dudas comunes" />

      <Box sx={{ display: 'grid', gap: { xs: 4, md: 6 }, gridTemplateColumns: { xs: '1fr', md: '4fr 8fr' }, alignItems: 'center' }}>
      <Box sx={{ maxWidth: { xs: 260, md: 'none' }, mx: 'auto', width: '100%', p: 2, borderRadius: '28px', bgcolor: SURFACE, border: `1px solid ${BORDER}` }}>
        <SupportChatIllustration label="Una conversación de soporte por WhatsApp con el equipo de SmartVenta" />
      </Box>
      <Stack spacing={2}>
        {faqs.map((faq, i) => (
          <motion.div key={faq.q} {...faqItem} transition={{ delay: i * 0.05 }}>
            <Accordion
              elevation={0}
              disableGutters
              sx={{
                bgcolor: SURFACE, borderRadius: '20px !important', border: `1px solid ${BORDER}`, overflow: 'hidden',
                boxShadow: SHADOW_CARD,
                '&:before': { display: 'none' },
                '&.Mui-expanded': { borderColor: '#CFD6E2', boxShadow: '0 12px 30px rgba(15,23,42,0.16)' },
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                '&:hover': { borderColor: '#CFD6E2' },
              }}
            >
              <AccordionSummary
                sx={{ px: 3, py: 0.75, minHeight: 64, '&:focus-visible': { outline: `3px solid ${NAVY}`, outlineOffset: -3 } }}
                expandIcon={
                  <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: GRADIENT, color: '#fff', display: 'grid', placeItems: 'center' }}>
                    <Add sx={{ fontSize: 20, transition: 'transform 0.3s ease', '.Mui-expanded &': { transform: 'rotate(45deg)' } }} />
                  </Box>
                }
              >
                <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: { xs: 15, md: 16 }, color: '#0F172A' }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pt: 0, pb: 3 }}>
                <Typography sx={{ color: '#475569', fontSize: 15, lineHeight: 1.8 }}>{faq.a}</Typography>
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
