import { cn } from '../../utils/cn';

type RoseProps = {
  className?: string;
};

/** A small decorative rose used throughout the site as a botanical accent. */
export function Rose({ className }: RoseProps) {
  return (
    <svg viewBox="0 0 60 100" className={cn(className)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 40 L30 95" stroke="#9CAE8C" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30 60 Q18 62 14 74" stroke="#9CAE8C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path
        d="M14 74 Q10 68 14 62 Q20 65 20 72 Q20 78 14 74Z"
        fill="#9CAE8C"
      />
      <path d="M30 72 Q42 74 46 86" stroke="#9CAE8C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path
        d="M46 86 Q50 80 46 74 Q40 77 40 84 Q40 90 46 86Z"
        fill="#9CAE8C"
      />
      <g>
        <circle cx="30" cy="24" r="18" fill="#C94C68" />
        <circle cx="30" cy="24" r="12" fill="#D9647F" />
        <circle cx="30" cy="24" r="6.5" fill="#F4A6B5" />
      </g>
    </svg>
  );
}
