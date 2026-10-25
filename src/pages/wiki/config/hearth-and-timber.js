export default {
  slug: 'hearth-and-timber',
  title: 'Hearth & Timber',
  logo: '/assets/mod-logos/hearth_and_timber.webp',
  aboutTitle: 'Welcome',
  modVersion: '1.0.5',
  aboutSubtitle: 'Half-timbering, masonry and roofs for detailed builds',
  aboutText: `Hearth & Timber is all about building. Frame half-timbered houses, plaster the walls in any colour, lay rubblestone and splitstone, and cover the roof with thatch or shingles.

Many blocks are interactive: fill timber frames with any block, let thatch weather over time, trim window casings, and fit wide sliding doors in any wood.

Wooden pieces come in all vanilla woods and, with other Let's Do mods installed, in their woods as well.`,
  sections: [
    {
      id: 'building',
      title: 'Decor & Building',
      subtitle: 'All building blocks and decorative pieces.',
      entries: [
        {
          id: 'framework',
          title: 'Framework',
          subtitle:
            'A wooden scaffold for building high up. Yes, it is basically scaffolding.',
          icon: '/assets/icons/hearth-and-timber/framework.webp',
          search: 'framework scaffold geruest extension platform collision',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `Framework works like scaffolding and gives you quick access to high places. Extensions create a thin platform you can stand on.`,
          detailsBullets: [
            'Works like scaffolding',
            'Extensions add a thin walkway',
            'Great for temporary building access'
          ]
        },
        {
          id: 'timber_frames',
          title: 'Timber Frames',
          subtitle: 'Timber frames for half-timbered houses. Fill the gaps with any block.',
          icon: '/assets/icons/hearth-and-timber/timber_frame.webp',
          search: 'timber frame half timbered framework mimic block apply pickaxe remove shift tooltip waterlogged',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Timber Frames are the visible beams of a half-timbered wall. Right click a frame with a full block, such as plaster or bricks, to fill the gaps between the beams. Use a pickaxe to get the block back.

There are straight, cross, diagonal and grid frames, plus Timber Frame Stairs for gables.`,
          detailsBullets: [
            'Right click with a full block to fill it',
            'Pickaxe removes the filling again',
            'Straight, cross, diagonal and grid patterns',
            'Timber Frame Stairs for gables',
            'Can be waterlogged'
          ],
          items: [
            {
              id: 'timber_frame',
              title: 'Timber Frame',
              icon: '/assets/icons/hearth-and-timber/timber_frame.webp',
              search: 'timber frame straight'
            },
            {
              id: 'timber_frame_cross',
              title: 'Timber Cross Frame',
              icon: '/assets/icons/hearth-and-timber/timber_cross_frame.webp',
              search: 'timber frame cross'
            },
            {
              id: 'timber_frame_diagonal',
              title: 'Timber Diagonal Frame',
              icon: '/assets/icons/hearth-and-timber/timber_diagonal_frame.webp',
              search: 'timber frame diagonal'
            },
            {
              id: 'timber_frame_grid',
              title: 'Timber Grid Frame',
              icon: '/assets/icons/hearth-and-timber/timber_grid_frame.webp',
              search: 'timber frame grid'
            }
          ]
        },
        {
          id: 'timber_foundation_set',
          title: 'Timber Foundations',
          subtitle: 'Base pieces for the bottom of a timbered wall.',
          icon: '/assets/icons/hearth-and-timber/timber_foundation.webp',
          search: 'timber foundation base trim skirt timber framing',
          details: true,
          detailsTitle: 'How they work',
          detailsText: `Timber Foundations are filled just like [[Timber Frames|timber_frames]], but show only a beam along the bottom. Use them for the base of a wall and for the transition between stone and timber.`,
          detailsBullets: ['Related: [[Timber Frames|timber_frames]]'],
          items: [
            {
              id: 'timber_foundation',
              title: 'Timber Foundation',
              icon: '/assets/icons/hearth-and-timber/timber_foundation.webp',
              search: 'timber foundation block'
            },
            {
              id: 'timber_base_trim',
              title: 'Timber Base Trim',
              icon: '/assets/icons/hearth-and-timber/timber_base_trim.webp',
              search: 'timber base trim'
            },
            {
              id: 'timber_base_skirt',
              title: 'Timber Base Skirt',
              icon: '/assets/icons/hearth-and-timber/timber_base_skirt.webp',
              search: 'timber base skirt'
            }
          ]
        },
        {
          id: 'plaster',
          title: 'Plaster',
          subtitle: 'Smooth plaster made from Quicklime, in all sixteen colours.',
          icon: '/assets/icons/hearth-and-timber/white_plaster.webp',
          search: 'plaster wall smooth quicklime colored dye'
        },
        {
          id: 'rubblestone_masonry',
          title: 'Rubblestone Masonry',
          subtitle: 'Rubble walls you can work from rough to freshly plastered and back.',
          icon: '/assets/icons/hearth-and-timber/covered_rubblestone.webp',
          search: 'rubblestone masonry covered plastered pointed groutless pickaxe quicklime shift tooltip cycle',
          details: true,
          detailsTitle: 'How it works',
          detailsText: `Right click Rubblestone with a stone or better pickaxe to chip it to the next look, and with Quicklime to plaster it back. Stairs, slabs and walls work the same way.

Groutless Rubblestone also generates deep underground.`,
          detailsBullets: [
            'Pickaxe: next variant',
            'Quicklime: previous variant',
            'Blocks, stairs, slabs and walls'
          ],
          items: [
            {
              id: 'covered_rubblestone',
              title: 'Covered Rubblestone',
              icon: '/assets/icons/hearth-and-timber/covered_rubblestone.webp',
              search: 'covered rubblestone masonry'
            },
            {
              id: 'plastered_rubblestone',
              title: 'Plastered Rubblestone',
              icon: '/assets/icons/hearth-and-timber/plastered_rubblestone.webp',
              search: 'plastered rubblestone masonry'
            },
            {
              id: 'pointed_rubblestone',
              title: 'Pointed Rubblestone',
              icon: '/assets/icons/hearth-and-timber/pointed_rubblestone.webp',
              search: 'pointed rubblestone masonry'
            },
            {
              id: 'groutless_rubblestone',
              title: 'Groutless Rubblestone',
              icon: '/assets/icons/hearth-and-timber/groutless_rubblestone.webp',
              search: 'groutless rubblestone masonry'
            }
          ]
        },
        {
          id: 'thatch',
          title: 'Thatch',
          subtitle: 'A thatched roof that ages over time. Waxed thatch keeps its look.',
          icon: '/assets/icons/hearth-and-timber/thatch.webp',
          search: 'thatch weathering weathered drying aged waxed stairs slab',
          details: true,
          detailsTitle: 'Weathering',
          detailsText: `Thatch slowly ages from fresh to weathered, drying and finally aged.

Pour a Water Bottle over it to age it right away. Use Wheat to make it fresh again, or a hoe to go back one stage. Waxed Thatch never changes.`,
          detailsBullets: [
            'Four stages: Thatch, Weathered, Drying, Aged',
            'Blocks, stairs and slabs',
            'Water Bottle: next stage',
            'Wheat: back to fresh',
            'Hoe: one stage back',
            'Waxed variants stay as they are'
          ],
          items: [
            {
              id: 'thatch_block',
              title: 'Thatch Block',
              icon: '/assets/icons/hearth-and-timber/thatch.webp',
              search: 'thatch roof'
            },
            {
              id: 'weathered_thatch',
              title: 'Weathered Thatch',
              icon: '/assets/icons/hearth-and-timber/weathered_thatch.webp',
              search: 'weathered thatch roof'
            },
            {
              id: 'drying_thatch',
              title: 'Drying Thatch',
              icon: '/assets/icons/hearth-and-timber/drying_thatch.webp',
              search: 'drying thatch roof'
            },
            {
              id: 'aged_thatch',
              title: 'Aged Thatch',
              icon: '/assets/icons/hearth-and-timber/aged_thatch.webp',
              search: 'aged thatch roof'
            }
          ]
        },
        {
          id: 'shingles',
          title: 'Shingles',
          subtitle: 'Roof shingles in wood, terracotta and patchwork.',
          icon: '/assets/icons/hearth-and-timber/oak_shingles.webp',
          search: 'shingles roof decorative stairs slab oak terracotta patchwork',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Shingles come with matching stairs and slabs. Wooden shingles exist in every supported wood, and there are also Terracotta and Patchwork Shingles and a plain Shingle Roof.`,
          detailsBullets: ['Blocks, stairs and slabs', 'Every wood, terracotta and patchwork'],
          items: [
            {
              id: 'oak_shingles',
              title: 'Oak Shingles',
              icon: '/assets/icons/hearth-and-timber/oak_shingles.webp',
              search: 'oak shingles roof'
            },
            {
              id: 'terracotta_shingles',
              title: 'Terracotta Shingles',
              icon: '/assets/icons/hearth-and-timber/terracotta_shingles.webp',
              search: 'terracotta shingles roof'
            },
            {
              id: 'patchwork_shingles',
              title: 'Patchwork Shingles',
              icon: '/assets/icons/hearth-and-timber/patchwork_shingles.webp',
              search: 'patchwork shingles roof'
            }
          ]
        },
        {
          id: 'beams',
          title: 'Beams',
          subtitle: 'Solid wooden beams for ceilings and framing.',
          icon: '/assets/icons/hearth-and-timber/oak_beam.webp',
          search: 'beam timber structural support',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `Beams are decorative and give roofs, ceilings and frames a sturdy look.`,
          detailsBullets: [
            'Decorative',
            'Available in every supported wood'
          ]
        },
        {
          id: 'supports',
          title: 'Supports',
          subtitle: 'Wooden braces that hold things together when your build gets a bit ambitious.',
          icon: '/assets/icons/hearth-and-timber/oak_support.webp',
          search: 'support framing timber structural detail',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Supports line up with nearby [[pillars|pillars]] and other supports and join into continuous braces.

Use an axe on a support to toggle its extension or take off the foot it rests on.`,
          detailsBullets: [
            'Connects to pillars and other supports',
            'Axe: toggle extension or foot',
            'Available in every supported wood'
          ]
        },
        {
          id: 'pillars',
          title: 'Pillars',
          subtitle: 'Upright posts that anchor your supports and frames.',
          icon: '/assets/icons/hearth-and-timber/oak_pillar.webp',
          search: 'pillar timber framing structural interior',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Pillars connect to nearby [[Supports|supports]] and form clean joints with them. Use an axe to extend or shorten the top, so it fits under ceilings and beams.`,
          detailsBullets: [
            'Connects to Supports',
            'Axe: toggle the extended top',
            'Available in every supported wood'
          ]
        },
        {
          id: 'railings',
          title: 'Railings',
          subtitle: 'Slim railings for balconies and stairs. Use an axe to change the height when you inevitably misclick.',
          icon: '/assets/icons/hearth-and-timber/oak_railing.webp',
          search: 'railing balcony walkway edge waterlogged axe size full half quarter stairs shape corner',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Railings placed next to each other form clean inner and outer corners. If a full railing is too much, use an axe to switch between full, half and quarter height.`,
          detailsBullets: [
            'Forms corners automatically',
            'Axe: full, half or quarter height',
            'Can be waterlogged',
            'Available in every supported wood'
          ]
        },
        {
          id: 'window_casings',
          title: 'Window Casings',
          subtitle:
            'Wooden window trims that frame your windows, with room for a flower pot on the sill.',
          icon: '/assets/icons/hearth-and-timber/oak_window_casing.webp',
          search: 'window casing frame trim facade waterlogged axe toggle',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Window Casings join into one frame and only show edges on the outside.

Put a Flower Pot on the lower sill and then a small flower into it for a little window box. Use an axe on the lower part to toggle the sill.`,
          detailsBullets: [
            'Joins into one clean frame',
            'Flower Pot and small flower on the sill',
            'Axe: toggle the sill',
            'Can be waterlogged',
            'Pairs with [[Windows|window_set]]'
          ]
        },
        {
          id: 'boards',
          title: 'Boards',
          subtitle: 'Thin wooden boards that stack up in layers. Great for small details.',
          icon: '/assets/icons/hearth-and-timber/oak_board.webp',
          search: 'boards wooden board layers stackable detail',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Place more Boards on a Board to make it thicker, up to four layers. A full block continues into the next one. Use an axe to take layers off again.`,
          detailsBullets: [
            'Up to four layers per block',
            'Can be placed on the top or bottom half',
            'Axe: remove a layer',
            'Available in every supported wood'
          ]
        },
        {
          id: 'window_set',
          title: 'Windows',
          subtitle: 'Framed windows as full blocks and panes.',
          icon: '/assets/icons/hearth-and-timber/oak_window.webp',
          search: 'window pane block vertical connect timber wood glass',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Windows stacked on top of each other join into one tall window. They come as full blocks and as glass panes, in the vanilla wood types.`,
          detailsBullets: ['Join vertically', 'Block and pane variants', 'Vanilla woods'],
          items: [
            {
              id: 'window_block',
              title: 'Window',
              icon: '/assets/icons/hearth-and-timber/oak_window.webp',
              search: 'window block timber wood glass'
            },
            {
              id: 'window_pane',
              title: 'Glass Pane',
              icon: '/assets/icons/hearth-and-timber/oak_window_pane.webp',
              search: 'window pane timber wood glass'
            }
          ]
        },
        {
          id: 'splitstone',
          title: 'Splitstone',
          subtitle: 'Split stone slabs for floors and garden paths.',
          search: 'splitstone mossy path slab stairs pickaxe',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Splitstone and Mossy Splitstone come with stairs and slabs. Use a pickaxe on a Splitstone block to turn it into a lower Splitstone Path.`,
          detailsBullets: [
            'Plain and mossy',
            'Blocks, stairs, slabs and paths',
            'Pickaxe turns a block into a path'
          ]
        },
        {
          id: 'quicklime',
          title: 'Quicklime',
          namespace_id: 'hearth_and_timber:quicklime',
          subtitle: 'The base for plaster, and the way to patch up rubblestone.',
          icon: '/assets/icons/hearth-and-timber/quicklime.webp',
          search: 'quicklime plaster rubblestone'
        },
        {
          id: 'sliding_doors',
          title: 'Sliding Doors',
          subtitle: 'Wide sliding doors for barns, stables and haylofts.',
          icon: '/assets/icons/hearth-and-timber/sliding_barn_door.webp',
          search: 'sliding hayloft barn stable door',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Sliding doors cover wide openings and slide to the side when you right click them.

Use any vanilla planks on a door to change its wood. An Iron Ingot adds iron fittings, and a pickaxe takes them off again.`,
          detailsBullets: [
            'Right click to slide open or closed',
            'Planks change the wood type',
            'Iron Ingot adds iron fittings',
            'Pickaxe removes the fittings'
          ],
          items: [
            {
              id: 'sliding_barn_door',
              title: 'Sliding Barn Door',
              icon: '/assets/icons/hearth-and-timber/sliding_barn_door.webp',
              search: 'sliding barn door'
            },
            {
              id: 'sliding_hayloft_door',
              title: 'Sliding Hayloft Door',
              icon: '/assets/icons/hearth-and-timber/sliding_hayloft_door.webp',
              search: 'sliding hayloft door'
            },
            {
              id: 'sliding_stable_door',
              title: 'Sliding Stable Door',
              icon: '/assets/icons/hearth-and-timber/sliding_stable_door.webp',
              search: 'sliding stable door'
            }
          ]
        }
      ]
    },
    {
      id: 'worldgen',
      title: 'Worldgen and Natural Features',
      subtitle: 'Terrain features that generate naturally in the world.',
      entries: [
        {
          id: 'groutless_rubblestone_veins',
          title: 'Groutless Rubblestone',
          subtitle: 'Large veins of rubblestone deep underground.',
          icon: '/assets/icons/hearth-and-timber/groutless_rubblestone.webp',
          search: 'groutless rubblestone worldgen overworld',
          details: true,
          detailsTitle: 'Generation',
          detailsText: `Groutless Rubblestone forms large veins in the stone and deepslate layers of the Overworld, between Y -64 and Y 0.`,
          detailsBullets: [
            'Overworld, Y -64 to 0',
            'Large veins in stone and deepslate'
          ]
        }
      ]
    }
  ]
}
