import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// time: O(n * log k)
const topKFrequent = (nums, k) => {
  // make freqency map
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  // init min priority queue
  const pq = new MinPriorityQueue(el => el[1]);

  // You'll always remove the smallest frequency from the PQ when you dequeue
  // so the min PQ will contain the highest frequency numbers
  freq.forEach((count, num) => {
    pq.enqueue([num, count]);

    if (pq.size() > k) {
        // dequeue is log (size of the queue)
        // and since we have a max of k elements, the complexity is O(log k) for the dequeue
        pq.dequeue();
    }
  })

  const result = [];

  for (let i = k; i >= 0; i -= 1) {
    // front of the min PQ always gives you the smallest element
    // even though this doesn't matter for us, answer doesn't need to be sorted
    result.push(pq.dequeue()[0])
  }

  return result;
}