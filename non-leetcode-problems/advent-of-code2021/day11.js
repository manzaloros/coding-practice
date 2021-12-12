const sample = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

/*
  When oct num is at 9, it causes adjacent nums to increase by 1 recursively

  Set that original octopus to 0 after flash

  keep set of coords that have flashed
*/

const calculateSynchronizationStep = (input, part2) => {
  input = input.split(/\n/)
    .map((row) => row.split('').map((el) => +el));

  const [rows, cols] = [input.length, input[0].length];
  let [numFlashedAtOnce, numFlashes, flashed, step] = [0, 0, new Set(), 0];

  const makeKey = (row, col) => `${row}:${col}`;

  const getNeighbors = (row, col) => (
    [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
      [row + 1, col + 1],
      [row + 1, col - 1],
      [row - 1, col + 1],
      [row - 1, col - 1],
    ].filter(([nRow, nCol]) => (
      nRow < rows && nRow >= 0 && nCol < cols && nCol >= 0
    ))
  );

  const dfs = (row, col) => {
    input[row][col] += 1;
    const key = makeKey(row, col);

    if (input[row][col] > 9 && !flashed.has(key)) {
      numFlashes += 1;
      numFlashedAtOnce += 1;

      flashed.add(key);

      getNeighbors(row, col).forEach(([nRow, nCol]) => {
        dfs(nRow, nCol);
      });
    }
  };

  for (step; part2 ? numFlashedAtOnce !== (rows * cols) : step < 100; step += 1) {
    numFlashedAtOnce = 0;

    input.forEach((row, rowIndex) => {
      row.forEach((el, colIndex) => {
        dfs(rowIndex, colIndex);
      });
    });

    flashed.forEach((key) => {
      const [row, col] = key.split(':').map((el) => +el);
      input[row][col] = 0;
      flashed.delete(key);
    });
  }

  return part2 ? step : numFlashes;
};

const simpleSample = `11111
19991
19191
19991
11111`;

const puzzleInput = `7313511551
3724855867
2374331571
4438213437
6511566287
6727245532
3736868662
2348138263
2417483121
8812617112`;

calculateSynchronizationStep(puzzleInput, false);
