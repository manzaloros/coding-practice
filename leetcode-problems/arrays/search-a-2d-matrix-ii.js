/* Write an efficient algorithm that searches for a target value in an m x n
integer matrix. The matrix has the following properties:

Integers in each row are sorted in ascending from left to right.  Integers in
each column are sorted in ascending from top to bottom.

Example 1:

Input: matrix =
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
target = 5 Output: true Example 2:

Input: matrix =
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
target = 20 Output: false

Constraints:

m == matrix.length n == matrix[i].length 1 <= n, m <= 300 -109 <= matix[i][j] <=
109 All the integers in each row are sorted in ascending order.  All the
integers in each column are sorted in ascending order.  -109 <= target <= 109 */

const searchMatrix = (matrix, target) => {
  // bounds of the matrix
  const searchRec = (left, up, right, down) => {
    // Return if bounds aren't right
    if (left > right || up > down) return false;

    // if the target is out of bounds
    if (target < matrix[up][left] || target > matrix[down][right]) return false;

    // middle of any rows
    const mid = left + Math.floor((right - left) / 2);
    // first row
    let row = up;

    // Check if target can be found in current row
    while (row <= down && matrix[row][mid] <= target) {
      if (matrix[row][mid] === target) return true;
      row += 1;
    }

    // reduce search space to the left of mid (move right bound)/ lower than
    // current row (move up) and to the right of mid (move left bound) / higher
    // than the current row (move down)
    return searchRec(left, row, mid - 1, down) || searchRec(mid + 1, up, right, row - 1);
  };

  if (matrix === null || matrix.length === 0) return false;

  return searchRec(0, 0, matrix[0].length - 1, matrix.length - 1);
};

console.log(searchMatrix([[1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5));
