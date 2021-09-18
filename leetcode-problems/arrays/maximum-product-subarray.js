let maxProduct = function (nums) {
  // even num of negatives means max product is whole array
  // odd num of negatives means it's either on the left or right of the odd negatives
  // 0 resets prod
  // edge case when all numbers are 0 handled by mult by curr num first

  /*
    The idea with this algo is you form every subarray from left to right and
    right to left, updating max each time. Always start the running product at
    1, since you are multiplying each time. If your running product is a 0, it
    will ruin the rest of your results, so just ignore it by resetting the
    running product to 1, pretending that you started a new subarray at that point.
  */
  if (nums.length === 1) return nums[0];
  let maxProd = Number.NEGATIVE_INFINITY;

  for (let runProd = 1, i = 0; i < nums.length; i++) {
    runProd *= nums[i];
    if (runProd > maxProd) maxProd = runProd;
    if (runProd === 0) runProd = 1;
  }

  for (let runProd = 1, i = nums.length - 1; i >= 0; i--) {
    runProd *= nums[i];
    if (runProd > maxProd) maxProd = runProd;
    if (runProd === 0) runProd = 1;
  }

  return maxProd;
};
/*
 i
 2 3 -2 4

 runProd: -24
 maxProd: 6

  i
 -2, 0, -1

 runProd -2
 maxProd 0
*/
