export const normalizeCraftingBowlRecipe = ({ inputs, output, station, normalizeItemRef, titleFn }) => {
  const inputRefs = Array.isArray(inputs) ? inputs : [];
  const normalizedSlots = inputRefs.slice(0, 4).map((ref) => normalizeItemRef(ref, titleFn));

  while (normalizedSlots.length < 4) normalizedSlots.push(null);

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

export const buildCraftingBowlStation = ({ farmAndCharmEntries }) => {
  const craftingBowlEntry = farmAndCharmEntries?.byNamespaceId?.get("farm_and_charm:crafting_bowl") ?? null;

  const subtitleHtml =
    `These recipes can be prepared in ` +
    `<a class="recipesInlineLink" href="/wiki/farm-and-charm/#crafting_bowl">Farm &amp; Charm: Crafting Bowl</a>.`;

  return {
    key: "crafting_bowl",
    id: "farm_and_charm:crafting_bowl",
    aliases: ["farm_and_charm:crafting_bowl", "crafting_bowl"],
    title: craftingBowlEntry?.title ?? "Crafting Bowl",
    subtitleHtml,
    icon: craftingBowlEntry?.icon ?? "/assets/icons/farm-and-charm/crafting_bowl.webp",
    wiki: craftingBowlEntry ? `/wiki/farm-and-charm/#${String(craftingBowlEntry.id ?? "crafting_bowl")}` : "/wiki/farm-and-charm/",
    layout: "recipeLayoutBowl",
    showContainerSlot: false,
    search: "crafting bowl farm_and_charm:crafting_bowl mixing butter dough cereals salads",
    normalizeRecipe: normalizeCraftingBowlRecipe
  };
};