import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export const SectionHeader = ({ overline, title, subtitle }) => (
  <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
        {overline}
      </Typography>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
        {title}
      </Typography>
    </motion.div>
    {subtitle && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Typography sx={{ color: 'text.secondary', maxWidth: 550, fontSize: '1.05rem' }}>
          {subtitle}
        </Typography>
      </motion.div>
    )}
  </Stack>
);

export default SectionHeader;
