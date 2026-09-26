import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

type SectionHeadingProps = {
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ children, align = 'center', className }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'text-balance font-display text-4xl italic text-wine sm:text-5xl',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {children}
    </motion.h2>
  );
}
