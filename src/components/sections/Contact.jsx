'use client';

import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import OwnerPhoneIllustration from '../ui/OwnerPhoneIllustration';
import { CONFIG, POPPINS, CTA_BG, AMBER, pillSx, amberSx, NAVY } from '../../constants';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  { title: 'Crea tu cuenta', desc: 'Regístrate en línea: tu negocio, tus datos y tu plan. Entras desde el navegador, en computadora, tableta o celular.' },
  { title: 'Importamos tu catálogo', desc: 'Envíanos tu Excel y lo cargamos por ti, sin costo y en un máximo de una semana. Validamos los datos para que empieces con tus productos reales.' },
  { title: 'Vende con acompañamiento', desc: 'Te ayudamos por WhatsApp a configurar tu impresora y tus sucursales, resolver dudas y empezar a vender.' },
];

const pill = { ...pillSx, px: '45px', py: '14px' };

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box
      component="section"
      id="start"
      aria-labelledby="start-title"
      sx={{ py: { xs: 9, md: 13 }, background: CTA_BG, position: 'relative', overflow: 'hidden', scrollMarginTop: '80px' }}
    >
      {/* Decorative translucent triangles, top-left and bottom-right */}
      {[{ top: 0, left: 0, transform: 'none' }, { bottom: 0, right: 0, transform: 'rotate(180deg)' }].map((pos, i) => (
        <Box
          key={i}
          aria-hidden="true"
          sx={{ position: 'absolute', height: 230, width: '25%', background: 'url(/triangle-double.png) no-repeat', backgroundSize: 'contain', pointerEvents: 'none', ...pos }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          id="start-title"
          title="Empieza hoy y toma el control de tu negocio"
          subtitle="Tu cuenta lista en minutos, tu catálogo cargado por nosotros sin costo y soporte directo por WhatsApp."
          dark
          spacing={2}
          maxWidth={960}
          mb={{ xs: 5, md: 7 }}
          titleSx={{ lineHeight: 1.25, fontSize: { xs: '1.9rem', sm: '2.2rem', md: '2.6rem' } }}
          subtitleSx={{ fontSize: { xs: 15, md: 17 }, maxWidth: 560 }}
        />

        <Box sx={{ display: 'grid', gap: { xs: 4, md: 6 }, gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, alignItems: 'center' }}>
          <Box sx={{ maxWidth: { xs: 320, md: 'none' }, mx: 'auto', width: '100%' }}>
            <OwnerPhoneIllustration label="El dueño revisa una venta desde su celular, con el catálogo ya cargado" />
          </Box>

          <Box>
            <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, mb: 4, display: 'grid', gap: 2 }}>
              {steps.map((st, i) => (
                <motion.li
                  key={st.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Stack direction="row" spacing={2.5} alignItems="flex-start" sx={{ p: 3, borderRadius: '24px', bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(6px)' }}>
                    <Box aria-hidden="true" sx={{ width: 44, height: 44, flexShrink: 0, borderRadius: '50%', bgcolor: i === 0 ? AMBER : '#fff', color: NAVY, display: 'grid', placeItems: 'center', fontFamily: POPPINS, fontWeight: 600, fontSize: 20 }}>
                      {i + 1}
                    </Box>
                    <Box>
                      <Typography component="h3" sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 19, color: '#fff', mb: 0.5 }}>{st.title}</Typography>
                      <Typography sx={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>{st.desc}</Typography>
                    </Box>
                  </Stack>
                </motion.li>
              ))}
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                href={`${CONFIG.urls.app}/registrarme`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...pill, ...amberSx }}
              >
                Crear mi cuenta
              </Button>
              <Button
                variant="outlined"
                onClick={() => openWhatsApp('Hola, quiero una demo de SmartVenta')}
                sx={{ ...pill, color: '#fff', borderColor: 'rgba(255,255,255,0.7)', borderWidth: 2, '&:hover': { borderColor: '#fff', borderWidth: 2, bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                Pedir una demo
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
