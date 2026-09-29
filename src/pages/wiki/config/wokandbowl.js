export default {
  slug: 'wokandbowl',
  title: 'Wok & Bowl',
  logo: '/assets/mod-logos/wokandbowl.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Sizzling woks and steaming bowls, the wok cooking extension to Farm & Charm',
  aboutText: `Wok & Bowl brings wok cooking inspired by East Asian cuisine into your world. Flood your rice paddies, prepare your ingredients on the Cutting Board, toss them into a hot wok and serve your dish at just the right moment.

The mod builds on the ingredients of Farm & Charm and adds its own preparation steps, stations and dishes. Farm & Charm is required.

Heat the wok. Toss with care. Serve it hot.`,
  sections: [
    {
      id: 'getting_started',
      title: 'Getting Started',
      subtitle: 'From paddy to plate in a few steps.',
      entries: [
        {
          id: 'first_steps',
          title: 'First Steps',
          subtitle: 'The quickest way to your first bowl of fried rice.',
          icon: '/assets/icons/wokandbowl/simple_fried_rice.webp',
          search: 'guide start beginner progression first dish tutorial',
          details: true,
          detailsTitle: 'Your first dish',
          detailsText: `Look for [[Wild Rice|wild_rice]] in swamps, mangrove swamps or, rarely, along rivers and break it to get your first [[Rice|rice]]. No swamp nearby? Check village chests, a farmer or the wandering trader.

Craft a [[Wok|wok]] and place it on top of a heat source, for example a campfire or a [[Stove|farm-and-charm:stove]]. Brew a bottle of [[Fermented Sauce|fermented_sauce]] in the [[Cooking Pot|farm-and-charm:cooking_pot]].

Right click the hot wok with [[Rice|rice]], toss it whenever it asks you to, finish with [[Fermented Sauce|fermented_sauce]] and serve with an empty hand. Congratulations, that is Simple Fried Rice!`,
          detailsBullets: [
            'Find [[Wild Rice|wild_rice]] in swamps or along rivers',
            'Plant [[Rice|rice]] in flooded [[Rice Paddies|rice_paddy]]',
            'Prepare meat and fish on the [[Cutting Board|cutting_board]]',
            'Cook in the [[Wok|wok]], steam with the [[Bamboo Steamer|bamboo_steamer]]',
            'Collect everything with a [[Rattan Basket|rattan_basket]]'
          ]
        },
        {
          id: 'block_info',
          title: 'Block Info & Hints',
          subtitle: 'Look at a station to see what is inside and what to do next.',
          icon: '/assets/icons/misc/config.webp',
          search: 'hud block info hint overlay next start finish tooltip shift',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `When you look at a Wok, Cutting Board or Ingredient Cubby, a small overlay shows its contents and the next step. The wok even tells you which ingredients can start, continue or finish a dish.

The Cutting Board, Ingredient Cubby and Rattan Basket explain themselves in their tooltip. Hold Shift for more information.`,
          detailsBullets: [
            '[[Wok|wok]]: Start with, Next, Finish with, Toss!, Ready to serve!',
            '"Toss!" slowly turns from gold to red as your time runs out',
            'The panel border shows the heat: normal on a campfire, red on a stove, blue on soul fire',
            '[[Cutting Board|cutting_board]]: chopping and stripping progress, what to add next',
            '[[Sticky Rice|sticky_rice]]: shows when it needs fertilizer',
            'Both overlays can be turned off in the config'
          ]
        }
      ]
    },
    {
      id: 'farming',
      title: 'Farming',
      subtitle: 'Rice, sticky rice and rattan.',
      entries: [
        {
          id: 'wild_rice',
          title: 'Wild Rice',
          subtitle: 'Grows in swamps and is your first source of rice.',
          icon: '/assets/icons/wokandbowl/wild_rice.webp',
          search: 'wild rice swamp mangrove worldgen shears fireflies sticky',
          details: true,
          detailsTitle: 'Where and what',
          detailsText: `Wild Rice grows in small patches on grass and mud in swamps and mangrove swamps, and rarely along rivers.

Break it by hand for 1 to 3 [[Rice|rice]], with a 15% chance for [[Sticky Rice|sticky_rice]] on top. Fortune increases the rice drop. Use shears to pick up the plant itself.

On clear nights, fireflies dance above it.`,
          detailsBullets: [
            'Biomes: Swamp and Mangrove Swamp, rarely rivers',
            'Also found in village chests, jungle temples and shipwrecks',
            'Sold by the wandering trader, farmers sometimes sell rice',
            'Drops 1 to 3 Rice, affected by Fortune',
            '15% chance for Sticky Rice',
            'Shears drop the Wild Rice plant',
            'Can be bonemealed'
          ]
        },
        {
          id: 'rice_paddy',
          title: 'Rice Paddy',
          subtitle: 'Flooded farmland where rice grows.',
          icon: '/assets/icons/farm-and-charm/fertilized_farmland.webp',
          search: 'rice paddy flooded water shovel fertilized farmland lower waterlogged',
          details: true,
          detailsTitle: 'How to make one',
          detailsText: `Right click [[Fertilized Farmland|farm-and-charm:fertilized_farmland]] with a shovel to dig it down into a Rice Paddy. The block above has to be empty.

Now flood it: a rice paddy can be waterlogged, and only a flooded paddy accepts rice. The easiest way is to pour a water bucket onto it.`,
          detailsBullets: [
            'Shovel on [[Fertilized Farmland|farm-and-charm:fertilized_farmland]]',
            'Plain farmland works too if enabled in the config',
            'Must be flooded with water',
            'Mined with a shovel'
          ]
        },
        {
          id: 'rice',
          title: 'Rice',
          subtitle: 'The base of almost every wok dish.',
          icon: '/assets/icons/wokandbowl/rice.webp',
          namespace_id: 'wokandbowl:rice',
          search: 'rice crop seed plant grow paddy harvest bag',
          details: true,
          detailsTitle: 'Growing Rice',
          detailsText: `Plant Rice in a flooded [[Rice Paddy|rice_paddy]]. It needs a light level of 9 or more and grows much faster than wheat by default.

Harvest it when fully grown. Rice is also the seed, so you can replant straight away.`,
          detailsBullets: [
            'Only grows in a flooded Rice Paddy',
            'Needs light level 9 or more',
            'About four times faster than wheat (configurable)',
            'Used in the [[Wok|wok]] and [[Bamboo Steamer|bamboo_steamer]]'
          ]
        },
        {
          id: 'sticky_rice',
          title: 'Sticky Rice',
          subtitle: 'A hungry variety that needs fertilizer as it grows.',
          icon: '/assets/icons/wokandbowl/sticky_rice.webp',
          namespace_id: 'wokandbowl:sticky_rice',
          search: 'sticky rice crop hungry fertilizer bone meal pause stage glutinous',
          details: true,
          detailsTitle: 'Keep it fed',
          detailsText: `Sticky Rice grows like [[Rice|rice]], but pauses at every second growth stage until you fertilize it. Hungry plants are shown in the block info as "Needs fertilizer".

Use bone meal or [[Fertilizer|farm-and-charm:fertilizer]] on a hungry plant to wake it up. The first bone meal only feeds it, the next one makes it grow.

You get your first Sticky Rice as a rare drop from [[Wild Rice|wild_rice]].`,
          detailsBullets: [
            'Stops at stage 2, 4 and 6 until fertilized',
            'Can be turned off in the config',
            'Steamed into [[Steamed Sticky Rice|steamed_sticky_rice]] for [[Sweet Rice Cakes|cutting_board_assembly]]'
          ]
        },
        {
          id: 'rice_bags',
          title: 'Rice Bags',
          subtitle: 'Store nine rice in one block.',
          icon: '/assets/icons/wokandbowl/rice_bag.webp',
          search: 'rice bag sticky rice bag storage block compress',
          details: true,
          detailsTitle: 'Storage',
          detailsText: `Nine [[Rice|rice]] or [[Sticky Rice|sticky_rice]] make one bag, and a bag turns back into nine grains in the crafting grid.`,
          items: [
            {
              id: 'rice_bag',
              title: 'Rice Bag',
              icon: '/assets/icons/wokandbowl/rice_bag.webp',
              search: 'rice bag'
            },
            {
              id: 'sticky_rice_bag',
              title: 'Sticky Rice Bag',
              icon: '/assets/icons/wokandbowl/sticky_rice_bag.webp',
              search: 'sticky rice bag'
            }
          ]
        },
        {
          id: 'rattan',
          title: 'Rattan',
          subtitle: 'Branches on jungle trees that give you Rattan Cane.',
          icon: '/assets/icons/wokandbowl/rattan_cane.webp',
          search: 'rattan branch cane jungle tree log harvest regrow cleaver bonemeal',
          details: true,
          detailsTitle: 'Harvesting',
          detailsText: `Rattan Branches grow on the sides of jungle logs in jungle biomes.

Right click a mature branch to harvest 1 to 3 [[Rattan Cane|rattan_cane]]. The branch stays and grows back over time, bone meal speeds it up. Break it with a [[Cleaver|cleavers]] to take the branch with you and plant it on a jungle log of your own.

[[Rattan Cane|rattan_cane]] is used for the [[Rattan Basket|rattan_basket]], [[Rattan furniture|rattan_furniture]] and [[Tatami|tatami]].`,
          detailsBullets: [
            'Found on jungle logs in jungle biomes',
            'Right click when mature: 1 to 3 [[Rattan Cane|rattan_cane]]',
            'Regrows, can be bonemealed',
            '[[Cleaver|cleavers]] drops the [[branch|rattan_branch]] itself',
            'Can be placed on jungle logs and jungle wood',
            'Leaves drift down from the branches now and then',
            'Rattan Cane can also be found in jungle temples and village chests or bought from the wandering trader'
          ],
          items: [
            {
              id: 'rattan_branch',
              title: 'Rattan Branch',
              icon: '/assets/icons/wokandbowl/rattan_branch.webp',
              search: 'rattan branch'
            },
            {
              id: 'rattan_cane',
              title: 'Rattan Cane',
              icon: '/assets/icons/wokandbowl/rattan_cane.webp',
              search: 'rattan cane'
            }
          ]
        }
      ]
    },
    {
      id: 'preparation',
      title: 'Preparation',
      subtitle: 'Chopping, filleting, assembling and stocking your kitchen.',
      entries: [
        {
          id: 'cutting_board',
          title: 'Cutting Board',
          subtitle: 'Fillet fish, chop meat, strip logs and assemble dishes by hand.',
          icon: '/assets/icons/wokandbowl/cutting_board.webp',
          namespace_id: 'wokandbowl:cutting_board',
          search: 'cutting board chop knife cleaver fillet assemble strip axe station',
          details: true,
          detailsTitle: 'Three ways to use it',
          detailsText: `**Chopping:** Place a knife or [[Cleaver|cleavers]] on the board, it sticks right into the wood. Then hold right click with an ingredient to chop it. You can also place the ingredient first and chop it with the knife in your hand.

**Stripping logs:** Place an axe on the board and hold right click with a log to strip it. Every log that an axe can strip works, including logs from other mods.

**Assembling:** Without a tool, stack up to three ingredients on the board and right click with an empty hand to combine them. Shift and right click takes the last ingredient back.

Results go straight into a nearby open [[Ingredient Cubby|ingredient_cubby]] or [[Rattan Basket|rattan_basket]], otherwise they pop out.`,
          detailsBullets: [
            'Right click with an empty hand to take the tool back',
            'Each finished cut costs one durability',
            'Meat, fish, vegetables and wood each sound different when chopped',
            'See [[Cutting Board Recipes|cutting_board_recipes]] and [[Assembly Recipes|cutting_board_assembly]]'
          ]
        },
        {
          id: 'cleavers',
          title: 'Cleavers',
          subtitle: 'Heavy kitchen blades that chop faster and hit hard.',
          icon: '/assets/icons/wokandbowl/iron_cleaver.webp',
          search: 'cleaver iron diamond netherite knife axe weapon head drop chops',
          details: true,
          detailsTitle: 'Chop, chop',
          detailsText: `Cleavers work as knives on the [[Cutting Board|cutting_board]] and as axes and weapons everywhere else. The better the cleaver, the fewer chops each ingredient needs.

Mobs and players defeated with a cleaver always drop their head, if they have one: zombies, skeletons, wither skeletons, creepers, piglins, the Ender Dragon and players.

The [[Netherite Cleaver|netherite_cleaver]] is made on a smithing table from a [[Diamond Cleaver|diamond_cleaver]] and survives lava.`,
          detailsBullets: [
            '[[Iron Cleaver|iron_cleaver]]: 5 chops',
            '[[Diamond Cleaver|diamond_cleaver]]: 3 chops',
            '[[Netherite Cleaver|netherite_cleaver]]: 1 chop',
            'Other knives use the recipe value (3 chops)',
            'Accepts sword and axe enchantments'
          ],
          items: [
            {
              id: 'iron_cleaver',
              title: 'Iron Cleaver',
              icon: '/assets/icons/wokandbowl/iron_cleaver.webp',
              search: 'iron cleaver'
            },
            {
              id: 'diamond_cleaver',
              title: 'Diamond Cleaver',
              icon: '/assets/icons/wokandbowl/diamond_cleaver.webp',
              search: 'diamond cleaver'
            },
            {
              id: 'netherite_cleaver',
              title: 'Netherite Cleaver',
              icon: '/assets/icons/wokandbowl/netherite_cleaver.webp',
              search: 'netherite cleaver'
            }
          ]
        },
        {
          id: 'cutting_board_recipes',
          title: 'Cutting Board Recipes',
          subtitle: 'Everything you can chop with a knife or cleaver.',
          icon: '/assets/icons/wokandbowl/cut_salmon.webp',
          search: 'cutting board recipes salmon porkchop beef mutton chicken melon dough pasta tomato strawberry seeds',
          details: true,
          detailsTitle: 'Recipes',
          detailsText: `All recipes need 3 chops with a regular knife. [[Cleavers|cleavers]] use their own number instead.`,
          detailsBullets: [
            '**Salmon** → 2 [[Cut Salmon|cut_salmon]] + 1 [[Fish Bones|fish_bones]]',
            '**Porkchop** → 2 [[Chopped Pork|chopped_pork]]',
            '**Beef** → 1 [[Minced Beef|farm-and-charm:minced_beef]]',
            '**Mutton** → 1 [[Lamb Ham|farm-and-charm:lamb_ham]]',
            '**Chicken** → 3 [[Chicken Parts|farm-and-charm:chicken_parts]]',
            '**[[Dough|farm-and-charm:dough]]** → 2 [[Raw Pasta|farm-and-charm:raw_pasta]]',
            '**Melon** → 9 Melon Slices',
            '**[[Tomato|farm-and-charm:tomato]]** → 4 [[Tomato Seeds|farm-and-charm:tomato_seeds]]',
            '**[[Strawberry|farm-and-charm:strawberry]]** → 4 [[Strawberry Seeds|farm-and-charm:strawberry_seeds]]',
            '**Any log** with an axe on the board → stripped log (2 chops)'
          ],
          items: [
            {
              id: 'cut_salmon',
              title: 'Cut Salmon',
              icon: '/assets/icons/wokandbowl/cut_salmon.webp',
              search: 'cut salmon fillet'
            },
            {
              id: 'chopped_pork',
              title: 'Chopped Pork',
              icon: '/assets/icons/wokandbowl/chopped_pork.webp',
              search: 'chopped pork'
            },
            {
              id: 'fish_bones',
              title: 'Fish Bones',
              icon: '/assets/icons/wokandbowl/fish_bones.webp',
              search: 'fish bones bone meal broth cat food'
            }
          ]
        },
        {
          id: 'cutting_board_assembly',
          title: 'Assembly Recipes',
          subtitle: 'Dumplings, buns, rolls, rice balls and rice cakes, put together by hand.',
          icon: '/assets/icons/wokandbowl/seaweed_salmon_rolls.webp',
          search: 'assembly dumplings bun rice ball seaweed salmon rolls sweet rice cake dough kelp honey sugar',
          details: true,
          detailsTitle: 'Recipes',
          detailsText: `Place the ingredients on an empty [[Cutting Board|cutting_board]] without a tool, then right click with an empty hand. The order does not matter.

Raw dumplings and buns still need to be steamed in the [[Bamboo Steamer|bamboo_steamer]].`,
          detailsBullets: [
            '**[[Raw Pork Dumplings|raw_pork_dumplings]]**: [[Dough|farm-and-charm:dough]] + [[Chopped Pork|chopped_pork]]',
            '**[[Raw Vegetable Dumplings|raw_vegetable_dumplings]]**: [[Dough|farm-and-charm:dough]] + Mushroom',
            '**[[Raw Savory Bun|raw_savory_bun]]**: [[Dough|farm-and-charm:dough]] + [[Chopped Pork|chopped_pork]] or [[Cured Meat|cured_meat]]',
            '**[[Raw Sweet Bun|raw_sweet_bun]]**: [[Dough|farm-and-charm:dough]] + Honey Bottle',
            '**[[Rice Ball|rice_ball]]**: [[Steamed Rice|steamed_rice]], [[Steamed Sticky Rice|steamed_sticky_rice]] or [[Simple Fried Rice|simple_fried_rice]] + Kelp',
            '**[[Seaweed Salmon Rolls|seaweed_salmon_rolls]]**: Kelp + [[Steamed Rice|steamed_rice]] + [[Cut Salmon|cut_salmon]]',
            '**[[Sweet Rice Cake|sweet_rice_cake]]** (×2): [[Steamed Sticky Rice|steamed_sticky_rice]] + Sugar'
          ],
          items: [
            {
              id: 'raw_pork_dumplings',
              title: 'Raw Pork Dumplings',
              icon: '/assets/icons/wokandbowl/raw_pork_dumplings.webp',
              search: 'raw pork dumplings'
            },
            {
              id: 'raw_vegetable_dumplings',
              title: 'Raw Vegetable Dumplings',
              icon: '/assets/icons/wokandbowl/raw_vegetable_dumplings.webp',
              search: 'raw vegetable dumplings'
            },
            {
              id: 'raw_savory_bun',
              title: 'Raw Savory Bun',
              icon: '/assets/icons/wokandbowl/raw_savory_bun.webp',
              search: 'raw savory bun'
            },
            {
              id: 'raw_sweet_bun',
              title: 'Raw Sweet Bun',
              icon: '/assets/icons/wokandbowl/raw_sweet_bun.webp',
              search: 'raw sweet bun'
            }
          ]
        },
        {
          id: 'farm_and_charm_ingredients',
          title: 'Sauce, Broth & Cured Meat',
          subtitle: 'Ingredients made with the Farm & Charm [[Cooking Pot|farm-and-charm:cooking_pot]] and [[Silo|farm-and-charm:silo_copper]].',
          icon: '/assets/icons/wokandbowl/fermented_sauce.webp',
          search: 'fermented sauce broth cured meat cooking pot silo drying yeast kelp mushroom onion fish bones',
          details: true,
          detailsTitle: 'Recipes',
          detailsText: `[[Fermented Sauce|fermented_sauce]] finishes every [[wok dish|wok_recipes]], [[Broth|broth]] goes into the [[Noodle Bowl|noodle_bowl]] and [[Cured Meat|cured_meat]] fills [[buns|raw_savory_bun]] and bowls.

Both bottles give their glass bottle back when you use them in the wok.`,
          detailsBullets: [
            '**[[Fermented Sauce|fermented_sauce]]** ([[Cooking Pot|farm-and-charm:cooking_pot]]): Dried Kelp + Mushroom + [[Yeast|farm-and-charm:yeast]] + Water Bottle, in a Glass Bottle',
            '**[[Broth|broth]]** ([[Cooking Pot|farm-and-charm:cooking_pot]]): [[Fish Bones|fish_bones]] + [[Onion|farm-and-charm:onion]] + Water Bottle, in a Glass Bottle',
            '**[[Cured Meat|cured_meat]]** ([[Silo|farm-and-charm:silo_copper]]): dry a Porkchop'
          ],
          items: [
            {
              id: 'fermented_sauce',
              title: 'Fermented Sauce',
              icon: '/assets/icons/wokandbowl/fermented_sauce.webp',
              search: 'fermented sauce soy'
            },
            {
              id: 'broth',
              title: 'Broth',
              icon: '/assets/icons/wokandbowl/broth.webp',
              search: 'broth soup'
            },
            {
              id: 'cured_meat',
              title: 'Cured Meat',
              icon: '/assets/icons/wokandbowl/cured_meat.webp',
              search: 'cured meat dried pork'
            }
          ]
        },
        {
          id: 'fish_bones_uses',
          title: 'Nothing Goes to Waste',
          subtitle: '[[Fish Bones|fish_bones]] from [[filleting|cutting_board_recipes]] have three uses.',
          icon: '/assets/icons/wokandbowl/fish_bones.webp',
          search: 'fish bones bone meal cat food broth waste',
          details: true,
          detailsTitle: 'Uses',
          detailsBullets: [
            '2 [[Fish Bones|fish_bones]] → 1 Bone Meal',
            '[[Broth|broth]] in the [[Cooking Pot|farm-and-charm:cooking_pot]]',
            '[[Cat Food|farm-and-charm:cat_food]] in the [[Crafting Bowl|farm-and-charm:crafting_bowl]]'
          ]
        },
        {
          id: 'ingredient_cubby',
          title: 'Ingredient Cubby',
          subtitle: 'Four compartments to keep your ingredients within reach.',
          icon: '/assets/icons/wokandbowl/ingredient_cubby.webp',
          namespace_id: 'wokandbowl:ingredient_cubby',
          search: 'ingredient cubby storage compartment open close brick',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The cubby is placed closed. Click a side to open or close it. When it is open, click one of the four compartments on top to fill it with the item in your hand or take items out. Hold Shift to take a whole stack.

An open cubby next to a [[Cutting Board|cutting_board]] catches everything you chop.`,
          detailsBullets: [
            '4 compartments, 64 items each (configurable)',
            'Catches Cutting Board results when open',
            'Mined with a pickaxe'
          ]
        },
        {
          id: 'rattan_basket',
          title: 'Rattan Basket',
          subtitle: 'Automatically collects what your stations produce.',
          icon: '/assets/icons/wokandbowl/rattan_basket.webp',
          namespace_id: 'wokandbowl:rattan_basket',
          search: 'rattan basket collect automation storage hopper comparator stations',
          details: true,
          detailsTitle: 'Your kitchen helper',
          detailsText: `The Rattan Basket is a 27 slot container that pulls finished items out of stations right next to it: output from the [[Bamboo Steamer|bamboo_steamer]], results from the [[Cutting Board|cutting_board]] and the output of other stations. Wok dishes stay in the wok until you take them out yourself.

It also catches items dropped on top of it and fresh drops from the [[Mincer|farm-and-charm:mincer]] and [[Crafting Bowl|farm-and-charm:crafting_bowl]]. Watch the items fly in!`,
          detailsBullets: [
            'Range: 1 block in every direction (configurable up to 4)',
            'Works with comparators',
            'Can be renamed in an anvil'
          ]
        }
      ]
    },
    {
      id: 'cooking',
      title: 'The Wok',
      subtitle: 'Heat, toss and serve.',
      entries: [
        {
          id: 'wok',
          title: 'Wok',
          subtitle: 'The heart of the mod. Needs heat from below.',
          icon: '/assets/icons/wokandbowl/wok.webp',
          namespace_id: 'wokandbowl:wok',
          search: 'wok heat source campfire stove fire station cooking',
          details: true,
          detailsTitle: 'Setting up',
          detailsText: `Place the wok on top of a heat source such as a campfire or a [[Stove|farm-and-charm:stove]]. Every block Farm & Charm accepts as a heat source works. A wok on a campfire sits right on the flames, otherwise it needs a solid block below.

A cold wok does nothing. The block info shows "Needs heat" when a heat source is missing. The hotter the fire, the faster the wok cooks, see [[Heat & Soul Fire|wok_heat]].

Every serving gives you 4 dishes. Take them out with an empty hand. The wok can also hang on a Farm & Charm [[Tool Rack|farm-and-charm:tool_rack]].`,
          detailsBullets: [
            'Needs a heat source below (configurable)',
            '4 dishes per serving (configurable)',
            'Holds up to 3 stacks of finished dishes',
            'Turns into a steamer with a [[Bamboo Steamer|bamboo_steamer]]',
            'Mined with a pickaxe'
          ]
        },
        {
          id: 'wok_cooking',
          title: 'Wok Cooking',
          subtitle: 'Add ingredients one after another and discover new dishes along the way.',
          icon: '/assets/icons/wokandbowl/egg_fried_rice.webp',
          search: 'wok cooking steps toss serve sauce ingredients order timer owner',
          details: true,
          detailsTitle: 'Step by step',
          detailsText: `**1. Start.** Right click the hot wok with the first ingredient. The first ingredient has to start a recipe.

**2. Build.** Add more ingredients, up to six. Every step can already be a dish of its own: [[Rice|rice]] is [[Simple Fried Rice|simple_fried_rice]], Rice and Egg are [[Egg Fried Rice|egg_fried_rice]], and so on. Once a dish is going you can also throw in any other food and improvise, you will end up with a [[Mixed Stir-Fry|wok_recipes]].

**3. Toss.** Every 6 seconds a bell rings and the wok shows "Toss!". Right click with an empty hand right away for a perfect toss. Tossing late makes the wok smoke, missing the toss completely [[costs a flame|wok_quality]].

**Flambé!** Use flint and steel on the cooking wok for a huge burst of flames and one extra flame on the dish. But never while the wok calls for a toss, or the dish burns on the spot.

**4. Finish.** Right click with [[Fermented Sauce|farm_and_charm_ingredients]] once you are happy with the dish. After the sauce, no more ingredients can be added.

**5. Serve.** When the wok shows "Ready to serve!", right click with an empty hand.`,
          detailsBullets: [
            'Cooking time: 20 s, plus 2 s for each extra ingredient, at most 24 s',
            'Only the player who started the dish can cook it (configurable)',
            'At most 6 ingredients per dish',
            'Burnt Wok Dish cannot be thrown into the wok',
            'Liquids like Broth make the wok hiss with steam',
            'See [[Wok Recipes|wok_recipes]] for all dishes'
          ]
        },
        {
          id: 'wok_quality',
          title: 'Flames & Timing',
          subtitle: 'Serve at the right moment for up to three flames.',
          icon: '/assets/icons/misc/time.webp',
          search: 'quality flames three flame perfect serve timing toss late flambe bonus nutrition saturation rested',
          details: true,
          detailsTitle: 'How flames work',
          detailsText: `Every dish starts with three flames. A missed toss costs one flame, two late tosses cost one flame, and serving outside the perfect window costs one more. A [[flambé|wok_cooking]] gives one flame back. A dish never drops below one flame.

The perfect window is 2 seconds before to 2 seconds after the cooking time. Better dishes are more filling and make you rested for longer on [[tatami|tatami_rested]].`,
          detailsBullets: [
            'Three flames: +10% nutrition and saturation',
            'Two flames: +5% nutrition and saturation',
            'One flame: base values',
            'Perfect toss window: 1 second after the call (configurable)',
            'The flames are shown in the tooltip',
            'Flames can be turned off in the config: every dish is then perfect and never burns'
          ]
        },
        {
          id: 'wok_heat',
          title: 'Heat & Soul Fire',
          subtitle: 'The hotter the fire, the faster and less forgiving the wok.',
          icon: '/assets/icons/wokandbowl/wok.webp',
          search: 'heat campfire stove soul fire soul campfire speed blue flames soul food bonus',
          details: true,
          detailsTitle: 'Heat levels',
          detailsText: `The heat source below the wok decides how fast it cooks and steams. More heat means quicker dishes, but also shorter windows for tossing, serving and before the dish burns.

Everything cooked over soul fire gets blue soul flames and a blue tooltip border. A perfect three flame dish from soul fire gives an even bigger food bonus.`,
          detailsBullets: [
            'Campfire: 1.0×',
            'Stove and other heat sources: 1.25×',
            'Soul Campfire and Soul Fire: 1.5×',
            'Three soul flames: +20% nutrition and saturation',
            'All values are configurable'
          ]
        },
        {
          id: 'burnt_rice',
          title: 'Burnt Wok Dish',
          subtitle: 'What happens when you wait too long.',
          icon: '/assets/icons/wokandbowl/burnt_rice.webp',
          namespace_id: 'wokandbowl:burnt_rice',
          search: 'burnt wok dish rice noodles burn fuel furnace hunger fail',
          details: true,
          detailsTitle: 'Well done… too well',
          detailsText: `If a dish is not served within 6 seconds after its cooking time, it burns and turns into [[Burnt Wok Dish|burnt_rice]]. The tooltip remembers who let it burn.

Right click the wok with an empty hand and it tips the burnt dish out. Anyone can do that, even if the dish belonged to another player.

It is edible, if you must, and makes a decent furnace fuel.`,
          detailsBullets: [
            '2 nutrition, 80% chance of Hunger for 30 s',
            'Burns as long as charcoal in a furnace',
          ]
        },
        {
          id: 'wok_recipes',
          title: 'Wok Recipes',
          subtitle: 'Fried Rice, Stir-Fries, noodles and Noodle Bowls.',
          icon: '/assets/icons/wokandbowl/noodle_bowl.webp',
          search: 'wok recipes fried rice stir fry noodles noodle bowl egg onion carrot beef salmon lettuce pasta broth',
          details: true,
          detailsTitle: 'All dishes',
          detailsText: `Add the ingredients in exactly this order, then finish with [[Fermented Sauce|fermented_sauce]].`,
          detailsBullets: [
            '**[[Simple Fried Rice|simple_fried_rice]]**: [[Rice|rice]]',
            '**[[Egg Fried Rice|egg_fried_rice]]**: [[Rice|rice]] → Egg',
            '**[[Vegetable Fried Rice|vegetable_fried_rice]]**: [[Rice|rice]] → [[Onion|farm-and-charm:onion]] → Carrot',
            '**[[Beef Stir-Fry|beef_stir_fry]]**: [[Rice|rice]] → [[Minced Beef|farm-and-charm:minced_beef]] → [[Onion|farm-and-charm:onion]]',
            '**[[Fish Stir-Fry|fish_stir_fry]]**: [[Rice|rice]] → [[Cut Salmon|cut_salmon]] → [[Lettuce|farm-and-charm:lettuce]]',
            '**[[Stir-Fried Noodles|stir_fried_noodles]]**: [[Raw Pasta|farm-and-charm:raw_pasta]] → Egg → [[Lettuce|farm-and-charm:lettuce]]',
            '**[[Noodle Bowl|noodle_bowl]]**: [[Raw Pasta|farm-and-charm:raw_pasta]] → Egg → Mushroom → [[Cured Meat|cured_meat]] → [[Broth|broth]]',
            '**[[Sweet & Sour Lamb|sweet_sour_lamb]]**: [[Raw Pasta|farm-and-charm:raw_pasta]] → [[Lamb Ham|farm-and-charm:lamb_ham]] → Potato → [[Tomato|farm-and-charm:tomato]] → Sweet Berries',
            '**[[Pork Noodles|pork_noodles]]**: [[Raw Pasta|farm-and-charm:raw_pasta]] → [[Onion|farm-and-charm:onion]] → [[Chopped Pork|chopped_pork]] → Cabbage ([[Lettuce|farm-and-charm:lettuce]]) → Mushroom',
            '**[[Big Plate Chicken|big_plate_chicken]]**: [[Raw Pasta|farm-and-charm:raw_pasta]] → [[Chicken Parts|farm-and-charm:chicken_parts]] → Potato → Carrot → [[Lettuce|farm-and-charm:lettuce]]',
            '**[[Mixed Stir-Fry|mixed_stir_fry]]**: start any dish, then add food that does not fit the recipe'
          ]
        },
        {
          id: 'bamboo_steamer',
          title: 'Bamboo Steamer',
          subtitle: 'Place it on your wok to steam rice, dumplings and buns.',
          icon: '/assets/icons/wokandbowl/bamboo_steamer.webp',
          namespace_id: 'wokandbowl:bamboo_steamer',
          search: 'bamboo steamer steaming steam dumplings buns rice hopper automation',
          details: true,
          detailsTitle: 'Steaming',
          detailsText: `Right click an empty, heated [[Wok|wok]] with a Bamboo Steamer to put it on top. Right click the steamer to open it: four input slots and one output slot. Shift and right click takes the steamer off again.

Hoppers can feed the inputs from the top or sides and take the output from below. A [[Rattan Basket|rattan_basket]] next to it collects the results automatically.`,
          detailsBullets: [
            '**[[Rice|rice]]** → [[Steamed Rice|steamed_rice]] (10 s)',
            '**[[Sticky Rice|sticky_rice]]** → [[Steamed Sticky Rice|steamed_sticky_rice]] (10 s)',
            '**[[Raw Pork Dumplings|raw_pork_dumplings]]** → [[Pork Dumplings|pork_dumplings]] (15 s)',
            '**[[Raw Vegetable Dumplings|raw_vegetable_dumplings]]** → [[Vegetable Dumplings|vegetable_dumplings]] (15 s)',
            '**[[Raw Savory Bun|raw_savory_bun]]** → [[Savory Bun|savory_bun]] (15 s)',
            '**[[Raw Sweet Bun|raw_sweet_bun]]** → [[Sweet Bun|sweet_bun]] (15 s)',
            'Faster on hotter fire, see [[Heat & Soul Fire|wok_heat]]',
            'The lid rattles and puffs steam when something is done',
            'The [[wok|wok]] cannot fry while the steamer is on it'
          ]
        }
      ]
    },
    {
      id: 'food',
      title: 'Food',
      subtitle: 'Every dish and its food values.',
      entries: [
        {
          id: 'wok_dishes',
          title: 'Wok Dishes',
          subtitle: 'Eleven dishes, served with up to three flames.',
          icon: '/assets/icons/wokandbowl/beef_stir_fry.webp',
          search: 'wok dishes food values nutrition saturation',
          details: true,
          detailsTitle: 'Base values',
          detailsText: `Values are nutrition / saturation modifier for a one flame dish. Three flame dishes get +10%, two flame dishes +5%, three soul flames +20%.`,
          detailsBullets: [
            '[[Simple Fried Rice|simple_fried_rice]]: 3 / 0.3',
            '[[Egg Fried Rice|egg_fried_rice]]: 5 / 0.4',
            '[[Vegetable Fried Rice|vegetable_fried_rice]]: 6 / 0.5',
            '[[Stir-Fried Noodles|stir_fried_noodles]]: 6 / 0.5',
            '[[Beef Stir-Fry|beef_stir_fry]]: 8 / 0.7',
            '[[Fish Stir-Fry|fish_stir_fry]]: 8 / 0.7',
            '[[Sweet & Sour Lamb|sweet_sour_lamb]]: 9 / 0.8',
            '[[Pork Noodles|pork_noodles]]: 8 / 0.7',
            '[[Noodle Bowl|noodle_bowl]]: 10 / 0.9',
            '[[Big Plate Chicken|big_plate_chicken]]: 9 / 0.8',
            '[[Mixed Stir-Fry|mixed_stir_fry]]: 3 / 0.2'
          ],
          items: [
            { id: 'simple_fried_rice', title: 'Simple Fried Rice', icon: '/assets/icons/wokandbowl/simple_fried_rice.webp', search: 'simple fried rice' },
            { id: 'egg_fried_rice', title: 'Egg Fried Rice', icon: '/assets/icons/wokandbowl/egg_fried_rice.webp', search: 'egg fried rice' },
            { id: 'vegetable_fried_rice', title: 'Vegetable Fried Rice', icon: '/assets/icons/wokandbowl/vegetable_fried_rice.webp', search: 'vegetable fried rice' },
            { id: 'beef_stir_fry', title: 'Beef Stir-Fry', icon: '/assets/icons/wokandbowl/beef_stir_fry.webp', search: 'beef stir fry' },
            { id: 'fish_stir_fry', title: 'Fish Stir-Fry', icon: '/assets/icons/wokandbowl/fish_stir_fry.webp', search: 'fish stir fry salmon' },
            { id: 'stir_fried_noodles', title: 'Stir-Fried Noodles', icon: '/assets/icons/wokandbowl/stir_fried_noodles.webp', search: 'stir fried noodles' },
            { id: 'noodle_bowl', title: 'Noodle Bowl', icon: '/assets/icons/wokandbowl/noodle_bowl.webp', search: 'noodle bowl ramen' },
            { id: 'sweet_sour_lamb', title: 'Sweet & Sour Lamb', icon: '/assets/icons/wokandbowl/sweet_sour_lamb.webp', search: 'sweet sour lamb potato' },
            { id: 'pork_noodles', title: 'Pork Noodles', icon: '/assets/icons/wokandbowl/pork_noodles.webp', search: 'pork noodles' },
            { id: 'big_plate_chicken', title: 'Big Plate Chicken', icon: '/assets/icons/wokandbowl/big_plate_chicken.webp', search: 'big plate chicken dapanji potato' },
            { id: 'mixed_stir_fry', title: 'Mixed Stir-Fry', icon: '/assets/icons/wokandbowl/mixed_stir_fry.webp', search: 'mixed stir fry improvise' }
          ]
        },
        {
          id: 'steamed_food',
          title: 'Steamed Food',
          subtitle: 'Dumplings, buns and rice from the Bamboo Steamer.',
          icon: '/assets/icons/wokandbowl/pork_dumplings.webp',
          search: 'steamed food dumplings buns rice values',
          details: true,
          detailsTitle: 'Food values',
          detailsBullets: [
            '[[Steamed Rice|steamed_rice]]: 3 / 0.4',
            '[[Vegetable Dumplings|vegetable_dumplings]]: 5 / 0.4',
            '[[Pork Dumplings|pork_dumplings]]: 6 / 0.5',
            '[[Sweet Bun|sweet_bun]]: 6 / 0.5',
            '[[Savory Bun|savory_bun]]: 7 / 0.6',
            '[[Steamed Sticky Rice|steamed_sticky_rice]] is an ingredient, not a meal'
          ],
          items: [
            { id: 'steamed_rice', title: 'Steamed Rice', icon: '/assets/icons/wokandbowl/steamed_rice.webp', search: 'steamed rice' },
            { id: 'steamed_sticky_rice', title: 'Steamed Sticky Rice', icon: '/assets/icons/wokandbowl/steamed_sticky_rice.webp', search: 'steamed sticky rice' },
            { id: 'pork_dumplings', title: 'Pork Dumplings', icon: '/assets/icons/wokandbowl/pork_dumplings.webp', search: 'pork dumplings' },
            { id: 'vegetable_dumplings', title: 'Vegetable Dumplings', icon: '/assets/icons/wokandbowl/vegetable_dumplings.webp', search: 'vegetable dumplings' },
            { id: 'savory_bun', title: 'Savory Bun', icon: '/assets/icons/wokandbowl/savory_bun.webp', search: 'savory bun baozi' },
            { id: 'sweet_bun', title: 'Sweet Bun', icon: '/assets/icons/wokandbowl/sweet_bun.webp', search: 'sweet bun honey' }
          ]
        },
        {
          id: 'cold_food',
          title: 'Rolls, Balls & Cakes',
          subtitle: 'Assembled on the Cutting Board and ready to eat.',
          icon: '/assets/icons/wokandbowl/rice_ball.webp',
          search: 'rice ball seaweed salmon rolls sweet rice cake cured meat snacks',
          details: true,
          detailsTitle: 'Food values',
          detailsBullets: [
            '[[Seaweed Salmon Rolls|seaweed_salmon_rolls]]: 6 / 0.6',
            '[[Rice Ball|rice_ball]]: 4 / 0.4',
            '[[Sweet Rice Cake|sweet_rice_cake]]: 2 / 0.2, eaten quickly',
            '[[Cured Meat|cured_meat]]: 3 / 0.4',
            '[[Cut Salmon|cut_salmon]] and [[Chopped Pork|chopped_pork]]: 1 / 0.1'
          ],
          items: [
            { id: 'seaweed_salmon_rolls', title: 'Seaweed Salmon Rolls', icon: '/assets/icons/wokandbowl/seaweed_salmon_rolls.webp', search: 'seaweed salmon rolls sushi' },
            { id: 'rice_ball', title: 'Rice Ball', icon: '/assets/icons/wokandbowl/rice_ball.webp', search: 'rice ball onigiri' },
            { id: 'sweet_rice_cake', title: 'Sweet Rice Cake', icon: '/assets/icons/wokandbowl/sweet_rice_cake.webp', search: 'sweet rice cake mochi' }
          ]
        },
        {
          id: 'tatami_rested',
          title: 'Well Rested',
          subtitle: 'Eat a Wok & Bowl meal on tatami to feel rested.',
          icon: '/assets/icons/wokandbowl/tatami_mat.webp',
          search: 'rested effect tatami eat meal buff',
          details: true,
          detailsTitle: 'Bonus',
          detailsText: `Eat any Wok & Bowl food while standing on a [[Tatami Block or Tatami Mat|tatami]] and you get the Rested effect for 60 seconds. Every [[flame|wok_quality]] above the first adds 50% to the duration.`,
          detailsBullets: ['One flame: 60 s, two flames: 90 s, three flames: 120 s', 'Duration and flame bonus can be changed or disabled in the config']
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor',
      subtitle: 'Furnish your home.',
      entries: [
        {
          id: 'paper_lantern',
          title: 'Paper Lantern',
          subtitle: 'Soft paper lanterns you can dye and switch on and off.',
          icon: '/assets/icons/wokandbowl/paper_lantern.webp',
          namespace_id: 'wokandbowl:paper_lantern',
          search: 'paper lantern light dye color toggle hanging fireflies',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click with an empty hand to switch the lantern on or off. It can stand or hang. A fresh lantern has natural paper, right click with a dye to give the paper a soft colour. Only the paper is dyed and glows, the wooden frame stays as it is.

Outdoors on clear nights, fireflies gather around lit lanterns, and around other lanterns too.`,
          detailsBullets: [
            'Natural paper or 16 soft colours',
            'Light level 12 (configurable)',
            'Crafted from paper, a torch and string, add a dye for a coloured lantern'
          ]
        },
        {
          id: 'floor_cushion',
          title: 'Floor Cushion',
          subtitle: 'Dyeable cushions to sit and bounce on.',
          icon: '/assets/icons/wokandbowl/floor_cushion.webp',
          namespace_id: 'wokandbowl:floor_cushion',
          search: 'floor cushion sit seat bounce dye feathers fall damage',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to sit down. Jump on it and it bounces you back up, with a puff of feathers in its colour. It also halves fall damage.

Right click with a dye to recolour it.`,
          detailsBullets: [
            'Available in all 16 colours',
            'Crafted from wool and string, 2 per craft',
            'Bounce and feathers can be turned off'
          ]
        },
        {
          id: 'tatami',
          title: 'Tatami',
          subtitle: 'Woven hay floors, as a block or a mat.',
          icon: '/assets/icons/wokandbowl/tatami_block.webp',
          search: 'tatami block mat floor hay rested',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `Tatami is made from a Hay Bale and [[Rattan Cane|rattan_cane]]. Eating a meal on it makes you [[Well Rested|tatami_rested]].`,
          detailsBullets: ['[[Tatami Block|tatami_block]]: Hay Bale + [[Rattan Cane|rattan_cane]]', '[[Tatami Mat|tatami_mat]]: 2 [[Tatami Blocks|tatami_block]] → 6 Mats', 'Mined with a hoe'],
          items: [
            { id: 'tatami_block', title: 'Tatami Block', icon: '/assets/icons/wokandbowl/tatami_block.webp', search: 'tatami block' },
            { id: 'tatami_mat', title: 'Tatami Mat', icon: '/assets/icons/wokandbowl/tatami_mat.webp', search: 'tatami mat' }
          ]
        },
        {
          id: 'rattan_furniture',
          title: 'Rattan Blocks & Furniture',
          subtitle: 'Woven rattan for floors, walls and tables.',
          icon: '/assets/icons/wokandbowl/rattan_block.webp',
          search: 'rattan block mat table chair furniture woven sit',
          details: true,
          detailsTitle: 'Recipes',
          detailsBullets: [
            '[[Rattan Block|rattan_block]]: 4 [[Rattan Cane|rattan_cane]]',
            '[[Rattan Mat|rattan_mat]]: 2 [[Rattan Blocks|rattan_block]] → 6 Mats',
            '[[Rattan Table|rattan_table]]: 3 [[Rattan Blocks|rattan_block]] + 4 [[Rattan Cane|rattan_cane]]',
            '[[Rattan Chair|rattan_chair]]: 3 [[Rattan Blocks|rattan_block]] + 3 [[Rattan Cane|rattan_cane]], right click to sit',
            'Tables connect into long tables when placed side by side',
            'The [[Rattan Table|rattan_table]] can be waterlogged'
          ],
          items: [
            { id: 'rattan_block', title: 'Rattan Block', icon: '/assets/icons/wokandbowl/rattan_block.webp', search: 'rattan block' },
            { id: 'rattan_mat', title: 'Rattan Mat', icon: '/assets/icons/wokandbowl/rattan_mat.webp', search: 'rattan mat' },
            { id: 'rattan_table', title: 'Rattan Table', icon: '/assets/icons/wokandbowl/rattan_table.webp', search: 'rattan table' },
            { id: 'rattan_chair', title: 'Rattan Chair', icon: '/assets/icons/wokandbowl/rattan_table.webp', search: 'rattan chair seat' }
          ]
        }
      ]
    },
    {
      id: 'rewards',
      title: 'Rewards',
      subtitle: 'A banner to earn.',
      entries: [
        {
          id: 'wok_and_bowl_banner',
          title: 'Completionist Banner',
          subtitle: 'A reward for cooking every dish.',
          icon: '/assets/icons/wokandbowl/wok_and_bowl_banner.webp',
          namespace_id: 'wokandbowl:wok_and_bowl_banner',
          search: 'completionist banner reward speed master of the wok',
          details: true,
          detailsTitle: 'How to get it',
          detailsText: `Cook every [[wok dish|wok_dishes]], every [[steamed dish|steamed_food]] and every [[roll, ball and cake|cold_food]] to unlock the challenge "Master of the Wok". The Mixed Stir-Fry does not count. It rewards you with 800 experience and the Wok & Bowl Completionist Banner.

When placed, the banner grants Speed to all players within 8 blocks.`,
          detailsBullets: [
            'Grants Speed in a radius of 8 blocks',
            'Can stand or hang on a wall',
            'Duplicate it on a smithing table with a Netherite Upgrade and a Netherite Ingot'
          ]
        }
      ]
    },
    {
      id: 'config',
      title: 'Configuration',
      subtitle: 'Tune the mod to your liking.',
      entries: [
        {
          id: 'config_options',
          title: 'Config Options',
          subtitle: 'Wok timing, farming, gameplay and ambient settings.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config settings options wok timing toss serve burn growth basket range cleaver chops',
          details: true,
          detailsTitle: 'Most important defaults',
          detailsText: `All options can be changed in the config screen (Mod Menu on Fabric) or in the config file. Food values of every item can be changed as well and need a restart.`,
          detailsBullets: [
            '**Wok**: 20 s base time, +2 s per ingredient, max 24 s, toss every 6 s with a 2 s window, 2 s serve window, burns after 6 s',
            '**Wok**: heat required, owner only, quality system, toss timing and recipe hints on, perfect toss window 20 ticks, 4 dishes per serving',
            '**Heat**: campfire 1.0, stove 1.25, soul fire 1.5',
            '**Flame bonus**: +10% for three flames, +5% for two, +20% for three soul flames',
            '**Bamboo Steamer**: speed 1.0',
            '**Farming**: rice growth speed 4.0, sticky rice needs fertilizer, paddies need fertilized farmland',
            '**Rattan**: growth speed 1.0, world generation density 0.07',
            '**Gameplay**: basket range 1, cubby slot size 64, rested 60 s, +50% rested per extra flame',
            '**Cleavers**: 5 / 3 / 1 chops, head drops on',
            '**Misc**: Burnt Wok Dish burn time 1600 ticks, paper lantern light 12',
            '**Ambient**: fireflies, steam, leaves, feathers, basket animation and cushion bounce can all be turned off'
          ]
        }
      ]
    }
  ]
};
