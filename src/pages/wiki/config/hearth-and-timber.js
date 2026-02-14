export default {
  slug: 'hearth-and-timber',
  title: 'Hearth & Timber',
  logo: '/assets/mod-logos/hearth_and_timber.webp',
  aboutTitle: 'Welcome',
  aboutSubtitle: 'Building blocks, textures, and world features for detailed construction',
  aboutText: `Hearth & Timber focuses entirely on blocks.

It adds building materials, decorative construction pieces, and a small set of world generation features intended for long term building projects.`,
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
            'A simple timber framework for scaffolding and quick structure work. Yes, it is basically a wooden scaffold.',
          icon: '/assets/icons/hearth-and-timber/framework.webp',
          search: 'framework scaffold geruest extension platform collision',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `Framework works like scaffolding and is meant for quick building support.

Framework Extensions create a thin platform you can stand on while keeping the block visually light.`,
          detailsBullets: [
            'Works like scaffolding',
            'Framework Extensions add a thin walkable platform',
            'Ideal for temporary structure support and building access'
          ]
        },
        {
          id: 'timber_frames',
          title: 'Timber Frames',
          subtitle: 'Decorative timber frames used to shape classic half timbered buildings.',
          icon: '/assets/icons/hearth-and-timber/timber_frame.webp',
          search: 'timber frame half timbered framework mimic block apply pickaxe remove shift tooltip waterlogged',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Timber Frames form the visible wooden structure of half timbered buildings.

They can be covered with most full blocks to fill the gaps between the beams while keeping the timber structure visible.

Apply a block to fill the frame. Use a pickaxe to remove it again.`,
          detailsBullets: [
            'Used for half timbered and framed building styles',
            'Apply blocks to fill the frame visually',
            'Use a pickaxe to remove the applied block',
            'Only accepts full model blocks',
            'Waterloggable',
            'Shows extended tooltip information while holding SHIFT'
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
              title: 'Cross Timber Frame',
              icon: '/assets/icons/hearth-and-timber/timber_crossl_frame.webp',
              search: 'timber frame cross'
            },
            {
              id: 'timber_frame_diagonal',
              title: 'Diagonal Timber Frame',
              icon: '/assets/icons/hearth-and-timber/timber_diagonal_frame.webp',
              search: 'timber frame diagonal'
            },
            {
              id: 'timber_frame_grid',
              title: 'Grid Timber Frame',
              icon: '/assets/icons/hearth-and-timber/timber_grid_frame.webp',
              search: 'timber frame grid'
            }
          ]
        },
        {
          id: 'timber_foundation_set',
          title: 'Timber Foundations',
          subtitle: 'Timber pieces that replace the full block instead of leaving visible framing.',
          icon: '/assets/icons/hearth-and-timber/timber_foundation.webp',
          search: 'timber foundation base trim skirt timber framing',
          details: true,
          detailsTitle: 'How they work',
          detailsText: `Timber Foundations work similarly to [[Timber Frames|timber_frames]], but fully replace the block instead of leaving visible struts.

They take on the applied block visually, while keeping a clean, solid shape that is ideal for lower walls, bases, and transitions between materials.`,
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
          subtitle: 'A smooth building material crafted from quicklime and available in all 16 dye colors.',
          icon: '/assets/icons/hearth-and-timber/white_plaster.webp',
          search: 'plaster wall smooth quicklime colored dye'
        },
        {
          id: 'rubblestone_masonry',
          title: 'Rubblestone Masonry',
          subtitle: 'Stonework that shifts between worn ruins and freshly patched walls.',
          icon: '/assets/icons/hearth-and-timber/covered_rubblestone.webp',
          search: 'rubblestone masonry covered plastered pointed groutless pickaxe quicklime shift tooltip cycle',
          details: true,
          detailsTitle: 'How it works',
          detailsText: `Rubblestone Masonry can be cycled between its variants.

Use a pickaxe to progress to the next look. Use Quicklime to revert to the previous one.

It keeps matching block properties where possible and shows extra info while holding SHIFT.`,
          detailsBullets: [
            'Pickaxe: cycles to the next variant',
            'Quicklime: reverts to the previous variant',
            'Shows extended tooltip information while holding SHIFT'
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
          subtitle: 'A roof material that progresses through weathering stages, with waxed variants to stop changes.',
          icon: '/assets/icons/hearth-and-timber/thatch.webp',
          search: 'thatch weathering weathered drying aged waxed stairs slab',
          details: true,
          detailsTitle: 'Weathering',
          detailsText: `Thatch progresses naturally through several weathering stages over time.

Using a water bottle advances it to the next stage instantly.
Using wheat restores it back to fresh Thatch.
Using a hoe reverts it to the previous stage.

Waxed variants permanently lock the current stage and prevent further changes.`,
          detailsBullets: [
            'Stages: Thatch, Weathered Thatch, Drying Thatch, Aged Thatch',
            'Includes matching stairs and slabs',
            'Water bottles advance weathering',
            'Wheat restores fresh Thatch',
            'Hoes revert to previous stages',
            'Waxed variants stop all weathering'
          ],
          items: [
            {
              id: 'thatch_block',
              title: 'Thatch',
              icon: '/assets/icons/hearth-and-timber/thatch.webp',
              search: 'thatch roof'
            },
            {
              id: 'drying_thatch',
              title: 'Drying Thatch',
              icon: '/assets/icons/hearth-and-timber/drying_thatch.webp',
              search: 'drying thatch roof'
            },
            {
              id: 'weathered_thatch',
              title: 'Weathered Thatch',
              icon: '/assets/icons/hearth-and-timber/weathered_thatch.webp',
              search: 'weathered thatch roof'
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
          subtitle: 'Decorative roof blocks with matching stairs and slabs.',
          icon: '/assets/icons/hearth-and-timber/oak_shingles.webp',
          search: 'shingles roof decorative stairs slab oak terracotta patchwork',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Shingles are purely decorative roof blocks and come with matching stairs and slabs.

Wooden Shingles are available in all vanilla wood variants.`,
          detailsBullets: ['Purely decorative', 'Includes matching stairs and slabs', 'Wood variants available'],
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
          subtitle: 'Sturdy wooden beams used for visible support structures and classic timbered builds.',
          icon: '/assets/icons/hearth-and-timber/oak_beam.webp',
          search: 'beam timber structural support',
          details: true,
          detailsTitle: 'Good to know',
          detailsText: `Beams are purely decorative structural elements used to visually support roofs, floors, and framing.

They are available in all vanilla wood variants.`,
          detailsBullets: [
            'Purely decorative',
            'Used for framing and visible support structures',
            'Available in all vanilla wood variants'
          ]
        },
        {
          id: 'supports',
          title: 'Supports',
          subtitle: 'Small wooden helpers that hold things together when your build starts looking a bit… ambitious.',
          icon: '/assets/icons/hearth-and-timber/oak_support.webp',
          search: 'support framing timber structural detail',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Supports are flexible framing elements that adapt to their surroundings.

They automatically align when placed next to pillars or other supports and can be modified after placement to fine tune their shape and look.

Supports are available in all vanilla wood variants.

Related: [[Pillars|pillars]].`,
          detailsBullets: [
            'Automatically aligns to nearby pillars and supports',
            'Use an axe to toggle extensions or remove the resting foot',
            'Can be reinforced using wooden boards',
            'Supports adjust visually when chained together',
            'Available in all vanilla wood variants',
            'Related: [[Pillars|pillars]]'
          ]
        },
        {
          id: 'pillars',
          title: 'Pillars',
          subtitle: 'Clean vertical pillars used to anchor frames, supports, and ambitious timber builds.',
          icon: '/assets/icons/hearth-and-timber/oak_pillar.webp',
          search: 'pillar timber framing structural interior',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Pillars act as central anchor points for timber framing.

They automatically connect to nearby [[Supports|supports]], visually extending into them to form clean structural joints.

Using an axe, the top of a pillar can be extended or retracted to better fit ceilings, beams, or framing details.

Pillars are available in all vanilla wood variants.`,
          detailsBullets: [
            'Automatically connects to nearby Supports',
            'Visually extends into connected framing elements',
            'Use an axe to toggle the extended top',
            'Designed for interiors, framing, and vertical structure',
            'Available in all vanilla wood variants',
            'Related: [[Supports|supports]]'
          ]
        },
        {
          id: 'railings',
          title: 'Railings',
          subtitle: 'Slim railings for balconies and edges. Use an axe to cycle the size when you inevitably misclick.',
          icon: '/assets/icons/hearth-and-timber/oak_railing.webp',
          search: 'railing balcony walkway edge waterlogged axe size full half quarter stairs shape corner',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Railings automatically form clean corners when placed next to each other.

If a full railing feels a bit too confident, use an axe to cycle through three sizes: Full, Half, and Quarter.

Railings are available in all vanilla wood variants.`,
          detailsBullets: [
            'Auto connects and forms inner and outer corners',
            'Use an axe to cycle size: Full, Half, Quarter',
            'Waterloggable',
            'Available in all vanilla wood variants',
            'Shows extended tooltip information while holding SHIFT'
          ]
        },
        {
          id: 'window_casings',
          title: 'Window Casings',
          subtitle:
            'Slim wooden trims that automatically frame windows and politely disappear where they are not needed.',
          icon: '/assets/icons/hearth-and-timber/oak_window_casing.webp',
          search: 'window casing frame trim facade waterlogged axe toggle',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Window Casings automatically connect to each other to form clean window frames.

Edges appear only where no neighboring casing is present, keeping the look tidy without manual tweaking.

If the bottom trim gets in the way, use an axe on the lower part to toggle it off.

Window Casings are available in all vanilla wood variants.

Related: [[Windows|window_set]].`,
          detailsBullets: [
            'Automatically connects to nearby Window Casings',
            'Hides inner edges for clean window frames',
            'Use an axe to toggle the bottom trim',
            'Waterloggable',
            'Available in all vanilla wood variants',
            'Shows extended tooltip information while holding SHIFT',
            'Related: [[Windows|window_set]]'
          ]
        },
        {
          id: 'boards',
          title: 'Boards',
          subtitle: 'Stackable wooden boards for subtle depth and tiny build lies we all tell ourselves.',
          icon: '/assets/icons/hearth-and-timber/oak_board.webp',
          search: 'boards wooden board layers stackable detail',
          details: true,
          detailsTitle: 'Usage',
          detailsText: `Boards are stackable detail blocks that build up in layers.

Placing another Board onto an existing one increases its thickness. Once fully stacked, the next Board continues into the block above or below, depending on placement.

Use an axe to remove layers again, one by one.

Boards are available in all vanilla wood variants.`,
          detailsBullets: [
            'Stack up to four layers in one block',
            'Continues building vertically when fully stacked',
            'Top and bottom placement supported',
            'Use an axe to remove layers',
            'Available in all vanilla wood variants'
          ]
        },
        {
          id: 'window_set',
          title: 'Windows',
          subtitle: 'Windows available as full blocks and panes.',
          icon: '/assets/icons/hearth-and-timber/oak_window.webp',
          search: 'window pane block vertical connect timber wood glass',
          details: true,
          detailsTitle: 'More info',
          detailsText: `Windows are purely decorative and automatically connect vertically.

They are available as full window blocks and lighter window panes.

All window variants are available in all vanilla wood variants.`,
          detailsBullets: ['Purely decorative', 'Auto connects vertically', 'Block and pane variants'],
          items: [
            {
              id: 'window_block',
              title: 'Window Block',
              icon: '/assets/icons/hearth-and-timber/oak_window.webp',
              search: 'window block timber wood glass'
            },
            {
              id: 'window_pane',
              title: 'Window Pane',
              icon: '/assets/icons/hearth-and-timber/oak_window_pane.webp',
              search: 'window pane timber wood glass'
            }
          ]
        },
        {
          id: 'sliding_doors',
          title: 'Sliding Doors',
          subtitle: 'Sliding doors for larger openings, available in multiple formats.',
          icon: '/assets/icons/hearth-and-timber/sliding_barn_door.webp',
          search: 'sliding hayloft barn stable door',
          details: true,
          detailsTitle: 'Variants',
          detailsText: `Sliding Doors are designed for wide and tall entrances commonly found in rural and agricultural builds.

They slide horizontally and are suited for barns, stables, and haylofts.`,
          detailsBullets: [
            'Designed for larger openings',
            'Slides horizontally when opened',
            'Purely decorative building blocks',
            'Used for barns, stables, and similar structures'
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
          id: 'groutless_rubblestone',
          title: 'Groutless Rubblestone',
          subtitle: 'Generates naturally underground as a stone variant.',
          icon: '/assets/icons/hearth-and-timber/groutless_rubblestone.webp',
          search: 'groutless rubblestone worldgen overworld',
          details: true,
          detailsTitle: 'Generation',
          detailsText: `Groutless Rubblestone generates naturally in the Overworld.

It forms large underground veins and replaces base stone blocks.`,
          detailsBullets: [
            'Generates in the Overworld',
            'Replaces base stone',
            'Large vein size',
            'Spawns between Y -64 and Y 0'
          ]
        }
      ]
    }
  ]
}
