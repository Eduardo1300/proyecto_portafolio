// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://tusitio.com',
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  // Mejora de rendimiento y SEO
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
