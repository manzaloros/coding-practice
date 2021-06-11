const lengthOfLongestSubstring = (s) => {
  const chars = Array(128).fill(0);
  let [left, right] = [0, 0];

  let max = 0;

  while (right < s.length) {
    const rChar = s.charCodeAt(right);
    chars[rChar] += 1;

    // if the right side of window is repeated, resize the window until it isn't
    while (chars[rChar] > 1) {
      const lChar = s.charCodeAt(left);
      chars[lChar] -= 1;
      left += 1;
    }

    max = Math.max(max, right - left + 1);

    right += 1;
  }

  return max;
};

const lengthOfLongestSubstring = (s) => {
  const map = new Map();

  let max = 0;

  for (let left = 0, right = 0; right < s.length; right += 1) {
    const char = s[right]
    if (map.has(char)) {
      // only resize window if the char's previous position is within the window
      left = Math.max(map.get(char), left);
    }
    max = Math.max(max, right - left + 1);
    map.set(char, right + 1)
  }

  return max;
};
