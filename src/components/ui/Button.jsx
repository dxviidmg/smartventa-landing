import { Box } from '@mui/material';

export const Button = ({ variant = 'contained', size = 'medium', children, sx, ...props }) => (
  <Box
    component="button"
    sx={{
      px: 4,
      py: 1.5,
      fontSize: '1rem',
      fontWeight: 600,
      borderRadius: 10,
      textTransform: 'none',
      cursor: 'pointer',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': { transform: 'translateY(-2px)' },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default Button;
