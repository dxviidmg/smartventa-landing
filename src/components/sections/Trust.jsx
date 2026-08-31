'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, cardGridItem } from '../../constants';
import Speed from '@mui/icons-material/Speed';
import Cloud from '@mui/icons-material/Cloud';
import Store from '@mui/icons-material/Store';
import Update from '@mui/icons-material/Update';

const trustPoints = [
  {
    icon: <Speed />,
    title: 'Fácil de usar',
    desc: 'Diseñado para que tu equipo pueda comenzar desde el primer día, sin capacitación larga.',
  },
  {
    icon: <Cloud />,
    title: 'En la nube',
    desc: 'Accede desde cualquier dispositivo con internet. Sin instalar software ni depender de un equipo.',
  },
  {
    icon: <Store />,
    title: 'Multi-sucursal',
    desc: 'Administra varias tiendas y almacenes desde una misma plataforma.',
  },
  {
    icon: <Update />,
    title: 'Siempre actualizado',
    desc: 'Trabajas siempre con la versión más reciente. Sin actualizaciones manuales.',
  },
];

const Trust = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {trustPoints.map((t, i) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <motion.div
              {...cardGridItem}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Box sx={{
                  width: 44, height: 44, minWidth: 44, borderRadius: 2.5,
                  bgcolor: 'rgba(4,120,87,0.08)', color: '#047857',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 22 },
                }}>
                  {t.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>{t.title}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.65 }}>{t.desc}</Typography>
                </Box>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Trust;
