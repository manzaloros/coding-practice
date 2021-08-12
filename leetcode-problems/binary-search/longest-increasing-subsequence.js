// Space O(n)
// O n log n
const lengthOfLIS = (nums) => {
  const sub = [nums[0]];

  // O log n
  const binarySearch = (num) => {
    let left = 0;
    let right = sub.length - 1;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (sub[mid] === num) return mid;

      if (sub[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  };

  // Go through each number starting at index 1, and if a number is increasing,
  // just add it to the subarray you're building. Otherwise, search for the
  // first number in the subarray you're building that is >= your current num.
  // Since the subarray you're building is sorted, you can binary search it.
  // Once you find that new number's index, just replace it in the subarray.
  // O(n)
  nums.forEach((num, i) => {
    if (i !== 0) {
      if (num > sub[sub.length - 1]) {
        sub.push(num);
      } else {
        let indexToReplace = binarySearch(num);
        sub[indexToReplace] = num;
      }
    }
  });

  return sub.length;
};

lengthOfLIS([1, 2, 0, 3, 2]);
