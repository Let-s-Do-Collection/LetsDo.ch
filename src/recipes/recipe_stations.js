const isNamespacedId = (value) => typeof value === "string" && value.includes(":") && value.split(":").length === 2;

const splitNamespacedId = (value) => {
  const raw = String(value ?? "");
  if (!raw.includes(":")) return { namespace: "", path: raw };
  const [namespace, path] = raw.split(":");
  return { namespace: namespace ?? "", path: path ?? "" };
};

export const buildStationRegistry = ({ stations }) => {
  const registry = new Map();
  const stationList = Array.isArray(stations) ? stations : [];

  const register = (key, station) => {
    if (!key) return;
    registry.set(key, station);
    if (isNamespacedId(key)) {
      const { path } = splitNamespacedId(key);
      if (path) registry.set(path, station);
    }
  };

  for (const station of stationList) {
    if (!station) continue;

    register(station.key, station);

    const ids = Array.isArray(station.ids) ? station.ids : [];
    for (const id of ids) register(id, station);

    if (station.id) register(station.id, station);
  }

  return registry;
};