import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { finalSurprise } from '../../data/content';
import { SafeImage } from '../shared/SafeImage';

export function FinalSurprise() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      id="surprise"
      className="relative overflow-hidden bg-ink px-6 py-28 text-center text-cream sm:py-36"
    >
      {/* Full-bleed background photo. Kept clearly visible, with a dark
          brown gradient over it so the text on top stays easy to read. */}
      <div className="absolute inset-0" aria-hidden="true">
        <SafeImage
          src={finalSurprise.backgroundPhoto}
          alt=""
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-champagne/20 blur-3xl" />

      <div className="relative z-10">
        <motion.button
          type="button"
          onClick={() => setRevealed(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-champagne/50 text-4xl shadow-[0_0_40px_rgba(241,227,198,0.35)] animate-glow"
          aria-label="Reveal the final message"
        >
          🌙
        </motion.button>

        <h2 className="text-balance relative mt-10 font-display text-3xl italic text-cream sm:text-4xl">
          {finalSurprise.heading}
        </h2>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto mt-8 max-w-lg"
            >
              <p className="text-balance font-display text-2xl italic text-champagne sm:text-3xl">
                {finalSurprise.reveal}
              </p>

              <div className="mt-10 flex flex-col items-center">
                <p className="max-w-xs text-balance text-sm italic text-cream/70">
                  {finalSurprise.photoCaption}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-champagne/80">
                  {finalSurprise.dateTime}
                </p>
              </div>

              <p className="mt-10 font-display text-3xl italic text-cream sm:text-4xl">
                {finalSurprise.closingHeading}
              </p>
              <p className="mt-4 whitespace-pre-line font-script text-2xl text-champagne">
                {finalSurprise.signature}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}