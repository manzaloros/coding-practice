const update2048Board = (grid, plays) => {
  const [rows, cols] = [grid.length, grid[0].length];
  const swap = (rowIndex, colIndex) => {
    [
      grid[rowIndex][colIndex], grid[colIndex][rowIndex],
    ] = [
      grid[colIndex][rowIndex], grid[rowIndex][colIndex],
    ];
  };

  const rotate = (numRotations) => {
    for (let i = 0; i < numRotations; i += 1) {
      grid = grid.reverse();

      grid.forEach((row, rowIndex) => {
        row.forEach((el, colIndex) => {
          if (colIndex > rowIndex) swap(rowIndex, colIndex);
        });
      });
    }
  };

  const reverseCols = () => {
    grid = grid.map((row, rowIndex) => row.reverse());
  };

  const rotateMap = new Map();
  rotateMap.set('L', {
    set: () => {},
    unset: () => {},
  });
  rotateMap.set('D', {
    set: () => rotate(3),
    unset: () => rotate(1),
  });
  rotateMap.set('U', {
    set: () => rotate(1),
    unset: () => rotate(3),
  });
  rotateMap.set('R', {
    set: () => reverseCols(),
    unset: () => reverseCols(),
  });

  const inBounds = (row, col) => row < rows && row >= 0 && col < cols && col >= 0;
  const outZeros = (el, colIndex) => el !== 0;
  const mergeTiles = (row) => {
    let colIndex = 0;
    while (colIndex < row.length) {
      const el = row[colIndex];

      if (colIndex + 1 < row.length) {
        const next = row[colIndex + 1];

        if (next === el) {
          row[colIndex + 1] = el * 2;
          row[colIndex] = 0;

          colIndex += 2;
        } else colIndex += 1;
      } else colIndex += 1;
    }

    return row;
  };
  const addZeros = (row) => {
    // add 0s to beginning of row
    for (let zerosLeftToAdd = rows - row.length; zerosLeftToAdd > 0; zerosLeftToAdd -= 1) {
      row.unshift(0);
    }

    return row;
  };

  const update = () => {
    grid = grid.map((row, rowIndex) => {
      row = row.filter(outZeros);

      row = mergeTiles(row);

      row = row.filter(outZeros);

      row = addZeros(row);

      return row;
    });
  };

  const addRandom = () => {
    let added = false;
    while (!added) {
      const [randRow, randCol] = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
      if (grid[randRow][randCol] === 0) {
        const coinFlip = Math.random();
        if (coinFlip < 0.5) {
          grid[randRow][randCol] = 2;
        } else grid[randRow][randCol] = 4;

        added = true;
      }
    }
  };

  plays.split('').forEach((play, i) => {
    if (i > 0) addRandom();

    const rotateFunc = rotateMap.get(play);
    rotateFunc.set();

    update();

    rotateFunc.unset();
  });

  return grid;
};

const g = [
  [2, 2, 2, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const p = 'RU';
update2048Board(g, p);
