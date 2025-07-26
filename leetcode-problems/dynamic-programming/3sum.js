const threeSum = (nums) => {
  nums.sort((a, b) => (a < b ? -1 : 1));

  const result = [];

  const temp = [];

  const backtrack = (index, kLeft, target) => {
    if (kLeft === 2) {
      let [i, j] = [index, nums.length - 1];

      while (i < j) {
        if (nums[i] + nums[j] > target) {
          j -= 1;
        } else if (nums[i] + nums[j] < target) {
          i += 1;
        } else {
          temp.push(nums[i], nums[j]);
          result.push([...temp]);

          temp.pop();
          temp.pop();
          j -= 1;
          i += 1;

          while (nums[i] === nums[i - 1]) i += 1;
        }
      }
    } else {
      nums.forEach((num, i) => {
        if (num !== null && num !== nums[i - 1]) {
          temp.push(num);
          backtrack(i + 1, kLeft - 1, target - num);

          temp.pop();
        }
      });
    }
  };

  backtrack(0, 3, 0);

  return result;
};

// threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([0, 0, 0, 0]);
threeSum([0, 0, 0]);
// threeSum([-2, 0, 0, 2, 2]);
