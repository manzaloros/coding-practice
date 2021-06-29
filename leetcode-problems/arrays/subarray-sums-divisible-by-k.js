const subarraysDivByK = (nums, k) => {
  const modFrequencies = new Map();
  modFrequencies.set(0, 1); // account for empty array, sum 0 % k is 0
  let prefixMod = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
  // get the all previous sums % k added with our new mod k
    prefixMod = (prefixMod + nums[i]) % k;

    // need a positive mod, so instead of -1 % 5 being -1, we make it 4
    if (prefixMod < 0) prefixMod += k;

    // Check if you've already found this prefix mod earlier. If you did, that
    // means that between that previous ending index + 1 and the current index,
    // the mod 5 will be 0

    // if sum[0, i] % K === sum[0, j] % K, sum[i + 1, j] is evenly divisible by
    // by K.
    const previousMod = modFrequencies.get(prefixMod) || 0;
    count += previousMod;
    modFrequencies.set(prefixMod, previousMod + 1);
  }

  return count;
};
