/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}

 o: number, rep. k most frequent elements
 i: number[], int k, 
 c: order of result doesn't matter, nums can be negative
 e

 naive: make frequency map. Sort the values of the map, return the last k elements of the sorted keys
 */
// naive, O(n * log(n)) time, O(n + k) space
const topKFrequent = (nums, k) => {
  const freq = new Map();
  for (const num of nums) {
    const el = freq.get(num);
    
        freq.set(num, el ? el + 1 : 1);
    
  }

  const sorted = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]).map(el => el[0]);

  return sorted.slice(0,k)
};