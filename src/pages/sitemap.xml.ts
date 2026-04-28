import brewery from "./wiki/config/brewery.js";
import farmandcharm from "./wiki/config/farm-and-charm.js";
import herbalbrews from "./wiki/config/herbalbrews.js";
import vinery from "./wiki/config/vinery.js";
import candlelight from "./wiki/config/candlelight.js";
import pottery from "./wiki/config/lilis-pottery.js";
import alpinewhispers from "./wiki/config/alpine-whispers.js";
import furniture from "./wiki/config/furniture.js";
import camping from "./wiki/config/camping.js";
import hearthandtimber from "./wiki/config/hearth-and-timber.js";
import bakery from "./wiki/config/bakery.js";
import lilisluckylures from "./wiki/config/lilis-lucky-lures.js";
import wildernature from "./wiki/config/wildernature.js";
import beachparty from "./wiki/config/beachparty.js";
import bloomingnature from "./wiki/config/bloomingnature.js";
import meadow from "./wiki/config/meadow.js";

const configs = {
  brewery,
  "farm-and-charm": farmandcharm,
  "lilis-lucky-lures": lilisluckylures,
  herbalbrews,
  vinery,
  camping,
  beachparty,
  candlelight,
  bloomingnature,
  wildernature,
  furniture,
  meadow,
  bakery,
  "hearth-and-timber": hearthandtimber,
  "lilis-pottery": pottery,
  "alpine-whispers": alpinewhispers,
};

export async function GET() {
  const urls = [];

  for (const [mod, config] of Object.entries(configs)) {
    urls.push(`https://lets-do.ch/wiki/${mod}/`);

    for (const section of config.sections ?? []) {
      for (const entry of section.entries ?? []) {
        if (entry.id) {
          urls.push(`https://lets-do.ch/wiki/${mod}/${entry.id.replace(/_/g, "-")}/`);
        }

        for (const item of entry.items ?? []) {
          if (!item.id) continue;
          urls.push(`https://lets-do.ch/wiki/${mod}/${item.id.replace(/_/g, "-")}/`);
        }
      }
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => `<url><loc>${url}</loc></url>`).join("")}
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}