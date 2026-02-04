export default {
  slug: 'alpine-whispers',
  title: 'Alpine Whispers',
  logo: '/assets/mod-logos/alpine_whispers.png',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Building blocks, furniture, and small gameplay additions',
  aboutText: `Welcome to the Alpine Whispers Wiki.

This is your home for blocks, items, entities, and mechanics added by Alpine Whispers.

Alpine Whispers introduces building blocks, furniture, and decorative elements inspired by traditional alpine architecture from the Alpine foothills.

Snowy Plains and Grove biomes are adjusted to include Alpine Whispers materials.

The mod focuses on classic alpine building materials and interiors, expanding building options with a small selection of functional items, food, and animals.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Blocks used for basic item processing.',
      entries: [
        {
          id: 'smoker',
          title: 'Smoker',
          namespace_id: 'alpinewhispers:arolla_pine_smoker',
          subtitle: 'Functions like a Smoker.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_smoker.png',
          search: 'smoker alpine whispers arolla pine cooking furnace'
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Building blocks and interior furniture.',
      entries: [
        {
          id: 'alpine_gneiss',
          title: 'Alpine Gneiss',
          namespace_id: 'alpinewhispers:alpine_gneiss',
          subtitle: 'A complete stone building set including all standard block variants.',
          icon: '/assets/icons/alpine-whispers/alpine_gneiss_bricks.png',
          search: 'alpine gneiss stone set bricks layered mossy frosty',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants and Worldgen',
          detailsText: `Alpine Gneiss is a complete stone building set covering standard structural variants.

In the world, Alpine Gneiss can partially replace regular stone in Snowy Plains and Grove biomes.

Mossy variants can be turned frosty by using a snowball on them, or by hitting them with a snowball.`,
          detailsBullets: [
            'Includes all standard stone block variants',
            'Can partially replace regular stone in Snowy Plains and Grove biomes',
            'Mossy variants can be turned frosty using snowballs'
          ],
          items: [
            {
              id: 'alpine_gneiss_block',
              title: 'Alpine Gneiss',
              namespace_id: 'alpinewhispers:alpine_gneiss',
              icon: '/assets/icons/alpine-whispers/alpine_gneiss.png'
            },
            {
              id: 'alpine_gneiss_bricks',
              title: 'Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/alpine_gneiss_bricks.png'
            },
            {
              id: 'layered_alpine_gneiss_bricks',
              title: 'Layered Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:layered_alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/layered_alpine_gneiss_bricks.png'
            },
            {
              id: 'mossy_alpine_gneiss_bricks',
              title: 'Mossy Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:mossy_alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/mossy_alpine_gneiss_bricks_1_.png'
            },
            {
              id: 'mossy_layered_alpine_gneiss_bricks',
              title: 'Mossy Layered Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:mossy_layered_alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/mossy_layered_alpine_gneiss_bricks.png'
            },
            {
              id: 'frosty_alpine_gneiss_bricks',
              title: 'Frosty Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:frosty_alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/mossy_alpine_gneiss_bricks.png'
            }
          ]
        },

        {
          id: 'arolla_pine',
          title: 'Arolla Pine',
          namespace_id: 'alpinewhispers:arolla_pine_log',
          subtitle: 'A complete wood building set including all standard block variants.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_log.png',
          search: 'arolla pine wood set log planks door trapdoor snowy plains grove',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Arolla Pine is a complete wood building set used across Alpine Whispers builds.

        It represents the wood of the Arolla Pine and is the native wood type found in snowy regions, where it grows naturally as [[Arolla Pines|arolla_pine_sapling]].`,
          detailsBullets: ['Native wood type of Snowy Plains and Grove biomes', 'Full wood set with matching variants'],
          items: [
            {
              id: 'arolla_pine_planks',
              title: 'Arolla Pine Planks',
              namespace_id: 'alpinewhispers:arolla_pine_planks',
              icon: '/assets/icons/alpine-whispers/arolla_pine_planks.png'
            },
            {
              id: 'arolla_pine_door',
              title: 'Arolla Pine Door',
              namespace_id: 'alpinewhispers:arolla_pine_door',
              icon: '/assets/icons/alpine-whispers/arolla_pine_door.png'
            },
            {
              id: 'arolla_pine_trapdoor',
              title: 'Arolla Pine Trapdoor',
              namespace_id: 'alpinewhispers:arolla_pine_trapdoor',
              icon: '/assets/icons/alpine-whispers/arolla_pine_trapdoor.png'
            }
          ]
        },

        {
          id: 'windows',
          title: 'Windows',
          subtitle: 'Available as blocks and panes. Keeps the winter outside, at least visually.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_window.png',
          search: 'window pane glass alpine whispers',
          details: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Clean glass variants made for alpine builds and interiors.`,
          items: [
            {
              id: 'arolla_pine_window',
              title: 'Arolla Pine Window',
              namespace_id: 'alpinewhispers:arolla_pine_window',
              icon: '/assets/icons/alpine-whispers/arolla_pine_window.png',
              search: 'window block'
            },
            {
              id: 'arolla_pine_window_pane',
              title: 'Arolla Pine Window Pane',
              namespace_id: 'alpinewhispers:arolla_pine_window_pane',
              icon: '/assets/icons/alpine-whispers/arolla_pine_window_pane.png',
              search: 'window pane'
            }
          ]
        },

        {
          id: 'bed',
          title: 'Bed',
          namespace_id: 'alpinewhispers:arolla_pine_bed',
          subtitle: 'A bed variant used for players and interior builds.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_bed.png',
          search: 'bed arolla pine alpine whispers',
          details: true,
          detailsTitle: 'Note',
          detailsText: `Due to Minecraft’s villager POI system, villagers are unable to recognize and use this bed.`
        },

        {
          id: 'sofa',
          title: 'Sofa',
          namespace_id: 'alpinewhispers:arolla_pine_sofa',
          subtitle: 'A decorative sofa for seating.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sofa.png',
          search: 'sofa seating alpine whispers'
        },

        {
          id: 'chair',
          title: 'Chair',
          namespace_id: 'alpinewhispers:arolla_pine_chair',
          subtitle: 'Simple seating.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_chair.png',
          search: 'chair seating alpine whispers'
        },

        {
          id: 'table',
          title: 'Table',
          namespace_id: 'alpinewhispers:arolla_pine_table',
          subtitle: 'A dining table.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_table.png',
          search: 'table alpine whispers'
        },

        {
          id: 'dresser',
          title: 'Dresser',
          namespace_id: 'alpinewhispers:arolla_pine_dresser',
          subtitle: 'A storage dresser.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_dresser.png',
          search: 'dresser storage alpine whispers'
        },

        {
          id: 'wardrobe',
          title: 'Wardrobe',
          namespace_id: 'alpinewhispers:arolla_pine_wardrobe',
          subtitle: 'A tall two-block wardrobe that stores armor pieces.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_wardrobe.png',
          search: 'wardrobe arolla pine armor storage tall furniture alpine whispers',
          details: true,
          detailsTitle: 'Armor Storage',
          detailsText: `Use an armor piece on the Wardrobe to store it.

Sneak-use to take stored items back out.

Use without an item to open and close it.`,
          detailsBullets: [
            'Stores helmet, chestplate, leggings, and boots',
            'Place armor by using it on the Wardrobe',
            'Sneak-use to retrieve stored items',
            'Use without an item to open and close'
          ]
        },

        {
          id: 'cabinet',
          title: 'Cabinet',
          namespace_id: 'alpinewhispers:arolla_pine_cabinet',
          subtitle: 'A storage block for keeping supplies close and organized.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_cabinet.png',
          search: 'cabinet storage alpine whispers'
        },

        {
          id: 'wall_cabinet',
          title: 'Wall Cabinet',
          namespace_id: 'alpinewhispers:arolla_pine_wall_cabinet',
          subtitle: 'Wall mounted storage to free up floor space.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_wall_cabinet.png',
          search: 'wall cabinet storage alpine whispers'
        },

        {
          id: 'cooking_aisle',
          title: 'Cooking Aisle',
          namespace_id: 'alpinewhispers:arolla_pine_cooking_aisle',
          subtitle: 'A cabinet style block for building longer kitchen lines.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_cooking_aisle.png',
          search: 'cooking aisle cabinet connectible alpine whispers'
        },

        {
          id: 'kitchen_sink',
          title: 'Arolla Pine Sink',
          namespace_id: 'alpinewhispers:arolla_pine_sink',
          subtitle: 'A functional sink you can fill and empty with buckets and bottles.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sink.png',
          search: 'kitchen sink alpine whispers filled bucket bottle water potion',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Use a Water Bucket or Glass Bottle on the lower half to fill it.

If it is filled, use an empty Bucket to get a Water Bucket, or a Glass Bottle to get a Water Potion.`,
          detailsBullets: [
            'Use Water Bucket or Glass Bottle to fill',
            'Use empty Bucket for a Water Bucket',
            'Use Glass Bottle for a Water Potion',
            'Interact with the lower half'
          ]
        },

        {
          id: 'washbasin',
          title: 'Washbasin Sink',
          namespace_id: 'alpinewhispers:arolla_pine_washbasin',
          subtitle: 'A wooden washbasin sink you can fill and empty with buckets and bottles.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_washbasin.png',
          search: 'washbasin sink alpine whispers bucket bottle water potion',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Use a Water Bucket or Glass Bottle on the lower half to fill it.

If it is filled, use an empty Bucket to get a Water Bucket, or a Glass Bottle to get a Water Potion.`,
          detailsBullets: [
            'Use Water Bucket or Glass Bottle to fill',
            'Use empty Bucket for a Water Bucket',
            'Use Glass Bottle for a Water Potion',
            'Interact with the lower half'
          ]
        },

        {
          id: 'bathtub',
          title: 'Bathtub',
          namespace_id: 'alpinewhispers:arolla_pine_bathtub',
          subtitle: 'A fillable bathtub you can soak in, and drain with buckets or bottles.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_bathtub.png',
          search:
            'bathtub alpine whispers fill drain bucket bottle water potion soak remove negative effects zombie drowned enderman',
          details: true,
          detailsTitle: 'Function',
          detailsText: `The Bathtub is a two part block.

Fill it with a Water Bucket or Glass Bottle, or start filling with an empty hand.
Drain it with an empty Bucket or a Glass Bottle.

While filled, you can sit in the bathtub. Entities inside are affected: harmful effects are removed.
Zombies convert to Drowned, and Endermen take damage from the water.`,
          detailsBullets: [
            'Two part block, interact with the head',
            'Fill with Water Bucket or Glass Bottle, or start filling with empty hand',
            'Drain with empty Bucket for a Water Bucket',
            'Drain with Glass Bottle for a Water Potion',
            'While filled: removes harmful effects and slows movement',
            'Zombies convert to Drowned, Endermen take damage'
          ]
        },

        {
          id: 'privy',
          title: 'Privy',
          namespace_id: 'alpinewhispers:arolla_pine_privy',
          subtitle: 'A usable privy.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_privy.png',
          search: 'privy toilet alpine whispers sit smelly flies absorb food redstone comparator',
          details: true,
          detailsTitle: 'Function',
          detailsText: `The Privy can be used like a seat.

Most food items can be inserted by right clicking with them.
Dropped food items that touch the Privy can also be absorbed.

As it fills up, it may become smelly, spawning fly particles and buzzing sounds.

Sneak right click to release all stored items.
The fill level can be read using a comparator.`,
          detailsBullets: [
            'Right click to sit',
            'Stores most food items via interaction or item pickup',
            'Can become smelly with particle and sound effects',
            'Sneak right click to release stored items',
            'Comparator output reflects how full it is'
          ]
        },

        {
          id: 'frozen_dirt',
          title: 'Frozen Dirt',
          namespace_id: 'alpinewhispers:frozen_dirt',
          subtitle: 'A frozen dirt variant used for terrain and builds.',
          icon: '/assets/icons/alpine-whispers/frozen_dirt.png',
          search: 'frozen dirt block alpine whispers'
        },

        {
          id: 'icicles',
          title: 'Icicles',
          namespace_id: 'alpinewhispers:icicles',
          subtitle: 'Hanging ice formations found in cold environments.',
          icon: '/assets/icons/alpine-whispers/icicles.png',
          search: 'icicles alpine whispers decoration caves leaves snow',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Icicles generate naturally in snowy biomes, commonly hanging from leaves and around cave entrances.

They are primarily decorative, but over time they can trigger small changes to the terrain beneath them.`,
          detailsBullets: [
            'Generates in snowy biomes',
            'Can spawn hanging from leaves or cave ceilings',
            'Slowly affects nearby terrain over time',
            'May disappear after triggering its effect'
          ]
        },

        {
          id: 'homespun_wool',
          title: 'Homespun Wool',
          namespace_id: 'alpinewhispers:homespun_wool',
          subtitle: 'A wool variant obtained by shearing [[Alpine Sheep|alpine_sheep]].',
          icon: '/assets/icons/alpine-whispers/homespun_wool.png',
          search: 'homespun wool alpine whispers alpine sheep'
        },

        {
          id: 'homespun_carpet',
          title: 'Homespun Carpet',
          namespace_id: 'alpinewhispers:homespun_carpet',
          subtitle: 'A fluffy, shaggy carpet made out of [[Homespun Wool|homespun_wool]].',
          icon: '/assets/icons/alpine-whispers/homespun_carpet.png',
          search: 'homespun carpet alpine whispers homespun wool'
        },

        {
          id: 'snow_globe',
          title: 'Snow Globe',
          namespace_id: 'alpinewhispers:snow_globe',
          subtitle: 'A decorative element. Right-click to unleash a small snowstorm inside the globe!',
          icon: '/assets/icons/alpine-whispers/snow_globe.png',
          search: 'snow globe decoration alpine whispers'
        },

        {
          id: 'fireplace_cornice',
          title: 'Fireplace Cornice',
          namespace_id: 'alpinewhispers:fireplace_cornice',
          subtitle: 'A connectable trim block that can copy the look of other full blocks.',
          icon: '/assets/icons/alpine-whispers/fireplace_cornice.png',
          search: 'fireplace cornice trim alpine whispers connectable applied mimic chisel pickaxe waterlogged',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Fireplace Cornice connects to neighboring cornices and hides edge parts automatically.

You can apply a full block to it by right clicking with that block, making the cornice mimic its look.
Use a pickaxe to remove the applied block again.`,
          detailsBullets: [
            'Connects to adjacent cornices and adapts its shape',
            'Right click with a full block to apply and mimic its look',
            'Use a pickaxe to remove the applied block',
            'Waterloggable'
          ]
        },

        {
          id: 'candle_wreath',
          title: 'Candle Wreath',
          namespace_id: 'alpinewhispers:candle_wreath',
          subtitle: 'A wall wreath with four candles you can light individually.',
          icon: '/assets/icons/alpine-whispers/candle_wreath.png',
          search:
            'candle wreath wall decoration light candles flint and steel fire charge bucket waterlogged projectile',
          details: true,
          detailsTitle: 'Function',
          detailsText: `The Candle Wreath has four separate candles. You can light each one by right clicking it with Flint and Steel or a Fire Charge.

To put a candle out, right click that candle with an empty Bucket. If the block gets waterlogged, all candles go out automatically.

More lit candles means more light. Burning projectiles can light a candle on hit.`,
          detailsBullets: [
            'Light individual candles with Flint and Steel or Fire Charge',
            'Extinguish a single candle with an empty Bucket',
            'Waterlogging extinguishes all candles',
            'Light level depends on how many candles are lit'
          ]
        },

        {
          id: 'wall_wreath',
          title: 'Wall Wreath',
          namespace_id: 'alpinewhispers:wall_wreath',
          subtitle: 'A wall mounted wreath decoration.',
          icon: '/assets/icons/alpine-whispers/wall_wreath.png',
          search: 'wall wreath decoration alpine whispers'
        },

        {
          id: 'fairy_lights',
          title: 'Fairy Lights',
          namespace_id: 'alpinewhispers:fairy_lights',
          subtitle: 'A decorative light string that emits a soft glow.',
          icon: '/assets/icons/alpine-whispers/fairy_lights.png',
          search: 'fairy lights decoration light alpine whispers'
        },

        {
          id: 'garland',
          title: 'Garland',
          namespace_id: 'alpinewhispers:garland',
          subtitle: 'A decorative garland that also emits light.',
          icon: '/assets/icons/alpine-whispers/garland.png',
          search: 'garland decoration light alpine whispers'
        },

        {
          id: 'star_topper',
          title: 'Star Topper',
          namespace_id: 'alpinewhispers:star_topper',
          subtitle: 'A decorative star topper that emits light.',
          icon: '/assets/icons/alpine-whispers/star_topper.png',
          search: 'star topper decoration light alpine whispers'
        },

        {
          id: 'tree_baubles',
          title: 'Tree Baubles',
          namespace_id: 'alpinewhispers:tree_baubles',
          subtitle: 'A small seasonal decoration you attach to leaf blocks.',
          icon: '/assets/icons/alpine-whispers/tree_baubles.png',
          search: 'tree baubles decoration alpine whispers leaves shears',
          details: true,
          detailsTitle: 'Placement and Removal',
          detailsText: `Tree Baubles are small seasonal decorations that are attached directly to leaves.

Once placed, they sit in the foliage until you decide to remove them again.`,
          detailsBullets: [
            'Can only be placed on leaf blocks',
            'Attached directly to the leaves',
            'Removed with shears to get the baubles back',
            'Can also be popped off by sneaking and interacting'
          ]
        }
      ]
    },

    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Everyday items, ingredients, and tools added by Alpine Whispers.',
      entries: [
        {
          id: 'winter_hat',
          title: 'Winter Hat',
          namespace_id: 'alpinewhispers:winter_hat',
          subtitle: 'A wearable hat item.',
          icon: '/assets/icons/alpine-whispers/winter_hat.png',
          search: 'winter hat armor helmet alpine whispers'
        },

        {
          id: 'bread_on_a_stick',
          title: 'Bread on a Stick',
          namespace_id: 'alpinewhispers:bread_on_a_stick',
          subtitle: 'A handheld food item used to control Alpine Sheep.',
          icon: '/assets/icons/alpine-whispers/bread_on_a_stick.png',
          search: 'bread on a stick food alpine whispers alpine sheep ride control',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Bread on a Stick works similar to a Carrot on a Stick.

  It can be used to ride and control [[Alpine Sheep|alpine_sheep]].`,
          detailsBullets: [
            'Works similar to Carrot on a Stick',
            'Used to ride Alpine Sheep',
            'Controls Alpine Sheep movement'
          ]
        },
        {
          id: 'winter_magic_music_disc',
          title: 'Winter Magic Music Disc',
          subtitle: 'Plays Marco’s absolute favorite track and usually runs on repeat. For over a year. Craftable.',
          namespace_id: 'alpine_whispers:winter_magic_music_disc',
          icon: '/assets/icons/alpine-whispers/winter_magic_music_disc.png',
          search: 'music disc winter magic alpine whispers craftable favorite track',
          musicdisc: true,
          tracks: [
            {
              title: 'Winter Magic',
              subtitle: "Marco's Favorites",
              icon: '/assets/icons/alpine-whispers/winter_magic_music_disc.png',
              src: '/assets/music/alpine-whispers/winter_magic.ogg'
            }
          ]
        }
      ]
    },

    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'Food items tied to alpine survival and colder biomes.',
      entries: [
        {
          id: 'reindeer_meat',
          title: 'Reindeer Meat',
          namespace_id: 'alpinewhispers:reindeer',
          subtitle: 'Raw meat dropped by reindeer.',
          icon: '/assets/icons/alpine-whispers/reindeer.png',
          search: 'reindeer meat raw food',
          details: true,
          detailsTitle: 'Cooked Variant',
          detailsText: `Reindeer Meat can be cooked to obtain Cooked Reindeer Meat.`,
          items: [
            {
              id: 'cooked_reindeer',
              title: 'Cooked Reindeer Meat',
              namespace_id: 'alpinewhispers:cooked_reindeer',
              subtitle: 'Cooked reindeer meat.',
              icon: '/assets/icons/alpine-whispers/cooked_reindeer.png',
              search: 'reindeer meat cooked food'
            }
          ]
        },

        {
          id: 'cooked_reindeer_dish',
          title: 'Cooked Reindeer Dish',
          namespace_id: 'alpinewhispers:cooked_reindeer_dish',
          subtitle: 'A reindeer dish you can place down and eat bite by bite.',
          icon: '/assets/icons/alpine-whispers/cooked_reindeer_dish.png',
          search: 'cooked reindeer dish placeable food bites alpine whispers',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Sneak while placing to set the dish down as a block.

Once placed, right click it to eat. Each bite removes a portion until it is gone.`,
          detailsBullets: ['Sneak-place to place it as a block', 'Right click to eat', 'Consumed in multiple bites']
        }
      ]
    },

    {
      id: 'crops',
      title: 'Worldgen and Natural Features',
      subtitle: 'Crops, plants, and terrain features that generate naturally in the world.',
      entries: [
        {
          id: 'snow_gentian',
          title: 'Snow Gentian',
          subtitle: 'Snow Gentian can generate naturally in cold alpine regions.',
          icon: '/assets/icons/alpine-whispers/snow_gentian.png',
          search: 'snow gentian flower alpine whispers'
        },

        {
          id: 'christmas_rose',
          title: 'Christmas Rose',
          subtitle: 'Christmas Roses can generate naturally in snowy environments.',
          icon: '/assets/icons/alpine-whispers/christmas_rose.png',
          search: 'christmas rose flower alpine whispers'
        },

        {
          id: 'hoarfrost_grass',
          title: 'Hoarfrost Grass',
          subtitle: 'Hoarfrost Grass can generate naturally across frozen terrain.',
          icon: '/assets/icons/alpine-whispers/hoarfrost_grass.png',
          search: 'hoarfrost grass alpine whispers'
        },

        {
          id: 'tall_hoarfrost_grass',
          title: 'Tall Hoarfrost Grass',
          subtitle: 'A taller variant of Hoarfrost Grass found in cold regions.',
          icon: '/assets/icons/alpine-whispers/tall_hoarfrost_grass.png',
          search: 'tall hoarfrost grass alpine whispers'
        },

        {
          id: 'snow_layers',
          title: 'Snow Layers',
          subtitle: 'Snowy biomes now feature naturally varying snow layer heights.',
          icon: '/assets/icons/alpine-whispers/snow_layer.png',
          search: 'snow layer worldgen alpine whispers snowy plains grove'
        },

        {
          id: 'arolla_pine_sapling',
          title: 'Arolla Pines',
          subtitle:
            'Arolla Pines can grow naturally in snowy regions and form the basis of the [[Arolla Pine|arolla_pine]] wood set.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sapling.png',
          search: 'arolla pine sapling tree worldgen alpine whispers'
        },

        {
          id: 'cobbled_alpine_gneiss',
          title: 'Alpine Gneiss',
          subtitle: 'Some stone formations are naturally replaced with Alpine Gneiss.',
          icon: '/assets/icons/alpine-whispers/alpine_gneiss.png',
          search: 'cobbled alpine gneiss stone worldgen alpine whispers'
        },

        {
          id: 'alpine_gneiss_slabs',
          title: 'Gneiss Slabs',
          subtitle: 'Alpine Gneiss slabs can generate naturally near slopes and terrain edges.',
          icon: '/assets/icons/alpine-whispers/alpine_gneiss_slab.png',
          search: 'alpine gneiss slab worldgen alpine whispers'
        }
      ]
    },

    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'New animals added by Alpine Whispers.',
      entries: [
        {
          id: 'reindeer_entity',
          title: 'Reindeer',
          namespace_id: 'alpinewhispers:reindeer',
          subtitle: 'A tameable mount that can carry riders and chests.',
          icon: '/assets/icons/alpine-whispers/entity/reindeer.png',
          search: 'reindeer alpine whispers mount ride chest storage sweet berries snow speed ice slow herd',
          details: true,
          detailsTitle: 'Behavior and Riding',
          detailsText: `Reindeer spawn in cold biomes and move together in small herds.

They can be fed Sweet Berries. Adults can be bred using Sweet Berries.

Right click a grown Reindeer with an empty hand to ride it. Up to two players can ride at the same time.

A chest can be attached, allowing the Reindeer to carry extra storage.

Reindeer move faster on snow blocks, but slow down on ice.`,
          detailsBullets: [
            'Spawns in colder regions and forms herds',
            'Feed and breed using Sweet Berries',
            'Right click with an empty hand to ride',
            'Supports two riders at once',
            'Can carry a chest for storage',
            'Moves faster on snow, slower on ice',
            'Avoids wolves and polar bears'
          ]
        },

        {
          id: 'alpine_sheep',
          title: 'Alpine Sheep',
          namespace_id: 'alpinewhispers:alpine_sheep',
          subtitle: 'A ridable sheep that drops [[Homespun Wool|homespun_wool]] when sheared.',
          icon: '/assets/icons/alpine-whispers/entity/alpine_sheep.png',
          search:
            'alpine sheep alpine whispers ride bread on a stick homespun wool shears wheat hoarfrost grass frozen dirt snow boost',
          details: true,
          detailsTitle: 'Behavior and Riding',
          detailsText: `Alpine Sheep can be bred using Wheat and can be sheared for [[Homespun Wool|homespun_wool]].

Right click a grown Alpine Sheep with an empty hand to ride it.
Use [[Bread on a Stick|bread_on_a_stick]] to steer it, and use it again for a short speed boost.

Alpine Sheep graze on cold plants and terrain, including [[Hoarfrost Grass|hoarfrost_grass]] and [[Frozen Dirt|frozen_dirt]].

Feeding Bread is a bad idea: after a short while, the sheep gets angry and eventually takes damage.`,
          detailsBullets: [
            'Breed using Wheat',
            'Shear for Homespun Wool',
            'Right click with an empty hand to ride',
            'Steer with Bread on a Stick',
            'Bread on a Stick can trigger a short speed boost',
            'Feeding Bread triggers an angry reaction and can hurt the sheep'
          ]
        }
      ]
    },

    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Small extras and supporting features.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle:
            'Most gameplay features of Alpine Whispers can be adjusted via a configuration file, usually located at `config/alpinewhispers.json`.',
          icon: '/assets/icons/misc/config.png',
          search: 'config configuration settings options alpine whispers'
        },
        {
          id: 'grove_snow_weather',
          title: 'Grove Snow Weather',
          subtitle:
            'In Grove biomes, calm snowfall effects appear during clear weather, occasionally accompanied by distant avalanche sounds.',
          icon: '/assets/icons/misc/weather.png',
          search: 'grove snow weather ambient falling snow avalanche sounds alpine whispers'
        },
        {
          id: 'snow_fog',
          title: 'Snow Fog',
          subtitle: 'Cold and snowy biomes feel mistier, with stronger fog at night and during snowfall or storms.',
          icon: '/assets/icons/misc/fog.png',
          search: 'snow fog cold biomes grove night storm alpine whispers'
        },
        {
          id: 'alpine_gneiss_reproduction',
          title: 'Alpine Gneiss Reproduction',
          subtitle: 'Icicles can slowly transform nearby stone into Alpine Gneiss under specific cold conditions.',
          icon: '/assets/icons/misc/time.png',
          search: 'alpine gneiss reproduction icicle frozen dirt stone alpine whispers'
        }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'A closer look at how everything comes together ingame',
  impressions: [
    {
      src: '/assets/impressions/alpine-whispers/01.jpeg',
      caption: 'Lili`s Alpine Spa featuring Bathtub, Wardrobe and a Dresser'
    },
    {
      src: '/assets/impressions/alpine-whispers/02.jpeg',
      caption: 'A small Bathroom'
    },
    {
      src: '/assets/impressions/alpine-whispers/03.jpeg',
      caption: 'Snowy landscapes with soft fog, gentle snowfall, and quiet atmosphere.'
    },
    {
      src: '/assets/impressions/alpine-whispers/04.jpeg',
      caption: 'Simple bedroom built from classic alpine materials.'
    },
    {
      src: '/assets/impressions/alpine-whispers/05.jpeg',
      caption: 'Cozy living spaces centered around a fireplace and winterly decor.'
    },
    {
      src: '/assets/impressions/alpine-whispers/06.jpeg',
      caption: 'Cold alpine slopes with lingering winter fog.'
    },
    {
      src: '/assets/impressions/alpine-whispers/07.jpeg',
      caption: 'Quiet alpine wildlife sheltering under snowy trees.'
    }
  ]
}
