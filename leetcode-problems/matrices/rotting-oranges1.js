// Don't need a seen Set because you never visit a rotten orange cell
let orangesRotting = function (grid) {
  const [rows, cols] = [grid.length, grid[0].length];
  let minutesElapsed = 0;

  let [freshCount, queue] = [0, []];

  grid.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      if (el === 1) freshCount += 1;
      if (el === 2) queue.push([[rowIndex, colIndex], 0]);
    });
  });

  const getNeighbors = (row, col) => ([
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ]
  ).filter(([nRow, nCol]) => (
    nRow >= 0 && nRow < rows && nCol >= 0 && nCol < cols && grid[nRow][nCol] === 1
  ));

  while (queue.length > 0) {
    const [[row, col], currMinutes] = queue.shift();

    minutesElapsed = Math.max(minutesElapsed, currMinutes);

    if (freshCount > 0) {
      getNeighbors(row, col).forEach(([nRow, nCol]) => {
        freshCount -= 1;
        grid[nRow][nCol] = 2;

        queue.push([[nRow, nCol], currMinutes + 1]);
      });
    }
  }

  return freshCount > 0 ? -1 : minutesElapsed;
};

// orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]);
// orangesRotting([[0, 2]]);
orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]);
