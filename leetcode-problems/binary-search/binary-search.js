// template #1
const searchOne = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left)/2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }

  return -1;
};

// uses template #2:
export const search = (nums, target) => {
    const {length} = nums;
   let left = 0;
   let right =  length;

   while (left < right) {
   const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
        left = mid + 1
    } else {
        right = mid
    }
   }

   return left;
};