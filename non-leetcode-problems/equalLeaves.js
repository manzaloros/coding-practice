/*
 * Create a function that takes a tree structure and returns 1
 * if all leaf values are equal. Return 0 if not all leaves are equal.
 */

const sampleTree = {
  'a': 1,
  'b': 1,
  'c': {
    'c.1': 1,
    'c.2': {
      'c.2.i': 1,
      'c.2.ii': 1,
    },
  },
};

const leavesAreEqual = (tree, [val, equal] = [Object.values(tree)[0], 1]) => {
  const recurse = (leaf) => {
    if (typeof leaf === 'object' && leaf !== null) {
      return Object.keys(leaf).forEach(l => recurse(leaf[l]));
    }
    equal = leaf === val ? equal : 0;
  }

  recurse(tree)

  return equal;
};

console.log(leavesAreEqual(sampleTree));
