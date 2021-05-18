/* Given an array points where points[i] = [xi, yi] represents a point on the
X-Y plane, return true if these points are a boomerang.

A boomerang is a set of three points that are all distinct and not in a straight
line.

Example 1:

Input: points = [[1,1],[2,3],[3,2]] Output: true Example 2:

Input: points = [[1,1],[2,2],[3,3]] Output: false

Constraints:

points.length == 3 points[i].length == 2 0 <= xi, yi <= 100
 */

const isBoomerang = ([[x1, y1], [x2, y2], [x3, y3]]) => {
  const slope = (y1 - y2) / (x1 - x2);
  const slope2 = (y1 - y3) / (x1 - x3);
  const slope3 = (y2 - y3) / (x2 - x3);
  if (x1 === x2 && y1 === y2) return false;
  if (x2 === x3 && y2 === y3) return false;
  if (x1 === x3 && y1 === y3) return false;
  return slope !== slope2 && slope2 !== slope3 && slope3 !== slope;
};

const isBoomerangTriangleArea = ([[x1, y1],
  [x2, y2],
  [x3, y3]]) => x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) !== 0;

console.log(isBoomerang([[1, 1], [2, 3], [3, 2]]));
console.log(isBoomerang([[1, 1], [2, 2], [3, 3]]));
console.log(isBoomerang([[0, 1], [0, 1], [2, 1]]));
console.log(isBoomerang([[0, 1], [1, 0], [0, 1]]));
console.log(isBoomerang([[73, 31], [73, 19], [73, 45]]));
