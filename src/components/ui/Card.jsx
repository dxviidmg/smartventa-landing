import { Box } from '@mui/material';
import { cardStyles, cardHoverStyles } from '../../constants';

const Card = ({ children, sx, ...props }) => (
  <Box sx={{ ...cardStyles, ...sx }} {...props}>
    {children}
  </Box>
);

export default Card;
