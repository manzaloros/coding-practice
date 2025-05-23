

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}

 o number[], length k, representing k most frequent elements
 i number[], number k
 c
 e

         i
[1,2,1,3,2,1]
 numToFreq: (must be size k)
 {
1:2
2:2
3:1
 }

maxFreq:2

freqToNum: 
{
1: [3]
2: [1,2]

}
 */
// time: O(n + k))
// space: O(n + 2k)
const topKFrequent = (nums, k) => {
    // Init freqToNum map
    // init numToFreq map
    // init max freq = 0
    const freqToNum = new Map();
    const numToFreq = new Map();
    let maxFreq = Number.NEGATIVE_INFINITY;
    // for each num of nums
      // set or default numToFreq[num] + 1
      // set freqToNum[value from numToFreq[num]] = num
      // set maxFreq to be max of value from numToFreq[num] or maxFreq
    for (const num of nums) {
        const oldFreq = numToFreq.get(num);
        const newFreq = oldFreq ? oldFreq + 1 : 1
        numToFreq.set(num, newFreq)
        
        const numsMatchingFreq = freqToNum.get(newFreq) ?? new Set();
        if (oldFreq) {
            // remove old entry from numToFreq arr if previously recorded
            const setToRemoveNum = freqToNum.get(oldFreq);
            setToRemoveNum.delete(num)
        }
        numsMatchingFreq.add(num);
        freqToNum.set(newFreq, numsMatchingFreq)
        maxFreq = Math.max(maxFreq, numToFreq.get(num))
    }
    
    // init result arr
    // initialize currFreq to maxFreq
    const result = [];
    let currFreq = maxFreq;
    // while currFreq is greater than 0 and result arr length is < k
      // if freqToNum[currFreq] exists, add that value to the result
      // currFreq -= 1
    while (currFreq > 0 && result.length < k) {
        const numsMatchingFreq = freqToNum.get(currFreq);
        if (numsMatchingFreq) {
            // O(n) worst case
            result.push(...numsMatchingFreq);
        }
        
        currFreq -= 1;
    }
    // return result;
    return result;
};