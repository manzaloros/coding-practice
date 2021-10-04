/*
  You are given an array a = [8, 9 , 10 , 0] with max value k All values in
  array have this property 0<= value <= k, value>=0 (non-negative)

  You have to sort this array in ascending order a = [0, 8, 9, 10]

  Allowed unlimited space complexity. Use k to your advantage.

  Write code to get Minimum Time Complexity
*/
// O(n + k)
const sortArrayGivenMaxK = (arr, k) => {
  // Make buckets for each num. K+1 because num could be k.
  const buckets = Array(k + 1).fill(0);

  // Mark how many times each num appears, using a bucket
  // O(n)
  arr.forEach((num) => {
    buckets[num] += 1;
  });

  const result = [];
  // loop from 0 to k and depending on their freq. copy that result into result
  // array
  // O(k)
  for (let i = 0; i <= k; i += 1) {
    let frequency = buckets[i];

    if (frequency > 0) {
      while (frequency > 0) {
        result.push(i);

        frequency -= 1;
      }
    }
  }

  return result;
};

sortArrayGivenMaxK([8, 9, 10, 1, 0, 0], 10);
