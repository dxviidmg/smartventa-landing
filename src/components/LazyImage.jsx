import { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, sx, width, height, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  const style = {
    opacity: loaded ? 1 : 0,
    transition: 'opacity 0.3s ease',
    ...(sx || {}),
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={style}
      {...props}
    />
  );
};

export { LazyImage };
export default LazyImage;
