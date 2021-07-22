/*
  [0,1] means course 1 is prerequisite for 0.

  return bool if you can take all courses.

  To detect a cycle, keep a memo for each node you dfs and REMOVE from it when
  you are done with it

  Here, the topological order will be backwards, i.e. you need to pop from the
  stack to see it in order.
*/
const canFinish = (numCourses, prerequisites) => {
  // make graph
  const graph = new Map();
  prerequisites.forEach(([course, prerequisite]) => {
    if (!graph.has(prerequisite)) graph.set(prerequisite, []);
    if (!graph.has(course)) graph.set(course, []);

    graph.get(prerequisite).push(course);
  });

  const topologicalOrder = [];
  const visited = new Set();
  let isPossible = true;

  const depthFirstSearch = (node, branchMemo) => {
    branchMemo.add(node);
    visited.add(node);

    graph.get(node).forEach((neighbor) => {
      if (branchMemo.has(neighbor)) isPossible = false;

      if (!visited.has(neighbor)) depthFirstSearch(neighbor, branchMemo);
    });

    topologicalOrder.push(node);
    branchMemo.delete(node);
  };

  graph.forEach((neighbor, node) => {
    if (!visited.has(node)) depthFirstSearch(node, new Set());
  });

  return isPossible;
};

canFinish(2, [[1, 4], [2, 4], [3, 1], [3, 2]]);
// canFinish(2, [[1, 0]]);
