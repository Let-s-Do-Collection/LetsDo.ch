export default {
  slug: "candlelight",
  title: "Candlelight Wiki",
  logo: "/assets/mod-logos/candlelight.png",
  aboutTitle: "Welcome",
  aboutSubtitle: "Cooking, table culture, and cozy candlelit evenings",
  aboutText: `
Welcome to the Candlelight Wiki.

This is your home for blocks, items, mechanics, and quick guidance for Candlelight.

Candlelight focuses on food preparation, dining, and atmosphere. It introduces cooking stations for meals, interactive table decor, and a handful of playful utility blocks for roleplay and cozy builds.
`,
  sections: [
    {
      id: "stations",
      title: "Stations and Processing",
      subtitle: "Workstations and interactive elements used for cooking, processing, and food preparation.",
      entries: [
        {
          id: "cooking_pot",
          title: "Cooking Pot",
          namespace_id: "candlelight:cooking_pot",
          subtitle: "Your primary cooking station for meals, with a built-in recipe book.",
          icon: "/assets/icons/candlelight/cooking_pot.png",
          search: "cooking pot station meals recipe book container slot output 6 input slots craft time",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Cooking Pot works similarly to other crafting stations.

It has six Ingredient Input Slots, one Container Slot, and one Output Slot. It also provides a built-in recipe book that shows all available recipes and their required ingredients.

Place the correct ingredients into the Input Slots and add a valid container if the recipe requires one. After about thirty seconds, the result appears in the Output Slot.`,
          detailsBullets: [
            "Six Ingredient Input Slots",
            "One Container Slot and one Output Slot",
            "Built-in recipe book with recipe previews",
            "Cooking takes about thirty seconds",
          ],
        },
        {
          id: "cooking_pan",
          title: "Cooking Pan",
          namespace_id: "candlelight:cooking_pan",
          subtitle: "A second primary cooking station, identical workflow to the Cooking Pot.",
          icon: "/assets/icons/candlelight/cooking_pan.png",
          search: "cooking pan station meals recipe book container slot output 6 input slots craft time",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Cooking Pan works the same way as the Cooking Pot.

It has six Ingredient Input Slots, one Container Slot, and one Output Slot, plus a built-in recipe book for all available recipes.

Place the correct ingredients into the Input Slots and add a valid container if needed. After about thirty seconds, the result appears in the Output Slot.`,
          detailsBullets: [
            "Six Ingredient Input Slots",
            "One Container Slot and one Output Slot",
            "Built-in recipe book with recipe previews",
            "Cooking takes about thirty seconds",
          ],
        },
      ],
    },

    {
      id: "decor",
      title: "Decor and Building",
      subtitle: "Decorative and interactive blocks used for dining rooms, kitchens, and cozy interiors.",
      entries: [
        {
          id: "table_set",
          title: "Table Set",
          namespace_id: "candlelight:*table_set*",
          subtitle: "A plate or bowl you can place food on and eat from, with a small bonus.",
          icon: "/assets/icons/candlelight/table_set.png",
          search: "table set plate bowl napkin glass wine glass place food eat bonus hunger saturation",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Table Set is not just decoration.

You can place many food items onto the plate or bowl and then eat from it. Eating from a Table Set grants an additional bonus to hunger and saturation.

You can also add a Napkin, Glass, or Wine Glass to the plate or bowl. These are decorative only and do not change the bonus.`,
          detailsBullets: [
            "Place food onto the plate or bowl",
            "Eat from the Table Set for a hunger and saturation bonus",
            "Supports decorative add-ons like Napkin, Glass, and Wine Glass",
          ],
          items: [
            {
              id: "bowl",
              title: "Bowl",
              namespace_id: "candlelight:bowl",
              subtitle: "A bowl variant for placing food.",
              icon: "/assets/icons/candlelight/bowl.png",
              search: "table set bowl place food eat",
            },
            {
              id: "plate",
              title: "Plate",
              namespace_id: "candlelight:plate",
              subtitle: "A plate variant for placing food.",
              icon: "/assets/icons/candlelight/plate.png",
              search: "table set plate place food eat",
            },
            {
              id: "napkin",
              title: "Napkin",
              namespace_id: "candlelight:napkin",
              subtitle: "Decorative add-on for the Table Set.",
              icon: "/assets/icons/candlelight/napkin.png",
              search: "table set napkin decoration",
            },
            {
              id: "glass",
              title: "Glass",
              namespace_id: "candlelight:glass",
              subtitle: "Decorative add-on for the Table Set.",
              icon: "/assets/icons/candlelight/glass.png",
              search: "table set glass decoration",
            },
            {
              id: "wine_glass",
              title: "Wine Glass",
              namespace_id: "candlelight:wine_glass",
              subtitle: "Decorative add-on for the Table Set.",
              icon: "/assets/icons/candlelight/wine_glass.png",
              search: "table set wine glass decoration",
            },
          ],
        },
        {
          id: "toolrack",
          title: "Toolrack",
          namespace_id: "candlelight:toolrack",
          subtitle: "The ideal storage solution for tools and pans.",
          icon: "/assets/icons/candlelight/toolrack.png",
          search: "toolrack tool rack storage tools pans kitchen decor",
        },
        {
          id: "jewelry_box",
          title: "Jewelry Box",
          namespace_id: "candlelight:jewelry_box",
          subtitle: "Store and display rings in a compact decorative box.",
          icon: "/assets/icons/candlelight/jewelry_box.png",
          search: "jewelry box ring rings store display tag #ring shift right click open close",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Jewelry Box can store and display rings.

Shift and Right-Click toggles the box open or closed.

Right-Click while holding a Ring places it into the box, and Right-Click again to take it back out.

It supports all rings that use the #ring tag.`,
          detailsBullets: [
            "Shift and Right-Click: open or close",
            "Right-Click with a Ring: place or take a Ring",
            "Supports rings tagged with #ring",
          ],
        },
        {
          id: "chocolate_box",
          title: "Chocolate Box",
          namespace_id: "candlelight:chocolate_box",
          subtitle: "A placed treat you can eat from multiple times.",
          icon: "/assets/icons/candlelight/chocolate_box.png",
          search: "chocolate box place eat 6 times treat share friends",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Chocolate Box can be placed in the world and eaten from up to six times.

Share it with friends, or keep it for yourself.`,
          detailsBullets: ["Placeable", "Can be eaten from up to six times"],
        },
      ],
    },

    {
      id: "items",
      title: "Items, Ingredients, and Tools",
      subtitle: "Everyday items, utility tools, and roleplay focused items used across Candlelight.",
      entries: [
        {
          id: "typewriter",
          title: "Typewriter",
          namespace_id: "candlelight:typewriter",
          subtitle: "Write longer letters in a dedicated block, also perfect as decoration.",
          icon: "/assets/icons/candlelight/typewriter.png",
          search: "typewriter letters write paper notepaper sign interface open remove",
          details: true,
          detailsTitle: "Usage",
          detailsText: `The Typewriter is used to write longer letters.

Right-Click the Typewriter while holding Note Paper to load it. Right-Click again to open the interface.

After finishing your letter, sign it and remove it with another Right-Click.`,
          detailsBullets: [
            "Load Note Paper with Right-Click while holding it",
            "Right-Click again to open the interface",
            "Sign the letter when finished",
            "Right-Click to remove the finished letter",
          ],
        },
        {
          id: "note_paper_and_letter",
          title: "Note Paper and Letter",
          namespace_id: "candlelight:*note_paper*, candlelight:*letter*",
          subtitle: "Write letters, seal them, and share them with other players.",
          icon: "/assets/icons/candlelight/note_paper.png",
          search: "note paper letter envelope sealed letter write sign open gui slots input output typewriter",
          details: true,
          detailsTitle: "Usage",
          detailsText: `Write the letter and sign it.

While holding the Envelope in your main hand, Right-Click to open it. The screen provides two Input Slots on the left and one Output Slot on the right.

Place the written letter and the opened envelope into the Input Slots to receive the sealed letter in the Output Slot.`,
          detailsBullets: [
            "Write and sign a letter first",
            "Open an Envelope by Right-Clicking while holding it",
            "Combine letter and opened envelope to create a sealed letter",
          ],
          items: [
            {
              id: "note_paper",
              title: "Note Paper",
              namespace_id: "candlelight:note_paper",
              subtitle: "Used for writing letters and loading the Typewriter.",
              icon: "/assets/icons/candlelight/note_paper.png",
              search: "note paper writing letters typewriter",
            },
            {
              id: "envelope",
              title: "Envelope",
              namespace_id: "candlelight:envelope",
              subtitle: "Used to seal written letters.",
              icon: "/assets/icons/candlelight/envelope.png",
              search: "envelope open seal letter",
            },
            {
              id: "sealed_letter",
              title: "Sealed Letter",
              namespace_id: "candlelight:sealed_letter",
              subtitle: "A sealed letter ready to be shared.",
              icon: "/assets/icons/candlelight/sealed_letter.png",
              search: "sealed letter mail share open",
            },
          ],
        },
      ],
    },

    {
      id: "consumables",
      title: "Consumables",
      subtitle: "Meals, drinks, and other edible items created through Candlelight cooking.",
      entries: [
        {
          id: "food",
          title: "Food",
          namespace_id: "candlelight:*",
          subtitle: "The centerpiece of Candlelight, cooked in a Cooking Pot or Cooking Pan.",
          icon: "/assets/icons/candlelight/food.png",
          search: "food meals cooking pot cooking pan multi use servings texture stages potion wine inherit effect",
          details: true,
          detailsTitle: "Cooking and effects",
          detailsText: `Most Candlelight food is cooked in the Cooking Pot or Cooking Pan.

If a recipe is prepared using a Potion or Wine inside the Cooking Pot or Cooking Pan, the resulting food inherits the effect from that drink.

Many Candlelight meals can be eaten multiple times after being placed. Each serving changes the texture of the food item.`,
          detailsBullets: [
            "Cooked in the Cooking Pot or Cooking Pan",
            "Can inherit effects from Potion or Wine used during cooking",
            "Many meals can be eaten multiple times",
            "Texture changes per serving",
          ],
        },
      ],
    },

    {
      id: "crops",
      title: "Crops, Wild Plants, and Worldgen",
      subtitle: "Plants found growing naturally in newly generated chunks, ready to be harvested or cultivated.",
      entries: [
        {
          id: "roses",
          title: "Roses",
          namespace_id: "candlelight:roses",
          subtitle: "A wild plant found in several temperate overworld biomes.",
          icon: "/assets/icons/candlelight/roses.png",
          search: "roses wild plant worldgen forest plains swamp birch forest meadow sunflower plains river",
          details: true,
          detailsTitle: "Where to find",
          detailsText: `After successfully adding Candlelight to your mods, you will be able to discover new wild plants in newly generated chunks.

Roses can be found in the following biomes:`,
          detailsBullets: [
            "Forest",
            "Plains",
            "Swamp",
            "Birch Forest",
            "Meadow",
            "Sunflower Plains",
            "River",
          ],
        },
      ],
    },

    {
      id: "misc_changes",
      title: "Miscellaneous Changes",
      subtitle: "Small additions and rewards that support long-term play and collection goals.",
      entries: [
        {
          id: "armor",
          title: "Chef Outfit",
          namespace_id: "candlelight:*chef*",
          subtitle: "A stylish outfit with minor protection and a small burn safety bonus.",
          icon: "/assets/icons/candlelight/chef_outfit.png",
          search: "chef outfit armor set wool leather thread fire resistance minor protection",
          details: true,
          detailsTitle: "Overview",
          detailsText: `Candlelight includes a chef themed outfit.

It is mostly cosmetic and offers little armor value, but it helps with minor burns by granting Fire Resistance.`,
          detailsBullets: [
            "Crafted from simple materials like wool and leather",
            "Low armor value, focused on style",
            "Grants Fire Resistance for minor burn protection",
          ],
        },
        {
          id: "completionist_banner",
          title: "Completionist Banner",
          namespace_id: "candlelight:completionist_banner",
          subtitle: "A reward banner for crafting every Candlelight food at least once.",
          icon: "/assets/icons/candlelight/completionist_banner.png",
          search: "completionist banner candlelight craft all foods advancements inventory reward",
          details: true,
          detailsTitle: "Reward",
          detailsText: `The Completionist Banner is awarded to all players who have crafted every different food item from Candlelight.

To receive the advancement, you need all the required items in your inventory at the same time.`,
          detailsBullets: [
            "Reward for crafting all Candlelight foods",
            "Advancement requires all items in your inventory at the same time",
          ],
        },
      ],
    },
  ],
};