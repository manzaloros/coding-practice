//  0 < input < 10^9

/* 
   This problem can also be done bitwise. 
   Here the trick is that you sort both the input number and any power of 2 less than 10^9
   If one of the powers of 2 matches the input, you know you found a match
*/

const reorderedPowerOf2: boolean = function (n: number) {
  // make a string from the number and sort the digits
  const numWithSortedDigits = String(n).split('').sort().join('');

  // create each power of 2, sort its digits, and see if it matches s
  // Why 30? because that is the largest power of 2 that could match our input
  // 10^9 === 1000000000
  // 2^30 === 1073741824
  for (let i = 0; i <= 30; i += 1) {
    const powerOfTwoSorted = String(Math.pow(2, i)).split('').sort().join('');
    if (powerOfTwoSorted === numWithSortedDigits) return true;
  }

  return false;
};
