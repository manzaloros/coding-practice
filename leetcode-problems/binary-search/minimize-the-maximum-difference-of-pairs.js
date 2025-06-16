/**
 * Given an unsorted list of numbers and P,
 * find the minimum difference between P pairs of 
 * non-overlapping numbers in the list.
 * 
 * So, given: [1, 3, 6, 19] and p = 2.
 * 
 * You can make [1,3] and [6,19]. Difference between 3 and 1 is 2, 
 * and the diff between 6 and 19 is 13. Max here is 13.
 * 
 * You can also make [1,6] and [3,19]. Difference between 1 and 6
 * is 5, and 3 and 19 is 16. 16 is the max, which is MORE than 13.
 * 
 *  You can also make [3,6] and [1,19]. Difference between 3 and 6
 * is 3, and 1 and 19 is 18. 18 is the max, which is MORE than 13.
 * 
 *
 * So out of those different P pairs, the minimum maximum difference 
 * we can make is 13!
 */
export const minimizeMax = (nums, p) => {
    const length = nums.length;
    // Max diff is the threshold.
    const canFormPairs = (maxDiff) => {
        // The number of pairs we can form between elements of
        // nums that are less than the given maxDiff
        let pairs = 0;
        for (let i = 0; i < length - 1; i += 1) {
            if (nums[i + 1] - nums[i] <= maxDiff) {
                pairs += 1; 
                i += 1;
            }
        }
        // Confirm that with the given maxDiff, the number of 
        // pairs we can form between the elements is at least the 
        // required amount (p)
        return pairs >= p
    }
    // O(n log n)
    // Sort because it will make adjacent elements have the smallest possible 
    // difference.
    nums.sort((a,b) => a - b);
    // difference of zero. This does NOT represent an 
    // index like in a normal binary search:
    let left = 0;
    // last element minus the first element
    let right = nums[length - 1] - nums[0];

    // binary search template #2
    while (left < right) {
        // Difference we're checking to be the Pth smallest in the list
        const possibleDiff = left + Math.floor((right - left) / 2);
        // check if we can make pairs of number given this difference
        if (canFormPairs(possibleDiff)) {
            right = possibleDiff;
        } else {
            left = possibleDiff + 1;
        }
    }
    return left; // return the minimum?
};