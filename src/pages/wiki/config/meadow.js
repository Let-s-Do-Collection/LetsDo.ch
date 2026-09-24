export default {
  slug: 'meadow',
  title: 'Meadow',
  logo: '/assets/mod-logos/meadow.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Alpine life, from the pasture to the cheese wheel',
  aboutText: `Meadow turns the vanilla Meadow biome into a proper alpine landscape: pine and birch trees, fields of mountain flowers, limestone boulders, salt veins and small structures like chalets, chapels and logging camps.

Highland Cattle graze on the slopes, Water Buffalo wade through rivers and savannas, and every animal gives its own kind of milk. Turn it into cheese in the Cheese Press, melt it in a Fondue Pot or cook it into hearty meals.

To furnish your chalet there is a full pine wood set, seven new wool types with matching beds, carpets and sofas, and a tiled stove to keep things warm.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Where milk, wool and wood get turned into something useful.',
      entries: [
        {
          id: 'cooking_stations',
          title: 'Cooking',
          subtitle: 'The Cookpot and the Cooking Frame, for hearty meals and cheese ingredients.',
          icon: '/assets/icons/meadow/cookpot.webp',
          search: 'cookpot cooking frame meals water heat tiled stove rennet salt recipes meadow',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Usage',
          detailsText: `Both stations share the same menu and recipes: up to six ingredients, one water slot and one output slot.

Every recipe uses a bit of water. Pour in a Water Bucket or Wooden Bucket of Water to add a large amount, or a Water Bottle for a small top-up. The water gauge shows how much is left.

The Cookpot needs heat from below. It works on top of any part of the [[Tiled Stove|tiled_stove]] (and on heat sources from other Let's Do mods). The Cooking Frame is two blocks tall and brings its own fire, so it works anywhere.

Useful recipes include [[Rennet|rennet]], [[Alpine Salt|alpine_salt]] from Limestone or Calcite, Grain Milk and salted, cooked meat.`,
          detailsBullets: [
            'Six ingredient slots, one water slot, one output slot',
            'Water Bucket fills a lot, Water Bottle a little',
            'Cookpot needs a Tiled Stove below',
            'Cooking Frame needs no heat but is two blocks tall'
          ],
          items: [
            {
              id: 'cookpot',
              title: 'Cookpot',
              namespace_id: 'meadow:cookpot',
              icon: '/assets/icons/meadow/cookpot.webp'
            },
            {
              id: 'cooking_frame',
              title: 'Cooking Frame',
              namespace_id: 'meadow:cooking_frame',
              icon: '/assets/icons/meadow/cooking_frame.webp'
            }
          ]
        },
        {
          id: 'fondue_pot',
          title: 'Fondue Pot',
          namespace_id: 'meadow:fondue_pot',
          subtitle: 'Melted cheese, bread, done.',
          icon: '/assets/icons/meadow/fondue_pot.webp',
          search: 'fondue pot cheese wheel cheese slice bread cheese stick tiled stove heat meadow',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place the Fondue Pot on a [[Tiled Stove|tiled_stove]]. Without heat it does nothing.

A whole [[Cheese Wheel|cheese_blocks]] fills it completely (three portions). A single cheese slice adds one portion.

Right click with Bread to dip it and get a [[Cheese Stick|foods]]. Each dip uses one portion.`,
          detailsBullets: [
            'Needs a Tiled Stove below',
            'Cheese Wheel: fills all three portions',
            'Cheese Slice: adds one portion',
            'Bread + one portion = Cheese Stick'
          ]
        },
        {
          id: 'cheese_form',
          title: 'Cheese Press',
          namespace_id: 'meadow:cheese_form',
          subtitle: 'Milk plus rennet, a little patience, and you have a cheese wheel.',
          icon: '/assets/icons/meadow/cheese_form.webp',
          search: 'cheese press cheese form rennet milk wooden bucket cheese wheel 90 seconds',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Put a bucket of milk and a piece of [[Rennet|rennet]] into the two input slots. After 90 seconds a whole [[Cheese Wheel|cheese_blocks]] is ready and the empty bucket stays behind.

The kind of milk decides the kind of cheese. Regular milk from a Bucket or Wooden Bucket makes a plain Cheese Wheel, while Sheep, Goat, Buffalo, Grain, Amethyst and Warped Milk (only in Wooden Buckets) make their own varieties.`,
          detailsBullets: [
            'Milk + Rennet',
            'Takes 90 seconds',
            'Seven cheese varieties, one per milk type',
            'Hoppers: rennet from the top, milk from the side, cheese from below'
          ]
        },
        {
          id: 'woodcutter',
          title: 'Woodcutter',
          namespace_id: 'meadow:woodcutter',
          subtitle: 'A stonecutter for wood.',
          icon: '/assets/icons/meadow/woodcutter.webp',
          search: 'woodcutter logs planks stairs slabs doors fence stonecutter wood',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Put in logs and pick what you need: planks, stairs, slabs, doors, trapdoors, fences, gates, buttons, pressure plates and more.

It works with all vanilla wood types and with Pine. It is also the only way to get [[Reclaimed Pine|pine]].`,
          detailsBullets: [
            'Works like a Stonecutter',
            'All vanilla woods plus Pine',
            'Makes Reclaimed Pine from Pine Planks'
          ]
        },
        {
          id: 'felting_needle',
          title: 'Felting Needle',
          namespace_id: 'meadow:felting_needle',
          subtitle: 'Turns vanilla wool into Meadow wool.',
          icon: '/assets/icons/meadow/felting_needle.webp',
          search: 'felting needle wool offhand hold right click rustic linen jacquard plaid chambray tweed warped',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Hold vanilla wool in your offhand and the Felting Needle in your main hand, then hold right click for six seconds. One wool block turns into its [[Meadow counterpart|wool]].

Letting go early gives the wool back. The needle has 128 uses.`,
          detailsBullets: [
            'Brown Wool → Rustic Wool',
            'Light Gray Wool → Linen',
            'Gray Wool → Jacquard Wool',
            'White Wool → Plaid Wool',
            'Blue Wool → Chambray Wool',
            'Black Wool → Tweed Wool',
            'Cyan Wool → Warped Wool'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Everything for a cosy alpine chalet.',
      entries: [
        {
          id: 'limestone',
          title: 'Limestone',
          namespace_id: 'meadow:limestone',
          subtitle: 'A pale building stone with bricks, cobbles and mossy variants.',
          icon: '/assets/icons/meadow/limestone_bricks.webp',
          search: 'limestone set bricks cobbled mossy cracked chiseled polished stairs slab wall stonecutter',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants',
          detailsText: `Limestone comes with bricks, cobbled, mossy, cracked, chiseled and polished variants, plus stairs, slabs and walls. The Stonecutter handles all of them.

In the Meadow biome, Limestone replaces part of the stone underground and shows up as boulders on the surface. Ores inside it become Alpine ores, and it is where [[Alpine Salt|alpine_salt]] is found.`,
          detailsBullets: [
            'Stairs, slabs and walls for most variants',
            'Mossy variants with Vines or Moss',
            'Generates in the Meadow biome'
          ],
          items: [
            { id: 'limestone', title: 'Limestone', namespace_id: 'meadow:limestone', icon: '/assets/icons/meadow/limestone.webp' },
            { id: 'cobbled_limestone', title: 'Cobbled Limestone', namespace_id: 'meadow:cobbled_limestone', icon: '/assets/icons/meadow/cobbled_limestone.webp' },
            { id: 'limestone_bricks', title: 'Limestone Bricks', namespace_id: 'meadow:limestone_bricks', icon: '/assets/icons/meadow/limestone_bricks.webp' },
            { id: 'mossy_cobbled_limestone', title: 'Mossy Cobbled Limestone', namespace_id: 'meadow:mossy_cobbled_limestone', icon: '/assets/icons/meadow/mossy_cobbled_limestone.webp' },
            { id: 'mossy_limestone_bricks', title: 'Mossy Limestone Bricks', namespace_id: 'meadow:mossy_limestone_bricks', icon: '/assets/icons/meadow/mossy_limestone_bricks.webp' },
            { id: 'cracked_limestone_bricks', title: 'Cracked Limestone Bricks', namespace_id: 'meadow:cracked_limestone_bricks', icon: '/assets/icons/meadow/cracked_limestone_bricks.webp' },
            { id: 'chiseled_limestone', title: 'Chiseled Limestone', namespace_id: 'meadow:chiseled_limestone', icon: '/assets/icons/meadow/chiseled_limestone.webp' },
            { id: 'polished_limestone', title: 'Polished Limestone', namespace_id: 'meadow:polished_limestone', icon: '/assets/icons/meadow/polished_limestone.webp' }
          ]
        },
        {
          id: 'pine',
          title: 'Pine',
          namespace_id: 'meadow:pine_log',
          subtitle: 'A full wood set, plus a weathered Reclaimed Pine version.',
          icon: '/assets/icons/meadow/pine_log.webp',
          search: 'pine wood set log planks door trapdoor fence gate stairs slab beam railing boat reclaimed',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Pine has everything a wood type needs: logs, planks, stairs, slabs, doors, trapdoors, fences, gates, signs and boats, plus a Pine Beam and a Pine Railing.

Pine trees grow from [[Pine Saplings|pine_sapling]] and cover the Meadow biome.

Reclaimed Pine is an older, weathered look. It is made from Pine Planks in the [[Woodcutter|woodcutter]].`,
          detailsBullets: [
            'Complete wood set with boats and signs',
            'Pine Beam and Pine Railing',
            'Reclaimed Pine planks, stairs, slabs, doors and trapdoors'
          ],
          items: [
            { id: 'pine_planks', title: 'Pine Planks', namespace_id: 'meadow:pine_planks', icon: '/assets/icons/meadow/pine_planks.webp' },
            { id: 'pine_door', title: 'Pine Door', namespace_id: 'meadow:pine_door', icon: '/assets/icons/meadow/pine_door.webp' },
            { id: 'pine_trapdoor', title: 'Pine Trapdoor', namespace_id: 'meadow:pine_trapdoor', icon: '/assets/icons/meadow/pine_trapdoor.webp' },
            { id: 'reclaimed_pine_planks', title: 'Reclaimed Pine Planks', namespace_id: 'meadow:reclaimed_pine_planks', icon: '/assets/icons/meadow/reclaimed_pine_planks.webp' },
            { id: 'reclaimed_pine_door', title: 'Reclaimed Pine Door', namespace_id: 'meadow:reclaimed_pine_door', icon: '/assets/icons/meadow/reclaimed_pine_door.webp' },
            { id: 'reclaimed_pine_trapdoor', title: 'Reclaimed Pine Trapdoor', namespace_id: 'meadow:reclaimed_pine_trapdoor', icon: '/assets/icons/meadow/reclaimed_pine_trapdoor.webp' }
          ]
        },
        {
          id: 'bed',
          title: 'Beds',
          namespace_id: 'meadow:rustic_bed',
          subtitle: 'Beds in every Meadow wool, plus a rustic Straw Bed.',
          icon: '/assets/icons/meadow/rustic_bed.webp',
          search: 'rustic linen jacquard plaid chambray tweed warped straw bed meadow',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants',
          detailsText: `There is a bed for each of the seven [[Meadow wools|wool]]. They work like normal beds.

The Straw Bed works too. There is even an advancement for surviving a night on it and waking up with a sore back.`,
          items: [
            { id: 'rustic_bed', title: 'Rustic Wool Bed', namespace_id: 'meadow:rustic_bed', icon: '/assets/icons/meadow/rustic_bed.webp' },
            { id: 'linen_bed', title: 'Linen Bed', namespace_id: 'meadow:linen_bed', icon: '/assets/icons/meadow/linen_bed.webp' },
            { id: 'jacquard_bed', title: 'Jacquard Wool Bed', namespace_id: 'meadow:jacquard_bed', icon: '/assets/icons/meadow/jacquard_bed.webp' },
            { id: 'plaid_bed', title: 'Plaid Wool Bed', namespace_id: 'meadow:plaid_bed', icon: '/assets/icons/meadow/plaid_bed.webp' },
            { id: 'chambray_bed', title: 'Chambray Wool Bed', namespace_id: 'meadow:chambray_bed', icon: '/assets/icons/meadow/chambray_bed.webp' },
            { id: 'tweed_bed', title: 'Tweed Wool Bed', namespace_id: 'meadow:tweed_bed', icon: '/assets/icons/meadow/tweed_bed.webp' },
            { id: 'warped_bed', title: 'Warped Wool Bed', namespace_id: 'meadow:warped_bed', icon: '/assets/icons/meadow/warped_bed.webp' },
            { id: 'straw_bed', title: 'Straw Bed', namespace_id: 'meadow:straw_bed', icon: '/assets/icons/meadow/straw_bed.webp' }
          ]
        },
        {
          id: 'pine_sofa',
          title: 'Pine Sofa',
          namespace_id: 'meadow:pine_sofa_rustic',
          subtitle: 'A pine sofa you can sit on, upholstered in each Meadow wool.',
          icon: '/assets/icons/meadow/pine_sofa_rustic.webp',
          search: 'pine sofa seat sit rustic linen jacquard plaid chambray tweed warped meadow',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants',
          detailsText: `There is a sofa for each of the seven [[Meadow wools|wool]]. Right click to sit down.`,
          items: [
            { id: 'pine_sofa_rustic', title: 'Rustic Pine Sofa', namespace_id: 'meadow:pine_sofa_rustic', icon: '/assets/icons/meadow/pine_sofa_rustic.webp' },
            { id: 'pine_sofa_linen', title: 'Linen Pine Sofa', namespace_id: 'meadow:pine_sofa_linen', icon: '/assets/icons/meadow/pine_sofa_linen.webp' },
            { id: 'pine_sofa_jacquard', title: 'Jacquard Pine Sofa', namespace_id: 'meadow:pine_sofa_jacquard', icon: '/assets/icons/meadow/pine_sofa_jacquard.webp' },
            { id: 'pine_sofa_plaid', title: 'Plaid Pine Sofa', namespace_id: 'meadow:pine_sofa_plaid', icon: '/assets/icons/meadow/pine_sofa_plaid.webp' },
            { id: 'pine_sofa_chambray', title: 'Chambray Pine Sofa', namespace_id: 'meadow:pine_sofa_chambray', icon: '/assets/icons/meadow/pine_sofa_chambray.webp' },
            { id: 'pine_sofa_tweed', title: 'Tweed Pine Sofa', namespace_id: 'meadow:pine_sofa_tweed', icon: '/assets/icons/meadow/pine_sofa_tweed.webp' },
            { id: 'pine_sofa_warped', title: 'Warped Pine Sofa', namespace_id: 'meadow:pine_sofa_warped', icon: '/assets/icons/meadow/pine_sofa_warped.webp' }
          ]
        },
        {
          id: 'pine_chair',
          title: 'Pine Chair',
          namespace_id: 'meadow:pine_chair',
          subtitle: 'A simple wooden chair. Right click to sit down.',
          icon: '/assets/icons/meadow/pine_chair.webp',
          search: 'pine chair seat sit meadow'
        },
        {
          id: 'pine_table',
          title: 'Pine Table',
          namespace_id: 'meadow:pine_table',
          subtitle: 'Tables placed side by side join into one long table, and link up with the [[Pine Dresser|pine_dresser]].',
          icon: '/assets/icons/meadow/pine_table.webp',
          search: 'pine table meadow connect'
        },
        {
          id: 'pine_dresser',
          title: 'Pine Dresser',
          namespace_id: 'meadow:pine_dresser',
          subtitle: 'Holds 36 slots and lines up neatly with [[Pine Tables|pine_table]] and other dressers.',
          icon: '/assets/icons/meadow/pine_dresser.webp',
          search: 'pine dresser storage 36 slots meadow connect'
        },
        {
          id: 'pine_wardrobe',
          title: 'Pine Wardrobe',
          namespace_id: 'meadow:pine_wardrobe',
          subtitle: 'A two-block wardrobe that keeps one full set of armor.',
          icon: '/assets/icons/meadow/pine_wardrobe.webp',
          search: 'wardrobe pine armor storage tall furniture meadow',
          details: true,
          detailsTitle: 'Armor Storage',
          detailsText: `Right click the Wardrobe with a piece of armor to hang it up. If that slot is already taken, the old piece goes back to you.

Right click with an empty hand to open or close the doors. Sneak and right click to take out one stored piece at a time.`,
          detailsBullets: [
            'One slot each for helmet, chestplate, leggings and boots',
            'Right click with armor to store it',
            'Sneak + right click to take a piece out',
            'Empty hand opens and closes the doors'
          ]
        },
        {
          id: 'pine_cabinet',
          title: 'Pine Cabinet',
          namespace_id: 'meadow:pine_cabinet',
          subtitle: 'A cabinet with 36 slots of storage.',
          icon: '/assets/icons/meadow/pine_cabinet.webp',
          search: 'cabinet storage 36 slots meadow'
        },
        {
          id: 'pine_wall_cabinet',
          title: 'Pine Wall Cabinet',
          namespace_id: 'meadow:pine_wall_cabinet',
          subtitle: 'The same 36 slots, hung on the wall.',
          icon: '/assets/icons/meadow/pine_wall_cabinet.webp',
          search: 'wall cabinet storage 36 slots meadow'
        },
        {
          id: 'pine_cheese_rack',
          title: 'Pine Cheese Rack',
          namespace_id: 'meadow:pine_cheese_rack',
          subtitle: 'A shelf for showing off two cheese wheels.',
          icon: '/assets/icons/meadow/pine_cheese_rack.webp',
          search: 'pine cheese rack cheese wheel storage shelf',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The rack has an upper and a lower shelf, each holding one [[Cheese Wheel|cheese_blocks]]. Right click a shelf with a cheese wheel to put it there, and right click it again to take the wheel back.`,
          detailsBullets: [
            'Two shelves, one cheese wheel each',
            'Only accepts cheese wheels'
          ]
        },
        {
          id: 'windows',
          title: 'Windows',
          subtitle: 'Three window styles, each as a full block and as a pane.',
          icon: '/assets/icons/meadow/pine_window.webp',
          search: 'window pane artisan ornate pine meadow glass',
          details: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Pine, Artisan Glass and Ornate Glass windows, each as a full block and as a pane.`,
          items: [
            { id: 'pine_window', title: 'Pine Window', namespace_id: 'meadow:pine_window', icon: '/assets/icons/meadow/pine_window.webp' },
            { id: 'pine_window_pane', title: 'Pine Window Pane', namespace_id: 'meadow:pine_window_pane', icon: '/assets/icons/meadow/pine_window_pane.webp' },
            { id: 'artisan_glass_window', title: 'Artisan Glass Window', namespace_id: 'meadow:artisan_glass_window', icon: '/assets/icons/meadow/artisan_glass_window.webp' },
            { id: 'artisan_glass_window_pane', title: 'Artisan Glass Window Pane', namespace_id: 'meadow:artisan_glass_window_pane', icon: '/assets/icons/meadow/artisan_glass_window_pane.webp' },
            { id: 'ornate_glass_window', title: 'Ornate Glass Window', namespace_id: 'meadow:ornate_glass_window', icon: '/assets/icons/meadow/ornate_glass_window.webp' },
            { id: 'ornate_glass_window_pane', title: 'Ornate Glass Window Pane', namespace_id: 'meadow:ornate_glass_window_pane', icon: '/assets/icons/meadow/ornate_glass_window_pane.webp' }
          ]
        },
        {
          id: 'pine_shutter',
          title: 'Pine Shutter',
          namespace_id: 'meadow:pine_shutter',
          subtitle: 'Window shutters that open with a click or a redstone signal.',
          icon: '/assets/icons/meadow/pine_shutter.webp',
          search: 'pine shutters window shutter open close right click redstone stack',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click to open or close a shutter. Stacked shutters open and close together; sneak while clicking to move only one.

Shutters also react to redstone.`,
          detailsBullets: [
            'Stacked shutters move together',
            'Sneak to toggle a single shutter',
            'Opens with a redstone signal'
          ]
        },
        {
          id: 'tiled_stove',
          title: 'Tiled Stove',
          namespace_id: 'meadow:stove_tiles',
          subtitle: 'A classic alpine tiled stove, built from several stacking parts.',
          icon: '/assets/icons/meadow/stove_tiles.webp',
          search: 'tiled stove fireplace smoker bench alpine heat cookpot fondue lit flint shovel',
          details: true,
          detailsTitle: 'Structure and Function',
          detailsText: `Stack the parts on top of each other and they join into one stove.

Light the Tiled Stove Fireplace with Flint and Steel or a Fire Charge. The fire spreads to every connected stove part, and a shovel puts it out again. Use a pickaxe on the fireplace to switch its top on or off.

All stove parts count as heat sources for the [[Cookpot|cooking_stations]] and the [[Fondue Pot|fondue_pot]]. The Tiled Stove Bench is a warm place to sit down.`,
          detailsBullets: [
            'Flint and Steel or Fire Charge lights the fireplace',
            'Shovel puts it out',
            'Pickaxe changes the fireplace top',
            'Heat source for Cookpot and Fondue Pot',
            'Right click the bench to sit'
          ],
          items: [
            { id: 'stove_tiles', title: 'Tiled Stove', namespace_id: 'meadow:stove_tiles', icon: '/assets/icons/meadow/stove_tiles.webp' },
            { id: 'stove_tiles_wood', title: 'Tiled Stove Fireplace', namespace_id: 'meadow:stove_tiles_wood', icon: '/assets/icons/meadow/stove_tiles_wood.webp' },
            { id: 'stove_tiles_lid', title: 'Tiled Stove Smoker', namespace_id: 'meadow:stove_tiles_lid', icon: '/assets/icons/meadow/stove_tiles_lid.webp' },
            { id: 'stove_tiles_bench', title: 'Tiled Stove Bench', namespace_id: 'meadow:stove_tiles_bench', icon: '/assets/icons/meadow/stove_tiles_bench.webp' }
          ]
        },
        {
          id: 'stone_furniture',
          title: 'Stone Furniture',
          namespace_id: 'meadow:stone_table',
          subtitle: 'A sturdy table and bench made of [[Limestone|limestone]].',
          icon: '/assets/icons/meadow/stone_table.webp',
          search: 'stone table bench limestone seat meadow',
          details: true,
          detailsTitle: 'Included Blocks',
          detailsText: `Garden furniture made of [[Limestone|limestone]]. You can sit on the bench.`,
          items: [
            { id: 'stone_table', title: 'Stone Table', namespace_id: 'meadow:stone_table', icon: '/assets/icons/meadow/stone_table.webp' },
            { id: 'stone_bench', title: 'Stone Bench', namespace_id: 'meadow:stone_bench', icon: '/assets/icons/meadow/stone_bench.webp' }
          ]
        },
        {
          id: 'wooden_cauldron',
          title: 'Wooden Cauldron',
          namespace_id: 'meadow:wooden_cauldron',
          subtitle: 'A wooden cauldron for water and powder snow. Lava would not end well.',
          icon: '/assets/icons/meadow/wooden_cauldron.webp',
          search: 'wooden cauldron water powder snow rain bucket bottle wash'
        },
        {
          id: 'firewood',
          title: 'Firewood',
          namespace_id: 'meadow:firewood',
          subtitle: 'A neat stack of logs that also burns longer than coal.',
          icon: '/assets/icons/meadow/firewood.webp',
          search: 'firewood fuel furnace stack pine log',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Right click placed Firewood with more Firewood to grow the pile, up to three logs. Sneak and right click with an empty hand to take one back.

As fuel, one piece of Firewood smelts 14 items, almost twice as much as coal. It is crafted from Pine Logs.`,
          detailsBullets: [
            'Stack up to three in one block',
            'Smelts 14 items per piece',
            'Crafted from Pine Logs'
          ]
        },
        {
          id: 'flower_pots',
          title: 'Flower Pots',
          subtitle: 'Wooden planters and a wheelbarrow to fill with flowers.',
          icon: '/assets/icons/meadow/wooden_flower_pot_big.webp',
          search: 'wheelbarrow wooden flower pot big wooden flower box small flowers tall flowers decoration',
          details: true,
          detailsText: `Right click with a flower to plant it, and right click again to take it out.`,
          detailsBullets: [
            'Wheelbarrow and Wooden Flower Pot: one small flower',
            'Wooden Flower Box: two small flowers',
            'Big Wooden Flower Pot: one tall flower'
          ],
          items: [
            { id: 'wheelbarrow', title: 'Wheelbarrow', namespace_id: 'meadow:wheelbarrow', icon: '/assets/icons/meadow/wheelbarrow.webp' },
            { id: 'wooden_flower_pot_big', title: 'Big Wooden Flower Pot', namespace_id: 'meadow:wooden_flower_pot_big', icon: '/assets/icons/meadow/wooden_flower_pot_big.webp' },
            { id: 'wooden_flower_box', title: 'Wooden Flower Box', namespace_id: 'meadow:wooden_flower_box', icon: '/assets/icons/meadow/wooden_flower_box.webp' },
            { id: 'wooden_flower_pot_small', title: 'Wooden Flower Pot', namespace_id: 'meadow:wooden_flower_pot_small', icon: '/assets/icons/meadow/wooden_flower_pot_small.webp' }
          ]
        },
        {
          id: 'wool',
          title: 'Wool',
          namespace_id: 'meadow:rustic_wool',
          subtitle: 'Seven patterned wools for beds, carpets and sofas.',
          icon: '/assets/icons/meadow/rustic_wool.webp',
          search: 'rustic linen jacquard plaid chambray tweed warped wool meadow highland umbra warped cattle shear felting',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants and Acquisition',
          detailsText: `Three wools come straight from the animals: shear [[Highland Cattle|highland_cattle]] for Rustic Wool, [[Umbra Cattle|umbra_cattle]] for Chambray Wool and [[Warped Cows|warped_cow]] for Warped Wool.

All seven can also be made from vanilla wool with the [[Felting Needle|felting_needle]].`,
          items: [
            { id: 'rustic_wool', title: 'Rustic Wool', namespace_id: 'meadow:rustic_wool', icon: '/assets/icons/meadow/rustic_wool.webp' },
            { id: 'linen', title: 'Linen', namespace_id: 'meadow:linen', icon: '/assets/icons/meadow/linen.webp' },
            { id: 'jacquard_wool', title: 'Jacquard Wool', namespace_id: 'meadow:jacquard_wool', icon: '/assets/icons/meadow/jacquard_wool.webp' },
            { id: 'plaid_wool', title: 'Plaid Wool', namespace_id: 'meadow:plaid_wool', icon: '/assets/icons/meadow/plaid_wool.webp' },
            { id: 'chambray_wool', title: 'Chambray Wool', namespace_id: 'meadow:chambray_wool', icon: '/assets/icons/meadow/chambray_wool.webp' },
            { id: 'tweed_wool', title: 'Tweed Wool', namespace_id: 'meadow:tweed_wool', icon: '/assets/icons/meadow/tweed_wool.webp' },
            { id: 'warped_wool', title: 'Warped Wool', namespace_id: 'meadow:warped_wool', icon: '/assets/icons/meadow/warped_wool.webp' }
          ]
        },
        {
          id: 'carpet',
          title: 'Carpet',
          namespace_id: 'meadow:rustic_carpet',
          subtitle: 'Carpets in all seven Meadow wools.',
          icon: '/assets/icons/meadow/rustic_carpet.webp',
          search: 'rustic linen jacquard plaid chambray tweed warped carpet meadow wool',
          details: true,
          detailsMiniGallery: true,
          detailsTitle: 'Variants',
          detailsText: `Each carpet is crafted from its matching [[wool|wool]], just like vanilla carpets.`,
          items: [
            { id: 'rustic_carpet', title: 'Rustic Wool Carpet', namespace_id: 'meadow:rustic_carpet', icon: '/assets/icons/meadow/rustic_carpet.webp' },
            { id: 'linen_carpet', title: 'Linen Carpet', namespace_id: 'meadow:linen_carpet', icon: '/assets/icons/meadow/linen_carpet.webp' },
            { id: 'jacquard_carpet', title: 'Jacquard Wool Carpet', namespace_id: 'meadow:jacquard_carpet', icon: '/assets/icons/meadow/jacquard_carpet.webp' },
            { id: 'plaid_carpet', title: 'Plaid Wool Carpet', namespace_id: 'meadow:plaid_carpet', icon: '/assets/icons/meadow/plaid_carpet.webp' },
            { id: 'chambray_carpet', title: 'Chambray Wool Carpet', namespace_id: 'meadow:chambray_carpet', icon: '/assets/icons/meadow/chambray_carpet.webp' },
            { id: 'tweed_carpet', title: 'Tweed Wool Carpet', namespace_id: 'meadow:tweed_carpet', icon: '/assets/icons/meadow/tweed_carpet.webp' },
            { id: 'warped_carpet', title: 'Warped Wool Carpet', namespace_id: 'meadow:warped_carpet', icon: '/assets/icons/meadow/warped_carpet.webp' }
          ]
        },
        {
          id: 'camera',
          title: 'Camera',
          namespace_id: 'meadow:camera',
          subtitle: 'An old camera on a tripod. Right click it for a click and a flash.',
          icon: '/assets/icons/meadow/camera.webp',
          search: 'camera decoration click flash'
        },
        {
          id: 'milk_can',
          title: 'Milk Can',
          namespace_id: 'meadow:milk_can',
          subtitle: 'Stores up to three buckets of milk and slowly fills up near cows.',
          icon: '/assets/icons/meadow/milk_can.webp',
          search: 'milk can milk bucket wooden milk bucket bucket wooden bucket cow fill level',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Pour in milk with a Milk Bucket or a Wooden Bucket of Milk, and fill an empty Bucket or Wooden Bucket to take it out again.

If a cow stands within three blocks, the can slowly fills up on its own.`,
          detailsBullets: [
            'Holds three buckets of milk',
            'Works with regular and wooden buckets',
            'Refills slowly when cows are within 3 blocks'
          ]
        },
        {
          id: 'oil_lantern',
          title: 'Oil Lantern',
          namespace_id: 'meadow:oil_lantern',
          subtitle: 'A rustic lantern that stands on the ground or hangs from the ceiling.',
          icon: '/assets/icons/meadow/oil_lantern.webp',
          search: 'oil lantern rustic light hanging decoration'
        },
        {
          id: 'doormat',
          title: 'Doormat',
          namespace_id: 'meadow:doormat',
          subtitle: 'A doormat. Place several next to each other for a longer one.',
          icon: '/assets/icons/meadow/doormat.webp',
          search: 'doormat decoration floor connect'
        },
        {
          id: 'climbing_rope',
          title: 'Climbing Rope',
          namespace_id: 'meadow:climbing_rope',
          subtitle: 'Hang it under a block and it unrolls up to 12 blocks down.',
          icon: '/assets/icons/meadow/climbing_rope.webp',
          search: 'climbing rope underside 12 blocks climb ladder',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place the rope on the underside of a block. It unrolls by itself until it reaches 12 blocks or hits the ground, and you can climb it like a ladder.`
        },
        {
          id: 'watering_can',
          title: 'Watering Can',
          namespace_id: 'meadow:watering_can',
          subtitle: 'Works like Bone Meal, but you can refill it with water.',
          icon: '/assets/icons/meadow/watering_can.webp',
          search: 'watering can water bone meal plant growth refill',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Use the Watering Can on crops and plants to make them grow, just like Bone Meal. One filling lasts for five uses. Right click a water source to refill it.

You can also place it as a decoration.`,
          detailsBullets: [
            'Bone Meal effect',
            'Five uses per filling',
            'Refill at any water source'
          ]
        },
        {
          id: 'completionist_banner',
          title: 'Completionist Banner',
          namespace_id: 'meadow:meadow_banner',
          subtitle: 'The reward for making every kind of cheese.',
          icon: '/assets/icons/meadow/completionist_banner.webp',
          search: 'completionist banner reward cheese advancement haste smithing',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `Have all seven [[cheese wheels|cheese_blocks]] in your inventory to complete the advancement "The Ultimate Cheese Connoisseur". You get two Completionist Banners.

When placed, the banner gives Haste II to all players within 8 blocks. More copies can be made at the Smithing Table with a Netherite Upgrade and a Netherite Ingot.`,
          detailsBullets: [
            'Reward for collecting all seven cheese wheels',
            'Haste II within 8 blocks',
            'Can be copied at the Smithing Table'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Tools and Ingredients',
      subtitle: 'What goes into the cheese, and what you carry the milk in.',
      entries: [
        {
          id: 'alpine_salt',
          title: 'Alpine Salt',
          namespace_id: 'meadow:alpine_salt',
          subtitle: 'The salt in almost every Meadow recipe.',
          icon: '/assets/icons/meadow/alpine_salt.webp',
          search: 'alpine salt ore limestone calcite cookpot ingredient',
          details: true,
          detailsTitle: 'Where to get it',
          detailsText: `Alpine Salt Ore hides inside [[Limestone|limestone]] in the Meadow biome. Smelt it for salt.

Without a mine nearby, you can boil Limestone or Calcite in the [[Cookpot|cooking_stations]].`
        },
        {
          id: 'rennet',
          title: 'Rennet',
          namespace_id: 'meadow:rennet',
          subtitle: 'The secret ingredient of every cheese.',
          icon: '/assets/icons/meadow/rennet.webp',
          search: 'rennet ingredient cheese press cookpot egg salt bottle',
          details: true,
          detailsTitle: 'Making Rennet',
          detailsText: `Cook an Egg, [[Alpine Salt|alpine_salt]] and a Glass Bottle in the [[Cookpot|cooking_stations]] to get two Rennet. Then take it to the [[Cheese Press|cheese_form]].`
        },
        {
          id: 'buckets',
          title: 'Wooden Buckets',
          subtitle: 'A simple wooden bucket that can milk more than just cows.',
          icon: '/assets/icons/meadow/wooden_bucket.webp',
          search: 'wooden bucket water milk buffalo goat sheep grain amethyst warped',
          details: true,
          detailsText: `The Wooden Bucket holds water but no lava. Its real strength is milking: every animal gives a different milk, and each one becomes its own cheese.`,
          detailsBullets: [
            'Cow, Highland Cattle, Umbra Cattle: Milk',
            'Sheep: Sheep Milk',
            'Goat: Goat Milk',
            'Water Buffalo: Buffalo Milk',
            'Warped Cow: Warped Milk',
            'Grain Milk: Wheat and a Wooden Bucket in the Cookpot',
            'Amethyst Milk: Amethyst Cluster, Salt and Milk in the Cookpot'
          ],
          items: [
            { id: 'wooden_bucket', title: 'Wooden Bucket', namespace_id: 'meadow:wooden_bucket', icon: '/assets/icons/meadow/wooden_bucket.webp' },
            { id: 'wooden_water_bucket', title: 'Wooden Bucket of Water', namespace_id: 'meadow:wooden_water_bucket', icon: '/assets/icons/meadow/wooden_water_bucket.webp' },
            { id: 'wooden_milk_bucket', title: 'Wooden Bucket of Milk', namespace_id: 'meadow:wooden_milk_bucket', icon: '/assets/icons/meadow/wooden_milk_bucket.webp' },
            { id: 'wooden_buffalo_milk_bucket', title: 'Wooden Bucket of Buffalo Milk', namespace_id: 'meadow:wooden_buffalo_milk_bucket', icon: '/assets/icons/meadow/wooden_buffalo_milk_bucket.webp' },
            { id: 'wooden_goat_milk_bucket', title: 'Wooden Bucket of Goat Milk', namespace_id: 'meadow:wooden_goat_milk_bucket', icon: '/assets/icons/meadow/wooden_goat_milk_bucket.webp' },
            { id: 'wooden_sheep_milk_bucket', title: 'Wooden Bucket of Sheep Milk', namespace_id: 'meadow:wooden_sheep_milk_bucket', icon: '/assets/icons/meadow/wooden_sheep_milk_bucket.webp' },
            { id: 'wooden_grain_milk_bucket', title: 'Wooden Bucket of Grain Milk', namespace_id: 'meadow:wooden_grain_milk_bucket', icon: '/assets/icons/meadow/wooden_grain_milk_bucket.webp' },
            { id: 'wooden_amethyst_milk_bucket', title: 'Wooden Bucket of Amethyst Milk', namespace_id: 'meadow:wooden_amethyst_milk_bucket', icon: '/assets/icons/meadow/wooden_amethyst_milk_bucket.webp' },
            { id: 'wooden_warped_milk_bucket', title: 'Wooden Bucket of Warped Milk', namespace_id: 'meadow:wooden_warped_milk_bucket', icon: '/assets/icons/meadow/wooden_warped_milk_bucket.webp' }
          ]
        },
        {
          id: 'fur_armor',
          title: 'Fur Armor',
          namespace_id: 'meadow:fur_chestplate',
          subtitle: 'Warm leather armor trimmed with rabbit fur.',
          search: 'fur armor helmet chestplate leggings boots rabbit hide leather',
          details: true,
          detailsText: `A full set of armor made from Leather, Rabbit Hide and Feathers. It protects a bit better than leather and can be repaired with wool.`,
          items: [
            { id: 'fur_helmet', title: 'Fur Helmet', namespace_id: 'meadow:fur_helmet' },
            { id: 'fur_chestplate', title: 'Fur Chestplate', namespace_id: 'meadow:fur_chestplate' },
            { id: 'fur_leggings', title: 'Fur Leggings', namespace_id: 'meadow:fur_leggings' },
            { id: 'fur_boots', title: 'Fur Boots', namespace_id: 'meadow:fur_boots' }
          ]
        }
      ]
    },
    {
      id: 'food',
      title: 'Food and Consumables',
      subtitle: 'Cheese in every form, and a few hearty meals.',
      entries: [
        {
          id: 'cheese_blocks',
          title: 'Cheese Wheels and Cakes',
          subtitle: 'Place them on the table and cut off one slice at a time.',
          icon: '/assets/icons/meadow/cheese_wheel.webp',
          search: 'cheese wheel cheesecake cheese tart slice buffalo goat sheep grain amethyst warped',
          details: true,
          detailsTitle: 'Slicing and Variants',
          detailsText: `Cheese Wheels come out of the [[Cheese Press|cheese_form]], one variety per kind of milk. Cheesecake and Cheese Tart are crafted from cheese slices, eggs and wheat.

Place any of them and right click to cut off a slice. After four slices the block is gone. You can also craft a Cheese Wheel straight into four slices.

Cheese Wheels look great on a [[Pine Cheese Rack|pine_cheese_rack]].`,
          detailsBullets: [
            'Four slices per block',
            'Seven cheese varieties',
            'Warped Cheese Slices give Fire Resistance'
          ],
          items: [
            { id: 'cheese_wheel', title: 'Cheese Wheel', namespace_id: 'meadow:cheese_wheel', icon: '/assets/icons/meadow/cheese_wheel.webp' },
            { id: 'amethyst_cheese_wheel', title: 'Amethyst Cheese Wheel', namespace_id: 'meadow:amethyst_cheese_wheel', icon: '/assets/icons/meadow/amethyst_cheese_wheel.webp' },
            { id: 'buffalo_cheese_wheel', title: 'Buffalo Cheese Wheel', namespace_id: 'meadow:buffalo_cheese_wheel', icon: '/assets/icons/meadow/buffalo_cheese_wheel.webp' },
            { id: 'warped_cheese_wheel', title: 'Warped Cheese Wheel', namespace_id: 'meadow:warped_cheese_wheel', icon: '/assets/icons/meadow/warped_cheese_wheel.webp' },
            { id: 'grain_cheese_wheel', title: 'Grain Cheese Wheel', namespace_id: 'meadow:grain_cheese_wheel', icon: '/assets/icons/meadow/grain_cheese_wheel.webp' },
            { id: 'sheep_cheese_wheel', title: 'Sheep Cheese Wheel', namespace_id: 'meadow:sheep_cheese_wheel', icon: '/assets/icons/meadow/sheep_cheese_wheel.webp' },
            { id: 'goat_cheese_wheel', title: 'Goat Cheese Wheel', namespace_id: 'meadow:goat_cheese_wheel', icon: '/assets/icons/meadow/goat_cheese_wheel.webp' },
            { id: 'cheesecake', title: 'Cheesecake', namespace_id: 'meadow:cheesecake', icon: '/assets/icons/meadow/cheesecake.webp' },
            { id: 'cheese_tart', title: 'Cheese Tart', namespace_id: 'meadow:cheese_tart', icon: '/assets/icons/meadow/cheese_tart.webp' }
          ]
        },
        {
          id: 'foods',
          title: 'Foods',
          subtitle: 'Slices, sandwiches and savoury dishes.',
          icon: '/assets/icons/meadow/cheese_sandwich.webp',
          search: 'cheese slice cheesecake slice cheese tart slice cheese sandwich roll stick sausage roasted buffalo ham',
          details: true,
          detailsText: `Cheese Sandwiches and Cheese Rolls are crafted from bread and cheese slices. The Cheese Stick comes from the [[Fondue Pot|fondue_pot]]. Buffalo Sausage with Cheese and Roasted Buffalo Ham are cooked in the [[Cookpot|cooking_stations]].`,
          items: [
            { id: 'cheesecake_slice', title: 'Cheesecake Slice', namespace_id: 'meadow:cheesecake_slice', icon: '/assets/icons/meadow/cheesecake_slice.webp' },
            { id: 'cheese_tart_slice', title: 'Cheese Tart Slice', namespace_id: 'meadow:cheese_tart_slice', icon: '/assets/icons/meadow/cheese_tart_slice.webp' },
            { id: 'cheese_slice', title: 'Cheese Slice', namespace_id: 'meadow:cheese_slice', icon: '/assets/icons/meadow/cheese_slice.webp' },
            { id: 'sheep_cheese_slice', title: 'Sheep Cheese Slice', namespace_id: 'meadow:sheep_cheese_slice', icon: '/assets/icons/meadow/sheep_cheese_slice.webp' },
            { id: 'grain_cheese_slice', title: 'Grain Cheese Slice', namespace_id: 'meadow:grain_cheese_slice', icon: '/assets/icons/meadow/grain_cheese_slice.webp' },
            { id: 'amethyst_cheese_slice', title: 'Amethyst Cheese Slice', namespace_id: 'meadow:amethyst_cheese_slice', icon: '/assets/icons/meadow/amethyst_cheese_slice.webp' },
            { id: 'buffalo_cheese_slice', title: 'Buffalo Cheese Slice', namespace_id: 'meadow:buffalo_cheese_slice', icon: '/assets/icons/meadow/buffalo_cheese_slice.webp' },
            { id: 'goat_cheese_slice', title: 'Goat Cheese Slice', namespace_id: 'meadow:goat_cheese_slice', icon: '/assets/icons/meadow/goat_cheese_slice.webp' },
            { id: 'warped_cheese_slice', title: 'Warped Cheese Slice', namespace_id: 'meadow:warped_cheese_slice', icon: '/assets/icons/meadow/warped_cheese_slice.webp' },
            { id: 'cheese_sandwich', title: 'Cheese Sandwich', namespace_id: 'meadow:cheese_sandwich', icon: '/assets/icons/meadow/cheese_sandwich.webp' },
            { id: 'cheese_roll', title: 'Cheese Roll', namespace_id: 'meadow:cheese_roll', icon: '/assets/icons/meadow/cheese_roll.webp' },
            { id: 'cheese_stick', title: 'Cheese Stick', namespace_id: 'meadow:cheese_stick', icon: '/assets/icons/meadow/cheese_stick.webp' },
            { id: 'sausage_with_cheese', title: 'Buffalo Sausage with Cheese', namespace_id: 'meadow:sausage_with_cheese', icon: '/assets/icons/meadow/sausage_with_cheese.webp' },
            { id: 'roasted_buffalo_ham', title: 'Roasted Buffalo Ham', namespace_id: 'meadow:roasted_buffalo_ham', icon: '/assets/icons/meadow/roasted_buffalo_ham.webp' }
          ]
        },
        {
          id: 'buffalo_meat',
          title: 'Raw Buffalo Meat',
          namespace_id: 'meadow:raw_buffalo_meat',
          subtitle: 'Dropped by [[Water Buffalo|water_buffalo]].',
          icon: '/assets/icons/meadow/raw_buffalo_meat.webp',
          search: 'buffalo meat raw cooked food water buffalo drop',
          details: true,
          detailsTitle: 'Cooked Variant',
          detailsText: `Cook it in a Furnace, Smoker or on a Campfire, or with salt in the [[Cookpot|cooking_stations]] for four at once.`,
          items: [
            {
              id: 'cooked_buffalo_meat',
              title: 'Cooked Buffalo Meat',
              namespace_id: 'meadow:cooked_buffalo_meat',
              subtitle: 'As filling as a steak.',
              icon: '/assets/icons/meadow/cooked_buffalo_meat.webp',
              search: 'buffalo meat cooked food'
            }
          ]
        }
      ]
    },
    {
      id: 'crops',
      title: 'Worldgen and Natural Features',
      subtitle: 'What grows and generates in the Meadow biome.',
      entries: [
        {
          id: 'alpine_poppy',
          title: 'Alpine Poppy',
          namespace_id: 'meadow:alpine_poppy',
          subtitle: 'A small yellow mountain flower. Makes Yellow Dye.',
          icon: '/assets/icons/meadow/alpine_poppy.webp',
          search: 'alpine poppy flower yellow dye meadow'
        },
        {
          id: 'delphinium',
          title: 'Delphinium',
          namespace_id: 'meadow:delphinium',
          subtitle: 'A tall flower spike. Makes two Pink Dye.',
          icon: '/assets/icons/meadow/delphinium.webp',
          search: 'delphinium flower pink dye meadow'
        },
        {
          id: 'saxifrage',
          title: 'Saxifrage',
          namespace_id: 'meadow:saxifrage',
          subtitle: 'A hardy little rock plant. Makes two Pink Dye.',
          icon: '/assets/icons/meadow/saxifrage.webp',
          search: 'saxifrage flower pink dye meadow'
        },
        {
          id: 'enzian',
          title: 'Enzian',
          namespace_id: 'meadow:enzian',
          subtitle: 'The deep blue gentian of the Alps. Makes Blue Dye.',
          icon: '/assets/icons/meadow/enzian.webp',
          search: 'enzian gentian blue flower blue dye meadow'
        },
        {
          id: 'fire_lily',
          title: 'Fire Lily',
          namespace_id: 'meadow:fire_lily',
          subtitle: 'A lily in warm orange tones. Makes Yellow Dye.',
          icon: '/assets/icons/meadow/fire_lily.webp',
          search: 'fire lily orange flower yellow dye meadow'
        },
        {
          id: 'eriophorum',
          title: 'Eriophorum',
          namespace_id: 'meadow:eriophorum',
          subtitle: 'Fluffy cotton grass, in a small and a tall version.',
          icon: '/assets/icons/meadow/eriophorum.webp',
          search: 'eriophorum tall eriophorum cotton grass white dye blue dye meadow',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Eriophorum grows in patches across the Meadow biome. The small version makes White Dye, the tall one Blue Dye.`,
          items: [
            { id: 'eriophorum', title: 'Eriophorum', namespace_id: 'meadow:eriophorum', icon: '/assets/icons/meadow/eriophorum.webp' },
            { id: 'tall_eriophorum', title: 'Tall Eriophorum', namespace_id: 'meadow:tall_eriophorum', icon: '/assets/icons/meadow/tall_eriophorum.webp' }
          ]
        },
        {
          id: 'small_fir',
          title: 'Small Fir',
          namespace_id: 'meadow:small_fir',
          subtitle: 'A tiny fir that grows in patches. Makes Green Dye.',
          icon: '/assets/icons/meadow/small_fir.webp',
          search: 'small fir plant green dye worldgen'
        },
        {
          id: 'pine_sapling',
          title: 'Pine',
          subtitle: 'The tree of the Meadow biome and the source of the [[Pine|pine]] wood set.',
          icon: '/assets/icons/meadow/pine_sapling.webp',
          search: 'pine sapling yellow pine sapling tree worldgen meadow',
          details: true,
          detailsTitle: 'Tree Variants',
          detailsText: `Pines come in several sizes, sometimes fallen over. The Yellow Pine only differs in the colour of its needles.`,
          items: [
            {
              id: 'pine_sapling',
              title: 'Pine Sapling',
              namespace_id: 'meadow:pine_sapling',
              icon: '/assets/icons/meadow/pine_sapling.webp'
            },
            {
              id: 'yellow_pine_sapling',
              title: 'Yellow Pine Sapling',
              namespace_id: 'meadow:yellow_pine_sapling',
              icon: '/assets/icons/meadow/yellow_pine_sapling.webp'
            }
          ]
        },
        {
          id: 'alpine_birch',
          title: 'Alpine Birch',
          namespace_id: 'meadow:alpine_birch_sapling',
          subtitle: 'A birch with more detailed bark. Its logs count as birch, so they make regular Birch Planks.',
          icon: '/assets/icons/meadow/alpine_birch_sapling.webp',
          search: 'alpine birch sapling tree worldgen meadow birch wood planks'
        },
        {
          id: 'limestone_formations',
          title: 'Cobbled Limestone',
          subtitle: 'Patches of Cobbled and Mossy Cobbled [[Limestone|limestone]] break up the grass in the Meadow biome.',
          icon: '/assets/icons/meadow/cobbled_limestone.webp',
          search: 'cobbled limestone boulder worldgen meadow'
        },
        {
          id: 'limestone_slabs',
          title: 'Limestone Slabs',
          subtitle: 'Loose Limestone Slabs lie scattered across the Meadow biome.',
          icon: '/assets/icons/meadow/limestone_slab.webp',
          search: 'limestone slab worldgen meadow'
        }
      ]
    },
    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'Shaggy cattle and a big buffalo.',
      entries: [
        {
          id: 'highland_cattle',
          title: 'Highland Cattle',
          subtitle: 'Shaggy cattle that give milk and Rustic Wool.',
          icon: '/assets/icons/meadow/entity/wooly_cow.webp',
          search: 'highland cattle wooly cow meadow milk rustic wool shear',
          details: true,
          detailsTitle: 'Spawning and Interaction',
          detailsText: `Highland Cattle graze in the Meadow biome.

Milk them with a [[Wooden Bucket|buckets]]. Shear them for one to three [[Rustic Wool|wool]]; the coat grows back once they eat grass.`,
          detailsBullets: [
            'Spawns in the Meadow biome',
            'Milk with a Wooden Bucket',
            'Shears: 1–3 Rustic Wool',
            'Coat grows back after eating grass'
          ]
        },
        {
          id: 'umbra_cattle',
          title: 'Umbra Cattle',
          subtitle: 'The dark-coated cousin of the Highland Cattle.',
          icon: '/assets/icons/meadow/entity/umbra_cow.webp',
          search: 'umbra cattle wooly cow dark forest milk chambray wool shear',
          details: true,
          detailsTitle: 'Spawning and Interaction',
          detailsText: `Umbra Cattle live in Dark Forests.

Milk them with a [[Wooden Bucket|buckets]]. Shear them for one to three [[Chambray Wool|wool]].`,
          detailsBullets: [
            'Spawns in Dark Forests',
            'Milk with a Wooden Bucket',
            'Shears: 1–3 Chambray Wool'
          ]
        },
        {
          id: 'water_buffalo',
          title: 'Water Buffalo',
          namespace_id: 'meadow:water_buffalo',
          subtitle: 'A big, calm buffalo that gives Buffalo Milk and meat.',
          icon: '/assets/icons/meadow/entity/water_buffalo.webp',
          search: 'water buffalo milk savanna river swamp buffalo meat wooden bucket',
          details: true,
          detailsTitle: 'Spawning and Interaction',
          detailsText: `Water Buffalo live near rivers and in savannas and swamps.

A [[Wooden Bucket|buckets]] gets you Buffalo Milk for Buffalo Cheese. A regular bucket only gets plain milk.

They drop Leather and [[Raw Buffalo Meat|buffalo_meat]].`,
          detailsBullets: [
            'Spawns at rivers, in savannas and swamps',
            'Wooden Bucket: Buffalo Milk',
            'Regular Bucket: plain Milk',
            'Drops Leather and Raw Buffalo Meat'
          ]
        },
        {
          id: 'warped_cow',
          title: 'Warped Cow',
          subtitle: 'A shaggy cow from the Nether that gives Warped Milk and Warped Wool.',
          icon: '/assets/icons/meadow/entity/warped_cow.webp',
          search: 'warped cow nether portal warped forest milk warped wool wooden warped milk bucket',
          details: true,
          detailsTitle: 'Spawning and Interaction',
          detailsText: `Now and then a Warped Cow steps out of a Nether Portal that stands in a Warped Forest.

Milk it with a [[Wooden Bucket|buckets]] for Warped Milk, and shear it for one to three [[Warped Wool|wool]].`,
          detailsBullets: [
            'Appears at Nether Portals in Warped Forests',
            'Wooden Bucket: Warped Milk',
            'Shears: 1–3 Warped Wool'
          ]
        }
      ]
    },
    {
      id: 'misc_changes',
      title: 'Miscellaneous Changes & Features',
      subtitle: 'Villagers, structures and settings.',
      entries: [
        {
          id: 'config',
          title: 'Configuration',
          subtitle: 'The Completionist Banner effect and its tooltip can be turned off in the config.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config configuration settings banner effect tooltip meadow'
        },
        {
          id: 'villagers',
          title: 'Villagers',
          subtitle: 'Two new professions: the Cheesemaker and the Hermit.',
          icon: '/assets/icons/misc/emerald.webp',
          search: 'villager cheesemaker hermit trades cheese wood profession workstation',
          details: true,
          detailsTitle: 'Professions',
          detailsText: `The Cheesemaker works at the [[Cheese Press|cheese_form]] (on NeoForge at the [[Pine Cheese Rack|pine_cheese_rack]]). They sell Rennet, a Cookpot, Tiled Stoves, Wooden Buckets, milk and finished cheese wheels.

The Hermit works at the [[Woodcutter|woodcutter]]. They buy Pine Logs, Benches, Cabinets and Sheep Milk, and sell pine blocks, Firewood, a Watering Can, the Cooking Frame, an Iron Axe and Alpine Salt.`,
          detailsBullets: [
            'Cheesemaker: dairy tools and cheese',
            'Hermit: pine goods and supplies'
          ]
        },
        {
          id: 'loot',
          title: 'Structures',
          subtitle: 'Small alpine buildings in the Meadow biome.',
          icon: '/assets/icons/misc/chest.webp',
          search: 'structure chalet chapel logging camp monument observation post exploration',
          details: true,
          detailsTitle: 'What you can find',
          detailsText: `While exploring the Meadow biome you can come across a chalet, a small chapel, a logging camp, a monument and an observation post. Some of them are already home to villagers.`,
          detailsBullets: [
            'Chalet',
            'Chapel',
            'Logging Camp',
            'Monument',
            'Observation Post'
          ]
        }
      ]
    }
  ]
}
