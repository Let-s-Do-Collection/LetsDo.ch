export default {
  slug: 'camping',
  title: 'Camping',
  logo: '/assets/mod-logos/camping.png',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Small camping essentials for your adventures',
  aboutText: `Camping is a small mod that adds a few cozy outdoor essentials.

It focuses on portable gear, simple camp setups, and a handful of useful items for travel and exploration.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Blocks and stations used while camping.',
      entries: [
        {
          id: 'grill',
          title: 'Grill',
          subtitle: 'A small open-flame grill. Toss cookable food on top and let the fire do the rest.',
          icon: '/assets/icons/camping/grill.png',
          search: 'grill camping cook food campfire no gui grilled tooltip nutrition saturation',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Food prepared on the Grill is marked as Grilled and becomes noticeably more nourishing.

Grilled food restores more hunger and saturation and shows its improved state directly in the tooltip.`,
          detailsBullets: [
            'No GUI interaction',
            'Right click with cookable food',
            'Uses Campfire Cooking recipes',
            'Marks items as Grilled',
            'Increases nutrition to 125%',
            'Shows improved values directly in the tooltip'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor & Building',
      subtitle: 'Camping themed blocks and placeables.',
      entries: [
        {
          id: 'tents',
          title: 'Tents',
          subtitle: 'A cozy placeable tent for camps and outdoor scenes, available in all dye colors.',
          icon: '/assets/icons/camping/tent_pink.png',
          search: 'tent camping decorative dye colors',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Tents are purely decorative and meant to add atmosphere to camps and outdoor scenes.

They are available in all standard dye colors.`,
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
            icon: `/assets/icons/camping/tent_${color}.png`,
            search: `${color} tent camping`
          }))
        },
        {
          id: 'sleeping_bags',
          title: 'Sleeping Bags',
          subtitle: 'Quickly placeable sleeping bags for rest. Does not set a respawn point.',
          icon: '/assets/icons/camping/sleeping_bag_light_blue.png',
          search: 'sleeping bag camping dye colors',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Sleeping Bags allow you to sleep without setting a respawn point.

They are available in all standard dye colors.`,
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
            icon: `/assets/icons/camping/sleeping_bag_${color}.png`,
            search: `${color} sleeping bag camping`
          }))
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Items added by Camping.',
      entries: [
        {
          id: 'multitool',
          title: 'Multitool',
          subtitle: 'A compact travel tool for quick block rotation.',
          icon: '/assets/icons/camping/multitool.png',
          search: 'multitool camping rotate block fire resistant durable'
        },
        {
          id: 'walking_stick',
          title: 'Walking Stick',
          subtitle: 'A sturdy walking stick that slightly boosts movement speed.',
          icon: '/assets/icons/camping/walking_stick.png',
          search: 'walking stick camping durability movement speed'
        }
      ]
    },
    {
      id: 'backpacks',
      title: 'Backpacks',
      subtitle: 'All backpacks share the same storage size.',
      entries: [
        {
          id: 'small_backpack',
          title: 'Small Backpack',
          subtitle: 'Can be crafted.',
          icon: '/assets/icons/camping/small_backpack.png'
        },
        {
          id: 'large_backpack',
          title: 'Large Backpack',
          subtitle: 'Looks larger, but is not.',
          icon: '/assets/icons/camping/large_backpack.png'
        },
        {
          id: 'wanderer_backpack',
          title: 'Wanderer Backpack',
          subtitle: 'Obtained through [[Wandering Trader|trader_trades]].',
          icon: '/assets/icons/camping/wanderer_backpack.png'
        },
        {
          id: 'wanderer_bag',
          title: 'Wanderer Bag',
          subtitle: 'Obtained through [[Wandering Trader|trader_trades]].',
          icon: '/assets/icons/camping/wanderer_bag.png'
        },
        {
          id: 'sheepbag',
          title: 'Sheepbag',
          subtitle: 'Obtained through [[Shepherd Villagers|trader_trades]].',
          icon: '/assets/icons/camping/sheepbag.png'
        },
        {
          id: 'enderbag',
          title: 'Enderbag',
          subtitle: 'Found in [[Strongholds|loot]]. Grants Ender Chest access.',
          icon: '/assets/icons/camping/enderbag.png'
        },
        {
          id: 'enderpack',
          title: 'Enderpack',
          subtitle: 'Found in [[The End|loot]]. Grants Ender Chest access.',
          icon: '/assets/icons/camping/enderpack.png'
        },
        {
          id: 'goodybag',
          title: 'Goodybag',
          subtitle: 'Reward for collecting all backpacks.',
          icon: '/assets/icons/camping/goodybag.png'
        }
      ]
    },
    {
      id: 'food',
      title: 'Food',
      subtitle: 'Small treats and campfire snacks.',
      entries: [
        {
          id: 'marshmallow',
          title: 'Marshmallow',
          subtitle: 'A small sweet snack with a chance to grant Speed.',
          icon: '/assets/icons/camping/marshmallow.png'
        },
        {
          id: 'roasted_marshmallow',
          title: 'Roasted Marshmallow',
          subtitle: 'Grilled to perfection. Always grants Speed.',
          icon: '/assets/icons/camping/roasted_marshmallow.png'
        },
        {
          id: 'marshmallow_on_a_stick',
          title: 'Marshmallow on a Stick',
          subtitle: 'Hold it over a Campfire and manage the heat.',
          icon: '/assets/icons/camping/marshmallow_on_a_stick.png'
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Small but meaningful additions.',
      entries: [
        {
          id: 'backpack_general',
          title: 'Backpacks in General',
          subtitle: 'Shared behavior across all backpack variants.',
          icon: '/assets/icons/misc/tip.png',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `All backpacks added by Camping behave the same in terms of functionality.`,
          detailsBullets: [
            'All backpacks share the same storage size',
            'Backpacks are worn in Trinkets or Curios slots',
            'Default keybind is B (configurable)',
            'Backpacks can be placed as blocks'
          ]
        },
        {
          id: 'trader_trades',
          title: 'Trading',
          subtitle: 'Some items are obtained via traders.',
          icon: '/assets/icons/misc/emerald.png',
          details: true,
          detailsText: `Some backpacks are not craftable and are instead obtained through trading.

     - [[Wanderer Backpack|wanderer_backpack]] via Wandering Trader
     - [[Wanderer Bag|wanderer_bag]] via Wandering Trader
     - [[Sheepbag|sheepbag]] via Shepherd Villagers`
        },
        {
          id: 'loot',
          title: 'Loot and Exploration',
          subtitle: 'Some items are found through exploration.',
          icon: '/assets/icons/misc/chest.png',
          details: true,
          detailsText: `Some backpacks are discovered through exploration.

     - [[Enderbag|enderbag]] in Strongholds
     - [[Enderpack|enderpack]] in The End
     - [[Goodybag|goodybag]] for collecting all backpacks`
        }
      ]
    }
  ]
}
