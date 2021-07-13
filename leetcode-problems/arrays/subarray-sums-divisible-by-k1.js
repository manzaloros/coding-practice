let subarraysDivByK = function (nums, k) {
  let subarrays = 0;
  let runningTotal = 0;

  const totals = { 0: 1 };

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    runningTotal += num;
    runningTotal %= k;
    if (runningTotal < 0) runningTotal += k;

    let kLessTotal = totals[runningTotal];
    if (kLessTotal !== undefined) subarrays += kLessTotal;

    if (!totals.hasOwnProperty(runningTotal)) totals[runningTotal] = 0;
    totals[runningTotal] += 1;
  }

  return subarrays;
}; i;
