import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PASSWORD, passwordScreen } from '../../data/content';
import { Panda } from '../shared/Panda';
import { Rose } from '../shared/Rose';
import { AmbientBackground } from '../shared/AmbientBackground';
import { useReducedMotionPref } from '../../hooks/useReducedMotionPref';

const SESSION_KEY = 'birthday-unlocked';

type PasswordGateProps = {
  children: React.ReactNode;
};

export function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true');
  const [transitioning, setTransitioning] = useState(false);
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'checking' | 'error'>('idle');
  const reducedMotion = useReducedMotionPref();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (status === 'checking') return;

    setStatus('checking');

    // A brief, deliberate pause makes the "checking" state feel real rather
    // than instantaneous — purely a UX touch, not real authentication.
    window.setTimeout(() => {
      if (value === PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        setTransitioning(true);
        window.setTimeout(() => setUnlocked(true), reducedMotion ? 200 : 1100);
      } else {
        setStatus('error');
        window.setTimeout(() => setStatus('idle'), 1600);
      }
    }, 350);
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-blush via-cream to-rose/40 px-4 py-12">
      <AmbientBackground density="medium" />

      {/* Decorative roses in the corners */}
      <Rose className="pointer-events-none absolute -left-4 bottom-0 h-40 w-24 opacity-70 sm:h-56 sm:w-32" />
      <Rose className="pointer-events-none absolute -right-4 top-0 h-40 w-24 rotate-[160deg] opacity-70 sm:h-56 sm:w-32" />

      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-wine"
          >
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.3, 1.4, 18], opacity: [0, 1, 1] }}
              transition={{ duration: reducedMotion ? 0.2 : 1.1, times: [0, 0.35, 1], ease: 'easeInOut' }}
              className="text-6xl"
              aria-hidden="true"
            >
              💗
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: transitioning ? 0 : 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="mb-6 flex justify-center">
          <motion.div
            animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Panda variant="rose" className="h-32 w-32 sm:h-40 sm:w-40" title="A panda holding a rose" />
          </motion.div>
        </div>

        <div className="rounded-[28px] border border-rose/40 bg-cream/90 p-8 text-center shadow-xl backdrop-blur-sm sm:p-10">
          <p className="font-script text-2xl text-crimson">{passwordScreen.heading}</p>
          <p className="mt-2 text-sm text-ink/70">{passwordScreen.subheading}</p>

          <form onSubmit={handleSubmit} className="mt-7 text-left" noValidate>
            <label htmlFor="site-password" className="mb-2 block text-xs font-medium text-wine">
              {passwordScreen.cardLabel}
            </label>

            <div className="relative">
              <input
                id="site-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="off"
                inputMode="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={passwordScreen.placeholder}
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'password-error' : undefined}
                className="w-full rounded-full border border-rose/50 bg-white/70 px-5 py-3 pr-12 text-ink outline-none transition focus:border-crimson focus:ring-2 focus:ring-crimson/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-wine/70 hover:text-crimson"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <AnimatePresence>
              {status === 'error' && (
                <motion.p
                  id="password-error"
                  role="alert"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: reducedMotion ? 0 : [0, -8, 8, -6, 6, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-3 text-center text-sm text-crimson"
                >
                  {passwordScreen.errorMessage}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === 'checking'}
              className="mt-6 w-full rounded-full bg-crimson px-6 py-3 font-display text-lg tracking-wide text-cream shadow-md transition hover:bg-wine disabled:opacity-70"
            >
              {status === 'checking' ? 'Unlocking…' : passwordScreen.button}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
