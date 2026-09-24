export default {
  slug: 'brewery',
  title: 'Brewery',
  logo: '/assets/mod-logos/brewery.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Beer, whiskey and a proper tavern',
  aboutText: `Brewery brings brewing into survival. Grow hops, dry your grain, and brew beer and whiskey at a Brewingstation that keeps you busy while it works.

Every drink has its own effect, from friendly animals to lightning strikes. Drink too much, though, and the world starts to sway.

Round it off with tavern furniture, hearty Oktoberfest food and Brewfest outfits.

Brewery requires Farm & Charm, which provides yeast, the silo for drying grain and the rope for hops.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Where beer and whiskey are made.',
      entries: [
        {
          id: 'brewingstation',
          title: 'Brewingstation',
          subtitle: 'A hands-on brewing setup for beer and whiskey. Keep an eye on it while it works.',
          icon: '/assets/icons/brewery/copper_brewingstation.webp',
          search: 'brewingstation brewing station beer whiskey kettle oven timer whistle events quality wood copper netherite multiblock 2x2x2',
          details: true,
          detailsTitle: 'How brewing works',
          detailsText: `The Brewingstation takes up 2x2x2 blocks and consists of a kettle, an oven, a timer and a whistle. It has no menu, everything happens by hand.

1. Fill the kettle with a Water Bucket.
2. Add three ingredients by right clicking the kettle with them.
3. Light the oven with any fuel.

Brewing takes one minute. During that time things go wrong, and you need to react quickly:
- The oven fire gets weak: add more fuel.
- The timer rings: press it.
- The kettle boils over: take water out with an empty Bucket.
- The whistle blows and the kettle runs dry: refill it with a Water Bucket.

The more of these events you handle, the more drinks you get and the better their quality. Leave too many unanswered, or let the kettle overflow, and angry [[Booze|booze]] climbs out of the brew.

When it is done, take the drinks out with a [[Beer Mug|beer_mug]].`,
          detailsBullets: [
            'Wooden: beer only, many events',
            'Copper: needed for most whiskeys, fewer events',
            'Netherite: needed for the rarest whiskeys and Dark Brew, no events at all and always three drinks of the best quality',
            'Upgrade Wooden to Copper and Copper to Netherite at a Smithing Table',
            'Failed events can spawn Booze'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Furniture for taverns and cellars.',
      entries: [
        {
          id: 'big_barrel',
          title: 'Big Barrel',
          namespace_id: 'brewery:barrel_main',
          subtitle: 'A huge cellar barrel, purely decorative.',
          icon: '/assets/icons/brewery/big_barrel.webp',
          search: 'big barrel 2x2x2 brewery decor cellar',
          details: true,
          detailsTitle: 'Placement',
          detailsText: `The Big Barrel takes up 2x2x2 blocks and makes a great centrepiece for a cellar.`,
          detailsBullets: [
            'Decorative',
            'Needs 2x2x2 blocks of space'
          ]
        },
        {
          id: 'bench',
          title: 'Bench',
          namespace_id: 'brewery:bench',
          subtitle: 'A tavern bench to sit on.',
          icon: '/assets/icons/brewery/bench.webp',
          search: 'bench seating brewery tavern',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to sit down. Pairs well with the [[Table|table]].`,
          detailsBullets: [
            'Right click to sit'
          ]
        },
        {
          id: 'table',
          title: 'Table',
          namespace_id: 'brewery:table',
          subtitle: 'A tavern table that can be dressed with a tablecloth.',
          icon: '/assets/icons/brewery/table.webp',
          search: 'table brewery tablecloth patterned carpet',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the Table with a Patterned Carpet to lay it on as a tablecloth. Right click it with an empty hand to take the cloth off again.

The carpet is made from [[Patterned Wool|patterned_wool]].`
        },
        {
          id: 'cabinet',
          title: 'Cabinet',
          namespace_id: 'brewery:cabinet',
          subtitle: 'A tavern cabinet for supplies.',
          icon: '/assets/icons/brewery/cabinet.webp',
          search: 'cabinet storage brewery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to open it and store your supplies.`,
          detailsBullets: [
            'Right click to open'
          ]
        },
        {
          id: 'drawer',
          title: 'Drawer',
          namespace_id: 'brewery:drawer',
          subtitle: 'A chest of drawers for smaller things.',
          icon: '/assets/icons/brewery/drawer.webp',
          search: 'drawer storage brewery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to open it and store your things.`,
          detailsBullets: [
            'Right click to open'
          ]
        },
        {
          id: 'sideboard',
          title: 'Sideboard',
          namespace_id: 'brewery:sideboard',
          subtitle: 'A sideboard for behind the bar.',
          icon: '/assets/icons/brewery/sideboard.webp',
          search: 'sideboard storage brewery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to open it and store your things. Fits nicely next to the [[Bar Counter|bar_counter]].`,
          detailsBullets: [
            'Right click to open'
          ]
        },
        {
          id: 'wall_cabinet',
          title: 'Wall Cabinet',
          namespace_id: 'brewery:wall_cabinet',
          subtitle: 'A cabinet that hangs on the wall.',
          icon: '/assets/icons/brewery/wall_cabinet.webp',
          search: 'wall cabinet storage brewery kitchen',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hangs on the wall and keeps the floor free.`,
          detailsBullets: [
            'Mounted on walls',
            'Right click to open'
          ]
        },
        {
          id: 'bar_counter',
          title: 'Bar Counter',
          namespace_id: 'brewery:bar_counter',
          subtitle: 'A counter for building a proper bar.',
          icon: '/assets/icons/brewery/bar_counter.webp',
          search: 'bar counter brewery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place several Bar Counters in a row and they join into one long bar.`,
          detailsBullets: [
            'Connects with neighbouring counters',
            'Decorative'
          ]
        },
        {
          id: 'patterned_wool',
          title: 'Patterned Wool',
          namespace_id: 'brewery:patterned_wool',
          subtitle: 'Wool with the checked Brewfest pattern.',
          icon: '/assets/icons/brewery/patterned_wool.webp',
          search: 'patterned wool carpet brewery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `A decorative wool block in the classic Brewfest pattern. Craft it into Patterned Carpet to lay a tablecloth on the [[Table|table]].`,
          detailsBullets: [
            'Decorative block',
            'Crafts into Patterned Carpet'
          ]
        },
        {
          id: 'gingerbread',
          title: 'Gingerbread',
          namespace_id: 'brewery:gingerbread',
          subtitle: 'A gingerbread heart for the wall that you can write on.',
          icon: '/assets/icons/brewery/gingerbread.webp',
          search: 'gingerbread heart wall decoration writable sign glow ink',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hang the gingerbread heart on a wall and right click it to write a short message. A Glow Ink Sac makes the text glow.`,
          detailsBullets: [
            'Hangs on walls',
            'Right click to write on it',
            'Glow Ink Sac makes the text glow'
          ]
        },
        {
          id: 'completionist_banner',
          title: 'Brewery Banner',
          namespace_id: 'brewery:brewery_banner',
          subtitle: 'The reward for building a Netherite Brewingstation.',
          icon: '/assets/icons/brewery/banner.webp',
          search: 'completionist banner brewery reward netherite brewingstation advancement haste',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `Craft a Netherite Brewingstation to complete the final advancement and receive the Brewery Banner.

Once placed as a standing or wall banner, it gives Haste II to all players within eight blocks. At a Smithing Table you can copy it with a Netherite Upgrade and a Netherite Ingot.`,
          detailsBullets: [
            'Reward for crafting a Netherite Brewingstation',
            'Gives Haste II within 8 blocks',
            'Standing or wall banner',
            'Can be copied at a Smithing Table'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Ingredients, tools and Brewfest clothing.',
      entries: [
        {
          id: 'breathalyzer',
          title: 'Breathalyzer',
          namespace_id: 'brewery:breathalyzer',
          subtitle: 'Blow into it to find out how drunk you are.',
          icon: '/assets/icons/brewery/breathalyzer.webp',
          search: 'breathalyzer check drunkenness easy warning danger intoxication blackout brewery tool',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hold right click to blow into it. After a few seconds it shows the result on the display and in the tooltip.

It measures your [[Intoxication|drunk]] level, so you know how close you are to a [[Blackout|blackout]].`,
          detailsBullets: [
            'Hold right click to use',
            'EASY: Intoxication I or II',
            'WARNING: Intoxication III or IV',
            'DANGER: Intoxication V or higher'
          ]
        },
        {
          id: 'dark_brew',
          title: 'Dark Brew',
          namespace_id: 'brewery:dark_brew',
          subtitle: 'A bottle of trouble. Throw it and a Booze climbs out.',
          icon: '/assets/icons/brewery/dark_brew.webp',
          search: 'dark brew throw spawn booze prank brewery netherite whiskey',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Dark Brew is brewed from three whiskeys, JoJannik Select, Lilitu Single Malt and MaggoAllan, in a Netherite Brewingstation.

It is not for drinking. Throw it, and where it shatters a [[Booze|booze]] appears. Booze does not appear in Peaceful mode.`,
          detailsBullets: [
            'Brewed from three whiskeys at the Netherite Brewingstation',
            'Throw it to summon a Booze',
            'No effect in Peaceful mode'
          ]
        },
        {
          id: 'dried_ingredients',
          title: 'Dried Grain',
          subtitle: 'Grain dried in a Farm & Charm Silo. The base of every beer and whiskey.',
          icon: '/assets/icons/brewery/dried_wheat.webp',
          search: 'dried grain ingredients silo drying wheat barley corn oat placeable bag block brewery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Put wheat, barley, corn or oat into a Silo from Farm & Charm to dry it.

Dried grain is used at the [[Brewingstation|brewingstation]]. You can also place it as a sack for decoration.`,
          detailsBullets: [
            'Made by drying grain in a Silo',
            'Ingredient for beer and whiskey',
            'Can be placed as a decorative sack'
          ],
          items: [
            {
              id: 'dried_wheat',
              title: 'Dried Wheat',
              namespace_id: 'brewery:dried_wheat',
              icon: '/assets/icons/brewery/dried_wheat.webp',
              search: 'dried wheat silo placeable bag'
            },
            {
              id: 'dried_barley',
              title: 'Dried Barley',
              namespace_id: 'brewery:dried_barley',
              icon: '/assets/icons/brewery/dried_barley.webp',
              search: 'dried barley silo placeable bag'
            },
            {
              id: 'dried_corn',
              title: 'Dried Corn',
              namespace_id: 'brewery:dried_corn',
              icon: '/assets/icons/brewery/dried_corn.webp',
              search: 'dried corn silo placeable bag'
            },
            {
              id: 'dried_oat',
              title: 'Dried Oat',
              namespace_id: 'brewery:dried_oat',
              icon: '/assets/icons/brewery/dried_oat.webp',
              search: 'dried oat silo placeable bag'
            }
          ]
        },
        {
          id: 'beer_mug',
          title: 'Beer Mug',
          namespace_id: 'brewery:beer_mug',
          subtitle: 'For filling up drinks, or as a little flower pot.',
          icon: '/assets/icons/brewery/beer_mug.webp',
          search: 'beer mug flower pot brewery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Use an empty Beer Mug on a finished [[Brewingstation|brewingstation]] to take out a drink. You get the mug back after drinking.

Placed on a table, it also works as a small flower pot. Sneak and right click to take the flower out again.`,
          detailsBullets: [
            'Takes drinks out of the Brewingstation',
            'Returned after drinking',
            'Works as a flower pot when placed'
          ]
        },
        {
          id: 'regalia_set',
          title: 'Lederhosen Outfit',
          subtitle: 'The traditional Brewfest look with hat, jacket, trousers and boots.',
          icon: '/assets/icons/brewery/brewfest_regalia.webp',
          search: 'brewfest regalia hat trousers boots lederhosen outfit',
          details: true,
          detailsTitle: 'Outfit',
          detailsText: `Brewfest clothing is worn in the armor slots. Every piece can be mixed with the [[Dirndl|dirndl_set]] pieces.

The outfits are cosmetic and give only minimal protection.`,
          detailsBullets: [
            'Worn in the armor slots',
            'Mix and match with Dirndl pieces',
            'Cosmetic'
          ],
          items: [
            {
              id: 'brewfest_hat_red',
              title: 'Brewfest Hat (Red)',
              namespace_id: 'brewery:brewfest_hat_red',
              icon: '/assets/icons/brewery/brewfest_hat_red.webp',
              search: 'brewfest hat red'
            },
            {
              id: 'brewfest_regalia',
              title: 'Brewfest Regalia',
              namespace_id: 'brewery:brewfest_regalia',
              icon: '/assets/icons/brewery/brewfest_regalia.webp',
              search: 'brewfest regalia chest lederhosen'
            },
            {
              id: 'brewfest_trousers',
              title: 'Brewfest Trousers',
              namespace_id: 'brewery:brewfest_trousers',
              icon: '/assets/icons/brewery/brewfest_trousers.webp',
              search: 'brewfest trousers lederhosen'
            },
            {
              id: 'brewfest_boots',
              title: 'Brewfest Boots',
              namespace_id: 'brewery:brewfest_boots',
              icon: '/assets/icons/brewery/brewfest_boots.webp',
              search: 'brewfest boots'
            }
          ]
        },
        {
          id: 'dirndl_set',
          title: 'Dirndl',
          subtitle: 'The classic dirndl with hat, blouse, dress and shoes.',
          icon: '/assets/icons/brewery/brewfest_dress.webp',
          search: 'dirndl blouse dress shoes blue hat outfit',
          details: true,
          detailsTitle: 'Outfit',
          detailsText: `Brewfest clothing is worn in the armor slots. Every piece can be mixed with the [[Lederhosen|regalia_set]] pieces.

The outfits are cosmetic and give only minimal protection.`,
          detailsBullets: [
            'Worn in the armor slots',
            'Mix and match with Lederhosen pieces',
            'Cosmetic'
          ],
          items: [
            {
              id: 'brewfest_hat_blue',
              title: 'Brewfest Hat (Blue)',
              namespace_id: 'brewery:brewfest_hat',
              icon: '/assets/icons/brewery/brewfest_hat.webp',
              search: 'brewfest hat blue'
            },
            {
              id: 'brewfest_blouse',
              title: 'Brewfest Blouse',
              namespace_id: 'brewery:brewfest_blouse',
              icon: '/assets/icons/brewery/brewfest_blouse.webp',
              search: 'brewfest blouse dirndl'
            },
            {
              id: 'brewfest_dress',
              title: 'Brewfest Dress',
              namespace_id: 'brewery:brewfest_dress',
              icon: '/assets/icons/brewery/brewfest_dress.webp',
              search: 'brewfest dress dirndl'
            },
            {
              id: 'brewfest_shoes',
              title: 'Brewfest Shoes',
              namespace_id: 'brewery:brewfest_shoes',
              icon: '/assets/icons/brewery/brewfest_shoes.webp',
              search: 'brewfest shoes dirndl'
            }
          ]
        }
      ]
    },
    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'Beer, whiskey and hearty food.',
      entries: [
        {
          id: 'beer',
          title: 'Beer',
          subtitle: 'Six beers, each with its own effect.',
          icon: '/assets/icons/brewery/beer_hops.webp',
          search: 'beer mug brewery effects wheat hops barley oat nettle haley quality',
          details: true,
          detailsTitle: 'All Beers',
          detailsText: `Beers are brewed at any [[Brewingstation|brewingstation]] from Hops, Yeast and a third ingredient.

Better quality makes the effect stronger and last longer. Every drink also adds a level of [[Intoxication|drunk]].`,
          items: [
            { id: 'beer_wheat', title: 'Wheat Beer', namespace_id: 'brewery:beer_wheat', subtitle: 'Snow White', icon: '/assets/icons/brewery/beer_wheat.webp', search: 'wheat beer snow white' },
            { id: 'beer_hops', title: 'Hops Beer', namespace_id: 'brewery:beer_hops', subtitle: 'Partystarter', icon: '/assets/icons/brewery/beer_hops.webp', search: 'hops beer partystarter' },
            { id: 'beer_barley', title: 'Barley Beer', namespace_id: 'brewery:beer_barley', subtitle: 'Pint Charisma', icon: '/assets/icons/brewery/beer_barley.webp', search: 'barley beer pint charisma' },
            { id: 'beer_oat', title: 'Oat Beer', namespace_id: 'brewery:beer_oat', subtitle: 'Mining', icon: '/assets/icons/brewery/beer_oat.webp', search: 'oat beer mining' },
            { id: 'beer_nettle', title: 'Nettle Beer', namespace_id: 'brewery:beer_nettle', subtitle: 'Pacify', icon: '/assets/icons/brewery/beer_nettle.webp', search: 'nettle beer pacify' },
            { id: 'beer_haley', title: 'Haley Beer', namespace_id: 'brewery:beer_haley', subtitle: 'Amorous Glide', icon: '/assets/icons/brewery/beer_haley.webp', search: 'haley beer flight amorous glide chorus' }
          ]
        },
        {
          id: 'whiskey',
          title: 'Whiskey',
          subtitle: 'Strong spirits from the Copper and Netherite Brewingstation.',
          icon: '/assets/icons/brewery/whiskey_cristelwalker.webp',
          search: 'whiskey brewery copper netherite brewingstation dried wheat barley oat corn yeast',
          details: true,
          detailsTitle: 'All Whiskeys',
          detailsText: `Whiskeys are brewed from dried grain and Yeast. Most need at least a Copper [[Brewingstation|brewingstation]]; Jameson Malt Whiskey and Smokey Reverie need Netherite.

Rumour has it there is one more whiskey that you will not find in any recipe book.`,
          items: [
            { id: 'whiskey_cristelwalker', title: 'CristelWalker Original', namespace_id: 'brewery:whiskey_cristelwalker', subtitle: 'Protective Touch', icon: '/assets/icons/brewery/whiskey_cristelwalker.webp', search: 'whiskey cristelwalker corn protective touch' },
            { id: 'whiskey_carrasconlabel', title: 'Carrasconlabel Heritage', namespace_id: 'brewery:whiskey_carrasconlabel', subtitle: 'Renewing Touch', icon: '/assets/icons/brewery/whiskey_carrasconlabel.webp', search: 'whiskey carrascon label wheat corn renewing touch' },
            { id: 'whiskey_highland_hearth', title: 'Highland Hearth Signature', namespace_id: 'brewery:whiskey_highland_hearth', subtitle: 'Repulsion', icon: '/assets/icons/brewery/whiskey_highland_hearth.webp', search: 'whiskey highland hearth wheat oat repulsion' },
            { id: 'whiskey_jamesons_malt', title: 'Jameson Malt Whiskey', namespace_id: 'brewery:whiskey_jamesons_malt', subtitle: 'Explosions! (Netherite)', icon: '/assets/icons/brewery/whiskey_jamesons_malt.webp', search: 'whiskey jamesons malt barley oat netherite explosion' },
            { id: 'whiskey_jojannik', title: 'JoJannik Select', namespace_id: 'brewery:whiskey_jojannik', subtitle: 'Toxic Touch', icon: '/assets/icons/brewery/whiskey_jojannik.webp', search: 'whiskey jojannik barley toxic touch' },
            { id: 'whiskey_lilitusinglemalt', title: 'Lilitu Single Malt', namespace_id: 'brewery:whiskey_lilitusinglemalt', subtitle: 'Partystarter', icon: '/assets/icons/brewery/whiskey_lilitusinglemalt.webp', search: 'whiskey lilitu single malt wheat barley partystarter' },
            { id: 'whiskey_maggoallan', title: 'MaggoAllan, Aged', namespace_id: 'brewery:whiskey_maggoallan', subtitle: 'Healing Touch', icon: '/assets/icons/brewery/whiskey_maggoallan.webp', search: 'whiskey maggoallan wheat healing touch' },
            { id: 'whiskey_smokey_reverie', title: 'Smokey Reverie, Barrel-Aged', namespace_id: 'brewery:whiskey_smokey_reverie', subtitle: 'Combustion (Netherite)', icon: '/assets/icons/brewery/whiskey_smokey_reverie.webp', search: 'whiskey smokey reverie oat netherite combustion' }
          ]
        },
        {
          id: 'food',
          title: 'Food',
          subtitle: 'Oktoberfest dishes that give you Stoutheart.',
          icon: '/assets/icons/brewery/pretzel.webp',
          search: 'brewery food oktoberfest sausage pretzel pork knuckle dumplings potato salad mashed potatoes chicken stoutheart',
          details: true,
          detailsTitle: 'All Meals',
          detailsText: `Hearty food to go with your drinks. Every dish gives [[Stoutheart|stoutheart]]. Most of them can be placed on the table and shared.`,
          items: [
            { id: 'sausage', title: 'Sausage', namespace_id: 'brewery:sausage', icon: '/assets/icons/brewery/sausage.webp', search: 'sausage food' },
            { id: 'pretzel', title: 'Pretzel', namespace_id: 'brewery:pretzel', icon: '/assets/icons/brewery/pretzel.webp', search: 'pretzel food' },
            { id: 'pork_knuckle', title: 'Pork Knuckle', namespace_id: 'brewery:pork_knuckle', icon: '/assets/icons/brewery/pork_knuckle.webp', search: 'pork knuckle food' },
            { id: 'fried_chicken', title: 'Fried Chicken', namespace_id: 'brewery:fried_chicken', icon: '/assets/icons/brewery/fried_chicken.webp', search: 'fried chicken food' },
            { id: 'half_chicken', title: 'Half Chicken', namespace_id: 'brewery:half_chicken', icon: '/assets/icons/brewery/half_chicken.webp', search: 'half chicken food' },
            { id: 'mashed_potatoes', title: 'Mashed Potatoes', namespace_id: 'brewery:mashed_potatoes', icon: '/assets/icons/brewery/mashed_potatoes.webp', search: 'mashed potatoes food' },
            { id: 'potato_salad', title: 'Potato Salad', namespace_id: 'brewery:potato_salad', icon: '/assets/icons/brewery/potato_salad.webp', search: 'potato salad food' },
            { id: 'dumplings', title: 'Dumplings', namespace_id: 'brewery:dumplings', icon: '/assets/icons/brewery/dumplings.webp', search: 'dumplings food' }
          ]
        }
      ]
    },
    {
      id: 'crops',
      title: 'Crops, Wild Plants, and Worldgen',
      subtitle: 'Hops, the heart of every beer.',
      entries: [
        {
          id: 'hops',
          title: 'Hops',
          subtitle: 'Wild Hops grow in taigas. Planted hops climb higher with a rope.',
          icon: '/assets/icons/brewery/wild_hops.webp',
          search: 'hops wild hops taiga crop rope climbing village chest',
          details: true,
          detailsTitle: 'Growing',
          detailsText: `Wild Hops grow in all taiga biomes, including modded ones that use the taiga biome tag. Hops also turn up in chests of taiga villages and woodland mansions.

Plant the Hops you collect. On their own they grow two blocks tall; hang a Farm & Charm Rope above them and they climb up to four blocks.

Hops are needed for every [[beer|beer]].`,
          items: [
            {
              id: 'hops_item',
              title: 'Hops',
              namespace_id: 'brewery:hops',
              subtitle: 'Seed and brewing ingredient in one.',
              icon: '/assets/icons/brewery/hops.webp',
              search: 'hops item seed ingredient beer'
            },
            {
              id: 'hops_crop',
              title: 'Hops Crop',
              namespace_id: 'brewery:hops_crop',
              subtitle: 'Grows up to four blocks tall with a rope.',
              icon: '/assets/icons/brewery/hops_crop.webp',
              search: 'hops crop cultivated growth rope climbing'
            }
          ]
        }
      ]
    },
    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'What crawls out when brewing goes wrong.',
      entries: [
        {
          id: 'booze',
          title: 'Booze',
          namespace_id: 'brewery:beer_elemental',
          subtitle: 'A hostile beer elemental.',
          icon: '/assets/icons/brewery/entity/booze.webp',
          search: 'booze beer elemental hostile mob brewingstation failure dark brew thrown entity brew burst',
          details: true,
          detailsTitle: 'Behavior',
          detailsText: `Booze climbs out of the [[Brewingstation|brewingstation]] when too many brewing events are left unanswered or the kettle boils over. A thrown [[Dark Brew|dark_brew]] summons one as well.

It hunts players, hits hard up close and throws bursts of beer from a distance. Attack one and the others nearby join in. Booze does not appear in Peaceful mode.`,
          detailsBullets: [
            'Spawns from failed brewing or Dark Brew',
            'Melee and ranged attacks',
            'Calls nearby Booze for help',
            'Not in Peaceful mode'
          ]
        }
      ]
    },
    {
      id: 'mob_effects',
      title: 'Mob Effects',
      subtitle: 'Effects from Brewery drinks and food.',
      entries: [
        {
          id: 'toxic_touch',
          title: 'Toxic Touch',
          namespace_id: 'brewery:toxictouch',
          subtitle: 'Your hits poison the target.',
          icon: '/assets/icons/brewery/effects/toxictouch.webp',
          search: 'toxic touch poison melee attacks jojannik',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Every melee hit gives the target Poison III for 15 seconds.`,
          detailsBullets: ['Hits apply Poison III for 15 seconds', 'From JoJannik Select']
        },
        {
          id: 'renewing_touch',
          title: 'Renewing Touch',
          namespace_id: 'brewery:renewingtouch',
          subtitle: 'Your hits give Regeneration instead of damage.',
          icon: '/assets/icons/brewery/effects/renewingtouch.webp',
          search: 'renewing touch regeneration melee attacks heal allies carrascon',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Instead of dealing damage, your hits give the target Regeneration II for 10 seconds. Handy for patching up friends and pets.`,
          detailsBullets: ['Hits deal no damage', 'Hits apply Regeneration II for 10 seconds', 'From Carrasconlabel Heritage']
        },
        {
          id: 'protective_touch',
          title: 'Protective Touch',
          namespace_id: 'brewery:protectivetouch',
          subtitle: 'Your hits give Absorption instead of damage.',
          icon: '/assets/icons/brewery/effects/protectivetouch.webp',
          search: 'protective touch absorption melee attacks allies cristelwalker',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Instead of dealing damage, your hits give the target Absorption II for 10 seconds.`,
          detailsBullets: ['Hits deal no damage', 'Hits apply Absorption II for 10 seconds', 'From CristelWalker Original']
        },
        {
          id: 'healing_touch',
          title: 'Healing Touch',
          namespace_id: 'brewery:healingtouch',
          subtitle: 'Your hits heal instead of hurt.',
          icon: '/assets/icons/brewery/effects/healingtouch.webp',
          search: 'healing touch heal melee attacks allies maggoallan',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Instead of dealing damage, every hit heals the target by three hearts.`,
          detailsBullets: ['Hits deal no damage', 'Each hit heals three hearts', 'From MaggoAllan, Aged']
        },
        {
          id: 'haley',
          title: 'Amorous Glide',
          namespace_id: 'brewery:haley',
          subtitle: 'Lets you fly for a short while.',
          icon: '/assets/icons/brewery/effects/haley.webp',
          search: 'haley amorous glide temporary flight',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Amorous Glide lets you fly like in Creative mode for as long as it lasts. Make sure you are close to the ground when it runs out.`,
          detailsBullets: ['Creative-style flight', 'From Haley Beer']
        },
        {
          id: 'stoutheart',
          title: 'Stoutheart',
          namespace_id: 'brewery:stoutheart',
          subtitle: 'Heals you up to three quarters of your health and makes you harder to knock back.',
          icon: '/assets/icons/brewery/effects/stout_heart.webp',
          search: 'stoutheart stout heart food heal knockback resistance',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Stoutheart slowly restores health until you reach 75% of your maximum, and gives you knockback resistance.`,
          detailsBullets: ['Heals up to 75% of your health', 'Adds knockback resistance', 'From Brewery food']
        },
        {
          id: 'drunk',
          title: 'Intoxication',
          namespace_id: 'brewery:drunk',
          subtitle: 'Every drink adds a level. The world sways more and more. Check it with a [[Breathalyzer|breathalyzer]].',
          icon: '/assets/icons/brewery/effects/drunk.webp',
          search: 'intoxication drunk alcohol effect',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Every beer or whiskey adds one level of Intoxication, up to level VI. Better quality drinks wear off sooner.

From level III your view starts to sway and you stagger. From level V you also get Nausea. At level VI there is a chance that you [[black out|blackout]].`,
          detailsBullets: ['One level per drink, up to VI', 'Swaying and staggering from level III', 'Nausea from level V', 'Chance of Blackout at level VI']
        },
        {
          id: 'blackout',
          title: 'Blackout',
          namespace_id: 'brewery:blackout',
          subtitle: 'You pass out and wake up somewhere else.',
          icon: '/assets/icons/brewery/effects/blackout.webp',
          search: 'blackout alcohol extreme drunk teleport',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `If you keep drinking at the highest level of [[Intoxication|drunk]], you may black out. You fall over, everything goes dark, and you wake up to 30 blocks away with a heavy head.`,
          detailsBullets: ['Screen goes black', 'You wake up to 30 blocks away', 'Followed by 30 seconds of Nausea']
        },
        {
          id: 'pint_charisma',
          title: 'Pint Charisma',
          namespace_id: 'brewery:pintcharisma',
          subtitle: 'Villagers give you a discount.',
          icon: '/assets/icons/brewery/effects/pintcharisma.webp',
          search: 'pint charisma villager discount trade',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Villagers lower their prices by 10% per effect level, at least one emerald.`,
          detailsBullets: ['10% discount per level', 'From Barley Beer']
        },
        {
          id: 'partystarter',
          title: 'Partystarter',
          namespace_id: 'brewery:partystarter',
          subtitle: 'Every hit sets off fireworks.',
          icon: '/assets/icons/brewery/effects/partystarter.webp',
          search: 'partystarter fireworks melee',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Every melee hit sets off three colourful firework bursts on the target. Pure show, no extra damage.`,
          detailsBullets: ['Hits set off fireworks', 'From Hops Beer and Lilitu Single Malt']
        },
        {
          id: 'snow_white',
          title: 'Snow White',
          namespace_id: 'brewery:snowwhite',
          subtitle: 'Animals follow you as if you were holding their favourite food.',
          icon: '/assets/icons/brewery/effects/snowwhite.webp',
          search: 'snow white animals follow tempt',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Animals that can be lured with food follow you, even with empty hands.`,
          detailsBullets: ['Animals follow you without food', 'From Wheat Beer']
        },
        {
          id: 'combustion',
          title: 'Combustion',
          namespace_id: 'brewery:combustion',
          subtitle: 'Nearby monsters may catch fire.',
          icon: '/assets/icons/brewery/effects/combustion.webp',
          search: 'combustion ignite nearby monsters fire',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Monsters within four blocks have a small chance each moment to burst into flames for five seconds.`,
          detailsBullets: ['Sets nearby monsters on fire', 'From Smokey Reverie']
        },
        {
          id: 'explosion',
          title: 'Explosions!',
          namespace_id: 'brewery:explosion',
          subtitle: 'Your hits sometimes launch a fireball.',
          icon: '/assets/icons/brewery/effects/explosion.webp',
          search: 'explosion fireball chance attacks',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Each melee hit has a 10% chance to fire a fireball at the target.`,
          detailsBullets: ['10% chance per hit to launch a fireball', 'From Jameson Malt Whiskey']
        },
        {
          id: 'repulsion',
          title: 'Repulsion',
          namespace_id: 'brewery:repulsion',
          subtitle: 'Pushes everything around you away.',
          icon: '/assets/icons/brewery/effects/repulsion.webp',
          search: 'repulsion knockback nearby push',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Every two seconds, all creatures within four blocks are pushed away from you. That includes friends and pets.`,
          detailsBullets: ['Pushes nearby creatures away every 2 seconds', 'Also affects friendly creatures', 'From Highland Hearth Signature']
        },
        {
          id: 'lightning',
          title: 'Lightning Strike',
          namespace_id: 'brewery:lightning_strike',
          subtitle: 'Your hits may call down lightning.',
          icon: '/assets/icons/brewery/effects/lightning.webp',
          search: 'lightning strike chance attacks thunderstorm',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Each melee hit has a 10% chance to strike the target with lightning. During a thunderstorm the chance rises to 75%.`,
          detailsBullets: ['10% chance per hit', '75% during thunderstorms']
        },
        {
          id: 'mining',
          title: 'Mining',
          namespace_id: 'brewery:mining',
          subtitle: 'The deeper you dig, the faster you mine.',
          icon: '/assets/icons/brewery/effects/mining.webp',
          search: 'mining depth haste speed',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Mining gives you Haste that grows stronger the deeper you are.`,
          detailsBullets: ['Above Y 50: Haste I', 'Y 30 to 49: Haste II', 'Y 0 to 29: Haste III', 'Y -20 to -1: Haste IV', 'Below Y -20: Haste V', 'From Oat Beer']
        },
        {
          id: 'pacify',
          title: 'Pacify',
          namespace_id: 'brewery:pacify',
          subtitle: 'Endermen leave you alone, even if you look at them.',
          icon: '/assets/icons/brewery/effects/pacify.webp',
          search: 'pacify enderman eye contact',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Endermen within 32 blocks stop targeting you, so you can look them in the eye without trouble.`,
          detailsBullets: ['Endermen ignore you', 'From Nettle Beer']
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Small extras around the world.',
      entries: [
        {
          id: 'festive_zombies',
          title: 'Festive Zombies',
          subtitle: 'Some zombies come dressed for Brewfest, and yes, it looks ridiculous.',
          icon: '/assets/icons/misc/zombie.webp',
          search: 'festive zombie brewfest spawn whiskey',
          details: true,
          detailsTitle: 'Ambient Feature',
          detailsText: `About 3% of adult zombies spawn in a red Brewfest Hat and Regalia, holding a bottle of whiskey you will not find anywhere else.`,
          detailsBullets: ['3% of adult zombies', 'Wear Brewfest clothing', 'Carry a rare whiskey']
        },
        {
          id: 'loot',
          title: 'Loot and Exploration',
          subtitle: 'Brewing ingredients in village chests.',
          icon: '/assets/icons/misc/chest.webp',
          search: 'loot chest village mansion outpost hops corn barley',
          details: true,
          detailsTitle: 'Where to find loot',
          detailsText: `Some ingredients can be found in chests while exploring.`,
          detailsBullets: [
            'Hops: taiga village houses and woodland mansions',
            'Corn and kernels: plains and desert village houses, pillager outposts',
            'Barley and barley seeds: savanna village houses'
          ]
        }
      ]
    }
  ],
  recipesCta: {
    enabled: true,
    title: 'Recipes',
    text: `Not sure how to make something?

The recipe overview lists every Let's Do crafting station and its recipes.`,
    buttonLabel: 'Open Recipe Overview',
    href: '/recipes/'
  }
}
