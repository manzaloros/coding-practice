const matrixRankTransform = (matrix) => {
  const [rows, cols] = [matrix.length, matrix[0].length];

  const map = new Map();

  // Map cell value: [array of coords that match value]
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const cell = matrix[row][col];
      if (!map.has(cell)) map.set(cell, []);
      map.get(cell).push([row, col]);
    }
  }

  // will redefine parents for each unique value in map
  let parents;

  // find with path compression
  const find = (index) => {
    if (parents[index] !== index) parents[index] = find(parents[index]);

    return parents[index];
  };

  const ranks = Array(rows + cols).fill(0);

  // Sort map keys
  const sortedMap = new Map([...map].sort((a, b) => (a[0] < b[0] ? -1 : 1)));

  // Iterate over all sorted unique values from matrix (values that repeat have their
  // coords in a list)
  sortedMap.forEach((coord, key) => {
    // Make union find parents array of rows + cols (not rows * cols). Flat list
    parents = Array(rows + cols).fill(0).map((element, index) => index);

    // copy ranks
    const ranks2 = ranks.slice();

    coord.forEach(([row, col]) => {
      const parentRow = find(row);
      const parentCol = find(col + rows);

      parents[parentRow] = parentCol;
      // set the rank to be whichever is bigger
      ranks2[parentCol] = Math.max(ranks2[parentRow], ranks2[parentCol]);
    });

    coord.forEach(([row, col]) => {
      const parentRow = find(row);

      matrix[row][col] = ranks2[parentRow] + 1;
      ranks[col + rows] = matrix[row][col];
      ranks[row] = ranks[col + rows];
    });
  });

  return matrix;
};

// matrixRankTransform([[1, 2], [3, 4]]);
matrixRankTransform([[20, -21, 14], [-19, 4, 19], [22, -47, 24], [-19, 4, 19]]);
