import { useState } from 'react';
import { motion } from 'framer-motion';
import { memories } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { SafeImage } from '../shared/SafeImage';
import { Lightbox } from './Lightbox';

export function Memories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="memories" className="relative bg-blush/30 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Our Memories</SectionHeading>
        <p className="mx-auto mt-4 max-w-md text-center text-ink/70">
          A few moments, kept safe. Tap any photo to see it larger.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {memories.map((memory, i) => (
            <motion.button
              key={memory.image + i}
              type="button"
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-rose/30 bg-white shadow-sm transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson"
            >
              <SafeImage
                src={memory.image}
                alt={memory.title}
                className="h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-display text-sm italic text-cream">{memory.title}</p>
                <p className="text-xs text-cream/80">{memory.date}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          memories={memories}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(next) => setOpenIndex(next)}
        />
      )}
    </section>
  );
}
