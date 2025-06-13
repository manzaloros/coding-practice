// O(n + k)
function topKFrequent(nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const bucket = Array(nums.length + 1).fill(null).map(() => []);
  for (const [num, freq] of freqMap.entries()) {
    bucket[freq].push(num);
  }

  const flatList = [];
  for (let i = bucket.length - 1; i >= 0 && flatList.length < k; i--) {
    // since each element from nums is only added once to bucket
    // the total time this whole loop takes is O(n)
    flatList.push(...bucket[i]);
  }

  return flatList;
}