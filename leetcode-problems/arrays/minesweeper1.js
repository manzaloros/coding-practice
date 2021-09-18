// Time: O(num of rows * num of cols)
// Space: O(num of rows * num of cols) for queue
let updateBoard = function (board, click) {
  // inst directions (row, col)
// up ne right se down sw left nw
  const directions = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

  const rows = board.length;
  const cols = board[0].length;

  // get neighbors (curr coord)
  const getNeighbors = (row, col) => {
    // inst neighbor array
    // inst mine count at 0
    // for each direction
    // add direction to current coord
    // if neighbor is a mine, add 1 to minecount
    // if direction row and col >= 0 and <= length - 1, add to array

    // return {array of valid neighbor coords with num of mines}
    const neighbors = [];
    let mineCount = 0;

    directions.forEach(([rowDir, colDir]) => {
      let newRow = rowDir + row;
      let newCol = colDir + col;

      if ((newRow >= 0 && newCol >= 0) && (newRow <= rows - 1 && newCol <= cols - 1)) {
        let neighbor = [newRow, newCol];
        neighbors.push(neighbor);

        if (board[newRow][newCol] === 'M') mineCount += 1;
      }
    });

    return { neighbors, mineCount };
  };

  // inst queue with click position
  // inst seen
  // What is in the queue ????? [row, col]
  const queue = [[click[0], click[1]]];
  const seen = new Set();

  // while queue has items
  while (queue.length > 0) {
    // dequeue current
    // Can be a queue or a stack. Stack is DFS and O(1) push pop.
    const [row, col] = queue.pop();
    const cell = board[row][col];

    // if current in seen, continue
    const key = `${row}:${col}`;
    if (!seen.has(key)) {
      // if current is not E
    // if it's a digit or a B
    // continue
    // if it's a mine, change to an X and return board
      seen.add(key);

      if (cell === 'M') {
        board[row][col] = 'X';

        return board;
      }

      if (cell === 'E') {
        // if current is E
      // change to a B
      // get neighbors
      // if num of mines is > 0
      // change to digit, continue
      // otherwise
      // iterate over neighbors
      // if neighbor not in seen
      // add to queue
        const { neighbors, mineCount } = getNeighbors(row, col);

        if (mineCount > 0) {
          board[row][col] = String(mineCount);
        } else {
          board[row][col] = 'B';

          neighbors.forEach(([nRow, nCol]) => {
            const nkey = `${nRow}:${nCol}`;

            if (!seen.has(nkey)) queue.push([nRow, nCol]);
          });
        }
      }
    }
  }

  // return board
  return board;
};

updateBoard([['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E']],
[3, 0]);
