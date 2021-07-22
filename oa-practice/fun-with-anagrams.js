const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 *
 */

/*
input: array of strings
output: array of strings with any later anagrams removed, and THEN sorted
constraints: array could be length 0.

Naive approach: For each string in array check every other string if it's an anagram
by iterating through every character and matching against a hash map of counts to find if
they are anagrams. If they are, remove the later occurence. Finally sort and return the remaining
list.
Naive complexity: Time: O(n^3) for 2 nested loops, Space: O(n^2) for hash map of every word.

Better plan: Create a map of character codes so that you can check if
you already have seen an anagram. Then, add to output array every first
occurence of word and skip it's anagrams.
*/

// Time: O((number of words) ^ 2)
// Space: O(number of words)
function funWithAnagrams(text) {
  // store sums of character codes in map to determine anagrams
  const characterCodeSums = new Map();

  // Store words in array
  const removedAnagrams = [];

  // Time: O(n^2) for nested loop
  // Space: O(n)
  // Sum each character of each word and add to map only if map doesn't have it's
  // anagram, then add the word to the output array.
  for (let i = 0; i < text.length; i += 1) {
    const word = text[i];
    let codeSum = 0;
    for (let j = 0; j < word.length; j += 1) {
      const characterCode = word.charCodeAt(j);

      codeSum += characterCode;
    }

    if (!characterCodeSums.has(codeSum)) {
      characterCodeSums.set(codeSum, i);
      removedAnagrams.push(word);
    }
  }

  // Sort the output
  // Time: O(n log(n))
  removedAnagrams.sort((word1, word2) => (word1 < word2 ? -1 : 1));
  return removedAnagrams;
}

funWithAnagrams(['code', 'aaagmnrs', 'anagrams', 'doce', 'ocde']);
funWithAnagrams(['a', 'a']);

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const textCount = parseInt(readLine().trim(), 10);

  let text = [];

  for (let i = 0; i < textCount; i++) {
    const textItem = readLine();
    text.push(textItem);
  }

  const result = funWithAnagrams(text);

  ws.write(`${result.join('\n')}\n`);

  ws.end();
}
