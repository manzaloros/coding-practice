/**
 * Similar to buy and sell stocks 1.
 * 
 * Find the max difference between two elements in an unsorted array. Have to be nums[j] - nums[i]
 * where j > i.
 * 
 * prefix: 6
 * 
 *     i
 * 61245
 */
const maximumDifference = (nums) => {
    const {length } = nums;
    let result = -1;
    let prefix = nums[0];

    for (let i = 1; i < length; i += 1) {
        const curr = nums[i];
        if (curr > prefix) {
            result = Math.max(result, curr - prefix);
        } else {
            prefix = curr;
        }
    }

    return result;
};