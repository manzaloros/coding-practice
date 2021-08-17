/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Time: O(num of nodes)
// Space: O(depth of tree for call stack)
let longestZigZag = function (root) {
  let maxLength = 0;

  const dfs = ({ left, right }, length, isLeft) => {
    maxLength = Math.max(maxLength, length);

    if (left) {
      if (isLeft) {
        dfs(left, 1, true);
      } else {
        dfs(left, length + 1, true);
      }
    }

    if (right) {
      if (isLeft) {
        // if theres a right child, and you are the left child,
        // continue zig zag
        dfs(right, length + 1, false);
      } else {
        dfs(right, 1, false);
      }
    }
  };

  if (root.left) dfs(root.left, 1, true);
  if (root.right) dfs(root.right, 1, false);

  return maxLength;
};

// Time O(num of nodes)
// Space: O(max num of nodes in one level)
const longestZigZagBFS = (root) => {
  const bfs = (node) => {
    if (!root) return 0;

    let queue = [];
    let maxLength = 0;

    if (root.left) queue.push([root.left, 'l', 1]);
    if (root.right) queue.push([root.right, 'r', 1]);

    while (queue.length > 0) {
      const [{ left, right }, from, length] = queue.shift();

      maxLength = Math.max(length, maxLength);

      if (left) {
        if (from === 'l') queue.push([left, 'l', 1]);
        if (from === 'r') queue.push([left, 'l', length + 1]);
      }

      if (right) {
        if (from === 'l') queue.push([right, 'r', length + 1]);
        if (from === 'r') queue.push([right, 'r', 1]);
      }
    }

    return maxLength;
  };

  return bfs(root);
};
