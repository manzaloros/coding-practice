const fourSum = (nums, target) => {
  nums.sort((a, b) => (a < b ? -1 : 1));

  const result = [];
  const temp = [];

  const { length: n } = nums;
  const twoSum = (index, targetLeft) => {
    let [left, right] = [index, n - 1];

    while (left < right) {
      const [numLeft, numRight] = [nums[left], nums[right]];
      const sum = numLeft + numRight;

      if (sum > targetLeft) {
        right -= 1;
      } else if (sum < targetLeft) {
        left += 1;
      } else {
        left += 1;

        temp.push(numLeft);
        temp.push(numRight);

        result.push([...temp]);
        temp.pop();
        temp.pop();

        while (left < right && nums[left - 1] === nums[left]) left += 1;
      }
    }
  };

  const kSum = (index, targetLeft, k) => {
    if (k === 2) return twoSum(index, targetLeft);

    for (let i = index; i < nums.length; i += 1) {
      const num = nums[i];

      if (i === index || nums[i - 1] !== num) {
        temp.push(num);
        kSum(i + 1, targetLeft - num, k - 1);

        temp.pop();
      }
    }
  };

  kSum(0, target, 4);

  return result;
};

fourSum([2, 2, 2, 2, 2], 8);
