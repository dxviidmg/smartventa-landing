'use client';

import { useEffect, useEffectEvent, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Auto-advances a carousel/tab set only while it is visible, not hovered or focused,
 * and the user has not interacted with it. Disabled when reduced motion is requested.
 * @param {object} ref - Ref to the carousel container
 * @param {object} options
 * @param {number} options.delay - Milliseconds before advancing
 * @param {function} options.onAdvance - Called to move to the next item
 * @param {*} options.step - Current item; restarts the timer when it changes
 * @returns {{ stop: function, pauseProps: object }}
 */
const useAutoAdvance = (ref, { delay, onAdvance, step }) => {
  const inView = useInView(ref, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [stopped, setStopped] = useState(false);
  const [paused, setPaused] = useState(false);
  const advance = useEffectEvent(onAdvance);

  useEffect(() => {
    if (stopped || paused || reduceMotion || !inView) return undefined;
    const timer = setTimeout(advance, delay);
    return () => clearTimeout(timer);
  }, [stopped, paused, reduceMotion, inView, delay, step]);

  const pauseProps = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
    },
  };

  return { stop: () => setStopped(true), pauseProps };
};

/**
 * Arrow-key navigation for a role="tablist" (WAI-ARIA tabs pattern).
 */
export const tabKeyHandler = (count, index, select) => (e) => {
  const moves = { ArrowRight: 1, ArrowLeft: -1, Home: -index, End: count - 1 - index };
  if (!(e.key in moves)) return;
  e.preventDefault();
  const next = (index + moves[e.key] + count) % count;
  select(next);
  e.currentTarget.parentElement?.querySelectorAll('[role="tab"]')[next]?.focus();
};

export default useAutoAdvance;
