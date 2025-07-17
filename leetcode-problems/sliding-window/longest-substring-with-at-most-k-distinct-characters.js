/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = (s, k) => {
  if (k === 0) return 0;

  const map = new Map();

  let [left, right] = [0, 0];
  let longest = 0;

  while (right < s.length) {
    // add left char to map, or update
    const char = s[right];

    if (!map.has(char)) map.set(char, 0);
    map.set(char, map.get(char) + 1);

    while (map.size > k) {
      const leftChar = s[left];

      if (map.get(leftChar) === 1) {
        map.delete(leftChar);
      } else {
        map.set(leftChar, map.get(leftChar) - 1);
      }

      left += 1;
    }
    longest = Math.max(longest, (right - left) + 1);
    right += 1;
  }

  return longest;
};

lengthOfLongestSubstringKDistinct('aba', 1);
