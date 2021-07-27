/* Given an unsorted array of integers nums, return the length of the longest
consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2] Output: 4 Explanation: The longest consecutive
elements sequence is [1, 2, 3, 4]. Therefore its length is 4.  Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1] Output: 9

Constraints:

0 <= nums.length <= 105 -109 <= nums[i] <= 109
 */

const longestConsecutive = (nums) => {
  const graph = new Map();
  const set = new Set(nums);

  // Make an undirected graph where nodes share edges with nums that are + or -
  // 1 from that node
  nums.forEach((num) => {
    if (!graph.has(num)) graph.set(num, []);

    if (set.has(num - 1)) graph.get(num).push(num - 1);
    if (set.has(num + 1)) graph.get(num).push(num + 1);
  });

  const visited = new Set();

  const dfs = (node, currentComponent) => {
    currentComponent.push(node);
    visited.add(node);
    graph.get(node).forEach((neighbor) => {
      if (!visited.has(neighbor)) dfs(neighbor, currentComponent);
    });
  };

  const components = [];

  // Store all connected parts of graph in arrays, create them by doing dfs on
  // each graph node
  graph.forEach((neighbors, node) => {
    if (!visited.has(node)) {
      const currentComponent = [];

      dfs(node, currentComponent);
      components.push(currentComponent);
    }
  });

  // return the longest connected component or 0 if there are none
  return Math.max(
    components.reduce((shortest, { length }) => (length > shortest ? length : shortest), -Infinity),
    0,
  );
};

longestConsecutive([100, 4, 200, 1, 3, 2]);
