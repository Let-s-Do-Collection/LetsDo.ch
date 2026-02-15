import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://lets-do.ch",
  integrations: [
    starlight({
      title: "Let's Do"
    }),
    sitemap({
      filter: (page) =>
        !page.includes("/403") &&
        !page.includes("/503")
    })
  ]
})