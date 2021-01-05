/* A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.



Example 1:


Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
Example 2:


Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]
Example 3:

Input: n = 1, edges = []
Output: [0]
Example 4:

Input: n = 2, edges = [[0,1]]
Output: [0,1]


Constraints:

1 <= n <= 2 * 104
edges.length == n - 1
0 <= ai, bi < n
ai != bi
All the pairs (ai, bi) are distinct.
The given input is guaranteed to be a tree and there will be no repeated edges. */

const findMinHeightTrees = (n, edges) => {
  const paths = {};
  const storePath = (root, edge) => {
    if (!paths[root]) {
      paths[root] = [edge];
    } else if (!paths[root].includes(edge)) {
      paths[root].push(edge);
    }
  }

  const recurse = (root, pairIndices, connection) => {
    for (let i = 0; i < edges.length; i += 1) {
      if (pairIndices.includes(i)) continue;
      const newIndex = new Array(pairIndices);
      newIndex.push(i);

      if (edges[i][0] === root) {
        storePath(root, edges[i][1]);
        recurse(root, newIndex, edges[i][1]);
      } else if (edges[i][1] === root) {
        storePath(root, edges[i][0])
        recurse(root, newIndex, edges[i][0]);
      }
    }
  }

  for (let i = 0; i < edges.length; i += 1) {
    recurse(edges[i][0], [i]);
    recurse(edges[i][1], [i]);
  }

  let minimumLength = Infinity;
  for (let p in paths) {
    minimumLength = Math.min(minimumLength, paths[p].length);
  }

  const minimumHeightTreeRoots = [];
  for (let p in paths) {
    if (paths[p].length === minimumLength) {
      minimumHeightTreeRoots.push(p);
    }
  }

  return minimumHeightTreeRoots;
}

console.log(findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]));