export default {
  slug: 'legacy',
  title: 'Legacy',
  logo: '/assets/mod-logos/legacy.webp',

  aboutTitle: 'Welcome',

  modVersion: '1.0.3',
  aboutSubtitle: 'Your world remembers who was first',
  aboutText: `Legacy adds cosmetic progression to the Let's Do Collection: titles to wear, a personal journey diary and server-wide milestones.

There are no skills, levels, attributes or gameplay bonuses. You play the same as always, and Legacy remembers what you did.`,
  sections: [
    {
      id: 'basics',
      title: 'Getting Started',
      subtitle: 'What Legacy tracks and where to find it.',
      entries: [
        {
          id: 'journal',
          title: 'The Legacy Journal',
          subtitle: 'Everything Legacy records lives in one journal, opened from your inventory.',
          search: 'journal inventory button tabs titles journey milestones server history options open',
          details: true,
          detailsTitle: 'Opening the journal',
          detailsText: `Open your inventory, in survival or creative, and click the Legacy button to open the journal. It is split into tabs, one for each part of the mod.`,
          detailsBullets: [
            '**Titles**: every title you have unlocked, and the ones still ahead',
            '**Journey**: your personal diary of first times',
            '**Milestones**: the world-firsts of your server',
            '**Server History**: who claimed which milestone, and when',
            '**Options**: your personal display settings'
          ]
        },
        {
          id: 'cosmetic_only',
          title: 'Purely Cosmetic',
          subtitle: 'Nothing Legacy gives you changes how the game plays.',
          search: 'cosmetic no bonus no stats balance vanilla survival',
          details: true,
          detailsTitle: 'Play on',
          detailsText: `Legacy watches what you already do, farming, mining, exploring and fighting, and turns it into something you can show. No title makes you stronger and no milestone gives an advantage.

It works on its own and fits into any modpack. Installed next to other Let's Do mods, it also knows their content.`
        }
      ]
    },
    {
      id: 'systems',
      title: 'How It Works',
      subtitle: 'Titles, journeys and milestones.',
      entries: [
        {
          id: 'titles',
          title: 'Titles',
          subtitle: 'Wear one title above your name. Its colour shows how rare it is.',
          search: 'titles wear name tag nametag rarity colour color prefix suffix series stage gender form',
          details: true,
          detailsTitle: 'Wearing a title',
          detailsText: `You unlock titles simply by playing. Pick one in the Titles tab and it appears above your name for everyone on the server. Some titles go in front of your name, like Farmer Marco, others behind it, like Marco, Dragonslayer.

The rarity sets the colour of both the title and your name. Titles that belong together form a series: the journal only reveals the next step, so you climb from one stage to the next.`,
          detailsBullets: [
            '**Common**: white',
            '**Uncommon**: green',
            '**Rare**: aqua',
            '**Epic**: light purple',
            '**Legendary**: gold',
            '**Mythic**: red',
            'Hidden titles only appear once unlocked',
            'Titles come in a masculine and a feminine form, chosen in the Options tab'
          ]
        },
        {
          id: 'journeys',
          title: 'Journeys',
          subtitle: 'A private diary of your first times, like your first diamond armor or your first sunrise.',
          search: 'journey journeys diary first times memory private day completed',
          details: true,
          detailsTitle: 'A memory, not an achievement',
          detailsText: `Journeys have no reward, no toast and no colour. They are simply remembered. The Journey tab sorts them by theme and shows an empty box until you get there, then a check mark with the day it happened.

A journey never un-completes.`
        },
        {
          id: 'milestones',
          title: 'Server Milestones',
          subtitle: 'Server-wide first times. Whoever gets there first is recorded forever.',
          search: 'milestones world first server history broadcast toast shared co-op grace claim',
          details: true,
          detailsTitle: 'Be the first',
          detailsText: `When the first player on the server reaches a milestone, like entering the Nether or defeating the Wither, Legacy records their name, the world day and the real date. Everyone gets a message, and that player earns a milestone title.

Some milestones are shared: when a group defeats a boss together, everyone who joins in within a short time is recorded as well. The Server History tab keeps the full chronicle of your world.`,
          detailsBullets: [
            'Each milestone can only be claimed once per world',
            'Shared milestones allow co-op claims for a short grace period',
            'Worlds that already had an achievement before Legacy was installed mark it as pre-existing, so nobody can claim it later'
          ]
        },
        {
          id: 'options',
          title: 'Options',
          subtitle: 'Each player decides how Legacy looks for them.',
          search: 'options settings config nametag toasts colors colours notifications form male female',
          details: true,
          detailsTitle: 'Options tab',
          detailsText: `These settings live in the Options tab of the journal and only affect your own client.`,
          detailsBullets: [
            '**Title Form**: masculine or feminine form of your titles',
            '**Show my nametag**: see your own name and title in third person',
            "**Show others' titles**: show titles above other players",
            '**Milestone alerts**: get notified when someone claims a milestone',
            '**Title unlock toasts**: show a toast when you unlock a title',
            '**Title colors**: rarity colours, or plain white when off'
          ]
        },
        {
          id: 'commands',
          title: 'Commands',
          subtitle: 'Look things up from chat, or manage titles as an operator.',
          search: 'commands legacy titles info eval grant revoke reload journeys milestones op operator',
          details: true,
          detailsTitle: '/legacy',
          detailsBullets: [
            '`/legacy titles`: list all titles',
            '`/legacy info <id>`: show what a title needs',
            '`/legacy journeys`: list your journeys with status and day',
            '`/legacy milestones`: list all milestones and who claimed them',
            '`/legacy eval`: check your progress right now',
            '`/legacy grant <id>` / `/legacy revoke <id>`: give or take a title (operators)',
            '`/legacy reload`: reload titles live (operators)'
          ]
        }
      ]
    },
    {
      id: 'custom',
      title: 'Adding Your Own',
      subtitle: 'Every title, journey and milestone is a data pack file.',
      entries: [
        {
          id: 'datapacks',
          title: 'Data Pack Basics',
          subtitle: 'No code needed. Drop a JSON file into a data pack and Legacy picks it up.',
          search: 'datapack data pack json folder namespace titles journeys milestones reload modpack',
          details: true,
          detailsTitle: 'Folder layout',
          detailsText: `Each definition is one JSON file, found the same way as advancements or loot tables. Any data pack, in any namespace, can add new files or override existing ones with the same path.`,
          detailsCode: `data/<namespace>/legacy/
  titles/
    my_title.json
  journeys/
    my_journey.json
  milestones/
    my_milestone.json`,
          detailsTextAfter: `\`/legacy reload\` reloads titles live, a vanilla \`/reload\` refreshes all three. Every file is validated on load: a broken file logs a warning and is skipped, the rest keeps working.`
        },
        {
          id: 'new_title',
          title: 'Adding a Title',
          subtitle: 'One JSON file and one language entry.',
          search: 'new title custom json translation_key rarity placement prefix suffix series stage hidden icon category display_priority lang',
          details: true,
          detailsTitle: 'Example',
          detailsText: `\`data/mypack/legacy/titles/blaze_hunter.json\`:`,
          detailsCode: `{
  "translation_key": "title.mypack.blaze_hunter",
  "category": "combat",
  "icon": "minecraft:blaze_rod",
  "rarity": "rare",
  "placement": "suffix",
  "trigger": {
    "type": "statistic",
    "stat_type": "minecraft:killed",
    "stat": "minecraft:blaze",
    "value": 20
  }
}`,
          detailsTextAfter: `Then add the name to \`assets/mypack/lang/en_us.json\`: \`"title.mypack.blaze_hunter": "Blaze Hunter"\`. For a feminine form add the same key with \`.female\` at the end. If you do not need translations, use \`"title": "Blaze Hunter"\` instead of \`translation_key\`.`,
          detailsBullets: [
            '`trigger` (required): when the title unlocks',
            '`rarity`: `common`, `uncommon`, `rare`, `epic`, `legendary` or `mythic`',
            '`placement`: `prefix` or `suffix` (default)',
            '`series` and `stage`: chain titles, the journal reveals one stage at a time',
            '`hidden`: `true` keeps it secret until unlocked',
            '`icon`, `category`, `display_priority`: how it is shown and sorted',
            '`id`: defaults to the file name'
          ]
        },
        {
          id: 'new_journey',
          title: 'Adding a Journey',
          subtitle: 'A first time worth remembering, with its own text right in the file.',
          search: 'new journey custom json title description category icon translation_key',
          details: true,
          detailsTitle: 'Example',
          detailsText: `\`data/mypack/legacy/journeys/first_elytra.json\`:`,
          detailsCode: `{
  "category": "equipment",
  "icon": "minecraft:elytra",
  "title": "First Elytra",
  "description": "Claim the elytra and take to the skies.",
  "trigger": { "type": "item", "id": "minecraft:elytra" }
}`,
          detailsTextAfter: `No language file needed. To translate it, add a \`translation_key\` and put \`<key>\` and \`<key>.desc\` in your language files. The literal text stays as fallback.`,
          detailsBullets: [
            'Categories: `equipment`, `exploration`, `survival`, `farming`, `villagers`, `combat`, `magic`, `misc`',
            'Any other category gets its own header'
          ]
        },
        {
          id: 'new_milestone',
          title: 'Adding a Milestone',
          subtitle: 'A world-first for your server.',
          search: 'new milestone custom json shared grace_period retro_advancement kill dimension advancement',
          details: true,
          detailsTitle: 'Example',
          detailsText: `\`data/mypack/legacy/milestones/first_wither.json\`:`,
          detailsCode: `{
  "icon": "minecraft:nether_star",
  "rarity": "legendary",
  "shared": true,
  "grace_period": 300,
  "trigger": { "type": "kill", "id": "minecraft:wither" },
  "retro_advancement": "minecraft:nether/summon_wither"
}`,
          detailsTextAfter: `The name comes from \`milestone.<namespace>.<id>\` in your language files, unless you set a \`translation_key\`.`,
          detailsBullets: [
            'Milestones use `kill`, `dimension` or `advancement` triggers',
            '`shared`: others can join in during `grace_period` seconds',
            '`retro_advancement`: marks the milestone as taken on worlds that already had it'
          ]
        },
        {
          id: 'triggers',
          title: 'Trigger Types',
          subtitle: 'All three systems share the same trigger block.',
          search: 'trigger types advancement statistic counter item custom dimension kill harvest place bonemeal biome structure mine tag',
          details: true,
          detailsTitle: 'What can unlock something',
          detailsText: `Titles and journeys are checked every few seconds. Milestones react to the event itself.`,
          detailsBullets: [
            '`advancement`: the player has an advancement, e.g. `minecraft:end/kill_dragon`',
            '`statistic`: a vanilla statistic reaches a value, retroactive',
            '`counter`: a Legacy counter reaches a value, e.g. `harvest:crops`, `biomes_distinct`, `place:saplings`, `bonemeal:used`, `mine:#minecraft:logs`',
            '`item`: the player holds an item anywhere in the inventory',
            '`custom`: a predicate registered by another mod',
            '`kill` / `dimension`: milestones only, first kill of an entity or first visit to a dimension',
            'Legacy counters start at 0 when the mod is installed'
          ]
        },
        {
          id: 'api',
          title: 'For Mod Developers',
          subtitle: 'Custom triggers in Java, when JSON is not enough.',
          search: 'api java developer custom trigger registerCustomTrigger grant revoke LegacyAPI',
          details: true,
          detailsTitle: 'LegacyAPI',
          detailsText: `Register a predicate and use it from any data pack with \`"trigger": { "type": "custom", "id": "mymod:fate" }\`.`,
          detailsCode: `LegacyAPI.registerCustomTrigger("mymod:fate",
        (serverPlayer, title) -> serverPlayer.getInventory().contains(new ItemStack(Items.NETHER_STAR)));`,
          detailsTextAfter: `\`LegacyAPI.grant(player, id)\` and \`LegacyAPI.revoke(player, id)\` give and take titles directly.`
        }
      ]
    }
  ]
}
