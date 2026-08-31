import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, cardGridItem } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const painPoints = [
  {
    emoji: '📱',
    text: 'Preguntas por WhatsApp qué pasó en otra tienda',
  },
  {
    emoji: '📋',
    text: 'Llevas el inventario en un Excel que nadie actualiza',
  },
  {
    emoji: '🔄',
    text: 'Mueves mercancía entre sucursales sin registro',
  },
  {
    emoji: '🧮',
    text: 'Al final del día no sabes cuánto vendió cada tienda',
  },
  {
    emoji: '🏪',
    text: 'Tienes que ir físicamente a cada sucursal para saber qué hay',
  },
  {
    emoji: '💸',
    text: 'No sabes exactamente cuánto inventario tienes invertido',
  },
];

const PainPoints = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <SectionHeader
        overline="El problema"
        title="¿Te suena familiar?"
        subtitle="Esto es lo que viven la mayoría de los negocios con más de una tienda."
        sx={{ mb: 6 }}
      />

      <Grid container spacing={2}>
        {painPoints.map((item, i) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <motion.div
              {...cardGridItem}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                  transition: 'border-color 0.25s ease',
                  '&:hover': {
                    borderColor: 'primary.light',
                  },
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>
                  {item.emoji}
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', color: 'text.primary', fontWeight: 500, lineHeight: 1.5 }}>
                  {item.text}
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        {...cardGridItem}
        transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            mt: 5,
            color: 'text.secondary',
            fontSize: '1.05rem',
            fontWeight: 500,
          }}
        >
          SmartVenta reemplaza todo eso con <strong style={{ color: '#047857' }}>un solo sistema</strong>.
        </Typography>
      </motion.div>
    </Container>
  </Box>
);

export default PainPoints;
