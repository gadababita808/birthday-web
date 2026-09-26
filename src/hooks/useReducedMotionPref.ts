import { useEffect, useState } from 'react';

/**
 * Tracks the user's `prefers-reduced-motion` OS setting so components can
 * scale back (or skip) decorative animation, per the spec's accessibility
 * requirement.
 */
export function useReducedMotionPref(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);

    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }, []);

  return reduced;
}
