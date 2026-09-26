import { Navigation } from '../components/shared/Navigation';
import { MusicToggle } from '../components/shared/MusicToggle';
import { Hero } from '../components/sections/Hero';
import { LoveLetter } from '../components/sections/LoveLetter';
import { Memories } from '../components/sections/Memories';
import { Timeline } from '../components/sections/Timeline';
import { ThingsILove } from '../components/sections/ThingsILove';
import { BirthdaySurprise } from '../components/sections/BirthdaySurprise';
import { FinalSurprise } from '../components/sections/FinalSurprise';

export function BirthdayExperience() {
  return (
    <div>
      <Navigation />
      <MusicToggle />
      <main>
        <Hero />
        <LoveLetter />
        <Memories />
        <Timeline />
        <ThingsILove />
        <BirthdaySurprise />
        <FinalSurprise />
      </main>
    </div>
  );
}
