'use client';

import { useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import Check from '@mui/icons-material/Check';
import Flag from '@mui/icons-material/Flag';
import { POPPINS, CTA_BG } from '../../constants';
import { Arrows, scenes } from '../ui/ScenarioScenes';
import { scenarioKeys, scenarios } from '../../data/scenarios';
import SectionHeading from '../ui/SectionHeading';

/* Arrow-key navigation for the tabs. */
const tabKeys = (count, index, select) => (e) => {
  const moves = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1, Home: -index, End: count - 1 - index };
  if (!(e.key in moves)) return;
  e.preventDefault();
  const next = (index + moves[e.key] + count) % count;
  select(next);
  e.currentTarget.parentElement?.querySelectorAll('[role="tab"]')[next]?.focus();
};

const BadIcon = () => (
  <Box aria-hidden="true" sx={{ width: 26, height: 26, flexShrink: 0, borderRadius: '50%', bgcolor: '#DBEAFE', color: '#0030AB', display: 'grid', placeItems: 'center' }}>
    <Flag sx={{ fontSize: 15 }} />
  </Box>
);
const GoodIcon = ({ onDark }) => (
  <Box aria-hidden="true" sx={{ width: 26, height: 26, flexShrink: 0, borderRadius: '50%', bgcolor: onDark ? 'rgba(255,255,255,0.22)' : '#DCFCE7', color: onDark ? '#fff' : '#047857', display: 'grid', placeItems: 'center' }}>
    <Check sx={{ fontSize: 16 }} />
  </Box>
);

const BeforeAfter = () => {
  const [v, setV] = useState(0);
  const key = scenarioKeys[v];
  const sc = scenarios[key];

  return (
    <Box component="section" id="situation" aria-labelledby="situation-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff', scrollMarginTop: '80px' }}>
      <Container maxWidth="lg">
        <SectionHeading id="situation-title" title="Una solución para cada tipo de negocio" mb={{ xs: 3.5, md: 5 }} />

        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, overflowX: 'auto', pb: 0.5, mb: 3.5 }}>
          <Stack direction="row" spacing={1} role="tablist" aria-label="Configuración de tu negocio" sx={{ flexShrink: 0 }}>
            {scenarioKeys.map((k, i) => {
              const selected = i === v;
              return (
                <Box
                  component="button"
                  key={k}
                  role="tab"
                  id={`situation-tab-${k}`}
                  aria-selected={selected}
                  aria-controls="situation-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setV(i)}
                  onKeyDown={tabKeys(scenarioKeys.length, i, setV)}
                  sx={{
                    border: 0, cursor: 'pointer', font: 'inherit', fontFamily: POPPINS, fontWeight: 500,
                    px: 2.5, minHeight: 44, borderRadius: '45px', whiteSpace: 'nowrap', fontSize: 14, transition: 'background-color .2s',
                    bgcolor: selected ? '#0030AB' : '#EEF2F8', color: selected ? '#fff' : '#334155',
                    '&:hover': { bgcolor: selected ? '#0030AB' : '#E2E8F0' },
                    '&:focus-visible': { outline: '3px solid #0030AB', outlineOffset: 2 },
                  }}
                >
                  {scenarios[k].title}
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Box
          role="tabpanel"
          id="situation-panel"
          aria-labelledby={`situation-tab-${key}`}
          sx={{ display: 'grid', gap: 3, alignItems: 'stretch', gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' } }}
        >
          <Box sx={{ gridColumn: { md: 'span 4' }, bgcolor: '#EFF6FF', borderRadius: '24px', p: { xs: 2, md: 2 }, display: 'grid', placeItems: 'center', border: '1px solid #DBEAFE' }}>
            <svg viewBox="0 0 420 330" role="img" aria-label={`Ilustración del caso: ${sc.title}`} style={{ width: '100%', maxWidth: 420, height: 'auto', display: 'block', margin: '0 auto' }}>
              <Arrows />
              {scenes[key]}
            </svg>
          </Box>

            <Box sx={{ gridColumn: { md: 'span 4' }, p: { xs: 3, md: 3.5 }, borderRadius: '24px', bgcolor: '#F8FAFC', border: '1px solid #E6EDF5' }}>
              <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 18, color: '#0030AB', mb: 2 }}>Lo que buscas</Typography>
              <Stack spacing={1.75}>
                {sc.problems.map((p) => (
                  <Stack key={p} direction="row" spacing={1.5} alignItems="flex-start">
                    <BadIcon />
                    <Typography sx={{ color: '#475569', fontSize: 15, lineHeight: 1.55 }}>{p}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
            <Box sx={{ gridColumn: { md: 'span 4' }, p: { xs: 3, md: 3.5 }, borderRadius: '24px', background: CTA_BG, boxShadow: '0 16px 36px rgba(0,60,180,0.22)' }}>
              <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 18, color: '#fff', mb: 2 }}>Lo que logras con SmartVenta</Typography>
              <Stack spacing={1.75}>
                {sc.solutions.map((p) => (
                  <Stack key={p} direction="row" spacing={1.5} alignItems="flex-start">
                    <GoodIcon onDark />
                    <Typography sx={{ color: '#fff', fontSize: 15, lineHeight: 1.55, fontWeight: 500 }}>{p}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BeforeAfter;
