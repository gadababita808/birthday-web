# Happy Birthday Website 🐼🌹

A private, romantic, panda-and-rose themed birthday website, built to run **only on your own computer**. There is nothing here to deploy, host, or configure online — it's a local surprise.

## 1. Requirements

- [Node.js](https://nodejs.org/) version 18 or newer
- npm (comes with Node.js)

## 2. Install dependencies

Open this folder in a terminal (or in VS Code's built-in terminal) and run:

```bash
npm install
```

## 3. Run the website

```bash
npm run dev
```

Vite will print a local address, and it should also open automatically in your browser. If it doesn't, open:

```
http://localhost:5173
```

## 4. Enter the password

The default password is:

```
mysecretpassword
```

Change it before sharing the surprise — see below.

---

## Where to edit everything

Almost everything you'll want to personalize lives in **one file**:

```
src/data/content.ts
```

| What to change | Where in `src/data/content.ts` |
|---|---|
| The password | `PASSWORD` |
| Her name | `HER_NAME` |
| Your name | `MY_NAME` |
| Hero title/subtitle | `hero` |
| The love letter | `loveLetter` |
| Memories / photo captions | `memories` |
| Timeline / "Our Story" entries | `timeline` |
| "Things I Love About You" list | `thingsILove` |
| Birthday wish message | `birthdaySurprise` |
| Final closing message | `finalSurprise` |
| Password screen wording | `passwordScreen` |
| Music file name/label | `MUSIC` |

Save the file — the site updates instantly while `npm run dev` is running.

### Adding your photos

1. Put your image files in `public/images/memories/` (e.g. `memory-01.jpg`, `memory-02.jpg`, …).
2. Open `src/data/content.ts` and update the `memories` array so each entry's `image` path matches your file, e.g.:

   ```ts
   {
     image: '/images/memories/memory-01.jpg',
     title: 'Our First Adventure',
     date: '2024',
     caption: 'One of my favorite days with you.',
   }
   ```

   You can add as many memories as you like — the gallery grid grows automatically. If a photo is missing or the path is wrong, that tile shows a soft placeholder instead of a broken image, so nothing ever looks broken.

### Adding music

1. Put an audio file (mp3 or ogg works well) in `public/music/`.
2. Open `src/data/content.ts` and set `MUSIC.fileName` to match the file name, e.g. `'our-song.mp3'`.

Music never autoplays — the little music button in the bottom-right corner only starts playing after she taps it. If no music file is present, the button quietly disappears instead of causing an error.

### Changing the password

Open `src/data/content.ts` and edit:

```ts
export const PASSWORD = 'mysecretpassword';
```

This is intentionally a plain, hardcoded value — this project is designed to run only on your own computer, so there's no need for real authentication infrastructure.

---

## Project structure

```
src/
  components/
    PasswordGate/   → the full-screen password entry experience
    shared/          → reusable pieces (panda mascot, rose, navigation, music toggle, etc.)
    sections/        → each part of the birthday page (gallery, timeline, cake, etc.)
  pages/
    BirthdayExperience.tsx  → assembles all sections into the main page
  data/
    content.ts       → ALL personal content and the password — edit this file
  hooks/              → small reusable React hooks
  utils/              → tiny helper functions
public/
  images/memories/    → put her photos here
  images/decorations/ → optional extra decorative images
  music/               → put your song file here
```

## Notes

- This project has no server, no database, and no external accounts. The "password gate" is a friendly front-end lock, not real security — anyone with access to your computer and the source code could read the password. That's expected and fine for a private local surprise.
- The site respects the "reduce motion" accessibility setting on your operating system, and automatically scales back animation for anyone who has that turned on.
- If you don't have internet access when running the site, the decorative Google Fonts simply fall back to clean system fonts — nothing breaks.

Happy building — and happy birthday to her. 🎂
