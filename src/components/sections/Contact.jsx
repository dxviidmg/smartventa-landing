import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { ctaButtonSx, sectionPadding, contactItem } from '../../constants';

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box
      sx={{
        py: sectionPadding.py,
        bgcolor: 'transparent',
        background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)',
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <motion.div {...contactItem} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Typography variant="h2" sx={{
              color: 'white',
              fontSize: { xs: '1.8rem', md: '2.6rem' },
              maxWidth: 550, lineHeight: 1.15,
            }}>
              ¿Quieres verlo funcionando con tu negocio?
            </Typography>
          </motion.div>

          <motion.div {...contactItem} transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: 460 }}>
              Agenda una llamada de 15 minutos. Te mostramos el sistema en vivo, resolvemos tus dudas y si te convence, arrancas el mismo día.
            </Typography>
          </motion.div>

          <motion.div {...contactItem} transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => openWhatsApp('Hola, quiero agendar una llamada para conocer SmartVenta')}
              sx={{ ...ctaButtonSx, px: 4, py: 1.5, fontSize: '1rem' }}
            >
              Agendar llamada
            </Button>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
