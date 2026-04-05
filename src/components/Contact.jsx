import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';
import { sectionHeader } from '../constants';

const Contact = () => (
  <Box
    sx={{
      py: { xs: 6, md: 10 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(145deg, #022347 0%, #04346b 40%, #065a9e 100%)',
    }}
  >
    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
      <Stack spacing={4} alignItems="center" textAlign="center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Typography variant="h2" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' }, maxWidth: 600 }}>
            ¿Listo para retomar el{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #34d399, #6ee7b7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              control?
            </Box>
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 480 }}>
            Únete a negocios que ya optimizan sus operaciones diarias con SmartVenta. Solicita tu cuenta demo HOY.
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => openWhatsApp()}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              bgcolor: 'secondary.main',
              color: '#fff',
              '&:hover': { bgcolor: '#059669' },
              boxShadow: '0 4px 24px rgba(16,185,129,0.35)',
            }}
          >
            Probar el sistema
          </Button>
        </motion.div>
      </Stack>
    </Container>
  </Box>
);

export default Contact;
