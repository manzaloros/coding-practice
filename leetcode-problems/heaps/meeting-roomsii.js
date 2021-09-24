const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// n log n
// n for heap
let minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const minHeap = new MinPriorityQueue();

  minHeap.enqueue(intervals[0][1]);

  intervals.forEach(([currStart, currEnd], i) => {
    if (i > 0) {
      if (currStart >= minHeap.front().element) minHeap.dequeue();

      minHeap.enqueue(currEnd);
    }
  });

  return minHeap.size();
};

minMeetingRooms([[0, 30], [5, 10], [15, 20]]);
