/* Given two integer arrays nums1 and nums2, return an array of their
intersection. Each element in the result must appear as many times as it shows
in both arrays and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2,2] Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] Output: [4,9] Explanation: [9,4] is
also accepted.

Constraints:

1 <= nums1.length, nums2.length <= 1000 0 <= nums1[i], nums2[i] <= 1000

Follow up:

What if the given array is already sorted? How would you optimize your
algorithm?  What if nums1's size is small compared to nums2's size? Which
algorithm is better?  What if elements of nums2 are stored on disk, and the
memory is limited such that you cannot load all elements into the memory at
once? */

// Time: O(m + n)
// Space: O(m + n)
const intersect = (nums1, nums2) => {
  const map = new Map();
  nums1.forEach((num) => {
    if (!map.has(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
  });

  const map2 = new Map();
  nums2.forEach((num) => {
    if (!map2.has(num)) map2.set(num, 0);
    map2.set(num, map2.get(num) + 1);
  });

  const result = [];

  nums2.forEach((num) => {
    if (map.has(num)) {
      const occurrences1 = map.get(num);
      const occurrences2 = map2.get(num);

      const times = occurrences1 < occurrences2 ? occurrences1 : occurrences2;
      for (let i = 0; i < times; i += 1) result.push(num);

      map.delete(num);
      map2.delete(num);
    }
  });

  return result;
};

// Time: O (shorter array length * log 2 larger array length)
// Space: O (1) not counting output
const intersectBinary = (nums1, nums2) => {
  // nums2 should be the larger array
  if (nums1.length > nums2.length) return intersectBinary(nums2, nums1);

  // returns index of target if found OR first number LARGER than target
  const binarySearch = (nums, left, target) => {
    let right = nums.length - 1;

    // when left and right line up, quit the loop
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // left === right
    return left;
  };

  let lowerBound = 0;
  const result = [];

  nums1.sort((a, b) => (a < b ? -1 : 1));
  nums2.sort((a, b) => (a < b ? -1 : 1));

  nums1.forEach((num) => {
    // Want to binary search on the larger array
    const index = binarySearch(nums2, lowerBound, num);

    if (index < nums2.length && nums2[index] === num) {
      result.push(num);
      lowerBound = index + 1;
    }
    // since nums1 is sorted you DO NOT need to reset lower bound
  });

  return result;
};

// intersectBinary([1, 2, 2, 1], [2, 2]);
intersectBinary([4, 9, 5],
  [9, 4, 9, 8, 4]);
