import { useMemo } from 'react';
import { useReducedMotionPref } from '../../hooks/useReducedMotionPref';

type AmbientBackgroundProps = {
  /** How many decorative elements to draw. Keep low — this is atmosphere, not the show. */
  density?: 'soft' | 'medium';
  className?: string;
};

type Particle = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  kind: 'petal' | 'heart' | 'bokeh';
};

function makeParticles(count: number): Particle[] {
  const kinds: Particle['kind'][] = ['petal', 'petal', 'heart', 'bokeh'];
  return Array.from({ length: count }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 14 + Math.random() * 10,
    size: 10 + Math.random() * 14,
    kind: kinds[i % kinds.length],
  }));
}

/**
 * A quiet layer of drifting petals, tiny hearts, and soft bokeh light.
 * Purely decorative — always `aria-hidden`, and collapses to a few static,
 * unanimated shapes when the user prefers reduced motion.
 */
export function AmbientBackground({ density = 'soft', className = '' }: AmbientBackgroundProps) {
  const reducedMotion = useReducedMotionPref();
  const count = density === 'medium' ? 16 : 10;
  const particles = useMemo(() => makeParticles(count), [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className={reducedMotion ? '' : 'animate-drift'}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: reducedMotion ? `${(i * 37) % 100}%` : '-10vh',
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: reducedMotion ? 0.25 : undefined,
          }}
        >
          {p.kind === 'petal' && (
            <svg viewBox="0 0 20 20" width={p.size} height={p.size}>
              <ellipse cx="10" cy="10" rx="9" ry="6" fill="#F4A6B5" opacity="0.7" />
            </svg>
          )}
          {p.kind === 'heart' && (
            <svg viewBox="0 0 20 20" width={p.size * 0.7} height={p.size * 0.7}>
              <path
                d="M10 17 C1 10 1 3 6 3 C9 3 10 6 10 6 C10 6 11 3 14 3 C19 3 19 10 10 17Z"
                fill="#C94C68"
                opacity="0.55"
              />
            </svg>
          )}
          {p.kind === 'bokeh' && (
            <span
              className="block rounded-full bg-champagne"
              style={{ width: p.size * 0.5, height: p.size * 0.5, opacity: 0.5, filter: 'blur(1px)' }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
