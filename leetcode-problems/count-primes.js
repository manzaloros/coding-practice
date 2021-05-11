/* Count Primes Count the number of prime numbers less than a non-negative
number, n.

Example 1:

Input: n = 10 Output: 4 Explanation: There are 4 prime numbers less than 10,
they are 2, 3, 5, 7.  Example 2:

Input: n = 0 Output: 0 Example 3:

Input: n = 1 Output: 0

Constraints:

0 <= n <= 5 * 106 */

// Using Sieve of Eratosthenes
/*
  TC: O(sqrt(n) log(log(n)))
  SC: O(n)
*/
const countPrimes = (n) => {
  const sieve = new Uint8Array(n).fill(true);

  // starting from i * i because Math.sqrt(n) is expensive
  for (let i = 2; i * i < n; i += 1) {
    if (sieve[i]) {
      // mark out multiples of the found prime, as those composites cannot be
      // prime
      for (let j = i * i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i < n; i += 1) {
    if (sieve[i]) count += 1;
  }

  return count;
};

const countPrimesOptimized = (n) => {
  // If n is 2, there are no primes less than 2
  if (n < 3) return 0;

  // Only half the numbers below n could be primes since half are even and thus
  // are not prime
  let count = Math.floor(n / 2);

  // Truth means odd and composite, NOT prime
  const sieve = new Uint8Array(n).fill(false);

  // Start at 3, increment by 2 to skip evens
  for (let i = 3; i * i < n; i += 2) {
    // If count hasn't been decremented yet for this composite odd, meaning it's
    // a prime!,
    if (!sieve[i]) {
      // For each odd composite of prime i, mark them as composite if not
      // already marked
      // All odd + even are odd
      // We skip evens because we initialized count to n / 2
      for (let j = i * i; j < n; j += 2 * i) {
        if (!sieve[j]) {
          // Subtract from count when another composite is formed
          count -= 1;
          sieve[j] = true;
        }
      }
    }
  }

  return count;
};

console.log(countPrimes(5 * (10 ** 6)));
console.log(countPrimes(10));
console.log(countPrimes(4));
console.log(countPrimesOptimized(5 * (10 ** 6)));
console.log(countPrimesOptimized(3));
