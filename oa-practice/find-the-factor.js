/*
 * Complete the 'pthFactor' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER n
 *  2. LONG_INTEGER p
 */

/*
    input: number output: number rep. pth element of the factors of the input OR
    0. p is t indexed.

    naive approach:  counter starts at 0 if the counter === p, stop loop and
    return index.  iterate from 1 to n, if the current index % n === 0, add one
    to a counter.

    The naive approach exceeds the time limit.

    Somehow you need to reduce the number of repeat calculations. For instance,
    for n = 20, you have the prime factors 2 3 (2 * 2) (2 * 3) (2 * 2 * 2) (3 *
    2 * 2) (3 * 2 * 2 * 2) 1 is always a factor, even though it isn't prime,
    because we are guaranteed to start at 1 with the input.  You can see that
    the number 2 and 3 are repeated several times for each factor.

    Iterate from 1 to the square root of your number, since you can't have a
    factor bigger (including it's analog) that's bigger than square root of n.
    Like, for 100 when you get to factor = 10 you will have already seen
    [1,2,4,5] and [100,50,25,20] so you can't go past 10 * 10. This helps lower
    the time complexity.

    Each time you find a factor, you can also add it's analog to the Set, like
    if you find 2 is a factor of 20, you can also add 10 to your Set because it
    will also be a factor.

    Use a set to keep track of factors so that you don't add any duplicates like
    10 * 10 is a factor of 100.

    If your p-value is greater than the number of factors you found, just return
    0.

    Take your Set of factors and make a list. Sort the list so you can return
    the pth value, which is 1 indexed, so subtract 1 from p to get the correct
    position.

    If I had more time I would like to figure out how to add the factors in
    order, or track their order as I add them to the set, so I don't have to
    sort the numbers at the end.
*/

// Time: O(n log n) because of the sort
// Space: O(square root of n)
function pthFactor(n, p) {
  // Space: O(square root of n)
  const factors = new Set();

  // Time: O(square root of n)
  // I think i * i is faster than Math.sqrt(n)
  for (let factor = 1; factor * factor <= n; factor += 1) {
    if (n % factor === 0) {
      // Add factor and it's analog
      const analog = n / factor;

      factors.add(factor);
      factors.add(analog);
    }
  }
  // If the desired factor doesn't exist return 0
  if (p > factors.size) return 0;

  // Time: O(n log n)
  // Space: O(square root of n)
  const factorsSorted = Array.from(factors);
  factorsSorted.sort((a, b) => (a < b ? -1 : 1));

  // return index (0 indexed) that you need
  return factorsSorted[p - 1];
}

pthFactor(10, 5);
// pthFactor(24);
// pthFactor(1, 1);
// pthFactor(10, 3); // 5
// pthFactor(1048576, 12); // 2048
// pthFactor(67280421310721, 2); // that long input num
// pthFactor(22876792454961, 28); // should be 7625597484987
// pthFactor(866421317361600, 26880); // that long input number?
// pthFactor(100000000000000, 200); // 16 with a lot of 0s?
