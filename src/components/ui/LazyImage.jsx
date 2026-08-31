'use client';

import { useState, useEffect } from 'react';

/**
 * Image component with fade-in transition on load.
 * @param {object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {object} [props.sx] - Inline style overrides (applied as style, not MUI sx)
 * @param {number} [props.width] - Intrinsic width for layout shift prevention
 * @param {number} [props.height] - Intrinsic height for layout shift prevention
 */
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
