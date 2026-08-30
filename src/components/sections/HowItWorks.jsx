import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { stepItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import { steps } from '../../data/steps';

const HowItWorks = () => (
  <Box id="how-it-works" sx={{ ...sectionPadding, background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }}>
    <Container maxWidth="md">
      <SectionHeader
        overline="Cómo empezar"
        title="Arranca en minutos"
        overlineSx={{ color: '#34d399' }}
        titleSx={{ color: 'white' }}
        sx={{ mb: 6 }}
      />

      <Stack spacing={0}>
        {steps.map((s, i) => (
          <motion.div
            key={i}
            {...stepItem}
            transition={{ delay: i * 0.1 }}
          >
            <Stack
              direction="row"
              spacing={3}
              alignItems="flex-start"
              sx={{
                p: 3, mb: i < steps.length - 1 ? 2 : 0,
                borderRadius: 3,
                bgcolor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Typography sx={{
                fontWeight: 800, fontSize: '1.1rem', color: '#34d399',
                minWidth: 32, pt: 0.25,
              }}>
                {s.num}
              </Typography>
              <Box>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1.05rem', color: 'white' }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                  {s.desc}
                </Typography>
              </Box>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Container>
  </Box>
);

export default HowItWorks;
