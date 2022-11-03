/**
 * @param {string[]} words
 * @return {number}
 
 gg has to go in middle
 gg,gg
 
 lc has to have cl
 
 ggaaaagg
 
 {
 gg:2
 aa:2
 }
 
 make all subsets, iterate subsets, return length of longest palindrome
 
 if (mid === 1) {
   'clclaalclc'
   The palindrome has an odd number of one of the words in it
 } else if (mid === 0) {
   'lccl'
   'aaaa'
   Palindrome has even number of words, both word and word.reverse exist
 }
 
 if the word has two same letters ('aa') and count is odd it should be placed in the middle of the palindrome.
 Mid will become 1. Add (count - 1) to result
 
 if the word with two same letters count is even, increase the resulting length by the count. 
 
 else if the word AND it's reverse exist ('lc', 'cl') add the minimum count of the word and reverse to result
 */

// O(n)
var longestPalindrome = function(words) {
    const counts = words.reduce((map, word) => {
        map.set(word, map.get(word) ? map.get(word) + 1 : 1)
        return map;
    }, new Map())
    
    let result = 0;
    let mid = 0;
    
    counts.forEach((count, word) => {
        const reversed = word.split('').reverse().join('')
        const hasReversedWord = counts.has(reversed);
        if (word[0] === word[1]) {
            if (count % 2 === 0) result += count
            else {
                result += count - 1;
                mid = 1;
            }
        } else if (hasReversedWord) {
          const reversedCount = counts.get(reversed);
          result += Math.min(count, reversedCount)           
        } 
    })
    
    return (result + mid) * 2;
};
