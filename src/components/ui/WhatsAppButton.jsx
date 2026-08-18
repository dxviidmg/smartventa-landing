import { Box, Fab } from '@mui/material';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { useWhatsApp } from '../../contexts/WhatsAppContext';

const WhatsAppButton = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1000,
      }}
    >
      <Fab
        aria-label="Contactar por WhatsApp"
        onClick={() => openWhatsApp()}
        sx={{
          bgcolor: '#25D366',
          color: 'white',
          boxShadow: '0 4px 12px rgba(37,211,102,0.4)',
          '&:hover': {
            bgcolor: '#20BD5A',
            transform: 'scale(1.1)',
            boxShadow: '0 6px 16px rgba(37,211,102,0.5)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            bgcolor: 'rgba(37,211,102,0.4)',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            willChange: 'transform, opacity',
            zIndex: -1,
          },
        }}
      >
        <WhatsApp />
      </Fab>
    </Box>
  );
};

export default WhatsAppButton;
