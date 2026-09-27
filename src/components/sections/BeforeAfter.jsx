'use client';

import { useState } from 'react';
import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';

const scenarios = {
  single: {
    title: '1 tienda',
    problems: [
      'Estás encadenado físicamente al negocio sin libertad, flexibilidad ni horarios propios',
      'Tu información está en una computadora: si falla, se la roban o la pierdes, desaparece todo',
      'Cada decisión requiere tu presencia física: precios, descuentos, reorden dependen solo de ti',
    ],
    solutions: [
      'Operas remotamente desde cualquier lugar con control total en tu computadora',
      'Información segura en la nube: si algo falla, está protegido y tienes paz mental',
      'Delega y autoriza cambios: corre el negocio desde donde quieras estar siempre',
    ],
  },
  multi: {
    title: 'Varias tiendas',
    problems: [
      'No puedes estar en dos lugares a la vez: una tienda siempre está sin supervisión',
      'Cliente busca un producto que tienes en otra tienda, pero verificar tarda y se va',
      'Cambiar precios tienda por tienda es lento, cansado y genera errores constantemente',
    ],
    solutions: [
      'Todas tus tiendas en la palma de tu mano: ves qué pasa sin estar en ningún lado',
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
      'Cliente busca un producto que sabes que tienes pero no puedes verificar dónde exacto',
      'Tus almacenes son una caja negra: algunos dicen que hay stock, otros no, nadie sabe',
      'Cambias precio en una tienda y almacén no se entera: stock desaparece sin control',
    ],
    solutions: [
      'Tu computadora te muestra dónde está cada producto en tiempo real sin confusión ninguna',
      'Un solo lugar central donde ves todo: qué hay en tiendas y almacenes simultáneamente',
      'Un cambio de precio y todos ven lo mismo: mercancía con registro y control total',
    ],
  },
};

const BeforeAfter = () => {
  const [activeScenario, setActiveScenario] = useState('single');
  const current = scenarios[activeScenario];

  return (
    <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.15 }}>
              {current.title}
            </Typography>
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}
        >
          <Box sx={{
            display: 'flex',
            gap: 2,
            bgcolor: 'rgba(0,0,0,0.02)',
            p: 1,
            borderRadius: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {Object.entries(scenarios).map(([key, scenario]) => (
              <Button
                key={key}
                onClick={() => setActiveScenario(key)}
                variant={activeScenario === key ? 'contained' : 'text'}
                sx={{
                  px: { xs: 2.5, md: 3 },
                  py: 1.25,
                  fontSize: { xs: '0.8rem', md: '0.95rem' },
                  textTransform: 'none',
                  fontWeight: 600,
                  bgcolor: activeScenario === key ? '#22c55e' : 'transparent',
                  color: activeScenario === key ? 'white' : 'text.primary',
                  '&:hover': {
                    bgcolor: activeScenario === key ? '#16a34a' : 'rgba(0,0,0,0.04)',
                  },
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {scenario.title}
              </Button>
            ))}
          </Box>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Grid container spacing={6} alignItems="stretch">
              {/* PROBLEMA */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Stack spacing={3} sx={{ height: '100%' }}>
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#ef4444' }}>
                      El problema
                    </Typography>

                    <Stack spacing={2}>
                      {current.problems.map((item, i) => (
                        <Typography
                          key={i}
                          sx={{
                            fontSize: '0.95rem',
                            color: '#ef4444',
                            lineHeight: 1.6,
                            py: 1.5,
                            px: 2,
                            borderRadius: 2,
                            bgcolor: 'rgba(239, 68, 68, 0.05)',
                            borderLeft: '3px solid #ef4444',
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </motion.div>
              </Grid>

              {/* SOLUCIÓN */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Stack spacing={3} sx={{ height: '100%' }}>
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#10b981' }}>
                      La solución
                    </Typography>

                    <Stack spacing={2}>
                      {current.solutions.map((item, i) => (
                        <Typography
                          key={i}
                          sx={{
                            fontSize: '0.95rem',
                            color: '#10b981',
                            lineHeight: 1.6,
                            py: 1.5,
                            px: 2,
                            borderRadius: 2,
                            bgcolor: 'rgba(16, 185, 129, 0.05)',
                            borderLeft: '3px solid #10b981',
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default BeforeAfter;
