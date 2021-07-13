let checkSubarraySum = function (nums, k) {
  let runningTotal = 0;
  let hasSubarray = false;

  // total: [occurences, index seen]
  const totals = { 0: -1 };

  nums.forEach((num, index) => {
    runningTotal += num;
    if (k !== 0) runningTotal %= k;

    let indexLastSeen = totals[runningTotal];

    if (indexLastSeen !== undefined) {
      if (index - indexLastSeen > 1) hasSubarray = true;
    } else {
      totals[runningTotal] = index;
    }
  });

  return hasSubarray;
};
