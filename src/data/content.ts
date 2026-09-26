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
export const PASSWORD = 'BBIU';

// ---------------------------------------------------------------
// NAMES
// ---------------------------------------------------------------
// Both set to 'Beta' as a placeholder for now — search this file for
// "Beta" when you're ready and swap in the real names. Everything
// below reads from these two constants, so you only edit it here.
export const HER_NAME = 'Dolly';
export const MY_NAME = 'Penguin';

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
  subtitle: 'Today is all about youu, My cutie ',
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
  heading: 'A Letter From your owl',
  intro: `My dearest ${HER_NAME},`,
  body: `I LOVE YOUUUUUUUUUUU SOOOO MUCHHHHHHHH DOLLY 💕,
  I guess Hogwarts meet me another you 
  The day jab hum vaha gye .. i have never seen you like this muchhh crazy and happy ... 🤗 
  Best best day ever baby boss
  Just want to say 
  No matter how much I say, it’s not enough—bahot pyareee ho yrr seriously 😭. I love you 💞... I’m truly out of words now; I’ve said it all.
`,
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
    title: 'Our First Official Date 🫶🏻',
    date: '21st May 2026',
    caption: 'One of my favorite days with you.',
  },
  {
    image: image2,
    title: 'My Candy ❤️',
    date: '25th August 2026',
    caption: 'What a day yrrr 🥹 honestly i hava never seen you like this thisss much happpyyyyy ... Love youuu so mucchhhh beta ❤️ ',
  },
  {
    image: image3,
    title: ' we have so much fun here ....',
    date: '9th sept 2026',
    caption: "Best date !! simply the best ... Firse jayenge my baby boss ❤️",
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
    date: '14th March 2026',
    description: 'how it started? 😝 all this started from a late night conversation that leads me to meet my beta... dont ever think that this goes to meet my baby boss.. love you cutie❤️ 🤪',
  },
  {
    title: 'The First Date 😝',
    date: '21st May',
    description: 'first date 😝 place achi lagi to date 🙈🫶🏻🫶🏻🫶🏻 [with a silence and a little bit fear]',
  },
  {
    title: 'Our Favorite Memory',
    date: '29th April -- 1st May ',
    description: 'favorite memories to bahot hai 🫣🥺 but the 2 days we spent with each other 29 - 30th april will be the favorite one 😌',
  },
  {
    title: 'Today',
    date: '27th September 2026',
    description: 'Today is my favorites birthday Happpyyyy Birthday Dolly , my panda , candy crush, chulbuli , baby boss , sweetie pie , cupcake & lots more ... Enjoy your day beta 🫶🏻 always with you 🫶🏻 🤗',
  },
  {
    title: 'Everything Still Ahead',
    date: '♾️',
    description: 'only want to say jaha kanha ji le gaye ... whatever written in destiny but always mine 😌🫶🏻',
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
  'Your smile that makes everything feel lighter',
  'Simply… the way you’re you ❤️',
  'How lucky I feel to have you in my life 🥰',
  'The way you care more than you let people see',
  'How you always manage to make me feel better',
  'Your laugh — honestly, it’s contagious',
  'Your hugs fix everything💕',
  'You’re someone I never want to lose',
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
  photoCaption: 'Humari trippp pending hai 😭😭 Like this night ... Sky...stars & You beside me ....  all I want thisss ..Koi nah yr Kab leke Jaa rahe ho fir 🤗 waiting......',
  // A fixed, hand-written date/time — not auto-generated — so it always
  // reads exactly as you set it, e.g. her birthday and the moment you're
  // sharing this with her.
  dateTime: ' · ',
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