/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pond: {
          DEFAULT: '#0B1110',
          dark: '#060A09',
          light: '#131A19',
        },
        midnight: {
          DEFAULT: '#151E20',
          dark: '#0E1517',
          light: '#1D282B',
        },
        botanical: {
          DEFAULT: '#536B55',
          light: '#6B856D',
          dark: '#3E5240',
        },
        blush: {
          DEFAULT: '#E7A0B4',
          light: '#F2C2CF',
          dark: '#D17C94',
        },
        ivory: {
          DEFAULT: '#F5EFE6',
          muted: '#D8CFBE',
          dark: '#C4B9A5',
        },
        gold: {
          DEFAULT: '#D9A64E',
          light: '#E6BD75',
          dark: '#B8842E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pond-glow': '0 0 35px -5px rgba(231, 160, 180, 0.15)',
        'water-depth': '0 20px 50px -10px rgba(11, 17, 16, 0.8)',
      },
    },
  },
  plugins: [],
}
