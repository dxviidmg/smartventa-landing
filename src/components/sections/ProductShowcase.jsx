'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { POPPINS, BLUE_BG } from '../../constants';
import SectionHeading from '../ui/SectionHeading';
import { tabs } from '../../data/features';

const IconBadge = ({ icon: Icon, size = 36 }) => (
  <Box sx={{ width: size, height: size, flexShrink: 0, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: 'rgba(255,255,255,0.18)', color: '#fff' }}>
    <Icon aria-hidden="true" sx={{ fontSize: size * 0.5 }} />
  </Box>
);

const ProductShowcase = () => (
  <Box component="section" id="product" aria-labelledby="product-title" sx={{ py: { xs: 7, md: 10 }, background: BLUE_BG, scrollMarginTop: '80px' }}>
    <Container maxWidth="lg">
      <SectionHeading
        id="product-title"
        title="Todo para vender y controlar tu negocio"
        subtitle="Vende con rapidez, cobra con precisión y mantén tu inventario siempre bajo control."
        dark
        mb={{ xs: 5, md: 8 }}
        subtitleSx={{ maxWidth: 700 }}
      />

      <Stack spacing={{ xs: 7, md: 10 }}>
        {tabs.map((t, i) => {
          const Mockup = t.mockup;
          const flip = i % 2 === 1;
          return (
            <Box
              key={t.key}
              component="article"
              aria-labelledby={`product-${t.key}`}
              sx={{ display: 'grid', gap: { xs: 3, md: 6 }, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, alignItems: 'center' }}
            >
              {Mockup && <Box sx={{ order: { md: flip ? 2 : 1 } }}><Mockup /></Box>}
              <Box sx={{ order: { md: flip ? 1 : 2 }, gridColumn: Mockup ? 'auto' : { md: '1 / -1' } }}>
                <Typography id={`product-${t.key}`} component="h3" sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: { xs: 24, md: 30 }, color: '#fff', mb: 2.5 }}>
                  {t.label}
                </Typography>
                <Stack spacing={Mockup ? 2 : 0} sx={Mockup ? undefined : { display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, '& > *': { m: 0 } }}>
                  {t.features.map((f) => (
                    <Stack key={f.title} direction="row" spacing={1.5} alignItems="flex-start">
                      <IconBadge icon={f.icon} />
                      <Box>
                        <Typography component="h4" sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 15, color: '#fff' }}>{f.title}</Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(255,255,255,0.92)', lineHeight: 1.6 }}>{f.desc}</Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Container>
  </Box>
);

export default ProductShowcase;
