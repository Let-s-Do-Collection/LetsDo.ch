export default {
  slug: "vinery",
  title: "Vinery Wiki",
  logo: "/assets/mod-logos/vinery.png",
  aboutTitle: "Welcome",
  aboutSubtitle: "Everything about wine and vineyards",
  aboutText: `
Welcome to the Vinery Wiki.

This is your home for blocks, items, mechanics, and quick guidance for Vinery.

Vinery adds new wild plants and crops to discover in newly generated chunks, introduces winemaking stations for juice processing and fermentation, and offers a large selection of placeable wines.

Alongside that, you get practical vineyard and cellar decor, dedicated storage options for bottles, and a few unique entities that can help you obtain Vinery items in survival.
`,
  sections: [
    {
      id: "stations",
      title: "Stations and Processing",
      subtitle: "Workstations and interactive elements used for winemaking, processing, and ingredient preparation.",
      entries: [
        {
          id: "grapevine_pot",
          title: "Grapevine Pot",
          namespace_id: "vinery:grapevine_pot",
          subtitle: "Stomp grapes into must and collect fresh grape juice with bottles.",
          icon: "/assets/icons/vinery/grapevine_pot.png",
          search: "grapevine pot stomp grapes must grape juice bottle jump move around cannot mix variants",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Grapevine Pot is used to process grapes into grape juice.

Fill the pot with a single grape variant until it is full. Jump in and move around to stomp the grapes into must. Once the juice is ready, collect it using wine bottles.

You cannot mix different grape variants in the same pot.`,
          detailsBullets: [
            "Processes grapes into grape juice",
            "Fill fully with a single grape variant",
            "Stomp by jumping and moving in the pot",
            "Collect juice with wine bottles",
            "Cannot mix grape variants",
          ],
        },
      {
        id: "fermentation_barrel",
        title: "Fermentation Barrel",
        namespace_id: "vinery:fermentation_barrel",
        subtitle: "Main station for fermenting juice into wine.",
        icon: "/assets/icons/vinery/fermentation_barrel.png",
        search: "fermentation barrel wine crafting station juice fill slot container wine bottle empty shift right click workstation winemaker",
        details: true,
        detailsTitle: "Usage",
        detailsText: `Open the Fermentation Barrel to ferment wine.

Add the required ingredients, insert a container item such as a Wine Bottle, then add the matching juice via the fill slot. Hovering the juice slot shows which juice is stored and how much is left.

When everything is set up correctly, the output slot will produce the finished wine after processing.

To empty the stored juice, shift-right-click the block.`,
        detailsBullets: [
          "Ferments stored juice into wine",
          "Insert ingredients, then add a container item (for example a Wine Bottle)",
          "Fill the barrel with the correct juice using the fill slot",
          "Hover the juice slot to see stored type and amount",
          "Shift-right-click the block to empty stored juice",
          "Workstation for Winemaker Villagers",
        ],
      },
        {
          id: "apple_press",
          title: "Apple Press",
          namespace_id: "vinery:apple_press",
          subtitle: "Crafting station for mashing apples and fermenting apple products.",
          icon: "/assets/icons/vinery/apple_press.png",
          search: "apple press crafting station apple mash fermenting input slots output slot apple juice wine bottle",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Apple Press is used for two processes: mashing and fermenting.

To mash apples, place them into the upper left input slot. After a short time, Apple Mash is produced and moved into the fermenting input slot.

To ferment, use the middle input slots with ingredients and containers such as wine bottles. The output slot provides the finished product after processing.`,
          detailsBullets: [
            "Two processes: mashing and fermenting",
            "Mashing produces Apple Mash automatically",
            "Fermenting uses ingredients plus a container",
            "Finished product appears in the output slot",
          ],
        },
      ],
    },

    {
      id: "decor",
      title: "Decor and Building",
      subtitle: "Decorative and structural elements used to build vineyards, taverns, and cozy cellar spaces.",
      entries: [
        {
          id: "lattice",
          title: "Lattice",
          namespace_id: "vinery:lattice",
          subtitle: "Wall decor that can also be used to cultivate jungle grapes.",
          icon: "/assets/icons/vinery/oak_lattice.png",
          search: "lattice decoration wall passageway cultivate jungle grapes seeds connects toggle supports axe top side placement",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Lattice is a decorative block that can be used to cultivate Jungle Grapes.

Right-click the lattice while holding Jungle Grape Seeds to plant them.

Lattice connects to adjacent lattice blocks. With an axe, right-click to toggle supports on or off. It also supports different placement options, including on top of a block or on the side of another block.`,
          detailsBullets: [
            "Decor block for walls and passageways",
            "Used to cultivate Jungle Grapes",
            "Right-click with Jungle Grape Seeds to plant",
            "Connects to adjacent lattice blocks",
            "Axe interaction toggles supports",
            "Supports multiple placement styles",
          ],
        },
  {
    id: "wine_racks",
    title: "Wine Racks",
    subtitle: "Dedicated storage blocks for displaying wine bottles.",
    icon: "/assets/icons/vinery/oak_wine_rack_small.png",
    search: "wine racks storage bottles display wood variants small large cellar",
    details: true,
    detailsTitle: "Usage",
    detailsText: `Wine Racks are designed to store and display wine bottles as part of your cellar or interior builds.

  They come in different sizes and wood variants, and each rack supports specific bottle formats.`,
    detailsBullets: [
      "Multiple rack sizes",
      "Available in different wood variants",
      "Designed for wine display and organization",
      "Some bottles require specific rack sizes",
    ],
  },
    {
      id: "wine_box",
      title: "Wine Box",
      namespace_id: "vinery:wine_box",
      subtitle: "A compact storage and decoration option for smaller wines.",
      icon: "/assets/icons/vinery/wine_box.png",
      search: "wine box storage decoration smaller wines",
      details: true,
      detailsTitle: "Usage",
      detailsText: `The Wine Box can be opened and closed to access its contents.`,
      detailsBullets: [
        "Shift right-click to open and close",
        "Compact storage for smaller wines",
        "Decorative block for cellars and storage rooms",
      ],
    },
      {
        id: "vinery_slabs",
        title: "Vineyard Slabs",
        namespace_id: "vinery:*_slab*",
        subtitle: "Terrain slabs used for vineyard paths and tiered fields.",
        icon: "/assets/icons/vinery/dirt_slab.png",
        search: "slabs grass dirt coarse dirt vineyard tier expand",
        details: true,
        detailsTitle: "Usage",
        detailsText: `Vinery offers multiple slabs for building vineyards and paths, including Grass, Dirt, and Coarse Dirt.`,
        detailsBullets: ["Grass slab", "Dirt slab", "Coarse dirt slab"],
        items: [
          {
            id: "vineyard_grass_slab",
            title: "Grass Slab",
            namespace_id: "vinery:grass_slab",
            subtitle: "",
            icon: "/assets/icons/vinery/grass_slab.png",
            search: "grass slab vineyard",
          },
          {
            id: "vineyard_dirt_slab",
            title: "Dirt Slab",
            namespace_id: "vinery:dirt_slab",
            subtitle: "",
            icon: "/assets/icons/vinery/dirt_slab.png",
            search: "dirt slab vineyard",
          },
          {
            id: "vineyard_coarse_dirt_slab",
            title: "Coarse Dirt Slab",
            namespace_id: "vinery:coarse_dirt_slab",
            subtitle: "",
            icon: "/assets/icons/vinery/coarse_dirt_slab.png",
            search: "coarse dirt slab vineyard",
          },
        ],
      },
      ],
    },

    {
      id: "items",
      title: "Items, Ingredients, and Tools",
      subtitle: "Everyday items, ingredients, and tools used across winemaking, farming, and processing.",
      entries: [
        {
          id: "stem",
          title: "Stem",
          namespace_id: "vinery:grapevine_stem",
          subtitle: "Required to cultivate normal, taiga, and savanna grapes.",
          icon: "/assets/icons/vinery/grapevine_stem.png",
          search: "stem required cultivate normal taiga savanna grapes two blocks high click upper part seeds",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Stem is required to cultivate normal, taiga, and savanna grapes.

It is two blocks high. To place the respective seeds, click the upper part while holding the seeds.`,
          detailsBullets: ["Required for grape cultivation", "Two blocks high", "Plant seeds by clicking the upper part"],
        },
  {
    id: "grape_juice",
    title: "Grape Juice",
    subtitle: "Processing ingredient used for wine production.",
    icon: "/assets/icons/vinery/red_grapejuice.png",
    search: "grape juice ingredient fermentation barrel wine production red white savanna taiga jungle",
    details: true,
    detailsTitle: "Variants",
    detailsText: ``,
    items: [
      { id: "red_grapejuice", title: "Red Grape Juice", subtitle: "", icon: "/assets/icons/vinery/red_grapejuice.png", search: "red grape juice" },
      { id: "white_grapejuice", title: "White Grape Juice", subtitle: "", icon: "/assets/icons/vinery/white_grapejuice.png", search: "white grape juice" },
      { id: "red_savanna_grapejuice", title: "Red Savanna Grape Juice", subtitle: "", icon: "/assets/icons/vinery/red_savanna_grapejuice.png", search: "red savanna grape juice" },
      { id: "white_savanna_grapejuice", title: "White Savanna Grape Juice", subtitle: "", icon: "/assets/icons/vinery/white_savanna_grapejuice.png", search: "white savanna grape juice" },
      { id: "red_taiga_grapejuice", title: "Red Taiga Grape Juice", subtitle: "", icon: "/assets/icons/vinery/red_taiga_grapejuice.png", search: "red taiga grape juice" },
      { id: "white_taiga_grapejuice", title: "White Taiga Grape Juice", subtitle: "", icon: "/assets/icons/vinery/white_taiga_grapejuice.png", search: "white taiga grape juice" },
      { id: "red_jungle_grapejuice", title: "Red Jungle Grape Juice", subtitle: "", icon: "/assets/icons/vinery/red_jungle_grapejuice.png", search: "red jungle grape juice" },
      { id: "white_jungle_grapejuice", title: "White Jungle Grape Juice", subtitle: "", icon: "/assets/icons/vinery/white_jungle_grapejuice.png", search: "white jungle grape juice" },
    ],
  },
        {
          id: "apple_juice",
          title: "Apple Juice",
          namespace_id: "vinery:apple_juice",
          subtitle: "Processing ingredient used for apple-based recipes.",
          icon: "/assets/icons/vinery/apple_juice.png",
          search: "apple juice ingredient apple press fermenting wine production",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Apple Juice is used as an ingredient for apple-based fermentation recipes.`,
          detailsBullets: ["Ingredient for apple fermentation"],
        },
        {
          id: "wine_bottle",
          title: "Wine Bottle",
          namespace_id: "vinery:wine_bottle",
          subtitle: "A crafting ingredient used for bottling wines and juices.",
          icon: "/assets/icons/vinery/wine_bottle.png",
          search: "wine bottle crafting ingredient bottling wines juices",
        },
        {
          id: "apple_mash",
          title: "Apple Mash",
          namespace_id: "vinery:apple_mash",
          subtitle: "A crafting ingredient used for making apple-based juices and wines.",
          icon: "/assets/icons/vinery/apple_mash.png",
          search: "apple mash crafting ingredient apple press apples juice wine",
          details: true,
          detailsTitle: "How to obtain",
          detailsText: `Apple Mash is obtained using the Apple Press.`,
          detailsBullets: [
            "Obtained from the Apple Press",
            "Used as a crafting ingredient for juices and wines",
          ],
        },
{
  id: "winemaker_armor",
  title: "Winemaker Armor",
  subtitle: "Armor set designed for grape cultivation with a full set bonus.",
  icon: "/assets/icons/vinery/straw_hat.png",
  search: "winemaker armor set bonus bone meal not consumed durability loss",
  details: true,
  detailsTitle: "Usage",
  detailsText: `When wearing the full Winemaker Armor Set, you gain a set bonus that prevents bone meal from being consumed.

Instead, the armor loses durability in exchange.`,
  detailsBullets: [
    "Full set bonus prevents bone meal consumption",
    "Armor loses durability instead",
  ],
  items: [
    {
      id: "winemaker_helmet",
      title: "Straw Hat",
      icon: "/assets/icons/vinery/straw_hat.png",
      search: "winemaker hat helmet armor",
    },
    {
      id: "winemaker_chestplate",
      title: "Winemaker Apron",
      icon: "/assets/icons/vinery/winemaker_apron.png",
      search: "winemaker jacket chestplate armor",
    },
    {
      id: "winemaker_leggings",
      title: "Winemaker Leggings",
      icon: "/assets/icons/vinery/winemaker_leggings.png",
      search: "winemaker pants leggings armor",
    },
    {
      id: "winemaker_boots",
      title: "Winemaker Boots",
      icon: "/assets/icons/vinery/winemaker_boots.png",
      search: "winemaker boots armor",
    },
  ],
},
{
  id: "completionist_banner",
  title: "Completionist Banner",
  namespace_id: "vinery:completionist_banner",
  subtitle: "A trophy banner unlocked by crafting every Vinery wine at least once.",
  icon: "/assets/icons/vinery/vinery_standard.png",
  search: "completionist banner craft all wines advancement inventory same time trophy thank you tooltip",
  details: true,
  detailsTitle: "Reward",
  detailsText: `The Completionist Banner is a special trophy for true Vinery completionists.

You unlock it by crafting every Vinery wine at least once. To trigger the advancement, you must have all wines in your inventory at the same time.

When tooltips are enabled, the banner also shows a small thank you message in its tooltip.`,
  detailsBullets: [
    "Reward for crafting every Vinery wine at least once",
    "Advancement requires all wines in your inventory at the same time",
    "Displays a thank you tooltip message when tooltips are enabled",
    "Placeable trophy banner for builds",
  ],
},
      ],
    },

    {
      id: "consumables",
      title: "Consumables",
      subtitle: "Meals, drinks, soups, and other consumable food items.",
      entries: [
        {
          id: "cherry",
          title: "Cherry",
          namespace_id: "vinery:cherry",
          subtitle: "Fresh fruit harvested from cherry trees.",
          icon: "/assets/icons/vinery/cherry.png",
          search: "cherry fruit harvest tree leaves empty hand",
        },
        {
          id: "rotten_cherry",
          title: "Rotten Cherry",
          namespace_id: "vinery:rotten_cherry",
          subtitle: "An unpleasant cherry with a small chance to drop during harvesting.",
          icon: "/assets/icons/vinery/rotten_cherry.png",
          search: "rotten cherry harvest chance throw at creatures friends",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Rotten Cherry has a small chance to drop when harvesting cherries.

It is not meant to be eaten. It can be thrown at unwanted creatures or friends.`,
          detailsBullets: ["Rare harvest outcome", "Not meant for eating", "Throwable item"],
        },
     {
       id: "wine",
       title: "Wine",
       subtitle: "A wide selection of wines with unique effects.",
       icon: "/assets/icons/vinery/cristel_wine.png",
       search: "wine effects drink placeable aging bottle",
       items: [
         { id: "apple_cider", title: "Apple Cider", subtitle: "", icon: "/assets/icons/vinery/apple_cider.png", search: "apple cider wine" },
         { id: "apple_wine", title: "Apple Wine", subtitle: "", icon: "/assets/icons/vinery/apple_wine.png", search: "apple wine" },
         { id: "mead", title: "Mead", subtitle: "", icon: "/assets/icons/vinery/mead.png", search: "mead" },
         { id: "glowing_wine", title: "Glowing Wine", subtitle: "", icon: "/assets/icons/vinery/glowing_wine.png", search: "glowing wine" },
         { id: "solaris_wine", title: "Solaris Wine", subtitle: "", icon: "/assets/icons/vinery/solaris_wine.png", search: "solaris wine" },
         { id: "kelp_cider", title: "Kelp Cider", subtitle: "", icon: "/assets/icons/vinery/kelp_cider.png", search: "kelp cider" },
         { id: "eiswein", title: "Eiswein", subtitle: "", icon: "/assets/icons/vinery/eiswein.png", search: "eiswein" },
         { id: "aegis_wine", title: "Aegis Wine", subtitle: "", icon: "/assets/icons/vinery/aegis_wine.png", search: "aegis wine" },
         { id: "villagers_fright", title: "Villager's Fright", subtitle: "", icon: "/assets/icons/vinery/villagers_fright.png", search: "villagers fright" },
         { id: "clark_wine", title: "Clark Wine", subtitle: "", icon: "/assets/icons/vinery/clark_wine.png", search: "clark wine" },
         { id: "jellie_wine", title: "Jellie Wine", subtitle: "", icon: "/assets/icons/vinery/jellie_wine.png", search: "jellie wine" },
         { id: "noir_wine", title: "Noir Wine", subtitle: "", icon: "/assets/icons/vinery/noir_wine.png", search: "noir wine" },
         { id: "red_wine", title: "Red Wine", subtitle: "", icon: "/assets/icons/vinery/red_wine.png", search: "red wine" },
         { id: "strad_wine", title: "Strad Wine", subtitle: "", icon: "/assets/icons/vinery/strad_wine.png", search: "strad wine" },
         { id: "cherry_wine", title: "Cherry Wine", subtitle: "", icon: "/assets/icons/vinery/cherry_wine.png", search: "cherry wine" },
         { id: "cristel_wine", title: "Cristel Wine", subtitle: "", icon: "/assets/icons/vinery/cristel_wine.png", search: "cristel wine" },
         { id: "lilitu_wine", title: "Lilitu Wine", subtitle: "", icon: "/assets/icons/vinery/lilitu_wine.png", search: "lilitu wine" },
         { id: "jo_special_mixture", title: "Jo Special Mixture", subtitle: "", icon: "/assets/icons/vinery/jo_special_mixture.png", search: "jo special mixture" },
         { id: "bolvar_wine", title: "Bolvar Wine", subtitle: "", icon: "/assets/icons/vinery/bolvar_wine.png", search: "bolvar wine" },
         { id: "magnetic_wine", title: "Magnetic Wine", subtitle: "", icon: "/assets/icons/vinery/magnetic_wine.png", search: "magnetic wine" },
         { id: "stal_wine", title: "Stal Wine", subtitle: "", icon: "/assets/icons/vinery/stal_wine.png", search: "stal wine" },
         { id: "chenet_wine", title: "Chenet Wine", subtitle: "", icon: "/assets/icons/vinery/chenet_wine.png", search: "chenet wine" },
         { id: "bottle_mojang_noir", title: "Bottle Mojang Noir", subtitle: "", icon: "/assets/icons/vinery/bottle_mojang_noir.png", search: "mojang noir bottle" },
         { id: "chorus_wine", title: "Chorus Wine", subtitle: "", icon: "/assets/icons/vinery/chorus_wine.png", search: "chorus wine" },
         { id: "creepers_crush", title: "Creeper's Crush", subtitle: "", icon: "/assets/icons/vinery/creepers_crush.png", search: "creepers crush" },
         { id: "mellohi_wine", title: "Mellohi Wine", subtitle: "", icon: "/assets/icons/vinery/mellohi_wine.png", search: "mellohi wine" },
       ],
     }
      ],
    },

    {
      id: "crops",
      title: "Crops, Wild Plants, and Worldgen",
      subtitle: "Crops and plants found growing naturally in the world, ready to be harvested or cultivated.",
      entries: [
     {
       id: "apple_cherry_trees",
       title: "Apple and Cherry Trees",
       subtitle: "Fruit trees that generate naturally and can be harvested directly from their leaves.",
       icon: "/assets/icons/vinery/apple_tree_sapling.png",
       search: "apple tree cherry tree worldgen plains meadow sunflower plains fruit leaves harvest right click empty hand rotten cherry",
       details: true,
       detailsTitle: "How it works",
       detailsText: `Apple and Cherry Trees generate naturally in specific overworld biomes.

     Some leaf blocks are able to grow fruit over time. Fruit progresses through multiple growth stages and becomes harvestable at the final stage.

     To harvest fruit, keep your main hand empty and right-click the leaf block that visually shows fruit. The fruit drops instantly and the leaf resets, allowing it to regrow fruit later.

     For apple trees, not every leaf can grow fruit. Some leaves are marked when generated or placed and are eligible for fruit growth. Bone meal can enable fruit growth on a leaf and speed up its growth stages.

     Cherry leaves behave similarly, but only cherry leaves can drop rotten cherries.`,
       detailsBullets: [
         "Generates naturally in the following biomes:",
         "Plains, Meadow, Sunflower Plains",
         "Fruit grows directly on specific leaf blocks",
         "Harvest with empty main hand by right-clicking fruit leaves",
         "Leaves reset after harvesting and can regrow fruit",
         "Bone meal can enable and speed up fruit growth",
         "Small chance to obtain a rotten cherry from cherry leaves",
       ],
     },
{
  id: "grapes",
  title: "Grapes",
  namespace_id: "vinery:*grape*",
  subtitle: "Wild and cultivated grape varieties found across different overworld biomes.",
  icon: "/assets/icons/vinery/red_grape.png",
  search: "grapes worldgen forest plains swamp birch forest meadow sunflower plains river taiga savanna jungle red white lattice stems bushes",
  details: true,
  detailsTitle: "How it works",
  detailsText: `Vinery adds several grape variants that generate naturally in the overworld.

Common grapes can be found in Forest, Plains, Swamp, Birch Forest, Meadow, Sunflower Plains, and River biomes.

Taiga Grapes generate in taiga biomes and are rarer than common grapes.
Savanna Grapes generate in savanna biomes and are very rare.
Jungle Grapes generate in jungle biomes and are relatively common.

Grape seeds can either be planted as grape bushes or grown on grapevine stems. Savanna grapes require lattice blocks to grow properly.`,
  detailsBullets: [
    "Common grapes generate in Forest, Plains, Swamp, Birch Forest, Meadow, Sunflower Plains, and River biomes",
    "Taiga grapes generate in taiga biomes and are rare",
    "Savanna grapes generate in savanna biomes and are very rare",
    "Jungle grapes generate in jungle biomes and are common",
    "Seeds can be planted as grape bushes or on grapevine stems",
    "Savanna grapes require lattice blocks for cultivation",
  ],
  items: [
    { id: "red_grape", title: "Red Grape", subtitle: "", icon: "/assets/icons/vinery/red_grape.png", search: "red grape" },
    { id: "white_grape", title: "White Grape", subtitle: "", icon: "/assets/icons/vinery/white_grape.png", search: "white grape" },
    { id: "savanna_grapes_red", title: "Savanna Red Grapes", subtitle: "", icon: "/assets/icons/vinery/savanna_grapes_red.png", search: "savanna red grapes" },
    { id: "savanna_grapes_white", title: "Savanna White Grapes", subtitle: "", icon: "/assets/icons/vinery/savanna_grapes_white.png", search: "savanna white grapes" },
    { id: "taiga_grapes_red", title: "Taiga Red Grapes", subtitle: "", icon: "/assets/icons/vinery/taiga_grapes_red.png", search: "taiga red grapes" },
    { id: "taiga_grapes_white", title: "Taiga White Grapes", subtitle: "", icon: "/assets/icons/vinery/taiga_grapes_white.png", search: "taiga white grapes" },
    { id: "jungle_grapes_red", title: "Jungle Red Grapes", subtitle: "", icon: "/assets/icons/vinery/jungle_grapes_red.png", search: "jungle red grapes" },
    { id: "jungle_grapes_white", title: "Jungle White Grapes", subtitle: "", icon: "/assets/icons/vinery/jungle_grapes_white.png", search: "jungle white grapes" },
  ],
},
      ],
    },

    {
      id: "entities",
      title: "Entities",
      subtitle: "New entities that find their way into your world through Vinery.",
      entries: [
        {
          id: "wandering_winemaker",
          title: "Wandering Winemaker",
          namespace_id: "vinery:wandering_winemaker",
          subtitle: "A trader that can offer Vinery items in exchange for emeralds.",
          icon: "/assets/icons/vinery/entity/wandering_winemaker.png",
          search: "wandering winemaker trader spawn chance shares with wandering trader offers vinery items emeralds config",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Having trouble finding specific seeds or grapes? Keep an eye out for the Wandering Winemaker.

He can appear from time to time and offers Vinery items in exchange for emeralds. His offers vary each visit.

The Wandering Winemaker shares the spawn chance with the Minecraft Wandering Trader. This can be adjusted in the config.`,
          detailsBullets: [
            "Offers Vinery items for emeralds",
            "Offers vary each visit",
            "Shares spawn chance with Wandering Trader",
            "Spawn chance configurable",
          ],
        },
        {
          id: "winemaker_villager",
          title: "Winemaker Villager",
          namespace_id: "vinery:winemaker",
          subtitle: "A villager profession that sells Vinery items and uses the Apple Press as a workstation.",
          icon: "/assets/icons/vinery/entity/winemaker_villager.png",
          search: "winemaker villager profession trades sells vinery items apple press workstation",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Winemaker Villager is a Vinery profession that sells Vinery items.

The Apple Press acts as the workstation for this profession.`,
          detailsBullets: ["Vinery profession", "Sells Vinery items", "Apple Press is the workstation"],
        },
        {
          id: "winemaker_donkey",
          title: "Winemaker Donkey",
          namespace_id: "vinery:winemaker_donkey",
          subtitle: "A donkey that accompanies the Wandering Winemaker.",
          icon: "/assets/icons/vinery/entity/winemaker_donkey.png",
          search: "winemaker donkey entity vinery wandering winemaker rideable",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Winemaker Donkey spawns together with the Wandering Winemaker.

It behaves like a normal donkey and can be mounted and ridden by the player.`,
          detailsBullets: ["Spawns alongside the Wandering Winemaker", "Rideable like a normal donkey"],
        },
      ],
    },
{
  id: "mob_effects",
  title: "Mob Effects",
  subtitle: "Status effects granted by Vinery foods, wines, and interactions.",
  entries: [
    { id: "teleport", title: "Teleport", subtitle: "Teleports the player randomly forward.", icon: "/assets/icons/vinery/effects/teleport.png", search: "teleport random forward" },
    { id: "magnet", title: "Magnet", subtitle: "Pulls nearby items towards the player.", icon: "/assets/icons/vinery/effects/magnet.png", search: "magnet pull items radius" },
    { id: "party_effect", title: "Partystarter", subtitle: "Melee hits emit firework particles and deal a small amount of extra damage.", icon: "/assets/icons/vinery/effects/party_effect.png", search: "party effect fireworks melee extra damage" },
    { id: "lava_walker", title: "Lava Walker", subtitle: "Walk over lava without taking damage.", icon: "/assets/icons/vinery/effects/lava_walker.png", search: "lava walker walk on lava" },
    { id: "double_jump", title: "Double Jump", subtitle: "Jump a second time while in the air.", icon: "/assets/icons/vinery/effects/double_jump.png", search: "double jump mid air" },
{
  id: "jellie",
  title: "Jellie",
  subtitle: "A small tribute to Jellie, the beloved cat of GoodTimesWithScar. Grants comforting, powerful effects similar to a Golden Apple.",
  icon: "/assets/icons/vinery/effects/jellie.png",
  search: "jellie GoodTimesWithScar tribute cat golden apple"
},    { id: "creeper_effect", title: "Creeper Effect", subtitle: "Triggers an explosion on the affected player.", icon: "/assets/icons/vinery/effects/creeper_effect.png", search: "creeper effect explosion" },
    { id: "experience_effect", title: "Experience", subtitle: "Increases gained experience.", icon: "/assets/icons/vinery/effects/experience_effect.png", search: "experience effect increased gained xp" },
    { id: "climbing_effect", title: "Climbing", subtitle: "Lets you climb steep walls.", icon: "/assets/icons/vinery/effects/climbing_effect.png", search: "climbing effect climb walls" },
    { id: "water_walker", title: "Water Walker", subtitle: "Walk over water.", icon: "/assets/icons/vinery/effects/water_walker.png", search: "water walker walk on water" },

    { id: "armor_effect", title: "Armor", subtitle: "Increases armor and armor toughness.", icon: "/assets/icons/vinery/effects/armor_effect.png", search: "armor effect armor toughness" },
    { id: "frosty_armor", title: "Frosty Armor", subtitle: "Grants armor and damage, but slows you down and makes you freeze.", icon: "/assets/icons/vinery/effects/frosty_armor.png", search: "frosty armor effect freeze slow damage armor" },
    { id: "health_effect", title: "Health", subtitle: "Increases maximum health.", icon: "/assets/icons/vinery/effects/health_effect.png", search: "health effect increase max health" },
    { id: "luck_effect", title: "Luck", subtitle: "Increases luck.", icon: "/assets/icons/vinery/effects/luck_effect.png", search: "luck effect loot chance" },
    { id: "resistance_effect", title: "Resistance", subtitle: "Reduces incoming damage.", icon: "/assets/icons/vinery/effects/resistance_effect.png", search: "resistance effect reduce damage" },
  ],
},
    {
      id: "misc_changes",
      title: "Miscellaneous Changes",
      subtitle: "Small but meaningful tweaks and additions that subtly enhance gameplay and atmosphere.",
      entries: [
        {
          id: "config",
          title: "Configuration",
          subtitle: "Most Vinery features can be adjusted via a configuration file, usually located at `config/vinery.json`.",
          icon: "/assets/icons/misc/config.png",
          search: "config configuration settings options balance json vinery",
        },
        {
          id: "winemaker_zombies",
          title: "Winemaker Zombies",
          subtitle: "Sometimes zombies spawn wearing a winemaker apron.",
          icon: "/assets/icons/misc/zombie.png",
          search: "winemaker zombie vinery apron spawn",
        },
        {
          id: "loot",
          title: "Loot and Exploration",
          subtitle: "Certain items and ingredients can be found while exploring the world.",
          icon: "/assets/icons/misc/chest.png",
          search: "loot chest dungeon village exploration items ingredients vinery",
          details: true,
          detailsTitle: "Where to find loot",
          detailsText: `Some items and ingredients can be found naturally while exploring the world.

They may appear in various loot containers, such as village chests, dungeon chests, or other generated structures.`,
          detailsBullets: [
            "Items and ingredients can appear in loot chests",
            "Found in villages, dungeons, and other structures",
            "Encourages exploration alongside fermenting",
          ],
        },
      ],
    },
  ],
};