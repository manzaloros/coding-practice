function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

let serialize = function (root) {
  const recurse = (node, s) => {
    if (!node) {
      s += 'null,';
    } else {
      s += `${String(node.val)},`;
      s = recurse(node.left, s);
      s = recurse(node.right, s);
    }

    return s;
  };
  return recurse(root, '');
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
let deserialize = function (data) {
  const arr = data.split(',');

  const build = (list) => {
    if (list[0] === 'null') {
      list.shift();
      return null;
    }

    const root = new TreeNode(list[0]);
    list.shift();
    root.left = build(list);
    root.right = build(list);

    return root;
  };

  return build(arr);
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
const root = {
  val: 1,
  left:
  { val: 2, left: null, right: null },
  right:
  { val: 3, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } },
};

deserialize(serialize(root));
