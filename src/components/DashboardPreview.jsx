import { Box, Container, Typography, Grid, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const DashboardPreview = () => (
  <Box id="dashboard-preview" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Así se ve por dentro
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
            Información clara, decisiones rápidas
          </Typography>
        </motion.div>
      </Stack>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <Box id="dashboard-video" sx={{
          borderRadius: 4, overflow: 'hidden',
          border: '1px solid', borderColor: 'divider',
          boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
          aspectRatio: '16/9',
          maxWidth: '50%',
          mx: 'auto',
        }}>
          <iframe
            src="https://drive.google.com/file/d/1L8BTl1Hb7K1MxwXmup5n8FNcFKB8o5Ry/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            style={{ border: 'none' }}
          />
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default DashboardPreview;
