/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#F8D7DA',
        rose: '#F4A6B5',
        crimson: '#C94C68',
        wine: '#8E2F4F',
        cream: '#FFF8F5',
        ink: '#2B1B1E',
        'rose-gold': '#D9A5A0',
        champagne: '#F1E3C6',
        sage: '#9CAE8C',
        // Harry Potter letter theme (Hogwarts gold & maroon)
        'hogwarts-maroon': '#5E0000',
        'hogwarts-maroon-dark': '#3D0000',
        'hogwarts-gold': '#D3A625',
        'hogwarts-gold-light': '#EAD196',
        parchment: '#F1E3C0',
        'parchment-dark': '#E3D0A0',
        'wax-red': '#7A0C0C',
        'letter-ink': '#3B2A1A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Petit Formal Script"', 'cursive'],
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateY(110vh) translateX(40px) rotate(220deg)', opacity: '0' },
        },
        glow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-6px)' },
          '80%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        drift: 'drift linear infinite',
        glow: 'glow 4s ease-in-out infinite',
        'gentle-float': 'gentle-float 5s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};