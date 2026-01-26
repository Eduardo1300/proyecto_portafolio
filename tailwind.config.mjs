/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#06b6d4',
        accent: '#06b6d4',
        'dark-card': '#111827',
        'dark-bg': '#030712',
      },
    },
  },
  plugins: [],
};
