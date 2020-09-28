/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */


const twoSum = (nums, target) => {
  // O(n^2)
  // for (let i = 0; i < nums.length; i += 1) {
  //   for (let j = i + 1; j < nums.length; j += 1) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  // return null;

  //O(n), since the loops are not nested
  // The hash table (map, or JS object) reduces lookup time of complement to O(1)
  // Space Complexity: O(n)
  const map = {};
  // Assign map at key number = index
  for (let i = 0; i < nums.length; i += 1) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i += 1) {
    // Subtract the array element from the target
    const complement = target - nums[i];
    // If the target exists in the array and it is not the current element
    if (map[complement] && map[complement] !== i) {
      // Return that tuple
      return [i, map[complement]];
    }
  }
  return null;
}