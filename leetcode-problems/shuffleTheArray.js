/*
Need to figure this one out, shuffling the array in place...
*/

const shuffle = (nums, n) => {
  for (let i = 0; i < nums.length; i += 1) {
    let j = i;
    let buffer = nums[i];
    while (buffer >= 0) {
      j = j < n
        ? j * 2
        : (j - n) * 2 + 1;

      const temp = buffer;
      buffer = nums[j];
      nums[j] = -temp;
    }
  }
  for (let i = 0; i < nums.length; i += 1) {
    nums[i] *= -1;
  }
  return nums;
};
