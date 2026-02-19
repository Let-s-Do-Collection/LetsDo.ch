import { buildCookingPotStation } from "./grids/cooking_pot.js";
import { buildCraftingBowlStation } from "./grids/crafting_bowl.js";
import { buildDryingStation } from "./grids/drying.js";
import { buildMincerStation } from "./grids/mincer.js";
import { buildRoasterStation } from "./grids/roaster.js";
import { buildStoveStation } from "./grids/stove.js";
import { buildBrewingStation } from "./grids/brewing.js";
import { buildOtherStation } from "./grids/other.js";
import {
  normalizeId,
  flattenWikiEntries,
  mergeWikiEntries,
  createItemResolver,
  pickStationId,
  extractIngredients,
  extractContainer,
  extractOutput
} from "./recipe_logic.js";

export { normalizeId, flattenWikiEntries, mergeWikiEntries };

const stationKeyFromSourcePath = (sourcePath) => {
  const raw = String(sourcePath ?? "");
  if (!raw) return "";

  const normalized = raw.replace(/\\/g, "/");
  const parts = normalized.split("/").filter(Boolean);

  const recipesIndex = parts.lastIndexOf("recipes");
  if (recipesIndex === -1) return "";

  const stationSegment = parts[recipesIndex + 2] ?? "";
  return stationSegment ? String(stationSegment) : "";
};

export const buildStationRegistry = ({ wikiEntries }) => {
  const registry = new Map();
  const itemResolver = createItemResolver({ wikiEntries });

  const addStation = (station) => {
    if (!station || !station.key) return;

    registry.set(station.key, station);
    if (station.id) registry.set(station.id, station);

    const aliases = Array.isArray(station.aliases) ? station.aliases : [];
    for (const alias of aliases) {
      if (alias) registry.set(alias, station);
    }
  };

  addStation(buildCookingPotStation({ wikiEntries, itemResolver }));
  addStation(buildRoasterStation({ wikiEntries, itemResolver }));
  addStation(buildStoveStation({ wikiEntries, itemResolver }));
  addStation(buildCraftingBowlStation({ wikiEntries, itemResolver }));
  addStation(buildDryingStation({ wikiEntries, itemResolver }));
  addStation(buildMincerStation({ wikiEntries, itemResolver }));
  addStation(buildBrewingStation({ wikiEntries, itemResolver }));
  addStation(buildOtherStation({ itemResolver }));

  return {
    registry,
    itemResolver
  };
};

export const normalizeRecipes = ({ recipes, stationRegistry, wikiEntries, toTitle }) => {
  const out = [];
  const registry = stationRegistry?.registry;
  const itemResolver = stationRegistry?.itemResolver;

  if (!registry || !itemResolver) return out;

  for (const recipe of recipes) {
    if (!recipe || typeof recipe !== "object") continue;

    const sourcePath = recipe.__sourcePath ?? "";
    const stationKey = stationKeyFromSourcePath(sourcePath);

    const stationFromPath = stationKey ? registry.get(stationKey) ?? null : null;

    const stationId = pickStationId(recipe);
    const stationFromId =
      registry.get(stationId) ??
      (stationId && stationId.includes(":") ? registry.get(stationId.split(":")[1]) : null) ??
      null;

    const station = stationFromPath ?? stationFromId ?? registry.get("other");

    const ingredientRefs = extractIngredients(recipe);
    const containerRef = extractContainer(recipe);
    const outputRef = extractOutput(recipe);

    const normalizeRecipe = typeof station?.normalizeRecipe === "function" ? station.normalizeRecipe : null;
    if (!normalizeRecipe) continue;

    const normalized = normalizeRecipe({
      recipe,
      inputs: ingredientRefs,
      container: containerRef,
      output: outputRef,
      station,
      normalizeItemRef: (ref) => itemResolver.normalizeItemRef(ref, toTitle),
      titleFn: (id) => toTitle(id),
      wikiEntries
    });

    if (!normalized || !normalized.output) continue;

    out.push(normalized);
  }

  return out;
};