/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const kmp = (needle) => {
  const n = needle.length;

  const lps = Array(n).fill(0);

  for (let i = 1, len = 0; i < n;) {
    if (needle[i] === needle[len]) {
      lps[i] = len + 1;
      i += 1;
    } else if (len !== 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i += 1;
    }
  }

  return lps;
};

let strStr = function (haystack, needle) {
  const m = haystack.length;
  const n = needle.length;

  if (n === 0) return 0;

  const lps = kmp(needle);

  for (let i = 0, j = 0; i < m;) {
    if (haystack[i] === needle[j]) {
      i += 1;
      j += 1;
    }

    if (j === n) return i - j;

    if (i < m && haystack[i] !== needle[j]) {
      if (j === 0) {
        j = lps[j - 1];
      } else {
        i += 1;
      }
    }
  }

  return -1;
};

strStr('hello', 'll');
