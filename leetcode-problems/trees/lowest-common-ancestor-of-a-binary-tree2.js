// Pre-order traversal, looks through whole tree so it ignores BST property
var lowestCommonAncestor = function(root, p, q) {
   if (root === p || root === q || !root) return root; // did we find p, q or the end of the branch?
    
   const left = lowestCommonAncestor(root.left, p, q);
   const right = lowestCommonAncestor(root.right, p, q);
    
   if (left && right) return root;
   else if (left) return left;
   else if (right) return right;
   
  return null; // explicitly saying we didn't find p or q
};

// This is the "better" solution because it uses BST property:
// As soon as you see a root that has a value > left value and < right value you're searching for,
// that is the LCA of those two values, using BST property
// Basically if you find a root whose value is between left and right, it's the LCA
var lowestCommonAncestor = function(root, p, q) {
   const left = Math.min(p.val, q.val);
   const right = Math.max(p.val, q.val)
   
   if (root.val < left) return lowestCommonAncestor(root.left, p, q);
   if (root.val > right) return lowestCommonAncestor(root.right, q, q);
   return root; // if root is > left and root < right, that is LCA
};

/*
r:5,3,10
l:3  ,null
r:n  ,null
p:3
q:2


      5
    3.   10
  2.  4
*/
