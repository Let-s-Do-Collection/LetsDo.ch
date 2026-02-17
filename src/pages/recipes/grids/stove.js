export const normalizeStoveRecipe = ({ inputs, output, station, normalizeItemRef, titleFn }) => {
  const inputRefs = Array.isArray(inputs) ? inputs : [];
  const normalizedSlots = inputRefs.slice(0, 3).map((ref) => normalizeItemRef(ref, titleFn));

  while (normalizedSlots.length < 3) normalizedSlots.push(null);

  const outputSlot = output ? normalizeItemRef(output, titleFn) : null;

  const outputTitle = outputSlot?.title ?? (output?.id ? titleFn(output.id) : "Recipe");
  const outputSubtitle = outputSlot?.kind === "item" ? outputSlot.id : String(output?.id ?? "");

  const searchParts = [
    outputTitle,
    outputSubtitle,
    station?.title || "",
    station?.key || "",
    ...normalizedSlots.map((s) => s?.title || ""),
    ...normalizedSlots.map((s) => s?.id || "")
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

export const buildStoveStation = ({ farmAndCharmEntries }) => {
  const stoveEntry = farmAndCharmEntries?.byNamespaceId?.get("farm_and_charm:stove") ?? null;

  const subtitleHtml =
    `These recipes can be cooked in ` +
    `<a class="recipesInlineLink" href="/wiki/farm-and-charm/#stove">Farm &amp; Charm: Stove</a>.`;

  return {
    key: "stove",
    id: "farm_and_charm:stove",
    aliases: ["farm_and_charm:stove", "stove"],
    title: stoveEntry?.title ?? "Stove",
    subtitleHtml,
    icon: stoveEntry?.icon ?? "/assets/icons/farm-and-charm/stove.webp",
    wiki: stoveEntry ? `/wiki/farm-and-charm/#${String(stoveEntry.id ?? "stove")}` : "/wiki/farm-and-charm/",
    layout: "recipeLayoutStove",
    showContainerSlot: false,
    search: "stove farm_and_charm:stove baking heat fuel",
    normalizeRecipe: normalizeStoveRecipe
  };
};