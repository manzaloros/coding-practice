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
 * @return {boolean}
 
 The solution basically uses the number 1 to represent 'false', and 
 any other numbers to represent the max(height of left, height of right).
 
 If you do this you always have to check if the recursion returns -1 and make sure to immediately
 return 1 to represent that the subtree isn't balanced, so none of the tree will be balanced.
 
 */
var isBalanced = function(root) {
  const traverse = (curr) => {
    if (!curr) return 0;
  
    const leftH = traverse(curr.left);
    if (leftH === -1) return -1;
    
    const rightH = traverse(curr.right);
    if (rightH === -1) return -1;
    
    // Returns whether the height of left and right
    // differ by more than 1.
    if (Math.abs(leftH - rightH) > 1) return -1;
    
    // will be 1 with only root node with no children.
    // gets the max height of the tree of left and right.
    return Math.max(leftH, rightH) + 1;
  }
  
  return traverse(root) !== -1;
};
