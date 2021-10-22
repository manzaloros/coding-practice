/*
  v: [[7,2], [3, 7]],
  s: 7
  d: 3
  result should be 0.
  Elements: {7: [0, 1], 2: [0],}

  graph:
  {
    0: [1]
    1: [0]
  }
*/

const findMinStops = (v, s, d) => {
  // Contains indices of matching arrays from v
  const destinations = new Set();
  const sources = new Set();

  const mapIndexToValue = (map, stops, i) => {
    stops.forEach((stop) => {
      if (!map.has(stop)) map.set(stop, new Set());
      map.get(stop).add(i);

      if (stop === s) sources.add(i);
      if (stop === d) destinations.add(i);
    });

    return map;
  };

  const valuesToIndexes = v.reduce(mapIndexToValue, new Map());

  const graph = v.reduce((map, stops, i) => {
    stops.forEach((stop) => {
      if (!map.has(i)) map.set(i, new Set());

      valuesToIndexes.get(stop).forEach((index) => map.get(i).add(index));
    });

    return map;
  }, new Map());

  const queue = [];

  sources.forEach((source) => queue.push([source, 0]));

  const seen = new Set();

  while (queue.length > 0) {
    const [curr, path] = queue.shift();

    if (!seen.has(curr)) {
      seen.add(curr);

      if (destinations.has(curr)) return path;

      graph.get(curr).forEach((neighbor) => queue.push([neighbor, path + 1]));
    }
  }

  return -1;
};
/*
0: [1,2,3]
 O(number of nodes (V) * number of edges (E))
*/

// findMinStops([[7, 2], [3, 7]], 7, 3);
// findMinStops([[7, 2], [3, 7], [4]], 4, 4);
findMinStops([[7, 2], [3, 7], [4, 3]], 3, 2); // 1
