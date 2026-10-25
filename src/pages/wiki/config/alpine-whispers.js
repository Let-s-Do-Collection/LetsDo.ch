export default {
  slug: 'alpine-whispers',
  title: 'Alpine Whispers',
  logo: '/assets/mod-logos/alpine_whispers.webp',
  aboutTitle: 'Welcome',
  modVersion: '1.0.4',
  aboutSubtitle: 'Alpine building, cozy interiors and a colder winter',
  aboutText: `Alpine Whispers brings the look of traditional alpine homes into Minecraft.

It adds a stone and a wood building set, furniture for every room, winter decorations, two new animals and a reworked winter landscape.

Snowy Plains and Groves are reshaped with Arolla Pines, gneiss boulders, frozen ground and icicles. Cold biomes also get denser fog, and Groves an ambient snowfall of their own.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Blocks used to process items.',
      entries: [
        {
          id: 'smoker',
          title: 'Arolla Pine Smoker',
          namespace_id: 'alpinewhispers:arolla_pine_smoker',
          subtitle: 'A Smoker in Arolla Pine style.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_smoker.webp',
          search: 'smoker alpine whispers arolla pine cooking furnace',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Arolla Pine Smoker works exactly like the vanilla Smoker. Only the look is different, so it blends into alpine kitchens.`,
          detailsBullets: [
            'Cooks food twice as fast as a Furnace',
            'Uses the same fuels and recipes as the vanilla Smoker'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Building sets, furniture and decorations.',
      entries: [
        {
          id: 'alpine_gneiss',
          title: 'Alpine Gneiss',
          namespace_id: 'alpinewhispers:alpine_gneiss',
          subtitle: 'A stone building set with bricks, layered bricks and mossy variants.',
          icon: '/assets/icons/alpine-whispers/alpine_gneiss_bricks.webp',
          search: 'alpine gneiss stone set bricks layered mossy frosty stairs slab wall stonecutter',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants',
          detailsText: `Alpine Gneiss comes in five variants, each with stairs, slabs and walls. All of them can also be made in the Stonecutter.

Mossy variants are crafted with Moss or Vines. Use a snowball on them, or hit them with a thrown one, to make them frosty.`,
          detailsBullets: [
            'Gneiss, Bricks, Layered Bricks, Mossy Bricks and Mossy Layered Bricks',
            'Stairs, slabs and walls for every variant',
            'Mossy variants turn frosty with snowballs'
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
              title: 'Frosty Mossy Alpine Gneiss Bricks',
              subtitle: 'Mossy bricks after a snowball.',
              icon: '/assets/icons/alpine-whispers/mossy_alpine_gneiss_bricks.webp'
            }
          ]
        },
        {
          id: 'arolla_pine',
          title: 'Arolla Pine',
          namespace_id: 'alpinewhispers:arolla_pine_log',
          subtitle: 'A wood building set from the native tree of Snowy Plains and Groves.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_log.webp',
          search: 'arolla pine wood set log planks stairs slab fence gate door trapdoor button pressure plate stripped',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Arolla Pine wood comes from [[Arolla Pines|arolla_pine_sapling]], which grow naturally in Snowy Plains and Groves.

The set covers logs, wood, stripped variants, planks, stairs, slabs, fences, fence gates, doors, trapdoors, buttons and pressure plates.`,
          detailsBullets: [
            'Grows in Snowy Plains and Groves',
            'Logs, wood and stripped variants',
            'Planks, stairs, slabs, fences and fence gates',
            'Doors, trapdoors, buttons and pressure plates'
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
          subtitle: 'Arolla Pine windows as full blocks and panes.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_window.webp',
          search: 'window pane glass alpine whispers',
          details: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Framed windows for alpine houses, available as a full block and as a pane.`,
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
          title: 'Arolla Pine Bed',
          namespace_id: 'alpinewhispers:arolla_pine_bed',
          subtitle: 'A wooden bed that works like any other bed.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_bed.webp',
          search: 'bed arolla pine alpine whispers sleep spawn',
          details: true,
          detailsTitle: 'Note',
          detailsText: `You can sleep in it and set your spawn point as usual.

Villagers do not recognise it as a bed, because Minecraft only lets them claim vanilla beds.`
        },
        {
          id: 'sofa',
          title: 'Arolla Pine Sofa',
          namespace_id: 'alpinewhispers:arolla_pine_sofa',
          subtitle: 'A soft sofa that connects to the sofas next to it.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sofa.webp',
          search: 'sofa seating couch connect bounce alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to sit down. Sofas placed side by side join into one long couch.

The cushions are soft: falling onto a sofa halves the fall damage and bounces you back up a little.`,
          detailsBullets: [
            'Right click to sit',
            'Connects with neighbouring sofas',
            'Halves fall damage and makes you bounce'
          ]
        },
        {
          id: 'chair',
          title: 'Arolla Pine Chair',
          namespace_id: 'alpinewhispers:arolla_pine_chair',
          subtitle: 'A tall-backed chair to sit on.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_chair.webp',
          search: 'chair seating alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the seat to sit down. The high backrest takes up two blocks, so leave some room above.`,
          detailsBullets: [
            'Right click to sit',
            'Two blocks tall'
          ]
        },
        {
          id: 'table',
          title: 'Arolla Pine Table',
          namespace_id: 'alpinewhispers:arolla_pine_table',
          subtitle: 'A dining table that grows longer when placed in a row.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_table.webp',
          search: 'table connect waterlogged alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Tables placed next to each other connect into one long table.`,
          detailsBullets: [
            'Connects with neighbouring tables',
            'Can be waterlogged'
          ]
        },
        {
          id: 'dresser',
          title: 'Arolla Pine Dresser',
          namespace_id: 'alpinewhispers:arolla_pine_dresser',
          subtitle: 'A dresser with 36 slots of storage.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_dresser.webp',
          search: 'dresser storage connect alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to open its 36 slots. Dressers placed side by side connect visually.`,
          detailsBullets: [
            'Right click to open',
            '36 storage slots',
            'Connects with neighbouring dressers',
            'Can be waterlogged'
          ]
        },
        {
          id: 'wardrobe',
          title: 'Arolla Pine Wardrobe',
          namespace_id: 'alpinewhispers:arolla_pine_wardrobe',
          subtitle: 'A two block tall wardrobe that displays your armor.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_wardrobe.webp',
          search: 'wardrobe arolla pine armor storage tall furniture alpine whispers',
          details: true,
          detailsTitle: 'Armor Storage',
          detailsText: `Use an armor piece on the Wardrobe to hang it inside.

Sneak and use it to take the stored pieces back out. Use it with an empty hand to open or close the doors.`,
          detailsBullets: [
            'Holds a helmet, chestplate, leggings and boots',
            'Use armor on it to store it',
            'Sneak-use to take armor out',
            'Use with an empty hand to open or close it'
          ]
        },
        {
          id: 'cabinet',
          title: 'Arolla Pine Cabinet',
          namespace_id: 'alpinewhispers:arolla_pine_cabinet',
          subtitle: 'A kitchen cabinet with 36 slots of storage.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_cabinet.webp',
          search: 'cabinet storage comparator alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to open its 36 slots. Combine it with the [[Wall Cabinet|wall_cabinet]] and [[Cooking Aisle|cooking_aisle]] for a full kitchen.`,
          detailsBullets: [
            'Right click to open',
            '36 storage slots',
            'Comparators read how full it is'
          ]
        },
        {
          id: 'wall_cabinet',
          title: 'Arolla Pine Wall Cabinet',
          namespace_id: 'alpinewhispers:arolla_pine_wall_cabinet',
          subtitle: 'A cabinet for the wall above your counters.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_wall_cabinet.webp',
          search: 'wall cabinet storage alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Works like the Cabinet but is meant to hang above counters, keeping the floor free.`,
          detailsBullets: [
            'Right click to open',
            '36 storage slots',
            'Comparators read how full it is'
          ]
        },
        {
          id: 'cooking_aisle',
          title: 'Arolla Pine Cooking Aisle',
          namespace_id: 'alpinewhispers:arolla_pine_cooking_aisle',
          subtitle: 'A kitchen counter with storage that joins into long rows.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_cooking_aisle.webp',
          search: 'cooking aisle counter cabinet connect storage alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place several Cooking Aisles next to each other to build one continuous counter. Each one also has storage inside.`,
          detailsBullets: [
            'Connects with neighbouring Cooking Aisles',
            'Right click to open',
            '36 storage slots'
          ]
        },
        {
          id: 'kitchen_sink',
          title: 'Arolla Pine Sink',
          namespace_id: 'alpinewhispers:arolla_pine_sink',
          subtitle: 'A stone sink you can fill with water and draw from.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sink.webp',
          search: 'kitchen sink alpine whispers filled bucket bottle water',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Right click the lower half with an empty hand to turn on the tap, or pour in a Water Bucket.

Once it is filled, draw water with an empty Bucket or a Glass Bottle.`,
          detailsBullets: [
            'Fill with an empty hand or a Water Bucket',
            'Empty Bucket gives a Water Bucket',
            'Glass Bottle gives a Water Bottle',
            'Interact with the lower half'
          ]
        },
        {
          id: 'washbasin',
          title: 'Arolla Pine Washbasin',
          namespace_id: 'alpinewhispers:arolla_pine_washbasin',
          subtitle: 'A washbasin on wooden legs, used just like the sink.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_washbasin.webp',
          search: 'washbasin sink alpine whispers bucket bottle water',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Right click the lower half with an empty hand to turn on the tap, or pour in a Water Bucket.

Once it is filled, draw water with an empty Bucket or a Glass Bottle.`,
          detailsBullets: [
            'Fill with an empty hand or a Water Bucket',
            'Empty Bucket gives a Water Bucket',
            'Glass Bottle gives a Water Bottle',
            'Interact with the lower half'
          ]
        },
        {
          id: 'bathtub',
          title: 'Arolla Pine Bathtub',
          namespace_id: 'alpinewhispers:arolla_pine_bathtub',
          subtitle: 'A bathtub you can fill, soak in and drain again.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_bathtub.webp',
          search: 'bathtub alpine whispers fill drain bucket bottle water soak remove negative effects zombie drowned enderman',
          details: true,
          detailsTitle: 'Function',
          detailsText: `The Bathtub is two blocks long. Right click the head end with an empty hand or a Water Bucket and it slowly fills up over about 45 seconds.

Once it is full you can sit in it. A bath washes off all harmful effects and slows you down while you are in the water. Zombies that fall in turn into Drowned, and Endermen get hurt.

An empty Bucket takes out half of the water, a Glass Bottle a quarter.`,
          detailsBullets: [
            'Two blocks long, interact with the head end',
            'Fill with an empty hand or a Water Bucket',
            'Right click when full to sit in it',
            'Removes harmful effects and slows movement',
            'Zombies turn into Drowned, Endermen take damage',
            'Bucket drains half, Glass Bottle drains a quarter'
          ]
        },
        {
          id: 'privy',
          title: 'Arolla Pine Privy',
          namespace_id: 'alpinewhispers:arolla_pine_privy',
          subtitle: 'An outhouse seat that slowly turns food into Bone Meal.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_privy.webp',
          search: 'privy toilet outhouse alpine whispers sit smelly flies food bone meal rotten flesh compost redstone comparator speed',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Right click to sit down. While seated you get a short Speed boost, but you also lose a little saturation.

Right click with food to drop it in, or toss items onto it. After 30 seconds each item comes out again as Bone Meal or, less often, as Rotten Flesh. Once there is something waiting inside, the privy gets smelly, with flies and buzzing.

Sneak and right click with an empty hand to take everything out. A comparator reads how full it is.`,
          detailsBullets: [
            'Right click to sit',
            'Sitting gives Speed but drains saturation',
            'Turns food into Bone Meal or Rotten Flesh after 30 seconds',
            'Gets smelly while holding its output',
            'Sneak right click to empty it',
            'Comparators read how full it is'
          ]
        },
        {
          id: 'frozen_dirt',
          title: 'Frozen Dirt',
          namespace_id: 'alpinewhispers:frozen_dirt',
          subtitle: 'Dirt frozen solid, found in patches under the snow.',
          icon: '/assets/icons/alpine-whispers/frozen_dirt.webp',
          search: 'frozen dirt block snowball craft icicle alpine whispers',
          details: true,
          detailsTitle: 'Obtaining',
          detailsText: `Frozen Dirt forms small patches in Snowy Plains and Groves. You can also craft it from Dirt and Snowballs.

When an [[Icicle|icicles]] hangs from Frozen Dirt, it can thaw back into regular Dirt. See [[Alpine Gneiss Growth|alpine_gneiss_reproduction]].`,
          detailsBullets: [
            'Generates in patches in Snowy Plains and Groves',
            'Crafted from Dirt and Snowballs',
            'Can thaw into Dirt through Icicles'
          ]
        },
        {
          id: 'icicles',
          title: 'Icicles',
          namespace_id: 'alpinewhispers:icicles',
          subtitle: 'Icicles that hang from the underside of blocks.',
          icon: '/assets/icons/alpine-whispers/icicles.webp',
          search: 'icicles alpine whispers decoration leaves stone blue ice craft',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Icicles generate in Snowy Plains and Groves, hanging from stone, gneiss, frozen dirt and Arolla Pine leaves. Eight of them can be crafted from one Blue Ice.

They can only be placed on the underside of a block and drop when that block is removed. Tiny snowflakes drift down from them.`,
          detailsBullets: [
            'Generates in Snowy Plains and Groves',
            'Crafted from Blue Ice',
            'Placed on the underside of blocks',
            'Can turn stone into Alpine Gneiss'
          ]
        },
        {
          id: 'homespun_wool',
          title: 'Homespun Wool',
          namespace_id: 'alpinewhispers:homespun_wool',
          subtitle: 'Rustic wool shorn from Alpine Sheep.',
          icon: '/assets/icons/alpine-whispers/homespun_wool.webp',
          search: 'homespun wool alpine whispers alpine sheep shears',
          details: true,
          detailsTitle: 'Obtaining',
          detailsText: `Shear an [[Alpine Sheep|alpine_sheep]] to get Homespun Wool. It can be placed as a block or turned into [[Homespun Carpet|homespun_carpet]].`,
          detailsBullets: [
            'Obtained by shearing Alpine Sheep',
            'Used to craft Homespun Carpet'
          ]
        },
        {
          id: 'homespun_carpet',
          title: 'Homespun Carpet',
          namespace_id: 'alpinewhispers:homespun_carpet',
          subtitle: 'A shaggy carpet made from Homespun Wool.',
          icon: '/assets/icons/alpine-whispers/homespun_carpet.webp',
          search: 'homespun carpet alpine whispers homespun wool',
          details: true,
          detailsTitle: 'Crafting',
          detailsText: `Crafted from [[Homespun Wool|homespun_wool]]. A warm, shaggy floor for alpine rooms.`,
          detailsBullets: [
            'Crafted from Homespun Wool'
          ]
        },
        {
          id: 'snow_globe',
          title: 'Snow Globe',
          namespace_id: 'alpinewhispers:snow_globe',
          subtitle: 'Give it a shake and watch the snow swirl inside.',
          icon: '/assets/icons/alpine-whispers/snow_globe.webp',
          search: 'snow globe decoration shake redstone signal alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to shake the globe and set the snow swirling. Shaking it again makes the flurry stronger, then it slowly settles.

While the snow is swirling, the globe also gives off a redstone signal that fades as it settles.`,
          detailsBullets: [
            'Right click to shake it',
            'Shake repeatedly for a stronger flurry',
            'Emits a fading redstone signal',
            'Needs a solid block underneath for the snow to show'
          ]
        },
        {
          id: 'fireplace_cornice',
          title: 'Fireplace Cornice',
          namespace_id: 'alpinewhispers:fireplace_cornice',
          subtitle: 'A connecting trim that can take on the look of other blocks.',
          icon: '/assets/icons/alpine-whispers/fireplace_cornice.webp',
          search: 'fireplace cornice trim alpine whispers connectable applied mimic pickaxe waterlogged',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Cornices placed next to or on top of each other connect and hide their inner edges.

Right click with a full block to give the cornice that block's look. Right click with a pickaxe to get the block back.`,
          detailsBullets: [
            'Connects sideways and vertically',
            'Right click with a full block to copy its look',
            'Right click with a pickaxe to remove it again',
            'Can be waterlogged'
          ]
        },
        {
          id: 'candle_wreath',
          title: 'Candle Wreath',
          namespace_id: 'alpinewhispers:candle_wreath',
          subtitle: 'A table wreath with four candles you light one by one.',
          icon: '/assets/icons/alpine-whispers/candle_wreath.webp',
          search: 'candle wreath advent table decoration light candles flint and steel fire charge bucket waterlogged projectile',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Place the wreath on a table or any other solid surface. Each of its four candles is lit separately by right clicking it with Flint and Steel or a Fire Charge. Burning arrows light a candle too.

Right click a candle with an empty Bucket to put it out. If the wreath gets waterlogged, all candles go out at once.

The more candles burn, the brighter it gets, up to full light with all four.`,
          detailsBullets: [
            'Placed on top of a solid block',
            'Light each candle with Flint and Steel or a Fire Charge',
            'Put a candle out with an empty Bucket',
            'Waterlogging puts out all candles',
            'Brighter with every lit candle'
          ]
        },
        {
          id: 'wall_wreath',
          title: 'Wall Wreath',
          namespace_id: 'alpinewhispers:wall_wreath',
          subtitle: 'An evergreen wreath for walls and doors.',
          icon: '/assets/icons/alpine-whispers/wall_wreath.webp',
          search: 'wall wreath decoration door alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `A purely decorative wreath. It hangs on walls or from the ceiling.

For candles and light, use the [[Candle Wreath|candle_wreath]].`,
          detailsBullets: [
            'Hangs on walls or from ceilings',
            'Purely decorative'
          ]
        },
        {
          id: 'fairy_lights',
          title: 'Fairy Lights',
          namespace_id: 'alpinewhispers:fairy_lights',
          subtitle: 'A glowing string of lights for walls and ceilings.',
          icon: '/assets/icons/alpine-whispers/fairy_lights.webp',
          search: 'fairy lights decoration light alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Fairy Lights hang on walls or from the ceiling and give off a warm light.`,
          detailsBullets: [
            'Hangs on walls or from ceilings',
            'Light level 9'
          ]
        },
        {
          id: 'garland',
          title: 'Garland',
          namespace_id: 'alpinewhispers:garland',
          subtitle: 'An evergreen garland that glows softly and wraps around corners.',
          icon: '/assets/icons/alpine-whispers/garland.webp',
          search: 'garland decoration light corners alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Garlands hang on walls or from the ceiling. Placed in a row they join up, including around inner and outer corners.`,
          detailsBullets: [
            'Hangs on walls or from ceilings',
            'Connects in rows and around corners',
            'Light level 4'
          ]
        },
        {
          id: 'star_topper',
          title: 'Star Topper',
          namespace_id: 'alpinewhispers:star_topper',
          subtitle: 'A bright star for the top of your tree.',
          icon: '/assets/icons/alpine-whispers/star_topper.webp',
          search: 'star topper decoration light tree christmas alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Star Topper shines brightly and sends small sparkles up into the air. It is the finishing touch for a decorated tree.`,
          detailsBullets: [
            'Light level 14',
            'Gives off sparkle particles',
            'Goes well with [[Tree Baubles|tree_baubles]], [[Garlands|garland]] and [[Fairy Lights|fairy_lights]]'
          ]
        },
        {
          id: 'tree_baubles',
          title: 'Tree Baubles',
          namespace_id: 'alpinewhispers:tree_baubles',
          subtitle: 'Glowing baubles you hang directly into leaves.',
          icon: '/assets/icons/alpine-whispers/tree_baubles.webp',
          search: 'tree baubles decoration alpine whispers leaves shears christmas',
          details: true,
          detailsTitle: 'Placement and Removal',
          detailsText: `Use Tree Baubles on any leaf block to decorate it. The leaves stay in place and the baubles give off a soft glow.

To take them down, use Shears or sneak and right click with an empty hand. You get the baubles back and the leaves remain.`,
          detailsBullets: [
            'Can only be placed on leaves',
            'Light level 4',
            'Remove with Shears or by sneak right clicking',
            'The leaves are kept when you remove them'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Wearables, tools and music.',
      entries: [
        {
          id: 'winter_hat',
          title: 'Winter Hat',
          namespace_id: 'alpinewhispers:winter_hat',
          subtitle: 'A cozy knitted hat.',
          icon: '/assets/icons/alpine-whispers/winter_hat.webp',
          search: 'winter hat armor helmet alpine whispers',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Winter Hat is worn in the helmet slot. It is mostly for looks and gives a single point of armor. It can be repaired with wool.`,
          detailsBullets: [
            'Worn in the helmet slot',
            '1 armor point',
            'Repaired with wool'
          ]
        },
        {
          id: 'bread_on_a_stick',
          title: 'Bread on a Stick',
          namespace_id: 'alpinewhispers:bread_on_a_stick',
          subtitle: 'Lets you steer a ridden Alpine Sheep.',
          icon: '/assets/icons/alpine-whispers/bread_on_a_stick.webp',
          search: 'bread on a stick alpine whispers alpine sheep ride control steer boost',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Bread on a Stick works like a Carrot on a Stick, but for [[Alpine Sheep|alpine_sheep]].

Hold it while riding to steer the sheep. Use it for a short speed boost, which costs one point of durability. When it is used up, you are left with a Fishing Rod.`,
          detailsBullets: [
            'Hold it to steer a ridden Alpine Sheep',
            'Use it for a short speed boost',
            '25 uses, turns back into a Fishing Rod'
          ]
        },
        {
          id: 'winter_magic_music_disc',
          title: 'Music Disc: Winter Magic',
          subtitle: 'Marco\'s favourite track, and it has been on repeat for over a year. Craftable.',
          namespace_id: 'alpinewhispers:winter_magic_music_disc',
          icon: '/assets/icons/alpine-whispers/winter_magic_music_disc.webp',
          search: 'music disc winter magic alpine whispers craftable favorite track icicles glowstone',
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
      subtitle: 'Food from the cold.',
      entries: [
        {
          id: 'reindeer_meat',
          title: 'Reindeer Meat',
          namespace_id: 'alpinewhispers:reindeer',
          subtitle: 'Raw meat dropped by Reindeer.',
          icon: '/assets/icons/alpine-whispers/reindeer.webp',
          search: 'reindeer meat raw food cooked',
          details: true,
          detailsTitle: 'Cooked Variant',
          detailsText: `Called simply "Reindeer" in game. It is as filling as Mutton and can be cooked in a Furnace, Smoker or on a Campfire.`,
          items: [
            {
              id: 'cooked_reindeer',
              title: 'Cooked Reindeer',
              namespace_id: 'alpinewhispers:cooked_reindeer',
              subtitle: 'As filling as Cooked Mutton.',
              icon: '/assets/icons/alpine-whispers/cooked_reindeer.webp',
              search: 'reindeer meat cooked food'
            }
          ]
        },
        {
          id: 'cooked_reindeer_dish',
          title: 'Cooked Reindeer Dish',
          namespace_id: 'alpinewhispers:cooked_reindeer_dish',
          subtitle: 'A festive roast you can serve on the table.',
          icon: '/assets/icons/alpine-whispers/cooked_reindeer_dish.webp',
          search: 'cooked reindeer dish placeable food bites alpine whispers',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Eat it straight from your hand, or sneak while placing to put it down as a dish.

Once placed, right click it to eat. The dish lasts for four servings.`,
          detailsBullets: [
            'Can be eaten from the hand',
            'Sneak-place to set it down',
            'Four servings when placed'
          ]
        }
      ]
    },
    {
      id: 'crops',
      title: 'Worldgen and Natural Features',
      subtitle: 'What changes in Snowy Plains and Groves.',
      entries: [
        {
          id: 'snow_gentian',
          title: 'Snow Gentian',
          namespace_id: 'alpinewhispers:snow_gentian',
          subtitle: 'A blue flower of the Snowy Plains.',
          icon: '/assets/icons/alpine-whispers/snow_gentian.webp',
          search: 'snow gentian flower blue dye alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Snow Gentians grow in patches across Snowy Plains, often together with [[Christmas Roses|christmas_rose]]. They can be potted and crafted into Blue Dye.`,
          detailsBullets: [
            'Grows in Snowy Plains',
            'Can be put in a Flower Pot',
            'Crafts into Blue Dye'
          ]
        },
        {
          id: 'christmas_rose',
          title: 'Christmas Rose',
          namespace_id: 'alpinewhispers:christmas_rose',
          subtitle: 'A white flower that blooms in the snow.',
          icon: '/assets/icons/alpine-whispers/christmas_rose.webp',
          search: 'christmas rose flower white dye alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Christmas Roses grow in patches across Snowy Plains, often together with [[Snow Gentians|snow_gentian]]. They can be potted and crafted into White Dye.`,
          detailsBullets: [
            'Grows in Snowy Plains',
            'Can be put in a Flower Pot',
            'Crafts into White Dye'
          ]
        },
        {
          id: 'hoarfrost_grass',
          title: 'Hoarfrost Grass',
          namespace_id: 'alpinewhispers:hoarfrost_grass',
          subtitle: 'Frost-covered grass of Snowy Plains and Groves.',
          icon: '/assets/icons/alpine-whispers/hoarfrost_grass.webp',
          search: 'hoarfrost grass alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Hoarfrost Grass covers the ground in Snowy Plains and Groves. In cold places, fine snowflakes sometimes drift up from it during the day. [[Alpine Sheep|alpine_sheep]] like to graze on it.`,
          detailsBullets: [
            'Grows in Snowy Plains and Groves',
            'Eaten by Alpine Sheep'
          ]
        },
        {
          id: 'tall_hoarfrost_grass',
          title: 'Tall Hoarfrost Grass',
          namespace_id: 'alpinewhispers:tall_hoarfrost_grass',
          subtitle: 'A two block tall version of Hoarfrost Grass.',
          icon: '/assets/icons/alpine-whispers/tall_hoarfrost_grass.webp',
          search: 'tall hoarfrost grass alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Grows alongside regular [[Hoarfrost Grass|hoarfrost_grass]] and gives frozen meadows some height.`,
          detailsBullets: [
            'Two blocks tall',
            'Grows in Snowy Plains and Groves',
            'Eaten by Alpine Sheep'
          ]
        },
        {
          id: 'snow_layers',
          title: 'Snow Drifts',
          subtitle: 'Snow piles up in drifts instead of a flat single layer.',
          icon: '/assets/icons/alpine-whispers/snow_layer.webp',
          search: 'snow layer drifts worldgen alpine whispers snowy plains grove',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `In Snowy Plains and Groves, snow collects in drifts of two to four layers, and more snow gathers under the trees. The ground looks uneven and natural instead of evenly dusted.`,
          detailsBullets: [
            'Snow drifts of different heights',
            'Extra snow under trees',
            'Snowy Plains and Groves'
          ]
        },
        {
          id: 'arolla_pine_sapling',
          title: 'Arolla Pines',
          namespace_id: 'alpinewhispers:arolla_pine_sapling',
          subtitle: 'The native trees of Snowy Plains and Groves.',
          icon: '/assets/icons/alpine-whispers/arolla_pine_sapling.webp',
          search: 'arolla pine sapling tree fallen log worldgen alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Arolla Pines replace the vanilla spruces in Snowy Plains and Groves. They grow in several sizes, and fallen trunks lie scattered between them.

Their saplings can be replanted, and their wood makes up the [[Arolla Pine|arolla_pine]] building set.`,
          detailsBullets: [
            'Replace the vanilla trees in Snowy Plains and Groves',
            'Several tree sizes and fallen logs',
            'Saplings can be replanted'
          ]
        },
        {
          id: 'cobbled_alpine_gneiss',
          title: 'Alpine Gneiss Rocks',
          subtitle: 'Gneiss boulders in the snow and gneiss in the stone of Groves.',
          icon: '/assets/icons/alpine-whispers/alpine_gneiss.webp',
          search: 'alpine gneiss stone boulder rock worldgen alpine whispers grove',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Rock piles and boulders of Alpine Gneiss stick out of the snow in Snowy Plains and Groves.

In Groves, large veins of Alpine Gneiss also replace part of the stone underground.`,
          detailsBullets: [
            'Boulders and rock piles in Snowy Plains and Groves',
            'Replaces some stone in Groves',
            'See [[Alpine Gneiss|alpine_gneiss]] for the building set'
          ]
        },
        {
          id: 'alpine_gneiss_slabs',
          title: 'Gneiss Slabs',
          subtitle: 'Loose Alpine Gneiss slabs scattered across the ground.',
          icon: '/assets/icons/alpine-whispers/alpine_gneiss_slab.webp',
          search: 'alpine gneiss slab worldgen alpine whispers',
          details: true,
          detailsTitle: 'Worldgen',
          detailsText: `Single Alpine Gneiss Slabs lie scattered across Snowy Plains and Groves, like flat stones peeking out of the snow.`,
          detailsBullets: [
            'Found in Snowy Plains and Groves',
            'Part of the [[Alpine Gneiss|alpine_gneiss]] set'
          ]
        }
      ]
    },
    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'Animals of the cold.',
      entries: [
        {
          id: 'reindeer_entity',
          title: 'Reindeer',
          namespace_id: 'alpinewhispers:reindeer',
          subtitle: 'A tameable mount for two riders that can carry a chest.',
          icon: '/assets/icons/alpine-whispers/entity/reindeer.webp',
          search: 'reindeer alpine whispers mount ride tame chest storage sweet berries snow speed ice slow herd',
          details: true,
          detailsTitle: 'Behavior and Riding',
          detailsText: `Reindeer live in herds in taigas, Snowy Plains, Groves and Snowy Slopes.

Tame one like a donkey: keep climbing on until it accepts you. A tamed Reindeer needs no saddle, carries up to two riders and can be fitted with a chest.

Sweet Berries let calves grow faster and make tamed adults breed. Reindeer run faster on snow and slow down on ice. They avoid wolves and polar bears, but fight back when attacked.`,
          detailsBullets: [
            'Lives in herds in cold biomes',
            'Tame by riding it, no saddle needed',
            'Carries two riders and a chest',
            'Sweet Berries for growing and breeding',
            'Faster on snow, slower on ice',
            'Avoids wolves and polar bears, fights back when hurt'
          ]
        },
        {
          id: 'alpine_sheep',
          title: 'Alpine Sheep',
          namespace_id: 'alpinewhispers:alpine_sheep',
          subtitle: 'A sturdy sheep you can ride and shear for Homespun Wool.',
          icon: '/assets/icons/alpine-whispers/entity/alpine_sheep.webp',
          search: 'alpine sheep alpine whispers ride bread on a stick homespun wool shears wheat hoarfrost grass snow boost',
          details: true,
          detailsTitle: 'Behavior and Riding',
          detailsText: `Alpine Sheep live in the same cold biomes as Reindeer. They follow Wheat, breed with it and can be sheared for [[Homespun Wool|homespun_wool]].

Right click a grown sheep with an empty hand to climb on. To steer, hold [[Bread on a Stick|bread_on_a_stick]], and use it for a short burst of speed.

They graze on grass, [[Hoarfrost Grass|hoarfrost_grass]] and even snow.

Do not feed them Bread. After a while the sheep gets upset and hurts itself.`,
          detailsBullets: [
            'Breed with Wheat',
            'Shear for Homespun Wool',
            'Right click with an empty hand to ride',
            'Steer and boost with Bread on a Stick',
            'Grazes on grass, Hoarfrost Grass and snow',
            'Bread upsets it and costs it health'
          ]
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Atmosphere, settings and hidden mechanics.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle: 'The snow fog can be adjusted in config/alpinewhispers.client.json.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config configuration settings options fog strength alpine whispers',
          details: true,
          detailsTitle: 'Configuration File',
          detailsText: `The client config at config/alpinewhispers.client.json controls the snow fog.`,
          detailsBullets: [
            'snowFogEnabled: turns the snow fog on or off',
            'snowFogStrength: fog strength from 0 to 2, default 1'
          ]
        },
        {
          id: 'grove_snow_weather',
          title: 'Grove Snow Weather',
          subtitle: 'Light snow drifts through Groves on clear days, with the occasional distant avalanche.',
          icon: '/assets/icons/misc/weather.webp',
          search: 'grove snow weather ambient falling snow avalanche sounds alpine whispers',
          details: true,
          detailsTitle: 'Ambient Feature',
          detailsText: `In Groves, light snow drifts through the air even on clear days. The longer you stay, the more snow blows around, and now and then you hear an avalanche in the distance.

When it actually rains or snows, the effect pauses.`,
          detailsBullets: [
            'Only in Groves, only in clear weather',
            'Snow flurries that build up over time',
            'Occasional distant avalanche sounds',
            'Purely visual, no gameplay impact'
          ]
        },
        {
          id: 'snow_fog',
          title: 'Snow Fog',
          subtitle: 'Cold biomes are mistier, especially at night and during snowfall.',
          icon: '/assets/icons/misc/fog.webp',
          search: 'snow fog cold biomes grove night storm alpine whispers',
          details: true,
          detailsTitle: 'Ambient Feature',
          detailsText: `Wherever it is cold enough to snow, the view distance closes in. The fog is light at noon, thicker at dusk and at night, and thickest during snowfall and storms. Groves are always a little foggier.

The fog can be adjusted or turned off in the [[configuration|config]].`,
          detailsBullets: [
            'Active in all biomes cold enough to snow',
            'Thicker at dusk, at night and in bad weather',
            'Extra fog in Groves',
            'Adjustable in the client config'
          ]
        },
        {
          id: 'alpine_gneiss_reproduction',
          title: 'Alpine Gneiss Growth',
          subtitle: 'Icicles under Frozen Dirt slowly turn stone into Alpine Gneiss.',
          icon: '/assets/icons/misc/time.webp',
          search: 'alpine gneiss growth reproduction icicle frozen dirt stone farm alpine whispers',
          details: true,
          detailsTitle: 'Mechanic',
          detailsText: `Hang an [[Icicle|icicles]] from [[Frozen Dirt|frozen_dirt]], leave one block of air beneath it and put Stone below that.

Over time the meltwater does its work: the Stone becomes Alpine Gneiss, the Frozen Dirt thaws into Dirt and the Icicle breaks.`,
          detailsBullets: [
            'Frozen Dirt, Icicle, one air block, Stone',
            'Stone turns into Alpine Gneiss',
            'Frozen Dirt thaws and the Icicle breaks',
            'Happens slowly over time'
          ]
        }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'A closer look at how everything comes together in game',
  impressions: [
    {
      src: '/assets/impressions/alpine-whispers/01.webp',
      caption: 'Lili\'s Alpine Spa with Bathtub, Wardrobe and Dresser'
    },
    {
      src: '/assets/impressions/alpine-whispers/02.webp',
      caption: 'A small bathroom'
    },
    {
      src: '/assets/impressions/alpine-whispers/03.webp',
      caption: 'Snowy landscape with soft fog and gentle snowfall'
    },
    {
      src: '/assets/impressions/alpine-whispers/04.webp',
      caption: 'A simple bedroom built from alpine materials'
    },
    {
      src: '/assets/impressions/alpine-whispers/05.webp',
      caption: 'A cozy living room around the fireplace'
    },
    {
      src: '/assets/impressions/alpine-whispers/06.webp',
      caption: 'Cold alpine slopes in lingering fog'
    },
    {
      src: '/assets/impressions/alpine-whispers/07.webp',
      caption: 'Wildlife sheltering under snowy trees'
    }
  ]
}
