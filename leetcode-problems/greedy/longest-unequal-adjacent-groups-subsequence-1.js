/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}


GREEDY. There is also a DP solution in O(n^2) time.

 i: string[], number[]
 o: string[], rep. longest subsequence of alternating words
 c: groups is binary []. words [] are distinct
 e: 

 consecutive: is one right after the other
 subsequence: elements from the array in the same order with some elements deleted

       i
[a,b,c,d,e,f,g,h,i,k,j,l]

             i
[0,0,0,1,1,1,0,1,0,1,1,1]

Key is to just filter out duplicates, so:

 i     i     i   i   i   i
[000] [111] [0] [1] [0] [1,1,1]
And then we choose the leftmost element (marked here as 'i') from each set of duplicates 
(easier to implement.)

temp=[a,d,g]
res=[]
ls=1
 
 marker for seen element, like 1 or 0.
 let m;
 m = 1
 */


 // o(n)time, o(1) space.
var getLongestSubsequence = function(words, groups) {
  let result = [];
  for (let i = 0; i < words.length; i += 1) {
    if (i === 0 || groups[i] !== groups[i - 1]) {
        result.push(words[i]);
    }
  }

  return result;
};   

// another try:

/**
i: string[] words, number[] groups (only 1 and 0)
o: string[]
c: words are distinct
e: 

select leftmost element from each distinct group

[abcdefghij]

[adghi]   
         i
[000,111,0,1,0]
 */
var getLongestSubsequence = function(words, groups) {
    const ans = [];
    // scan groups, for each group of groups
      // if i === 0 or group !== groups[i - 1]
        // push words[i] to answer

    groups.forEach((group, i) => {
        if (i === 0 || group !== groups[i - 1]) {
            ans.push(words[i])
        }
    })
    // return ans
    return ans;
};