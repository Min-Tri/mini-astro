import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import robotsTxt from 'astro-robots-txt';
const { STORYBLOK_TOKEN } = loadEnv(
  process.env.STORYBLOK_TOKEN,
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  output: process.env.PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: process.env.PUBLIC_ENV === 'preview' ? vercel() : undefined,
  integrations: [
    tailwind(),
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      bridge: process.env.PUBLIC_ENV !== 'production',
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          disallow: process.env.PUBLIC_ENV !== 'production' ? '/' : '',
        },
      ],
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
