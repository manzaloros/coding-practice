// Simpler version, no recursion:
// time: O(height of tree)
// space: O(1)
export const lowestCommonAncestor = (root, p, q) => {
  const [small, big] = [p.val, q.val].sort((a, b) => a - b);
  let current = root;

  while (current) {
    if (current.val > big) {
        // focus on the left subtree
      current = current.left;
    } else if (current.val < small) {
        // focus on the right subtree
      current = current.right;
    } else {
        // if current < big && current > small, its the answer:
      return current;
    }
  }

  return null; // fallback, though shouldn't happen if p and q are in the tree
};

// too complicated, doesn't use the BST properties
export const lowestCommonAncestorRecursive = (root, p, q /*These are trees! */) => {
	let result;
	const [small, big] = [p.val, q.val].sort((a, b) => a - b);
	const dfs = (node) => {
        let found = 0;
		if (!node || result) return 0;

		if (node.val === small) {
            found += 1;
			found += dfs(node.right);
		} else if (node.val === big) {
            found += 1;
			found += dfs(node.left);
		} else {
            found += dfs(node.left);
            if (!result) {
                found += dfs(node.right);
            }
            
        }

		if (found === 2 && !result) {
			result = node;
		}

		return found;
	};

	dfs(root);

	return result;
};