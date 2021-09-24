/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function (root) {
  let string = '';

  const build = (node) => {
    if (!node) {
      string += 'null,';
    } else {
      string += `${node.val},`;

      build(node.left);
      build(node.right);
    }
  };

  build(root, '');

  return string;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function (data) {
  data = data.split(',');

  const build = () => {
    const val = data.shift();

    if (val === 'null') return null;

    const root = new TreeNode(val);

    root.left = build();
    root.right = build();

    return root;
  };

  return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
