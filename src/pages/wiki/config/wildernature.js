export default {
  slug: 'wildernature',
  title: 'WilderNature',
  logo: '/assets/mod-logos/wildernature.webp',
  aboutTitle: 'Welcome',
  modVersion: '1.1.8',
  aboutSubtitle: 'Wild animals, hunting bounties and a busy ecosystem',
  aboutText: `WilderNature fills the Overworld with animals that have lives of their own. Deer sleep in the grass and bolt when you sprint, raccoons raid your chests, squirrels hoard hazelnuts, and lions doze through the savanna heat.

Many animals react to you: some grow to trust you, some can be ridden, and a few are best left alone. Around them the world changes too, with termite mounds, beaver dams, hollow tree stumps and mushroom colonies.

At the Bounty Board you can take on hunting, gathering and exploration contracts and earn rewards such as the Blunderbuss, banners and the Fur Cloak.`,
  sections: [
    {
      id: 'blocks',
      title: 'Decor and Building',
      subtitle: 'The Bounty Board, trophies and blocks from the wild.',
      entries: [
        {
          id: 'bounty_board',
          title: 'Bounty Board',
          namespace_id: 'wildernature:bounty_board',
          subtitle: 'Take on contracts, complete them and collect your reward.',
          icon: '/assets/icons/wildernature/bounty_board.webp',
          search: 'bounty board contract hunt gather observe explore guild commission reward',
          details: true,
          detailsTitle: 'How bounties work',
          detailsText: `Open the Bounty Board to see the current contracts. Accept one and you receive a contract item that tracks your progress. When it is complete, bring it back to the board to claim the reward.

There are four kinds of everyday contracts: Tracking Orders (hunting), Provision Requests (gathering), Field Notes (observing an animal through a Spyglass) and Pathfinder's Calls (finding a biome). Bigger tasks pay better.

Guild Commissions are special, larger contracts with unique rewards, such as the Blunderbuss, the Fur Cloak, the Bison Horn or one of the banners.

The board gets new contracts every three in-game days. If you lose a contract, you can restore it at the board for one Emerald.`,
          detailsBullets: [
            'Hunt, Gather, Observe and Explore contracts',
            'Guild Commissions with unique rewards',
            'New contracts every 3 in-game days',
            'Lost contract? One Emerald restores it'
          ]
        },
        {
          id: 'custom_commissions',
          title: 'Custom Guild Commissions',
          subtitle: 'Add your own Guild Commissions to the Bounty Board with a datapack.',
          icon: '/assets/icons/misc/config.webp',
          search: 'custom guild commission datapack json bounty contract hunt gather observe explore reward modpack',
          details: true,
          detailsTitle: 'How a commission works',
          detailsText: `Every Guild Commission is a JSON file in \`data/<namespace>/guild_commission/\`. Add a new file to create your own, or override an existing one with a datapack to change or disable it.

Example (Horn of the Plains):`,
          detailsCode: `{
  "id": "wildernature:horn_of_the_plains",
  "enabled": true,
  "title": "guild.wildernature.horn_of_the_plains.title",
  "description": "guild.wildernature.horn_of_the_plains.desc",
  "type": "hunt",
  "target": "wildernature:bison",
  "amount": 18,
  "allow_peaceful": false,
  "icon": "wildernature:guild_commission",
  "reward": {
    "item": "wildernature:bison_horn",
    "count": 1,
    "experience": 24
  },
  "weight": 1,
  "repeatable": true
}`,
          detailsTextAfter: `\`title\` and \`description\` can be translation keys from a resource pack or plain text.`,
          detailsBullets: [
            '`id`: a unique ID for the commission',
            '`enabled`: `false` turns the commission off',
            '`type`: `hunt`, `gather`, `observe` or `explore`',
            '`target`: an entity for `hunt` and `observe`, an item for `gather`, a biome for `explore`',
            '`amount`: how many kills, items or sightings are needed',
            '`allow_peaceful` (optional): read by the mod, but currently has no effect',
            '`icon`: item shown on the Bounty Board',
            '`reward`: `item`, `count` and optional `experience`',
            '`weight` (optional): how often it is picked, default `1`',
            '`repeatable` (optional): `true` brings it back for a player on the next 3-day refresh, `false` means only once per player; default `true`'
          ]
        },
        {
          id: 'collectibles',
          title: 'Trophies and Banners',
          subtitle: 'Trophies with a special use, and banners to show off your Guild Commissions.',
          icon: '/assets/icons/wildernature/deer_trophy.webp',
          search: 'trophy banner deer bison swift fox bunny stalker cod catcher fox trapper',
          details: true,
          detailsText: `The banners are rewards from Guild Commissions: 50 rabbits for the Bunny-Stalker Banner, 40 cod for the Cod-Catcher Banner and 30 Swift Foxes for the Fox-Trapper Banner.

The trophies are currently only available in Creative mode. Right click one to use it. The Deer Trophy marks animals within 32 blocks as prey and gives you Hunter's Sense, so you deal more damage to them. The Swift Fox Trophy makes nearby chests, spawners and other special blocks glow. The Bison Trophy lets out a roar that pushes back creatures in front of it and briefly gives you Resistance, at the cost of a little dizziness.`,
          detailsBullets: [
            'Deer Trophy: Marked Prey and Hunter’s Sense',
            'Swift Fox Trophy: reveals nearby special blocks',
            'Bison Trophy: pushes creatures back',
            'Banners: Guild Commission rewards'
          ],
          items: [
            { id: 'deer_trophy', title: 'Deer Trophy', namespace_id: 'wildernature:deer_trophy', icon: '/assets/icons/wildernature/deer_trophy.webp' },
            { id: 'swift_fox_trophy', title: 'Swift Fox Trophy', namespace_id: 'wildernature:swift_fox_trophy', icon: '/assets/icons/wildernature/red_wolf_trophy.webp' },
            { id: 'bison_trophy', title: 'Bison Trophy', namespace_id: 'wildernature:bison_trophy', icon: '/assets/icons/wildernature/bison_trophy.webp' },
            { id: 'fox_trapper_banner', title: 'Fox-Trapper Banner', namespace_id: 'wildernature:fox_trapper_banner', icon: '/assets/icons/wildernature/wolf_trapper_banner.webp' },
            { id: 'bunny_stalker_banner', title: 'Bunny-Stalker Banner', namespace_id: 'wildernature:bunny_stalker_banner', icon: '/assets/icons/wildernature/bunny_stalker_banner.webp' },
            { id: 'cod_catcher_banner', title: 'Cod-Catcher Banner', namespace_id: 'wildernature:cod_catcher_banner', icon: '/assets/icons/wildernature/cod_catcher_banner.webp' }
          ]
        },
        {
          id: 'termite_mound',
          title: 'Termite Mound',
          namespace_id: 'wildernature:termite_mound',
          subtitle: 'A savanna mound full of termites, and sometimes a hidden storage chamber.',
          icon: '/assets/icons/wildernature/termite_mound.webp',
          search: 'termite mound savanna termites woodmeal rotten log storage',
          details: true,
          detailsText: `Termite Mounds stand in the savanna. Their [[Termites|termite]] gather wood from nearby logs and carry it home. Some mounds hide a storage chamber inside.

Logs near a mound slowly turn into [[Rotten Logs|rotten_log]].`
        },
        {
          id: 'rotten_log',
          title: 'Rotten Log',
          namespace_id: 'wildernature:rotten_log',
          subtitle: 'A log eaten hollow by termites. Clean it out, fill it with dirt and farm in it.',
          search: 'rotten log termites infested shovel woodmeal dirt farmland planter',
          details: true,
          detailsText: `Termites turn logs near their mound into Rotten Logs and sometimes move in. Use a shovel on an infested log to drive them out; you get some [[Woodmeal|woodmeal]] for your trouble.

Right click an upright hollow log with Dirt to fill it, then till it into farmland. Crops, stems and [[Mushroom Colonies|mushroom_colony]] grow in it, faster when it is kept moist.`
        },
        {
          id: 'hollow_cache',
          title: 'Hollow Cache',
          namespace_id: 'wildernature:hollow_cache',
          subtitle: 'An old tree stump with a hiding place inside.',
          search: 'hollow cache stump storage loot squirrel forest plains',
          details: true,
          detailsText: `Hollow Caches are tree stumps found in forests and plains. Open them like a chest; they often hold nuts, fruit, sticks and bones, and sometimes a Truffle or a [[Loot Bag|loot_bag]].

Squirrels and raccoons use them as pantries, and injured raccoons and boars eat from them.`
        },
        {
          id: 'burrow',
          title: 'Burrow',
          namespace_id: 'wildernature:burrow',
          subtitle: 'The dog’s stash. Tamed dogs bury what they find here.',
          search: 'burrow dog storage stash',
          details: true,
          detailsText: `Tamed [[Dogs|dog]] dig a Burrow and store the things they carry around in it. You can open it like a chest.`
        },
        {
          id: 'beaver_dam',
          title: 'Beaver Dam',
          namespace_id: 'wildernature:beaver_dam',
          subtitle: 'Built by beavers in and around rivers. A handy source of sticks.',
          search: 'beaver dam sticks river',
          details: true,
          detailsText: `[[Beavers|beaver]] build these piles of branches near water. Break them for sticks.`
        },
        {
          id: 'mushroom_colony',
          title: 'Mushroom Colonies',
          subtitle: 'A renewable patch of mushrooms that slowly spreads.',
          search: 'mushroom colony brown red renewable spread bone meal',
          details: true,
          detailsText: `Plant a colony on dirt, grass, podzol, mycelium or a tilled [[Rotten Log|rotten_log]]. Once it is fully grown, right click it to harvest mushrooms; the colony stays and grows back. Mature colonies slowly spread to nearby ground. Bone Meal speeds up growth.`,
          items: [
            { id: 'brown_mushroom_colony', title: 'Brown Mushroom Colony', namespace_id: 'wildernature:brown_mushroom_colony' },
            { id: 'red_mushroom_colony', title: 'Red Mushroom Colony', namespace_id: 'wildernature:red_mushroom_colony' }
          ]
        }
      ]
    },
    {
      id: 'items',
      title: 'Items, Ingredients, and Tools',
      subtitle: 'Tools, equipment and bounty rewards.',
      entries: [
        {
          id: 'blunderbuss',
          title: 'Blunderbuss',
          namespace_id: 'wildernature:blunderbuss',
          subtitle: 'A loud old gun. The reward for hunting eight elephants.',
          icon: '/assets/icons/wildernature/blunderbuss.webp',
          search: 'blunderbuss gun ammunition flint diamond pellets guild commission elephant',
          details: true,
          detailsText: `The Blunderbuss is the reward of the "Big Game Hunter" Guild Commission. It needs ammunition in your inventory and has to be reloaded for a moment after every shot.

Flint Ammunition fires a spray of four to eight small pellets, great at close range. Diamond Ammunition fires a single, hard-hitting bullet. Both are crafted from Gunpowder plus Flint or a Diamond, sixteen at a time.`,
          detailsBullets: [
            'Flint: 4 to 8 pellets, 2 damage each',
            'Diamond: one bullet, 12 damage',
            '1.5 second reload',
            'Repair with Iron Ingots'
          ],
          items: [
            { id: 'flint_ammunition', title: 'Flint Ammunition', namespace_id: 'wildernature:flint_ammunition', icon: '/assets/icons/wildernature/flint_ammunition.webp' },
            { id: 'diamond_ammunition', title: 'Diamond Ammunition', namespace_id: 'wildernature:diamond_ammunition', icon: '/assets/icons/wildernature/diamond_ammunition.webp' }
          ]
        },
        {
          id: 'bison_horn',
          title: 'Bison Horn',
          namespace_id: 'wildernature:bison_horn',
          subtitle: 'Blow it to scatter nearby monsters. Dropped by [[Bison|bison]].',
          icon: '/assets/icons/wildernature/bison_horn.webp',
          search: 'bison horn blow monsters scare cooldown',
          details: true,
          detailsText: `Blowing the horn makes monsters within ten blocks forget you and stumble away. It then needs ten seconds to recover.

Bison sometimes drop one, and the "Horn of the Plains" Guild Commission gives one as a reward.`
        },
        {
          id: 'loot_bag',
          title: 'Loot Bag',
          namespace_id: 'wildernature:loot_bag',
          subtitle: 'A raccoon’s stash. You never know what is inside.',
          icon: '/assets/icons/wildernature/loot_bag.webp',
          search: 'loot bag raccoon random food hazelnut emerald diamond',
          details: true,
          detailsText: `Right click to open the bag and get one random item. Most of the time it is something to eat, often a Hazelnut, now and then an Emerald and, very rarely, a Diamond.

Raccoons drop Loot Bags and sometimes leave them in their caches.`,
          detailsBullets: [
            'Usually a random food',
            '20% Hazelnut',
            '1% Emerald',
            'Very rarely a Diamond'
          ]
        },
        {
          id: 'fish_oil',
          title: 'Fish Oil',
          namespace_id: 'wildernature:fish_oil',
          subtitle: 'Crafted from two fish. Burns as long as coal.',
          icon: '/assets/icons/wildernature/fish_oil.webp',
          search: 'fish oil fuel fish'
        },
        {
          id: 'thick_leather',
          title: 'Thick Leather',
          namespace_id: 'wildernature:thick_leather',
          subtitle: 'Dropped by elephants, giraffes and hippos. Cut it into regular leather with shears.',
          search: 'thick leather shears elephant giraffe hippo',
          details: true,
          detailsText: `Throw Thick Leather on the ground and right click it with shears to cut it into three Leather.`
        },
        {
          id: 'woodmeal',
          title: 'Woodmeal',
          namespace_id: 'wildernature:woodmeal',
          subtitle: 'Wood dust from termite work. A small fuel.',
          search: 'woodmeal termite fuel rotten log'
        },
        {
          id: 'fur_cloak',
          title: 'Fur Cloak',
          namespace_id: 'wildernature:fur_cloak',
          subtitle: 'A warm swift fox cloak. The reward for the "Winter Pelt" Guild Commission.',
          icon: '/assets/icons/wildernature/fur_cloak.webp',
          search: 'fur cloak cape swift fox guild commission winter pelt'
        },
        {
          id: 'stylin_purple_hat',
          title: 'Stylin’ Purple Hat',
          namespace_id: 'wildernature:stylin_purple_hat',
          subtitle: 'So stylin’ it almost hurts. The reward for finding a savanna.',
          icon: '/assets/icons/wildernature/stylin_purple_hat.webp',
          search: 'stylin purple hat guild commission savanna'
        },
        {
          id: 'field_guide',
          title: 'Field Guide',
          namespace_id: 'wildernature:field_guide',
          subtitle: 'A little book about the animals around you. Your first reward from the Bounty Board.',
          search: 'field guide animals book'
        },
        {
          id: 'burst_of_experience',
          title: 'Burst of Experience',
          namespace_id: 'wildernature:burst_of_experience',
          subtitle: 'A bounty reward. Use it to receive the experience stored inside.',
          search: 'burst of experience xp bounty reward'
        },
        {
          id: 'turkey_egg',
          title: 'Turkey Egg',
          namespace_id: 'wildernature:turkey_egg',
          subtitle: 'Laid by [[turkeys|turkey]]. Throw it and a baby turkey may hatch.',
          search: 'turkey egg throw'
        }
      ]
    },
    {
      id: 'food',
      title: 'Food',
      subtitle: 'Game meat, nuts and truffles.',
      entries: [
        {
          id: 'bison_meat',
          title: 'Bison Meat',
          namespace_id: 'wildernature:bison_meat',
          subtitle: 'Dropped by bison. Cooked, it is as filling as a steak.',
          icon: '/assets/icons/wildernature/bison_meat.webp',
          search: 'bison meat cooked',
          items: [
            { id: 'cooked_bison_meat', title: 'Cooked Bison Meat', namespace_id: 'wildernature:cooked_bison_meat', icon: '/assets/icons/wildernature/cooked_bison_meat.webp' }
          ]
        },
        {
          id: 'venison',
          title: 'Venison',
          namespace_id: 'wildernature:venison',
          subtitle: 'Dropped by deer. Cooked, it is as filling as mutton.',
          icon: '/assets/icons/wildernature/venison.webp',
          search: 'venison deer meat cooked',
          items: [
            { id: 'cooked_venison', title: 'Cooked Venison', namespace_id: 'wildernature:cooked_venison', icon: '/assets/icons/wildernature/cooked_venison.webp' }
          ]
        },
        {
          id: 'turkey_meat',
          title: 'Turkey Meat',
          namespace_id: 'wildernature:turkey_meat',
          subtitle: 'Dropped by turkeys. Works like chicken.',
          icon: '/assets/icons/wildernature/turkey_meat.webp',
          search: 'turkey meat cooked',
          items: [
            { id: 'cooked_turkey_meat', title: 'Cooked Turkey Meat', namespace_id: 'wildernature:cooked_turkey_meat', icon: '/assets/icons/wildernature/cooked_turkey_meat.webp' }
          ]
        },
        {
          id: 'cassowary_meat',
          title: 'Cassowary Meat',
          namespace_id: 'wildernature:cassowary_meat',
          subtitle: 'Dropped by cassowaries. Works like rabbit.',
          icon: '/assets/icons/wildernature/cassowary_meat.webp',
          search: 'cassowary meat cooked',
          items: [
            { id: 'cooked_cassowary_meat', title: 'Cooked Cassowary Meat', namespace_id: 'wildernature:cooked_cassowary_meat', icon: '/assets/icons/wildernature/cooked_cassowary_meat.webp' }
          ]
        },
        {
          id: 'hunting_note',
          title: 'Fire Aspect',
          subtitle: 'Bison, boars, cassowaries, deer, minisheep and turkeys drop their meat already cooked when hunted with a Fire Aspect weapon.',
          icon: '/assets/icons/misc/tip.webp',
          search: 'fire aspect cooked meat hunting'
        },
        {
          id: 'truffle',
          title: 'Truffle',
          namespace_id: 'wildernature:truffle',
          subtitle: 'A rare find that makes any food 20% more filling.',
          icon: '/assets/icons/wildernature/truffle.webp',
          search: 'truffle boar rooting food nutrition saturation truffle bag',
          details: true,
          detailsText: `[[Boars|boar]] sometimes dig up Truffles while rooting, and they can turn up in Hollow Caches.

Combine a Truffle with any food in the crafting grid to refine it: the food then restores 20% more hunger and saturation. Nine Truffles can be packed into a Truffle Bag.`
        },
        {
          id: 'hazelnut_bush',
          title: 'Hazelnut',
          namespace_id: 'wildernature:hazelnut',
          subtitle: 'A quick snack from Hazelnut Bushes, and the favourite food of squirrels.',
          icon: '/assets/icons/wildernature/hazelnut.webp',
          search: 'hazelnut bush squirrel plains forest river',
          details: true,
          detailsText: `Hazelnut Bushes grow in plains, forests, flower forests, birch forests and along rivers. Pick them like Sweet Berry Bushes. Plant a Hazelnut to grow your own bush.`
        }
      ]
    },
    {
      id: 'entities',
      title: 'Entities',
      subtitle: 'Where to find them and how they behave.',
      entries: [
        {
          id: 'deer',
          title: 'Deer',
          namespace_id: 'wildernature:deer',
          subtitle: 'Shy herd animals of forests and taigas.',
          icon: '/assets/icons/wildernature/entity/deer.webp',
          search: 'deer forest taiga venison leather white deer herd sleep',
          details: true,
          detailsText: `Deer notice when you sprint or hold a weapon and the whole herd runs off. At night they look for shelter and sleep, preferably on grass.

Very rarely you meet a white deer. Hunting one brings bad luck: you get Bad Omen and Slowness.`,
          detailsBullets: [
            'Forests and taigas',
            'Drops Venison and Leather',
            'Breed with Short Grass'
          ]
        },
        {
          id: 'bison',
          title: 'Bison',
          namespace_id: 'wildernature:bison',
          subtitle: 'Big savanna herds that defend each other.',
          icon: '/assets/icons/wildernature/entity/bison.webp',
          search: 'bison savanna herd horn meat leather wheat',
          details: true,
          detailsText: `Bison live in herds in the savanna. Attack one and the others may join in, and if one panics, the whole herd stampedes.`,
          detailsBullets: [
            'Savanna',
            'Drops Bison Meat, Leather and sometimes a Bison Horn',
            'Breed with Wheat or Hay Bales'
          ]
        },
        {
          id: 'boar',
          title: 'Boar',
          namespace_id: 'wildernature:boar',
          subtitle: 'Roots around in the dirt and sometimes finds truffles.',
          icon: '/assets/icons/wildernature/entity/boar.webp',
          search: 'boar forest savanna taiga rooting truffle porkchop',
          details: true,
          detailsText: `Boars dig through grass and dirt looking for food. They turn up mushrooms, roots, seeds, vegetables and now and then a [[Truffle|truffle]]. Handing them a Truffle encourages them to dig.

With Farm & Charm installed, their digging turns dirt into Fertilized Soil.`,
          detailsBullets: [
            'Forests, savannas and taigas',
            'Drops Porkchops',
            'Digging respects the mobGriefing rule'
          ]
        },
        {
          id: 'cassowary',
          title: 'Cassowary',
          namespace_id: 'wildernature:cassowary',
          subtitle: 'Territorial and dangerous, especially near its chicks.',
          icon: '/assets/icons/wildernature/entity/cassowary.webp',
          search: 'cassowary savanna territorial meat feather seeds',
          details: true,
          detailsText: `Cassowaries warn you first, then attack if you stay too close. Their hits slow you down, and they are even more aggressive when chicks are nearby.`,
          detailsBullets: [
            'Savanna',
            'Drops Cassowary Meat and Feathers',
            'Breed with seeds'
          ]
        },
        {
          id: 'dog',
          title: 'Dog',
          namespace_id: 'wildernature:dog',
          subtitle: 'A loyal companion that fetches, hunts skeletons and hides its treasures.',
          icon: '/assets/icons/wildernature/entity/dog.webp',
          search: 'dog tame cooked meat fetch burrow skeleton plains',
          details: true,
          detailsText: `Tame a dog with cooked meat. Tamed dogs chase skeletons, pick up items and either bring them to you or bury them in their [[Burrow|burrow]]. They warn you about creepers and raccoons, look for shelter when it rains and like to nap near their owner.`,
          detailsBullets: [
            'Plains',
            'Tame and breed with cooked meat',
            'Drops Bones'
          ]
        },
        {
          id: 'hedgehog',
          title: 'Hedgehog',
          namespace_id: 'wildernature:hedgehog',
          subtitle: 'Curls into a spiky ball when threatened.',
          icon: '/assets/icons/wildernature/entity/hedgehog.webp',
          search: 'hedgehog forest taiga mushroom curl spikes',
          details: true,
          detailsText: `Hedgehogs sleep during the day and sniff around for mushrooms and berries at night. When threatened they curl up, take less damage and prick anything that touches them.`,
          detailsBullets: [
            'Forests and taigas',
            'Drops nothing',
            'Breed with mushrooms'
          ]
        },
        {
          id: 'minisheep',
          title: 'Minisheep',
          namespace_id: 'wildernature:minisheep',
          subtitle: 'Small, fluffy and surprisingly protective of each other.',
          icon: '/assets/icons/wildernature/entity/minisheep.webp',
          search: 'minisheep meadow wool shear mutton herd',
          details: true,
          detailsText: `Minisheep follow a leader and sleep at night. If one is attacked, the rest of the herd defends it. Shear them for wool.`,
          detailsBullets: [
            'Meadow',
            'Shear for wool, drops Mutton',
            'Breed with Wheat'
          ]
        },
        {
          id: 'raccoon',
          title: 'Raccoon',
          namespace_id: 'wildernature:raccoon',
          subtitle: 'A cheeky thief that raids chests and nibbles your crops.',
          icon: '/assets/icons/wildernature/entity/raccoon.webp',
          search: 'raccoon plains thief chest loot bag doors crops',
          details: true,
          detailsText: `Raccoons open doors, loot containers and stash their finds in caches. At night they nibble on crops without destroying them. With Farm & Charm installed, they also steal eggs from chicken coops.`,
          detailsBullets: [
            'Plains and Sunflower Plains',
            'Drops Loot Bags',
            'Breed with fruit, vegetables or cooked fish'
          ]
        },
        {
          id: 'squirrel',
          title: 'Squirrel',
          namespace_id: 'wildernature:squirrel',
          subtitle: 'Hazelnut hoarders that bring gifts to their friends.',
          icon: '/assets/icons/wildernature/entity/squirrel.webp',
          search: 'squirrel hazelnut trust gift plains forest taiga',
          details: true,
          detailsText: `Squirrels pick hazelnuts from bushes and hide them in Hollow Caches. Offer them seeds, sticks, saplings or hazelnuts: if they accept, they trust you a bit more. Trusted squirrels bring you little gifts.`,
          detailsBullets: [
            'Plains, forests and taigas',
            'Drops Hazelnuts',
            'Breed with Hazelnuts'
          ]
        },
        {
          id: 'swift_fox',
          title: 'Swift Fox',
          namespace_id: 'wildernature:swift_fox',
          subtitle: 'A sly little fox that steals from your hands.',
          icon: '/assets/icons/wildernature/entity/red_wolf.webp',
          search: 'swift fox steal items trust gift old growth pine taiga',
          details: true,
          detailsText: `Swift Foxes snatch items from the ground and even from your hand, then hide them somewhere. Bribe them with berries, chicken, rabbit or eggs to win their trust; trusted foxes return what they took and sometimes bring gifts.`,
          detailsBullets: [
            'Old Growth Pine Taiga',
            'Bribe with berries, chicken, rabbit or eggs',
            'Breed with cooked meat once they trust you'
          ]
        },
        {
          id: 'turkey',
          title: 'Turkey',
          namespace_id: 'wildernature:turkey',
          subtitle: 'A plump forest bird that lays Turkey Eggs.',
          icon: '/assets/icons/wildernature/entity/turkey.webp',
          search: 'turkey forest feather meat egg seeds',
          details: true,
          detailsBullets: [
            'Forests',
            'Drops Turkey Meat and Feathers',
            'Lays Turkey Eggs',
            'Breed with seeds or Bread'
          ]
        },
        {
          id: 'elephant',
          title: 'Elephant',
          namespace_id: 'wildernature:elephant',
          subtitle: 'A gentle giant you can ride once it trusts you.',
          search: 'elephant savanna ride trust thick leather melon',
          details: true,
          detailsText: `Elephants roam the savanna and defend themselves when attacked. Feed one to earn its trust, and it will let you ride it.`,
          detailsBullets: [
            'Savanna',
            'Feed with melon, pumpkin, apples or sugar cane',
            'Rideable once it trusts you',
            'Drops Thick Leather'
          ]
        },
        {
          id: 'giraffe',
          title: 'Giraffe',
          namespace_id: 'wildernature:giraffe',
          subtitle: 'Peaceful herds that flee fast and kick hard.',
          search: 'giraffe savanna herd ride kick thick leather',
          details: true,
          detailsText: `Giraffes stay together in small herds and avoid players. If threatened they run far, and they can defend themselves with a powerful kick. They can be ridden.`,
          detailsBullets: [
            'Savanna',
            'Breed with Short Grass',
            'Rideable',
            'Drops Thick Leather'
          ]
        },
        {
          id: 'hippo',
          title: 'Hippo',
          namespace_id: 'wildernature:hippo',
          subtitle: 'Looks sleepy. Is not.',
          search: 'hippo river threat boat fish thick leather',
          details: true,
          detailsText: `Hippos graze on land and head for the water during the day. They get more and more annoyed when you come close, give a warning yawn and then attack. They also snap at fish and attack boats. Feeding them fish or raw meat calms them down.`,
          detailsBullets: [
            'Rivers',
            'Feed with fish or raw meat',
            'Drops Thick Leather'
          ]
        },
        {
          id: 'lion',
          title: 'Lion',
          namespace_id: 'wildernature:lion',
          subtitle: 'Prides of lions and lionesses that nap through the day.',
          search: 'lion lioness savanna pride',
          details: true,
          detailsText: `Lions live in small prides in the savanna and rest during the day. Disturb them or threaten the pride and they fight back.`,
          detailsBullets: [
            'Savanna',
            'Breed with raw beef'
          ]
        },
        {
          id: 'beaver',
          title: 'Beaver',
          namespace_id: 'wildernature:beaver',
          subtitle: 'Busy river builders that will trade you their stripped logs.',
          search: 'beaver river dam sticks stripped logs trade',
          details: true,
          detailsText: `Beavers build [[dams|beaver_dam]] along rivers and collect stripped logs. Hand one an apple, sweet berries, a sapling or a Loot Bag and it gives you the logs it has collected.`,
          detailsBullets: [
            'Rivers',
            'Breed with sticks',
            'Drops sticks'
          ]
        },
        {
          id: 'scorpion',
          title: 'Scorpion',
          namespace_id: 'wildernature:scorpion',
          subtitle: 'Hides in the sand and strikes with neurotoxin. Can be tamed with patience.',
          search: 'scorpion desert neurotoxin tame spider eye fermented',
          details: true,
          detailsText: `Scorpions burrow into sand and dirt and ambush anything that comes close. Their sting inflicts Neurotoxin, which deals damage over time, slows you and makes you stagger.

To tame one, sneak and feed it Spider Eyes or Rotten Flesh to slowly earn its trust, then finish with a Fermented Spider Eye.`,
          detailsBullets: [
            'Desert',
            'Sting causes Neurotoxin',
            'Tame with Spider Eyes or Rotten Flesh, then a Fermented Spider Eye'
          ]
        },
        {
          id: 'termite',
          title: 'Termite',
          namespace_id: 'wildernature:termite',
          subtitle: 'Tiny workers that live in Termite Mounds.',
          icon: '/assets/icons/wildernature/entity/termite.webp',
          search: 'termite mound savanna woodmeal',
          details: true,
          detailsText: `Termites leave their [[mound|termite_mound]] to gnaw on nearby logs and carry the wood home. Sometimes you catch one carrying [[Woodmeal|woodmeal]].`
        }
      ]
    },
    {
      id: 'worldgen',
      title: 'Worldgen and Natural Features',
      subtitle: 'What WilderNature changes in the world.',
      entries: [
        {
          id: 'spawn_tags',
          title: 'Animal Spawns',
          subtitle: 'Where the animals live, and which vanilla animals make room for them.',
          icon: '/assets/icons/wildernature/entity/deer.webp',
          search: 'spawn biome tags config remove vanilla animals savanna forest swamp jungle',
          details: true,
          detailsText: `Most animal spawns are controlled by biome tags such as wildernature:spawns_deer, so datapacks can add or remove biomes.

By default, pigs and chickens no longer spawn in forests, farm animals are removed from savannas, swamps and jungles, and frogs are added to jungles. All of this can be turned off in the config.`
        },
        {
          id: 'config',
          title: 'Configuration',
          subtitle: 'Spawn weights, group sizes and world features can be adjusted.',
          icon: '/assets/icons/misc/config.webp',
          search: 'config spawn weight group size hazelnut termite mound hollow cache',
          details: true,
          detailsBullets: [
            'Spawn weight and group size for every animal',
            'Remove vanilla animals from savannas, forests, swamps and jungles',
            'Turn Hazelnut Bushes, Termite Mounds and Hollow Caches on or off'
          ]
        }
      ]
    }
  ]
}
