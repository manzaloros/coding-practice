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
 * @return {number[][]}
 */

/*
  Time: O(n^2) because for every node you copy elements into a new array!
  Space: O(n^2) if you count creating a new list for every node.
*/
const pathSum = function (root, targetSum) {
  const res = [];
  if (!root) return res;

  const traverse = ({ left, right, val } = root, path = [], sum = 0) => {
    sum += val;

    if (sum === targetSum && (!left && !right)) {
      path.push(val);
      res.push(path);
      return;
    }

    path.push(val);
    const leftPath = path.concat([]);
    const rightPath = path.concat([]);

    if (left) traverse(left, leftPath, sum);
    if (right) traverse(right, rightPath, sum);
  };

  traverse();

  return res;
};
