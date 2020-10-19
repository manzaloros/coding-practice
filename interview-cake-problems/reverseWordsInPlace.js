/* Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

For example:

  const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

JavaScript
When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
 */

const reverseWords = (m) => {
  const length = m.length;
  let [previousWordBeginningIndex, previousWordEndIndex, i, j] = [0, length, 0, length];
  let temp = [];
  let temp2 = [];
  while (i < j) {
    while (m[i] !== ' ') {
      temp.push(m[i++]);
    }
    while (m[j] !== ' ') {
      j -= 1;
    }
    temp2 = m.slice(j + 1, previousWordEndIndex);
    if (i > j) break;
    const wordDifference = temp2.length - temp.length;
    m.splice(previousWordBeginningIndex, temp.length, ...temp2);
    m.splice(j + wordDifference + 1, temp2.length, ...temp);
    previousWordBeginningIndex = i + 1;
    j += (wordDifference - 1)
    previousWordEndIndex = j + 1;
    i += (wordDifference + 1);
    temp = [];
    temp2 = [];
  }
}
// const message = ['s', 't', 'e', 'a', 'l', ' ',
//   'p', 'o', 'u', 'n', 'd', ' ',
//   'c', 'a', 'k', 'e'];
let message = 'hello from zach m'.split('')
console.log(reverseWords(message))