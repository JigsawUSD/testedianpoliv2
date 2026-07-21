import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://github.io',
  base: '/testedianpoliv2',
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
