/*
  Space: 2^n exponential, so for 3 elements, you'll have 8 unique subsets. (2^3)
  If you ignore the output array, space is O(n), which is the size of temp.

  This backtracking approach generates all sets with length 0, then all subsets
  with length 1, then 2... etc.
*/
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
