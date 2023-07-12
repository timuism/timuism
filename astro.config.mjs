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
    '/superpanels': 'https://starlit-taffy-642d8e.netlify.app/'
  }
});
