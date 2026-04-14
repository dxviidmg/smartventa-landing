import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const LazyImage = ({ src, alt, sx, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
        minHeight: loaded ? 0 : 400,
        bgcolor: '#e0e0e0',
        ...sx,
      }}
      {...props}
    />
  );
};

export { LazyImage };
export default LazyImage;
