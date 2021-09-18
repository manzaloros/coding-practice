/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
let validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;

  const graph = new Map();

  // You know there will be nodes between 0 and n, so add them to graph. Since
  // the graph is undirected, add all nodes to graph
  for (let i = 0; i < n; i += 1) {
    graph.set(i, []);
  }

  // Add nodes as neighbors both ways, since it's undirected
  edges.forEach((edge) => {
    graph.get(edge[0]).push(edge[1]);
    graph.get(edge[1]).push(edge[0]);
  });

  const seen = new Set();

  const dfs = (node, parent) => {
    if (seen.has(node)) return false;
    seen.add(node);

    const neighbors = graph.get(node);

    for (let i = 0; i < neighbors.length; i += 1) {
      const neighbor = neighbors[i];
      // don't visit yourself, since the graph is undirected
      if (parent !== neighbor) {
        let result = dfs(neighbor, node);
        // If you see a node down a branch that you've already visited, you know
        // the graph isn't a valid tree
        if (!result) return false;
      }
    }

    return true;
  };

  // Always start searching from 0, which should be the root node
  return dfs(0, -1) && seen.size === n;
};

// validTree(5, [[0, 1], [0, 4], [1, 4], [2, 3]]);
// validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]);
validTree(4,
  [[2, 3], [1, 2], [1, 3]]);
