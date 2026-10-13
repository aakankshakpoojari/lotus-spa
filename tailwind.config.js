/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F0E5',
        cream: '#EAE2D3',
        sage: {
          DEFAULT: '#87927A',
          light: '#A3AD98',
          dark: '#6B765F',
        },
        forest: {
          DEFAULT: '#34483A',
          light: '#425A4A',
          dark: '#243429',
          deep: '#1B261E',
        },
        terracotta: {
          DEFAULT: '#633D32',
          light: '#7B4D40',
          dark: '#4D2F27',
        },
        gold: {
          DEFAULT: '#C4A36A',
          light: '#D4B886',
          dark: '#A6864E',
        },
        charcoal: {
          DEFAULT: '#292923',
          light: '#3D3D36',
          muted: '#5A5A50',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        accent: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(41, 41, 35, 0.08)',
        'elevated': '0 20px 40px -15px rgba(41, 41, 35, 0.12)',
        'glow-gold': '0 0 35px -5px rgba(196, 163, 106, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
