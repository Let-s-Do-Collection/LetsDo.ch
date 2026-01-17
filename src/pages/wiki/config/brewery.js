export default {
  slug: "brewery",
  title: "Brewery Wiki",
  logo: "/assets/mod-logos/brewery.png",
  aboutTitle: "Welcome",
  aboutSubtitle: "Everything about beer and brewing",
  aboutText: `
Welcome to the Brewery Wiki.

This is your home for blocks, items, mechanics, and quick guidance for Brewery.

Brewery brings brewing into everyday survival: a hands-on Brewingstation, a small crop to grow and process, and a lineup of drinks that come with their own special effects.

Alongside that, you get practical tavern blocks for storage and serving, playful Brewfest outfits with a set bonus, and a few mischievous extras if you feel like causing a little trouble.
`,
  sections: [
    {
      id: "stations",
      title: "Stations and Processing",
      subtitle: "Workstations and interactive elements used for brewing, processing, and ingredient preparation.",
      entries: [
        {
          id: "brewingstation",
          title: "Brewingstation",
          namespace_id: "brewery:*_brewingstation",
          subtitle: "The heart of Brewery: brew Beer and Whiskey through direct interaction.",
          icon: "/assets/icons/brewery/copper_brewingstation.png",
          search: "brewingstation brewing station beer whiskey minigame tiers wood copper netherite multiblock 2x2x2",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Brewingstation is used to brew Beer and Whiskey.

It is a multi-block station and needs a 2x2x2 space to be placed.

There is no GUI. Brewing happens through direct interaction: you add ingredients, start the process, and respond to small interactive events along the way.

The faster you complete these events, the more beer is brewed and the higher its quality becomes. Making too many mistakes can cause a Booze entity to spawn. This does not happen in Peaceful mode.

The station comes in tiers: Wood, Copper, and Netherite. To brew Whiskey, you need Copper or Netherite. The Netherite Brewingstation always produces the highest quality in the maximum possible amount.`,
          detailsBullets: [
            "Multi-block station, requires a 2x2x2 space",
            "No GUI, works via direct interaction",
            "Brewing includes timed interactive events",
            "Faster completion increases output and quality",
            "Mistakes may spawn a Booze entity (not in Peaceful)",
            "Tiers: Wood, Copper, Netherite",
            "Whiskey requires Copper or Netherite",
            "Netherite always yields maximum quality and amount",
          ],
        },
      ],
    },

    {
      id: "decor",
      title: "Decor and Building",
      subtitle: "Decorative and structural elements used to build taverns, cellars, and cozy interiors.",
      entries: [
        {
          id: "big_barrel",
          title: "Big Barrel",
          namespace_id: "brewery:barrel_main",
          subtitle: "A large barrel structure that currently serves as a decorative centerpiece.",
          icon: "/assets/icons/brewery/big_barrel.png",
          search: "big barrel 2x2x2 brewery decor cellar",
          details: true,
          detailsTitle: "Placement",
          detailsText: `The Big Barrel currently serves as a decorative element.

It requires a 2x2x2 space to be placed.`,
          detailsBullets: ["Decorative element", "Requires a 2x2x2 space to be placed"],
        },
        {
          id: "bench",
          title: "Bench",
          namespace_id: "brewery:bench",
          subtitle: "Simple seating for gathering around tables and counters.",
          icon: "/assets/icons/brewery/bench.png",
          search: "bench seating brewery tavern",
        },
        {
          id: "table",
          title: "Table",
          namespace_id: "brewery:table",
          subtitle: "A dining table that can be dressed up with a tablecloth.",
          icon: "/assets/icons/brewery/table.png",
          search: "table brewery tablecloth patterned carpet",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Right-click the Table with a Patterned Carpet to place it on top as a tablecloth.

The carpet can be removed again by interacting with the Table.`,
        },
        {
          id: "cabinet",
          title: "Cabinet",
          namespace_id: "brewery:cabinet",
          subtitle: "A storage block for keeping supplies close and organized.",
          icon: "/assets/icons/brewery/cabinet.png",
          search: "cabinet storage brewery",
        },
        {
          id: "drawer",
          title: "Drawer",
          namespace_id: "brewery:drawer",
          subtitle: "Compact storage for small items and quick access.",
          icon: "/assets/icons/brewery/drawer.png",
          search: "drawer storage brewery",
        },
        {
          id: "sideboard",
          title: "Sideboard",
          namespace_id: "brewery:sideboard",
          subtitle: "Extra storage that fits perfectly near counters and kitchens.",
          icon: "/assets/icons/brewery/sideboard.png",
          search: "sideboard storage brewery",
        },
        {
          id: "wall_cabinet",
          title: "Wall Cabinet",
          namespace_id: "brewery:wall_cabinet",
          subtitle: "Wall mounted storage to free up floor space.",
          icon: "/assets/icons/brewery/wall_cabinet.png",
          search: "wall cabinet storage brewery kitchen",
        },
        {
          id: "bar_counter",
          title: "Bar Counter",
          namespace_id: "brewery:bar_counter",
          subtitle: "A counter block for serving, decorating, and building a proper bar.",
          icon: "/assets/icons/brewery/bar_counter.png",
          search: "bar counter brewery",
        },
        {
          id: "patterned_wool",
          title: "Patterned Wool",
          namespace_id: "brewery:patterned_wool",
          subtitle: "A patterned wool block for cozy interiors and Brewfest colors.",
          icon: "/assets/icons/brewery/patterned_wool.png",
          search: "patterned wool brewery",
        },
        {
          id: "gingerbread",
          title: "Gingerbread",
          namespace_id: "brewery:gingerbread",
          subtitle: "A writable wall decoration for notes, menus, and messages.",
          icon: "/assets/icons/brewery/gingerbread.png",
          search: "gingerbread wall decoration writable sign glow ink",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Gingerbread is a wall mounted decoration that works as a writable note.

It is intended for short messages only, such as quick notes, labels, or small menu entries.

Right-click it to open the text screen and add your text. You can also apply Glow Ink to make the text glow, which helps it stand out in darker rooms.`,
          detailsBullets: [
            "Wall placed writable decoration",
            "Designed for short notes and brief messages",
            "Right-click to open the text interface",
            "Supports glowing text using Glow Ink",
            "Needs a sturdy surface behind it",
          ],
        },
        {
          id: "completionist_banner",
          title: "Completionist Banner",
          namespace_id: "brewery:brewery_banner",
          subtitle: "A trophy banner for finishing the full beverage collection.",
          icon: "/assets/icons/brewery/banner.png",
          search: "completionist banner brewery reward craft all beverages advancement",
          details: true,
          detailsTitle: "Reward",
          detailsText: `The Completionist Banner is a special reward for players who crafted every Brewery beverage at least once.

To trigger the advancement, you need to have all beverages in your inventory at the same time.

Once earned, it can be placed as a standing banner or as a wall banner.`,
          detailsBullets: [
            "Reward for crafting all Brewery beverages",
            "Advancement requires all beverages in your inventory at the same time",
            "Placeable as a standing banner or as a wall banner",
          ],
        },
      ],
    },

    {
      id: "items",
      title: "Items, Ingredients, and Tools",
      subtitle: "Everyday items, ingredients, tools, and outfits used across brewing and tavern life.",
      entries: [
        {
          id: "breathalyzer",
          title: "Breathalyzer",
          namespace_id: "brewery:breathalyzer",
          subtitle: "Blow into it to see how drunk you currently are.",
          icon: "/assets/icons/brewery/breathalyzer.png",
          search: "breathalyzer check drunkenness easy warning danger drunk blackout brewery tool",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Hold right-click to use it. After a short moment, it stores a reading and shows it as a colored tooltip level: EASY, WARNING, or DANGER.

The Breathalyzer reads your current DRUNK effect strength, so it is a quick way to see how close you are to getting completely wasted.`,
          detailsBullets: ["Hold right-click to use", "After a short delay, it saves the result", "Shows: EASY, WARNING, or DANGER", "Based on your current DRUNK effect strength"],
        },
        {
          id: "dark_brew",
          title: "Dark Brew",
          namespace_id: "brewery:dark_brew",
          subtitle: "A mischievous bottle that turns into trouble when it hits the ground.",
          icon: "/assets/icons/brewery/dark_brew.png",
          search: "dark brew throw spawn booze prank brewery peaceful mode",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Dark Brew is not meant to be consumed like a normal drink.

When thrown, it breaks on impact and spawns a Booze entity at the landing spot.

This does not work in Peaceful mode, since Booze will not spawn there.

It is perfect for pranks and harmless chaos.`,
          detailsBullets: ["Throwable item", "Spawns a Booze on impact", "Does not work in Peaceful mode", "Great for pranks and lighthearted chaos"],
        },
        {
          id: "dried_ingredients",
          title: "Dried Ingredients",
          namespace_id: "brewery:dried_*",
          subtitle: "Grains and harvest goods that can be dried in a Silo, then used or displayed as placeable bags.",
          icon: "/assets/icons/brewery/dried_wheat.png",
          search: "dried ingredients silo drying wheat barley corn oat placeable bag block brewery",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Certain ingredients can be dried inside a Silo.

Once dried, they become items you can use in recipes, and they can also be placed as blocks in the world as decorative bags.`,
          detailsBullets: ["Created by drying raw ingredients inside a Silo", "Results in a usable dried ingredient item", "Can also be placed as a decorative bag block"],
          items: [
            { id: "dried_wheat", title: "Dried Wheat", namespace_id: "brewery:dried_wheat", subtitle: "Dried wheat stored in a placeable bag.", icon: "/assets/icons/brewery/dried_wheat.png", search: "dried wheat silo placeable bag" },
            { id: "dried_barley", title: "Dried Barley", namespace_id: "brewery:dried_barley", subtitle: "Dried barley stored in a placeable bag.", icon: "/assets/icons/brewery/dried_barley.png", search: "dried barley silo placeable bag" },
            { id: "dried_corn", title: "Dried Corn", namespace_id: "brewery:dried_corn", subtitle: "Dried corn stored in a placeable bag.", icon: "/assets/icons/brewery/dried_corn.png", search: "dried corn silo placeable bag" },
            { id: "dried_oat", title: "Dried Oat", namespace_id: "brewery:dried_oat", subtitle: "Dried oat stored in a placeable bag.", icon: "/assets/icons/brewery/dried_oat.png", search: "dried oat silo placeable bag" },
          ],
        },
        {
          id: "beer_mug",
          title: "Beer Mug",
          namespace_id: "brewery:beer_mug",
          subtitle: "A mug for drinks that can also be used as a flower pot.",
          icon: "/assets/icons/brewery/beer_mug.png",
          search: "beer mug flower pot brewery",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Beer Mug is used for beverages, and can also be repurposed as a small flower pot.`,
          detailsBullets: ["Mug for beverages", "Can be used as a flower pot"],
        },
        {
          id: "regalia_set",
          title: "Regalia",
          subtitle: "Traditional Brewfest pieces with a full set bonus.",
          icon: "/assets/icons/brewery/brewfest_regalia.png",
          search: "brewfest regalia hat trousers boots lederhosen harddrinking",
          details: true,
          detailsTitle: "Usage",
          detailsText: `These are individual outfit pieces. You can combine them with any other Brewfest clothing.

If you wear the full set at the same time, you gain Harddrinking and become immune to drunkenness effects.`,
          detailsBullets: ["Individual clothing pieces", "Can be combined with other Brewfest items", "Full set bonus: Harddrinking", "Harddrinking: immune to Drunkness effects"],
          items: [
            { id: "brewfest_hat_red", title: "Brewfest Hat", namespace_id: "brewery:brewfest_hat_red", subtitle: "A red Brewfest hat.", icon: "/assets/icons/brewery/brewfest_hat.png", search: "brewfest hat red" },
            { id: "brewfest_regalia", title: "Brewfest Regalia", namespace_id: "brewery:brewfest_regalia", subtitle: "A classic chest piece for the regalia look.", icon: "/assets/icons/brewery/brewfest_regalia.png", search: "brewfest regalia chest lederhosen" },
            { id: "brewfest_trousers", title: "Brewfest Trousers", namespace_id: "brewery:brewfest_trousers", subtitle: "Trousers that pair well with many Brewfest tops.", icon: "/assets/icons/brewery/brewfest_trousers.png", search: "brewfest trousers" },
            { id: "brewfest_boots", title: "Brewfest Boots", namespace_id: "brewery:brewfest_boots", subtitle: "Sturdy boots for long festival nights.", icon: "/assets/icons/brewery/brewfest_boots.png", search: "brewfest boots" },
          ],
        },
        {
          id: "dirndl_set",
          title: "Dirndl",
          subtitle: "Classic dirndl pieces with a full set bonus.",
          icon: "/assets/icons/brewery/brewfest_dress.png",
          search: "dirndl blouse dress shoes blue hat harddrinking",
          details: true,
          detailsTitle: "Usage",
          detailsText: `These are individual outfit pieces. You can combine them with any other Brewfest clothing.

If you wear the full set at the same time, you gain Harddrinking and become immune to drunkenness effects.`,
          detailsBullets: ["Individual clothing pieces", "Can be combined with other Brewfest items", "Full set bonus: Harddrinking", "Harddrinking: immune to Drunkness effects"],
          items: [
            { id: "brewfest_hat_blue", title: "Brewfest Hat", namespace_id: "brewery:brewfest_hat_blue", subtitle: "A blue Brewfest hat.", icon: "/assets/icons/brewery/brewfest_hat_red.png", search: "brewfest hat blue" },
            { id: "brewfest_blouse", title: "Brewfest Blouse", namespace_id: "brewery:brewfest_blouse", subtitle: "A blouse for your dirndl look.", icon: "/assets/icons/brewery/brewfest_blouse.png", search: "brewfest blouse dirndl" },
            { id: "brewfest_dress", title: "Brewfest Dress", namespace_id: "brewery:brewfest_dress", subtitle: "A dress that pairs with many Brewfest pieces.", icon: "/assets/icons/brewery/brewfest_dress.png", search: "brewfest dress dirndl" },
            { id: "brewfest_shoes", title: "Brewfest Shoes", namespace_id: "brewery:brewfest_shoes", subtitle: "Comfortable shoes for dancing and wandering.", icon: "/assets/icons/brewery/brewfest_shoes.png", search: "brewfest shoes dirndl" },
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
          id: "beer",
          title: "Beer",
          namespace_id: "brewery:beer_*",
          subtitle: "A selection of beers, each with its own effect.",
          icon: "/assets/icons/brewery/beer_hops.png",
          search: "beer mug brewery effects wheat hops barley oat nettle haley",
          details: true,
          detailsTitle: "All Beers",
          detailsText: "",
          items: [
            { id: "beer_wheat", title: "Beer Wheat", namespace_id: "brewery:beer_wheat", subtitle: "", icon: "/assets/icons/brewery/beer_wheat.png", search: "beer wheat" },
            { id: "beer_hops", title: "Beer Hops", namespace_id: "brewery:beer_hops", subtitle: "", icon: "/assets/icons/brewery/beer_hops.png", search: "beer hops" },
            { id: "beer_barley", title: "Beer Barley", namespace_id: "brewery:beer_barley", subtitle: "", icon: "/assets/icons/brewery/beer_barley.png", search: "beer barley" },
            { id: "beer_oat", title: "Beer Oat", namespace_id: "brewery:beer_oat", subtitle: "", icon: "/assets/icons/brewery/beer_oat.png", search: "beer oat" },
            { id: "beer_nettle", title: "Beer Nettle", namespace_id: "brewery:beer_nettle", subtitle: "", icon: "/assets/icons/brewery/beer_nettle.png", search: "beer nettle" },
            { id: "beer_haley", title: "Beer Haley", namespace_id: "brewery:beer_haley", subtitle: "", icon: "/assets/icons/brewery/beer_haley.png", search: "beer haley" },
          ],
        },
        {
          id: "food",
          title: "Food",
          namespace_id: "",
          subtitle: "Oktoberfest inspired meals for long nights and full hearts.",
          icon: "/assets/icons/brewery/pretzel.png",
          search: "brewery food oktoberfest sausage pretzel pork knuckle dumplings potato salad mashed potatoes chicken",
          details: true,
          detailsTitle: "All Meals",
          detailsText: "",
          items: [
            { id: "sausage", title: "Sausage", namespace_id: "brewery:sausage", subtitle: "", icon: "/assets/icons/brewery/sausage.png", search: "sausage food" },
            { id: "pretzel", title: "Pretzel", namespace_id: "brewery:pretzel", subtitle: "", icon: "/assets/icons/brewery/pretzel.png", search: "pretzel food" },
            { id: "pork_knuckle", title: "Pork Knuckle", namespace_id: "brewery:pork_knuckle", subtitle: "", icon: "/assets/icons/brewery/pork_knuckle.png", search: "pork knuckle food" },
            { id: "fried_chicken", title: "Fried Chicken", namespace_id: "brewery:fried_chicken", subtitle: "", icon: "/assets/icons/brewery/fried_chicken.png", search: "fried chicken food" },
            { id: "half_chicken", title: "Half Chicken", namespace_id: "brewery:half_chicken", subtitle: "", icon: "/assets/icons/brewery/half_chicken.png", search: "half chicken food" },
            { id: "mashed_potatoes", title: "Mashed Potatoes", namespace_id: "brewery:mashed_potatoes", subtitle: "", icon: "/assets/icons/brewery/mashed_potatoes.png", search: "mashed potatoes food" },
            { id: "potato_salad", title: "Potato Salad", namespace_id: "brewery:potato_salad", subtitle: "", icon: "/assets/icons/brewery/potato_salad.png", search: "potato salad food" },
            { id: "dumplings", title: "Dumplings", namespace_id: "brewery:dumplings", subtitle: "", icon: "/assets/icons/brewery/dumplings.png", search: "dumplings food" },
          ],
        },
      ],
    },

    {
      id: "crops",
      title: "Crops, Wild Plants, and Worldgen",
      subtitle: "Crops and plants found growing naturally in the world, ready to be harvested or cultivated.",
      entries: [
        {
          id: "hops",
          title: "Hops",
          namespace_id: "brewery:*hops*",
          subtitle: "Hops can be found in taiga biomes and cultivated for brewing.",
          icon: "/assets/icons/brewery/wild_hops.png",
          search: "hops taiga village woodland mansion wild hops crop rope climbing",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Hops can be found growing naturally in Taiga biomes and their sub-variants.

They can also generate in Villages and Woodland Mansions.

When cultivated, hops can grow taller over time and can be supported using Ropes, allowing them to climb upward similar to other climbing crops.

Hops will also spawn in modded biomes as long as they use the respective biome tags.`,
          items: [
            {
              id: "hops_item",
              title: "Hops",
              namespace_id: "brewery:hops",
              subtitle: "Used for cultivation and as a brewing ingredient. The Hops itself can be planted to grow more.",
              icon: "/assets/icons/brewery/hops.png",
              search: "hops item seed ingredient beer",
            },
            {
              id: "hops_crop",
              title: "Hops Crop",
              namespace_id: "brewery:hops_crop",
              subtitle: "A cultivated hops plant, capable of climbing Ropes when placed above and alongside the plant.",
              icon: "/assets/icons/brewery/hops_crop.png",
              search: "hops crop cultivated growth rope climbing",
            },
          ],
        },
      ],
    },

    {
      id: "entities",
      title: "Entities",
      subtitle: "New entities that find their way into your world through Brewery.",
      entries: [
        {
          id: "booze",
          title: "Booze",
          namespace_id: "brewery:booze",
          subtitle: "A hostile Beer Elemental entity.",
          icon: "/assets/icons/brewery/entity/booze.png",
          search: "booze beer elemental hostile mob brewingstation failure dark brew thrown entity",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Booze is a hostile Beer Elemental.

It can spawn when too many mistakes are made during Brewingstation events. Additionally, throwing a Dark Brew can also summon a Booze directly.

Booze actively hunts players and uses both melee and ranged attacks. It does not spawn in Peaceful mode.`,
          detailsBullets: [
            "Hostile Beer Elemental entity",
            "Can spawn from failed Brewingstation events",
            "Also summoned by throwing a Dark Brew",
            "Attacks players with melee and ranged attacks",
            "Does not spawn in Peaceful mode",
          ],
        },
      ],
    },

    {
      id: "mob_effects",
      title: "Mob Effects",
      subtitle: "Status effects granted by Brewery foods, items, and interactions.",
      entries: [
        { id: "toxic_touch", title: "Toxic Touch", namespace_id: "brewery:toxic_touch", subtitle: "Melee attacks apply Poison to hit entities.", icon: "/assets/icons/brewery/effects/toxictouch.png", search: "toxic touch poison melee attacks" },
        { id: "renewing_touch", title: "Renewing Touch", namespace_id: "brewery:renewing_touch", subtitle: "Melee attacks apply Regeneration to hit entities.", icon: "/assets/icons/brewery/effects/renewingtouch.png", search: "renewing touch regeneration melee attacks" },
        { id: "protective_touch", title: "Protective Touch", namespace_id: "brewery:protective_touch", subtitle: "Melee attacks grant Absorption for a short duration.", icon: "/assets/icons/brewery/effects/protectivetouch.png", search: "protective touch absorption melee attacks" },
        { id: "healing_touch", title: "Healing Touch", namespace_id: "brewery:healing_touch", subtitle: "Melee attacks directly heal hit entities.", icon: "/assets/icons/brewery/effects/healingtouch.png", search: "healing touch heal melee attacks" },
        { id: "haley", title: "Haley", namespace_id: "brewery:haley", subtitle: "Grants temporary flight for a short duration.", icon: "/assets/icons/brewery/effects/haley.png", search: "haley temporary flight" },
        { id: "harddrinking", title: "Harddrinking", namespace_id: "brewery:harddrinking", subtitle: "Prevents all negative alcohol-related effects.", icon: "/assets/icons/brewery/effects/harddrinking.png", search: "harddrinking alcohol immunity" },
        { id: "drunk", title: "Drunk", namespace_id: "brewery:drunk", subtitle: "Too much alcohol, and the world starts to wobble.", icon: "/assets/icons/brewery/effects/drunk.png", search: "drunk alcohol effect" },
        { id: "blackout", title: "Blackout", namespace_id: "brewery:blackout", subtitle: "The next step after Drunk. Strong and unforgiving.", icon: "/assets/icons/brewery/effects/blackout.png", search: "blackout alcohol extreme drunk" },
        { id: "pint_charisma", title: "Pint Charisma", namespace_id: "brewery:pint_charisma", subtitle: "Reduces villager trading prices by 10%.", icon: "/assets/icons/brewery/effects/pintcharisma.png", search: "pint charisma villager discount" },
        { id: "partystarter", title: "Partystarter", namespace_id: "brewery:partystarter", subtitle: "Melee hits pop fireworks and deal a little extra damage.", icon: "/assets/icons/brewery/effects/partystarter.png", search: "partystarter fireworks melee damage" },
        { id: "snow_white", title: "Snow White", namespace_id: "brewery:snow_white", subtitle: "Nearby animals feel unusually friendly and stick around.", icon: "/assets/icons/brewery/effects/snowwhite.png", search: "snow white animals follow" },
        { id: "combustion", title: "Combustion", namespace_id: "brewery:combustion", subtitle: "Sets nearby enemies on fire for a short time.", icon: "/assets/icons/brewery/effects/combustion.png", search: "combustion ignite nearby enemies" },
        { id: "explosion", title: "Explosion", namespace_id: "brewery:explosion", subtitle: "Attacks have a small chance to launch a fireball.", icon: "/assets/icons/brewery/effects/explosion.png", search: "explosion fireball chance attacks" },
        { id: "repulsion", title: "Repulsion", namespace_id: "brewery:repulsion", subtitle: "Periodically pushes enemies away from you.", icon: "/assets/icons/brewery/effects/repulsion.png", search: "repulsion knockback nearby enemies" },
        { id: "lightning", title: "Lightning", namespace_id: "brewery:lightning", subtitle: "Attacks have a small chance to strike the target.", icon: "/assets/icons/brewery/effects/lightning.png", search: "lightning strike chance attacks" },
        { id: "mining", title: "Mining", namespace_id: "brewery:mining", subtitle: "The deeper you go, the faster you can mine.", icon: "/assets/icons/brewery/effects/mining.png", search: "mining depth based speed" },
        { id: "pacify", title: "Pacify", namespace_id: "brewery:pacify", subtitle: "Makes enemies less persistent. Endermen eye contact becomes safe.", icon: "/assets/icons/brewery/effects/pacify.png", search: "pacify reduce aggro enderman" },
      ],
    },

    {
      id: "misc_changes",
      title: "Miscellaneous Changes",
      subtitle: "Small but meaningful tweaks and additions that subtly enhance gameplay and atmosphere.",
      entries: [
        {
          id: "festive_zombies",
          title: "Festive Zombies",
          subtitle: "Sometimes zombies show up in Brewfest clothing, and yes, it looks ridiculous.",
          icon: "/assets/icons/misc/zombie.png",
          search: "festive zombie brewfest spawn",
        },
        {
          id: "farmer_trades",
          title: "Expanded Trades",
          subtitle: "Certain Brewery items have been added to Farmer Villager trade pools, allowing them to be obtained naturally through trading.",
          icon: "/assets/icons/misc/emerald.png",
          search: "farmer villager trades brewery items economy progression",
        },
        {
          id: "config",
          title: "Configuration",
          subtitle: "Most gameplay features of Brewery can be adjusted via a configuration file, usually located at `config/brewery.json`.",
          icon: "/assets/icons/misc/config.png",
          search: "config configuration settings options balance json brewery",
        },
        {
          id: "loot",
          title: "Loot and Exploration",
          subtitle: "Certain items and ingredients can be found while exploring the world.",
          icon: "/assets/icons/misc/chest.png",
          search: "loot chest dungeon village exploration items ingredients",
          details: true,
          detailsTitle: "Where to find loot",
          detailsText: `Some items and ingredients can be found naturally while exploring the world.

They may appear in various loot containers, such as village chests, dungeon chests, or other generated structures.`,
          detailsBullets: ["Items and ingredients can appear in loot chests", "Found in villages, dungeons, and other structures", "Encourages exploration alongside brewing"],
        },
      ],
    },
  ],
};