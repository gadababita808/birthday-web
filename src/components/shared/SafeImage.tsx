import { useState } from 'react';
import { cn } from '../../utils/cn';

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  /** 'cover' (default) crops to fill the box — good for grid thumbnails.
   *  'contain' shrinks the photo to fit inside the box with no cropping —
   *  use this anywhere the whole photo must stay visible, like a lightbox. */
  fit?: 'cover' | 'contain';
};

/**
 * An <img> that never looks broken. If the source 404s (e.g. you haven't
 * added your real photos to public/images/memories/ yet), it swaps to a
 * soft, on-brand placeholder instead of showing a broken-image icon.
 */
export function SafeImage({ src, alt, className, loading = 'lazy', fit = 'cover' }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          'flex h-full w-full flex-col items-center justify-center gap-2 bg-blush text-wine',
          className
        )}
        role="img"
        aria-label={alt}
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M21 16l-5-5-4 4-3-3-6 6" />
        </svg>
        <span className="px-4 text-center text-xs text-wine/70">Add a photo here</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={cn(fit === 'contain' ? 'object-contain' : 'object-cover', className)}
    />
  );
}