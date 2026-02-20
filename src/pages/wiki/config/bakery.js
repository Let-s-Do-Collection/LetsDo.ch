export default {
  slug: 'bakery',
  title: 'Bakery',
  logo: '/assets/mod-logos/bakery.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Baking, pastries, and bakery essentials',
  aboutText: `Welcome to the Bakery Wiki.

This is your home for items, stations, food, and mechanics added by Bakery.

Bakery focuses on baking workflows: dough, jams, pastries, serving pieces, and a small set of bakery furniture for preparation and storage.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Interactive pieces used for baking and preparation.',
      entries: [
        {
          id: 'baker_station',
          title: 'Baker Station',
          namespace_id: 'bakery:baker_station',
          subtitle:
            'The main work surface for shaping, cutting, and finishing baked goods. Works with [[Rolling Pin|rolling_pin]] and [[Bread Knife|bread_knife]].',
          icon: '/assets/icons/bakery/baker_station.webp',
          search: 'baker station baking cake cupcake cookie dough jam rolling pin knife',
          details: true,
          detailsTitle: 'How baking works',
          detailsText: `The Baker Station is a hands-on baking surface. It does not use a crafting interface.

  Baking is done by placing a Blank Cake on top of the station and interacting with it using tools and toppings.

  Use a [[Bread Knife|bread_knife]] to cut, and a [[Rolling Pin|rolling_pin]] to shape.

  What you get depends entirely on the order of interactions.`,
          detailsBullets: [
            'Place a Blank Cake on top of the Baker Station',
            'Using Jam or a Spread directly creates a finished Cake',
            'Using a Knife cuts the cake into Cupcakes',
            'Using a Knife followed by a Rolling Pin turns it into Cookies',
            'Cupcakes and Cookies must be finished with a glaze or spread',
            'Examples include Jam or Chocolate Spread'
          ]
        },
        {
          id: 'small_cooking_pot',
          title: 'Small Cooking Pot',
          namespace_id: 'bakery:small_cooking_pot',
          subtitle: 'A cozy Station for preparing basic Meals, powered by Heat. Doubles as an emergency weapon.',
          icon: '/assets/icons/bakery/small_cooking_pot.webp',
          search: 'small cooking pot meals basic hot surface stove magma campfire bubbles recipe weapon',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Small Cooking Pot functions similarly to other Crafting Stations, but focuses on preparing basic Meals. It requires a Heat Source to operate and cannot be used on its own.

   The Small Cooking Pot has six Ingredient Input Slots, one Container Slot, and one Output Slot.

   After placing the Ingredients into the Input Slots, the Cooking Process takes about thirty seconds. Once completed, the prepared Meal appears in the Output Slot.

   To function, the Small Cooking Pot must be placed on a Hot Surface, such as a Stove, a Magma Block, or other Heat Sources. In some cases, it can also be placed directly on a Campfire. When active, this is indicated by rising Bubbles, Cooking Sounds, and a colored Fire Indicator in the Cooking Pot Interface.

   Despite its cozy purpose, the Small Cooking Pot can also be wielded as a weapon if absolutely necessary.`,
          detailsBullets: [
            'Six Ingredient Input Slots',
            'One Container Slot and one Output Slot',
            'Requires a valid Heat Source',
            'Cooking takes about thirty seconds',
            'Active State is shown by Bubbles, Sounds, and a colored Fire Indicator',
            'Can be used as a melee weapon'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Furniture, storage, and display pieces.',
      entries: [
        {
          id: 'brick_counter',
          title: 'Brick Counter',
          namespace_id: 'bakery:brick_counter',
          subtitle: 'A brick counter block that connects vertically to form continuous counter lines.',
          icon: '/assets/icons/bakery/brick_counter.webp',
          search: 'brick counter vertical connect bakery'
        },
        {
          id: 'kitchen_sink',
          title: 'Brick Sink',
          namespace_id: 'bakery:kitchen_sink',
          subtitle: 'A functional sink you can fill and empty with buckets and bottles.',
          icon: '/assets/icons/bakery/kitchen_sink.webp',
          search: 'kitchen sink bakery filled bucket bottle water potion',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Use a Water Bucket or Glass Bottle on the lower half to fill it.

        If it is filled, use an empty Bucket to get a Water Bucket, or a Glass Bottle to get a Water Potion.`,
          detailsBullets: [
            'Use Water Bucket or Glass Bottle to fill',
            'Use empty Bucket for a Water Bucket',
            'Use Glass Bottle for a Water Potion',
            'Interact with the lower half'
          ]
        },
        {
          id: 'cabinet',
          title: 'Cabinet',
          namespace_id: 'bakery:cabinet',
          subtitle: 'A storage cabinet for bakery interiors.',
          icon: '/assets/icons/bakery/cabinet.webp',
          search: 'cabinet storage bakery'
        },
        {
          id: 'drawer',
          title: 'Drawer',
          namespace_id: 'bakery:drawer',
          subtitle: 'A compact storage drawer for ingredients and tools.',
          icon: '/assets/icons/bakery/drawer.webp',
          search: 'drawer storage bakery'
        },
        {
          id: 'wall_cabinet',
          title: 'Wall Cabinet',
          namespace_id: 'bakery:wall_cabinet',
          subtitle: 'Wall mounted storage to keep counters clear.',
          icon: '/assets/icons/bakery/wall_cabinet.webp',
          search: 'wall cabinet storage bakery'
        },
        {
          id: 'iron_bench',
          title: 'Iron Bench',
          namespace_id: 'bakery:iron_bench',
          subtitle: 'Simple iron seating.',
          icon: '/assets/icons/bakery/iron_bench.webp',
          search: 'iron bench seating bakery'
        },
        {
          id: 'iron_chair',
          title: 'Iron Chair',
          namespace_id: 'bakery:iron_chair',
          subtitle: 'A simple iron chair.',
          icon: '/assets/icons/bakery/iron_chair.webp',
          search: 'iron chair seating bakery'
        },
        {
          id: 'iron_table',
          title: 'Iron Table',
          namespace_id: 'bakery:iron_table',
          subtitle: 'A sturdy iron table.',
          icon: '/assets/icons/bakery/iron_table.webp',
          search: 'iron table bakery'
        },
        {
          id: 'street_sign',
          title: 'Street Sign',
          namespace_id: 'bakery:street_sign',
          subtitle: 'A writable sign for streets, storefronts, and small notices.',
          icon: '/assets/icons/bakery/street_sign.webp',
          search: 'street sign storefront writable bakery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Street Sign is a writable sign piece intended for streets, shops, and bakery fronts.

    Right-click the sign to open the text screen and write short messages such as shop names, menus, or directions.

    Glow Ink can be applied to make the text glow, improving visibility at night or indoors.`,
          detailsBullets: [
            'Writable sign decoration',
            'Right-click to open the text interface',
            'Supports glowing text using Glow Ink',
            'Ideal for storefronts, streets, and menus',
            'Requires a supporting block'
          ]
        },
        {
          id: 'cake_stand',
          title: 'Cake Stand',
          namespace_id: 'bakery:cake_stand',
          subtitle: 'A serving stand for cakes and baked goods. Great for presenting [[Cakes and slices|cakes]].',
          icon: '/assets/icons/bakery/cake_stand.webp',
          search: 'cake stand bakery display',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cake Stand can display either a single whole cake block or up to three food items.

   Hold a valid item and right-click the Cake Stand to place it.
   Right-click with an empty hand to take items back.`,
          detailsBullets: [
            'Displays one full cake block or up to 3 food items',
            'Right-click with item to place',
            'Right-click with empty hand to remove items'
          ]
        },
        {
          id: 'cake_display',
          title: 'Cake Display',
          namespace_id: 'bakery:cake_display',
          subtitle:
            'A glass display for showcasing baked goods, especially [[Cakes and slices|cakes]] and [[Pastries and sweets|pastries]].',
          icon: '/assets/icons/bakery/cake_display.webp',
          search: 'cake display bakery shelf',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cake Display renders food items on two shelves.

   Up to three food items can be placed on the lower shelf and three on the upper shelf.`,
          detailsBullets: [
            'Displays up to 6 food items',
            '3 items on the lower shelf',
            '3 items on the upper shelf',
            'Right-click with item to place',
            'Right-click with empty hand to remove items'
          ]
        },
        {
          id: 'cupcake_display',
          title: 'Cupcake Display',
          namespace_id: 'bakery:cupcake_display',
          subtitle: 'A compact display for cupcakes and small pastries. Pairs with [[Pastries and sweets|pastries]].',
          icon: '/assets/icons/bakery/cupcake_display.webp',
          search: 'cupcake display bakery shelf',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cupcake Display works the same way as the Cake Display, using two shelves to present baked goods.`,
          detailsBullets: [
            'Displays up to 6 food items',
            '3 items on the lower shelf',
            '3 items on the upper shelf',
            'Right-click with item to place',
            'Right-click with empty hand to remove items'
          ]
        },
        {
          id: 'breadbox',
          title: 'Breadbox',
          namespace_id: 'bakery:breadbox',
          subtitle: 'A wooden breadbox with an opening lid.',
          icon: '/assets/icons/bakery/breadbox.webp',
          search: 'breadbox bakery bread storage',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Breadbox displays a single bread item as a 3D model.

   Use Shift + Right-click to open or close the lid.`,
          detailsBullets: [
            'Displays one bread item as a 3D model',
            'Shift + Right-click to open or close the lid',
            'Right-click with item to place bread',
            'Right-click with empty hand to remove bread'
          ]
        },
        {
          id: 'tray',
          title: 'Tray',
          namespace_id: 'bakery:tray',
          subtitle:
            'A serving tray for bread and baked goods. Perfect with [[Breads and buns|breads]] and [[Pastries and sweets|pastries]].',
          icon: '/assets/icons/bakery/tray.webp',
          search: 'tray bakery serving',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Tray can display either a single bread item as a 3D model or multiple food items in a row.`,
          detailsBullets: [
            'Displays one bread item as a 3D model or up to 5 food items',
            'Food items are rendered in a row',
            'Right-click with item to place',
            'Right-click with empty hand to remove items'
          ]
        },
        {
          id: 'wall_display',
          title: 'Wall Display',
          namespace_id: 'bakery:wall_display',
          subtitle: 'A wall mounted display shelf for baked goods.',
          icon: '/assets/icons/bakery/wall_display.webp',
          search: 'wall display bakery shelf',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Wall Display presents food items across two shelves.`,
          detailsBullets: [
            'Displays up to 4 food items',
            '2 items on the lower shelf',
            '2 items on the upper shelf',
            'Right-click with item to place',
            'Right-click with empty hand to remove items'
          ]
        },
        {
          id: 'jars',
          title: 'Jars and Jam',
          subtitle: 'Stackable jar pieces and jam variants.',
          icon: '/assets/icons/bakery/jar.webp',
          search: 'jar jam strawberry glowberry sweetberry chocolate apple stackable',
          details: true,
          detailsTitle: 'Included Pieces',
          detailsText: `A small set of jar pieces used for kitchens and shelves.

Jam is commonly used to finish baked goods at the [[Baker Station|baker_station]].`,
          items: [
            {
              id: 'jar',
              title: 'Jar',
              namespace_id: 'bakery:jar',
              icon: '/assets/icons/bakery/jar.webp',
              search: 'jar'
            },
            {
              id: 'strawberry_jam',
              title: 'Strawberry Jam',
              namespace_id: 'bakery:strawberry_jam',
              icon: '/assets/icons/bakery/strawberry_jam.webp',
              search: 'strawberry jam'
            },
            {
              id: 'glowberry_jam',
              title: 'Glowberry Jam',
              namespace_id: 'bakery:glowberry_jam',
              icon: '/assets/icons/bakery/glowberry_jam.webp',
              search: 'glowberry jam'
            },
            {
              id: 'sweetberry_jam',
              title: 'Sweetberry Jam',
              namespace_id: 'bakery:sweetberry_jam',
              icon: '/assets/icons/bakery/sweetberry_jam.webp',
              search: 'sweetberry jam'
            },
            {
              id: 'chocolate_jam',
              title: 'Chocolate Jam',
              namespace_id: 'bakery:chocolate_jam',
              icon: '/assets/icons/bakery/chocolate_jam.webp',
              search: 'chocolate jam'
            },
            {
              id: 'apple_jam',
              title: 'Apple Jam',
              namespace_id: 'bakery:apple_jam',
              icon: '/assets/icons/bakery/apple_jam.webp',
              search: 'apple jam'
            }
          ]
        },

        {
          id: 'bakery_banner',
          title: 'Completionist Banner',
          namespace_id: 'bakery:bakery_banner',
          subtitle: 'A reward banner for completing Bakery foods.',
          icon: '/assets/icons/bakery/bakery_banner.webp',
          search: 'completionist banner reward foods advancements bakery',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `The Completionist Banner is awarded to players who have crafted all different Bakery Foods.

    While placed, it grants nearby players a temporary Resistance effect.`,
          detailsBullets: [
            'Reward for crafting all Bakery Foods',
            'Tracked through advancements',
            'Grants Resistance to nearby players when placed'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Everyday items and baking tools.',
      entries: [
        {
          id: 'rolling_pin',
          title: 'Rolling Pin',
          namespace_id: 'bakery:rolling_pin',
          subtitle:
            'Used to flatten dough and occasionally your expectations. Used at the [[Baker Station|baker_station]]. Can be used as a weapon, just not a very good one.',
          icon: '/assets/icons/bakery/rolling_pin.webp',
          search: 'rolling pin tool weapon'
        },
        {
          id: 'bread_knife',
          title: 'Bread Knife',
          namespace_id: 'bakery:bread_knife',
          subtitle: 'Cuts bread and doubles as a very unambitious sword. Used at the [[Baker Station|baker_station]].',
          icon: '/assets/icons/bakery/bread_knife.webp',
          search: 'bread knife tool weapon'
        },
        {
          id: 'cake_dough',
          title: 'Cake Dough',
          namespace_id: 'bakery:cake_dough',
          subtitle: 'Base dough used for cakes. Used at the [[Baker Station|baker_station]].',
          icon: '/assets/icons/bakery/cake_dough.webp',
          search: 'cake dough ingredient'
        },
        {
          id: 'sweet_dough',
          title: 'Sweet Dough',
          namespace_id: 'bakery:sweet_dough',
          subtitle: 'Base dough used for pastries.',
          icon: '/assets/icons/bakery/sweet_dough.webp',
          search: 'sweet dough ingredient'
        }
      ]
    },
    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'A small peek at the Bakery selection.',
      entries: [
        {
          id: 'bread_crate',
          title: 'Bread Crate',
          namespace_id: 'bakery:bread_crate',
          subtitle: 'A placeable bread box you can eat from.',
          icon: '/assets/icons/bakery/bread_crate.webp',
          search: 'bread_crate bread food eatable placeable',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Bread Crate can be placed in the world and eaten directly.

  Each bite restores hunger and advances the bite stage.
  Once fully consumed, the Bread Crate is removed and drops its tray, which was used to craft it.`,
          detailsBullets: [
            'Can be placed',
            'Consumed in multiple bites',
            'Restores hunger on use',
            'Drops the tray after being fully eaten'
          ]
        },
        {
          id: 'chocolate_box',
          title: 'Chocolate Box',
          namespace_id: 'bakery:chocolate_box',
          subtitle: 'A small box of chocolates you can eat piece by piece.',
          icon: '/assets/icons/bakery/chocolate_box.webp',
          search: 'chocolate box food eatable placeable',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Chocolate Box can be placed in the world and eaten directly.

  Each bite restores a small amount of hunger.
  After the last piece is eaten, the box is removed.`,
          detailsBullets: ['Can be placed', 'Consumed in multiple bites', 'Restores hunger on use']
        },
{
  id: 'breads',
  title: 'Breads & Buns',
  namespace_id: 'bakery:breads',
  subtitle: 'Simple baked breads and loaves.',
  icon: '/assets/icons/bakery/bread.webp',
  search: 'bread bakery loaf baguette toast braided bread crusty bun sandwich',
  details: true,
  detailsTitle: 'Included Breads',
  detailsText: `This entry covers all basic bread items added by Bakery.

  All listed breads are simple food items and restore hunger when eaten.`,
  items: [
    {
      id: 'croissant',
      title: 'Croissant',
      namespace_id: 'bakery:croissant',
      icon: '/assets/icons/bakery/croissant.webp',
      search: 'croissant bread food'
    },
    {
      id: 'crusty_bread',
      title: 'Crusty Bread',
      namespace_id: 'bakery:crusty_bread',
      icon: '/assets/icons/bakery/crusty_bread.webp',
      search: 'crusty bread food'
    },
    {
      id: 'bread',
      title: 'Bread',
      namespace_id: 'bakery:bread',
      icon: '/assets/icons/bakery/bread.webp',
      search: 'bread food'
    },
    {
      id: 'baguette',
      title: 'Baguette',
      namespace_id: 'bakery:baguette',
      icon: '/assets/icons/bakery/baguette.webp',
      search: 'baguette bread food'
    },
    {
      id: 'toast',
      title: 'Toast',
      namespace_id: 'bakery:toast',
      icon: '/assets/icons/bakery/toast.webp',
      search: 'toast bread food'
    },
    {
      id: 'braided_bread',
      title: 'Braided Bread',
      namespace_id: 'bakery:braided_bread',
      icon: '/assets/icons/bakery/braided_bread.webp',
      search: 'braided bread food'
    },
    {
      id: 'bun',
      title: 'Bun',
      namespace_id: 'bakery:bun',
      icon: '/assets/icons/bakery/bun.webp',
      search: 'bun bread food'
    }
  ]
},
  {
    id: 'cakes',
    title: 'Cakes & Slices',
    subtitle: 'Cakes, pies, tarts, and their slices.',
    icon: '/assets/icons/bakery/chocolate_cake_slice.webp',
    search: 'cake slice tart pie gateau pudding bakery',
    details: true,
    detailsTitle: 'Included Cakes',
    detailsText: `This entry includes all cake-based foods and their slice variants.

    Slices are typically obtained by cutting or serving whole cakes.`,
    items: [
      {
        id: 'strawberry_cake_slice',
        title: 'Strawberry Cake Slice',
        namespace_id: 'bakery:strawberry_cake_slice',
        icon: '/assets/icons/bakery/strawberry_cake_slice.webp',
        search: 'strawberry cake slice'
      },
      {
        id: 'sweetberry_cake_slice',
        title: 'Sweetberry Cake Slice',
        namespace_id: 'bakery:sweetberry_cake_slice',
        icon: '/assets/icons/bakery/sweetberry_cake_slice.webp',
        search: 'sweetberry cake slice'
      },
      {
        id: 'chocolate_cake_slice',
        title: 'Chocolate Cake Slice',
        namespace_id: 'bakery:chocolate_cake_slice',
        icon: '/assets/icons/bakery/chocolate_cake_slice.webp',
        search: 'chocolate cake slice'
      },
      {
        id: 'chocolate_gateau_slice',
        title: 'Chocolate Gateau Slice',
        namespace_id: 'bakery:chocolate_gateau_slice',
        icon: '/assets/icons/bakery/chocolate_gateau_slice.webp',
        search: 'chocolate gateau slice'
      },
      {
        id: 'bundt_cake_slice',
        title: 'Bundt Cake Slice',
        namespace_id: 'bakery:bundt_cake_slice',
        icon: '/assets/icons/bakery/bundt_cake_slice.webp',
        search: 'bundt cake slice'
      },
      {
        id: 'linzer_tart_slice',
        title: 'Linzer Tart Slice',
        namespace_id: 'bakery:linzer_tart_slice',
        icon: '/assets/icons/bakery/linzer_tart_slice.webp',
        search: 'linzer tart slice'
      },
      {
        id: 'apple_pie_slice',
        title: 'Apple Pie Slice',
        namespace_id: 'bakery:apple_pie_slice',
        icon: '/assets/icons/bakery/apple_pie_slice.webp',
        search: 'apple pie slice'
      },
      {
        id: 'glowberry_pie_slice',
        title: 'Glowberry Pie Slice',
        namespace_id: 'bakery:glowberry_pie_slice',
        icon: '/assets/icons/bakery/glowberry_pie_slice.webp',
        search: 'glowberry pie slice'
      },
      {
        id: 'chocolate_tart_slice',
        title: 'Chocolate Tart Slice',
        namespace_id: 'bakery:chocolate_tart_slice',
        icon: '/assets/icons/bakery/chocolate_tart_slice.webp',
        search: 'chocolate tart slice'
      },
      {
        id: 'pudding_slice',
        title: 'Pudding Slice',
        namespace_id: 'bakery:pudding_slice',
        icon: '/assets/icons/bakery/pudding_slice.webp',
        search: 'pudding slice'
      }
    ]
  },
   {
     id: 'cakes',
     title: 'Cakes & Slices',
     namespace_id: 'bakery:cakes',
     subtitle: 'Cakes, pies, tarts, and their slices.',
     icon: '/assets/icons/bakery/chocolate_cake_slice.webp',
     search: 'cake slice tart pie gateau pudding bakery',
     details: true,
     detailsTitle: 'Included Cakes',
     detailsText: `This entry includes all cake-based foods and their slice variants.

     Slices are typically obtained by cutting or serving whole cakes.`,
     items: [
       {
         id: 'strawberry_cake_slice',
         title: 'Strawberry Cake Slice',
         namespace_id: 'bakery:strawberry_cake_slice',
         icon: '/assets/icons/bakery/strawberry_cake_slice.webp',
         search: 'strawberry cake slice'
       },
       {
         id: 'sweetberry_cake_slice',
         title: 'Sweetberry Cake Slice',
         namespace_id: 'bakery:sweetberry_cake_slice',
         icon: '/assets/icons/bakery/sweetberry_cake_slice.webp',
         search: 'sweetberry cake slice'
       },
       {
         id: 'chocolate_cake_slice',
         title: 'Chocolate Cake Slice',
         namespace_id: 'bakery:chocolate_cake_slice',
         icon: '/assets/icons/bakery/chocolate_cake_slice.webp',
         search: 'chocolate cake slice'
       },
       {
         id: 'chocolate_gateau_slice',
         title: 'Chocolate Gateau Slice',
         namespace_id: 'bakery:chocolate_gateau_slice',
         icon: '/assets/icons/bakery/chocolate_gateau_slice.webp',
         search: 'chocolate gateau slice'
       },
       {
         id: 'bundt_cake_slice',
         title: 'Bundt Cake Slice',
         namespace_id: 'bakery:bundt_cake_slice',
         icon: '/assets/icons/bakery/bundt_cake_slice.webp',
         search: 'bundt cake slice'
       },
       {
         id: 'linzer_tart_slice',
         title: 'Linzer Tart Slice',
         namespace_id: 'bakery:linzer_tart_slice',
         icon: '/assets/icons/bakery/linzer_tart_slice.webp',
         search: 'linzer tart slice'
       },
       {
         id: 'apple_pie_slice',
         title: 'Apple Pie Slice',
         namespace_id: 'bakery:apple_pie_slice',
         icon: '/assets/icons/bakery/apple_pie_slice.webp',
         search: 'apple pie slice'
       },
       {
         id: 'glowberry_pie_slice',
         title: 'Glowberry Pie Slice',
         namespace_id: 'bakery:glowberry_pie_slice',
         icon: '/assets/icons/bakery/glowberry_pie_slice.webp',
         search: 'glowberry pie slice'
       },
       {
         id: 'chocolate_tart_slice',
         title: 'Chocolate Tart Slice',
         namespace_id: 'bakery:chocolate_tart_slice',
         icon: '/assets/icons/bakery/chocolate_tart_slice.webp',
         search: 'chocolate tart slice'
       },
       {
         id: 'pudding_slice',
         title: 'Pudding Slice',
         namespace_id: 'bakery:pudding_slice',
         icon: '/assets/icons/bakery/pudding_slice.webp',
         search: 'pudding slice'
       }
     ]
   }
      ]
    },
    {
      id: 'mob_effects',
      title: 'Mob Effects',
      subtitle: 'Status effects tied to Bakery foods.',
      entries: [
        {
          id: 'vitality',
          title: 'Vitality',
          namespace_id: 'bakery:vitality',
          subtitle: 'Reduces exhaustion over time. Scales with effect level.',
          icon: '/assets/icons/bakery/effects/vitality.webp',
          search: 'vitality effect bakery exhaustion reduction interval scales amplifier'
        },
        {
          id: 'sugar_rush',
          title: 'Sugar Rush',
          namespace_id: 'bakery:sugar_rush',
          subtitle: 'Stacks up to 10. Grants Movement Speed up to 5 stacks, then Attack Speed for remaining stacks.',
          icon: '/assets/icons/bakery/effects/sugar_rush.webp',
          search: 'sugar rush effect bakery stacks movement speed attack speed up to 10'
        }
      ]
    }
  ],
  recipesCta: {
    enabled: true,
    title: "Recipes",
    text: `Feeling a little lost and not sure how to craft certain things?

  Here you will find a helpful overview of all Let’s Do crafting stations and their recipes.

  `,
    buttonLabel: "Open Recipe Overview",
    href: "/recipes/"
  },
}
