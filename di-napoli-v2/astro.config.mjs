import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dinapoli.com.br',
  integrations: [tailwind()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
  prefetch: true,
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});