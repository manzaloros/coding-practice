/**
 * @param {number[]} nums
 * @return {number[]}

 nums can be negative

 already sorted non-decreasing

 naive n log n:
 iterate and square.

 sort and return

 -------------------
 squares will be positive.

 O(n):
 make buckets Array length (max num)

 for each num of array
   square num and put in bucket

 for each element of buckets
   while element is > 0,
     add element to output array
     elemen -= 1
  retunr output
 */
/**
 * @param {number[]} nums
 * @return {number[]}

 nums can be negative

 already sorted non-decreasing

 naive n log n:
 iterate and square.

 sort and return

 -------------------
 squares will be positive.

 O(n):
 make buckets Array length (max num)

 for each num of array
   square num and put in bucket

 for each element of buckets
   while element is > 0,
     add element to output array
     elemen -= 1
  retunr output
 */
let sortedSquares = function (nums) {
  const { length: n } = nums;

  const result = Array(n);

  let [left, right] = [0, n - 1];

  // This should just be a reverse for loop, too confusing like this:
  // Iterate backwards and make the square the larger of left or right.
  // Basically, because if you had all positive nums that were sorted, you would
  // just be squaring them.
  nums.reverse().forEach((num, i) => {
    let square;

    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = nums[right];
      right -= 1;
    } else {
      square = nums[left];
      left += 1;
    }

    result[n - i - 1] = square * square;
  });

  return result;
};

sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000]);
