// O(n)
let nextPermutation = function (nums) {
  let i = nums.length - 2;

  // while prev num is greater than current. Basically, find the first pair of
  // numbers that aren't in ascending order (going backwards)
  while (i >= 0 && nums[i + 1] <= nums[i]) i -= 1;

  const swap = (a, b) => { [nums[a], nums[b]] = [nums[b], nums[a]]; };

  const reverse = (a) => {
    let j = nums.length - 1;
    while (a < j) {
      swap(a, j);
      a += 1;
      j -= 1;
    }
  };

  if (i >= 0) {
    let j = nums.length - 1;
    // Find the first num from the end that is greater than current num and swap
    // them. Then, reverse the nums from the first point to the end of the array
    while (nums[j] <= nums[i]) j -= 1;

    swap(i, j);
  }
  reverse(i + 1);
};

/*
  Algorithm:

  Scan right to left (backwards).

  Find the pair of nums that aren't in ascending order.

  In another loop, find first num from end that is larger than the first num you
  found.

  Swap those two nums, and then reverse from the first num to the end of the array.
*/
