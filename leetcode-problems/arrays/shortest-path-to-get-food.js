/* You are starving and you want to eat food as quickly as possible. You want to
find the shortest path to arrive at any food cell.

You are given an m x n character matrix, grid, of these different types of
cells:

'*' is your location. There is exactly one '*' cell.  '#' is a food cell. There
may be multiple food cells.  'O' is free space, and you can travel through these
cells.  'X' is an obstacle, and you cannot travel through these cells.  You can
travel to any adjacent cell north, east, south, or west of your current location
if there is not an obstacle.

Return the length of the shortest path for you to reach any food cell. If there
is no path for you to reach food, return -1.

Example 1:

Input: grid =
[["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
Output: 3 Explanation: It takes 3 steps to reach the food.  Example 2:

Input: grid =
[["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]]
Output: -1 Explanation: It is not possible to reach the food.  Example 3:

Input: grid =
[["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]]
Output: 6 Explanation: There can be multiple food cells. It only takes 6 steps
to reach the bottom food.  Example 4:

Input: grid = [["O","*"],["#","O"]] Output: 2 Example 5:

Input: grid = [["X","*"],["#","X"]] Output: -1

Constraints:

m == grid.length n == grid[i].length 1 <= m, n <= 200 grid[row][col] is '*',
'X', 'O', or '#'.  The grid contains exactly one '*'.
*/

class Heap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  heapify(index) {
    const leftChild = (i) => i * 2 + 1;
    const rightChild = (i) => i * 2 + 2;

    const left = leftChild(index);
    const right = rightChild(index);
    let largest = index;

    // if the left child is bigger than the node we are looking at
    if (left < this.heap.length && this.heap[largest][1] > this.heap[left][1]) {
      largest = left;
    }

    // if the right child is bigger than the node we are looking at
    if (right < this.heap.length && this.heap[largest][1] > this.heap[right][1]) {
      largest = right;
    }

    // if the value of smallest has changed, then some swapping needs to be done
    // and this method needs to be called again with the swapped element
    if (largest !== index) {
      this.swap(largest, index);
      this.heapify(largest);
    }
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = tmp;
  }

  insert(element) {
    const parent = (index) => Math.floor((index  -  1) / 2);
    // push element to the end of the heap
    this.heap.push(element);

    // the index of the element we have just pushed
    let index = this.heap.length - 1;

    // if the element is greater than its parent:
    // swap element with its parent
    while (index !== 0 && this.heap[index][1] < this.heap[parent(index)][1]) {
      this.swap(index, parent(index));
      index = parent(index);
    }
    this.size += 1;
  }

  extractMin() {
    // remove the first element from the heap
    const root = this.heap.shift();

    // put the last element to the front of the heap
    // and remove the last element from the heap as it now
    // sits at the front of the heap
    this.heap.unshift(this.heap[this.heap.length - 1]);
    this.heap.pop();

    // correctly re-position heap
    this.heapify(0);
    this.size -= 1;

    return root;
  }
}

class Cell {
  constructor(row, col, grid) {
    this.row = row;
    this.col = col;
    this.val = grid[row][col];
    this.key = `${this.row}:${this.col}`;
    this.grid = grid;
  }

  static isValid([row, col], grid) {
    return (row < grid.length && row >= 0) && (col < grid[0].length && col >= 0) && grid[row][col] !== 'X';
  }

  neighbors() {
    // return array of [row, col]
    const { row, col, grid } = this;
    return [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ].filter((coordinate) => Cell.isValid(coordinate, grid));
  }
}

const getFood = (grid) => {
  // find start
  let start;
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      if (grid[row][col] === '*') start = [row, col];
    }
  }

  // const queue = [[new Cell(start[0], start[1], grid), 0]];
  const heap = new Heap();
  heap.insert([new Cell(start[0], start[1], grid), 0]);
  const seen = new Set();

  while (heap.size > 0) {
    // const [next, cost] = queue.shift();
    const [next, cost] = heap.extractMin();
    const { key } = next;
    if (seen.has(key)) continue;
    seen.add(key);

    if (next.val === '#') return cost;

    next.neighbors().forEach((neighbor) => {
      const newCost = cost + 1;
      const neighborCell = new Cell(neighbor[0], neighbor[1], grid);
      if (!seen.has(neighborCell.key)) heap.insert([neighborCell, newCost]);
    });
  }

  return -1;
};

getFood([['X', 'X', 'X', 'X', 'X', 'X'], ['X', '*', 'O', 'O', 'O', 'X'],
  ['X', 'O', 'O', '#', 'O', 'X'], ['X', 'X', 'X', 'X', 'X', 'X']]);
// getFood([['X', 'X', 'X', 'X', 'X'], ['X', '*', 'X', 'O', 'X'], ['X', 'O',
// 'X', '#', 'X'], ['X', 'X', 'X', 'X', 'X']]);
// getFood([['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], ['X', '*', 'O', 'X', 'O',
// '#', 'O', 'X'], ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X'], ['X', 'O', 'O',
// 'O', 'O', '#', 'O', 'X'], ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']]);
// getFood([['O', '*'], ['#', 'O']]);
// getFood([['X', '*'], ['#', 'X']]);
