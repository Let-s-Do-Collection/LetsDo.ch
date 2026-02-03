export default {
  slug: 'lilis-lucky-lures',
  title: 'Lili’s Lucky Lures',
  logo: '/assets/mod-logos/lucky_lures.png',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Fishing focused additions and playful extras',
  aboutText: `Lili’s Lucky Lures expands fishing with interactive blocks, useful gear, and fish based meals.

The mod focuses on playful fishing mechanics, small world interactions, and a handful of tools and rewards tied to water and catches.`,
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
          subtitle: 'A simple bag stuffed with slightly questionable fish.',
          icon: '/assets/icons/lilis-lucky-lures/fish_bag.png',
          search: 'fish bag fish storage lilis lucky lures'
        },
        {
          id: 'fish_trap',
          title: 'Fish Trap',
          namespace_id: 'lilis_lucky_lures:fish_trap',
          subtitle: 'A waterlogged trap that visibly holds bait and catches over time.',
          icon: '/assets/icons/lilis-lucky-lures/fish_trap.png',
          search: 'fish trap bait catch waterlogged hanging ropes net fence bubble',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place the Fish Trap in water or hang it below ropes or fish net fences.

Right-click with a bait item to insert it. The trap visually shows the inserted bait and later the caught fish.

When a catch is ready, subtle bubbles appear. Right-click with an empty hand to take out the fish. If no fish is present yet, the bait is returned instead.`,
          detailsBullets: [
            'Placeable in water or hanging from ropes and nets',
            'Visually displays inserted bait and caught fish',
            'Right-click with bait to load the trap',
            'Right-click with empty hand to retrieve fish or bait',
            'Bubbles indicate a completed catch'
          ]
        },
        {
          id: 'fish_net',
          title: 'Fish Net',
          namespace_id: 'lilis_lucky_lures:fish_net',
          subtitle: 'A configurable fishing net that switches between net and fence.',
          icon: '/assets/icons/lilis-lucky-lures/fish_net.png',
          search: 'fish net lilis lucky lures elastic fence water fishing net',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Usage',
          detailsText: `The Fish Net item can place two different blocks.

Use Shift + Right-click while holding it to switch between Elastic Fishing Net and Fish Net Fence.

The Elastic Fishing Net cushions falls and bounces entities back up.

The Fish Net Fence connects to nearby blocks, can be waterlogged, and may resonate bells placed above it.`,
          detailsBullets: [
            'Shift + Right-click to switch placement mode',
            'Places Elastic Fishing Net or Fish Net Fence',
            'Elastic Net reduces fall damage and bounces entities',
            'Fence connects to blocks and can be waterlogged',
            'Fence can trigger bells placed above it'
          ],
          items: [
            {
              id: 'elastic_fishing_net',
              title: 'Elastic Fishing Net',
              namespace_id: 'lilis_lucky_lures:elastic_fishing_net',
              icon: '/assets/icons/lilis-lucky-lures/elastic_fishing_net.png'
            },
            {
              id: 'fish_net_fence',
              title: 'Fish Net Fence',
              namespace_id: 'lilis_lucky_lures:fish_net_fence',
              icon: '/assets/icons/lilis-lucky-lures/fish_net_fence.png'
            }
          ]
        },
        {
          id: 'fish_trophy_frame',
          title: 'Fish Trophy Frame',
          namespace_id: 'lilis_lucky_lures:fish_trophy_frame',
          subtitle: 'A wall mounted frame for proudly displaying your catch.',
          icon: '/assets/icons/lilis-lucky-lures/fish_trophy_frame.png',
          search: 'fish trophy frame display wall lilis lucky lures',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Fish Trophy Frame can be placed on walls and is used to display a single fish item.

 Right-click the frame while holding a fish to mount it inside the frame.

 Right-click with an empty hand to remove the displayed item again.`,
          detailsBullets: [
            'Wall mounted display block',
            'Displays a single fish as a decorative centerpiece',
            'Right-click with item to place it',
            'Right-click with empty hand to remove it',
            'Requires a solid block behind it'
          ]
        },
        {
          id: 'hanging_frame',
          title: 'Hanging Frame',
          namespace_id: 'lilis_lucky_lures:hanging_frame',
          subtitle: 'A double-height hanging frame for showing off your catches.',
          icon: '/assets/icons/lilis-lucky-lures/hanging_frame.png',
          search: 'hanging frame fish display lilis lucky lures',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Hanging Frame is a double-height block used to display multiple fish.

   It features two hanging ropes. You can place up to three fish on the upper rope and three more on the lower rope.`,
          detailsBullets: [
            'Double-height hanging block',
            'Displays up to six fish in total',
            'Three fish on the upper rope',
            'Three fish on the lower rope',
            'Right-click with a fish to hang it',
            'Right-click with empty hand to remove fish'
          ]
        },
        {
          id: 'redstone_coil',
          title: 'Redstone Coil',
          namespace_id: 'lilis_lucky_lures:redstone_coil',
          subtitle: 'A humming coil that crackles to life when powered.',
          icon: '/assets/icons/lilis-lucky-lures/redstone_coil.png',
          search: 'redstone coil lilis lucky lures defense electricity',
          details: true,
          detailsTitle: 'Function',
          detailsText: `The Redstone Coil reacts to a redstone signal and activates with a visible electric spark effect.

Right-clicking the coil cycles its current focus, allowing it to switch between different target types.

When powered, the coil becomes active and applies its behavior based on the selected target.`,
          detailsBullets: [
            'Activates when powered by redstone',
            'Right-click to cycle targeting modes',
            'Shows electrical particle effects while active',
            'Tall, two-block structure'
          ]
        },
        {
          id: 'lilis_lucky_lures_banner',
          title: 'Completionist Banner',
          namespace_id: 'lilis_lucky_lures:lilis_lucky_lures_banner',
          subtitle: 'A reward banner for dedicated anglers.',
          icon: '/assets/icons/lilis-lucky-lures/lilis_lucky_lures_banner.png',
          search: 'completionist banner lilis lucky lures reward fishing',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `The Completionist Banner is a special reward for players who have fully explored what Lili’s Lucky Lures has to offer.

    While placed, it grants nearby players a Luck bonus, giving a subtle but fitting boost to fishing related activities.`,
          detailsBullets: [
            'Reward for completing Lili’s Lucky Lures progression',
            'Grants Luck to nearby players',
            'Effect radius of 8 blocks',
            'Purely a reward piece with a cozy, brag-worthy touch'
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
          title: 'Angler’s Hat',
          namespace_id: 'lilis_lucky_lures:anglers_hat',
          subtitle: 'A well-worn fishing hat that brings a bit of extra luck.',
          icon: '/assets/icons/lilis-lucky-lures/anglers_hat.png',
          search: 'angler hat armor luck fishing',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `The Angler’s Hat is a rare piece of fishing gear made for those who spend more time near water than on land.

While worn, it grants a constant Luck bonus, subtly improving fishing outcomes without any extra interaction.`,
          detailsBullets: ['Grants Luck while worn', 'Effect is always active', 'Equippable as a helmet']
        },
        {
          id: 'bamboo_fishing_rod',
          title: 'Bamboo Fishing Rod',
          namespace_id: 'lilis_lucky_lures:bamboo_fishing_rod',
          subtitle: 'A lightweight fishing rod made from bamboo.',
          icon: '/assets/icons/lilis-lucky-lures/bamboo_fishing_rod.png',
          search: 'bamboo fishing rod'
        },
        {
          id: 'fishing_net',
          title: 'Fishing Net',
          namespace_id: 'lilis_lucky_lures:fishing_net',
          subtitle: 'A handheld net for scooping up loot from Floating Debris.',
          icon: '/assets/icons/lilis-lucky-lures/fishing_net.png',
          search: 'fishing net debris loot scoop lilis lucky lures hold right click icon changes empty',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Fishing Net is used on Floating Debris.

Get close to a debris pile, then Right-click and hold to try pulling something out.
On success, the net becomes filled and its icon changes.

Right-click again to empty the net and collect the loot.

Different debris types can yield different loot.`,
          detailsBullets: [
            'Right-click and hold near Floating Debris',
            'Has a chance to pull loot out',
            'Net icon changes when filled',
            'Right-click to empty and collect the loot',
            'Loot depends on the debris type'
          ]
        },
        {
          id: 'spear',
          title: 'Spear',
          namespace_id: 'lilis_lucky_lures:spear',
          subtitle: 'A budget trident: less damage, still gets the job done.',
          icon: '/assets/icons/lilis-lucky-lures/spear.png',
          search: 'spear weapon'
        },
        {
          id: 'dynamite',
          title: 'Dynamite',
          namespace_id: 'lilis_lucky_lures:dynamite',
          subtitle: 'Light it, throw it, hope for the best.',
          icon: '/assets/icons/lilis-lucky-lures/dynamite.png',
          search: 'dynamite explosive throw utility lilis lucky lures',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Dynamite is a throwable explosive item.

Right-click to light and throw it in the direction you are facing. After a short fuse, it explodes on its own.

It has a short cooldown between throws, so panic-spamming is discouraged.`,
          detailsBullets: [
            'Right-click to light and throw',
            'Explodes after a short fuse',
            'Thrown as a projectile',
            'Has a short cooldown between uses',
            'Single-use item'
          ]
        },
        {
          id: 'soaked_bag',
          title: 'Soaked Bag',
          namespace_id: 'lilis_lucky_lures:soaked_bag',
          subtitle: 'A waterlogged bag packed with fish, scraps, and the occasional jackpot.',
          icon: '/assets/icons/lilis-lucky-lures/soaked_bag.png',
          search: 'soaked bag loot fishing treasure lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Right-click to open the Soaked Bag and receive a random selection of loot.

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
• Angler’s Hat (damaged)
• Iron Armor Pieces (damaged, may be enchanted)
• Chainmail Armor Pieces (damaged, may be enchanted)

Rare Finds
• Diamond`,
          detailsBullets: [
            'Right-click to open',
            'Drops a random selection from its loot table',
            'Includes fish, supplies, and gear',
            'Some gear may be enchanted',
            'Very rare items can appear'
          ]
        }
      ]
    },

    {
      id: 'food',
      title: 'Food',
      subtitle: 'Fish based meals added by Lili’s Lucky Lures.',
      entries: [
        {
          id: 'cod_meal',
          title: 'Cod Meal',
          subtitle: 'Simple fish comfort food, better when cooked.',
          icon: '/assets/icons/lilis-lucky-lures/cooked_cod_meal.png',
          search: 'cod meal fish bowl uncooked cooked luck hunger lilis lucky lures',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Cod Meals exist in two states.

Uncooked meals restore only a small amount of hunger and apply Hunger.

Cooked meals restore more hunger and grant Luck for a while.

Both variants return an empty Bowl after eating.`,
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
              icon: '/assets/icons/lilis-lucky-lures/uncooked_cod_meal.png',
              search: 'uncooked cod meal'
            },
            {
              id: 'cooked_cod_meal',
              title: 'Cooked Cod Meal',
              namespace_id: 'lilis_lucky_lures:cooked_cod_meal',
              icon: '/assets/icons/lilis-lucky-lures/cooked_cod_meal.png',
              search: 'cooked cod meal'
            }
          ]
        },
        {
          id: 'tropical_fish_meal',
          title: 'Tropical Fish Meal',
          subtitle: 'Looks exotic. Tastes better cooked.',
          icon: '/assets/icons/lilis-lucky-lures/grilled_tropical_fish.png',
          search: 'tropical fish meal uncooked cooked luck hunger',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Tropical Fish Meals come in uncooked and cooked versions.

Uncooked meals apply Hunger.

Cooked meals grant Luck and restore more hunger.

Both return an empty Bowl.`,
          detailsBullets: ['Uncooked: applies Hunger', 'Cooked: grants Luck'],
          items: [
            {
              id: 'uncooked_tropical_fish',
              title: 'Uncooked Tropical Fish',
              namespace_id: 'lilis_lucky_lures:uncooked_tropical_fish',
              icon: '/assets/icons/lilis-lucky-lures/uncooked_tropical_fish.png',
              search: 'uncooked tropical fish'
            },
            {
              id: 'grilled_tropical_fish',
              title: 'Grilled Tropical Fish',
              namespace_id: 'lilis_lucky_lures:grilled_tropical_fish',
              icon: '/assets/icons/lilis-lucky-lures/grilled_tropical_fish.png',
              search: 'grilled tropical fish'
            }
          ]
        },
        {
          id: 'puffer_plater',
          title: 'Puffer Plater',
          subtitle: 'Suspicious stew with unpredictable results.',
          icon: '/assets/icons/lilis-lucky-lures/puffer_plater.png',
          search: 'puffer plater suspicious stew uncooked cooked',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Puffer Platers behave very differently depending on preparation.

Uncooked versions apply Poison.

Cooked versions grant one random status effect.

Both return an empty Bowl.`,
          detailsBullets: ['Uncooked: applies Poison', 'Cooked: grants a random status effect'],
          items: [
            {
              id: 'uncooked_puffer_plater',
              title: 'Uncooked Puffer Plater',
              namespace_id: 'lilis_lucky_lures:uncooked_puffer_plater',
              icon: '/assets/icons/lilis-lucky-lures/uncooked_puffer_plater.png',
              search: 'uncooked puffer plater'
            },
            {
              id: 'puffer_plater_cooked',
              title: 'Cooked Puffer Plater',
              namespace_id: 'lilis_lucky_lures:puffer_plater',
              icon: '/assets/icons/lilis-lucky-lures/puffer_plater.png',
              search: 'cooked puffer plater'
            }
          ]
        },
        {
          id: 'salmon_rolls',
          title: 'Salmon Rolls',
          subtitle: 'Freshly rolled fish comfort food.',
          icon: '/assets/icons/lilis-lucky-lures/salmon_rolls.png',
          search: 'salmon rolls fish meal luck lilis lucky lures',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Salmon Rolls are a prepared fish meal.

They restore a large amount of hunger and grant Luck for a while.

An empty Bowl is returned after eating.`,
          detailsBullets: ['Restores a high amount of hunger', 'Grants Luck']
        }
      ]
    },

    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'Floating loot pools found in water.',
      entries: [
        {
          id: 'floating_books',
          title: 'Floating Books',
          namespace_id: 'lilis_lucky_lures:floating_books',
          subtitle: 'A drifting pile of books and scraps floating on the water.',
          icon: '/assets/icons/lilis-lucky-lures/floating_books.png',
          search: 'floating books fishing pool loot lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Floating Books can be fished from using a Fishing Rod or a Fishing Net.

The bobber must land inside the pool, or the net must be used nearby.

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
            'Works with Fishing Rod or Fishing Net',
            'Bobber must land inside the pool',
            'Contains books, paper, and scraps',
            'Disappears after several interactions'
          ]
        },
        {
          id: 'floating_debris',
          title: 'Floating Debris',
          namespace_id: 'lilis_lucky_lures:floating_debris',
          subtitle: 'A drifting mess of soggy wood, scraps, and surprisingly useful finds.',
          icon: '/assets/icons/lilis-lucky-lures/floating_debris.png',
          search: 'floating debris fishing pool loot lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Floating Debris can be fished from using a Fishing Rod or a Fishing Net.

The bobber must land inside the pool, or the net must be used nearby.

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
• Angler’s Hat (damaged, may be enchanted)
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
            'Works with Fishing Rod or Fishing Net',
            'Bobber must land inside the pool',
            'Mostly wood and building bits, with occasional gear',
            'Some items can be damaged and enchanted',
            'Disappears after several interactions'
          ]
        },
        {
          id: 'ocean_fish_pool',
          title: 'Ocean Fish Pool',
          namespace_id: 'lilis_lucky_lures:ocean_fish_pool',
          subtitle: 'A floating pool packed with ocean catches.',
          icon: '/assets/icons/lilis-lucky-lures/ocean_fish_pool.png',
          search: 'ocean fish pool fishing loot lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Ocean Fish Pools can be fished from using a Fishing Rod or a Fishing Net.

The bobber must land inside the pool, or the net must be used nearby.

Possible contents include:

Fish
• Tropical Fish (3–5)
• Pufferfish (2–3)`,
          detailsBullets: [
            'Fishable floating loot pool',
            'Works with Fishing Rod or Fishing Net',
            'Bobber must land inside the pool',
            'Drops a random fish stack'
          ]
        },
        {
          id: 'river_fish_pool',
          title: 'River Fish Pool',
          namespace_id: 'lilis_lucky_lures:river_fish_pool',
          subtitle: 'A floating pool filled with common river fish.',
          icon: '/assets/icons/lilis-lucky-lures/river_fish_pool.png',
          search: 'river fish pool fishing loot lilis lucky lures',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `River Fish Pools can be fished from using a Fishing Rod or a Fishing Net.

The bobber must land inside the pool, or the net must be used nearby.

Possible contents include:

Fish
• Cod (3–5)
• Salmon (3–5)`,
          detailsBullets: [
            'Fishable floating loot pool',
            'Works with Fishing Rod or Fishing Net',
            'Bobber must land inside the pool',
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
          namespace_id: 'lilis_lucky_lures:floating_pools',
          subtitle: 'Small floating spots that spawn near players on rivers and oceans.',
          icon: '/assets/icons/lilis-lucky-lures/river.png',
          search: 'floating pools worldgen spawn river ocean fish pool debris books lilis lucky lures',
          details: true,
          detailsTitle: 'Spawning Rules',
          detailsText: `Floating Pools are spawned periodically near a random player.

A spawn position is searched within about 100 blocks, and only river or ocean biomes are considered. The pool is placed slightly below the surface level.

At most three floating pools are allowed in a large area around the spawn point.

Depending on the biome, a fish pool can appear:
Ocean biomes may spawn an Ocean Fish Pool.
River biomes may spawn a River Fish Pool.

Floating Books and Floating Debris can also appear from the same spawner.`,
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
