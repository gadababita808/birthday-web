import { motion } from 'framer-motion';
import { thingsILove } from '../../data/content';
import { SectionHeading } from '../shared/SectionHeading';
import { Panda } from '../shared/Panda';

const rotations = [-4, 3, -2, 5, -3, 2, -5, 4];

export function ThingsILove() {
  return (
    <section id="for-you" className="relative overflow-hidden bg-rose/15 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>A Few Things I Love About You</SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {thingsILove.map((thing, i) => (
            <motion.div
              key={thing}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[i % rotations.length] }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="rounded-xl border border-rose/30 bg-cream p-5 text-center shadow-sm"
            >
              <p className="font-script text-xl text-crimson sm:text-2xl">{thing}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Panda variant="heart" className="h-28 w-28 sm:h-32 sm:w-32" title="Panda holding a heart" />
        </div>
      </div>
    </section>
  );
}