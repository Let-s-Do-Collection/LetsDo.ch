export default {
  slug: 'herbalbrews',
  title: 'HerbalBrews',
  logo: '/assets/mod-logos/herbalbrews.webp',
  aboutTitle: 'Welcome',
  modVersion: '1.1.4',
  aboutSubtitle: 'Tea, coffee and a pinch of magic',
  aboutText: `HerbalBrews is about tea and coffee. Gather wild plants, grow your own tea, dry the leaves and brew them in the tea kettle.

Every cup comes with an effect, and many of them are shared with the players around you, so tea time is best enjoyed together.

For the witches among you, the Brewing Cauldron combines three potions into a single flask, and the Witch Hat and Top Hat protect you from magic.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Where the tea is made.',
      entries: [
        {
          id: 'stove',
          title: 'Stove',
          namespace_id: 'herbalbrews:stove',
          subtitle: 'A tiled stove that cooks like a Smoker and keeps a [[Tea Kettle|tea_kettle]] on top warm.',
          icon: '/assets/icons/herbalbrews/stove.webp',
          search: 'stove heat hot surface kettle tea kettle heating smoker fuel'
        },
        {
          id: 'tea_kettle',
          title: 'Tea Kettle',
          namespace_id: 'herbalbrews:tea_kettle',
          subtitle: 'Brews every tea and coffee. Needs water and heat.',
          icon: '/assets/icons/herbalbrews/tea_kettle.webp',
          search: 'tea kettle copper tea coffee station heat blaze powder water bucket bottle',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Tea Kettle has five ingredient slots, a water slot, a heat slot and an output slot.

Fill it with water through the water slot. For heat, place it on a lit [[Stove|stove]] or another heat source, or add Blaze Powder to the heat slot. The menu shows the water and heat level. Each recipe needs a certain amount of both.

There is also a Copper Tea Kettle, which works the same way.`,
          detailsBullets: [
            'Five ingredient slots',
            'Water slot and heat slot',
            'Heat from a stove below or from Blaze Powder',
            'Copper and regular version'
          ]
        },
        {
          id: 'brewing_cauldron',
          title: 'Brewing Cauldron',
          namespace_id: 'herbalbrews:cauldron',
          subtitle: 'Combines three potions into one [[Flask|flask]].',
          icon: '/assets/icons/herbalbrews/cauldron.webp',
          search: 'brewing cauldron flasks potions herbal infusion catalyst',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Put three potions and a Herbal Infusion into the Brewing Cauldron. After a while it turns them into a single [[Flask|flask]] that holds all three effects.`,
          detailsBullets: [
            'Three potion slots',
            'Herbal Infusion as catalyst',
            'Result: one Flask with all effects'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Leaves, beans and hats.',
      entries: [
        {
          id: 'coffee_beans',
          title: 'Coffee Beans',
          namespace_id: 'herbalbrews:coffee_beans',
          subtitle: 'Harvested from [[Wild Coffee|wild_coffee]]. Plant them to grow your own coffee.',
          icon: '/assets/icons/herbalbrews/coffee_beans.webp',
          search: 'coffee beans wild coffee harvest seeds coffee plant'
        },
        {
          id: 'lavender_blossom',
          title: 'Lavender Blossom',
          namespace_id: 'herbalbrews:lavender_blossom',
          subtitle: 'Cut from [[Lavender|lavender]] with Shears.',
          icon: '/assets/icons/herbalbrews/lavender_blossom.webp',
          search: 'lavender blossom lavender shears harvesting ingredient lavender tea'
        },
        {
          id: 'tea_blossoms',
          title: 'Tea Blossom',
          namespace_id: 'herbalbrews:tea_blossom',
          subtitle: 'Cut from small flowers with Shears. Plant it to grow tea bushes that give Green Tea Leaves.',
          icon: '/assets/icons/herbalbrews/tea_blossom.webp',
          search: 'tea blossom flowers shears seeds tea plants green tea leaf'
        },
        {
          id: 'witching_time_hats',
          title: 'Witching Time',
          subtitle: 'Two hats that shield you from magic.',
          icon: '/assets/icons/herbalbrews/witch_hat.webp',
          search: 'witch hat top hat herbalbrews magic damage reduction head armor witching time',
          details: true,
          detailsTitle: 'Overview',
          detailsText: `The Witch Hat and the Top Hat are worn in the helmet slot and reduce magic damage by 40%.`,
          detailsBullets: [
            'Worn in the helmet slot',
            'Magic damage -40%'
          ],
          items: [
            {
              id: 'witch_hat',
              title: 'Witch Hat',
              namespace_id: 'herbalbrews:witch_hat',
              subtitle: 'A classic pointy witch hat.',
              icon: '/assets/icons/herbalbrews/witch_hat.webp',
              search: 'witch hat herbalbrews head slot'
            },
            {
              id: 'top_hat',
              title: 'Top Hat',
              namespace_id: 'herbalbrews:top_hat',
              subtitle: 'An elegant top hat.',
              icon: '/assets/icons/herbalbrews/top_hat.webp',
              search: 'top hat herbalbrews head slot'
            }
          ]
        },
        {
          id: 'tea_drying',
          title: 'Tea Drying',
          subtitle: 'Fresh tea leaves are dried into green, black and oolong tea.',
          icon: '/assets/icons/herbalbrews/dried_green_tea.webp',
          search: 'tea drying dry dried green tea black tea oolong tea leaf block stages',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Craft Green Tea Leaves into a Green Tea Leaf Block and place it. Over time it dries through several stages.

What comes out depends on the block you started with:
- Green Tea Leaf Block turns into dried green tea
- Mixed Tea Leaf Block turns into Oolong Tea Leaf Block
- Dried Green Tea Leaf Block ferments further into Black Tea Leaf Block

The dried blocks are then crafted into dried tea for the [[Tea Kettle|tea_kettle]].`,
          detailsBullets: [
            'Place tea leaf blocks and wait',
            'Several drying stages',
            'Gives green, black and oolong tea'
          ],
          items: [
            {
              id: 'dried_green_tea',
              title: 'Dried Green Tea',
              icon: '/assets/icons/herbalbrews/dried_green_tea.webp',
              search: 'dried green tea drying ingredient brew'
            },
            {
              id: 'dried_black_tea',
              title: 'Dried Black Tea',
              icon: '/assets/icons/herbalbrews/dried_black_tea.webp',
              search: 'dried black tea drying ingredient brew'
            },
            {
              id: 'dried_oolong_tea',
              title: 'Dried Oolong Tea',
              icon: '/assets/icons/herbalbrews/dried_oolong_tea.webp',
              search: 'dried oolong tea drying ingredient brew'
            }
          ]
        }
      ]
    },
    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'Teas, coffee and flasks.',
      entries: [
        {
          id: 'drinks',
          title: 'Teas and Flasks',
          subtitle: 'Every cup comes with its own effect.',
          icon: '/assets/icons/herbalbrews/rooibos_tea.webp',
          search: 'tea coffee drinks brews mugs cups effects herbalbrews flasks potion',
          details: true,
          detailsTitle: 'A Cup for Every Moment',
          detailsText: `All teas and coffees are brewed in the [[Tea Kettle|tea_kettle]]. Drink them straight away or place the cup on a table.

Most of their effects also reach other players nearby, but get a little weaker the more players share them.`,
          items: [
            {
              id: 'coffee',
              title: 'Coffee',
              namespace_id: 'herbalbrews:coffee',
              subtitle: 'Deeprush',
              icon: '/assets/icons/herbalbrews/coffee.webp',
              search: 'coffee drink brew herbalbrews deeprush'
            },
            {
              id: 'milk_coffee',
              title: 'Milk Coffee',
              namespace_id: 'herbalbrews:milk_coffee',
              subtitle: 'Deeprush',
              icon: '/assets/icons/herbalbrews/milk_coffee.webp',
              search: 'milk coffee drink brew herbalbrews deeprush'
            },
            {
              id: 'hibiscus_tea',
              title: 'Hibiscus Tea',
              namespace_id: 'herbalbrews:hibiscus_tea',
              subtitle: 'Lifeleech',
              icon: '/assets/icons/herbalbrews/hibiscus_tea.webp',
              search: 'hibiscus tea drink brew herbalbrews lifeleech'
            },
            {
              id: 'lavender_tea',
              title: 'Lavender Tea',
              namespace_id: 'herbalbrews:lavender_tea',
              subtitle: 'Feral',
              icon: '/assets/icons/herbalbrews/lavender_tea.webp',
              search: 'lavender tea drink brew herbalbrews feral'
            },
            {
              id: 'rooibos_tea',
              title: 'Rooibos Tea',
              namespace_id: 'herbalbrews:rooibos_tea',
              subtitle: 'Regeneration',
              icon: '/assets/icons/herbalbrews/rooibos_tea.webp',
              search: 'rooibos tea drink brew herbalbrews regeneration'
            },
            {
              id: 'yerba_mate_tea',
              title: 'Yerba Mate Tea',
              namespace_id: 'herbalbrews:yerba_mate_tea',
              subtitle: 'Bonding',
              icon: '/assets/icons/herbalbrews/yerba_mate_tea.webp',
              search: 'yerba mate tea drink brew herbalbrews bonding'
            },
            {
              id: 'green_tea',
              title: 'Green Tea',
              namespace_id: 'herbalbrews:green_tea',
              subtitle: 'Balanced',
              icon: '/assets/icons/herbalbrews/green_tea.webp',
              search: 'green tea drink brew herbalbrews balanced'
            },
            {
              id: 'black_tea',
              title: 'Black Tea',
              namespace_id: 'herbalbrews:black_tea',
              subtitle: 'Tough',
              icon: '/assets/icons/herbalbrews/black_tea.webp',
              search: 'black tea drink brew herbalbrews tough'
            },
            {
              id: 'oolong_tea',
              title: 'Oolong Tea',
              namespace_id: 'herbalbrews:oolong_tea',
              subtitle: 'Fortune',
              icon: '/assets/icons/herbalbrews/oolong_tea.webp',
              search: 'oolong tea drink brew herbalbrews fortune'
            },
            {
              id: 'flask',
              title: 'Flask',
              namespace_id: 'herbalbrews:flask',
              subtitle: 'Three potion effects in one bottle, from the [[Brewing Cauldron|brewing_cauldron]].',
              icon: '/assets/icons/herbalbrews/flask.webp',
              search: 'flask flasks potion drink brew herbalbrews'
            }
          ]
        }
      ]
    },
    {
      id: 'crops',
      title: 'Crops, Wild Plants, and Worldgen',
      subtitle: 'Where the ingredients grow.',
      entries: [
        {
          id: 'hibiscus',
          title: 'Hibiscus',
          namespace_id: 'herbalbrews:hibiscus',
          subtitle: 'A red flower from the jungle, used for [[Hibiscus Tea|hibiscus_tea]]. Bone Meal makes more of it.',
          icon: '/assets/icons/herbalbrews/hibiscus.webp',
          search: 'hibiscus flower jungle decorative tea hibiscus tea wild plant bone meal'
        },
        {
          id: 'lavender',
          title: 'Lavender',
          namespace_id: 'herbalbrews:lavender',
          subtitle: 'A fragrant flower of the mountains. Cut it with Shears for [[Lavender Blossoms|lavender_blossom]].',
          icon: '/assets/icons/herbalbrews/lavender.webp',
          search: 'lavender flower mountains decorative shears lavender blossoms lavender tea bone meal'
        },
        {
          id: 'wild_coffee',
          title: 'Wild Coffee',
          namespace_id: 'herbalbrews:wild_coffee_plant',
          subtitle: 'Grows in jungles and gives your first [[Coffee Beans|coffee_beans]].',
          icon: '/assets/icons/herbalbrews/wild_coffee_plant.webp',
          search: 'wild coffee jungle coffee beans harvest break worldgen'
        },
        {
          id: 'wild_rooibos',
          title: 'Wild Rooibos',
          namespace_id: 'herbalbrews:wild_rooibos_plant',
          subtitle: 'Grows in savannas and gives Rooibos Leaves for [[Rooibos Tea|rooibos_tea]].',
          icon: '/assets/icons/herbalbrews/wild_rooibos_plant.webp',
          search: 'wild rooibos savanna rooibos leafs harvest break worldgen'
        },
        {
          id: 'wild_yerba_mate',
          title: 'Wild Yerba Mate',
          namespace_id: 'herbalbrews:wild_yerba_mate_plant',
          subtitle: 'Grows in the mountains and gives Yerba Mate Leaves for [[Yerba Mate Tea|yerba_mate_tea]].',
          icon: '/assets/icons/herbalbrews/wild_yerba_mate_plant.webp',
          search: 'wild yerba mate mountains yerba mate leafs harvest break worldgen'
        }
      ]
    },
    {
      id: 'mob_effects',
      title: 'Mob Effects',
      subtitle: 'Effects from tea and coffee. Most of them are shared with players nearby.',
      entries: [
        {
          id: 'balanced',
          title: 'Balanced',
          namespace_id: 'herbalbrews:balanced',
          subtitle: 'Gives you and nearby players Absorption.',
          icon: '/assets/icons/herbalbrews/effects/balanced.webp',
          search: 'balanced effect absorption radius players green tea'
        },
        {
          id: 'fortune',
          title: 'Fortune',
          namespace_id: 'herbalbrews:fortune',
          subtitle: 'More Luck for you and nearby players, for better loot.',
          icon: '/assets/icons/herbalbrews/effects/fortune.webp',
          search: 'fortune effect luck oolong'
        },
        {
          id: 'tough',
          title: 'Tough',
          namespace_id: 'herbalbrews:tough',
          subtitle: 'Kicks in when you drop to four hearts: Regeneration and Resistance until you are safe.',
          icon: '/assets/icons/herbalbrews/effects/tough.webp',
          search: 'tough effect regeneration resistance low health black tea'
        },
        {
          id: 'feral',
          title: 'Feral',
          namespace_id: 'herbalbrews:feral',
          subtitle: 'More attack damage and extra hearts for you and nearby players.',
          icon: '/assets/icons/herbalbrews/effects/feral.webp',
          search: 'feral effect attack damage health lavender tea'
        },
        {
          id: 'bonding',
          title: 'Bonding',
          namespace_id: 'herbalbrews:bonding',
          subtitle: 'Absorption and Regeneration for the players around you.',
          icon: '/assets/icons/herbalbrews/effects/bonding.webp',
          search: 'bonding effect absorption regeneration radius players yerba mate',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Bonding keeps giving Absorption and Regeneration to the players around you. The more players share it, the weaker it gets.`,
          detailsBullets: [
            'Affects nearby players',
            'Absorption and Regeneration',
            'Weaker when shared by many players'
          ]
        },
        {
          id: 'lifeleech',
          title: 'Lifeleech',
          namespace_id: 'herbalbrews:lifeleech',
          subtitle: 'Drains health from nearby enemies and heals you with it.',
          icon: '/assets/icons/herbalbrews/effects/lifeleech.webp',
          search: 'lifeleech effect drain heal hostile entities radius hibiscus',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Lifeleech steadily takes health from enemies around you and adds it to yours. Players nearby get a weaker version.`,
          detailsBullets: [
            'Drains health from enemies nearby',
            'Heals you',
            'Weaker for other players nearby'
          ]
        },
        {
          id: 'deeprush',
          title: 'Deeprush',
          namespace_id: 'herbalbrews:deeprush',
          subtitle: 'The deeper you are, the faster you mine.',
          icon: '/assets/icons/herbalbrews/effects/deeprush.webp',
          search: 'deeprush effect mining speed depth coffee',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Deeprush gives you Haste that grows stronger the deeper you dig. Players mining nearby profit too, a little less the more of you there are.`,
          detailsBullets: [
            'Haste that scales with depth',
            'Shared with nearby players'
          ]
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Small extras.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle: 'The hat protection, drying time and banner effect can be adjusted in the config.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config configuration settings options herbalbrews',
          details: true,
          detailsTitle: 'Options',
          detailsText: `The config lets you change a few details.`,
          detailsBullets: [
            'Magic protection of the hats on or off, and how strong',
            'How long tea leaves take to dry',
            'Completionist Banner effect and tooltip'
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
