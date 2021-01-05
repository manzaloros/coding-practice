/* There are some spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter, and hence the x-coordinates of start and end of the diameter suffice. The start is always smaller than the end.

An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An arrow once shot keeps traveling up infinitely.

Given an array points where points[i] = [xstart, xend], return the minimum number of arrows that must be shot to burst all balloons.

Example:
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).

*/

const findMinArrowShots = (points) => {
  if (points.length === 0) return 0;

  points.sort((a, b) => a[1] - b[1]);

  let currentEnd = points[0][1];

  let result = 1;
  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    if (point[0] <= currentEnd) continue;
    result += 1;
    currentEnd = point[1];
  }
  return result
}

// console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])); // 2
// console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]])); // 4
// console.log(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]])); // 2
// console.log(findMinArrowShots([[1, 2]])); // 1
// console.log(findMinArrowShots([[2, 3], [2, 3]])); // 1
console.log(findMinArrowShots([[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]])); // 2

