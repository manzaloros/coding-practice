const findLongestSubstring = (str,
  [currentWindowSeenLetters, windowStart, maxWindowLengthSoFar] = [{}, 0, 0]) => {
  for (let i = 0; i < str.length; i += 1) {
    const currentLetter = str[i];
    if (currentWindowSeenLetters.hasOwnProperty(currentLetter)) {
      windowStart = Math.max(windowStart, currentWindowSeenLetters[currentLetter]);
    }
    maxWindowLengthSoFar = Math.max(maxWindowLengthSoFar, (i - windowStart) + 1);
    currentWindowSeenLetters[currentLetter] = i + 1;
  }
  return maxWindowLengthSoFar;
}

// console.log(findLongestSubstring("thecatinthehat")) //7
// console.log(findLongestSubstring("")) //0
// console.log(findLongestSubstring("rithmschool")) //7
console.log(findLongestSubstring("longestsubstring")) //8