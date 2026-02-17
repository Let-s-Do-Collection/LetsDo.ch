export const normalizeId = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]/g, "");

const isNamespacedId = (value) => typeof value === "string" && value.includes(":") && value.split(":").length === 2;

const splitNamespacedId = (value) => {
  const raw = String(value ?? "");
  if (!raw.includes(":")) return { namespace: "", path: raw };
  const [namespace, path] = raw.split(":");
  return { namespace: namespace ?? "", path: path ?? "" };
};

const tagIconName = (tagId) => {
  if (!isNamespacedId(tagId)) return "";
  const { path } = splitNamespacedId(tagId);
  if (!path) return "";
  return String(path).split("/").filter(Boolean).pop() ?? "";
};

const iconFromItemId = (namespacedId) => {
  if (!isNamespacedId(namespacedId)) return "";
  const { namespace, path } = splitNamespacedId(namespacedId);
  if (!namespace || !path) return "";
  const folder = namespace === "farm_and_charm" ? "farm-and-charm" : namespace;
  return `/assets/icons/${folder}/${path}.webp`;
};

const iconFromTagId = (tagId) => {
  const name = tagIconName(tagId);
  if (!name) return "";
  return `/assets/icons/tags/${name}.webp`;
};

const wikiHrefForEntry = (wikiSlug, entryId) => {
  const clean = normalizeId(entryId);
  if (!clean) return "";
  return `/wiki/${wikiSlug}/#${clean}`;
};

export const flattenWikiEntries = (wikiConfig) => {
  const entries = [];
  const byNamespaceId = new Map();
  const byId = new Map();

  const pushEntry = (entry, wikiSlug) => {
    if (!entry) return;

    const id = entry.id ? String(entry.id) : "";
    const namespaceId = entry.namespace_id ? String(entry.namespace_id) : "";
    const normalizedEntry = { ...entry, __wikiSlug: wikiSlug };

    if (id) byId.set(id, normalizedEntry);
    if (namespaceId) byNamespaceId.set(namespaceId, normalizedEntry);
    if (id || namespaceId) entries.push(normalizedEntry);

    const items = Array.isArray(entry.items) ? entry.items : [];
    for (const item of items) {
      if (!item) continue;

      const itemId = item.id ? String(item.id) : "";
      const itemNamespaceId = item.namespace_id ? String(item.namespace_id) : "";
      const normalizedItem = { ...item, __wikiSlug: wikiSlug };

      if (itemId) {
        byId.set(itemId, normalizedItem);
        entries.push(normalizedItem);
      }
      if (itemNamespaceId) {
        byNamespaceId.set(itemNamespaceId, normalizedItem);
        entries.push(normalizedItem);
      }
    }
  };

  const wikiSlug = wikiConfig?.slug ? String(wikiConfig.slug) : "wiki";
  const sections = Array.isArray(wikiConfig?.sections) ? wikiConfig.sections : [];

  for (const section of sections) {
    const sectionEntries = Array.isArray(section?.entries) ? section.entries : [];
    for (const entry of sectionEntries) pushEntry(entry, wikiSlug);
  }

  return { entries, byNamespaceId, byId, wikiSlug };
};

export const pickStationId = (recipe) => {
  const candidates = [
    recipe?.type,
    recipe?.station,
    recipe?.station_id,
    recipe?.stationId,
    recipe?.recipe_type,
    recipe?.recipeType,
    recipe?.serializer,
    recipe?.category
  ]
    .map((value) => (typeof value === "string" ? value : ""))
    .filter(Boolean);

  for (const candidate of candidates) {
    if (candidate.includes(":")) return candidate;
  }

  for (const candidate of candidates) {
    if (candidate) return candidate;
  }

  return "";
};

const isPlainObject = (value) => {
  if (!value) return false;
  if (typeof value !== "object") return false;
  if (Array.isArray(value)) return false;
  return true;
};

const looksLikeIngredientRef = (value) => {
  if (!isPlainObject(value)) return false;

  const keys = Object.keys(value);
  if (keys.length === 0) return false;

  return (
    typeof value.item === "string" ||
    typeof value.tag === "string" ||
    typeof value.id === "string" ||
    typeof value.name === "string" ||
    typeof value.value === "string" ||
    typeof value.result === "string" ||
    typeof value.output === "string" ||
    (isPlainObject(value.result) && (typeof value.result.id === "string" || typeof value.result.item === "string")) ||
    (isPlainObject(value.output) && (typeof value.output.id === "string" || typeof value.output.item === "string"))
  );
};

export const extractMany = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  if (looksLikeIngredientRef(value)) return [value];
  if (isPlainObject(value)) return Object.values(value).filter(Boolean);
  return [];
};

export const extractRef = (value) => {
  if (!value) return null;

  if (typeof value === "string") {
    if (isNamespacedId(value)) return { kind: "item", id: value };
    return null;
  }

  if (Array.isArray(value)) {
    for (const inner of value) {
      const ref = extractRef(inner);
      if (ref) return ref;
    }
    return null;
  }

  if (isPlainObject(value)) {
    if (typeof value.item === "string" && isNamespacedId(value.item)) return { kind: "item", id: value.item };
    if (typeof value.id === "string" && isNamespacedId(value.id)) return { kind: "item", id: value.id };
    if (typeof value.name === "string" && isNamespacedId(value.name)) return { kind: "item", id: value.name };
    if (typeof value.value === "string" && isNamespacedId(value.value)) return { kind: "item", id: value.value };

    if (typeof value.tag === "string" && isNamespacedId(value.tag)) return { kind: "tag", id: value.tag };

    if (typeof value.result === "string" && isNamespacedId(value.result)) return { kind: "item", id: value.result };
    if (typeof value.output === "string" && isNamespacedId(value.output)) return { kind: "item", id: value.output };

    if (isPlainObject(value.result)) {
      if (typeof value.result.id === "string" && isNamespacedId(value.result.id)) return { kind: "item", id: value.result.id };
      if (typeof value.result.item === "string" && isNamespacedId(value.result.item)) return { kind: "item", id: value.result.item };
    }

    if (isPlainObject(value.output)) {
      if (typeof value.output.id === "string" && isNamespacedId(value.output.id)) return { kind: "item", id: value.output.id };
      if (typeof value.output.item === "string" && isNamespacedId(value.output.item)) return { kind: "item", id: value.output.item };
    }

    return null;
  }

  return null;
};

export const extractIngredients = (recipe) => {
  const candidates = [
    recipe?.ingredients,
    recipe?.ingredient,
    recipe?.inputs,
    recipe?.input,
    recipe?.items,
    recipe?.itemInputs
  ].filter(Boolean);

  for (const candidate of candidates) {
    const list = extractMany(candidate);
    const refs = list.map(extractRef).filter(Boolean);
    if (refs.length) return refs;
  }

  return [];
};

export const extractContainer = (recipe) => {
  const candidates = [recipe?.container, recipe?.bottle, recipe?.vessel, recipe?.tool, recipe?.requires].filter(Boolean);
  for (const candidate of candidates) {
    const ref = extractRef(candidate);
    if (ref) return ref;
  }
  return null;
};

export const extractOutput = (recipe) => {
  const candidates = [recipe?.result, recipe?.output, recipe?.item, recipe?.produces, recipe?.crafts].filter(Boolean);

  for (const candidate of candidates) {
    const ref = extractRef(candidate);
    if (ref) return ref;
  }

  return null;
};

const tagDisplayName = (tagId) => {
  const name = tagIconName(tagId);
  if (!name) return "#tag";
  return `#${name}`;
};

const resolveTagToItemId = (tagId, farmAndCharmEntries) => {
  if (!isNamespacedId(tagId)) return "";

  const { path } = splitNamespacedId(tagId);
  const base = String(path).split("/").filter(Boolean).pop() ?? "";
  if (!base) return "";

  const preferred = ["farm_and_charm", "bakery", "candlelight", "vinery", "meadow", "minecraft"];

  for (const namespace of preferred) {
    const candidate = `${namespace}:${base}`;
    if (farmAndCharmEntries?.byNamespaceId?.has(candidate)) return candidate;
  }

  for (const [key] of farmAndCharmEntries?.byNamespaceId?.entries?.() ?? []) {
    if (!isNamespacedId(key)) continue;
    const { path: p } = splitNamespacedId(key);
    if (p === base) return key;
  }

  return "";
};

export const createItemResolver = ({ farmAndCharmEntries }) => {
  const normalizeItemRef = (ref, titleFn) => {
    if (!ref || !ref.id || !ref.kind) return null;

    if (ref.kind === "item") {
      const itemId = ref.id;
      const title = titleFn ? titleFn(itemId) : itemId;
      const icon = iconFromItemId(itemId);

      const wikiEntry = farmAndCharmEntries?.byNamespaceId?.get(itemId) ?? null;
      const href = wikiEntry ? wikiHrefForEntry(farmAndCharmEntries.wikiSlug, wikiEntry.id ?? "") : "";

      return {
        kind: "item",
        id: itemId,
        title,
        icon,
        href: href || "",
        tooltipLine1: title,
        tooltipLine2: itemId
      };
    }

    if (ref.kind === "tag") {
      const tagId = ref.id;
      const resolvedItemId = resolveTagToItemId(tagId, farmAndCharmEntries);
      const title = resolvedItemId ? (titleFn ? titleFn(resolvedItemId) : resolvedItemId) : tagDisplayName(tagId);
      const icon = iconFromTagId(tagId);

      const wikiEntry = resolvedItemId ? farmAndCharmEntries?.byNamespaceId?.get(resolvedItemId) ?? null : null;
      const href = wikiEntry ? wikiHrefForEntry(farmAndCharmEntries.wikiSlug, wikiEntry.id ?? "") : "";

      return {
        kind: "tag",
        id: tagId,
        resolvedItemId: resolvedItemId || "",
        title: title || tagDisplayName(tagId),
        icon,
        href: href || "",
        tooltipLine1: `Uses tag ${tagDisplayName(tagId)}`,
        tooltipLine2: tagId
      };
    }

    return null;
  };

  return { normalizeItemRef };
};