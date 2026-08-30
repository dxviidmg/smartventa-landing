import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { industries } from '../../data/industries';
import { sectionPadding, fadeUp, pillItem } from '../../constants';

const Industries = () => (
  <div id="industries">
    <Box sx={{ ...sectionPadding, py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Typography
            sx={{
              textAlign: 'center', color: 'text.secondary',
              fontSize: '1rem', fontWeight: 500, mb: 4,
            }}
          >
            Usado por tiendas de
          </Typography>
        </motion.div>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1.5}
        >
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              {...pillItem}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Stack
                direction="row"
                spacing={0.75}
                alignItems="center"
                sx={{
                  py: 1.25, px: 2.5,
                  borderRadius: 2,
                  border: '1px solid', borderColor: 'divider',
                  bgcolor: 'background.paper',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.light',
                    bgcolor: 'rgba(4,52,107,0.03)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', '& svg': { fontSize: 18, color: 'text.secondary' } }}>
                  {industry.icon}
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary', whiteSpace: 'nowrap' }}>
                  {industry.title}
                </Typography>
              </Stack>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  </div>
);

export default Industries;
