import { Box, Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const WhatsAppButton = () => (
  <Box
    sx={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 1000,
    }}
  >
    <Fab
      color="success"
      size="medium"
      onClick={() => openWhatsApp()}
      sx={{
        boxShadow: '0 4px 12px rgba(16,185,129,0.4)',
        '&:hover': { transform: 'scale(1.1)', boxShadow: '0 6px 16px rgba(16,185,129,0.5)' },
      }}
    >
      <WhatsApp />
    </Fab>
  </Box>
);

export default WhatsAppButton;
