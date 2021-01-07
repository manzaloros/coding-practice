/*
Kth Missing Positive Number
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.



Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.


Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
*/

const findKthPositive = (arr, k) => {
  let tracker = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const curr = arr[i];
    while (curr !== (tracker + 1)) {
      tracker += 1;
      k -= 1;
      if (k === 0) return tracker;
    }
    tracker += 1;
  }
  return tracker + k;
}

const arr1 = [2, 3, 4, 7, 11];
console.log(findKthPositive(arr1, 5), "should be 9")

const arr2 = [1, 2, 3, 4];
console.log(findKthPositive(arr2, 2), " should be 6");

const arr3 = [1, 2];
console.log(findKthPositive(arr3, 1), " should be 3");