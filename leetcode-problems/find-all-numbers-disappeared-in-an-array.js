/**
 * @param {number[]} nums
 * @return {number[]}

 input: arr nums
 output: arr nums NOT in input

 [-4,-3,-2,-7,8,2,-3,-1]
 positive nums rep. indices seen twice
 e.g.: whatever is at index 2 we've seen twice: here it's 3.

 [1, 4, 7, 8] once
 [2, 3] twice

 [-1,1]

 */
let findDisappearedNumbers = function (nums) {
  nums.forEach((num) => {
    const newIndex = Math.abs(num) - 1;

    if (nums[newIndex] > 0) nums[newIndex] *= -1;
  });

  return nums.reduce((result, curr, i) => {
    if (nums[i - 1] > 0) result.push(i);
    if (i === nums.length - 1 && curr > 0) result.push(i + 1);

    return result;
  }, []);
};
