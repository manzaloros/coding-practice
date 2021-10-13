/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

         s
                     e
 -------------
   -----------
     ---------
       -------
 ---------------
   -------------
     -----------
       ---------
 -----------------
   ---------------
     -------------
       -----------
 -------------------
   -----------------
     ---------------
       -------------
 2,2,2,1,2,2,1,2,2,2, k=2
 k:1
 count:4
 result:16

 */
let numberOfSubarrays = function (nums, k) {
  let [lo, hi] = [0, 0];
  let result = 0;
  let countOfSubarrays = 0;

  const isOdd = (num) => num % 2 === 1;
  /*
  Inner loop counts number of subarrays that include the correct number of odd
  numbers. Until you add another odd number when expanding the window in the
  outer loop you will continue to add the count of subarrays that you found in
  the inner loop, since you just expanded the window and you didn't find an odd
  number that breaks your condition so you have that many more subarrays to add
  to your result.

  When you expand your window in the outer loop and you DO find an odd number,
  you reset the count of subarrays to 0 so that you can record a new set of
  subarrays for the odd numbers you've found.
*/
  while (hi < nums.length) {
    const hiNum = nums[hi];

    if (isOdd(hiNum)) {
      k -= 1;
      countOfSubarrays = 0;
    }

    while (k === 0) {
      const loNum = nums[lo];

      if (isOdd(loNum)) {
        k += 1;
      }

      countOfSubarrays += 1;

      lo += 1;
    }

    hi += 1;
    result += countOfSubarrays;
  }

  return result;
};
