/* Given two non-negative integers, num1 and num2 represented as string, return
the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large
integers (such as BigInteger). You must also not convert the inputs to integers
directly.

Example 1:

Input: num1 = "11", num2 = "123" Output: "134" Example 2:

Input: num1 = "456", num2 = "77" Output: "533" Example 3:

Input: num1 = "0", num2 = "0" Output: "0"

Constraints:

1 <= num1.length, num2.length <= 104 num1 and num2 consist of only digits.  num1
and num2 don't have any leading zeros except for the zero itself. */

const addStrings = (num1, num2) => {
  let result = '';

  let carry = 0;
  // Start from end of string but beginning of number
  let [i, j] = [num1.length - 1, num2.length - 1];

  while (i >= 0 || j >= 0) {
    let digit1 = i >= 0 ? +num1[i] : 0;
    let digit2 = j >= 0 ? +num2[j] : 0;

    // Can only put up to 9 in one spot. Add the previous carry over value.
    let value = (digit1 + digit2 + carry) % 10;
    // Determine carry over by getting the second digit of the two digit sum of
    // (digits and previous carry)
    carry = Math.floor((digit1 + digit2 + carry) / 10);

    // Add the created value string in FRONT of the result
    result = String(value) + result;

    i -= 1;
    j -= 1;
  }

  // Add any leftover carry to the result
  if (carry !== 0) result = String(carry % 10) + result;

  return result;
};

// addStrings('321', '11');
addStrings('1', '9');
