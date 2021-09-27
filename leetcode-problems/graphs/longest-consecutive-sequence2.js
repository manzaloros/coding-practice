/*
  Time: O(length). Without path compression and rank: O(length * length)
  Space: O(length)
*/
const longestConsecutive = (nums) => {
  const valToIndex = new Map();
  const { length } = nums;

  /*
    parents is array of length of 0 to length - 1 (the indexes). It represents
    child:parent. So if you see index 1 has a value of 7, that means that the 1
    node's parent is node 7.

    rank is an array of 0s where whenever you union two nodes you first check
    whichever root has the larger rank and make that the parent of the other.
    This ensures that parents with more nodes always become the parents of less
    nodes.

    Size starts as all 1s, representing that the union find structure just
    consists of non-connected nodes at first. Whenever you union two nodes, you
    increase the size of the parent node by the size of the child node.
    Therefore, you can only know the real size of a component BY CHECKING THE
    ROOT NODE (where parents[i] === i).
  */
  const parents = Array(length).fill(0).map((el, i) => i);
  const rank = Array(length).fill(0);
  const size = Array(length).fill(1);

  /*
    If the value at an index doesn't equal the index, that means this isn't the
    root node, so recursively find the root. The function returns when the value
    === the index, so you return the root recursively.
  */
  const find = (x) => {
    if (x !== parents[x]) parents[x] = find(parents[x]);

    return parents[x];
  };

  /*
    Whenever you find that two roots aren't equal, find whichever rank is
    higher, and make that parent the root of the other. If the ranks are the
    same, just make rootX the parent of rootY and increase the rank of rootX.

    Whenever you union two nodes, increase the size of the parent node by the
    size of the child node so you can count the largest size at the end.

    For example, if rankX is larger, make rootX the parent of rootY and increase
    the size of rootX by whatever the size of rootY was.
  */
  const union = (x, y) => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      const rankY = rank[rootY];
      const rankX = rank[rootX];

      if (rankX > rankY) {
        parents[rootY] = rootX;

        size[rootX] += size[rootY];
      } else if (rankY > rankX) {
        parents[rootX] = rootY;

        size[rootY] += size[rootX];
      } else {
        parents[rootY] = rootX;

        size[rootX] += size[rootY];
        rank[rootX] += 1;
      }
    }
  };

  /*
    Return the maximum size in the size array. Only check sizes of root nodes,
    which is where the parent[i] === i.
  */
  const findLargestComponent = () => parents.reduce(
    (maxSize, parent, i) => (parent === i ? Math.max(size[parent], maxSize) : maxSize),
    0,
  );

  /*
    Have to check for undefined because the index could be 0 and wouldn't
    evaluate to truthy.
    If you haven't seen your number yet (to avoid duplicates), see if you've
    seen + or -1 of it. If so, union the current index with that number's index.
    Then, add the current num to your map, mapped to it's index.
  */
  const addToMapAndUnion = (num, i) => {
    if (!valToIndex.has(num)) {
      const indexOfNumMinusOne = valToIndex.get(num - 1);
      const indexOfNumPlusOne = valToIndex.get(num + 1);

      if (indexOfNumMinusOne !== undefined) union(i, indexOfNumMinusOne);
      if (indexOfNumPlusOne !== undefined) union(i, indexOfNumPlusOne);

      valToIndex.set(num, i);
    }
  };

  nums.forEach(addToMapAndUnion);

  return findLargestComponent();
};

// longestConsecutive([1, 100, 2, 200, 4, 3]);
// longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
longestConsecutive(
  [-7, -1, 3, -9, -4, 7, -3, 2, 4, 9, 4, -9, 8, -7, 5, -1, -7],
);
