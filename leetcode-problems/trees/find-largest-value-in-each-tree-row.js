/* Given the root of a binary tree, return an array of the largest value in each
row of the tree (0-indexed).

Example 1:

Input: root = [1,3,2,5,3,null,9] Output: [1,3,9] Example 2:

Input: root = [1,2,3] Output: [1,3] Example 3:

Input: root = [1] Output: [1] Example 4:

Input: root = [1,null,2] Output: [1,2] Example 5:

Input: root = [] Output: []

Constraints:

The number of nodes in the tree will be in the range [0, 104].  -231 <= Node.val
<= 231 - 1 */

// Time: O(number of nodes)
// Space: O(max level number of nodes)
const largestValues = (root) => {
  if (!root) return [];

  const largestOfEachRow = [];
  let currentRowQueue = [root];
  let nextRowQueue = [];

  while (currentRowQueue.length > 0) {
    let rowMax = -Infinity;

    while (currentRowQueue.length > 0) {
      const current = currentRowQueue.shift();
      rowMax = Math.max(current.val, rowMax);

      if (current.left) nextRowQueue.push(current.left);
      if (current.right) nextRowQueue.push(current.right);
    }

    largestOfEachRow.push(rowMax);
    currentRowQueue = nextRowQueue;
    nextRowQueue = [];
  }

  return largestOfEachRow;
};

const largestValuesDFS = (root) => {
  const largest = [];

  const dfs = (node, depth) => {
    if (node) {
      // Need to do undefined check since val could be 0 and would evaluate to
      // falsy
      if (largest[depth] !== undefined) {
        largest[depth] = Math.max(node.val, largest[depth]);
      } else {
        largest[depth] = node.val;
      }
      dfs(node.left, 1 + depth);
      dfs(node.right, 1 + depth);
    }
  };

  dfs(root, 0);

  return largest;
};

largestValuesDFS({
  val: 2,
  left: { val: -1 },
  right: { val: 4 },
});
