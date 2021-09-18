/*
  Using the general subsets backtracking template
*/
let permute = function (nums) {
  const res = [];
  const temp = [];

  const backtrack = () => {
    if (temp.length === nums.length) {
      res.push([...temp]);
    } else {
      nums.forEach((num, i) => {
        const prev = nums[i - 1];

        if (num && num !== prev) {
          nums[i] = null;

          temp.push(num);
          backtrack();
          temp.pop();

          nums[i] = num;
        }
      });
    }
  };

  backtrack();

  return res;
};
