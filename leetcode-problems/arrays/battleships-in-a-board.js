/* Given an m x n matrix board where each cell is a battleship 'X' or empty '.',
return the number of the battleships on board.

Battleships can only be placed horizontally or vertically on board. In other
words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k
rows, 1 column), where k can be of any size. At least one horizontal or vertical
cell separates between two battleships (i.e., there are no adjacent
battleships).

Example 1:

Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]] Output: 2
Example 2:

Input: board = [["."]] Output: 0

Constraints:

m == board.length n == board[i].length 1 <= m, n <= 200 board[i][j] is either
'.' or 'X'.

Follow up: Could you do it in one-pass, using only O(1) extra memory and without
modifying the values board? */
/*
  Battleships can't be diagonal.
  No adjacent battleships

  I: matrix (array of arrays)
  O: number of battleships on the matrix

  At least O(n) time.
  naive: iterate over each row, when you find a battleship, recursively change
  the ship to a '.' and update global count when done. Don't have to search all
  directions, only to the right, or down. So, if you hit a ship, and there is an
  adjacent ship down, iterate down until the ship ends, marking as '.'s.

  With union find, iterate over matrix. Add 1 to count when battleship found. if
  there are battleships below, while there are battleships below, union find them.
*/

/*
  Time: With rank and path compression, amortized time is almost constant,
  smaller than O(log n)
  Space: O(n)
*/
const countBattleships = (board) => {
  let numberOfBattleships = 0;
  const rows = board.length;
  const cols = board[0].length;
  const parents = Array(rows * cols).fill(0).map((e, i) => i);
  const ranks = Array(rows * cols).fill(0).map((e, i) => i);

  const find = (index) => {
    if (parents[index] !== index) parents[index] = find(parents[index]);

    return parents[index];
  };

  const union = (index1, index2) => {
    const parent1 = find(index1);
    const parent2 = find(index2);

    if (parent1 !== parent2) {
      if (ranks[parent1] > ranks[parent2]) {
        parents[index2] = parent1;
        ranks[parent1] += 1;
      } else if (ranks[parent1] < ranks[parent2]) {
        parents[index1] = parent2;
        ranks[parent2] += 1;
      } else {
        parents[index2] = parent1;
        ranks[parent1] += 1;
      }
      numberOfBattleships -= 1;
    }
  };

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (board[row][col] === 'X') {
        board[row][col] = '.';
        numberOfBattleships += 1;

        if (col + 1 < cols && board[row][col + 1] === 'X') {
          union(row * cols + col, row * cols + (col + 1));
        }

        if (row + 1 < rows && board[row + 1][col] === 'X') {
          union(row * cols + col, (row + 1) * cols + col);
        }
      }
    }
  }

  return numberOfBattleships;
};

countBattleships([['X', '.', '.', '.'],
  ['.', 'X', 'X', 'X'],
  ['.', '.', '.', '.']]);
