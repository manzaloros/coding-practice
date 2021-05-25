/* Given the root of a binary search tree and a target value, return the value
in the BST that is closest to the target.

Example 1:

Input: root = [4,2,5,1,3], target = 3.714286 Output: 4 Example 2:

Input: root = [1], target = 4.428571 Output: 1

Constraints:

The number of nodes in the tree is in the range [1, 104].  0 <= Node.val <= 109
-109 <= target <= 109 */

const closestValue = (root, target) => {
// store closest number
  let closest = root.val;

  const recurse = (node) => {
    if (!node) return;
    if (Math.abs(node.val - target) < Math.abs(closest - target)) {
      closest = node.val;
    }

    recurse(node.left);
    recurse(node.right);
  };

  recurse(root);

  // iterate through tree and update closest number
  // is abs(currentnode - target) < closest - target ? closest = currentnode
  // break out of loop if

  return closest;
};

const closestValueBinary = (root, target) => {
  let closest = root.val;

  while (root) {
    const { val } = root;

    if (Math.abs(val - target) < Math.abs(closest - target)) {
      closest = val;
    }

    if (target < val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return closest;
};
