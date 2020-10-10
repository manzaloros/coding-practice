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
  // Create object to track balloon overlap
  const balloonOverlaps = {};
  // for each pair of balloons
  for (let i = 0; i < points.length; i += 1) {
    // for each balloon
    const balloon1 = points[i];
    balloonOverlaps[i] = [];
    let ownBalloon = true;
    for (let j = 0; j < points.length; j += 1) {
      if (j === i) continue;
      const balloon2 = points[j];
      // if the balloon1[0] <= balloon2[1] && balloon1[1] >= balloon2[0]
      if (balloon1[0] <= balloon2[1] && balloon1[1] >= balloon2[0]) {
        // add balloon1 and balloon2 to array
        balloonOverlaps[i].push([balloon1, balloon2]);
        ownBalloon = false;
      } else {
        // otherwise, balloon needs it's own arrow
        // add balloon to array
        // Check for other combination in balloonOverlaps
        let overlapFound = false;
        for (let k = 0; k < balloonOverlaps[i].length; k += 1) {
          const compareBalloon = balloonOverlaps[i][k];
          if (balloon2[0] <= compareBalloon[1] && balloon2[1] >= compareBalloon[0]) {
            balloonOverlaps[i][k] = [compareBalloon, balloon2];
            overlapFound = true;
          }
        }
        if (overlapFound) {
          continue;
        }
        balloonOverlaps[i].push(balloon2);
      }

    }
    // If no match has been found for balloon1,
    // There is no overlap, add it to object
    if (ownBalloon) {
      balloonOverlaps[i].push(balloon1);
    }
  }
  const numberOfArrows = [];
  // Iterate through object keys to find smallest length array
  for (const combinations in balloonOverlaps) {
    numberOfArrows.push(balloonOverlaps[combinations].length);
  }
  return Math.min(...numberOfArrows);
}

// console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])); // 2
// console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]])); // 4
// console.log(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]])); // 2
// console.log(findMinArrowShots([[1, 2]])); // 1
// console.log(findMinArrowShots([[2, 3], [2, 3]])); // 1
console.log(findMinArrowShots([[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]])); // 2

