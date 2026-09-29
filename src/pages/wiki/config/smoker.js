export default {
  slug: 'smoker',
  title: 'Smoker',
  logo: '/assets/mod-logos/smoker.webp',

  aboutTitle: 'Welcome',
  aboutSubtitle: 'The overlooked block, made worth using',
  aboutText: `Smoker gives the vanilla Smoker a real purpose. Instead of simply cooking faster, it now smokes your food with wood, and the wood you choose decides how nourishing the result becomes.`,
  sections: [
    {
      id: 'basics',
      title: 'Getting Started',
      subtitle: 'How smoking works, and which wood to pick.',
      entries: [
        {
          id: 'smoking',
          title: 'Smoking Food',
          subtitle: 'Food in, planks in, and the wood does the rest.',
          search: 'smoker smoking station food planks fuel flavour tooltip once',
          details: true,
          detailsTitle: 'How it works',
          detailsText: `By default every vanilla Smoker is upgraded automatically. You can also craft a Smoking Station from a Smoker, planks and stone bricks.

Place food in the input slot and planks in the material slot. The planks serve as fuel and flavour at the same time, and the interface shows the smoking progress.`,
          detailsBullets: [
            'Vanilla Smokers are upgraded automatically',
            'Planks are fuel and flavour at once',
            'Smoked food lists its bonuses in the tooltip',
            'Each piece of food can only be smoked once'
          ]
        },
        {
          id: 'perfectly_smoked',
          title: 'Perfectly Smoked',
          subtitle: 'Patience pays off: leave the food in a little longer for +50% bonuses.',
          search: 'perfectly smoked glint bonus output slot wait',
          details: true,
          detailsTitle: 'Timing',
          detailsText: `Leave smoked food in the output slot while the Smoker keeps burning. After a while it becomes perfectly smoked and starts to glint.

Leave it in too long and it loses that state again.`,
          detailsBullets: [
            'Stay in the output slot while the Smoker burns',
            'Perfectly smoked food glints',
            'Bonuses increase by half',
            'Too long and the bonus is gone again'
          ]
        },
        {
          id: 'wood_types',
          title: 'Wood Types',
          subtitle: 'Each wood has its own smoking time and its own bonus to saturation and nutrition.',
          search: 'wood planks bamboo dark oak baobab spruce birch larch mangrove arolla cherry oak saturation nutrition time',
          details: true,
          detailsTitle: 'Speed and flavour',
          detailsText: `Bamboo is done in seconds, while Dark Oak, Baobab, Warped and Ebony take their time.

Planks from Meadow, Vinery, Alpine Whispers and BloomingNature are supported when those mods are installed. Any other planks still work with a flat bonus.

All values below are for normal smoking; perfectly smoked food gets half as much on top.`,
          detailsBullets: [
            '**Acacia Planks** `minecraft:acacia_planks`: no saturation or nutrition bonus, heals instead, 40 s',
            '**Bamboo Planks** `minecraft:bamboo_planks`: +2% saturation, +2% nutrition, 16 s',
            '**Birch Planks** `minecraft:birch_planks`: +6% saturation, +4% nutrition, 28 s',
            '**Cherry Planks** `minecraft:cherry_planks`: +2% saturation, +8% nutrition, 30 s',
            '**Crimson Planks** `minecraft:crimson_planks`: +2% saturation, +2% nutrition, 40 s',
            '**Dark Oak Planks** `minecraft:dark_oak_planks`: +2% saturation, +2% nutrition, 60 s',
            '**Jungle Planks** `minecraft:jungle_planks`: no saturation or nutrition bonus, gives Regeneration instead, 26 s',
            '**Mangrove Planks** `minecraft:mangrove_planks`: +6% saturation, +4% nutrition, 32 s',
            '**Oak Planks** `minecraft:oak_planks`: +5% saturation, +5% nutrition, 36 s',
            '**Spruce Planks** `minecraft:spruce_planks`: +8% saturation, +2% nutrition, 28 s',
            '**Warped Planks** `minecraft:warped_planks`: +2% saturation, +2% nutrition, 70 s',
            '**Arolla Pine Planks** `alpinewhispers:arolla_pine_planks`: +6% saturation, +3% nutrition, 31 s',
            '**Aspen Planks** `bloomingnature:aspen_planks`: +3% saturation, +3% nutrition, 20 s',
            '**Baobab Planks** `bloomingnature:baobab_planks`: +2% saturation, +2% nutrition, 65 s',
            '**Cactus Planks** `bloomingnature:cactus_planks`: +2% saturation, +2% nutrition, 45 s',
            '**Chestnut Planks** `bloomingnature:chestnut_planks`: +5% saturation, +3% nutrition, 34 s',
            '**Cypress Planks** `bloomingnature:cypress_planks`: +2% saturation, +2% nutrition, 35 s',
            '**Ebony Planks** `bloomingnature:ebony_planks`: +2% saturation, +2% nutrition, 75 s',
            '**Fan Palm Planks** `bloomingnature:fan_palm_planks`: +2% saturation, +2% nutrition, 42.5 s',
            '**Fir Planks** `bloomingnature:fir_planks`: +5% saturation, +3% nutrition, 30 s',
            '**Larch Planks** `bloomingnature:larch_planks`: +6% saturation, +2% nutrition, 28 s',
            '**Swamp Cypress Planks** `bloomingnature:swamp_cypress_planks`: +2% saturation, +2% nutrition, 37.5 s',
            '**Swamp Oak Planks** `bloomingnature:swamp_oak_planks`: +4% saturation, +4% nutrition, 32 s',
            '**Pine Planks** `meadow:pine_planks`: +5% saturation, +4% nutrition, 30 s',
            '**Dark Cherry Planks** `vinery:dark_cherry_planks`: +2% saturation, +6% nutrition, 32.5 s',
            '**Any other planks**: +5% saturation, +5% nutrition, 10 s'
          ]
        },
        {
          id: 'wood_effects',
          title: 'Potion Effects',
          subtitle: 'Some woods add a potion effect or extra healing to the food.',
          search: 'potion effect fire resistance regeneration absorption water breathing crimson cactus jungle cypress warped ebony fan palm',
          details: true,
          detailsTitle: 'Woods with effects',
          detailsText: `Food smoked with these planks gives an effect when eaten. Planks from other mods only count when that mod is installed.`,
          detailsBullets: [
            '**Fire Resistance**: Crimson Planks `minecraft:crimson_planks` (20 s), Cactus Planks `bloomingnature:cactus_planks` (15 s)',
            '**Regeneration**: Jungle Planks `minecraft:jungle_planks` (8 s), Cypress Planks `bloomingnature:cypress_planks` (5 s)',
            '**Absorption**: Warped Planks `minecraft:warped_planks` (2 s), Ebony Planks `bloomingnature:ebony_planks` (3 s)',
            '**Water Breathing**: Fan Palm Planks `bloomingnature:fan_palm_planks` (10 s)',
            '**Extra healing (1 heart)**: Acacia Planks `minecraft:acacia_planks`, Dark Oak Planks `minecraft:dark_oak_planks`, Dark Cherry Planks `vinery:dark_cherry_planks`, Swamp Cypress Planks `bloomingnature:swamp_cypress_planks`',
            '**Extra healing (1.5 hearts)**: Baobab Planks `bloomingnature:baobab_planks`'
          ]
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Good to Know',
      subtitle: 'Modpack support.',
      entries: [
        {
          id: 'datapacks',
          title: 'Modpack Support',
          subtitle: 'All wood modifiers are data-driven recipes, so modpacks can add or rebalance them.',
          search: 'datapack recipes modpack rebalance modifiers json smoker_modifier material saturation nutrition effect crafting_time heal_amount',
          details: true,
          detailsTitle: 'How a wood modifier works',
          detailsText: `Every wood is a recipe of the type \`smoker:smoker_modifier\` in \`data/<namespace>/recipe/\`. Add a new file to support another plank, or override an existing one with a datapack to rebalance it.

Example (Warped Planks):`,
          detailsCode: `{
  "type": "smoker:smoker_modifier",
  "material": "minecraft:warped_planks",
  "modifiers": {
    "saturation": 0.02,
    "nutrition": 0.02,
    "effect": "minecraft:absorption",
    "effect_duration": 40
  },
  "crafting_time": 1400
}`,
          detailsTextAfter: `Recipes for woods from other mods can use the usual load conditions of NeoForge and Fabric, so they only load when that mod is installed.`,
          detailsBullets: [
            '`material`: the item used as smoking material',
            '`saturation` / `nutrition`: bonus as a fraction, `0.05` = +5%',
            '`effect` (optional): effect ID, e.g. `minecraft:regeneration`',
            '`effect_duration` (optional): duration in ticks, `20` = 1 second',
            '`heal_amount` (optional): extra healing in half hearts',
            '`crafting_time`: smoking time in ticks'
          ]
        }
      ]
    }
  ]
}
