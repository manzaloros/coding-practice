/* Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:

1 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

*/

const rotate = (nums, k) => {
  const temp = nums.splice(-(k % nums.length));
  nums.unshift(...temp);
}


// Faster solution:
/*
var rotate = function(nums, k) {
  k %= nums.length;
    let cutOff = nums.length - k - 1
  let result = []
  for(let i=cutOff + 1; i<nums.length;i++){
      result.push(nums[i])
  }
  for(let i=0; i<=cutOff;i++){
      result.push(nums[i])
  }
    for(let i=0; i<result.length;i++){
        nums[i] = result[i]
    }

};

*/

/*
Space efficient solution:

var rotate = function(nums, k) {
    for(let j = 0;j<k;j++){
    let last_element = nums[nums.length-1];
    for(let i= nums.length-1;i>0;i--){
        nums[i] = nums[i-1];
    }
    nums[0] = last_element;

    }




};
*/
// rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 0);