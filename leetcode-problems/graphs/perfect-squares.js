/* let numSquares = function (n) {
  const squareNums = Array(n)
    .fill()
    .map((el, i) => (i + 1) ** 2)
    .filter((square) => square <= n);

  const queue = [[1, 0, n]];

  const seen = new Set();

  while (queue.length > 0) {
    const [currSquare, numSquaresSoFar, remainder] = queue.shift();

    if (remainder === 0) return numSquaresSoFar;

    if (!seen.has(currSquare)) {
      seen.add(currSquare);
      squareNums.forEach((square) => {
        if (!seen.has(remainder - square) && remainder - square >= 0) queue.push([square, numSquaresSoFar + 1, remainder - square]);
      });
    }

    seen.delete(currSquare);
  }

  return -1;
}; */

const numSquares = (n) => {
  const squares = Array(n)
    .fill()
    .map((el, i) => (i + 1) ** 2)
    .filter((square) => square <= n);

  const queue = new Set().add(n);
};

numSquares(7168);
// numSquares(1);
// numSquares(12);
numSquares(13);
