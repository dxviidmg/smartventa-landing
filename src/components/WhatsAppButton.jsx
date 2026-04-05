import { Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const WhatsAppButton = () => (
  <Fab
    color="success"
    size="medium"
    onClick={() => openWhatsApp()}
    sx={{
      position: 'fixed',
      bottom: 30,
      right: 30,
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(16,185,129,0.4)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-4px) scale(1.05)',
        boxShadow: '0 8px 24px rgba(16,185,129,0.5)',
      },
    }}
  >
    <WhatsApp />
  </Fab>
);

export default WhatsAppButton;
