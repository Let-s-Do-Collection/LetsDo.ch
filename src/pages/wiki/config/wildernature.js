export default {
  slug: 'wildernature',
  title: 'WilderNature',
  logo: '/assets/mod-logos/wildernature.png',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Wildlife, trophies, and a bit of chaos',
  aboutText: `Welcome to the WilderNature Wiki.

This is your home for blocks, items, food, entities, and world features added by WilderNature.

WilderNature focuses on new animals with biome tag based spawning, a small set of hunting themed blocks, and a few tools and rewards to collect along the way.`,
  sections: [
    {
      id: 'blocks',
      title: 'Decor and Building',
      subtitle: 'Blocks, decorations, and collectible rewards.',
      entries: [
        {
          id: 'bounty_board',
          title: 'Bounty Board',
          namespace_id: 'wildernature:bounty_board',
          subtitle: 'A quest board for bounties, rewards, and collectibles.',
          icon: '/assets/icons/wildernature/bounty_board.png',
          search: 'bounty board quest board bounties rewards reroll collectibles experience',
          details: true,
          detailsTitle: 'Important',
          detailsText: `Currently disabled in Minecraft 1.21.1. The Bounty Board has no functionality in this version.`,
          detailsBullets: ['Currently disabled in Minecraft 1.21.1', 'Will be re-enabled once updated']
        },
        {
          id: 'collectibles',
          title: 'Collectibles',
          subtitle: 'Decorative rewards earned from completed bounties.',
          icon: '/assets/icons/wildernature/deer_trophy.png',
          search: 'collectibles trophies rewards bounty board decoration interactive effects',
          details: true,
          detailsTitle: 'Overview',
          detailsText: `Collectibles are decorative reward blocks from bounties. Some collectibles also have unique interactions. There are more variants than shown here.`,
          items: [
            {
              id: 'deer_trophy',
              title: 'Deer Trophy',
              namespace_id: 'wildernature:deer_trophy',
              subtitle: 'Highlights nearby creatures.',
              icon: '/assets/icons/wildernature/deer_trophy.png',
              search: 'deer trophy collectible decoration interaction glowing reveal entities',
              details: true,
              detailsTitle: 'Interaction',
              detailsText: `Interacting with the Deer Trophy applies Glowing to nearby living entities.`,
              detailsBullets: ['Range: 32 blocks', 'Applies Glowing for 30 seconds', 'Affects living entities in the area']
            },
            {
              id: 'red_wolf_trophy',
              title: 'Red Wolf Trophy',
              namespace_id: 'wildernature:red_wolf_trophy',
              subtitle: 'Marks special blocks with glow particles.',
              icon: '/assets/icons/wildernature/red_wolf_trophy.png',
              search: 'red wolf trophy collectible decoration interaction glow particles tagged blocks',
              details: true,
              detailsTitle: 'Interaction',
              detailsText: `Interacting with the Red Wolf Trophy spawns glow particle clouds on nearby blocks that match the tag.`,
              detailsBullets: [
                'Range: 32 blocks',
                'Targets blocks tagged as MAKES_BLOCK_GLOW',
                'Spawns glow particle clouds for 30 seconds'
              ]
            },
            {
              id: 'bison_trophy',
              title: 'Bison Trophy',
              namespace_id: 'wildernature:bison_trophy',
              subtitle: 'Triggers a shockwave that pushes back nearby creatures.',
              icon: '/assets/icons/wildernature/bison_trophy.png',
              search: 'bison trophy collectible decoration interaction knockback damage cooldown particles',
              details: true,
              detailsTitle: 'Interaction',
              detailsText: `Interacting with the Bison Trophy creates a cloud shockwave and pushes back nearby living entities, dealing minor damage.`,
              detailsBullets: [
                'Range: 20 blocks',
                'Applies knockback and deals 1 damage to nearby living entities',
                'Shows a cloud particle shockwave',
                'Cooldown: 3 minutes per player'
              ]
            },
            {
              id: 'wolf_trapper_banner',
              title: 'Wolf Trapper Banner',
              namespace_id: 'wildernature:wolf_trapper_banner',
              subtitle: 'A collectible banner reward.',
              icon: '/assets/icons/wildernature/wolf_trapper_banner.png',
              search: 'wolf trapper banner collectible decoration'
            },
            {
              id: 'bunny_stalker_banner',
              title: 'Bunny Stalker Banner',
              namespace_id: 'wildernature:bunny_stalker_banner',
              subtitle: 'A collectible banner reward.',
              icon: '/assets/icons/wildernature/bunny_stalker_banner.png',
              search: 'bunny stalker banner collectible decoration'
            },
            {
              id: 'cod_catcher_banner',
              title: 'Cod Catcher Banner',
              namespace_id: 'wildernature:cod_catcher_banner',
              subtitle: 'A collectible banner reward.',
              icon: '/assets/icons/wildernature/cod_catcher_banner.png',
              search: 'cod catcher banner collectible decoration'
            }
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Tools, equipment, and useful items.',
      entries: [
    {
      id: 'blunderbuss',
      title: 'Blunderbuss',
      namespace_id: 'wildernature:blunderbuss',
      subtitle: 'A ranged weapon built for loud solutions. PENG!',
      icon: '/assets/icons/wildernature/blunderbuss.png',
      search: 'blunderbuss weapon ranged gun ammunition flint diamond cooldown reload',
      musicdisc: true,
      tracks: [
        {
          title: 'Blunderbuss Shot',
          subtitle: 'This solves problems.',
          icon: '/assets/icons/wildernature/blunderbuss.png',
          src: '/assets/sound_effect/blunderbuss_fire.ogg'
        },
         {
           title: 'Blunderbuss Reload',
           subtitle: 'One second. This will only take a moment.',
           icon: '/assets/icons/wildernature/blunderbuss.png',
           src: '/assets/sound_effect/blunderbuss_load.ogg'
         }
      ],
      details: true,
      detailsTitle: 'Overview',
      detailsText: `The Blunderbuss is a ranged weapon that consumes ammunition and has a short firing delay between shots. It fires either a spread of pellets or a single bullet depending on the ammo used. The Blunderbuss itself is obtained as a reward from bounties.`,
      detailsBullets: [
        'Consumes ammunition',
        'Has a short delay between shots',
        'Creates flame and smoke particles when firing',
        'Plays a reload sound shortly after firing'
      ],
      items: [
        {
          id: 'flint_ammunition',
          title: 'Flint Ammunition',
          namespace_id: 'wildernature:flint_ammunition',
          subtitle: 'Shot pellets for extreme close range.',
          icon: '/assets/icons/wildernature/flint_ammunition.png',
          search: 'flint ammunition blunderbuss shotgun pellets close range',
          details: true,
          detailsTitle: 'Ammo Type',
          detailsText: `Flint Ammunition fires a burst of multiple pellets with heavy spread. It is strongest at very short range.`,
          detailsBullets: [
            'Fires multiple pellets per shot',
            'Very high spread',
            'Best at extreme close range'
          ]
        },
        {
          id: 'diamond_ammunition',
          title: 'Diamond Ammunition',
          namespace_id: 'wildernature:diamond_ammunition',
          subtitle: 'A piercing round for longer shots.',
          icon: '/assets/icons/wildernature/diamond_ammunition.png',
          search: 'diamond ammunition blunderbuss piercing bullet long range',
          details: true,
          detailsTitle: 'Ammo Type',
          detailsText: `Diamond Ammunition fires a single, more reliable shot designed for better reach and penetration.`,
          detailsBullets: [
            'Fires a single projectile',
            'More reliable at distance',
            'Designed as a piercing round'
          ]
        }
      ]
    },
    {
      id: 'bison_horn',
      title: 'Bison Horn',
      namespace_id: 'wildernature:bison_horn',
      subtitle: 'Dropped by [[Bisons|bison]] or rewarded from bounties.',
      icon: '/assets/icons/wildernature/bison_horn.png',
      search: 'bison horn sound horn item drop buffalo bounty reward',
      musicdisc: true,
      tracks: [
        {
          title: 'Bison Horn',
          subtitle: 'TOOOOOOOHOOOOOOOOOOT! ',
          icon: '/assets/icons/wildernature/bison_horn.png',
          src: '/assets/sound_effect/bison_horn.ogg'
        }
      ]
    },
        {
          id: 'loot_bag',
          title: 'Loot Bag',
          namespace_id: 'wildernature:loot_bag',
          subtitle: 'A rugged bag packed with food, scraps, and the occasional lucky find.',
          icon: '/assets/icons/wildernature/loot_bag.png',
          search: 'loot bag random loot food reward raccoon bounty',
          details: true,
          detailsTitle: 'Loot',
          detailsText: `Right-click to open the Loot Bag and receive a random item.

    Loot Bags can be obtained as bounty rewards or may drop from raccoons.

    Possible contents include:

    Food
    • Random edible items

    Supplies
    • Hazelnut

    Rare Finds
    • Emerald
    • Diamond`,
          detailsBullets: ['Right-click to open', 'Obtained from bounties or dropped by raccoons', 'Drops a random item', 'Rare items can appear']
        },
        {
          id: 'fish_oil',
          title: 'Fish Oil',
          namespace_id: 'wildernature:fish_oil',
          subtitle: 'A craftable oil and highly efficient fuel.',
          icon: '/assets/icons/wildernature/fish_oil.png',
          search: 'fish oil item fuel furnace craft'
        },
        {
          id: 'fur_cloak',
          title: 'Fur Cloak',
          namespace_id: 'wildernature:fur_cloak',
          subtitle: 'A wearable fur cloak that scares away creepers. A bounty reward.',
          icon: '/assets/icons/wildernature/fur_cloak.png',
          search: 'fur cloak armor clothing creeper repel'
        },
        {
          id: 'stylin_purple_hat',
          title: 'Stylin Purple Hat',
          namespace_id: 'wildernature:stylin_purple_hat',
          subtitle: 'So stylin it almost hurts. A bounty reward.',
          icon: '/assets/icons/wildernature/stylin_purple_hat.png',
          search: 'stylin purple hat cosmetic fashion funny bounty reward'
        },
        {
          id: 'turkey_egg',
          title: 'Turkey Egg',
          namespace_id: 'wildernature:turkey_egg',
          subtitle: 'An egg laid by turkeys.',
          icon: '/assets/icons/wildernature/turkey_egg.png',
          search: 'turkey egg item'
        }
      ]
    },
    {
      id: 'food',
      title: 'Food',
      subtitle: 'Raw and cooked meats, plus a few special finds.',
      entries: [
        {
          id: 'bison_meat',
          title: 'Bison Meat',
          namespace_id: 'wildernature:bison_meat',
          subtitle: 'Raw meat dropped by bisons.',
          icon: '/assets/icons/wildernature/bison_meat.png',
          search: 'bison meat raw food drop',
          details: true,
          detailsTitle: 'Cooked Variant',
          detailsText: `Bison Meat can be cooked to obtain Cooked Bison Meat, a more nutritious food item.`,
          items: [
            {
              id: 'cooked_bison_meat',
              title: 'Cooked Bison Meat',
              namespace_id: 'wildernature:cooked_bison_meat',
              subtitle: 'A cooked and more filling variant.',
              icon: '/assets/icons/wildernature/cooked_bison_meat.png',
              search: 'bison meat cooked food'
            }
          ]
        },
        {
          id: 'venison',
          title: 'Venison',
          namespace_id: 'wildernature:venison',
          subtitle: 'Raw meat dropped by deer.',
          icon: '/assets/icons/wildernature/venison.png',
          search: 'venison raw food drop deer',
          details: true,
          detailsTitle: 'Cooked Variant',
          detailsText: `Venison can be cooked to obtain Cooked Venison, a more filling food item.`,
          items: [
            {
              id: 'cooked_venison',
              title: 'Cooked Venison',
              namespace_id: 'wildernature:cooked_venison',
              subtitle: 'A cooked and more nutritious variant.',
              icon: '/assets/icons/wildernature/cooked_venison.png',
              search: 'venison cooked food deer'
            }
          ]
        },
        {
          id: 'turkey_meat',
          title: 'Turkey Meat',
          namespace_id: 'wildernature:turkey_meat',
          subtitle: 'Raw turkey meat.',
          icon: '/assets/icons/wildernature/turkey_meat.png',
          search: 'turkey meat raw food',
          details: true,
          detailsTitle: 'Cooked Variant',
          detailsText: `Turkey Meat can be cooked to obtain Cooked Turkey Meat.`,
          items: [
            {
              id: 'cooked_turkey_meat',
              title: 'Cooked turkey meat.',
              namespace_id: 'wildernature:cooked_turkey_meat',
              subtitle: 'Cooked turkey meat.',
              icon: '/assets/icons/wildernature/cooked_turkey_meat.png',
              search: 'turkey meat cooked food'
            }
          ]
        },
        {
          id: 'pelican_meat',
          title: 'Pelican Meat',
          namespace_id: 'wildernature:pelican_meat',
          subtitle: 'Raw pelican meat.',
          icon: '/assets/icons/wildernature/pelican_meat.png',
          search: 'pelican meat raw food',
          details: true,
          detailsTitle: 'Cooked Variant',
          detailsText: `Pelican Meat can be cooked to obtain Cooked Pelican Meat.`,
          items: [
            {
              id: 'cooked_pelican_meat',
              title: 'Cooked Pelican Meat',
              namespace_id: 'wildernature:cooked_pelican_meat',
              subtitle: 'Cooked pelican meat.',
              icon: '/assets/icons/wildernature/cooked_pelican_meat.png',
              search: 'pelican meat cooked food'
            }
          ]
        },
        {
          id: 'cassowary_meat',
          title: 'Cassowary Meat',
          namespace_id: 'wildernature:cassowary_meat',
          subtitle: 'Raw cassowary meat.',
          icon: '/assets/icons/wildernature/cassowary_meat.png',
          search: 'cassowary meat raw food',
          details: true,
          detailsTitle: 'Cooked Variant',
          detailsText: `Cassowary Meat can be cooked to obtain Cooked Cassowary Meat.`,
          items: [
            {
              id: 'cooked_cassowary_meat',
              title: 'Cooked Cassowary Meat',
              namespace_id: 'wildernature:cooked_cassowary_meat',
              subtitle: 'Cooked cassowary meat.',
              icon: '/assets/icons/wildernature/cooked_cassowary_meat.png',
              search: 'cassowary meat cooked food'
            }
          ]
        },
        {
          id: 'truffle',
          title: 'Truffle',
          namespace_id: 'wildernature:truffle',
          subtitle:
            'A rare delicacy dug up by boars that can be applied to any food, increasing nutrition and saturation by 20%.',
          icon: '/assets/icons/wildernature/truffle.png',
          search: 'truffle rare food boar truffled nutrition saturation'
        }
      ]
    },
    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'New animals and critters.',
      entries: [
        {
          id: 'deer',
          title: 'Deer',
          namespace_id: 'wildernature:deer',
          subtitle: 'Shy forest animals that flee when they spot you.',
          icon: '/assets/icons/wildernature/entity/deer.png',
          search: 'deer forest shy venison leather breed grass tag spawns_deer',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Deer are shy and will run away if they see or smell a player. Sometimes they sniff the air and seek cover if something is nearby.

They drop Venison and occasionally Leather.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_deer',
            'Drops 1 to 2 Venison, sometimes Leather',
            'Breeding item: minecraft:grass',
            'Approach slowly to spook them less'
          ]
        },
        {
          id: 'bison',
          title: 'Bison',
          namespace_id: 'wildernature:bison',
          subtitle: 'Big herds, big knockback, and a bad attitude.',
          icon: '/assets/icons/wildernature/entity/bison.png',
          search: 'bison savanna herd knockback leather meat tag spawns_bison',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Bison are neutral but do not like players. If you approach, they can attack as a group.

They deal low damage but have strong knockback.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_bison',
            'Drops 2 to 3 Bison Meat, often Leather',
            'Cannot be tamed or bred'
          ]
        },
        {
          id: 'boar',
          title: 'Boar',
          namespace_id: 'wildernature:boar',
          subtitle: 'If enabled, boars replace pigs in forests and savannas.',
          icon: '/assets/icons/wildernature/entity/boar.png',
          search: 'boar pig replacement forest savanna peaceful truffle roots coarse dirt tag spawns_boar',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Boars roam around and sometimes dig up items like roots, coarse dirt, or even truffles.

They share the same loot table and breeding behavior as pigs.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_boar',
            'May replace pigs if enabled in config',
            'Can find roots, coarse dirt, and truffles',
            'Same breeding and loot behavior as pigs'
          ]
        },
        {
          id: 'cassowary',
          title: 'Cassowary',
          namespace_id: 'wildernature:cassowary',
          subtitle: 'Loud, aggressive, and dangerously sharp.',
          icon: '/assets/icons/wildernature/entity/cassowary.png',
          search: 'cassowary aggressive savanna group hunt claws armor piercing meat feathers tag spawns_cassowary',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Cassowaries are aggressive and may hunt players in groups. They hit hard and can penetrate strong armor.

They drop feathers and cassowary meat.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_cassowary',
            'Aggressive, can hunt in groups',
            'Drops feathers and cassowary meat',
            'Cannot be tamed or bred'
          ]
        },
        {
          id: 'flamingo',
          title: 'Flamingo',
          namespace_id: 'wildernature:flamingo',
          subtitle: 'Beach birds that mostly exist to drop feathers.',
          icon: '/assets/icons/wildernature/entity/flamingo.png',
          search: 'flamingo beach feathers breed fishes tag spawns_flamingo',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `Flamingos populate beach biomes and drop a lot of feathers.

They can be bred using items tagged as minecraft:fishes.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_flamingo',
            'Drops many feathers',
            'Breeding item: minecraft:fishes tag'
          ]
        },
        {
          id: 'dog',
          title: 'Dog',
          namespace_id: 'wildernature:dog',
          subtitle: 'Found near villages or plains. Usually alone.',
          icon: '/assets/icons/wildernature/entity/dog.png',
          search: 'dog village plains neutral cat chase bones tag spawns_dog',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Dogs are neutral and mostly mind their own business, unless they see a cat, then the chase begins.

They share loot and breeding behavior with wolves.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_dog',
            'Commonly found in villages or plains',
            'Drops bones',
            'Same breeding and loot behavior as wolves'
          ]
        },
        {
          id: 'hedgehog',
          title: 'Hedgehog',
          namespace_id: 'wildernature:hedgehog',
          subtitle: 'Cute, clumsy, and drops nothing.',
          icon: '/assets/icons/wildernature/entity/hedgehog.png',
          search: 'hedgehog forest cute breed rotten flesh drops nothing tag spawns_hedgehog',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Hedgehogs have poor eyesight and sometimes bump into blocks and obstacles.

They drop nothing.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_hedgehog',
            'Found in forests',
            'Drops nothing',
            'Breeding item: minecraft:rotten_flesh'
          ]
        },
        {
          id: 'minisheep',
          title: 'Minisheep',
          namespace_id: 'wildernature:minisheep',
          subtitle: 'Fluffy sheep for colder mountain regions.',
          icon: '/assets/icons/wildernature/entity/minisheep.png',
          search: 'minisheep mountains cold wool mutton shear tag spawns_minisheep',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `Minisheep can be sheared for wool and drop wool and mutton on death.

They share loot and breeding behavior with sheep.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_minisheep',
            'Found in mountainous areas',
            'Can be sheared for wool',
            'Same breeding and loot behavior as sheep'
          ]
        },
        {
          id: 'owl',
          title: 'Owl',
          namespace_id: 'wildernature:owl',
          subtitle: 'Sleeps by day, hunts by night.',
          icon: '/assets/icons/wildernature/entity/owl.png',
          search: 'owl forest night hunter tame rotten flesh shoulder targets tag spawns_owl owl_targets',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Owls sleep during the day and hunt at night. They can target various critters.

Targets can be changed via the wildernature:owl_targets tag.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_owl',
            'Tame with minecraft:rotten_flesh',
            'Can sit on shoulders',
            'Targets controlled by wildernature:owl_targets'
          ]
        },
        {
          id: 'pelican',
          title: 'Pelican',
          namespace_id: 'wildernature:pelican',
          subtitle: 'Beach birds that now fight back.',
          icon: '/assets/icons/wildernature/entity/pelican.png',
          search: 'pelican beach aggressive call help feathers meat breed fishes tag spawns_pelican',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Pelicans live in beach biomes. If attacked, they can fight back and may call others for help.

They drop feathers and pelican meat.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_pelican',
            'Drops feathers and pelican meat',
            'Breeding item: minecraft:fishes tag'
          ]
        },
        {
          id: 'turkey',
          title: 'Turkey',
          namespace_id: 'wildernature:turkey',
          subtitle: 'A familiar bird with familiar drops.',
          icon: '/assets/icons/wildernature/entity/turkey.png',
          search: 'turkey feathers meat chicken breeding tag spawns_turkey',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `Turkeys drop feathers and turkey meat.

They share loot and breeding behavior with chickens.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_turkey',
            'Drops feathers and turkey meat',
            'Same breeding and loot behavior as chickens'
          ]
        },
        {
          id: 'penguin',
          title: 'Penguin',
          namespace_id: 'wildernature:penguin',
          subtitle: 'A boat loving passenger that makes boats faster.',
          icon: '/assets/icons/wildernature/entity/penguin.png',
          search: 'penguin icy biomes boat steal speed 10 percent tag spawns_penguin',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Penguins love boats, especially yours. If they see a boat nearby, they can hop in and take off.

They increase the speed of the boat they are in by 10 percent.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_penguin',
            'Found in icy biomes',
            'Can hop into boats',
            'Boat speed bonus: 10 percent'
          ]
        },
        {
          id: 'raccoon',
          title: 'Raccoon',
          namespace_id: 'wildernature:raccoon',
          subtitle: 'Sneaky, everywhere, and capable of opening doors.',
          icon: '/assets/icons/wildernature/entity/raccoon.png',
          search:
            'raccoon villages doors loot bag breed apple beetroot sweet berries potato cooked cod cooked salmon carrot tag spawns_raccoon',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Raccoons can be found in many biomes and often roam around villages. They can open doors.

They have a chance to drop a loot bag on death.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_raccoon',
            'Can open doors',
            'May drop a loot bag',
            'Breeding items: apple, beetroot, sweet berries, potato, cooked cod, cooked salmon, carrot'
          ]
        },
        {
          id: 'red_wolf',
          title: 'Red Wolf',
          namespace_id: 'wildernature:red_wolf',
          subtitle: 'Improved wolves with more animations and sneak attacks.',
          icon: '/assets/icons/wildernature/entity/red_wolf.png',
          search: 'red wolf improved wolf sneak more damage tag spawns_red_wolf',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Red Wolves behave like wolves but with improved animations. When they spot prey, they can sneak up and deal more damage initially.

They share loot and breeding behavior with wolves.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_red_wolf',
            'Sneaks when hunting and hits harder initially',
            'Same breeding and loot behavior as wolves'
          ]
        },
        {
          id: 'squirrel',
          title: 'Squirrel',
          namespace_id: 'wildernature:squirrel',
          subtitle: 'Hazelnut fans that steal saplings and run around nonstop.',
          icon: '/assets/icons/wildernature/entity/squirrel.png',
          search: 'squirrel hazelnut steal saplings holdable temporary tame breed tag spawns_squirrel squirrel_holdable',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Squirrels love hazelnuts, can temporarily be tamed, and are generally busy doing squirrel things.

To temporarily tame them, give them an item from the wildernature:squirrel_holdable tag.`,
          detailsBullets: [
            'Spawn biomes controlled by wildernature:spawns_squirrel',
            'Temporary tame: wildernature:squirrel_holdable',
            'Breeding item: wildernature:hazelnut'
          ]
        }
      ]
    },
    {
      id: 'worldgen',
      title: 'Worldgen and Natural Features',
      subtitle: 'Naturally spawning content and biome control.',
      entries: [
        {
          id: 'hazelnut_bush',
          title: 'Hazelnut Bush',
          subtitle: 'A naturally growing bush that can be harvested for Hazelnuts.',
          icon: '/assets/icons/wildernature/hazelnut_bush.png',
          search: 'hazelnut bush plains harvest sweet berry bush',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hazelnut Bushes function similarly to Sweet Berry Bushes.

  They generate naturally in plains biomes and can be harvested for Hazelnuts.`,
          items: [
            {
              id: 'hazelnut',
              title: 'Hazelnut',
              namespace_id: 'wildernature:hazelnut',
              subtitle: 'A simple food item dropped by Hazelnut Bushes.',
              icon: '/assets/icons/wildernature/hazelnut.png',
              search: 'hazelnut food'
            }
          ]
        },
        {
          id: 'spawn_tags',
          title: 'Entity Spawn Tags',
          subtitle: 'All animal spawns are controlled via biome tags.',
          icon: '/assets/icons/wildernature/entity/deer.png',
          search:
            'spawn tags biome tags spawns_deer spawns_bison spawns_boar spawns_cassowary spawns_flamingo spawns_dog spawns_hedgehog spawns_minisheep spawns_owl spawns_pelican spawns_turkey spawns_penguin spawns_raccoon spawns_red_wolf spawns_squirrel',
          details: true,
          detailsTitle: 'Tags',
          detailsText: `WilderNature uses biome tags to control where animals spawn. You can edit these tags to add or remove biomes.`,
          detailsBullets: [
            'wildernature:spawns_deer',
            'wildernature:spawns_bison',
            'wildernature:spawns_boar',
            'wildernature:spawns_cassowary',
            'wildernature:spawns_flamingo',
            'wildernature:spawns_dog',
            'wildernature:spawns_hedgehog',
            'wildernature:spawns_minisheep',
            'wildernature:spawns_owl',
            'wildernature:spawns_pelican',
            'wildernature:spawns_turkey',
            'wildernature:spawns_penguin',
            'wildernature:spawns_raccoon',
            'wildernature:spawns_red_wolf',
            'wildernature:spawns_squirrel'
          ]
        }
      ]
    }
  ]
}