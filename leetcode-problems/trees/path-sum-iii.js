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
 * @param {number} targetSum
 * @return {number}
 */
const TreeNode = require('../TreeNode');

let pathSum = function (root, targetSum) {
  let result = 0;

  const map = new Map();
  map.set(0, 1);

  const dfs = (node, runningTotal) => {
    if (node) {
      const { val, left, right } = node;

      runningTotal += val;
      let kLess = runningTotal - targetSum;

      if (map.get(kLess) > 0) result += map.get(kLess);

      map.set(runningTotal, (map.get(runningTotal) || 0) + 1);

      dfs(left, runningTotal);
      dfs(right, runningTotal);

      map.set(runningTotal, map.get(runningTotal) - 1);
    }
  };

  dfs(root, 0);

  return result;
};

pathSum(TreeNode.createFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22);
