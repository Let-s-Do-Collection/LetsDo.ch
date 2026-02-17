export const normalizeMincerRecipe = ({ inputs, output, station, normalizeItemRef, titleFn }) => {
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

export const buildMincerStation = ({ farmAndCharmEntries }) => {
  const mincerEntry = farmAndCharmEntries?.byNamespaceId?.get("farm_and_charm:mincer") ?? null;

  const subtitleHtml =
    `These recipes can be processed in ` +
    `<a class="recipesInlineLink" href="/wiki/farm-and-charm/#mincer" onclick="event.stopPropagation()">Farm &amp; Charm: Mincer</a>.`;

  return {
    key: "mincer",
    id: "farm_and_charm:mincer",
    aliases: ["farm_and_charm:mincer", "mincer"],
    title: mincerEntry?.title ?? "Mincer",
    subtitleHtml,
    icon: mincerEntry?.icon ?? "/assets/icons/farm-and-charm/mincer.webp",
    wiki: "/wiki/farm-and-charm/#mincer",
    layout: "recipeLayoutDrying",
    showContainerSlot: false,
    search: "mincer farm_and_charm:mincer grinding meat processing",
    normalizeRecipe: normalizeMincerRecipe
  };
};