/*
  Uber is trying to assess customer route patters and offer suggestions to other
user based on this. Each from and to for a route can be represented as an
undirected edge. A group of n locations is uniquely numbered from 1 to n. A trio
is defined as a group of 3 related locations that call connected by an edge.
Trios are scored by counting the number of related locations outside of the
trio, this is referred to as location sum.

Given location relation data, determine the minimum location sum for all trios
of related locations in the group, if no such trio return -1

Example input: location_nodes = 6 location_edges = 6 from = [1,2,2,3,4,5] to =
[2,4,5,5,5,6]

Undirected Edges are basically from[i] to to[i] for each i and vice versa since
they are undirected

Example output Answer is 3 Explanation: The trio here is [2,4,5] and location
sum for it is 3 becaue 2 is connected to 1 outside of trio and 3 is connected to
5 outside of trio and 6 is connected to 4 outside of trio. So a total of 3
connected locations outside of the trio.

If there are multiples trios, return the smallest location sum for those trios
*/

const getMinimumLocationSum = (nodes, edges, from, to) => {
  const graph = new Map();
  const visited = new Map();

  let minSum = -1;

  for (let i = 1; i <= nodes; i += 1) {
    graph.set(i, []);
  }

  for (let i = 0; i < edges; i += 1) {
    graph.get(from[i]).push(to[i]);
    graph.get(to[i]).push(from[i]);
  }

  // For each node in the graph
  graph.forEach((neighbors, node) => {
    // For each neighbor of that node
    neighbors.forEach((neighbor) => {
      // Find the neighbors of the neighbor
      const neighborsOfNeighbor = graph.get(neighbor);

      /*
        Get the neighbors that are shared by the neighbor, the node, and the
        neighbor of neighbor. These are trios.
      */
      const sharedNeighbors = new Set();
      neighborsOfNeighbor.forEach((neighborOfNeighbor) => {
        const set = new Set(graph.get(neighborOfNeighbor));
        if (set.has(neighbor) && set.has(node)) sharedNeighbors.add(neighborOfNeighbor);
      });

      sharedNeighbors.forEach((sharedNeighbor) => {
        const trio = [node, neighbor, sharedNeighbor];
        trio.sort((a, b) => (a < b ? -1 : 1));
        const key = `${trio[0]}:${trio[1]}:${trio[2]}`;

        if (!visited.has(key)) {
          visited.set(key, trio);

          let degree = neighbors.length
            + neighborsOfNeighbor.length
            + graph.get(sharedNeighbor).length;

          // subtract the degree centrality of the trio itself: location_sum = degree - 2 - 2 -2
          let locationSum = degree - 6;
          if (minSum === -1) {
            minSum = locationSum;
          } else {
            locationSum = Math.min(minSum, locationSum);
          }
        }
      });
    });
  });

  return minSum;
};

getMinimumLocationSum(6, 6, [1, 2, 2, 3, 4, 5], [2, 4, 5, 5, 5, 6]);
