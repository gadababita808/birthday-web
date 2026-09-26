import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdaySurprise } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { Panda } from '../shared/Panda';
import { useReducedMotionPref } from '../../hooks/useReducedMotionPref';

const CANDLE_COUNT = 5;
const CONFETTI_COLORS = ['#C94C68', '#F4A6B5', '#F1E3C6', '#9CAE8C', '#8E2F4F'];

type ConfettiPiece = { left: number; delay: number; rotate: number; color: string };

function makeConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 0.4,
    rotate: Math.random() * 360,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
  }));
}

export function BirthdaySurprise() {
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = useReducedMotionPref();
  const confetti = useMemo(() => makeConfetti(reducedMotion ? 0 : 26), [reducedMotion]);

  return (
    <section id="surprise" className="relative overflow-hidden bg-wine px-6 py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence>
          {revealed &&
            confetti.map((piece, i) => (
              <motion.span
                key={i}
                initial={{ y: '-10%', x: `${piece.left}%`, opacity: 1, rotate: 0 }}
                animate={{ y: '110%', rotate: piece.rotate }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.4, delay: piece.delay, ease: 'easeIn' }}
                className="absolute top-0 h-3 w-2 rounded-sm"
                style={{ backgroundColor: piece.color, left: `${piece.left}%` }}
              />
            ))}
        </AnimatePresence>
      </div>

      <div className="relative mx-auto max-w-xl text-center">
        <SectionHeading className="!text-cream">{birthdaySurprise.heading}</SectionHeading>
        <p className="mt-4 text-cream/80">{birthdaySurprise.prompt}</p>

        <div className="relative mt-10 flex flex-col items-center">
          {/* Cake */}
          <div className="relative">
            <svg width="180" height="150" viewBox="0 0 180 150" aria-hidden="true">
              <rect x="20" y="90" width="140" height="50" rx="6" fill="#F4A6B5" />
              <rect x="20" y="90" width="140" height="12" fill="#F8D7DA" />
              <rect x="35" y="55" width="110" height="40" rx="6" fill="#FFF8F5" />
              <rect x="35" y="55" width="110" height="10" fill="#F4A6B5" />

              {Array.from({ length: CANDLE_COUNT }).map((_, i) => {
                const x = 45 + i * 22;
                return (
                  <g key={i}>
                    <rect x={x} y="30" width="5" height="25" fill="#C94C68" />
                    <AnimatePresence>
                      {!revealed && (
                        <motion.g
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                          <motion.circle
                            cx={x + 2.5}
                            cy="26"
                            r="4.5"
                            fill="#F1E3C6"
                            animate={reducedMotion ? undefined : { opacity: [1, 0.6, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                          />
                        </motion.g>
                      )}
                    </AnimatePresence>
                  </g>
                );
              })}
            </svg>
          </div>

          <button
            type="button"
            onClick={() => setRevealed(true)}
            disabled={revealed}
            className="mt-8 rounded-full bg-crimson px-8 py-3 font-display text-lg text-cream shadow-md transition hover:bg-rose hover:text-wine disabled:cursor-default disabled:opacity-60"
          >
            {revealed ? 'Wish made 💗' : birthdaySurprise.buttonLabel}
          </button>

          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col items-center"
              >
                <Panda variant="cake" className="h-32 w-32" title="Panda celebrating with cake" />
                <p className="mt-4 max-w-sm text-balance font-display text-2xl italic text-champagne">
                  {birthdaySurprise.revealMessage}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
