'use client';

import { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import { sectionPadding, fadeUp } from '../../constants';
import useAutoAdvance, { tabKeyHandler } from '../../hooks/useAutoAdvance';

const scenarioKeys = ['single', 'multi', 'singleWarehouse', 'multiWarehouse'];

const scenarios = {
  single: {
    title: '1 tienda',
    problems: [
      'Estás encadenado físicamente al negocio sin libertad, flexibilidad ni horarios propios',
      'Tu información está en una computadora: si falla, se la roban o la pierdes, desaparece todo',
      'Todo lo tienes en libreta o excel, cada día tienes que hacer tu corte manual, es un proceso tedioso y propenso a errores',
    ],
    solutions: [
      'Operas remotamente desde cualquier lugar con control total en tu computadora',
      'Información segura en la nube: si algo falla, está protegido y tienes paz mental',
      'Obtén tu corte de caja y entérate de tus ganancias de manera automática',
    ],
  },
  multi: {
    title: '2 o más tiendas',
    problems: [
      'No puedes estar en dos lugares a la vez: una tienda siempre está sin supervisión',
      'Cliente busca un producto que tienes en otra tienda, pero verificar tarda y se va',
      'Cambiar precios tienda por tienda es lento, cansado y genera errores constantemente',
    ],
    solutions: [
      'Todas tus tiendas en tu computadora: ves qué pasa sin estar en ningún lado',
      'Ves stock de todas tus tiendas al instante, haces traspasos y garantizas cada venta',
      'Un cambio de precio en un lugar y automáticamente aplica igual en todas las tiendas',
    ],
  },
  singleWarehouse: {
    title: '1 tienda + 1 almacén',
    problems: [
      'No puedes estar en dos lugares a la vez: tienda o almacén siempre está desatendido',
      'Abres la puerta del almacén: supones cuánto hay, pero nunca sabes la verdad real',
      'Sacas productos sin registro: desorden, pérdida y confusión que no se resuelven',
    ],
    solutions: [
      'Tu computadora controla ambos lugares: ves qué pasa en tienda y almacén sin estar ahí',
      'Abre tu computadora y ve exactamente qué hay y cuándo reponer según lo que se vende',
      'Cada movimiento queda registrado: quién sacó qué, cuándo y dónde en todo momento',
    ],
  },
  multiWarehouse: {
    title: 'Varias tiendas + varios almacenes',
    problems: [
      'No puedes estar en varios lugares a la vez: pierdes control de qué pasa en cada ubicación',
      'Traspasos entre tiendas y surtido de mercancía desde almacenes son complejos sin trazabilidad clara',
      'No sabes exactamente qué producto y cuánto hay en cada ubicación: es difícil rastrear todo',
    ],
    solutions: [
      'Tu computadora te da visibilidad total: ves qué pasa en todas tus ubicaciones sin estar ahí',
      'Traspasos entre tiendas y surtido desde almacenes quedan registrados con trazabilidad completa siempre',
      'Sabes exactamente qué producto hay en cada tienda y almacén: cantidad, ubicación, todo en tiempo real',
    ],
  },
};

const ScenarioList = ({ items, kind }) => (
  <Stack spacing={1.5}>
    {items.map((item) => (
      <Stack key={item} direction="row" spacing={1.25} alignItems="flex-start">
        {kind === 'problem' ? (
          <Box sx={{
            width: 18, height: 18, borderRadius: '50%', bgcolor: '#fecaca', flexShrink: 0, mt: 0.25,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Close sx={{ color: '#b91c1c', fontSize: '0.8rem' }} />
          </Box>
        ) : (
          <Check sx={{ color: '#047857', fontSize: '1.2rem', flexShrink: 0, mt: 0.15 }} />
        )}
        <Typography sx={{ fontSize: '0.95rem', color: 'text.primary', lineHeight: 1.55 }}>
          {item}
        </Typography>
      </Stack>
    ))}
  </Stack>
);

const BeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const { stop, pauseProps } = useAutoAdvance(containerRef, {
    // Longer scenarios get more reading time
    delay: activeIndex < 2 ? 8000 : 12000,
    onAdvance: () => setActiveIndex((prev) => (prev + 1) % scenarioKeys.length),
    step: activeIndex,
  });

  const select = (index) => {
    setActiveIndex(index);
    stop();
  };

  return (
    <Box sx={{ ...sectionPadding, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Tu situación
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 520 }}>
              Selecciona tu configuración de negocio para ver cómo SmartVenta resuelve tus problemas específicos.
            </Typography>
          </Stack>
        </motion.div>

        <Box
          ref={containerRef}
          {...pauseProps}
          sx={{ bgcolor: 'background.default', borderRadius: 3, overflow: 'hidden' }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'center' },
            overflowX: 'auto',
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}>
            <Stack
              direction="row"
              spacing={1}
              role="tablist"
              aria-label="Configuración de tu negocio"
              sx={{ p: 0.75, borderRadius: 999, bgcolor: 'rgba(0,0,0,0.04)', border: '1px solid', borderColor: 'divider', flexShrink: 0 }}
            >
              {scenarioKeys.map((key, i) => {
                const selected = i === activeIndex;
                return (
                  <Box
                    component="button"
                    key={key}
                    role="tab"
                    id={`scenario-tab-${key}`}
                    aria-selected={selected}
                    aria-controls={`scenario-panel-${key}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => select(i)}
                    onKeyDown={tabKeyHandler(scenarioKeys.length, i, select)}
                    sx={{
                      position: 'relative', border: 0, cursor: 'pointer', font: 'inherit',
                      px: { xs: 1.75, md: 2.5 }, minHeight: 44, borderRadius: 999, whiteSpace: 'nowrap',
                      fontSize: '0.9rem', fontWeight: 600,
                      bgcolor: selected ? '#04346b' : 'transparent',
                      color: selected ? '#ffffff' : 'text.secondary',
                      transition: 'background-color 0.25s ease, color 0.25s ease',
                      '&:hover': { color: selected ? '#ffffff' : 'text.primary' },
                      '&:focus-visible': { outline: '2px solid #065a9e', outlineOffset: 2 },
                    }}
                  >
                    {scenarios[key].title}
                  </Box>
                );
              })}
            </Stack>
          </Box>

          {/* All panels share one grid cell so the box keeps the tallest height and never jumps */}
          <Box sx={{ display: 'grid' }}>
            {scenarioKeys.map((key, i) => {
              const selected = i === activeIndex;
              const scenario = scenarios[key];
              return (
                <Box
                  key={key}
                  role="tabpanel"
                  id={`scenario-panel-${key}`}
                  aria-labelledby={`scenario-tab-${key}`}
                  aria-hidden={!selected}
                  sx={{
                    gridArea: '1 / 1',
                    opacity: selected ? 1 : 0,
                    visibility: selected ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s',
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ p: 3, pr: { md: 2.5 } }}>
                      <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#b91c1c', mb: 2 }}>
                        El problema
                      </Typography>
                      <ScenarioList items={scenario.problems} kind="problem" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{
                      p: 3,
                      pl: { md: 2.5 },
                      borderLeft: { xs: 'none', md: '1px solid' },
                      borderTop: { xs: '1px solid', md: 'none' },
                      // Responsive so it is emitted after the border shorthands above
                      borderColor: { xs: 'divider', md: 'divider' },
                    }}>
                      <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#047857', mb: 2 }}>
                        La solución
                      </Typography>
                      <ScenarioList items={scenario.solutions} kind="solution" />
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BeforeAfter;
