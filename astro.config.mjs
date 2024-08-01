import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    storyblok({
      accessToken: import.meta.env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
  ],
});
