let search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];

  const isLeftSideSorted = (midNum, leftNum) => midNum >= leftNum;

  const isTargetBetweenMidAndLeft = (midNum, leftNum) => target >= leftNum
    && target < midNum;

  const isTargetBetweenMidAndRight = (midNum, rightNum) => target > midNum
    && target <= rightNum;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const [midNum, leftNum, rightNum] = [nums[mid], nums[left], nums[right]];

    if (midNum === target) return mid;

    if (isLeftSideSorted(midNum, leftNum)) {
      if (isTargetBetweenMidAndLeft(midNum, leftNum)) right = mid - 1;
      else left = mid + 1;
      // right side sorted
    } else if (isTargetBetweenMidAndRight(midNum, rightNum)) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

// search([4, 5, 1, 2, 3], 2);
// search([4, 5, 1, 2, 3], 5);
search([3, 4, 5, 1, 2], 1);
// search([3, 4, 5, 1, 2], 3);
// search([3, 1], 1);
