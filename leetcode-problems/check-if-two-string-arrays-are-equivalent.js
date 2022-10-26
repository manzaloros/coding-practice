/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

// O(word1.length), O(word1.length) space
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};

// O(1) space
const arrayStringsAreEqual = (w1, w2) => {
  let [wordIndex1, wordIndex2, chIndex1, chIndex2] = [0,0,0,0];
  let areStringsEqual = true;
  
  while (areStringsEqual) {
    let [char1, char2] = [w1[wordIndex1][chIndex1], w2[wordIndex2][chIndex2]];
    
    if (char1 !== char2) {
      areStringsEqual = false;
      break;
    }
    
    chIndex1 += 1;
    chIndex2 += 1;
    
    // If either character index is longer than the current word, go to the next
    // element in the array
    if (chIndex1 > w1[wordIndex1].length - 1) {
      wordIndex1 += 1;
      chIndex1 = 0;
    }
    
    if (chIndex2 > w2[wordIndex2].length - 1) {
      wordIndex2 += 1;
      chIndex2 = 0;
    }
    
    // if we got this far and the lengths match we know the words are the same
    if (wordIndex1 === w1.length && wordIndex2 === w2.length) break;
    
    // if we got this far and one of the lengths doesn't match we know they aren't the same
    if (wordIndex1 === w1.length || wordIndex2 === w2.length) {
      areStringsEqual = false;
    }
  }
  
  return areStringsEqual;
}
