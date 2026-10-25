export default {
  slug: 'furniture',
  title: 'Furniture',
  logo: '/assets/mod-logos/furniture.webp',
  aboutTitle: 'Welcome',
  modVersion: '1.1.10',
  aboutSubtitle: 'Everyday furniture for cozy homes',
  aboutText: `Furniture fills your home with sofas, desks, wardrobes, clocks, curtains and many small details, from a gramophone to a fish tank.

Wooden pieces come in the vanilla wood types from oak to cherry. With other Let's Do mods installed, they also come in their woods, such as Palm, Arolla Pine, Dark Cherry or the BloomingNature trees. Fabric pieces come in all sixteen colours, plus the wool patterns from Meadow and Alpine Whispers.

Some pieces do more than look nice: the Blueprints work as a crafting table, the Tool Box as a smithing table, and the Pells training dummy shows how hard you hit.`,
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
            'A sofa in every colour. Sofas of the same colour placed side by side join up.',
          icon: '/assets/icons/furniture/sofa_white.webp',
          search: 'sofa furniture seating connect horizontal dye colors'
        },
        {
          id: 'pouffe',
          title: 'Pouffe',
          subtitle: 'A small cushioned seat, in every colour and wool pattern.',
          icon: '/assets/icons/furniture/pouffe_white.webp',
          search: 'pouffe furniture seating dye colors'
        },
        {
          id: 'bench',
          title: 'Bench',
          subtitle:
            'A wooden bench that joins with its neighbours. Sneak and right click to take off the backrest.',
          icon: '/assets/icons/furniture/oak_bench.webp',
          search: 'bench furniture seating connect horizontal backrest shift right click wood types'
        },
        {
          id: 'desk_chair',
          title: 'Desk Chair',
          subtitle: 'A wooden desk chair.',
          icon: '/assets/icons/furniture/oak_desk_chair.webp',
          search: 'desk chair furniture wood types'
        },
        {
          id: 'desk',
          title: 'Desk',
          subtitle:
            'A writing desk that lines up with dressers and other desks.',
          icon: '/assets/icons/furniture/oak_desk.webp',
          search: 'desk furniture connects dresser table wood types'
        },
        {
          id: 'dresser',
          title: 'Dresser',
          subtitle: 'A chest of drawers with storage that lines up with desks and other dressers.',
          icon: '/assets/icons/furniture/oak_dresser.webp',
          search: 'dresser storage furniture connects desk wood types'
        },
        {
          id: 'cabinet',
          title: 'Cabinet',
          subtitle: 'A base cabinet with storage.',
          icon: '/assets/icons/furniture/oak_cabinet.webp',
          search: 'cabinet storage furniture wood types'
        },
        {
          id: 'wardrobe',
          title: 'Wardrobe',
          subtitle: 'A tall wardrobe that shows off a full set of armor.',
          search: 'wardrobe armor storage furniture wood types',
          details: true,
          detailsTitle: 'Armor Storage',
          detailsText: `Use a piece of armor on the Wardrobe to hang it inside. Sneak and right click to take everything out again, and right click with an empty hand to open or close the doors.`,
          detailsBullets: [
            'Holds a helmet, chestplate, leggings and boots',
            'Use armor on it to store it',
            'Sneak right click to take it out',
            'Two blocks tall'
          ]
        },
        {
          id: 'curtains',
          title: 'Curtains',
          subtitle:
            'Curtains in every colour and wool pattern. They stack into long drapes and open with a right click or a redstone signal.',
          icon: '/assets/icons/furniture/curtain_white.webp',
          search: 'curtains decoration furniture open close right click vertical dye colors'
        },
        {
          id: 'shutters',
          title: 'Shutters',
          subtitle:
            'Wooden window shutters that stack vertically and open with a right click or a redstone signal.',
          icon: '/assets/icons/furniture/oak_shutter.webp',
          search: 'shutters decoration furniture open close right click vertical wood types'
        },
        {
          id: 'lamp',
          title: 'Lamp',
          subtitle:
            'A lamp in every colour and wool pattern. Stacks into a floor lamp, also hangs on walls. Sneak and right click to switch it on or off.',
          icon: '/assets/icons/furniture/lamp_white.webp',
          search: 'lamp lighting furniture connect vertical wall toggle shift right click dye colors'
        },
        {
          id: 'clock',
          title: 'Clock',
          subtitle:
            'A wall clock with moving hands. Right click it to see the exact time.',
          icon: '/assets/icons/furniture/oak_clock.webp',
          search: 'clock furniture time right click chat wood types'
        },
        {
          id: 'grandfather_clock',
          title: 'Grandfather Clock',
          subtitle:
            'A tall standing clock with moving hands. Right click it to see the exact time.',
          icon: '/assets/icons/furniture/oak_grandfather_clock.webp',
          search: 'grandfather clock furniture time right click chat wood types'
        },
        {
          id: 'mirror',
          title: 'Mirror',
          subtitle: 'A framed wall mirror.',
          icon: '/assets/icons/furniture/oak_mirror.webp',
          search: 'mirror decoration furniture wall wood types'
        },
        {
          id: 'display_case',
          title: 'Display Case',
          subtitle: 'A glass case to show off your favourite item.',
          icon: '/assets/icons/furniture/display.webp',
          search: 'display case furniture items visually showcase'
        },
        {
          id: 'terrarium',
          title: 'Terrarium',
          subtitle: 'A little glass world full of plants.',
          icon: '/assets/icons/furniture/terrarium.webp',
          search: 'terrarium decoration furniture glass plants'
        },
        {
          id: 'chimneys',
          title: 'Chimneys',
          subtitle: 'Smoking chimneys for your rooftops.',
          icon: '/assets/icons/furniture/brick_chimney.webp',
          search: 'chimney furniture smoke soot brush black dye brick stone copper',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Chimneys puff out smoke. Sneak and right click to switch between different kinds of smoke.

Over time a chimney gets sooty. Clean it with a Brush and you get Black Dye.`,
          detailsBullets: [
            'Sneak right click to change the smoke',
            'Gets sooty over time',
            'Brush it clean for Black Dye'
          ],
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
          subtitle: 'A planter box you can grow crops in. It helps them grow now and then.',
          icon: '/assets/icons/furniture/wooden_planter.webp',
          search: 'planter furniture crop growth bonemeal chance',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Crops can be planted straight into a Planter, no farmland needed. Every now and then the planter gives the crop in it a growth boost, like Bone Meal.`,
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
          subtitle: 'Old-fashioned street lanterns for paths and squares.',
          icon: '/assets/icons/furniture/street_lantern_item.webp',
          search: 'street lantern furniture outdoor light wall vertical bulb',
          details: true,
          detailsTitle: 'Variants and Behavior',
          detailsText: `Stack Street Lanterns to build a lamp post, or hang them on a wall. Sneak and place a second lantern on one to give it a second bulb.`,
          detailsBullets: [
            'Plain and gold plated',
            'Stack them into a lamp post',
            'Can hang on walls',
            'Sneak-place a second lantern for two bulbs'
          ],
          items: [
            {
              id: 'street_lantern_wall',
              title: 'Street Lantern',
              subtitle: 'A classic street lantern.',
              icon: '/assets/icons/furniture/street_lantern_item.webp',
              search: 'street lantern furniture classic french style'
            },
            {
              id: 'plated_street_lantern_wall',
              title: 'Plated Street Lantern',
              subtitle: 'A gold plated street lantern.',
              icon: '/assets/icons/furniture/plated_street_lantern_item.webp',
              search: 'gold plated street lantern furniture elegant'
            }
          ]
        },
        {
          id: 'bin',
          title: 'Bin',
          subtitle:
            'Right click with anything to throw it away for good. When the bin is full, it empties itself, and one time in four a [[Trash Bag|trash_bag]] falls out.',
          icon: '/assets/icons/furniture/bin.webp',
          search: 'bin trash furniture dispose destroy trash bag chance'
        },
        {
          id: 'boat_in_a_jar',
          title: 'Boat in a Jar',
          subtitle: 'A tiny ship in a bottle for the shelf.',
          icon: '/assets/icons/furniture/boat_in_a_jar.webp',
          search: 'boat in a jar decoration furniture'
        },
        {
          id: 'gramophone',
          title: 'Gramophone',
          subtitle:
            'A jukebox with style. The record spins while it plays, and it sends out a redstone signal. Right click to toggle repeat, sneak and right click to take the disc out.',
          icon: '/assets/icons/furniture/gramophone.webp',
          search: 'gramophone furniture jukebox music disc repeat toggle eject spinning displayed'
        },
        {
          id: 'telescope',
          title: 'Telescope',
          subtitle: 'A brass telescope for the study.',
          icon: '/assets/icons/furniture/telescope.webp',
          search: 'telescope furniture decoration'
        },
        {
          id: 'coffer',
          title: 'Coffer',
          subtitle:
            'A small chest that keeps its contents when you break it. Perfect for moving house.',
          icon: '/assets/icons/furniture/coffer.webp',
          search: 'coffer furniture portable storage transport contents saved'
        },
        {
          id: 'explorers_box',
          title: 'Explorers Box',
          subtitle: 'An explorer\'s chest that works as a Cartography Table.',
          icon: '/assets/icons/furniture/explorers_box.webp',
          search: 'explorers box furniture cartography table'
        },
        {
          id: 'cash_register',
          title: 'Cash Register',
          subtitle: 'A cash register for your shop counter. Purely decorative.',
          icon: '/assets/icons/furniture/cash_register.webp',
          search: 'cash register furniture decoration'
        },
        {
          id: 'tool_box',
          title: 'Tool Box',
          subtitle: 'A tool box that works as a Smithing Table.',
          icon: '/assets/icons/furniture/tool_box.webp',
          search: 'tool box furniture smithing table'
        },
        {
          id: 'blueprints',
          title: 'Blueprints',
          subtitle: 'A table of blueprints that works as a Crafting Table.',
          icon: '/assets/icons/furniture/blueprints.webp',
          search: 'blueprints furniture crafting table'
        },
        {
          id: 'sewing_kit',
          title: 'Sewing Kit',
          subtitle: 'A sewing kit that works as a Loom.',
          icon: '/assets/icons/furniture/sewing_kit.webp',
          search: 'sewing kit furniture loom banners'
        },
        {
          id: 'steam_vent',
          title: 'Steam Vent',
          subtitle:
            'A steam vent that stacks into a pipe. Right click to let off steam.',
          icon: '/assets/icons/furniture/steam_vent.webp',
          search: 'steam vent furniture decoration connect horizontal toggle particles airflow visual'
        },
        {
          id: 'fish_tanks',
          title: 'Fish Tanks',
          subtitle: 'A two block aquarium for cod, salmon and pufferfish.',
          icon: '/assets/icons/furniture/copper_fish_tank.webp',
          search: 'fish tank furniture copper iron cod salmon pufferfish bucket animation',
          details: true,
          detailsTitle: 'Variants and Usage',
          detailsText: `Empty a bucket of cod, salmon or pufferfish into the tank and watch them swim. You get the empty bucket back. When the tank is broken, the fish are set free.`,
          detailsBullets: [
            'Two blocks long',
            'Fill with a Cod, Salmon or Pufferfish Bucket',
            'Returns the empty Bucket',
            'Breaking it sets the fish free'
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
          subtitle: 'Paintings in different sizes and motifs.',
          icon: '/assets/icons/furniture/canvas.webp',
          search: 'canvas furniture painting place motifs sizes variants'
        },
        {
          id: 'music_disc_cphs_pride',
          title: "CPH's Pride",
          subtitle: 'A dark, powerful track. Dropped by Creepers killed by a Skeleton.',
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
          subtitle: "The signature tune of the Let's Do collection. Dropped by Creepers killed by a Skeleton.",
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
          subtitle: 'What others throw away? That’s still great!',
          icon: '/assets/icons/furniture/trash_bag.webp',
          search: 'trash bag furniture random item cooldown blacklist tag',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Open a Trash Bag to find a random item inside. After that you have to wait a minute before you can open the next one.

Modpacks can keep items out of trash bags with the trash_bag_blacklist item tag.`,
          detailsBullets: [
            'Gives a random item',
            'One minute cooldown',
            'Found in the Bin'
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
          detailsText: `Pells is a training dummy that shows how much damage your last hit did, and whether it was a critical hit. Perfect for testing weapons and enchantments.

Sneak and right click to pick it up again.`,
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
  impressionsSubtitle: 'A closer look at how everything comes together in game',
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
      caption: 'Taking in the blacksmith scenery'
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
      caption: 'Clouds forming during a city stroll'
    },
    {
      src: '/assets/impressions/furniture/09.webp',
      caption: 'Crimson Waiting Room after a long day’s work'
    },
    {
      src: '/assets/impressions/furniture/10.webp',
      caption: 'Fireplace keeping the cottage warm'
    }
  ]
}
