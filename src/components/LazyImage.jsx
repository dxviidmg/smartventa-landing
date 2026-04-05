import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const LazyImage = ({ src, alt, sx, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
        ...sx,
      }}
      {...props}
    />
  );
};

export { LazyImage };
export default LazyImage;
