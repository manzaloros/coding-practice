/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}

      k = 2

   i
 1 2 2 1

 Time: O(n * n!)
 For each recursive call you iterate over n elements and make another recursive
 call
 Space: O(n), depth of the call stack
 */
let canPartitionKSubsets = function (nums, k) {
  const totalSum = nums.reduce((total, curr) => total + curr);

  const targetSum = totalSum / k;

  const recurse = (index, currSum, kLeft) => {
    let canDivide = false;

    if (kLeft === 1) {
      canDivide = true;

      return canDivide;
    }

    if (currSum > targetSum) return canDivide;

    // You have a subarray that is the right sum so try starting at beginning of
    // the array with 1 less partition and a 0 current sum
    if (currSum === targetSum) {
      canDivide = recurse(0, 0, kLeft - 1);

      return canDivide;
    }

    for (let i = index; i < nums.length; i += 1) {
      const num = nums[i];

      // If you haven't already chosen this num for a previous subarray
      if (num) {
        // Mark number as chosen so you don't choose it again for a future
        // subarray in this recursive call
        nums[i] = null;

        let sumToTry = currSum + num;
        // try making a subarray with the current num
        canDivide = recurse(i + 1, sumToTry, kLeft);

        if (canDivide) return true;

        nums[i] = num;
      }
    }

    return canDivide;
  };

  return recurse(0, 0, k);
};

// canPartitionKSubsets([1, 2, 2, 1], 2);
canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);
