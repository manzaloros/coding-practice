/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = (nums) => {
    let [sum, maxSoFar, maxTotal, minTotal, minSoFar] = [nums[0], nums[0], nums[0], nums[0], nums[0]];
    
    nums.forEach((num, i) => { 
        if (i > 0) {
          maxSoFar = Math.max(num, maxSoFar + num);
          maxTotal = Math.max(maxSoFar, maxTotal); // Maximum subarray

          minSoFar = Math.min(num, minSoFar + num);
          minTotal = Math.min(minTotal, minSoFar); // Minimum subarray

          sum += num;    
        }    
    });
    
    // if the minimum subarray spans the whole array just return the max total
    if (sum === minTotal) return maxTotal;
    
    // If the max subarray is circular, return the sum of the array - minimum subarray total
    // (the minimum subarray is somewhere in the middle so we remove it from the sum of the whole array)
    // to just leave the maximum circular subarray
    return Math.max(sum - minTotal, maxTotal);
};
