const findNearestLarger = (nums, index) => {
  let [i, j] = [index - 1, index + 1];
  const el = nums[index];

  // O (log n)
  while (i >= 0 || j < nums.length) {
    const [iNum, jNum] = [nums?.[i], nums?.[j]];

    if (iNum > el) return i;
    if (jNum > el) return j;

    i -= 1;
    j += 1;
  }

  return null;
};

findNearestLarger([4, 1, 3, 5, 6], 0);
