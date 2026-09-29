export default {
  slug: 'bloomingnature',
  title: 'BloomingNature',
  logo: '/assets/mod-logos/bloomingnature.webp',

  aboutTitle: 'Welcome',
  aboutSubtitle: 'Denser, wilder and more alive',
  aboutText: `BloomingNature reworks almost every vanilla biome with new tree shapes, richer vegetation, small terrain changes and more atmosphere. Biome placement and the overall world layout stay the same.

It also adds new biomes: larger forests such as the Aspen Forest and Larch Forest, and smaller transition biomes like the Flower Glade, Forest Edge, Fen, Marshland and Desert Oasis.

Along the way you will find 26 new flowers, new grass variants, new stone types such as Laterite, Travertine and Marlstone, as well as Mushroom Bricks, Quicksand, Marsh Blocks and Forest Moss.

The pictures below show how the landscapes change.`,
  sections: [
    {
      id: 'biomes',
      title: 'New Biomes',
      subtitle: 'Sixteen new biomes that fit in between the vanilla ones.',
      entries: [
        {
          id: 'aspen_forest',
          title: 'Aspen Forest',
          namespace_id: 'bloomingnature:aspen_forest',
          subtitle: 'A bright forest of white-barked aspens.',
          search: 'aspen forest biome replaces parts of birch forests trees: aspen, birch wood: [[aspen|aspen]]',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Takes the place of many Birch Forests and most Old Growth Birch Forests. Aspens grow between tall birches and oak bushes.`,
          detailsBullets: [
            'Replaces parts of Birch Forests',
            'Trees: Aspen, Birch',
            'Wood: [[Aspen|aspen]]'
          ]
        },
        {
          id: 'baobab_savanna',
          title: 'Baobab Savanna',
          namespace_id: 'bloomingnature:baobab_savanna',
          subtitle: 'Wide savanna with huge baobab trees.',
          search: 'baobab savanna biome replaces parts of savannas trees: baobab, acacia wood: [[baobab|baobab]]',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Covers a large share of Savannas, Savanna Plateaus and Windswept Savannas. Baobabs tower over acacias and bushes.`,
          detailsBullets: [
            'Replaces parts of Savannas',
            'Trees: Baobab, Acacia',
            'Wood: [[Baobab|baobab]]'
          ]
        },
        {
          id: 'brushland',
          title: 'Brushland',
          namespace_id: 'bloomingnature:brushland',
          subtitle: 'Dry scrubland with low bushes.',
          search: 'brushland biome replaces parts of savannas, deserts and badlands trees: oak bushes only',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `A dry transition biome that appears in Savannas, Deserts and Badlands. Instead of tall trees, only oak bushes grow here.`,
          detailsBullets: [
            'Replaces parts of Savannas, Deserts and Badlands',
            'Trees: oak bushes only'
          ]
        },
        {
          id: 'cold_grassland',
          title: 'Cold Grassland',
          namespace_id: 'bloomingnature:cold_grassland',
          subtitle: 'Open, chilly grassland between the taiga forests.',
          search: 'cold grassland biome replaces parts of taigas trees: fir, spruce wood: [[fir|fir]]',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Opens up Taigas and Snowy Taigas with wide grassy clearings dotted with firs and spruces.`,
          detailsBullets: [
            'Replaces parts of Taigas',
            'Trees: Fir, Spruce',
            'Wood: [[Fir|fir]]'
          ]
        },
        {
          id: 'cold_river',
          title: 'Cold River',
          namespace_id: 'bloomingnature:cold_river',
          subtitle: 'A river that flows through cold regions.',
          search: 'cold river biome rivers near cold biomes',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Rivers next to taigas, larch forests and cold grasslands turn into Cold Rivers.`,
          detailsBullets: [
            'Rivers near cold biomes'
          ]
        },
        {
          id: 'cypress_fields',
          title: 'Cypress Fields',
          namespace_id: 'bloomingnature:cypress_fields',
          subtitle: 'Warm fields with slender cypresses.',
          search: 'cypress fields biome replaces parts of warm plains and savannas trees: cypress, oak wood: [[cypress|cypress]]',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Found in warm Plains, Sunflower Plains and Savannas, never next to snowy biomes.`,
          detailsBullets: [
            'Replaces parts of warm Plains and Savannas',
            'Trees: Cypress, Oak',
            'Wood: [[Cypress|cypress]]'
          ]
        },
        {
          id: 'desert_oasis',
          title: 'Desert Oasis',
          namespace_id: 'bloomingnature:desert_oasis',
          subtitle: 'A small patch of water and palms in the middle of the desert.',
          search: 'desert oasis biome centre of deserts trees: fan palm wood: [[fan palm|fan_palm]]',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Appears in the heart of hot deserts. The only place where fan palms grow.`,
          detailsBullets: [
            'Centre of Deserts',
            'Trees: Fan Palm',
            'Wood: [[Fan Palm|fan_palm]]'
          ]
        },
        {
          id: 'desert_river',
          title: 'Desert River',
          namespace_id: 'bloomingnature:desert_river',
          subtitle: 'A river through the desert.',
          search: 'desert river biome rivers near deserts and badlands',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Rivers that flow past Deserts and Badlands become Desert Rivers.`,
          detailsBullets: [
            'Rivers near Deserts and Badlands'
          ]
        },
        {
          id: 'fen',
          title: 'Fen',
          namespace_id: 'bloomingnature:fen',
          subtitle: 'A cold, mossy wetland along taiga rivers.',
          search: 'fen biome along rivers in cold regions trees: fir, spruce',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Forms along rivers in Taigas, Larch Forests and Cold Grasslands.`,
          detailsBullets: [
            'Along rivers in cold regions',
            'Trees: Fir, Spruce'
          ]
        },
        {
          id: 'flower_glade',
          title: 'Flower Glade',
          namespace_id: 'bloomingnature:flower_glade',
          subtitle: 'A colourful clearing inside the forest.',
          search: 'flower glade biome clearings in forests and flower forests',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Small open clearings in Forests and Flower Forests, full of flowers.`,
          detailsBullets: [
            'Clearings in Forests and Flower Forests'
          ]
        },
        {
          id: 'forest_edge',
          title: 'Forest Edge',
          namespace_id: 'bloomingnature:forest_edge',
          subtitle: 'The narrow strip where open land meets the forest.',
          search: 'forest edge biome between forests and open land trees: oak, birch, swamp oak',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `A thin border biome between forests and plains, meadows, savannas and other open biomes. It softens the hard line between them.`,
          detailsBullets: [
            'Between forests and open land',
            'Trees: Oak, Birch, Swamp Oak'
          ]
        },
        {
          id: 'golden_glade',
          title: 'Golden Glade',
          namespace_id: 'bloomingnature:golden_glade',
          subtitle: 'A golden clearing in the birch forest.',
          search: 'golden glade biome clearings in birch forests',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Small clearings inside Birch Forests and Old Growth Birch Forests.`,
          detailsBullets: [
            'Clearings in Birch Forests'
          ]
        },
        {
          id: 'highland_woods',
          title: 'Highland Woods',
          namespace_id: 'bloomingnature:highland_woods',
          subtitle: 'Mixed woods where plains meet the cold north.',
          search: 'highland woods biome plains next to cold biomes trees: oak, birch, spruce, fir',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Plains that border taigas or cold rivers turn into Highland Woods with oaks, birches, spruces and firs.`,
          detailsBullets: [
            'Plains next to cold biomes',
            'Trees: Oak, Birch, Spruce, Fir'
          ]
        },
        {
          id: 'jungle_river',
          title: 'Jungle River',
          namespace_id: 'bloomingnature:jungle_river',
          subtitle: 'A river winding through the jungle.',
          search: 'jungle river biome rivers in and near jungles trees: ebony, jungle wood: [[ebony|ebony]]',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Rivers next to jungles, and jungle banks along rivers, become Jungle Rivers with ebony and crooked jungle trees.`,
          detailsBullets: [
            'Rivers in and near Jungles',
            'Trees: Ebony, Jungle',
            'Wood: [[Ebony|ebony]]'
          ]
        },
        {
          id: 'larch_forest',
          title: 'Larch Forest',
          namespace_id: 'bloomingnature:larch_forest',
          subtitle: 'A cold forest of larches in green and orange.',
          search: 'larch forest biome replaces parts of taigas trees: larch wood: [[larch|larch]]',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `Grows in Taigas and especially in Snowy Taigas.`,
          detailsBullets: [
            'Replaces parts of Taigas',
            'Trees: Larch',
            'Wood: [[Larch|larch]]'
          ]
        },
        {
          id: 'marshland',
          title: 'Marshland',
          namespace_id: 'bloomingnature:marshland',
          subtitle: 'Soggy ground at the edge of the swamp.',
          search: 'marshland biome edges of swamps trees: swamp cypress, swamp oak wood: [[swamp cypress|swamp_cypress]], [[swamp oak|swamp_oak]]',
          details: true,
          detailsTitle: 'Where to find it',
          detailsText: `The outer edge of Swamps and Mangrove Swamps turns into Marshland.`,
          detailsBullets: [
            'Edges of Swamps',
            'Trees: Swamp Cypress, Swamp Oak',
            'Wood: [[Swamp Cypress|swamp_cypress]], [[Swamp Oak|swamp_oak]]'
          ]
        }
      ]
    },
    {
      id: 'trees',
      title: 'Trees and Woods',
      subtitle: 'Where each new tree grows. Every wood comes as a full building set.',
      entries: [
        {
          id: 'aspen',
          title: 'Aspen',
          namespace_id: 'bloomingnature:aspen_planks',
          subtitle: 'A pale, slender tree.',
          search: 'aspen tree wood planks sapling [[aspen forest|aspen_forest]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            '[[Aspen Forest|aspen_forest]]'
          ]
        },
        {
          id: 'baobab',
          title: 'Baobab',
          namespace_id: 'bloomingnature:baobab_planks',
          subtitle: 'A massive savanna tree.',
          search: 'baobab tree wood planks sapling [[baobab savanna|baobab_savanna]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            '[[Baobab Savanna|baobab_savanna]]'
          ]
        },
        {
          id: 'chestnut',
          title: 'Chestnut',
          namespace_id: 'bloomingnature:chestnut_planks',
          subtitle: 'A broad, leafy tree of the open plains.',
          search: 'chestnut tree wood planks sapling plains sunflower plains',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            'Plains',
            'Sunflower Plains'
          ]
        },
        {
          id: 'cypress',
          title: 'Cypress',
          namespace_id: 'bloomingnature:cypress_planks',
          subtitle: 'A tall, narrow tree of warm fields.',
          search: 'cypress tree wood planks sapling [[cypress fields|cypress_fields]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            '[[Cypress Fields|cypress_fields]]'
          ]
        },
        {
          id: 'ebony',
          title: 'Ebony',
          namespace_id: 'bloomingnature:ebony_planks',
          subtitle: 'A dark jungle wood.',
          search: 'ebony tree wood planks sapling jungle sparse jungle [[jungle river|jungle_river]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            'Jungle',
            'Sparse Jungle',
            '[[Jungle River|jungle_river]]'
          ]
        },
        {
          id: 'fan_palm',
          title: 'Fan Palm',
          namespace_id: 'bloomingnature:fan_palm_planks',
          subtitle: 'A palm with wide fan leaves.',
          search: 'fan palm tree wood planks sapling [[desert oasis|desert_oasis]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            '[[Desert Oasis|desert_oasis]]'
          ]
        },
        {
          id: 'fir',
          title: 'Fir',
          namespace_id: 'bloomingnature:fir_planks',
          subtitle: 'A dense evergreen of cold regions.',
          search: 'fir tree wood planks sapling snowy taiga [[cold grassland|cold_grassland]] [[highland woods|highland_woods]] [[fen|fen]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            'Snowy Taiga',
            '[[Cold Grassland|cold_grassland]]',
            '[[Highland Woods|highland_woods]]',
            '[[Fen|fen]]'
          ]
        },
        {
          id: 'larch',
          title: 'Larch',
          namespace_id: 'bloomingnature:larch_planks',
          subtitle: 'A conifer with green or orange needles.',
          search: 'larch tree wood planks sapling [[larch forest|larch_forest]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            '[[Larch Forest|larch_forest]]'
          ]
        },
        {
          id: 'swamp_cypress',
          title: 'Swamp Cypress',
          namespace_id: 'bloomingnature:swamp_cypress_planks',
          subtitle: 'A cypress that stands in water.',
          search: 'swamp cypress tree wood planks sapling swamp [[marshland|marshland]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            'Swamp',
            '[[Marshland|marshland]]'
          ]
        },
        {
          id: 'swamp_oak',
          title: 'Swamp Oak',
          namespace_id: 'bloomingnature:swamp_oak_planks',
          subtitle: 'A gnarled oak that likes it damp.',
          search: 'swamp oak tree wood planks sapling forest plains river swamp [[forest edge|forest_edge]] [[marshland|marshland]]',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            'Forest',
            'Plains',
            'River',
            'Swamp',
            '[[Forest Edge|forest_edge]]',
            '[[Marshland|marshland]]'
          ]
        },
        {
          id: 'blooming_oak',
          title: 'Blooming Oak',
          namespace_id: 'bloomingnature:blooming_oak_sapling',
          subtitle: 'An oak covered in blossoms. Its wood is regular oak.',
          search: 'blooming oak tree wood planks sapling flower forest',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            'Flower Forest'
          ]
        },
        {
          id: 'cactus_wood',
          title: 'Cactus',
          namespace_id: 'bloomingnature:cactus_planks',
          subtitle: 'Not a tree, but cactus can be crafted into Cactus Planks with a full wood set.',
          search: 'cactus tree wood planks sapling deserts and badlands (cactus)',
          details: true,
          detailsTitle: 'Where it grows',
          detailsBullets: [
            'Deserts and Badlands (Cactus)'
          ]
        }
      ]
    },
    {
      id: 'reworked',
      title: 'Reworked Vanilla Biomes',
      subtitle: 'The familiar biomes, but denser and more varied.',
      entries: [
        {
          id: 'vanilla_rework',
          title: 'Vanilla Biomes',
          subtitle: 'New tree shapes, fallen logs, flowers and ground cover for almost every vanilla biome.',
          search: 'vanilla biomes rework forest plains taiga jungle swamp savanna birch dark forest cherry grove',
          details: true,
          detailsTitle: 'What changes',
          detailsText: `Biome placement stays the same, but the vegetation is replaced with BloomingNature's own trees, bushes and flower patches.`,
          detailsBullets: [
            '**Forests**: tall oaks, swamp oaks and fallen logs',
            '**Birch Forests**: taller birches with roots and beehives',
            '**Plains**: chestnuts, swamp oaks and scattered birches',
            '**Taigas**: fuller spruces, fallen and stripped logs',
            '**Snowy Taigas**: firs instead of spruces',
            '**Jungles**: huge jungle trees and ebony',
            '**Swamps**: swamp cypresses, swamp oaks and willow-like dark oaks',
            '**Savannas**: more varied acacias',
            '**Dark Forests**: mushroom-covered dark oaks'
          ]
        }
      ]
    }
  ],
  impressionsTitle: 'Everyday Scenes',
  impressionsSubtitle: 'Dense vegetation and quiet details',
  impressions: [
    { src: '/assets/impressions/bloomingnature/01.webp', caption: 'A reworked beach with richer vegetation' },
    { src: '/assets/impressions/bloomingnature/02.webp', caption: 'A newly introduced Aspen Forest' },
    { src: '/assets/impressions/bloomingnature/03.webp', caption: 'A denser and more varied Taiga' },
    { src: '/assets/impressions/bloomingnature/04.webp', caption: 'Plains with enhanced grass and plant variety' },
    { src: '/assets/impressions/bloomingnature/05.webp', caption: 'Rolling Taiga hills with layered trees' },
    { src: '/assets/impressions/bloomingnature/06.webp', caption: 'Deep inside a lush Taiga forest' },
    { src: '/assets/impressions/bloomingnature/07.webp', caption: 'A stony shore with Taiga stretching beyond' },
    { src: '/assets/impressions/bloomingnature/08.webp', caption: 'An elevated Savanna Plateau landscape' },
    { src: '/assets/impressions/bloomingnature/09.webp', caption: 'Savanna with improved terrain and vegetation' },
    { src: '/assets/impressions/bloomingnature/10.webp', caption: 'A Baobab Savanna filled with towering trees' },
    { src: '/assets/impressions/bloomingnature/11.webp', caption: 'Dense vegetation inside the Jungle' },
    { src: '/assets/impressions/bloomingnature/12.webp', caption: 'Wandering through a more alive Desert' },
    { src: '/assets/impressions/bloomingnature/13.webp', caption: 'A natural transition along the Forest edge' },
    { src: '/assets/impressions/bloomingnature/14.webp', caption: 'A thickened Swamp with richer plant life' },
    { src: '/assets/impressions/bloomingnature/15.webp', caption: 'A refreshed Birch Forest with added depth' },
    { src: '/assets/impressions/bloomingnature/16.webp', caption: 'A lighter, more open Sparse Jungle' },
    { src: '/assets/impressions/bloomingnature/17.webp', caption: 'A calm Jungle river surrounded by greenery' },
    { src: '/assets/impressions/bloomingnature/18.webp', caption: 'Sunflower Plains with increased color variety' },
    { src: '/assets/impressions/bloomingnature/19.webp', caption: 'Larch Forest blending into cold plains' }
  ]
}
