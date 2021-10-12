let findAnagrams = function (s, p) {
  let [start, end] = [0, 0];

  const makeFreq = (map, char) => {
    map.set(char, (map.get(char) || 0) + 1);
    return map;
  };

  const map = p.split('').reduce(makeFreq, new Map());
  let counter = map.size;
  const result = [];
  /*
  Expand window. If you add a char that's in your map, decrease it's count and the count of p
  chars not in the window if it's count is 0.

  If your window includes all characters of p, shrink the window and record the
  start index if the end - start is ever the size of p meaning it's an anagram
  and there are no extraneous characters in it
*/
  while (end < s.length) {
    const endChar = s[end];

    if (map.has(endChar)) {
      map.set(endChar, map.get(endChar) - 1);
    }

    if (map.get(endChar) === 0) counter -= 1;

    // Increment end here so that when you do end - start later to match the
    // length of p, you will have the right num and not off by one
    end += 1;

    while (counter === 0) {
      const startChar = s[start];

      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1);
      }

      if (map.get(startChar) > 0) counter += 1;

      if (end - start === p.length) result.push(start);

      start += 1;
    }
  }

  return result;
};
