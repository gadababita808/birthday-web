import { motion } from 'framer-motion';
import { loveLetter } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { Rose } from '../shared/Rose';

export function LoveLetter() {
  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-cream px-6 py-24 sm:py-32"
    >
      <Rose className="pointer-events-none absolute -left-8 top-8 h-32 w-20 rotate-[-20deg] opacity-40 sm:h-48 sm:w-28" />

      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading>{loveLetter.heading}</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mt-10 rounded-2xl border border-rose/30 bg-white/70 p-8 text-left shadow-lg backdrop-blur-sm sm:p-12"
        >
          <p className="font-script text-2xl text-crimson">{loveLetter.intro}</p>

          <p className="mt-6 whitespace-pre-line font-display text-xl leading-relaxed text-ink/90 sm:text-2xl">
            {loveLetter.body}
          </p>

          <p className="mt-8 whitespace-pre-line text-right font-script text-2xl text-crimson">
            {loveLetter.signature}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
