/* Word Ladder II A transformation sequence from word beginWord to word endWord
using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ...
-> sk such that:

Every adjacent pair of words differs by a single letter.  Every si for 1 <= i <=
k is in wordList. Note that beginWord does not need to be in wordList.  sk ==
endWord Given two words, beginWord and endWord, and a dictionary wordList,
return all the shortest transformation sequences from beginWord to endWord, or
an empty list if no such sequence exists. Each sequence should be returned as a
list of the words [beginWord, s1, s2, ..., sk].

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList =
["hot","dot","dog","lot","log","cog"] Output:
[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]] Explanation:
There are 2 shortest transformation sequences: "hit" -> "hot" -> "dot" -> "dog"
-> "cog" "hit" -> "hot" -> "lot" -> "log" -> "cog" Example 2:

Input: beginWord = "hit", endWord = "cog", wordList =
["hot","dot","dog","lot","log"] Output: [] Explanation: The endWord "cog" is not
in wordList, therefore there is no valid transformation sequence.

Constraints:

1 <= beginWord.length <= 5 endWord.length == beginWord.length 1 <=
wordList.length <= 1000 wordList[i].length == beginWord.length beginWord,
endWord, and wordList[i] consist of lowercase English letters.  beginWord !=
endWord All the words in wordList are unique. */

/*
  output: array of arrays of strings rep. ALL the shortest transformation sequences
*/

/*
  Time: O ()
  Space: O(wordList length)
*/
const findLadders = (beginWord, endWord, wordList) => {
  const wordsToTransformations = new Map();

  // make a map of each dictionary word to shortest number of transformations to
  // get to that word from beginWord
  wordList.forEach((word) => {
    wordsToTransformations.set(word, Infinity);
  });

  wordsToTransformations.set(beginWord, 0);

  const queue = [];
  const shortestSequences = [];
  // start queue with first word, and list that starts with the first word
  queue.push([beginWord, [beginWord]]);

  while (queue.length > 0) {
    const [word, sequence] = queue.shift();

    // if you reached the end, add to answer since with BFS it will
    // automatically be shortest path to get there
    if (word === endWord) {
      shortestSequences.push(sequence);
    } else {
      // For each character in the word, try replacing it with all 26 letters
      // (visiting it's neighbors)
      for (let i = 0; i < word.length; i += 1) {
        for (let j = 0; j < 26; j += 1) {
          const letterToTry = String.fromCharCode(j + 97);
          let temp = word.substr(0, i) + letterToTry + word.substr(i + 1);

          // If the temp word isn't the current word and the word is in the dictionary
          if (temp !== word && wordsToTransformations.has(temp)) {
            const { length } = sequence;

            // only add the temp word to the sequence if it's length is less
            // than the previous recorded length
            if (wordsToTransformations.get(temp) >= length) {
              wordsToTransformations.set(temp, length);

              sequence.push(temp);
              // add to queue for processing next, make sure to remove the temp
              // from the current sequence to test any other possibilities with
              // different letters
              queue.push([temp, [...sequence]]);
              sequence.pop();
            }
          }
        }
      }
    }
  }

  return shortestSequences;
};

findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
