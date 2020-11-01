const findLongestSubstring = (str) => {
  let maxLength = 0;
  for (let i = 0; i < str.length; i += 1) {
    let currMax = 0;
    let j = i + 1;
    while (j < str.length) {
      if (str[i] === str[j]) {
        maxLength = Math.max(currMax, maxLength);
        break;
      }
      currMax += 1;
      j += 1;
    }
  }
  return maxLength;
}

console.log(findLongestSubstring("thecatinthehat"))