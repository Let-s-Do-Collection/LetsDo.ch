export default {
  slug: 'beachparty',
  title: 'Beachparty',
  logo: '/assets/mod-logos/beachparty.png',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Summer decor, beach furniture, and playful outdoor elements',
  aboutText: `Welcome to the Beachparty Wiki.

This is your home for blocks, items, and mechanics added by Beachparty.

Beachparty focuses on warm weather building materials, beach furniture, and playful decorative elements for coasts and summer environments.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Blocks used for simple item processing.',
      entries: [
        {
          id: 'palm_bar',
          title: 'Palm Bar',
          namespace_id: 'beachparty:palm_bar',
          subtitle: 'A bar counter used for mixing drinks and [[Cocktails|cocktails]].',
          icon: '/assets/icons/beachparty/palm_bar.png',
          search: 'palm bar cocktails drinks mixing',
          details: true,
          detailsTitle: 'Mixing Drinks',
          detailsText: `The Palm Bar works as a simple mixing station for drinks and cocktails.

It provides multiple input slots for ingredients and a single output slot for the finished drink.`,
          detailsBullets: [
            'Four input slots for ingredients',
            'One output slot for the finished drink',
            'Used to mix cocktails and drinks',
            'Works similar to other multi-ingredient stations'
          ]
        },
        {
          id: 'mini_fridge',
          title: 'Mini Fridge',
          namespace_id: 'beachparty:mini_fridge',
          subtitle: 'A small cooling station for certain items into chilled results.',
          icon: '/assets/icons/beachparty/mini_fridge.png',
          search: 'mini fridge cooling ice processing',
          details: true,
          detailsTitle: 'Cooling',
          detailsText: `The Mini Fridge is a simple processing block with one input slot and one output slot.

  Items placed inside are cooled over time and converted into their chilled variants.`,
          detailsBullets: [
            'One input slot and one output slot',
            'Processes items over time',
            'Used to create chilled items',
            'Water Potions can be turned into Ice'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Building blocks and furniture.',
      entries: [
        {
          id: 'palm',
          title: 'Palm',
          namespace_id: 'beachparty:palm_log',
          subtitle: 'A complete wood building set including all standard block variants.',
          icon: '/assets/icons/beachparty/palm_log.png',
          search: 'palm wood set log planks door trapdoor beachparty',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Palm is a complete wood building set used across Beachparty builds.

        Palm Trees generate naturally as a world feature. See [[Palm Trees|palm_trees]].`,
          detailsBullets: ['Full wood set with matching variants'],
          items: [
            {
              id: 'palm_planks',
              title: 'Palm Planks',
              namespace_id: 'beachparty:palm_planks',
              icon: '/assets/icons/beachparty/palm_planks.png'
            },
            {
              id: 'palm_door',
              title: 'Palm Door',
              namespace_id: 'beachparty:palm_door',
              icon: '/assets/icons/beachparty/palm_door.png'
            },
            {
              id: 'palm_trapdoor',
              title: 'Palm Trapdoor',
              namespace_id: 'beachparty:palm_trapdoor',
              icon: '/assets/icons/beachparty/palm_trapdoor.png'
            }
          ]
        },
        {
          id: 'wet_hay',
          title: 'Wet Hay Bale',
          namespace_id: 'beachparty:wet_hay_block',
          subtitle: 'A damp hay variant that dries over time.',
          icon: '/assets/icons/beachparty/wet_hay_block.png',
          search: 'wet hay bale thatch hay water drying',
          details: true,
          detailsTitle: 'Creation and Drying',
          detailsText: `Particles indicate whether the block is wet.

When placed under open sky, it dries over time.`,
          detailsBullets: [
            'Created by adding water to a Hay Bale',
            'Particles indicate whether the block is wet',
            'Dries over time when placed under open sky',
            'In hot biomes, it dries into Thatch',
            'In other biomes, it dries back into a Hay Bale'
          ],
          items: [
            {
              id: 'thatch',
              title: 'Thatch',
              namespace_id: 'beachparty:thatch',
              icon: '/assets/icons/beachparty/thatch.png'
            },
            {
              id: 'thatch_stairs',
              title: 'Thatch Stairs',
              namespace_id: 'beachparty:thatch_stairs',
              icon: '/assets/icons/beachparty/thatch_stairs.png'
            },
            {
              id: 'thatch_slab',
              title: 'Thatch Slab',
              namespace_id: 'beachparty:thatch_slab',
              icon: '/assets/icons/beachparty/thatch_slab.png'
            }
          ]
        },
        {
          id: 'palm_table',
          title: 'Palm Table',
          namespace_id: 'beachparty:palm_table',
          subtitle: 'A simple wooden table for meals, drinks, and gatherings.',
          icon: '/assets/icons/beachparty/palm_table.png',
          search: 'table palm furniture beach'
        },
        {
          id: 'palm_cabinet',
          title: 'Palm Cabinet',
          namespace_id: 'beachparty:palm_cabinet',
          subtitle: 'A storage cabinet for keeping essentials close and tidy.',
          icon: '/assets/icons/beachparty/palm_cabinet.png',
          search: 'cabinet storage palm furniture'
        },
        {
          id: 'palm_chair',
          title: 'Palm Chair',
          namespace_id: 'beachparty:palm_chair',
          subtitle: 'A simple wooden chair for sitting down and staying a while.',
          icon: '/assets/icons/beachparty/palm_chair.png',
          search: 'chair seating palm furniture'
        },
        {
          id: 'beach_chair',
          title: 'Beach Chair',
          namespace_id: 'beachparty:beach_chair',
          subtitle: 'A laid-back chair for lazy afternoons by the water.',
          icon: '/assets/icons/beachparty/beach_chair.png',
          search: 'beach chair seating relax'
        },
        {
          id: 'hooded_beach_chair',
          title: 'Hooded Beach Chair',
          namespace_id: 'beachparty:hooded_beach_chair',
          subtitle: 'A covered beach chair that offers shade and a bit of privacy.',
          icon: '/assets/icons/beachparty/hooded_beach_chair.png',
          search: 'hooded beach chair seating shade'
        },
        {
          id: 'beach_sun_lounger',
          title: 'Beach Sun Lounger',
          namespace_id: 'beachparty:beach_sun_lounger',
          subtitle: 'A sun lounger made for doing absolutely nothing.',
          icon: '/assets/icons/beachparty/beach_sun_lounger.png',
          search: 'sun lounger beach seating relax'
        },
        {
          id: 'palm_bar_stool',
          title: 'Palm Bar Stool',
          namespace_id: 'beachparty:palm_bar_stool',
          subtitle: 'A tall stool made to go with the Palm Bar.',
          icon: '/assets/icons/beachparty/palm_bar_stool.png',
          search: 'bar stool palm furniture'
        },
        {
          id: 'beach_parasol',
          title: 'Beach Parasol',
          namespace_id: 'beachparty:beach_parasol',
          subtitle: 'A tall parasol you can open and close. Sneak-use with an empty hand to toggle it.',
          icon: '/assets/icons/beachparty/beach_parasol.png',
          search: 'parasol umbrella shade open close sneak toggle'
        },
        {
          id: 'beach_towel',
          title: 'Beach Towel',
          namespace_id: 'beachparty:beach_towel',
          subtitle:
            'A thin towel you can sleep on and maybe wake up with back pain. It does not set your respawn point.',
          icon: '/assets/icons/beachparty/beach_towel.png'
        },
        {
          id: 'sand_bucket',
          title: 'Sand Bucket',
          namespace_id: 'beachparty:sand_bucket_filled',
          subtitle: 'A bucket of sand for small builds, big dreams, and very serious sandcastles.',
          icon: '/assets/icons/beachparty/sand_bucket_filled.png',
          search: 'sand bucket sandcastle towers petrified water bottle zombie',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Place the Sand Bucket to start a Sandcastle.

        Use a Filled Sand Bucket on the Sandcastle to add towers.
        The clicked corner decides which tower is added.
        Use an Empty Sand Bucket on the Sandcastle to remove a tower and get a Filled Sand Bucket back.
        If the castle has no towers left, it gets picked up completely.

        Use a Water Potion on the Sandcastle to petrify it.
        Petrified sandcastles do not collapse from rain or being stepped on.

        Non-petrified sandcastles collapse when stepped on and turn into a Sand Pile.
        Rain can also wash them down into a Sand Pile.

        Sand Piles slow most living entities that walk through them.
        Turtles are not slowed.

        Zombies enjoy destroying sandcastles on sight.`,
          detailsBullets: [
            'Place to create a Sandcastle',
            'Filled Sand Bucket adds towers based on the clicked corner',
            'Empty Sand Bucket removes towers and returns sand',
            'Water Potion petrifies the castle',
            'Non-petrified castles collapse into a Sand Pile when stepped on or in rain',
            'Sand Piles slow most living entities, turtles are immune',
            'Zombies actively destroy sandcastles'
          ],
          items: [
            {
              id: 'sand_bucket_filled',
              title: 'Filled Sand Bucket',
              namespace_id: 'beachparty:sand_bucket_filled',
              icon: '/assets/icons/beachparty/sand_bucket_filled.png'
            },
            {
              id: 'sand_bucket_empty',
              title: 'Empty Sand Bucket',
              namespace_id: 'beachparty:sand_bucket_empty',
              icon: '/assets/icons/beachparty/sand_bucket_empty.png'
            }
          ]
        },

        {
          id: 'radio',
          title: 'Radio',
          namespace_id: 'beachparty:radio',
          subtitle: 'A small radio for tuning through stations and playing music.',
          icon: '/assets/icons/beachparty/radio.png',
          search: 'radio music station tune toggle',
          details: true,
          detailsTitle: 'Tuning and Controls',
          detailsText: `Use the Radio to tune through available stations and play music.

Use it normally to toggle playback or switch to the next station.
Sneak-use to stop the Radio.`,
          detailsBullets: [
            'Use to toggle playback and cycle stations',
            'Sneak-use to stop',
            'Shows a short "searching" state while tuning'
          ]
        },
        {
          id: 'beach_goal',
          title: 'Beach Goal',
          namespace_id: 'beachparty:beach_goal',
          subtitle:
            'Fancy a quick game of football? Score with a [[Beach Ball|beach_ball]] and enjoy a small celebratory firework.',
          icon: '/assets/icons/beachparty/beach_goal.png',
          search: 'beach goal football soccer beach ball firework'
        },
        {
          id: 'seashells',
          title: 'Seashells',
          namespace_id: 'beachparty:seashell',
          subtitle: 'Small beach shells hiding simple loot and the occasional surprise.',
          icon: '/assets/icons/beachparty/seashell.png',
          search: 'seashell loot beach mussel meat',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Seashells can be placed as a decorative block by sneak-right-clicking.

Breaking a placed Seashell drops a random selection of loot.

Possible contents include:

Food
• [[Raw Mussel Meat|raw_mussel_meat]]

Valuables
• Gold Ingot
• Emerald

Rare Finds
• Diamond`,
          detailsBullets: [
            'Sneak-right-click to place as a decorative block',
            'Breaking it drops loot from its loot table',
            'Common drop: Raw Mussel Meat',
            'Valuables can occasionally appear',
            'Very rare items can be found'
          ]
        },
        {
          id: 'beachparty_banner',
          title: 'Beachparty Banner',
          namespace_id: 'beachparty:beachparty_banner',
          subtitle: 'A reward banner for collecting all rare Beachparty items.',
          icon: '/assets/icons/beachparty/beachparty_banner.png',
          search: 'completionist banner reward beachparty water breathing',
          details: true,
          detailsTitle: 'Reward Effect',
          detailsText: `The Beachparty Banner is a special reward for collecting all rare Beachparty items.

Players standing nearby are granted Water Breathing as long as they remain within range.`,
          detailsBullets: [
            'Reward for collecting all rare Beachparty items',
            'Applies Water Breathing to nearby players',
            'Effect radius of 6 blocks',
            'Effect refreshes continuously while in range'
          ]
        }
      ]
    },

    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Wearables, tools, and utility items.',
      entries: [
        {
          id: 'beach_hat',
          title: 'Beach Hat',
          namespace_id: 'beachparty:beach_hat',
          subtitle: 'Wearable in a trinket slot. Reduces fire damage by 10%.',
          icon: '/assets/icons/beachparty/beach_hat.png',
          search: 'beach hat trinket wearable loot chest fire damage'
        },
        {
          id: 'sunglasses',
          title: 'Sunglasses',
          namespace_id: 'beachparty:sunglasses',
          subtitle: 'Wearable in a trinket slot. Reduces fire damage by 12%.',
          icon: '/assets/icons/beachparty/sunglasses.png',
          search: 'sunglasses trinket wearable loot chest fire damage'
        },
        {
          id: 'pool_noodle',
          title: 'Pool Noodle',
          namespace_id: 'beachparty:pool_noodle',
          subtitle: 'A classic pool noodle. Mostly for fun, questionable decisions included.',
          icon: '/assets/icons/beachparty/pool_noodle.png',
          search: 'pool noodle summer fun'
        },
        {
          id: 'trunks',
          title: 'Trunks',
          namespace_id: 'beachparty:trunks',
          subtitle: 'Wearable in a trinket slot. Increases swim speed by about 8%.',
          icon: '/assets/icons/beachparty/trunks.png',
          search: 'trunks trinket wearable loot chest swim speed'
        },
        {
          id: 'bikini',
          title: 'Bikini',
          namespace_id: 'beachparty:bikini',
          subtitle: 'Wearable in a trinket slot. Increases swim speed by about 8%.',
          icon: '/assets/icons/beachparty/bikini.png',
          search: 'bikini trinket wearable loot chest swim speed'
        },
        {
          id: 'crocs',
          title: 'Crocs',
          namespace_id: 'beachparty:crocs',
          subtitle: 'Wearable in a trinket slot. No bonuses, just confidence.',
          icon: '/assets/icons/beachparty/crocs.png',
          search: 'crocs trinket wearable loot chest'
        },
        {
          id: 'swim_wings',
          title: 'Swim Wings',
          namespace_id: 'beachparty:swim_wings',
          subtitle: 'Wearable in a trinket slot. Reduces fall damage by about 50%, with a cooldown.',
          icon: '/assets/icons/beachparty/swim_wings.png',
          search: 'swim wings trinket wearable loot chest fall damage'
        },
        {
          id: 'rubber_rings',
          title: 'Rubber Rings',
          subtitle: 'Wearable floaties for water travel and summer drip.',
          icon: '/assets/icons/beachparty/rubber_ring_blue.png',
          search: 'rubber ring trinket float water beachparty',
          details: true,
          detailsTitle: 'Trinket',
          detailsText: `Rubber Rings can be worn as Trinkets.

While in water, they keep you moving and help you stay afloat.`,
          detailsBullets: ['Wearable as a Trinket', 'Helps you float in water', 'Makes water travel smoother'],
          items: [
            {
              id: 'rubber_ring_blue',
              title: 'Rubber Ring (Blue)',
              namespace_id: 'beachparty:rubber_ring_blue',
              icon: '/assets/icons/beachparty/rubber_ring_blue.png',
              search: 'rubber ring blue trinket'
            },
            {
              id: 'rubber_ring_pink',
              title: 'Rubber Ring (Pink)',
              namespace_id: 'beachparty:rubber_ring_pink',
              icon: '/assets/icons/beachparty/rubber_ring_pink.png',
              search: 'rubber ring pink trinket'
            },
            {
              id: 'rubber_ring_stripped',
              title: 'Rubber Ring (Striped)',
              namespace_id: 'beachparty:rubber_ring_stripped',
              icon: '/assets/icons/beachparty/rubber_ring_stripped.png',
              search: 'rubber ring striped trinket'
            },
            {
              id: 'rubber_ring_pelican',
              title: 'Rubber Ring (Pelican)',
              namespace_id: 'beachparty:rubber_ring_pelican',
              icon: '/assets/icons/beachparty/rubber_ring_pelican.png',
              search: 'rubber ring pelican trinket'
            },
            {
              id: 'rubber_ring_axolotl',
              title: 'Rubber Ring (Axolotl)',
              namespace_id: 'beachparty:rubber_ring_axolotl',
              icon: '/assets/icons/beachparty/rubber_ring_axolotl.png',
              search: 'rubber ring axolotl trinket'
            }
          ]
        },
        {
          id: 'beach_ball',
          title: 'Beach Ball',
          namespace_id: 'beachparty:beach_ball',
          subtitle: 'A throwable beach ball for games, chaos, and very serious competitions.',
          icon: '/assets/icons/beachparty/beach_ball.png',
          search: 'beach ball toy throwable'
        },
        {
          id: 'music_discs',
          title: 'Music Discs',
          subtitle: 'Rare tracks you can find as loot, and play in a Jukebox.',
          icon: '/assets/icons/misc/music.png',
          search: 'music disc loot jukebox beachparty rare',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `These music discs are available as loot.

Pop them into a Jukebox and let the beach vibes do their job.`,
          detailsBullets: ['Found as loot', 'Playable in a Jukebox', 'Rare collectibles'],
          musicdisc: true,
          tracks: [
            {
              id: 'beachparty',
              title: 'Beachparty',
              subtitle: 'Kevin MacLeod',
              icon: '/assets/icons/beachparty/music_disc_beachparty.png',
              src: '/assets/music/beachparty/beachparty_kevin_macleod.ogg'
            },
            {
              id: 'caribbean_beach',
              title: 'Caribbean Beach',
              subtitle: 'Pecan Pie',
              icon: '/assets/icons/beachparty/music_disc_caribbean_beach.png',
              src: '/assets/music/beachparty/caribbeanbeach_pecan_pie.ogg'
            },
            {
              id: 'pridelands',
              title: 'Pridelands',
              subtitle: 'Andey Rossi',
              icon: '/assets/icons/beachparty/music_disc_pridelands.png',
              src: '/assets/music/beachparty/pridelands_andey_rossi.ogg'
            },
            {
              id: 'vocalista',
              title: 'Vocalista',
              subtitle: 'Pecan Pie',
              icon: '/assets/icons/beachparty/music_disc_vocalista.png',
              src: '/assets/music/beachparty/vocalista_pecan_pie.ogg'
            },
            {
              id: 'wild_veins',
              title: 'Wild Veins',
              subtitle: 'Adams',
              icon: '/assets/icons/beachparty/music_disc_wild_veins.png',
              src: '/assets/music/beachparty/wildveins_adams.ogg'
            },
            {
              id: 'over_the_rainbow',
              title: 'Over the Rainbow',
              subtitle: 'MissLilitu',
              icon: '/assets/icons/beachparty/overgrown_disc.png',
              src: '/assets/music/beachparty/over_the_rainbow.ogg'
            }
          ],
          items: [
            {
              id: 'music_disc_beachparty',
              title: 'Music Disc: Beachparty',
              namespace_id: 'beachparty:music_disc_beachparty',
              icon: '/assets/icons/beachparty/music_disc_beachparty.png',
              search: 'music disc beachparty loot'
            },
            {
              id: 'music_disc_caribbean_beach',
              title: 'Music Disc: Caribbean Beach',
              namespace_id: 'beachparty:music_disc_caribbean_beach',
              icon: '/assets/icons/beachparty/music_disc_caribbean_beach.png',
              search: 'music disc caribbean beach loot'
            },
            {
              id: 'music_disc_pridelands',
              title: 'Music Disc: Pridelands',
              namespace_id: 'beachparty:music_disc_pridelands',
              icon: '/assets/icons/beachparty/music_disc_pridelands.png',
              search: 'music disc pridelands loot'
            },
            {
              id: 'music_disc_vocalista',
              title: 'Music Disc: Vocalista',
              namespace_id: 'beachparty:music_disc_vocalista',
              icon: '/assets/icons/beachparty/music_disc_vocalista.png',
              search: 'music disc vocalista loot'
            },
            {
              id: 'music_disc_wild_veins',
              title: 'Music Disc: Wild Veins',
              namespace_id: 'beachparty:music_disc_wild_veins',
              icon: '/assets/icons/beachparty/music_disc_wild_veins.png',
              search: 'music disc wild veins loot'
            },
            {
              id: 'overgrown_disc',
              title: 'Music Disc: Over the Rainbow',
              namespace_id: 'beachparty:overgrown_disc',
              icon: '/assets/icons/beachparty/overgrown_disc.png',
              search: 'music disc over the rainbow loot'
            }
          ]
        }
      ]
    },

    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'Food and drinks.',
      entries: [
        {
          id: 'coconut',
          title: 'Coconuts',
          namespace_id: 'beachparty:coconut',
          subtitle:
            'Coconuts can grow hanging below Palm Leaves. Bone meal Palm Leaves to spawn a young coconut underneath.',
          icon: '/assets/icons/beachparty/palm_leaves.png',
          search: 'coconut palm leaves hanging coconut bonemeal beachparty',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Growth',
          detailsText: `Coconuts can appear below Palm Leaves when there is air underneath.

Using bone meal on Palm Leaves places a young coconut directly below it.`,
          detailsBullets: [
            'Grows below Palm Leaves if the block underneath is air',
            'Bone meal on Palm Leaves spawns a young coconut underneath'
          ],
          items: [
            {
              id: 'palm_leaves',
              title: 'Palm Leaves',
              namespace_id: 'beachparty:palm_leaves',
              icon: '/assets/icons/beachparty/palm_leaves.png',
              search: 'palm leaves coconut growth bonemeal'
            },
            {
              id: 'coconut_item',
              title: 'Coconut',
              namespace_id: 'beachparty:coconut',
              icon: '/assets/icons/beachparty/coconut.png',
              search: 'coconut item'
            },
            {
              id: 'coconut_open',
              title: 'Opened Coconut',
              namespace_id: 'beachparty:coconut_open',
              icon: '/assets/icons/beachparty/coconut_open.png',
              search: 'opened coconut food'
            }
          ]
        },
        {
          id: 'mussel_meat',
          title: 'Mussel Meat',
          namespace_id: 'beachparty:raw_mussel_meat',
          subtitle: 'Mussel Meat can be obtained from [[Seashells|seashells]] and prepared for food.',
          icon: '/assets/icons/beachparty/raw_mussel_meat.png',
          search: 'mussel meat seashell food raw cooked',
          details: true,
          detailsTitle: 'Obtaining and Cooking',
          detailsText: `Mussel Meat is obtained by processing [[Seashells|seashells]].

It can be cooked to create Cooked Mussel Meat.`,
          detailsBullets: ['Obtained from Seashells', 'Can be cooked for better food value'],
          items: [
            {
              id: 'raw_mussel_meat',
              title: 'Raw Mussel Meat',
              namespace_id: 'beachparty:raw_mussel_meat',
              icon: '/assets/icons/beachparty/raw_mussel_meat.png',
              search: 'raw mussel meat'
            },
            {
              id: 'cooked_mussel_meat',
              title: 'Cooked Mussel Meat',
              namespace_id: 'beachparty:cooked_mussel_meat',
              icon: '/assets/icons/beachparty/cooked_mussel_meat.png',
              search: 'cooked mussel meat'
            }
          ]
        },
        {
          id: 'cocktails',
          title: 'Cocktails',
          subtitle: 'Placeable drinks mixed at the [[Palm Bar|palm_bar]]. Each cocktail grants a temporary effect.',
          icon: '/assets/icons/beachparty/coconut_cocktail.png',
          search: 'cocktail drinks effects palm bar',
          details: true,
          detailsTitle: 'Effects',
          detailsText: `Cocktails are mixed at the [[Palm Bar|palm_bar]] and placed as blocks.

       Each cocktail grants a specific status effect for 30 seconds.`,
          detailsBullets: [
            'Mixed at the Palm Bar',
            'Placed as drink blocks',
            'Each cocktail grants a 30 second effect'
          ],
          items: [
            {
              id: 'coconut_cocktail',
              title: 'Coconut Cocktail',
              namespace_id: 'beachparty:coconut_cocktail',
              subtitle: 'Grants Strength for 30 seconds.',
              icon: '/assets/icons/beachparty/coconut_cocktail.png',
              search: 'coconut cocktail strength'
            },
            {
              id: 'sweetberries_cocktail',
              title: 'Sweet Berries Cocktail',
              namespace_id: 'beachparty:sweetberries_cocktail',
              subtitle: 'Grants Absorption for 30 seconds.',
              icon: '/assets/icons/beachparty/sweetberries_cocktail.png',
              search: 'sweet berries cocktail absorption'
            },
            {
              id: 'cocoa_cocktail',
              title: 'Cocoa Cocktail',
              namespace_id: 'beachparty:cocoa_cocktail',
              subtitle: 'Grants Regeneration for 30 seconds.',
              icon: '/assets/icons/beachparty/cocoa_cocktail.png',
              search: 'cocoa cocktail regeneration'
            },
            {
              id: 'pumpkin_cocktail',
              title: 'Pumpkin Cocktail',
              namespace_id: 'beachparty:pumpkin_cocktail',
              subtitle: 'Grants Fire Resistance for 30 seconds.',
              icon: '/assets/icons/beachparty/pumpkin_cocktail.png',
              search: 'pumpkin cocktail fire resistance'
            },
            {
              id: 'honey_cocktail',
              title: 'Honey Cocktail',
              namespace_id: 'beachparty:honey_cocktail',
              subtitle: 'Grants Haste for 30 seconds.',
              icon: '/assets/icons/beachparty/honey_cocktail.png',
              search: 'honey cocktail haste'
            },
            {
              id: 'melon_cocktail',
              title: 'Melon Cocktail',
              namespace_id: 'beachparty:melon_cocktail',
              subtitle: 'Grants Luck for 30 seconds.',
              icon: '/assets/icons/beachparty/melon_cocktail.png',
              search: 'melon cocktail luck'
            }
          ]
        }
      ]
    },
    {
      id: 'worldgen',
      title: 'Worldgen and Natural Features',
      subtitle: 'Natural features that generate along beaches and coastal areas.',
      entries: [
        {
          id: 'sandwaves',
          title: 'Sandwaves',
          namespace_id: 'beachparty:sandwaves',
          subtitle: 'Sandwaves generate near water along beaches.',
          icon: '/assets/icons/beachparty/sandwaves.png',
          search: 'sandwaves beach water worldgen'
        },
        {
          id: 'seashells',
          title: 'Seashells',
          namespace_id: 'beachparty:seashells',
          subtitle: 'Seashells generate on sand blocks at beaches.',
          icon: '/assets/icons/beachparty/seashells.png',
          search: 'seashells beach sand worldgen'
        },
        {
          id: 'palm_trees',
          title: 'Palm Trees',
          namespace_id: 'beachparty:palm_sapling',
          subtitle: 'Palm Trees naturally generate along beaches. Their wood set is [[Palm|palm]].',
          icon: '/assets/icons/beachparty/palm_sapling.png',
          search: 'palm trees beach worldgen'
        },
        {
          id: 'message_in_a_bottle',
          title: 'Message in a Bottle',
          namespace_id: 'beachparty:message_in_a_bottle',
          subtitle: 'A tiny beach treasure that can appear on sandy shores.',
          icon: '/assets/icons/beachparty/message_in_a_bottle.png',
          search: 'message in a bottle beach loot shoreline sand spawn',
          details: true,
          detailsTitle: 'Spawning',
          detailsText: `Messages in a Bottle can spawn naturally on beaches.

    They appear on sand, close to where players are, and only up to a limited amount in the area.`,
          detailsBullets: [
            'Spawns naturally in beach biomes',
            'Appears on sand',
            'Spawns near players',
            'Limited amount per area'
          ]
        }
      ]
    },
    {
      id: 'misc',
      title: 'Miscellaneous',
      subtitle: 'Music and special blocks.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle:
            'Most gameplay features of Candlelight can be adjusted via a configuration file, usually located at `config/candlelight.json`.',
          icon: '/assets/icons/misc/config.png',
          search: 'config configuration settings options json beachparty'
        },
        {
          id: 'villager_profession',
          title: 'Sandy Merchant',
          subtitle: 'A beach loving trader offering tropical goods and summer essentials.',
          icon: '/assets/icons/misc/emerald.png',
          search: 'villager profession sandy merchant beachparty trades',
          details: true,
          detailsTitle: 'Sandy Merchant',
          detailsText: `The Sandy Merchant is a new Villager profession found near beaches.

       Using the Palm Bar as their work station, Sandy Merchants offer a wide range of beach themed items, from building materials and decor to food, tools, and collectibles.`,
          detailsBullets: [
            'Uses the [[Palm Bar|palm_bar]] as work station',
            'Sells beach themed blocks, decor, and items',
            'Offers food, tools, and collectibles',
            'Some trades include rare and exclusive items'
          ]
        }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'Beachparty ingame',
  impressions: []
}
