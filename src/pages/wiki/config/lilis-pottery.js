export default {
  slug: 'pottery',
  title: 'Pottery',
  logo: '/assets/mod-logos/lilis_pottery.png',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Clay, fire and handcrafted pottery',
  aboutText: `Welcome to the Pottery Wiki.

This is your home for blocks, items, mechanics, and quick guidance for Pottery.

Pottery focuses on working with clay, shaping ceramic storage and decor, and firing finished pieces in dedicated stations. Color and dye modifiers can be used to tint finished pieces, and many pottery blocks support painted states for extra visual variety.

`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Workstations and interactive elements used for firing, processing, and finishing pottery pieces.',
      entries: [
        {
          id: 'pottery_table',
          title: 'Pottery Table',
          namespace_id: 'lilis_pottery:pottery_table',
          subtitle: 'A shaping Station for turning pottery inputs into finished pieces, with a recipe selection list.',
          icon: '/assets/icons/pottery/pottery_table.png',
          search:
            'pottery table shaping station pottering recipe selection scroll list stonecutter clay shaping output',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Pottery Table works similarly to other Crafting Stations.

It has one Input Slot and one Output Slot, and provides a recipe selection list based on the inserted Item.

Recipes usually use Clay Balls as their input. Place a Clay Ball into the Input Slot to populate the recipe list. Select a recipe to preview the output, then take the finished Item from the Output Slot to consume the input and craft the result.

The Interface behaves similarly to a Stonecutter: it shows a scrollable recipe grid, highlights the selected recipe, and plays a sound when taking the result.`,
          detailsBullets: [
            'One Input Slot and one Output Slot',
            'Recipes usually use Clay Balls as their input',
            'Selecting a recipe updates the Output Slot',
            'Crafting consumes one Input Item when taking the result',
            'Recipe list is based on the inserted Item',
            'Scrollable recipe selection grid',
            'Plays a sound when taking the crafted result'
          ]
        },
        {
          id: 'kiln',
          title: 'Kiln',
          namespace_id: 'lilis_pottery:kiln',
          subtitle: 'A hot firing kiln used to burn patterns and colors permanently into pottery.',
          icon: '/assets/icons/pottery/kiln.png',
          search: 'kiln firing station fuel dye painted glaze preview pottery urn storage',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Kiln works similarly to other Crafting Stations.

It has one Base Input Slot, one Modifier Slot, one Fuel Slot, and one Output Slot.

Place a valid pottery Base Block into the Base Slot, optionally add a Dye as a Modifier, then insert a valid Fuel Item to start the Firing Process. The Kiln will automatically consume fuel, process the recipe, and place the finished result into the Output Slot.

While active, the Kiln lights up and plays furnace sounds. The Interface also shows a live Preview of the finished Block, including dye tinting and painted states.`,
          detailsBullets: [
            'One Base Input Slot, one Modifier Slot, one Fuel Slot, and one Output Slot',
            'Base Slot accepts pottery storage blocks and urns',
            'Modifier Slot accepts Dyes to tint the result',
            'Powered by any valid Fuel Item',
            'Firing time depends on the selected recipe',
            'Active State is shown by the lit Kiln and furnace sounds',
            'Shows a live Preview of the finished Block in the Interface'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Materials',
      subtitle: 'Basic materials and items used throughout pottery crafting and processing.',
      entries: [
        {
          id: 'clay_balls',
          title: 'Clay Balls',
          subtitle: 'Colored clay pieces used as the base material for shaping pottery.',
          icon: '/assets/icons/pottery/red_clay_ball.png',
          search: 'clay ball colored clay pottery red yellow white blue black',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Clay Balls are basic materials used throughout Pottery. They are obtained by breaking Clay Blocks found in the world.

Different Clay Blocks yield differently colored Clay Balls, which are then used as the primary input for shaping pottery pieces at the Pottery Table.`,
          detailsBullets: [
            'Obtained by breaking Clay Blocks',
            'Available in multiple color variants',
            'Used as the base material for pottery crafting',
            'Primary input for the Pottery Table'
          ],
          items: [
            {
              id: 'red_clay_ball',
              title: 'Red Clay Ball',
              namespace_id: 'lilis_pottery:red_clay_ball',
              icon: '/assets/icons/pottery/red_clay_ball.png',
              search: 'red clay ball pottery material'
            },
            {
              id: 'yellow_clay_ball',
              title: 'Yellow Clay Ball',
              namespace_id: 'lilis_pottery:yellow_clay_ball',
              icon: '/assets/icons/pottery/yellow_clay_ball.png',
              search: 'yellow clay ball pottery material'
            },
            {
              id: 'white_clay_ball',
              title: 'White Clay Ball',
              namespace_id: 'lilis_pottery:white_clay_ball',
              icon: '/assets/icons/pottery/white_clay_ball.png',
              search: 'white clay ball pottery material'
            },
            {
              id: 'blue_clay_ball',
              title: 'Blue Clay Ball',
              namespace_id: 'lilis_pottery:blue_clay_ball',
              icon: '/assets/icons/pottery/blue_clay_ball.png',
              search: 'blue clay ball pottery material'
            },
            {
              id: 'black_clay_ball',
              title: 'Black Clay Ball',
              namespace_id: 'lilis_pottery:black_clay_ball',
              icon: '/assets/icons/pottery/black_clay_ball.png',
              search: 'black clay ball pottery material'
            }
          ]
        },
        {
          id: 'bricks',
          title: 'Bricks',
          subtitle: 'Fired pottery materials created by smelting Clay Balls.',
          icon: '/assets/icons/pottery/red_brick.png',
          search: 'brick pottery fired clay red yellow white blue black furnace smelting',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Bricks are refined pottery materials created by smelting Clay Balls in a Furnace.

Place any Clay Ball into a Furnace to fire it into a Brick of the corresponding color. Bricks are used as building materials and as crafting components for various pottery related blocks and decorations.`,
          detailsBullets: [
            'Obtained by smelting Clay Balls in a Furnace',
            'Each Clay Ball produces a matching colored Brick',
            'Used for crafting pottery blocks and decorative elements',
            'Acts as a refined material step after Clay Balls'
          ],
          items: [
            {
              id: 'red_brick',
              title: 'Red Brick',
              namespace_id: 'lilis_pottery:red_brick',
              icon: '/assets/icons/pottery/red_brick.png',
              search: 'red brick pottery material'
            },
            {
              id: 'yellow_brick',
              title: 'Yellow Brick',
              namespace_id: 'lilis_pottery:yellow_brick',
              icon: '/assets/icons/pottery/yellow_brick.png',
              search: 'yellow brick pottery material'
            },
            {
              id: 'white_brick',
              title: 'White Brick',
              namespace_id: 'lilis_pottery:white_brick',
              icon: '/assets/icons/pottery/white_brick.png',
              search: 'white brick pottery material'
            },
            {
              id: 'blue_brick',
              title: 'Blue Brick',
              namespace_id: 'lilis_pottery:blue_brick',
              icon: '/assets/icons/pottery/blue_brick.png',
              search: 'blue brick pottery material'
            }
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Decorative pottery blocks used for flowers, storage, and cozy interior builds.',
      entries: [
        {
          id: 'small_flower_pots',
          title: 'Small Flower Pots',
          subtitle: 'Compact pottery flower pots for small plants and details.',
          icon: '/assets/icons/pottery/white_cupella.png',
          search: 'small flower pot pottery decor',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Small Flower Pots are compact pottery pots made for single block Flowers and small plants.

All Flowers tagged with #small_flowers can be placed inside.

They are ideal for tables, shelves, and small decorative touches that make a space feel lived in.`,
          detailsBullets: [
            'Holds Flowers tagged with #small_flowers',
            'Perfect for small decorative details',
            'Available in multiple color variants'
          ],
          items: [
            {
              id: 'cupella',
              title: 'Cupella',
              icon: '/assets/icons/pottery/white_cupella.png',
              search: 'cupella small flower pot pottery'
            },
            {
              id: 'bud_vase',
              title: 'Bud Vase',
              icon: '/assets/icons/pottery/yellow_bud_vase.png',
              search: 'bud vase small flower pot pottery'
            },
            {
              id: 'planter',
              title: 'Planter',
              icon: '/assets/icons/pottery/red_planter.png',
              search: 'planter small flower pot pottery'
            },
            {
              id: 'plant_bowl',
              title: 'Plant Bowl',
              icon: '/assets/icons/pottery/plant_bowl.png',
              search: 'plant bowl small flower pot pottery'
            },
            {
              id: 'vase',
              title: 'Vase',
              icon: '/assets/icons/pottery/blue_vase.png',
              search: 'vase small flower pot pottery'
            }
          ]
        },
        {
          id: 'large_flower_pots',
          title: 'Large Flower Pots',
          subtitle: 'Tall pottery flower pots made for larger plants and statement pieces.',
          icon: '/assets/icons/pottery/white_square_pot.png',
          search: 'large flower pot tall flowers two block high pottery decor',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Large Flower Pots are tall pottery pots made for two block high Flowers and similar plants.

All Flowers tagged with #tall_flowers can be placed inside.

They are perfect for filling open spaces, framing doorways, or simply adding a bit of height and character to your builds.`,
          detailsBullets: [
            'Holds Flowers tagged with #tall_flowers',
            'Ideal for interiors, gardens, and entryways',
            'Available in multiple color variants'
          ],
          items: [
            {
              id: 'square_pot',
              title: 'Square Pot',
              icon: '/assets/icons/pottery/white_square_pot.png',
              search: 'square pot large flower pot pottery'
            },
            {
              id: 'garden_pot',
              title: 'Garden Pot',
              icon: '/assets/icons/pottery/black_garden_pot.png',
              search: 'garden pot large flower pot pottery'
            }
          ]
        },
        {
          id: 'urns',
          title: 'Urns and Amphores',
          subtitle: 'A special pottery piece that protects your belongings after death.',
          icon: '/assets/icons/pottery/blue_amphore.png',
          search: 'urn amphore death storage grave pottery painted glazed honeycomb',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Urns are special pottery blocks with a unique purpose.

When a player dies, their items are placed inside a nearby Urn, keeping them safe and neatly stored, as long as there is enough space. This turns the Urn into a calm recovery point instead of scattered drops.

Like other pottery pieces, Urns can be painted and crafted in different colors. If a painted Urn is glazed using Honeycomb, it gains a soft glow and keeps its finished look.`,
          detailsBullets: [
            "Safely stores a player's items after death",
            'Acts as a calm recovery point',
            'Can be crafted in different colors',
            'Can be painted',
            'Painted Urns can be glazed with Honeycomb',
            'Glazed Urns emit a subtle glow'
          ],
          items: [
            {
              id: 'urn',
              title: 'Urn',
              icon: '/assets/icons/pottery/urn.png',
              search: 'urn pottery storage painted glazed'
            },
            {
              id: 'amphore',
              title: 'Amphore',
              icon: '/assets/icons/pottery/blue_amphore.png',
              search: 'amphore pottery storage painted glazed'
            }
          ]
        },
        {
          id: 'brick_blocks',
          title: 'Brick Blocks',
          subtitle: 'Decorative building blocks for cozy walls, trims, and pottery themed builds.',
          icon: '/assets/icons/pottery/red_bricks.png',
          search: 'brick blocks wall stairs slabs decorative pottery building',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Brick Blocks are decorative building blocks crafted from Bricks.

They come in Wall, Stair, and Slab variants.`,
          detailsBullets: [
            'Purely decorative building blocks',
            'Available as Walls, Stairs, and Slabs',
            'Crafted from matching Brick items'
          ],
          items: [
            {
              id: 'red_bricks',
              title: 'Red Brick Blocks',
              icon: '/assets/icons/pottery/red_bricks.png',
              search: 'red brick blocks wall stair slab'
            },
            {
              id: 'yellow_bricks',
              title: 'Yellow Brick Blocks',
              icon: '/assets/icons/pottery/yellow_bricks.png',
              search: 'yellow brick blocks wall stair slab'
            },
            {
              id: 'white_bricks',
              title: 'White Brick Blocks',
              icon: '/assets/icons/pottery/white_bricks.png',
              search: 'white brick blocks wall stair slab'
            },
            {
              id: 'blue_bricks',
              title: 'Blue Brick Blocks',
              icon: '/assets/icons/pottery/blue_bricks.png',
              search: 'blue brick blocks wall stair slab'
            },
            {
              id: 'black_bricks',
              title: 'Black Brick Blocks',
              icon: '/assets/icons/pottery/black_bricks.png',
              search: 'black brick blocks wall stair slab'
            }
          ]
        },
        {
          id: 'lilis_statue',
          title: "Lili's Statue",
          namespace_id: 'pottery:lilis_statue',
          subtitle: 'A reward statue for completing all Pottery.',
          icon: '/assets/icons/pottery/lilis_statue.png',
          search: 'completionist statue reward pottery all pots colors shapes firework interaction tooltip',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Lili's Statue is a unique reward for completing all Pottery currently available.

When interacting with the top half of the statue, it launches a large celebratory firework show and displays the title "Lili's Pottery".`,
          detailsBullets: [
            'Reward for completing all Pottery',
            'Interact with the top half to trigger a large celebratory firework show',
            'Displays the title "Lili\'s Pottery"'
          ]
        }
      ]
    },
    {
      id: 'worldgen',
      title: 'Clay Deposits and Worldgen',
      subtitle: 'Colored clay deposits found in the world, ready to be dug up and turned into pottery.',
      entries: [
        {
          id: 'red_clay',
          title: 'Red Clay',
          namespace_id: 'lilis_pottery:red_clay',
          subtitle: 'Warm red clay that feels right at home in rugged landscapes and riverbeds.',
          icon: '/assets/icons/pottery/red_clay.png',
          search: 'red clay badlands eroded wooded badlands river swamp mangrove swamp',
          details: true,
          detailsTitle: 'Where to find',
          detailsText: `Red Clay generates in Badlands biomes and along Rivers. You can also find it in Swamps and Mangrove Swamps.`,
          detailsBullets: ['Badlands, Eroded Badlands, Wooded Badlands', 'Rivers', 'Swamps and Mangrove Swamps'],
          items: [
            {
              id: 'red_clay_ball',
              title: 'Red Clay Ball',
              namespace_id: 'lilis_pottery:red_clay_ball',
              icon: '/assets/icons/pottery/red_clay_ball.png',
              search: 'red clay ball clay deposit'
            }
          ]
        },
        {
          id: 'yellow_clay',
          title: 'Yellow Clay',
          namespace_id: 'lilis_pottery:yellow_clay',
          subtitle: 'Sunny clay that shows up in warmer regions and near flowing water.',
          icon: '/assets/icons/pottery/yellow_clay.png',
          search: 'yellow clay savanna savanna plateau windswept savanna river swamp mangrove swamp',
          details: true,
          detailsTitle: 'Where to find',
          detailsText: `Yellow Clay generates in Savanna biomes and along Rivers. You can also find it in Swamps and Mangrove Swamps.`,
          detailsBullets: ['Savanna, Savanna Plateau, Windswept Savanna', 'Rivers', 'Swamps and Mangrove Swamps'],
          items: [
            {
              id: 'yellow_clay_ball',
              title: 'Yellow Clay Ball',
              namespace_id: 'lilis_pottery:yellow_clay_ball',
              icon: '/assets/icons/pottery/yellow_clay_ball.png',
              search: 'yellow clay ball clay deposit'
            }
          ]
        },
        {
          id: 'white_clay',
          title: 'White Clay',
          namespace_id: 'lilis_pottery:white_clay',
          subtitle: 'Pale clay found in colder biomes, perfect for clean and bright pottery tones.',
          icon: '/assets/icons/pottery/white_clay.png',
          search: 'white clay snowy plains ice spikes snowy taiga frozen river swamp mangrove swamp',
          details: true,
          detailsTitle: 'Where to find',
          detailsText: `White Clay generates in snowy biomes and along Frozen Rivers. You can also find it in Swamps and Mangrove Swamps.`,
          detailsBullets: ['Snowy Plains, Ice Spikes, Snowy Taiga', 'Frozen Rivers', 'Swamps and Mangrove Swamps'],
          items: [
            {
              id: 'white_clay_ball',
              title: 'White Clay Ball',
              namespace_id: 'lilis_pottery:white_clay_ball',
              icon: '/assets/icons/pottery/white_clay_ball.png',
              search: 'white clay ball clay deposit'
            }
          ]
        },
        {
          id: 'blue_clay',
          title: 'Blue Clay',
          namespace_id: 'lilis_pottery:blue_clay',
          subtitle: 'Cool toned clay found in forests, windswept hills, and even deeper underground.',
          icon: '/assets/icons/pottery/blue_clay.png',
          search:
            'blue clay taiga old growth pine taiga old growth spruce taiga windswept hills windswept forest river swamp mangrove swamp lush caves',
          details: true,
          detailsTitle: 'Where to find',
          detailsText: `Blue Clay generates in Taiga regions, Windswept biomes, and along Rivers. It can also be found in Swamps and Mangrove Swamps, and has an additional deposit type in Lush Caves.`,
          detailsBullets: [
            'Taiga, Old Growth Pine Taiga, Old Growth Spruce Taiga',
            'Windswept Hills and Windswept Forest',
            'Rivers',
            'Swamps and Mangrove Swamps',
            'Lush Caves'
          ],
          items: [
            {
              id: 'blue_clay_ball',
              title: 'Blue Clay Ball',
              namespace_id: 'lilis_pottery:blue_clay_ball',
              icon: '/assets/icons/pottery/blue_clay_ball.png',
              search: 'blue clay ball clay deposit'
            }
          ]
        },
        {
          id: 'black_clay',
          title: 'Black Clay',
          namespace_id: 'lilis_pottery:black_clay',
          subtitle: 'Deep clay that feels at home in wetlands and muddy waterlogged ground.',
          icon: '/assets/icons/pottery/black_clay.png',
          search: 'black clay swamp mangrove swamp',
          details: true,
          detailsTitle: 'Where to find',
          detailsText: `Black Clay generates in Swamps and Mangrove Swamps.`,
          detailsBullets: ['Swamps', 'Mangrove Swamps'],
          items: [
            {
              id: 'black_clay_ball',
              title: 'Black Clay Ball',
              namespace_id: 'lilis_pottery:black_clay_ball',
              icon: '/assets/icons/pottery/black_clay_ball.png',
              search: 'black clay ball clay deposit'
            }
          ]
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Small features that round out the Pottery experience.',
      entries: [
        {
          id: 'clayworker',
          title: 'Clayworker Villager',
          subtitle: 'A new villager profession centered around clay and pottery.',
          icon: '/assets/icons/misc/emerald.png',
          search: 'clayworker villager pottery clay bricks pots',
          details: true,
          detailsTitle: 'Clayworker',
          detailsText: `Pottery introduces a new Villager profession: the Clayworker.

Clayworkers use the Pottery Table as their work station and focus on everything related to clay. They trade Clay, Bricks, and finished pottery pieces, making them a helpful source for both materials and decoration.`,
          detailsBullets: [
            'Uses the Pottery Table as work station',
            'Trades Clay, Bricks, and pottery pieces',
            'Helpful for building and decoration focused worlds'
          ]
        },
   {
     id: 'glazing',
     title: 'Glazing and Coloring',
     subtitle: 'Experiment with colors and give your pottery a finished look.',
     icon: '/assets/icons/pottery/honeycomb.png',
     search: 'pottery glazing dye mixing honeycomb brush kiln firing colors glow',
     details: true,
     detailsTitle: 'Glazing',
     detailsText: `All pottery pieces can be colored and fired in the Kiln.

Colors can be layered by firing a piece multiple times, allowing you to mix shades and discover unique variations along the way. For a finished look, painted pottery can be glazed using Honeycomb. Glazing only has a visible effect on certain colors and enhances their surface with a subtle sheen.

Each application of Honeycomb increases the glaze strength by 0.25, up to a maximum of 2.0. Once the maximum strength is reached, additional Honeycomb can no longer be applied.

If you want to start fresh, a Brush can be used to remove the color again.`,
     detailsBullets: [
       'Pottery can be colored and fired in the Kiln',
       'Colors can be mixed through repeated firing',
       'Glazing only affects certain colors visually',
       'Each Honeycomb application adds 0.25 glaze strength',
       'Glaze strength is capped at 2.0',
       'Colors can be removed using a Brush'
     ]
   }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'A closer look at how everything comes together ingame',
  impressions: [
    {
      src: '/assets/impressions/pottery/01.png',
      caption: 'Lili’s Bloom Shop'
    },
    {
      src: '/assets/impressions/pottery/02.png',
      caption: 'Lili’s Statue'
    },
    {
      src: '/assets/impressions/pottery/03.png',
      caption: 'A pottery kiln'
    },
    {
      src: '/assets/impressions/pottery/04.png',
      caption: 'Decorative planters'
    },
    {
      src: '/assets/impressions/pottery/05.png',
      caption: 'A small pottery shop'
    },
    {
      src: '/assets/impressions/pottery/06.png',
      caption: 'Another pottery shop'
    }
  ]
}