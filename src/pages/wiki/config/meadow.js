export default {
  slug: 'meadow',
  title: 'Meadow',
  logo: '/assets/mod-logos/meadow.png',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Alpine building, furniture, processing, and a full cheese system',
  aboutText: `Welcome to the Meadow Wiki.

This is your home for blocks, items, entities, and mechanics added by Meadow.

Meadow focuses on alpine themed building materials, practical furniture, functional processing blocks, and a structured cheese and food system.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Workstations and interactive blocks used for cooking, processing, and storage.',
      entries: [
{
  id: 'cooking_stations',
  title: 'Cooking',
subtitle: 'A sturdy cookpot for preparing hearty meals.',
  icon: '/assets/icons/meadow/cookpot.png',
  search: 'cookpot cooking frame meals water heat slots output recipes meadow',
  details: true,
  detailsMiniGallery: true,
  detailsTitle: 'Usage',
  detailsText: `Meadow features two cooking stations: the Cookpot and the Cooking Frame.

The Cookpot has four Ingredient Input Slots, one Water Slot, and one Output Slot. Recipes require specific ingredients and a defined amount of water. It requires a valid heat source to operate.

The Cooking Frame functions similarly in terms of recipes and slots, but unlike the Cookpot it does not require a heat source. Instead, it occupies more space.`,
  detailsBullets: [
    'Four Ingredient Input Slots',
    'One Water Slot and one Output Slot',
    'Recipes require specific ingredients and water amounts',
    'Cookpot requires heat',
    'Cooking Frame does not require heat but needs more space'
  ],
  items: [
    {
      id: 'cookpot',
      title: 'Cookpot',
      namespace_id: 'meadow:cookpot',
      icon: '/assets/icons/meadow/cookpot.png'
    },
    {
      id: 'cooking_frame',
      title: 'Cooking Frame',
      namespace_id: 'meadow:cooking_frame',
      icon: '/assets/icons/meadow/cooking_frame.png'
    }
  ]
},
{
  id: 'fondue_pot',
  title: 'Fondue Pot',
  namespace_id: 'meadow:fondue_pot',
subtitle: 'For melting cheese and serving it on a stick.',
  icon: '/assets/icons/meadow/fondue_pot.png',
  search: 'fondue pot cheese wheel heat source bread stick melted cheese meadow',
  details: true,
  detailsTitle: 'Usage',
  detailsText: `The Fondue Pot must be placed above a valid heat source to operate.

It can be filled with a [[Cheese Wheel|cheese_wheel]]. Once filled, right-click with Bread to receive cheese on a stick.

When active, it displays bubbling and steam effects.`,
  detailsBullets: [
    'Requires a valid heat source',
    'Can be filled with a Cheese Wheel',
    'Right-click with Bread to receive cheese on a stick',
    'Shows bubbling and steam while active'
  ]
},
    {
      id: 'cheese_form',
      title: 'Cheese Form',
      namespace_id: 'meadow:cheese_form',
      subtitle: 'A processing station used to form cheese.',
      icon: '/assets/icons/meadow/cheese_form.png',
      search: 'cheese form processing station rennet milk inputs output',
      details: true,
      detailsTitle: 'Usage',
      detailsText: `The Cheese Form features two input slots and one output slot.

    Insert the correct ingredients into the input slots to begin processing. After a short time, the finished cheese can be collected from the output slot.`,
      detailsBullets: [
        'Two input slots',
        'One output slot',
        'Insert correct ingredients to start processing',
        'Collect the finished cheese from the output slot'
      ]
    },
        {
          id: 'woodcutter',
          title: 'Woodcutter',
          namespace_id: 'meadow:woodcutter',
          subtitle: 'A station for processing wood variants.',
          icon: '/assets/icons/meadow/woodcutter.png',
          search: 'woodcutter station wood variants processing',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Woodcutter processes wood into matching variants.

Insert the required wood input and retrieve the crafted result.`,
          detailsBullets: [
            'Processes wood into variants',
            'Insert inputs and retrieve outputs'
          ]
        },
        {
          id: 'felting_needle',
          title: 'Felting Needle',
          namespace_id: 'meadow:felting_needle',
          subtitle: 'A tool used to produce wool through felting.',
          icon: '/assets/icons/meadow/felting_needle.png',
          search: 'felting needle wool tool offhand right click hold produce wool',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hold a matching wool material in your offhand and the Felting Needle in your main hand.

        Hold right-click to begin felting. After a short time, you will receive the corresponding [[Wool|wool]] block.`,
          detailsBullets: [
            'Requires specific wool material in offhand',
            'Hold right-click to start felting',
            'Produces the matching Wool block'
          ]
        },

      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Building blocks, interiors, and decorative pieces.',
      entries: [
        {
          id: 'limestone',
          title: 'Limestone',
          namespace_id: 'meadow:limestone',
          subtitle: 'A complete stone building set including all standard block variants.',
          icon: '/assets/icons/meadow/limestone_bricks.png',
          search: 'limestone set bricks cobbled mossy cracked chiseled polished stairs slab wall',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants',
          detailsText: `Limestone is a complete stone building set covering standard structural variants.

In the world, Limestone can partially replace regular stone in Meadow Biomes.`,
          detailsBullets: [
         'Includes all standard stone block variants',
            'Can partially replace regular stone in Snowy Plains and Grove biomes',
          ],
          items: [
            { id: 'limestone', title: 'Limestone', namespace_id: 'meadow:limestone', icon: '/assets/icons/meadow/limestone.png' },
            { id: 'cobbled_limestone', title: 'Cobbled Limestone', namespace_id: 'meadow:cobbled_limestone', icon: '/assets/icons/meadow/cobbled_limestone.png' },
            { id: 'limestone_bricks', title: 'Limestone Bricks', namespace_id: 'meadow:limestone_bricks', icon: '/assets/icons/meadow/limestone_bricks.png' },
            { id: 'mossy_cobbled_limestone', title: 'Mossy Cobbled Limestone', namespace_id: 'meadow:mossy_cobbled_limestone', icon: '/assets/icons/meadow/mossy_cobbled_limestone.png' },
            { id: 'mossy_limestone_bricks', title: 'Mossy Limestone Bricks', namespace_id: 'meadow:mossy_limestone_bricks', icon: '/assets/icons/meadow/mossy_limestone_bricks.png' },
            { id: 'cracked_limestone_bricks', title: 'Cracked Limestone Bricks', namespace_id: 'meadow:cracked_limestone_bricks', icon: '/assets/icons/meadow/cracked_limestone_bricks.png' },
            { id: 'chiseled_limestone', title: 'Chiseled Limestone', namespace_id: 'meadow:chiseled_limestone', icon: '/assets/icons/meadow/chiseled_limestone.png' },
            { id: 'polished_limestone', title: 'Polished Limestone', namespace_id: 'meadow:polished_limestone', icon: '/assets/icons/meadow/polished_limestone.png' }
          ]
        },
        {
          id: 'pine',
          title: 'Pine',
          namespace_id: 'meadow:pine_log',
          subtitle: 'A complete wood building set used across Meadow builds.',
          icon: '/assets/icons/meadow/pine_log.png',
          search: 'pine wood set log planks door trapdoor fence gate stairs slab',
          details: true,
          detailsMiniGallery: true,
detailsTitle: 'Included Blocks',
detailsText: `Pine is a complete wood building set used across Meadow.

It represents the native pine trees that generate naturally in Meadow regions and grow from [[Pine Saplings|pine_sapling]].

Reclaimed Pine Planks can be crafted from Pine Planks using the [[Woodcutter|woodcutter]].`,
          detailsBullets: [
            'Full pine wood set with matching variants',
            'Used across furniture and building blocks'
          ],
          items: [
            { id: 'pine_planks', title: 'Pine Planks', namespace_id: 'meadow:pine_planks', icon: '/assets/icons/meadow/pine_planks.png' },
            { id: 'pine_door', title: 'Pine Door', namespace_id: 'meadow:pine_door', icon: '/assets/icons/meadow/pine_door.png' },
            { id: 'pine_trapdoor', title: 'Pine Trapdoor', namespace_id: 'meadow:pine_trapdoor', icon: '/assets/icons/meadow/pine_trapdoor.png' },
                    { id: 'reclaimed_pine_planks', title: 'Reclaimed Pine Planks', namespace_id: 'meadow:reclaimed_pine_planks', icon: '/assets/icons/meadow/reclaimed_pine_planks.png' },
                        { id: 'reclaimed_pine_door', title: 'Reclaimed Pine Door', namespace_id: 'meadow:reclaimed_pine_door', icon: '/assets/icons/meadow/reclaimed_pine_door.png' },
                        { id: 'reclaimed_pine_trapdoor', title: 'Reclaimed Pine Trapdoor', namespace_id: 'meadow:reclaimed_pine_trapdoor', icon: '/assets/icons/meadow/reclaimed_pine_trapdoor.png' }

          ]
        },
        {
          id: 'bed',
          title: 'Beds',
          namespace_id: 'meadow:rustic_bed',
subtitle: 'Bed variants crafted from matching [[Wool|wool]].',
          icon: '/assets/icons/meadow/rustic_bed.png',
          search: 'rustic linen jacquard plaid chambray tweed warped straw bed meadow',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants',
detailsText: `Multiple bed variants in different [[Wool|wool]] variants, plus a straw bed that may or may not come with complimentary back pain.`,
          items: [
            { id: 'rustic_bed', title: 'Rustic Bed', namespace_id: 'meadow:rustic_bed', icon: '/assets/icons/meadow/rustic_bed.png' },
            { id: 'linen_bed', title: 'Linen Bed', namespace_id: 'meadow:linen_bed', icon: '/assets/icons/meadow/linen_bed.png' },
            { id: 'jacquard_bed', title: 'Jacquard Bed', namespace_id: 'meadow:jacquard_bed', icon: '/assets/icons/meadow/jacquard_bed.png' },
            { id: 'plaid_bed', title: 'Plaid Bed', namespace_id: 'meadow:plaid_bed', icon: '/assets/icons/meadow/plaid_bed.png' },
            { id: 'chambray_bed', title: 'Chambray Bed', namespace_id: 'meadow:chambray_bed', icon: '/assets/icons/meadow/chambray_bed.png' },
            { id: 'tweed_bed', title: 'Tweed Bed', namespace_id: 'meadow:tweed_bed', icon: '/assets/icons/meadow/tweed_bed.png' },
            { id: 'warped_bed', title: 'Warped Bed', namespace_id: 'meadow:warped_bed', icon: '/assets/icons/meadow/warped_bed.png' },
            { id: 'straw_bed', title: 'Straw Bed', namespace_id: 'meadow:straw_bed', icon: '/assets/icons/meadow/straw_bed.png' }
          ]
        },
        {
          id: 'pine_sofa',
          title: 'Pine Sofa',
          namespace_id: 'meadow:pine_sofa_rustic',
subtitle: 'A decorative pine sofa available in multiple [[Wool|wool]] variants.',
          icon: '/assets/icons/meadow/pine_sofa_rustic.png',
          search: 'pine sofa rustic linen jacquard plaid chambray tweed warped meadow',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants',
detailsText: `The Pine Sofa is available in multiple [[Wool|wool]] variants to match different interiors.`,
          items: [
            { id: 'pine_sofa_rustic', title: 'Rustic', namespace_id: 'meadow:pine_sofa_rustic', icon: '/assets/icons/meadow/pine_sofa_rustic.png' },
            { id: 'pine_sofa_linen', title: 'Linen', namespace_id: 'meadow:pine_sofa_linen', icon: '/assets/icons/meadow/pine_sofa_linen.png' },
            { id: 'pine_sofa_jacquard', title: 'Jacquard', namespace_id: 'meadow:pine_sofa_jacquard', icon: '/assets/icons/meadow/pine_sofa_jacquard.png' },
            { id: 'pine_sofa_plaid', title: 'Plaid', namespace_id: 'meadow:pine_sofa_plaid', icon: '/assets/icons/meadow/pine_sofa_plaid.png' },
            { id: 'pine_sofa_chambray', title: 'Chambray', namespace_id: 'meadow:pine_sofa_chambray', icon: '/assets/icons/meadow/pine_sofa_chambray.png' },
            { id: 'pine_sofa_tweed', title: 'Tweed', namespace_id: 'meadow:pine_sofa_tweed', icon: '/assets/icons/meadow/pine_sofa_tweed.png' },
            { id: 'pine_sofa_warped', title: 'Warped', namespace_id: 'meadow:pine_sofa_warped', icon: '/assets/icons/meadow/pine_sofa_warped.png' }
          ]
        },
        {
          id: 'pine_chair',
          title: 'Pine Chair',
          namespace_id: 'meadow:pine_chair',
          subtitle: 'Simple seating.',
          icon: '/assets/icons/meadow/pine_chair.png',
          search: 'pine chair seating meadow'
        },
{
  id: 'pine_table',
  title: 'Pine Table',
  namespace_id: 'meadow:pine_table',
  subtitle: 'Connects seamlessly with adjacent [[Pine Dresser|pine_dresser]] blocks.',
  icon: '/assets/icons/meadow/pine_table.png',
  search: 'pine table meadow connect'
},
{
  id: 'pine_dresser',
  title: 'Pine Dresser',
  namespace_id: 'meadow:pine_dresser',
  subtitle: 'Connects seamlessly with adjacent [[Pine Table|pine_table]] blocks.',
  icon: '/assets/icons/meadow/pine_dresser.png',
  search: 'pine dresser storage meadow connect'
},
        {
          id: 'pine_wardrobe',
          title: 'Pine Wardrobe',
          namespace_id: 'meadow:pine_wardrobe',
          subtitle: 'A tall two-block wardrobe that stores armor pieces.',
          icon: '/assets/icons/meadow/pine_wardrobe.png',
          search: 'wardrobe pine armor storage tall furniture meadow',
          details: true,
          detailsTitle: 'Armor Storage',
          detailsText: `Use an armor piece on the Pine Wardrobe to store it.

Sneak-use to take stored items back out.

Use without an item to open and close it.`,
          detailsBullets: [
            'Stores helmet, chestplate, leggings, and boots',
            'Place armor by using it on the Wardrobe',
            'Sneak-use to retrieve stored items',
            'Use without an item to open and close'
          ]
        },
        {
          id: 'pine_cabinet',
          title: 'Pine Cabinet',
          namespace_id: 'meadow:pine_cabinet',
          subtitle: 'A storage block for keeping supplies close and organized.',
          icon: '/assets/icons/meadow/pine_cabinet.png',
          search: 'cabinet storage meadow'
        },
        {
          id: 'pine_wall_cabinet',
          title: 'Pine Wall Cabinet',
          namespace_id: 'meadow:pine_wall_cabinet',
          subtitle: 'Wall mounted storage to free up floor space.',
          icon: '/assets/icons/meadow/pine_wall_cabinet.png',
          search: 'wall cabinet storage meadow'
        },
        {
          id: 'pine_cheese_rack',
          title: 'Pine Cheese Rack',
          namespace_id: 'meadow:pine_cheese_rack',
          subtitle: 'A functional rack for storing cheese wheels.',
          icon: '/assets/icons/meadow/pine_cheese_rack.png',
          search: 'pine cheese rack cheese wheel storage block',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Pine Cheese Rack allows you to place [[Cheese Wheel|cheese_wheel]] blocks directly onto it.

        Interact to insert and retrieve cheese wheels.`,
          detailsBullets: [
            'Accepts Cheese Wheel blocks',
            'Used to store placed cheese wheels',
            'Interact to insert and remove blocks'
          ]
        },
        {
          id: 'windows',
          title: 'Windows',
subtitle: 'Window variants available as full blocks and panes.',
          icon: '/assets/icons/meadow/pine_window.png',
          search: 'window pane artisan ornate pine meadow glass',
          details: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Multiple window styles used across alpine builds and interiors.`,
          items: [
            { id: 'pine_window', title: 'Pine Window', namespace_id: 'meadow:pine_window', icon: '/assets/icons/meadow/pine_window.png' },
            { id: 'pine_window_pane', title: 'Pine Window Pane', namespace_id: 'meadow:pine_window_pane', icon: '/assets/icons/meadow/pine_window_pane.png' },
            { id: 'artisan_glass_window', title: 'Artisan Glass Window', namespace_id: 'meadow:artisan_glass_window', icon: '/assets/icons/meadow/artisan_glass_window.png' },
            { id: 'artisan_glass_window_pane', title: 'Artisan Glass Window Pane', namespace_id: 'meadow:artisan_glass_window_pane', icon: '/assets/icons/meadow/artisan_glass_window_pane.png' },
            { id: 'ornate_glass_window', title: 'Ornate Glass Window', namespace_id: 'meadow:ornate_glass_window', icon: '/assets/icons/meadow/ornate_glass_window.png' },
            { id: 'ornate_glass_window_pane', title: 'Ornate Glass Window Pane', namespace_id: 'meadow:ornate_glass_window_pane', icon: '/assets/icons/meadow/ornate_glass_window_pane.png' }
          ]
        },
        {
          id: 'pine_shutters',
          title: 'Pine Shutters',
          subtitle: 'Decorative shutters that can be opened and closed with right-click.',
          icon: '/assets/icons/meadow/pine_shutter.png',
          search: 'pine shutters window shutters open close right click decoration'
        },
{
  id: 'tiled_stove',
  title: 'Tiled Stove',
  namespace_id: 'meadow:stove_tiles',
  subtitle: 'A modular alpine masonry stove system with functional variants.',
  icon: '/assets/icons/meadow/stove_tiles.png',
  search: 'tiled stove fireplace smoker bench alpine heat connected lit cooking seating',
  details: true,
  detailsTitle: 'Structure and Function',
  detailsText: `The Tiled Stove system consists of multiple connected blocks, each with its own function.

The Fireplace can be ignited using Flint and Steel or a Fire Charge. When lit, it transfers heat to all connected stove parts.

Stove Tiles become lit when connected to an active Fireplace and can be used for cooking while heated.

The Smoker variant functions as a working Smoker block.

The Bench variant allows players to sit on it.

All connected stove parts share their heat state while linked.`,
  items: [
    { id: 'stove_tiles', title: 'Stove Tiles', namespace_id: 'meadow:stove_tiles', icon: '/assets/icons/meadow/stove_tiles.png' },
    { id: 'stove_tiles_wood', title: 'Stove Tiles Fireplace', namespace_id: 'meadow:stove_tiles_wood', icon: '/assets/icons/meadow/stove_tiles_wood.png' },
    { id: 'stove_tiles_lid', title: 'Stove Tiles Smoker', namespace_id: 'meadow:stove_tiles_lid', icon: '/assets/icons/meadow/stove_tiles_lid.png' },
    { id: 'stove_tiles_bench', title: 'Stove Tiles Bench', namespace_id: 'meadow:stove_tiles_bench', icon: '/assets/icons/meadow/stove_tiles_bench.png' }
  ]
},
{
  id: 'stone_furniture',
  title: 'Stone Furniture',
  namespace_id: 'meadow:stone_table',
  subtitle: 'Simple stone seating and surfaces crafted from [[Limestone|limestone]].',
  icon: '/assets/icons/meadow/stone_table.png',
  search: 'stone table bench limestone meadow',
  details: true,
  detailsTitle: 'Included Blocks',
  detailsText: `Stone furniture pieces crafted from [[Limestone|limestone]].`,
  items: [
    { id: 'stone_table', title: 'Stone Table', namespace_id: 'meadow:stone_table', icon: '/assets/icons/meadow/stone_table.png' },
    { id: 'stone_bench', title: 'Stone Bench', namespace_id: 'meadow:stone_bench', icon: '/assets/icons/meadow/stone_bench.png' }
  ]
},
{
  id: 'wooden_cauldron',
  title: 'Wooden Cauldron',
  namespace_id: 'meadow:wooden_cauldron',
  subtitle: 'A simple wooden cauldron for everyday use. It can hold water and powder snow, but not lava.',
    icon: '/assets/icons/meadow/wooden_cauldron.png',
  search: 'wooden cauldron water powder snow no lava'
},
{
  id: 'firewood',
  title: 'Firewood',
  namespace_id: 'meadow:firewood',
  subtitle: 'Stackable firewood used as a strong fuel source.',
  icon: '/assets/icons/meadow/firewood.png',
  search: 'firewood fuel stove fireplace smoker stackable',
  details: true,
  detailsTitle: 'Usage',
  detailsText: `Firewood can be placed in the world and stacked vertically.

It can also be used as an efficient fuel source in furnaces and stove related blocks.`,
  detailsBullets: [
    'Placeable and vertically stackable',
    'Efficient fuel source',
    'Usable in furnaces and stove systems'
  ]
},
{
id: 'flower_pots',
title: 'Flower Pots',
subtitle: 'Decorative elements for displaying flowers.',
  icon: '/assets/icons/meadow/wooden_flower_pot.png',
  search: 'wheelbarrow wooden flower pot wooden flower box small wooden flower pot small flowers tall flowers decoration',
  details: true,
  detailsBullets: [
    'All variants allow flowers to be placed inside',
    'Wheelbarrow, Small Wooden Flower Pot and Wooden Flower Box pots accept flowers tagged #minecraft:small_flowers',
    'Wooden Flower Pot also accepts flowers tagged #minecraft:tall_flowers'
  ],
  items: [
    { id: 'wheelbarrow', title: 'Wheelbarrow', namespace_id: 'meadow:wheelbarrow', icon: '/assets/icons/meadow/wheelbarrow.png' },
    { id: 'wooden_flower_pot', title: 'Wooden Flower Pot', namespace_id: 'meadow:wooden_flower_pot', icon: '/assets/icons/meadow/wooden_flower_pot.png' },
    { id: 'wooden_flower_box', title: 'Wooden Flower Box', namespace_id: 'meadow:wooden_flower_box', icon: '/assets/icons/meadow/wooden_flower_box.png' },
    { id: 'small_wooden_flower_pot', title: 'Small Wooden Flower Pot', namespace_id: 'meadow:small_wooden_flower_pot', icon: '/assets/icons/meadow/small_wooden_flower_pot.png' }
  ]
},
{
  id: 'wool',
  title: 'Wool',
  namespace_id: 'meadow:rustic_wool',
  subtitle: 'Wool blocks used for decoration and crafting.',
  icon: '/assets/icons/meadow/rustic_wool.png',
  search: 'rustic linen jacquard plaid chambray tweed warped wool meadow highland umbra warped cow felting',
  details: true,
  detailsMiniGallery: true,
  detailsTitle: 'Variants and Acquisition',
  detailsText: `Some variants can be obtained by shearing [[Highland Cattle|highland_cattle]], [[Umbra Cattle|umbra_cattle]], and [[Warped Cow|warped_cow]].

These Wool variants can also be produced through [[Felting|felting_needle]].`,
  items: [
    { id: 'rustic_wool', title: 'Rustic Wool', namespace_id: 'meadow:rustic_wool', icon: '/assets/icons/meadow/rustic_wool.png' },
    { id: 'linen', title: 'Linen', namespace_id: 'meadow:linen', icon: '/assets/icons/meadow/linen.png' },
    { id: 'jacquard_wool', title: 'Jacquard Wool', namespace_id: 'meadow:jacquard_wool', icon: '/assets/icons/meadow/jacquard_wool.png' },
    { id: 'plaid_wool', title: 'Plaid Wool', namespace_id: 'meadow:plaid_wool', icon: '/assets/icons/meadow/plaid_wool.png' },
    { id: 'chambray_wool', title: 'Chambray Wool', namespace_id: 'meadow:chambray_wool', icon: '/assets/icons/meadow/chambray_wool.png' },
    { id: 'tweed_wool', title: 'Tweed Wool', namespace_id: 'meadow:tweed_wool', icon: '/assets/icons/meadow/tweed_wool.png' },
    { id: 'warped_wool', title: 'Warped Wool', namespace_id: 'meadow:warped_wool', icon: '/assets/icons/meadow/warped_wool.png' }
  ]
},
{
  id: 'carpet',
  title: 'Carpet',
  namespace_id: 'meadow:rustic_carpet',
  subtitle: 'Carpet variants crafted from the matching [[Wool|wool]] blocks.',
  icon: '/assets/icons/meadow/rustic_carpet.png',
  search: 'rustic linen jacquard plaid chambray tweed warped carpet meadow wool',
  details: true,
  detailsMiniGallery: true,
  detailsTitle: 'Variants',
  detailsText: `Each carpet variant is crafted from its corresponding [[Wool|wool]] block.`,
  items: [
    { id: 'rustic_carpet', title: 'Rustic Carpet', namespace_id: 'meadow:rustic_carpet', icon: '/assets/icons/meadow/rustic_carpet.png' },
    { id: 'linen_carpet', title: 'Linen Carpet', namespace_id: 'meadow:linen_carpet', icon: '/assets/icons/meadow/linen_carpet.png' },
    { id: 'jacquard_carpet', title: 'Jacquard Carpet', namespace_id: 'meadow:jacquard_carpet', icon: '/assets/icons/meadow/jacquard_carpet.png' },
    { id: 'plaid_carpet', title: 'Plaid Carpet', namespace_id: 'meadow:plaid_carpet', icon: '/assets/icons/meadow/plaid_carpet.png' },
    { id: 'chambray_carpet', title: 'Chambray Carpet', namespace_id: 'meadow:chambray_carpet', icon: '/assets/icons/meadow/chambray_carpet.png' },
    { id: 'tweed_carpet', title: 'Tweed Carpet', namespace_id: 'meadow:tweed_carpet', icon: '/assets/icons/meadow/tweed_carpet.png' },
    { id: 'warped_carpet', title: 'Warped Carpet', namespace_id: 'meadow:warped_carpet', icon: '/assets/icons/meadow/warped_carpet.png' }
  ]
},
{
  id: 'camera',
  title: 'Camera',
  namespace_id: 'meadow:camera',
  subtitle: 'A decorative camera block.',
  icon: '/assets/icons/meadow/camera.png',
  search: 'camera decoration block'
},
{
  id: 'milk_can',
  title: 'Milk Can',
  namespace_id: 'meadow:milk_can',
  subtitle: 'A sturdy milk container that keeps fresh milk close at hand.',
  icon: '/assets/icons/meadow/milk_can.png',
  search: 'milk can milk bucket wooden milk bucket bucket wooden bucket cow fill level',
  details: true,
  detailsTitle: 'Usage',
  detailsText: `The Milk Can stores milk in four levels and serves as a small dairy reserve for your farm.

Pour milk in using a Milk Bucket or Wooden Milk Bucket. Use an empty Bucket or Wooden Bucket to draw milk back out.

If cows are nearby, the can will slowly refill itself over time until it is full.`,
  detailsBullets: [
    'Stores milk in 4 levels',
    'Fill with Milk Bucket or Wooden Milk Bucket',
    'Take milk with Bucket or Wooden Bucket',
    'Slowly refills when cows are within 3 blocks'
  ]
},
{
  id: 'oil_lantern',
  title: 'Oil Lantern',
  namespace_id: 'meadow:oil_lantern',
  subtitle: 'A rustic lantern providing light.',
  icon: '/assets/icons/meadow/oil_lantern.png',
  search: 'oil lantern rustic light decoration'
},
{
  id: 'doormat',
  title: 'Doormat',
  namespace_id: 'meadow:doormat',
  subtitle: 'A decorative floor mat that connects horizontally.',
  icon: '/assets/icons/meadow/doormat.png',
  search: 'doormat decoration floor horizontal connect'
},
{
  id: 'climbing_rope',
  title: 'Climbing Rope',
  namespace_id: 'meadow:climbing_rope',
  subtitle: 'Attachable rope that extends downward up to 12 blocks and can be climbed.',
  icon: '/assets/icons/meadow/climbing_rope.png',
  search: 'climbing rope attach underside extend 12 blocks climb',
  details: true,
  detailsTitle: 'Usage',
  detailsText: `The Climbing Rope can be attached to the underside of blocks.

It extends downward up to 12 blocks and can be climbed like a ladder.`
},
{
  id: 'watering_can',
  title: 'Watering Can',
  namespace_id: 'meadow:watering_can_item',
  subtitle: 'A refillable watering tool used to accelerate plant growth.',
  icon: '/assets/icons/meadow/watering_can.png',
  search: 'watering can water bone meal plant growth 25 uses',
  details: true,
  detailsTitle: 'Usage',
  detailsText: `The Watering Can can be filled with water.

By default, it provides 25 applications before needing to be refilled.

Using it on crops or plants applies a bone meal effect.`
},
{
  id: 'completionist_banner',
  title: 'Completionist Banner',
  namespace_id: 'meadow:meadow_banner',
  subtitle: 'A reward banner for completing all Meadow cheese recipes.',
  icon: '/assets/icons/meadow/completionist_banner.png',
  search: 'completionist banner reward cheese advancements meadow',
  details: true,
  detailsTitle: 'Reward',
  detailsText: `The Completionist Banner is awarded to players who have crafted all different [[Cheese|cheese_wheel]] variants.

While placed, it grants nearby players a temporary Haste effect.`,
  detailsBullets: [
    'Reward for crafting all cheese variants',
    'Tracked through advancements',
    'Grants Haste to nearby players when placed'
  ]
}
      ]
       },
       {
         id: 'items',
         title: 'Tools and Ingredients',
         subtitle: 'Everyday tools and core ingredients used across Meadow.',
         entries: [
           {
             id: 'alpine_salt',
             title: 'Alpine Salt',
             namespace_id: 'meadow:alpine_salt',
             subtitle: 'A mineral ingredient found in salt veins near [[Limestone|limestone]] formations.',
             icon: '/assets/icons/meadow/alpine_salt.png',
             search: 'alpine salt ingredient salt veins limestone worldgen meadow',
             details: true,
             detailsTitle: 'Salt Veins',
             detailsText: `Alpine Salt can be found in natural salt veins that generate in areas with [[Limestone|limestone]] formations.`
           },
     {
       id: 'rennet',
       title: 'Rennet',
       namespace_id: 'meadow:rennet',
       subtitle: 'A cheese-making ingredient used in the [[Cheese Form|cheese_form]].',
       icon: '/assets/icons/meadow/rennet.png',
       search: 'rennet ingredient cheese form cheese processing meadow cookpot',
       details: true,
       detailsTitle: 'Processing',
       detailsText: `Rennet is used in Meadow cheese workflows and is processed via the [[Cookpot|cookpot]].`
     },
           {
             id: 'buckets',
             title: 'Wooden Buckets',
             subtitle: 'Wooden bucket variants used for fluids and milk types.',
             icon: '/assets/icons/meadow/wooden_bucket.png',
             search: 'wooden bucket water milk buffalo goat sheep grain amethyst warped',
             details: true,
             detailsBullets: [
               'Used to milk Meadow livestock',
               'Produces specific filled milk variants',
               'Can collect water but not lava',
               'Some variants are processed in the [[Cookpot|cookpot]]'
             ],
             items: [
               { id: 'wooden_bucket', title: 'Wooden Bucket', namespace_id: 'meadow:wooden_bucket', icon: '/assets/icons/meadow/wooden_bucket.png' },
               { id: 'wooden_water_bucket', title: 'Wooden Water Bucket', namespace_id: 'meadow:wooden_water_bucket', icon: '/assets/icons/meadow/wooden_water_bucket.png' },
               { id: 'wooden_milk_bucket', title: 'Wooden Milk Bucket', namespace_id: 'meadow:wooden_milk_bucket', icon: '/assets/icons/meadow/wooden_milk_bucket.png' },
               { id: 'wooden_buffalo_milk_bucket', title: 'Wooden Buffalo Milk Bucket', namespace_id: 'meadow:wooden_buffalo_milk_bucket', icon: '/assets/icons/meadow/wooden_buffalo_milk_bucket.png' },
               { id: 'wooden_goat_milk_bucket', title: 'Wooden Goat Milk Bucket', namespace_id: 'meadow:wooden_goat_milk_bucket', icon: '/assets/icons/meadow/wooden_goat_milk_bucket.png' },
               { id: 'wooden_sheep_milk_bucket', title: 'Wooden Sheep Milk Bucket', namespace_id: 'meadow:wooden_sheep_milk_bucket', icon: '/assets/icons/meadow/wooden_sheep_milk_bucket.png' },
               { id: 'wooden_grain_milk_bucket', title: 'Wooden Grain Milk Bucket', namespace_id: 'meadow:wooden_grain_milk_bucket', icon: '/assets/icons/meadow/wooden_grain_milk_bucket.png' },
               { id: 'wooden_amethyst_milk_bucket', title: 'Wooden Amethyst Milk Bucket', namespace_id: 'meadow:wooden_amethyst_milk_bucket', icon: '/assets/icons/meadow/wooden_amethyst_milk_bucket.png' },
               { id: 'wooden_warped_milk_bucket', title: 'Wooden Warped Milk Bucket', namespace_id: 'meadow:wooden_warped_milk_bucket', icon: '/assets/icons/meadow/wooden_warped_milk_bucket.png' }
             ]
           }
         ]
       },
       {
         id: 'food',
         title: 'Food and Consumables',
         subtitle: 'Meals, slices, and other consumables added by Meadow.',
         entries: [
         {
           id: 'cheese_blocks',
           title: 'Cheese Wheels and Cakes',
           subtitle: 'Placeable cheese blocks that can be sliced piece by piece.',
           icon: '/assets/icons/meadow/cheese_wheel.png',
           search: 'cheese wheel cheesecake cheese tart slice cuts buffalo goat sheep grain amethyst warped',
           details: true,
           detailsTitle: 'Slicing and Variants',
         detailsText: `Cheese Wheels, Cheesecakes, and Cheese Tarts can be placed in the world and sliced up to four times.

         Each interaction drops the corresponding slice item and visually reduces the block until it is fully consumed.

         Cheese Wheels can also be placed on the [[Pine Cheese Rack|pine_cheese_rack]].`,
           detailsBullets: [
             'Placeable food blocks with up to 4 slices',
             'Each use drops the matching slice item',
             'Block visually shrinks as it is consumed',
             'Multiple cheese types with unique appearances'
           ],
           items: [
             { id: 'cheese_wheel', title: 'Cheese Wheel', namespace_id: 'meadow:cheese_wheel', icon: '/assets/icons/meadow/cheese_wheel.png' },
             { id: 'amethyst_cheese_wheel', title: 'Amethyst Cheese Wheel', namespace_id: 'meadow:amethyst_cheese_wheel', icon: '/assets/icons/meadow/amethyst_cheese_wheel.png' },
             { id: 'buffalo_cheese_wheel', title: 'Buffalo Cheese Wheel', namespace_id: 'meadow:buffalo_cheese_wheel', icon: '/assets/icons/meadow/buffalo_cheese_wheel.png' },
             { id: 'warped_cheese_wheel', title: 'Warped Cheese Wheel', namespace_id: 'meadow:warped_cheese_wheel', icon: '/assets/icons/meadow/warped_cheese_wheel.png' },
             { id: 'grain_cheese_wheel', title: 'Grain Cheese Wheel', namespace_id: 'meadow:grain_cheese_wheel', icon: '/assets/icons/meadow/grain_cheese_wheel.png' },
             { id: 'sheep_cheese_wheel', title: 'Sheep Cheese Wheel', namespace_id: 'meadow:sheep_cheese_wheel', icon: '/assets/icons/meadow/sheep_cheese_wheel.png' },
             { id: 'goat_cheese_wheel', title: 'Goat Cheese Wheel', namespace_id: 'meadow:goat_cheese_wheel', icon: '/assets/icons/meadow/goat_cheese_wheel.png' },
             { id: 'cheesecake', title: 'Cheesecake', namespace_id: 'meadow:cheesecake', icon: '/assets/icons/meadow/cheesecake.png' },
             { id: 'cheese_tart', title: 'Cheese Tart', namespace_id: 'meadow:cheese_tart', icon: '/assets/icons/meadow/cheese_tart.png' }
           ]
         },
           {
             id: 'foods',
             title: 'Foods',
             subtitle: 'Cheese specialties and savory meals.',
             icon: '/assets/icons/meadow/cheese_sandwich.png',
             search: 'cheesecake cheese tart cheese wheel cheesecake slice cheese tart slice cheese sandwich roll stick sausage with cheese roasted ham',
             details: true,
             items: [
               { id: 'cheesecake', title: 'Cheesecake', namespace_id: 'meadow:cheesecake', icon: '/assets/icons/meadow/cheesecake.png' },
               { id: 'cheese_tart', title: 'Cheese Tart', namespace_id: 'meadow:cheese_tart', icon: '/assets/icons/meadow/cheese_tart.png' },
               { id: 'cheesecake_slice', title: 'Cheesecake Slice', namespace_id: 'meadow:cheesecake_slice', icon: '/assets/icons/meadow/cheesecake_slice.png' },
               { id: 'cheese_tart_slice', title: 'Cheese Tart Slice', namespace_id: 'meadow:cheese_tart_slice', icon: '/assets/icons/meadow/cheese_tart_slice.png' },
               { id: 'piece_of_cheese', title: 'Piece of Cheese', namespace_id: 'meadow:piece_of_cheese', icon: '/assets/icons/meadow/piece_of_cheese.png' },
               { id: 'piece_of_sheep_cheese', title: 'Piece of Sheep Cheese', namespace_id: 'meadow:piece_of_sheep_cheese', icon: '/assets/icons/meadow/piece_of_sheep_cheese.png' },
               { id: 'piece_of_grain_cheese', title: 'Piece of Grain Cheese', namespace_id: 'meadow:piece_of_grain_cheese', icon: '/assets/icons/meadow/piece_of_grain_cheese.png' },
               { id: 'piece_of_amethyst_cheese', title: 'Piece of Amethyst Cheese', namespace_id: 'meadow:piece_of_amethyst_cheese', icon: '/assets/icons/meadow/piece_of_amethyst_cheese.png' },
               { id: 'piece_of_buffalo_cheese', title: 'Piece of Buffalo Cheese', namespace_id: 'meadow:piece_of_buffalo_cheese', icon: '/assets/icons/meadow/piece_of_buffalo_cheese.png' },
               { id: 'piece_of_goat_cheese', title: 'Piece of Goat Cheese', namespace_id: 'meadow:piece_of_goat_cheese', icon: '/assets/icons/meadow/piece_of_goat_cheese.png' },
               { id: 'piece_of_warped_cheese', title: 'Piece of Warped Cheese', namespace_id: 'meadow:piece_of_warped_cheese', icon: '/assets/icons/meadow/piece_of_warped_cheese.png' },
               { id: 'cheese_sandwich', title: 'Cheese Sandwich', namespace_id: 'meadow:cheese_sandwich', icon: '/assets/icons/meadow/cheese_sandwich.png' },
               { id: 'cheese_roll', title: 'Cheese Roll', namespace_id: 'meadow:cheese_roll', icon: '/assets/icons/meadow/cheese_roll.png' },
               { id: 'cheese_stick', title: 'Cheese Stick', namespace_id: 'meadow:cheese_stick', icon: '/assets/icons/meadow/cheese_stick.png' },
               { id: 'sausage_with_cheese', title: 'Sausage with Cheese', namespace_id: 'meadow:sausage_with_cheese', icon: '/assets/icons/meadow/sausage_with_cheese.png' },
               { id: 'roasted_ham', title: 'Roasted Ham', namespace_id: 'meadow:roasted_ham', icon: '/assets/icons/meadow/roasted_ham.png' }
             ]
           },
{
  id: 'buffalo_meat',
  title: 'Buffalo Meat',
  namespace_id: 'meadow:water_buffalo',
  subtitle: 'Raw meat dropped by water buffalo.',
  icon: '/assets/icons/meadow/raw_buffalo_meat.png',
  search: 'buffalo meat raw cooked food water buffalo drop',
  details: true,
  detailsTitle: 'Cooked Variant',
  detailsText: `Buffalo Meat can be cooked to obtain Cooked Buffalo Meat.`,
  items: [
    {
      id: 'cooked_buffalo_meat',
      title: 'Cooked Buffalo Meat',
      namespace_id: 'meadow:cooked_buffalo_meat',
      subtitle: 'Cooked buffalo meat.',
      icon: '/assets/icons/meadow/cooked_buffalo_meat.png',
      search: 'buffalo meat cooked food'
    }
  ]
},
{
  id: 'foods',
  title: 'Foods',
  subtitle: 'Cheese specialties and savory meals.',
  icon: '/assets/icons/meadow/cheese_sandwich.png',
  search: 'cheesecake cheese tart cheese wheel cheesecake slice cheese tart slice cheese sandwich roll stick raw buffalo meat cooked buffalo meat roasted ham sausage with cheese',
  details: true,
  detailsTitle: 'Included Items',
  detailsText: `Meadow adds a range of cheese dishes, preserved wheels, baked desserts, and filling meals.

From full cheese wheels and sliced cakes to simple sandwiches and cooked buffalo cuts, these foods are directly tied into Meadow’s livestock and cheese systems.`,
items: [
  { id: 'cheesecake', title: 'Cheesecake', namespace_id: 'meadow:cheesecake', icon: '/assets/icons/meadow/cheesecake.png' },
  { id: 'cheese_tart', title: 'Cheese Tart', namespace_id: 'meadow:cheese_tart', icon: '/assets/icons/meadow/cheese_tart.png' },
  { id: 'cheese_wheel', title: 'Cheese Wheel', namespace_id: 'meadow:cheese_wheel', icon: '/assets/icons/meadow/cheese_wheel.png' },

  { id: 'cheesecake_slice', title: 'Cheesecake Slice', namespace_id: 'meadow:cheesecake_slice', icon: '/assets/icons/meadow/cheesecake_slice.png' },
  { id: 'cheese_tart_slice', title: 'Cheese Tart Slice', namespace_id: 'meadow:cheese_tart_slice', icon: '/assets/icons/meadow/cheese_tart_slice.png' },

  { id: 'piece_of_cheese', title: 'Piece of Cheese', namespace_id: 'meadow:piece_of_cheese', icon: '/assets/icons/meadow/piece_of_cheese.png' },
  { id: 'piece_of_sheep_cheese', title: 'Piece of Sheep Cheese', namespace_id: 'meadow:piece_of_sheep_cheese', icon: '/assets/icons/meadow/piece_of_sheep_cheese.png' },
  { id: 'piece_of_grain_cheese', title: 'Piece of Grain Cheese', namespace_id: 'meadow:piece_of_grain_cheese', icon: '/assets/icons/meadow/piece_of_grain_cheese.png' },
  { id: 'piece_of_amethyst_cheese', title: 'Piece of Amethyst Cheese', namespace_id: 'meadow:piece_of_amethyst_cheese', icon: '/assets/icons/meadow/piece_of_amethyst_cheese.png' },
  { id: 'piece_of_buffalo_cheese', title: 'Piece of Buffalo Cheese', namespace_id: 'meadow:piece_of_buffalo_cheese', icon: '/assets/icons/meadow/piece_of_buffalo_cheese.png' },
  { id: 'piece_of_goat_cheese', title: 'Piece of Goat Cheese', namespace_id: 'meadow:piece_of_goat_cheese', icon: '/assets/icons/meadow/piece_of_goat_cheese.png' },
  { id: 'piece_of_warped_cheese', title: 'Piece of Warped Cheese', namespace_id: 'meadow:piece_of_warped_cheese', icon: '/assets/icons/meadow/piece_of_warped_cheese.png' },

  { id: 'cheese_sandwich', title: 'Cheese Sandwich', namespace_id: 'meadow:cheese_sandwich', icon: '/assets/icons/meadow/cheese_sandwich.png' },
  { id: 'cheese_roll', title: 'Cheese Roll', namespace_id: 'meadow:cheese_roll', icon: '/assets/icons/meadow/cheese_roll.png' },
  { id: 'cheese_stick', title: 'Cheese Stick', namespace_id: 'meadow:cheese_stick', icon: '/assets/icons/meadow/cheese_stick.png' },
  { id: 'sausage_with_cheese', title: 'Sausage with Cheese', namespace_id: 'meadow:sausage_with_cheese', icon: '/assets/icons/meadow/sausage_with_cheese.png' },
  { id: 'roasted_ham', title: 'Roasted Ham', namespace_id: 'meadow:roasted_ham', icon: '/assets/icons/meadow/roasted_ham.png' }
]
}
      ]
    },
    {
      id: 'crops',
      title: 'Worldgen and Natural Features',
      subtitle: 'Plants and natural features that generate in the world.',
      entries: [
  {
    id: 'alpine_poppy',
    title: 'Alpine Poppy',
    namespace_id: 'meadow:alpine_poppy',
    subtitle: 'A bright alpine flower found in high mountain regions.',
    icon: '/assets/icons/meadow/alpine_poppy.png',
    search: 'alpine poppy flower alpine meadow mountains',
    details: true,
    details: 'Alpine poppies grow in high-altitude regions where few other plants survive, blooming quickly during short mountain summers.'
  },
  {
    id: 'delphinium',
    title: 'Delphinium',
    namespace_id: 'meadow:delphinium',
    subtitle: 'A tall mountain flower with vibrant blossoms.',
    icon: '/assets/icons/meadow/delphinium.png',
    search: 'delphinium flower alpine blue tall meadow',
    details: true,
    details: 'Delphiniums are known for their tall flower spikes and vivid blue tones, often found in cooler alpine climates.'
  },
  {
    id: 'saxifrage',
    title: 'Saxifrage',
    namespace_id: 'meadow:saxifrage',
    subtitle: 'A hardy alpine plant growing between rocks.',
    icon: '/assets/icons/meadow/saxifrage.png',
    search: 'saxifrage flower alpine rock meadow',
    details: true,
    details: 'Saxifrage literally means “stone breaker,” as these resilient plants often grow in rocky crevices at high elevations.'
  },
  {
    id: 'enzian',
    title: 'Enzian',
    namespace_id: 'meadow:enzian',
    subtitle: 'A deep blue alpine flower of the mountains.',
    icon: '/assets/icons/meadow/enzian.png',
    search: 'enzian gentian alpine blue flower meadow',
    details: true,
    details: 'Gentians, known as Enzian in alpine regions, are iconic mountain flowers recognized for their intense blue color.'
  },
  {
    id: 'fire_lily',
    title: 'Fire Lily',
    namespace_id: 'meadow:fire_lily',
    subtitle: 'A striking lily with warm, fiery tones.',
    icon: '/assets/icons/meadow/fire_lily.png',
    search: 'fire lily alpine orange red flower meadow',
    details: true,
    details: 'Fire lilies stand out with bright orange and red petals, often growing in open, sunlit alpine clearings.'
  },
  {
    id: 'eriophorum',
    title: 'Eriophorum',
    namespace_id: 'meadow:eriophorum',
    subtitle: 'A soft white alpine plant found in damp mountain areas.',
    icon: '/assets/icons/meadow/eriophorum.png',
    search: 'eriophorum tall eriophorum alpine cotton grass meadow',
    details: true,
    detailsTitle: 'Variants',
    detailsBullets: [
      'Eriophorum appears in both a small and tall form, bringing soft white accents to meadows.'
    ],
    items: [
      { id: 'eriophorum', title: 'Eriophorum', namespace_id: 'meadow:eriophorum', icon: '/assets/icons/meadow/eriophorum.png' },
      { id: 'tall_eriophorum', title: 'Tall Eriophorum', namespace_id: 'meadow:tall_eriophorum', icon: '/assets/icons/meadow/tall_eriophorum.png' }
    ]
  },
 {
   id: 'small_fir',
   title: 'Small Fir',
   namespace_id: 'meadow:small_fir',
   subtitle: 'A naturally generating decorative fir tree.',
   icon: '/assets/icons/meadow/small_fir.png',
   search: 'small fir worldgen tree decoration'
 },
{
  id: 'pine_sapling',
  title: 'Pine',
  subtitle: 'Pines grow naturally in Meadow regions and form the basis of the [[Pine|pine]] wood set.',
  icon: '/assets/icons/meadow/pine_sapling.png',
  search: 'pine sapling yellow pine sapling tree worldgen meadow',
  details: true,
  detailsTitle: 'Tree Variants',
  detailsText: `Pines generate naturally and grow from their respective saplings. The Pine and Yellow Pine variants only differ in their color tone.`,
  items: [
    {
      id: 'pine_sapling',
      title: 'Pine Sapling',
      namespace_id: 'meadow:pine_sapling',
      icon: '/assets/icons/meadow/pine_sapling.png'
    },
    {
      id: 'yellow_pine_sapling',
      title: 'Yellow Pine Sapling',
      namespace_id: 'meadow:yellow_pine_sapling',
      icon: '/assets/icons/meadow/yellow_pine_sapling.png'
    }
  ]
},
{
  id: 'alpine_birch',
  title: 'Alpine Birch',
  subtitle: 'An alpine birch variant with a more detailed bark texture that can be processed into standard Birch wood.',
  icon: '/assets/icons/meadow/alpine_birch_sapling.png',
  search: 'alpine birch sapling tree worldgen meadow birch wood'
},
{
  id: 'cobbled_limestone',
  title: 'Cobbled Limestone',
  subtitle: 'Some stone formations in Meadow regions are naturally replaced with [[Limestone|limestone]] and its cobbled variant.',
  icon: '/assets/icons/meadow/cobbled_limestone.png',
  search: 'cobbled limestone stone worldgen meadow'
},
{
  id: 'limestone_slabs',
  title: 'Limestone Slabs',
  subtitle: 'Limestone slabs can generate naturally near slopes and terrain edges.',
  icon: '/assets/icons/meadow/limestone_slab.png',
  search: 'limestone slab worldgen meadow'
}
    ]
  },
{
  id: 'entities',
  title: 'Entities',
  subtitle: 'Animal variants and livestock added by Meadow.',
  entries: [
    {
      id: 'highland_cattle',
      title: 'Highland Cattle',
      subtitle: 'Cow variants commonly found in elevated terrain.',
      icon: '/assets/icons/meadow/entity/wooly_cow.png',
      search: 'wooly cow meadow animal milk hill mountain highland rustic wool shear',
      details: true,
      detailsTitle: 'Spawning and Interaction',
      detailsText: `Highland Cattle spawn naturally in hill and mountain biomes.

Their spawning is controlled via the biome tags #minecraft:is_hill and #minecraft:is_mountain.

They can be milked to obtain milk.

Using Shears on them yields [[Rustic Wool|rustic_wool]].`,
      detailsBullets: [
        'Spawns in biomes tagged with #minecraft:is_hill',
        'Spawns in biomes tagged with #minecraft:is_mountain',
        'Can be milked to obtain milk',
        'Shearing yields Rustic Wool'
      ]
    },
    {
      id: 'umbra_cattle',
      title: 'Umbra Cattle',
      subtitle: 'Cow variants commonly found in darker biomes.',
      icon: '/assets/icons/meadow/entity/wooly_cow.png',
      search: 'wooly cow meadow animal milk dark forest chambray wool shear',
      details: true,
      detailsTitle: 'Spawning and Interaction',
      detailsText: `Umbra Cattle spawn naturally in Dark Forest biomes.

They can be milked to obtain milk.

Using Shears on them yields [[Chambray Wool|chambray_wool]].`,
      detailsBullets: [
        'Spawns naturally in Dark Forest biomes',
        'Can be milked to obtain milk',
        'Shearing yields Chambray Wool'
      ]
    },
    {
      id: 'water_buffalo',
      title: 'Water Buffalo',
      namespace_id: 'meadow:water_buffalo',
      subtitle: 'A large farm animal that provides buffalo milk.',
      icon: '/assets/icons/meadow/entity/water_buffalo.png',
      search: 'water buffalo milk meadow savanna river swamp farm animal buffalo meat wooden milk bucket',
      details: true,
      detailsTitle: 'Spawning and Interaction',
      detailsText: `Water Buffalo spawn naturally in warm and water-rich biomes such as Savannas, Rivers, and Swamps.

They require a [[Wooden Milk Bucket|wooden_milk_bucket]] to be milked, which yields [[Buffalo Milk|wooden_buffalo_milk_bucket]].

When killed, they drop [[Raw Buffalo Meat|raw_buffalo_meat]].`,
      detailsBullets: [
        'Spawns in Savanna biomes',
        'Spawns in River biomes',
        'Spawns in Swamp biomes',
        'Requires a Wooden Milk Bucket for milking',
        'Milking yields Buffalo Milk',
        'Drops Buffalo Meat'
      ]
    },
    {
      id: 'warped_cow',
      title: 'Warped Cow',
      subtitle: 'A nether-touched cow variant linked to Warped Forest portals.',
      icon: '/assets/icons/meadow/entity/warped_cow.png',
      search: 'warped cow meadow nether portal warped forest milk warped wool wooden warped milk bucket',
      details: true,
      detailsTitle: 'Spawning and Interaction',
      detailsText: `Warped Cows spawn when a Nether Portal connected to a Warped Forest links back to the Overworld.

They can be milked using a [[Wooden Bucket|wooden_bucket]], which yields a [[Wooden Warped Milk Bucket|wooden_warped_milk_bucket]].

When killed, they drop [[Warped Wool|warped_wool]].`,
      detailsBullets: [
        'Spawns via Nether Portals connected to Warped Forests',
        'Milked with a Wooden Bucket',
        'Milking yields a Wooden Warped Milk Bucket',
        'Drops Warped Wool'
      ]
    }
  ]
},
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Small extras and supporting features.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle: 'Some Meadow features can be adjusted via a configuration file.',
          icon: '/assets/icons/misc/config.png',
          search: 'config configuration settings options meadow'
        },
        {
          id: 'villagers',
          title: 'Villagers',
subtitle: 'Two new villager professions: Cheesemaker and Hermit.',
          icon: '/assets/icons/misc/emerald.png',
          search: 'villager cheesemaker hermit trades cheese wood meadow profession workstation',
          details: true,
          detailsTitle: 'Professions',
          detailsText: `Meadow introduces two custom Villager professions: the Cheesemaker and the Hermit.

        The Cheesemaker works at the [[Cheese Form|cheese_form]] and helps keep your dairy setup running with useful trades, from ingredients to finished cheese.

        The Hermit works at the [[Woodcutter|woodcutter]] and offers a small but practical selection of pine materials, tools, and everyday supplies.`,
          detailsBullets: [
            'Cheesemaker uses the Cheese Form as workstation',
            'Trades dairy ingredients, milk tools, and cheese',
            'Hermit uses the Woodcutter as workstation',
            'Trades pine materials, utility items, and supplies'
          ]
        },
              {
                  id: 'loot',
                  title: 'Loot and Exploration',
                  subtitle: 'Certain items and ingredients can be found while exploring the world.',
                  icon: '/assets/icons/misc/chest.png',
                  search: 'loot chest dungeon village exploration items ingredients',
                  details: true,
                  detailsTitle: 'Where to find loot',
                  detailsText: `Some items and ingredients can be found naturally while exploring the world.

        They may appear in various loot containers, such as village chests, dungeon chests, or other generated structures.`,
                  detailsBullets: [
                    'Items and ingredients can appear in loot chests',
                    'Found in villages, dungeons, and other structures',
                    'Encourages exploration alongside brewing'
                  ]
                }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'A closer look at how everything comes together ingame',
  impressions: [
    { src: '/assets/impressions/meadow/01.jpeg', caption: 'A pine kitchen with Cookpot and storage furniture' },
    { src: '/assets/impressions/meadow/02.jpeg', caption: 'Cheese processing setup with Cheese Form and Cheese Rack' },
    { src: '/assets/impressions/meadow/03.jpeg', caption: 'Limestone builds with alpine detailing' },
    { src: '/assets/impressions/meadow/04.jpeg', caption: 'Cozy interiors with wardrobes, cabinets, and windows' },
    { src: '/assets/impressions/meadow/05.jpeg', caption: 'Alpine flowers scattered across meadows' },
    { src: '/assets/impressions/meadow/06.jpeg', caption: 'A tiled stove centerpiece in a cabin' },
    { src: '/assets/impressions/meadow/07.jpeg', caption: 'Outdoor seating with stone furniture' }
  ]
}