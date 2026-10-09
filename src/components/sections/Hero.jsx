'use client';

import { Container, Typography, Button, Stack, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { CONFIG, POPPINS, AMBER, pillSx, amberSx, heroContainer, heroItem, heroImage } from '../../constants';
import HeroIllustration from '../ui/HeroIllustration';

const ArrowForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

const Hero = () => (
  <section
    aria-labelledby="hero-title"
    style={{
      position: 'relative', overflow: 'hidden',
      background: '#0B1B4D url(/hero-bg.png) center bottom / cover no-repeat',
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', pt: { xs: '150px', xl: '200px' }, pb: { xs: '100px', md: '260px' } }}>
      <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center" justifyContent="space-between">
        <Grid size={{ xs: 12, lg: 6 }}>
          <motion.div variants={heroContainer} initial="initial" animate="animate">
            <Stack spacing={2.5} sx={{ textAlign: { xs: 'center', lg: 'left' }, alignItems: { xs: 'center', lg: 'flex-start' } }}>
              <motion.div variants={heroItem}>
                <Typography
                  id="hero-title"
                  variant="h1"
                  sx={{ fontFamily: POPPINS, fontWeight: 500, letterSpacing: 0, fontSize: { xs: 38, sm: 44, md: 60 }, lineHeight: { xs: '50px', md: '68px' }, color: '#fff' }}
                >
                  Todo tu negocio, <Box component="span" sx={{ color: AMBER }}>bajo control</Box>
                </Typography>
              </motion.div>

              <motion.div variants={heroItem}>
                <Typography sx={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 400, color: '#fff', opacity: 0.7, maxWidth: 520, fontSize: { xs: 14, sm: 15 }, lineHeight: 1.6 }}>
                  Ventas, inventario, caja y sucursales en un solo sistema. Empieza en minutos.
                </Typography>
              </motion.div>

              <motion.div variants={heroItem}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  href={`${CONFIG.urls.app}/registrarme`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ ...pillSx, ...amberSx, mt: 1, px: '45px', py: '14px' }}
                >
                  Probar SmartVenta
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <motion.div {...heroImage} initial="initial" animate="animate">
            <Box sx={{ maxWidth: { xs: 360, lg: 400 }, mx: 'auto' }}>
            <HeroIllustration label="El dueño, tranquilo y feliz, controla desde una tableta 3 tiendas y 2 almacenes, con traspasos de almacén a tienda, de almacén central a almacén y entre tiendas" />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </section>
);

export default Hero;
