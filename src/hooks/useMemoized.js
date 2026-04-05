import { useMemo, useCallback } from 'react';

export const useMemoized = (fn, deps) => useCallback(useMemo(() => fn, deps), deps);
