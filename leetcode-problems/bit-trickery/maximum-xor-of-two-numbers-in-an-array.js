/* eslint-disable no-bitwise */
/**
 * @param {number[]} nums
 * @return {number}
 */
// Think of example with [3, 10, 5, 25, 2, 8]
let findMaximumXOR = function (nums) {
  const maxNum = nums.reduce((max, curr) => (max < curr ? curr : max));

  /* unsigned right shift.
     always returns a positive number.
     Only needed if you're dealing with negative number or non-numeric number
  // const toBinary = (num) => (num >>> 0).toString(2);
  */
  const toBinary = (num) => num.toString(2);

  // Length of binary representation of max number of array
  const { length: maxLength } = toBinary(maxNum);

  /*
    left shift shifts the first operand that many bits to the left.
    The bitmask is 1 shifted maxLength to the left, like:
    if maxLength is 5, 1 << 5 in binary is 100000. 1 with 5 zeros to the left.
    Keep in mind the bitmask here is in decimal, so 1 << 5 is actually 32.
  */
  const bitmask = 1 << maxLength;

  /*
    Make an array of each num as a string in binary.
    Bitwise OR (|) returns 1 when either or both bits are 1.

    Apply the bitmask to each num. Example, bitmask is 32 num is 3:
    Decimal: 32 | 3                         binary: 100000 | 11
                                          binary: 100011

    Finally, the substring(1) chops off the 1 at the beginning of the resultant
    num:
    100011 becomes 00011.

    So, with the bitmask applied, the number 3, which started at 11, becomes 00011.
  */
  const stringNums = nums.map((num) => toBinary(bitmask | num).substring(1));

  const trie = new Map();

  // Result we will build and return at the end
  let maxXor = 0;

  stringNums.forEach((num) => {
    let node = trie;
    let xorNode = trie;
    let currXor = 0;

    num.split('').forEach((bit) => {
      // construct trie for each bit
      if (!node.has(bit)) node.set(bit, new Map());
      node = node.get(bit);

      // if it's a 1, turn it off, if it's a 0, turn it on.
      let toggledBit = bit === '1' ? '0' : '1';
      /*
        Try to go down the toggled (opposite) bit if possible.

        Add 1 bit at the end of current XOR.

        To maximize XOR, choose oppisite bit whenever possible. So, if current
        bit is a 1, try to choose a 0. If current is a 1, try to choose a 0.

        If there isn't an opposite bit, just choose the same bit as the one
        you're on.
      */
      if (xorNode.has(toggledBit)) {
        currXor = (currXor << 1) | 1;
        xorNode = xorNode.get(toggledBit);
      } else {
        /*
          currXor = currXor << 1

          Add 0 at the end of current XOR.
        */
        currXor <<= 1;
        xorNode = xorNode.get(bit);
      }
    });

    maxXor = Math.max(maxXor, currXor);
  });

  return maxXor;
};

// findMaximumXOR([3, 10, 5, 25, 2, 8]);
findMaximumXOR([3, 2]);
