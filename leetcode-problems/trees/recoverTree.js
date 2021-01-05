/* You are given the root of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

Follow up: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?



Example 1:


Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
Example 2:


Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.


Constraints:

The number of nodes in the tree is in the range [2, 1000].
-231 <= Node.val <= 231 - 1 */

const recoverTree = (root) => {
  let prev = -Infinity;
  const flips = [];
  let stack = [[root, 0]];
  while (stack.length > 0) {
    let node = stack[stack.length - 1][0];
    let j = stack[stack.length - 1][1];
    if (j === 2) { // remove node from stack if already checked
      stack.pop();
    } else if (j === 1) { // check node if out of order
      if (node.val < prev) { // node is out of order
        flips.push(prev);
        flips.push(node.val);
      }
      prev = node.val;
      stack[stack.length - 1][1] = 2;
      if (node.right) {
        stack.push([node.right, 0]);
      }
    } else { // node hasn't been checked
      stack[stack.length - 1][1] = 1;
      if (node.left) {
        stack.push([node.left, 0]);
      }
    }
  }
  const toSwap = [flips[0], flips[flips.length - 1]];
  stack = [root];
  while (stack.length > 0) {
    node = stack.pop();
    if (toSwap.includes(node.val)) {
      node.val = toSwap.reduce((sum, c) => sum += c) - node.val;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

/* A Tiller solution: */
/*
var recoverTree = function(root) {

  function makeInorder(node, arr) {
    if (node.left) makeInorder(node.left, arr);
    arr.push(node);
    if (node.right) makeInorder(node.right, arr);
  }

  const inOrder = [];
  makeInorder(root, inOrder);

  let first = null;
  let second = null;
  for (let i = 0; i < inOrder.length - 1; i++) {
    if (inOrder[i].val > inOrder[i + 1].val) {
      second = inOrder[i + 1];
      if (!first) {
        first = inOrder[i];
      } else {
        break
      }
    }
  }

  // I maintain that it's cheating to just swap the values instead of rewiring the nodes,
  // but LeetCode disagrees and the code I wrote to switch the nodes was both super messy
  // and didn't work. So here I am.
  [first.val, second.val] = [second.val, first.val];
};
*/

const tree = { val: 3, left: { val: 1, left: null, right: null }, right: { val: 4, left: { val: 2 } } };
console.log(recoverTree(tree));