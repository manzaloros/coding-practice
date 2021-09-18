let countSubstrings = function (s) {
  const isPdrome = (i, j) => {
    for (let index = i; index < j; index += 1, j -= 1) {
      if (s[index] !== s[j]) return false;
    }
    return true;
  };

  let num = 0;
  for (let i = 0; i < s.length; i += 1) {
    for (let j = i; j < s.length; j += 1) {
      if (isPdrome(i, j)) num += 1;
    }
  }

  return num;
};

// let countSubstringsDP = function (s) {
//   const backtrack = (start, end) => {
//     if (start === end) return 1;

//     if (start === end + 1) {
//       return s[start] === s[end] ? 1 : 0;
//     }

//     let num = 0;

//     let i = start; let
//       j = end;

//     while (i < j) {
//       const equal = s[start] === s[end];
//       const smaller = backtrack(i + 1, j - 1);

//       if (equal && (smaller > 0)) {
//         num += smaller;
//       }

//       i += 1;
//       j -= 1;
//     }

//     return num;
//   };

//   return backtrack(0, s.length - 1);
// };

// O(n^2)
const countSubstringsBetter = (s) => {
  if (s.length === 0) return 0;
  let count = 0;
  const inBounds = (i, j) => i >= 0 && j < s.length;

  const checkPdrome = (start, end) => {
    // Adds one character at a time on either side of the string, expanding it.
    // Basically, if you have a valid palindrome and surround it with two
    // matching characters, it will still be a valid palindrome.

    // Make sure to check the even lengths (starting at 2) and the odd lengths
    // (starting at 1). Since same two characters side by side are also
    // palindromes, along with just 1 character by itself.
    while (inBounds(start, end) && s[start] === s[end]) { // check if palindrome
      count += 1;
      start -= 1; // trace left direction
      end += 1; // trace right direction
    }
  };

  s.split('').forEach((char, i) => {
    checkPdrome(i, i); // check odd length
    checkPdrome(i, i + 1); // check even length
  });

  return count;
};

// countSubstrings('abc');
countSubstringsBetter('aaa');
