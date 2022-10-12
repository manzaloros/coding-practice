/**
 * @param {number[]} nums
 * @return {number}

 i: number[]
 o: number rep. largest perimeter triangle, not 0 area
 c: input could be greater than 3 length
 e: nums non negative

 |\
 --
 2

 naive:
 calculate area O(1)
 init perimeter = 0

 sort nums (O (n log n)) descending

 for each num of nums O(n)

 return largest perimeter
 */

// The trick is that 3rd side of triangle must be less than 2 other sides combined.
// So if you go backwards through the sorted list, the first combination of nums that
// fits that criteria will be the answer.

// Greedy, sorting.
let largestPerimeter = (nums) => {
  // O(n log n)
  nums.sort((a, b) => (a < b ? 1 : -1)); // reverse. O(n log n).

  /*
    You could just do a for-loop and stop when you meet your condition.
  */
  return nums.reduce((perimeter, curr, i) => {
    // O(nums.length)
    let largest = 0;
    let [a, b, c] = [curr, nums[i + 1], nums[i + 2]];
    if (a < b + c) largest = a + b + c;

    return Math.max(perimeter, largest);
  }, 0);
};
