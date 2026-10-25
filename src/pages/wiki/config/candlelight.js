export default {
  slug: 'candlelight',
  title: 'Candlelight',
  logo: '/assets/mod-logos/candlelight.webp',
  aboutTitle: 'Welcome',
  modVersion: '2.1.15',
  aboutSubtitle: 'Fine dining, cozy interiors and a little romance',
  aboutText: `Candlelight is about cooking for others and setting a beautiful table.

Prepare plated meals on stoves, in cooking pots and pans, then serve them on plates with a napkin, a glass of wine and a cloche. Food eaten from a plate is even more filling.

Furnish your restaurant with tables, chairs, cabinets and shelves in every wood type, write letters on a typewriter, and dress up in chef's whites or evening wear. Serve a full dinner menu, clink glasses with friends, and watch villagers come by for dinner.

Candlelight requires Farm & Charm.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Where the meals are prepared.',
      entries: [
        {
          id: 'stove',
          title: 'Stove',
          subtitle: 'A stove in many stone styles. Bakes on its own and heats pots and pans placed on top.',
          icon: '/assets/icons/candlelight/cobblestone_stove.webp',
          search: 'stove fuel heat cooking candlelight farm and charm variants cobblestone sandstone stone bricks deepslate granite basalt quartz mud end red nether bricks bamboo',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Stove works exactly like the Farm & Charm Stove. It has three ingredient slots, a fuel slot and an output slot. With fuel inside, a recipe takes about twelve seconds. The ingredients and the result are visible on the stove.

A lit stove also heats a [[Cooking Pot|cooking_pot]] or [[Cooking Pan|cooking_pan]] placed on top.

Stoves, sinks and counters come in Cobblestone, Sandstone, Stone Bricks, Deepslate, Granite, Basalt, Quartz, Mud, End Stone, Red Nether Bricks and Bamboo.`,
          detailsBullets: [
            'Three ingredient slots, one fuel slot, one output slot',
            'About twelve seconds per recipe',
            'Heat source for pots and pans',
            'Eleven stone and wood styles'
          ]
        },
        {
          id: 'cooking_pot',
          title: 'Cooking Pot',
          namespace_id: 'candlelight:cooking_pot',
          subtitle: 'A large pot for soups and pasta. Needs heat from below.',
          icon: '/assets/icons/candlelight/cooking_pot.webp',
          search: 'cooking pot meals soup pasta heat stove magma container slot candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cooking Pot has six ingredient slots, one slot for the container, such as a bowl or plate, and one output slot. A meal takes 45 seconds.

It only cooks on a heat source, such as a lit [[Stove|stove]] or a Magma Block. Bubbles, cooking sounds and a lit flame in the menu show that it is working.

Ingredients with effects, such as wine or potions, pass their effects on to the meal.`,
          detailsBullets: [
            'Six ingredient slots, one container slot, one output slot',
            '45 seconds per meal',
            'Needs a heat source below it',
            'Passes effects from ingredients on to the meal'
          ]
        },
        {
          id: 'cooking_pan',
          title: 'Cooking Pan',
          namespace_id: 'candlelight:cooking_pan',
          subtitle: 'A pan for steaks and roasts. Needs heat from below, and makes a decent weapon.',
          icon: '/assets/icons/candlelight/cooking_pan.webp',
          search: 'cooking pan steak roast meals heat stove magma container slot candlelight weapon',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cooking Pan works like the [[Cooking Pot|cooking_pot]]: six ingredient slots, one container slot, one output slot and 45 seconds per meal. It is used for meat and fish dishes.

It needs a heat source below it, and smoke rises while it cooks. Held in the hand, the pan also works as a weapon.`,
          detailsBullets: [
            'Six ingredient slots, one container slot, one output slot',
            '45 seconds per meal',
            'Needs a heat source below it',
            'Can be used as a melee weapon'
          ]
        },
        {
          id: 'cutting_board_recipes',
          title: 'Cutting Board Recipes',
          subtitle: 'Cold dishes and gifts are put together on the Farm & Charm [[Cutting Board|farm-and-charm:cutting_board]].',
          icon: '/assets/icons/farm-and-charm/cutting_board.webp',
          search: 'cutting board assembly assemble beef tartare harvest plate tomato mozzarella salad chocolate box flower crown bowl paper string farm and charm',
          details: true,
          detailsTitle: 'Assembled by hand',
          detailsText: `Place the ingredients on an empty [[Cutting Board|farm-and-charm:cutting_board]] without a tool, then right click with an empty hand. The order does not matter, only the finishing item goes on last.`,
          detailsBullets: [
            '**[[Beef Tartare|beef_tartare]]** (×2): [[Minced Beef|farm-and-charm:minced_beef]] + [[Onion|farm-and-charm:onion]], finished with a Bowl',
            '**[[Harvest Plate|harvest_plate]]** (×3): Carrot + Potato + [[Tomato|farm-and-charm:tomato]], finished with a Bowl',
            '**[[Tomato Mozzarella Salad|tomato_mozzarella_salad]]**: [[Mozzarella|mozzarella]] or any cheese + [[Tomato|farm-and-charm:tomato]], finished with a Bowl',
            '**[[Chocolate Box|chocolate_box]]**: 4 Chocolate, finished with Paper',
            '**[[Flower Crown|flower_crown]]**: 4 [[Roses|rose]], finished with String'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Furniture for restaurants, dining rooms and cozy homes.',
      entries: [
        {
          id: 'drawer',
          title: 'Drawer',
          subtitle: 'A chest of drawers for storage, in every wood type.',
          icon: '/assets/icons/candlelight/drawer.webp',
          search: 'drawer storage wood variants oak spruce birch jungle acacia dark oak mangrove cherry bamboo crimson warped candlelight'
        },
        {
          id: 'cabinet',
          title: 'Cabinet',
          subtitle: 'A cabinet for storage, in every wood type.',
          icon: '/assets/icons/candlelight/cabinet.webp',
          search: 'cabinet storage wood variants oak spruce birch jungle acacia dark oak mangrove cherry bamboo crimson warped candlelight'
        },
        {
          id: 'shelf',
          title: 'Shelf',
          subtitle: 'A shelf that shows off up to nine blocks, in every wood type.',
          icon: '/assets/icons/candlelight/oak_shelf.webp',
          search: 'shelf display blocks wood variants candlelight'
        },
        {
          id: 'sideboard',
          title: 'Sideboard',
          namespace_id: 'candlelight:sideboard',
          subtitle: 'A sideboard for the dining room.',
          icon: '/assets/icons/candlelight/sideboard.webp',
          search: 'sideboard storage candlelight'
        },
        {
          id: 'table',
          title: 'Table',
          subtitle: 'A dining table, in every wood type, that can be covered with a tablecloth.',
          icon: '/assets/icons/candlelight/oak_table.webp',
          search: 'table dining tablecloth carpet dye wood variants oak spruce birch jungle acacia dark oak mangrove cherry bamboo crimson warped candlelight',
          details: true,
          detailsTitle: 'Tablecloth',
          detailsText: `Put a carpet on a wooden table to cover it with a tablecloth. Right click it with any dye to change its color, and sneak and right click to take it off again.`
        },
        {
          id: 'big_table',
          title: 'Big Table',
          subtitle: 'A long banquet table, in every wood type.',
          icon: '/assets/icons/candlelight/oak_big_table.webp',
          search: 'big table large dining wood variants candlelight'
        },
        {
          id: 'chair',
          title: 'Chair',
          subtitle: 'A dining chair to sit on, in every wood type.',
          icon: '/assets/icons/candlelight/chair.webp',
          search: 'chair seating wood variants candlelight'
        },
        {
          id: 'sofa',
          title: 'Sofa',
          namespace_id: 'candlelight:sofa',
          subtitle: 'A soft sofa to sit on. Right click it with any dye to change its color.',
          icon: '/assets/icons/candlelight/sofa.webp',
          search: 'sofa seating dye dyeable color candlelight'
        },
        {
          id: 'kitchen_sink',
          title: 'Sink',
          subtitle: 'A kitchen sink you can fill with water, in many stone styles.',
          icon: '/assets/icons/candlelight/cobblestone_kitchen_sink.webp',
          search: 'kitchen sink water stone variants cobblestone sandstone stone bricks deepslate granite basalt quartz mud end red nether bricks bamboo candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the lower half with an empty hand to turn on the tap, or pour in a Water Bucket. Once it is filled, draw water with an empty Bucket or a Glass Bottle.

Sinks come in the same styles as the [[Stove|stove]].`,
          detailsBullets: [
            'Fill with an empty hand or a Water Bucket',
            'Empty Bucket gives a Water Bucket',
            'Glass Bottle gives a Water Bottle'
          ]
        },
        {
          id: 'kitchen_counter',
          title: 'Counter',
          subtitle: 'A kitchen counter in the same styles as the Stove.',
          icon: '/assets/icons/candlelight/cobblestone_counter.webp',
          search: 'kitchen counter decorative candlelight'
        },
        {
          id: 'table_set',
          title: 'Table Set',
          namespace_id: 'candlelight:table_set',
          subtitle: 'Plates, bowls, glasses and more for a nicely set table.',
          icon: '/assets/icons/candlelight/plate.webp',
          search: 'table set plate bowl glass wine glass napkin cloche candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place a Plate or Bowl on a table and put a dish on it. Add a Glass, a Wine Glass, a Napkin or a Cloche by right clicking the place setting with them. Sneak and right click to lift the Cloche again. Freshly served dishes steam for a while.

**Eating from the table:** A dish eaten from a Table Set fills you up 30% more, gives the effects of its ingredients and makes you [[Well Served|well_served]] for longer. Every table setting adds one more minute: the dish itself, the Napkin, the Glass, the Wine Glass, every filled drink and a lit candle, lantern or Lamp right next to the table. Look at the Table Set to see what is served and what you can still add.

**Dinner menu:** Eat a starter, a main course and a dessert from a Table Set one after another, each within five minutes of the last, and you get a much longer Well Served and Refreshed.

**Drinks:** Pour wine from Vinery into the Wine Glass, and beer from Brewery, grape juice or potions into the Glass. They give the same effects as drinking them normally. Hold right click on the Wine Glass with an empty hand to raise it and drink. Raise your glass next to another player doing the same and you clink glasses. Hold right click on the Napkin to dab your mouth, it goes back on the table when you let go.

**Dinner guests:** In the evening after work, villagers may walk to a Table Set with a dish on it and eat it. Afterwards they give 10% off all their trades for one day. Nitwits eat too, but give nothing back.`,
          detailsBullets: [
            'Place a Plate or Bowl, then serve a dish on it',
            'Dishes from the table are 30% more filling',
            'Each table setting adds one minute of Well Served, up to 10 minutes',
            'Starter, main course and dessert in a row: up to 15 minutes',
            'Wine, beer, juice and potions can be poured into the glasses',
            'Clink glasses with other players',
            'Villagers come to dinner and give 10% off for a day',
            'Info tooltip shows the dish, the table setting and what is missing',
            'Dishes from Farm & Charm, Bakery, Brewery, Vinery, Meadow and more count for the menu'
          ],
          items: [
            {
              id: 'plate',
              title: 'Plate',
              namespace_id: 'candlelight:plate',
              icon: '/assets/icons/candlelight/plate.webp',
              search: 'plate table set food'
            },
            {
              id: 'bowl',
              title: 'Bowl',
              namespace_id: 'candlelight:bowl',
              icon: '/assets/icons/candlelight/bowl.webp',
              search: 'bowl table set food'
            },
            {
              id: 'glass',
              title: 'Glass',
              namespace_id: 'candlelight:glass',
              icon: '/assets/icons/candlelight/glass.webp',
              search: 'glass table set drink potion'
            },
            {
              id: 'wine_glass',
              title: 'Wine Glass',
              namespace_id: 'candlelight:wine_glass',
              icon: '/assets/icons/candlelight/wine_glass.webp',
              search: 'wine glass table set drink wine'
            },
            {
              id: 'napkin',
              title: 'Napkin',
              namespace_id: 'candlelight:napkin',
              icon: '/assets/icons/candlelight/napkin.webp',
              search: 'napkin table set'
            },
            {
              id: 'cloche',
              title: 'Cloche',
              namespace_id: 'candlelight:cloche',
              icon: '/assets/icons/candlelight/cloche.webp',
              search: 'cloche table set'
            }
          ]
        },
        {
          id: 'lamp',
          title: 'Lamp',
          namespace_id: 'candlelight:lamp',
          subtitle: 'A lamp you can switch on and off. Stands on the floor or hangs from the ceiling. At night, fireflies gather around it.',
          icon: '/assets/icons/candlelight/lamp.webp',
          search: 'lamp light switch hanging fireflies table light candlelight'
        },
        {
          id: 'side_table',
          title: 'Side Table',
          namespace_id: 'candlelight:side_table',
          subtitle: 'A small table for books, decoration and a light.',
          icon: '/assets/icons/candlelight/side_table.webp',
          search: 'side table lantern lamp soul lantern book stack items fireflies candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click with any item to put it on the Side Table. Up to four of the same item stack up, books up to two.

You can also place a Lamp, a Lantern or a Soul Lantern on it and switch it on and off with right click. At night, fireflies gather around a lit Side Table. Sneak and right click with an empty hand to take everything off.`,
          detailsBullets: [
            'Stacks up to 4 of the same item, 2 books',
            'Holds a Lamp, Lantern or Soul Lantern',
            'Right click to switch the light on and off',
            'Sneak and right click to take everything off',
            'Drops its items when broken'
          ]
        },
        {
          id: 'dinner_bell',
          title: 'Dinner Bell',
          namespace_id: 'candlelight:dinner_bell',
          subtitle: 'Ring it to call everyone to the table. Ding!',
          icon: '/assets/icons/candlelight/dinner_bell.webp',
          search: 'dinner bell ring right click candlelight',
          musicdisc: true,
          tracks: [
            {
              title: 'Dinner Bell',
              subtitle: 'Ding! Ding! Ding!',
              icon: '/assets/icons/candlelight/dinner_bell.webp',
              src: '/assets/sound_effect/dinner_bell_ring.ogg'
            }
          ]
        },
        {
          id: 'hearth',
          title: 'Heart',
          namespace_id: 'candlelight:heart',
          subtitle: 'A heart for the wall that you can write a message on.',
          icon: '/assets/icons/candlelight/hearth.webp',
          search: 'heart wall decoration writable glow ink candlelight'
        },
        {
          id: 'table_sign',
          title: 'Table Sign',
          namespace_id: 'candlelight:table_sign',
          subtitle: 'A small board for tables and counters that you can write a menu on.',
          icon: '/assets/icons/candlelight/table_sign.webp',
          search: 'table sign board menu note write text placeable decor candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hold the Table Sign and right click in the air to write a menu or a note on it, up to eight lines. Place it and everyone who looks at it can read the text. The text stays on the sign when you break it.`,
          detailsBullets: [
            'Right click in the air to write',
            'Up to eight lines',
            'Keeps its text when broken'
          ]
        },
        {
          id: 'small_painting',
          title: 'Small Painting',
          namespace_id: 'candlelight:painting',
          subtitle: 'A small painting with seven different motifs.',
          icon: '/assets/icons/candlelight/painting.webp',
          search: 'small painting motifs cycle right click candlelight',
          details: true,
          detailsTitle: 'Motifs',
          detailsText: `Hang the painting on a wall and right click it to switch to the next motif.`,
          detailsBullets: ['Seven motifs', 'Right click to change the motif']
        },
        {
          id: 'jewelry_box',
          title: 'Jewelry Box',
          namespace_id: 'candlelight:jewelry_box',
          subtitle: 'A small box to keep and show off a ring.',
          icon: '/assets/icons/candlelight/jewelry_box.webp',
          search: 'jewelry box rings store display candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Open and close the box by interacting with it. Put a [[Gold Ring|gold_ring]] inside and it is shown in the open box.`,
          detailsBullets: [
            'Opens and closes',
            'Holds one ring',
            'The ring is visible inside'
          ]
        },
        {
          id: 'chocolate_box',
          title: 'Chocolate Box',
          namespace_id: 'candlelight:chocolate_box',
          subtitle: 'A box of chocolates to place and nibble from.',
          icon: '/assets/icons/candlelight/chocolate_box.webp',
          search: 'chocolate box eat multiple times placed candlelight'
        },
        {
          id: 'completionist_banner',
          title: 'Completionist Banner',
          namespace_id: 'candlelight:candlelight_banner',
          subtitle: 'The reward for cooking every Candlelight dish.',
          icon: '/assets/icons/candlelight/candlelight_banner.webp',
          search: 'completionist banner reward foods advancement fire resistance candlelight',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `Collect every Candlelight dish to complete the final advancement and receive the Completionist Banner.

Once placed, it gives Fire Resistance to all players within eight blocks.`,
          detailsBullets: [
            'Reward for collecting every dish',
            'Gives Fire Resistance within 8 blocks'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Writing, gifts and outfits.',
      entries: [
        {
          id: 'typewriter',
          title: 'Typewriter',
          namespace_id: 'candlelight:typewriter_iron',
          subtitle: 'For writing longer letters. With iron or gold accents.',
          icon: '/assets/icons/candlelight/typewriter_iron.webp',
          search: 'typewriter writing letters note paper iron gold candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the Typewriter with [[Note Paper|note_paper]] to insert a sheet, then right click again to start typing. When you are done, sign the page and take it out with another right click.

The keys move and the carriage slides along while you type, and ink flies from the page. Without paper, right click with an empty hand to mash a few keys, at the end of the line the bell rings.`,
          detailsBullets: [
            'Right click with Note Paper to insert it',
            'Right click to type',
            'Sign and take out the finished page',
            'Empty hand without paper: key mashing'
          ],
          items: [
            {
              id: 'typewriter_iron',
              title: 'Iron-Accented Typewriter',
              namespace_id: 'candlelight:typewriter_iron',
              icon: '/assets/icons/candlelight/typewriter_iron.webp',
              search: 'typewriter iron'
            },
            {
              id: 'typewriter_gold',
              title: 'Gold-Accented Typewriter',
              namespace_id: 'candlelight:typewriter_gold',
              icon: '/assets/icons/candlelight/typewriter_gold.webp',
              search: 'typewriter gold'
            }
          ]
        },
        {
          id: 'note_paper',
          title: 'Note Paper',
          subtitle: 'Paper for short notes and letters.',
          icon: '/assets/icons/candlelight/note_paper.webp',
          search: 'note paper writable written candlelight typewriter',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Write on Note Paper by hand or with a [[Typewriter|typewriter]]. Once signed, it becomes a finished note that you can pass on, place as decoration or put into a [[letter|letter]].

Blank Note Paper can be stacked on a table, up to eight sheets high.`,
          detailsBullets: [
            'Write by hand or with a Typewriter',
            'Signed notes can be shared',
            'Can be placed and stacked'
          ],
          items: [
            {
              id: 'note_paper',
              title: 'Note Paper',
              subtitle: 'Blank paper.',
              icon: '/assets/icons/candlelight/note_paper.webp',
              search: 'note paper blank'
            },
            {
              id: 'note_paper_writeable',
              title: 'Note Paper Writeable',
              subtitle: 'Ready to be written on and signed.',
              icon: '/assets/icons/candlelight/note_paper_writeable.webp',
              search: 'writable note paper'
            },
            {
              id: 'note_paper_written',
              title: 'Note Paper Written',
              subtitle: 'A finished, signed note.',
              icon: '/assets/icons/candlelight/note_paper_written.webp',
              search: 'written note paper'
            }
          ]
        },
        {
          id: 'letter',
          title: 'Letter',
          subtitle: 'Seal your notes in an envelope and give them to someone.',
          icon: '/assets/icons/candlelight/letter_open.webp',
          search: 'letter envelope note paper sealed love letter candlelight message',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hold an Open Envelope and right click to open the letter screen. Put a [[written note|note_paper_written]] and the envelope in, enter the recipient's name and seal it. You get a Sealed Letter that you can hand over.

Love Envelopes work the same way. Opening a love letter releases a few hearts, and while you walk around holding one, a trail of hearts follows you.`,
          detailsBullets: [
            'Right click with an Open Envelope',
            'Add a written note and a recipient',
            'Seal it to get a Sealed Letter',
            'Love letters come with hearts'
          ],
          items: [
            {
              id: 'love_letter_closed',
              title: 'Sealed Love Letter',
              icon: '/assets/icons/candlelight/love_letter.webp',
              search: 'sealed love letter closed envelope'
            },
            {
              id: 'letter_closed',
              title: 'Sealed Letter',
              icon: '/assets/icons/candlelight/letter_closed.webp',
              search: 'sealed letter closed envelope'
            }
          ]
        },
        {
          id: 'gold_ring',
          title: 'Gold Ring',
          namespace_id: 'candlelight:gold_ring',
          subtitle: 'A ring that brings you luck.',
          icon: '/assets/icons/candlelight/gold_ring.webp',
          search: 'gold ring luck accessory candlelight',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Hold the Gold Ring in your off hand to get Luck II, which improves loot from chests and fishing. With Accessories, Curios or Trinkets installed, it goes into a ring slot instead.

You can keep it in a [[Jewelry Box|jewelry_box]].`,
          detailsBullets: ['Held in the off hand or worn in a ring slot', 'Gives Luck II']
        },
        {
          id: 'chefs_attire',
          title: "Chef's Attire",
          subtitle: 'Chef whites for the kitchen.',
          icon: '/assets/icons/candlelight/cooking_hat.webp',
          search: 'chef attire cooking hat chefs jacket chefs pants chefs boots candlelight',
          details: true,
          detailsTitle: 'Included Pieces',
          detailsText: `An outfit for the kitchen, worn in the armor slots. Now and then a zombie shows up wearing the Cooking Hat.

**Set bonus:** Wearing all four pieces gives a 25% chance of an extra portion from the [[Cooking Pot|cooking_pot]] and [[Cooking Pan|cooking_pan]].`,
          items: [
            {
              id: 'cooking_hat',
              title: 'Cooking Hat',
              namespace_id: 'candlelight:cooking_hat',
              icon: '/assets/icons/candlelight/cooking_hat.webp',
              search: 'cooking hat'
            },
            {
              id: 'chefs_jacket',
              title: 'Chefs Jacket',
              namespace_id: 'candlelight:chefs_jacket',
              icon: '/assets/icons/candlelight/chefs_jacket.webp',
              search: 'chefs jacket'
            },
            {
              id: 'chefs_pants',
              title: 'Chefs Pants',
              namespace_id: 'candlelight:chefs_pants',
              icon: '/assets/icons/candlelight/chefs_pants.webp',
              search: 'chefs pants'
            },
            {
              id: 'chefs_boots',
              title: 'Chefs Boots',
              namespace_id: 'candlelight:chefs_boots',
              icon: '/assets/icons/candlelight/chefs_boots.webp',
              search: 'chefs boots'
            }
          ]
        },
        {
          id: 'evening_wear',
          title: 'Evening Wear',
          subtitle: 'Dressed up for a dinner date.',
          icon: '/assets/icons/candlelight/dress.webp',
          search: 'evening wear flower crown dress shirt formal shirt trousers vest necktie dyeable candlelight',
          details: true,
          detailsTitle: 'Included Pieces',
          detailsText: `Formal wear, worn in the armor slots. The Dress and the Trousers and Vest can be dyed.

**Set bonus:** Wearing the full Suit or Evening Dress makes dishes eaten from a [[Table Set|table_set]] 50% more filling instead of 30%, and counts as an extra table setting.

With Accessories, Curios or Trinkets installed, the Necktie goes into the necklace slot and the Flower Crown into the hat slot.`,
          items: [
            {
              id: 'flower_crown',
              title: 'Flower Crown',
              namespace_id: 'candlelight:flower_crown',
              icon: '/assets/icons/candlelight/flower_crown.webp',
              search: 'flower crown'
            },
            {
              id: 'dress',
              title: 'Dress',
              namespace_id: 'candlelight:dress',
              icon: '/assets/icons/candlelight/dress.webp',
              search: 'dress dyeable'
            },
            {
              id: 'shirt',
              title: 'Shirt',
              namespace_id: 'candlelight:shirt',
              icon: '/assets/icons/candlelight/shirt.webp',
              search: 'shirt'
            },
            {
              id: 'formal_shirt',
              title: 'Formal Shirt',
              namespace_id: 'candlelight:formal_shirt',
              icon: '/assets/icons/candlelight/formal_shirt.webp',
              search: 'formal shirt'
            },
            {
              id: 'trousers_and_vest',
              title: 'Trousers and Vest',
              namespace_id: 'candlelight:trousers_and_vest',
              icon: '/assets/icons/candlelight/trousers_and_vest.webp',
              search: 'trousers and vest dyeable'
            },
            {
              id: 'necktie',
              title: 'Necktie',
              namespace_id: 'candlelight:necktie',
              icon: '/assets/icons/candlelight/necktie.webp',
              search: 'necktie'
            }
          ]
        }
      ]
    },
    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'Soups, pasta, roasts and desserts.',
      entries: [
        {
          id: 'food',
          title: 'Food',
          subtitle: 'Plated meals from the [[Cooking Pot|cooking_pot]] and [[Cooking Pan|cooking_pan]]. Many of them give [[Well Served|well_served]] or [[Refreshed|refreshed]].',
          icon: '/assets/icons/candlelight/lasagne.webp',
          search: 'candlelight food meals plated soups pasta steak salad well served refreshed',
          details: true,
          detailsTitle: 'Notes',
          detailsText: `Most dishes are cooked in the [[Cooking Pot|cooking_pot]] or [[Cooking Pan|cooking_pan]] and need a plate or bowl as container. Beef Tartare, the Harvest Plate and the Tomato Mozzarella Salad are put together on the [[Cutting Board|cutting_board_recipes]] instead. Wine or potions used as ingredients pass their effects on to the dish.

Lasagne, Beef Wellington, Pork Ribs and the big salads can be placed on the table and shared, several servings each.

Serve your dishes on a [[plate|table_set]] to make them 30% more filling.`,
          detailsBullets: [
            'Cooked in the Cooking Pot or Cooking Pan',
            'Keep effects from wine and potions',
            'Large dishes can be placed and shared',
            'Salads, omelette and desserts give Well Served or Refreshed'
          ],
          items: [
            { id: 'tomato_soup', title: 'Tomato Soup', icon: '/assets/icons/candlelight/tomato_soup.webp', search: 'tomato soup' },
            { id: 'mushroom_soup', title: 'Mushroom Soup', icon: '/assets/icons/candlelight/mushroom_soup.webp', search: 'mushroom soup' },
            { id: 'pasta_with_mozzarella', title: 'Pasta with Mozzarella', icon: '/assets/icons/candlelight/pasta_with_mozzarella.webp', search: 'pasta mozzarella' },
            { id: 'bolognese', title: 'Bolognese', icon: '/assets/icons/candlelight/bolognese.webp', search: 'bolognese' },
            { id: 'pasta_with_bolognese', title: 'Pasta with Bolognese', icon: '/assets/icons/candlelight/pasta_with_bolognese.webp', search: 'pasta bolognese' },
            { id: 'beef_with_mushroom_in_wine_and_potatoes', title: 'Beef with Mushrooms in white Wine and Potatoes', icon: '/assets/icons/candlelight/beef_with_mushroom_in_wine_and_potatoes.webp', search: 'beef mushroom wine potatoes' },
            { id: 'roastbeef_with_glazed_carrots', title: 'Roastbeef with Carrots', icon: '/assets/icons/candlelight/roastbeef_with_glazed_carrots.webp', search: 'roastbeef glazed carrots' },
            { id: 'roasted_lamb_with_lettuce', title: 'Roasted Lamb with Lettuce', icon: '/assets/icons/candlelight/roasted_lamb_with_lettuce.webp', search: 'roasted lamb' },
            { id: 'fillet_steak', title: 'Fillet Steak', icon: '/assets/icons/candlelight/fillet_steak.webp', search: 'fillet steak' },
            { id: 'chicken_alfredo', title: 'Chicken Alfredo', icon: '/assets/icons/candlelight/chicken_alfredo.webp', search: 'chicken alfredo' },
            { id: 'salmon_on_white_wine', title: 'Salmon on white Wine Sauce', icon: '/assets/icons/candlelight/salmon_on_white_wine.webp', search: 'salmon white wine' },
            { id: 'chicken_with_vegetables', title: 'Chicken with Vegetables', icon: '/assets/icons/candlelight/chicken_with_vegetables.webp', search: 'chicken vegetables' },
            { id: 'tropical_fish_supreme', title: 'Tropical Fish Supreme', icon: '/assets/icons/candlelight/tropical_fish_supreme.webp', search: 'tropical fish' },
            { id: 'lasagne', title: 'Lasagne', icon: '/assets/icons/candlelight/lasagne.webp', search: 'lasagne' },
            { id: 'beef_wellington', title: 'Beef Wellington', icon: '/assets/icons/candlelight/beef_wellington.webp', search: 'beef wellington' },
            { id: 'potroast', title: 'Pot Roast', icon: '/assets/icons/candlelight/potroast.webp', search: 'pot roast potroast beef potato carrot onion' },
            { id: 'pork_ribs', title: 'Pork Ribs', icon: '/assets/icons/candlelight/pork_ribs.webp', search: 'pork ribs' },
            { id: 'fresh_garden_salad', title: 'Fresh Garden Salad', icon: '/assets/icons/candlelight/fresh_garden_salad.webp', search: 'fresh garden salad' },
            { id: 'tomato_mozzarella_salad', title: 'Tomato Mozzarella Salad', icon: '/assets/icons/candlelight/tomato_mozzarella_salad.webp', search: 'tomato mozzarella salad' },
            { id: 'salad', title: 'Salad', icon: '/assets/icons/candlelight/salad.webp', search: 'salad' },
            { id: 'beetroot_salad', title: 'Beetroot Salad', icon: '/assets/icons/candlelight/beetroot_salad.webp', search: 'beetroot salad' },
            { id: 'pasta_with_lettuce', title: 'Pasta with Lettuce', icon: '/assets/icons/candlelight/pasta_with_lettuce.webp', search: 'pasta lettuce' },
            { id: 'omelet', title: 'Omelette', icon: '/assets/icons/candlelight/omelet.webp', search: 'omelette omelet' },
            { id: 'harvest_plate', title: 'Harvest Plate', icon: '/assets/icons/candlelight/harvest_plate.webp', search: 'harvest plate' },
            { id: 'chocolate_mousse', title: 'Mousse au Chocolate', icon: '/assets/icons/candlelight/chocolate_mousse.webp', search: 'chocolate mousse' },
            { id: 'beef_tartare', title: 'Beef Tartare', icon: '/assets/icons/candlelight/beef_tartare.webp', search: 'beef tartare' },
            { id: 'chicken_teriyaki', title: 'Chicken Teriyaki', icon: '/assets/icons/candlelight/chicken_teriyaki.webp', search: 'chicken teriyaki' },
            { id: 'mozzarella', title: 'Mozzarella', icon: '/assets/icons/candlelight/mozzarella.webp', search: 'mozzarella' }
          ]
        }
      ]
    },
    {
      id: 'mob_effects',
      title: 'Mob Effects',
      subtitle: 'Effects from Candlelight dishes.',
      entries: [
        {
          id: 'well_served',
          title: 'Well Served',
          namespace_id: 'candlelight:well_served',
          subtitle: 'Your hunger bar never drops below four drumsticks.',
          search: 'well served effect hunger food',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `As long as Well Served lasts, your hunger bar never drops below four drumsticks.`,
          detailsBullets: ['Hunger stays at four drumsticks or more', 'From Beef Tartare, Chicken Teriyaki, Omelette, Mousse au Chocolate and the big salads']
        },
        {
          id: 'refreshed',
          title: 'Refreshed',
          namespace_id: 'candlelight:refreshed',
          subtitle: 'Your next ten harvests give extra crops.',
          search: 'refreshed effect harvest crops extra drops',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `While Refreshed is active, every fully grown crop you harvest drops one extra piece of produce. The effect ends after ten harvests.`,
          detailsBullets: ['One extra crop per harvest', 'Lasts for ten harvests', 'From Salad, Beetroot Salad, Pasta with Lettuce and the Harvest Plate']
        }
      ]
    },
    {
      id: 'crops',
      title: 'Worldgen and Natural Features',
      subtitle: 'Flowers in the wild.',
      entries: [
        {
          id: 'rose',
          title: 'Rose',
          namespace_id: 'candlelight:rose',
          subtitle: 'Red roses growing in forests, plains and meadows.',
          icon: '/assets/icons/candlelight/rose.webp',
          search: 'rose flower worldgen biomes forest plains swamp birch meadow sunflower plains river terralith candlelight',
          details: true,
          detailsTitle: 'Biomes',
          detailsText: `Roses grow in forests, birch forests, plains, sunflower plains, meadows, swamps and along rivers. With Terralith installed, they also appear in several of its flowery biomes.

They can be placed in a flower pot and multiplied with Bone Meal.`,
          detailsBullets: [
            'Forest and Birch Forest',
            'Plains and Sunflower Plains',
            'Meadow, Swamp and River',
            'Several Terralith biomes'
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
          id: 'chef_zombies',
          title: 'Chef Zombies',
          subtitle: 'About 3% of adult zombies spawn wearing a [[Cooking Hat|cooking_hat]].',
          icon: '/assets/icons/misc/zombie.webp',
          search: 'chef zombie candlelight cooking hat spawn'
        },
        {
          id: 'vanilla_blend',
          title: 'VanillaBlend',
          subtitle: 'An optional built-in resource pack with muted, vanilla-friendly colors for plates, bowls, dishes, glasses, clothing and effect icons. Turn it on in the Resource Packs menu.',
          icon: '/assets/icons/candlelight/plate.webp',
          search: 'vanillablend vanilla blend resource pack textures colors muted'
        },
        {
          id: 'config',
          title: 'Config',
          subtitle: 'Change effects, table bonuses and food values.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config settings mod menu options food values',
          details: true,
          detailsTitle: 'Settings',
          detailsText: `On Fabric the config opens through Mod Menu, on NeoForge in the Mods screen. Changes to food values need a restart.`,
          detailsBullets: [
            'Well Served, Refreshed, Gold Ring and Banner effects',
            'Table Set bonuses, dinner menu and dish steam',
            'Villager dinner guests and their discount',
            "Chef's Outfit and Evening Wear set bonuses",
            'Info tooltips',
            'Hunger and saturation of every dish'
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
