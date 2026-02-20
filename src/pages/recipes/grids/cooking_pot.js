export const normalizeCookingPotRecipe = ({ inputs, container, output, station, normalizeItemRef, titleFn }) => {
  const inputRefs = Array.isArray(inputs) ? inputs : [];
  const normalizedSlots = inputRefs.slice(0, 6).map((ref) => normalizeItemRef(ref, titleFn));

  while (normalizedSlots.length < 6) normalizedSlots.push(null);

  const containerSlot = container ? normalizeItemRef(container, titleFn) : null;
  const outputSlot = output ? normalizeItemRef(output, titleFn) : null;

  const outputTitle = outputSlot?.title ?? (output?.id ? titleFn(output.id) : "Recipe");
  const outputSubtitle = outputSlot?.kind === "item" ? outputSlot.id : String(output?.id ?? "");

  const searchParts = [
    outputTitle,
    outputSubtitle,
    station?.title || "",
    station?.key || "",
    ...normalizedSlots.map((s) => s?.title || ""),
    ...normalizedSlots.map((s) => s?.id || ""),
    containerSlot?.title || "",
    containerSlot?.id || ""
  ];

  return {
    station,
    inputs: normalizedSlots,
    container: containerSlot,
    output: outputSlot,
    outputTitle,
    outputSubtitle,
    search: searchParts.filter(Boolean).join(" ").toLowerCase()
  };
};

export const buildCookingPotStation = ({ farmAndCharmEntries }) => {
  const cookingPotEntry = farmAndCharmEntries?.byNamespaceId?.get("farm_and_charm:cooking_pot") ?? null;

  const subtitleHtml =
    `These recipes can be cooked in ` +
    `<a class="recipesInlineLink" href="/wiki/farm-and-charm/#cooking_pot" onclick="event.stopPropagation()">Farm &amp; Charm: Cooking Pot</a>, ` +
    `<a class="recipesInlineLink" href="/wiki/candlelight/#cooking_pot" onclick="event.stopPropagation()">Candlelight: Large Cooking Pot</a>, and ` +
    `<a class="recipesInlineLink" href="/wiki/bakery/#small_cooking_pot" onclick="event.stopPropagation()">Bakery: Small Cooking Pot</a>.`;

  return {
    key: "cooking_pot",
    id: "farm_and_charm:cooking_pot",
    ids: ["farm_and_charm:pot_cooking"],
    aliases: ["farm_and_charm:cooking_pot", "cooking_pot", "cookpot"],
    title: cookingPotEntry?.title ?? "Cooking Pot",
    subtitleHtml,
    icon: cookingPotEntry?.icon ?? "/assets/icons/farm-and-charm/cooking_pot.webp",
    wiki: cookingPotEntry ? `/wiki/farm-and-charm/#${String(cookingPotEntry.id ?? "cooking_pot")}` : "/wiki/farm-and-charm/",
    layout: "recipeLayoutPot",
    showContainerSlot: true,
    search: "cooking pot farm_and_charm:cooking_pot heat meals soups tea",
    normalizeRecipe: normalizeCookingPotRecipe
  };
};