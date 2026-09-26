import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Memory } from '../../data/content';
import { SafeImage } from '../shared/SafeImage';

type LightboxProps = {
  memories: Memory[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ memories, index, onClose, onNavigate }: LightboxProps) {
  const memory = memories[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % memories.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + memories.length) % memories.length);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, memories.length, onClose, onNavigate]);

  if (!memory) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
        role="dialog"
        aria-modal="true"
        aria-label={`Photo: ${memory.title}`}
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-cream/20 text-2xl text-cream hover:bg-cream/30"
        >
          ✕
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + memories.length) % memories.length);
          }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/20 text-2xl text-cream hover:bg-cream/30 sm:left-6"
        >
          ‹
        </button>

        <motion.div
          key={memory.image}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-cream shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-[50vh] w-full items-center justify-center rounded-t-2xl bg-ink sm:h-[60vh]">
            <SafeImage
              src={memory.image}
              alt={memory.title}
              fit="contain"
              className="h-full w-full"
              loading="eager"
            />
          </div>
          <div className="p-5 text-center">
            <p className="font-display text-2xl italic text-wine">{memory.title}</p>
            <p className="mt-1 text-sm text-ink/60">{memory.date}</p>
            <p className="mt-2 text-ink/80">{memory.caption}</p>
          </div>
        </motion.div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % memories.length);
          }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/20 text-2xl text-cream hover:bg-cream/30 sm:right-6"
        >
          ›
        </button>
      </motion.div>
    </AnimatePresence>
  );
}