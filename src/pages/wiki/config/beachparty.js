export default {
  slug: 'beachparty',
  title: 'Beachparty',
  logo: '/assets/mod-logos/beachparty.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Palm trees, cocktails and a day at the beach',
  aboutText: `Beachparty turns every beach into a holiday spot.

Palm trees with coconuts, sand waves and seashells appear along the coast. Mix cocktails at the Palm Bar, build sandcastles, kick a beach ball into the goal, and relax in a beach chair under a parasol.

Swimwear, rubber rings and other beach gear hide in shipwrecks, ocean ruins and buried treasure, and the Sandy Merchant sells everything else you need for summer.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Mixing drinks and keeping things cool.',
      entries: [
        {
          id: 'palm_bar',
          title: 'Palm Bar',
          namespace_id: 'beachparty:palm_bar',
          subtitle: 'A bar counter for mixing [[cocktails|cocktails]].',
          icon: '/assets/icons/beachparty/palm_bar.webp',
          search: 'palm bar cocktails drinks mixing shake sandy merchant',
          details: true,
          detailsTitle: 'Mixing Drinks',
          detailsText: `Put the ingredients into the four input slots. The bar shakes the drink for a moment and then serves the finished cocktail in the output slot.

The Palm Bar is also the workstation of the [[Sandy Merchant|villager_profession]].`,
          detailsBullets: [
            'Four ingredient slots and one output slot',
            'Each drink is shaken for a few seconds',
            'Workstation of the Sandy Merchant'
          ]
        },
        {
          id: 'mini_fridge',
          title: 'Mini Fridge',
          namespace_id: 'beachparty:mini_fridge',
          subtitle: 'A small fridge that freezes water into ice.',
          icon: '/assets/icons/beachparty/mini_fridge.webp',
          search: 'mini fridge freezing ice packed blue powder snow water bottle',
          details: true,
          detailsTitle: 'Freezing',
          detailsText: `The Mini Fridge has one input and one output slot. Whatever you put in slowly freezes.`,
          detailsBullets: [
            'Water Bottle becomes Ice (60 seconds)',
            'Ice becomes Packed Ice (60 seconds)',
            'Packed Ice becomes Blue Ice (40 seconds)',
            'Water Bucket becomes a Powder Snow Bucket (30 seconds)'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Building materials and beach furniture.',
      entries: [
        {
          id: 'palm',
          title: 'Palm',
          namespace_id: 'beachparty:palm_log',
          subtitle: 'A full wood set from the palm trees along the beach.',
          icon: '/assets/icons/beachparty/palm_log.webp',
          search: 'palm wood set log planks floorboard door trapdoor glass sign boat torch beachparty',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Palm wood comes from [[Palm Trees|palm_trees]]. Besides the usual logs, planks, stairs, slabs, fences, gates, doors, trapdoors, buttons and pressure plates, the set also includes Palm Floorboards, Palm Glass and panes, signs, hanging signs, boats and chest boats.

Palm Torches and tall tiki-style torches light up the beach at night.`,
          detailsBullets: [
            'Complete wood set with signs and boats',
            'Palm Floorboards and Palm Glass',
            'Palm Torches and tall torches'
          ],
          items: [
            {
              id: 'palm_planks',
              title: 'Palm Planks',
              namespace_id: 'beachparty:palm_planks',
              icon: '/assets/icons/beachparty/palm_planks.webp'
            },
            {
              id: 'palm_door',
              title: 'Palm Door',
              namespace_id: 'beachparty:palm_door',
              icon: '/assets/icons/beachparty/palm_door.webp'
            },
            {
              id: 'palm_trapdoor',
              title: 'Palm Trapdoor',
              namespace_id: 'beachparty:palm_trapdoor',
              icon: '/assets/icons/beachparty/palm_trapdoor.webp'
            }
          ]
        },
        {
          id: 'wet_hay',
          title: 'Wet Hay Block',
          namespace_id: 'beachparty:wet_hay_block',
          subtitle: 'Soaked hay that dries into Thatch in hot places.',
          icon: '/assets/icons/beachparty/wet_hay_block.webp',
          search: 'wet hay bale block thatch water drying clay hot biome',
          details: true,
          detailsTitle: 'Creation and Drying',
          detailsText: `A Hay Bale that touches water turns into a Wet Hay Block. It drips while it is wet.

Under open sky it slowly dries. In hot biomes such as deserts, savannas, badlands and beaches it becomes Thatch, and anywhere else it turns back into a Hay Bale. In the Nether it dries into Thatch immediately.

Use Clay on it to stop it from drying, and a Water Bottle to let it dry again.`,
          detailsBullets: [
            'Hay Bales get wet when they touch water',
            'Only dries under open sky',
            'Hot biomes: dries into Thatch',
            'Other biomes: dries back into a Hay Bale',
            'Clay stops drying, a Water Bottle resumes it'
          ],
          items: [
            {
              id: 'thatch',
              title: 'Thatch',
              namespace_id: 'beachparty:thatch',
              icon: '/assets/icons/beachparty/thatch.webp'
            },
            {
              id: 'thatch_stairs',
              title: 'Thatch Stairs',
              namespace_id: 'beachparty:thatch_stairs',
              icon: '/assets/icons/beachparty/thatch_stairs.webp'
            },
            {
              id: 'thatch_slab',
              title: 'Thatch Slab',
              namespace_id: 'beachparty:thatch_slab',
              icon: '/assets/icons/beachparty/thatch_slab.webp'
            }
          ]
        },
        {
          id: 'palm_table',
          title: 'Palm Table',
          namespace_id: 'beachparty:palm_table',
          subtitle: 'A wooden table for beach bars and terraces.',
          icon: '/assets/icons/beachparty/palm_table.webp',
          search: 'table palm furniture beach',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `A decorative table made from palm wood. Add [[Palm Chairs|palm_chair]] or [[Bar Stools|palm_bar_stool]] around it.`,
          detailsBullets: [
            'Decorative table'
          ]
        },
        {
          id: 'palm_cabinet',
          title: 'Palm Cabinet',
          namespace_id: 'beachparty:palm_cabinet',
          subtitle: 'A palm wood cabinet with 36 slots of storage.',
          icon: '/assets/icons/beachparty/palm_cabinet.webp',
          search: 'cabinet storage palm furniture',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to open its 36 slots. Handy behind the bar.`,
          detailsBullets: [
            'Right click to open',
            '36 storage slots'
          ]
        },
        {
          id: 'palm_chair',
          title: 'Palm Chair',
          namespace_id: 'beachparty:palm_chair',
          subtitle: 'A simple palm wood chair.',
          icon: '/assets/icons/beachparty/palm_chair.webp',
          search: 'chair seating palm furniture',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to sit down. Goes well with the [[Palm Table|palm_table]].`,
          detailsBullets: [
            'Right click to sit'
          ]
        },
        {
          id: 'beach_chair',
          title: 'Beach Chair',
          namespace_id: 'beachparty:beach_chair',
          subtitle: 'A folding chair for lazy afternoons by the water.',
          icon: '/assets/icons/beachparty/beach_chair.webp',
          search: 'beach chair seating relax',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to sit down. Put a [[Beach Parasol|beach_parasol]] next to it for some shade.`,
          detailsBullets: [
            'Right click to sit'
          ]
        },
        {
          id: 'hooded_beach_chair',
          title: 'Hooded Beach Chair',
          namespace_id: 'beachparty:hooded_beach_chair',
          subtitle: 'A roofed wicker beach chair, sheltered from sun and wind.',
          icon: '/assets/icons/beachparty/hooded_beach_chair.webp',
          search: 'hooded beach chair strandkorb seating shade',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The classic roofed beach chair of the northern coasts. Right click to sit down.`,
          detailsBullets: [
            'Right click to sit'
          ]
        },
        {
          id: 'beach_sun_lounger',
          title: 'Beach Sun Lounger',
          namespace_id: 'beachparty:beach_sun_lounger',
          subtitle: 'A sun lounger made for doing absolutely nothing.',
          icon: '/assets/icons/beachparty/beach_sun_lounger.webp',
          search: 'sun lounger beach sleep relax backrest',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Sneak and right click the head end to fold the backrest up or down. With the backrest down, right click to lie down and sleep through the night, just like in a bed.`,
          detailsBullets: [
            'Sneak right click the head end to move the backrest',
            'Lie down when the backrest is down',
            'Lets you sleep through the night'
          ]
        },
        {
          id: 'palm_bar_stool',
          title: 'Palm Bar Stool',
          namespace_id: 'beachparty:palm_bar_stool',
          subtitle: 'A tall stool to go with the Palm Bar.',
          icon: '/assets/icons/beachparty/palm_bar_stool.webp',
          search: 'bar stool palm furniture',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to sit down at the [[Palm Bar|palm_bar]].`,
          detailsBullets: [
            'Right click to sit'
          ]
        },
        {
          id: 'beach_parasol',
          title: 'Beach Parasol',
          namespace_id: 'beachparty:beach_parasol',
          subtitle: 'A tall parasol you can open and close.',
          icon: '/assets/icons/beachparty/beach_parasol.webp',
          search: 'parasol umbrella shade open close sneak toggle',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Sneak and right click with an empty hand to open or close the parasol.`,
          detailsBullets: [
            'Two blocks tall',
            'Sneak right click with an empty hand to open or close it'
          ]
        },
        {
          id: 'beach_towel',
          title: 'Beach Towel',
          namespace_id: 'beachparty:beach_towel',
          subtitle: 'A thin towel to sleep on. You might wake up with back pain.',
          icon: '/assets/icons/beachparty/beach_towel.webp',
          search: 'beach towel sleep respawn beach',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the towel to lie down and skip the night. It works like a bed, so it also sets your spawn point.`,
          detailsBullets: [
            'Right click to sleep',
            'Works like a bed'
          ]
        },
        {
          id: 'sand_bucket',
          title: 'Sand Bucket',
          namespace_id: 'beachparty:sand_bucket_filled',
          subtitle: 'A bucket for small builds, big dreams, and very serious sandcastles.',
          icon: '/assets/icons/beachparty/sand_bucket_filled.webp',
          search: 'sand bucket sandcastle towers petrified water bottle zombie sand pile',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Right click sand with an Empty Sand Bucket to fill it. Right click the ground with a Filled Sand Bucket to build a Sandcastle. Sneak while clicking to place the bucket itself as decoration.

Use a Filled Sand Bucket on a corner of the castle to add a tower there, and an Empty Sand Bucket to take one away again. A castle without towers can be scooped up completely.

Sandcastles are fragile. Stepping on one or rain turns it into a Sand Pile, which slows down anything that walks through it, except turtles. Pour a Water Bottle over a castle to harden it.

Zombies love to wreck sandcastles and will seek them out, even hardened ones.`,
          detailsBullets: [
            'Empty bucket on sand to fill it',
            'Filled bucket on the ground builds a Sandcastle',
            'Add or remove towers corner by corner',
            'Water Bottle hardens the castle',
            'Stepping on it or rain turns it into a Sand Pile',
            'Sand Piles slow everything except turtles',
            'Zombies hunt down sandcastles'
          ],
          items: [
            {
              id: 'sand_bucket_filled',
              title: 'Filled Sand Bucket',
              namespace_id: 'beachparty:sand_bucket_filled',
              icon: '/assets/icons/beachparty/sand_bucket_filled.webp'
            },
            {
              id: 'sand_bucket_empty',
              title: 'Empty Sand Bucket',
              namespace_id: 'beachparty:sand_bucket_empty',
              icon: '/assets/icons/beachparty/sand_bucket_empty.webp'
            }
          ]
        },
        {
          id: 'radio',
          title: 'Radio',
          namespace_id: 'beachparty:radio',
          subtitle: 'A little radio that plays beach tunes.',
          icon: '/assets/icons/beachparty/radio.webp',
          search: 'radio music station tune toggle',
          details: true,
          detailsTitle: 'Tuning and Controls',
          detailsText: `Right click the Radio to switch it on. Every further click tunes to the next station. Sneak and right click to switch it off.`,
          detailsBullets: [
            'Right click to switch on and change stations',
            'Sneak right click to switch off',
            'Crackles briefly while tuning'
          ]
        },
        {
          id: 'beach_goal',
          title: 'Beach Goal',
          namespace_id: 'beachparty:beach_goal',
          subtitle: 'Fancy a quick game of football? Kick a [[Beach Ball|beach_ball]] into the goal and celebrate with fireworks.',
          icon: '/assets/icons/beachparty/beach_goal.webp',
          search: 'beach goal football soccer beach ball firework',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `When a [[Beach Ball|beach_ball]] rolls into the goal, a small firework goes off. Set up two goals facing each other for a proper match.`,
          detailsBullets: [
            'Score with a Beach Ball',
            'Fires a firework on every goal'
          ]
        },
        {
          id: 'seashells',
          title: 'Seashells',
          namespace_id: 'beachparty:seashell',
          subtitle: 'Shells from the beach, sometimes with something hidden inside.',
          icon: '/assets/icons/beachparty/seashell.webp',
          search: 'seashell loot beach mussel meat gold emerald diamond',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Seashells lie on sandy beaches. Break them to collect them.

Right click a block to place a Seashell as decoration, or right click in the air to open it and see what is inside:

- [[Raw Mussel Meat|raw_mussel_meat]]
- Gold Ingots or Emeralds
- very rarely a Diamond`,
          detailsBullets: [
            'Found on beaches',
            'Place it on a block as decoration',
            'Right click in the air to open it',
            'Usually Mussel Meat, sometimes gold, emeralds or a diamond'
          ]
        },
        {
          id: 'beachparty_banner',
          title: 'Completionist Banner',
          namespace_id: 'beachparty:beachparty_banner',
          subtitle: 'The reward for collecting all beach artifacts and cocktails.',
          icon: '/assets/icons/beachparty/beachparty_banner.webp',
          search: 'completionist banner reward beachparty water breathing',
          details: true,
          detailsTitle: 'Reward Effect',
          detailsText: `Collect all beach artifacts and cocktails to complete the final advancement and receive the Completionist Banner.

Once placed, it lets every player within six blocks breathe underwater.`,
          detailsBullets: [
            'Reward for collecting all artifacts and cocktails',
            'Gives Water Breathing within 6 blocks',
            'Can be copied at a Smithing Table'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Swimwear, beach gear and toys.',
      entries: [
        {
          id: 'beach_hat',
          title: 'Beach Hat',
          namespace_id: 'beachparty:beach_hat',
          subtitle: 'A straw hat that reduces fire damage by 10%.',
          icon: '/assets/icons/beachparty/beach_hat.webp',
          search: 'beach hat trinket curios wearable loot chest fire damage',
          details: true,
          detailsTitle: 'Wearable',
          detailsText: `Worn in a Trinkets slot on Fabric or a Curios slot on NeoForge. While equipped it reduces fire damage.

Found in shipwrecks, ocean ruins and buried treasure, and sold by the Sandy Merchant.`,
          detailsBullets: [
            'Trinkets or Curios slot',
            'Reduces fire damage by 10%',
            'Found in coastal loot chests'
          ]
        },
        {
          id: 'sunglasses',
          title: 'Sunglasses',
          namespace_id: 'beachparty:sunglasses',
          subtitle: 'Cool shades that reduce fire damage by 12%.',
          icon: '/assets/icons/beachparty/sunglasses.webp',
          search: 'sunglasses trinket curios wearable loot chest fire damage',
          details: true,
          detailsTitle: 'Wearable',
          detailsText: `Worn in a Trinkets or Curios slot. They reduce fire damage a little more than the [[Beach Hat|beach_hat]], and both can be worn together.

Found in shipwrecks, ocean ruins and buried treasure.`,
          detailsBullets: [
            'Trinkets or Curios slot',
            'Reduces fire damage by 12%',
            'Found in coastal loot chests'
          ]
        },
        {
          id: 'pool_noodle',
          title: 'Pool Noodle',
          namespace_id: 'beachparty:pool_noodle',
          subtitle: 'A classic pool noodle. Mostly for fun, questionable decisions included.',
          icon: '/assets/icons/beachparty/pool_noodle.webp',
          search: 'pool noodle summer fun weapon',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Swing it at your friends: it hits no harder than a bare fist, so nobody gets hurt. It can be dyed in any colour.

Found in loot chests and sold by the Sandy Merchant.`,
          detailsBullets: [
            'Hits no harder than a fist',
            'Dyeable',
            'Found in loot chests'
          ]
        },
        {
          id: 'trunks',
          title: 'Swimming Trunks',
          namespace_id: 'beachparty:trunks',
          subtitle: 'Dyeable trunks that make you swim 8% faster.',
          icon: '/assets/icons/beachparty/trunks.webp',
          search: 'trunks swimming trinket curios wearable dyeable loot chest swim speed',
          details: true,
          detailsTitle: 'Wearable',
          detailsText: `Worn in a Trinkets or Curios slot. They make you swim 8% faster and can be dyed in any colour.

Right click them in your inventory to hide or show the 3D model.`,
          detailsBullets: [
            'Swim speed +8%',
            'Dyeable',
            'Right click in the inventory to hide the model',
            'Found in coastal loot chests'
          ]
        },
        {
          id: 'bikini',
          title: 'Bikini',
          namespace_id: 'beachparty:bikini',
          subtitle: 'A dyeable bikini that makes you swim 8% faster.',
          icon: '/assets/icons/beachparty/bikini.webp',
          search: 'bikini trinket curios wearable dyeable loot chest swim speed',
          details: true,
          detailsTitle: 'Wearable',
          detailsText: `Worn in a Trinkets or Curios slot. It makes you swim 8% faster and can be dyed in any colour. The bonus does not stack with [[Swimming Trunks|trunks]].

Right click it in your inventory to hide or show the 3D model.`,
          detailsBullets: [
            'Swim speed +8%',
            'Dyeable',
            'Right click in the inventory to hide the model',
            'Found in coastal loot chests'
          ]
        },
        {
          id: 'crocs',
          title: 'Crocs',
          namespace_id: 'beachparty:crocs',
          subtitle: 'Dyeable Crocs that let you sprint across water.',
          icon: '/assets/icons/beachparty/crocs.webp',
          search: 'crocs trinket curios wearable dyeable loot chest walk on water sprint',
          details: true,
          detailsTitle: 'Wearable',
          detailsText: `Worn in a Trinkets or Curios slot. While you sprint, you run across the water surface instead of sinking.

They can be dyed in any colour.`,
          detailsBullets: [
            'Sprint to run across water',
            'Dyeable',
            'Found in coastal loot chests'
          ]
        },
        {
          id: 'swim_wings',
          title: 'Swim Wings',
          namespace_id: 'beachparty:swim_wings',
          subtitle: 'Dyeable swim wings that cushion a fall once every two minutes.',
          icon: '/assets/icons/beachparty/swim_wings.webp',
          search: 'swim wings trinket curios wearable dyeable loot chest fall damage',
          details: true,
          detailsTitle: 'Wearable',
          detailsText: `Worn in a Trinkets or Curios slot. When you fall more than three blocks, they halve the fall damage. After that they need two minutes before they work again.`,
          detailsBullets: [
            'Halves fall damage',
            'Two minute cooldown after use',
            'Dyeable',
            'Found in coastal loot chests'
          ]
        },
        {
          id: 'rubber_rings',
          title: 'Rubber Rings',
          subtitle: 'Float on the surface and swim 17% faster.',
          icon: '/assets/icons/beachparty/rubber_ring_blue.webp',
          search: 'rubber ring trinket curios float water swim speed beachparty',
          details: true,
          detailsTitle: 'Wearable',
          detailsText: `Rubber Rings are worn in a Trinkets or Curios slot. In water they keep you on the surface and let you swim 17% faster, so you cannot dive while wearing one. Hold jump to stop floating.

Only one Rubber Ring can be worn at a time.`,
          detailsBullets: [
            'Trinkets or Curios slot',
            'Keeps you afloat',
            'Swim speed +17%',
            'Hold jump to stop floating',
            'Found in coastal loot chests'
          ],
          items: [
            {
              id: 'rubber_ring_blue',
              title: 'Blue Rubber Ring',
              namespace_id: 'beachparty:rubber_ring_blue',
              icon: '/assets/icons/beachparty/rubber_ring_blue.webp',
              search: 'rubber ring blue trinket'
            },
            {
              id: 'rubber_ring_pink',
              title: 'Pink Rubber Ring',
              namespace_id: 'beachparty:rubber_ring_pink',
              icon: '/assets/icons/beachparty/rubber_ring_pink.webp',
              search: 'rubber ring pink trinket'
            },
            {
              id: 'rubber_ring_stripped',
              title: 'Striped Rubber Ring',
              namespace_id: 'beachparty:rubber_ring_stripped',
              icon: '/assets/icons/beachparty/rubber_ring_stripped.webp',
              search: 'rubber ring striped trinket'
            },
            {
              id: 'rubber_ring_pelican',
              title: 'Pelican Rubber Ring',
              namespace_id: 'beachparty:rubber_ring_pelican',
              icon: '/assets/icons/beachparty/rubber_ring_pelican.webp',
              search: 'rubber ring pelican trinket'
            },
            {
              id: 'rubber_ring_axolotl',
              title: 'Axolotl Rubber Ring',
              namespace_id: 'beachparty:rubber_ring_axolotl',
              icon: '/assets/icons/beachparty/rubber_ring_axolotl.webp',
              search: 'rubber ring axolotl trinket'
            }
          ]
        },
        {
          id: 'beach_ball',
          title: 'Beach Ball',
          namespace_id: 'beachparty:beach_ball',
          subtitle: 'An inflatable ball to kick around the beach.',
          icon: '/assets/icons/beachparty/beach_ball.webp',
          search: 'beach ball toy kick football',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place the ball on the ground. Walk into it or right click it to kick it in the direction you are looking. Sneak and right click to pick it up again.

Kick it into a [[Beach Goal|beach_goal]] to score. Try giving it a name tag, some names make it sound a little different.`,
          detailsBullets: [
            'Place it on the ground',
            'Walk into it or right click to kick',
            'Sneak right click to pick it up',
            'Used with the Beach Goal'
          ]
        },
        {
          id: 'music_discs',
          title: 'Music Discs',
          subtitle: 'Summer tracks for your Jukebox, hidden in treasure chests.',
          icon: '/assets/icons/beachparty/music_disc_wild_veins.webp',
          search: 'music disc loot jukebox beachparty buried treasure',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Five of these discs can only be found in buried treasure. Over the Rainbow turns up in many more chests and is also sold by the Sandy Merchant.`,
          detailsBullets: [
            'Found in buried treasure',
            'Over the Rainbow is also found elsewhere and can be traded',
            'Playable in a Jukebox'
          ],
          musicdisc: true,
          tracks: [
            {
              id: 'beachparty',
              title: 'Beachparty',
              subtitle: 'Kevin MacLeod',
              icon: '/assets/icons/beachparty/music_disc_beachparty.webp',
              src: '/assets/music/beachparty/beachparty_kevin_macleod.ogg'
            },
            {
              id: 'caribbean_beach',
              title: 'Caribbean Beach',
              subtitle: 'Pecan Pie',
              icon: '/assets/icons/beachparty/music_disc_caribbean_beach.webp',
              src: '/assets/music/beachparty/caribbeanbeach_pecan_pie.ogg'
            },
            {
              id: 'pridelands',
              title: 'Pridelands',
              subtitle: 'Andey Rossi',
              icon: '/assets/icons/beachparty/music_disc_pridelands.webp',
              src: '/assets/music/beachparty/pridelands_andey_rossi.ogg'
            },
            {
              id: 'vocalista',
              title: 'Vocalista',
              subtitle: 'Pecan Pie',
              icon: '/assets/icons/beachparty/music_disc_vocalista.webp',
              src: '/assets/music/beachparty/vocalista_pecan_pie.ogg'
            },
            {
              id: 'wild_veins',
              title: 'Wild Veins',
              subtitle: 'Adams',
              icon: '/assets/icons/beachparty/music_disc_wild_veins.webp',
              src: '/assets/music/beachparty/wildveins_adams.ogg'
            },
            {
              id: 'over_the_rainbow',
              title: 'Over the Rainbow',
              subtitle: 'MissLilitu',
              icon: '/assets/icons/beachparty/overgrown_disc.webp',
              src: '/assets/music/beachparty/over_the_rainbow.ogg'
            }
          ],
          items: [
            {
              id: 'music_disc_beachparty',
              title: 'Music Disc: Beachparty',
              namespace_id: 'beachparty:music_disc_beachparty',
              icon: '/assets/icons/beachparty/music_disc_beachparty.webp',
              search: 'music disc beachparty loot'
            },
            {
              id: 'music_disc_caribbean_beach',
              title: 'Music Disc: Caribbean Beach',
              namespace_id: 'beachparty:music_disc_caribbean_beach',
              icon: '/assets/icons/beachparty/music_disc_caribbean_beach.webp',
              search: 'music disc caribbean beach loot'
            },
            {
              id: 'music_disc_pridelands',
              title: 'Music Disc: Pridelands',
              namespace_id: 'beachparty:music_disc_pridelands',
              icon: '/assets/icons/beachparty/music_disc_pridelands.webp',
              search: 'music disc pridelands loot'
            },
            {
              id: 'music_disc_vocalista',
              title: 'Music Disc: Vocalista',
              namespace_id: 'beachparty:music_disc_vocalista',
              icon: '/assets/icons/beachparty/music_disc_vocalista.webp',
              search: 'music disc vocalista loot'
            },
            {
              id: 'music_disc_wild_veins',
              title: 'Music Disc: Wild Veins',
              namespace_id: 'beachparty:music_disc_wild_veins',
              icon: '/assets/icons/beachparty/music_disc_wild_veins.webp',
              search: 'music disc wild veins loot'
            },
            {
              id: 'overgrown_disc',
              title: 'Overgrown Disc: Over the Rainbow',
              namespace_id: 'beachparty:overgrown_disc',
              icon: '/assets/icons/beachparty/overgrown_disc.webp',
              search: 'music disc overgrown over the rainbow loot'
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
          subtitle: 'Coconuts ripen under Palm Leaves, and watch out, ripe ones fall down.',
          icon: '/assets/icons/beachparty/palm_leaves.webp',
          search: 'coconut palm leaves hanging coconut bonemeal throw open beachparty',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Growth',
          detailsText: `Use Bone Meal on Palm Leaves with air below to hang a young coconut underneath. It grows through three stages, and once ripe it can drop and hurt whoever stands below.

Coconuts can be thrown. When one breaks, it leaves an Open Coconut or occasionally a Palm Sprout.`,
          detailsBullets: [
            'Bone Meal on Palm Leaves starts a coconut',
            'Grows in three stages',
            'Ripe coconuts fall and deal damage',
            'Throw a Coconut to crack it open'
          ],
          items: [
            {
              id: 'palm_leaves',
              title: 'Palm Leaves',
              namespace_id: 'beachparty:palm_leaves',
              icon: '/assets/icons/beachparty/palm_leaves.webp',
              search: 'palm leaves coconut growth bonemeal'
            },
            {
              id: 'coconut_item',
              title: 'Coconut',
              namespace_id: 'beachparty:coconut',
              icon: '/assets/icons/beachparty/coconut.webp',
              search: 'coconut item throw'
            },
            {
              id: 'coconut_open',
              title: 'Open Coconut',
              namespace_id: 'beachparty:coconut_open',
              icon: '/assets/icons/beachparty/coconut_open.webp',
              search: 'open coconut food'
            }
          ]
        },
        {
          id: 'mussel_meat',
          title: 'Mussel Meat',
          namespace_id: 'beachparty:raw_mussel_meat',
          subtitle: 'Found inside [[Seashells|seashells]]. Tastes better cooked.',
          icon: '/assets/icons/beachparty/raw_mussel_meat.webp',
          search: 'mussel meat seashell food raw cooked',
          details: true,
          detailsTitle: 'Obtaining and Cooking',
          detailsText: `Open [[Seashells|seashells]] to find Raw Mussel Meat. Cook it in a Furnace, Smoker or on a Campfire.`,
          detailsBullets: [
            'Found in Seashells',
            'Cook it for a better meal'
          ],
          items: [
            {
              id: 'raw_mussel_meat',
              title: 'Raw Mussel Meat',
              namespace_id: 'beachparty:raw_mussel_meat',
              icon: '/assets/icons/beachparty/raw_mussel_meat.webp',
              search: 'raw mussel meat'
            },
            {
              id: 'cooked_mussel_meat',
              title: 'Cooked Mussel Meat',
              namespace_id: 'beachparty:cooked_mussel_meat',
              icon: '/assets/icons/beachparty/cooked_mussel_meat.webp',
              search: 'cooked mussel meat'
            }
          ]
        },
        {
          id: 'cocktails',
          title: 'Cocktails',
          subtitle: 'Drinks from the [[Palm Bar|palm_bar]], each with its own effect.',
          icon: '/assets/icons/beachparty/coconut_cocktail.webp',
          search: 'cocktail drinks effects palm bar',
          details: true,
          detailsTitle: 'Effects',
          detailsText: `Cocktails are mixed at the [[Palm Bar|palm_bar]].

Drink one straight away for 45 seconds of its effect, or place the glass on a table and take three sips, each good for 30 seconds.`,
          detailsBullets: [
            'Mixed at the Palm Bar',
            'Drink from the hand: 45 seconds',
            'Placed: three sips of 30 seconds each'
          ],
          items: [
            {
              id: 'coconut_cocktail',
              title: 'Coconut Cocktail',
              namespace_id: 'beachparty:coconut_cocktail',
              subtitle: 'Strength',
              icon: '/assets/icons/beachparty/coconut_cocktail.webp',
              search: 'coconut cocktail strength'
            },
            {
              id: 'sweetberries_cocktail',
              title: 'Sweetberry Cocktail',
              namespace_id: 'beachparty:sweetberries_cocktail',
              subtitle: 'Absorption',
              icon: '/assets/icons/beachparty/sweetberries_cocktail.webp',
              search: 'sweet berries cocktail absorption'
            },
            {
              id: 'cocoa_cocktail',
              title: 'Cocoa Cocktail',
              namespace_id: 'beachparty:cocoa_cocktail',
              subtitle: 'Regeneration',
              icon: '/assets/icons/beachparty/cocoa_cocktail.webp',
              search: 'cocoa cocktail regeneration'
            },
            {
              id: 'pumpkin_cocktail',
              title: 'Pumpkin Cocktail',
              namespace_id: 'beachparty:pumpkin_cocktail',
              subtitle: 'Fire Resistance',
              icon: '/assets/icons/beachparty/pumpkin_cocktail.webp',
              search: 'pumpkin cocktail fire resistance'
            },
            {
              id: 'honey_cocktail',
              title: 'Honey Cocktail',
              namespace_id: 'beachparty:honey_cocktail',
              subtitle: 'Haste',
              icon: '/assets/icons/beachparty/honey_cocktail.webp',
              search: 'honey cocktail haste'
            },
            {
              id: 'melon_cocktail',
              title: 'Melon Cocktail',
              namespace_id: 'beachparty:melon_cocktail',
              subtitle: 'Luck',
              icon: '/assets/icons/beachparty/melon_cocktail.webp',
              search: 'melon cocktail luck'
            }
          ]
        }
      ]
    },
    {
      id: 'worldgen',
      title: 'Worldgen and Natural Features',
      subtitle: 'What you find along the beach.',
      entries: [
        {
          id: 'sandwaves',
          title: 'Sandwaves',
          namespace_id: 'beachparty:sandwaves',
          subtitle: 'Rippled sand in the shallow water off the beach.',
          icon: '/assets/icons/beachparty/sandwaves.webp',
          search: 'sandwaves beach water worldgen',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Sandwaves replace patches of sand in the shallow water just off beaches, giving the sea floor a rippled look.`,
          detailsBullets: [
            'Found in shallow water off beaches',
            'Can be turned off in the config'
          ]
        },
        {
          id: 'beach_seashells',
          title: 'Seashells',
          namespace_id: 'beachparty:seashell_block',
          subtitle: 'Seashells scattered across the sand.',
          icon: '/assets/icons/beachparty/seashell_block.webp',
          search: 'seashells beach sand worldgen',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Seashells lie scattered on the sand of beaches. Break them to collect a [[Seashell|seashells]], which you can open for loot.`,
          detailsBullets: [
            'Found on beaches',
            'Drops a Seashell when broken',
            'Can be turned off in the config'
          ]
        },
        {
          id: 'palm_trees',
          title: 'Palm Trees',
          namespace_id: 'beachparty:palm_sprout',
          subtitle: 'Crooked palm trees along the beach. Their wood makes up the [[Palm|palm]] set.',
          icon: '/assets/icons/beachparty/palm_sprout.webp',
          search: 'palm trees sprout beach worldgen',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Palm Trees grow on beaches. Collect Palm Sprouts to plant your own, and use Bone Meal on the leaves for [[coconuts|coconut]].`,
          detailsBullets: [
            'Found on beaches',
            'Palm Sprouts can be replanted and potted',
            'Can be turned off in the config'
          ]
        },
        {
          id: 'message_in_a_bottle',
          title: 'Message in a Bottle',
          namespace_id: 'beachparty:message_in_a_bottle',
          subtitle: 'A bottle washed up on the beach, sometimes with a treasure map inside.',
          icon: '/assets/icons/beachparty/message_in_a_bottle.webp',
          search: 'message in a bottle beach loot map treasure explorer spawn',
          details: true,
          detailsTitle: 'Spawning',
          detailsText: `Every now and then a Message in a Bottle washes up on a beach near a player, but only a couple at a time.

Right click it to open it. Inside you find a note, an empty map, or with some luck an explorer map to a woodland mansion, shipwreck, ocean monument or buried treasure. You keep the bottle.`,
          detailsBullets: [
            'Washes up on beaches near players',
            'Right click to open',
            'Paper, an empty map or an explorer map',
            'Spawn rate and limit can be changed in the config'
          ]
        }
      ]
    },
    {
      id: 'misc',
      title: 'Miscellaneous',
      subtitle: 'Configuration and the Sandy Merchant.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle: 'World generation, bottle spawning and sandcastle griefing can be adjusted in the config.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config configuration settings options beachparty',
          details: true,
          detailsTitle: 'Configuration File',
          detailsText: `On Fabric the settings are in config/beachparty.json, on NeoForge in the common config of the mod.`,
          detailsBullets: [
            'Turn palm trees, seashells and sandwaves on or off',
            'Turn Message in a Bottle spawning on or off',
            'Maximum number of bottles and spawn interval',
            'Whether zombies destroy sandcastles'
          ]
        },
        {
          id: 'villager_profession',
          title: 'Sandy Merchant',
          subtitle: 'A villager who sells everything for a day at the beach.',
          icon: '/assets/icons/misc/emerald.webp',
          search: 'villager profession sandy merchant beachparty trades',
          details: true,
          detailsTitle: 'Sandy Merchant',
          detailsText: `Villagers who claim a [[Palm Bar|palm_bar]] become Sandy Merchants.

They start with palm sprouts, coconuts and torches. As they level up they add building materials, beach furniture, the radio, the beach ball and goal, cocktails, and finally swimwear, rubber rings and the Mini Fridge.`,
          detailsBullets: [
            'Uses the Palm Bar as workstation',
            'Sells beach materials, furniture and toys',
            'Master level trades include swimwear and the Mini Fridge'
          ]
        }
      ]
    }
  ]
}
