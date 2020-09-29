/*

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

*/

const wordBreak = (s, wordDict) => {

  const permute = function () {
    return permute;

    function permute(list) {
      return list.length ?
        list.reduce(permutate, []) :
        [[]];
    }

    function permutate(permutations, item, index, list) {
      return permutations.concat(permute(
        list.slice(0, index).concat(
          list.slice(index + 1)))
        .map(concat, [item]));
    }

    function concat(list) {
      return this.concat(list);
    }
  };

  const resultCombinations = [];
  const dictionaryCombinations = permute(wordDict);

  dictionaryCombinations.forEach(dictionary => {
    let wordCopy = s;
    wordDict.forEach((word) => {
      while (wordCopy.includes(word)) {
        wordCopy = wordCopy.replace(word, '');
      }
    });
    resultCombinations.push(wordCopy);
  });

  return wordCopy.includes('');
}