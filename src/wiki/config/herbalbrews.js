export default {
  slug: "herbalbrews",
  title: "HerbalBrews Wiki",
  logo: "/assets/mod-logos/herbalbrews.png",
  aboutTitle: "Welcome",
  aboutSubtitle: "Tea, coffee, flasks, and cozy brewing",
aboutText: `
Welcome to the HerbalBrews Wiki.

This is your home for blocks, items, mechanics, and quick guidance for HerbalBrews.

HerbalBrews focuses on tea, coffee, and magical brews, expanding the Let’s Do ecosystem with brewing, infusion, and drink-based effects. It introduces shared systems around plants, processing, and potion-like consumables.

`,
  sections: [
    {
      id: "stations",
      title: "Stations and Processing",
      subtitle: "Workstations used for heating, brewing, and crafting.",
      entries: [
        {
          id: "stove",
          title: "Stove",
          namespace_id: "herbalbrews:stove",
          subtitle: "Provides heat for your Tea Kettle.",
          icon: "/assets/icons/herbalbrews/stove.png",
          search: "stove heat hot surface kettle tea kettle heating station",
        },
        {
          id: "tea_kettle",
          title: "Tea Kettle",
          namespace_id: "herbalbrews:tea_kettle",
          subtitle: "Main brewing station for Tea and Coffee.",
          icon: "/assets/icons/herbalbrews/tea_kettle.png",
          search: "tea kettle tea coffee station heat items blaze powder water bottles bucket bottle slot output crafting",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Tea Kettle is your main station for brewing Tea and Coffee.

It provides multiple ingredient slots, a bottle slot, an output slot, and dedicated inputs for heat and water.

Different recipes require different amounts of heat and water.`,
          detailsBullets: [
            "4 ingredient input slots",
            "1 bottle slot",
            "1 output slot",
            "1 heat item slot",
            "1 water input slot",
          ],
        },
        {
          id: "brewing_cauldron",
          title: "Brewing Cauldron",
          namespace_id: "herbalbrews:brewing_cauldron",
          subtitle: "Combines Potions into Flasks.",
          icon: "/assets/icons/herbalbrews/cauldron.png",
          search: "brewing cauldron flasks potions herbal infusion catalyst",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Brewing Cauldron is used to craft Flasks by combining potion effects.`,
          detailsBullets: [
            "3 potion input slots",
            "1 output slot",
            "1 catalyst slot: Herbal Infusion",
            "Outputs a Flask",
          ],
        },
      ],
    },
    {
      id: "items",
      title: "Items, Ingredients, and Tools",
      subtitle: "Core materials, wearable items, and crafting components.",
      entries: [
{
  id: "coffee_beans",
  title: "Coffee Beans",
  namespace_id: "herbalbrews:coffee_beans",
  subtitle: "Obtained by harvesting Wild Coffee. Can be planted on Farmland to grow Coffee Plants.",
  icon: "/assets/icons/herbalbrews/coffee_beans.png",
  search: "coffee beans wild coffee harvest seeds coffee plant",
},
{
  id: "lavender_blossom",
  title: "Lavender Blossom",
  namespace_id: "herbalbrews:lavender_blossom",
  subtitle: "Obtained by harvesting Lavender with Shears.",
  icon: "/assets/icons/herbalbrews/lavender_blossom.png",
  search: "lavender blossom lavender shears harvesting ingredient lavender tea",
},
{
  id: "tea_blossoms",
  title: "Tea Blossoms",
  namespace_id: "herbalbrews:tea_blossoms",
  subtitle: "Obtained by harvesting flowers with Shears. Can be planted on Farmland to grow Tea Plants.",
  icon: "/assets/icons/herbalbrews/tea_blossom.png",
  search: "tea blossoms flowers shears seeds tea plants farmland",
},
        {
          id: "witching_time_hats",
          title: "Witching Time",
          namespace_id: "herbalbrews:*_hat",
          subtitle: "Wearable hats with magical protection.",
          icon: "/assets/icons/herbalbrews/witch_hat.png",
          search: "witch hat top hat herbalbrews magic damage reduction head armor witching time",
          details: true,
          detailsTitle: "Overview",
          detailsText: `HerbalBrews includes two wearable hats.`,
          detailsBullets: [
            "Includes Witch Hat and Top Hat",
            "Worn in the head slot",
            "Reduces magic damage",
          ],
          items: [
            {
              id: "witch_hat",
              title: "Witch Hat",
              namespace_id: "herbalbrews:witch_hat",
              subtitle: "A classic witch hat.",
              icon: "/assets/icons/herbalbrews/witch_hat.png",
              search: "witch hat herbalbrews head slot",
            },
            {
              id: "top_hat",
              title: "Top Hat",
              namespace_id: "herbalbrews:top_hat",
              subtitle: "A classic top hat.",
              icon: "/assets/icons/herbalbrews/top_hat.png",
              search: "top hat herbalbrews head slot",
            },
          ],
        },
        {
          id: "drinks",
          title: "Teas & Flasks",
          namespace_id: "",
          subtitle: "A small peek at the brew selection.",
          icon: "/assets/icons/herbalbrews/rooibos_tea.png",
          search: "tea coffee drinks brews mugs cups effects herbalbrews",
          details: true,
          detailsTitle: "A Cup for Every Moment",
          detailsText: "",
          items: [
            {
              id: "coffee",
              title: "Coffee",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/coffee.png",
              search: "coffee drink brew herbalbrews",
            },
            {
              id: "hibiscus_tea",
              title: "Hibiscus Tea",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/hibiscus_tea.png",
              search: "hibiscus tea drink brew herbalbrews",
            },
            {
              id: "lavender_tea",
              title: "Lavender Tea",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/lavender_tea.png",
              search: "lavender tea drink brew herbalbrews",
            },
            {
              id: "rooibos_tea",
              title: "Rooibos Tea",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/rooibos_tea.png",
              search: "rooibos tea drink brew herbalbrews",
            },
            {
              id: "yerba_mate_tea",
              title: "Yerba Mate Tea",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/yerba_mate_tea.png",
              search: "yerba mate tea drink brew herbalbrews",
            },
            {
              id: "green_tea",
              title: "Green Tea",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/green_tea.png",
              search: "green tea drink brew herbalbrews",
            },
            {
              id: "black_tea",
              title: "Black Tea",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/black_tea.png",
              search: "black tea drink brew herbalbrews",
            },
            {
              id: "oolong_tea",
              title: "Oolong Tea",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/oolong_tea.png",
              search: "oolong tea drink brew herbalbrews",
            },
            {
              id: "flask",
              title: "Flasks",
              subtitle: "",
              icon: "/assets/icons/herbalbrews/flask.png",
              search: "flask flasks potion drink brew herbalbrews",
            },
          ],
        },
  {
    id: "tea_drying",
    title: "Tea Drying",
    namespace_id: "herbalbrews:*tea_leaf*_block, herbalbrews:dried_*_tea",
    subtitle: "Turns fresh tea leaves into dried tea ingredients over time.",
    icon: "/assets/icons/herbalbrews/dried_green_tea.png",
    search: "tea drying dry dried green tea black tea oolong tea leaf block stages",
    details: true,
    detailsTitle: "How it works",
    detailsText: `Tea drying is a processing step for turning tea leaf blocks into dried tea ingredients.

Place a tea leaf block and let it dry over time. The block progresses through drying stages, and once fully dried it converts into its final form depending on the starting block.

These dried tea ingredients are then used for brewing different tea variants.`,
    detailsBullets: [
      "Tea leaf blocks dry over time in multiple stages",
      "When fully dried, the block converts into its final form",
      "Green Tea Leaf Block dries into Dried Out Green Tea Leaf Block",
      "Mixed Tea Leaf Block dries into Oolong Tea Leaf Block",
      "Dried Green Tea Leaf Block dries into Black Tea Leaf Block",
      "Drying produces dried tea ingredients used for brewing",

    ],
    items: [
      {
        id: "dried_green_tea",
        title: "Dried Green Tea",
        subtitle: "A dried tea ingredient used for brewing.",
        icon: "/assets/icons/herbalbrews/dried_green_tea.png",
        search: "dried green tea drying ingredient brew",
      },
      {
        id: "dried_black_tea",
        title: "Dried Black Tea",
        subtitle: "A dried tea ingredient used for brewing.",
        icon: "/assets/icons/herbalbrews/dried_black_tea.png",
        search: "dried black tea drying ingredient brew",
      },
      {
        id: "dried_oolong_tea",
        title: "Dried Oolong Tea",
        subtitle: "A dried tea ingredient used for brewing.",
        icon: "/assets/icons/herbalbrews/dried_oolong_tea.png",
        search: "dried oolong tea drying ingredient brew",
      },
    ],
  }

      ],
    },
{
  id: "crops",
  title: "Crops and Wild Plants",
  subtitle: "Naturally generating plants found throughout the world.",
  entries: [
    {
      id: "hibiscus",
      title: "Hibiscus",
      namespace_id: "herbalbrews:hibiscus",
      subtitle: "A decorative flower growing naturally in Jungles and similar lush biomes, commonly used for Hibiscus Tea.",
      icon: "/assets/icons/herbalbrews/hibiscus.png",
      search: "hibiscus flower jungle #is_jungle decorative tea hibiscus tea wild plant",
    },
    {
      id: "lavender",
      title: "Lavender",
      namespace_id: "herbalbrews:lavender",
      subtitle: "A fragrant flower growing in Mountains, Windswept Hills, and other elevated biomes, harvested for Lavender Blossoms.",
      icon: "/assets/icons/herbalbrews/lavender.png",
      search: "lavender flower mountains #is_hills #is_mountain decorative shears lavender blossoms lavender tea",
    },
    {
      id: "wild_coffee",
      title: "Wild Coffee",
      namespace_id: "herbalbrews:wild_coffee",
      subtitle: "A wild coffee plant growing in Jungles and Bamboo Jungles, offering an alternative way to obtain Coffee Beans.",
      icon: "/assets/icons/herbalbrews/wild_coffee_plant.png",
      search: "wild coffee jungle #is_jungle coffee beans harvest break worldgen",
    },
    {
      id: "wild_rooibos",
      title: "Wild Rooibos",
      namespace_id: "herbalbrews:wild_rooibos",
      subtitle: "A hardy wild plant growing in Savannas and Savanna Plateaus, used to obtain Rooibos Leafs for brewing.",
      icon: "/assets/icons/herbalbrews/wild_rooibos_plant.png",
      search: "wild rooibos savanna #is_savanna rooibos leafs harvest break worldgen",
    },
    {
      id: "wild_yerba_mate",
      title: "Wild Yerba Mate",
      namespace_id: "herbalbrews:wild_yerba_mate",
      subtitle: "A wild plant growing in Mountains and Windswept biomes, providing Yerba Mate Leafs for tea brewing.",
      icon: "/assets/icons/herbalbrews/wild_yerba_mate_plant.png",
      search: "wild yerba mate mountains #is_hills #is_mountain yerba mate leafs harvest break worldgen",
    },
  ],
},
    {
      id: "mob_effects",
      title: "Mob Effects",
      subtitle: "Status effects granted by HerbalBrews teas, coffee, and flasks.",
      entries: [
        {
          id: "balanced",
          title: "Balanced",
          namespace_id: "herbalbrews:balanced",
          subtitle: "Grants nearby players Absorption.",
          icon: "/assets/icons/herbalbrews/effects/balanced.png",
          search: "balanced effect absorption radius players",
        },
        {
          id: "fortune",
          title: "Fortune",
          namespace_id: "herbalbrews:fortune",
          subtitle: "Increases Luck.",
          icon: "/assets/icons/herbalbrews/effects/fortune.png",
          search: "fortune effect luck",
        },
        {
          id: "tough",
          title: "Tough",
          namespace_id: "herbalbrews:tough",
          subtitle: "Increases Absorption, Regeneration, and Damage Resistance.",
          icon: "/assets/icons/herbalbrews/effects/tough.png",
          search: "tough effect absorption regeneration damage resistance",
        },
        {
          id: "bonding",
          title: "Bonding",
          namespace_id: "herbalbrews:bonding",
          subtitle: "Grants nearby players temporary Absorption and Regeneration.",
          icon: "/assets/icons/herbalbrews/effects/bonding.png",
          search: "bonding effect absorption regeneration radius players",
          details: true,
          detailsTitle: "Scaling",
          detailsText: `Bonding grants nearby players temporary Absorption and Regeneration.

When multiple players are nearby, the effect scales down slightly to prevent stacking abuse.`,
          detailsBullets: [
            "Applies to nearby players",
            "Grants Absorption and Regeneration",
            "Strength scales down with multiple players",
          ],
        },
        {
          id: "lifeleech",
          title: "Lifeleech",
          namespace_id: "herbalbrews:lifeleech",
          subtitle: "Drains health from nearby hostile entities and heals the user.",
          icon: "/assets/icons/herbalbrews/effects/lifeleech.png",
          search: "lifeleech effect drain heal hostile entities radius",
          details: true,
          detailsTitle: "Behavior",
          detailsText: `Lifeleech periodically drains health from nearby hostile entities and transfers it to the user.

Nearby players may also be affected with reduced strength.`,
          detailsBullets: [
            "Drains health from hostile entities",
            "Heals the user",
            "Can affect nearby players with reduced strength",
          ],
        },
        {
          id: "deeprush",
          title: "Deeprush",
          namespace_id: "herbalbrews:deeprush",
          subtitle: "Increases mining speed based on depth.",
          icon: "/assets/icons/herbalbrews/effects/deeprush.png",
          search: "deeprush effect mining speed depth",
          details: true,
          detailsTitle: "Depth Scaling",
          detailsText: `Deeprush increases mining speed depending on the user's depth.

The deeper you are, the stronger the effect becomes. When multiple players are nearby, the strength is slightly reduced.`,
          detailsBullets: [
            "Mining speed scales with depth",
            "Stronger effects at lower Y-levels",
            "Reduced strength with multiple nearby players",
          ],
        },
      ],
    },
    {
      id: "misc_changes",
      title: "Miscellaneous Changes",
      subtitle: "Small optional tweaks.",
      entries: [
     {
          id: "config",
          title: "Configuration",
          subtitle: "Most gameplay features of HerbalBrews can be adjusted via a configuration file, usually located at `config/herbalbrews.json`.",
          icon: "/assets/icons/farm-and-charm/config.png",
          search: "config configuration settings options balance json herbalbrews",
        },
   {
     id: "hat_zombies",
     title: "Hat Zombies",
     subtitle: "Zombies have a small chance to spawn wearing a Witch Hat or Top Hat.",
     icon: "/assets/icons/herbalbrews/entity/zombie.png",
     search: "zombie hat spawn witch hat top hat",
   },
      ],
    },
  ],
};
