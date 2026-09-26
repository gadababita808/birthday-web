import { motion } from 'framer-motion';
import { hero } from '../../data/content';
import { Panda } from '../shared/Panda';
import { Rose } from '../shared/Rose';
import { AmbientBackground } from '../shared/AmbientBackground';

export function Hero() {
  const scrollToNext = () => {
    document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-blush/60 to-cream px-6 pt-28 pb-16 text-center"
    >
      <AmbientBackground density="medium" />

      <Rose className="pointer-events-none absolute -left-6 top-16 h-44 w-28 rotate-[-15deg] opacity-60 sm:h-64 sm:w-40" />
      <Rose className="pointer-events-none absolute -right-6 bottom-16 h-44 w-28 rotate-[195deg] opacity-60 sm:h-64 sm:w-40" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 font-script text-xl text-crimson sm:text-2xl"
      >
        {hero.eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-balance relative z-10 mt-3 font-display text-5xl italic text-wine sm:text-7xl md:text-8xl"
      >
        {hero.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="text-balance relative z-10 mx-auto mt-6 max-w-md text-lg text-ink/75 sm:text-xl"
      >
        {hero.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 mt-8"
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <Panda variant="gift" className="h-40 w-40 sm:h-52 sm:w-52" title="Panda holding a birthday gift" />
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={scrollToNext}
        className="relative z-10 mt-10 rounded-full border border-crimson/50 bg-cream/80 px-7 py-3 font-display text-lg text-crimson shadow-sm backdrop-blur transition hover:bg-crimson hover:text-cream"
      >
        {hero.cta} ↓
      </motion.button>
    </section>
  );
}