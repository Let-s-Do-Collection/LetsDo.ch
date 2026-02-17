export const normalizeDryingRecipe = ({ inputs, output, station, normalizeItemRef, titleFn }) => {
  const inputRefs = Array.isArray(inputs) ? inputs : [];
  const ingredientRef = inputRefs[0] ?? null;

  const inputSlot = ingredientRef ? normalizeItemRef(ingredientRef, titleFn) : null;
  const outputSlot = output ? normalizeItemRef(output, titleFn) : null;

  const outputTitle = outputSlot?.title ?? (output?.id ? titleFn(output.id) : "Recipe");
  const outputSubtitle = outputSlot?.kind === "item" ? outputSlot.id : String(output?.id ?? "");

  const searchParts = [
    outputTitle,
    outputSubtitle,
    station?.title || "",
    station?.key || "",
    inputSlot?.title || "",
    inputSlot?.id || "",
    outputSlot?.title || "",
    outputSlot?.id || ""
  ];

  return {
    station,
    inputs: [inputSlot],
    container: null,
    output: outputSlot,
    outputTitle,
    outputSubtitle,
    search: searchParts.filter(Boolean).join(" ").toLowerCase()
  };
};

export const buildDryingStation = ({ farmAndCharmEntries }) => {
  const siloEntry = farmAndCharmEntries?.byNamespaceId?.get("farm_and_charm:silo_copper") ?? null;

  const subtitleHtml =
    `These recipes can be dried in ` +
    `<a class="recipesInlineLink" href="/wiki/farm-and-charm/#silo_copper" onclick="event.stopPropagation()">Farm &amp; Charm: Silo</a>.`;

  return {
    key: "drying",
    id: "farm_and_charm:drying",
    aliases: ["farm_and_charm:drying", "drying"],
    title: siloEntry?.title ?? "Silo",
    subtitleHtml,
    icon: siloEntry?.icon ?? "/assets/icons/farm-and-charm/silo_copper.webp",
    wiki: "/wiki/farm-and-charm/#silo_copper",
    layout: "recipeLayoutDrying",
    showContainerSlot: false,
    search: "drying farm_and_charm:drying silo farm_and_charm:silo_copper",
    normalizeRecipe: normalizeDryingRecipe
  };
};