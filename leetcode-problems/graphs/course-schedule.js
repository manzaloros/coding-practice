/* There are a total of numCourses courses you have to take, labeled from 0 to
numCourses - 1. You are given an array prerequisites where prerequisites[i] =
[ai, bi] indicates that you must take course bi first if you want to take course
ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first
take course 1.  Return true if you can finish all courses. Otherwise, return
false.

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]] Output: true Explanation: There
are a total of 2 courses to take.  To take course 1 you should have finished
course 0. So it is possible.  Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]] Output: false Explanation:
There are a total of 2 courses to take.  To take course 1 you should have
finished course 0, and to take course 0 you should also have finished course 1.
So it is impossible.

Constraints:

1 <= numCourses <= 105 0 <= prerequisites.length <= 5000 prerequisites[i].length
== 2 0 <= ai, bi < numCourses All the pairs prerequisites[i] are unique.
 */
/*
O(edges + vertices)
Space: O(edges + vertices)
*/
class GraphNode {
  constructor() {
    this.inDegrees = 0;
    this.outNodes = [];
  }
}

const canFinish = (numCourses, prerequisites) => {
  // prerequisites represents edges
  const graph = new Map();

  const getOrCreateNode = (course) => {
    let node = null;

    if (graph.has(course)) {
      node = graph.get(course);
    } else {
      node = new GraphNode();
      graph.set(course, node);
    }

    return node;
  };

  for (let i = 0; i < prerequisites.length; i += 1) {
    const pair = prerequisites[i];

    const nextCourse = getOrCreateNode(pair[0]);
    const prevCourse = getOrCreateNode(pair[1]);

    prevCourse.outNodes.push(pair[0]);
    nextCourse.inDegrees += 1;
  }

  const noDependentCourses = [];
  let removedEdges = 0;

  // Iterating map is (value, key)
  graph.forEach((node, course) => {
    if (node.inDegrees === 0) noDependentCourses.push(course);
  });

  while (noDependentCourses.length > 0) {
    // Represents course number
    const current = noDependentCourses.shift();
    // Array of nodes that current leads to
    const { outNodes } = graph.get(current);

    for (let i = 0; i < outNodes.length; i += 1) {
      const nextCourse = outNodes[i];

      const child = graph.get(nextCourse);
      child.inDegrees -= 1;

      removedEdges += 1;

      if (child.inDegrees === 0) noDependentCourses.push(nextCourse);
    }
  }

  // Could also check for visited === number of graph nodes
  return removedEdges === prerequisites.length;
};

// console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0]]));
