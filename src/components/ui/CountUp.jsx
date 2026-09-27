'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

const CountUp = ({ value, prefix = '', suffix = '', duration = 1.4 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return <span ref={ref}>{prefix}{n.toLocaleString('en-US')}{suffix}</span>;
};

export default CountUp;
