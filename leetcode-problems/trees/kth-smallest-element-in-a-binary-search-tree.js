const kthSmallest = (root, k) => {
  let answer;
  const dfs = (node) => {
    if (!node) return;

    if (node.left) dfs(node.left);

    k -= 1;
    if (k === 0) {
      answer = node.val;
      return;
    }

    if (node.right) dfs(node.right);
  };

  dfs(root);
  return answer;
};

// Time: O log num of tree nodes, space: O (log n), or O(n ) for unbalanced tree
const kthSmallestIterative = (root, k) => {
  const stack = [];

  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    k -= 1;
    if (k === 0) return root.val;

    root = root.right;
  }
};
