/**
 * @param {number[][]} graph
 * @return {number[][]}
 finding path from 0 to graph.length - 1
 make adj list

 dfs from node 0, path is a stack, pop after visit
 when you find n - 1, add path to result

 return result

 time: O(2^n * n)
 */
let allPathsSourceTarget = function (graph) {
  const result = [];
  const path = [];

  const dfs = (node) => {
    path.push(node);

    if (node === graph.length - 1) {
      result.push([...path]);
    }

    graph[node].forEach((neighbor) => {
      dfs(neighbor);
      path.pop();
    });
  };

  dfs(0);

  return result;
};
