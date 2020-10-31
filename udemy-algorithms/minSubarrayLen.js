const minSubArrayLen = (nums, target, { length } = nums, minLength = Infinity) => {
  for (let i = 0; i < length; i += 1) {
    let [currSum, j] = [0, 0];
    while ((j + i) < length) {
      currSum += nums[i + j];
      if (currSum >= target) {
        minLength = Math.min(j + 1, minLength);
        break;
      }
      j += 1;
    }
  }
  return isFinite(minLength) ? minLength : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))