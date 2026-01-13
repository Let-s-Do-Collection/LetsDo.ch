const GITHUB_API_BASE = "https://api.github.com/repos/Let-s-Do-Collection/FarmAndCharm/contents";
const RECIPE_DIR = "common/src/main/resources/data/farm_and_charm/recipe";
const REF = "1.21.1";

const safeArray = (v) => (Array.isArray(v) ? v : []);
const asString = (v) => (typeof v === "string" ? v : "");
const stripNamespace = (id) => asString(id).split(":").pop() || asString(id);

const titleFromId = (id) =>
  stripNamespace(id)
    .split("_")
    .filter(Boolean)
    .map((p) => p.slice(0, 1).toUpperCase() + p.slice(1))
    .join(" ");

const ingredientToId = (ingredient) => {
  if (!ingredient) return "";
  if (asString(ingredient.item)) return asString(ingredient.item);
  if (asString(ingredient.tag)) return `#${asString(ingredient.tag)}`;
  return "";
};

const resultToId = (result) => {
  if (!result) return "";
  if (asString(result.item)) return asString(result.item);
  if (asString(result.id)) return asString(result.id);
  return "";
};

const getResultCount = (recipe) => {
  if (recipe && typeof recipe.count === "number") return recipe.count;
  if (recipe && recipe.result && typeof recipe.result.count === "number") return recipe.result.count;
  return 1;
};

const kindLabelFromType = (type) => {
  const t = asString(type);
  if (t.includes("crafting_shaped") || t.includes("crafting_shapeless")) return "Workbench";
  if (t.includes("smelting")) return "Smelting";
  if (t.includes("blasting")) return "Blasting";
  if (t.includes("smoking")) return "Smoking";
  if (t.includes("campfire")) return "Campfire";
  if (t.includes("stonecutting")) return "Stonecutting";
  return "Recipe";
};

const normalizeIngredientId = (id) => {
  const raw = asString(id);
  if (!raw) return "";
  if (raw.startsWith("#")) return `#${stripNamespace(raw.slice(1))}`;
  return stripNamespace(raw);
};

const iconFromAnyId = (id) => {
  const raw = asString(id);
  if (!raw) return "/assets/icons/unavailable.png";
  if (raw.startsWith("#")) return "/assets/icons/unavailable.png";
  return `/assets/icons/farm-and-charm/${stripNamespace(raw)}.png`;
};

const buildEmptyGrid = () => [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const slotFromIngredientId = (ingredientId) => {
  const normalized = normalizeIngredientId(ingredientId);
  if (!normalized) return null;
  return {
    id: normalized,
    icon: iconFromAnyId(ingredientId),
  };
};

const parseShapedToGrid = (recipe) => {
  const pattern = safeArray(recipe.pattern).map(asString).filter(Boolean);
  if (!pattern.length) return null;

  const key = recipe.key && typeof recipe.key === "object" ? recipe.key : {};
  const width = Math.min(3, Math.max(...pattern.map((row) => row.length), 0));
  const height = Math.min(3, pattern.length);

  const grid = buildEmptyGrid();

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const row = pattern[rowIndex] ?? "";
    for (let colIndex = 0; colIndex < width; colIndex++) {
      const ch = row[colIndex] ?? " ";
      if (ch === " " || ch === "_") continue;
      const ingredient = key[ch];
      const ingredientId = ingredientToId(ingredient);
      const slot = slotFromIngredientId(ingredientId);
      if (slot) grid[rowIndex][colIndex] = slot;
    }
  }

  return grid;
};

const parseShapelessToGrid = (recipe) => {
  const ingredients = safeArray(recipe.ingredients);
  if (!ingredients.length) return null;

  const grid = buildEmptyGrid();
  const flat = ingredients.map(ingredientToId).filter(Boolean).slice(0, 9);

  for (let index = 0; index < flat.length; index++) {
    const rowIndex = Math.floor(index / 3);
    const colIndex = index % 3;
    const ingredientId = flat[index];
    const slot = slotFromIngredientId(ingredientId);
    if (slot) grid[rowIndex][colIndex] = slot;
  }

  return grid;
};

const parseSingleInputToGrid = (recipe) => {
  const ingredientId = ingredientToId(recipe.ingredient);
  const grid = buildEmptyGrid();
  const slot = slotFromIngredientId(ingredientId);
  if (slot) grid[1][1] = slot;
  return grid;
};

export async function loadFarmAndCharmRecipes() {
  const listUrl = `${GITHUB_API_BASE}/${RECIPE_DIR}?ref=${encodeURIComponent(REF)}`;

  const listRes = await fetch(listUrl, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!listRes.ok) {
    throw new Error(`GitHub list failed: ${listRes.status} ${listRes.statusText}`);
  }

  const listJson = await listRes.json();
  const files = safeArray(listJson).filter((e) => e && e.type === "file" && asString(e.download_url).endsWith(".json"));

  const recipes = [];
  for (const file of files) {
    const downloadUrl = asString(file.download_url);
    if (!downloadUrl) continue;

    const recipeRes = await fetch(downloadUrl);
    if (!recipeRes.ok) continue;

    const recipe = await recipeRes.json();
    recipes.push({
      fileName: stripNamespace(file.name).replace(/\.json$/i, ""),
      path: asString(file.path),
      recipe,
    });
  }

  return recipes;
}

export function recipeToWikiEntry(recipeFile) {
  const recipe = recipeFile.recipe || {};
  const type = asString(recipe.type);

  const resultIdRaw = resultToId(recipe.result);
  const resultName = stripNamespace(resultIdRaw);
  const resultCount = getResultCount(recipe);
  const title = resultName ? titleFromId(resultName) : titleFromId(recipeFile.fileName);

  const kindLabel = kindLabelFromType(type);

  let grid = null;
  if (type.includes("crafting_shaped")) grid = parseShapedToGrid(recipe);
  else if (type.includes("crafting_shapeless")) grid = parseShapelessToGrid(recipe);
  else if (type.includes("smelting") || type.includes("blasting") || type.includes("smoking") || type.includes("campfire")) {
    grid = parseSingleInputToGrid(recipe);
  } else {
    grid = buildEmptyGrid();
  }

  const outputId = resultIdRaw ? normalizeIngredientId(resultIdRaw) : normalizeIngredientId(`farm_and_charm:${recipeFile.fileName}`);

  const recipeRender = {
    kindLabel,
    grid,
    output: {
      id: outputId,
      count: resultCount,
      icon: iconFromAnyId(outputId),
    },
  };

  const namespaceId = `farm_and_charm:${recipeFile.fileName}`;

  return {
    title,
    subtitle: "",
    namespace_id: namespaceId,
    icon: iconFromAnyId(outputId),
    detailsTitle: "",
    detailsSubtitle: "",
    detailsText: "",
    detailsBullets: [],
    recipe: recipeRender,
    details: true,
    search: `${title} ${namespaceId} ${outputId} ${kindLabel}`,
  };
}