/**
 * ============================================================
 *  ALL PERSONAL CONTENT LIVES HERE.
 *  Edit this file to make the website yours — nothing else
 *  in the codebase needs to change.
 * ============================================================
 */

// ---------------------------------------------------------------
// PHOTOS (imported as real modules — Vite bundles these properly)
// ---------------------------------------------------------------
// Every real photo used anywhere on the site lives in
// src/assets/photos/ and is named image1.jpg, image2.jpg, etc.
// Right now these are soft placeholder images so the site runs
// perfectly as-is. To use your real photos: just replace each file
// in src/assets/photos/ with your own picture, keeping the exact
// same filename (image1.jpg, image2.jpg, ...). Nothing else needs
// to change.
import image1 from '../assets/photos/image1.jpg';
import image2 from '../assets/photos/image2.jpg';
import image3 from '../assets/photos/image3.jpg';
import image4 from '../assets/photos/image4.jpg';
import image5 from '../assets/photos/image5.jpg';
// image6 → background photo behind the final "Surprise" section
// image7 → the sticker shown in the bottom-right of "A Few Things I Love About You"
import image6 from '../assets/photos/image6.jpg';
import image7 from '../assets/photos/image7.jpg';

// ---------------------------------------------------------------
// PASSWORD
// ---------------------------------------------------------------
// This is intentionally a plain, hardcoded password because this
// project only ever runs on your own computer (localhost). Change
// it to whatever you like before you show her the site.
export const PASSWORD = '123';

// ---------------------------------------------------------------
// NAMES
// ---------------------------------------------------------------
// Both set to 'Beta' as a placeholder for now — search this file for
// "Beta" when you're ready and swap in the real names. Everything
// below reads from these two constants, so you only edit it here.
export const HER_NAME = 'Beta';
export const MY_NAME = 'Beta';

// ---------------------------------------------------------------
// MUSIC
// ---------------------------------------------------------------
// Drop an mp3/ogg file into public/music/ and put its filename here.
// If the file doesn't exist, the music toggle quietly disables itself —
// nothing breaks.
export const MUSIC = {
  fileName: 'our-song.mp3', // put the real file at public/music/our-song.mp3
  label: 'Our Song',
};

// ---------------------------------------------------------------
// HERO
// ---------------------------------------------------------------
export const hero = {
  eyebrow: `A little world for ${HER_NAME}`,
  title: 'Happy Birthday, My Love',
  subtitle: 'Today is all about the most beautiful person in my world.',
  cta: 'Start Our Story',
};

// ---------------------------------------------------------------
// HARRY POTTER LETTER
// ---------------------------------------------------------------
// The letter arrives sealed. She has to pick the correct Day / Month /
// Year from three dropdowns to break the seal — get all three right
// and the parchment opens. Change UNLOCK_DATE to whatever date you
// want it to be (it must match exactly).
export const UNLOCK_DATE = {
  day: 25,
  month: 'August',
  year: 2026,
};

export const harryPotterLetter = {
  envelopeLabel: `To ${HER_NAME}`,
  envelopeSubLabel: 'Delivered by Owl Post',
  sealPrompt: 'Break the seal to open your letter',
  lockHeading: 'This letter is sealed with old magic.',
  lockSubheading: 'Only one date will open it. Choose carefully.',
  unlockButton: 'Unlock the Letter',
  errorMessage: 'That date holds no magic here. Try again.',
  heading: 'A Letter From Hogwarts',
  intro: `My dearest ${HER_NAME},`,
  body: `[HARRY POTTER LETTER CONTENT GOES HERE]

Paste your real letter here — it can be as long or as short as you like,
and the parchment will scroll gracefully either way.`,
  signature: `Always yours,\n${MY_NAME}`,
  photo: image5,
  photoCaption: 'A memory tucked inside, like a photograph in a locket.',
};

// ---------------------------------------------------------------
// MEMORIES / PHOTO GALLERY
// ---------------------------------------------------------------
// Photos come from src/assets/photos/ (image1.jpg, image2.jpg, image3.jpg).
// If a file is missing or broken, a soft placeholder appears instead —
// the gallery never looks broken.
export type Memory = {
  image: string;
  title: string;
  date: string;
  caption: string;
};

export const memories: Memory[] = [
  {
    image: image1,
    title: 'Our First Adventure',
    date: '2024',
    caption: 'One of my favorite days with you.',
  },
  {
    image: image2,
    title: 'A Quiet Sunday',
    date: '2024',
    caption: 'Just us, and nowhere to be.',
  },
  {
    image: image3,
    title: 'The Trip We Almost Cancelled',
    date: '2025',
    caption: "Glad we didn't.",
  },
];

// ---------------------------------------------------------------
// OUR STORY / TIMELINE
// ---------------------------------------------------------------
export type TimelineEntry = {
  title: string;
  date: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    title: 'How It All Started',
    date: '[Date]',
    description: 'A short line about how your paths first crossed.',
  },
  {
    title: 'The First Date',
    date: '[Date]',
    description: 'Where you went, and one detail you still remember.',
  },
  {
    title: 'Our Favorite Memory',
    date: '[Date]',
    description: 'The one you both bring up again and again.',
  },
  {
    title: 'Today',
    date: '[Date]',
    description: 'A little note about where you are now.',
  },
  {
    title: 'Everything Still Ahead',
    date: '',
    description: 'A line about the future you\'re looking forward to.',
  },
];

// ---------------------------------------------------------------
// THINGS I LOVE ABOUT YOU
// ---------------------------------------------------------------
// The little sticker image shown in the bottom-right corner of this
// section. Put your image at src/assets/photos/image7.jpg — if you'd
// rather use a different file, just change the import above.
export const thingsILoveSticker = image7;

export const thingsILove: string[] = [
  'Your smile',
  'Your kindness',
  'The way you laugh at your own jokes before you finish them',
  'Your little habits',
  'How you make ordinary days special',
  'How you somehow make everything better',
  'The way you say my name',
  'How you always know what to say',
];

// ---------------------------------------------------------------
// FINAL SURPRISE
// ---------------------------------------------------------------
export const finalSurprise = {
  heading: 'And if I could give you one thing...',
  reveal: "I'd give you a thousand more moments together.",
  // The big photo behind the whole section. Put your image at
  // src/assets/photos/image6.jpg — if you'd rather use a different
  // file, just change the import above.
  backgroundPhoto: image6,
  photo: image4,
  photoCaption: 'Just like them, always wrapped up in each other.',
  // A fixed, hand-written date/time — not auto-generated — so it always
  // reads exactly as you set it, e.g. her birthday and the moment you're
  // sharing this with her.
  dateTime: 'September 9, 2026 · 8:00 PM',
  closingHeading: `Happy Birthday, ${HER_NAME}`,
  signature: `With all my love,\n${MY_NAME}`,
};

// ---------------------------------------------------------------
// PASSWORD SCREEN COPY
// ---------------------------------------------------------------
export const passwordScreen = {
  heading: 'Before you enter...',
  subheading: 'A little surprise has been waiting for you.',
  cardLabel: 'Only one special person gets to enter 💗',
  inputLabel: 'Enter the password',
  placeholder: 'Password',
  button: 'Open My Surprise',
  errorMessage: "Hmm... that's not the secret I'm looking for 💗",
  successMessage: 'It\'s you. Come in.',
};

// ---------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------
export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'letter', label: 'Letter' },
  { id: 'memories', label: 'Memories' },
  { id: 'story', label: 'Our Story' },
  { id: 'for-you', label: 'For You' },
  { id: 'surprise', label: 'Surprise' },
];