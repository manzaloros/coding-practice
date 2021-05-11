/* Super Palindromes Let's say a positive integer is a super-palindrome if it is
a palindrome, and it is also the square of a palindrome.

Given two positive integers left and right represented as strings, return the
number of super-palindromes integers in the inclusive range [left, right].

Example 1:

Input: left = "4", right = "1000" Output: 4 Explanation: 4, 9, 121, and 484 are
superpalindromes.  Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26
is not a palindrome.  Example 2:

Input: left = "1", right = "2" Output: 1

Constraints:

1 <= left.length, right.length <= 18 left and right consist of only digits.
left and right cannot have leading zeros.  left and right represent integers in
the range [1, 1018].  left is less than or equal to right.  */

/*
Because the upper bound of numbers is 10^18, the brute force technique will not
work, so we have to find a way to decrease the number of iterations.
*/
const isPalindrome = (string) => {
  for (let i = 0, j = string.length - 1; i < j; i += 1, j -= 1) {
    if (string.charAt(i) !== string.charAt(j)) return false;
  }
  return true;
};

const superpalindromesInRange = (left, right) => {
  let result = left <= 9 && right >= 9 ? 1 : 0;

  for (let i = 1; i < 19684; i += 1) {
    const num = i.toString(3);
    if (isPalindrome(num)) {
      const square = BigInt(num) * BigInt(num);
      if (square > right) return result;
      if (square >= left && isPalindrome(square.toString())) result += 1;
    }
  }

  return result;
};

console.log(superpalindromesInRange('1', '2'));
