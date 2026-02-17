export const normalizeOtherRecipe = ({ inputs, container, output, station, normalizeItemRef, titleFn }) => {
  const inputRefs = Array.isArray(inputs) ? inputs : [];
  const normalizedSlots = inputRefs.slice(0, 6).map((ref) => normalizeItemRef(ref, titleFn));

  while (normalizedSlots.length < 6) normalizedSlots.push(null);

  const containerSlot = container ? normalizeItemRef(container, titleFn) : null;
  const outputSlot = output ? normalizeItemRef(output, titleFn) : null;

  const outputTitle = outputSlot?.title ?? (output?.id ? titleFn(output.id) : "Rezept");
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

export const buildOtherStation = ({ itemResolver }) => {
  return {
    key: "other",
    id: "",
    aliases: ["other"],
    title: "Other",
    subtitleHtml: "",
    icon: "/assets/icons/misc/unknown.webp",
    wiki: "/wiki/farm-and-charm/",
    layout: "recipeLayoutPot",
    showContainerSlot: true,
    search: "other",
    normalizeRecipe: normalizeOtherRecipe,
    itemResolver
  };
};