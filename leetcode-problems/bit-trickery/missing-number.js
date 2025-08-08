/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time, O(1) space.
const missingNumber = (nums) => {
  // Start with 0 to compare each number and it's index with.
  let xor = 0;

  // Since a ^ b ^ a = b, you can keep xoring (exclusive or) an accumulator and
  // the current array element and it's index.
  nums.forEach((num, i) => { xor = xor ^ i ^ num; });

  // At the end, you will have a number left over when XORing the final
  // accumulator and the last index, indicating the number that is missing from
  // the array.
  return xor ^ nums.length;
};

// Using hash set
const missingNumberHashSet = (nums) => {
    const buckets = Array(nums.length + 1).fill(0)

    for (const num of nums) {
        buckets[num] = 1
    }

    for (let i = 0; i < buckets.length; i += 1) {
        if (buckets[i] === 0) return i
    }
};