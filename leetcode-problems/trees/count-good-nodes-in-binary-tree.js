const goodNodesIterative = (root) => {
  let goodNodes = 0;
  const stack = [[root, -Infinity]];

  while (stack.length > 0) {
    let [node, max] = stack.pop();

    if (node) {
      if (node.val >= max) {
        goodNodes += 1;
        max = node.val;
      }

      stack.push([node.left, max]);
      stack.push([node.right, max]);
    }
  }

  return goodNodes;
};

const goodNodesRecursive = (root) => {
  let goodNodes = 0;

  const dfs = (node, maxSoFar) => {
    if (node) {
      if (node.val >= maxSoFar) {
        goodNodes += 1;
        maxSoFar = node.val;
      }

      dfs(node.left, maxSoFar);
      dfs(node.right, maxSoFar);
    }
  };

  dfs(root, -Infinity);

  return goodNodes;
};
