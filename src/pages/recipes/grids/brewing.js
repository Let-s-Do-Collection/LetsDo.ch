const withBase = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${cleanBase}${cleanPath}`;
};

export const normalizeBrewingRecipe = ({ recipe, inputs, output, station, normalizeItemRef, titleFn }) => {
  const inputRefs = Array.isArray(inputs) ? inputs : [];
  const normalizedSlots = inputRefs.slice(0, 4).map((ref) => normalizeItemRef(ref, titleFn));

  while (normalizedSlots.length < 4) normalizedSlots.push(null);

  const outputSlot = output ? normalizeItemRef(output, titleFn) : null;

  const outputTitle = outputSlot?.title ?? (output?.id ? titleFn(output.id) : "Recipe");
  const outputSubtitle = outputSlot?.kind === "item" ? outputSlot.id : String(output?.id ?? "");

  const materialRaw = String(recipe?.material ?? "").trim().toUpperCase();
  const material =
    materialRaw === "COPPER"
      ? "copper"
      : materialRaw === "NETHERITE"
      ? "netherite"
      : "wood";

  const stationIcon =
    material === "copper"
      ? withBase("/assets/icons/brewery/copper_brewingstation.webp")
      : material === "netherite"
      ? withBase("/assets/icons/brewery/netherite_brewingstation.webp")
      : withBase("/assets/icons/brewery/wooden_brewingstation.webp");

  const stationRequirementTier =
    material === "copper" ? "Copper" :
    material === "netherite" ? "Netherite" :
    "Wooden";

  const stationRequirementTitle = `Requires: ${stationRequirementTier} Brewing Station`;
  const stationIconAlt = stationRequirementTitle;

  const searchParts = [
    outputTitle,
    outputSubtitle,
    station?.title || "",
    station?.key || "",
    stationRequirementTitle,
    ...normalizedSlots.map((slot) => slot?.title || ""),
    ...normalizedSlots.map((slot) => slot?.id || "")
  ];

  return {
    station,
    stationIcon,
    stationIconAlt,
    stationRequirementTitle,
    inputs: normalizedSlots,
    container: null,
    output: outputSlot,
    outputTitle,
    outputSubtitle,
    search: searchParts.filter(Boolean).join(" ").toLowerCase()
  };
};

export const buildBrewingStation = () => {
  const wikiHref = withBase("/wiki/brewery/#brewingstation");

  return {
    key: "brewing",
    id: "brewery:brewing",
    aliases: ["brewery:brewing", "brewing"],
    title: "Brewing",
    subtitleHtml: `These recipes can be prepared in <a class="recipesInlineLink" href="${wikiHref}">Brewery: Brewingstation</a>.`,
    icon: withBase("/assets/icons/brewery/wooden_brewingstation.webp"),
    wiki: wikiHref,
    layout: "recipeLayoutBowl",
    showContainerSlot: false,
    search: "brewery brewing station brewery:brewing beer wine whiskey fermentation mash",
    normalizeRecipe: normalizeBrewingRecipe
  };
};