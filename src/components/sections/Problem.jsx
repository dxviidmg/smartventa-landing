'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';

const problems = [
  {
    title: 'Stock fragmentado entre tiendas',
    desc: 'Un cliente pregunta por un producto. Alguien llama a otra sucursal. Espera respuesta. Vuelve al cliente. La llamada no se contesta. El cliente se va. Y probablemente tenías el producto en el otro lado de la ciudad.',
    icon: '📦',
  },
  {
    title: 'Cambiar precios es un martirio',
    desc: 'Cambio de proveedor, ajuste por temporada, promoción de viernes. Tienes que ir tienda por tienda ingresando cientos de productos. Lento. Error-prone. Frustante.',
    icon: '💰',
  },
  {
    title: 'Traspasos que desaparecen',
    desc: 'Mandas producto de almacén a tienda. Nadie sabe claramente quién lo mandó, cuándo, cuánto. Productos que "se pierden" en el camino. No hay trazabilidad. Solo sospechas.',
    icon: '🚚',
  },
  {
    title: 'Vendemos a ciegas',
    desc: 'No sabes cuáles tiendas generan más venta, qué productos son éxito, dónde hay un problema. Decides sin información. Es complicado.',
    icon: '📊',
  },
];

const Problem = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto' }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Los problemas reales
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.15 }}>
            Si tienes varias sucursales, esto te pasa
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={3}>
        {problems.map((p, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Box sx={{
                height: '100%',
                p: 3.5,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
              }}>
                <Stack spacing={2}>
                  <Typography sx={{ fontSize: '2.5rem' }}>{p.icon}</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary' }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {p.desc}
                  </Typography>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Problem;
