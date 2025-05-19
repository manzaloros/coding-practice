// another try:
/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}

 o number, rep. max sum 
 i number[], num, num
 c
 e
  l.    m
 (1 and 2)
              -
                ---
 [0,6,5,2,2,5,1,9,4]
                    f
                 s
                          i
 [0,0,6,11,13,15,20,21,30,34]


 i:      8
 maxLen: 6
 result: 19
 */
export const maxSumTwoNoOverlap2 = (nums, firstLen, secondLen) => {
    // make prefix sums
    const prefix = [0];
    // for each num of nums
      // take prefix[i - i] and add nums[i]
      // push to prefix
    nums.forEach((num, i) => {
        if (i > 0) {
            prefix.push(prefix[i - 1] + num)
        }   
    })

    // iterate prefix sums with firstLen first
    // iterate prefix sums with firstLen second
    // return the max of those
    const firstOrder = findMax(prefix, firstLen, secondLen);
    const secondOrder = findMax(prefix, secondLen, firstLen);

    return Math.max(firstOrder, secondOrder);
};

const findMax = (prefixes, firstLen, secondLen) => {
  // init a maximum first array sum
  // init a maximum combination (will be the answer)
  let maxFirstArrSum = 0;
  let maxCombinationSum = 0;

  // for each totalSum of prefixes
    // init a sum including the first array
    // init a sum excluding the first array
    // subtract including from excluding to get the current sum of the first array
    // re assign max first array sum to be the max of first array or the existing max first array sum.

    // init sum of second array: totalSum - sum including first array
    // find max of: 1. sum of current second array + maxFirstArraySum 2. existing max combination
    // assign that to the existing maximum combination
  for (let i = firstLen + secondLen; i < prefixes.length; i += 1) {
    const sumIncludingFirstArr = prefixes[i - secondLen];
    const sumExcludingFirstArr = prefixes[i - secondLen - firstLen];
    const currFirstArrSum = sumIncludingFirstArr - sumExcludingFirstArr;
    maxFirstArrSum = Math.max(maxFirstArrSum, currFirstArrSum);

    const totalSum = prefixes[i];
    const currSecondArrSum = totalSum - sumIncludingFirstArr;
    maxCombinationSum = Math.max(maxCombinationSum, currSecondArrSum + maxFirstArrSum)
  }

  // return max combination
  return maxCombinationSum;
}

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}

 o: int, rep. max sum of elements in two non-overlapping subarrays with specified lengths
 i: int[], int firstLen, int secondLen
 c:
 e:

 subarray is contiguous (touching)

 sliding window?
  
                    
 [2,1,5,6,0,9,5,0,3,8] 4,3
 */
const maxSumTwoNoOverlap1 = (nums, firstLen, secondLen) => {
    const prefixSum = new Array(nums.length + 1).fill(0);
    // make prefix sums. O(n) pre-process:     
    for (let i = 0; i < nums.length; i += 1) {
        prefixSum[i + 1] = prefixSum[i] + nums[i]; // [0,2,3,8,14,14,23,28,28,31,39]
    }
    // find the max sum with either the first or the second array in the first position (since
    // they can occur in either place). O(2n)
    return Math.max(maxSum(prefixSum, firstLen, secondLen), maxSum(prefixSum, secondLen, firstLen));
};

// Scans the prefix array and finds the maximum first array sum. 
// Then, tries that first array maximum with the current second array sum 
// to try to find a max.
const maxSum = (p, l, m) => {
  let maximumSumOfBothArrays = 0;
  let maximumFirstArraySum = 0; 
  // scan the prefix sum array
  for (let i = l + m; i < p.length; i += 1) {
    // represents sum of first array AND everything before it:
    const sumIncludingFirstArray = p[i - m];  
    // represents sum of everything before first array
    const sumBeforeFirstArray = p[i - m - l];
    const currentFirstArraySum = sumIncludingFirstArray - sumBeforeFirstArray;
    maximumFirstArraySum = Math.max(maximumFirstArraySum, currentFirstArraySum); 

    const sumIncludingBothArrays = p[i];
    const currentSecondArraySum = sumIncludingBothArrays - sumIncludingFirstArray;
    const possibleCombination = maximumFirstArraySum + currentSecondArraySum;
    maximumSumOfBothArrays = Math.max(maximumSumOfBothArrays, possibleCombination); 
  }
  return maximumSumOfBothArrays; 
}

