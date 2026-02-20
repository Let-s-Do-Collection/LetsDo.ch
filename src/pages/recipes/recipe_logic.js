export const normalizeId = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]/g, "");

const isNamespacedId = (value) =>
  typeof value === "string" && value.includes(":") && value.split(":").length === 2;

const splitNamespacedId = (value) => {
  const raw = String(value ?? "");
  if (!raw.includes(":")) return { namespace: "", path: raw };
  const [namespace, path] = raw.split(":");
  return { namespace: namespace ?? "", path: path ?? "" };
};

export const iconFolderFromNamespace = (namespace) =>
  String(namespace ?? "").replace(/_/g, "-");

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

    const normalizedEntry = { ...entry, __wikiSlug: wikiSlug };

    if (id) {
      entries.push(normalizedEntry);
      byId.set(id, normalizedEntry);
      if (namespaceId) byNamespaceId.set(namespaceId, normalizedEntry);
    } else if (namespaceId) {
      entries.push(normalizedEntry);
      byNamespaceId.set(namespaceId, normalizedEntry);
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

export const mergeWikiEntries = (indexes) => {
  const mergedEntries = [];
  const byNamespaceId = new Map();
  const byId = new Map();

  const list = Array.isArray(indexes) ? indexes : [];
  for (const index of list) {
    const entries = Array.isArray(index?.entries) ? index.entries : [];
    mergedEntries.push(...entries);

    const mapNamespace = index?.byNamespaceId instanceof Map ? index.byNamespaceId : new Map();
    for (const [key, value] of mapNamespace.entries()) {
      if (!byNamespaceId.has(key)) byNamespaceId.set(key, value);
    }

    const mapId = index?.byId instanceof Map ? index.byId : new Map();
    for (const [key, value] of mapId.entries()) {
      if (!byId.has(key)) byId.set(key, value);
    }
  }

  return { entries: mergedEntries, byNamespaceId, byId };
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

const tagPathBase = (tagId) => {
  if (!isNamespacedId(tagId)) return "";
  const { path } = splitNamespacedId(tagId);
  const raw = String(path ?? "").trim();
  if (!raw) return "";
  const last = raw.split("/").filter(Boolean).pop() ?? "";
  return String(last ?? "").trim();
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
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.includes(":")) return candidate;
    if (typeof candidate === "object") {
      if (typeof candidate.id === "string" && candidate.id.includes(":")) return candidate.id;
      if (typeof candidate.type === "string" && candidate.type.includes(":")) return candidate.type;
      if (typeof candidate.name === "string" && candidate.name.includes(":")) return candidate.name;
    }
  }

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate) return candidate;
    if (typeof candidate === "object") {
      if (typeof candidate.id === "string" && candidate.id) return candidate.id;
      if (typeof candidate.type === "string" && candidate.type) return candidate.type;
      if (typeof candidate.name === "string" && candidate.name) return candidate.name;
    }
  }

  return "";
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
    if (typeof value.tag === "string" && isNamespacedId(value.tag)) return { kind: "tag", value: value.tag };
    return { kind: "", value: "" };
  }

  return { kind: "", value: "" };
};

export const extractIngredients = (recipe) => {
  const candidates = [
    recipe?.ingredients,
    recipe?.inputs,
    recipe?.input,
    recipe?.items,
    recipe?.itemInputs
  ].filter(Boolean);

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
  const candidates = [
    recipe?.container,
    recipe?.bottle,
    recipe?.vessel,
    recipe?.tool,
    recipe?.requires
  ].filter(Boolean);

  for (const candidate of candidates) {
    const found = extractItemOrTag(candidate);
    if (found.kind === "item") return found.value;
  }

  return "";
};

export const extractOutput = (recipe) => {
  const candidates = [
    recipe?.result,
    recipe?.output,
    recipe?.item,
    recipe?.produces,
    recipe?.crafts
  ].filter(Boolean);

  for (const candidate of candidates) {
    const found = extractItemOrTag(candidate);
    if (found.kind === "item") return found.value;

    if (typeof candidate === "object" && typeof candidate.item === "string" && isNamespacedId(candidate.item)) return candidate.item;
    if (typeof candidate === "object" && typeof candidate.id === "string" && isNamespacedId(candidate.id)) return candidate.id;
  }

  if (typeof recipe?.result === "object" && typeof recipe.result?.id === "string" && isNamespacedId(recipe.result.id)) return recipe.result.id;
  if (typeof recipe?.result === "object" && typeof recipe.result?.item === "string" && isNamespacedId(recipe.result.item)) return recipe.result.item;
  if (typeof recipe?.output === "object" && typeof recipe.output?.id === "string" && isNamespacedId(recipe.output.id)) return recipe.output.id;
  if (typeof recipe?.output === "object" && typeof recipe.output?.item === "string" && isNamespacedId(recipe.output.item)) return recipe.output.item;

  return "";
};

export const guessStationKeyFromSourcePath = (sourcePath) => {
  const normalized = String(sourcePath ?? "").replace(/\\/g, "/").toLowerCase();
  const match = normalized.match(/\/recipes\/([^/]+)\//);
  if (!match) return "";
  return String(match[1] ?? "").trim();
};

export const resolveTagToItemId = ({ tagId, wikiEntries, fallbackNamespaces, tagAliasMap }) => {
  const raw = String(tagId ?? "");
  if (!isNamespacedId(raw)) return "";

  const base = normalizeId(tagPathBase(raw));
  if (!base) return "";

  const aliased = normalizeId(tagAliasMap?.[base] ? String(tagAliasMap[base]) : base);
  const candidatePaths = aliased && aliased !== base ? [aliased, base] : [base];

  const preferred = Array.isArray(fallbackNamespaces) ? fallbackNamespaces : [];
  for (const candidatePath of candidatePaths) {
    for (const ns of preferred) {
      const candidate = `${ns}:${candidatePath}`;
      if (wikiEntries?.byNamespaceId?.has(candidate)) return candidate;
    }
  }

  for (const candidatePath of candidatePaths) {
    for (const [key] of wikiEntries?.byNamespaceId?.entries?.() ?? []) {
      if (!isNamespacedId(key)) continue;
      const { path } = splitNamespacedId(key);
      if (normalizeId(path) === candidatePath) return key;
    }
  }

  return "";
};

export const buildTagSlot = ({ tagId, wikiEntries, fallbackNamespaces, tagAliasMap }) => {
  const title = "Tag";
  const tagText = tagLabel(tagId);

  const resolvedItemId = resolveTagToItemId({ tagId, wikiEntries, fallbackNamespaces, tagAliasMap });
  const wikiEntry = resolvedItemId ? (wikiEntries?.byNamespaceId?.get(resolvedItemId) ?? null) : null;

  const wikiSlug = wikiEntry?.__wikiSlug ? String(wikiEntry.__wikiSlug) : "";
  const href = wikiEntry && wikiSlug ? wikiHrefForEntry(wikiSlug, wikiEntry.id ?? "") : "";

  const tagBase = normalizeId(tagPathBase(tagId));
  const icon = tagBase ? `/assets/icons/misc/tags/${tagBase}.webp` : "/assets/icons/misc/tag.webp";

  return {
    id: String(tagId ?? ""),
    title,
    icon,
    href: href || "",
    tooltipLine1: title,
    tooltipLine2: `Uses tag ${tagText}`
  };
};

export const buildItemSlot = ({ itemId, wikiEntries, toTitle }) => {
  if (!itemId) return null;

  const title = (toTitle || titleFromId)(itemId);
  const icon = iconFromItemId(itemId);

  const wikiEntry = wikiEntries?.byNamespaceId?.get(itemId) ?? null;

  const wikiSlug = wikiEntry?.__wikiSlug ? String(wikiEntry.__wikiSlug) : "";
  const href = wikiEntry && wikiSlug ? wikiHrefForEntry(wikiSlug, wikiEntry.id ?? "") : "";

  return {
    id: itemId,
    title,
    icon,
    href: href || "",
    tooltipLine1: title,
    tooltipLine2: itemId
  };
};

export const createItemResolver = ({ wikiEntries, tagAliasMap, fallbackNamespaces }) => {
  const fallback = Array.isArray(fallbackNamespaces)
    ? fallbackNamespaces
    : ["farm_and_charm", "bakery", "brewery", "candlelight", "meadow", "minecraft"];

  const aliases = tagAliasMap && typeof tagAliasMap === "object" ? tagAliasMap : { cabbage: "lettuce" };

  return {
    normalizeItemRef: (ref, toTitle) => {
      const extracted = extractItemOrTag(ref);

      if (extracted.kind === "item") {
        const slot = buildItemSlot({ itemId: extracted.value, wikiEntries, toTitle });
        if (!slot) return null;
        return { kind: "item", ...slot };
      }

      if (extracted.kind === "tag") {
        const resolvedItemId = resolveTagToItemId({
          tagId: extracted.value,
          wikiEntries,
          fallbackNamespaces: fallback,
          tagAliasMap: aliases
        });

        if (resolvedItemId) {
          const resolvedSlot = buildItemSlot({ itemId: resolvedItemId, wikiEntries, toTitle });
          if (!resolvedSlot) return null;

          return {
            kind: "tag",
            ...resolvedSlot,
            id: extracted.value,
            tooltipLine2: extracted.value
          };
        }

        return {
          kind: "tag",
          ...buildTagSlot({
            tagId: extracted.value,
            wikiEntries,
            fallbackNamespaces: fallback,
            tagAliasMap: aliases
          })
        };
      }

      return null;
    }
  };
};