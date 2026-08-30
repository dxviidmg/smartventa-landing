import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { stepItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import { steps } from '../../data/steps';

const HowItWorks = () => (
  <Box id="how-it-works" sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <SectionHeader
        overline="Cómo empezar"
        title="Estás vendiendo en 4 pasos"
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
                bgcolor: 'background.paper',
                border: '1px solid', borderColor: 'divider',
              }}
            >
              <Typography sx={{
                fontWeight: 800, fontSize: '1.1rem', color: 'secondary.main',
                minWidth: 32, pt: 0.25,
              }}>
                {s.num}
              </Typography>
              <Box>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1.05rem' }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
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
