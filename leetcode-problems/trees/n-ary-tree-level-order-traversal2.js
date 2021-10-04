/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
let levelOrder = function (root) {
  const ans = [];
  if (!root) return ans;

  let currentLevel = [root];

  while (currentLevel.length > 0) {
    const nextLevel = [];
    const vals = [];

    // Empty current level queue into next level queue
    while (currentLevel.length > 0) {
      const currentNode = currentLevel.shift();

      vals.push(currentNode.val);
      currentNode.children.forEach((child) => nextLevel.push(child));
    }

    ans.push(vals);
    currentLevel = nextLevel;
  }

  return ans;
};
