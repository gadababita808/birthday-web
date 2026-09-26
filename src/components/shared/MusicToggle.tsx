import { useEffect, useRef, useState } from 'react';
import { MUSIC } from '../../data/content';

/**
 * A small floating music control. It never autoplays (browsers block that
 * anyway), and if `MUSIC.fileName` doesn't exist in public/music/, the
 * control quietly disables itself instead of throwing or looking broken.
 */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio(`/music/${MUSIC.fileName}`);
    audio.loop = true;
    audio.volume = 0.5;

    const handleError = () => setAvailable(false);
    audio.addEventListener('error', handleError);
    audioRef.current = audio;

    return () => {
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  if (!available) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(
        () => setIsPlaying(true),
        () => setAvailable(false)
      );
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isPlaying}
      aria-label={`${isPlaying ? 'Pause' : 'Play'} ${MUSIC.label}`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-rose/40 bg-cream/90 px-4 py-2 text-sm text-wine shadow-md backdrop-blur transition hover:bg-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-crimson"
    >
      <span aria-hidden="true">{isPlaying ? '🎵' : '🎶'}</span>
      <span className="font-body">{MUSIC.label}</span>
      <span className="text-xs uppercase tracking-wide text-crimson">{isPlaying ? 'On' : 'Off'}</span>
    </button>
  );
}
