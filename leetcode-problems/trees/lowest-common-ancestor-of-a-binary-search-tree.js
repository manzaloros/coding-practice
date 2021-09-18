let lowestCommonAncestor = function (root, p, q) {
  let lca;
  const pVal = p.val;
  const qVal = q.val;

  const dfs = (node) => {
  // If both p and q are greater than the parent, you can search that part of the tree
    if (pVal > node.val && qVal > node.val) return dfs(node.right);

    if (pVal < node.val && qVal < node.val) return dfs(node.left);

    // This means that one of the pVal or qVal is === the current node, meaning this is the LCA.
    lca = node;
  };

  dfs(root);

  return lca;
};

const lowestCommonAncestorBinary = (root, p, q) => {
  let lca = [];
  const pVal = p.val;
  const qVal = q.val;

  const dfs = (node) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);
    const self = node === p || node === q ? 1 : 0;

    if ((left + right + self) === 2) lca.push(node);

    return self + left + right;
  };

  dfs(root);

  return lca[0];
};
