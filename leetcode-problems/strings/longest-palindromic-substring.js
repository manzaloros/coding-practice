let longestPalindrome = function (s) {
  let longest = '';

  // expanding palindrome from the center
  const checkPdrome = (i, j) => {
    // While i and j are in bounds and the chars at i and j are the same, keep
    // expanding palindrome outwards from the center
    while (i >= 0 && j < s.length && (s[i] === s[j])) {
      if ((j - i + 1) > longest.length) longest = s.substring(i, j + 1);

      j += 1;
      i -= 1;
    }
  };

  s.split('').forEach((char, i) => {
    checkPdrome(i, i);
    checkPdrome(i, i + 1);
  });

  return longest;
};

longestPalindrome('babad');
