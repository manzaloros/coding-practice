// O(n^2)
/* const minSubArrayLen = (nums, target, { length } = nums, minLength = Infinity) => {
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
} */

const minSubArrayLen = (nums, sum, [total, start, end, minLen, { length }] = [0, 0, 0, Infinity, nums]) => {
  while (start < length) {
    /* If the window total is less than our sum, and the end of the window is within the nums array */
    if (total < sum && end < length) {
      /* expand window right */
      total += nums[end];
      end += 1;
      /* If our window total is greater than or equal to our sum */
    } else if (total >= sum) {
      /* Update min length, move window right*/
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start += 1;
    } else {
      break;
    }
  }
  /* If no subarray was found, return zero */
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))