import { defineConfig, squooshImageService } from "astro/config";

import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind(), sitemap(), robots()],
});
