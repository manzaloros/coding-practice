/*
  Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given a pivot x, and a list lst, partition the list into three parts.

The first part contains all elements in lst that are less than x The second part
contains all elements in lst that are equal to x The third part contains all
elements in lst that are larger than x Ordering within a part can be arbitrary.

For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may
be [9, 3, 5, 10, 10, 12, 14].

input: array and num
output: array ordered in specific way
*/

// time and space: O(n)
const partitionWithPivot = (nums, pivot) => {
  const lessThan = [];
  const equalTo = [];
  const greaterThan = [];

  nums.forEach((num) => {
    if (num < pivot) lessThan.push(num);
    else if (num === pivot) equalTo.push(num);
    else greaterThan.push(num);
  });

  return [...lessThan, ...equalTo, ...greaterThan];
};

// O(1) space, dutch national flag algorithm
const partitionWithPivotO1Space = (nums, pivot) => {
  let [i, left, right] = [0, nums.length - 1, 0];

  const swap = (a, b) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  };

  while (i <= right) {
    const curr = nums[i];

    // If curr num is less than pivot, it needs to move to left of array, so
    // swap it with left pointer, increment both
    if (curr < pivot) {
      swap(i, left);

      i += 1;
      left += 1;
    } else if (curr > pivot) {
      // otherwise, if curr is greater than pivot, it needs to be on the right
      // side of array, so swap with right pointer, decrement right, it's
      // sorted, but don't increment curr because it will need to be swapped
      // with left in the next iteration
      swap(i, right);

      right -= 1;
    } else i += 1;
  }

  return nums;
};

partitionWithPivotO1Space([9, 12, 3, 5, 14, 10, 10], 10);
