'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DescriptionIcon from '@mui/icons-material/Description';
import SmileIcon from '@mui/icons-material/EmojiEmotions';
import SpaIcon from '@mui/icons-material/Spa';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DiamondIcon from '@mui/icons-material/Diamond';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PetsIcon from '@mui/icons-material/Pets';
import ChairIcon from '@mui/icons-material/Chair';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { fadeUp } from '../../constants';

const industries = [
  { name: 'Ferreterías', icon: BuildIcon },
  { name: 'Refaccionarias', icon: DirectionsCarIcon },
  { name: 'Papelerías', icon: DescriptionIcon },
  { name: 'Jugueterías', icon: SmileIcon },
  { name: 'Cosméticos', icon: SpaIcon },
  { name: 'Dulcerías', icon: SmileIcon },
  { name: 'Tiendas de regalos', icon: ShoppingBagIcon },
  { name: 'Productos de limpieza', icon: BuildIcon },
  { name: 'Joyerías', icon: DiamondIcon },
  { name: 'Tiendas de celulares', icon: DesktopMacIcon },
  { name: 'Electrónica', icon: DesktopMacIcon },
  { name: 'Accesorios', icon: ShoppingBagIcon },
  { name: 'Mercerías', icon: DescriptionIcon },
  { name: 'Librerías', icon: MenuBookIcon },
  { name: 'Mueblerías', icon: ChairIcon },
  { name: 'Tiendas de artículos para fiesta', icon: SmileIcon },
  { name: 'Tiendas de mascotas', icon: PetsIcon },
  { name: 'Ópticas', icon: RemoveRedEyeIcon },
  { name: 'Estéticas', icon: SpaIcon },
  { name: 'y más', icon: MoreHorizIcon },
];

const Industries = () => (
  <div id="industries">
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={4} alignItems="center">
            <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ maxWidth: 520, mx: 'auto' }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.15 }}>
                Diseñado para miles de negocios
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                Desde pequeñas tiendas hasta redes con múltiples sucursales
              </Typography>
            </Stack>

            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: { xs: 1.5, sm: 2 } }}
            >
              {industries.map((industry, i) => {
                const IconComponent = industry.icon;
                return (
                  <Stack
                    key={industry.name}
                    direction="row"
                    alignItems="center"
                    spacing={0.75}
                    sx={{ px: { xs: 1, sm: 0 } }}
                  >
                    <IconComponent sx={{ fontSize: '1.25rem', color: 'text.secondary' }} />
                    <Typography
                      sx={{
                        color: 'text.primary',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {industry.name}
                    </Typography>
                    {i < industries.length - 1 && (
                      <Box
                        sx={{
                          width: 3,
                          height: 3,
                          borderRadius: '50%',
                          bgcolor: 'divider',
                          display: { xs: 'none', sm: 'block' },
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  </div>
);

export default Industries;
