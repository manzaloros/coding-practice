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
let maxLevelSum = function (root) {
  const levels = [];

  const dfs = (node, level) => {
    if (node) {
      levels[level] = (levels[level] || 0) + node.val;

      dfs(node.left, level + 1);
      dfs(node.right, level + 1);
    }
  };

  dfs(root, 0);
  const reducer = (levelIndex, curr, i) => (curr > levels[levelIndex] ? i : levelIndex);

  return levels.reduce(reducer, 0) + 1;
};
