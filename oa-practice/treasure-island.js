/* You have a map that marks the location of a treasure island. Some of the map
area has jagged rocks and dangerous reefs. Other areas are safe to sail in.
There are other explorers trying to find the treasure. So you must figure out a
shortest route to the treasure island.

Assume the map area is a two dimensional grid, represented by a matrix of
characters. You must start from the top-left corner of the map and can move one
block up, down, left or right at a time. The treasure island is marked as X in a
block of the matrix. X will not be at the top-left corner. Any block with
dangerous rocks or reefs will be marked as D. You must not enter dangerous
blocks. You cannot leave the map area. Other areas O are safe to sail in. The
top-left corner is always safe. Output the minimum number of steps to get to the
treasure.

Example:

Input: [['O', 'O', 'O', 'O'], ['D', 'O', 'D', 'O'], ['O', 'O', 'O', 'O'], ['X',
'D', 'D', 'O']]

Output: 5 Explanation: Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0)
The minimum route takes 5 steps.
 */
// input: [[]] matrix of chars
// output: num, rep. min num of steps to get to treasure
// start at [0, 0], can move udlr
// X is treasure. D is dangerous, you can't sail there.

const shortestRouteToTreasure = (map) => {
  const rows = map.length;
  const cols = map[0].length;

  class Cell {
    constructor(row, col) {
      this.row = row;
      this.col = col;
      this.char = map[row][col];
      this.neighbors = [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1],
      ];
    }

    listNeighbors() {
      const valid = this.neighbors.filter(([row, col]) => (row >= 0 && row < rows && col >= 0 && col < cols) && map[row][col] !== 'D');

      return valid.map(([row, col]) => new Cell(row, col));
    }
  }

  // bfs the map from [0,0]
  const queue = [[new Cell(0, 0), 0]];
  const seen = new Set();

  while (queue.length > 0) {
    const [next, distance] = queue.shift();
    const key = `${next.row}:${next.col}`;

    if (!seen.has(key)) {
      seen.add(key);
      if (next.char === 'X') return distance;

      next.listNeighbors().forEach((neighbor) => {
        const newDistance = distance + 1;

        if (!seen.has(neighbor)) queue.push([neighbor, newDistance]);
      });
    }
  }
};

shortestRouteToTreasure(
  [['O', 'O', 'O', 'O'],
    ['D', 'O', 'D', 'O'],
    ['O', 'O', 'O', 'O'],
    ['X', 'D', 'D', 'O']],
);
