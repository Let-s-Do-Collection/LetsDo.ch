export default {
  slug: 'lilis-lucky-lures',
  title: 'Lili\'s Lucky Lures',
  logo: '/assets/mod-logos/lucky_lures.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'More to catch, more to find',
  aboutText: `Lili's Lucky Lures makes fishing more rewarding. Floating pools of fish, books and driftwood drift on rivers and oceans, waiting to be fished out.

Set up fish traps with bait, scoop debris with a net, show off your best catch on the wall, and cook hearty fish meals that bring you luck.

And if you want your pond defended, the Redstone Coil zaps whatever comes too close.`,
  sections: [
    {
      id: 'decor_building',
      title: 'Decor & Building',
      subtitle: 'Interactive blocks used around fishing and water.',
      entries: [
        {
          id: 'fish_bag',
          title: 'Fish Bag',
          namespace_id: 'lilis_lucky_lures:fish_bag',
          subtitle: 'A sack stuffed with slightly questionable fish. Purely decorative.',
          icon: '/assets/icons/lilis-lucky-lures/fish_bag.webp',
          search: 'fish bag fish storage lilis lucky lures'
        },
        {
          id: 'fish_trap',
          title: 'Fish Trap',
          namespace_id: 'lilis_lucky_lures:fish_trap',
          subtitle: 'Bait it, leave it in the water, and come back for your catch.',
          icon: '/assets/icons/lilis-lucky-lures/fish_trap.webp',
          search: 'fish trap bait catch waterlogged hanging ropes net fence bubble',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place the Fish Trap in water, or hang it from a rope or a [[Fish Net Fence|fish_net_fence]]. Right click with bait to load it. After a minute or so, bubbles rise and the catch is ready. Right click with an empty hand to take it out; if nothing has bitten yet, you get the bait back.`,
          detailsBullets: [
            'Wheat Seeds: 3 Cod',
            'Sweet Berries: 3 Salmon',
            'Melon Seeds: 2 Tropical Fish',
            'Beetroot Seeds: 2 Pufferfish',
            'Bubbles show that the catch is ready'
          ]
        },
        {
          id: 'fish_net',
          title: 'Fish Net',
          namespace_id: 'lilis_lucky_lures:fish_net',
          subtitle: 'One item, two blocks: a bouncy net or a net fence.',
          icon: '/assets/icons/lilis-lucky-lures/fish_net.webp',
          search: 'fish net lilis lucky lures elastic fence water fishing net',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Usage',
          detailsText: `Sneak and right click with the Fish Net to switch between placing an [[Elastic Fishing Net|elastic_fishing_net]] and a [[Fish Net Fence|fish_net_fence]].

The Elastic Fishing Net catches falls and bounces you back up. The Fish Net Fence connects like a fence, can be waterlogged, and rings a bell hanging from it.`,
          detailsBullets: [
            'Sneak right click to switch the mode',
            'Elastic Fishing Net: cushions falls and bounces',
            'Fish Net Fence: connects like a fence, can be waterlogged'
          ],
          items: [
            {
              id: 'elastic_fishing_net',
              title: 'Elastic Fishing Net',
              namespace_id: 'lilis_lucky_lures:elastic_fishing_net',
              icon: '/assets/icons/lilis-lucky-lures/elastic_fishing_net.webp',
              search: 'elastic fishing net bounce fall damage'
            },
            {
              id: 'fish_net_fence',
              title: 'Fish Net Fence',
              namespace_id: 'lilis_lucky_lures:fish_net_fence',
              icon: '/assets/icons/lilis-lucky-lures/fishing_net_fence.webp',
              search: 'fish net fence waterlogged bell'
            }
          ]
        },
        {
          id: 'fish_trophy_frame',
          title: 'Fish Trophy Frame',
          namespace_id: 'lilis_lucky_lures:fish_trophy_frame',
          subtitle: 'Hang your best catch on the wall.',
          icon: '/assets/icons/lilis-lucky-lures/fish_trophy_frame.webp',
          search: 'fish trophy frame display wall lilis lucky lures',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hang the frame on a wall and right click it with a fish to mount it. Right click with an empty hand to take it down again.`,
          detailsBullets: [
            'Hangs on walls',
            'Shows one fish',
            'Right click with a fish to mount it'
          ]
        },
        {
          id: 'hanging_frame',
          title: 'Hanging Frame',
          namespace_id: 'lilis_lucky_lures:hanging_frame',
          subtitle: 'A drying rack for up to six fish.',
          icon: '/assets/icons/lilis-lucky-lures/hanging_frame.webp',
          search: 'hanging frame fish display lilis lucky lures',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Hanging Frame is two blocks tall with two ropes. Hang up to three fish on each rope by right clicking with them, and right click with an empty hand to take them off.`,
          detailsBullets: [
            'Two blocks tall',
            'Three fish per rope, six in total',
            'Right click with a fish to hang it up'
          ]
        },
        {
          id: 'redstone_coil',
          title: 'Redstone Coil',
          namespace_id: 'lilis_lucky_lures:redstone_coil',
          subtitle: 'A slow but reliable defence tower that zaps anything in range.',
          icon: '/assets/icons/lilis-lucky-lures/redstone_coil.webp',
          search: 'redstone coil lilis lucky lures defense electricity',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Give the Redstone Coil a redstone signal and it starts zapping targets around it. Right click to choose what it goes after: water creatures, monsters, players outside your team, or nothing.

A stronger signal means more damage and a larger range. Targets in water or wearing iron armor take extra damage.`,
          detailsBullets: [
            'Needs a redstone signal',
            'Modes: Fishes, Monster, Player, None',
            'Damage and range grow with signal strength',
            'Extra damage against targets in water or in iron armor',
            'Two blocks tall'
          ]
        },
        {
          id: 'lilis_lucky_lures_banner',
          title: 'Completionist Banner',
          namespace_id: 'lilis_lucky_lures:lilis_lucky_lures_banner',
          subtitle: 'The reward for collecting every rare catch.',
          icon: '/assets/icons/lilis-lucky-lures/lilis_lucky_lures_banner.webp',
          search: 'completionist banner lilis lucky lures reward fishing',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `Collect every treasure from fishing, netting and Soaked Bags to complete the final advancement and receive the Completionist Banner.

Once placed, it gives Luck to all players within eight blocks.`,
          detailsBullets: [
            'Reward for collecting all rare items',
            'Gives Luck within 8 blocks'
          ]
        }
      ]
    },

    {
      id: 'items_tools',
      title: 'Items & Tools',
      subtitle: 'Gear and tools used for fishing and exploration.',
      entries: [
        {
          id: 'anglers_hat',
          title: 'Anglers Hat',
          namespace_id: 'lilis_lucky_lures:anglers_hat',
          subtitle: 'A well-worn fishing hat that brings a little luck.',
          icon: '/assets/icons/lilis-lucky-lures/anglers_hat.webp',
          search: 'angler hat armor luck fishing',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `A rare find from floating debris, Soaked Bags and the Fishing Net. Wear it in the helmet slot for +1 Luck, which improves your fishing catches.`,
          detailsBullets: ['+1 Luck while worn', 'Worn in the helmet slot', 'Found, not crafted']
        },
        {
          id: 'bamboo_fishing_rod',
          title: 'Bamboo Fishing Rod',
          namespace_id: 'lilis_lucky_lures:bamboo_fishing_rod',
          subtitle: 'A cheap fishing rod made from bamboo. Works like a normal rod, but wears out faster.',
          icon: '/assets/icons/lilis-lucky-lures/bamboo_fishing_rod.webp',
          search: 'bamboo fishing rod'
        },
        {
          id: 'fishing_net',
          title: 'Fishing Net',
          namespace_id: 'lilis_lucky_lures:fishing_net',
          subtitle: 'A hand net for scooping loot out of [[Floating Debris|floating_debris]].',
          icon: '/assets/icons/lilis-lucky-lures/fishing_net.webp',
          search: 'fishing net debris loot scoop lilis lucky lures hold right click icon changes empty',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Get close to [[Floating Debris|floating_debris]] and hold right click to fish around in it. If you are lucky, the net comes up full.

Right click again to empty it. Besides the debris loot, the net sometimes holds extras of its own: fish, gold, emeralds, a Soaked Bag, or even a Heart of the Sea.`,
          detailsBullets: [
            'Hold right click next to Floating Debris',
            'Right click again to empty the full net',
            'Can bring up Soaked Bags and rare treasures'
          ]
        },
        {
          id: 'spear',
          title: 'Spear',
          namespace_id: 'lilis_lucky_lures:spear',
          subtitle: 'A budget trident: less damage, but it still flies.',
          icon: '/assets/icons/lilis-lucky-lures/spear.webp',
          search: 'spear weapon'
        },
        {
          id: 'dynamite',
          title: 'Dynamite',
          namespace_id: 'lilis_lucky_lures:dynamite',
          subtitle: 'Light it, throw it, hope for the best.',
          icon: '/assets/icons/lilis-lucky-lures/dynamite.webp',
          search: 'dynamite explosive throw utility lilis lucky lures',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to light the Dynamite and throw it. After a short fuse, it explodes. It can be crafted, even from TNT.`,
          detailsBullets: [
            'Right click to light and throw',
            'Explodes after a short fuse',
            'Can be crafted from TNT'
          ]
        },
        {
          id: 'soaked_bag',
          title: 'Soaked Bag',
          namespace_id: 'lilis_lucky_lures:soaked_bag',
          subtitle: 'A soggy bag full of fish, scraps and the occasional jackpot.',
          icon: '/assets/icons/lilis-lucky-lures/soaked_bag.webp',
          search: 'soaked bag loot fishing treasure lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Soaked Bags come up in the [[Fishing Net|fishing_net]]. Right click to open one.

Possible contents include:

Fish
• Cod (3–7)
• Salmon (3–7)
• Tropical Fish (3–4)
• Pufferfish (2–3)

Supplies
• Sticks (24–38)
• Iron Nuggets (10–14)
• Iron Ingots (2–3)

Gear
• Enchanted Book
• Spear (damaged)
• Anglers Hat (damaged)
• Iron Armor Pieces (damaged, may be enchanted)
• Chainmail Armor Pieces (damaged, may be enchanted)

Rare Finds
• Diamond`,
          detailsBullets: [
            'Found with the Fishing Net',
            'Right click to open',
            'Fish, supplies and gear, sometimes enchanted'
          ]
        }
      ]
    },

    {
      id: 'food',
      title: 'Food',
      subtitle: 'Fish meals. Cook them first.',
      entries: [
        {
          id: 'cod_meal',
          title: 'Cod Meal',
          subtitle: 'Simple fish comfort food, better when cooked.',
          icon: '/assets/icons/lilis-lucky-lures/cooked_cod_meal.webp',
          search: 'cod meal fish bowl uncooked cooked luck hunger lilis lucky lures',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Craft an Uncooked Cod Meal and cook it. Eaten raw, it gives you Hunger. Cooked, it fills you up well and brings Luck for three minutes. You get the bowl back.`,
          detailsBullets: [
            'Uncooked: low nutrition, applies Hunger',
            'Cooked: better nutrition, grants Luck',
            'Always returns an empty Bowl'
          ],
          items: [
            {
              id: 'uncooked_cod_meal',
              title: 'Uncooked Cod Meal',
              namespace_id: 'lilis_lucky_lures:uncooked_cod_meal',
              icon: '/assets/icons/lilis-lucky-lures/uncooked_cod_meal.webp',
              search: 'uncooked cod meal'
            },
            {
              id: 'cooked_cod_meal',
              title: 'Cooked Cod Meal',
              namespace_id: 'lilis_lucky_lures:cooked_cod_meal',
              icon: '/assets/icons/lilis-lucky-lures/cooked_cod_meal.webp',
              search: 'cooked cod meal'
            }
          ]
        },
        {
          id: 'tropical_fish_meal',
          title: 'Tropical Fish Meal',
          subtitle: 'Looks exotic. Tastes better cooked.',
          icon: '/assets/icons/lilis-lucky-lures/grilled_tropical_fish.webp',
          search: 'tropical fish meal uncooked cooked luck hunger',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Craft Uncooked Tropical Fish and grill it. Eaten raw, it gives you Hunger. Grilled, it brings Luck for three minutes. You get the bowl back.`,
          detailsBullets: ['Uncooked: applies Hunger', 'Cooked: grants Luck', 'Always returns an empty Bowl'],
          items: [
            {
              id: 'uncooked_tropical_fish',
              title: 'Uncooked Tropical Fish',
              namespace_id: 'lilis_lucky_lures:uncooked_tropical_fish',
              icon: '/assets/icons/lilis-lucky-lures/uncooked_tropical_fish.webp',
              search: 'uncooked tropical fish'
            },
            {
              id: 'grilled_tropical_fish',
              title: 'Grilled Tropical Fish',
              namespace_id: 'lilis_lucky_lures:grilled_tropical_fish',
              icon: '/assets/icons/lilis-lucky-lures/grilled_tropical_fish.webp',
              search: 'grilled tropical fish'
            }
          ]
        },
        {
          id: 'puffer_plater_meal',
          title: 'Puffer Platter',
          subtitle: 'A suspicious dish with unpredictable results.',
          icon: '/assets/icons/lilis-lucky-lures/puffer_plater.webp',
          search: 'puffer plater suspicious stew uncooked cooked',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Raw, the Puffer Platter poisons you. Cooked, it gives you one random effect, like a suspicious stew. You get the bowl back.`,
          detailsBullets: [
            'Uncooked: applies Poison',
            'Cooked: grants a random status effect',
            'Always returns an empty Bowl'
          ],
          items: [
            {
              id: 'uncooked_puffer_plater',
              title: 'Uncooked Puffer Platter',
              namespace_id: 'lilis_lucky_lures:uncooked_puffer_plater',
              icon: '/assets/icons/lilis-lucky-lures/uncooked_puffer_plater.webp',
              search: 'uncooked puffer plater'
            },
            {
              id: 'puffer_plater',
              title: 'Puffer Platter',
              namespace_id: 'lilis_lucky_lures:puffer_plater',
              icon: '/assets/icons/lilis-lucky-lures/puffer_plater.webp',
              search: 'cooked puffer plater'
            }
          ]
        },
        {
          id: 'salmon_rolls',
          title: 'Salmon Rolls',
          subtitle: 'Freshly rolled fish comfort food.',
          icon: '/assets/icons/lilis-lucky-lures/salmon_rolls.webp',
          search: 'salmon rolls fish meal luck lilis lucky lures',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The most filling fish meal. Salmon Rolls bring Luck for four minutes, and you get the bowl back.`,
          detailsBullets: ['Very filling', 'Luck for four minutes', 'Returns the bowl']
        }
      ]
    },

    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'Floating pools on rivers and oceans.',
      entries: [
        {
          id: 'floating_books',
          title: 'Floating Books',
          namespace_id: 'lilis_lucky_lures:floating_books',
          subtitle: 'A drifting pile of books and scraps floating on the water.',
          icon: '/assets/icons/lilis-lucky-lures/floating_books.webp',
          search: 'floating books fishing pool loot lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Cast your fishing rod so the bobber lands in the pool.

Possible contents include:

Books & Paper
• Paper
• Book
• Writable Book
• Enchanted Book

Scraps
• Ink Sac
• Feather

The pool can only be looted a few times before breaking apart and disappearing.`,
          detailsBullets: [
            'Fishable floating loot pool',
            'Fish it with a fishing rod',
            'Books, paper and scraps',
            'Disappears after several interactions'
          ]
        },
        {
          id: 'floating_debris',
          title: 'Floating Debris',
          namespace_id: 'lilis_lucky_lures:floating_debris',
          subtitle: 'A drifting mess of soggy wood, scraps, and surprisingly useful finds.',
          icon: '/assets/icons/lilis-lucky-lures/floating_debris.webp',
          search: 'floating debris fishing pool loot lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Cast your fishing rod so the bobber lands in the debris, or scoop it with a [[Fishing Net|fishing_net]].

Possible contents include:

Driftwood
• Sticks
• Planks (Oak, Spruce, Birch, Jungle, Acacia, Dark Oak, Mangrove, Bamboo, Crimson, Warped)

Bits & Pieces
• Doors (matching wood types)
• Buttons (matching wood types)
• Fences (Oak, Spruce, Birch)

Supplies
• Copper Ingot
• Iron Ingot
• Gold Ingot

Gear
• Dynamite
• Spear (sometimes damaged, sometimes enchanted)
• Anglers Hat (damaged, may be enchanted)
• Iron Axe (damaged, enchanted)
• Shield (damaged, enchanted)
• Chainmail Armor Pieces (damaged, enchanted)
• Enchanted Book

Rare Finds
• Saddle
• Diamond Horse Armor
• Trident
• Diamond

The pool can only be looted a few times before breaking apart and disappearing.`,
          detailsBullets: [
            'Fishable floating loot pool',
            'Fish it with a rod or a Fishing Net',
            'Mostly wood, with the occasional gear',
            'Some items can be damaged and enchanted',
            'Disappears after several interactions'
          ]
        },
        {
          id: 'ocean_fish_pool',
          title: 'Ocean Fish Pool',
          namespace_id: 'lilis_lucky_lures:ocean_fish_pool',
          subtitle: 'A floating pool packed with ocean catches.',
          icon: '/assets/icons/lilis-lucky-lures/ocean_fish_pool.webp',
          search: 'ocean fish pool fishing loot lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Cast your fishing rod so the bobber lands in the pool.

Possible contents include:

Fish
• Tropical Fish (3 to 5)
• Pufferfish (2 to 3)`,
          detailsBullets: [
            'Fishable floating loot pool',
            'Fish it with a fishing rod',
            'Drops a random fish stack'
          ]
        },
        {
          id: 'river_fish_pool',
          title: 'River Fish Pool',
          namespace_id: 'lilis_lucky_lures:river_fish_pool',
          subtitle: 'A floating pool filled with common river fish.',
          icon: '/assets/icons/lilis-lucky-lures/river_fish_pool.webp',
          search: 'river fish pool fishing loot lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Cast your fishing rod so the bobber lands in the pool.

Possible contents include:

Fish
• Cod (3 to 5)
• Salmon (3 to 5)`,
          detailsBullets: [
            'Fishable floating loot pool',
            'Fish it with a fishing rod',
            'Drops common river fish'
          ]
        }
      ]
    },
    {
      id: 'worldgen',
      title: 'Worldgen and Natural Features',
      subtitle: 'Floating pools that can appear naturally on rivers and oceans.',
      entries: [
        {
          id: 'floating_pools',
          title: 'Floating Pools',
          subtitle: 'Fish, books and debris drift in on rivers and oceans near players.',
          icon: '/assets/icons/lilis-lucky-lures/river.webp',
          search: 'floating pools worldgen spawn river ocean fish pool debris books lilis lucky lures',
          details: true,
          detailsTitle: 'Spawning Rules',
          detailsText: `Every five minutes a new floating pool may appear on a river or ocean within about 100 blocks of a random player, as long as there are fewer than three nearby.

Oceans get [[Ocean Fish Pools|ocean_fish_pool]], rivers get [[River Fish Pools|river_fish_pool]], and both can get [[Floating Books|floating_books]] and [[Floating Debris|floating_debris]].`,
          detailsBullets: [
            'Spawns every 5 minutes',
            'Chooses a random player as the center',
            'Only spawns in river or ocean biomes',
            'Spawn search radius is about 100 blocks',
            'Placed near the surface, slightly below it',
            'Maximum of 3 pools in the surrounding area',
            'Oceans spawn Ocean Fish Pools, rivers spawn River Fish Pools',
            'Also spawns Floating Books and Floating Debris'
          ]
        }
      ]
    }
  ]
}
