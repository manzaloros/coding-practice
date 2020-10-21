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
  let [i, j] = [0, length - 1];
  /*
  Reverse entire sentence
   */
  while (i < j) {
    const temp = m[i];
    m[i] = m[j];
    m[j] = temp;
    i += 1;
    j -= 1;
  }
  i = 0;
  /*
  Reverse each individual word
  */
  while (i < length) {
    let temp = [];
    while (m[i] !== ' ' && i < length) {
      temp.unshift(m[i]);
      i += 1
    }
    m.splice(i - temp.length, temp.length, ...temp);
    i += 1;
  }
}
// const message = ['s', 't', 'e', 'a', 'l', ' ',
//   'p', 'o', 'u', 'n', 'd', ' ',
//   'c', 'a', 'k', 'e'];
let message = 'hello from zach m'.split('')