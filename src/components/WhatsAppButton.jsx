import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { WhatsApp } from '@mui/icons-material';

const WhatsAppButton = () => {
  return (
    <Box
      component="a"
      href="https://wa.me/525561652599"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: '#25d366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            '&:hover': {
              bgcolor: '#22c55e',
            },
            '& svg': {
              fontSize: 32,
              color: 'white',
            },
          }}
        >
          <WhatsApp />
        </Box>
      </motion.div>
    </Box>
  );
};

export default WhatsAppButton;
