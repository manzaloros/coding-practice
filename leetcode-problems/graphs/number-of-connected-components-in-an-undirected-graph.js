/**
 max num you'll see is n - 1.

 make adj list.

 dfs
 if not in seen
 add to seen
 dfs neighbors

 for each node
   dfs if not in seen, add 1 to int components

 return components
 */
// O(edges + nodes)
let countComponents = function (n, edges) {
  const graph = new Map();
  // O(n)
  for (let i = 0; i < n; i += 1) graph.set(i, new Set());

  edges.forEach(([a, b]) => {
    graph.get(a).add(b);
    graph.get(b).add(a);
  });

  let count = 0;
  const seen = new Set();

  const dfs = (/* string */ node) => {
    if (!seen.has(node)) {
      seen.add(node);

      graph.get(node).forEach(/* string */ (neighbor) => {
        dfs(neighbor);
      });
    }
  };

  graph.forEach((neighbors, /* string */ node) => {
    if (!seen.has(node)) {
      dfs(node);
      count += 1;
    }
  });

  return count;
};

// union by rank and path compression
// time: O(nodes + number of unions)
// space: o(n)
const countComponentsUF = (n, edges) => {
  let count = n;

  const p = Array(n).fill(0).map((el, i) => i);
  const rank = Array(n).fill(0);

  const find = (index) => {
    if (p[index] !== index) p[index] = find(p[index]);

    return p[index];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      // if (size[rootX] < size[rootY]) {
      //   size[rootY] += size[rootX];
      //   p[rootX] = rootY;
      // } else {
      //   size[rootX] += size[rootY];
      //   p[rootY] = rootX;
      // }
      if (rank[rootX] > rank[rootY]) {
        p[rootY] = rootX;
      } else if (rank[rootX] < rank[rootY]) {
        p[rootX] = rootY;
      } else {
        p[rootY] = rootX;

        rank[rootX] += 1;
      }

      count -= 1;
    }
  };

  edges.forEach(([a, b]) => {
    union(a, b);
  });

  return count;
};

// countComponentsUF(5, [[0, 1], [1, 2], [2, 3], [3, 4]]);
countComponentsUF(5, [[0, 1], [1, 2], [3, 4]]);
