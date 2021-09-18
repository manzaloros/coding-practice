const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

let topKFrequent = function (nums, k) {
  const minPQ = new MinPriorityQueue();
  const freq = new Map();

  // O(n)
  nums.forEach((num) => {
    if (!freq.has(num)) freq.set(num, 0);
    freq.set(num, freq.get(num) + 1);
  });

  // O(n * log k)
  freq.forEach((value, key) => {
    minPQ.enqueue(key, value);
    /*
      This is where the magic happens.

      You could add all the elements from frequencies into the PQ. But that
      would possibly be n elements, but we only need k elements.

      To prevent this. use a MIN PQ so that it has your smallest freq elements
      first in the queue, and then dequeue whenever you exceed k. That way
      you're always removing the smallest elements from the queue and you will
      eventually be able to take out k sorted elements.
    */
    if (minPQ.size() > k) minPQ.dequeue();
  });

  const topFreq = [];

  // O(k)
  while (k > 0) {
    const { element, priority } = minPQ.dequeue();
    topFreq.push(element);

    k -= 1;
  }

  return topFreq;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
