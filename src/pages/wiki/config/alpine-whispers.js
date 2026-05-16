export default {
  slug: 'alpine-whispers',
  title: 'Alpine Whispers',
  logo: '/assets/mod-logos/alpine_whispers.webp',
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
          icon: '/assets/icons/alpine-whispers/arolla_pine_smoker.webp',
          search: 'smoker alpine whispers arolla pine cooking furnace',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Alpine Whispers Smoker functions identically to the vanilla Smoker, but is crafted from Arolla Pine materials to match the alpine aesthetic.

It cooks food items at twice the speed of a regular Furnace and can be used as a heat source for other cooking stations.`,
          detailsBullets: [
            'Cooks food twice as fast as a regular Furnace',
            'Crafted from Arolla Pine materials',
            'Can serve as a heat source for nearby cooking stations',
            'Accepts all standard fuel items'
          ]
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
          icon: '/assets/icons/alpine-whispers/alpine_gneiss_bricks.webp',
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
              icon: '/assets/icons/alpine-whispers/alpine_gneiss.webp'
            },
            {
              id: 'alpine_gneiss_bricks',
              title: 'Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/alpine_gneiss_bricks.webp'
            },
            {
              id: 'layered_alpine_gneiss_bricks',
              title: 'Layered Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:layered_alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/layered_alpine_gneiss_bricks.webp'
            },
            {
              id: 'mossy_alpine_gneiss_bricks',
              title: 'Mossy Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:mossy_alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/mossy_alpine_gneiss_bricks_1_.webp'
            },
            {
              id: 'mossy_layered_alpine_gneiss_bricks',
              title: 'Mossy Layered Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:mossy_layered_alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/mossy_layered_alpine_gneiss_bricks.webp'
            },
            {
              id: 'frosty_alpine_gneiss_bricks',
              title: 'Frosty Alpine Gneiss Bricks',
              namespace_id: 'alpinewhispers:frosty_alpine_gneiss_bricks',
              icon: '/assets/icons/alpine-whispers/mossy_alpine_gneiss_bricks.webp'
            }
          ]
        },
        {
          id: 'arolla_pine',
          title: 'Arolla Pine',
          namespace_id: 'alpinewhispers:arolla_pine_log',
          subtitle: 'A complete wood building set including all standard block variants.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_log.webp',
          search: 'arolla pine wood set log planks door trapdoor snowy plains grove',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Arolla Pine is a complete wood building set used across Alpine Whispers builds.

It represents the wood of the Arolla Pine and is the native wood type found in snowy regions, where it grows naturally as [[Arolla Pines|arolla_pine_sapling]].`,
          detailsBullets: [
            'Native wood type of Snowy Plains and Grove biomes',
            'Full wood set with matching variants'
          ],
          items: [
            {
              id: 'arolla_pine_planks',
              title: 'Arolla Pine Planks',
              namespace_id: 'alpinewhispers:arolla_pine_planks',
              icon: '/assets/icons/alpine-whispers/arolla_pine_planks.webp'
            },
            {
              id: 'arolla_pine_door',
              title: 'Arolla Pine Door',
              namespace_id: 'alpinewhispers:arolla_pine_door',
              icon: '/assets/icons/alpine-whispers/arolla_pine_door.webp'
            },
            {
              id: 'arolla_pine_trapdoor',
              title: 'Arolla Pine Trapdoor',
              namespace_id: 'alpinewhispers:arolla_pine_trapdoor',
              icon: '/assets/icons/alpine-whispers/arolla_pine_trapdoor.webp'
            }
          ]
        },
        {
          id: 'windows',
          title: 'Windows',
          subtitle: 'Available as blocks and panes. Keeps the winter outside, at least visually.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_window.webp',
          search: 'window pane glass alpine whispers',
          details: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Clean glass variants made for alpine builds and interiors.`,
          items: [
            {
              id: 'arolla_pine_window',
              title: 'Arolla Pine Window',
              namespace_id: 'alpinewhispers:arolla_pine_window',
              icon: '/assets/icons/alpine-whispers/arolla_pine_window.webp',
              search: 'window block'
            },
            {
              id: 'arolla_pine_window_pane',
              title: 'Arolla Pine Window Pane',
              namespace_id: 'alpinewhispers:arolla_pine_window_pane',
              icon: '/assets/icons/alpine-whispers/arolla_pine_window_pane.webp',
              search: 'window pane'
            }
          ]
        },
        {
          id: 'bed',
          title: 'Bed',
          namespace_id: 'alpinewhispers:arolla_pine_bed',
          subtitle: 'A bed variant used for players and interior builds.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_bed.webp',
          search: 'bed arolla pine alpine whispers',
          details: true,
          detailsTitle: 'Note',
          detailsText: `Due to Minecraft's villager POI system, villagers are unable to recognize and use this bed.`
        },
        {
          id: 'sofa',
          title: 'Sofa',
          namespace_id: 'alpinewhispers:arolla_pine_sofa',
          subtitle: 'A decorative sofa for seating.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sofa.webp',
          search: 'sofa seating alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Sofa is a decorative seating block crafted from Arolla Pine. Right-click to sit down and enjoy the cozy alpine interior.

It pairs well with the Chair and Table to furnish living spaces and common rooms.`,
          detailsBullets: [
            'Right-click to sit',
            'Decorative seating for alpine interiors',
            'Crafted from Arolla Pine materials'
          ]
        },
        {
          id: 'chair',
          title: 'Chair',
          namespace_id: 'alpinewhispers:arolla_pine_chair',
          subtitle: 'Simple seating.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_chair.webp',
          search: 'chair seating alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Chair is a simple seating block made from Arolla Pine. Right-click to sit down.

It fits naturally around the Table and pairs with other alpine furniture for a complete interior.`,
          detailsBullets: [
            'Right-click to sit',
            'Pairs well with the Table',
            'Crafted from Arolla Pine materials'
          ]
        },
        {
          id: 'table',
          title: 'Table',
          namespace_id: 'alpinewhispers:arolla_pine_table',
          subtitle: 'A dining table.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_table.webp',
          search: 'table alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Table is a decorative block crafted from Arolla Pine, designed for dining rooms and common areas.

It connects visually with nearby alpine furniture and looks best surrounded by Chairs.`,
          detailsBullets: [
            'Decorative dining table',
            'Crafted from Arolla Pine materials',
            'Pairs well with Chairs and other alpine furniture'
          ]
        },
        {
          id: 'dresser',
          title: 'Dresser',
          namespace_id: 'alpinewhispers:arolla_pine_dresser',
          subtitle: 'A storage dresser.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_dresser.webp',
          search: 'dresser storage alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Dresser is a functional storage block crafted from Arolla Pine. It provides a small inventory for storing everyday items and fits naturally into alpine bedrooms and living spaces.`,
          detailsBullets: [
            'Right-click to open and access storage',
            'Crafted from Arolla Pine materials',
            'Fits naturally in bedrooms and living areas'
          ]
        },
        {
          id: 'wardrobe',
          title: 'Wardrobe',
          namespace_id: 'alpinewhispers:arolla_pine_wardrobe',
          subtitle: 'A tall two-block wardrobe that stores armor pieces.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_wardrobe.webp',
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
          icon: '/assets/icons/alpine-whispers/arolla_pine_cabinet.webp',
          search: 'cabinet storage alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cabinet is a storage block crafted from Arolla Pine. It provides accessible storage for kitchens, hallways, and workrooms.

Pair it with the Wall Cabinet and Cooking Aisle for a complete kitchen setup.`,
          detailsBullets: [
            'Right-click to open and access storage',
            'Crafted from Arolla Pine materials',
            'Pairs well with Wall Cabinet and Cooking Aisle'
          ]
        },
        {
          id: 'wall_cabinet',
          title: 'Wall Cabinet',
          namespace_id: 'alpinewhispers:arolla_pine_wall_cabinet',
          subtitle: 'Wall mounted storage to free up floor space.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_wall_cabinet.webp',
          search: 'wall cabinet storage alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Wall Cabinet mounts directly onto walls and provides storage without taking up floor space. Ideal for kitchens, entryways, and compact alpine interiors.`,
          detailsBullets: [
            'Mounts on walls',
            'Right-click to open and access storage',
            'Frees up floor space in smaller rooms'
          ]
        },
        {
          id: 'cooking_aisle',
          title: 'Cooking Aisle',
          namespace_id: 'alpinewhispers:arolla_pine_cooking_aisle',
          subtitle: 'A cabinet style block for building longer kitchen lines.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_cooking_aisle.webp',
          search: 'cooking aisle cabinet connectible alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cooking Aisle is a connectable cabinet block designed to build continuous kitchen counters. It connects seamlessly to adjacent Cooking Aisles and other kitchen blocks for a clean, unified look.`,
          detailsBullets: [
            'Connects to adjacent Cooking Aisles for a continuous counter',
            'Decorative kitchen counter block',
            'Pairs well with the Sink and other kitchen furniture'
          ]
        },
        {
          id: 'kitchen_sink',
          title: 'Arolla Pine Sink',
          namespace_id: 'alpinewhispers:arolla_pine_sink',
          subtitle: 'A functional sink you can fill and empty with buckets and bottles.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sink.webp',
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
          icon: '/assets/icons/alpine-whispers/arolla_pine_washbasin.webp',
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
          icon: '/assets/icons/alpine-whispers/arolla_pine_bathtub.webp',
          search: 'bathtub alpine whispers fill drain bucket bottle water potion soak remove negative effects zombie drowned enderman',
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
          icon: '/assets/icons/alpine-whispers/arolla_pine_privy.webp',
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
          icon: '/assets/icons/alpine-whispers/frozen_dirt.webp',
          search: 'frozen dirt block alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Frozen Dirt is a terrain block that generates naturally in cold biomes as part of the Alpine Whispers worldgen. It can also be used as a building material for naturalistic frozen landscapes and outdoor builds.

Alpine Sheep will graze on Frozen Dirt, slowly converting it back to regular dirt.`,
          detailsBullets: [
            'Generates naturally in cold and snowy biomes',
            'Can be used as a building block for frozen terrain',
            'Alpine Sheep graze on it and convert it to regular dirt'
          ]
        },
        {
          id: 'icicles',
          title: 'Icicles',
          namespace_id: 'alpinewhispers:icicles',
          subtitle: 'Hanging ice formations found in cold environments.',
          icon: '/assets/icons/alpine-whispers/icicles.webp',
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
          subtitle: 'A wool variant obtained by shearing Alpine Sheep.',
          icon: '/assets/icons/alpine-whispers/homespun_wool.webp',
          search: 'homespun wool alpine whispers alpine sheep',
          details: true,
          detailsTitle: 'Obtaining',
          detailsText: `Homespun Wool is obtained by shearing Alpine Sheep with Shears. It has a rougher, more rustic appearance than regular wool and is used to craft Homespun Carpet.`,
          detailsBullets: [
            'Obtained by shearing Alpine Sheep',
            'Used to craft Homespun Carpet',
            'Has a distinct rustic texture'
          ]
        },
        {
          id: 'homespun_carpet',
          title: 'Homespun Carpet',
          namespace_id: 'alpinewhispers:homespun_carpet',
          subtitle: 'A fluffy, shaggy carpet made out of Homespun Wool.',
          icon: '/assets/icons/alpine-whispers/homespun_carpet.webp',
          search: 'homespun carpet alpine whispers homespun wool',
          details: true,
          detailsTitle: 'Crafting',
          detailsText: `Homespun Carpet is crafted from Homespun Wool obtained by shearing Alpine Sheep. It adds a cozy, rustic feel to alpine floors and interiors.`,
          detailsBullets: [
            'Crafted from Homespun Wool',
            'Adds a rustic, cozy texture to floors',
            'Pairs well with alpine wood and stone materials'
          ]
        },
        {
          id: 'snow_globe',
          title: 'Snow Globe',
          namespace_id: 'alpinewhispers:snow_globe',
          subtitle: 'A decorative element. Right-click to unleash a small snowstorm inside the globe!',
          icon: '/assets/icons/alpine-whispers/snow_globe.webp',
          search: 'snow globe decoration alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Snow Globe is a decorative block that can be placed on surfaces. Right-clicking it triggers a small particle snowstorm inside the globe, adding a charming seasonal touch to any interior.`,
          detailsBullets: [
            'Purely decorative block',
            'Right-click to trigger a snowstorm particle effect',
            'Great for seasonal and cozy interior builds'
          ]
        },
        {
          id: 'fireplace_cornice',
          title: 'Fireplace Cornice',
          namespace_id: 'alpinewhispers:fireplace_cornice',
          subtitle: 'A connectable trim block that can copy the look of other full blocks.',
          icon: '/assets/icons/alpine-whispers/fireplace_cornice.webp',
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
          icon: '/assets/icons/alpine-whispers/candle_wreath.webp',
          search: 'candle wreath wall decoration light candles flint and steel fire charge bucket waterlogged projectile',
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
          icon: '/assets/icons/alpine-whispers/wall_wreath.webp',
          search: 'wall wreath decoration alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Wall Wreath is a purely decorative block that mounts onto walls. It adds a festive and natural touch to alpine homes and entranceways.

For a lit version, use the Candle Wreath instead.`,
          detailsBullets: [
            'Mounts on walls',
            'Purely decorative',
            'Use the Candle Wreath for a version with lighting'
          ]
        },
        {
          id: 'fairy_lights',
          title: 'Fairy Lights',
          namespace_id: 'alpinewhispers:fairy_lights',
          subtitle: 'A decorative light string that emits a soft glow.',
          icon: '/assets/icons/alpine-whispers/fairy_lights.webp',
          search: 'fairy lights decoration light alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Fairy Lights are a decorative lighting block that can be draped across builds to add a warm, soft glow. They work well for cozy interiors, outdoor patios, and seasonal builds.`,
          detailsBullets: [
            'Emits a soft ambient light',
            'Decorative string light block',
            'Works well indoors and outdoors'
          ]
        },
        {
          id: 'garland',
          title: 'Garland',
          namespace_id: 'alpinewhispers:garland',
          subtitle: 'A decorative garland that also emits light.',
          icon: '/assets/icons/alpine-whispers/garland.webp',
          search: 'garland decoration light alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Garland is a decorative block that adds a festive, natural look to builds while also emitting a small amount of light. It is ideal for seasonal alpine builds and cozy interiors.`,
          detailsBullets: [
            'Decorative garland with light emission',
            'Great for festive and seasonal builds',
            'Pairs well with other alpine decorations'
          ]
        },
        {
          id: 'star_topper',
          title: 'Star Topper',
          namespace_id: 'alpinewhispers:star_topper',
          subtitle: 'A decorative star topper that emits light.',
          icon: '/assets/icons/alpine-whispers/star_topper.webp',
          search: 'star topper decoration light alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Star Topper is a decorative block designed to sit atop builds as a glowing accent piece. It emits a soft light and is perfect as a finishing touch for seasonal builds and alpine tree decorations.`,
          detailsBullets: [
            'Emits a soft glow',
            'Designed as a topper for builds and decorations',
            'Works great with Garlands, Fairy Lights, and Tree Baubles'
          ]
        },
        {
          id: 'tree_baubles',
          title: 'Tree Baubles',
          namespace_id: 'alpinewhispers:tree_baubles',
          subtitle: 'A small seasonal decoration you attach to leaf blocks.',
          icon: '/assets/icons/alpine-whispers/tree_baubles.webp',
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
          icon: '/assets/icons/alpine-whispers/winter_hat.webp',
          search: 'winter hat armor helmet alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Winter Hat is a wearable cosmetic item that occupies the helmet slot. It provides minimal armor protection but adds a cozy, seasonal look to your character.`,
          detailsBullets: [
            'Worn in the helmet slot',
            'Cosmetic item with minimal armor value',
            'Adds a festive alpine look to your character'
          ]
        },
        {
          id: 'bread_on_a_stick',
          title: 'Bread on a Stick',
          namespace_id: 'alpinewhispers:bread_on_a_stick',
          subtitle: 'A handheld food item used to control Alpine Sheep.',
          icon: '/assets/icons/alpine-whispers/bread_on_a_stick.webp',
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
          subtitle: 'Plays Marco\'s absolute favorite track and usually runs on repeat. For over a year. Craftable.',
          namespace_id: 'alpinewhispers:winter_magic_music_disc',
          icon: '/assets/icons/alpine-whispers/winter_magic_music_disc.webp',
          search: 'music disc winter magic alpine whispers craftable favorite track',
          musicdisc: true,
          tracks: [
            {
              title: 'Winter Magic',
              subtitle: "Marco's Favorites",
              icon: '/assets/icons/alpine-whispers/winter_magic_music_disc.webp',
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
          icon: '/assets/icons/alpine-whispers/reindeer.webp',
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
              icon: '/assets/icons/alpine-whispers/cooked_reindeer.webp',
              search: 'reindeer meat cooked food'
            }
          ]
        },
        {
          id: 'cooked_reindeer_dish',
          title: 'Cooked Reindeer Dish',
          namespace_id: 'alpinewhispers:cooked_reindeer_dish',
          subtitle: 'A reindeer dish you can place down and eat bite by bite.',
          icon: '/assets/icons/alpine-whispers/cooked_reindeer_dish.webp',
          search: 'cooked reindeer dish placeable food bites alpine whispers',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Sneak while placing to set the dish down as a block.

Once placed, right click it to eat. Each bite removes a portion until it is gone.`,
          detailsBullets: [
            'Sneak-place to place it as a block',
            'Right click to eat',
            'Consumed in multiple bites'
          ]
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
          icon: '/assets/icons/alpine-whispers/snow_gentian.webp',
          search: 'snow gentian flower alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Snow Gentian is a small decorative flower that generates naturally in cold alpine biomes such as Snowy Plains and Grove. It adds natural variety to frozen landscapes and can be collected and replanted.`,
          detailsBullets: [
            'Generates naturally in cold alpine biomes',
            'Can be collected and replanted',
            'Purely decorative flora'
          ]
        },
        {
          id: 'christmas_rose',
          title: 'Christmas Rose',
          subtitle: 'Christmas Roses can generate naturally in snowy environments.',
          icon: '/assets/icons/alpine-whispers/christmas_rose.webp',
          search: 'christmas rose flower alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Christmas Roses are decorative flowers that generate naturally in snowy environments. They bring a touch of life and color to otherwise barren winter landscapes and can be collected for builds.`,
          detailsBullets: [
            'Generates naturally in snowy biomes',
            'Can be collected and replanted',
            'Adds color to cold winter landscapes'
          ]
        },
        {
          id: 'hoarfrost_grass',
          title: 'Hoarfrost Grass',
          subtitle: 'Hoarfrost Grass can generate naturally across frozen terrain.',
          icon: '/assets/icons/alpine-whispers/hoarfrost_grass.webp',
          search: 'hoarfrost grass alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Hoarfrost Grass is a frost-covered ground cover that generates across frozen terrain in cold biomes. Alpine Sheep will graze on it as part of their natural behavior.`,
          detailsBullets: [
            'Generates on frozen terrain in cold biomes',
            'Grazed on by Alpine Sheep',
            'Decorative ground cover for cold builds'
          ]
        },
        {
          id: 'tall_hoarfrost_grass',
          title: 'Tall Hoarfrost Grass',
          subtitle: 'A taller variant of Hoarfrost Grass found in cold regions.',
          icon: '/assets/icons/alpine-whispers/tall_hoarfrost_grass.webp',
          search: 'tall hoarfrost grass alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Tall Hoarfrost Grass is a two-block-tall frost-covered plant that generates in cold alpine biomes alongside regular Hoarfrost Grass. It adds height and variety to frozen terrain.`,
          detailsBullets: [
            'Two-block-tall variant of Hoarfrost Grass',
            'Generates in cold alpine biomes',
            'Decorative tall grass for winter landscapes'
          ]
        },
        {
          id: 'snow_layers',
          title: 'Snow Layers',
          subtitle: 'Snowy biomes now feature naturally varying snow layer heights.',
          icon: '/assets/icons/alpine-whispers/snow_layer.webp',
          search: 'snow layer worldgen alpine whispers snowy plains grove',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Alpine Whispers adjusts snow generation in Snowy Plains and Grove biomes so that snow layers appear at varying heights rather than a uniform single layer. This creates a more natural and visually interesting winter landscape.`,
          detailsBullets: [
            'Snow layers generate at varying heights in snowy biomes',
            'Affects Snowy Plains and Grove biomes',
            'Creates a more natural-looking winter landscape'
          ]
        },
        {
          id: 'arolla_pine_sapling',
          title: 'Arolla Pines',
          subtitle: 'Arolla Pines can grow naturally in snowy regions and form the basis of the Arolla Pine wood set.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sapling.webp',
          search: 'arolla pine sapling tree worldgen alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Arolla Pines are the native tree type of cold alpine biomes, generating naturally in Snowy Plains and Grove biomes. Their wood forms the basis of the Arolla Pine building set used throughout Alpine Whispers.

Saplings can be collected and grown on your own land.`,
          detailsBullets: [
            'Generates naturally in Snowy Plains and Grove biomes',
            'Source of Arolla Pine wood and building materials',
            'Saplings can be collected and replanted'
          ]
        },
        {
          id: 'cobbled_alpine_gneiss',
          title: 'Alpine Gneiss',
          subtitle: 'Some stone formations are naturally replaced with Alpine Gneiss.',
          icon: '/assets/icons/alpine-whispers/alpine_gneiss.webp',
          search: 'cobbled alpine gneiss stone worldgen alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Alpine Gneiss partially replaces regular stone in Snowy Plains and Grove biomes, adding natural variation to underground and surface stone formations. It can be mined and used as a full building set.`,
          detailsBullets: [
            'Partially replaces stone in cold biomes',
            'Found underground and in surface formations',
            'Full building set available — see Alpine Gneiss entry'
          ]
        },
        {
          id: 'alpine_gneiss_slabs',
          title: 'Gneiss Slabs',
          subtitle: 'Alpine Gneiss slabs can generate naturally near slopes and terrain edges.',
          icon: '/assets/icons/alpine-whispers/alpine_gneiss_slab.webp',
          search: 'alpine gneiss slab worldgen alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Alpine Gneiss Slabs appear naturally near slopes, cliffs, and terrain edges in cold biomes, adding natural-looking stepped formations to the landscape.`,
          detailsBullets: [
            'Generates near slopes and terrain edges in cold biomes',
            'Part of the Alpine Gneiss building set',
            'Adds natural stepped formations to cold landscapes'
          ]
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
          icon: '/assets/icons/alpine-whispers/entity/reindeer.webp',
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
          subtitle: 'A ridable sheep that drops Homespun Wool when sheared.',
          icon: '/assets/icons/alpine-whispers/entity/alpine_sheep.webp',
          search: 'alpine sheep alpine whispers ride bread on a stick homespun wool shears wheat hoarfrost grass frozen dirt snow boost',
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
          subtitle: 'Most gameplay features of Alpine Whispers can be adjusted via a configuration file, usually located at `config/alpinewhispers.json`.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config configuration settings options alpine whispers',
          details: true,
          detailsTitle: 'Configuration File',
          detailsText: `Most gameplay features of Alpine Whispers can be adjusted or disabled via the configuration file, usually located at config/alpinewhispers.json.

This includes worldgen features, entity behavior, and gameplay tweaks.`,
          detailsBullets: [
            'Config file located at config/alpinewhispers.json',
            'Most gameplay features can be toggled or adjusted',
            'Includes worldgen, entity, and gameplay settings'
          ]
        },
        {
          id: 'grove_snow_weather',
          title: 'Grove Snow Weather',
          subtitle: 'In Grove biomes, calm snowfall effects appear during clear weather, occasionally accompanied by distant avalanche sounds.',
          icon: '/assets/icons/misc/weather.webp',
          search: 'grove snow weather ambient falling snow avalanche sounds alpine whispers',
          details: true,
          detailsTitle: 'Ambient Feature',
          detailsText: `In Grove biomes, Alpine Whispers adds a calm ambient snowfall effect that plays during clear weather, giving the impression of light drifting snow even when it is not officially snowing.

Occasionally, distant avalanche sounds accompany this effect for extra atmosphere.`,
          detailsBullets: [
            'Ambient snowfall effect in Grove biomes during clear weather',
            'Occasional distant avalanche sound effects',
            'Purely atmospheric — no gameplay impact'
          ]
        },
        {
          id: 'snow_fog',
          title: 'Snow Fog',
          subtitle: 'Cold and snowy biomes feel mistier, with stronger fog at night and during snowfall or storms.',
          icon: '/assets/icons/misc/fog.webp',
          search: 'snow fog cold biomes grove night storm alpine whispers',
          details: true,
          detailsTitle: 'Ambient Feature',
          detailsText: `Alpine Whispers adds increased fog density to cold and snowy biomes. Fog is lighter during the day but thickens noticeably at night and during snowfall or storms, creating a more immersive and atmospheric winter environment.`,
          detailsBullets: [
            'Increased fog density in cold biomes',
            'Stronger fog at night and during snowfall or storms',
            'Purely visual — no gameplay impact'
          ]
        },
        {
          id: 'alpine_gneiss_reproduction',
          title: 'Alpine Gneiss Reproduction',
          subtitle: 'Icicles can slowly transform nearby stone into Alpine Gneiss under specific cold conditions.',
          icon: '/assets/icons/misc/time.webp',
          search: 'alpine gneiss reproduction icicle frozen dirt stone alpine whispers',
          details: true,
          detailsTitle: 'Mechanic',
          detailsText: `Under specific cold conditions, Icicles can slowly transform nearby stone blocks into Alpine Gneiss over time. This creates a natural spread of alpine stone in cold environments without any player intervention.`,
          detailsBullets: [
            'Icicles trigger Alpine Gneiss conversion in nearby stone',
            'Requires specific cold conditions to activate',
            'Happens slowly and naturally over time'
          ]
        }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'A closer look at how everything comes together ingame',
  impressions: [
    {
      src: '/assets/impressions/alpine-whispers/01.webp',
      caption: 'Lili\'s Alpine Spa featuring Bathtub, Wardrobe and a Dresser'
    },
    {
      src: '/assets/impressions/alpine-whispers/02.webp',
      caption: 'A small Bathroom'
    },
    {
      src: '/assets/impressions/alpine-whispers/03.webp',
      caption: 'Snowy landscapes with soft fog, gentle snowfall, and quiet atmosphere.'
    },
    {
      src: '/assets/impressions/alpine-whispers/04.webp',
      caption: 'Simple bedroom built from classic alpine materials.'
    },
    {
      src: '/assets/impressions/alpine-whispers/05.webp',
      caption: 'Cozy living spaces centered around a fireplace and winterly decor.'
    },
    {
      src: '/assets/impressions/alpine-whispers/06.webp',
      caption: 'Cold alpine slopes with lingering winter fog.'
    },
    {
      src: '/assets/impressions/alpine-whispers/07.webp',
      caption: 'Quiet alpine wildlife sheltering under snowy trees.'
    }
  ]
}