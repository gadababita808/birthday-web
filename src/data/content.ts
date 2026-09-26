/**
 * ============================================================
 *  ALL PERSONAL CONTENT LIVES HERE.
 *  Edit this file to make the website yours — nothing else
 *  in the codebase needs to change.
 * ============================================================
 */

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
export const HER_NAME = '[Her Name]';
export const MY_NAME = '[Your Name]';

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
// LOVE LETTER
// ---------------------------------------------------------------
export const loveLetter = {
  heading: 'A Little Letter For You',
  intro: `My dearest ${HER_NAME},`,
  body: `[LOVE LETTER GOES HERE]

Write whatever you want her to read the moment she opens this. It can be
as long or as short as you like — this whole panel will scroll gracefully
either way.`,
  signature: `Always yours,\n${MY_NAME}`,
};

// ---------------------------------------------------------------
// MEMORIES / PHOTO GALLERY
// ---------------------------------------------------------------
// Put your photos in public/images/memories/ and reference them here.
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
    image: '/images/memories/memory-01.jpg',
    title: 'Our First Adventure',
    date: '2024',
    caption: 'One of my favorite days with you.',
  },
  {
    image: '/images/memories/memory-02.jpg',
    title: 'A Quiet Sunday',
    date: '2024',
    caption: 'Just us, and nowhere to be.',
  },
  {
    image: '/images/memories/memory-03.jpg',
    title: 'The Trip We Almost Cancelled',
    date: '2025',
    caption: "Glad we didn't.",
  },
  {
    image: '/images/memories/memory-04.jpg',
    title: 'That Silly Photo',
    date: '2025',
    caption: 'You hate this one. I love it.',
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
    title: 'The First Conversation',
    date: '[Date]',
    description: 'What you talked about, or how it felt.',
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
// BIRTHDAY SURPRISE (cake / candles / wish)
// ---------------------------------------------------------------
export const birthdaySurprise = {
  heading: 'Make A Wish',
  prompt: 'Blow out the candles and make a wish 🎂',
  buttonLabel: 'Make a Wish',
  revealMessage: 'One more year of you being wonderfully you.',
};

// ---------------------------------------------------------------
// FINAL SURPRISE
// ---------------------------------------------------------------
export const finalSurprise = {
  heading: 'And if I could give you one thing...',
  reveal: "I'd give you a thousand more moments together.",
  photo: '/images/decorations/panda-penguin.jpg',
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