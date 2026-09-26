import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../utils/cn';

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navItems.map((item) => item.id));

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop floating navigation */}
      <nav
        aria-label="Section navigation"
        className="fixed left-1/2 top-5 z-40 hidden -translate-x-1/2 rounded-full border border-rose/30 bg-cream/85 px-2 py-2 shadow-md backdrop-blur md:flex"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => goTo(item.id)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm transition-colors',
              active === item.id
                ? 'bg-crimson text-cream'
                : 'text-wine hover:bg-blush'
            )}
            aria-current={active === item.id ? 'true' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile trigger */}
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className="fixed right-5 top-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-rose/40 bg-cream/90 shadow-md backdrop-blur md:hidden"
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="relative h-4 w-5">
          <span
            className={cn(
              'absolute left-0 top-0 h-0.5 w-5 bg-wine transition-transform',
              menuOpen && 'translate-y-[7px] rotate-45'
            )}
          />
          <span
            className={cn(
              'absolute left-0 top-[7px] h-0.5 w-5 bg-wine transition-opacity',
              menuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'absolute left-0 top-[14px] h-0.5 w-5 bg-wine transition-transform',
              menuOpen && '-translate-y-[7px] -rotate-45'
            )}
          />
        </div>
      </button>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed right-5 top-20 z-40 flex w-48 flex-col overflow-hidden rounded-2xl border border-rose/30 bg-cream/95 shadow-lg backdrop-blur md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={cn(
                  'px-4 py-3 text-left text-sm transition-colors',
                  active === item.id ? 'bg-blush text-crimson' : 'text-wine hover:bg-blush/60'
                )}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
