const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

let frequencySort = function (s) {
  // O(n)
  const makeMap = (freq, char) => freq.set(char, (freq.get(char) || 0) + 1);

  const map = s.split('').reduce(makeMap, new Map());

  // O(n log n)
  const byFreq = (a, b) => (a[1] < b[1] ? 1 : -1);

  return Array.from(map)
    .sort(byFreq)
    .map(([char, freq]) => char.repeat(freq))
    .join('');
};

const frequencySortBuckets = (s) => {
  let maxFreq = 0;
  // time: O(n)
  // space: O(n)
  const split = s.split('');

  const makeMap = (freq, char) => {
    freq.set(char, (freq.get(char) || 0) + 1);
    maxFreq = Math.max(freq.get(char), maxFreq);

    return freq;
  };

  // time: O(n)
  // space: O(n)
  const map = split.reduce(makeMap, new Map());

  // time: O(n)
  // space: O(n)
  const buckets = Array(maxFreq + 1)
    .fill(0)
    .map((el) => new Set());

  // time: O(n)
  split.forEach((char) => {
    buckets[map.get(char)].add(char);
  });

  // time: O(n)
  // space: O(n)
  const emptyBuckets = (result, bucket, freq) => {
    bucket.forEach((char) => {
      result += char.repeat(freq);
    });

    return result;
  };

  return buckets.reduceRight(emptyBuckets, '');
};

const frequencySortPQ = (s) => {
  // O(n) space, time
  const split = s.split('');
  let result = '';

  const makeMap = (freq, char) => freq.set(char, (freq.get(char) || 0) + 1);

  // time: O(n), space: O(n)
  const map = split.reduce(makeMap, new Map());

  const pq = new MaxPriorityQueue();

  // O(n * log 26)
  map.forEach((freq, char) => {
    // O (log 26)
    pq.enqueue(char, freq);
  });

  // O(26) * n
  while (pq.size() > 0) {
    // O(log 26)
    const { priority: freq, element: char } = pq.dequeue();

    // O(n)
    result += char.repeat(freq);
  }

  return result;
};

frequencySortPQ('abaaacda');
