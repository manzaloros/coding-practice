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
      // Basically, if you find a positive num at the index you're checking,
      // that means that you have seen that index twice, because you make it
      // negative each time. That means you have seen your particular number
      // twice (NOT the index), so you need to add the number to seen.
      ans.push(Math.abs(num));

      nums[indexToCheck] *= -1;
    }
  });

  return ans;
};

findDuplicates([4, 3, 2, 7, 8, 2, 3, 7]);
