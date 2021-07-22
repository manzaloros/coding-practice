/*
  i: arr of nums and num that rep. a length of subsequence
  o: string "yes" or "no". bool rep. if array can be partitioned with the provided rules

  each element in subarray occurs once
  all numbers distinct
  elements having same values MUST be in different subsequences
*/

// Space: O(n) for map
// Time: O(n) for making map
const solve = (nums, k) => {
  let answer = 'Yes';
  // If you can't evenly divide the subsequence, it won't work
  if (nums.length % k !== 0) answer = 'No';

  // track occurences of numbers
  const occurences = new Map();
  nums.forEach((num) => {
    if (!occurences.has(num)) occurences.set(num, 0);

    occurences.set(num, occurences.get(num) + 1);
  });

  // If a number appears more than the number of subarrays you need to
  // partition, you won't be able to make all the partitions with distinct numbers
  occurences.forEach((occurence, num) => {
    if (occurence > nums.length / k) answer = 'No';
  });

  return answer;
};

// solve([1, 2, 2, 3], 3);
solve([1, 2, 3, 4], 2);
