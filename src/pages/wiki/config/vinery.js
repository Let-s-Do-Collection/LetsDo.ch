export default {
  slug: "vinery",
  title: "Vinery Wiki",
  logo: "/assets/mod-logos/vinery.png",
  aboutTitle: "Welcome",
  aboutSubtitle: "Vineyards, wine making, and cozy cellar life in survival",
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
          subtitle: "Primary station for crafting wine using ingredients, containers, and stored juice.",
          icon: "/assets/icons/vinery/fermentation_barrel.png",
          search: "fermentation barrel wine crafting station juice slot fill slot container slot wine bottle shift right click empty recipe book removed jei rei workstation winemaker",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Fermentation Barrel is the primary crafting station for making wine.

Place the required ingredients into the input slots, insert a container such as a wine bottle, and add the correct juice using the fill slot. Hovering the juice slot shows the type and amount stored.

To empty the barrel, shift-right-click it. When all requirements are met, the output slot will show the finished product after processing.

The built-in recipe book is removed. Use JEI or REI to view recipes.

The Fermentation Barrel also acts as a workstation for Winemaker Villagers.`,
          detailsBullets: [
            "Crafts wine from ingredients and stored juice",
            "Requires a container item such as a wine bottle",
            "Juice type and amount shown on hover",
            "Shift-right-click to empty",
            "Recipe book removed, use JEI or REI",
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
          icon: "/assets/icons/vinery/lattice.png",
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
          id: "storage_blocks",
          title: "Storage Blocks",
          namespace_id: "vinery:*rack*",
          subtitle: "Special storage options for wine bottles in multiple sizes and wood variants.",
          icon: "/assets/icons/vinery/wine_rack.png",
          search: "wine storage blocks racks small large variations wood type arrangement not every wine fits",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Vinery includes multiple storage blocks for wine bottles, with different wood types, sizes, and arrangements.

Not every wine fits in the small or large wine racks.`,
          detailsBullets: [
            "Multiple rack variants",
            "Different wood types and sizes",
            "Not every wine fits in every rack size",
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
          detailsText: `The Wine Box is a storage and decoration option for smaller wines.`,
          detailsBullets: ["Compact wine storage", "Decorative block"],
        },
        {
          id: "vinery_slabs",
          title: "Vineyard Slabs",
          namespace_id: "vinery:*slab*",
          subtitle: "Terrain slabs used for vineyard paths and tiered fields.",
          icon: "/assets/icons/vinery/slabs.png",
          search: "slabs grass dirt coarse dirt vineyard tier expand",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Vinery offers multiple slabs for building vineyards and paths, including Grass, Dirt, and Coarse Dirt.`,
          detailsBullets: ["Grass slab", "Dirt slab", "Coarse dirt slab"],
        },
        {
          id: "wine_placeable",
          title: "Wine",
          namespace_id: "vinery:*wine*",
          subtitle: "Wines can be placed as decoration for cellars, taverns, and shops.",
          icon: "/assets/icons/vinery/wine.png",
          search: "wine placeable decoration bottle cellar wine shop",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Wines can be placed in the world as decoration, making them perfect for cellars, wine shops, and taverns.`,
          detailsBullets: ["Placeable bottle decoration"],
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
          namespace_id: "vinery:stem",
          subtitle: "Required to cultivate normal, taiga, and savanna grapes.",
          icon: "/assets/icons/vinery/stem.png",
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
          namespace_id: "vinery:grape_juice",
          subtitle: "Processing ingredient used for wine production.",
          icon: "/assets/icons/vinery/grape_juice.png",
          search: "grape juice ingredient fermentation barrel wine production",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Grape Juice is used as an ingredient for crafting wine.`,
          detailsBullets: ["Ingredient for wine recipes"],
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
          id: "basket",
          title: "Basket",
          namespace_id: "vinery:basket",
          subtitle: "A mini storage container with 9 slots, often sold by Winemaker villagers.",
          icon: "/assets/icons/vinery/basket.png",
          search: "basket mini shulker 9 slots winemaker villager trade picnic",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Basket is a small storage container with 9 slots.

It can be obtained from Winemaker Villagers and is great for quick storage and picnics.`,
          detailsBullets: ["9 slot storage", "Often sold by Winemaker Villagers"],
        },
        {
          id: "winemaker_armor",
          title: "Winemaker Armor",
          namespace_id: "vinery:winemaker_*",
          subtitle: "Armor set designed for grape cultivation with a full set bonus.",
          icon: "/assets/icons/vinery/winemaker_armor.png",
          search: "winemaker armor set bonus bone meal not consumed durability loss config toggle",
          details: true,
          detailsTitle: "Usage",
          detailsText: `When wearing the full Winemaker Armor Set, you gain a set bonus that prevents bone meal from being consumed.

The armor loses durability in exchange. Both the durability loss and the set bonus can be adjusted in the config.`,
          detailsBullets: [
            "Full set bonus prevents bone meal consumption",
            "Armor loses durability instead",
            "Durability loss configurable",
            "Set bonus can be toggled in config",
          ],
        },
        {
          id: "completionist_banner",
          title: "Completionist Banner",
          namespace_id: "vinery:completionist_banner",
          subtitle: "A trophy banner for crafting every wine at least once.",
          icon: "/assets/icons/vinery/completionist_banner.png",
          search: "completionist banner craft all wines advancement inventory at same time",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Completionist Banner is awarded to players who crafted all Vinery wines at least once.

To trigger the advancement, you need all wines in your inventory at the same time.`,
          detailsBullets: [
            "Reward for crafting all Vinery wines",
            "Advancement requires all wines in your inventory at the same time",
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
          id: "apple",
          title: "Apple",
          namespace_id: "vinery:apple",
          subtitle: "Fresh fruit harvested from apple trees.",
          icon: "/assets/icons/vinery/apple.png",
          search: "apple fruit harvest tree leaves empty hand",
        },
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
          namespace_id: "vinery:*wine*",
          subtitle: "A wide selection of wines with unique effects.",
          icon: "/assets/icons/vinery/wine.png",
          search: "wine effects drink placeable aging",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Vinery offers many wine variants that provide unique effects when consumed.

Wines can also be placed as decoration. Aging mechanics improve wines over time.`,
          detailsBullets: ["Many wine variants", "Provides effects when consumed", "Also placeable as decoration", "Improves through aging"],
        },
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
          namespace_id: "vinery:*",
          subtitle: "Fruit trees that generate in temperate biomes and can be harvested by hand.",
          icon: "/assets/icons/vinery/worldgen/apple_tree.png",
          search: "apple tree cherry tree worldgen plains meadow sunflower plains fruit leaves harvest empty hand rotten cherry config growth rate",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Apple and Cherry Trees generate in temperate biomes such as Plains, Meadow, and Sunflower Plains.

They look similar to Oak Trees, but some leaves show visible fruit. To harvest, make sure your main hand is empty, then right-click the leaves block that shows fruit to pick it.

There is a small chance to obtain a rotten cherry. The apple growth rate can be adjusted in the config.`,
          detailsBullets: [
            "Generates in Plains, Meadow, Sunflower Plains",
            "Harvest with empty main hand",
            "Right-click fruit leaves to pick",
            "Small chance for rotten cherry",
            "Apple growth rate configurable",
          ],
        },
        {
          id: "grapes_common",
          title: "Grapes",
          namespace_id: "vinery:*grape*",
          subtitle: "Common wild grapes found across many overworld biomes.",
          icon: "/assets/icons/vinery/worldgen/grapes.png",
          search: "grapes worldgen forest plains swamp birch forest meadow sunflower plains river red white common easy to find",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Grapes can be found in Forest, Plains, Swamp, Birch Forest, Meadow, Sunflower Plains, and River biomes.

They are quite common and easy to spot while exploring.`,
          detailsBullets: ["Found in many overworld biomes", "Common and easy to find", "Includes multiple grape variants"],
        },
        {
          id: "taiga_grapes",
          title: "Taiga Grapes",
          namespace_id: "vinery:*taiga*grape*",
          subtitle: "A rare grape variant that primarily generates in taiga biomes.",
          icon: "/assets/icons/vinery/worldgen/taiga_grapes.png",
          search: "taiga grapes worldgen taiga sub variants rare red white",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Taiga Grapes generate mostly in taiga biomes and their sub-variants.

They are rare and may require a longer journey to discover.`,
          detailsBullets: ["Found in taiga biomes and sub-variants", "Rare variant"],
        },
        {
          id: "savanna_grapes",
          title: "Savanna Grapes",
          namespace_id: "vinery:*savanna*grape*",
          subtitle: "A very rare grape variant that generates in savanna biomes.",
          icon: "/assets/icons/vinery/worldgen/savanna_grapes.png",
          search: "savanna grapes worldgen savanna sub variants very rare red white",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Savanna Grapes generate mostly in savanna biomes and their sub-variants.

They are very rare.`,
          detailsBullets: ["Found in savanna biomes and sub-variants", "Very rare variant"],
        },
        {
          id: "jungle_grapes",
          title: "Jungle Grapes",
          namespace_id: "vinery:*jungle*grape*",
          subtitle: "A grape variant that generates in jungle biomes and can be cultivated on lattice.",
          icon: "/assets/icons/vinery/worldgen/jungle_grapes.png",
          search: "jungle grapes worldgen jungle sub variants common lattice cultivation seeds",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Jungle Grapes generate in jungle biomes and their sub-variants.

They are quite common and easy to find.`,
          detailsBullets: ["Found in jungle biomes and sub-variants", "Common variant", "Can be cultivated using lattice"],
        },
        {
          id: "modded_biomes_note",
          title: "Modded Biomes",
          namespace_id: "vinery:*",
          subtitle: "Grapes can also generate in modded biomes when biome tags match.",
          icon: "/assets/icons/vinery/worldgen/modded_biomes.png",
          search: "grapes modded biomes biome tags worldgen compatibility",
          details: true,
          detailsTitle: "Usage",
          detailsText: `All grape variants can also generate in modded biomes as long as those biomes use the respective biome tags.`,
          detailsBullets: ["Works in modded biomes via biome tags"],
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
        { id: "teleports", title: "Teleports", subtitle: "Teleports the player randomly forward.", icon: "/assets/icons/vinery/effects/teleports.png", search: "teleports random forward" },
        { id: "magnetic", title: "Magnetic", subtitle: "Pulls nearby items towards the player.", icon: "/assets/icons/vinery/effects/magnetic.png", search: "magnetic pull items radius" },
        { id: "pint_charisma", title: "Pint Charisma", subtitle: "10% discount while trading with villagers.", icon: "/assets/icons/vinery/effects/pint_charisma.png", search: "pint charisma villager discount 10%" },
        { id: "partystarter", title: "Partystarter", subtitle: "Melee hits emit firework particles and deal a small amount of extra damage.", icon: "/assets/icons/vinery/effects/partystarter.png", search: "partystarter fireworks melee extra damage" },
        { id: "lava_walker", title: "Lava Walker", subtitle: "Walk over lava without taking damage.", icon: "/assets/icons/vinery/effects/lava_walker.png", search: "lava walker walk on lava" },
        { id: "double_jump", title: "Double Jump", subtitle: "Jump a second time while in the air.", icon: "/assets/icons/vinery/effects/double_jump.png", search: "double jump mid air" },
        { id: "staggering", title: "Staggering", subtitle: "Messes with movement and makes you stumble around.", icon: "/assets/icons/vinery/effects/staggering.png", search: "staggering movement stumble drunk" },
        { id: "better_than_golden_apples", title: "Better than Golden Apples", subtitle: "Similar to Golden Apple effects, slightly improved.", icon: "/assets/icons/vinery/effects/better_than_golden_apples.png", search: "better than golden apples golden apple improved effects" },
        { id: "creeper_effect", title: "Creeper Effect", subtitle: "You explode. Kaboom.", icon: "/assets/icons/vinery/effects/creeper_effect.png", search: "creeper effect explode" },
        { id: "experience", title: "Experience", subtitle: "Increases gained experience.", icon: "/assets/icons/vinery/effects/experience.png", search: "experience increased gained xp" },
        { id: "climbing", title: "Climbing", subtitle: "Lets you climb steep walls.", icon: "/assets/icons/vinery/effects/climbing.png", search: "climbing climb walls" },
        { id: "saturated", title: "Saturated", subtitle: "Prevents you from getting hungry too quickly.", icon: "/assets/icons/vinery/effects/saturated.png", search: "saturated hunger prevention" },
        { id: "water_walking", title: "Water Walking", subtitle: "Walk over water.", icon: "/assets/icons/vinery/effects/water_walking.png", search: "water walking walk on water" },
        { id: "perception", title: "Perception", subtitle: "Random effects that alter your visual spectrum.", icon: "/assets/icons/vinery/effects/perception.png", search: "perception visual spectrum random effects" },
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
            "Encourages exploration alongside farming",
          ],
        },
      ],
    },
  ],
};