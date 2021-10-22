const isKPalindrome = (s, k) => {
  const isPalindrome = (string) => string.split('').reverse().join('') === string;

  const isPalindromeAfterDeleting1Character = (left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        const removeLeft = s.substring(left + 1, right + 1);
        const removeRight = s.substring(left, right);

        return isPalindrome(removeLeft) || isPalindrome(removeRight);
      }

      left += 1;
      right -= 1;
    }

    return true;
  };

  const recurse = (left, right, kLeft) => {
    if (kLeft === 1) return isPalindromeAfterDeleting1Character(left, right);

    // O(n) * 2^n
    while (left < right) {
      if (s[left] !== s[right]) {
        const deleteLeft = recurse(left + 1, right, kLeft - 1);
        const deleteRight = recurse(left, right - 1, kLeft - 1);

        return deleteLeft || deleteRight;
      }

      left += 1;
      right -= 1;
    }

    return true;
  };

  return recurse(0, s.length - 1, k);
};

// isKPalindrome('waxterrfetaw', 2); // true
// isKPalindrome('dsaoo', 2); // false
// isKPalindrome('zach', 2);
isKPalindrome('bob', 0);
