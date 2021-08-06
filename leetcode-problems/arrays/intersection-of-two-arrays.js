/* Given two integer arrays nums1 and nums2, return an array of their
intersection. Each element in the result must be unique and you may return the
result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2] Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] Output: [9,4] Explanation: [4,9] is
also accepted.

Constraints:

1 <= nums1.length, nums2.length <= 1000 0 <= nums1[i], nums2[i] <= 1000
 */

// Time: O (longer list length * log shorter list length)
// Space: O (size of set)
/*
Suppose x = nums1.length, y = nums2.length, and x > y.

The overall time complexity is determined by two major components: (1) array
sorting, whose time complexity is O(n*log n).  (2) binary search, whose time
complexity is O(log n).

If the shorter array is sorted, then the overall time complexity is O(y*log y +
x*log y) = O((x+y)*log y), otherwise O((x+y)*log x), which is greater.
*/
const intersection = (nums1, nums2) => {
  const binarySearch = (nums, target) => {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) return true;

      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  };

  const set = new Set();
  // make nums1 the shorter list
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  // O(m log m)
  nums1.sort((a, b) => (a < b ? -1 : 1));

  // O (n log m)
  nums2.forEach((num) => {
    if (binarySearch(nums1, num)) set.add(num);
  });

  return Array.from(set);
};

// intersection([1, 2, 2, 1], [2, 2]);
// intersection([4, 9, 5], [9, 4, 9, 8, 4]);
// intersection([2, 6, 2, 9, 1],
//   [7, 1]);

// Time: O (nums1.length)
// Space: O(nums1.length) + O(nums2.length)
const intersectionNaive = (nums1, nums2) => {
  const set = new Set(nums1);
  const setOfIntersections = new Set();

  nums2.forEach((num) => {
    if (set.has(num)) setOfIntersections.add(num);
  });

  return Array.from(setOfIntersections);
};

intersectionNaive([2, 6, 2, 9, 1],
  [7, 1]);
