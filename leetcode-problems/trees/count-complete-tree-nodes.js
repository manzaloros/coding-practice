let countNodes = function (root) {
  if (!root) return 0;

  let d = 0;

  const findD = (node) => {
    if (node.left) {
      d += 1;
      findD(node.left);
    }
  };

  findD(root);

  /*
    Search each depth.

    Go left or right based on whether the mid is < the index you're searching for

    Return whether the node exists or not on the last depth of the tree.
  */
  const totalWithoutLastLevel = (2 ** d) - 1;

  const exists = (index, node) => {
    let [left, right] = [0, totalWithoutLastLevel];

    for (let i = 0; i < d; i += 1) {
      const pivot = left + Math.floor((right - left) / 2);

      if (index <= pivot) {
        node = node.left;
        right = pivot;
      } else {
        node = node.right;
        left = pivot + 1;
      }
    }

    return node !== null;
  };

  /*
    Total nodes in a complete BT *before* the last level is (2 ** depth) - 1.
    Check out:
           1
          2 3
         4
    Depth is 2 (0 indexed). 2 ^ 2 is 4, subtract 1, === 3. There are 3 nodes not
    including however many are in the last level.

    Binary search for whether a node exists at a position in the last level.

    Left will end up being the rightmost node, so you just add it to your count
    of nodes that doesn't include the last level.
  */
  let [left, right] = [1, totalWithoutLastLevel];

  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);

    if (exists(pivot, root)) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return (2 ** d) - 1 + left;
};
