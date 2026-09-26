type WaxSealProps = {
    className?: string;
    title?: string;
  };
  
  /**
   * A simple decorative wax-seal emblem (deep red wax, gold star) used on the
   * Harry Potter letter's envelope and unlock dialog. Pure inline SVG, no
   * image file needed — same pattern as Rose.tsx and Panda.tsx.
   */
  export function WaxSeal({ className, title = 'Wax seal' }: WaxSealProps) {
    return (
      <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
        <circle cx="50" cy="50" r="46" fill="#7A0C0C" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="#D3A625" strokeWidth="2" opacity="0.6" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#D3A625" strokeWidth="1" opacity="0.35" />
        <path
          d="M50 20 L58.5 41.5 L81.5 42 L63 56 L69.5 78 L50 65 L30.5 78 L37 56 L18.5 42 L41.5 41.5 Z"
          fill="#D3A625"
          opacity="0.92"
        />
      </svg>
    );
  }