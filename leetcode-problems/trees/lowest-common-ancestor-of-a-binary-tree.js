const lowestCommonAncestor = (root, p, q) => {
  let lca;

  const dfs = (node) => {
    if (!node) return false;

    let left = dfs(node.left) ? 1 : 0;
    let right = dfs(node.right) ? 1 : 0;
    let mid = (node === p || node === q) ? 1 : 0;

    // Postorder traversal
    // Will keep updating LCA as it finds more nodes that match from left and
    // right and mid.
    if (mid + left + right >= 2) lca = node;

    // return true if any ancestors match
    return (mid + left + right) > 0;
  };

  dfs(root);

  return lca;
};

const lowestCommonAncestorWithComments = (root, p, q) => {
  let lca;

  const dfs = (node) => {
    if (!node) return false;

    // only make these 1 if they return true. This prevents from changing LCA
    // when you go further up the tree (past it)
    let left = dfs(node.left) ? 1 : 0;
    let right = dfs(node.right) ? 1 : 0;
    let mid = (node === p || node === q) ? 1 : 0;

    // Postorder traversal
    // Will keep updating LCA as it finds more nodes that match from left and
    // right and mid.
    if (mid + left + right >= 2) lca = node;

    // return true if any ancestors match
    return (mid + left + right) > 0;
  };

  dfs(root);

  return lca;
};
