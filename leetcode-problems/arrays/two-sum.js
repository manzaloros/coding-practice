const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    map.set(target - nums[i], i);
  }

  for (let i = 0; i < nums.length; i += 1) {
    const differenceI = map.get(nums[i]);
    if (map.has(nums[i]) && differenceI !== i) return [i, differenceI];
  }
};

const twoSumOnePass = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const curr = nums[i];
    const compliment = target - curr;

    if (map.has(compliment)) return [map.get(compliment), i];

    // set the current value, NOT the complement, then when we look it up it
    // will exist
    map.set(curr, i);
  }
};

twoSum([3, 2, 4], 6);
