/* Given the root of a binary tree, determine if it is a valid binary search
tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's
key.  The right subtree of a node contains only nodes with keys greater than the
node's key.  Both the left and right subtrees must also be binary search trees.

Example 1:

Input: root = [2,1,3] Output: true Example 2:

Input: root = [5,1,4,null,null,3,6] Output: false Explanation: The root node's
value is 5 but its right child's value is 4.

Constraints:

The number of nodes in the tree is in the range [1, 104].  -231 <= Node.val <=
231 - 1 */

const isValidBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;

  if (root.val >= max || root.val <= min) return false;

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

// TS
function isValidBST(root: TreeNode | null, minVal = -Infinity, maxVal = Infinity): boolean {
  if (!root) return true;
  if (root.val <= minVal || root.val >= maxVal) return false;
        
  const isLeftValid = isValidBST(root.left, minVal, root.val);
  const isRightValid = isValidBST(root.right, root.val, maxVal);
    
  return isLeftValid && isRightValid;    
};
