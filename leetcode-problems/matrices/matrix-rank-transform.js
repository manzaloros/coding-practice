// O(n * n log(rows * cols))
// Each row # and col # is vertex and element in matrix is an edge.
/*
  Rank should be as small as possible. Iterate from small to big elements.

  Union find for each element. Find max rank of elements that share the same row
  and col. Then, update the rank.

  d has the element mapped to it's coordinate
*/
let matrixRankTransform = function (matrix) {
  const [rows, cols] = [matrix.length, matrix[0].length];
  const rank = Array(rows + cols).fill(0);

  const d = new Map();

  matrix.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      if (!d.has(el)) d.set(el, []);

      d.get(el).push([rowIndex, colIndex]);
    });
  });

  const find = (i, p) => {
    if (p[i] !== i) p[i] = find(p[i], p);

    return p[i];
  };

  Array.from(d)
    .sort(([el1, coords], [el2, coords2]) => (el1 < el2 ? -1 : 1))
    .forEach(([el, coords]) => {
      const p = Array(rows + cols)
        .fill(0)
        .map((_, index) => index);

      const rank2 = rank.slice();

      coords.forEach(([row, col]) => {
        [row, col] = [find(row, p), find(col + rows, p)];

        p[row] = col;
        rank2[col] = Math.max(rank2[row], rank2[col]);
      });

      coords.forEach(([row, col]) => {
        matrix[row][col] = rank2[find(row, p)] + 1;

        rank[col + rows] = matrix[row][col];
        rank[row] = rank[col + rows];
      });
    });

  return matrix;
};

matrixRankTransform(
  [[1, 2], [3, 4]],
);
