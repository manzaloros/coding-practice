/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

*/

const runningSum = (nums) => {
  const output = new Array();
  nums.forEach((num, i) => {
    if (i === 0) {
      output.push(num);
      return;
    }
    const currentSum = output[i - 1] + nums[i];
    output.push(currentSum);
  })
  return output;
}

console.log(runningSum([1, 1, 1, 1, 1]))