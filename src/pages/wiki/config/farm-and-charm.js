export default {
  slug: 'farm-and-charm',
  title: 'Farm & Charm',
  logo: '/assets/mod-logos/farm_and_charm.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'The heart of the Let\'s Do kitchen and farm',
  aboutText: `Farm & Charm is the foundation of the Let's Do food mods. It adds the shared kitchen stations, crops and farming tools that Bakery, Brewery, Candlelight and others build on.

Grow barley, oat, corn, tomatoes, lettuce, onions and strawberries, or find them growing wild. Cook hearty meals on the stove, in the cooking pot and in the roaster, and dry grain in the silo.

Look after your animals with troughs, a chicken coop and pet bowls, pull carts and plows with your horse, and keep your fields growing with compost, fertilized soil and a scarecrow.`,
  sections: [
    {
      id: 'stations',
      title: 'Stations and Processing',
      subtitle: 'Workstations and interactive elements used for cooking, processing, and ingredient preparation.',
      entries: [
        {
          id: 'stove',
          title: 'Stove',
          namespace_id: 'farm_and_charm:stove',
          subtitle: 'The station for baking, and a heat source for pots and roasters.',
          icon: '/assets/icons/farm-and-charm/stove.webp',
          search: 'stove baking fuel heat cooking roaster pot',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Stove has three ingredient slots, a fuel slot and an output slot. Add ingredients and fuel such as coal, and a recipe is done after about twelve seconds. The ingredients and the result are visible on the stove.

A lit stove also heats a [[Cooking Pot|cooking_pot]] or [[Roaster|roaster]] placed on top of it.`,
          detailsBullets: [
            'Three ingredient slots, one fuel slot, one output slot',
            'About twelve seconds per recipe',
            'Needs fuel such as coal or charcoal',
            'Heat source for the Cooking Pot and Roaster'
          ]
        },
        {
          id: 'cooking_pot',
          title: 'Cooking Pot',
          namespace_id: 'farm_and_charm:cooking_pot',
          subtitle: 'A pot for soups, teas and everyday meals. Needs heat from below.',
          icon: '/assets/icons/farm-and-charm/cooking_pot.webp',
          search:
            'cooking pot meals basic hot surface stove magma campfire bubbles recipe book container slot output cooking',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Cooking Pot has six ingredient slots, one slot for the container, such as a bowl or bottle, and one output slot. A meal takes 45 seconds.

It only cooks on a heat source, such as a lit [[Stove|stove]], a Magma Block or a Lava Cauldron. Rising bubbles, cooking sounds and a lit flame in the menu show that it is working.

Ingredients that carry effects pass them on to the finished meal.`,
          detailsBullets: [
            'Six ingredient slots, one container slot, one output slot',
            '45 seconds per meal',
            'Needs a heat source below it',
            'Bubbles, sounds and a flame icon show it is cooking'
          ]
        },
        {
          id: 'roaster',
          title: 'Roaster',
          namespace_id: 'farm_and_charm:roaster',
          subtitle: 'A roasting pan for meat, fish and hearty dishes. Needs heat from below.',
          icon: '/assets/icons/farm-and-charm/roaster.webp',
          search:
            'roaster bigger meals large hot surface stove magma campfire smoke recipe book container slot output cooking',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Roaster works like the [[Cooking Pot|cooking_pot]], with six ingredient slots, one container slot, one output slot and 45 seconds per dish. It is used for roasts, fish and other hearty meals.

It needs a heat source below it, such as a lit [[Stove|stove]]. Smoke rises and the flame in the menu lights up while it is roasting.`,
          detailsBullets: [
            'Six ingredient slots, one container slot, one output slot',
            '45 seconds per dish',
            'Needs a heat source below it'
          ]
        },
        {
          id: 'mincer',
          title: 'Mincer',
          namespace_id: 'farm_and_charm:mincer',
          subtitle: 'A hand-cranked mincer for meat, flour and more.',
          icon: '/assets/icons/farm-and-charm/mincer.webp',
          search: 'mincer crank processing interact right click hold particles sound animation meat iron wood speed',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Mincer has no menu. Right click it with an ingredient to put it in, then hold right click to turn the crank. When it is done, the result drops out at the bottom.

Soft things like meat are minced almost instantly, harder materials take longer. Holding another item of the same kind while cranking speeds things up.`,
          detailsBullets: [
            'Right click with an item to put it in',
            'Hold right click to turn the crank',
            'The result drops out at the bottom',
            'Harder materials take longer'
          ]
        },
        {
          id: 'crafting_bowl',
          title: 'Crafting Bowl',
          namespace_id: 'farm_and_charm:crafting_bowl',
          subtitle: 'A mixing bowl for dough, salads, feed and more.',
          icon: '/assets/icons/farm-and-charm/crafting_bowl.webp',
          search: 'crafting bowl dough cereals salads whisk stir interact no gui empty hand capacity animation',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Crafting Bowl has no menu. Right click it with ingredients to drop up to four of them in. Once the right ingredients are inside, stir the whisk with an empty hand until the result is ready.`,
          detailsBullets: [
            'Holds up to four ingredients',
            'Stir with an empty hand',
            'Used for dough, salads, animal feed and similar recipes'
          ]
        },
        {
          id: 'silo_copper',
          title: 'Silo',
          namespace_id: 'farm_and_charm:silo_copper',
          subtitle: 'A silo for drying grain. The bigger you build it, the more it holds.',
          icon: '/assets/icons/farm-and-charm/silo_copper.webp',
          search: 'silo modular expand width height capacity drying time hatch open close right click storage',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Silo blocks placed together form one large silo, up to three blocks wide and nine blocks tall. The bigger it is, the more it can hold.

Right click the silo with grain or other dryable items to fill it. Open the hatch to let the dried items out; while it is closed, they stay inside. Drying continues either way.

Brewery uses the silo to dry grain for beer and whiskey, and Podzol dries into Fertilized Soil.`,
          detailsBullets: [
            'Combines up to 3 x 3 x 9 blocks',
            'Right click with items to fill it',
            'Open the hatch to release dried items',
            'Comes in wood and copper'
          ]
        }
      ]
    },
    {
      id: 'farming',
      title: 'Farming and Utility',
      subtitle: 'Tools, structures, and mechanics that support everyday farming, animal care, and field management.',
      entries: [
        {
          id: 'fertilized_soil',
          title: 'Fertilized Soil',
          namespace_id: 'farm_and_charm:fertilized_soil',
          subtitle: 'Nutrient-rich soil that boosts the fields around it.',
          icon: '/assets/icons/farm-and-charm/fertilized_soil.webp',
          search: 'fertilized soil hoe convert fertilized farmland pitchfork bone meal effect radius crops uses 4 podzol sugar cane',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Fertilized Soil is crafted, or made by drying Podzol in a [[Silo|silo_copper]].

Use a [[Pitchfork|pitchfork]] on it to spread the nutrients: every crop within five blocks has a chance to grow a stage. Each block of soil lasts for four uses.

A fresh, full block can be turned into [[Fertilized Farmland|fertilized_farmland]] with a hoe. Full soil also helps nearby sugar cane grow.`,
          detailsBullets: [
            'Pitchfork: boosts crops within five blocks',
            'Four uses per block',
            'Hoe on full soil: Fertilized Farmland',
            'Speeds up nearby sugar cane'
          ]
        },
        {
          id: 'fertilized_farmland',
          title: 'Fertilized Farmland',
          namespace_id: 'farm_and_charm:fertilized_farmland',
          subtitle: 'Farmland that cannot be trampled and helps crops grow faster.',
          icon: '/assets/icons/farm-and-charm/fertilized_farmland.webp',
          search: 'fertilized farmland enhanced cannot trample random bone meal chance crop growth',
          details: true,
          detailsTitle: 'Function',
          detailsText:
            'Fertilized Farmland is made by using a hoe on full [[Fertilized Soil|fertilized_soil]]. Crops grow faster on it, and it can never be trampled.',
          detailsBullets: [
            'Cannot be trampled',
            'Crops grow faster and sometimes get an extra growth boost'
          ]
        },
        {
          id: 'feeding_trough',
          title: 'Feeding Trough',
          namespace_id: 'farm_and_charm:feeding_trough',
          subtitle: 'Fill it with seeds and nearby animals help themselves.',
          icon: '/assets/icons/farm-and-charm/feeding_trough.webp',
          search: 'feeding trough seeds capacity animals breeding automatic nearby eat periodically',
          details: true,
          detailsTitle: 'Usage',
          detailsText:
            'Put up to four seeds of one kind into the Feeding Trough. Animals nearby walk over to eat, and after eating they are ready to breed.',
          detailsBullets: [
            'Holds up to four seeds of one kind',
            'Animals nearby come over to eat',
            'Animals that ate are ready to breed',
            'Any seed works for every animal'
          ]
        },
        {
          id: 'water_trough',
          title: 'Water Trough',
          namespace_id: 'farm_and_charm:water_trough',
          subtitle: 'A trough full of water that lets animals breed again sooner.',
          icon: '/assets/icons/farm-and-charm/water_trough.webp',
          search: 'water trough animals farm utility hydration breeding cooldown',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Fill the Water Trough with a Water Bucket. Animals nearby come to drink, which shortens their breeding cooldown by ten seconds. Take the water out again with an empty Bucket.`
        },
        {
          id: 'water_sprinkler',
          title: 'Water Sprinkler',
          namespace_id: 'farm_and_charm:water_sprinkler',
          subtitle: 'Keeps the farmland around it moist, no water source needed.',
          icon: '/assets/icons/farm-and-charm/water_sprinkler.webp',
          search: 'water sprinkler irrigate farmland radius no water supply automatic farming fire campfire candles',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Water Sprinkler waters the farmland around it, so you do not need water nearby. It also puts out fires, campfires and candles in its spray, so place it carefully.

Onions and lettuce next to a sprinkler can grow into [[big crops|big_crops]].`,
          detailsBullets: [
            'Keeps nearby farmland wet',
            'Puts out fire, campfires and candles',
            'Helps crops grow big'
          ]
        },
        {
          id: 'pet_bowl',
          title: 'Pet Bowl',
          namespace_id: 'farm_and_charm:pet_bowl',
          subtitle: 'A food bowl for your cat or dog, with room for a name.',
          icon: '/assets/icons/farm-and-charm/pet_bowl.webp',
          search: 'pet bowl cat dog food feeding name tag shears shift right click screen rename decoration',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Pet Bowl can be filled with [[Cat Food|cat_food]] or [[Dog Food|dog_food]]. It can also hold a Name Tag to unlock a small management Screen.`,
          detailsBullets: [
            'Place Cat Food or Dog Food into the Pet Bowl with Right-Click.',
            'Add a Name Tag with Right-Click to enable Pet Bowl customization.',
            'While a Name Tag is attached: Hold Shift and Right-Click to open the Pet Bowl Screen.',
            'Remove the Name Tag using Shears to get the Name Tag back.'
          ]
        },
        {
          id: 'chicken_coop',
          title: 'Chicken Coop',
          namespace_id: 'farm_and_charm:chicken_coop',
          subtitle: 'A home for up to three chickens that collects their eggs.',
          icon: '/assets/icons/farm-and-charm/chicken_coop.webp',
          search: 'chicken coop store chickens eggs collect leash pitchfork release radius 7',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Up to three chickens can live in the coop. Chickens nearby look for it on their own, or you can lead one there on a leash. The eggs they lay are collected inside, up to nine.

Right click the coop to take all eggs at once. Use a [[Pitchfork|pitchfork]] on it to let the chickens out again.`,
          detailsBullets: [
            'Houses up to three chickens',
            'Stores up to nine eggs',
            'Right click to collect all eggs',
            'Lead chickens in on a leash, or let them find it',
            'Pitchfork releases the chickens'
          ]
        },
        {
          id: 'chicken_nest',
          title: 'Chicken Nest',
          namespace_id: 'farm_and_charm:chicken_nest',
          subtitle: 'A nest where chickens lay their eggs instead of on the ground.',
          icon: '/assets/icons/farm-and-charm/chicken_nest.webp',
          search: 'chicken nest coop farm eggs storage nearby chickens',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Chickens nearby lay their eggs into the nest instead of dropping them on the ground.`,
          detailsBullets: [
            'Chickens lay their eggs into it',
            'Holds up to two eggs'
          ]
        }
      ]
    },
    {
      id: 'decor',
      title: 'Decor and Building',
      subtitle: 'Decorative and structural elements used to build farms, barns, and rural spaces.',
      entries: [
        {
          id: 'window_sill',
          title: 'Window Sill',
          namespace_id: 'farm_and_charm:window_sill',
          subtitle: 'A flower box for the window, with room for two small flowers.',
          icon: '/assets/icons/farm-and-charm/window_sill.webp',
          search: 'window sill decorate farmhouse holds 2 small flowers tag #small_flowers'
        },
        {
          id: 'tool_rack',
          title: 'Tool Rack',
          namespace_id: 'farm_and_charm:tool_rack',
          subtitle: 'Hang your tools and pans on the wall.',
          icon: '/assets/icons/farm-and-charm/tool_rack.webp',
          search: 'tool rack toolrack storage tools pans kitchen decor'
        },
        {
          id: 'scarecrow',
          title: 'Scarecrow',
          namespace_id: 'farm_and_charm:scarecrow',
          subtitle: 'The reward for cooking every meal. Helps the crops around it grow.',
          icon: '/assets/icons/farm-and-charm/scarecrow.webp',
          search:
            'scarecrow reward cook all meals dishes completion unlock growth boost 10 percent range animated sways wind weather dungarees overalls pants funny',
          details: true,
          detailsTitle: 'Reward',
          detailsText: `Collect every Farm & Charm meal to complete the final advancement and receive two Scarecrows. More can be crafted from an existing Scarecrow, a Barley Ball and sticks.

Every 25 seconds the Scarecrow helps all crops within eight blocks grow a little. It sways gently in the wind, and it wears [[Dungarees|dungarees]] that you can take off or put back on.`,
          detailsBullets: [
            'Reward for collecting every meal',
            'Gives crops within 8 blocks an extra growth tick every 25 seconds',
            'Can be copied with a Barley Ball and sticks',
            'Right click to take off or put on its Dungarees'
          ]
        },
        {
          id: 'rope',
          title: 'Rope',
          namespace_id: 'farm_and_charm:rope',
          subtitle: 'Rope for fences, hanging decorations and climbing crops.',
          icon: '/assets/icons/farm-and-charm/rope.webp',
          search:
            'rope rope knot knot utility building decoration lantern bell hang climbing crops support anchor connect corner vertical horizontal',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Rope connects in every direction and can be tied to fences and sturdy blocks. It needs an anchor somewhere along its length, such as a solid block or a Rope Knot, or it falls down.

Lanterns and bells can hang from it, and climbing crops such as [[tomatoes|wild_tomato]] and Brewery's hops grow up along it.`,
          detailsBullets: [
            'Connects in all six directions',
            'Needs an anchor: a solid block or a Rope Knot',
            'Holds lanterns and bells',
            'Supports climbing crops'
          ]
        },
        {
          id: 'packed_dirt',
          title: 'Packed Dirt',
          namespace_id: 'farm_and_charm:packed_dirt',
          subtitle: 'Hard-packed dirt for farm paths and yards. Wears down where people and animals walk.',
          icon: '/assets/icons/farm-and-charm/packed_dirt.webp',
          search: 'packed dirt path farm yard trail road trampled wear shovel hoe seal stable floor',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Paths made from it wear down over time: whenever people or animals walk or land on it, it gets a little more worn and eventually turns into [[Trampled Packed Dirt|trampled_packed_dirt]].

Use a shovel or hoe on Packed Dirt to seal it. Sealed dirt no longer wears down. Use the tool again to undo it.

It is also the base for [[Stable Floor|stable_floor]].`,
          detailsBullets: [
            'Slowly wears down into Trampled Packed Dirt',
            'Shovel or hoe seals it against wear',
            'Ingredient for Stable Floor'
          ]
        },
        {
          id: 'trampled_packed_dirt',
          title: 'Trampled Packed Dirt',
          namespace_id: 'farm_and_charm:trampled_packed_dirt',
          subtitle: 'Packed dirt, worn down by many feet. A shovel or hoe smooths it back into Packed Dirt.',
          icon: '/assets/icons/farm-and-charm/trampled_packed_dirt.webp',
          search: 'trampled packed dirt worn path farm yard trail road'
        },
        {
          id: 'pen_fences',
          title: 'Chicken Fence and Iron Divider',
          subtitle: 'Low pen fences for coops and stables.',
          search: 'chicken fence iron divider pen fence coop stable animals',
          items: [
            { id: 'chicken_fence', title: 'Chicken Fence', namespace_id: 'farm_and_charm:chicken_fence' },
            { id: 'iron_divider', title: 'Iron Divider', namespace_id: 'farm_and_charm:iron_divider' }
          ]
        },
        {
          id: 'stable_floor',
          title: 'Stable Floor',
          namespace_id: 'farm_and_charm:stable_floor',
          subtitle: 'A floor for stables and barns. Wears down over time; a shovel or hoe seals it.',
          icon: '/assets/icons/farm-and-charm/stable_floor.webp',
          search: 'stable floor barn stable building decor animals pen'
        },
        {
          id: 'trampled_stable_floor',
          title: 'Trampled Stable Floor',
          namespace_id: 'farm_and_charm:trampled_stable_floor',
          subtitle: 'A stable floor, worn down by animals. A shovel or hoe restores it.',
          icon: '/assets/icons/farm-and-charm/trampled_stable_floor.webp',
          search: 'trampled stable floor barn animals pen walkway worn'
        },
        {
          id: 'straw_stable_floor',
          title: 'Straw Stable Floor',
          namespace_id: 'farm_and_charm:straw_stable_floor',
          subtitle: 'A stable floor covered in straw. Appears on its own next to Hay Bales.',
          icon: '/assets/icons/farm-and-charm/straw_stable_floor.webp',
          search: 'straw stable floor barn straw animals cozy stable hay bale wheat',
          details: true,
          detailsTitle: 'How to get it',
          detailsText: `Straw Stable Floor cannot be crafted. Place a Hay Bale right next to an unsealed [[Stable Floor|stable_floor]] (up to one block away, including diagonally). Over time the floor picks up straw by itself: there is a chance each time it is placed, a neighbouring block changes or something walks on it.

Use a shovel or hoe to sweep the straw away. You get Wheat back and the plain Stable Floor remains. Breaking it drops a Stable Floor and Wheat.`,
          detailsBullets: [
            'Not craftable',
            'Stable Floor next to a Hay Bale turns into it over time',
            'Sealed Stable Floor stays straw-free',
            'Shovel or hoe: back to Stable Floor, drops Wheat'
          ]
        },
        {
          id: 'bag',
          title: 'Bag',
          subtitle: 'Sacks full of produce. Store nine items in one block and put it on display.',
          icon: '/assets/icons/farm-and-charm/onion_bag.webp',
          search: 'bag decoration ingredient sack strawberry carrot potato beetroot lettuce tomato corn onion flour'
        },
        {
          id: 'grain_ball',
          title: 'Grain Balls',
          subtitle: 'Bundles of oat and barley, for storage and decoration.',
          icon: '/assets/icons/farm-and-charm/oat_ball.webp',
          search: 'grain ball oat barley food ingredient'
        },
        {
          id: 'sturdy_ladder',
          title: 'Sturdy Ladder',
          namespace_id: 'farm_and_charm:sturdy_ladder',
          subtitle: 'A free-standing ladder that can be extended from the bottom.',
          icon: '/assets/icons/farm-and-charm/sturdy_ladder.webp',
          search: 'sturdy ladder barn farm building climb extend stack place on ladder support walls ground'
        },
        {
          id: 'pet_food_bags',
          title: 'Pet Food Bags',
          subtitle: 'Sacks of cat and dog food, for storage and decoration.',
          icon: '/assets/icons/farm-and-charm/cat_food_bag.webp',
          search: 'pet food bags dog food cat food sacks decorative storage stackable'
        },
        {
          id: 'cattlegrid',
          title: 'Cattlegrid',
          namespace_id: 'farm_and_charm:cattlegrid',
          subtitle: 'Lets you walk through while your animals stay in.',
          icon: '/assets/icons/farm-and-charm/cattlegrid.webp',
          search: 'cattlegrid farm gate enclosure livestock cows sheep pigs horses block animals pass players',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `A Cattlegrid keeps your animals inside without a gate. Use it for farm entrances and paddocks.`,
          detailsBullets: [
            'Farm animals cannot cross it',
            'Players can walk over it, a little slower',
            'Cats cross it easily'
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Everyday items, ingredients, and tools used across cooking, farming, and processing.',
      entries: [
        {
          id: 'fertilizer',
          title: 'Fertilizer',
          namespace_id: 'farm_and_charm:fertilizer',
          subtitle: 'Works just like Bone Meal.',
          icon: '/assets/icons/farm-and-charm/fertilizer.webp',
          search: 'fertilizer enhanced bone meal apply large area crops growth farming'
        },
        {
          id: 'compost',
          title: 'Compost',
          namespace_id: 'farm_and_charm:compost',
          subtitle: 'Fertilizes several crops around you at once. Lasts for ten uses.',
          icon: '/assets/icons/farm-and-charm/compost.webp',
          search: 'compost 10 uses apply bone meal wide area crops growth farming big giant',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Use Compost on a crop and two to six random crops in a 5 x 5 area around it grow a stage. One Compost lasts for ten uses.

Compost is also the way to grow [[giant onions and lettuce|big_crops]].`,
          detailsBullets: [
            'Boosts two to six crops in a 5 x 5 area',
            'Ten uses',
            'Can make onions and lettuce grow big or giant'
          ]
        },
        {
          id: 'pitchfork',
          title: 'Pitchfork',
          namespace_id: 'farm_and_charm:pitchfork',
          subtitle: 'A hoe with a special trick on Fertilized Soil.',
          icon: '/assets/icons/farm-and-charm/pitchfork.webp',
          search: 'pitchfork hoe fertilized soil bone meal effect farming tool range crops uses durability',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `The Pitchfork tills soil like an iron hoe. Its real job is spreading [[Fertilized Soil|fertilized_soil]]: use it on the soil and every crop within five blocks has a 20% chance to grow a stage. Each block of soil can be used four times.

It also releases the chickens from a [[Chicken Coop|chicken_coop]], and makes a decent weapon. Some zombies carry one.`,
          detailsBullets: [
            'Works as a hoe',
            'Spreads Fertilized Soil: 20% chance per crop within 5 blocks',
            'Releases chickens from the Chicken Coop'
          ]
        },
        {
          id: 'dungarees',
          title: 'Dungarees',
          namespace_id: 'farm_and_charm:dungarees',
          subtitle: 'Farm workwear that protects your fields and shows how well fed your animals are.',
          icon: '/assets/icons/farm-and-charm/dungarees.webp',
          search: 'dungarees workwear farming armor saturation farmland villager wool repair',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Dungarees are worn in the leggings slot. They give only a little protection, but they make farm work easier.`,
          detailsBullets: [
            'You do not trample farmland while wearing them',
            'Shows how well fed your farm animals are',
            'A little armor'
          ]
        },
        {
          id: 'supply_cart',
          title: 'Supply Cart',
          namespace_id: 'farm_and_charm:supply_cart',
          subtitle: 'A cart with a chest, pulled by a horse, a donkey or yourself.',
          icon: '/assets/icons/farm-and-charm/supply_cart.webp',
          search: 'supply cart placeable attach horse detach storage open mobile transport move supplies farm utility',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place the Supply Cart on the ground. Right click it to pull it yourself, or right click a tamed horse or donkey to hitch it up.`,
          detailsBullets: [
            'Right click to pull it yourself',
            'Right click a tamed horse or donkey to hitch it',
            'Sneak and right click to open the chest',
            'Sneak and right click to unhitch it'
          ]
        },
        {
          id: 'plow',
          title: 'Plow',
          namespace_id: 'farm_and_charm:plow',
          subtitle: 'A plow that tills the ground as you pull it.',
          icon: '/assets/icons/farm-and-charm/plow.webp',
          search: 'plow cart placeable attachment attach horse detach toggle plowing farming fields till soil',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place the Plow on the ground and hitch it to yourself or to a tamed horse or donkey. Lower it and it tills the ground as you go.`,
          detailsBullets: [
            'Right click to pull it yourself',
            'Right click a tamed horse or donkey to hitch it',
            'Sneak and right click to lower or raise the plow',
            'Sneak and right click to unhitch it'
          ]
        },
        {
          id: 'yeast',
          title: 'Yeast',
          namespace_id: 'farm_and_charm:yeast',
          subtitle: 'Needed for bread, pastries and brewing.',
          icon: '/assets/icons/farm-and-charm/yeast.webp',
          search: 'yeast baking fermentation bread pastries ingredient'
        },
        {
          id: 'butter',
          title: 'Butter',
          namespace_id: 'farm_and_charm:butter',
          subtitle: 'A rich ingredient for many recipes.',
          icon: '/assets/icons/farm-and-charm/butter.webp',
          search: 'butter ingredient cooking baking recipes dairy'
        },
        {
          id: 'dough',
          title: 'Dough',
          namespace_id: 'farm_and_charm:dough',
          subtitle: 'The base for bread and baked goods.',
          icon: '/assets/icons/farm-and-charm/dough.webp',
          search: 'dough bread baking base ingredient pastries'
        },
        {
          id: 'raw_pasta',
          title: 'Raw Pasta',
          namespace_id: 'farm_and_charm:raw_pasta',
          subtitle: 'Fresh pasta, ready to be cooked.',
          icon: '/assets/icons/farm-and-charm/raw_pasta.webp',
          search: 'raw pasta ingredient cooking meals noodles'
        },
        {
          id: 'flour',
          title: 'Flour',
          namespace_id: 'farm_and_charm:flour',
          subtitle: 'Milled grain for baking and cooking.',
          icon: '/assets/icons/farm-and-charm/flour.webp',
          search: 'flour wheat baking ingredient cooking recipes'
        },
        {
          id: 'minced_beef',
          title: 'Minced Beef',
          namespace_id: 'farm_and_charm:minced_beef',
          subtitle: 'Minced in the Mincer, used in hearty meals.',
          icon: '/assets/icons/farm-and-charm/minced_beef.webp',
          search: 'minced beef meat ingredient cooking meals'
        },
        {
          id: 'lamb_ham',
          title: 'Lamb Ham',
          namespace_id: 'farm_and_charm:lamb_ham',
          subtitle: 'A cut of lamb for rustic dishes.',
          icon: '/assets/icons/farm-and-charm/lamb_ham.webp',
          search: 'lamb ham meat ingredient cooking meals'
        },
        {
          id: 'bacon',
          title: 'Bacon',
          namespace_id: 'farm_and_charm:bacon',
          subtitle: 'A breakfast classic.',
          icon: '/assets/icons/farm-and-charm/bacon.webp',
          search: 'bacon pork meat ingredient cooking meals breakfast'
        },
        {
          id: 'chicken_parts',
          title: 'Chicken Parts',
          namespace_id: 'farm_and_charm:chicken_parts',
          subtitle: 'For chicken dishes and animal feed.',
          icon: '/assets/icons/farm-and-charm/chicken_parts.webp',
          search: 'chicken parts meat ingredient cooking recipes'
        },
        {
          id: 'cat_food',
          title: 'Cat Food',
          namespace_id: 'farm_and_charm:cat_food',
          subtitle: 'Makes taming cats easier. Wild cats stop running away while you hold it.',
          icon: '/assets/icons/farm-and-charm/cat_food.webp',
          search: 'cat food cats tame chance hold in hand wild cats wont run away pet bowl gift heal breed',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `While you hold Cat Food, wild cats no longer flee from you. Feed it to a wild cat for a one in three chance to tame it.

Tamed cats are healed by it and get ready to breed. Cats that ate from a [[Pet Bowl|pet_bowl]] are sure to bring their owner a morning gift.`,
          detailsBullets: [
            'Wild cats stay put while you hold it',
            '1 in 3 chance to tame per feeding',
            'Heals tamed cats and lets them breed',
            'Fed from a Pet Bowl: guaranteed morning gift'
          ]
        },
        {
          id: 'dog_food',
          title: 'Dog Food',
          namespace_id: 'farm_and_charm:dog_food',
          subtitle: 'Tames a wolf on the first try, heals it and makes it stronger for three minutes.',
          icon: '/assets/icons/farm-and-charm/dog_food.webp',
          search: 'dog food wolves tame first try effect wolf pet'
        },
        {
          id: 'horse_fodder',
          title: 'Horse Fodder',
          namespace_id: 'farm_and_charm:horse_fodder',
          subtitle: 'Tames a horse on the first try, heals it and makes it faster for five minutes.',
          icon: '/assets/icons/farm-and-charm/horse_fodder.webp',
          search: 'horse fodder horses tame first try effect horse mount'
        },
        {
          id: 'chicken_feed',
          title: 'Chicken Feed',
          namespace_id: 'farm_and_charm:chicken_feed',
          subtitle: 'Makes chickens lay more eggs. Players can eat it too, with funny results.',
          icon: '/assets/icons/farm-and-charm/chicken_feed.webp',
          search: 'chicken feed chickens cluck effect player consume',
          details: true,
          detailsTitle: 'Effect',
          detailsText: `Feed it to a chicken and it gets [[Cluck|cluck]] for a minute, laying extra eggs and shedding feathers. Eat it yourself and you get Cluck for 20 seconds. Try it.`
        },
        {
          id: 'rotten_tomato',
          title: 'Rotten Tomato',
          namespace_id: 'farm_and_charm:rotten_tomato',
          subtitle: 'Throw it at someone. It stings a little and makes them feel sick.',
          icon: '/assets/icons/farm-and-charm/rotten_tomato.webp',
          search: 'rotten tomato throwable weapon toss poison creatures friends prank'
        }
      ]
    },
    {
      id: 'consumables',
      title: 'Consumables',
      subtitle: 'Meals, drinks, soups, and other consumable food items.',
      entries: [
        {
          id: 'tea',
          title: 'Tea',
          subtitle: 'Strawberry, nettle and ribwort tea, brewed with a water bottle in the [[Cooking Pot|cooking_pot]].',
          icon: '/assets/icons/farm-and-charm/strawberry_tea.webp',
          search: 'tea brew wild plants water cooking pot herbalbrews tea jug glass bottle right click share friends cup',
          details: true,
          detailsTitle: 'Sharing tea',
          detailsText: `Place a jug of tea and right click it with an empty Glass Bottle to pour a cup. Each jug fills two cups, which makes it easy to share with friends. A cup has a smaller effect than the whole jug and gives the bottle back.`,
          detailsBullets: [
            'Strawberry Tea Cup: Haste',
            'Nettle Tea Cup: Instant Health',
            'Ribwort Tea Cup: Regeneration',
            'Two cups per jug'
          ],
          items: [
            { id: 'strawberry_tea_cup', title: 'Strawberry Tea Cup', namespace_id: 'farm_and_charm:strawberry_tea_cup', icon: '/assets/icons/farm-and-charm/strawberry_tea_cup.webp' },
            { id: 'nettle_tea_cup', title: 'Nettle Tea Cup', namespace_id: 'farm_and_charm:nettle_tea_cup', icon: '/assets/icons/farm-and-charm/nettle_tea_cup.webp' },
            { id: 'ribwort_tea_cup', title: 'Ribwort Tea Cup', namespace_id: 'farm_and_charm:ribwort_tea_cup', icon: '/assets/icons/farm-and-charm/ribwort_tea_cup.webp' }
          ]
        },
        {
          id: 'food',
          title: 'Food',
          namespace_id: '',
          subtitle: 'Hearty farmhouse cooking. Every meal comes with an effect.',
          icon: '/assets/icons/farm-and-charm/bacon_with_eggs.webp',
          search: 'food meals dishes soups pancakes bread meats saturation hunger effects',
          details: true,
          detailsTitle: 'All Meals',
          detailsText: `Every Farm & Charm meal gives one of the [[food effects|mob_effects]]: soups give Rested, breakfasts and cakes a blessing, and hearty dishes Sustenance, Satiation or Feast. Many meals can also be placed on the table.`,
   items: [
     {
       id: 'oat_pancake',
       title: 'Oat Pancake',
       namespace_id: 'farm_and_charm:oat_pancake',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/oat_pancake.webp',
       search: 'oat pancake food meal'
     },
     {
       id: 'roasted_corn',
       title: 'Roasted Corn',
       namespace_id: 'farm_and_charm:roasted_corn',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/roasted_corn.webp',
       search: 'roasted corn food meal'
     },
     {
       id: 'potato_with_roast_meat',
       title: 'Potato with Roast Meat',
       namespace_id: 'farm_and_charm:potato_with_roast_meat',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/potato_with_roast_meat.webp',
       search: 'potato roast meat food meal'
     },
     {
       id: 'baked_lamb_ham',
       title: 'Baked Lamb Ham',
       namespace_id: 'farm_and_charm:baked_lamb_ham',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/baked_lamb_ham.webp',
       search: 'baked lamb ham food meal'
     },
     {
       id: 'farmers_breakfast',
       title: "Farmer's Breakfast",
       namespace_id: 'farm_and_charm:farmers_breakfast',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/farmers_breakfast.webp',
       search: 'farmers breakfast food meal'
     },
     {
       id: 'stuffed_chicken',
       title: 'Stuffed Chicken',
       namespace_id: 'farm_and_charm:stuffed_chicken',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/stuffed_chicken.webp',
       search: 'stuffed chicken food meal'
     },
     {
       id: 'stuffed_rabbit',
       title: 'Stuffed Rabbit',
       namespace_id: 'farm_and_charm:stuffed_rabbit',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/stuffed_rabbit.webp',
       search: 'stuffed rabbit food meal'
     },
     {
       id: 'farmers_bread',
       title: "Farmer's Bread",
       namespace_id: 'farm_and_charm:farmers_bread',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/farmers_bread.webp',
       search: 'farmers bread food meal'
     },
     {
       id: 'grandmothers_strawberry_cake',
       title: "Grandmother's Strawberry Cake",
       namespace_id: 'farm_and_charm:grandmothers_strawberry_cake',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/grandmothers_strawberry_cake.webp',
       search: 'strawberry cake food meal'
     },
     {
       id: 'farmer_salad',
       title: 'Farmer Salad',
       namespace_id: 'farm_and_charm:farmer_salad',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/farmer_salad.webp',
       search: 'salad food meal'
     },
     {
       id: 'goulash',
       title: 'Goulash',
       namespace_id: 'farm_and_charm:goulash',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/goulash.webp',
       search: 'goulash food meal'
     },
     {
       id: 'simple_tomato_soup',
       title: 'Simple Tomato Soup',
       namespace_id: 'farm_and_charm:simple_tomato_soup',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/simple_tomato_soup.webp',
       search: 'tomato soup food meal'
     },
     {
       id: 'barley_soup',
       title: 'Barley Soup',
       namespace_id: 'farm_and_charm:barley_soup',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/barley_soup.webp',
       search: 'barley soup food meal'
     },
     {
       id: 'onion_soup',
       title: 'Onion Soup',
       namespace_id: 'farm_and_charm:onion_soup',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/onion_soup.webp',
       search: 'onion soup food meal'
     },
     {
       id: 'potato_soup',
       title: 'Potato Soup',
       namespace_id: 'farm_and_charm:potato_soup',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/potato_soup.webp',
       search: 'potato soup food meal'
     },
     {
       id: 'pasta_with_onion_sauce',
       title: 'Pasta with Onion Sauce',
       namespace_id: 'farm_and_charm:pasta_with_onion_sauce',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/pasta_with_onion_sauce.webp',
       search: 'pasta onion sauce food meal'
     },
     {
       id: 'corn_grits',
       title: 'Corn Grits',
       namespace_id: 'farm_and_charm:corn_grits',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/corn_grits.webp',
       search: 'corn grits food meal'
     },
     {
       id: 'oatmeal_with_strawberries',
       title: 'Oatmeal with Strawberries',
       namespace_id: 'farm_and_charm:oatmeal_with_strawberries',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/oatmeal_with_strawberries.webp',
       search: 'oatmeal strawberries food meal'
     },
     {
       id: 'sausage_with_oat_patty',
       title: 'Sausage with Oat Patty',
       namespace_id: 'farm_and_charm:sausage_with_oat_patty',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/sausage_with_oat_patty.webp',
       search: 'sausage oat patty food meal'
     },
     {
       id: 'lamb_with_corn',
       title: 'Lamb with Corn',
       namespace_id: 'farm_and_charm:lamb_with_corn',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/lamb_with_corn.webp',
       search: 'lamb corn food meal'
     },
     {
       id: 'beef_patty_with_vegetables',
       title: 'Beef Patty with Vegetables',
       namespace_id: 'farm_and_charm:beef_patty_with_vegetables',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/beef_patty_with_vegetables.webp',
       search: 'beef patty vegetables food meal'
     },
     {
       id: 'barley_patties_with_potatoes',
       title: 'Barley Patty with Potatoes',
       namespace_id: 'farm_and_charm:barley_patties_with_potatoes',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/barley_patties_with_potatoes.webp',
       search: 'barley patties potatoes food meal'
     },
     {
       id: 'bacon_with_eggs',
       title: 'Bacon with Eggs',
       namespace_id: 'farm_and_charm:bacon_with_eggs',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/bacon_with_eggs.webp',
       search: 'bacon eggs food meal'
     },
     {
       id: 'chicken_wrapped_in_bacon',
       title: 'Chicken Wrapped in Bacon with Noodles',
       namespace_id: 'farm_and_charm:chicken_wrapped_in_bacon',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/chicken_wrapped_in_bacon.webp',
       search: 'chicken bacon food meal'
     },
     {
       id: 'cooked_salmon',
       title: 'Cooked Salmon',
       namespace_id: 'farm_and_charm:cooked_salmon',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/cooked_salmon.webp',
       search: 'salmon food meal fish'
     },
     {
       id: 'cooked_cod',
       title: 'Cooked Cod',
       namespace_id: 'farm_and_charm:cooked_cod',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/cooked_cod.webp',
       search: 'cod food meal fish'
     },
     {
       id: 'roasted_chicken',
       title: 'Roasted Chicken',
       namespace_id: 'farm_and_charm:roasted_chicken',
       subtitle: '',
       icon: '/assets/icons/farm-and-charm/roasted_chicken.webp',
       search: 'roasted chicken food meal'
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
          id: 'wild_barley',
          title: 'Barley',
          namespace_id: 'farm_and_charm:wild_barley',
          subtitle: 'Wild Barley grows in plains, sunflower plains, savannas and along rivers.',
          icon: '/assets/icons/farm-and-charm/wild_barley.webp',
          search: 'barley grain wild barley farming',
          items: [
            {
              id: 'barley_seeds',
              title: 'Barley Seeds',
              namespace_id: 'farm_and_charm:barley_seeds',
              subtitle: 'Used to cultivate Barley on farmland.',
              icon: '/assets/icons/farm-and-charm/barley_seeds.webp',
              search: 'barley seeds farming crop'
            },
            {
              id: 'barley',
              title: 'Barley',
              namespace_id: 'farm_and_charm:barley',
              subtitle: 'A hardy grain used for soups and rustic meals.',
              icon: '/assets/icons/farm-and-charm/barley.webp',
              search: 'barley crop plant growth'
            },
            {
              id: 'barley_crop',
              title: 'Barley Crop',
              namespace_id: 'farm_and_charm:barley_crop',
              subtitle: 'A fully grown Barley plant waiting to be harvested.',
              icon: '/assets/icons/farm-and-charm/barley_crop.webp',
              search: 'wild barley worldgen plant'
            }
          ]
        },
        {
          id: 'emmer',
          title: 'Emmer',
          namespace_id: 'farm_and_charm:wild_emmer',
          subtitle:
            'An ancient ancestor of wheat. Wild Emmer grows in plains, sunflower plains, forests and along rivers, and gives you Wheat Seeds.',
          icon: '/assets/icons/farm-and-charm/wild_emmer.webp',
          search: 'emmer grain wild emmer wheat farming',
          items: [
            {
              id: 'wheat_seeds',
              title: 'Wheat Seeds',
              namespace_id: 'minecraft:wheat_seeds',
              subtitle: 'Used to cultivate Wheat on farmland.',
              icon: '/assets/icons/farm-and-charm/wheat_seeds.webp',
              search: 'wheat seeds farming crop'
            },
            {
              id: 'wheat',
              title: 'Wheat',
              namespace_id: 'minecraft:wheat',
              subtitle: 'A cultivated grain descended from ancient Emmer.',
              icon: '/assets/icons/farm-and-charm/wheat.webp',
              search: 'wheat grain crop'
            },
            {
              id: 'wheat_crop',
              title: 'Wheat Crop',
              namespace_id: 'minecraft:wheat',
              subtitle: 'A fully grown Wheat plant ready for harvest.',
              icon: '/assets/icons/farm-and-charm/wheat_crop.webp',
              search: 'wheat crop plant growth'
            }
          ]
        },
        {
          id: 'wild_oat',
          title: 'Oat',
          namespace_id: 'farm_and_charm:wild_oat',
          subtitle: 'A soft grain for baking and warm breakfasts. Wild Oat grows in meadows and taigas.',
          icon: '/assets/icons/farm-and-charm/wild_oat.webp',
          search: 'oat grain wild oat farming',
          items: [
            {
              id: 'oat_seeds',
              title: 'Oat Seeds',
              namespace_id: 'farm_and_charm:oat_seeds',
              subtitle: 'Used to cultivate Oat on farmland.',
              icon: '/assets/icons/farm-and-charm/oat_seeds.webp',
              search: 'oat seeds farming crop'
            },
            {
              id: 'oat',
              title: 'Oat',
              namespace_id: 'farm_and_charm:oat',
              subtitle: 'A soft and nourishing grain used for baking and warm breakfasts.',
              icon: '/assets/icons/farm-and-charm/oat.webp',
              search: 'oat grain food'
            },
            {
              id: 'oat_crop',
              title: 'Oat Crop',
              namespace_id: 'farm_and_charm:oat_crop',
              subtitle: 'A fully grown Oat plant gently swaying in the wind, ready for harvest.',
              icon: '/assets/icons/farm-and-charm/oat_crop.webp',
              search: 'oat crop plant growth'
            }
          ]
        },
        {
          id: 'wild_corn',
          title: 'Corn',
          namespace_id: 'farm_and_charm:wild_corn',
          subtitle: 'A tall crop for warm, dry places. Wild Corn grows in plains, savannas and badlands.',
          icon: '/assets/icons/farm-and-charm/wild_corn.webp',
          search: 'corn crop wild corn farming',
          items: [
            {
              id: 'kernels',
              title: 'Corn Kernels',
              namespace_id: 'farm_and_charm:kernels',
              subtitle: 'Used to cultivate Corn on farmland.',
              icon: '/assets/icons/farm-and-charm/kernels.webp',
              search: 'corn kernels farming crop'
            },
            {
              id: 'corn',
              title: 'Corn',
              namespace_id: 'farm_and_charm:corn',
              subtitle: 'A versatile grain harvested from tall stalks and used in many hearty meals.',
              icon: '/assets/icons/farm-and-charm/corn.webp',
              search: 'corn grain food'
            },
            {
              id: 'corn_crop',
              title: 'Corn Crop',
              namespace_id: 'farm_and_charm:corn_crop',
              subtitle: 'A fully grown Corn plant standing tall and ready for harvest.',
              icon: '/assets/icons/farm-and-charm/corn_crop.webp',
              search: 'corn crop plant growth'
            }
          ]
        },
        {
          id: 'wild_tomato',
          title: 'Tomato',
          namespace_id: 'farm_and_charm:tomato',
          subtitle:
            'A sun-loving climber. Wild Tomatoes grow in plains, savannas and badlands, and planted tomatoes climb up [[Rope|rope]].',
          icon: '/assets/icons/farm-and-charm/wild_tomatoes.webp',
          search: 'tomato crop wild tomatoes farming',
          items: [
            {
              id: 'tomato_seeds',
              title: 'Tomato Seeds',
              namespace_id: 'farm_and_charm:tomato_seeds',
              subtitle: 'Used to cultivate Tomatoes on farmland.',
              icon: '/assets/icons/farm-and-charm/tomato_seeds.webp',
              search: 'tomato seeds farming crop'
            },
            {
              id: 'tomato',
              title: 'Tomato',
              namespace_id: 'farm_and_charm:tomato',
              subtitle: 'A juicy and flavorful ingredient used in soups and rustic meals.',
              icon: '/assets/icons/farm-and-charm/tomato.webp',
              search: 'tomato food ingredient'
            },
            {
              id: 'tomato_crop',
              title: 'Tomato Crop',
              namespace_id: 'farm_and_charm:tomato_crop',
              subtitle: 'A fully grown Tomato plant heavy with ripe fruit, ready for harvest.',
              icon: '/assets/icons/farm-and-charm/tomato_crop.webp',
              search: 'tomato crop plant growth'
            }
          ]
        },
        {
          id: 'wild_lettuce',
          title: 'Lettuce',
          namespace_id: 'farm_and_charm:lettuce',
          subtitle: 'A leafy crop that can grow [[big|big_crops]]. Wild Lettuce grows in plains, meadows, forests, taigas, swamps and along rivers.',
          icon: '/assets/icons/farm-and-charm/wild_lettuce.webp',
          search: 'lettuce crop wild lettuce farming',
          items: [
            {
              id: 'lettuce_seeds',
              title: 'Lettuce Seeds',
              namespace_id: 'farm_and_charm:lettuce_seeds',
              subtitle: 'Used to cultivate Lettuce on farmland.',
              icon: '/assets/icons/farm-and-charm/lettuce_seeds.webp',
              search: 'lettuce seeds farming crop'
            },
            {
              id: 'lettuce',
              title: 'Lettuce',
              namespace_id: 'farm_and_charm:lettuce',
              subtitle: 'A fresh and tender leaf used for salads and light meals.',
              icon: '/assets/icons/farm-and-charm/lettuce.webp',
              search: 'lettuce food ingredient'
            },
            {
              id: 'lettuce_crop',
              title: 'Lettuce Crop',
              namespace_id: 'farm_and_charm:lettuce_crop',
              subtitle: 'A fully grown Lettuce plant ready to be harvested.',
              icon: '/assets/icons/farm-and-charm/lettuce_crop.webp',
              search: 'lettuce crop plant growth'
            }
          ]
        },
        {
          id: 'wild_onion',
          title: 'Onion',
          namespace_id: 'farm_and_charm:onion',
          subtitle:
            'A sharp, aromatic crop that can grow [[big|big_crops]]. Wild Onions grow in plains, meadows, forests, taigas, swamps and along rivers. Plant an onion to grow more.',
          icon: '/assets/icons/farm-and-charm/wild_onions.webp',
          search: 'onion crop wild onions farming',
          items: [
            {
              id: 'onion',
              title: 'Onion',
              namespace_id: 'farm_and_charm:onion',
              subtitle: 'A harvested Onion that can also be planted directly to grow a new crop.',
              icon: '/assets/icons/farm-and-charm/onion.webp',
              search: 'onion item seed'
            },
            {
              id: 'onion_crop',
              title: 'Onion Crop',
              namespace_id: 'farm_and_charm:onion_crop',
              subtitle: 'A fully grown Onion plant rooted just below the soil, ready for harvest.',
              icon: '/assets/icons/farm-and-charm/onion_crop.webp',
              search: 'onion crop plant growth'
            }
          ]
        },
        {
          id: 'wild_potato',
          title: 'Potato',
          namespace_id: 'minecraft:potato',
          subtitle:
            'Wild Potatoes grow in meadows, forests and taigas, another way to find your first potatoes.',
          icon: '/assets/icons/farm-and-charm/wild_potatoes.webp',
          search: 'potato crop wild potatoes farming',
          items: [
            {
              id: 'potato',
              title: 'Potato',
              namespace_id: 'minecraft:potato',
              subtitle: 'A harvested Potato that can also be planted directly to grow a new crop.',
              icon: '/assets/icons/farm-and-charm/potato.webp',
              search: 'potato item seed'
            },
            {
              id: 'potato_crop',
              title: 'Potato Crop',
              namespace_id: 'minecraft:potatoes',
              subtitle: 'A fully grown Potato plant hidden below the soil, ready for harvest.',
              icon: '/assets/icons/farm-and-charm/potato_crop.webp',
              search: 'potato crop plant growth'
            }
          ]
        },
        {
          id: 'wild_carrot',
          title: 'Carrot',
          namespace_id: 'minecraft:carrot',
          subtitle:
            'Wild Carrots grow in plains, meadows, forests, taigas, swamps and along rivers, another way to find your first carrots.',
          icon: '/assets/icons/farm-and-charm/wild_carrots.webp',
          search: 'carrot crop wild carrots farming',
          items: [
            {
              id: 'carrot',
              title: 'Carrot',
              namespace_id: 'minecraft:carrot',
              subtitle: 'A harvested Carrot that can also be planted directly to grow a new crop.',
              icon: '/assets/icons/farm-and-charm/carrot.webp',
              search: 'carrot item seed'
            },
            {
              id: 'carrot_crop',
              title: 'Carrot Crop',
              namespace_id: 'minecraft:carrots',
              subtitle: 'A fully grown Carrot plant hidden below ground, ready for harvest.',
              icon: '/assets/icons/farm-and-charm/carrot_crop.webp',
              search: 'carrot crop plant growth'
            }
          ]
        },
        {
          id: 'wild_beetroot',
          title: 'Beetroot',
          namespace_id: 'minecraft:beetroot',
          subtitle:
            'Wild Beetroots grow in plains, meadows, forests, taigas, swamps and along rivers, and give you Beetroot Seeds.',
          icon: '/assets/icons/farm-and-charm/wild_beetroots.webp',
          search: 'beetroot crop wild beetroots farming',
          items: [
            {
              id: 'beetroot_seeds',
              title: 'Beetroot Seeds',
              namespace_id: 'minecraft:beetroot_seeds',
              subtitle: 'Used to cultivate Beetroots on farmland.',
              icon: '/assets/icons/farm-and-charm/beetroot_seeds.webp',
              search: 'beetroot seeds farming crop'
            },
            {
              id: 'beetroot',
              title: 'Beetroot',
              namespace_id: 'minecraft:beetroot',
              subtitle: 'A harvested Beetroot used in hearty meals and soups.',
              icon: '/assets/icons/farm-and-charm/beetroot.webp',
              search: 'beetroot item food'
            },
            {
              id: 'beetroot_crop',
              title: 'Beetroot Crop',
              namespace_id: 'minecraft:beetroots',
              subtitle: 'A fully grown Beetroot plant hidden beneath the soil, ready for harvest.',
              icon: '/assets/icons/farm-and-charm/beetroot_crop.webp',
              search: 'beetroot crop plant growth'
            }
          ]
        },
        {
          id: 'wild_strawberry',
          title: 'Strawberry',
          namespace_id: 'farm_and_charm:strawberry',
          subtitle: 'Wild Strawberries grow in plains, meadows, forests, taigas, savannas and jungles.',
          icon: '/assets/icons/farm-and-charm/wild_strawberries.webp',
          search: 'strawberry crop wild strawberries farming',
          items: [
            {
              id: 'strawberry_seeds',
              title: 'Strawberry Seeds',
              namespace_id: 'farm_and_charm:strawberry_seeds',
              subtitle: 'Used to grow Strawberries on farmland.',
              icon: '/assets/icons/farm-and-charm/strawberry_seeds.webp',
              search: 'strawberry seeds farming crop'
            },
            {
              id: 'strawberry',
              title: 'Strawberry',
              namespace_id: 'farm_and_charm:strawberry',
              subtitle: 'A sweet berry for cakes, tea and breakfast.',
              icon: '/assets/icons/farm-and-charm/strawberry.webp',
              search: 'strawberry food ingredient'
            },
            {
              id: 'strawberry_crop',
              title: 'Strawberry Crop',
              namespace_id: 'farm_and_charm:strawberry_crop',
              subtitle: 'A strawberry plant ready for harvest.',
              icon: '/assets/icons/farm-and-charm/strawberry_crop.webp',
              search: 'strawberry crop plant growth'
            }
          ]
        },
        {
          id: 'big_crops',
          title: 'Big and Giant Crops',
          subtitle: 'Well watered onions and lettuce can grow big, and with compost even giant.',
          icon: '/assets/icons/farm-and-charm/lettuce_crop.webp',
          search: 'big giant crops onion lettuce compost water sprinkler harvest',
          details: true,
          detailsTitle: 'How it works',
          detailsText: `Fully grown onions and lettuce sometimes turn into big crops if there is water or a [[Water Sprinkler|water_sprinkler]] close by. In warm, sunny rain they can grow big too.

Big crops that you treat with [[Compost|compost]] have a chance to become giant.`,
          detailsBullets: [
            'Normal: 1 to 2 crops',
            'Big: 2 to 6 crops',
            'Giant: 4 to 8 crops',
            'Needs water or a sprinkler nearby'
          ]
        },
        {
          id: 'nettle',
          title: 'Nettle',
          namespace_id: 'farm_and_charm:wild_nettle',
          subtitle: 'A wild herb from forests and swamps, used for nettle tea and nettle beer from Brewery.',
          icon: '/assets/icons/farm-and-charm/wild_nettle.webp',
          search: 'nettle wild plant tea swamp'
        },
        {
          id: 'ribwort',
          title: 'Ribwort',
          namespace_id: 'farm_and_charm:wild_ribwort',
          subtitle: 'A hardy wild herb from forests and swamps, used for ribwort tea.',
          icon: '/assets/icons/farm-and-charm/wild_ribwort.webp',
          search: 'ribwort wild plant tea plains meadow'
        }
      ]
    },
    {
      id: 'animal_feeding',
      title: 'Animal Feeding',
      namespace_id: 'farm_and_charm:animal_feeding',
      subtitle: 'Many animals can be fed with Farm & Charm foods, unlocking new interactions and behaviors.',
      icon: '/assets/icons/farm-and-charm/dog_food.webp',
      search: 'animal feeding food pigs rabbits fox parrots chicken',
      entries: [
        {
          id: 'pigs',
          title: 'Pigs',
          subtitle: 'Pigs enjoy a wide variety of fresh farm produce.',
          icon: '/assets/icons/farm-and-charm/entity/pig.webp',
          items: [
            {
              id: 'tomato',
              title: 'Tomato',
              namespace_id: 'farm_and_charm:tomato',
              icon: '/assets/icons/farm-and-charm/tomato.webp'
            },
            {
              id: 'strawberry',
              title: 'Strawberry',
              namespace_id: 'farm_and_charm:strawberry',
              icon: '/assets/icons/farm-and-charm/strawberry.webp'
            },
            {
              id: 'onion',
              title: 'Onion',
              namespace_id: 'farm_and_charm:onion',
              icon: '/assets/icons/farm-and-charm/onion.webp'
            },
            {
              id: 'lettuce',
              title: 'Lettuce',
              namespace_id: 'farm_and_charm:lettuce',
              icon: '/assets/icons/farm-and-charm/lettuce.webp'
            },
            {
              id: 'barley',
              title: 'Barley',
              namespace_id: 'farm_and_charm:barley',
              icon: '/assets/icons/farm-and-charm/barley.webp'
            },
            {
              id: 'corn',
              title: 'Corn',
              namespace_id: 'farm_and_charm:corn',
              icon: '/assets/icons/farm-and-charm/corn.webp'
            },
            {
              id: 'oat',
              title: 'Oat',
              namespace_id: 'farm_and_charm:oat',
              icon: '/assets/icons/farm-and-charm/oat.webp'
            }
          ]
        },
        {
          id: 'rabbits',
          title: 'Rabbits',
          subtitle: 'Rabbits prefer lighter crops and fresh greens.',
          icon: '/assets/icons/farm-and-charm/entity/rabbit.webp',
          items: [
            {
              id: 'strawberry',
              title: 'Strawberry',
              namespace_id: 'farm_and_charm:strawberry',
              icon: '/assets/icons/farm-and-charm/strawberry.webp'
            },
            {
              id: 'lettuce',
              title: 'Lettuce',
              namespace_id: 'farm_and_charm:lettuce',
              icon: '/assets/icons/farm-and-charm/lettuce.webp'
            }
          ]
        },
        {
          id: 'foxes',
          title: 'Foxes',
          subtitle: 'Foxes have developed a fondness for strawberries.',
          icon: '/assets/icons/farm-and-charm/entity/fox.webp',
          items: [
            {
              id: 'strawberry',
              title: 'Strawberry',
              namespace_id: 'farm_and_charm:strawberry',
              icon: '/assets/icons/farm-and-charm/strawberry.webp'
            }
          ]
        },
        {
          id: 'parrots',
          title: 'Parrots',
          subtitle: 'Parrots love corn.',
          icon: '/assets/icons/farm-and-charm/entity/parrot.webp',
          items: [
            {
              id: 'corn',
              title: 'Corn',
              namespace_id: 'farm_and_charm:corn',
              icon: '/assets/icons/farm-and-charm/corn.webp'
            }
          ]
        },
        {
          id: 'wolf',
          title: 'Wolf',
          subtitle: 'The following items can be fed to Wolves.',
          icon: '/assets/icons/farm-and-charm/entity/wolf.webp',
          items: [
            {
              id: 'dog_food',
              title: 'Dog Food',
              namespace_id: 'farm_and_charm:dog_food',
              icon: '/assets/icons/farm-and-charm/dog_food.webp'
            }
          ]
        },
        {
          id: 'cats',
          title: 'Cats',
          subtitle: 'The following items can be fed to Cats.',
          icon: '/assets/icons/farm-and-charm/entity/cat.webp',
          items: [
            {
              id: 'cat_food',
              title: 'Cat Food',
              namespace_id: 'farm_and_charm:cat_food',
              icon: '/assets/icons/farm-and-charm/cat_food.webp'
            }
          ]
        },
        {
          id: 'horses',
          title: 'Horses',
          subtitle: 'The following items can be fed to Horses.',
          icon: '/assets/icons/farm-and-charm/entity/horse.webp',
          items: [
            {
              id: 'horse_fodder',
              title: 'Horse Fodder',
              namespace_id: 'farm_and_charm:horse_fodder',
              icon: '/assets/icons/farm-and-charm/horse_fodder.webp'
            }
          ]
        }
      ]
    },
    {
      id: 'mob_effects',
      title: 'Mob Effects',
      subtitle: 'Status effects granted by Farm & Charm foods, items, and interactions.',
      entries: [
        {
          id: 'satiation',
          title: 'Satiation',
          namespace_id: 'farm_and_charm:satiation',
          subtitle: 'Heals you a little every two seconds while you are well fed.',
          icon: '/assets/icons/farm-and-charm/effects/satiation.webp',
          search: 'satiation effect hunger exhaustion'
        },
        {
          id: 'rested',
          title: 'Rested',
          namespace_id: 'farm_and_charm:rested',
          subtitle: 'Experience orbs are worth more.',
          icon: '/assets/icons/farm-and-charm/effects/rested.webp',
          search: 'rested effect experience xp'
        },
        {
          id: 'sustenance',
          title: 'Sustenance',
          namespace_id: 'farm_and_charm:sustenance',
          subtitle: 'Fills your hunger bar a little every ten seconds. When it is full, it heals you instead.',
          icon: '/assets/icons/farm-and-charm/effects/sustenance.webp',
          search: 'sustenance effect hunger health regen'
        },
        {
          id: 'feast',
          title: 'Feast',
          namespace_id: 'farm_and_charm:feast',
          subtitle: 'Sustenance and Satiation in one.',
          icon: '/assets/icons/farm-and-charm/effects/feast.webp',
          search: 'feast effect sustenance satiation'
        },
        {
          id: 'farmers_blessing',
          title: 'Farmers Blessing',
          namespace_id: 'farm_and_charm:farmers_blessing',
          subtitle: 'Removes all harmful effects while it lasts.',
          icon: '/assets/icons/farm-and-charm/effects/farmers_blessing.webp',
          search: 'farmers blessing effect cleanse'
        },
        {
          id: 'grandmas_blessing',
          title: "Grandma's Blessing",
          namespace_id: 'farm_and_charm:grandmas_blessing',
          subtitle: 'Removes all harmful effects and gives +2 Luck while it lasts.',
          icon: '/assets/icons/farm-and-charm/effects/grandmas_blessing.webp',
          search: 'grandmas blessing effect cleanse luck'
        },
        {
          id: 'cluck',
          title: 'Cluck',
          namespace_id: 'farm_and_charm:cluck',
          subtitle: 'Now and then you drop an egg or a feather. Works on chickens and on players.',
          icon: '/assets/icons/farm-and-charm/effects/cluck.webp',
          search: 'cluck effect chicken eggs feathers'
        },
        {
          id: 'horse_fodder_effect',
          title: 'Horse Fodder',
          namespace_id: 'farm_and_charm:horse_fodder',
          subtitle: 'Horses run faster and jump higher.',
          icon: '/assets/icons/farm-and-charm/effects/horse_fodder.webp',
          search: 'horse fodder effect horse speed jump'
        },
        {
          id: 'dog_food_effect',
          title: 'Dog Food',
          namespace_id: 'farm_and_charm:dog_food',
          subtitle: 'Wolves hit harder and faster and are harder to knock back.',
          icon: '/assets/icons/farm-and-charm/effects/dog_food.webp',
          search: 'dog food effect wolf damage speed knockback'
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
          subtitle: 'Growth boosts, taming, effects and the food values of every meal can be adjusted in the config.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config configuration settings options balance farm and charm',
          details: true,
          detailsTitle: 'Configuration File',
          detailsText: `On Fabric the settings are in config/farm_and_charm.json, on NeoForge in the mod's config file.`,
          detailsBullets: [
            'Ranges of Fertilized Soil, Water Sprinkler and Feeding Trough',
            'Rain growth on or off, and how strong it is',
            'Taming with animal food, horse and chicken effects',
            'Hunger and saturation of every meal',
            'Timings of the food effects'
          ]
        },
        {
          id: 'rain_growth',
          title: 'Rain Growth',
          subtitle: 'Crops out in the rain grow faster, and even faster during a thunderstorm.',
          icon: '/assets/icons/misc/weather.webp',
          search: 'rain crop growth faster thunderstorm'
        },
        {
          id: 'armed_zombies',
          title: 'Armed Zombies',
          subtitle:
            'About 3% of zombies spawn with a [[Pitchfork|pitchfork]] in hand.',
          icon: '/assets/icons/misc/zombie.webp',
          search: 'zombie pitchfork weapon spawn'
        },
        {
          id: 'animal_saturation',
          title: 'Animal Saturation',
          subtitle:
            'Well fed farm animals drop more loot. Wear [[Dungarees|dungarees]] to see how well fed they are.',
          icon: '/assets/icons/farm-and-charm/leather.webp',
          search: 'animal saturation feeding bonus loot'
        },
        {
          id: 'vanilla_soups_effects',
          title: 'Soups and Effects',
          subtitle:
            'Mushroom Stew, Beetroot Soup and Rabbit Stew now give [[Sustenance|sustenance]].',
          icon: '/assets/icons/farm-and-charm/soup.webp',
          search: 'vanilla soup mushroom stew beetroot soup rabbit stew sustenance effect'
        },
        {
          id: 'farmland_planting_particles',
          title: 'Planting Feedback',
          subtitle:
            'Planting seeds on farmland kicks up a few crumbs of soil.',
          icon: '/assets/icons/farm-and-charm/fertilized_farmland.webp',
          search: 'farmland planting particles seeds wheat crop visual feedback soil effect block particles'
        }
      ]
    }
  ],
recipesCta: {
  enabled: true,
  title: "Recipes",
  text: `Not sure how to make something?

The recipe overview lists every Let's Do crafting station and its recipes.`,
  buttonLabel: "Open Recipe Overview",
  href: "/recipes/"
},
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'A closer look at how everything comes together in game',
  impressions: [
    { src: '/assets/impressions/farm-and-charm/01.webp', caption: 'Tomatoes growing on a rope' },
    { src: '/assets/impressions/farm-and-charm/02.webp', caption: 'A wooden cart in everyday use' },
    { src: '/assets/impressions/farm-and-charm/03.webp', caption: 'Pigs waiting at a feeding trough' },
    { src: '/assets/impressions/farm-and-charm/04.webp', caption: 'Crop fields with sprinklers' },
    { src: '/assets/impressions/farm-and-charm/05.webp', caption: 'Walking through a barley field' },
    { src: '/assets/impressions/farm-and-charm/06.webp', caption: 'A complete set of new kitchen tools' },
    { src: '/assets/impressions/farm-and-charm/07.webp', caption: 'Preparing food in the kitchen' }
  ]
}
