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

export const iconFolderFromNamespace = (namespace) => String(namespace ?? "").replace(/_/g, "-");

export const iconFromItemId = (namespacedId) => {
  if (!isNamespacedId(namespacedId)) return "";
  const { namespace, path } = splitNamespacedId(namespacedId);
  if (!namespace || !path) return "";
  const folder = iconFolderFromNamespace(namespace);
  return `/assets/icons/${folder}/${path}.webp`;
};

export const wikiHrefForEntry = (wikiSlug, entryId) => {
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

    const normalized = { ...entry, __wikiSlug: wikiSlug };

    if (id) {
      entries.push(normalized);
      byId.set(id, normalized);
      if (namespaceId) byNamespaceId.set(namespaceId, normalized);
    } else if (namespaceId) {
      entries.push(normalized);
      byNamespaceId.set(namespaceId, normalized);
    }

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

export const titleFromId = (identifier) => {
  const raw = String(identifier ?? "");
  const path = raw.includes(":") ? raw.split(":")[1] : raw;
  return String(path ?? "")
    .split("_")
    .filter(Boolean)
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
};

export const tagLabel = (tagId) => {
  const raw = String(tagId ?? "");
  if (!raw) return "";
  return raw.startsWith("#") ? raw : `#${raw}`;
};

export const buildTagSlot = ({ tagId }) => {
  const title = "Tag";
  const tagText = tagLabel(tagId);
  return {
    id: String(tagId ?? ""),
    title,
    icon: "/assets/icons/misc/tag.webp",
    href: "",
    tooltipLine1: title,
    tooltipLine2: `Uses tag ${tagText}`
  };
};

export const resolveTagToItemId = ({ tagId, farmAndCharmEntries, fallbackNamespaces }) => {
  const raw = String(tagId ?? "");
  if (!raw.includes(":")) return "";
  const [namespace, path] = raw.split(":");
  if (!namespace || !path) return "";

  const preferred = Array.isArray(fallbackNamespaces) ? fallbackNamespaces : [];
  for (const ns of preferred) {
    const candidate = `${ns}:${path}`;
    if (farmAndCharmEntries?.byNamespaceId?.has(candidate)) return candidate;
  }

  return "";
};

export const buildItemSlot = ({ itemId, farmAndCharmEntries, toTitle }) => {
  if (!itemId) return null;

  const title = (toTitle || titleFromId)(itemId);
  const icon = iconFromItemId(itemId);

  const wikiEntry = farmAndCharmEntries?.byNamespaceId?.get(itemId) ?? null;
  const href = wikiEntry ? wikiHrefForEntry(farmAndCharmEntries.wikiSlug, wikiEntry.id ?? "") : "";

  return {
    id: itemId,
    title,
    icon,
    href: href || "",
    tooltipLine1: title,
    tooltipLine2: itemId
  };
};

export const extractItemOrTag = (value) => {
  if (!value) return { kind: "", value: "" };

  if (typeof value === "string") {
    if (isNamespacedId(value)) return { kind: "item", value };
    return { kind: "", value: "" };
  }

  if (Array.isArray(value)) {
    for (const inner of value) {
      const found = extractItemOrTag(inner);
      if (found.kind) return found;
    }
    return { kind: "", value: "" };
  }

  if (typeof value === "object") {
    if (typeof value.item === "string" && isNamespacedId(value.item)) return { kind: "item", value: value.item };
    if (typeof value.id === "string" && isNamespacedId(value.id)) return { kind: "item", value: value.id };
    if (typeof value.name === "string" && isNamespacedId(value.name)) return { kind: "item", value: value.name };
    if (typeof value.result === "string" && isNamespacedId(value.result)) return { kind: "item", value: value.result };
    if (typeof value.output === "string" && isNamespacedId(value.output)) return { kind: "item", value: value.output };
    if (typeof value.value === "string" && isNamespacedId(value.value)) return { kind: "item", value: value.value };
    if (typeof value.tag === "string") return { kind: "tag", value: value.tag };
    return { kind: "", value: "" };
  }

  return { kind: "", value: "" };
};

export const extractIngredients = (recipe) => {
  const candidates = [recipe?.ingredients, recipe?.inputs, recipe?.input, recipe?.items, recipe?.itemInputs].filter(Boolean);

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate;
    if (typeof candidate === "object") {
      const asArray = Object.values(candidate);
      if (asArray.length) return asArray;
    }
  }

  return [];
};

export const extractContainer = (recipe) => {
  const candidates = [recipe?.container, recipe?.bottle, recipe?.vessel, recipe?.tool, recipe?.requires].filter(Boolean);
  for (const candidate of candidates) {
    const found = extractItemOrTag(candidate);
    if (found.kind === "item") return found.value;
  }
  return "";
};

export const extractOutput = (recipe) => {
  const candidates = [recipe?.result, recipe?.output, recipe?.item, recipe?.produces, recipe?.crafts].filter(Boolean);

  for (const candidate of candidates) {
    const found = extractItemOrTag(candidate);
    if (found.kind === "item") return found.value;

    if (typeof candidate === "object" && typeof candidate.item === "string" && isNamespacedId(candidate.item)) return candidate.item;
    if (typeof candidate === "object" && typeof candidate.id === "string" && isNamespacedId(candidate.id)) return candidate.id;
  }

  if (typeof recipe?.result === "object" && typeof recipe.result?.item === "string") return recipe.result.item;
  if (typeof recipe?.output === "object" && typeof recipe.output?.item === "string") return recipe.output.item;

  return "";
};

export const guessStationKeyFromSourcePath = (sourcePath) => {
  const normalized = String(sourcePath ?? "").replace(/\\/g, "/").toLowerCase();
  const match = normalized.match(/\/src\/recipes\/[^/]+\/([^/]+)\//);
  if (!match) return "";
  return String(match[1] ?? "").trim();
};