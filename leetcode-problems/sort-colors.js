/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

 0 red
 1 white
 2 blue

 */
let sortColors = function (nums) {
  let [p0, curr, p2] = [0, 0, nums.length - 1];

  // important condition that curr can === p2
  while (curr <= p2) {
    if (nums[curr] === 0) {
    // this could swap an element with itself if you're
    // at the beginning of the array and both pointers are
    // on 0 (meaning the 0 is in the right place and you can
    // increment both pointers)
      [nums[p0], nums[curr]] = [nums[curr], nums[p0]];

      p0 += 1;
      curr += 1;
    } else if (nums[curr] === 2) {
    // p2 is at right side of array and is now a 2, so
    // decrement it because it's sorted now
      [nums[curr], nums[p2]] = [nums[p2], nums[curr]];

      p2 -= 1;
    } else {
      curr += 1;
    }
  }
};
