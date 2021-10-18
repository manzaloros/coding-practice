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
 * @param {number} k
 * @return {boolean}

 check if (target - val) is in set. If so, return true, add val to set
 -9

 -5 - 4
 set {
 2

 }
 */
let findTarget = function (root, k, set = new Set()) {
  if (!root) return false;

  const { val, left, right } = root;

  if (set.has(k - val)) return true;

  set.add(val);

  return findTarget(left, k, set) || findTarget(right, k, set);
};
