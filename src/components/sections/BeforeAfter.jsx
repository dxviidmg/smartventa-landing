'use client';

import { useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import { fadeUp } from '../../constants';
import { Store, Warehouse } from '../ui/HeroIllustration';

const POPPINS = '"Poppins", sans-serif';
const GRADIENT = 'linear-gradient(80deg, rgb(0,48,204) 0%, rgb(0,164,219) 100%)';
const BLUE_BG = 'linear-gradient(134deg, #00A4DB 0%, #00269E 100%)';

const scenarioKeys = ['single', 'multi', 'singleWarehouse', 'multiWarehouse'];

const scenarios = {
  single: {
    title: '1 tienda',
    problems: [
      'Estás atado al negocio: sin ti, nadie sabe cuánto se vendió.',
      'Tu información vive en una sola computadora. Si falla, la pierdes.',
      'El corte de caja es manual, lento y propenso a errores.',
    ],
    solutions: [
      'Revisa tus ventas desde cualquier lugar.',
      'Tus datos están seguros en la nube.',
      'El corte de caja y tu ganancia se calculan solos.',
    ],
  },
  multi: {
    title: '2 o más tiendas',
    problems: [
      'Siempre hay una tienda sin supervisión.',
      'El cliente busca un producto que está en otra tienda y se va.',
      'Cambiar precios tienda por tienda es lento y genera errores.',
    ],
    solutions: [
      'Ves lo que pasa en todas tus tiendas desde un solo lugar.',
      'Consultas el stock de cada sucursal y haces traspasos al instante.',
      'Cambias un precio una vez y se aplica en todas.',
    ],
  },
  singleWarehouse: {
    title: '1 tienda + 1 almacén',
    problems: [
      'Tienda o almacén siempre queda desatendido.',
      'Supones cuánto hay en el almacén, pero nunca lo sabes.',
      'Sale mercancía sin registro y nadie responde por ella.',
    ],
    solutions: [
      'Ves tienda y almacén sin estar presente.',
      'Sabes qué hay y cuándo reponer según lo que vendes.',
      'Cada movimiento registra quién, qué, cuándo y dónde.',
    ],
  },
  multiWarehouse: {
    title: 'Varias tiendas + almacenes',
    problems: [
      'Pierdes el control de lo que pasa en cada ubicación.',
      'Sin trazabilidad, los traspasos y el surtido se complican.',
      'No sabes qué producto hay en cada lugar ni cuánto.',
    ],
    solutions: [
      'Ves todas tus ubicaciones en una sola pantalla.',
      'Traspasos y surtido quedan registrados de principio a fin.',
      'Conoces el stock exacto de cada tienda y almacén, en tiempo real.',
    ],
  },
};

/* Arrow-key navigation for the tabs. */
const tabKeys = (count, index, select) => (e) => {
  const moves = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1, Home: -index, End: count - 1 - index };
  if (!(e.key in moves)) return;
  e.preventDefault();
  const next = (index + moves[e.key] + count) % count;
  select(next);
  e.currentTarget.parentElement?.querySelectorAll('[role="tab"]')[next]?.focus();
};

const BadIcon = ({ light }) => (
  <Box aria-hidden="true" sx={{ width: 26, height: 26, flexShrink: 0, borderRadius: '50%', bgcolor: light ? 'rgba(254,202,202,0.25)' : '#FEE2E2', color: light ? '#FECACA' : '#B91C1C', display: 'grid', placeItems: 'center' }}>
    <Close sx={{ fontSize: 16 }} />
  </Box>
);
const GoodIcon = ({ onDark }) => (
  <Box aria-hidden="true" sx={{ width: 26, height: 26, flexShrink: 0, borderRadius: '50%', bgcolor: onDark ? 'rgba(255,255,255,0.22)' : '#DCFCE7', color: onDark ? '#fff' : '#047857', display: 'grid', placeItems: 'center' }}>
    <Check sx={{ fontSize: 16 }} />
  </Box>
);

const Arrows = () => (
  <defs>
    <marker id="ba-y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#EAB308" /></marker>
    <marker id="ba-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#10B981" /></marker>
  </defs>
);
const L = '#334155';
const scenes = {
  single: (
    <g transform="translate(210 160) scale(1.6) translate(-210 -150)">
      <Store x={158} y={80} color="#FACC15" label="Tu tienda" chip="+$4.2k" labelColor={L} />
    </g>
  ),
  multi: (
    <>
      <path d="M150 170 Q210 120 270 170" fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
      <Store x={40} y={90} color="#FACC15" label="Tienda 1" chip="+$4.2k" labelColor={L} />
      <Store x={276} y={90} color="#34D399" label="Tienda 2" chip="+$2.4k" labelColor={L} />
    </>
  ),
  singleWarehouse: (
    <>
      <path d="M244 170 H156" fill="none" stroke="#EAB308" strokeWidth="3.5" strokeLinecap="round" markerEnd="url(#ba-y)" />
      <Store x={40} y={90} color="#FACC15" label="Tienda" chip="+$4.2k" labelColor={L} />
      <Warehouse x={254} y={90} w={130} h={64} label="Almacén" labelColor={L} />
    </>
  ),
  multiWarehouse: (
    <>
      <g fill="none" strokeWidth="3.5" strokeLinecap="round">
        <path d="M178 40 Q 224 14 262 40" stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d="M70 128 Q 52 150 62 176" stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d="M340 118 Q 356 150 346 176" stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d="M126 236 H152" stroke="#10B981" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
        <path d="M264 236 H290" stroke="#10B981" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
      </g>
      <Warehouse x={30} y={14} w={140} h={52} label="Almacén central" labelColor={L} />
      <Warehouse x={270} y={22} w={110} h={44} label="Almacén 2" labelColor={L} />
      <Store x={10} y={166} color="#FACC15" label="Tienda 1" labelColor={L} />
      <Store x={158} y={166} color="#A78BFA" label="Tienda 2" labelColor={L} />
      <Store x={306} y={166} color="#34D399" label="Tienda 3" labelColor={L} />
    </>
  ),
};

const BeforeAfter = () => {
  const [v, setV] = useState(0);
  const key = scenarioKeys[v];
  const sc = scenarios[key];

  return (
    <Box component="section" id="situation" aria-labelledby="situation-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff', scrollMarginTop: '80px' }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: { xs: 3.5, md: 5 } }}>
          <motion.div {...fadeUp}>
            <Typography
              id="situation-title"
              variant="h2"
              sx={{ fontFamily: POPPINS, fontWeight: 500, letterSpacing: 0, fontSize: { xs: 30, md: 40 }, lineHeight: 1.2, color: '#242F3E' }}
            >
              Tu situación
            </Typography>
          </motion.div>
          <Typography sx={{ color: '#5B6472', fontSize: { xs: 15, md: 16 } }}>
            Elige tu caso y ve cómo SmartVenta lo resuelve.
          </Typography>
        </Stack>

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
            <svg viewBox="0 0 420 330" role="img" aria-label={`Ilustración del caso: ${sc.title}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
              <Arrows />
              {scenes[key]}
            </svg>
          </Box>

            <Box sx={{ gridColumn: { md: 'span 4' }, p: { xs: 3, md: 3.5 }, borderRadius: '24px', bgcolor: '#F8FAFC', border: '1px solid #E6EDF5' }}>
              <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 18, color: '#B91C1C', mb: 2 }}>Hoy</Typography>
              <Stack spacing={1.75}>
                {sc.problems.map((p) => (
                  <Stack key={p} direction="row" spacing={1.5} alignItems="flex-start">
                    <BadIcon />
                    <Typography sx={{ color: '#475569', fontSize: 15, lineHeight: 1.55 }}>{p}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
            <Box sx={{ gridColumn: { md: 'span 4' }, p: { xs: 3, md: 3.5 }, borderRadius: '24px', background: BLUE_BG, boxShadow: '0 16px 36px rgba(0,60,180,0.22)' }}>
              <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 18, color: '#fff', mb: 2 }}>Con SmartVenta</Typography>
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
