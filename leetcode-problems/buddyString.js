/*

Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".



Example 1:

Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.
Example 2:

Input: A = "ab", B = "ab"
Output: false
Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
Example 3:

Input: A = "aa", B = "aa"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.
Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
Example 5:

Input: A = "", B = "aa"
Output: false


Constraints:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist of lowercase letters.

*/

const buddyStrings = (a, b) => {
  // if (a.length !== b.length) return false;

  // if (a !== b) {
  //   let [count, first, second] = [0, 'a', 'a'];

  //   for (let i = 0; i < a.length; i += 1) {
  //     if (a[i] === b[i]) continue;
  //     if (count >= 2) return false;
  //     if (count === 0) {
  //       first = a[i];
  //       second = b[i];
  //       count += 1;
  //       continue;
  //     }
  //     if (a[i] !== second || b[i] !== first) return false;
  //     count += 1;
  //   }
  //   return count === 2;
  // }

  // if (a.length > 26) return true;
  // let freq = new Array(26).fill(0);
  // const array1 = a.split("");
  // for (let i = 0; i < array1.length; i += 1) {
  //   const char = array1[i].charCodeAt();
  //   const aCode = 'a'.charCodeAt();
  //   // any character.charCodeAt() - 'a'.charCodeAt() gives you position of character in alphabet
  //   // if a character is repeated, return true
  //   if (freq[char - aCode] === 1) return true;
  //   freq[char - aCode] = 1;
  // }
  // return false;

  if (a.length !== b.length) return false;
  const array1 = a.split("");
  let [count, first, second] = [0, 'a', 'a'];
  if (a !== b) {
    for (let i = 0; i < array1.length; i += 1) {
      if (a[i] === b[i]) continue;
      if (count >= 2) return false;
      if (count === 0) {
        first = a[i];
        second = b[i];
        count += 1;
        continue;
      }
      if (a[i] !== second || b[i] !== first) return false;
      count += 1;
    }
    return count === 2;
  }

  const letterTracker = new Array(26).fill(0);
  for (let i = 0; i < a.length; i += 1) {
    const aCode = 'a'.charCodeAt();
    const letterCode = a[i].charCodeAt();
    // If you have a repeated letter, you automatically know that swapping it will fulfill condition
    if (letterTracker[letterCode - aCode] === 1) return true;
    letterTracker[letterCode - aCode] = 1;
  }
  return false;

}

// console.log(buddyStrings("aaaaaaabc", "aaaaaaacb")); // true
// console.log(buddyStrings("ba", "ab")); // true
// console.log(buddyStrings("aabb", "aabb")); // true
// console.log(buddyStrings("abcaa", "abcbb")); // false
console.log(buddyStrings("aaab", "aaab")); // true