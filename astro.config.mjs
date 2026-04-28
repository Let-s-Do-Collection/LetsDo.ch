import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://lets-do.ch",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/403") &&
        !page.includes("/503")
    })
  ]
})