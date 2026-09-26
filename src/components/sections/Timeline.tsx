import { motion } from 'framer-motion';
import { timeline } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';

export function Timeline() {
  return (
    <section id="story" className="relative bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>How It All Started</SectionHeading>

        <ol className="relative mt-16 border-l-2 border-rose/40 pl-8 sm:pl-10">
          {timeline.map((entry, i) => (
            <motion.li
              key={entry.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-crimson bg-cream sm:-left-[49px]">
                <span className="h-2 w-2 rounded-full bg-crimson" />
              </span>

              {entry.date && <p className="text-sm text-crimson/80">{entry.date}</p>}
              <h3 className="mt-1 font-display text-2xl italic text-wine">{entry.title}</h3>
              <p className="mt-2 text-ink/75">{entry.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
