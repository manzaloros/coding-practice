/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}

 o 
 i number[], number[number[]]
 c
 e
         i
 nums = [4,3,2,1], queries = [[1,3],[0,2]]

 delta
           i
[1,1,0,-1,-1]

currOp: 2
op counts
 i
[1,2,2,1,0]

---------------------------------
            i
nums = [1,0,1], queries = [[0,2]]

delta
        i
[1,0,0,-1]

currOp: 1
opCounts
     i
[1,1,1,0]

 */

// Time: O(nums.length + queries.length)
// Space: O(queries.length)
const isZeroArray = (nums, queries) => {
  const deltaArr = new Array(nums.length + 1).fill(0);

  for (const [left,right] of queries) {
    deltaArr[left] += 1;
    deltaArr[right + 1] -= 1; 
  }  

  /**
   * tracks number of times nums[i] has been decremented
   * 
   * prefix sum of delta array.
   * 
   * since delta array has -1 every time an interval ends, this works.
   * 
   * Also, instead of making a new operationCounts arr, we could just reuse the 
   * deltaArr since we aren't using it for anything any more.
   */
  const operationCounts = [];
  let currentOperations = 0;
  for (const delta of deltaArr) {
    currentOperations += delta;
    operationCounts.push(currentOperations)
  }
  for (let i = 0; i < nums.length; i += 1) {
    // if operation counts[i] is ever less than nums[i], 
    // it means that nums[i] didn't have enough decrements done to it
    if (operationCounts[i] < nums[i]) {
        return false;
    }

  }
  return true;
};