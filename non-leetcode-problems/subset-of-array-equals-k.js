/**
 * From daily coding problem, listed as "hard".
 * o number[], number
 * i number[]
 * c
 * e
 * 
 *             i
 * [12, 1, 61, 5, 9, 2], k =  24; return [12, 9, 2, 1]
 * 
 * 
 *                                      j
 * [0, 1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0, 1,-1,-1,-1, 3, 3,-1,-1,-1,-1,-1,-1]
 *                                     12                 18                (25th element)
 * ...eventually:
 * [0, 1, 5, 5, -1, 3, 3, 5, 5, 4, 4, 5, 0, 1, 4, 4, 5, 3, 3, 5, 5, 4, 4, 5, 5]
 */
// O(k * n) time
// O(k space)
export const subsetOfArrayEqualsK = (arr, k) => {
    // create dp array k+1, initialized to -1
    // set dp[0] = 0, to represent an empty subset forming the sum 0
    // loop backwards through dp from k - S[i] down to 0
    // if dp[j] >= 0 and dp[j + S[i]] === -1, then set dp[j + S[i]] = i
    // outside the loop, if dp[k] === -1, return null
    // otherwise, backtrack from k, using dp array to reconstruct the subset

    const reachableSums = new Array(k + 1).fill(-1);
    reachableSums[0] = 0; // base case, sum 0 reachable with no elements
    // iterate through arr O(arr.length)
    for (let i = 0; i < arr.length; i += 1) {
        const num = arr[i];
        // iterate through dp. O(k)
        for (let j = k - num; j >= 0; j -= 1) {
            if (reachableSums[j] !== -1 && reachableSums[j + num] === -1) {
                reachableSums[j + num] = i;
            }
        }
    }

    if (reachableSums[k] === -1) return null;

    const result = [];
    let sum = k;
    while (sum > 0) {
        const i = reachableSums[sum];
        const num = arr[i];
        result.push(num);
        sum -= num;
    }

    return result;
}