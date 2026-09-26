import { cn } from '../../utils/cn';

export type PandaVariant = 'rose' | 'gift' | 'wave' | 'heart' | 'cake' | 'sleepy';

type PandaProps = {
  variant?: PandaVariant;
  className?: string;
  title?: string;
};

/**
 * A single, reusable panda illustration that doubles as the site's mascot.
 * Different `variant`s swap the small accessory it's holding so the same
 * gentle character can recur across the password screen, hero, and the
 * various sections without the design feeling copy-pasted.
 */
export function Panda({ variant = 'rose', className, title = 'A little panda' }: PandaProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={cn('drop-shadow-sm', className)}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="120" cy="168" rx="58" ry="46" fill="#FFF8F5" stroke="#2B1B1E" strokeWidth="3" />

      {/* Ears */}
      <circle cx="78" cy="70" r="22" fill="#2B1B1E" />
      <circle cx="162" cy="70" r="22" fill="#2B1B1E" />

      {/* Head */}
      <circle cx="120" cy="108" r="56" fill="#FFF8F5" stroke="#2B1B1E" strokeWidth="3" />

      {/* Eye patches */}
      <ellipse cx="97" cy="104" rx="17" ry="21" fill="#2B1B1E" transform="rotate(-8 97 104)" />
      <ellipse cx="143" cy="104" rx="17" ry="21" fill="#2B1B1E" transform="rotate(8 143 104)" />

      {/* Eyes */}
      <circle cx="100" cy="107" r="4.5" fill="#FFF8F5" />
      <circle cx="140" cy="107" r="4.5" fill="#FFF8F5" />

      {/* Nose + mouth */}
      <ellipse cx="120" cy="122" rx="7" ry="5" fill="#2B1B1E" />
      <path
        d="M120 127 Q120 136 110 138"
        stroke="#2B1B1E"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M120 127 Q120 136 130 138"
        stroke="#2B1B1E"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Cheeks */}
      <circle cx="82" cy="120" r="7" fill="#F4A6B5" opacity="0.55" />
      <circle cx="158" cy="120" r="7" fill="#F4A6B5" opacity="0.55" />

      {/* Arms */}
      <ellipse cx="70" cy="172" rx="16" ry="22" fill="#2B1B1E" transform="rotate(18 70 172)" />
      <ellipse cx="170" cy="172" rx="16" ry="22" fill="#2B1B1E" transform="rotate(-18 170 172)" />

      {/* Legs */}
      <ellipse cx="98" cy="208" rx="17" ry="13" fill="#2B1B1E" />
      <ellipse cx="142" cy="208" rx="17" ry="13" fill="#2B1B1E" />

      {/* --- Accessory variants --- */}
      {variant === 'rose' && (
        <g transform="translate(150 152) rotate(18)">
          <path d="M0 30 Q4 8 0 -6" stroke="#9CAE8C" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="0" cy="-10" r="9" fill="#C94C68" />
          <circle cx="0" cy="-10" r="5" fill="#F4A6B5" />
        </g>
      )}

      {variant === 'gift' && (
        <g transform="translate(150 168)">
          <rect x="-14" y="-16" width="28" height="26" rx="3" fill="#F4A6B5" stroke="#8E2F4F" strokeWidth="2" />
          <rect x="-14" y="-6" width="28" height="6" fill="#8E2F4F" />
          <rect x="-3" y="-16" width="6" height="26" fill="#8E2F4F" />
          <circle cx="0" cy="-18" r="5" fill="#8E2F4F" />
        </g>
      )}

      {variant === 'heart' && (
        <g transform="translate(120 168)">
          <path
            d="M0 14 C-16 0 -16 -14 -4 -14 C0 -14 0 -8 0 -8 C0 -8 0 -14 4 -14 C16 -14 16 0 0 14 Z"
            fill="#C94C68"
          />
        </g>
      )}

      {variant === 'cake' && (
        <g transform="translate(120 176)">
          <rect x="-22" y="-6" width="44" height="16" rx="2" fill="#F4A6B5" stroke="#8E2F4F" strokeWidth="2" />
          <rect x="-22" y="-14" width="44" height="8" fill="#FFF8F5" stroke="#8E2F4F" strokeWidth="2" />
          <line x1="0" y1="-14" x2="0" y2="-24" stroke="#8E2F4F" strokeWidth="2" strokeLinecap="round" />
          <circle cx="0" cy="-27" r="3" fill="#C94C68" className="animate-glow" />
        </g>
      )}

      {variant === 'wave' && (
        <g transform="translate(172 150) rotate(-35)">
          <ellipse cx="0" cy="0" rx="16" ry="22" fill="#2B1B1E" />
        </g>
      )}

      {variant === 'sleepy' && (
        <>
          <path d="M88 104 Q97 98 106 104" stroke="#FFF8F5" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M134 104 Q143 98 152 104" stroke="#FFF8F5" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
