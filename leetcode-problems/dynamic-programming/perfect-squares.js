let numSquares = function (n) {
  /*
    Find all squares that are smaller than n
  */
  const squaresLessThanTarget = [];

  for (let curr = 1, i = 1; curr <= n; i += 1, curr = i * i) {
    squaresLessThanTarget.push(curr);
  }

  const memo = new Map();
  for (let i = 0; i < n + 1; i += 1) memo.set(i, Infinity);

  const backtrack = (remainder) => {
    if (remainder === 0) return 0;

    if (memo.get(remainder) !== Infinity) return memo.get(remainder);

    let curr = 0;

    squaresLessThanTarget.forEach((squareLessThanTarget) => {
      if (remainder >= squareLessThanTarget) {
        curr = backtrack(remainder % squareLessThanTarget)
        + Math.floor(remainder / squareLessThanTarget);

        memo.set(remainder, Math.min(memo.get(remainder), curr));
      }
    });

    return memo.get(remainder);
  };

  return backtrack(n);
};

const numSquaresBFS = (n) => {
  const squares = [];
  for (let i = 1; i * i <= n; i += 1) squares.push(i * i);

  let queue = [n];

  let level = 0;
  while (queue.length > 0) {
    level += 1;
    const nextQueue = new Set();

    for (let i = 0; i < queue.length; i += 1) {
      const remainder = queue[i];

      for (let j = 0; j < squares.length; j += 1) {
        const square = squares[j];

        if (remainder === square) return level;
        if (remainder < square) break;

        nextQueue.add(remainder - square);
      }
    }

    queue = Array.from(nextQueue);
  }

  return level;
};

// numSquares(12);
numSquaresBFS(6);
