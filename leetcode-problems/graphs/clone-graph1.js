// O(num of nodes) time, O(num of nodes space) space for Map and callstack
class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}
let cloneGraph = function (node) {
  const dfs = (curr = node, visited = new Map()) => {
    // Don't forget empty graph edge case
    if (!node) return null;
    // Don't forget to return the correct value from the map
    if (visited.has(curr.val)) return visited.get(curr.val);

    const clone = new Node(curr.val);

    // Don't forget to add clone to map, NOT current
    visited.set(curr.val, clone);

    curr.neighbors.forEach((neighbor) => {
      clone.neighbors.push(dfs(neighbor, visited));
    });

    return clone;
  };

  return dfs();
};

const n = new Node(2, [g]);
var g = new Node(1, [n]);

cloneGraph(g);
