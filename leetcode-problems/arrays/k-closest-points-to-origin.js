/*
Given an array of points where points[i] = [xi, yi] represents a point on the
X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance
(i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique
(except for the order that it is in).

Example 1:

Input: points = [[1,3],[-2,2]], k = 1 Output: [[-2,2]] Explanation: The distance
between (1, 3) and the origin is sqrt(10).  The distance between (-2, 2) and the
origin is sqrt(8).  Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just
[[-2,2]].  Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], k = 2 Output: [[3,3],[-2,4]] Explanation:
The answer [[-2,4],[3,3]] would also be accepted.

Constraints:

1 <= k <= points.length <= 104 -104 < xi, yi < 104
 */
// input: array of tuples which are coords. num k represents how many points are
// closest to the origin [0,0]
// output: array of tuples in any order of the k closest points to the origin
const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const kClosest = (points, k) => {
  // Without PQ, this is Time: O(n log n)
/*   const distances = points.map(([x, y]) => [Math.sqrt((x ** 2) + (y ** 2)), [x, y]]);
  distances.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  return distances.map(([distance, point]) => [point]).slice(0, k);
 */

  // with PQ, Time is O(n log k)
  const priorityQueue = new MaxPriorityQueue({ priority: ([distance, point]) => distance });

  points.forEach(([x, y]) => {
    const distance = Math.sqrt((x ** 2) + (y ** 2));
    priorityQueue.enqueue([distance, [x, y]]);
    if (priorityQueue.size() > k) priorityQueue.dequeue();
  });

  // Using PQ built in array method
  /*   return priorityQueue.toArray().map(({ priority, element: [distance, point] }) => point); */

  // Manually making array of elements
  const result = [];
  let i = k;
  while (i > 0) {
    const { element } = priorityQueue.dequeue();
    result.push(element[1]);
    i -= 1;
  }

  return result;
};

kClosest([[1, 3], [-2, 2]], 1);
