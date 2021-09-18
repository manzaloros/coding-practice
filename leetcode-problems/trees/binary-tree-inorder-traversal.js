// iterative:
let inorderTraversal = function (root) {
  // can't initialize stack with root because you don't want to log root first
  const stack = [];
  const vals = [];
  let current = root;

  // Must check for current as well as items in the stack
  while (current || stack.length > 0) {
    // Iterate down left branch
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    vals.push(current.val);

    // will only go to right branch last
    current = current.right;
  }

  return vals;
};
