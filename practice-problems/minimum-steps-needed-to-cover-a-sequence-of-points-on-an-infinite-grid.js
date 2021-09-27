/*
  You are given a sequence of points and the order in which you need to cover
  the points. Give the minimum number of steps in which you can achieve it. You
  start from the first point.
*/

/*
  Get x distance and y distance. The larger of these distances is the minimum
  distance between two points, it is the diagonal direction + the remaining
  horizontal or vertical direction you need to cover to get from point1 to
  point2.

  Don't forget you can move diagonally if these seems like it won't work
*/
const minDistance = (p1, p2) => {
  const dX = Math.abs(p1[0] - p2[0]);
  const dY = Math.abs(p1[1] - p2[1]);

  return Math.max(dX, dY);
};

const minSteps = (points) => points.reduce((steps, curr, i) => {
  if (i !== points.length - 1) {
    steps += minDistance(curr, points[i + 1]);
  }
  return steps;
}, 0);

minSteps([[0, 0], [1, 1], [1, 2]]);
