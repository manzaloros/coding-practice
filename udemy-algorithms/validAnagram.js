/* I: two strings
   O: boolean representing whether the second string is an anagram of the first
   C: O(n) TC. Use a Frequency Counter
   E: Lowercase alphabetical letters
    */

const validAnagram = (string,
  possibleAnagram,
  [letterCounter, possibleAnagramCounter] = [{}, {}]) => {

  if (string.length !== possibleAnagram.length) return false;

  for (let i = 0; i < string.length; i += 1) {
    const [letter1, letter2] = [string[i], possibleAnagram[i]];
    letterCounter[letter1] = (letterCounter[letter1] || 0) + 1;
    possibleAnagramCounter[letter2] = (possibleAnagramCounter[letter2] || 0) + 1;
  }

  for (let letter in letterCounter) {
    if (letterCounter[letter] !== possibleAnagramCounter[letter]) return false;
  }

  return true;

  /* Could also use only 1 frequency counter and for the second loop,
  Decrement the count in the counter each time it matches a letter in
  the second string. Return false if the letter isn't found. */
}

validAnagram('', '');