const TreeNode = require('../TreeNode');

let diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const dfs = (node) => {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return diameter;
};

let diameterOfBinaryTreeIterativeDFS = (root) => {
  const stack = [root];
  let diameter = 0;
  const map = new Map();

  /*
    Check top of stack. If there is a left and you haven't seen it, add it to
    the stack. Using else if, check the right as well. Finally, if there isn't a
    left OR right OR you have seen both the left and the right, pop from the
    stack.

    Check if you have recorded the left and right paths in the map. If not, make
    it 0. The maximum of the node path is 1 + the max(left, right). Record the
    current node max in your map for later.

    Finally, update the diameter to be the leftpath + right path.
  */
  while (stack.length > 0) {
    const node = stack[stack.length - 1];
    const { left, right } = node;

    if (left && !map.has(left)) {
      stack.push(left);
    } else if (right && !map.has(right)) {
      stack.push(right);
    } else {
      stack.pop();

      let leftPath = map.get(left) || 0;
      let rightPath = map.get(right) || 0;

      let nodeMax = 1 + Math.max(leftPath, rightPath);
      map.set(node, nodeMax);

      diameter = Math.max(diameter, leftPath + rightPath);
    }
  }

  return diameter;
};

const tree = TreeNode.createFromArray([1, 2, 3]);
diameterOfBinaryTreeIterativeDFS(tree);
