import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionHeader } from '../../constants';

const SectionHeader = ({ overline, title, subtitle, sx }) => (
  <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8, ...sx }}>
    <motion.div {...sectionHeader.overline}>
      <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
        {overline}
      </Typography>
    </motion.div>
    <motion.div {...sectionHeader.title}>
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
        {title}
      </Typography>
    </motion.div>
    {subtitle && (
      <motion.div {...sectionHeader.subtitle}>
        <Typography sx={{ color: 'text.secondary', maxWidth: 550, fontSize: '1.05rem' }}>
          {subtitle}
        </Typography>
      </motion.div>
    )}
  </Stack>
);

export default SectionHeader;
