/* Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.


Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
Output: false
Example 3:

Input: matrix = [], target = 0
Output: false


Constraints:

m == matrix.length
n == matrix[i].length
0 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */

const searchMatrix = (matrix, target) => {
  let [leftWall, rightWall] = [-1, matrix.length];
  while (rightWall > leftWall + 1) {
    let mid = Math.floor((rightWall - leftWall) / 2) + leftWall;
    if (matrix[0][0] === undefined) {
      if (matrix[mid] === target) return true;

      if (target > matrix[mid]) {
        leftWall = mid;
      } else {
        rightWall = mid;
      }
    } else {
      let midArray = matrix[mid];
      let length = midArray.length;

      if (target === midArray[0] || target === midArray[length - 1]) return true;

      if (target < midArray[length - 1] && target > midArray[0]) {
        return searchMatrix(midArray, target);
      } else if (target > midArray[length - 1]) {
        leftWall = mid;
      } else if (target < midArray[0]) {
        rightWall = mid;
      }
    }
  }

  return false;
}

console.log(searchMatrix([[1, 3, 5]], 4));

