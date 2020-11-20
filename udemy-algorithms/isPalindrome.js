/* Return true if string is palindrome, with recursion */

const isPalindrome = (str, left = 0, right = str.length - 1) => {
  if (str[left] !== str[right]) return false;
  if (left + 1 === right || left === right) return true;
  return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome('booob'))