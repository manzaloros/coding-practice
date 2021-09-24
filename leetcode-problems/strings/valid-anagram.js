/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(n log n) time, O(n) space for arrays
let isAnagramSort = function (s, t) {
  const comparator = (a, b) => (a < b ? -1 : 1);
  return s.split('').sort(comparator).join('') === t.split('').sort(comparator).join('');
};

const isAnagramArray = (s, t) => {
  const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

  const sChars = Array(26).fill(0);
  const tChars = Array(26).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    sChars[getCode(s[i])] += 1;
  }

  for (let i = 0; i < t.length; i += 1) {
    tChars[getCode(t[i])] += 1;
  }

  return sChars.map((count, i) => count === tChars[i]).reduce((a, b) => a && b);
};

const isAnagram = (s, t) => {
  /*
    Use hash table to track frequencies of characters. Don't use two tables,
    just decrement nums from the table for the second string and check at the
    end that all the values are 0.
  */
  const freq = new Map();

  const iterate = (string, callback) => {
    for (let i = 0; i < string.length; i += 1) {
      callback(string[i]);
    }
  };

  iterate(s, (char) => {
    freq.set(char, (freq.get(char) || 0) + 1);
  });

  iterate(t, (char) => {
    freq.set(char, freq.get(char) - 1);
  });

  return Array.from(freq).every(([char, count]) => count === 0);
};

isAnagram('anagrar', 'nagaram');
