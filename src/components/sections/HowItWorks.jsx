import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { stepItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import { steps } from '../../data/steps';

const HowItWorks = () => (
  <>
    <Box id="how-it-works" sx={{ ...sectionPadding, background: 'linear-gradient(145deg, #022347 0%, #04346b 100%)' }}>
      <Container maxWidth="md">
        <Stack spacing={8}>
          <SectionHeader
            overline="Cómo funciona"
            title="Cómo Empiezas en 4 Pasos"
            overlineSx={{ color: '#6ee7b7', fontSize: '0.75rem' }}
            titleSx={{ color: 'white', fontWeight: 800 }}
            sx={{ mb: 0 }}
          />

          <Stack spacing={0}>
            {steps.map((s, i) => (
              <motion.div
                key={i}
                {...stepItem}
                transition={{ delay: i * 0.15 }}
              >
                <Stack
                  direction="row"
                  spacing={3}
                  alignItems="flex-start"
                  sx={{
                    py: 4,
                    borderBottom: i < steps.length - 1 ? '1px solid' : 'none',
                    borderColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Box sx={{
                    minWidth: 56, height: 56, borderRadius: 3,
                    bgcolor: '#34d399', color: '#022347',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(52,211,153,0.3)',
                    '& svg': { fontSize: 26 },
                  }}>
                    {s.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem' }}>
                      Paso {s.num}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5, color: 'white' }}>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                      {s.desc}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  </>
);

export default HowItWorks;
