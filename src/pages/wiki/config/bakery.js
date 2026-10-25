export default {
  slug: 'bakery',
  title: 'Bakery',
  logo: '/assets/mod-logos/bakery.webp',
  aboutTitle: 'Welcome',
  modVersion: '2.1.11',
  aboutSubtitle: 'Fresh bread, cakes and a bakery to sell them in',
  aboutText: `Bakery is all about baking: breads and buns, cakes, cupcakes and cookies, tarts, jams and spreads.

Cakes, cupcakes, cookies and Jam Rolls are made by hand on the Caking Station, jam bubbles away in the Jam Pot, and a range of displays, trays and cabinets lets you set up a proper bakery shop.

Many baked goods also give special effects. Bread keeps you going for longer, and sweets give you a sugar rush.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Where the baking happens.',
      entries: [
        {
          id: 'baker_station',
          title: 'Caking Station',
          namespace_id: 'bakery:baker_station',
          subtitle: 'A work surface for decorating cakes, cupcakes and cookies by hand, using the [[Rolling Pin|rolling_pin]] and [[Bread Knife|bread_knife]].',
          icon: '/assets/icons/bakery/baker_station.webp',
          search: 'caking station baker station baking cake cupcake cookie dough jam spread truffle gateau rolling pin knife',
          details: true,
          detailsTitle: 'How baking works',
          detailsText: `The Caking Station has no crafting menu. Everything happens on top of it, step by step and with an animation for each one. Look at the station to see what you can use next.

**Cakes:** Use [[Cake Dough|cake_dough]] on the station to get a cake base. Spread a jam on it for a Strawberry or Sweetberry Cake, Chocolate Truffles make the Chocolate Cake and Chocolate Spread the Chocolate Gateau. The jam spreads from the middle outwards.

**Cupcakes and cookies:** Place [[Sweet Dough|sweet_dough]] on the station to get four dough cubes. Cut them with the [[Bread Knife|bread_knife]] and the pieces hop apart into cupcake blanks. For cookies, flatten the cubes with the [[Rolling Pin|rolling_pin]] (5 clicks) or knead them with both hands empty (8 clicks), then cut the sheet into cookie blanks. Click too hectically and the dough mushes back together, so find the rhythm! Then decorate them with jam or Chocolate Spread.

**Jam Rolls:** Put a Sponge Sheet on the station, spread a filling on it, roll it up with empty hands and cut it into five slices with the knife.

**Cornets:** Put up to four Cornet Shells on the station, fill them all at once and take them with an empty hand.

Fillings are Milk for cream, or any jam and Chocolate Spread from the [[Jam Pot|small_cooking_pot]]. Perfect jam gives one piece more. You can also lay down up to two tools on the left and right half of the station and pick them up again with an empty hand. Right click with flour for a puff of flour, just for fun.`,
          detailsBullets: [
            'Cake Dough: cake base for cakes and the gateau',
            'Sweet Dough: four cubes for cupcakes and cookies',
            'Knife cuts, Rolling Pin or bare hands flatten',
            'Sponge Sheet: Jam Roll, cut into five slices',
            'Up to four Cornet Shells filled at once',
            'Fillings: Milk, jams and Chocolate Spread',
            'Perfect jam: one extra slice, cupcake or cookie',
            'Gives experience for every finished batch',
            'Info overlay shows the next step',
            'Empty Jars are returned'
          ]
        },
        {
          id: 'small_cooking_pot',
          title: 'Jam Pot',
          namespace_id: 'bakery:small_cooking_pot',
          subtitle: 'Cook jam by hand: stir at the right moment and bottle it at the right time.',
          icon: '/assets/icons/bakery/small_cooking_pot.webp',
          search: 'jam pot small cooking pot jam spread stir whisk bottle perfect runny caramelized burnt stove campfire',
          details: true,
          detailsTitle: 'How to cook jam',
          detailsText: `The Jam Pot has no menu. Put it on a stove or campfire and right click it with the fruit and Sugar. It starts cooking on its own.

Now and then the jam bubbles up and wants to be stirred: right click with an empty hand, hold it to whisk faster and faster. Miss it and the jam catches at the bottom. You can even feel the jam thicken: runny jam whisks easily, perfect jam pushes back, caramelized jam is tough.

Bottle it with empty [[Jars|jars]]. When you bottle decides how it turned out:
- Too early: runny, one jar more
- Right on time: perfect, signed by the cook
- Too late or not stirred: caramelized, one jar less
- Far too long on the fire: the jam turns black and burns. Empty the pot before cooking again.

Sneak and right click with an empty hand to tip the pot over. Ingredients that are not cooking yet come back.`,
          detailsBullets: [
            '2 fruit + Sugar → 3 jars of jam',
            '**Chocolate Spread**: Milk + Chocolate + Sugar',
            'Needs a stove or campfire below it',
            'Stir when it bubbles up',
            'Perfect jam gives an extra piece at the Caking Station',
            'Gives experience for every batch',
            'Info overlay shows what to do next'
          ]
        },
        {
          id: 'cutting_board_recipes',
          title: 'Cutting Board Recipes',
          subtitle: 'Sandwiches, bread baskets and chocolate boxes are put together on the Farm & Charm [[Cutting Board|farm-and-charm:cutting_board]].',
          icon: '/assets/icons/farm-and-charm/cutting_board.webp',
          search: 'cutting board assembly assemble sandwich vegetable sandwich grilled salmon sandwich bread with jam basket of bread crate chocolate box farm and charm',
          details: true,
          detailsTitle: 'Assembled by hand',
          detailsText: `Place the ingredients on an empty [[Cutting Board|farm-and-charm:cutting_board]] without a tool, then right click with an empty hand. The board holds up to five items. The order does not matter, except for Bread with Jam: the bread goes on first.

Any bread works, including the breads from Bakery.`,
          detailsBullets: [
            '**[[Sandwich|sandwiches]]** (×2): Bread + any cooked meat + [[Lettuce|farm-and-charm:lettuce]]',
            '**[[Vegetable Sandwich|sandwiches]]** (×2): Bread + [[Lettuce|farm-and-charm:lettuce]] + [[Tomato|farm-and-charm:tomato]]',
            '**[[Grilled Salmon Sandwich|sandwiches]]** (×2): Bread + Cooked Salmon + [[Lettuce|farm-and-charm:lettuce]]',
            '**[[Bread with Jam|sandwiches]]** (×5): Bread, then any [[Jam|jars]]',
            '**[[Basket of Bread|bread_crate]]**: [[Tray|tray]] + Bread + Baguette + Bun + Braided Bread',
            '**[[Chocolate Box|chocolate_box]]**: Paper + 4 Chocolate Truffles'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Furniture, storage and displays for your bakery.',
      entries: [
        {
          id: 'brick_counter',
          title: 'Brick Counter',
          namespace_id: 'bakery:brick_counter',
          subtitle: 'A brick counter that joins with its neighbours into one long work surface.',
          icon: '/assets/icons/bakery/brick_counter.webp',
          search: 'brick counter connect bakery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place Brick Counters side by side and they join into one continuous counter. Goes well with the [[Brick Sink|kitchen_sink]].`,
          detailsBullets: [
            'Connects with neighbouring counters',
            'Decorative'
          ]
        },
        {
          id: 'kitchen_sink',
          title: 'Brick Sink',
          namespace_id: 'bakery:kitchen_sink',
          subtitle: 'A brick sink you can fill with water and draw from.',
          icon: '/assets/icons/bakery/kitchen_sink.webp',
          search: 'kitchen sink brick bakery filled bucket bottle water',
          details: true,
          detailsTitle: 'Function',
          detailsText: `Turn the tap on with an empty hand and the sink slowly fills up. Fill Glass Bottles from it three times, or empty it all at once with a Bucket.

You can also wash dyed leather, banners and shulker boxes in it, or put yourself out when you are on fire.`,
          detailsBullets: [
            'Turn the tap on with an empty hand',
            'Three Water Bottles per filling',
            'Empty Bucket takes all the water',
            'Washes dyed leather, banners and shulker boxes',
            'Puts out burning players'
          ]
        },
        {
          id: 'cabinet',
          title: 'Cabinet',
          namespace_id: 'bakery:cabinet',
          subtitle: 'A wooden cabinet with 36 slots of storage.',
          icon: '/assets/icons/bakery/cabinet.webp',
          search: 'cabinet storage bakery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to open its 36 slots. Plenty of room for flour, sugar and tools.`,
          detailsBullets: [
            'Right click to open',
            '36 storage slots'
          ]
        },
        {
          id: 'drawer',
          title: 'Drawer',
          namespace_id: 'bakery:drawer',
          subtitle: 'A chest of drawers with 36 slots of storage.',
          icon: '/assets/icons/bakery/drawer.webp',
          search: 'drawer storage bakery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Works like the [[Cabinet|cabinet]], with drawers instead of doors.`,
          detailsBullets: [
            'Right click to open',
            '36 storage slots'
          ]
        },
        {
          id: 'wall_cabinet',
          title: 'Wall Cabinet',
          namespace_id: 'bakery:wall_cabinet',
          subtitle: 'A cabinet that hangs on the wall above your counters.',
          icon: '/assets/icons/bakery/wall_cabinet.webp',
          search: 'wall cabinet storage bakery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hangs on the wall and keeps the counters below free for work.`,
          detailsBullets: [
            'Mounted on walls',
            'Right click to open'
          ]
        },
        {
          id: 'iron_bench',
          title: 'Iron Bench',
          namespace_id: 'bakery:iron_bench',
          subtitle: 'A wrought iron bench for cafés and gardens.',
          icon: '/assets/icons/bakery/iron_bench.webp',
          search: 'iron bench seating bakery cafe',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to sit down. Part of the iron café set with the [[Iron Chair|iron_chair]] and [[Iron Table|iron_table]].`,
          detailsBullets: [
            'Right click to sit'
          ]
        },
        {
          id: 'iron_chair',
          title: 'Iron Chair',
          namespace_id: 'bakery:iron_chair',
          subtitle: 'A wrought iron café chair.',
          icon: '/assets/icons/bakery/iron_chair.webp',
          search: 'iron chair seating bakery cafe',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to sit down. Pairs with the [[Iron Table|iron_table]].`,
          detailsBullets: [
            'Right click to sit'
          ]
        },
        {
          id: 'iron_table',
          title: 'Iron Table',
          namespace_id: 'bakery:iron_table',
          subtitle: 'A small wrought iron café table.',
          icon: '/assets/icons/bakery/iron_table.webp',
          search: 'iron table bakery cafe',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `A decorative table for cafés, terraces and shop windows. Add [[Iron Chairs|iron_chair]] or an [[Iron Bench|iron_bench]].`,
          detailsBullets: [
            'Decorative table'
          ]
        },
        {
          id: 'street_sign',
          title: 'Street Sign',
          namespace_id: 'bakery:street_sign',
          subtitle: 'A sign you can write on, for shop names, menus and directions.',
          icon: '/assets/icons/bakery/street_sign.webp',
          search: 'street sign storefront writable glow ink bakery',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the sign to write on it. Use a Glow Ink Sac to make the text glow in the dark.`,
          detailsBullets: [
            'Right click to write on it',
            'Glow Ink Sac makes the text glow'
          ]
        },
        {
          id: 'cake_stand',
          title: 'Cake Stand',
          namespace_id: 'bakery:cake_stand',
          subtitle: 'A glass stand for one whole cake or three small treats. Made for [[cakes|cakes]].',
          icon: '/assets/icons/bakery/cake_stand.webp',
          search: 'cake stand bakery display glass',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cake Stand holds either one whole cake or up to three stacks of smaller food items. Every spot holds up to 64 of the same item. Right click with items to put in as many as fit, right click to take one out, and sneak and right click to take the whole stack. Look at it to see the item and amount of each spot. Whole cakes stay single.`,
          detailsBullets: [
            'One whole cake or three spots',
            'Up to 64 items per spot',
            'Sneak and right click takes the whole stack',
            'Info tooltip shows what is inside'
          ]
        },
        {
          id: 'cake_display',
          title: 'Cake Display',
          namespace_id: 'bakery:cake_display',
          subtitle: 'A glass counter with two shelves for slices and pastries.',
          icon: '/assets/icons/bakery/cake_display.webp',
          search: 'cake display bakery shelf glass counter',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cake Display has six spots, three on each shelf. It takes food items such as [[slices|cakes]], cupcakes and cookies, but no whole cakes. Displays placed side by side connect.

Every spot holds up to 64 of the same item. Right click with items to put in as many as fit, right click to take one out, and sneak and right click to take the whole stack. Look at it to see the item and amount of each spot. Fuller spots show a bigger pile.`,
          detailsBullets: [
            'Six spots, three per shelf',
            'Up to 64 items per spot',
            'For items, not for whole cakes',
            'Connects with neighbouring displays',
            'Info tooltip shows what is inside'
          ]
        },
        {
          id: 'cupcake_display',
          title: 'Cupcake Display',
          namespace_id: 'bakery:cupcake_display',
          subtitle: 'A wooden display with two shelves for cupcakes and other treats.',
          icon: '/assets/icons/bakery/cupcake_display.webp',
          search: 'cupcake display bakery shelf',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Six spots, three on each shelf. Unlike the [[Cake Display|cake_display]], it accepts any item.

Every spot holds up to 64 of the same item. Right click with items to put in as many as fit, right click to take one out, and sneak and right click to take the whole stack. Look at it to see the item and amount of each spot. Fuller spots show a bigger pile.`,
          detailsBullets: [
            'Six spots, three per shelf',
            'Up to 64 items per spot',
            'Accepts any item',
            'Info tooltip shows what is inside'
          ]
        },
        {
          id: 'breadbox',
          title: 'Bread Box',
          namespace_id: 'bakery:breadbox',
          subtitle: 'A wooden box with a lid that keeps one loaf fresh.',
          icon: '/assets/icons/bakery/breadbox.webp',
          search: 'breadbox bread box bakery bread storage lid',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Bread Box holds a single loaf or other food item and shows it inside. Look at it to see what is inside.

Right click with the item to put it in and right click again to take it out. Sneak and right click to open or close the lid.`,
          detailsBullets: [
            'Holds one food item',
            'Right click to put it in or take it out',
            'Sneak right click to open or close the lid'
          ]
        },
        {
          id: 'tray',
          title: 'Tray',
          namespace_id: 'bakery:tray',
          subtitle: 'A wooden tray to present up to five baked goods in a row. Perfect for [[breads|breads]].',
          icon: '/assets/icons/bakery/tray.webp',
          search: 'tray bakery serving bread',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Tray holds up to five items side by side. Right click a free spot with an item to place it and right click it again to take it back. Look at it to see everything that is on it.

Right click it with any dye to change its color. It keeps the color when you pick it up.

A Tray is also needed for the [[Basket of Bread|bread_crate]] and comes back once the basket is empty.`,
          detailsBullets: [
            'Up to five items in a row',
            'Right click a spot to place or take an item',
            'Can be dyed with any dye'
          ]
        },
        {
          id: 'wall_display',
          title: 'Wall Display',
          namespace_id: 'bakery:wall_display',
          subtitle: 'A wall shelf for bread and pastries.',
          icon: '/assets/icons/bakery/wall_display.webp',
          search: 'wall display bakery shelf bread',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Wall Display hangs on the wall and has four spots, two on each shelf. It takes food items and all Bakery breads.

Every spot holds up to 64 of the same item. Right click with items to put in as many as fit, right click to take one out, and sneak and right click to take the whole stack. Look at it to see the item and amount of each spot.`,
          detailsBullets: [
            'Four spots, two per shelf',
            'Up to 64 items per spot',
            'Takes food items and Bakery breads',
            'Info tooltip shows what is inside'
          ]
        },
        {
          id: 'jars',
          title: 'Jars, Jams and Spreads',
          subtitle: 'Jars and their fillings, stackable up to four high.',
          icon: '/assets/icons/bakery/jar.webp',
          search: 'jar jam spread strawberry glowberry sweetberry chocolate apple stackable',
          details: true,
          detailsTitle: 'Included Pieces',
          detailsText: `Jars can be placed and stacked up to four high, which looks great on shelves.

Jams and Chocolate Spread are cooked in the [[Jam Pot|small_cooking_pot]]. Perfect jam is called for example "Perfect Strawberry Jam" and carries the name of its cook. Jams and Chocolate Spread decorate cakes, cupcakes and cookies on the [[Caking Station|baker_station]]. The empty Jar comes back afterwards.`,
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
              title: 'Chocolate Spread',
              namespace_id: 'bakery:chocolate_jam',
              icon: '/assets/icons/bakery/chocolate_jam.webp',
              search: 'chocolate spread jam'
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
          subtitle: 'The reward for collecting every Bakery treat.',
          icon: '/assets/icons/bakery/bakery_banner.webp',
          search: 'completionist banner reward foods advancement resistance bakery smithing',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `Collect every Bakery food to complete the final advancement and receive the Completionist Banner.

Once placed, it gives Resistance to all players within eight blocks. At a Smithing Table you can copy it with a Netherite Upgrade and a Netherite Ingot, which gives you two banners.`,
          detailsBullets: [
            'Reward for the advancement that asks for every Bakery food',
            'Gives Resistance to players within 8 blocks',
            'Can be copied at a Smithing Table'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Tools and doughs.',
      entries: [
        {
          id: 'rolling_pin',
          title: 'Rolling Pin',
          namespace_id: 'bakery:rolling_pin',
          subtitle: 'Flattens dough and, occasionally, your expectations. Used at the [[Caking Station|baker_station]]. It also works as a weapon, just not a very good one.',
          icon: '/assets/icons/bakery/rolling_pin.webp',
          search: 'rolling pin tool weapon cookies',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `On the [[Caking Station|baker_station]], the Rolling Pin flattens Sweet Dough for cookies in 5 clicks instead of 8 by hand.

It can also be swung as a quick but weak weapon (1 damage).`,
          detailsBullets: [
            'Flattens dough on the Caking Station',
            'Can be laid down on the station',
            'Weapon: 1 damage, 1.2 attacks per second'
          ]
        },
        {
          id: 'bread_knife',
          title: 'Bread Knife',
          namespace_id: 'bakery:bread_knife',
          subtitle: 'Cuts bread and doubles as a very unambitious sword. Used at the [[Caking Station|baker_station]].',
          icon: '/assets/icons/bakery/bread_knife.webp',
          search: 'bread knife tool weapon cupcakes',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `On the [[Caking Station|baker_station]], the Bread Knife cuts dough into cupcake and cookie blanks and Jam Rolls into slices.

It can also be swung as a fast weapon with iron stats (3 damage).`,
          detailsBullets: [
            'Cuts cupcakes, cookies and Jam Roll slices',
            'Can be laid down on the station',
            'Weapon: 3 damage, 2 attacks per second'
          ]
        },
        {
          id: 'cake_dough',
          title: 'Cake Dough',
          namespace_id: 'bakery:cake_dough',
          subtitle: 'The start of every cake, cupcake and cookie.',
          icon: '/assets/icons/bakery/cake_dough.webp',
          search: 'cake dough ingredient',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Use Cake Dough on the [[Caking Station|baker_station]] to place a cake base, which you then decorate. Baked on the Farm & Charm Stove, it becomes a Sponge Sheet for Jam Rolls.

You can also eat it raw, but it will not fill you up much.`,
          detailsBullets: [
            'Starts a Blank Cake on the Caking Station',
            'Edible, but not very filling'
          ]
        },
        {
          id: 'sweet_dough',
          title: 'Sweet Dough',
          namespace_id: 'bakery:sweet_dough',
          subtitle: 'A sweet dough for pastries and tarts.',
          icon: '/assets/icons/bakery/sweet_dough.webp',
          search: 'sweet dough ingredient pastry tart',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place Sweet Dough on the [[Caking Station|baker_station]] to get four dough cubes for cupcakes and cookies. Baked on the Farm & Charm Stove, it becomes Cornet Shells, and it is also used for pastries and tarts. Try cooking it on a Campfire!

You can also eat it raw, but it will not fill you up much.`,
          detailsBullets: [
            'Cupcakes and cookies on the Caking Station',
            'Cornet Shells on the Stove',
            'Ingredient for pastries and tarts',
            'Edible, but not very filling'
          ]
        }
      ]
    },
    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'A taste of what the bakery has to offer.',
      entries: [
        {
          id: 'bread_crate',
          title: 'Basket of Bread',
          namespace_id: 'bakery:bread_crate',
          subtitle: 'A basket of bread to put on the table and share.',
          icon: '/assets/icons/bakery/bread_crate.webp',
          search: 'basket of bread crate food eatable placeable tray',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place the basket and right click it to eat. It has five servings, each worth three drumsticks.

When the last piece is gone, you get the [[Tray|tray]] back.`,
          detailsBullets: [
            'Placeable',
            'Five servings',
            'Returns the Tray when empty'
          ]
        },
        {
          id: 'chocolate_box',
          title: 'Chocolate Box',
          namespace_id: 'bakery:chocolate_box',
          subtitle: 'A box of chocolates to nibble one piece at a time.',
          icon: '/assets/icons/bakery/chocolate_box.webp',
          search: 'chocolate box food eatable placeable',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Chocolate Box is wrapped as a gift. Place it and right click to unwrap it, then right click again to eat one of the six chocolates. Each piece restores half a drumstick.

Only a box that is still wrapped can be picked up again. Once opened, it stays where it is, even when empty.`,
          detailsBullets: [
            'Placeable, wrapped as a gift',
            'Right click to unwrap',
            'Six pieces, half a drumstick each',
            'Only unopened boxes can be picked up'
          ]
        },
        {
          id: 'sandwiches',
          title: 'Sandwiches',
          subtitle: 'Quick meals put together on the Farm & Charm Cutting Board.',
          icon: '/assets/icons/bakery/sandwich.webp',
          search: 'sandwich vegetable sandwich grilled salmon sandwich grilled bacon sandwich bread with jam cutting board stove',
          details: true,
          detailsTitle: 'How to make them',
          detailsText: `Most sandwiches are assembled on the [[Cutting Board|cutting_board_recipes]]. The Grilled Bacon Sandwich is baked on the Farm & Charm Stove.`,
          items: [
            {
              id: 'sandwich',
              title: 'Sandwich',
              namespace_id: 'bakery:sandwich',
              icon: '/assets/icons/bakery/sandwich.webp',
              search: 'sandwich meat'
            },
            {
              id: 'vegetable_sandwich',
              title: 'Vegetable Sandwich',
              namespace_id: 'bakery:vegetable_sandwich',
              icon: '/assets/icons/bakery/vegetable_sandwich.webp',
              search: 'vegetable sandwich'
            },
            {
              id: 'grilled_salmon_sandwich',
              title: 'Grilled Salmon Sandwich',
              namespace_id: 'bakery:grilled_salmon_sandwich',
              icon: '/assets/icons/bakery/grilled_salmon_sandwich.webp',
              search: 'grilled salmon sandwich'
            },
            {
              id: 'grilled_bacon_sandwich',
              title: 'Grilled Bacon Sandwich',
              namespace_id: 'bakery:grilled_bacon_sandwich',
              icon: '/assets/icons/bakery/grilled_bacon_sandwich.webp',
              search: 'grilled bacon sandwich'
            },
            {
              id: 'bread_with_jam',
              title: 'Bread with Jam',
              namespace_id: 'bakery:bread_with_jam',
              icon: '/assets/icons/bakery/bread_with_jam.webp',
              search: 'bread with jam'
            }
          ]
        },
        {
          id: 'breads',
          title: 'Breads & Buns',
          subtitle: 'Loaves, buns and pastries that keep you going for longer.',
          icon: '/assets/icons/bakery/bread.webp',
          search: 'bread bakery loaf baguette toast braided bread crusty bun croissant vitality',
          details: true,
          detailsTitle: 'Included Breads',
          detailsText: `Bakery breads fill you up and give [[Vitality|vitality]], which slows down hunger for a while. Most loaves can also be placed as decoration, and the Wall Display and Tray show them off nicely.`,
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
              title: 'Bakers Bread',
              namespace_id: 'bakery:bread',
              icon: '/assets/icons/bakery/bread.webp',
              search: 'bakers bread food'
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
          subtitle: 'Cakes, pies, tarts and their slices.',
          icon: '/assets/icons/bakery/chocolate_cake_slice.webp',
          search: 'cake slice tart pie gateau pudding bakery',
          details: true,
          detailsTitle: 'Included Cakes',
          detailsText: `Place a whole cake, pie or tart and right click it with a [[Bread Knife|bread_knife]] to cut off a slice. Sneak and right click to eat a piece straight from the plate.

An untouched cake can be picked up again with an empty hand.

**Candles:** Cakes, tarts and pies hold up to four candles of one color, one per slice. The Chocolate Gateau, Bundt Cake and Pudding take one candle in the middle. Light them with Flint and Steel and blow them out with an empty hand. Cutting or eating a slice drops its candle.`,
          items: [
            {
              id: 'strawberry_cake_slice',
              title: 'Slice of Strawberry Cake',
              namespace_id: 'bakery:strawberry_cake_slice',
              icon: '/assets/icons/bakery/strawberry_cake_slice.webp',
              search: 'strawberry cake slice'
            },
            {
              id: 'sweetberry_cake_slice',
              title: 'Slice of Sweetberry Cake',
              namespace_id: 'bakery:sweetberry_cake_slice',
              icon: '/assets/icons/bakery/sweetberry_cake_slice.webp',
              search: 'sweetberry cake slice'
            },
            {
              id: 'chocolate_cake_slice',
              title: 'Slice of Chocolate Cake',
              namespace_id: 'bakery:chocolate_cake_slice',
              icon: '/assets/icons/bakery/chocolate_cake_slice.webp',
              search: 'chocolate cake slice'
            },
            {
              id: 'chocolate_gateau_slice',
              title: 'Slice of Chocolate Gateau',
              namespace_id: 'bakery:chocolate_gateau_slice',
              icon: '/assets/icons/bakery/chocolate_gateau_slice.webp',
              search: 'chocolate gateau slice'
            },
            {
              id: 'bundt_cake_slice',
              title: 'Slice of Bundt Cake',
              namespace_id: 'bakery:bundt_cake_slice',
              icon: '/assets/icons/bakery/bundt_cake_slice.webp',
              search: 'bundt cake slice'
            },
            {
              id: 'linzer_tart_slice',
              title: 'Slice of Linzer Tart',
              namespace_id: 'bakery:linzer_tart_slice',
              icon: '/assets/icons/bakery/linzer_tart_slice.webp',
              search: 'linzer tart slice'
            },
            {
              id: 'apple_pie_slice',
              title: 'Slice of Apple Pie',
              namespace_id: 'bakery:apple_pie_slice',
              icon: '/assets/icons/bakery/apple_pie_slice.webp',
              search: 'apple pie slice'
            },
            {
              id: 'glowberry_pie_slice',
              title: 'Slice of Glowberry Tart',
              namespace_id: 'bakery:glowberry_pie_slice',
              icon: '/assets/icons/bakery/glowberry_pie_slice.webp',
              search: 'glowberry tart pie slice'
            },
            {
              id: 'chocolate_tart_slice',
              title: 'Slice of Chocolate Tart',
              namespace_id: 'bakery:chocolate_tart_slice',
              icon: '/assets/icons/bakery/chocolate_tart_slice.webp',
              search: 'chocolate tart slice'
            },
            {
              id: 'pudding_slice',
              title: 'Slice of Pudding',
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
      subtitle: 'Effects from Bakery food.',
      entries: [
        {
          id: 'vitality',
          title: 'Vitality',
          namespace_id: 'bakery:vitality',
          subtitle: 'Slows down hunger. Stronger at higher levels.',
          icon: '/assets/icons/bakery/effects/vitality.webp',
          search: 'vitality effect bakery bread exhaustion hunger',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Vitality comes from Bakery [[breads|breads]]. At regular intervals it removes some of the exhaustion you have built up, so your hunger bar drains more slowly. Every extra level makes it stronger.`,
          detailsBullets: [
            'Slows down hunger',
            'Stronger at higher levels',
            'Granted by breads and buns'
          ]
        },
        {
          id: 'sugar_rush',
          title: 'Sugar Rush',
          namespace_id: 'bakery:sugar_rush',
          subtitle: 'Each sweet adds a stack, up to ten. First you get faster, then you hit faster.',
          icon: '/assets/icons/bakery/effects/sugar_rush.webp',
          search: 'sugar rush effect bakery stacks movement speed attack speed sweets',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Every sweet treat you eat adds one stack of Sugar Rush and refreshes its timer, up to ten stacks.

Stacks one to five each add 2% movement speed. Stacks six to ten each add 2% attack speed on top.`,
          detailsBullets: [
            'One stack per sweet, up to 10',
            'Stacks 1 to 5: +2% movement speed each',
            'Stacks 6 to 10: +2% attack speed each',
            'Eating another sweet refreshes the timer',
            'The stack count is shown on the effect icon'
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
          subtitle: 'Effects, the Caking Station and the food values can be adjusted in the config.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config configuration settings options bakery',
          details: true,
          detailsTitle: 'Settings',
          detailsText: `The config is split into Effects, Misc and Food, and every option has a description.`,
          detailsBullets: [
            'Sugar Rush: max stacks, bonus per stack, attack speed',
            'Completionist Banner: radius and Resistance level',
            'Caking Station: animations, kneading, clicks per step',
            'Info overlays and tooltips on or off, or only with Dungarees from Farm & Charm',
            'Attack speed of the Bread Knife and Rolling Pin',
            'Effect duration of every food'
          ]
        },
        {
          id: 'vanilla_blend',
          title: 'VanillaBlend',
          subtitle: 'An optional built-in resource pack with muted, vanilla-friendly colors. Turn it on in the Resource Packs menu.',
          icon: '/assets/icons/bakery/bread.webp',
          search: 'vanillablend vanilla blend resource pack textures colors muted'
        },
        {
          id: 'experience',
          title: 'Baking Experience',
          subtitle: 'Finishing cakes, cupcakes and cookies on the Caking Station and bottling jam gives experience.',
          icon: '/assets/icons/misc/tip.webp',
          search: 'experience xp baking jam'
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
