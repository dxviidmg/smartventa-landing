'use client';

import { Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp, POPPINS, PRIMARY } from '../../constants';

/**
 * Centered section heading: optional eyebrow, h2 title and optional subtitle.
 * Used by every section so type scale, colors and spacing live in one place.
 *
 * @param {string} [id] - id for the h2 (target of the section's aria-labelledby)
 * @param {string} [eyebrow] - small label above the title
 * @param {string} title
 * @param {string} [subtitle]
 * @param {boolean} [dark] - light text for blue backgrounds
 * @param {number} [spacing] - gap between the parts
 * @param {number|string} [maxWidth] - centers the block at this width
 * @param {object} [mb] - responsive bottom margin
 * @param {object} [titleSx] - overrides for the h2
 * @param {object} [subtitleSx] - overrides for the subtitle
 */
const SectionHeading = ({ id, eyebrow, title, subtitle, dark = false, spacing = 1.5, maxWidth, mb = { xs: 4, md: 6 }, titleSx, subtitleSx }) => (
  <motion.div {...fadeUp}>
    <Stack spacing={spacing} alignItems="center" textAlign="center" sx={{ mb, ...(maxWidth && { maxWidth, mx: 'auto' }) }}>
      {eyebrow && (
        <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 14, letterSpacing: 0.5, color: dark ? '#BAE6FD' : PRIMARY }}>
          {eyebrow}
        </Typography>
      )}
      <Typography
        id={id}
        variant="h2"
        sx={{ fontFamily: POPPINS, fontWeight: 500, letterSpacing: 0, fontSize: { xs: 30, md: 40 }, lineHeight: 1.2, color: dark ? '#fff' : '#0F172A', ...titleSx }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: dark ? 'rgba(255,255,255,0.92)' : '#475569', fontSize: { xs: 15, md: 16 }, lineHeight: 1.7, ...subtitleSx }}>
          {subtitle}
        </Typography>
      )}
    </Stack>
  </motion.div>
);

export default SectionHeading;
