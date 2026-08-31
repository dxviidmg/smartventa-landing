'use client';

import { Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionHeader } from '../../constants';

/**
 * Animated section header with overline, title, and optional subtitle.
 * @param {object} props
 * @param {string} props.overline - Small text above the title
 * @param {string} props.title - Main heading text
 * @param {string} [props.subtitle] - Optional description below the title
 * @param {object} [props.sx] - MUI sx overrides for the container Stack
 * @param {object} [props.overlineSx] - MUI sx overrides for the overline Typography
 * @param {object} [props.titleSx] - MUI sx overrides for the title Typography
 * @param {object} [props.subtitleSx] - MUI sx overrides for the subtitle Typography
 */
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
