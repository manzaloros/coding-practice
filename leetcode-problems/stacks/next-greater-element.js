/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}

 for each element of nums1, find index in nums2 where === num in nums1 and find next greater element of nums2. Or return -1

 i
 4 1 2
         j
 1.3 4 2

 {
 1:0
 3:1
 4:2
 2:3
 }

 is top of stack < curr?
 [2 3
 [4 2]
 {
 4: -1
 2: -1
 }
 pop it. make popped index {index: current pointer}
 {
 index: next greater num
 0:1
 1:2
 4: -1
 2: -1
 }

 find num1 === num2. Next greater element with > index. Nothing, so -1.

 3.

 -1.

 i
 2 4
 1 2 3 4

 3 -1

 */
// O(n^2)
let nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const result = [];

  nums2.forEach((num, i) => {
    map.set(num, i);
  });

  nums1.forEach((num) => {
    let j = map.get(num) + 1;
    while (j < nums2.length && nums2[j] < num) {
      j += 1;
    }

    result.push(j === nums2.length ? -1 : nums2[j]);
  });

  return result;
};

// O(length1 + length2)
const nextGreaterElementMonoStack = (nums1, nums2) => {
  const makeStack = ([stack, map], num, i) => {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      const popped = stack.pop();
      map.set(popped, num);
    }

    stack.push(num);
    return [stack, map];
  };

  const [stack, map] = nums2.reduce(makeStack, [[], new Map()]);

  const matchWithIndex = (result, num) => {
    result.push(map.get(num));
    return result;
  };

  stack.forEach((num) => map.set(num, -1));

  return nums1.reduce(matchWithIndex, []);
};

nextGreaterElementMonoStack([4, 1, 2], [1, 3, 4, 2]);
