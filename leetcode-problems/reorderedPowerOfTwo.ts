// Input > 0 && < 10^9

const reorderedPowerOf2: boolean = function (n: number) {
  // make a string from the number and sort the digits
  const numWithSortedDigits = String(n).split('').sort().join('');

  // create each power of 2, sort its digits, and see if it matches s
  for (let i = 0; i <= 30; i += 1) {
    const powerOfTwoSorted = String(Math.pow(2, i)).split('').sort().join('');
    if (powerOfTwoSorted === numWithSortedDigits) return true;
  }

  return false;
};
