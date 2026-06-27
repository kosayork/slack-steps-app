/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        jp: ['Noto Sans JP', 'Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F3F3F3',
        card: '#FFFFFF',
        accent: '#0D99FF',
        'accent-light': '#9DD6FF',
        'text-primary': 'rgba(0, 0, 0, 0.84)',
        'text-secondary': 'rgba(0, 0, 0, 0.57)',
      },
    },
  },
  plugins: [],
};
