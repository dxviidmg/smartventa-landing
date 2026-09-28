'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Check from '@mui/icons-material/Check';
import { sectionPadding, fadeUp } from '../../constants';

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

const BeforeAfter = () => {
  const [activeScenario, setActiveScenario] = useState('single');
  const [autoPlay, setAutoPlay] = useState(true);
  const timerRef = useRef(null);
  const current = scenarios[activeScenario];

  const getAutoplayInterval = (scenario) => {
    const index = scenarioKeys.indexOf(scenario);
    return index < 2 ? 5000 : 10000;
  };

  const getManualRestartDelay = (scenario) => {
    const index = scenarioKeys.indexOf(scenario);
    return index < 2 ? 10000 : 20000;
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveScenario((prev) => {
        const currentIndex = scenarioKeys.indexOf(prev);
        const nextIndex = (currentIndex + 1) % scenarioKeys.length;
        return scenarioKeys[nextIndex];
      });
    }, getAutoplayInterval(activeScenario));

    return () => clearInterval(interval);
  }, [autoPlay, activeScenario]);

  const handleManualClick = (key) => {
    setActiveScenario(key);
    setAutoPlay(false);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setAutoPlay(true);
    }, getManualRestartDelay(key));
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

        <Box sx={{
          bgcolor: 'background.default',
          borderRadius: 3,
          overflow: 'hidden',
        }}>
          {/* BOTONES - PILL ROW */}
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'center' },
            overflowX: 'auto',
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}>
            <Stack direction="row" spacing={1} sx={{ p: 0.75, borderRadius: 999, bgcolor: 'rgba(0,0,0,0.04)', border: '1px solid', borderColor: 'divider', flexShrink: 0 }}>
              {Object.entries(scenarios).map(([key, scenario]) => (
                <Box
                  component="button"
                  key={key}
                  onClick={() => handleManualClick(key)}
                  sx={{
                    position: 'relative', border: 0, cursor: 'pointer', font: 'inherit',
                    px: { xs: 1.75, md: 2.5 }, py: 1, borderRadius: 999, whiteSpace: 'nowrap',
                    fontSize: '0.9rem', fontWeight: 600,
                    bgcolor: activeScenario === key ? '#04346b' : 'transparent',
                    color: activeScenario === key ? '#ffffff' : 'text.secondary',
                    transition: 'all 0.25s ease',
                    '&:hover': { color: activeScenario === key ? '#ffffff' : 'text.primary' },
                  }}
                >
                  {scenario.title}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* CONTENIDO - Problema | Solución */}
          <Grid container spacing={0} sx={{ height: 'auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'contents', width: '100%' }}
              >
                {/* PROBLEMA */}
                <Grid size={{ xs: 12, md: 6 }} sx={{ p: 3, pr: { md: 2.5 }, display: 'flex', flexDirection: 'column' }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#ef4444', mb: 2 }}>
                      El problema
                    </Typography>

                    <Stack spacing={1.5}>
                      {current.problems.map((item, i) => (
                        <Stack key={i} direction="row" spacing={1.25} alignItems="flex-start">
                          <Box sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            bgcolor: '#fecaca',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            mt: 0.25,
                          }}>
                            <Typography sx={{ color: '#ef4444', fontSize: '0.7rem', fontWeight: 900 }}>✕</Typography>
                          </Box>
                          <Typography
                            sx={{
                              fontSize: '0.9rem',
                              color: 'text.primary',
                              lineHeight: 1.5,
                            }}
                          >
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </motion.div>
                </Grid>

                {/* SOLUCIÓN */}
                <Grid size={{ xs: 12, md: 6 }} sx={{
                  p: 3,
                  pl: { md: 2.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: { xs: 'none', md: '1px solid' },
                  borderColor: { md: 'divider' },
                  borderTop: { xs: '1px solid', md: 'none' },
                }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#10b981', mb: 2 }}>
                      La solución
                    </Typography>

                    <Stack spacing={1.5}>
                      {current.solutions.map((item, i) => (
                        <Stack key={i} direction="row" spacing={1.25} alignItems="flex-start">
                          <Check sx={{
                            color: '#10b981',
                            fontSize: '1.2rem',
                            flexShrink: 0,
                            mt: 0.15,
                          }} />
                          <Typography
                            sx={{
                              fontSize: '0.9rem',
                              color: 'text.primary',
                              lineHeight: 1.5,
                            }}
                          >
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </motion.div>
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BeforeAfter;
