const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        primary: '#222',
        secondary: '#7B7B7B',
        tertiary: '#F8F8F8',
        accent: {
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          pink: '#ec4899',
          indigo: '#6366f1',
        },
        dark: {
          bg: '#0a0a0c',
          card: '#121217',
          border: '#27272a',
          text: '#f4f4f5',
          muted: '#a1a1aa'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}


