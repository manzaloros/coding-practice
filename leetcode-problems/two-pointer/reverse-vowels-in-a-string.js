/**
 * @param {string} s
 * @return {string}
 
 convert string to arr
 create vowel set
 
 while i < j
   if char1 isnt in set i += 1
   if char2 isnt in set j -= 1
   
   if char1 is in set and char2 is in set
     swap 
     i += 1
     j -= 1
 
 return arr joined
     
 */

// O(chars.length) time
// O(chars.length) space
var reverseVowels = function(s) {
    const chars = s.split('');
    const vowels = new Set(['a', 'e','i','o', 'u', 'A', 'E', 'I','O', 'U']);
    
    let [i, j] = [0, chars.length - 1];
    
    while (i < j) {
        const [char1, char2] = [chars[i], chars[j]];
        
        if (!vowels.has(char1)) i += 1;
        if (!vowels.has(char2)) j -= 1;
        
        if (vowels.has(char2) && vowels.has(char1)) {
            [chars[i], chars[j]] = [chars[j], chars[i]];
            i += 1;
            j -= 1;
        }
    }
    
    return chars.join('')
};
