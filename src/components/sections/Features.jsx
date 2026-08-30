import { useState } from 'react';
import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { cardGridItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import { features } from '../../data/features';

const INITIAL_COUNT = 9;

const Features = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? features : features.slice(0, INITIAL_COUNT);

  return (
    <div id="features">
      <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionHeader
            overline="Características"
            title="Lo que incluye tu cuenta"
            subtitle="No hay módulos adicionales ni funciones bloqueadas. Todo está incluido desde el primer día."
            sx={{ mb: 8 }}
          />

          <Grid container spacing={2.5}>
            {visible.map((f, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <motion.div
                  {...cardGridItem}
                  transition={{ delay: i * 0.04 }}
                  style={{ height: '100%' }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      p: 3, height: '100%', borderRadius: 3,
                      bgcolor: 'background.paper',
                      border: '1px solid', borderColor: 'divider',
                      transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        borderColor: f.color,
                        boxShadow: `0 2px 12px ${f.color}15`,
                      },
                    }}
                  >
                    <Box sx={{
                      width: 40, height: 40, minWidth: 40, borderRadius: 2,
                      bgcolor: `${f.color}10`, color: f.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      '& svg': { fontSize: 20 },
                    }}>
                      {f.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, mb: 0.25, fontSize: '0.95rem' }}>
                        {f.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, fontSize: '0.85rem' }}>
                        {f.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {features.length > INITIAL_COUNT && (
            <Stack alignItems="center" sx={{ mt: 4 }}>
              <Button
                onClick={() => setShowAll(!showAll)}
                endIcon={showAll ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                sx={{
                  color: 'text.secondary', fontWeight: 500, fontSize: '0.9rem',
                  '&:hover': { bgcolor: 'rgba(4,52,107,0.04)', color: 'text.primary' },
                }}
              >
                {showAll ? 'Ver menos' : `Ver las ${features.length - INITIAL_COUNT} restantes`}
              </Button>
            </Stack>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default Features;
