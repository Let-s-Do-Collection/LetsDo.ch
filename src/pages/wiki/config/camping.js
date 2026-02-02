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
          subtitle: 'A simple, no GUI grill. Right click with cookable food to grill it directly on the block.',
          icon: '/assets/icons/camping/grill.png',
          search: 'grill camping cook food campfire no gui grilled tooltip nutrition saturation',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Food prepared on the Grill is marked as Grilled and becomes noticeably more nourishing.

Slowly cooked over open flames, grilled food restores more hunger and saturation, shimmers slightly, and shows its improved state directly in the tooltip.`,
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
          detailsText: `Below is the generous color selection of the tents, which trade features for looks and atmosphere.`,
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
          subtitle:
            'Quickly placeable sleeping bags for a calm, not always perfectly comfortable rest. Does not set a respawn point.',
          icon: '/assets/icons/camping/sleeping_bag_light_blue.png',
          search: 'sleeping bag camping dye colors',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Sleeping Bags are available in all dye colors. Just look at the color selection!`,
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
          subtitle:
            'A compact travel tool for quick block rotation. Shift use rotates the other way. Fire resistant, durable, and of finest Swiss quality.',
          icon: '/assets/icons/camping/multitool.png',
          search: 'multitool camping rotate block fire resistant durable'
        },
        {
          id: 'walking_stick',
          title: 'Walking Stick',
          subtitle: 'A sturdy walking stick with durability that slightly boosts movement speed.',
          icon: '/assets/icons/camping/walking_stick.png',
          search: 'walking stick camping durability movement speed'
        }
      ]
    },
    {
      id: 'backpacks',
      title: 'Backpacks',
      subtitle: 'All backpacks share the same storage size. What a scam!',
      entries: [
        {
          id: 'small_backpack',
          title: 'Small Backpack',
          subtitle: 'Can be crafted.',
          icon: '/assets/icons/camping/small_backpack.png',
          search: 'small backpack camping craftable place block'
        },
        {
          id: 'large_backpack',
          title: 'Large Backpack',
          subtitle: 'Looks larger, but is not. Can be crafted.',
          icon: '/assets/icons/camping/large_backpack.png',
          search: 'large backpack camping craftable not larger same size place block'
        },
        {
          id: 'wanderer_backpack',
          title: 'Wanderer Backpack',
          subtitle: 'Not craftable. Has a chance to appear in the Wandering Trader trade pool.',
          icon: '/assets/icons/camping/wanderer_backpack.png',
          search: 'wanderer backpack camping wandering trader trade not craftable place block'
        },
        {
          id: 'wanderer_bag',
          title: 'Wanderer Bag',
          subtitle: 'Not craftable. Has a chance to appear in the Wandering Trader trade pool.',
          icon: '/assets/icons/camping/wanderer_bag.png',
          search: 'wanderer bag camping wandering trader trade not craftable place block'
        },
        {
          id: 'sheepbag',
          title: 'Sheepbag',
          subtitle: 'Not craftable. Has a chance to appear in the Shepherd trade pool.',
          icon: '/assets/icons/camping/sheepbag.png',
          search: 'sheepbag camping shepherd trade not craftable place block'
        },
        {
          id: 'enderbag',
          title: 'Enderbag',
          subtitle: 'Not craftable. Can be found in Strongholds. Grants access to your Ender Chest.',
          icon: '/assets/icons/camping/enderbag.png',
          search: 'enderbag camping stronghold loot ender chest access not craftable place block'
        },
        {
          id: 'enderpack',
          title: 'Enderpack',
          subtitle: 'Not craftable. Can be found in The End. Grants access to your Ender Chest.',
          icon: '/assets/icons/camping/enderpack.png',
          search: 'enderpack camping end loot ender chest access not craftable place block'
        },
        {
          id: 'goodybag',
          title: 'Goodybag',
          subtitle: 'Not craftable. A reward for collecting all backpacks.',
          icon: '/assets/icons/camping/goodybag.png',
          search: 'goodybag camping reward collect all backpacks not craftable place block'
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
          subtitle: 'A small sweet snack with a chance to grant a short Speed boost.',
          icon: '/assets/icons/camping/marshmallow.png',
          search: 'marshmallow camping food speed chance'
        },
        {
          id: 'roasted_marshmallow',
          title: 'Roasted Marshmallow',
          subtitle: 'Grilled to perfection. Always grants a Speed boost.',
          icon: '/assets/icons/camping/roasted_marshmallow.png',
          search: 'roasted marshmallow camping food speed grilled'
        },
        {
          id: 'marshmallow_on_a_stick',
          title: 'Marshmallow on a Stick',
          subtitle:
            'The longer you hold it over the fire, the greater the risk of turning a sweet treat into something… less enjoyable.',
          icon: '/assets/icons/camping/marshmallow_on_a_stick.png',
          search: 'marshmallow on a stick camping roast campfire stages risk burnt effects'
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Small but meaningful additions that support exploration and camping gameplay.',
      entries: [
        {
          id: 'backpack_general',
          title: 'Backpacks in General',
          subtitle: 'Shared behavior across all backpack variants.',
          icon: '/assets/icons/misc/tip.png',
          search: 'camping backpacks trinkets curios keybind placement same size',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `All backpacks added by Camping behave the same in terms of functionality.

Their differences are purely visual, allowing you to choose a style that fits your character or journey.`,
          detailsBullets: [
            'All backpacks share the same storage size',
            'Backpacks are worn in Trinkets or Curios slots',
            'Default keybind to open backpacks is B (configurable)',
            'All backpacks can be placed as blocks and accessed that way as well'
          ]
        },
        {
          id: 'trader_trades',
          title: 'Trading',
          subtitle: 'Some Camping items can be obtained through villager and wandering trader trades.',
          icon: '/assets/icons/misc/emerald.png',
          search: 'camping trader trades wandering trader shepherd backpack',
          details: true,
          detailsTitle: 'Available Trades',
          detailsText: `Certain Camping items are not craftable and are instead obtained through trading.

This encourages interaction with villagers and wandering traders while traveling.`,
          detailsBullets: [
            'Wanderer Backpack can appear in Wandering Trader trades',
            'Wanderer Bag can appear in Wandering Trader trades',
            'Sheepbag can appear in Shepherd Villager trades'
          ]
        },
        {
          id: 'loot',
          title: 'Loot and Exploration',
          subtitle: 'Some Camping items can be found while exploring the world.',
          icon: '/assets/icons/misc/chest.png',
          search: 'camping loot stronghold end exploration backpacks',
          details: true,
          detailsTitle: 'Where to find loot',
          detailsText: `Certain Camping items are discovered through exploration rather than crafting.

These items reward players for venturing into dangerous or remote locations.`,
          detailsBullets: [
            'Enderbag can be found in Strongholds',
            'Enderpack can be found in The End',
            'Goodybag is a special reward for collecting all backpacks'
          ]
        }
      ]
    }
  ]
}
