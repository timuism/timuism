import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  experimental: {
    assets: true,
    redirects: true
  },
  redirects: {
    '/superpanels': 'https://starlit-taffy-642d8e.netlify.app/',
    '/norahsparty': 'https://norahsparty.netlify.app/',
    '/norahsparty/rihlah': 'https://norahsparty.netlify.app/vip/rihlah',
    '/norahsparty/bella': 'https://norahsparty.netlify.app/vip/bella',
    '/norahsparty/cali': 'https://norahsparty.netlify.app/vip/cali',
    '/norahsparty/norah': 'https://norahsparty.netlify.app/vip/norah',
    '/norahsparty/jade-and-justice': 'https://norahsparty.netlify.app/vip/jade-and-justice',
    '/norahsparty/kehlani': 'https://norahsparty.netlify.app/vip/kehlani',
  }
});
