const wine = (id, title, how, effect) => ({
  id,
  title,
  namespace_id: `vinery:${id}`,
  subtitle: `${effect}. ${how}`,
  icon: `/assets/icons/vinery/${id}.webp`,
  search: `${title} ${how} ${effect} wine`.toLowerCase()
})

export default {
  slug: 'vinery',
  title: 'Vinery',
  logo: '/assets/mod-logos/vinery.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'From the grapevine to the wine cellar',
  aboutText: `Vinery is all about wine. Find wild grapes in forests, savannas, taigas and jungles, plant them on grapevine stems or lattices and harvest them by the handful.

Stomp the grapes into juice in the Grapevine Pot, press apples in the Apple Press and let everything ferment in the Fermentation Barrel. More than two dozen wines await, each with its own effect, and the longer a bottle rests, the stronger it gets.

For the cellar there are wine racks in every wood type, a dark cherry wood set with furniture, and apple and cherry trees you can harvest right from the leaves.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'From grape to bottle in three steps.',
      entries: [
        {
          id: 'grapevine_pot',
          title: 'Grapevine Pot',
          namespace_id: 'vinery:grapevine_pot',
          subtitle: 'Hop in and stomp your grapes into juice.',
          icon: '/assets/icons/vinery/grapevine_pot.webp',
          search: 'grapevine pot stomp jump grapes juice wine bottle',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the pot with grapes until it holds six. The first grape decides which juice you will get.

Then jump into the pot a few times to stomp the grapes. When they are fully crushed, right click with an empty Wine Bottle to fill it. Six grapes make two bottles of juice.`,
          detailsBullets: [
            'Six grapes per batch',
            'The first grape sets the juice type',
            'Jump in the pot to stomp',
            'Fill with empty Wine Bottles, two per batch'
          ]
        },
        {
          id: 'fermentation_barrel',
          title: 'Fermentation Barrel',
          namespace_id: 'vinery:fermentation_barrel',
          subtitle: 'Where juice turns into wine.',
          icon: '/assets/icons/vinery/fermentation_barrel.webp',
          search: 'fermentation barrel wine juice ferment bottle winemaker workstation',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Pour juice into the barrel through the juice slot. Each bottle of juice fills a quarter of the barrel, and the empty bottle lands in the bottle slot so it can be used right away. Only one kind of juice fits at a time. Hover over the gauge to see what is inside.

Add the ingredients for your wine to the three ingredient slots. Most recipes also need an empty Wine Bottle. After five minutes the finished wine appears in the output slot.

Sneak and right click the barrel to pour out the juice. The barrel is also the workstation of the [[Winemaker|winemaker_villager]].`,
          detailsBullets: [
            'Holds four bottles of juice of one kind',
            'Three ingredient slots and a bottle slot',
            'Five minutes per wine',
            'Sneak + right click empties the juice'
          ]
        },
        {
          id: 'apple_press',
          title: 'Apple Press',
          namespace_id: 'vinery:apple_press',
          subtitle: 'Mashes apples and turns the mash into Apple Juice.',
          icon: '/assets/icons/vinery/apple_press.webp',
          search: 'apple press mash apple juice honeycomb honey bottle',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The press works in two steps. Put apples into the top slot and they turn into [[Apple Mash|apple_mash]] after 30 seconds. The mash then moves on by itself.

With an empty Wine Bottle in the bottle slot, the mash becomes [[Apple Juice|apple_juice]] after another 40 seconds.

The press can also handle honey: a Honeycomb Block becomes four Honeycombs, and Honeycomb plus a bottle becomes a Honey Bottle.`,
          detailsBullets: [
            'Apple → Apple Mash (30 s)',
            'Apple Mash + Wine Bottle → Apple Juice (40 s)',
            'Honeycomb Block → 4 Honeycomb',
            'Honeycomb + Wine Bottle → Honey Bottle'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'For vineyards, taverns and wine cellars.',
      entries: [
        {
          id: 'lattice',
          title: 'Lattice',
          subtitle: 'A wooden trellis for walls and archways, and the place where Jungle Grapes grow.',
          icon: '/assets/icons/vinery/oak_lattice.webp',
          textures: [
            '/assets/icons/vinery/acacia_lattice.webp',
            '/assets/icons/vinery/bamboo_lattice.webp',
            '/assets/icons/vinery/birch_lattice.webp',
            '/assets/icons/vinery/cherry_lattice.webp',
            '/assets/icons/vinery/dark_cherry_lattice.webp',
            '/assets/icons/vinery/dark_oak_lattice.webp',
            '/assets/icons/vinery/jungle_lattice.webp',
            '/assets/icons/vinery/mangrove_lattice.webp',
            '/assets/icons/vinery/oak_lattice.webp',
            '/assets/icons/vinery/spruce_lattice.webp'
          ],
          carousel: true,
          search: 'lattice trellis jungle grapes wood axe support',
          details: true,
          detailsText: `Lattices come in every vanilla wood type and in Dark Cherry. Neighbouring lattices connect, and you can place them against a wall or flat on the floor. Right click with an axe to add or remove the support posts.

Right click a lattice with [[Jungle Grape Seeds|grapes]] to plant them. Once the grapes are ripe, right click to harvest. Shears remove the plant and give the seeds back.`,
          detailsBullets: [
            'All vanilla woods plus Dark Cherry',
            'Connects to neighbouring lattices',
            'Axe toggles the support posts',
            'Jungle Grapes only grow on lattices'
          ]
        },
        {
          id: 'wine_racks',
          title: 'Wine Racks',
          subtitle: 'Racks and storage for your bottles, in three sizes and every wood type.',
          icon: '/assets/icons/vinery/oak_wine_rack_small.webp',
          search: 'wine rack bottle storage small big display',
          details: true,
          detailsText: `Right click a rack with a wine to put it in, and right click again to take it out. The tooltip tells you which bottles fit.`,
          detailsBullets: [
            'Small Wine Bottle Storage: 4 small bottles',
            'Big Wine Bottle Storage: 9 small bottles',
            'Wine Rack: 1 bottle of any size, opens with sneak + right click',
            'Every vanilla wood type plus Dark Cherry'
          ],
          items: [
            { id: 'oak_wine_rack_small', title: 'Small Oak Wine Bottle Storage', namespace_id: 'vinery:oak_wine_rack_small', icon: '/assets/icons/vinery/oak_wine_rack_small.webp' },
            { id: 'oak_wine_rack_big', title: 'Big Oak Wine Bottle Storage', namespace_id: 'vinery:oak_wine_rack_big', icon: '/assets/icons/vinery/oak_wine_rack_big.webp' },
            { id: 'oak_wine_rack_mid', title: 'Oak Wine Rack', namespace_id: 'vinery:oak_wine_rack_mid', icon: '/assets/icons/vinery/oak_wine_rack_mid.webp' }
          ]
        },
        {
          id: 'wine_box',
          title: 'Wine Box',
          namespace_id: 'vinery:wine_box',
          subtitle: 'A gift box for a single small bottle.',
          icon: '/assets/icons/vinery/wine_box.webp',
          search: 'wine box gift bottle open close',
          details: true,
          detailsText: `Sneak and right click with an empty hand to open or close the lid. While it is open, right click with a small wine bottle to put it in.`,
          detailsBullets: [
            'Holds one small bottle',
            'Sneak + right click opens and closes the lid'
          ]
        },
        {
          id: 'storage_pot',
          title: 'Storage Pot',
          namespace_id: 'vinery:storage_pot',
          subtitle: 'A wooden pot with room for your supplies.',
          icon: '/assets/icons/vinery/storage_pot.webp',
          search: 'storage pot container'
        },
        {
          id: 'stackable_log',
          title: 'Stackable Log',
          namespace_id: 'vinery:stackable_log',
          subtitle: 'Stack two and light them up for a cosy log fire.',
          icon: '/assets/icons/vinery/stackable_log.webp',
          search: 'stackable log fire flint and steel shovel campfire light',
          details: true,
          detailsText: `Place a second log on top to make a full stack. A full stack can be lit with Flint and Steel and gives off light. A shovel puts the fire out.`
        },
        {
          id: 'vinery_slabs',
          title: 'Vineyard Slabs',
          subtitle: 'Grass, dirt and path slabs for terraced vineyards.',
          icon: '/assets/icons/vinery/dirt_slab.webp',
          search: 'grass slab dirt slab coarse dirt slab path slab vineyard terrace',
          details: true,
          detailsText: `Half-height ground blocks for gentle slopes and terraces. Grass spreads onto Dirt Slabs just like on normal dirt, and a shovel turns a Grass Slab into a Dirt Path Slab.`,
          items: [
            { id: 'vineyard_grass_slab', title: 'Grass Slab', namespace_id: 'vinery:grass_slab', icon: '/assets/icons/vinery/grass_slab.webp' },
            { id: 'vineyard_dirt_slab', title: 'Dirt Slab', namespace_id: 'vinery:dirt_slab', icon: '/assets/icons/vinery/dirt_slab.webp' },
            { id: 'vineyard_coarse_dirt_slab', title: 'Coarse Dirt Slab', namespace_id: 'vinery:coarse_dirt_slab', icon: '/assets/icons/vinery/coarse_dirt_slab.webp' },
            { id: 'vineyard_dirt_path_slab', title: 'Dirt Path Slab', namespace_id: 'vinery:dirt_path_slab', icon: '/assets/icons/vinery/dirt_path_slab.webp' }
          ]
        },
        {
          id: 'dark_cherry_wood',
          title: 'Dark Cherry Wood',
          namespace_id: 'vinery:dark_cherry_planks',
          subtitle: 'A dark red wood set with matching tavern furniture.',
          search: 'dark cherry wood planks log floorboard beam chair table big table cabinet drawer shelf barrel boat',
          details: true,
          detailsText: `Dark Cherry trees give a full wood set: logs, planks, stairs, slabs, doors, trapdoors, fences, signs and boats, plus Floorboards and a Beam.

The matching furniture includes a chair, a table, a big table, a cabinet, a drawer, a shelf and a barrel.`
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Juices, bottles and the winemaker outfit.',
      entries: [
        {
          id: 'stem',
          title: 'Grapevine Stem',
          namespace_id: 'vinery:grapevine_stem',
          subtitle: 'A two-block stem for growing grapes in neat rows.',
          icon: '/assets/icons/vinery/grapevine_stem.webp',
          search: 'grapevine stem grape seeds plant two blocks shears',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place a stem while holding at least two and it grows two blocks tall. Right click the upper part with grape seeds to plant them. Ripe grapes are harvested with a right click, and shears remove the plant and give the seeds back.

Red and White Grapes slowly grow leaves over the stem as well. All grapes except Jungle Grapes grow on stems.`,
          detailsBullets: [
            'Two blocks tall',
            'Plant seeds on the upper part',
            'Right click to harvest ripe grapes',
            'Shears remove the plant'
          ]
        },
        {
          id: 'grape_juice',
          title: 'Grape Juice',
          subtitle: 'Fresh from the Grapevine Pot, ready for the barrel.',
          icon: '/assets/icons/vinery/red_grapejuice.webp',
          search: 'grape juice red white savanna taiga jungle grapejuice',
          details: true,
          detailsText: `There is a red and a white juice for each grape family. Each wine needs one specific juice.`,
          items: [
            { id: 'red_grapejuice', title: 'Red Grapejuice', namespace_id: 'vinery:red_grapejuice', icon: '/assets/icons/vinery/red_grapejuice.webp' },
            { id: 'white_grapejuice', title: 'White Grapejuice', namespace_id: 'vinery:white_grapejuice', icon: '/assets/icons/vinery/white_grapejuice.webp' },
            { id: 'red_savanna_grapejuice', title: 'Red Savanna Grapejuice', namespace_id: 'vinery:red_savanna_grapejuice', icon: '/assets/icons/vinery/red_savanna_grapejuice.webp' },
            { id: 'white_savanna_grapejuice', title: 'White Savanna Grapejuice', namespace_id: 'vinery:white_savanna_grapejuice', icon: '/assets/icons/vinery/white_savanna_grapejuice.webp' },
            { id: 'red_taiga_grapejuice', title: 'Red Taiga Grapejuice', namespace_id: 'vinery:red_taiga_grapejuice', icon: '/assets/icons/vinery/red_taiga_grapejuice.webp' },
            { id: 'white_taiga_grapejuice', title: 'White Taiga Grapejuice', namespace_id: 'vinery:white_taiga_grapejuice', icon: '/assets/icons/vinery/white_taiga_grapejuice.webp' },
            { id: 'red_jungle_grapejuice', title: 'Red Jungle Grapejuice', namespace_id: 'vinery:red_jungle_grapejuice', icon: '/assets/icons/vinery/red_jungle_grapejuice.webp' },
            { id: 'white_jungle_grapejuice', title: 'White Jungle Grapejuice', namespace_id: 'vinery:white_jungle_grapejuice', icon: '/assets/icons/vinery/white_jungle_grapejuice.webp' }
          ]
        },
        {
          id: 'apple_juice',
          title: 'Apple Juice',
          namespace_id: 'vinery:apple_juice',
          subtitle: 'The base for Cider, Apple Wine and Mead.',
          icon: '/assets/icons/vinery/apple_juice.webp',
          search: 'apple juice apple press cider apple wine mead',
          details: true,
          detailsText: `Made from [[Apple Mash|apple_mash]] in the [[Apple Press|apple_press]]. Pour it into the [[Fermentation Barrel|fermentation_barrel]] like grape juice.`
        },
        {
          id: 'wine_bottle',
          title: 'Wine Bottle',
          namespace_id: 'vinery:wine_bottle',
          subtitle: 'The empty bottle for juice and wine. Every emptied wine gives it back.',
          icon: '/assets/icons/vinery/wine_bottle.webp',
          search: 'wine bottle empty glass'
        },
        {
          id: 'apple_mash',
          title: 'Apple Mash',
          namespace_id: 'vinery:apple_mash',
          subtitle: 'Mashed apples, the first step towards Apple Juice.',
          icon: '/assets/icons/vinery/apple_mash.webp',
          search: 'apple mash apple press',
          details: true,
          detailsText: `The [[Apple Press|apple_press]] makes it from apples and turns it into [[Apple Juice|apple_juice]] in the second step.`
        },
        {
          id: 'winemaker_armor',
          title: 'Winemaker Armor',
          subtitle: 'The full outfit saves you Bone Meal.',
          icon: '/assets/icons/vinery/straw_hat.webp',
          search: 'winemaker armor straw hat apron leggings boots bone meal set bonus',
          details: true,
          detailsText: `While you wear all four pieces, Bone Meal is not used up. Instead, each armor piece loses a little durability every time.`,
          detailsBullets: [
            'Full set: Bone Meal is not consumed',
            'Each use costs the armor some durability'
          ],
          items: [
            { id: 'winemaker_helmet', title: 'Straw Hat', namespace_id: 'vinery:straw_hat', icon: '/assets/icons/vinery/straw_hat.webp' },
            { id: 'winemaker_chestplate', title: 'Winemaker Apron', namespace_id: 'vinery:winemaker_apron', icon: '/assets/icons/vinery/winemaker_apron.webp' },
            { id: 'winemaker_leggings', title: 'Winemaker Leggings', namespace_id: 'vinery:winemaker_leggings', icon: '/assets/icons/vinery/winemaker_leggings.webp' },
            { id: 'winemaker_boots', title: 'Winemaker Boots', namespace_id: 'vinery:winemaker_boots', icon: '/assets/icons/vinery/winemaker_boots.webp' }
          ]
        },
        {
          id: 'completionist_banner',
          title: 'Completionist Banner',
          namespace_id: 'vinery:vinery_standard',
          subtitle: 'The reward for collecting every wine.',
          icon: '/assets/icons/vinery/vinery_standard.webp',
          search: 'completionist banner wine sommelier advancement regeneration smithing',
          details: true,
          detailsText: `Have every Vinery wine in your inventory at the same time to complete the advancement "Wine Sommelier". You get two Completionist Banners and a good amount of experience.

When placed, the banner gives Regeneration II to all players within 8 blocks. More copies can be made at the Smithing Table with a Netherite Upgrade and a Netherite Ingot.`,
          detailsBullets: [
            'Reward for collecting all wines',
            'Regeneration II within 8 blocks',
            'Can be copied at the Smithing Table'
          ]
        }
      ]
    },
    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'Fruit and, of course, wine.',
      entries: [
        {
          id: 'cherry',
          title: 'Cherry',
          namespace_id: 'vinery:cherry',
          subtitle: 'A sweet snack picked from Dark Cherry leaves, and an ingredient for several wines.',
          icon: '/assets/icons/vinery/cherry.webp',
          search: 'cherry fruit dark cherry tree'
        },
        {
          id: 'rotten_cherry',
          title: 'Rotten Cherry',
          namespace_id: 'vinery:rotten_cherry',
          subtitle: 'Not for eating, but great for throwing at friends.',
          icon: '/assets/icons/vinery/rotten_cherry.webp',
          search: 'rotten cherry throw'
        },
        {
          id: 'wine',
          title: 'Wine',
          subtitle: 'Over two dozen wines, each with its own effect.',
          icon: '/assets/icons/vinery/cristel_wine.webp',
          search: 'wine effects drink placeable aging bottle age year',
          details: true,
          detailsTitle: 'Drinking, placing and aging',
          detailsText: `Every wine is made in the [[Fermentation Barrel|fermentation_barrel]] from one specific juice plus a few ingredients. Drink it for its effect, or sneak and right click to place the bottle as decoration.

Wine gets better with age. A fresh bottle's effect lasts 90 seconds. Every in-game year (24 days) adds 10 seconds, and every six years raises the effect by one level, up to level V. The tooltip shows the age and how many days are left until the next level. Chorus Wine, Creeper's Crush and Mellohi Wine are instant and do not age.

Each item below lists its effect, the juice and the extra ingredients.`,
          detailsBullets: [
            'Sneak + right click to place',
            'Fresh: 90 seconds of effect',
            '+10 seconds per year (24 in-game days)',
            '+1 effect level every 6 years, up to V'
          ],
          items: [
            wine('apple_cider', 'Cider', 'Apple Juice + Sugar', 'Strength'),
            wine('apple_wine', 'Apple Wine', 'Apple Juice + an Apple Juice bottle', 'Resistance'),
            wine('mead', 'Mead', 'a splash of Apple Juice + Honey Bottle, Sugar', 'Haste'),
            wine('glowing_wine', 'Sun-kissed Wine', 'White Grapejuice + Glow Berries', 'Glowing'),
            wine('solaris_wine', 'Solaris Wine', 'White Grapejuice + Honey Bottle, Sweet Berries', 'Health Boost'),
            wine('kelp_cider', 'Kelp Cider', 'White Savanna Grapejuice + Kelp', 'Water Walker'),
            wine('eiswein', 'Eiswein', 'White Taiga Grapejuice + Snowball', 'Frosty Armor'),
            wine('aegis_wine', 'Aegis Wine', 'White Taiga Grapejuice + Sugar, Kelp, Iron Ingot', 'Armor'),
            wine('villagers_fright', "A Bottle of 'Villagers Fright'", 'White Jungle Grapejuice + Arrow', 'Bad Omen'),
            wine('clark_wine', 'Clark Wine', 'White Jungle Grapejuice + Sugar', 'Double Jump'),
            wine('jellie_wine', 'Jellie Wine', 'White Grapejuice + Apple Wine, Chenet Wine, Bolvar Wine', 'Better than Golden Apples'),
            wine('noir_wine', 'Noir Wine', 'Red Grapejuice + Sweet Berries', 'Jump Boost'),
            wine('red_wine', 'Red Wine', 'Red Grapejuice + Sugar', 'Slow Falling'),
            wine('strad_wine', 'Strad Wine', 'Red Grapejuice + Cocoa Beans, Sugar', 'Night Vision'),
            wine('cherry_wine', 'Cherry Wine', 'Red Grapejuice + Cherry', 'Invisibility'),
            wine('cristel_wine', 'Cristel Wine', 'Red Grapejuice + Sugar, Feather, Blaze Rod', 'Water Breathing'),
            wine('lilitu_wine', 'Miss Lilitus Wine', 'Red Savanna Grapejuice + Honey Bottle, Cherry', 'Partystarter'),
            wine('jo_special_mixture', "Jo's Special Mixture", 'Red Savanna Grapejuice + Fermented Spider Eye', 'Climbing'),
            wine('bolvar_wine', 'Bolvar Wine', 'Red Taiga Grapejuice + Honey Bottle, Cherry', 'Lava Walker'),
            wine('magnetic_wine', 'Magnetic Wine', 'Red Jungle Grapejuice + Iron Ingot', 'Magnet'),
            wine('stal_wine', 'Stal Wine', 'Red Jungle Grapejuice + Cocoa Beans, Sugar', 'Health'),
            wine('chenet_wine', 'Chenet Wine', 'Red Jungle Grapejuice + Spider Eye, Honey Bottle', 'Climbing'),
            wine('bottle_mojang_noir', "A Bottle of 'Mojang Noir'", 'Red Grapejuice + Honey Bottle, Cherry, Red Wine', 'Experience'),
            wine('chorus_wine', 'Chorus Wine', 'Red Taiga Grapejuice + Chorus Fruit', 'Teleport'),
            wine('creepers_crush', "A Bottle of 'Creepers Crush'", 'White Savanna Grapejuice + Gunpowder', 'Explosion'),
            wine('mellohi_wine', 'Mellohi Wine', 'White Grapejuice + Sugar, Glowstone Dust', 'Instant Health')
          ]
        }
      ]
    },
    {
      id: 'crops',
      title: 'Crops, Wild Plants, and Worldgen',
      subtitle: 'What grows in the wild, and where.',
      entries: [
        {
          id: 'apple_cherry_trees',
          title: 'Apple and Cherry Trees',
          subtitle: 'Fruit trees you harvest straight from the leaves.',
          icon: '/assets/icons/vinery/apple_tree_sapling.webp',
          search: 'apple tree cherry tree dark cherry sapling fruit leaves harvest bone meal plains meadow',
          details: true,
          detailsText: `Apple trees and Dark Cherry trees grow in Plains, Sunflower Plains and Meadows. Their saplings can be planted anywhere.

Some of their leaves bear fruit. Over time the fruit ripens; once it is fully grown, right click the leaf with an empty hand to pick one to three apples or cherries. The leaf then starts over.

Bone Meal speeds up ripening and can even make a leaf start bearing fruit.`,
          detailsBullets: [
            'Plains, Sunflower Plains and Meadow',
            'Only some leaves bear fruit',
            'Right click ripe leaves with an empty hand',
            'Bone Meal speeds things up'
          ],
          items: [
            { id: 'apple_tree_sapling', title: 'Apple Tree Sapling', namespace_id: 'vinery:apple_tree_sapling', icon: '/assets/icons/vinery/apple_tree_sapling.webp' },
            { id: 'dark_cherry_sapling', title: 'Dark Cherry Sapling', namespace_id: 'vinery:dark_cherry_sapling', icon: '/assets/icons/vinery/dark_cherry_sapling.webp' }
          ]
        },
        {
          id: 'grapes',
          title: 'Grapes',
          subtitle: 'Four grape families in red and white, each from its own biomes.',
          icon: '/assets/icons/vinery/red_grape.webp',
          search: 'grapes red white savanna taiga jungle seeds bush forest plains river swamp meadow badlands',
          details: true,
          detailsText: `Wild grape bushes grow across the Overworld. Right click a ripe bush to pick grapes. Grape seeds can be planted as a new bush on any solid block, on a [[Grapevine Stem|stem]] or, for Jungle Grapes, on a [[Lattice|lattice]].

Bushes need daylight to grow; Savanna Grapes want full sun. Foxes like grapes just as much as sweet berries.`,
          detailsBullets: [
            'Red and White Grapes: forests, plains, rivers, swamps, meadows and mountains',
            'Taiga Grapes: taigas and mountains',
            'Savanna Grapes: savannas and Wooded Badlands',
            'Jungle Grapes: jungles and Wooded Badlands, grow only on lattices'
          ],
          items: [
            { id: 'red_grape', title: 'Red Grape', namespace_id: 'vinery:red_grape', icon: '/assets/icons/vinery/red_grape.webp' },
            { id: 'white_grape', title: 'White Grape', namespace_id: 'vinery:white_grape', icon: '/assets/icons/vinery/white_grape.webp' },
            { id: 'savanna_grapes_red', title: 'Red Savanna Grapes', namespace_id: 'vinery:savanna_grapes_red', icon: '/assets/icons/vinery/savanna_grapes_red.webp' },
            { id: 'savanna_grapes_white', title: 'White Savanna Grapes', namespace_id: 'vinery:savanna_grapes_white', icon: '/assets/icons/vinery/savanna_grapes_white.webp' },
            { id: 'taiga_grapes_red', title: 'Red Taiga Grapes', namespace_id: 'vinery:taiga_grapes_red', icon: '/assets/icons/vinery/taiga_grapes_red.webp' },
            { id: 'taiga_grapes_white', title: 'White Taiga Grapes', namespace_id: 'vinery:taiga_grapes_white', icon: '/assets/icons/vinery/taiga_grapes_white.webp' },
            { id: 'jungle_grapes_red', title: 'Red Jungle Grapes', namespace_id: 'vinery:jungle_grapes_red', icon: '/assets/icons/vinery/jungle_grapes_red.webp' },
            { id: 'jungle_grapes_white', title: 'White Jungle Grapes', namespace_id: 'vinery:jungle_grapes_white', icon: '/assets/icons/vinery/jungle_grapes_white.webp' }
          ]
        }
      ]
    },
    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'A travelling wine merchant and a new villager.',
      entries: [
        {
          id: 'wandering_winemaker',
          title: 'Wandering Winemaker',
          namespace_id: 'vinery:wandering_winemaker',
          subtitle: 'A travelling merchant with seeds, saplings and juice.',
          icon: '/assets/icons/vinery/entity/wandering_winemaker.webp',
          search: 'wandering winemaker trader seeds saplings juice emeralds mules',
          details: true,
          detailsText: `Whenever a Wandering Trader would show up, there is a chance the Wandering Winemaker comes instead, usually with two [[Mules|winemaker_donkey]] in tow.

He sells grape seeds of every kind, apple and cherry saplings, grapes, juices, vineyard slabs, Dark Cherry Planks and Cherry Wine. Each visit he picks eight of these offers.`,
          detailsBullets: [
            'Replaces some Wandering Trader visits',
            'Sells seeds, saplings, juice and more',
            'Eight random offers per visit',
            'Spawn chance adjustable in the config'
          ]
        },
        {
          id: 'winemaker_villager',
          title: 'Winemaker',
          namespace_id: 'vinery:winemaker',
          subtitle: 'A villager profession that works at the Fermentation Barrel.',
          icon: '/assets/icons/vinery/entity/winemaker_villager.webp',
          search: 'winemaker villager profession trades fermentation barrel',
          details: true,
          detailsText: `Place a [[Fermentation Barrel|fermentation_barrel]] near an unemployed villager to get a Winemaker.

Winemakers buy grapes and cherries and sell seeds, Wine Bottles, Apple Mash, fruit bags, the Grapevine Pot, the Wine Box, the winemaker outfit and more. All trades can be changed in the config.`
        },
        {
          id: 'winemaker_donkey',
          title: 'Mule',
          namespace_id: 'vinery:mule',
          subtitle: 'The pack animal of the Wandering Winemaker.',
          icon: '/assets/icons/vinery/entity/winemaker_donkey.webp',
          search: 'mule donkey wandering winemaker ride',
          details: true,
          detailsText: `Two mules usually arrive on a lead with the [[Wandering Winemaker|wandering_winemaker]]. They can be ridden like normal mules.`
        }
      ]
    },
    {
      id: 'mob_effects',
      title: 'Mob Effects',
      subtitle: 'The effects behind the wines.',
      entries: [
        {
          id: 'teleport',
          title: 'Teleport',
          subtitle: 'Teleports you to a random safe spot nearby. From Chorus Wine.',
          icon: '/assets/icons/vinery/effects/teleport.webp',
          search: 'teleport effect chorus wine'
        },
        {
          id: 'magnet',
          title: 'Magnet',
          subtitle: 'Pulls nearby items towards you. Sneak to pause it. From Magnetic Wine.',
          icon: '/assets/icons/vinery/effects/magnet.webp',
          search: 'magnet effect items pull magnetic wine'
        },
        {
          id: 'party_effect',
          title: 'Partystarter',
          subtitle: 'Your hits set off fireworks that deal extra damage. From Miss Lilitus Wine.',
          icon: '/assets/icons/vinery/effects/party_effect.webp',
          search: 'partystarter party effect fireworks lilitu'
        },
        {
          id: 'lava_walker',
          title: 'Lava Walker',
          subtitle: 'Walk on lava. From Bolvar Wine.',
          icon: '/assets/icons/vinery/effects/lava_walker.webp',
          search: 'lava walker effect bolvar wine'
        },
        {
          id: 'double_jump',
          title: 'Double Jump',
          subtitle: 'Jump a second time in mid-air. From Clark Wine.',
          icon: '/assets/icons/vinery/effects/double_jump.webp',
          search: 'double jump effect clark wine'
        },
        {
          id: 'jellie',
          title: 'Better than Golden Apples!',
          subtitle: 'Heals you steadily and adds extra absorption hearts. A tribute to Jellie, the cat of GoodTimesWithScar. From Jellie Wine.',
          icon: '/assets/icons/vinery/effects/jellie.webp',
          search: 'jellie effect golden apple absorption regeneration jellie wine'
        },
        {
          id: 'creeper_effect',
          title: 'Explosion',
          subtitle: 'Kaboom. You explode. From Creeper’s Crush, drink with care.',
          icon: '/assets/icons/vinery/effects/creeper_effect.webp',
          search: 'explosion creeper effect creepers crush'
        },
        {
          id: 'experience_effect',
          title: 'Experience',
          subtitle: 'Experience orbs give you 25% more per effect level. From Mojang Noir.',
          icon: '/assets/icons/vinery/effects/experience_effect.webp',
          search: 'experience effect xp bonus mojang noir'
        },
        {
          id: 'climbing_effect',
          title: 'Climbing',
          subtitle: 'Climb up walls like a spider. From Jo’s Special Mixture and Chenet Wine.',
          icon: '/assets/icons/vinery/effects/climbing_effect.webp',
          search: 'climbing effect walls jo special mixture chenet'
        },
        {
          id: 'water_walker',
          title: 'Water Walker',
          subtitle: 'Walk on water. From Kelp Cider.',
          icon: '/assets/icons/vinery/effects/water_walker.webp',
          search: 'water walker effect kelp cider'
        },
        {
          id: 'armor_effect',
          title: 'Armor',
          subtitle: 'More armor and armor toughness. From Aegis Wine.',
          icon: '/assets/icons/vinery/effects/armor_effect.webp',
          search: 'armor effect toughness aegis wine'
        },
        {
          id: 'frosty_armor',
          title: 'Frosty Armor',
          subtitle: '+4 armor and +2 attack damage, but you move slower and start to freeze. From Eiswein.',
          icon: '/assets/icons/vinery/effects/frosty_armor.webp',
          search: 'frosty armor effect freeze slow damage eiswein'
        },
        {
          id: 'health_effect',
          title: 'Health Effect',
          subtitle: 'Raises your maximum health while it lasts. From Stal Wine.',
          icon: '/assets/icons/vinery/effects/health_effect.webp',
          search: 'health effect max health stal wine'
        },
        {
          id: 'luck_effect',
          title: 'Luck',
          subtitle: 'Increases luck. No Vinery wine gives this effect at the moment.',
          icon: '/assets/icons/vinery/effects/luck_effect.webp',
          search: 'luck effect'
        },
        {
          id: 'resistance_effect',
          title: 'Resistance',
          subtitle: 'More armor toughness and damage resistance. No Vinery wine gives this effect at the moment.',
          icon: '/assets/icons/vinery/effects/resistance_effect.webp',
          search: 'resistance effect'
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Settings and fruit storage.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle: 'Fermentation time, growth chances, wine aging, villager trades and the Wandering Winemaker can all be adjusted.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config configuration settings fermentation time growth aging trades trader',
          details: true,
          detailsText: `The config file lets you change, among other things:`,
          detailsBullets: [
            'Fermentation time and barrel capacity',
            'Apple Press mashing and fermenting time',
            'Growth chances for grapes, apples and cherries',
            'Wine aging: base duration, days per year, years per level, maximum level',
            'All Winemaker trades',
            'Spawn chance and mules of the Wandering Winemaker',
            'Completionist Banner effect and tooltip'
          ]
        },
        {
          id: 'loot',
          title: 'Fruit Bags',
          subtitle: 'Decorative sacks full of grapes, cherries or apples.',
          icon: '/assets/icons/misc/chest.webp',
          search: 'grape bag cherry bag apple bag decoration storage block',
          details: true,
          detailsText: `Every grape type, cherries and apples come in a decorative bag block. The Winemaker sells some of them, and they are also crafted from the fruit.`
        }
      ]
    }
  ],
  recipesCta: {
    enabled: true,
    title: 'Recipes',
    text: `Feeling a little lost and not sure how to craft certain things?
Here you will find a helpful overview of all Let’s Do crafting stations and their recipes.`,
    buttonLabel: 'Open Recipe Overview',
    href: '/recipes/'
  }
}
