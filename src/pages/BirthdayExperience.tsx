import { Navigation } from '../components/shared/Navigation';
import { MusicToggle } from '../components/shared/MusicToggle';
import { Hero } from '../components/sections/Hero';
import { HarryPotterLetter } from '../components/sections/HarryPotterLetter';
import { Memories } from '../components/sections/Memories';
import { Timeline } from '../components/sections/Timeline';
import { ThingsILove } from '../components/sections/ThingsILove';
import { FinalSurprise } from '../components/sections/FinalSurprise';

export function BirthdayExperience() {
  return (
    <div>
      <Navigation />
      <MusicToggle />
      <main>
        <Hero />
        <HarryPotterLetter />
        <Memories />
        <Timeline />
        <ThingsILove />
        <FinalSurprise />
      </main>
    </div>
  );
}