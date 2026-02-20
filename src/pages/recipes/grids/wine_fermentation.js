const juiceTypeToItemId = (juiceType) => {
  if (!juiceType) return "";

  const map = {
    red: "vinery:red_grapejuice",
    white: "vinery:white_grapejuice",
    red_general: "vinery:red_grapejuice",
    white_general: "vinery:white_grapejuice",
    red_savanna: "vinery:red_savanna_grapejuice",
    white_savanna: "vinery:white_savanna_grapejuice",
    red_taiga: "vinery:red_taiga_grapejuice",
    white_taiga: "vinery:white_taiga_grapejuice",
    red_jungle: "vinery:red_jungle_grapejuice",
    white_jungle: "vinery:white_jungle_grapejuice",
    apple: "vinery:apple_juice"
  };

  return map[juiceType] ?? "";
};

export const normalizeWineFermentationRecipe = ({
  recipe,
  inputs,
  container,
  output,
  station,
  normalizeItemRef,
  titleFn
}) => {
  const ingredientRefs = Array.isArray(inputs) ? [...inputs] : [];

  const juiceType = recipe?.juice?.type ?? "";
  const juiceItemId = juiceTypeToItemId(juiceType);

  if (juiceItemId) {
    ingredientRefs.unshift({ item: juiceItemId });
  }

  const normalizedInputs = ingredientRefs
    .slice(0, 4)
    .map((ref) => normalizeItemRef(ref, titleFn));

  while (normalizedInputs.length < 4) {
    normalizedInputs.push(null);
  }

  const containerSlot = container ? normalizeItemRef(container, titleFn) : null;
  const outputSlot = output ? normalizeItemRef(output, titleFn) : null;

  const outputTitle =
    outputSlot?.title ?? (output ? titleFn(output) : "Recipe");

  const outputSubtitle =
    outputSlot?.kind === "item"
      ? outputSlot.id
      : String(output ?? "");

  const searchParts = [
    outputTitle,
    outputSubtitle,
    station?.title || "",
    station?.key || "",
    ...normalizedInputs.flatMap((slot) =>
      slot ? [slot.title || "", slot.id || ""] : []
    ),
    containerSlot?.title || "",
    containerSlot?.id || "",
    outputSlot?.title || "",
    outputSlot?.id || ""
  ];

  return {
    station,
    inputs: normalizedInputs,
    container: containerSlot,
    output: outputSlot,
    outputTitle,
    outputSubtitle,
    search: searchParts.filter(Boolean).join(" ").toLowerCase()
  };
};

const pickWineBottleItemId = (wikiEntries) => {
  const candidates = [
    "vinery:wine_bottle",
    "vinery:empty_wine_bottle",
    "vinery:wine_bottle_empty",
    "vinery:empty_bottle"
  ];

  for (const candidate of candidates) {
    if (wikiEntries?.byNamespaceId?.has(candidate)) {
      return candidate;
    }
  }

  return "";
};

export const buildWineFermentationStation = ({ wikiEntries }) => {
  const wineBottleItemId = pickWineBottleItemId(wikiEntries);

  const subtitleHtml =
    "Ferment juice into wine. Requires a bottle.";

  return {
    key: "wine_fermentation",
    id: "vinery:wine_fermentation",
    aliases: [
      "vinery:wine_fermentation",
      "wine_fermentation",
      "wine-fermentation"
    ],
    title: "Wine Fermentation",
    subtitleHtml,
    icon: "/assets/icons/vinery/fermentation_barrel.webp",
    wiki: "/wiki/vinery/#wine_fermentation",
    layout: "recipeLayoutWineFermentation",
    showContainerSlot: true,
    search: "wine fermentation vinery:wine_fermentation",
    normalizeRecipe: (args) =>
      normalizeWineFermentationRecipe({
        ...args,
        container:
          args.container ||
          (wineBottleItemId ? { item: wineBottleItemId } : null)
      })
  };
};