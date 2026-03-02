/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#b3e8e8',
          200: '#80d9d9',
          300: '#4dcaca',
          400: '#26bfbf',
          500: '#0dabab',
          600: '#0a9a9a',
          700: '#077d7d',
          800: '#056060',
          900: '#034343',
        },
        vezeeta: {
          blue: '#0070cd',
          teal: '#0dabab',
          dark: '#1a1a2e',
          gray: '#6b7280',
          light: '#f8f9fa',
        },
      },
    },
  },
  plugins: [],
};
