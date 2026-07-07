/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // These are the same tokens from the original CSS file,
      // just moved into Tailwind's config so we can use them as
      // classes like `bg-teal`, `text-gold`, `font-display`, etc.
      colors: {
        ink: '#17241D',
        paper: '#F6F1E4',
        'paper-2': '#EFE8D6',
        teal: {
          DEFAULT: '#0F3D3E',
          2: '#153F3B',
        },
        gold: {
          DEFAULT: '#C68A2E',
          2: '#B57A22',
        },
        leaf: '#4B7A5A',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-worksans)', 'sans-serif'],
        mono: ['var(--font-plexmono)', 'monospace'],
      },
      keyframes: {
        dash: {
          from: { strokeDashoffset: '600' },
          to: { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
