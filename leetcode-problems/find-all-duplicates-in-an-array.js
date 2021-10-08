/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDuplicates = function (nums) {
  const ans = [];

  nums.forEach((num) => {
    // Have to do ABS because number could be negative. -1 because you want to
    // access that index and it's 0 based.
    const indexToCheck = Math.abs(num) - 1;
    nums[indexToCheck] *= -1;
  });

  nums.forEach((num) => {
    const indexToCheck = Math.abs(num) - 1;

    // If a num is positive, that means it was negated twice, meaning it appears
    // twice in the array. Make sure to set it back to negative once you've
    // added it to the result because you might count it again unnecessarily later.
    if (nums[indexToCheck] > 0) {
      ans.push(Math.abs(num));

      nums[indexToCheck] *= -1;
    }
  });

  return ans;
};
