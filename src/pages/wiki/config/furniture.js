export default {
  slug: 'furniture',
  title: 'Furniture',
  logo: '/assets/mod-logos/furniture.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Everyday furniture and decorative items',
  aboutText: `Furniture focuses on everyday interiors, seating, storage, and decorative elements.

The mod adds a wide range of pieces designed for cozy living spaces and practical builds.

Most furniture is available in all vanilla wood types or all dye colors, depending on the piece.`,
  sections: [
    {
      id: 'decor',
      title: 'Decor & Building',
      subtitle: 'Furniture and decorative elements for interiors and builds.',
      entries: [
        {
          id: 'sofa',
          title: 'Sofa',
          subtitle:
            'A decorative sofa for seating, available in all dye colors. Connects horizontally with sofas of the same color.',
          icon: '/assets/icons/furniture/sofa_white.webp',
          search: 'sofa furniture seating connect horizontal dye colors'
        },
        {
          id: 'pouffe',
          title: 'Pouffe',
          subtitle: 'A small cushioned seat, available in all dye colors.',
          icon: '/assets/icons/furniture/pouffe_white.webp',
          search: 'pouffe furniture seating dye colors'
        },
        {
          id: 'bench',
          title: 'Bench',
          subtitle:
            'A simple seating piece, available in all vanilla wood types. Connects horizontally. Shift right click to remove the backrest.',
          icon: '/assets/icons/furniture/oak_bench.webp',
          search: 'bench furniture seating connect horizontal backrest shift right click wood types'
        },
        {
          id: 'desk_chair',
          title: 'Desk Chair',
          subtitle: 'A simple desk chair, available in all vanilla wood types.',
          icon: '/assets/icons/furniture/oak_desk_chair.webp',
          search: 'desk chair furniture wood types'
        },
        {
          id: 'desk',
          title: 'Desk',
          subtitle:
            'A desk for workspaces, available in all vanilla wood types. Connects with Dressers and other Tables.',
          icon: '/assets/icons/furniture/oak_desk.webp',
          search: 'desk furniture connects dresser table wood types'
        },
        {
          id: 'dresser',
          title: 'Dresser',
          subtitle: 'A storage dresser, available in all vanilla wood types. Connects with Desks and other Dressers.',
          icon: '/assets/icons/furniture/oak_dresser.webp',
          search: 'dresser storage furniture connects desk wood types'
        },
        {
          id: 'cabinet',
          title: 'Cabinet',
          subtitle: 'A storage cabinet, available in all vanilla wood types.',
          icon: '/assets/icons/furniture/oak_cabinet.webp',
          search: 'cabinet storage furniture wood types'
        },
        {
          id: 'curtains',
          title: 'Curtains',
          subtitle:
            'Decorative curtains, available in all dye colors. Connect vertically and can be opened or closed with right click.',
          icon: '/assets/icons/furniture/curtain_white.webp',
          search: 'curtains decoration furniture open close right click vertical dye colors'
        },
        {
          id: 'shutters',
          title: 'Shutters',
          subtitle:
            'Window shutters, available in all vanilla wood types. Connect vertically and can be opened or closed with right click.',
          icon: '/assets/icons/furniture/oak_shutter.webp',
          search: 'shutters decoration furniture open close right click vertical wood types'
        },
        {
          id: 'lamp',
          title: 'Lamp',
          subtitle:
            'A decorative lamp, available in all dye colors. Connects vertically with lamps of the same color and can also be placed on walls. Shift right click to turn it on or off.',
          icon: '/assets/icons/furniture/lamp_white.webp',
          search: 'lamp lighting furniture connect vertical wall toggle shift right click dye colors'
        },
        {
          id: 'clock',
          title: 'Clock',
          subtitle:
            'A decorative clock, available in all vanilla wood types. Displays the current time visually. Right click to show the current time in chat.',
          icon: '/assets/icons/furniture/oak_clock.webp',
          search: 'clock furniture time right click chat wood types'
        },
        {
          id: 'grandfather_clock',
          title: 'Grandfather Clock',
          subtitle:
            'A tall decorative clock, available in all vanilla wood types. Displays the current time visually. Right click to show the current time in chat.',
          icon: '/assets/icons/furniture/oak_grandfather_clock.webp',
          search: 'grandfather clock furniture time right click chat wood types'
        },
        {
          id: 'mirror',
          title: 'Mirror',
          subtitle: 'A decorative wall mirror, available in all vanilla wood types.',
          icon: '/assets/icons/furniture/oak_mirror.webp',
          search: 'mirror decoration furniture wall wood types'
        },
        {
          id: 'display_case',
          title: 'Display Case',
          subtitle: 'A display case that shows placed items visually.',
          icon: '/assets/icons/furniture/display.webp',
          search: 'display case furniture items visually showcase'
        },
        {
          id: 'terrarium',
          title: 'Terrarium',
          subtitle: 'A decorative glass terrarium for plants.',
          icon: '/assets/icons/furniture/terrarium.webp',
          search: 'terrarium decoration furniture glass plants'
        },
        {
          id: 'chimneys',
          title: 'Chimneys',
          subtitle: 'Decorative chimneys for adding atmosphere to builds.',
          icon: '/assets/icons/furniture/brick_chimney.webp',
          search: 'chimney furniture decorative brick stone copper',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Chimneys are decorative pieces used to add detail and atmosphere to builds.

They are available in multiple material variants.`,
          items: [
            {
              id: 'brick_chimney',
              title: 'Brick Chimney',
              icon: '/assets/icons/furniture/brick_chimney.webp',
              search: 'brick chimney furniture'
            },
            {
              id: 'stone_bricks_chimney',
              title: 'Stone Bricks Chimney',
              icon: '/assets/icons/furniture/stone_bricks_chimney.webp',
              search: 'stone bricks chimney furniture'
            },
            {
              id: 'copper_chimney',
              title: 'Copper Chimney',
              icon: '/assets/icons/furniture/copper_chimney.webp',
              search: 'copper chimney furniture'
            }
          ]
        },
        {
          id: 'planter',
          title: 'Planter',
          subtitle: 'A decorative planter that can occasionally boost growth for bonemealable crops planted above it.',
          icon: '/assets/icons/furniture/wooden_planter.webp',
          search: 'planter furniture crop growth bonemeal chance',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Planters can occasionally apply a bonemeal growth tick to bonemealable crops planted above them.

They are available in multiple material variants.`,
          items: [
            {
              id: 'wooden_planter',
              title: 'Wooden Planter',
              icon: '/assets/icons/furniture/wooden_planter.webp',
              search: 'wooden planter furniture'
            },
            {
              id: 'stone_brick_planter',
              title: 'Stone Brick Planter',
              icon: '/assets/icons/furniture/stone_brick_planter.webp',
              search: 'stone brick planter furniture'
            }
          ]
        },
        {
          id: 'street_lanterns',
          title: 'Street Lanterns',
          subtitle: 'Decorative outdoor lanterns that can be stacked vertically and also placed on walls.',
          icon: '/assets/icons/furniture/street_lantern_item.webp',
          search: 'street lantern furniture outdoor light wall vertical bulb',
          details: true,
          detailsTitle: 'Variants and Behavior',
          detailsText: `Street Lanterns are decorative outdoor light sources used for streets, paths, and courtyards.

They are available as regular and gold plated variants.

Street Lanterns connect vertically when stacked and can also be placed on walls.

Placing a second lantern adds an additional bulb.`,
          detailsBullets: [
            'Available as regular and gold plated variants',
            'Can be stacked vertically',
            'Can be placed on walls',
            'Placing a second lantern adds an additional bulb'
          ],
          items: [
            {
              id: 'street_lantern_wall',
              title: 'Street Lantern',
              subtitle: 'A french inspired street lantern with a classic look.',
              icon: '/assets/icons/furniture/street_lantern_item.webp',
              search: 'street lantern furniture classic french style'
            },
            {
              id: 'plated_street_lantern_wall',
              title: 'Gold Plated Street Lantern',
              subtitle: 'An elegant gold plated street lantern with a luxurious look.',
              icon: '/assets/icons/furniture/plated_street_lantern_item.webp',
              search: 'gold plated street lantern furniture elegant'
            }
          ]
        },
        {
          id: 'bin',
          title: 'Bin',
          subtitle:
            'Dispose of unwanted items by throwing them into the Bin. Items are destroyed instantly with no way to recover them. When the Bin is full, it has a chance to drop a [[Trash Bag|trash_bag]].',
          icon: '/assets/icons/furniture/bin.webp',
          search: 'bin trash furniture dispose destroy trash bag chance'
        },
        {
          id: 'boat_in_a_jar',
          title: 'Boat in a Jar',
          subtitle: 'A small decorative display piece.',
          icon: '/assets/icons/furniture/boat_in_a_jar.webp',
          search: 'boat in a jar decoration furniture'
        },
        {
          id: 'gramophone',
          title: 'Gramophone',
          subtitle:
            'A stylish jukebox alternative. Insert a music disc to play it. The disc is displayed and spins while playing. Right click toggles repeat mode, shift right click ejects the disc.',
          icon: '/assets/icons/furniture/gramophone.webp',
          search: 'gramophone furniture jukebox music disc repeat toggle eject spinning displayed'
        },
        {
          id: 'telescope',
          title: 'Telescope',
          subtitle: 'A decorative telescope for interiors.',
          icon: '/assets/icons/furniture/telescope.webp',
          search: 'telescope furniture decoration'
        },
        {
          id: 'coffer',
          title: 'Coffer',
          subtitle:
            'Portable storage. Break it to pick it up with its contents safely kept inside, making it ideal for transporting items.',
          icon: '/assets/icons/furniture/coffer.webp',
          search: 'coffer furniture portable storage transport contents saved'
        },
        {
          id: 'explorers_box',
          title: "Explorer's Box",
          subtitle: 'An explorer themed storage piece that functions like a Cartography Table.',
          icon: '/assets/icons/furniture/explorers_box.webp',
          search: 'explorers box furniture cartography table'
        },
        {
          id: 'cash_register',
          title: 'Cash Register',
          subtitle: 'A decorative cash register without any functionality.',
          icon: '/assets/icons/furniture/cash_register.webp',
          search: 'cash register furniture decoration'
        },
        {
          id: 'tool_box',
          title: 'Tool Box',
          subtitle: 'A tool box with the functionality of a Smithing Table.',
          icon: '/assets/icons/furniture/tool_box.webp',
          search: 'tool box furniture smithing table'
        },
        {
          id: 'blueprints',
          title: 'Blueprints',
          subtitle: 'Blueprints with the functionality of a Crafting Table.',
          icon: '/assets/icons/furniture/blueprints.webp',
          search: 'blueprints furniture crafting table'
        },
        {
          id: 'sewing_kit',
          title: 'Sewing Kit',
          subtitle: 'A sewing kit with the functionality of a Loom.',
          icon: '/assets/icons/furniture/sewing_kit.webp',
          search: 'sewing kit furniture loom banners'
        },
        {
          id: 'steam_vent',
          title: 'Steam Vent',
          subtitle:
            'A decorative steam vent that connects horizontally. Can be turned on to emit a visible particle airflow.',
          icon: '/assets/icons/furniture/steam_vent.webp',
          search: 'steam vent furniture decoration connect horizontal toggle particles airflow visual'
        },
        {
          id: 'fish_tanks',
          title: 'Fish Tanks',
          subtitle: 'Decorative fish tanks available in multiple metal variants.',
          icon: '/assets/icons/furniture/copper_fish_tank.webp',
          search: 'fish tank furniture copper iron cod salmon pufferfish bucket animation',
          details: true,
          detailsTitle: 'Variants and Usage',
          detailsText: `Fish Tanks are two block long decorative tanks that can be filled with fish using buckets.

Using a Cod Bucket, Salmon Bucket, or Pufferfish Bucket adds the matching fish to the tank and returns an empty Bucket.

Inserted fish swim around inside the tank with a cute animation.

Breaking the tank releases any stored fish back into the world.`,
          detailsBullets: [
            'Two block long tank',
            'Add Cod, Salmon, or Pufferfish using the matching bucket',
            'Returns an empty Bucket after placing a fish',
            'Fish swim around inside with a cute animation',
            'Breaking the tank releases stored fish'
          ],
          items: [
            {
              id: 'copper_fish_tank',
              title: 'Copper Fish Tank',
              icon: '/assets/icons/furniture/copper_fish_tank.webp',
              search: 'copper fish tank furniture'
            },
            {
              id: 'iron_fish_tank',
              title: 'Iron Fish Tank',
              icon: '/assets/icons/furniture/iron_fish_tank.webp',
              search: 'iron fish tank furniture'
            }
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Items added by Furniture.',
      entries: [
        {
          id: 'canvas',
          title: 'Canvas',
          subtitle: 'Place canvases with different motifs and sizes.',
          icon: '/assets/icons/furniture/canvas.webp',
          search: 'canvas furniture painting place motifs sizes variants'
        },
        {
          id: 'music_disc_cphs_pride',
          title: "CPH's Pride",
          subtitle: 'A dark and powerful track with a heavy, looming atmosphere. Drops from Creepers.',
          namespace_id: 'furniture:music_disc_cphs_pride',
          icon: '/assets/icons/furniture/cphs_pride.webp',
          search: 'music disc cphs pride furniture creeper drop',
          musicdisc: true,
          tracks: [
            {
              title: "CPH's Pride",
              subtitle: 'Bellows & Brine',
              icon: '/assets/icons/furniture/cphs_pride.webp',
              src: '/assets/music/furniture/cphs_pride.ogg'
            }
          ]
        },
        {
          id: 'music_disc_letsdo_theme',
          title: "Let's Do Theme",
          subtitle: "The signature track of the Let's Do mod collection. Drops from Creepers.",
          namespace_id: 'furniture:music_disc_letsdo_theme',
          icon: '/assets/icons/furniture/letsdo_theme.webp',
          search: 'music disc lets do theme furniture creeper drop',
          musicdisc: true,
          tracks: [
            {
              title: "Let's Do Theme",
              subtitle: 'Signature',
              icon: '/assets/icons/furniture/letsdo_theme.webp',
              src: '/assets/music/furniture/letsdo_theme.ogg'
            }
          ]
        },
        {
          id: 'trash_bag',
          title: 'Trash Bag',
          namespace_id: 'furniture:trash_bag',
          subtitle: 'What others throw away? Thats still great!',
          icon: '/assets/icons/furniture/trash_bag.webp',
          search: 'trash bag furniture random item cooldown blacklist tag',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Using a Trash Bag spawns a random discarded item.

   After use, it goes on cooldown before it can be used again.

   Items can be excluded from dropping by adding them to the trash bag blacklist tag.`,
          detailsBullets: [
            'Spawns a random discarded item on use',
            'Has a cooldown between uses',
            'Blacklist items via the trash_bag_blacklist item tag',
            'Tag location data/furniture/tags/items/trash_bag_blacklist.json'
          ]
        }
      ]
    },
    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'Entities added by Furniture.',
      entries: [
        {
          id: 'pells',
          title: 'Pells',
          subtitle: 'A training dummy for damage testing.',
          icon: '/assets/icons/furniture/pells.webp',
          search: 'pells training dummy furniture damage test damage number crit indicator shift right click remove',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Pells is a training dummy that shows the damage of your last hit, including whether it was a critical strike.

    Use it to test weapon damage, enchantments, and timing without fighting real mobs.

    Shift right click to remove it. This drops the Pells item so you can place it again.`,
          detailsBullets: [
            'Displays the last hit damage',
            'Indicates critical hits',
            'Great for testing weapons and timing',
            'Shift right click to remove and get the item back'
          ]
        }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'A closer look at how everything comes together ingame',
  impressions: [
    {
      src: '/assets/impressions/furniture/01.webp',
      caption: 'Lili’s Vanity Room'
    },
    {
      src: '/assets/impressions/furniture/02.webp',
      caption: 'Study Corner'
    },
    {
      src: '/assets/impressions/furniture/03.webp',
      caption: 'Meal cooking in a still kitchen'
    },
    {
      src: '/assets/impressions/furniture/04.webp',
      caption: 'Taking in the Blacksmith Scenery '
    },
    {
      src: '/assets/impressions/furniture/05.webp',
      caption: 'Fish swimming in their tanks, within a Lunar’s room'
    },
    {
      src: '/assets/impressions/furniture/06.webp',
      caption: 'Time to retire to the Crimson suite'
    },
    {
      src: '/assets/impressions/furniture/07.webp',
      caption: 'Peace at the Crimson Library Nook'
    },
    {
      src: '/assets/impressions/furniture/08.webp',
      caption: 'Clouds forming during a city stroll '
    },
    {
      src: '/assets/impressions/furniture/09.webp',
      caption: 'Crimson Waiting Room after a days finish'
    },
    {
      src: '/assets/impressions/furniture/10.webp',
      caption: 'Fireplace keeping the cottage warm'
    }
  ]
}
