export default {
  slug: 'candlelight',
  title: 'Candlelight',
  logo: '/assets/mod-logos/candlelight.png',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Fine dining, interiors, and a little bit of romance',
  aboutText: `Welcome to the Candlelight Wiki.

This is your home for blocks, items, mechanics, and quick guidance for Candlelight.

Candlelight focuses on restaurant life in survival: furniture, decorative details, a writing and gifting theme, and a lineup of plated meals.

Alongside that, it introduces themed outfits, a lucky ring, and a few special showcase blocks that help your builds feel personal.
`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Workstations and interactive elements used for cooking and preparation.',
      entries: [
        {
          id: 'stove',
          title: 'Stove',
          namespace_id: 'candlelight:*_stove',
          subtitle:
            'Works the same as the Farm & Charm Stove. A heat source for cooking, available in multiple stone variants.',
          icon: '/assets/icons/candlelight/cobblestone_stove.png',
          search:
            'stove fuel heat cooking candlelight farm and charm same functionality variants cobblestone sandstone stone bricks deepslate granite basalt quartz',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `
The Candlelight Stove works the same as the Farm & Charm Stove.

It functions like a Crafting Station and provides three Ingredient Input Slots, one Fuel Slot, and one Output Slot.

Place the required Ingredients into the Input Slots, add a valid Fuel Item, and wait about twelve seconds for the Crafting Process to complete. The crafted Item then appears in the Output Slot.

Items located in both the Input Slots and the Output Slot are also visually displayed inside the Block in the World.

Candlelight includes multiple Stove variants designed to match different stone palettes. All variants share the same functionality.`,
          detailsBullets: [
            'Same functionality as the Farm & Charm Stove',
            'Three Ingredient Input Slots',
            'One Fuel Slot and one Output Slot',
            'Crafting takes about twelve seconds',
            'Requires a valid Fuel Item such as Coal or Charcoal',
            'Input and Output Items are visible in the Block Model',
            'Available in multiple stone themed variants'
          ]
        },
        {
          id: 'cooking_pot',
          title: 'Cooking Pot',
          namespace_id: 'candlelight:cooking_pot',
          subtitle:
            'Works the same as the Farm & Charm Cooking Pot. A cozy station for preparing basic meals, powered by heat.',
          icon: '/assets/icons/candlelight/cooking_pot.png',
          search:
            'cooking pot meals basic hot surface stove magma campfire bubbles container slot output cooking candlelight farm and charm same functionality',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Candlelight Cooking Pot works the same as the Farm & Charm Cooking Pot, but is used for Candlelight Meals.

It requires a Heat Source to operate and cannot be used on its own.

The Cooking Pot has six Ingredient Input Slots, one Container Slot, and one Output Slot.

After placing the Ingredients into the Input Slots, the Cooking Process takes about thirty seconds. Once completed, the prepared Meal appears in the Output Slot.

To function, the Cooking Pot must be placed on a Hot Surface, such as a Stove, a Magma Block, or other Heat Sources. In some cases, it can also be placed directly on a Campfire. When active, this is indicated by rising Bubbles, Cooking Sounds, and a colored Fire Indicator in the Cooking Pot Interface.`,
          detailsBullets: [
            'Same functionality as the Farm & Charm Cooking Pot',
            'Six Ingredient Input Slots',
            'One Container Slot and one Output Slot',
            'Requires a valid Heat Source',
            'Cooking takes about thirty seconds',
            'Active State is shown by Bubbles, Sounds, and a colored Fire Indicator'
          ]
        },
        {
          id: 'cooking_pan',
          title: 'Cooking Pan',
          namespace_id: 'candlelight:cooking_pan',
          subtitle: 'Works the same as the Farm & Charm Roaster. A large cooking station for preparing bigger meals.',
          icon: '/assets/icons/candlelight/cooking_pan.png',
          search:
            'cooking pan bigger meals large hot surface stove magma campfire smoke container slot output cooking candlelight farm and charm roaster same functionality',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Candlelight Cooking Pan works the same as the Farm & Charm Roaster, but is used for Candlelight Meals.

It requires a Heat Source and cannot operate on its own.

The Cooking Pan provides six Ingredient Input Slots, one Container Slot, and one Output Slot.

After placing the required Ingredients into the Input Slots, the Cooking Process takes about sixty seconds. Once completed, the prepared Meal appears in the Output Slot.

To function, the Cooking Pan must be connected to a Heat Source, such as a Stove, a Magma Block, or other Hot Surfaces. It can also be used when positioned above a Campfire. When active, the Cooking Pan emits rising Smoke and Cooking Sounds, and the Fire Indicator in the Interface changes from grayscale to colored.`,
          detailsBullets: [
            'Same functionality as the Farm & Charm Roaster',
            'Designed for larger and more complex Meals',
            'Six Ingredient Input Slots',
            'One Container Slot and one Output Slot',
            'Requires a valid Heat Source',
            'Cooking takes about sixty seconds',
            'Active State is shown by Smoke, Sounds, and a colored Fire Indicator'
          ]
        }
      ]
    },

    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Furniture and decorative blocks for restaurants, dining rooms, and interiors.',
      entries: [
        {
          id: 'drawer',
          title: 'Drawer',
          subtitle: 'A storage drawer. Available in all wood variants.',
          icon: '/assets/icons/candlelight/drawer.png',
          search:
            'drawer storage wood variants oak spruce birch jungle acacia dark oak mangrove cherry bamboo candlelight'
        },
        {
          id: 'cabinet',
          title: 'Cabinet',
          subtitle: 'A storage cabinet. Available in all wood variants.',
          icon: '/assets/icons/candlelight/cabinet.png',
          search:
            'cabinet storage wood variants oak spruce birch jungle acacia dark oak mangrove cherry bamboo candlelight'
        },
        {
          id: 'table',
          title: 'Table',
          subtitle: 'A dining table. Available in all wood variants.',
          icon: '/assets/icons/candlelight/oak_table.png',
          search:
            'table dining wood variants oak spruce birch jungle acacia dark oak mangrove cherry bamboo candlelight'
        },
        {
          id: 'chair',
          title: 'Chair',
          subtitle: 'A chair. Available in all wood variants.',
          icon: '/assets/icons/candlelight/chair.png',
          search:
            'chair seating wood variants oak spruce birch jungle acacia dark oak mangrove cherry bamboo candlelight'
        },
        {
          id: 'kitchen_sink',
          title: 'Kitchen Sink',
          subtitle: 'A functional kitchen sink block available in multiple stone variants.',
          icon: '/assets/icons/candlelight/cobblestone_kitchen_sink.png',
          search:
            'kitchen sink stone variants cobblestone sandstone stone bricks deepslate granite basalt quartz candlelight',
          details: true,
          detailsTitle: 'Variants and Usage',
          detailsText: `The Kitchen Sink is a decorative and functional utility block used in kitchens and restaurant interiors.

Candlelight provides multiple Kitchen Sink variants designed to match different stone palettes, such as Cobblestone, Sandstone, Stone Bricks, Deepslate, Granite, Basalt, and Quartz.

All Kitchen Sink variants share the same functionality and differ only in appearance, allowing you to choose the version that best fits your build style.`,
          detailsBullets: [
            'Available in multiple stone themed variants',
            'All variants share identical functionality',
            'Designed for kitchen and restaurant interiors',
            'Visual differences only, no gameplay changes'
          ]
        },
        {
          id: 'kitchen_counter',
          title: 'Kitchen Counter',
          subtitle: 'A decorative kitchen counter for interior builds.',
          icon: '/assets/icons/candlelight/cobblestone_counter.png',
          search: 'kitchen counter decorative candlelight'
        },
        {
          id: 'table_set',
          title: 'Table Set',
          namespace_id: 'candlelight:table_set',
          subtitle: 'Placeable dining pieces for serving and consuming food and drinks.',
          icon: '/assets/icons/candlelight/plate.png',
          search: 'table set plate bowl glass wine glass napkin cloche candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Table Set includes multiple placeable dining pieces used for serving and consuming food and drinks.

Food placed onto Plates and Bowls retains its effects. When eaten from the plate or bowl, all food effects are applied normally.

Glasses and Wine Glasses can be filled with drinks such as Potions or Wine. Players can drink directly from them.`,
          detailsBullets: [
            'Place food onto Plates and Bowls',
            'Food effects are preserved and applied when eaten',
            'Glasses and Wine Glasses can be filled with drinks',
            'Drink directly from placed glasses'
          ],
          items: [
            {
              id: 'plate',
              title: 'Plate',
              namespace_id: 'candlelight:plate',
              icon: '/assets/icons/candlelight/plate.png',
              search: 'plate table set food'
            },
            {
              id: 'bowl',
              title: 'Bowl',
              namespace_id: 'candlelight:bowl',
              icon: '/assets/icons/candlelight/bowl.png',
              search: 'bowl table set food'
            },
            {
              id: 'glass',
              title: 'Glass',
              namespace_id: 'candlelight:glass',
              icon: '/assets/icons/candlelight/glass.png',
              search: 'glass table set drink potion'
            },
            {
              id: 'wine_glass',
              title: 'Wine Glass',
              namespace_id: 'candlelight:wine_glass',
              icon: '/assets/icons/candlelight/wine_glass.png',
              search: 'wine glass table set drink wine'
            },
            {
              id: 'napkin',
              title: 'Napkin',
              namespace_id: 'candlelight:napkin',
              icon: '/assets/icons/candlelight/napkin.png',
              search: 'napkin table set'
            },
            {
              id: 'cloche',
              title: 'Cloche',
              namespace_id: 'candlelight:cloche',
              icon: '/assets/icons/candlelight/cloche.png',
              search: 'cloche table set'
            }
          ]
        },
        {
          id: 'lamp',
          title: 'Lamp',
          namespace_id: 'candlelight:lamp',
          subtitle: 'A placeable lamp for interiors.',
          icon: '/assets/icons/candlelight/lamp.png',
          search: 'lamp light candlelight'
        },
        {
          id: 'side_table',
          title: 'Side Table',
          namespace_id: 'candlelight:side_table',
          subtitle: 'A small table to place items like books, lamps, lanterns, and decorations.',
          icon: '/assets/icons/candlelight/side_table.png',
          search: 'side table place items books lamp lantern candlelight'
        },
        {
          id: 'sofa',
          title: 'Sofa',
          namespace_id: 'candlelight:sofa',
          subtitle: 'A decorative sofa for seating.',
          icon: '/assets/icons/candlelight/sofa.png',
          search: 'sofa seating candlelight'
        },
        {
          id: 'big_table',
          title: 'Big Table',
          subtitle: 'A large table. Available in all wood variants.',
          icon: '/assets/icons/candlelight/oak_big_table.png',
          search:
            'big table large dining wood variants oak spruce birch jungle acacia dark oak mangrove cherry bamboo candlelight'
        },
        {
          id: 'dinner_bell',
          title: 'Dinner Bell',
          namespace_id: 'candlelight:dinner_bell',
          subtitle: 'A bell block you can ring with right click. Ding!',
          icon: '/assets/icons/candlelight/dinner_bell.png',
          search: 'dinner bell ring right click candlelight'
        },
        {
          id: 'hearth',
          title: 'Hearth',
          namespace_id: 'candlelight:hearth',
          subtitle: 'A decorative block that can be placed on walls.',
          icon: '/assets/icons/candlelight/hearth.png',
          search: 'hearth wall placeable candlelight'
        },
        {
          id: 'table_sign',
          title: 'Table Sign',
          namespace_id: 'candlelight:table_sign',
          subtitle: 'A placeable decorative sign for tables and counters.',
          icon: '/assets/icons/candlelight/table_sign.png',
          search: 'table sign placeable decor candlelight'
        },
        {
          id: 'small_painting',
          title: 'Small Painting',
          namespace_id: 'candlelight:painting',
          subtitle: 'A painting with multiple motifs.',
          icon: '/assets/icons/candlelight/painting.png',
          search: 'small painting motifs cycle right click candlelight',
          details: true,
          detailsTitle: 'Motifs',
          detailsText: `The Small Painting can display different motifs.

Right click the placed painting to cycle through the available designs.`,
          detailsBullets: ['Multiple motifs', 'Right click to change motif', 'Tribute style decoration']
        },
        {
          id: 'jewelry_box',
          title: 'Jewelry Box',
          namespace_id: 'candlelight:jewelry_box',
          subtitle: 'A small box for storing and displaying rings.',
          icon: '/assets/icons/candlelight/jewelry_box.png',
          search: 'jewelry box rings store display candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Jewelry Box can be opened and closed through interaction.

   Rings can be placed inside the Jewelry Box. Stored rings are visually displayed when the box is opened, making it suitable for both storage and decoration.`,
          detailsBullets: [
            'Can be opened and closed',
            'Rings can be placed inside',
            'Stored rings are visually displayed'
          ]
        },
        {
          id: 'chocolate_box',
          title: 'Chocolate Box',
          namespace_id: 'candlelight:chocolate_box',
          subtitle: 'A placeable box you can eat from multiple times.',
          icon: '/assets/icons/candlelight/chocolate_box.png',
          search: 'chocolate box eat multiple times placed candlelight'
        },
        {
          id: 'completionist_banner',
          title: 'Completionist Banner',
          namespace_id: 'candlelight:candlelight_banner',
          subtitle: 'A reward banner for completing Candlelight foods.',
          icon: '/assets/icons/candlelight/candlelight_banner.png',
          search: 'completionist banner reward foods advancements tooltip candlelight',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `The Completionist Banner is awarded to players who have crafted all different Candlelight Foods.

To receive the respective advancements, you need all required items in your inventory at the same time.`,
          detailsBullets: [
            'Reward for crafting all Candlelight Foods',
            'Tracked through advancements',
            'Includes a special thank you tooltip'
          ]
        }
      ]
    },

    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Everyday items, ingredients, and tools used across cooking, writing, gifting, and outfits.',
      entries: [
        {
          id: 'typewriter',
          title: 'Typewriter',
          namespace_id: 'candlelight:typewriter_iron',
          subtitle: 'A writing block for longer letters. Available in Iron and Gold.',
          icon: '/assets/icons/candlelight/typewriter_iron.png',
          search: 'typewriter writing letters note paper iron gold candlelight',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click the Typewriter while holding Note Paper to insert it.

Right click again to open the interface. When finished, sign the letter and remove it with another right click.`,
          detailsBullets: [
            'Right click with Note Paper to insert',
            'Right click to open the interface',
            'Sign and remove the letter via interaction',
            'Iron and Gold variants'
          ],
          items: [
            {
              id: 'typewriter_iron',
              title: 'Iron Typewriter',
              namespace_id: 'candlelight:typewriter_iron',
              subtitle: '',
              icon: '/assets/icons/candlelight/typewriter_iron.png',
              search: 'typewriter iron'
            },
            {
              id: 'typewriter_gold',
              title: 'Gold Typewriter',
              namespace_id: 'candlelight:typewriter_gold',
              subtitle: '',
              icon: '/assets/icons/candlelight/typewriter_gold.png',
              search: 'typewriter gold'
            }
          ]
        },
        {
          id: 'note_paper',
          title: 'Note Paper',
          namespace_id: 'candlelight:note_paper*',
          subtitle: 'Write short notes and messages.',
          icon: '/assets/icons/candlelight/note_paper.png',
          search: 'note paper writable written candlelight typewriter',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Note Paper can be written on directly or processed using a Typewriter.

Writable Note Paper allows you to enter and sign a short message, which then turns into Written Note Paper.

Written notes can be used as decoration, shared with other players, or used as the basis for creating letters.`,
          detailsBullets: [
            'Writable and non writable note paper variants',
            'Write notes directly or using a Typewriter',
            'Written notes can be shared',
            'Notepaper can be placed'
          ],
          items: [
            {
              id: 'note_paper',
              title: 'Note Paper',
              subtitle: 'Blank paper used for writing.',
              icon: '/assets/icons/candlelight/note_paper.png',
              search: 'note paper blank'
            },
            {
              id: 'note_paper_writeable',
              title: 'Writable Note Paper',
              subtitle: 'Allows you to write and sign a note.',
              icon: '/assets/icons/candlelight/note_paper_writeable.png',
              search: 'writable note paper'
            },
            {
              id: 'note_paper_written',
              title: 'Written Note Paper',
              subtitle: 'A finished written note.',
              icon: '/assets/icons/candlelight/note_paper_written.png',
              search: 'written note paper'
            }
          ]
        },
        {
          id: 'letter',
          title: 'Letter',
          namespace_id: 'candlelight:letter_*',
          subtitle: 'Write, seal, and exchange letters with other players.',
          icon: '/assets/icons/candlelight/letter_open.png',
          search: 'letter note paper writable sealed love letter candlelight message',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Letters are used to send written messages to other players.

To create a letter, hold an open Letter and right-click to open the letter interface.

Place a Written Note Paper into the note slot and the open Letter into the envelope slot. Enter a recipient name, then seal the letter to create a Sealed Letter.

Sealed Letters can be gifted or shared with other players.

Love Letters work the same way, but use their own themed variants. When a Love Letter is opened, heart particles appear briefly.`,
          detailsBullets: [
            'Hold an open Letter and right-click to open the interface',
            'Insert Written Note Paper and an open Letter',
            'Enter a recipient and seal the letter',
            'Creates a Sealed Letter that can be gifted or shared',
            'Love Letters spawn heart particles when opened'
          ],
          items: [
            {
              id: 'love_letter_closed',
              title: 'Sealed love Letter',
              icon: '/assets/icons/candlelight/love_letter.png',
              search: 'sealed love letter closed envelope'
            },
            {
              id: 'letter_closed',
              title: 'Sealed Letter',
              icon: '/assets/icons/candlelight/letter_closed.png',
              search: 'sealed letter closed envelope'
            }
          ]
        },
        {
          id: 'gold_ring',
          title: 'Gold Ring',
          namespace_id: 'candlelight:gold_ring',
          subtitle: 'A wearable ring that grants +2 Luck.',
          icon: '/assets/icons/candlelight/gold_ring.png',
          search: 'gold ring +2 luck accessory candlelight',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `The Gold Ring grants +2 Luck while worn.`,
          detailsBullets: ['Grants +2 Luck']
        },
        {
          id: 'chefs_attire',
          title: 'Chef’s Attire',
          namespace_id: '',
          subtitle: 'Cooking themed outfit pieces.',
          icon: '/assets/icons/candlelight/cooking_hat.png',
          search: 'chef attire cooking hat chefs jacket chefs pants chefs boots candlelight',
          details: true,
          detailsTitle: 'Included Pieces',
          detailsText: ``,
          items: [
            {
              id: 'cooking_hat',
              title: 'Cooking Hat',
              namespace_id: 'candlelight:cooking_hat',
              subtitle: '',
              icon: '/assets/icons/candlelight/cooking_hat.png',
              search: 'cooking hat'
            },
            {
              id: 'chefs_jacket',
              title: "Chef's Jacket",
              namespace_id: 'candlelight:chefs_jacket',
              subtitle: '',
              icon: '/assets/icons/candlelight/chefs_jacket.png',
              search: 'chefs jacket'
            },
            {
              id: 'chefs_pants',
              title: "Chef's Pants",
              namespace_id: 'candlelight:chefs_pants',
              subtitle: '',
              icon: '/assets/icons/candlelight/chefs_pants.png',
              search: 'chefs pants'
            },
            {
              id: 'chefs_boots',
              title: "Chef's Boots",
              namespace_id: 'candlelight:chefs_boots',
              subtitle: '',
              icon: '/assets/icons/candlelight/chefs_boots.png',
              search: 'chefs boots'
            }
          ]
        },
        {
          id: 'evening_wear',
          title: 'Evening Wear',
          namespace_id: '',
          subtitle: 'Formal outfit pieces.',
          icon: '/assets/icons/candlelight/dress.png',
          search: 'evening wear flower crown dress shirt formal shirt trousers vest necktie candlelight',
          details: true,
          detailsTitle: 'Included Pieces',
          detailsText: ``,
          items: [
            {
              id: 'flower_crown',
              title: 'Flower Crown',
              namespace_id: 'candlelight:flower_crown',
              subtitle: '',
              icon: '/assets/icons/candlelight/flower_crown.png',
              search: 'flower crown'
            },
            {
              id: 'dress',
              title: 'Dress',
              namespace_id: 'candlelight:dress',
              subtitle: '',
              icon: '/assets/icons/candlelight/dress.png',
              search: 'dress'
            },
            {
              id: 'shirt',
              title: 'Shirt',
              namespace_id: 'candlelight:shirt',
              subtitle: '',
              icon: '/assets/icons/candlelight/shirt.png',
              search: 'shirt'
            },
            {
              id: 'formal_shirt',
              title: 'Formal Shirt',
              namespace_id: 'candlelight:formal_shirt',
              subtitle: '',
              icon: '/assets/icons/candlelight/formal_shirt.png',
              search: 'formal shirt'
            },
            {
              id: 'trousers_and_vest',
              title: 'Trousers and Vest',
              namespace_id: 'candlelight:trousers_and_vest',
              subtitle: '',
              icon: '/assets/icons/candlelight/trousers_and_vest.png',
              search: 'trousers and vest'
            },
            {
              id: 'necktie',
              title: 'Necktie',
              namespace_id: 'candlelight:necktie',
              subtitle: '',
              icon: '/assets/icons/candlelight/necktie.png',
              search: 'necktie'
            }
          ]
        }
      ]
    },

    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'Meals, salads, soups, and other food items.',
      entries: [
        {
          id: 'food',
          title: 'Food',
          namespace_id: '',
          subtitle: 'Prepared in the Cooking Pot or Cooking Pan. Many meals can be eaten multiple times.',
          icon: '/assets/icons/candlelight/lasagne.png',
          search: 'candlelight food meals plated soups pasta steak salad',
          details: true,
          detailsTitle: 'Notes',
          detailsText: `Most Candlelight food is prepared in the Cooking Pot or Cooking Pan.

If a meal is prepared using a potion or wine, it inherits the effect from the used drink.`,
          detailsBullets: [
            'Prepared in Cooking Pot or Cooking Pan',
            'Can inherit effects from used drinks',
            'Many meals can be eaten multiple times'
          ],
          items: [
            {
              id: 'tomato_soup',
              title: 'Tomato Soup',
              subtitle: '',
              icon: '/assets/icons/candlelight/tomato_soup.png',
              search: 'tomato soup'
            },
            {
              id: 'mushroom_soup',
              title: 'Mushroom Soup',
              subtitle: '',
              icon: '/assets/icons/candlelight/mushroom_soup.png',
              search: 'mushroom soup'
            },
            {
              id: 'pasta_with_mozzarella',
              title: 'Pasta With Mozzarella',
              subtitle: '',
              icon: '/assets/icons/candlelight/pasta_with_mozzarella.png',
              search: 'pasta mozzarella'
            },
            {
              id: 'bolognese',
              title: 'Bolognese',
              subtitle: '',
              icon: '/assets/icons/candlelight/bolognese.png',
              search: 'bolognese'
            },
            {
              id: 'pasta_with_bolognese',
              title: 'Pasta With Bolognese',
              subtitle: '',
              icon: '/assets/icons/candlelight/pasta_with_bolognese.png',
              search: 'pasta bolognese'
            },
            {
              id: 'beef_with_mushroom_in_wine_and_potatoes',
              title: 'Beef With Mushroom In Wine And Potatoes',
              subtitle: '',
              icon: '/assets/icons/candlelight/beef_with_mushroom_in_wine_and_potatoes.png',
              search: 'beef mushroom wine potatoes'
            },
            {
              id: 'roastbeef_with_glazed_carrots',
              title: 'Roastbeef With Glazed Carrots',
              subtitle: '',
              icon: '/assets/icons/candlelight/roastbeef_with_glazed_carrots.png',
              search: 'roastbeef glazed carrots'
            },
            {
              id: 'roasted_lamb_with_lettuce',
              title: 'Roasted Lamb With Lettuce',
              subtitle: '',
              icon: '/assets/icons/candlelight/roasted_lamb_with_lettuce.png',
              search: 'roasted lamb'
            },
            {
              id: 'fillet_steak',
              title: 'Fillet Steak',
              subtitle: '',
              icon: '/assets/icons/candlelight/fillet_steak.png',
              search: 'fillet steak'
            },
            {
              id: 'chicken_alfredo',
              title: 'Chicken Alfredo',
              subtitle: '',
              icon: '/assets/icons/candlelight/chicken_alfredo.png',
              search: 'chicken alfredo'
            },
            {
              id: 'salmon_on_white_wine',
              title: 'Salmon On White Wine',
              subtitle: '',
              icon: '/assets/icons/candlelight/salmon_on_white_wine.png',
              search: 'salmon white wine'
            },
            {
              id: 'chicken_with_vegetables',
              title: 'Chicken With Vegetables',
              subtitle: '',
              icon: '/assets/icons/candlelight/chicken_with_vegetables.png',
              search: 'chicken vegetables'
            },
            {
              id: 'tropical_fish_supreme',
              title: 'Tropical Fish Supreme',
              subtitle: '',
              icon: '/assets/icons/candlelight/tropical_fish_supreme.png',
              search: 'tropical fish'
            },
            {
              id: 'lasagne',
              title: 'Lasagne',
              subtitle: '',
              icon: '/assets/icons/candlelight/lasagne.png',
              search: 'lasagne'
            },
            {
              id: 'beef_wellington',
              title: 'Beef Wellington',
              subtitle: '',
              icon: '/assets/icons/candlelight/beef_wellington.png',
              search: 'beef wellington'
            },
            {
              id: 'pork_ribs',
              title: 'Pork Ribs',
              subtitle: '',
              icon: '/assets/icons/candlelight/pork_ribs.png',
              search: 'pork ribs'
            },
            {
              id: 'fresh_garden_salad',
              title: 'Fresh Garden Salad',
              subtitle: '',
              icon: '/assets/icons/candlelight/fresh_garden_salad.png',
              search: 'fresh garden salad'
            },
            {
              id: 'tomato_mozzarella_salad',
              title: 'Tomato Mozzarella Salad',
              subtitle: '',
              icon: '/assets/icons/candlelight/tomato_mozzarella_salad.png',
              search: 'tomato mozzarella salad'
            },
            { id: 'salad', title: 'Salad', subtitle: '', icon: '/assets/icons/candlelight/salad.png', search: 'salad' },
            {
              id: 'beetroot_salad',
              title: 'Beetroot Salad',
              subtitle: '',
              icon: '/assets/icons/candlelight/beetroot_salad.png',
              search: 'beetroot salad'
            },
            {
              id: 'pasta_with_lettuce',
              title: 'Pasta With Lettuce',
              subtitle: '',
              icon: '/assets/icons/candlelight/pasta_with_lettuce.png',
              search: 'pasta'
            },
            {
              id: 'khinkali',
              title: 'Khinkali',
              subtitle: '',
              icon: '/assets/icons/candlelight/khinkali.png',
              search: 'khinkali'
            },
            {
              id: 'omelet',
              title: 'Omelet',
              subtitle: '',
              icon: '/assets/icons/candlelight/omelet.png',
              search: 'omelet'
            },
            {
              id: 'harvest_plate',
              title: 'Harvest Plate',
              subtitle: '',
              icon: '/assets/icons/candlelight/harvest_plate.png',
              search: 'harvest plate'
            },
            {
              id: 'chocolate_mousse',
              title: 'Chocolate Mousse',
              subtitle: '',
              icon: '/assets/icons/candlelight/chocolate_mousse.png',
              search: 'chocolate mousse'
            },
            {
              id: 'beef_tartare',
              title: 'Beef Tartare',
              subtitle: '',
              icon: '/assets/icons/candlelight/beef_tartare.png',
              search: 'beef tartare'
            },
            {
              id: 'chicken_teriyaki',
              title: 'Chicken Teriyaki',
              subtitle: '',
              icon: '/assets/icons/candlelight/chicken_teriyaki.png',
              search: 'chicken teriyaki'
            },
            {
              id: 'mozzarella',
              title: 'Mozzarella',
              subtitle: '',
              icon: '/assets/icons/candlelight/mozzarella.png',
              search: 'mozzarella'
            }
          ]
        }
      ]
    },

    {
      id: 'crops',
      title: 'Crops, Wild Plants, and Worldgen',
      subtitle: 'Crops and plants found growing naturally in the world, ready to be harvested or cultivated.',
      entries: [
        {
          id: 'rose',
          title: 'Rose',
          namespace_id: 'candlelight:rose',
          subtitle: 'Roses can generate naturally in specific biomes.',
          icon: '/assets/icons/candlelight/rose.png',
          search: 'rose flower worldgen biomes forest plains swamp birch meadow sunflower plains river candlelight',
          details: true,
          detailsTitle: 'Biomes',
          detailsText: `Roses can generate naturally in the following biomes.`,
          detailsBullets: [
            'minecraft:forest',
            'minecraft:plains',
            'minecraft:swamp',
            'minecraft:birch_forest',
            'minecraft:meadow',
            'minecraft:sunflower_plains',
            'minecraft:river'
          ]
        }
      ]
    },

    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Small but meaningful tweaks and additions that subtly enhance gameplay and atmosphere.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle:
            'Most gameplay features of Candlelight can be adjusted via a configuration file, usually located at `config/candlelight.json`.',
          icon: '/assets/icons/misc/config.png',
          search: 'config configuration settings options json candlelight'
        },
        {
          id: 'chef_zombies',
          title: 'Chef Zombies',
          subtitle: 'Sometimes zombies spawn wearing a cooking hat.',
          icon: '/assets/icons/misc/zombie.png',
          search: 'chef zombie candlelight cooking hat spawn'
        }
      ]
    }
  ]
}
