const numSimilarGroups = (strs) => {
  const m = strs.length;
  let count = m;
  const parent = Array(m).fill(0).map((v, i) => i);
  const rank = Array(m).fill(0);

  const find = (i) => {
    if (parent[i] !== i) parent[i] = find(parent[i]);

    return parent[i];
  };

  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
      } else if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
      } else {
        parent[rootY] = rootX;
        rank[rootX] += 1;
      }
      count -= 1;
    }
  };

  const isSimilar = (a, b) => {
    let swaps = 0;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) swaps += 1;
    }

    return swaps === 2 || swaps === 0;
  };

  const split = strs.map((s) => s.split(''));

  for (let i = 0; i < m; i += 1) {
    const current = split[i]; // ['t', 'a', 'r', 's']

    for (let j = i + 1; j < m; j += 1) {
      const next = split[j]; // ['r', 'a', 't', 's']
      if (isSimilar(current, next)) union(i, j);
    }
  }

  return count;
};

// numSimilarGroups(['tars', 'rats', 'arts', 'star']);
// numSimilarGroups(['omv', 'ovm']);
numSimilarGroups(['blw', 'bwl', 'wlb']);
