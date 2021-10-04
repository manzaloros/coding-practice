let calculateMinimumHP = function (dungeon) {
  const [rows, cols] = [dungeon.length, dungeon[0].length];

  let minHealthNeeded = Infinity;
  const startingRoom = dungeon[0][0];
  const startingRoomHealth = startingRoom > 0 ? 1 + startingRoom : 1 - startingRoom;
  const beginningMinHealth = startingRoom > 0 ? 1 : startingRoomHealth;

  const lastRoom = dungeon[rows - 1][cols - 1];

  const getNeighbors = (row, col) => (
    [
      [row + 1, col],
      [row, col + 1],
    ]
  ).filter(([nRow, nCol]) => nRow < rows && nCol < cols);

  const dfs = (row, col, currentHealth, startingHealth) => {
    // startingHealth = currentHealth <= 0
    //   ? startingHealth + Math.abs(dungeon[row][col])
    //   : startingHealth;

    // currentHealth = currentHealth <= 0 ? 1 : currentHealth;

    if (row === rows - 1 && col === cols - 1) {
      minHealthNeeded = Math.min(minHealthNeeded, startingHealth);
    } else {
      getNeighbors(row, col).forEach(([nRow, nCol]) => {
        let newHealth = 0;
        let newStartingHealth = 0;

        if (currentHealth + dungeon[nRow][nCol] <= 0) {
          let needToAddToStartingHealth = 1 - dungeon[nRow][nCol] - currentHealth;
          newHealth = 1;
          newStartingHealth = startingHealth + needToAddToStartingHealth;
        } else {
          newHealth = currentHealth + dungeon[nRow][nCol];
          newStartingHealth = startingHealth;
        }
        dfs(nRow, nCol, newHealth, newStartingHealth);
      });
    }
  };

  dfs(0, 0, startingRoomHealth, beginningMinHealth);

  return minHealthNeeded;
};

const calculateMinimumHPDP = (d) => {
  const [rows, cols] = [d.length, d[0].length];
  const memo = new Map();

  const backtrack = (row, col) => {
    if (row >= rows || col >= cols) return Infinity;

    const curr = d[row][col];

    if (row === rows - 1 && col === cols - 1) return curr > 0 ? 1 : Math.abs(curr) + 1;

    const key = `${row}:${col}`;
    if (memo.has(key)) return memo.get(key);

    const goRight = backtrack(row, col + 1) - curr;
    const goDown = backtrack(row + 1, col) - curr;

    const winner = Math.min(goRight, goDown);

    // If winner is negative, there was a net positive sum of rooms, so you only
    // need 1 health to start out with.
    const health = Math.max(1, winner);
    memo.set(key, health);

    return health;
  };

  return backtrack(0, 0);
};

calculateMinimumHPDP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
]);
// calculateMinimumHP([[0]]);
// calculateMinimumHP([ // 1
//   [3, -20, 30],
//   [-3, 4, 0],
// ]);
