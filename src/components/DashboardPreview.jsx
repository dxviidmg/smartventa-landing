import { Box, Container, Typography, Stack, Card, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import cartImg from '../assets/cart.png';

const features = [
  { img: cartImg, title: 'Ventas rápidas', desc: 'Caja intuitiva y eficiente' },
];

const DashboardPreview = () => (
  <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
        <Chip label="Dashboard" size="small" sx={{ bgcolor: '#34d399', color: '#022347', fontWeight: 700 }} />
        <Typography variant="h3" fontWeight={700}>Tu negocio, bajo control</Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
          Interfaz intuitiva diseñada para que gestiones tu negocio sin complicaciones
        </Typography>
      </Stack>

      <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 2, px: 1 }}>
        {features.map((f, i) => (
          <Card
            key={i}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
            sx={{
              minWidth: '85%',
              borderRadius: 4,
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Box component="img" src={f.img} alt={f.title} sx={{ width: '100%', height: 'auto', display: 'block' }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                <Typography variant="h6" color="white" fontWeight={600}>{f.title}</Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.8)">{f.desc}</Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default DashboardPreview;
