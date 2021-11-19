const floodFill = function (image, sr, sc, newColor) {
  const [rows, cols] = [image.length, image[0].length];

  const seen = new Set();
  const originalColor = image[sr][sc];
  const inBoundsAndOldColor = ([nRow, nCol]) => (
    nRow < rows && nRow >= 0 && nCol < cols && nCol >= 0 && image[nRow][nCol] === originalColor
  );

  const getNeighbors = (row, col) => (
    [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]
  ).filter(inBoundsAndOldColor);

  const dfs = (row, col) => {
    const key = `${row}:${col}`;

    if (!seen.has(key)) {
      seen.add(key);
      image[row][col] = newColor;

      getNeighbors(row, col).forEach(([nRow, nCol]) => dfs(nRow, nCol));
    }
  };

  dfs(sr, sc);

  return image;
};
