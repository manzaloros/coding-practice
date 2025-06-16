/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}

 o: number, rep. max sum of elements in two non-overlapping sub arrays of specified lengths
 i: number[], two ints
 c: arrays can be in either position
 e

 Must be at least O(n) time, have to see every element
 
 ---
     -----
 5,1,2,6,1,3,4       2,  3

            i
 0,5,6,8,14,15,18,22
 */
const maxSumTwoNoOverlap = (nums, firstLen, secondLen) => {
    // make prefix sum array
    const prefix = new Array(nums.length + 1).fill(0)
    for (let i = 0; i < nums.length; i += 1) {
        prefix[i + 1] = prefix[i] + nums[i]; 
    }

    // iterate prefix sums, with fL first
    const fLFirst = findMax(prefix, firstLen, secondLen)
    // iterate prefix sums, with sL first
    const sLFirst = findMax(prefix, secondLen,firstLen)
    // return the max of both
    return Math.max(fLFirst, sLFirst);
};

const findMax = (sums, fL, sL) => {
  // init maxSum as zero
  let maxSum = 0;
  // init maxFirstArrSum as zero
  let maxFirstArrSum = 0;

  // for each sum of sums, i
    // init sumIncludingFirstArr
    // init sumBeforeFirstArr
    // init currFirstArrSum

    // init currTotalSum
    // init currSecArrSum
    // init possibleCombination
    // find max of possible combination or maxSum
  
  for (let i = fL + sL; i < sums.length; i += 1) {
     const sumIncFirstArr = sums[i - sL];
     const sumExcFirstArr = sums[i - sL - fL];
     const currFirstArrSum = sumIncFirstArr - sumExcFirstArr;
     maxFirstArrSum = Math.max(maxFirstArrSum, currFirstArrSum);

     // Finds the current second array sum
     // This is possible because we found the current first array sum
     // and we have the total sum (which includes that first array sum)

     // Then we add the current second array sum to max first array sum we've seen
     // This works as non-overlapping because we always calculate the initial first
     // array sum using the sL and fL lengths
     const currTotalSum = sums[i];
     const currSecArrSum = currTotalSum - sumIncFirstArr;
     const possibleCombination = currSecArrSum + maxFirstArrSum;
     maxSum = Math.max(possibleCombination, maxSum);
  }


  // return maxSum
  return maxSum;
}