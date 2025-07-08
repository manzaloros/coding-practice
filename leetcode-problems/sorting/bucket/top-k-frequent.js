// O(n + k)
function topKFrequent(nums, k) {
  const freqMap = new Map(); // use a map because the key can be a number type
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // bucket index corresponds to frequency, so more frequent elements
  // will be in higher index buckets
  const bucket = Array(nums.length + 1).fill(null).map(() => []);
  for (const [num, freq] of freqMap.entries()) {
    bucket[freq].push(num);
  }

  const flatList = [];
  // make sure that you check the list length being less than k
  for (let i = bucket.length - 1; i >= 0 && flatList.length < k; i--) {
    // since each element from nums is only added once to bucket
    // the total time this whole loop takes is O(n)
    flatList.push(...bucket[i]);
  }

  return flatList;
}