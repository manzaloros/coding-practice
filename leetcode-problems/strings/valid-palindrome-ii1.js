/**
 * @param {string} s
 * @return {boolean}
 */
let validPalindrome = function (s, left = 0, right = s.length - 1, k = 2) {
  // let [left, right] = [0, s.length - 1];
  if (k === 0) return false;

  while (left < right) {
    if (s[left] !== s[right]) {
      const deleteLeft = validPalindrome(s, left + 1, right, k - 1);
      const deleteRight = validPalindrome(s, left, right - 1, k - 1);

      return deleteLeft || deleteRight;
    }

    left += 1;
    right -= 1;
  }

  return true;
};
