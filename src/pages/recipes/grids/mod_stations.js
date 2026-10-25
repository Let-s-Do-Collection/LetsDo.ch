const createNormalizer = (slotCount) => ({ recipe, inputs, output, station, normalizeItemRef, titleFn }) => {
  const inputRefs = [...(Array.isArray(inputs) ? inputs : []), ...(recipe?.finisher ? [recipe.finisher] : [])];
  const normalizedSlots = inputRefs.slice(0, slotCount).map((ref) => normalizeItemRef(ref, titleFn));

  while (normalizedSlots.length < slotCount) normalizedSlots.push(null);

  const outputSlot = output ? normalizeItemRef(output, titleFn) : null;
  const outputTitle = outputSlot?.title ?? (output ? titleFn(output) : "Recipe");
  const outputSubtitle = outputSlot?.kind === "item" ? outputSlot.id : String(output ?? "");

  const searchParts = [
    outputTitle,
    outputSubtitle,
    station?.title || "",
    station?.key || "",
    ...normalizedSlots.map((slot) => slot?.title || ""),
    ...normalizedSlots.map((slot) => slot?.id || "")
  ];

  return {
    station,
    inputs: normalizedSlots,
    container: null,
    output: outputSlot,
    outputTitle,
    outputSubtitle,
    search: searchParts.filter(Boolean).join(" ").toLowerCase()
  };
};

const LAYOUTS = {
  1: "recipeLayoutDrying",
  4: "recipeLayoutBowl",
  6: "recipeLayoutPot"
};

const STATIONS = [
  {
    key: "bakery_jam_pot",
    mod: "Bakery",
    title: "Jam Pot",
    stationName: "Jam Pot",
    subtitleExtra: " Stir when it bubbles up and bottle it with empty Jars at the right time.",
    wiki: "/wiki/bakery/#small_cooking_pot",
    icon: "/assets/icons/bakery/small_cooking_pot.webp",
    slots: 4,
    search: "bakery jam pot jam spread bakery:jam_cooking"
  },
  {
    key: "cutting_board",
    mod: "Farm &amp; Charm",
    title: "Cutting Board",
    stationName: "Cutting Board",
    subtitleExtra: " Place a knife or cleaver on the board and chop the ingredient.",
    wiki: "/wiki/farm-and-charm/#cutting_board",
    icon: "/assets/icons/farm-and-charm/cutting_board.webp",
    slots: 1,
    search: "cutting board chopping knife cleaver farm_and_charm:cutting_board"
  },
  {
    key: "cutting_board_assembly",
    mod: "Farm &amp; Charm",
    title: "Cutting Board Assembly",
    stationName: "Cutting Board",
    subtitleExtra: " Place the ingredients on an empty board and right click with an empty hand. A finishing item such as Paper goes on last.",
    wiki: "/wiki/farm-and-charm/#cutting_board",
    icon: "/assets/icons/farm-and-charm/cutting_board.webp",
    slots: 6,
    search: "cutting board assembly assemble farm_and_charm:cutting_board_assembly"
  },
  {
    key: "meadow_cookpot",
    mod: "Meadow",
    title: "Cookpot",
    stationName: "Cookpot or Cooking Frame",
    wiki: "/wiki/meadow/#cooking_stations",
    icon: "/assets/icons/meadow/cookpot.webp",
    slots: 6,
    search: "meadow cookpot cooking frame meadow:cooking"
  },
  {
    key: "meadow_cheese_press",
    mod: "Meadow",
    title: "Cheese Press",
    stationName: "Cheese Press",
    wiki: "/wiki/meadow/#cheese_form",
    icon: "/assets/icons/meadow/cheese_form.webp",
    slots: 4,
    search: "meadow cheese press cheese form rennet milk meadow:cheese"
  },
  {
    key: "meadow_felting",
    mod: "Meadow",
    title: "Felting Needle",
    stationName: "Felting Needle",
    wiki: "/wiki/meadow/#felting_needle",
    icon: "/assets/icons/meadow/felting_needle.webp",
    slots: 1,
    search: "meadow felting needle wool meadow:felting"
  },
  {
    key: "meadow_woodcutter",
    mod: "Meadow",
    title: "Woodcutter",
    stationName: "Woodcutter",
    wiki: "/wiki/meadow/#woodcutter",
    icon: "/assets/icons/meadow/woodcutter.webp",
    slots: 1,
    search: "meadow woodcutter wood logs planks meadow:woodcutting"
  },
  {
    key: "herbalbrews_kettle",
    mod: "HerbalBrews",
    title: "Tea Kettle",
    stationName: "Tea Kettle",
    wiki: "/wiki/herbalbrews/#tea_kettle",
    icon: "/assets/icons/herbalbrews/tea_kettle.webp",
    slots: 6,
    search: "herbalbrews tea kettle tea coffee herbalbrews:kettle_brewing"
  },
  {
    key: "herbalbrews_cauldron",
    mod: "HerbalBrews",
    title: "Brewing Cauldron",
    stationName: "Brewing Cauldron",
    wiki: "/wiki/herbalbrews/#brewing_cauldron",
    icon: "/assets/icons/herbalbrews/cauldron.webp",
    slots: 4,
    search: "herbalbrews brewing cauldron flask potion herbalbrews:cauldron_brewing"
  },
  {
    key: "pottery_table",
    mod: "Lili's Pottery",
    title: "Pottery Table",
    stationName: "Pottery Table",
    wiki: "/wiki/lilis-pottery/#pottery_table",
    icon: "/assets/icons/pottery/pottery_table.webp",
    slots: 1,
    search: "lilis pottery table clay pots vases lilis_pottery:pottering"
  },
  {
    key: "pottery_kiln",
    mod: "Lili's Pottery",
    title: "Kiln",
    stationName: "Kiln",
    subtitleExtra: " A dye fires a pattern onto the pottery.",
    wiki: "/wiki/lilis-pottery/#kiln",
    icon: "/assets/icons/pottery/kiln.webp",
    slots: 4,
    search: "lilis pottery kiln firing dye pattern lilis_pottery:firing"
  },
  {
    key: "beachparty_mini_fridge",
    mod: "Beachparty",
    title: "Mini Fridge",
    stationName: "Mini Fridge",
    wiki: "/wiki/beachparty/#mini_fridge",
    icon: "/assets/icons/beachparty/mini_fridge.webp",
    slots: 1,
    search: "beachparty mini fridge freezing ice beachparty:mini_fridge_freezing"
  },
  {
    key: "beachparty_palm_bar",
    mod: "Beachparty",
    title: "Palm Bar",
    stationName: "Palm Bar",
    wiki: "/wiki/beachparty/#palm_bar",
    icon: "/assets/icons/beachparty/palm_bar.webp",
    slots: 4,
    search: "beachparty palm bar cocktails mixing beachparty:palm_bar_mixing"
  }
];

export const buildModStations = () =>
  STATIONS.map((definition) => ({
    key: definition.key,
    aliases: [definition.key],
    title: definition.title,
    subtitleHtml:
      `These recipes are made in the ` +
      `<a class="recipesInlineLink" href="${definition.wiki}" onclick="event.stopPropagation()">${definition.mod}: ${definition.stationName}</a>.` +
      (definition.subtitleExtra ?? ""),
    icon: definition.icon,
    wiki: definition.wiki,
    layout: LAYOUTS[definition.slots],
    showContainerSlot: false,
    search: definition.search,
    normalizeRecipe: createNormalizer(definition.slots)
  }));
