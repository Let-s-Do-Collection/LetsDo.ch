export const normalizeRoasterRecipe = ({ inputs, container, output, station, normalizeItemRef, titleFn }) => {
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

export const buildRoasterStation = ({ farmAndCharmEntries }) => {
  const roasterEntry = farmAndCharmEntries?.byNamespaceId?.get("farm_and_charm:roaster") ?? null;

  const subtitleHtml =
    `These recipes can be cooked in ` +
    `<a class="recipesInlineLink" href="/wiki/farm-and-charm/#roaster">Farm &amp; Charm: Roaster</a>.`;

  return {
    key: "roaster",
    id: "farm_and_charm:roaster",
    aliases: ["farm_and_charm:roaster", "roaster"],
    title: roasterEntry?.title ?? "Roaster",
    subtitleHtml,
    icon: roasterEntry?.icon ?? "/assets/icons/farm-and-charm/roaster.webp",
    wiki: roasterEntry ? `/wiki/farm-and-charm/#${String(roasterEntry.id ?? "roaster")}` : "/wiki/farm-and-charm/",
    layout: "recipeLayoutPot",
    showContainerSlot: true,
    search: "roaster farm_and_charm:roaster heat meals",
    normalizeRecipe: normalizeRoasterRecipe
  };
};