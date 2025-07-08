export class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }

  findNode(val, node = this) {
    if (node?.val === val) return node;
    let found;
    if (node.left) {
      found = this.findNode(val, node.left)
      if (found) return found;
    }
    if (node.right) {
      found = this.findNode(val, node.right)
      if (found) return found;
    }
  }

  addLeftChild(val) {
    const node = new TreeNode(val);

    this.left = node;
  }

  addRightChild(val) {
    const node = new TreeNode(val);

    this.right = node;
  }

  static createFromArray(vals, root = new TreeNode(vals[0]), i = 0) {
    if (i < vals.length) {
      const temp = new TreeNode(vals[i]);
      root = temp;

      root.left = TreeNode.createFromArray(vals, root.left, 2 * i + 1);

      root.right = TreeNode.createFromArray(vals, root.right, 2 * i + 2);
    }

    return root;
  }

  static printPreOrder(root, message = '') {
    if (root) {
      message += String(root.val);
      TreeNode.printPreOrder(root.left, message);
      TreeNode.printPreOrder(root.right, message);
    }

    return message;
  }
};
