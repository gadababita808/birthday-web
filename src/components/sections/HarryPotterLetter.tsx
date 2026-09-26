import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { harryPotterLetter, UNLOCK_DATE } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { WaxSeal } from '../shared/WaxSeal';
import { SafeImage } from '../shared/SafeImage';
import { useReducedMotionPref } from '../../hooks/useReducedMotionPref';

const SESSION_KEY = 'letter-unlocked';

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
// Adjust this range any time — it just has to include UNLOCK_DATE.year.
const YEARS = Array.from({ length: 11 }, (_, i) => 2020 + i);

export function HarryPotterLetter() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true');
  const [showLock, setShowLock] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [status, setStatus] = useState<'idle' | 'error'>('idle');
  const reducedMotion = useReducedMotionPref();

  const handleUnlock = (event: FormEvent) => {
    event.preventDefault();
    if (status !== 'idle') return;

    const isMatch =
      Number(day) === UNLOCK_DATE.day &&
      month === UNLOCK_DATE.month &&
      Number(year) === UNLOCK_DATE.year;

    if (isMatch) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setUnlocked(true);
      setShowLock(false);
    } else {
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 1500);
    }
  };

  return (
    <section id="letter" className="relative overflow-hidden bg-hogwarts-maroon px-6 py-24 sm:py-32">
      {/* soft gold vignette glow behind everything */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at top, rgba(211,166,37,0.18), transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <SectionHeading className="!text-hogwarts-gold">{harryPotterLetter.heading}</SectionHeading>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.button
              key="envelope"
              type="button"
              onClick={() => setShowLock(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={reducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.6 }}
              className="group relative mx-auto mt-12 block w-full max-w-sm"
              aria-label="Open the sealed letter"
            >
              {/* Envelope body */}
              <div className="relative overflow-hidden rounded-lg border border-hogwarts-gold/40 bg-parchment shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                {/* Flap, drawn with a clip-path triangle */}
                <div
                  className="h-24 w-full bg-hogwarts-maroon-dark"
                  style={{ clipPath: 'polygon(0 0, 50% 65%, 100% 0)' }}
                  aria-hidden="true"
                />

                <div className="px-6 py-10 text-left">
                  <p className="font-script text-2xl text-letter-ink">{harryPotterLetter.envelopeLabel}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-letter-ink/60">
                    {harryPotterLetter.envelopeSubLabel}
                  </p>
                </div>

                {/* Wax seal sits right on the flap seam */}
                <div className="absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-105">
                  <WaxSeal className="h-16 w-16 drop-shadow-lg" />
                </div>
              </div>

              <p className="mt-6 text-sm text-hogwarts-gold/80">{harryPotterLetter.sealPrompt}</p>
            </motion.button>
          ) : (
            <motion.div
              key="parchment"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto mt-12 rounded-sm border border-hogwarts-gold/30 bg-parchment p-8 text-left shadow-2xl sm:p-12"
            >
              <p className="font-script text-2xl text-letter-ink">{harryPotterLetter.intro}</p>

              <p className="mt-6 whitespace-pre-line font-display text-xl leading-relaxed text-letter-ink/90 sm:text-2xl">
                {harryPotterLetter.body}
              </p>

              <div className="mt-10 flex flex-col items-center">
                <div className="h-36 w-36 overflow-hidden rounded-sm border-2 border-hogwarts-gold/50 shadow-md sm:h-44 sm:w-44">
                  <SafeImage src={harryPotterLetter.photo} alt="A keepsake photo" className="h-full w-full" />
                </div>
                <p className="mt-3 max-w-xs text-center text-sm italic text-letter-ink/70">
                  {harryPotterLetter.photoCaption}
                </p>
              </div>

              <p className="mt-10 whitespace-pre-line text-right font-script text-2xl text-letter-ink">
                {harryPotterLetter.signature}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Date-lock dialog */}
      <AnimatePresence>
        {showLock && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Enter the date to unlock the letter"
            onClick={() => setShowLock(false)}
          >
            <motion.form
              onSubmit={handleUnlock}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: status === 'error' && !reducedMotion ? [0, -8, 8, -6, 6, 0] : 0,
              }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm rounded-2xl border border-hogwarts-gold/40 bg-parchment p-8 text-center shadow-2xl"
              noValidate
            >
              <WaxSeal className="mx-auto h-12 w-12" />

              <p className="mt-4 font-display text-xl italic text-letter-ink">{harryPotterLetter.lockHeading}</p>
              <p className="mt-2 text-sm text-letter-ink/70">{harryPotterLetter.lockSubheading}</p>

              <div className="mt-6 grid grid-cols-3 gap-2">
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  aria-label="Day"
                  required
                  className="rounded-lg border border-hogwarts-gold/40 bg-white/70 px-2 py-2 text-sm text-letter-ink outline-none focus:border-hogwarts-maroon"
                >
                  <option value="" disabled>Day</option>
                  {DAYS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>

                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  aria-label="Month"
                  required
                  className="rounded-lg border border-hogwarts-gold/40 bg-white/70 px-2 py-2 text-sm text-letter-ink outline-none focus:border-hogwarts-maroon"
                >
                  <option value="" disabled>Month</option>
                  {MONTHS.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>

                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  aria-label="Year"
                  required
                  className="rounded-lg border border-hogwarts-gold/40 bg-white/70 px-2 py-2 text-sm text-letter-ink outline-none focus:border-hogwarts-maroon"
                >
                  <option value="" disabled>Year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <AnimatePresence>
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="alert"
                    className="mt-4 text-sm text-wax-red"
                  >
                    {harryPotterLetter.errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-hogwarts-maroon px-6 py-3 font-display text-lg text-hogwarts-gold shadow-md transition hover:bg-hogwarts-maroon-dark"
              >
                {harryPotterLetter.unlockButton}
              </button>

              <button
                type="button"
                onClick={() => setShowLock(false)}
                className="mt-3 text-xs text-letter-ink/50 hover:text-letter-ink"
              >
                Cancel
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}