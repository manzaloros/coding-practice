/*
  In order traversal.
  
  Will produce sorted values in ascending order for Binary Search Tree.
  
  const traverse = (root) => {
    if (root) {
      traverse(root.left);
      // do stuff
      traverse(root.right);
    }
  } 


*/

// O(number of nodes) time, O(height of tree) space
const recoverTree = (root) => {
  let el1, el2;
  
  let prevEl = new TreeNode(-Infinity);
  const inOrderTraverse = (curr) => {
    if (curr) {
      inOrderTraverse(curr.left);
      
      // if el1 hasn't been set and previously seen root is out of order
      if (!el1 && prevEl.val >= curr.val) el1 = prevEl; 
      
      if (el1 && prevEl.val >= curr.val) el2 = curr;
      
      prevEl = curr;
      
      inOrderTraverse(curr.right);
    }
  }
  
  inOrderTraverse(root);
  
  [el1.val, el2.val] = [el2.val, el1.val];
}
