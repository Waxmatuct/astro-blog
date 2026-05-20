// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    routing: {
      prefixDefaultLocale: true,
    }
  },
  redirects: {
    '/': '/ru' // жестко перенаправляем корень
  },
  integrations: [vue()],
});
