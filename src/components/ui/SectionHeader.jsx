import { Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionHeader } from '../../constants';

const SectionHeader = ({ overline, title, subtitle, sx, overlineSx, titleSx, subtitleSx }) => (
  <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8, ...sx }}>
    <motion.div {...sectionHeader.overline}>
      <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2, ...overlineSx }}>
        {overline}
      </Typography>
    </motion.div>
    <motion.div {...sectionHeader.title}>
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, ...titleSx }}>
        {title}
      </Typography>
    </motion.div>
    {subtitle && (
      <motion.div {...sectionHeader.subtitle}>
        <Typography sx={{ color: 'text.secondary', maxWidth: 550, fontSize: '1.05rem', ...subtitleSx }}>
          {subtitle}
        </Typography>
      </motion.div>
    )}
  </Stack>
);

export default SectionHeader;
