import { Box } from '@mui/material';

export const Card = ({ children, sx, ...props }) => (
  <Box
    sx={{
      p: 4,
      height: '100%',
      borderRadius: 4,
      bgcolor: 'background.paper',
      border: '1px solid',
      borderColor: 'divider',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        borderColor: 'primary.main',
        boxShadow: '0 8px 30px rgba(4,52,107,0.1)',
        transform: 'translateY(-4px)',
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default Card;
