// Time non memo: 2^n, memo: rows * cols
// space: rows * cols depth of call stack

let calculateMinimumHP = function (dungeon) {
  const [rows, cols] = [dungeon.length, dungeon[0].length];
  const memo = new Map();

  const backtrack = (row, col) => {
    if (row >= rows || col >= cols) return Infinity;

    const curr = dungeon[row][col];
    if (row === rows - 1 && col === cols - 1) {
      return curr <= 0 ? Math.abs(curr) + 1 : 1;
    }

    const key = `${row}:${col}`;
    if (memo.has(key)) return memo.get(key);

    // these should never be negative. So if backtracking and subtracting the
    // current element is less than 0, make it 1. This is like going from 5 to
    // 5. 5 - 5 is -1, but you would need at least 1 health. (5 + 1) - 5.
    let goDown = Math.max(backtrack(row + 1, col) - curr, 1);
    let goRight = Math.max(backtrack(row, col + 1) - curr, 1);

    // if (goDown < 1) goDown = 1;
    // if (goRight < 1) goRight = 1;

    const winner = Math.min(goDown, goRight);

    memo.set(key, winner);

    return winner;
  };

  return backtrack(0, 0);
};

calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5]]);
// calculateMinimumHP([[0]]);
// calculateMinimumHP([[100]]);
