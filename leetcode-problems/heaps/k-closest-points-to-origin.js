const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const distance = (x, y) => Math.sqrt((x ** 2) + (y ** 2));

const kClosest = (points, k) => (points.reduce((maxHeap, [x, y]) => {
  maxHeap.enqueue([x, y], distance(x, y));

  if (maxHeap.size() > k) maxHeap.dequeue();

  return maxHeap;
}, new MaxPriorityQueue())
  .toArray()
  .map(({ element }) => element)
);
