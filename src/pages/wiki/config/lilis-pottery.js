export default {
  slug: 'pottery',
  title: 'Lili\'s Pottery',
  logo: '/assets/mod-logos/lilis_pottery.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Clay, fire and handmade pottery',
  aboutText: `Lili's Pottery is about working with clay. Dig up coloured clay, shape it on the Pottery Table into pots, vases and urns, and fire it in the Kiln with the colours of your choice.

Fill your pots with flowers, glaze them with honeycomb, build with coloured bricks, and carry an Urn with you to keep your belongings safe when you die.

The Clayworker villager trades clay and pottery, and Lili's Statue waits for everyone who collects it all.`,
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
          subtitle: 'Shapes clay into pots, vases and urns, like a Stonecutter for clay.',
          icon: '/assets/icons/pottery/pottery_table.webp',
          search:
            'pottery table shaping station pottering recipe selection scroll list stonecutter clay shaping output',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Put clay into the Pottery Table and pick what you want to make from the list, just like with a Stonecutter. Take the result to use up the clay.

The Pottery Table is also the workstation of the [[Clayworker|clayworker]]. There is also Lili's Pottery Table, a fancier version.`,
          detailsBullets: [
            'One input slot and one output slot',
            'Choose the shape from a list',
            'Workstation of the Clayworker'
          ]
        },
        {
          id: 'kiln',
          title: 'Kiln',
          namespace_id: 'lilis_pottery:kiln',
          subtitle: 'Fires your pottery and burns colours into it for good.',
          icon: '/assets/icons/pottery/kiln.webp',
          search: 'kiln firing station fuel dye painted glaze preview pottery urn storage',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Put a pottery piece in the base slot, a Dye in the modifier slot if you want to colour it, and fuel in the fuel slot. The menu shows a live preview of the result.

Fire a piece several times with different dyes to mix new shades. See [[Glazing and Coloring|glazing]].`,
          detailsBullets: [
            'Base slot, dye slot, fuel slot and output slot',
            'Live preview of the finished piece',
            'Fire again with another dye to mix colours'
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
          subtitle: 'Coloured clay, the raw material for all pottery.',
          icon: '/assets/icons/pottery/red_clay_ball.webp',
          search: 'clay ball colored clay pottery red yellow white blue black',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Break the coloured [[clay deposits|red_clay]] to get Clay Balls in five colours. They are shaped on the [[Pottery Table|pottery_table]] and fired into Bricks.`,
          detailsBullets: [
            'Dropped by coloured clay',
            'Red, yellow, white, blue and black',
            'Shaped on the Pottery Table'
          ],
          items: [
            {
              id: 'red_clay_ball',
              title: 'Red Clay Ball',
              namespace_id: 'lilis_pottery:red_clay_ball',
              icon: '/assets/icons/pottery/red_clay_ball.webp',
              search: 'red clay ball pottery material'
            },
            {
              id: 'yellow_clay_ball',
              title: 'Yellow Clay Ball',
              namespace_id: 'lilis_pottery:yellow_clay_ball',
              icon: '/assets/icons/pottery/yellow_clay_ball.webp',
              search: 'yellow clay ball pottery material'
            },
            {
              id: 'white_clay_ball',
              title: 'White Clay Ball',
              namespace_id: 'lilis_pottery:white_clay_ball',
              icon: '/assets/icons/pottery/white_clay_ball.webp',
              search: 'white clay ball pottery material'
            },
            {
              id: 'blue_clay_ball',
              title: 'Blue Clay Ball',
              namespace_id: 'lilis_pottery:blue_clay_ball',
              icon: '/assets/icons/pottery/blue_clay_ball.webp',
              search: 'blue clay ball pottery material'
            },
            {
              id: 'black_clay_ball',
              title: 'Black Clay Ball',
              namespace_id: 'lilis_pottery:black_clay_ball',
              icon: '/assets/icons/pottery/black_clay_ball.webp',
              search: 'black clay ball pottery material'
            }
          ]
        },
        {
          id: 'bricks',
          title: 'Bricks',
          subtitle: 'Clay Balls fired in a furnace.',
          icon: '/assets/icons/pottery/red_brick.webp',
          search: 'brick pottery fired clay red yellow white blue black furnace smelting',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Smelt a Clay Ball in a Furnace to get a Brick of the same colour. Bricks are crafted into [[brick blocks|brick_blocks]].`,
          detailsBullets: [
            'Smelt Clay Balls in a Furnace',
            'Five colours',
            'Used for brick blocks'
          ],
          items: [
            {
              id: 'red_brick',
              title: 'Red Brick',
              namespace_id: 'lilis_pottery:red_brick',
              icon: '/assets/icons/pottery/red_brick.webp',
              search: 'red brick pottery material'
            },
            {
              id: 'yellow_brick',
              title: 'Yellow Brick',
              namespace_id: 'lilis_pottery:yellow_brick',
              icon: '/assets/icons/pottery/yellow_brick.webp',
              search: 'yellow brick pottery material'
            },
            {
              id: 'white_brick',
              title: 'White Brick',
              namespace_id: 'lilis_pottery:white_brick',
              icon: '/assets/icons/pottery/white_brick.webp',
              search: 'white brick pottery material'
            },
            {
              id: 'blue_brick',
              title: 'Blue Brick',
              namespace_id: 'lilis_pottery:blue_brick',
              icon: '/assets/icons/pottery/blue_brick.webp',
              search: 'blue brick pottery material'
            },
            {
              id: 'black_brick',
              title: 'Black Brick',
              namespace_id: 'lilis_pottery:black_brick',
              search: 'black brick pottery material'
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
          subtitle: 'Small pots for single flowers.',
          icon: '/assets/icons/pottery/white_cupella.webp',
          search: 'small flower pot pottery decor',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Small pots take any small flower. They look great on tables, shelves and windowsills.`,
          detailsBullets: [
            'Hold small flowers',
            'Plain or in five clay colours, and can be dyed in the Kiln'
          ],
          items: [
            {
              id: 'cupella',
              title: 'Cupella',
              icon: '/assets/icons/pottery/white_cupella.webp',
              search: 'cupella small flower pot pottery'
            },
            {
              id: 'bud_vase',
              title: 'Bud Vase',
              icon: '/assets/icons/pottery/yellow_bud_vase.webp',
              search: 'bud vase small flower pot pottery'
            },
            {
              id: 'planter',
              title: 'Planter',
              icon: '/assets/icons/pottery/red_planter.webp',
              search: 'planter small flower pot pottery'
            },
            {
              id: 'plant_bowl',
              title: 'Plant Bowl',
              icon: '/assets/icons/pottery/plant_bowl.webp',
              search: 'plant bowl small flower pot pottery'
            },
            {
              id: 'vase',
              title: 'Vase',
              icon: '/assets/icons/pottery/blue_vase.webp',
              search: 'vase small flower pot pottery'
            }
          ]
        },
        {
          id: 'large_flower_pots',
          title: 'Large Flower Pots',
          subtitle: 'Large pots for tall flowers.',
          icon: '/assets/icons/pottery/white_square_pot.webp',
          search: 'large flower pot tall flowers two block high pottery decor',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Large pots take two block tall flowers such as sunflowers, lilacs and peonies. Perfect next to doors and in corners.`,
          detailsBullets: [
            'Hold tall flowers',
            'Plain or in five clay colours, and can be dyed in the Kiln'
          ],
          items: [
            {
              id: 'square_pot',
              title: 'Square Pot',
              icon: '/assets/icons/pottery/white_square_pot.webp',
              search: 'square pot large flower pot pottery'
            },
            {
              id: 'garden_pot',
              title: 'Garden Pot',
              icon: '/assets/icons/pottery/black_garden_pot.webp',
              search: 'garden pot large flower pot pottery'
            }
          ]
        },
        {
          id: 'urns',
          title: 'Urns and Amphores',
          subtitle: 'Carry an Urn and your belongings are safe when you die.',
          icon: '/assets/icons/pottery/blue_amphore.webp',
          search: 'urn amphore death storage grave pottery painted glazed honeycomb',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `If you die with an Urn in your inventory, it is placed where you died and your whole inventory goes inside it. No scattered items, no despawning. Go back and collect everything from the Urn.

This does not happen when the keepInventory game rule is on.

Urns and Amphores also work as storage and can be coloured and glazed like other pottery.`,
          detailsBullets: [
            'Keep an Urn in your inventory',
            'On death it is placed with all your items inside',
            'Also works as storage',
            'Can be coloured and glazed'
          ],
          items: [
            {
              id: 'urn',
              title: 'Urn',
              icon: '/assets/icons/pottery/urn.webp',
              search: 'urn pottery storage painted glazed'
            },
            {
              id: 'amphore',
              title: 'Amphore',
              icon: '/assets/icons/pottery/blue_amphore.webp',
              search: 'amphore pottery storage painted glazed'
            }
          ]
        },
        {
          id: 'brick_blocks',
          title: 'Brick Blocks',
          subtitle: 'Coloured bricks for walls and floors.',
          icon: '/assets/icons/pottery/red_bricks.webp',
          search: 'brick blocks wall stairs slabs decorative pottery building',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Brick blocks come in the five clay colours, plus Handmade Bricks. Each has stairs, slabs, walls and a chiseled variant.`,
          detailsBullets: [
            'Five colours plus Handmade Bricks',
            'Stairs, slabs, walls and chiseled blocks'
          ],
          items: [
            {
              id: 'red_bricks',
              title: 'Red Bricks',
              icon: '/assets/icons/pottery/red_bricks.webp',
              search: 'red brick blocks wall stair slab'
            },
            {
              id: 'yellow_bricks',
              title: 'Yellow Bricks',
              icon: '/assets/icons/pottery/yellow_bricks.webp',
              search: 'yellow brick blocks wall stair slab'
            },
            {
              id: 'white_bricks',
              title: 'White Bricks',
              icon: '/assets/icons/pottery/white_bricks.webp',
              search: 'white brick blocks wall stair slab'
            },
            {
              id: 'blue_bricks',
              title: 'Blue Bricks',
              icon: '/assets/icons/pottery/blue_bricks.webp',
              search: 'blue brick blocks wall stair slab'
            },
            {
              id: 'black_bricks',
              title: 'Black Bricks',
              icon: '/assets/icons/pottery/black_bricks.webp',
              search: 'black brick blocks wall stair slab'
            }
          ]
        },
        {
          id: 'lilis_statue',
          title: "Lili's Statue",
          namespace_id: 'lilis_pottery:lilis_statue',
          subtitle: 'The reward for collecting all the pottery.',
          icon: '/assets/icons/pottery/lilis_statue.webp',
          search: 'completionist statue reward pottery all pots colors shapes firework interaction tooltip',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Collect all the pottery to receive Lili's Statue. Right click it to launch a firework that writes "Lili's Pottery" into the sky.`,
          detailsBullets: [
            'Reward for collecting all the pottery',
            'Right click for a firework show with a message'
          ]
        }
      ]
    },
    {
      id: 'worldgen',
      title: 'Clay Deposits and Worldgen',
      subtitle: 'Where to dig up coloured clay.',
      entries: [
        {
          id: 'red_clay',
          title: 'Red Clay',
          namespace_id: 'lilis_pottery:red_clay',
          subtitle: 'Warm red clay from the badlands and riverbeds.',
          icon: '/assets/icons/pottery/red_clay.webp',
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
              icon: '/assets/icons/pottery/red_clay_ball.webp',
              search: 'red clay ball clay deposit'
            }
          ]
        },
        {
          id: 'yellow_clay',
          title: 'Yellow Clay',
          namespace_id: 'lilis_pottery:yellow_clay',
          subtitle: 'Sunny yellow clay from savannas and rivers.',
          icon: '/assets/icons/pottery/yellow_clay.webp',
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
              icon: '/assets/icons/pottery/yellow_clay_ball.webp',
              search: 'yellow clay ball clay deposit'
            }
          ]
        },
        {
          id: 'white_clay',
          title: 'White Clay',
          namespace_id: 'lilis_pottery:white_clay',
          subtitle: 'Pale clay from snowy lands.',
          icon: '/assets/icons/pottery/white_clay.webp',
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
              icon: '/assets/icons/pottery/white_clay_ball.webp',
              search: 'white clay ball clay deposit'
            }
          ]
        },
        {
          id: 'blue_clay',
          title: 'Blue Clay',
          namespace_id: 'lilis_pottery:blue_clay',
          subtitle: 'Cool blue clay from taigas, windswept hills and lush caves.',
          icon: '/assets/icons/pottery/blue_clay.webp',
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
              icon: '/assets/icons/pottery/blue_clay_ball.webp',
              search: 'blue clay ball clay deposit'
            }
          ]
        },
        {
          id: 'black_clay',
          title: 'Black Clay',
          namespace_id: 'lilis_pottery:black_clay',
          subtitle: 'Dark clay from the swamps.',
          icon: '/assets/icons/pottery/black_clay.webp',
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
              icon: '/assets/icons/pottery/black_clay_ball.webp',
              search: 'black clay ball clay deposit'
            }
          ]
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Villagers, colours and a little secret.',
      entries: [
        {
          id: 'clayworker',
          title: 'Clayworker Villager',
          subtitle: 'A villager who trades clay, bricks and pottery.',
          icon: '/assets/icons/misc/emerald.webp',
          search: 'clayworker villager pottery clay bricks pots',
          details: true,
          detailsTitle: 'Clayworker',
          detailsText: `Villagers who claim a [[Pottery Table|pottery_table]] become Clayworkers. They trade clay, bricks and finished pottery.`,
          detailsBullets: [
            'Uses the Pottery Table as workstation',
            'Trades clay, bricks and pottery'
          ]
        },
        {
          id: 'glazing',
          title: 'Glazing and Coloring',
          subtitle: 'Mix colours in the Kiln and give your pottery a glossy finish.',
          icon: '/assets/icons/pottery/honeycomb.webp',
          search: 'pottery glazing dye mixing honeycomb brush kiln firing colors glow',
          details: true,
          detailsTitle: 'Glazing',
          detailsText: `Fire pottery in the [[Kiln|kiln]] with a dye to colour it. Fire it again with another dye to mix the colours and discover new shades.

Use Honeycomb on coloured pottery to glaze it. Every Honeycomb makes the glaze a little stronger, up to eight layers. Glaze only shows on some colours.

To start over, brush the colour off with a Brush.`,
          detailsBullets: [
            'Pottery can be colored and fired in the Kiln',
            'Colors can be mixed through repeated firing',
            'Glazing only affects certain colors visually',
            'Honeycomb glazes coloured pottery, up to eight times',
            'Colors can be removed using a Brush'
          ]
        },
        {
          id: 'dripstone_clay',
          title: 'Dripping Clay',
          subtitle: 'Water dripping through dyed terracotta slowly turns sand, gravel and clay into coloured clay.',
          icon: '/assets/icons/pottery/blue_clay.webp',
          search: 'dripstone terracotta water sand gravel clay coloured farm renewable',
          details: true,
          detailsTitle: 'How it works',
          detailsText: `Build a small drip: water on top, a block of red, yellow, white, blue or black terracotta below it, then a pointed dripstone hanging down. Leave one block of air and put sand, gravel or clay underneath.

Over time the dripping water turns the block at the bottom into clay of the terracotta's colour. A renewable source of coloured clay.`,
          detailsBullets: [
            'Water, then terracotta, then pointed dripstone',
            'One block of air',
            'Sand, gravel or clay at the bottom',
            'Turns into clay of the terracotta colour'
          ]
        }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'A closer look at how everything comes together in game',
  impressions: [
    {
      src: '/assets/impressions/pottery/01.webp',
      caption: 'Lili\'s Bloom Shop'
    },
    {
      src: '/assets/impressions/pottery/02.webp',
      caption: 'Lili\'s Statue'
    },
    {
      src: '/assets/impressions/pottery/03.webp',
      caption: 'A pottery kiln'
    },
    {
      src: '/assets/impressions/pottery/04.webp',
      caption: 'Decorative planters'
    },
    {
      src: '/assets/impressions/pottery/05.webp',
      caption: 'A small pottery shop'
    },
    {
      src: '/assets/impressions/pottery/06.webp',
      caption: 'Another pottery shop'
    }
  ]
}
