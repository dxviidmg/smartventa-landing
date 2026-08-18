import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { cardGridItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import { features } from '../../data/features';

const Features = () => (
  <div id="features">
    <Box sx={{ ...sectionPadding, bgcolor: 'surface.alt' }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="Características"
          title="Todo lo que necesitas para controlar mejor tu negocio"
          subtitle="Centraliza tu información y toma decisiones informadas. Diseñado específicamente para resolver el caos operativo en negocios multi-tienda."
          sx={{ mb: 8 }}
        />

        <Grid container spacing={3}>
          {features.map((f, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <motion.div
                {...cardGridItem}
                transition={{ delay: i * 0.08 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: 4, height: '100%', borderRadius: 4,
                    bgcolor: 'background.paper',
                    border: '1px solid', borderColor: 'divider',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease',
                    '&:hover': {
                      borderColor: f.color,
                      boxShadow: `0 12px 40px ${f.color}20`,
                      transform: 'translateY(-8px) scale(1.01)',
                    },
                  }}
                >
                  <Box sx={{
                    width: 48, height: 48, borderRadius: 3,
                    bgcolor: `${f.color}12`, color: f.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2.5, '& svg': { fontSize: 24 },
                  }}>
                    {f.icon}
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {f.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </div>
);

export default Features;
