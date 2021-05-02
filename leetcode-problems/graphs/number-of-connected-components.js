/*   Number of Connected Components in an Undirected Graph You have a graph of n
nodes. You are given an integer n and an array edges where edges[i] = [ai, bi]
indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

Example 1:

Input: n = 5, edges = [[0,1],[1,2],[3,4]] Output: 2 Example 2:

Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]] Output: 1

Constraints:

1 <= n <= 2000 1 <= edges.length <= 5000 edges[i].length == 2 0 <= ai <= bi < n
ai != bi There are no repeated edges. */

const countComponents = (n, edges) => {
  if (!edges.length) return n;

  // make adjacency list
  const graph = {};
  edges.forEach(([e1, e2]) => {
    if (!graph[e1]) {
      graph[e1] = [e2];
    } else {
      graph[e1].push(e2);
    }
    if (!graph[e2]) {
      graph[e2] = [e1];
    } else {
      graph[e2].push(e1);
    }
  });

  // Fill out rest of graph for nodes that don't share any edges
  for (let i = 0; i < n; i += 1) {
    if (!graph[i]) {
      graph[i] = [];
    }
  }
  const queue = [edges[0][0]];

  const components = [];

  while (Object.keys(graph).length) {
    const component = {};
    component[queue[0]] = true;

    while (queue.length) {
      const current = queue.shift();
      component[current] = true;

      graph[current].forEach((neighbor) => {
        if (!component[neighbor]) {
          queue.push(neighbor);
        }
      });
    }

    components.push(component);

    Object.keys(component).forEach((node) => {
      delete graph[node];
    });

    if (Object.keys(graph)[0]) { queue.push(Object.keys(graph)[0]); }
  }

  return components.length;
};

// Union Find version:
// Utility Methods:
// find() is like 'find the parent of a set'
const find = (edge, ids) => {
  // if the parent of the current edge isn't the edge, which is tracked by the
  // index, recurseively call find on what's stored at the index. This makes it
  // so that find eventually returns the parent of a set.
  if (ids[edge] !== edge) ids[edge] = find(ids[edge], ids);
  return ids[edge];
};

const union = (edge1, edge2, ids) => {
  const parent1 = find(edge1, ids);
  const parent2 = find(edge2, ids);

  ids[parent1] = parent2;
};

const countComponentsUnionFind = (n, edges) => {
  // Create array that maps index, representing a node, to what it's parent is
  const ids = Array.from({ length: n }, (_, i) => i);

  // Change ids array to accurately show the parent of all the indices (which
  // represent nodes)
  edges.forEach(([edge1, edge2]) => union(edge1, edge2, ids));

  const set = new Set();
  ids.forEach((id, i) => set.add(find(i, ids)));

  return set.size;
};

// console.log(countComponents(4, [[2, 3], [1, 2], [1, 3]]));
console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]));
console.log(countComponents(1, []));
