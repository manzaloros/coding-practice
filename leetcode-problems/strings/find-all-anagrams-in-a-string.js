/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// TLE
let findAnagramsTooSlow = function (s, p) {
  const pSorted = p.split('').sort((a, b) => (a < b ? -1 : 1)).join('');
  const result = [];

  s.split('').forEach((char, i) => {
    const current = s.substr(i, p.length).split('').sort((a, b) => (a < b ? -1 : 1)).join('');

    if (current === pSorted) result.push(i);
  });

  return result;
};

// O(p.length ) space, O(s.length) time
let findAnagrams = function (s, p) {
  const result = [];
  const map = new Map();

  p.split('').forEach((char) => map.set(char, (map.get(char) || 0) + 1));

  /*
    Keep a frequency map of characters of p. slide a window across s, and
    whenever you find a char that is in your map, you decrement its frequency.
    If the frequency is ever 0 in the map, that means you current window has ALL
    occurences of that particular char in it, so you decrement the counter.

    If your counter is ever 0, that means you have every single occurence of p
    chars in your current window, so you then shrink your window from the start,
    incrementing along the way if you ever find a character in your map that you
    will lose. if the size of your window is ever the length of your p string,
    you know that every single character of p occurs in the window and there are
    no extra chars, so the window MUST be an anagram of p, so you push the start
    index to the result array.
  */
  let numOfPCharsNotInWindow = map.size;
  let [start, end] = [0, 0];

  while (end < s.length) {
    const endChar = s[end];

    if (map.has(endChar)) {
      map.set(endChar, map.get(endChar) - 1);

      if (map.get(endChar) === 0) numOfPCharsNotInWindow -= 1;
    }

    end += 1;

    while (numOfPCharsNotInWindow === 0) {
      const startChar = s[start];

      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1);

        if (map.get(startChar) > 0) numOfPCharsNotInWindow += 1;
      }

      if (end - start === p.length) result.push(start);

      start += 1;
    }
  }

  return result;
};
