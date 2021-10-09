/* Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11 as "1011" in binary, and so on.  Note that except for N = 0, there are no leading zeroes in any binary representation.

The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.  For example, the complement of "101" in binary is "010" in binary.

For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.

Example:
Input: 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

Input: 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

Input: 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.

*/

const bitwiseComplement = (n) => {
  let binary = n.toString(2).split('');
  for (let i = 0; i < binary.length; i += 1) {
    binary[i] = binary[i] === '0' ? '1' : '0'
  }
  return parseInt(binary.join(''), 2);
}

console.log(bitwiseComplement(5))

// Adam Tiller Solution:
/*

var bitwiseComplement = function(N) {
  let pending = 0;
  let result = 0;

  for (let i = 0; i < 32; i++) {
      console.log(`1 << ${i}: `, (1 << i).toString(2));
      console.log(`${1 << i} & ${(5).toString(2)}: `, ((1 << i) & N).toString(2));
    if ((1 << i) & N) {
      result += pending;
      pending = 0;
    } else {
      pending += 1 << i;
      console.log(`1 << ${i}: ${1 << i}`)
      console.log(`pending += ${1 << i}`)
    }
  }

  return N ? result : 1;
};

*/