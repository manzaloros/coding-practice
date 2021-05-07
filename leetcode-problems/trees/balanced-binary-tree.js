/* Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
 */

/* Top-down approach. TC: O(n log n), SC: O(n) if tree is skewed and will use O(n)
on the call stack */
const height = (root) => {
  // base case if root is null, we want to subtract 1 from the height
  if (root === null) return -1;
  return 1 + Math.max(height(root.left), height(root.right));
};

const isBalanced = (root) => {
  // base case, if root is null it is balanced
  if (root === null) return true;

  // base case if the height of the subtrees differs by more than 1 they aren't balanced
  if (Math.abs(height(root.left) - height(root.right)) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
};

const tree = {
  left:
  { left: null, right: null },
  right: {
    left: { left: null, right: null },
    right: { left: null, right: null },
  },
};
// isBalanced(tree);

// Uses the trick of calculating and returning the height and the boolean of the
// trees being balanced at the same time
// TC: O(n) SC: O(n)
// If the conditional check is before the recursion, it's top-down (head
// recursion). If the conditional check is after the recursion, it's bottom up
// (tail recursion)
const isBalancedBottomUp = (root) => {
  const isBalancedHelper = (node) => {
    if (!node) return [true, -1];

    const [leftIsBalanced, leftHeight] = isBalancedHelper(node.left);
    // Edges cases if we ever detect that the trees are unbalanced
    if (!leftIsBalanced) return [false, 0];

    const [rightIsBalanced, rightHeight] = isBalancedHelper(node.right);
    if (!rightIsBalanced) return [false, 0];

    // Check if the heights differ by 1 and return whichever is larger + 1 to
    // bubble up as the return value of the recursive call
    return [Math.abs(leftHeight - rightHeight) < 2, 1 + Math.max(leftHeight, rightHeight)];
  };

  return isBalancedHelper(root)[0];
};

isBalancedBottomUp(tree);
