/* eslint-disable no-nested-ternary */
/* Given an integer array nums, return an array answer such that answer[i] is
equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
integer.

You must write an algorithm that runs in O(n) time and without using the
division operation.

Example 1:

Input: nums = [1,2,3,4] Output: [24,12,8,6] Example 2:

Input: nums = [-1,1,0,-3,3] Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 105 -30 <= nums[i] <= 30 The product of any prefix or suffix
of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output
array does not count as extra space for space complexity analysis.)

 */

const productExceptSelf = (nums,
  { length } = nums,
  product = 1,
  zeroIndex = -1,
  products = Array(length).fill(0),
  i = 0) => {
  for (; i < length; i += 1) {
    if (zeroIndex !== -1 && nums[i] === 0) {
      return products;
    }

    if (nums[i] !== 0) {
      product *= nums[i];
    } else {
      zeroIndex = i;
    }
  }

  // cool nested ternary
  for (i = 0; i < length; i += 1) {
    products[i] = zeroIndex !== -1
      ? i === zeroIndex ? product : 0
      : product * (nums[i] ** -1);
  }

  return products;
};

/*
  TC: O(n) SC: O(n)

  The secret here is that you make a prefix multiple array of everything to the
  left of the current element, then another prefix multiple of everything right
  of the current element.

  So when you iterate the left and right arrays, you can multiply them to get
  the product except self for the current element

  left: [1,1,2,6] --->  [everything to the left of current]
  right:[24,12,4,1] --> [everything to the right of current]
  product:[24, 12,8,6]
*/
const productExceptSelfPrefix = (nums, { length } = nums) => {
  const products = Array(length);
  const left = [1];
  const right = Array(length - 1);
  right.push(1);

  for (let i = 1; i < length; i += 1) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // start at second to last element
  for (let i = length - 2; i >= 0; i -= 1) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < length; i += 1) {
    products[i] = left[i] * right[i];
  }

  return products;
};

/* O(1) space
Still using prefix sums

Key here is that the products array doesn't include the last product. So,

1,2,3,4 -> 
products: 1,1,2,6 (so there is no 24)

 */
const productExceptSelfO1Space = (nums, { length } = nums, products = [1], right = 1) => {
  // Products first represents left
  for (let i = 1; i < length; i += 1) {
    products[i] = products[i - 1] * nums[i - 1];
  }

  // Right array is instead represented as a number
  for (let i = length - 1; i >= 0; i -= 1) {
    products[i] *= right;
    right *= nums[i];
  }

  return products;
};

productExceptSelfPrefix([1, 2, 3, 4]);
