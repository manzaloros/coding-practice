/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let numberOfSubarrays = function (nums, numOfRequiredOdds) {
  let res = 0;
  let [start, end] = [0, 0];
  let countOfSubarrays = 0;
  const isOdd = (num) => num % 2 !== 0;

  while (end < nums.length) {
    const numAboutToAdd = nums[end];
    // If num at end of window is odd
    if (isOdd(numAboutToAdd)) {
    // decrement number of odd numbers you need to add to window and reset count
    // of subarrays
      numOfRequiredOdds -= 1;
      countOfSubarrays = 0;
    }

    // While your window has the required number of odd numbers, shrink window
    // from beginning, keeping track if you lose any odd numbers. Increment your
    // count of subarrays while you shrink the window and while it fulfills the
    // "nice" condition. This is the only time you increment your count of
    // subarrays, when you shrink from the right.
    while (numOfRequiredOdds === 0) {
      const numAboutToLose = nums[start];

      if (isOdd(numAboutToLose)) numOfRequiredOdds += 1;

      // Increment count of subarrays found
      countOfSubarrays += 1;
      start += 1;
    }

    // If your numOfRequiredOdds > 0 but you add an even num (numAboutToAdd) to
    // the right side of the window, you will still add your current count of
    // subarrays to the result. Basically, the only time you reset your count of
    // subarrays is when you add a new odd num to the window.
    end += 1;
    res += countOfSubarrays;
  }

  return res;
};

numberOfSubarrays([1, 2, 3, 2, 2, 2, 3], 2);
