


// input: m*n matrix of 1s and 0s; if there is a 0, set every value in that row & col to 0. array of arrays of num 1s 0s
output: matrix with condition with condition applied,
constraint: hopefully in place, perfect rectangle.
edge: [[]] given, could not be empty




ex a
111
101
111

101
000
101


ex b
011
111
111

000
011
011

ex c
111
100
111

100
000
100


ex c
111
100
111


firstRowZero: boolean
firstColZero: boolean
100
000
100

cell: [1,1]
currCol: 0


https://leetcode.com/problems/set-matrix-zeroes

naive: iterate through each row, when you see a 0, change
When you change a 1 to a 0, somehow you nee d to know that that 0 was NOT on the original board: have a data struct
Not only check if a space is 0, also check if it's original by checking your coords Set.

Change visited 1s to 2s, then change back to 0s before returning.

Time: O(n^2)
Space: O(1)

const solve = (matrix) => {
  const [rows, cols] = [matrix.length, matrix[0].length];

  const helper = (row, col) => {
      // change it and all neighbors to 2s

      let currRow = row;
      // down
      while(currRow < rows) {
         if (matrix[currRow][col] === 1) {
           matrix[currRow][col] = 2;

         }
         currRow += 1;
      }

      currRow = row;
      // up
      while(currRow >= 0) {
         if (matrix[currRow][col] === 1) {
           matrix[currRow][col] = 2;

         }
         currRow -= 1;
      }

      let currCol = col;
      // left
        while(currCol >= 0) {
              if (matrix[row][currCol] === 1) {
                matrix[row][currCol] = 2;

         }
         currCol -= 1;
      }

      currCol = col;
       // right
        while(currCol < cols) {
              if (matrix[row][currCol] === 1) {
                matrix[row][currCol] = 2;

         }
         currCol += 1;
      }
  }

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const cell = matrix[row][col];
      if (cell === 0) {
      // change all neighbors to 2s!!!
        helper(row, col)
      }
    }
  }

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const cell = matrix[row][col];
      if (cell === 2) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
}


// iterate through each row
  // iterate through each col
    // check if 0, if so call helper


// helper
  // recursively check up down left right and change to 2 if 1


- 40 finished question
- 39 good questions
- 37 naive: traverse like graph, writing down details
- 31 differentiating between switched val and original 0
- 30 writing down more details, data structure to check if space is 0 (set O(N))
- 27 what can be stored on the matrix
- 26 can use another number to store data (eg. 2)
- 25 set up function
- 22 0 cell helper function
- 20 implementing helper, changing wrong cell to 2
- 18 only checking one cell up/down/left/right, calling recursively
- 17 writing all helpers
- 12 will revisit same cell
- 12 how to do without recursion?
- 10 fixing row and col setting 0
- 5 a few errors in helper (checking wrong Vals)
- 3 walking through helper
- 2 catching adding/subtraacting but in while loop
- 1 catching col/row variable bugs





























