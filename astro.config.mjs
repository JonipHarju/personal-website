// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { editorialLight, editorialDark } from './shiki-themes.mjs';

// https://astro.build/config
export default defineConfig({
  // Canonical URLs, the sitemap, and the RSS feed all derive from this.
  site: 'https://joniharju.fi',
  integrations: [sitemap()],
  build: {
    // Inline all CSS to eliminate the render-blocking stylesheet request.
    inlineStylesheets: 'always',
  },
  markdown: {
    // External links in posts open in a new tab; internal links are untouched.
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
    shikiConfig: {
      // Dual custom themes (design-system syntax palette, WCAG AA contrast);
      // the active one is switched via CSS using [data-theme].
      themes: {
        light: editorialLight,
        dark: editorialDark,
      },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
