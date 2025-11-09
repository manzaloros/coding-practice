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

Kahn's algorithm for topological sorting.

[[1,0]]
Graph will look like:
{
  0: {inDegrees: 0, outNodes: [1]},
  1: {inDegrees: 1, outNodes: []}
}
*/
class GraphNode {
	constructor() {
		this.inDegrees = 0; // number of nodes that point toward this node
		this.outNodes = []; // numbers (representing nodes) that the current node shares a directed edge with
	}
}

const canFinish = (_numCourses, prerequisites) => {
	// prerequisites represents edges
	const graph = new Map();

	const getOrCreateNode = (course /* number */) => {
		let node = null;

		if (graph.has(course)) {
			node = graph.get(course);
		} else {
			node = new GraphNode();
			graph.set(course, node);
		}

		return node;
	};

	for (const pair of prerequisites) {
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

		for (const nextCourse of outNodes) {
			const child = graph.get(nextCourse);
			child.inDegrees -= 1; // mark as visited

			removedEdges += 1; // mark as visited

			if (child.inDegrees === 0) noDependentCourses.push(nextCourse);
		}
	}

	// Could also check for visited === number of graph nodes
	return removedEdges === prerequisites.length;
};

// console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0]]));

// with DFS instead:
var canFinishDFS = (numCourses, prerequisites) => {
	// Build forward graph: prereq → courses that depend on it
	const graph = {};
	for (let i = 0; i < numCourses; i++) {
		graph[i] = [];
	}

	prerequisites.forEach(([course, preReq]) => {
		graph[preReq].push(course);
	});

	const seen = new Set(); // courses fully processed
	const visiting = new Set(); // courses in the current recursion stack
	let hasCycle = false;

	const dfs = (course) => {
		if (visiting.has(course)) {
			// cycle found
			hasCycle = true;
			return;
		}
		if (seen.has(course) || hasCycle) return; // already processed or early stop

		visiting.add(course);
		for (const next of graph[course]) {
			dfs(next);
		}
		visiting.delete(course);
		seen.add(course);
	};

	// DFS from all courses, not just those with no dependents
	for (let i = 0; i < numCourses; i++) {
		if (!seen.has(i)) {
			dfs(i);
		}
	}

	return !hasCycle;
};
