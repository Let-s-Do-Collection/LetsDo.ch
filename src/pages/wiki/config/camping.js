export default {
  slug: 'camping',
  title: 'Camping',
  logo: '/assets/mod-logos/camping.webp',
  aboutTitle: 'Welcome',
  modVersion: '2.1.6',
  aboutSubtitle: 'Everything you need for a night under the stars',
  aboutText: `Camping packs a few cozy outdoor essentials for your adventures.

Carry your belongings in a backpack, pitch a tent, roll out a sleeping bag and grill your dinner. Round the evening off with marshmallows over the campfire.

Some backpacks are crafted, others are hidden in strongholds, End cities or sold by the Wandering Trader.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Cooking out in the open.',
      entries: [
        {
          id: 'grill',
          title: 'Grill',
          subtitle: 'A small charcoal grill. Food cooked on it is more filling.',
          icon: '/assets/icons/camping/grill.webp',
          search: 'grill camping cook food campfire no gui grilled tooltip nutrition saturation',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the Grill with raw food to put it on. It uses the same recipes as the Campfire and holds up to four items at once. When they are done, they pop off the grill.

Grilled food is marked as flame grilled and restores 25% more hunger and saturation. The tooltip shows the bonus.

Careful: stepping on a lit grill burns.`,
          detailsBullets: [
            'No menu, right click with raw food',
            'Holds four items',
            'Uses Campfire recipes',
            '+25% hunger and saturation',
            'Hurts when you step on it'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor & Building',
      subtitle: 'Tents and sleeping bags.',
      entries: [
        {
          id: 'tents',
          title: 'Tents',
          subtitle: 'A tent for your camp, in every dye colour.',
          icon: '/assets/icons/camping/tent_pink.webp',
          search: 'tent camping decorative dye colors',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Tents are decorative and bring a campsite to life. They come in all sixteen dye colours.

To actually sleep, roll out a [[Sleeping Bag|sleeping_bags]] inside.`,
          items: [
            'white',
            'orange',
            'magenta',
            'light_blue',
            'yellow',
            'lime',
            'pink',
            'gray',
            'light_gray',
            'cyan',
            'purple',
            'blue',
            'brown',
            'green',
            'red',
            'black'
          ].map((color) => ({
            id: `tent_${color}`,
            title: `${color.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())} Tent`,
            icon: `/assets/icons/camping/tent_${color}.webp`,
            search: `${color} tent camping`
          }))
        },
        {
          id: 'sleeping_bags',
          title: 'Sleeping Bags',
          subtitle: 'A bed for on the go. Lying down gives a short Regeneration boost.',
          icon: '/assets/icons/camping/sleeping_bag_light_blue.webp',
          search: 'sleeping bag camping dye colors bed regeneration respawn',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Sleeping Bags work like beds: sleep through the night and set your spawn point wherever you camp. Every time you lie down you also get Regeneration II for ten seconds.

They come in all sixteen dye colours.`,
          items: [
            'white',
            'orange',
            'magenta',
            'light_blue',
            'yellow',
            'lime',
            'pink',
            'gray',
            'light_gray',
            'cyan',
            'purple',
            'blue',
            'brown',
            'green',
            'red',
            'black'
          ].map((color) => ({
            id: `sleeping_bag_${color}`,
            title: `${color.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())} Sleeping Bag`,
            icon: `/assets/icons/camping/sleeping_bag_${color}.webp`,
            search: `${color} sleeping bag camping`
          }))
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Handy tools for the trail.',
      entries: [
        {
          id: 'multitool',
          title: 'Multitool',
          subtitle: 'Turns blocks around. Sneak to turn them the other way.',
          icon: '/assets/icons/camping/multitool.webp',
          search: 'multitool camping rotate block turn'
        },
        {
          id: 'walking_stick',
          title: 'Walking Stick',
          subtitle: 'Makes you walk 5% faster while you hold it, and clears cobwebs in no time.',
          icon: '/assets/icons/camping/walking_stick.webp',
          search: 'walking stick camping durability movement speed cobweb'
        }
      ]
    },
    {
      id: 'backpacks',
      title: 'Backpacks',
      subtitle: 'Every backpack holds 24 slots. They only differ in looks and how you get them.',
      entries: [
        {
          id: 'small_backpack',
          title: 'Small Backpack',
          subtitle: 'Crafted. Sometimes waiting in the bonus chest at spawn.',
          icon: '/assets/icons/camping/small_backpack.webp'
        },
        {
          id: 'large_backpack',
          title: 'Hiking Backpack',
          subtitle: 'Crafted. Looks bigger, holds the same.',
          icon: '/assets/icons/camping/large_backpack.webp'
        },
        {
          id: 'sheepbag',
          title: 'Sheepbag',
          subtitle: 'Crafted from white wool, string and leather.',
          icon: '/assets/icons/camping/sheepbag.webp'
        },
        {
          id: 'wanderer_backpack',
          title: 'Wanderer Backpack',
          subtitle: 'Sometimes sold by the [[Wandering Trader|trader_trades]].',
          icon: '/assets/icons/camping/wanderer_backpack.webp'
        },
        {
          id: 'wanderer_bag',
          title: 'Wanderer Bag',
          subtitle: 'The travelling companion of the Wanderer Backpack.',
          icon: '/assets/icons/camping/wanderer_bag.webp'
        },
        {
          id: 'enderbag',
          title: 'Enderbag',
          subtitle: 'Found in [[strongholds|loot]]. Opens your Ender Chest.',
          icon: '/assets/icons/camping/enderbag.webp'
        },
        {
          id: 'enderpack',
          title: 'Enderpack',
          subtitle: 'Found in [[End cities|loot]]. Opens your Ender Chest.',
          icon: '/assets/icons/camping/enderpack.webp'
        },
        {
          id: 'goodybag',
          title: 'Goodybag',
          subtitle: 'The reward for collecting every other backpack.',
          icon: '/assets/icons/camping/goodybag.webp'
        }
      ]
    },
    {
      id: 'food',
      title: 'Food',
      subtitle: 'Campfire treats.',
      entries: [
        {
          id: 'marshmallow',
          title: 'Marshmallow',
          subtitle: 'A sweet little snack that sometimes gives a burst of Speed.',
          icon: '/assets/icons/camping/marshmallow.webp'
        },
        {
          id: 'roasted_marshmallow',
          title: 'Roasted Marshmallow',
          subtitle: 'Toasted just right. Always gives a short Speed II boost.',
          icon: '/assets/icons/camping/roasted_marshmallow.webp'
        },
        {
          id: 'marshmallow_on_a_stick',
          title: 'Marshmallow on a Stick',
          subtitle: 'Hold it over a lit Campfire and pull it away at the right moment.',
          icon: '/assets/icons/camping/marshmallow_on_a_stick.webp',
          details: true,
          detailsTitle: 'Roasting',
          detailsText: `Hold right click on a lit Campfire to roast the marshmallow. Every few seconds it gets one step darker, and the tooltip tells you how it is doing. Let go and eat it when you are happy with it.`,
          detailsBullets: [
            'Untoasted and Warmed: a small snack',
            'Melted: perfect, as filling as bread and gives Speed',
            'Charred: gives Hunger',
            'Totally Burnt: gives strong Hunger'
          ]
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'How backpacks work and where to find them.',
      entries: [
        {
          id: 'backpack_general',
          title: 'Backpacks in General',
          subtitle: 'What all backpacks have in common.',
          icon: '/assets/icons/misc/tip.webp',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `All backpacks work the same way. Wear one in the back slot of Trinkets (Fabric) or Curios (NeoForge) and press B to open it.

You can also place a backpack on the ground and right click it to open. Sneak and right click to pick it up again with all its contents.`,
          detailsBullets: [
            '24 slots each',
            'Worn in a Trinkets or Curios slot',
            'Press B to open (can be changed in the controls)',
            'Place it and right click to open',
            'Sneak right click to pick it up with its contents'
          ]
        },
        {
          id: 'trader_trades',
          title: 'Trading',
          subtitle: 'The Wandering Trader sometimes has a backpack for sale.',
          icon: '/assets/icons/misc/emerald.webp',
          details: true,
          detailsText: `Every now and then the Wandering Trader offers a [[Wanderer Backpack|wanderer_backpack]] for 27 to 53 emeralds.`
        },
        {
          id: 'loot',
          title: 'Loot and Exploration',
          subtitle: 'Some backpacks are found while exploring.',
          icon: '/assets/icons/misc/chest.webp',
          details: true,
          detailsText: `Some backpacks are found in chests:

- [[Small Backpack|small_backpack]] in the bonus chest at spawn
- [[Enderbag|enderbag]] in stronghold libraries, corridors and crossings
- [[Enderpack|enderpack]] in End city treasure`
        }
      ]
    }
  ]
}
