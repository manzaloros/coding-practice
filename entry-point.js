const subsets = (nums) => {
  const result = [];
  const temp = [];

  const backtrack = (i) => {
    // basically just make a copy of temp so we have a unique array for this
    // subset
    result.push([...temp]);

    for (let j = i; j < nums.length; j += 1) {
      temp.push(nums[j]);
      backtrack(j + 1);
      // pop off temp because we have pushed that possibility to result
      temp.pop();
    }
  };

  backtrack(0);

  return result;
};

subsets([1,2,3])