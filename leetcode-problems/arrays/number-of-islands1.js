const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0;

  // Union find
  let count = 0;
  const m = grid.length;
  const n = grid[0].length;
  // Flattened arrays of the grid
  const parent = Array(m * n).fill(0).map((v, i) => i);
  const rank = Array(m * n).fill(0);

  /*
    array 'parent' starts off as just each index increasing by 1, starting at 0.

    If the element at the index is NOT it's index, that means it belongs to some
    other group, so you recursively find that group and update it when
    necessary.

    Then, you return the group it belongs to.

    Try out without path compression by commenting out the 'parent[i] =' reassignment
  */
  const find = (i) => {
    if (parent[i] !== i) parent[i] = find(parent[i]);

    return parent[i];
  };

  /*
    If you find that two adjacent islands are not in the same set, decrease the count of
    islands.

    You find if two islands are connected by seeing if they belong to the same
    group.

    With union by rank, we always merge a smaller set into a larger set. If the
    rank of x is greater, make x the parent of y.
  */
  const union = (x, y) => {
    const rootx = find(x);
    const rooty = find(y);

    // If two adjacent lands aren't in the same set...
    // You need to merge them together and decrease count because you're
    // counting a land that is part of the same island. If you want to see the
    // union without rank, just keep the `else` block.
    if (rootx !== rooty) {
      // if (rank[rootx] > rank[rooty]) {
      //   parent[rooty] = rootx;
      // } else if (rank[rootx] < rank[rooty]) {
      //   parent[rootx] = rooty;
      // } else {
      parent[rooty] = rootx;
      //   rank[rootx] += 1;
      // }

      count -= 1;
    }
  };

  /* Islands */

  const nr = grid.length;
  const nc = grid[0].length;
  /*
    translate the row/column of the 2d grid into the 1d flattened arrays by
    doing ((row-position * lengthOfRows) + column position). For instance, to
    get the 1st row (0 indexed) 1st column in a grid that has a column length of
    5, you do ((1 * 5) + 1) = 6. Thus, [1,1] position in the grid is array[6].
  */

  /*
    If you reach an island, increase the island count, and set it to 0 to mark
    it as visited.

    If the space (above, below, left, right) of the island is in bounds and is
    an island, merge (union()) the current space with the adjacent space.
  */
  for (let r = 0; r < nr; r += 1) {
    for (let c = 0; c < nc; c += 1) {
      if (grid[r][c] === '1') {
        count += 1;
        grid[r][c] = '0';

        if (r - 1 >= 0 && grid[r - 1][c] === '1') {
          union(r * nc + c, (r - 1) * nc + c);
        }

        if (r + 1 < nr && grid[r + 1][c] === '1') {
          union(r * nc + c, (r + 1) * nc + c);
        }

        if (c - 1 >= 0 && grid[r][c - 1] === '1') {
          union(r * nc + c, r * nc + c - 1);
        }

        if (c + 1 < nc && grid[r][c + 1] === '1') {
          union(r * nc + c, r * nc + c + 1);
        }
      }
    }
  }

  return count;
};

// numIslands([['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]);
// numIslands([['1', '0', '1'],
// ['1', '1', '1']]);
numIslands([['1', '0', '1', '0', '1'], ['1', '0', '0', '0', '1'], ['1', '1', '1', '1', '1']]);
